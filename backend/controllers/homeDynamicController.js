const db = require("../config/db");

// Get all sections with their theme and items
exports.getAllSections = async (req, res) => {
  try {
    const [sections] = await db.query("SELECT * FROM home_sections ORDER BY display_order ASC");
    
    // fetch themes
    const [themes] = await db.query("SELECT * FROM home_theme_settings");
    
    // fetch items
    const [items] = await db.query("SELECT * FROM home_section_items ORDER BY display_order ASC");

    const data = sections.map(sec => {
      return {
        ...sec,
        theme: themes.find(t => t.section_id === sec.id) || {},
        items: items.filter(i => i.section_id === sec.id)
      };
    });

    res.status(200).json({ success: true, data });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.getPublicSections = async (req, res) => {
  try {
    const [sections] = await db.query("SELECT * FROM home_sections WHERE status = 'active' ORDER BY display_order ASC");
    const [themes] = await db.query("SELECT * FROM home_theme_settings");
    const [items] = await db.query("SELECT * FROM home_section_items WHERE status = 'active' ORDER BY display_order ASC");

    const data = sections.map(sec => {
      return {
        ...sec,
        theme: themes.find(t => t.section_id === sec.id) || {},
        items: items.filter(i => i.section_id === sec.id)
      };
    });
    res.status(200).json({ success: true, data });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// Update Section
exports.updateSection = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, subtitle, description, image_url, video_url, extra_text, modal_text, button_text, button_link, status } = req.body;
    await db.query(
      "UPDATE home_sections SET title=?, subtitle=?, description=?, image_url=?, video_url=?, extra_text=?, modal_text=?, button_text=?, button_link=?, status=? WHERE id=?",
      [title, subtitle, description, image_url, video_url, extra_text, modal_text, button_text, button_link, status, id]
    );
    res.status(200).json({ success: true, message: "Section updated" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// Add Section
exports.addSection = async (req, res) => {
  try {
    const { section_key, title, status } = req.body;
    const [result] = await db.query(
      "INSERT INTO home_sections (section_key, title, status, display_order) VALUES (?, ?, ?, 99)",
      [section_key, title || '', status || 'active']
    );
    // Auto-create empty theme settings for this new section
    await db.query("INSERT INTO home_theme_settings (section_id) VALUES (?)", [result.insertId]);
    res.status(201).json({ success: true, message: "Section added" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// Delete Section
exports.deleteSection = async (req, res) => {
  try {
    const { id } = req.params;
    await db.query("DELETE FROM home_sections WHERE id=?", [id]);
    res.status(200).json({ success: true, message: "Section deleted" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// Update Theme
exports.updateTheme = async (req, res) => {
  try {
    const { section_id } = req.params;
    const themeFields = req.body;
    
    let query = "UPDATE home_theme_settings SET ";
    let updates = [];
    let values = [];
    
    for (let key in themeFields) {
      if (key !== 'id' && key !== 'section_id' && key !== 'created_at' && key !== 'updated_at') {
        updates.push(`${key}=?`);
        values.push(themeFields[key]);
      }
    }
    
    if (updates.length > 0) {
      query += updates.join(", ") + " WHERE section_id=?";
      values.push(section_id);
      await db.query(query, values);
    }
    
    res.status(200).json({ success: true, message: "Theme updated" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// Update section order
exports.updateSectionOrder = async (req, res) => {
  try {
    const { items } = req.body; // array of { id, display_order }
    for (let item of items) {
      await db.query("UPDATE home_sections SET display_order=? WHERE id=?", [item.display_order, item.id]);
    }
    res.status(200).json({ success: true, message: "Order updated" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

// Section Items CRUD
exports.addSectionItem = async (req, res) => {
  try {
    const { section_id } = req.params;
    const { title, subtitle, description, image_url, video_url, button_text, link, icon, item_color, display_order, status } = req.body;
    await db.query(
      `INSERT INTO home_section_items 
      (section_id, title, subtitle, description, image_url, video_url, button_text, link, icon, item_color, display_order, status) 
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [section_id, title||'', subtitle||'', description||'', image_url||'', video_url||'', button_text||'', link||'', icon||'', item_color||'', display_order||0, status||'active']
    );
    res.status(201).json({ success: true, message: "Item added" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.updateSectionItem = async (req, res) => {
  try {
    const { itemId } = req.params;
    const { title, subtitle, description, image_url, video_url, button_text, link, icon, item_color, display_order, status } = req.body;
    await db.query(
      `UPDATE home_section_items 
      SET title=?, subtitle=?, description=?, image_url=?, video_url=?, button_text=?, link=?, icon=?, item_color=?, display_order=?, status=? 
      WHERE id=?`,
      [title||'', subtitle||'', description||'', image_url||'', video_url||'', button_text||'', link||'', icon||'', item_color||'', display_order||0, status||'active', itemId]
    );
    res.status(200).json({ success: true, message: "Item updated" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.deleteSectionItem = async (req, res) => {
  try {
    const { itemId } = req.params;
    await db.query("DELETE FROM home_section_items WHERE id=?", [itemId]);
    res.status(200).json({ success: true, message: "Item deleted" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
