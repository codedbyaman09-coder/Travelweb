const db = require("../db");

const stringify = (value, fallback) => {
  if (value === undefined || value === null || value === "") return fallback;
  return typeof value === "string" ? value : JSON.stringify(value);
};

exports.getAll = async (req, res) => {
  try {
    const includeInactive = req.query.includeInactive === "true";
    const [rows] = await db.query(
      `SELECT * FROM itineraries
       ${includeInactive ? "" : "WHERE status = 'active' OR status IS NULL"}
       ORDER BY created_at DESC`
    );
    res.json({ success: true, data: rows });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.getOne = async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM itineraries WHERE id = ? OR slug = ?", [
      req.params.id,
      req.params.id
    ]);
    if (rows.length === 0) return res.status(404).json({ success: false, message: "Not found" });
    res.json({ success: true, data: rows[0] });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.create = async (req, res) => {
  try {
    const { title, slug, days, price, itinerary_details, includes_excludes, images, status, page_content } = req.body;

    if (!title || !slug) {
      return res.status(400).json({ success: false, message: "Title and slug are required" });
    }

    const [result] = await db.query(
      `INSERT INTO itineraries
        (title, slug, days, price, itinerary_details, includes_excludes, images, status, page_content)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        title,
        slug,
        Number(days || 1),
        price || null,
        stringify(itinerary_details, "[]"),
        stringify(includes_excludes, "{}"),
        stringify(images, "[]"),
        status || "active",
        stringify(page_content, null)
      ]
    );
    res.status(201).json({ success: true, message: "Created successfully", id: result.insertId });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.update = async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM itineraries WHERE id = ?", [req.params.id]);
    if (rows.length === 0) return res.status(404).json({ success: false, message: "Not found" });

    const payload = { ...rows[0], ...req.body };

    await db.query(
      `UPDATE itineraries
       SET title=?, slug=?, days=?, price=?, itinerary_details=?, includes_excludes=?,
           images=?, status=?, page_content=?
       WHERE id=?`,
      [
        payload.title,
        payload.slug,
        Number(payload.days || 1),
        payload.price || null,
        stringify(payload.itinerary_details, "[]"),
        stringify(payload.includes_excludes, "{}"),
        stringify(payload.images, "[]"),
        payload.status || "active",
        stringify(payload.page_content, null),
        req.params.id
      ]
    );
    res.json({ success: true, message: "Updated successfully" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.delete = async (req, res) => {
  try {
    await db.query("DELETE FROM itineraries WHERE id = ?", [req.params.id]);
    res.json({ success: true, message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
