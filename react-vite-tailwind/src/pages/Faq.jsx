import React, { useState, useEffect } from "react";
import { Search, Plus, Building2, HeartPulse, Car, Sparkles, Headphones, Flower2 } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const DEFAULT_CONFIG = {
  layout: { pageWidth: '100%', containerWidth: '1440px', sectionWidth: '100%', sectionHeight: 'auto', minHeight: '100vh', maxWidth: '100%', bgColor: '#ffffff', bgImage: '', border: 'none', borderRadius: '0px', boxShadow: 'none', overflow: 'hidden', responsiveWidth: '100%' },
  spacing: { marginTop: '0px', marginBottom: '0px', marginLeft: 'auto', marginRight: 'auto', paddingTop: '64px', paddingBottom: '64px', paddingLeft: '16px', paddingRight: '16px', gapSections: '32px', gapColumns: '24px', faqItemGap: '0px', mobile: { pt: '32px', pb: '32px', px: '16px' }, tablet: { pt: '48px', pb: '48px', px: '32px' }, desktop: { pt: '64px', pb: '64px', px: '40px' } },
  alignment: { sectionAlign: 'center', textAlign: 'center', faqAlign: 'left', categoryAlign: 'left', flexDirection: 'row', gridColumns: '2' },
  typography: { headingColor: '#111111', headingSize: '67px', headingWeight: 'normal', headingLineHeight: '0.98', headingLetterSpacing: '-0.035em', paragraphColor: '#303030', paragraphSize: '14px', questionSize: '13.2px', questionWeight: '500', questionColor: '#242424', answerSize: '12.5px', answerColor: '#555555', categorySize: '20px', categoryColor: '#151515' },
  content: { pageTitle: 'QUESTIONS<br/>FRÉQUENTES', subtitle: 'FAQ', description: 'Retrouvez ici les réponses aux questions les plus courantes pour préparer votre voyage en Inde en toute sérénité.', faqHeading: 'Vos Questions', faqDescription: '', emptyFaqMessage: 'Aucune question trouvée', searchPlaceholder: 'Rechercher une question...', ctaSub: 'PRÊT À DÉCOUVRIR L’INDE ?', ctaTitle: 'Parlez-nous de votre projet de voyage', ctaDesc: 'En couple, en famille ou entre amis, nous créons avec vous le voyage qui vous ressemble.', ctaBtn: 'DEMANDER UN DEVIS PERSONNALISÉ', heroBg: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=1800', statsQuote: 'L’Inde n’est pas seulement<br/>une destination, c’est une émotion<br/>qui reste pour toujours.', stats1v: '18+', stats1l: 'ANS<br/>D’EXPÉRIENCE', stats2v: '100%', stats2l: 'VOYAGES<br/>SUR MESURE', stats3v: 'ÉQUIPE', stats3l: 'FRANCO-<br/>INDIENNE', stats4v: '24/7', stats4l: 'ASSISTANCE<br/>SUR PLACE', statsBg: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=1400', ctaBg: 'https://images.unsplash.com/photo-1548013146-72479768bbfd?q=80&w=1200' },
  accordion: { bgColor: '#fffdf8', padding: '20px', margin: '0', borderColor: '#ded2c0', borderRadius: '2px', shadow: 'none', questionHeight: '48px', answerPadding: '12px 20px 16px', answerBg: '#ffffff', iconColor: '#c6a263', iconSize: '17px', openIcon: 'plus', closeIcon: 'minus', hoverEffect: 'none', activeStyle: '' },
  searchCategory: { showSearch: 'true', searchWidth: '390px', searchHeight: '47px', searchPadding: '0 18px', searchBorder: '#d8cbb7', searchRadius: '6px', searchBg: '#ffffff', showCategory: 'true', catBtnBg: 'transparent', catBtnActive: '#bd8a3a', catBtnHover: '#fbf3e6', catBtnRadius: '2px' },
  classes: { pageWrapper: '', container: 'max-w-[1440px] mx-auto px-[40px]', hero: 'relative min-h-[280px] pt-16 md:pt-24 overflow-hidden border-b border-[#eadfce]', heading: 'font-serif text-[32px] md:text-[67px] uppercase leading-[0.98] tracking-[-0.035em]', subtitle: 'mb-[4px] md:mb-[8px] font-serif text-[16px] md:text-[22px]', faqWrapper: '', faqItem: 'overflow-hidden rounded-[2px] border', question: 'flex min-h-[36px] md:min-h-[48px] w-full items-center justify-between px-2 md:px-[20px] text-left text-[9px] md:text-[13.2px] font-medium leading-[1.3] md:leading-[1.45]', answer: 'border-t px-2 md:px-[20px] pb-2 md:pb-4 pt-1.5 md:pt-3 text-[8.5px] md:text-[12.5px] leading-5 md:leading-6', icon: 'shrink-0 transition-transform duration-300 w-3 h-3 md:w-[17px] md:h-[17px]', searchWrapper: 'mt-[16px] md:mt-[28px] flex h-10 md:h-[47px] w-full max-w-[280px] md:max-w-full md:w-[390px] items-center rounded-[6px] border bg-white px-3 md:px-[18px]', searchInput: 'h-full w-full bg-transparent text-[11px] md:text-[13px] outline-none', categoryWrapper: '', categoryButton: '' },
  responsive: { mobileLayout: 'col', tabletLayout: 'col', desktopLayout: 'row', mobilePadding: '16px', tabletPadding: '32px', desktopPadding: '40px', mobileFontSize: '14px', tabletFontSize: '16px', desktopFontSize: '16px', gridColsMobile: '1', gridColsTablet: '2', gridColsDesktop: '2' },
  theme: { primaryColor: '#bd8a3a' }
};

const defaultFaqData = [
  { no: "01.", title: "AVANT DE PARTIR EN INDE", icon: Building2, questions: [{ q: "Faut-il un visa pour voyager en Inde ?", a: "Oui, les voyageurs français doivent obtenir un visa avant leur départ." }, { q: "Quelle est la meilleure période pour voyager en Inde ?", a: "La période idéale se situe généralement entre octobre et mars." }] },
  { no: "02.", title: "SANTÉ & CONFORT", icon: HeartPulse, questions: [{ q: "Peut-on manger facilement en Inde sans être malade ?", a: "Oui, avec quelques précautions simples." }], card: true }
];

const FaqBox = ({ item, themeConfig }) => {
  const Icon = item.icon;
  const [open, setOpen] = useState(null);

  const { accordion, typography, classes } = themeConfig;

  return (
    <div className={`w-full ${classes.faqWrapper}`} style={{ '--faq-icon': accordion.iconColor, '--faq-border': accordion.borderColor, '--faq-box-bg': accordion.bgColor, '--faq-primary': themeConfig.theme.primaryColor }}>
      <div className="mb-2 md:mb-[18px] flex items-start gap-2 md:gap-[18px]">
        <Icon strokeWidth={1.05} className="mt-1 md:mt-[6px] text-[var(--faq-icon)] w-6 h-6 md:w-[34px] md:h-[34px]" />
        <div>
          <p className="text-[9px] md:text-[13px] font-semibold leading-none tracking-[0.04em] text-[var(--faq-primary)]">{item.no}</p>
          <h3 className="mt-1 md:mt-[6px] font-serif uppercase leading-[1.05]" style={{ fontSize: typography.categorySize, color: typography.categoryColor }}>{item.title}</h3>
          <div className="mt-1.5 md:mt-[11px] h-[1px] w-[20px] md:w-[38px] bg-[var(--faq-icon)]" />
        </div>
      </div>

      <div className={classes.faqItem || "overflow-hidden rounded-[2px] border"} style={{ backgroundColor: accordion.bgColor, borderColor: accordion.borderColor, borderRadius: accordion.borderRadius, boxShadow: accordion.shadow, margin: accordion.margin, padding: accordion.padding }}>
        {item.questions.map((q, index) => (
          <div key={index}>
            <button onClick={() => setOpen(open === index ? null : index)} className={classes.question || "flex min-h-[48px] w-full items-center justify-between text-left"} style={{ fontSize: typography.questionSize, fontWeight: typography.questionWeight, color: typography.questionColor, height: accordion.questionHeight }}>
              <span>{q.q}</span>
              <Plus strokeWidth={1.35} className={`${classes.icon} text-[var(--faq-primary)] ${open === index ? "rotate-45" : ""}`} style={{ color: accordion.iconColor, width: accordion.iconSize, height: accordion.iconSize }} />
            </button>
            {open === index && (
              <div className={classes.answer || "border-t px-4 pb-4 pt-3"} style={{ borderColor: accordion.borderColor, backgroundColor: accordion.answerBg, padding: accordion.answerPadding, fontSize: typography.answerSize, color: typography.answerColor }}>
                {typeof q.a === 'string' ? <div dangerouslySetInnerHTML={{ __html: q.a }} /> : q.a}
              </div>
            )}
            {index !== item.questions.length - 1 && <div className="h-[1px]" style={{ backgroundColor: accordion.borderColor }} />}
          </div>
        ))}
      </div>
    </div>
  );
};

const Faq = () => {
  const [config, setConfig] = useState(DEFAULT_CONFIG);
  const [loading, setLoading] = useState(true);
  const [faqData, setFaqData] = useState(defaultFaqData);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [configRes, faqsRes] = await Promise.all([
          fetch('http://127.0.0.1:8000/api/faq-page').then(res => res.json()),
          fetch('http://127.0.0.1:8000/api/faqs').then(res => res.json())
        ]);

        if (configRes.success && configRes.data && configRes.data.length > 0) {
          const apiConfig = configRes.data[0].config;
          const mergedConfig = { ...DEFAULT_CONFIG };
          for (let key in DEFAULT_CONFIG) {
            if (apiConfig[key]) {
              mergedConfig[key] = { ...DEFAULT_CONFIG[key], ...apiConfig[key] };
            }
          }
          setConfig(mergedConfig);
        }

        if (faqsRes.success && faqsRes.data && faqsRes.data.length > 0) {
          const grouped = {};
          faqsRes.data.filter(f => f.status === 'active' || !f.status).forEach(f => {
            if(!grouped[f.category]) grouped[f.category] = [];
            grouped[f.category].push({ q: f.question, a: f.answer });
          });

          const mapping = {
            "AVANT DE PARTIR EN INDE": { icon: Building2, card: false },
            "SANTÉ & CONFORT": { icon: HeartPulse, card: true },
            "ORGANISATION DU VOYAGE": { icon: Car, card: false },
            "EXPÉRIENCES & DÉCOUVERTES": { icon: Sparkles, card: false },
            "ACCOMPAGNEMENT & RÉSERVATION": { icon: Headphones, card: false }
          };

          const newFaqData = Object.keys(grouped).map((cat, index) => ({
            no: `0${index + 1}.`,
            title: cat,
            icon: mapping[cat] ? mapping[cat].icon : Building2,
            card: mapping[cat] ? mapping[cat].card : false,
            questions: grouped[cat]
          }));
          
          if(newFaqData.length > 0) {
            setFaqData(newFaqData);
          }
        }
      } catch (err) {
        console.error("Error loading FAQ data:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const { layout, spacing, alignment, typography, content, accordion, searchCategory, classes, theme } = config;

  // Filter functionality
  const filteredData = faqData.map(section => ({
    ...section,
    questions: section.questions.filter(q => q.q.toLowerCase().includes(searchTerm.toLowerCase()) || (typeof q.a === 'string' && q.a.toLowerCase().includes(searchTerm.toLowerCase())))
  })).filter(section => section.questions.length > 0);

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Chargement...</div>;
  }

  return (
    <div className={`min-h-screen ${classes.pageWrapper}`} style={{ backgroundColor: layout.bgColor, backgroundImage: `url(${layout.bgImage})`, color: typography.paragraphColor }}>
      <Navbar />
      
      {/* Dynamic Style Injection */}
      <style dangerouslySetInnerHTML={{__html: `
        :root { --faq-primary: ${theme.primaryColor}; }
        .faq-hero-bg { background-image: url('${content.heroBg}'); }
        .faq-stats-bg { background-image: url('${content.statsBg}'); }
        .faq-cta-bg { background-image: url('${content.ctaBg}'); }
      `}} />

      {/* HERO */}
      <section className={`${classes.hero} faq-hero-bg bg-cover bg-center relative`}>
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" style={{ '--tw-gradient-from': layout.bgColor, '--tw-gradient-via': `${layout.bgColor}CC` }} />
        <div className={`relative z-10 flex h-full items-center py-4 w-full ${classes.container}`}>
          <div className="pt-[10px]" style={{ textAlign: alignment.textAlign }}>
            <p className={classes.subtitle} style={{ color: theme.primaryColor }}>{content.subtitle}</p>
            <h1 className={classes.heading} style={{ color: typography.headingColor, fontSize: typography.headingSize, fontWeight: typography.headingWeight, lineHeight: typography.headingLineHeight, letterSpacing: typography.headingLetterSpacing }} dangerouslySetInnerHTML={{ __html: content.pageTitle }} />
            <div className="my-[12px] md:my-[22px] h-[1px] w-[35px] md:w-[45px]" style={{ backgroundColor: theme.primaryColor, margin: alignment.textAlign === 'center' ? 'auto' : '' }} />
            <p className="max-w-[280px] md:max-w-[350px] text-[11px] md:text-[14px] font-medium leading-[1.7] md:leading-[1.9]" style={{ color: typography.paragraphColor, fontSize: typography.paragraphSize, margin: alignment.textAlign === 'center' ? 'auto' : '' }}>{content.description}</p>
            
            {searchCategory.showSearch === 'true' && (
              <div className={classes.searchWrapper} style={{ width: searchCategory.searchWidth, height: searchCategory.searchHeight, borderColor: searchCategory.searchBorder, borderRadius: searchCategory.searchRadius, backgroundColor: searchCategory.searchBg, padding: searchCategory.searchPadding, margin: alignment.textAlign === 'center' ? 'auto' : '' }}>
                <Search size={16} className="mr-2 md:mr-[14px] text-[#777]" />
                <input type="text" placeholder={content.searchPlaceholder} value={searchTerm} onChange={e => setSearchTerm(e.target.value)} className={classes.searchInput} />
              </div>
            )}
          </div>
        </div>
      </section>

      <main className={`py-6 md:py-[45px] w-full ${classes.container}`}>
        {filteredData.length === 0 ? (
           <div className="text-center py-20 text-xl font-serif text-gray-500">{content.emptyFaqMessage}</div>
        ) : (
          <div className="space-y-12">
             <div className={`grid grid-cols-1 md:grid-cols-${alignment.gridColumns} gap-x-2 gap-y-6 md:gap-x-[58px] md:gap-y-[54px]`} style={{ gap: spacing.gapColumns }}>
                {filteredData[0] && <FaqBox item={filteredData[0]} themeConfig={config} />}
                {filteredData[1] && <FaqBox item={filteredData[1]} themeConfig={config} />}
             </div>

             <div className="my-6 md:my-[38px] h-[1px]" style={{ backgroundColor: accordion.borderColor }} />

             <div className={`grid grid-cols-1 md:grid-cols-${alignment.gridColumns} gap-x-2 gap-y-6 md:gap-x-[58px] md:gap-y-[54px]`} style={{ gap: spacing.gapColumns }}>
                {filteredData[2] && <FaqBox item={filteredData[2]} themeConfig={config} />}
                {filteredData[3] && <FaqBox item={filteredData[3]} themeConfig={config} />}
             </div>

             <div className="my-6 md:my-[38px] h-[1px]" style={{ backgroundColor: accordion.borderColor }} />

             <div className={`grid grid-cols-1 md:grid-cols-${alignment.gridColumns} gap-x-2 gap-y-6 md:gap-x-[58px] md:gap-y-[54px]`} style={{ gap: spacing.gapColumns }}>
                {filteredData[4] && <FaqBox item={filteredData[4]} themeConfig={config} />}
                
                {/* Stats Card Overlay Box */}
                <div className="mt-0 md:mt-[30px] overflow-hidden rounded-[5px] border border-[#1c130d] bg-black shadow-[0_14px_35px_rgba(0,0,0,0.16)] h-full">
                  <div className="relative min-h-[220px] md:min-h-[330px] h-full faq-stats-bg bg-cover bg-center">
                    <div className="absolute inset-0 bg-black/75" />
                    <div className="relative z-10 flex min-h-[220px] md:min-h-[330px] h-full flex-col justify-between px-3 md:px-[34px] py-4 md:py-[26px] text-white">
                      <div>
                        <p className="font-serif text-[24px] md:text-[43px] leading-none text-white text-center md:text-left">“</p>
                        <h3 className="mx-auto mt-1 md:mt-[12px] max-w-[430px] text-center font-serif text-[11px] md:text-[23px] leading-[1.3] md:leading-[1.35]" dangerouslySetInnerHTML={{ __html: content.statsQuote }} />
                        <div className="mx-auto mt-3 md:mt-[28px] flex w-24 md:w-[220px] items-center justify-center gap-2 md:gap-4">
                          <div className="h-[1px] flex-1 bg-white/65" /><Sparkles size={17} strokeWidth={1} className="w-3 h-3 md:w-[17px] md:h-[17px]" /><div className="h-[1px] flex-1 bg-white/65" />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-y-3 gap-x-1 md:gap-3 text-center mt-4 md:mt-0">
                        <div><h4 className="text-[14px] md:text-[26px] font-bold leading-none">{content.stats1v}</h4><p className="mt-1 md:mt-[10px] text-[6px] md:text-[10px] uppercase leading-[1.35] tracking-[0.05em] md:tracking-[0.1em]" dangerouslySetInnerHTML={{ __html: content.stats1l }} /></div>
                        <div><h4 className="text-[14px] md:text-[26px] font-bold leading-none">{content.stats2v}</h4><p className="mt-1 md:mt-[10px] text-[6px] md:text-[10px] uppercase leading-[1.35] tracking-[0.05em] md:tracking-[0.1em]" dangerouslySetInnerHTML={{ __html: content.stats2l }} /></div>
                        <div><h4 className="text-[14px] md:text-[22px] font-bold uppercase leading-none">{content.stats3v}</h4><p className="mt-1 md:mt-[10px] text-[6px] md:text-[10px] uppercase leading-[1.35] tracking-[0.05em] md:tracking-[0.1em]" dangerouslySetInnerHTML={{ __html: content.stats3l }} /></div>
                        <div><h4 className="text-[14px] md:text-[26px] font-bold leading-none">{content.stats4v}</h4><p className="mt-1 md:mt-[10px] text-[6px] md:text-[10px] uppercase leading-[1.35] tracking-[0.05em] md:tracking-[0.1em]" dangerouslySetInnerHTML={{ __html: content.stats4l }} /></div>
                      </div>
                    </div>
                  </div>
                </div>
             </div>
          </div>
        )}

        {/* CTA Section */}
        <section className="mt-8 md:mt-[46px] grid overflow-hidden rounded-[4px] shadow-sm lg:grid-cols-[0.92fr_1.28fr]" style={{ backgroundColor: '#fbf3e7' }}>
          <div className="h-[200px] md:h-[305px] faq-cta-bg bg-cover bg-center"></div>
          <div className="flex flex-col justify-center px-6 py-6 md:px-[42px] md:py-[38px]">
            <p className="mb-2 md:mb-[10px] text-[9px] md:text-[13px] font-semibold uppercase tracking-[0.14em] text-[var(--faq-primary)]">{content.ctaSub}</p>
            <h2 className="font-serif text-[20px] md:text-[31px] leading-tight text-gray-900">{content.ctaTitle}</h2>
            <div className="mt-3 md:mt-[18px] h-[1px] w-[38px] bg-[var(--faq-primary)]" />
            <p className="mt-4 md:mt-[28px] max-w-[540px] text-[11px] md:text-[13.5px] font-medium leading-[1.6] md:leading-[1.85] text-gray-700">{content.ctaDesc}</p>
            <button className="mt-4 md:mt-[28px] w-fit py-2.5 md:py-[13px] px-8 text-[8px] md:text-[10.5px] font-bold uppercase tracking-[0.12em] text-white" style={{ backgroundColor: theme.primaryColor, borderRadius: '2px' }}>{content.ctaBtn}</button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Faq;
