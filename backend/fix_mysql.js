const mysql = require('mysql2/promise');

async function fixDb() {
  try {
    const connection = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '1234',
      database: 'indeora'
    });

    const [rows] = await connection.execute('SELECT * FROM blog_pages LIMIT 1');
    if (rows.length > 0) {
      let config = rows[0].config;
      if (typeof config === 'string') config = JSON.parse(config);
      
      // Update card design to match the elegant, borderless, tall-image design from Image 1
      config.cardDesign.bgColor = "transparent";
      config.cardDesign.shadow = "none";
      config.cardDesign.hoverEffect = "none"; // Or keep a subtle hover effect if desired, but remove shadow-xl
      config.cardDesign.borderRadius = "0px";
      config.cardDesign.imageRadius = "0px";
      config.cardDesign.imageHeight = "100%"; // Let aspect-[3/4] control the height
      config.cardDesign.borderColor = "transparent";
      
      // Update alignment to center the text in the cards
      config.alignment.cardContentAlign = "center";
      
      await connection.execute('UPDATE blog_pages SET config = ? WHERE id = ?', [JSON.stringify(config), rows[0].id]);
      console.log('DB Updated successfully with card design fix');
    } else {
      console.log('No blog_pages entry found');
    }
    
    await connection.end();
  } catch(e) {
    console.error(e);
  }
}

fixDb();
