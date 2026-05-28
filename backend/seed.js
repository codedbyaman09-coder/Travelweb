const mysql = require('mysql2/promise');
require('dotenv').config();

async function run() {
  const db = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
  });

  await db.query(`
    INSERT INTO destinations (title, slug, image_url, status) VALUES 
    ('Rajasthan', 'rajasthan', 'https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=800&auto=format&fit=crop', 'active'),
    ('Kerala', 'kerala', 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=800&auto=format&fit=crop', 'active'),
    ('Varanasi', 'varanasi', 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=800&auto=format&fit=crop', 'active'),
    ('Himalaya', 'himalaya', 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=800&auto=format&fit=crop', 'active')
  `);
  
  console.log('Destinations seeded');
  process.exit(0);
}

run();
