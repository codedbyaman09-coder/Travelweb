const mysql = require("mysql2");
require("dotenv").config();

const db = mysql.createPool({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME || "indeora",
  waitForConnections: true,
  connectionLimit: Number(process.env.DB_CONNECTION_LIMIT || 10),
  queueLimit: 0
});

db.getConnection((err, connection) => {
  if (err) {
    console.error("MySQL connection failed:", err.message);
    console.error("Make sure MySQL is running and the database exists.");
    return;
  }

  console.log(`MySQL connected successfully to '${process.env.DB_NAME || "indeora"}'`);
  connection.release();
});

module.exports = db.promise();
