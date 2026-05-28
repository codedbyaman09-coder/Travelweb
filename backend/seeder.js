const mysql = require('mysql2/promise');
const bcrypt = require('bcryptjs');
require('dotenv').config();

const dbConfig = {
  host: process.env.DB_HOST || '127.0.0.1',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'indeora'
};

const seedAdmin = async (db) => {
  const email = 'admin@indeora.com';
  const password = 'admin123';
  
  const [rows] = await db.query('SELECT * FROM users WHERE email = ?', [email]);
  if (rows.length === 0) {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    await db.query(
      'INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
      ['Super Admin', email, hashedPassword]
    );
    console.log('✅ Default Admin seeded: admin@indeora.com / admin123');
  } else {
    console.log('⚠️ Admin already exists.');
  }
};

const seedSeoPages = async (db) => {
  const pages = [
    { name: 'Home', slug: 'home' },
    { name: 'About', slug: 'about' },
    { name: 'Contact', slug: 'contact' },
    { name: 'Blog', slug: 'blog' },
    { name: 'Blog Detail', slug: 'blog-detail' },
    { name: 'Destination', slug: 'destination' },
    { name: 'Package', slug: 'package' },
    { name: 'Gallery', slug: 'gallery' },
    { name: 'FAQ', slug: 'faq' },
    { name: 'Privacy Policy', slug: 'privacy-policy' },
    { name: 'Terms and Conditions', slug: 'terms-and-conditions' }
  ];

  for (let p of pages) {
    const [rows] = await db.query('SELECT * FROM pages WHERE pageSlug = ?', [p.slug]);
    if (rows.length === 0) {
      await db.query(
        'INSERT INTO pages (pageName, pageSlug, metaTitle, metaDescription) VALUES (?, ?, ?, ?)',
        [p.name, p.slug, `Indeora Voyages - ${p.name}`, `Découvrez ${p.name} avec Indeora Voyages, votre spécialiste du voyage sur mesure en Inde.`]
      );
      console.log(`✅ SEO Page seeded: ${p.name}`);
    }
  }
};

const seedDestinations = async (db) => {
  const dests = [
    { title: "Rajasthan Authentique Varanasi", slug: "voyage-photo-expeditions", meta_description: "Capturez l’âme de l’Inde à travers l’objectif avec nos photographes experts." },
    { title: "Rajasthan Rural Inde Authentique", slug: "immersion-villages-indiens", meta_description: "Vivez au rythme des communautés locales pour une expérience humaine profonde." },
    { title: "Rajasthan Gujarat", slug: "art-artisanat-savoir-faire", meta_description: "Découvrez les techniques ancestrales des artisans indiens, du tissage à la poterie." },
    { title: "Inde Spirituelle Bien-Être", slug: "spiritualite-yoga-ayurveda", meta_description: "Retrouvez l’équilibre à travers le yoga, la méditation et les soins ayurvédiques." },
    { title: "Inde Sauvage Tigres du Bengale", slug: "safaris-vie-sauvage", meta_description: "Observez le tigre du Bengale et la biodiversité exceptionnelle des parcs nationaux." },
    { title: "Rajasthan Romantique Kerala", slug: "lune-de-miel-escapades-romantiques", meta_description: "Célébrez votre union dans les décors somptueux des palais de maharajas." },
    { title: "Rajasthan, Gujarat Inde Tribale", slug: "rencontres-ethniques-cultures-locales", meta_description: "Explorez la diversité culturelle des peuples de l’Inde et leurs traditions uniques." },
    { title: "Leh, Nubra Valley Pangong Lake", slug: "aventure-himalaya-trekking", meta_description: "Dépassez vos limites dans les paysages grandioses des hautes altitudes." },
    { title: "Kerala Tropical Houseboat Experience", slug: "croisieres-backwaters-kerala", meta_description: "Naviguez paisiblement sur les canaux tropicaux à bord d’un kettuvalam traditionnel." },
    { title: "Festivals, couleurs traditions indiennes", slug: "festivals-couleurs-traditions-indiennes", meta_description: "Plongez dans l’effervescence des plus grandes célébrations religieuses et culturelles." }
  ];

  for (let d of dests) {
    const [rows] = await db.query('SELECT * FROM destinations WHERE slug = ?', [d.slug]);
    if (rows.length === 0) {
      await db.query(
        'INSERT INTO destinations (title, slug, meta_description, status) VALUES (?, ?, ?, ?)',
        [d.title, d.slug, d.meta_description, 'active']
      );
      console.log(`✅ Destination seeded: ${d.title}`);
    }
  }
};

const seedAbouts = async (db) => {
  const abouts = [
    { type: 'team', title: 'Vishnu Swami', subtitle: 'Fondateur francophone', description: 'Expert du terrain.', display_order: 1 },
    { type: 'value', title: 'Voyages Authentiques', subtitle: '', description: 'Découvrir la vraie Inde.', display_order: 2 }
  ];

  for (let a of abouts) {
    const [rows] = await db.query('SELECT * FROM abouts WHERE title = ?', [a.title]);
    if (rows.length === 0) {
      await db.query(
        'INSERT INTO abouts (type, title, subtitle, description, display_order) VALUES (?, ?, ?, ?, ?)',
        [a.type, a.title, a.subtitle, a.description, a.display_order]
      );
      console.log(`✅ About element seeded: ${a.title}`);
    }
  }
};

const runSeeder = async () => {
  try {
    const db = await mysql.createConnection(dbConfig);
    console.log('--- Seeding Database ---');
    await seedAdmin(db);
    await seedSeoPages(db);
    await seedDestinations(db);
    await seedAbouts(db);
    console.log('--- Seeding Complete ---');
    process.exit(0);
  } catch (err) {
    console.error('Error during seeding:', err);
    process.exit(1);
  }
};

runSeeder();
