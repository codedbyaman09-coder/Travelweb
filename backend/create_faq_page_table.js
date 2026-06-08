const db = require('./db');

const DEFAULT_CONFIG = {
  layout: { pageWidth: '100%', containerWidth: '1440px', sectionWidth: '100%', sectionHeight: 'auto', minHeight: '100vh', maxWidth: '100%', bgColor: '#ffffff', bgImage: '', border: 'none', borderRadius: '0px', boxShadow: 'none', overflow: 'hidden', responsiveWidth: '100%' },
  spacing: { marginTop: '0px', marginBottom: '0px', marginLeft: 'auto', marginRight: 'auto', paddingTop: '64px', paddingBottom: '64px', paddingLeft: '16px', paddingRight: '16px', gapSections: '32px', gapColumns: '24px', faqItemGap: '0px', mobile: { pt: '32px', pb: '32px', px: '16px' }, tablet: { pt: '48px', pb: '48px', px: '32px' }, desktop: { pt: '64px', pb: '64px', px: '40px' } },
  alignment: { sectionAlign: 'center', textAlign: 'center', faqAlign: 'left', categoryAlign: 'left', flexDirection: 'row', gridColumns: '2' },
  typography: { headingColor: '#111111', headingSize: '67px', headingWeight: 'normal', headingLineHeight: '0.98', headingLetterSpacing: '-0.035em', paragraphColor: '#303030', paragraphSize: '14px', questionSize: '13.2px', questionWeight: '500', questionColor: '#242424', answerSize: '12.5px', answerColor: '#555555', categorySize: '20px', categoryColor: '#151515' },
  content: { pageTitle: 'QUESTIONS<br/>FRÉQUENTES', subtitle: 'FAQ', description: 'Retrouvez ici les réponses aux questions les plus courantes pour préparer votre voyage en Inde en toute sérénité.', faqHeading: 'Vos Questions', faqDescription: '', emptyFaqMessage: 'Aucune question trouvée', searchPlaceholder: 'Rechercher une question...', ctaSub: 'PRÊT À DÉCOUVRIR L’INDE ?', ctaTitle: 'Parlez-nous de votre projet de voyage', ctaDesc: 'En couple, en famille ou entre amis, nous créons avec vous le voyage qui vous ressemble.', ctaBtn: 'DEMANDER UN DEVIS PERSONNALISÉ', heroBg: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=1800', statsQuote: 'L’Inde n’est pas seulement<br/>une destination, c’est une émotion<br/>qui reste pour toujours.', stats1v: '18+', stats1l: 'ANS<br/>D’EXPÉRIENCE', stats2v: '100%', stats2l: 'VOYAGES<br/>SUR MESURE', stats3v: 'ÉQUIPE', stats3l: 'FRANCO-<br/>INDIENNE', stats4v: '24/7', stats4l: 'ASSISTANCE<br/>SUR PLACE', statsBg: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=1400', ctaBg: 'https://images.unsplash.com/photo-1548013146-72479768bbfd?q=80&w=1200' },
  accordion: { bgColor: '#fffdf8', padding: '20px', margin: '0', borderColor: '#ded2c0', borderRadius: '2px', shadow: 'none', questionHeight: '48px', answerPadding: '12px 20px 16px', answerBg: '#ffffff', iconColor: '#c6a263', iconSize: '17px', openIcon: 'plus', closeIcon: 'minus', hoverEffect: 'none', activeStyle: '' },
  searchCategory: { showSearch: 'true', searchWidth: '390px', searchHeight: '47px', searchPadding: '0 18px', searchBorder: '#d8cbb7', searchRadius: '6px', searchBg: '#ffffff', showCategory: 'true', catBtnBg: 'transparent', catBtnActive: '#bd8a3a', catBtnHover: '#fbf3e6', catBtnRadius: '2px' },
  classes: { pageWrapper: '', container: 'max-w-[1440px] mx-auto px-[40px]', hero: '', heading: '', subtitle: '', faqWrapper: '', faqItem: '', question: '', answer: '', icon: '', searchWrapper: '', searchInput: '', categoryWrapper: '', categoryButton: '' },
  responsive: { mobileLayout: 'col', tabletLayout: 'col', desktopLayout: 'row', mobilePadding: '16px', tabletPadding: '32px', desktopPadding: '40px', mobileFontSize: '14px', tabletFontSize: '16px', desktopFontSize: '16px', gridColsMobile: '1', gridColsTablet: '2', gridColsDesktop: '2' },
  theme: { primaryColor: '#bd8a3a' }
};

async function seed() {
  try {
    await db.query(`
      CREATE TABLE IF NOT EXISTS faq_pages (
        id INT AUTO_INCREMENT PRIMARY KEY,
        config JSON,
        status VARCHAR(50) DEFAULT 'active',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      )
    `);

    const [rows] = await db.query("SELECT * FROM faq_pages LIMIT 1");
    if (rows.length === 0) {
      await db.query("INSERT INTO faq_pages (config) VALUES (?)", [JSON.stringify(DEFAULT_CONFIG)]);
      console.log("faq_pages table created and seeded!");
    } else {
      console.log("faq_pages table already seeded.");
    }
    process.exit(0);
  } catch (error) {
    console.error("Error creating faq_pages:", error);
    process.exit(1);
  }
}

seed();
