const db = require('./db');
const cards = require('./cards_extract.js');

const generateSlug = (text) => {
  return text.toLowerCase()
    .replace(/[^a-z0-9 -]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
};

async function seedFaqs() {
  try {
    console.log("Seeding FAQ categories and questions...");
    
    // Clear existing data
    await db.query("SET FOREIGN_KEY_CHECKS = 0");
    await db.query("TRUNCATE TABLE faq_questions");
    await db.query("TRUNCATE TABLE faq_categories");
    await db.query("SET FOREIGN_KEY_CHECKS = 1");

    let totalCats = 0;
    let totalQuestions = 0;
    
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
      totalCats++;

      const questions = card.popupQuestions;
      if (!questions || questions.length === 0) continue;
      
      for (let j = 0; j < questions.length; j++) {
        const item = questions[j];
        await db.query(
          "INSERT INTO faq_questions (category_id, question, answer, sort_order, status) VALUES (?, ?, ?, ?, 'active')",
          [catId, item.q, item.a, j + 1]
        );
        totalQuestions++;
      }
    }
    
    console.log(`Successfully inserted ${totalQuestions} FAQs across ${totalCats} categories.`);
    process.exit(0);
  } catch (error) {
    console.error("Error seeding faqs:", error);
    process.exit(1);
  }
}

seedFaqs();
