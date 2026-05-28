const db = require("../db");

const normalizePageContent = (value) => {
  if (!value) return null;
  return typeof value === "string" ? value : JSON.stringify(value);
};

exports.getAll = async (req, res) => {
  try {
    const includeInactive = req.query.includeInactive === "true";
    const [rows] = await db.query(
      `SELECT * FROM destinations
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
    const [rows] = await db.query("SELECT * FROM destinations WHERE id = ? OR slug = ?", [
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
    const {
      type,
      title,
      slug,
      image_url,
      price,
      days,
      meta_title,
      meta_description,
      meta_keywords,
      status,
      page_content
    } = req.body;

    if (!title || !slug) {
      return res.status(400).json({ success: false, message: "Title and slug are required" });
    }

    const [result] = await db.query(
      `INSERT INTO destinations
        (type, title, slug, image_url, price, days, meta_title, meta_description, meta_keywords, status, page_content)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        type || "destination",
        title,
        slug,
        image_url || null,
        price || null,
        days || null,
        meta_title || null,
        meta_description || null,
        meta_keywords || null,
        status || "active",
        normalizePageContent(page_content)
      ]
    );
    res.status(201).json({ success: true, message: "Created successfully", id: result.insertId });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.update = async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM destinations WHERE id = ?", [req.params.id]);
    if (rows.length === 0) return res.status(404).json({ success: false, message: "Not found" });

    const current = rows[0];
    const payload = { ...current, ...req.body };

    await db.query(
      `UPDATE destinations
       SET type=?, title=?, slug=?, image_url=?, price=?, days=?, meta_title=?,
           meta_description=?, meta_keywords=?, status=?, page_content=?
       WHERE id=?`,
      [
        payload.type || "destination",
        payload.title,
        payload.slug,
        payload.image_url || null,
        payload.price || null,
        payload.days || null,
        payload.meta_title || null,
        payload.meta_description || null,
        payload.meta_keywords || null,
        payload.status || "active",
        normalizePageContent(payload.page_content),
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
    await db.query("DELETE FROM destinations WHERE id = ?", [req.params.id]);
    res.json({ success: true, message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
