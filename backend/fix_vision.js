const db = require('./config/db');

async function fixVision() {
  try {
    await db.query(`
      UPDATE home_sections 
      SET 
        title = 'Notre vision du voyage', 
        subtitle = 'L\\'ART DU VOYAGE SUR MESURE EN INDE', 
        description = 'Voyager en Inde, c\\'est découvrir bien plus qu\\'une destination. C\\'est ressentir une émotion, vivre des rencontres sincères et s\\'ouvrir à une culture parmi les plus fascinantes au monde.', 
        image_url = '/src/assets/image copy 5.png', 
        extra_text = '"Chez Indeora Voyages, nous croyons qu’un voyage en Inde ne se résume pas à une simple succession de visites ou de paysages. Voyager en Inde, c’est vivre une émotion, ressentir une atmosphère..."'
      WHERE section_key = 'vision'
    `);
    console.log("Updated vision section properly");
    process.exit(0);
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
}

fixVision();
