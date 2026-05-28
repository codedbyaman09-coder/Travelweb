const db = require("../db");

// Get the latest Blog page config
exports.getAll = async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM blog_pages ORDER BY id DESC LIMIT 1");
    if (rows.length > 0) {
      rows.forEach(row => {
        if (typeof row.config === 'string') {
          try {
            row.config = JSON.parse(row.config);
          } catch (e) {
            row.config = {};
          }
        }
      });
    }
    res.json({ success: true, data: rows });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// Create a new Blog page config
exports.create = async (req, res) => {
  try {
    const { config, status } = req.body;
    const configStr = typeof config === 'string' ? config : JSON.stringify(config || {});
    const [result] = await db.query(
      "INSERT INTO blog_pages (config, status) VALUES (?, ?)",
      [configStr, status || 'active']
    );
    res.status(201).json({ success: true, message: "Created successfully", id: result.insertId });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// Update an existing Blog page config
exports.update = async (req, res) => {
  try {
    const { id } = req.params;
    const { config, status } = req.body;
    
    let query = "UPDATE blog_pages SET ";
    let params = [];
    
    if (config !== undefined) {
      const configStr = typeof config === 'string' ? config : JSON.stringify(config);
      query += "config=?, ";
      params.push(configStr);
    }
    if (status !== undefined) {
      query += "status=?, ";
      params.push(status);
    }
    
    query = query.slice(0, -2) + " WHERE id=?";
    params.push(id);

    await db.query(query, params);
    res.json({ success: true, message: "Updated successfully" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// Delete a Blog page config
exports.remove = async (req, res) => {
  try {
    const { id } = req.params;
    await db.query("DELETE FROM blog_pages WHERE id = ?", [id]);
    res.json({ success: true, message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
