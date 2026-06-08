const mysql = require('mysql2/promise');

async function fixDestinations() {
  const db = await mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '1234',
    database: 'indeora'
  });

  try {
    const [rows] = await db.query('SELECT config FROM destinations_pages ORDER BY id DESC LIMIT 1');
    if (rows.length > 0) {
      let config = rows[0].config;
      if (typeof config === 'string') config = JSON.parse(config);
      
      if (!config.typography) config.typography = {};
      if (!config.content) config.content = {};
      
      config.typography.headingColor = '#ffffff';
      config.content.heroHeading = 'Nos destinations\nen Inde';
      config.content.heroDescription = 'Des régions fascinantes, des cultures uniques et des\nexpériences inoubliables.';

      await db.query('UPDATE destinations_pages SET config = ? ORDER BY id DESC LIMIT 1', [JSON.stringify(config)]);
      console.log('Database updated successfully.');
    } else {
      console.log('No config found in DB, relying on DEFAULT_CONFIG.');
    }
  } catch (err) {
    console.error(err);
  } finally {
    await db.end();
  }
}

fixDestinations();
