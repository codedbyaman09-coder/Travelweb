const mysql = require('mysql2/promise');
require('dotenv').config();

const seedHomeTeam = async () => {
  try {
    const db = await mysql.createConnection({
      host: process.env.DB_HOST || '127.0.0.1',
      user: process.env.DB_USER || 'root',
      password: process.env.DB_PASSWORD || '',
      database: process.env.DB_NAME || 'indeora'
    });

    const members = [
      {
        type: 'home_team',
        title: 'Vishnu Swami',
        subtitle: 'Fondateur francophone',
        description: `Passionné de voyages depuis toujours, Vishnu Swami a d’abord exploré le monde au-delà de l’Inde. Il a vécu plusieurs années en France où il a appris le français qu’il parle couramment, and s’est imprégné de la culture européenne. Directeur de notre agence à Delhi, Vishnu incarne la promesse d'authenticité. Sa connaissance du terrain and sa passion pour le principe de Atithi Devo Bhava garantissent une immersion profonde.`,
        display_order: 1
      },
      {
        type: 'home_team',
        title: 'Amandine Fastré',
        subtitle: "Créatrice d'itinéraires",
        description: `Amandine est une véritable passionnée de l’Inde, un pays où elle a vécu plus de 18 ans en tant que créatrice de voyages sur mesure. Durant ces années, elle a sillonné de nombreuses régions and exploré des lieux authentiques. Basée en France, Amandine est votre premier point de contact and l'architecte de votre voyage. Elle transforme vos envies en itinéraire sur mesure, alliant découvertes culturelles and organisation fluide.`,
        display_order: 2
      }
    ];

    // Check if records already exist
    const [existing] = await db.query('SELECT id FROM abouts WHERE type = ?', ['home_team']);
    if (existing.length === 0) {
      for (let m of members) {
        await db.query(
          'INSERT INTO abouts (type, title, subtitle, description, display_order) VALUES (?, ?, ?, ?, ?)',
          [m.type, m.title, m.subtitle, m.description, m.display_order]
        );
      }
      console.log('✅ Default Home Team records inserted successfully.');
    } else {
      console.log('⚠️ Home Team records already exist in the database.');
    }

    await db.end();
  } catch (err) {
    console.error('❌ Error seeding Home Team:', err);
  }
};

seedHomeTeam();
