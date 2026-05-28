const db = require('./db');

async function seedDestinationsPage() {
  try {
    // 1. dest_features (USP Banner)
    const features = [
      {
        title: "Experts Locaux",
        description: "Nos spécialistes du voyage connaissent l’Inde sur le bout des doigts et conçoivent des itinéraires fondés sur des expériences authentiques.",
        image: "/src/assets/ChatGPT Image May 14, 2026, 01_29_59 PM.png",
      },
      {
        title: "Voyages Sur Mesure",
        description: "Chaque itinéraire est conçu autour de vos centres d’intérêt, de votre style de voyage et de votre rythme.",
        image: "/src/assets/ChatGPT Image May 14, 2026, 01_34_31 PM.png",
      },
      {
        title: "Guides Privés",
        description: "Profitez de visites enrichissantes avec des guides expérimentés, anglophones et francophones.",
        image: "/src/assets/ChatGPT Image May 14, 2026, 01_37_59 PM.png",
      },
      {
        title: "Assistance Voyage 24h/24 Et 7j/7",
        description: "Notre équipe est disponible à tout moment durant votre voyage pour vous garantir une expérience fluide et sans souci.",
        image: "/src/assets/ChatGPT Image May 14, 2026, 01_40_49 PM.png",
      }
    ];

    for (let i = 0; i < features.length; i++) {
      const f = features[i];
      const [existing] = await db.query("SELECT * FROM abouts WHERE type='dest_features' AND title=?", [f.title]);
      if (existing.length === 0) {
        await db.query(
          "INSERT INTO abouts (type, title, description, image, display_order, status) VALUES (?, ?, ?, ?, ?, 'active')",
          ['dest_features', f.title, f.description, f.image, i]
        );
      }
    }

    // 2. dest_themes
    const themes = [
      {
        title: "Voyage en couple",
        image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=500&q=90",
        subtitle: "/demander-un-devis" // Using subtitle for link
      },
      {
        title: "Voyage en famille",
        image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=500&q=90",
        subtitle: "/demander-un-devis"
      },
      {
        title: "Safaris & nature",
        image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=500&q=90",
        subtitle: "/demander-un-devis"
      },
      {
        title: "Spiritualité & bien-être",
        image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=500&q=90",
        subtitle: "/demander-un-devis"
      },
      {
        title: "Culture & patrimoine",
        image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=500&q=90",
        subtitle: "/demander-un-devis"
      },
      {
        title: "Photographie & paysages",
        image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=500&q=90",
        subtitle: "/demander-un-devis"
      }
    ];

    for (let i = 0; i < themes.length; i++) {
      const t = themes[i];
      const [existing] = await db.query("SELECT * FROM abouts WHERE type='dest_themes' AND title=?", [t.title]);
      if (existing.length === 0) {
        await db.query(
          "INSERT INTO abouts (type, title, image, subtitle, display_order, status) VALUES (?, ?, ?, ?, ?, 'active')",
          ['dest_themes', t.title, t.image, t.subtitle, i]
        );
      }
    }

    // 3. dest_regions
    const regions = [
      {
        title: "Rajasthan",
        description: "Palais majestueux, déserts dorés et héritage royal.",
        image: "/src/assets/ChatGPT Image May 14, 2026, 05_53_26 PM.png",
        subtitle: "/voyage-photo-expeditions"
      },
      {
        title: "Inde du Nord",
        description: "Villes sacrées, traditions ancestrales et spiritualité.",
        image: "/src/assets/image copy 31.png",
        subtitle: "/immersion-villages-indiens"
      },
      {
        title: "Kerala",
        description: "Backwaters paisibles, plages et nature luxuriante.",
        image: "/src/assets/image copy 32.png",
        subtitle: "/croisieres-backwaters-kerala"
      },
      {
        title: "Himalaya",
        description: "Montagnes majestueuses et aventures en altitude.",
        image: "/src/assets/image copy 33.png",
        subtitle: "/himalaya-aventures-hors-sentiers-battus"
      },
      {
        title: "Inde du Sud",
        description: "Temples grandioses, culture et art de vivre unique.",
        image: "/src/assets/image copy 34.png",
        subtitle: "/lune-de-miel-escapades-romantiques"
      },
      {
        title: "Centrale",
        description: "Tribus, nature sauvage et trésors cachés.",
        image: "/src/assets/image copy 35.png",
        subtitle: "/rencontres-ethniques-cultures-locales"
      }
    ];

    for (let i = 0; i < regions.length; i++) {
      const r = regions[i];
      const [existing] = await db.query("SELECT * FROM abouts WHERE type='dest_regions' AND title=?", [r.title]);
      if (existing.length === 0) {
        await db.query(
          "INSERT INTO abouts (type, title, description, image, subtitle, display_order, status) VALUES (?, ?, ?, ?, ?, ?, 'active')",
          ['dest_regions', r.title, r.description, r.image, r.subtitle, i]
        );
      }
    }

    console.log("Destinations page content seeded successfully.");
    process.exit(0);
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
}

seedDestinationsPage();
