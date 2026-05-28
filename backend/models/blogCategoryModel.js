const db = require("../db");

const list = async ({ includeInactive = true } = {}) => {
  const where = includeInactive ? "" : "WHERE status = 'active'";
  const [rows] = await db.query(
    `SELECT * FROM blog_categories ${where} ORDER BY display_order ASC, name ASC`
  );
  return rows;
};

const getById = async (id) => {
  const [rows] = await db.query("SELECT * FROM blog_categories WHERE id = ?", [id]);
  return rows[0] || null;
};

const create = async (payload) => {
  const [result] = await db.query(
    `INSERT INTO blog_categories (name, slug, description, display_order, status)
     VALUES (?, ?, ?, ?, ?)`,
    [
      payload.name,
      payload.slug,
      payload.description || null,
      Number(payload.display_order || 0),
      payload.status || "active"
    ]
  );
  return result.insertId;
};

const update = async (id, payload) => {
  await db.query(
    `UPDATE blog_categories
     SET name = ?, slug = ?, description = ?, display_order = ?, status = ?
     WHERE id = ?`,
    [
      payload.name,
      payload.slug,
      payload.description || null,
      Number(payload.display_order || 0),
      payload.status || "active",
      id
    ]
  );
};

const remove = async (id) => {
  await db.query("DELETE FROM blog_categories WHERE id = ?", [id]);
};

module.exports = { list, getById, create, update, remove };
