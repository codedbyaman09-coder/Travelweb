const db = require("../db");

exports.getAllMeta = async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM meta_data ORDER BY created_at DESC");
    res.json({ success: true, data: rows });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.getMetaByPageUrl = async (req, res) => {
  try {
    const pageUrl = decodeURIComponent(req.params.pageUrl);
    const [rows] = await db.query("SELECT * FROM meta_data WHERE pageUrl = ? AND status = 'active'", [pageUrl]);
    if (rows.length === 0) return res.status(404).json({ success: false, message: "Meta data not found" });
    res.json({ success: true, data: rows[0] });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.getMetaBySlug = async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM meta_data WHERE pageSlug = ? AND status = 'active'", [req.params.slug]);
    if (rows.length === 0) return res.status(404).json({ success: false, message: "Meta data not found" });
    res.json({ success: true, data: rows[0] });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.createMeta = async (req, res) => {
  try {
    const { 
      pageName, pageUrl, pageSlug, metaTitle, metaDescription, metaKeywords, 
      canonicalUrl, robotsTag, ogTitle, ogDescription, ogImage, ogUrl, 
      twitterTitle, twitterDescription, twitterImage, twitterCardType, schemaMarkup, status 
    } = req.body;

    // Validation
    if (!pageSlug || !/^[a-z0-9-]+$/.test(pageSlug)) {
      return res.status(400).json({ success: false, message: "Invalid SEO slug. Must be lowercase, numbers, and hyphens only." });
    }

    const [existing] = await db.query("SELECT id FROM meta_data WHERE pageSlug = ? OR pageUrl = ?", [pageSlug, pageUrl]);
    if (existing.length > 0) return res.status(400).json({ success: false, message: "Slug or URL already exists" });

    const [result] = await db.query(
      `INSERT INTO meta_data 
      (pageName, pageUrl, pageSlug, metaTitle, metaDescription, metaKeywords, canonicalUrl, robotsTag, ogTitle, ogDescription, ogImage, ogUrl, twitterTitle, twitterDescription, twitterImage, twitterCardType, schemaMarkup, status) 
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [pageName, pageUrl, pageSlug, metaTitle, metaDescription, metaKeywords, canonicalUrl, robotsTag, ogTitle, ogDescription, ogImage, ogUrl, twitterTitle, twitterDescription, twitterImage, twitterCardType, schemaMarkup, status || 'active']
    );

    res.status(201).json({ success: true, message: "Meta data created successfully", data: { id: result.insertId } });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.updateMeta = async (req, res) => {
  try {
    const { 
      pageName, pageUrl, pageSlug, metaTitle, metaDescription, metaKeywords, 
      canonicalUrl, robotsTag, ogTitle, ogDescription, ogImage, ogUrl, 
      twitterTitle, twitterDescription, twitterImage, twitterCardType, schemaMarkup, status 
    } = req.body;

    if (!pageSlug || !/^[a-z0-9-]+$/.test(pageSlug)) {
      return res.status(400).json({ success: false, message: "Invalid SEO slug. Must be lowercase, numbers, and hyphens only." });
    }

    const [existing] = await db.query("SELECT id FROM meta_data WHERE (pageSlug = ? OR pageUrl = ?) AND id != ?", [pageSlug, pageUrl, req.params.id]);
    if (existing.length > 0) return res.status(400).json({ success: false, message: "Slug or URL already exists" });

    await db.query(
      `UPDATE meta_data SET 
      pageName=?, pageUrl=?, pageSlug=?, metaTitle=?, metaDescription=?, metaKeywords=?, 
      canonicalUrl=?, robotsTag=?, ogTitle=?, ogDescription=?, ogImage=?, ogUrl=?, 
      twitterTitle=?, twitterDescription=?, twitterImage=?, twitterCardType=?, schemaMarkup=?, status=? 
      WHERE id=?`,
      [pageName, pageUrl, pageSlug, metaTitle, metaDescription, metaKeywords, canonicalUrl, robotsTag, ogTitle, ogDescription, ogImage, ogUrl, twitterTitle, twitterDescription, twitterImage, twitterCardType, schemaMarkup, status, req.params.id]
    );

    res.json({ success: true, message: "Meta data updated successfully" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.deleteMeta = async (req, res) => {
  try {
    await db.query("DELETE FROM meta_data WHERE id = ?", [req.params.id]);
    res.json({ success: true, message: "Meta data deleted successfully" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
