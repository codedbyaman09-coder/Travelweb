const db = require('./config/db');

async function seedEnviesItems() {
  try {
    const [sections] = await db.query("SELECT id, section_key FROM home_sections");
    let enviesId = sections.find(s => s.section_key === 'envies')?.id;

    if (!enviesId) {
      // Create the envies section if it doesn't exist
      const [res] = await db.query(`
        INSERT INTO home_sections (section_key, title, subtitle, status, display_order) 
        VALUES ('envies', 'Envies Grid', 'TOUTES VOS ENVIES DE VOYAGE EN INDE', 'active', 7)
      `);
      enviesId = res.insertId;
      console.log("Created envies section");
    }

    // Check if already seeded
    const [existing] = await db.query("SELECT id FROM home_section_items WHERE section_id = ?", [enviesId]);
    if (existing.length === 0) {
      const items = [
        { title: "Voyage sur mesure Inde", icon: "Compass", link: "" },
        { title: "Circuit Inde du Nord", icon: "Mountain", link: "" },
        { title: "Voyage Rajasthan sur mesure", icon: "Map", link: "" },
        { title: "Séjour bien-être & Ayurveda", icon: "Flower2", link: "" },
        { title: "Voyage de noces en Inde", icon: "Heart", link: "" },
        { title: "Voyage en famille en Inde", icon: "Users", link: "" },
        { title: "Première fois en Inde", icon: "Sparkles", link: "" },
        { title: "Voyage hors des sentiers battus", icon: "Compass", link: "" },
        { title: "Voyage religieux en Inde", icon: "Church", link: "" },
        { title: "Yoga & méditation en Inde", icon: "Leaf", link: "" },
        { title: "Circuit Inde du Sud", icon: "Waves", link: "" },
        { title: "Voyage Kerala sur mesure", icon: "Palmtree", link: "" },
        { title: "Combiné Nord & Sud", icon: "Route", link: "" },
        { title: "Trek & aventure en Inde", icon: "Tent", link: "" },
        { title: "Safari & nature en Inde", icon: "Trees", link: "" },
        { title: "Séjour plages en Inde", icon: "Waves", link: "" },
        { title: "Circuit culturel en Inde", icon: "Landmark", link: "" },
        { title: "Voyage luxe en Inde", icon: "Sparkles", link: "" },
        { title: "Inde en train de luxe", icon: "Train", link: "" },
        { title: "Road trip en Inde", icon: "Car", link: "" },
        { title: "Agences locales en Inde", icon: "Building2", link: "" },
        { title: "Chauffeur privé en Inde", icon: "Car", link: "" },
        { title: "Voyage responsable en Inde", icon: "Leaf", link: "" },
        { title: "Quand partir en Inde ?", icon: "Compass", link: "" },
        { title: "Visa & formalités Inde", icon: "ShieldCheck", link: "" },
      ];
      
      for (let i = 0; i < items.length; i++) {
        const c = items[i];
        await db.query(`INSERT INTO home_section_items (section_id, title, icon, link, display_order) VALUES (?, ?, ?, ?, ?)`, 
          [enviesId, c.title, c.icon, c.link, i + 1]
        );
      }
      console.log("Envies items seeded successfully");
    } else {
      console.log("Envies items already seeded");
    }

    process.exit(0);
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
}

seedEnviesItems();
