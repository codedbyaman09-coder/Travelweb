const db = require("../db");

exports.getAll = async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM inquiries ORDER BY created_at DESC");
    res.json({ success: true, data: rows });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.getOne = async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM inquiries WHERE id = ?", [req.params.id]);
    if (rows.length === 0) return res.status(404).json({ success: false, message: "Not found" });
    res.json({ success: true, data: rows[0] });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.create = async (req, res) => {
  try {
    const { name, email, phone, message, source } = req.body;
    const [result] = await db.query(
      "INSERT INTO inquiries (name, email, phone, message, source) VALUES (?, ?, ?, ?, ?)",
      [name, email, phone, message, source || 'website']
    );
    res.status(201).json({ success: true, message: "Inquiry received successfully", id: result.insertId });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.updateStatus = async (req, res) => {
  try {
    const { status } = req.body;
    await db.query(
      "UPDATE inquiries SET status=? WHERE id=?",
      [status, req.params.id]
    );
    res.json({ success: true, message: "Status updated successfully" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.delete = async (req, res) => {
  try {
    await db.query("DELETE FROM inquiries WHERE id = ?", [req.params.id]);
    res.json({ success: true, message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
