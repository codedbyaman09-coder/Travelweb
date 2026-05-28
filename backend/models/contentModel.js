const db = require("../db");

const allowedSortDirections = new Set(["ASC", "DESC"]);

const normalizeType = (type) => (type || "").toString().trim().toLowerCase();

const list = async ({ type, includeInactive = false } = {}) => {
  const params = [];
  let where = "1 = 1";

  if (type) {
    where += " AND type = ?";
    params.push(normalizeType(type));
  }

  if (!includeInactive) {
    where += " AND status = 'active'";
  }

  const [rows] = await db.query(
    `SELECT * FROM content_items WHERE ${where} ORDER BY display_order ASC, created_at DESC`,
    params
  );

  return rows;
};

const getById = async (id) => {
  const [rows] = await db.query("SELECT * FROM content_items WHERE id = ?", [id]);
  return rows[0] || null;
};

const create = async (payload) => {
  const [result] = await db.query(
    `INSERT INTO content_items
      (type, title, subtitle, description, media_url, video_url, link_url, button_text, display_order, status, extra_json)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [
      normalizeType(payload.type),
      payload.title || "",
      payload.subtitle || null,
      payload.description || null,
      payload.media_url || null,
      payload.video_url || null,
      payload.link_url || null,
      payload.button_text || null,
      Number(payload.display_order || 0),
      payload.status || "active",
      payload.extra_json || null
    ]
  );

  return result.insertId;
};

const update = async (id, payload) => {
  await db.query(
    `UPDATE content_items
     SET type = ?, title = ?, subtitle = ?, description = ?, media_url = ?, video_url = ?,
         link_url = ?, button_text = ?, display_order = ?, status = ?, extra_json = ?
     WHERE id = ?`,
    [
      normalizeType(payload.type),
      payload.title || "",
      payload.subtitle || null,
      payload.description || null,
      payload.media_url || null,
      payload.video_url || null,
      payload.link_url || null,
      payload.button_text || null,
      Number(payload.display_order || 0),
      payload.status || "active",
      payload.extra_json || null,
      id
    ]
  );
};

const remove = async (id) => {
  await db.query("DELETE FROM content_items WHERE id = ?", [id]);
};

module.exports = {
  allowedSortDirections,
  list,
  getById,
  create,
  update,
  remove
};
