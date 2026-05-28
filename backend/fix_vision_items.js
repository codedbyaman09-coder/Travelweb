const db = require('./config/db');

async function fixVisionItems() {
  try {
    const [res] = await db.query("SELECT id FROM home_section_items WHERE section_id = (SELECT id FROM home_sections WHERE section_key = 'vision') ORDER BY display_order ASC");
    for(let i=0; i<res.length; i++) {
      await db.query("UPDATE home_section_items SET title = ? WHERE id = ?", [`Paragraphe ${i+1}`, res[i].id]);
    }
    console.log("Updated vision paragraphs titles");
    process.exit(0);
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
}

fixVisionItems();
