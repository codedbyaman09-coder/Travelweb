const db = require("./db");

const updateTitles = async () => {
  try {
    await db.query(`UPDATE meta_data SET metaTitle = 'Indeora Voyages | Voyage sur mesure en Inde' WHERE pageUrl = '/'`);
    await db.query(`UPDATE meta_data SET metaTitle = 'Indeora Voyages | Agence de voyage en Inde' WHERE pageUrl = '/about'`);
    await db.query(`UPDATE meta_data SET metaTitle = 'Indeora Voyages | Contacter une agence de voyage en Inde' WHERE pageUrl = '/contact'`);
    await db.query(`UPDATE meta_data SET metaTitle = 'Indeora Voyages | Questions fréquentes sur le voyage en Inde' WHERE pageUrl = '/faq'`);
    await db.query(`UPDATE meta_data SET metaTitle = 'Indeora Voyages | Blog voyage en Inde' WHERE pageUrl = '/blog'`);
    await db.query(`UPDATE meta_data SET metaTitle = 'Indeora Voyages | Destinations en Inde' WHERE pageUrl = '/destinations'`);
    console.log("Titles updated to prioritize brand name.");
    process.exit(0);
  } catch(err) {
    console.error(err);
    process.exit(1);
  }
}
updateTitles();
