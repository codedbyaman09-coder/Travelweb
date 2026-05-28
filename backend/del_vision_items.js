const db = require('./config/db');

async function deleteVisionItems() {
  try {
    await db.query("DELETE FROM home_section_items WHERE section_id = (SELECT id FROM home_sections WHERE section_key='vision')");
    console.log("Deleted old vision items");
    process.exit(0);
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
}

deleteVisionItems();
