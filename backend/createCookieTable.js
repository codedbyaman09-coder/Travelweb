const mysql = require('mysql2/promise');
require('dotenv').config();

async function run() {
  try {
    const conn = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME
    });
    
    await conn.query(`
      CREATE TABLE IF NOT EXISTS cookie_consents (
        id INT AUTO_INCREMENT PRIMARY KEY,
        user_uuid VARCHAR(255) NOT NULL,
        ip_address VARCHAR(45),
        necessary BOOLEAN DEFAULT TRUE,
        analytics BOOLEAN DEFAULT FALSE,
        marketing BOOLEAN DEFAULT FALSE,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        UNIQUE KEY(user_uuid)
      )
    `);
    console.log('Table cookie_consents created');
    await conn.end();
  } catch (err) {
    console.error(err);
  }
}
run();
