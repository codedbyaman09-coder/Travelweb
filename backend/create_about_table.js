const db = require("./db");

const createTable = async () => {
  try {
    await db.query(`
      CREATE TABLE IF NOT EXISTS abouts (
        id INT AUTO_INCREMENT PRIMARY KEY,
        type VARCHAR(50) NOT NULL,
        title VARCHAR(255),
        subtitle VARCHAR(255),
        description TEXT,
        image VARCHAR(255),
        icon VARCHAR(50),
        display_order INT DEFAULT 0,
        status ENUM('active', 'inactive') DEFAULT 'active',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);
    console.log("Table 'abouts' created successfully.");
  } catch (err) {
    console.error("Error creating table:", err);
  } finally {
    process.exit();
  }
};

createTable();
