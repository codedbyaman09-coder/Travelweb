  const contentModel = require("../models/contentModel");

  const parseExtraJson = (value) => {
    if (!value) return null;
    if (typeof value === "string") return value;
    return JSON.stringify(value);
  };

  const normalizePayload = (body) => ({
    type: body.type,
    title: body.title,
    subtitle: body.subtitle,
    description: body.description,
    media_url: body.media_url,
    video_url: body.video_url,
    link_url: body.link_url,
    button_text: body.button_text,
    display_order: body.display_order,
    status: body.status,
    extra_json: parseExtraJson(body.extra_json)
  });

  const absoluteUploadUrl = (req, value) => {
    if (!value || typeof value !== "string") return value || null;
    if (/^https?:\/\//i.test(value)) return value;
    if (value.startsWith("/uploads/")) {
      return `${req.protocol}://${req.get("host")}${value}`;
    }
    return value;
  };

  const serializeItem = (req, item) => ({
    ...item,
    media_url: absoluteUploadUrl(req, item.media_url),
    video_url: absoluteUploadUrl(req, item.video_url)
  });

  exports.getAll = async (req, res) => {
    try {
      const rows = await contentModel.list({
        type: req.query.type,
        includeInactive: req.query.includeInactive === "true"
      });

      res.json({ success: true, data: rows.map((item) => serializeItem(req, item)) });
    } catch (err) {
      res.status(500).json({ success: false, message: err.message });
    }
  };

  exports.getOne = async (req, res) => {
    try {
      const row = await contentModel.getById(req.params.id);
      if (!row) return res.status(404).json({ success: false, message: "Content item not found" });
      res.json({ success: true, data: serializeItem(req, row) });
    } catch (err) {
      res.status(500).json({ success: false, message: err.message });
    }
  };

  exports.create = async (req, res) => {
    try {
      if (!req.body.type || !req.body.title) {
        return res.status(400).json({ success: false, message: "Type and title are required" });
      }

      const id = await contentModel.create(normalizePayload(req.body));
      res.status(201).json({ success: true, message: "Content item created successfully", id });
    } catch (err) {
      res.status(500).json({ success: false, message: err.message });
    }
  };

  exports.update = async (req, res) => {
    try {
      const existing = await contentModel.getById(req.params.id);
      if (!existing) return res.status(404).json({ success: false, message: "Content item not found" });

      const payload = normalizePayload({ ...existing, ...req.body });
      await contentModel.update(req.params.id, payload);
      res.json({ success: true, message: "Content item updated successfully" });
    } catch (err) {
      res.status(500).json({ success: false, message: err.message });
    }
  };

  exports.delete = async (req, res) => {
    try {
      const existing = await contentModel.getById(req.params.id);
      if (!existing) return res.status(404).json({ success: false, message: "Content item not found" });

      await contentModel.remove(req.params.id);
      res.json({ success: true, message: "Content item deleted successfully" });
    } catch (err) {
      res.status(500).json({ success: false, message: err.message });
    }
  };
