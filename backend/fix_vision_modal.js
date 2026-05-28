const db = require('./config/db');

async function fixVisionModalText() {
  try {
    const text = `Chez Indeora Voyages, nous croyons qu’un voyage en Inde ne se résume pas à une simple succession de visites ou de paysages. Voyager en Inde, c’est vivre une émotion, ressentir une atmosphère, découvrir une culture fascinante et se laisser transformer par l’intensité du pays.

Notre vision du voyage repose sur une approche profondément humaine, immersive et personnalisée. Chaque itinéraire est imaginé comme une expérience unique, pensée selon votre rythme, vos envies et votre manière de ressentir le monde. Nous privilégions les rencontres sincères, les lieux authentiques et les expériences qui donnent du sens au voyage.

Grâce à notre double culture franco-indienne, nous comprenons à la fois les attentes des voyageurs francophones et l’âme véritable de l’Inde. Cette sensibilité nous permet de créer des voyages élégants et équilibrés, mêlant découvertes incontournables, moments exclusifs et immersion dans une Inde plus intime, loin des itinéraires standardisés.

Des palais majestueux du Rajasthan aux villages oubliés de l’Himalaya, des cérémonies spirituelles sur les rives du Gange aux paysages tropicaux du Kerala, chaque région révèle une facette différente de l’Inde. Notre rôle est de vous ouvrir les portes de cette diversité, avec authenticité, fluidité et attention au moindre detail.

Nous accordons une importance particulière à la qualité des rencontres humaines, au choix des hébergements, à la richesse culturelle des expériences et au confort de votre voyage. Chauffeurs privés expérimentés, guides francophones passionnés, assistance avant, pendant et après le séjour : tout est pensé pour vous permettre de voyager sereinement et pleinement.

Plus qu’un voyage organisé, nous créons des expériences qui marquent durablement les souvenirs. Car pour nous, découvrir l’Inde ne signifie pas seulement voir un pays — c’est apprendre à le ressentir, à le comprendre et à le vivre de l’intérieur.`;

    await db.query(`UPDATE home_sections SET modal_text = ? WHERE section_key = 'vision'`, [text]);
    console.log("Updated vision modal text");
    process.exit(0);
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
}

fixVisionModalText();
