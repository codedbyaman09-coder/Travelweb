const db = require('./db');

const destinations = [
  {
    title: 'Rajasthan Authentique Varanasi',
    slug: 'voyage-photo-expeditions',
    image_url: 'http://localhost:8000/uploads/dest-card-1.png',
    meta_description: "Capturez l'âme de l'Inde à travers l'objectif avec nos photographes experts.",
    status: 'active',
    type: 'destination'
  },
  {
    title: 'Rajasthan Rural Inde Authentique',
    slug: 'immersion-villages-indiens',
    image_url: 'http://localhost:8000/uploads/dest-card-2.png',
    meta_description: "Vivez au rythme des communautés locales pour une expérience humaine profonde.",
    status: 'active',
    type: 'destination'
  },
  {
    title: 'Rajasthan Gujarat',
    slug: 'art-artisanat-savoir-faire',
    image_url: 'http://localhost:8000/uploads/dest-card-3.png',
    meta_description: "Découvrez les techniques ancestrales des artisans indiens, du tissage à la poterie.",
    status: 'active',
    type: 'destination'
  },
  {
    title: 'Inde Spirituelle Bien-Être',
    slug: 'spiritualite-yoga-ayurveda',
    image_url: 'http://localhost:8000/uploads/dest-card-4.png',
    meta_description: "Retrouvez l'équilibre à travers le yoga, la méditation et les soins ayurvédiques.",
    status: 'active',
    type: 'destination'
  },
  {
    title: 'Inde Sauvage Tigres du Bengale',
    slug: 'safaris-vie-sauvage',
    image_url: 'http://localhost:8000/uploads/dest-card-5.png',
    meta_description: "Observez le tigre du Bengale et la biodiversité exceptionnelle des parcs nationaux.",
    status: 'active',
    type: 'destination'
  },
  {
    title: 'Rajasthan Romantique Kerala',
    slug: 'lune-de-miel-escapades-romantiques',
    image_url: 'http://localhost:8000/uploads/dest-card-6.png',
    meta_description: "Célébrez votre union dans les décors somptueux des palais de maharajas.",
    status: 'active',
    type: 'destination'
  },
  {
    title: 'Rajasthan Gujarat Inde Tribale',
    slug: 'rencontres-ethniques-cultures-locales',
    image_url: 'http://localhost:8000/uploads/dest-card-7.png',
    meta_description: "Explorez la diversité culturelle des peuples de l'Inde et leurs traditions uniques.",
    status: 'active',
    type: 'destination'
  },
  {
    title: 'Leh Nubra Valley Pangong Lake',
    slug: 'himalaya-aventures-hors-sentiers-battus',
    image_url: 'http://localhost:8000/uploads/dest-card-8.png',
    meta_description: "Dépassez vos limites dans les paysages grandioses des hautes altitudes.",
    status: 'active',
    type: 'destination'
  },
  {
    title: 'Kerala Tropical Houseboat Experience',
    slug: 'croisieres-backwaters-kerala',
    image_url: 'http://localhost:8000/uploads/dest-card-9.png',
    meta_description: "Naviguez paisiblement sur les canaux tropicaux à bord d'un kettuvalam traditionnel.",
    status: 'active',
    type: 'destination'
  },
  {
    title: 'Festivals couleurs traditions indiennes',
    slug: 'festivals-couleurs-traditions-indiennes',
    image_url: 'http://localhost:8000/uploads/dest-card-10.png',
    meta_description: "Plongez dans l'effervescence des plus grandes célébrations religieuses et culturelles.",
    status: 'active',
    type: 'destination'
  }
];

async function seed() {
  console.log('Seeding destination cards...');
  let added = 0, skipped = 0;

  for (const d of destinations) {
    try {
      const [existing] = await db.query('SELECT id FROM destinations WHERE slug = ?', [d.slug]);
      if (existing.length > 0) {
        // Update existing
        await db.query(
          'UPDATE destinations SET title=?, image_url=?, meta_description=?, status=?, type=? WHERE slug=?',
          [d.title, d.image_url, d.meta_description, d.status, d.type, d.slug]
        );
        console.log(`  Updated: ${d.title}`);
        skipped++;
      } else {
        await db.query(
          'INSERT INTO destinations (title, slug, image_url, meta_description, status, type) VALUES (?,?,?,?,?,?)',
          [d.title, d.slug, d.image_url, d.meta_description, d.status, d.type]
        );
        console.log(`  Added: ${d.title}`);
        added++;
      }
    } catch (err) {
      console.error(`  Error on ${d.title}:`, err.message);
    }
  }

  console.log(`\nDone! Added: ${added}, Updated: ${skipped}`);
  process.exit(0);
}

seed();
