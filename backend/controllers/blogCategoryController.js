const blogCategoryModel = require("../models/blogCategoryModel");

const generateSlug = (value) =>
  value
    .toString()
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");

exports.getAll = async (req, res) => {
  try {
    const rows = await blogCategoryModel.list({
      includeInactive: req.query.includeInactive !== "false"
    });
    res.json({ success: true, data: rows });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.getOne = async (req, res) => {
  try {
    const row = await blogCategoryModel.getById(req.params.id);
    if (!row) return res.status(404).json({ success: false, message: "Category not found" });
    res.json({ success: true, data: row });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.create = async (req, res) => {
  try {
    const payload = {
      ...req.body,
      slug: req.body.slug || generateSlug(req.body.name || "")
    };

    if (!payload.name || !payload.slug) {
      return res.status(400).json({ success: false, message: "Name and slug are required" });
    }

    const id = await blogCategoryModel.create(payload);
    res.status(201).json({ success: true, message: "Category created successfully", id });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.update = async (req, res) => {
  try {
    const existing = await blogCategoryModel.getById(req.params.id);
    if (!existing) return res.status(404).json({ success: false, message: "Category not found" });

    const payload = {
      ...existing,
      ...req.body,
      slug: req.body.slug || existing.slug || generateSlug(req.body.name || existing.name)
    };

    await blogCategoryModel.update(req.params.id, payload);
    res.json({ success: true, message: "Category updated successfully" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.delete = async (req, res) => {
  try {
    const existing = await blogCategoryModel.getById(req.params.id);
    if (!existing) return res.status(404).json({ success: false, message: "Category not found" });

    await blogCategoryModel.remove(req.params.id);
    res.json({ success: true, message: "Category deleted successfully" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
