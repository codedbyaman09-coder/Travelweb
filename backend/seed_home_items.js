const db = require('./config/db');

async function seedItems() {
  try {
    const [sections] = await db.query("SELECT id, section_key FROM home_sections");
    const getSecId = (key) => sections.find(s => s.section_key === key)?.id;

    const espritId = getSecId('esprit');
    if (espritId) {
      const defaultCards = [
        {
          title: "Où vous voulez",
          color: "#496344",
          icon: "/src/assets/image.png",
          text: "Des itinéraires imaginés selon vos inspirations, vos passions et votre rythme. Palais du Rajasthan, backwatersdu Kerala, Himalaya, spiritualité, nature ou expériences locales : chaque voyage est entièrement personnalisé pour vous faire vivre une Inde qui vous ressemble. "
        },
        {
          title: "Quand vous voulez",
          color: "#a34f2c",
          icon: "/src/assets/image copy.png",
          text: "Avant, pendant et après votre séjour, notre équipe reste à vos côtés.  Conseiller dédié, assistance francophone, chauffeurs privés expérimentés et accompagnement local : voyager librement tout en étant parfaitement entouré."
        },
        {
          title: "Comme vous aimez voyager",
          color: "#12264a",
          icon: "/src/assets/image copy 3.png",
          text: "En couple, en famille, entre amis ou en solo. Road trip au Rajasthan, voyage en train à travers l’Inde, séjour immersif, hôtels de charme ou escapade plus confortable : chaque détail s’adapte à votre façon de voyager. "
        },
        {
          title: "Une autre vision de l’Inde",
          color: "#496344",
          icon: "/src/assets/image copy 4.png",
          text: "Nous croyons qu’un beau voyage ne se résume pas à visiter des lieux. Il doit faire ressentir une émotion, créer des rencontres sincères et laisser des souvenirs profonds. C’est cette Inde plus humaine, élégante et authentique que nous aimons partager.la, Himalaya, spiritualité, nature ou expériences locales : chaque voyage est entièrement personnalisé pour vous faire vivre une Inde qui vous ressemble."
        }
      ];
      for (let i=0; i<defaultCards.length; i++) {
        const c = defaultCards[i];
        await db.query(`INSERT INTO home_section_items (section_id, title, subtitle, image_url, description, display_order) VALUES (?, ?, ?, ?, ?, ?)`, 
          [espritId, c.title, c.color, c.icon, c.text, i+1]
        );
      }
    }

    console.log("Seeded successfully");
    process.exit(0);
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
}

seedItems();
