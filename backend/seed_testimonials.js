const mysql = require('mysql2/promise');
require('dotenv').config();

const reviews = [
  {
    author: "Fanny Cabe",
    text: `Superbe voyage dans le Kerala organisÃ© par Le Passage en Inde.\nAmandine et Vishnu nous ont accompagnÃ©s du dÃ©but Ã  la fin et nous nous sommes sentis pleinement confiants comme en famille.\nLe guide et le chauffeur Ã©taient tout aussi parfaits.\nNous nâ€™hÃ©siterons pas Ã  les rappeler pour notre prochain voyage.`,
    rating: 5
  },
  {
    author: "Marie Constans",
    text: `Un super sÃ©jour de 13 jours avec un groupe de 8 femmes. Que dis je, 9 femmes dont notre formidable guide Shabi, dynamique, toujours prÃ©sente pour nous, Ã  l'Ã©coute de nos envies et Ã  se plier en 4 pour nous.\nAmandine a Ã©tÃ© le dÃ©but de notre super sÃ©jour en Inde et la clÃ© indispensable Ã  notre dÃ©part.\nL'organisation de ce sÃ©jour correspondait Ã  nos idÃ©es de ce sÃ©jour.\nNous avons rencontrÃ©s que des personnes adorables, professionnelles, de confiance et disponible Ã  toutes nos questions et inquiÃ©tudes diverses.\nCette expÃ©rience, ce voyage a Ã©tait superbe sur tous les points.\nI recommande "le passage en Inde" les yeux fermÃ©s. ðŸ™ `,
    rating: 5
  },
  {
    author: "helene Thiercelin",
    text: `15 jours merveilleusement prÃ©parÃ©s et guidÃ©s. Le passage en Inde a Ã©tÃ© trÃ¨s Ã  lâ€™Ã©coute de nos attentes et a su crÃ©er ce voyage exceptionnel sur mesure. Nous avons Ã©tÃ© trÃ¨s heureuses du professionnalisme et du savoir de Vishnu ðŸ™ `,
    rating: 5
  },
  {
    author: "Carole VIDAL",
    text: `Jâ€™ai fait appel au "Passage en Inde", une micro-agence de voyages, pour organiser un sÃ©jour hors des sentiers battus, et jâ€™en suis absolument ravie !\nAmandine a Ã©tÃ© dâ€™un professionnalisme exemplaire : de trÃ¨s bons conseils, disponible, chaleureuse et toujours Ã  lâ€™Ã©coute. Elle nous a accompagnÃ©es du dÃ©but Ã  la fin, ce qui a vraiment fait la diffÃ©rence.\n\nNotre guide sur place, Rakesh a Ã©galement Ã©tÃ© fantastique : bienveillant, attentionnÃ©, toujours prÃªt Ã  rÃ©pondre Ã  nos attentes et Ã  partager ses connaissances. GrÃ¢ce Ã  eux, nous avons vÃ©cu un voyage unique, authentique and parfaitement organisÃ©.\n\nPour un prochain voyage en Inde, je choisirai sans hÃ©siter "Le Passage en Inde" Ã  nouveau. Je recommande cette agence les yeux fermÃ©s !`,
    rating: 5
  },
  {
    author: "Olivia RUIZ",
    text: "AprÃ¨s une visite du Rajasthan il y a deux ans (avec une autre agence), nous voulions explorer le Bengale occidental. Nous avions quelques envies que nous avons transmises Ã  Amandine qui nous a concoctÃ© un voyage sur mesure (pour un prix trÃ¨s raisonnable). Nous Ã©tions 3 plus Rakesh notre gÃ©nial guide. Tout a Ã©tÃ© parfait ðŸ¤© Je recommande vivement ðŸ‘ ðŸ˜Š",
    rating: 5
  }
];

async function run() {
  const db = await mysql.createConnection({
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "",
    database: process.env.DB_NAME || "indeora"
  });

  await db.query(`DELETE FROM content_items WHERE type = 'testimonial'`);

  for (let i = 0; i < reviews.length; i++) {
    const rev = reviews[i];
    await db.query(`
      INSERT INTO content_items (type, title, description, display_order, status) VALUES 
      ('testimonial', ?, ?, ?, 'active')
    `, [rev.author, rev.text, i + 1]);
  }
  
  console.log('Testimonials seeded');
  process.exit(0);
}

run();
