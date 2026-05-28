const db = require("../db");

const parseValue = (value) => {
  if (typeof value !== "string") return value;
  const trimmed = value.trim();
  if (!trimmed || (!trimmed.startsWith("{") && !trimmed.startsWith("["))) return value;

  try {
    return JSON.parse(trimmed);
  } catch (err) {
    return value;
  }
};

const serializeValue = (value) => {
  if (value === undefined || value === null) return "";
  if (typeof value === "object") return JSON.stringify(value);
  return String(value);
};

exports.getAll = async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM settings");
    const settings = {};
    rows.forEach((row) => {
      settings[row.setting_key] = parseValue(row.setting_value);
    });
    res.json({ success: true, data: settings });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.update = async (req, res) => {
  try {
    const settings = req.body || {};
    for (const [key, value] of Object.entries(settings)) {
      await db.query(
        `INSERT INTO settings (setting_key, setting_value)
         VALUES (?, ?)
         ON DUPLICATE KEY UPDATE setting_value = VALUES(setting_value)`,
        [key, serializeValue(value)]
      );
    }
    res.json({ success: true, message: "Settings updated successfully" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
