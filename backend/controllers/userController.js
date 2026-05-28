const bcrypt = require("bcryptjs");
const db = require("../db");

exports.getAll = async (req, res) => {
  try {
    const [rows] = await db.query(
      "SELECT id, name, email, role, status, created_at FROM users ORDER BY created_at DESC"
    );
    res.json({ success: true, data: rows });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.updateProfile = async (req, res) => {
  try {
    const userId = req.user.id;
    const { name, email } = req.body;

    if (!name || !email) {
      return res.status(400).json({ success: false, message: "Name and email are required" });
    }

    const [existing] = await db.query(
      "SELECT id FROM users WHERE email = ? AND id != ?",
      [email, userId]
    );

    if (existing.length > 0) {
      return res.status(409).json({ success: false, message: "Email is already used by another admin" });
    }

    await db.query("UPDATE users SET name = ?, email = ? WHERE id = ?", [name, email, userId]);
    res.json({ success: true, message: "Profile updated successfully" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.changePassword = async (req, res) => {
  try {
    const userId = req.user.id;
    const { currentPassword, newPassword } = req.body;

    if (!currentPassword || !newPassword) {
      return res.status(400).json({ success: false, message: "Current password and new password are required" });
    }

    if (newPassword.length < 6) {
      return res.status(400).json({ success: false, message: "New password must be at least 6 characters long" });
    }

    const [rows] = await db.query("SELECT password FROM users WHERE id = ?", [userId]);
    if (rows.length === 0) return res.status(404).json({ success: false, message: "User not found" });

    const isMatch = await bcrypt.compare(currentPassword, rows[0].password);
    if (!isMatch) return res.status(401).json({ success: false, message: "Current password is incorrect" });

    const hashedPassword = await bcrypt.hash(newPassword, 10);
    await db.query("UPDATE users SET password = ? WHERE id = ?", [hashedPassword, userId]);

    res.json({ success: true, message: "Password changed successfully" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const { name, email, role, status } = req.body;
    await db.query(
      "UPDATE users SET name = ?, email = ?, role = ?, status = ? WHERE id = ?",
      [name, email, role || "admin", status || "active", req.params.id]
    );
    res.json({ success: true, message: "User updated successfully" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.delete = async (req, res) => {
  try {
    await db.query("DELETE FROM users WHERE id = ?", [req.params.id]);
    res.json({ success: true, message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
