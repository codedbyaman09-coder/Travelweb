const db = require('./config/db');

async function seedFaqItems() {
  try {
    const [sections] = await db.query("SELECT id FROM home_sections WHERE section_key = 'faq'");
    const sectionId = sections[0]?.id;

    if (!sectionId) {
      console.log("faq section not found.");
      process.exit(1);
    }

    // Set the section texts
    await db.query("UPDATE home_sections SET title = ?, subtitle = ?, description = ?, extra_text = ? WHERE id = ?", [
      "FAQ",
      "∞",
      "Voyage sur mesure en Inde",
      "Toutes les réponses à vos questions avec Indeora Voyages",
      sectionId
    ]);

    // Clear existing items in home_section_items for faq
    await db.query("DELETE FROM home_section_items WHERE section_id = ?", [sectionId]);

    // Fetch from faqs table
    const [faqs] = await db.query("SELECT * FROM faqs ORDER BY display_order ASC");

    // Insert into home_section_items
    for (let i = 0; i < faqs.length; i++) {
      const faq = faqs[i];
      await db.query(
        "INSERT INTO home_section_items (section_id, title, description, display_order, status) VALUES (?, ?, ?, ?, 'active')",
        [sectionId, faq.question, faq.answer, faq.display_order || (i+1)]
      );
    }

    console.log("FAQ items seeded successfully into home_section_items!");
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

seedFaqItems();
