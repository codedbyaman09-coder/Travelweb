const mysql = require('mysql2/promise');
require('dotenv').config();

async function run() {
  const db = await mysql.createConnection({
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "",
    database: process.env.DB_NAME || "indeora"
  });

  // Delete all dummy videos
  await db.query(`DELETE FROM content_items WHERE type = 'video'`);

  // Insert the home video
  await db.query(`
    INSERT INTO content_items (type, title, subtitle, description, media_url, video_url, status) VALUES 
    ('video', 'Vidéo de la page d\\'accueil', 'Home Background Video', 'A promotional video for India tourism playing on the home page.', 'https://img.youtube.com/vi/GDhek6PQnmo/hqdefault.jpg', 'https://youtu.be/GDhek6PQnmo?si=gyPsaJ05bp72YZQ4', 'active')
  `);
  
  console.log('Dummy videos removed, home video seeded');
  process.exit(0);
}

run();
