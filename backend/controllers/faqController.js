const db = require("../db");

exports.getAll = async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM faqs ORDER BY display_order ASC, created_at DESC");
    res.json({ success: true, data: rows });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.getOne = async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM faqs WHERE id = ?", [req.params.id]);
    if (rows.length === 0) return res.status(404).json({ success: false, message: "Not found" });
    res.json({ success: true, data: rows[0] });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.create = async (req, res) => {
  try {
    const { category, question, answer, display_order, status } = req.body;
    const [result] = await db.query(
      "INSERT INTO faqs (category, question, answer, display_order, status) VALUES (?, ?, ?, ?, ?)",
      [category, question, answer, display_order || 0, status || 'active']
    );
    res.status(201).json({ success: true, message: "Created successfully", id: result.insertId });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.update = async (req, res) => {
  try {
    const { category, question, answer, display_order, status } = req.body;
    await db.query(
      "UPDATE faqs SET category=?, question=?, answer=?, display_order=?, status=? WHERE id=?",
      [category, question, answer, display_order, status, req.params.id]
    );
    res.json({ success: true, message: "Updated successfully" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.delete = async (req, res) => {
  try {
    await db.query("DELETE FROM faqs WHERE id = ?", [req.params.id]);
    res.json({ success: true, message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
