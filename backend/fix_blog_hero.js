const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('d:/compnay/travelweb/backend/database.sqlite');

db.get('SELECT config FROM blog_page_config WHERE id = 1', (err, row) => {
  if (err) throw err;
  let config = JSON.parse(row.config);
  config.content.heroHeading = "LES CARNETS D'INDEORA";
  config.content.heroDescription = "RÉCITS DE VOYAGE, INSPIRATIONS, CONSEILS ET REGARDS AUTHENTIQUES SUR L'INDE.<br><br>À TRAVERS NOS CARNETS, DÉCOUVREZ UNE INDE ÉLÉGANTE, HUMAINE ET PROFONDÉMENT INSPIRANTE, RACONTÉE AU FIL DES RENCONTRES, DES ÉMOTIONS ET DES EXPÉRIENCES VÉCUES SUR LE TERRAIN";
  config.content.heroBg = "/src/assets/blog-header.png";
  
  db.run('UPDATE blog_page_config SET config = ? WHERE id = 1', [JSON.stringify(config)], (err) => {
    if (err) throw err;
    console.log("DB Updated successfully");
    db.close();
  });
});
