const db = require("../config/db");

// Get all contact page configs (or active one)
exports.getAll = async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM contact_pages ORDER BY id DESC");
    if (rows.length > 0) {
      // Parse the JSON config
      const data = rows.map(row => {
        let parsedConfig = {};
        try {
          parsedConfig = JSON.parse(row.config);
        } catch(e) {}
        return {
          id: row.id,
          status: row.status,
          config: parsedConfig,
          created_at: row.created_at,
          updated_at: row.updated_at
        };
      });
      res.status(200).json({ success: true, data });
    } else {
      res.status(200).json({ success: true, data: [] });
    }
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// Create a new contact page config
exports.create = async (req, res) => {
  try {
    const { config, status } = req.body;
    const configStr = typeof config === 'string' ? config : JSON.stringify(config || {});
    const stat = status || 'active';

    const [result] = await db.query(
      "INSERT INTO contact_pages (config, status) VALUES (?, ?)",
      [configStr, stat]
    );

    res.status(201).json({ 
      success: true, 
      message: "Contact page configuration created successfully",
      id: result.insertId 
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// Update an existing contact page config
exports.update = async (req, res) => {
  try {
    const { id } = req.params;
    const { config, status } = req.body;
    
    const configStr = typeof config === 'string' ? config : JSON.stringify(config || {});

    // If status is provided, update both, else just config
    if (status) {
      await db.query(
        "UPDATE contact_pages SET config = ?, status = ? WHERE id = ?",
        [configStr, status, id]
      );
    } else {
      await db.query(
        "UPDATE contact_pages SET config = ? WHERE id = ?",
        [configStr, id]
      );
    }

    res.status(200).json({ success: true, message: "Contact page configuration updated successfully" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// Delete a contact page config
exports.remove = async (req, res) => {
  try {
    const { id } = req.params;
    await db.query("DELETE FROM contact_pages WHERE id = ?", [id]);
    res.status(200).json({ success: true, message: "Contact page configuration deleted successfully" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
