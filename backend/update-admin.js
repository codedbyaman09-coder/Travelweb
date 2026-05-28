const mysql = require('mysql2/promise');
const bcrypt = require('bcryptjs');
require('dotenv').config();

const dbConfig = {
  host: process.env.DB_HOST || '127.0.0.1',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'indeora'
};

const updateAdminPassword = async () => {
  try {
    const db = await mysql.createConnection(dbConfig);
    const email = 'admin@indeora.com';
    const newPassword = 'admin123';
    
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newPassword, salt);
    
    await db.query('UPDATE users SET password = ? WHERE email = ?', [hashedPassword, email]);
    console.log('✅ Admin password updated to admin123');
    
    process.exit(0);
  } catch (err) {
    console.error('Error:', err);
    process.exit(1);
  }
};

updateAdminPassword();
