import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import PourquoiVoyager from '../components/PourquoiVoyager';
import VotreVoyageForm from '../components/VotreVoyageForm';
import contactHeroImg from '../assets/image copy 43.png';

const DEFAULT_CONFIG = {
  layout: { pageWidth: '100%', containerWidth: '1440px', sectionWidth: '100%', sectionHeight: 'auto', minHeight: '100vh', maxWidth: '100%', bgColor: '#ffffff', bgImage: '', border: 'none', borderRadius: '0px', boxShadow: 'none', overflow: 'hidden', responsiveWidth: '100%' },
  spacing: { marginTop: '0px', marginBottom: '0px', marginLeft: 'auto', marginRight: 'auto', paddingTop: '64px', paddingBottom: '64px', paddingLeft: '16px', paddingRight: '16px', gapSections: '32px', gapColumns: '24px', mobile: { pt: '32px', pb: '32px', px: '16px' }, tablet: { pt: '48px', pb: '48px', px: '32px' }, desktop: { pt: '64px', pb: '64px', px: '40px' } },
  alignment: { sectionAlign: 'center', textAlign: 'center', formAlign: 'center', mapAlign: 'center', cardAlign: 'left', flexDirection: 'row', gridColumns: '2' },
  typography: { headingText: 'UNE AUTRE FAÇON DE DÉCOUVRIR L’INDE', headingColor: '#A88B52', headingSize: '12px', headingWeight: 'bold', headingLineHeight: '1.5', headingLetterSpacing: '0.4em', paragraphText: 'Depuis plus de 18 ans...', paragraphColor: '#4b5563', paragraphSize: '15px', labelColor: '#374151', inputColor: '#111827', placeholderColor: '#9ca3af', buttonTextColor: '#ffffff' },
  content: { pageTitle: 'Contact', subtitle: '', description: 'Depuis plus de 18 ans, Indeora Voyages imagine des voyages sur mesure en Inde pour les voyageurs francophones en quête d’authenticité, d’élégance et d’expériences profondément humaines.\n\nPrésente directement sur le terrain, notre équipe franco-indienne sélectionne avec soin des hébergements de charme, des guides francophones passionnés et des expériences uniques afin de vous faire découvrir une Inde vraie, loin des voyages standardisés.', inAddress: 'INDEORA VOYAGES, Bikaner, Rajasthan 334001, India', inPhone: '+91 93514 21959', inEmail: 'contact@indeoravoyages.com', workingHours: '', socialLinks: '', inMap: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6104.419158273716!2d73.31993271792733!3d28.02009685969809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e08edcd9da98535%3A0xdea99cf3a46df3c4!2sINDEORA%20VOYAGES!5e0!3m2!1sen!2sin!4v1779356710556!5m2!1sen!2sin', formTitle: 'Envoyer un message', formDesc: '', buttonText: 'Envoyer un message', heroBg: contactHeroImg, heroText: 'NOUS SOMMES À VOTRE ÉCOUTE POUR CRÉER LE VOYAGE DE VOS RÊVES EN INDE.', frAddress: 'Le Passage en Inde, Calmont, 12000 Rodez, France', frPhone: '+33 759 47 06 04', frEmail: 'contact@indeoravoyages.com', frWeb: 'www.indeoravoyages.fr', frMap: 'https://www.google.com/maps?q=Le+Passage+en+Inde,+Calmont,+12000+Rodez,+France&output=embed', inWeb: 'www.indeoravoyages.com' },
  formDesign: { inputWidth: '100%', inputHeight: '48px', inputPadding: '12px', inputMargin: '0 0 16px 0', borderColor: '#e5e7eb', borderRadius: '4px', bgColor: '#f9fafb', focusColor: '#A88B52', textareaHeight: '120px', labelPosition: 'top', buttonWidth: 'auto', buttonHeight: '48px', buttonBg: '#A88B52', buttonHoverBg: '#8c7344', buttonRadius: '2px', buttonClasses: '' },
  cards: { bg: '#2d2d2d', padding: '24px', margin: '0', radius: '4px', shadow: '0 4px 6px -1px rgba(0,0,0,0.1)', borderColor: 'transparent', iconColor: '#A88B52', iconSize: '24px', hoverEffect: 'none', align: 'center', headerBg: '#eff6ff' },
  classes: { pageWrapper: '', container: 'max-w-[1440px] mx-auto px-[40px]', hero: 'relative h-[280px] md:h-[85vh] w-full overflow-hidden flex items-center justify-center', heading: 'text-[10px] md:text-[12px] font-bold tracking-[0.4em] mb-6 md:mb-8 uppercase', subtitle: '', contactGrid: 'grid grid-cols-1 md:grid-cols-2 gap-12', contactCard: 'space-y-6', formWrapper: '', input: '', textarea: '', button: 'bg-transparent border border-white/40 text-white text-[7px] md:text-[11px] tracking-[0.3em] md:tracking-[0.4em] font-bold py-3 px-6 md:py-6 md:px-14 hover:bg-white hover:text-black transition-all duration-700 uppercase rounded-sm backdrop-blur-[2px]', mapWrapper: 'w-full h-[250px] md:h-[400px] rounded-sm overflow-hidden border border-gray-100 shadow-md' },
  responsive: { mobileLayout: 'col', tabletLayout: 'col', desktopLayout: 'row', mobilePadding: '16px', tabletPadding: '32px', desktopPadding: '40px', mobileFontSize: '14px', tabletFontSize: '16px', desktopFontSize: '16px', gridColsMobile: '1', gridColsTablet: '2', gridColsDesktop: '2' }
};

const ContactRapide = () => {
  const [config, setConfig] = useState(DEFAULT_CONFIG);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContactConfig = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/contact-page');
        const data = await response.json();
        if (data.success && data.data && data.data.length > 0) {
          const apiConfig = data.data[0].config;
          const mergedConfig = { ...DEFAULT_CONFIG };
          for (let key in DEFAULT_CONFIG) {
            if (apiConfig[key]) {
              mergedConfig[key] = { ...DEFAULT_CONFIG[key], ...apiConfig[key] };
            }
          }
          setConfig(mergedConfig);
        }
      } catch (err) {
        console.error("Failed to load contact config:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchContactConfig();
  }, []);

  const { layout, spacing, alignment, typography, content, formDesign, cards, classes, responsive } = config;

  return (
    <div className={`min-h-screen ${classes.pageWrapper}`} style={{ 
      backgroundColor: layout.bgColor, 
      '--contact-primary': typography.headingColor, 
      '--contact-text': typography.paragraphColor,
      '--card-bg': cards.bg,
      '--card-header': cards.headerBg
    }}>
      {/* Dynamic CSS Generation */}
      <style dangerouslySetInnerHTML={{ __html: `
        .contact-hero-btn {
          ${classes.button === DEFAULT_CONFIG.classes.button ? '' : `
            background-color: ${formDesign.buttonBg};
            border-radius: ${formDesign.buttonRadius};
          `}
        }
        .contact-hero-btn:hover {
          ${classes.button === DEFAULT_CONFIG.classes.button ? '' : `
            background-color: ${formDesign.buttonHoverBg};
          `}
        }
      `}} />

      {/* Hero Section */}
      <div className={classes.hero}>
        <div className="absolute inset-0">
          <img
            src={content.heroBg || contactHeroImg}
            alt="Contact Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/50"></div>
        </div>

        <div className="relative z-10 text-center px-4 md:px-6 max-w-4xl pt-4 md:pt-32 translate-y-16 md:translate-y-0">
          <p className="text-white/90 text-[8.5px] md:text-[16px] tracking-[0.2em] md:tracking-[0.4em] uppercase mb-6 md:mb-12 font-light leading-[1.6] md:leading-relaxed max-w-[280px] md:max-w-none mx-auto whitespace-pre-line" dangerouslySetInnerHTML={{ __html: content.heroText.replace(/\n/g, '<br/>') }} />
          <div>
            <button
              onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
              className={`contact-hero-btn ${classes.button}`}
            >
              {content.buttonText}
            </button>
          </div>
        </div>
      </div>

      {/* Header Section */}
      <div className="text-center py-16 md:py-24 w-full" id="contact-form">
        <div className={classes.container} style={{ maxWidth: layout.containerWidth }}>
           <h2 className={classes.heading} style={{ color: typography.headingColor }}>{content.title || typography.headingText}</h2>
           <p className="text-[var(--contact-text)] text-sm md:text-[15px] leading-relaxed md:leading-[1.8] max-w-4xl mx-auto font-medium opacity-80 whitespace-pre-line">
             {content.description}
           </p>
        </div>
      </div>

      {/* Form Section */}
      <VotreVoyageForm />

      {/* Nos coordonnées Section */}
      <div className="py-4 md:py-6 px-6" style={{ backgroundColor: cards.headerBg }}>
        <div className={classes.container} style={{ maxWidth: layout.containerWidth }}>
          <h2 className="text-3xl md:text-5xl font-serif text-[var(--contact-text)] text-center mb-4 md:mb-6 italic">Nos coordonnées</h2>

          <div className={classes.contactGrid} style={{ display: 'grid', gridTemplateColumns: `repeat(auto-fit, minmax(300px, 1fr))`, gap: spacing.gapColumns }}>
            {/* India Bureau */}
            <div className={classes.contactCard}>
              <div className="text-white py-4 px-4 md:py-5 md:px-6 flex items-center justify-center gap-3 md:gap-4 shadow-lg text-center" style={{ backgroundColor: cards.bg, borderRadius: cards.radius, boxShadow: cards.shadow }}>
                <div className="w-5 h-5 md:w-6 md:h-6 rounded-full border flex items-center justify-center shrink-0" style={{ borderColor: cards.iconColor }}>
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full" style={{ backgroundColor: cards.iconColor }}></div>
                </div>
                <h3 className="text-[14px] md:text-[16px] font-bold tracking-[0.15em] md:tracking-[0.2em] uppercase" style={{ color: typography.headingColor }}>BUREAU en INDE</h3>
              </div>
              <div className="space-y-4 px-2">
                <div className="flex items-start gap-3 md:gap-4 text-[var(--contact-text)]">
                  <img src="https://flagcdn.com/w20/in.png" alt="India" className="mt-1 w-4 md:w-5 shrink-0" />
                  <span className="text-[12px] md:text-[13px] font-medium leading-relaxed">{content.inAddress}</span>
                </div>
                <div className="flex items-center gap-3 md:gap-4 text-[var(--contact-text)]">
                  <svg className="w-3.5 h-3.5 md:w-4 md:h-4 shrink-0" style={{ color: cards.iconColor }} fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" /></svg>
                  <span className="text-[12px] md:text-[13px] font-medium">{content.inPhone}</span>
                </div>
                <div className="flex items-center gap-3 md:gap-4 text-[var(--contact-text)]">
                  <svg className="w-3.5 h-3.5 md:w-4 md:h-4 shrink-0" style={{ color: cards.iconColor }} fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" /></svg>
                  <span className="text-[12px] md:text-[13px] font-medium underline underline-offset-4 decoration-[var(--contact-primary)]/40 truncate">{content.inEmail}</span>
                </div>
                <div className="flex items-center gap-3 md:gap-4 text-[var(--contact-text)]">
                  <svg className="w-3.5 h-3.5 md:w-4 md:h-4 shrink-0" style={{ color: cards.iconColor }} fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" /></svg>
                  <span className="text-[12px] md:text-[13px] font-medium underline underline-offset-4 decoration-[var(--contact-primary)]/40 truncate">{content.inWeb}</span>
                </div>
              </div>
              <div className={classes.mapWrapper}>
                <iframe src={content.inMap} width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="India Map"></iframe>
              </div>
            </div>

            {/* France Bureau */}
            <div className={classes.contactCard}>
              <div className="text-white py-4 px-4 md:py-5 md:px-6 flex items-center justify-center gap-3 md:gap-4 shadow-lg text-center" style={{ backgroundColor: cards.bg, borderRadius: cards.radius, boxShadow: cards.shadow }}>
                <div className="w-5 h-5 md:w-6 md:h-6 rounded-full border flex items-center justify-center shrink-0" style={{ borderColor: cards.iconColor }}>
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full" style={{ backgroundColor: cards.iconColor }}></div>
                </div>
                <h3 className="text-[14px] md:text-[16px] font-bold tracking-[0.15em] md:tracking-[0.2em] uppercase" style={{ color: typography.headingColor }}>BUREAU FRANCE</h3>
              </div>
              <div className="space-y-4 px-2">
                <div className="flex items-start gap-3 md:gap-4 text-[var(--contact-text)]">
                  <img src="https://flagcdn.com/w20/fr.png" alt="France" className="mt-1 w-4 md:w-5 shrink-0" />
                  <span className="text-[12px] md:text-[13px] font-medium leading-relaxed">{content.frAddress}</span>
                </div>
                <div className="flex items-center gap-3 md:gap-4 text-[var(--contact-text)]">
                  <svg className="w-3.5 h-3.5 md:w-4 md:h-4 shrink-0" style={{ color: cards.iconColor }} fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" /></svg>
                  <span className="text-[12px] md:text-[13px] font-medium">{content.frPhone}</span>
                </div>
                <div className="flex items-center gap-3 md:gap-4 text-[var(--contact-text)]">
                  <svg className="w-3.5 h-3.5 md:w-4 md:h-4 shrink-0" style={{ color: cards.iconColor }} fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" /></svg>
                  <span className="text-[12px] md:text-[13px] font-medium underline underline-offset-4 decoration-[var(--contact-primary)]/40 truncate">{content.frEmail}</span>
                </div>
                <div className="flex items-center gap-3 md:gap-4 text-[var(--contact-text)]">
                  <svg className="w-3.5 h-3.5 md:w-4 md:h-4 shrink-0" style={{ color: cards.iconColor }} fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" /></svg>
                  <span className="text-[12px] md:text-[13px] font-medium underline underline-offset-4 decoration-[var(--contact-primary)]/40 truncate">{content.frWeb}</span>
                </div>
              </div>
              <div className={classes.mapWrapper}>
                <iframe src={content.frMap} width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="France Map"></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      <PourquoiVoyager />
      <Footer />
    </div>
  );
};

export default ContactRapide;
