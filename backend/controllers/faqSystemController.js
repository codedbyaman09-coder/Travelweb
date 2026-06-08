const db = require('../config/db');

exports.getPublicCategories = async (req, res) => {
  try {
    const [categories] = await db.query(`
      SELECT c.*, (SELECT COUNT(*) FROM faq_questions q WHERE q.category_id = c.id AND q.status = 'active') as active_questions_count
      FROM faq_categories c
      WHERE c.status = 'active'
      ORDER BY c.sort_order ASC
    `);

    // Fetch questions for each category
    const [questions] = await db.query("SELECT * FROM faq_questions WHERE status = 'active' ORDER BY sort_order ASC");
    
    for (let cat of categories) {
      cat.questions = questions.filter(q => q.category_id === cat.id);
    }

    res.json({ success: true, data: categories });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.getPublicCategoryBySlug = async (req, res) => {
  try {
    const [cats] = await db.query('SELECT * FROM faq_categories WHERE slug = ? AND status = "active"', [req.params.slug]);
    if (cats.length === 0) return res.status(404).json({ success: false, message: 'Category not found' });
    
    const category = cats[0];
    const [questions] = await db.query('SELECT * FROM faq_questions WHERE category_id = ? AND status = "active" ORDER BY sort_order ASC', [category.id]);
    category.questions = questions;
    
    res.json({ success: true, data: category });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.searchPublicFaqs = async (req, res) => {
  try {
    const keyword = `%${req.query.q}%`;
    const [categories] = await db.query('SELECT * FROM faq_categories WHERE status = "active" AND (title LIKE ? OR description LIKE ?)', [keyword, keyword]);
    const [questions] = await db.query('SELECT q.*, c.title as category_title FROM faq_questions q JOIN faq_categories c ON q.category_id = c.id WHERE q.status = "active" AND c.status = "active" AND (q.question LIKE ? OR q.answer LIKE ?)', [keyword, keyword]);
    
    res.json({ success: true, data: { categories, questions } });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Admin Categories
exports.getAdminCategories = async (req, res) => {
  try {
    const [categories] = await db.query(`
      SELECT c.*, (SELECT COUNT(*) FROM faq_questions q WHERE q.category_id = c.id) as total_questions
      FROM faq_categories c
      ORDER BY c.sort_order ASC
    `);
    res.json({ success: true, data: categories });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.createAdminCategory = async (req, res) => {
  try {
    const { title, slug, description, image, badge_number, sort_order, status } = req.body;
    const [result] = await db.query(
      'INSERT INTO faq_categories (title, slug, description, image, badge_number, sort_order, status) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [title, slug, description || '', image || '', badge_number || '', sort_order || 0, status || 'active']
    );
    res.json({ success: true, message: 'Catégorie créée', id: result.insertId });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.updateAdminCategory = async (req, res) => {
  try {
    const { title, slug, description, image, badge_number, sort_order, status } = req.body;
    await db.query(
      'UPDATE faq_categories SET title=?, slug=?, description=?, image=?, badge_number=?, sort_order=?, status=? WHERE id=?',
      [title, slug, description || '', image || '', badge_number || '', sort_order || 0, status || 'active', req.params.id]
    );
    res.json({ success: true, message: 'Catégorie mise à jour' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.deleteAdminCategory = async (req, res) => {
  try {
    await db.query('DELETE FROM faq_categories WHERE id=?', [req.params.id]);
    res.json({ success: true, message: 'Catégorie supprimée' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.reorderAdminCategories = async (req, res) => {
  try {
    const { items } = req.body; // Array of { id, sort_order }
    for (let item of items) {
      await db.query('UPDATE faq_categories SET sort_order=? WHERE id=?', [item.sort_order, item.id]);
    }
    res.json({ success: true, message: 'Ordre mis à jour' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Admin Questions
exports.getAdminQuestions = async (req, res) => {
  try {
    const [questions] = await db.query('SELECT * FROM faq_questions WHERE category_id = ? ORDER BY sort_order ASC', [req.params.id]);
    res.json({ success: true, data: questions });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.createAdminQuestion = async (req, res) => {
  try {
    const { question, answer, sort_order, status } = req.body;
    const [result] = await db.query(
      'INSERT INTO faq_questions (category_id, question, answer, sort_order, status) VALUES (?, ?, ?, ?, ?)',
      [req.params.id, question, answer, sort_order || 0, status || 'active']
    );
    res.json({ success: true, message: 'Question créée', id: result.insertId });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.updateAdminQuestion = async (req, res) => {
  try {
    const { question, answer, sort_order, status } = req.body;
    await db.query(
      'UPDATE faq_questions SET question=?, answer=?, sort_order=?, status=? WHERE id=?',
      [question, answer, sort_order || 0, status || 'active', req.params.id]
    );
    res.json({ success: true, message: 'Question mise à jour' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.deleteAdminQuestion = async (req, res) => {
  try {
    await db.query('DELETE FROM faq_questions WHERE id=?', [req.params.id]);
    res.json({ success: true, message: 'Question supprimée' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.resetDefaults = async (req, res) => {
  try {
    const cards = require('../cards_extract.js');
    await db.query("SET FOREIGN_KEY_CHECKS = 0");
    await db.query("TRUNCATE TABLE faq_questions");
    await db.query("TRUNCATE TABLE faq_categories");
    await db.query("SET FOREIGN_KEY_CHECKS = 1");

    const generateSlug = (text) => text.toLowerCase().replace(/[^a-z0-9 -]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-');

    for (let i = 0; i < cards.length; i++) {
      const card = cards[i];
      const title = card.title;
      const slug = generateSlug(title);
      const badge_number = card.no || String(i + 1).padStart(2, '0');
      const sort_order = i + 1;
      const description = card.desc || '';
      const image = card.img || '';

      const [catResult] = await db.query(
        "INSERT INTO faq_categories (title, slug, description, image, badge_number, sort_order, status) VALUES (?, ?, ?, ?, ?, ?, 'active')",
        [title, slug, description, image, badge_number, sort_order]
      );
      
      const catId = catResult.insertId;
      const questions = card.popupQuestions;
      if (!questions || questions.length === 0) continue;
      
      for (let j = 0; j < questions.length; j++) {
        const item = questions[j];
        await db.query(
          "INSERT INTO faq_questions (category_id, question, answer, sort_order, status) VALUES (?, ?, ?, ?, 'active')",
          [catId, item.q, item.a, j + 1]
        );
      }
    }
    res.json({ success: true, message: 'FAQs réinitialisées avec succès' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.reorderAdminQuestions = async (req, res) => {
  try {
    const { items } = req.body; // Array of { id, sort_order }
    for (let item of items) {
      await db.query('UPDATE faq_questions SET sort_order=? WHERE id=?', [item.sort_order, item.id]);
    }
    res.json({ success: true, message: 'Ordre mis à jour' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
