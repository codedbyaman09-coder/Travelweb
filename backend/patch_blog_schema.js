const db = require('./db');

async function patchDB() {
  try {
    console.log("Adding page_content column to blogs table...");
    await db.query(`
      ALTER TABLE blogs 
      ADD COLUMN page_content JSON DEFAULT NULL
    `);
    console.log("Success!");
  } catch (err) {
    if (err.code === 'ER_DUP_FIELDNAME') {
      console.log("Column page_content already exists.");
    } else {
      console.error("Error:", err);
    }
  }

  process.exit(0);
}

patchDB();
