const db = require('./config/db');

async function seedFeaturedDest() {
  try {
    const [sections] = await db.query("SELECT id FROM home_sections WHERE section_key = 'featured_dest'");
    const sectionId = sections[0]?.id;

    if (!sectionId) {
      console.log("featured_dest section not found. Ensure it exists in home_sections.");
      process.exit(1);
    }

    const items = [
      {
        title: "BIEN-ÊTRE, YOGA\n& AYURVEDA",
        icon: "♧",
        desc: "Yoga, méditation et soins ayurvédiques.",
        img: "/src/assets/image copy 9.png",
        link: "/yoga",
      },
      {
        title: "HORS DES\nSENTIERS BATTUS",
        icon: "△",
        desc: "Régions préservées et beauté de l’Inde.",
        img: "/src/assets/image copy 10.png",
        link: "/himalaya-aventures-hors-sentiers-battus",
      },
      {
        title: "RENCONTRES\nETHNIQUES",
        icon: "☟",
        desc: "Communautés locales et traditions.",
        img: "/src/assets/image copy 11.png",
        link: "/rencontres-ethniques-cultures-locales",
      },
      {
        title: "FAMILLE &\nLUNE DE MIEL",
        icon: "♥",
        desc: "Expériences sur mesure and moments magiques.",
        img: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=900&q=90",
        link: "/lune-de-miel-escapades-romantiques",
      },
      {
        title: "NATURE &\nVIE SAUVAGE",
        icon: "♣",
        desc: "Nature sauvage, safaris and parcs nationaux.",
        img: "/src/assets/image copy 12.png",
        link: "/safaris-vie-sauvage",
      }
    ];

    await db.query("DELETE FROM home_section_items WHERE section_id = ?", [sectionId]);

    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      await db.query(
        "INSERT INTO home_section_items (section_id, title, subtitle, description, image_url, link, display_order) VALUES (?, ?, ?, ?, ?, ?, ?)",
        [sectionId, item.title, item.icon, item.desc, item.img, item.link, i + 1]
      );
    }

    await db.query("UPDATE home_sections SET title = ?, subtitle = ? WHERE id = ?", [
      "Des expériences uniques, des souvenirs pour la vie.",
      "L’INDE AUTREMENT",
      sectionId
    ]);

    console.log("Featured Dest items seeded successfully!");
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

seedFeaturedDest();
