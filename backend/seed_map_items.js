const db = require('./config/db');

async function seedMapItems() {
  try {
    const [sections] = await db.query("SELECT id, section_key FROM home_sections");
    const getSecId = (key) => sections.find(s => s.section_key === key)?.id;

    const mapId = getSecId('map');
    if (mapId) {
      // Check if already seeded
      const [existing] = await db.query("SELECT id FROM home_section_items WHERE section_id = ?", [mapId]);
      if (existing.length === 0) {
        const destinations = [
          {
            id: 'rajasthan',
            title: 'Rajasthan Royal Taj Mahal — 15 Jours',
            subtitle: 'Des palais raffinés de Jaipur aux ruelles bleues de Jodhpur, le Rajasthan offre une immersion unique au cœur de .',
            desc: 'Villes historiques, forts majestueux, désert du Thar, culture vivante et hospitalité légendaire.',
            img: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=400&q=80',
            side: 'left'
          },
          {
            id: 'triangle-or',
            title: 'Delhi, Jaipur Agra — 8 Jours',
            subtitle: "Des ruelles animées de Delhi aux palais roses de Jaipur en passant par l’inoubliable Taj Mahal d'Agra.",
            desc: "Les incontournables de l'Inde du Nord : Taj Mahal, palais des maharajas et marchés colorés.",
            img: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=400&q=80',
            side: 'left'
          },
          {
            id: 'himalaya',
            title: 'Le Ladakh et les contreforts himalayens ',
            subtitle: 'Terre de monastères, de sommets himalayens et de traditions tibétaines, le Ladakh révèle une facette spectaculaire ',
            desc: 'Monastères bouddhestes, vallées préservées, paysages à couper le souffle et treks inoubliables.',
            img: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=400&q=80',
            side: 'left'
          },
          {
            id: 'varanasi',
            title: 'La Vallée du Gange et Varanasi',
            subtitle: "Entre spiritualité, histoire et émotions intenses, la Vallée du Gange invite à découvrir l’âme de l’Inde. Le Taj Mahal, les ghats sacrés de Varanasi et les rituel",
            desc: 'Rituels du Gange, temples sacrés, aurores mystiques et une spiritualité millénaire.',
            img: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=400&q=80',
            side: 'right'
          },
          {
            id: 'kerala',
            title: 'L’Inde du Sud : Kerala et Tamil Nadu',
            subtitle: 'Entre temples majestueux, plantations de thé, backwaters paisibles et nature luxuriante, l’Inde du Sud dévoile une ',
            desc: 'Backwaters, plantations de thé, plages paradisiaques et Ayurveda.',
            img: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=400&q=80',
            side: 'right'
          },
          {
            id: 'inde-nord-est',
            title: 'Calcutta et l’Inde centrale',
            subtitle: 'Entre culture, spiritualité et histoire, Calcutta et l’Inde centrale offrent un voyage hors des sentiers battus au .',
            desc: 'Régions préservées, ethnies fascinantes, parcs nationaux et biodiversité exceptionnelle.',
            img: 'https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&w=400&q=80',
            side: 'right'
          }
        ];
        
        for (let i = 0; i < destinations.length; i++) {
          const c = destinations[i];
          await db.query(`INSERT INTO home_section_items (section_id, title, subtitle, description, image_url, link, icon, display_order) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`, 
            [mapId, c.title, c.subtitle, c.desc, c.img, `/destinations/${c.id}`, c.side, i + 1]
          );
        }
        console.log("Map items seeded successfully");
      } else {
        console.log("Map items already seeded");
      }
    }

    process.exit(0);
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
}

seedMapItems();
