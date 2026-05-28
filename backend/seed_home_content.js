const mysql = require('mysql2/promise');
require('dotenv').config();

(async () => {
  try {
    const db = await mysql.createConnection({
      host: process.env.DB_HOST || 'localhost',
      user: process.env.DB_USER || 'root',
      password: process.env.DB_PASSWORD || '',
      database: process.env.DB_NAME || 'indeora'
    });
    
    await db.query("INSERT INTO content_items (type, title, subtitle, status) VALUES ('home_content', 'INDEORA', 'CRÉATEUR DE VOYAGES SUR MESURE EN INDE', 'active')");
    console.log('Successfully seeded home_content');
  } catch (err) {
    console.error(err);
  }
  process.exit(0);
})();
