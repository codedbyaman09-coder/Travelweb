const db = require("../db");

exports.getAll = async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM yogas ORDER BY display_order ASC, created_at DESC");
    res.json({ success: true, data: rows });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.getOne = async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM yogas WHERE id = ?", [req.params.id]);
    if (rows.length === 0) return res.status(404).json({ success: false, message: "Not found" });
    res.json({ success: true, data: rows[0] });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.create = async (req, res) => {
  try {
    const { type, title, description, image, display_order } = req.body;
    const [result] = await db.query(
      "INSERT INTO yogas (type, title, description, image, display_order) VALUES (?, ?, ?, ?, ?)",
      [type, title, description, image, display_order || 0]
    );
    res.status(201).json({ success: true, message: "Created successfully", id: result.insertId });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.update = async (req, res) => {
  try {
    const { type, title, description, image, display_order } = req.body;
    await db.query(
      "UPDATE yogas SET type=?, title=?, description=?, image=?, display_order=? WHERE id=?",
      [type, title, description, image, display_order, req.params.id]
    );
    res.json({ success: true, message: "Updated successfully" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.delete = async (req, res) => {
  try {
    await db.query("DELETE FROM yogas WHERE id = ?", [req.params.id]);
    res.json({ success: true, message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
