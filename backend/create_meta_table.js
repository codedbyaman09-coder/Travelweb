const db = require("./db");

const createMetaTable = async () => {
  try {
    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS meta_data (
        id INT AUTO_INCREMENT PRIMARY KEY,
        pageName VARCHAR(255) NOT NULL,
        pageUrl VARCHAR(255) NOT NULL UNIQUE,
        pageSlug VARCHAR(255) NOT NULL UNIQUE,
        metaTitle VARCHAR(255),
        metaDescription TEXT,
        metaKeywords TEXT,
        canonicalUrl VARCHAR(255),
        robotsTag VARCHAR(255) DEFAULT 'index, follow',
        ogTitle VARCHAR(255),
        ogDescription TEXT,
        ogImage VARCHAR(255),
        ogUrl VARCHAR(255),
        twitterTitle VARCHAR(255),
        twitterDescription TEXT,
        twitterImage VARCHAR(255),
        twitterCardType VARCHAR(255) DEFAULT 'summary_large_image',
        schemaMarkup TEXT,
        status ENUM('active', 'inactive') DEFAULT 'active',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      )
    `;
    await db.query(createTableQuery);
    console.log("meta_data table ensured.");

    const seedData = [
      {
        pageName: "Home Page",
        pageUrl: "/",
        pageSlug: "voyage-sur-mesure-en-inde",
        metaTitle: "Voyage sur mesure en Inde | Indeora",
        metaDescription: "Découvrez des voyages sur mesure en Inde avec Indeora. Créez votre itinéraire personnalisé avec une agence locale experte en Inde.",
        metaKeywords: "voyage sur mesure en inde, voyage inde personnalisé, séjour en inde, circuit inde, indeora",
      },
      {
        pageName: "About Page",
        pageUrl: "/about",
        pageSlug: "agence-de-voyage-en-inde",
        metaTitle: "Agence de voyage en Inde | Agence locale en Inde | Indeora",
        metaDescription: "Indeora est une agence de voyage locale en Inde spécialisée dans les voyages sur mesure, circuits privés et expériences authentiques en Inde.",
        metaKeywords: "agence de voyage en inde, agence local en inde, agence locale inde, voyage sur mesure inde, indeora",
      },
      {
        pageName: "Contact Page",
        pageUrl: "/contact",
        pageSlug: "contacter-agence-voyage-inde",
        metaTitle: "Contacter une agence de voyage en Inde | Indeora",
        metaDescription: "Contactez Indeora, votre agence locale en Inde, pour organiser un voyage sur mesure adapté à vos envies.",
        metaKeywords: "contacter agence voyage inde, agence locale inde contact, voyage inde contact, indeora contact",
      },
      {
        pageName: "FAQ Page",
        pageUrl: "/faq",
        pageSlug: "questions-voyage-en-inde",
        metaTitle: "Questions fréquentes sur le voyage en Inde | Indeora",
        metaDescription: "Retrouvez les réponses aux questions fréquentes sur les voyages en Inde, circuits privés, sécurité, budget et organisation.",
        metaKeywords: "questions voyage inde, faq voyage inde, conseils voyage inde, circuit inde, indeora",
      },
      {
        pageName: "Blog Page",
        pageUrl: "/blog",
        pageSlug: "blog-voyage-en-inde",
        metaTitle: "Blog voyage en Inde | Conseils et inspirations | Indeora",
        metaDescription: "Découvrez nos articles, conseils et inspirations pour préparer votre voyage sur mesure en Inde.",
        metaKeywords: "blog voyage inde, conseils voyage inde, inspiration voyage inde, guide inde, indeora blog",
      },
      {
        pageName: "Destinations Page",
        pageUrl: "/destinations",
        pageSlug: "destinations-voyage-en-inde",
        metaTitle: "Destinations en Inde | Circuits et lieux à découvrir | Indeora",
        metaDescription: "Explorez les plus belles destinations en Inde avec Indeora : Rajasthan, Kerala, Varanasi, Himalaya, Goa et plus encore.",
        metaKeywords: "destinations inde, voyage rajasthan, voyage kerala, voyage varanasi, circuit inde, indeora destinations",
      }
    ];

    for (const data of seedData) {
      await db.query(
        `INSERT IGNORE INTO meta_data (pageName, pageUrl, pageSlug, metaTitle, metaDescription, metaKeywords) VALUES (?, ?, ?, ?, ?, ?)`,
        [data.pageName, data.pageUrl, data.pageSlug, data.metaTitle, data.metaDescription, data.metaKeywords]
      );
    }
    console.log("Seeding complete.");
    process.exit(0);
  } catch (err) {
    console.error("Error creating/seeding meta_data:", err);
    process.exit(1);
  }
};

createMetaTable();
