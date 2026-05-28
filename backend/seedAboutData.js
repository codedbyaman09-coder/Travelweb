const db = require("./db");

async function seed() {
  try {
    const [teamRows] = await db.query("SELECT * FROM team_members");
    if (teamRows.length === 0) {
      console.log("Seeding team_members...");
      await db.query(`INSERT INTO team_members (name, designation, description, profile_image, status, display_order) VALUES 
        ('Vishnu Swami', 'Fondateur francophone', 'Passionné de voyages depuis toujours, Vishnu Swami a d’abord exploré le monde au-delà de l’Inde. Il a vécu plusieurs années en France où il a appris le français qu’il parle couramment.', '/src/assets/team/dipesh.png', 'active', 1),
        ('Amandine Fastré', 'Créatrice d’itinéraires', 'Amandine est une véritable passionnée de l’Inde, un pays où elle a vécu plus de 15 ans en tant que créatrice de voyages sur mesure.', '/src/assets/image copy 46.jpeg', 'active', 2)
      `);
    }

    const [sectionRows] = await db.query("SELECT * FROM about_sections");
    if (sectionRows.length === 0) {
      console.log("Seeding about_sections...");
      await db.query(`INSERT INTO about_sections (type, title, description, icon, image, display_order) VALUES 
        ('feature', 'Experts Locaux', 'Nos spécialistes du voyage connaissent l’Inde sur le bout des doigts et conçoivent des itinéraires fondés sur des expériences authentiques.', '/src/assets/ChatGPT Image May 14, 2026, 01_29_59 PM.png', '', 1),
        ('feature', 'Voyages Sur Mesure', 'Chaque itinéraire est conçu autour de vos centres d’intérêt, de votre style de voyage et de votre rythme.', '/src/assets/ChatGPT Image May 14, 2026, 01_34_31 PM.png', '', 2),
        ('feature', 'Guides Privés', 'Profitez de visites enrichissantes avec des guides expérimentés, anglophones et francophones.', '/src/assets/ChatGPT Image May 14, 2026, 01_37_59 PM.png', '', 3),
        ('feature', 'Assistance Voyage 24h/24 Et 7j/7', 'Notre équipe est disponible à tout moment durant votre voyage pour vous garantir une expérience fluide et sans souci.', '/src/assets/ChatGPT Image May 14, 2026, 01_40_49 PM.png', '', 4),
        ('values', 'Authenticité', 'Nous privilégions les expériences vraies et les rencontres sincères.', '♡', '', 5),
        ('values', 'Respect', 'Nous respectons les cultures, les traditions et les communautés locales.', '♙', '', 6),
        ('values', 'Éthique', 'Nous travaillons avec des partenaires de confiance partageant nos valeurs.', '♧', '', 7),
        ('values', 'Qualité', 'Nous sélectionnons le meilleur pour vous offrir confort, sécurité et sérénité.', '◇', '', 8),
        ('values', 'Engagement', 'Nous soutenons un tourisme durable et bénéfique pour les régions que nous visitons.', '◎', '', 9),
        ('services', 'Hôtels de charme et hébergements authentiques', '', '', '', 10),
        ('services', 'Guides francophones passionnés', '', '', '', 11),
        ('services', 'Chauffeurs privés expérimentés', '', '', '', 12),
        ('services', 'Expériences locales uniques et exclusives', '', '', '', 13)
      `);
    }
    console.log("Seeding complete.");
    process.exit(0);
  } catch (err) {
    console.error("Error seeding:", err);
    process.exit(1);
  }
}

seed();
