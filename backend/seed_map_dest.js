const mysql = require('mysql2/promise');
require('dotenv').config({path:'./.env'});

const seed = async () => {
  const db = await mysql.createConnection({
    host: process.env.DB_HOST||'localhost',
    user: process.env.DB_USER||'root',
    password: process.env.DB_PASSWORD||'',
    database: process.env.DB_NAME||'indeora'
  });
  
  const dests = [
    { title: 'Rajasthan Royal Taj Mahal — 15 Jours', slug: 'rajasthan', desc: 'Des palais raffinés de Jaipur aux ruelles bleues de Jodhpur, le Rajasthan offre une immersion unique au cœur de .', img: 'https://media_urls.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=400&q=80', order: 1 },
    { title: 'Delhi, Jaipur Agra — 8 Jours', slug: 'triangle-or', desc: "Des ruelles animées de Delhi aux palais roses de Jaipur en passant par l’inoubliable Taj Mahal d'Agra.", img: 'https://media_urls.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=400&q=80', order: 2 },
    { title: 'Le Ladakh et les contreforts himalayens ', slug: 'himalaya', desc: 'Terre de monastères, de sommets himalayens et de traditions tibétaines, le Ladakh révèle une facette spectaculaire ', img: 'https://media_urls.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=400&q=80', order: 3 },
    { title: 'La Vallée du Gange et Varanasi', slug: 'varanasi', desc: 'Entre spiritualité, histoire et émotions intenses, la Vallée du Gange invite à découvrir l’âme de l’Inde. Le Taj Mahal, les ghats sacrés de Varanasi et les rituel', img: 'https://media_urls.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=400&q=80', order: 4 },
    { title: 'L’Inde du Sud : Kerala et Tamil Nadu', slug: 'kerala', desc: 'Entre temples majestueux, plantations de thé, backwaters paisibles et nature luxuriante, l’Inde du Sud dévoile une ', img: 'https://media_urls.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=400&q=80', order: 5 },
    { title: 'Calcutta et l’Inde centrale', slug: 'inde-nord-est', desc: 'Entre culture, spiritualité et histoire, Calcutta et l’Inde centrale offrent un voyage hors des sentiers battus au .', img: 'https://media_urls.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&w=400&q=80', order: 6 }
  ];

  await db.query('DELETE FROM content_items WHERE type="map_dest"');

  for (const d of dests) {
    await db.query(
      'INSERT INTO content_items (type, title, subtitle, description, media_url, display_order, status) VALUES (?, ?, ?, ?, ?, ?, ?)',
      ['map_dest', d.title, d.slug, d.desc, d.img, d.order, 'active']
    );
  }
  console.log("Seeded map_dest");
  process.exit(0);
};

seed();
