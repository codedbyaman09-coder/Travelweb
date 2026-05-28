const db = require('./config/db');

async function seedReviews() {
  try {
    const [sections] = await db.query("SELECT id FROM home_sections WHERE section_key = 'reviews'");
    const sectionId = sections[0]?.id;

    if (!sectionId) {
      console.log("reviews section not found.");
      process.exit(1);
    }

    const reviews = [
      {
        author: "Fanny Cabe",
        text: `Superbe voyage dans le Kerala organisé par Le Passage en Inde.\nAmandine et Vishnu nous ont accompagnés du début à la fin et nous nous sommes sentis pleinement confiants comme en famille.\nLe guide et le chauffeur étaient tout aussi parfaits.\nNous n’hésiterons pas à les rappeler pour notre prochain voyage.`,
        rating: "5"
      },
      {
        author: "Marie Constans",
        text: `Un super séjour de 13 jours avec un groupe de 8 femmes. Que dis je, 9 femmes dont notre formidable guide Shabi, dynamique, toujours présente pour nous, à l'écoute de nos envies et à se plier en 4 pour nous.\nAmandine a été le début de notre super séjour en Inde et la clé indispensable à notre départ.\nL'organisation de ce séjour correspondait à nos idées de ce séjour.\nNous avons rencontrés que des personnes adorables, professionnelles, de confiance et disponible à toutes nos questions et inquiétudes diverses.\nCette expérience, ce voyage a était superbe sur tous les points.\nJe recommande "le passage en Inde" les yeux fermés. 🙏`,
        rating: "5"
      },
      {
        author: "helene Thiercelin",
        text: `15 jours merveilleusement préparés et guidés. Le passage en Inde a été très à l’écoute de nos attentes et a su créer ce voyage exceptionnel sur mesure. Nous avons été très heureuses du professionnalisme et du savoir de Vishnu 🙏`,
        rating: "5"
      },
      {
        author: "Carole VIDAL",
        text: `J’ai fait appel au "Passage en Inde", une micro-agence de voyages, pour organiser un séjour hors des sentiers battus, et j’en suis absolument ravie !\nAmandine a été d’un professionnalisme exemplaire : de très bons conseils, disponible, chaleureuse et toujours à l’écoute. Elle nous a accompagnées du début à la fin, ce qui a vraiment fait la différence.\n\nNotre guide sur place, Rakesh a également été fantastique : bienveillant, attentionné, toujours prêt à répondre à nos attentes et à partager ses connaissances. Grâce à eux, nous avons vécu un voyage unique, authentique and parfaitement organisé.\n\nPour un prochain voyage en Inde, je choisirai sans hésiter "Le Passage en Inde" à nouveau. Je recommande cette agence les yeux fermés !`,
        rating: "5"
      },
      {
        author: "Olivia RUIZ",
        text: "Après une visite du Rajasthan il y a deux ans (avec une autre agence), nous voulions explorer le Bengale occidental. Nous avions quelques envies que nous avons transmises à Amandine qui nous a concocté un voyage sur mesure (pour un prix très raisonnable). Nous étions 3 plus Rakesh notre génial guide. Tout a été parfait 🤩 Je recommande vivement 👍😊",
        rating: "5"
      }
    ];

    await db.query("DELETE FROM home_section_items WHERE section_id = ?", [sectionId]);

    const defaultLink = "https://www.google.com/search?q=Le+Passage+En+Inde&oq=Le+Passage+En+Inde#lrd=0x390d1deee0a08e93:0x1b2cf4ff200df18d,1,,,,";

    for (let i = 0; i < reviews.length; i++) {
      const review = reviews[i];
      await db.query(
        "INSERT INTO home_section_items (section_id, title, subtitle, description, link, display_order) VALUES (?, ?, ?, ?, ?, ?)",
        [sectionId, review.author, review.rating, review.text, defaultLink, i + 1]
      );
    }

    await db.query("UPDATE home_sections SET title = ? WHERE id = ?", [
      "Ils ont aimé voyager avec nous",
      sectionId
    ]);

    console.log("Reviews items seeded successfully!");
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

seedReviews();
