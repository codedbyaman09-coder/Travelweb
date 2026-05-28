const mysql = require('mysql2/promise');
require('dotenv').config();

const run = async () => {
  const db = await mysql.createConnection({
    host: process.env.DB_HOST || '127.0.0.1',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'indeora'
  });
  
  await db.query('DELETE FROM abouts WHERE type = "home_team"');
  console.log("✅ Cleaned up old home_team records");
  
  await db.end();
};
run();
