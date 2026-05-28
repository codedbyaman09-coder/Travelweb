const db = require("../db");

const generateSlug = (text) => {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
};

exports.getAllSeo = async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM pages ORDER BY created_at DESC");
    res.json({ success: true, data: rows });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.getSeoById = async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM pages WHERE id = ?", [req.params.id]);
    if (rows.length === 0) return res.status(404).json({ success: false, message: "SEO data not found" });
    res.json({ success: true, data: rows[0] });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.getSeoBySlug = async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM pages WHERE pageSlug = ? AND status = 'active'", [req.params.slug]);
    if (rows.length === 0) return res.status(404).json({ success: false, message: "SEO data not found" });
    res.json({ success: true, data: rows[0] });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.createSeo = async (req, res) => {
  try {
    const { pageName, metaTitle, metaDescription, metaKeywords, canonicalUrl, ogTitle, ogDescription, ogImage, twitterTitle, twitterDescription, twitterImage, robots, schemaMarkup, status } = req.body;
    let pageSlug = req.body.pageSlug || generateSlug(pageName);
    
    // Check duplicate slug
    const [existing] = await db.query("SELECT id FROM pages WHERE pageSlug = ?", [pageSlug]);
    if (existing.length > 0) return res.status(400).json({ success: false, message: "Slug already exists" });

    // Validate lengths
    if (metaTitle && metaTitle.length > 60) return res.status(400).json({ success: false, message: "Meta title max 60 characters" });
    if (metaDescription && metaDescription.length > 160) return res.status(400).json({ success: false, message: "Meta description max 160 characters" });

    const [result] = await db.query(
      `INSERT INTO pages (pageName, pageSlug, metaTitle, metaDescription, metaKeywords, canonicalUrl, ogTitle, ogDescription, ogImage, twitterTitle, twitterDescription, twitterImage, robots, schemaMarkup, status) 
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [pageName, pageSlug, metaTitle, metaDescription, metaKeywords, canonicalUrl, ogTitle, ogDescription, ogImage, twitterTitle, twitterDescription, twitterImage, robots, schemaMarkup, status || 'active']
    );

    res.status(201).json({ success: true, message: "SEO data created successfully", data: { id: result.insertId } });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.updateSeo = async (req, res) => {
  try {
    const { pageName, pageSlug, metaTitle, metaDescription, metaKeywords, canonicalUrl, ogTitle, ogDescription, ogImage, twitterTitle, twitterDescription, twitterImage, robots, schemaMarkup, status } = req.body;
    
    if (metaTitle && metaTitle.length > 60) return res.status(400).json({ success: false, message: "Meta title max 60 characters" });
    if (metaDescription && metaDescription.length > 160) return res.status(400).json({ success: false, message: "Meta description max 160 characters" });

    // Check duplicate slug excluding current
    const [existing] = await db.query("SELECT id FROM pages WHERE pageSlug = ? AND id != ?", [pageSlug, req.params.id]);
    if (existing.length > 0) return res.status(400).json({ success: false, message: "Slug already exists" });

    await db.query(
      `UPDATE pages SET pageName=?, pageSlug=?, metaTitle=?, metaDescription=?, metaKeywords=?, canonicalUrl=?, ogTitle=?, ogDescription=?, ogImage=?, twitterTitle=?, twitterDescription=?, twitterImage=?, robots=?, schemaMarkup=?, status=? WHERE id=?`,
      [pageName, pageSlug, metaTitle, metaDescription, metaKeywords, canonicalUrl, ogTitle, ogDescription, ogImage, twitterTitle, twitterDescription, twitterImage, robots, schemaMarkup, status, req.params.id]
    );

    res.json({ success: true, message: "SEO data updated successfully" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.deleteSeo = async (req, res) => {
  try {
    await db.query("DELETE FROM pages WHERE id = ?", [req.params.id]);
    res.json({ success: true, message: "SEO data deleted successfully" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
