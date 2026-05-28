import React, { useState, useEffect } from "react";
import { apiList, apiRequest } from "../lib/api";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import expertIcon from "../assets/ChatGPT Image May 14, 2026, 01_29_59 PM.png";
import CustomIcon from "../assets/ChatGPT Image May 14, 2026, 01_34_31 PM.png";
import guideIcon from "../assets/ChatGPT Image May 14, 2026, 01_37_59 PM.png";
import assistanceIcon from "../assets/ChatGPT Image May 14, 2026, 01_40_49 PM.png";

import featureBanner from "../assets/image copy 19.png";
import archIcon from "../assets/ChatGPT Image May 14, 2026, 05_53_26 PM.png";
import bgUSPImg from "../assets/image copy 42.jpeg";

import nordIcon from "../assets/image copy 31.png";
import keralaIcon from "../assets/image copy 32.png";
import himalayaIcon from "../assets/image copy 33.png";
import sudIcon from "../assets/image copy 34.png";
import centraleIcon from "../assets/image copy 35.png";

import img21 from "../assets/image copy 21.png";
import img22 from "../assets/image copy 22.png";
import img23 from "../assets/image copy 23.png";
import img24 from "../assets/image copy 24.png";
import img25 from "../assets/image copy 25.png";
import img26 from "../assets/image copy 26.png";
import img27 from "../assets/image copy 27.png";
import img28 from "../assets/image copy 28.png";
import img29 from "../assets/image copy 29.png";
import img30 from "../assets/image copy 30.png";

const DEFAULT_CONFIG = {
  layout: { pageWidth: '100%', containerWidth: '1440px', sectionWidth: '100%', sectionHeight: 'auto', minHeight: '100vh', maxWidth: '100%', bgColor: '#f6efe3', bgImage: '', border: 'none', borderRadius: '0px', boxShadow: 'none', overflow: 'hidden', responsiveWidth: '100%' },
  spacing: { marginTop: '0px', marginBottom: '0px', marginLeft: 'auto', marginRight: 'auto', paddingTop: '64px', paddingBottom: '64px', paddingLeft: '16px', paddingRight: '16px', gapCards: '32px', gapSections: '48px', mobile: { pt: '32px', pb: '32px', px: '16px' }, tablet: { pt: '48px', pb: '48px', px: '32px' }, desktop: { pt: '64px', pb: '64px', px: '40px' } },
  alignment: { sectionAlign: 'center', textAlign: 'center', gridAlign: 'center', categoryAlign: 'center', cardContentAlign: 'left', flexDirection: 'row', gridColumns: '3' },
  typography: { headingColor: '#102d45', headingSize: '54px', headingWeight: 'bold', headingLineHeight: '1.2', headingLetterSpacing: '0', paragraphColor: '#5f6263', paragraphSize: '16px', titleSize: '24px', titleWeight: 'bold', titleColor: '#102d45', descSize: '14px', descColor: '#5f6263', categorySize: '12px', categoryColor: '#c58b32', locationSize: '12px', locationColor: '#c58b32', priceSize: '18px', priceColor: '#102d45', buttonSize: '14px', buttonWeight: 'bold' },
  content: { pageTitle: 'Nos Destinations', subtitle: 'DÉCOUVREZ LE MONDE', description: 'Explorez nos destinations sélectionnées pour des voyages inoubliables.', heroHeading: 'Où voulez-vous aller ?', heroDescription: 'Trouvez l\'inspiration pour votre prochain voyage.', destinationsHeading: 'Destinations Populaires', destinationsDescription: '', emptyDestinationsMessage: 'Aucune destination trouvée', searchPlaceholder: 'Rechercher une destination...', categoryTitle: 'Régions', exploreBtn: 'Explorer', viewDetailsBtn: 'Voir les détails', heroBg: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=2000&q=90' },
  cardDesign: { bgColor: '#ffffff', padding: '0px', margin: '0px', borderColor: '#e5e7eb', borderRadius: '12px', shadow: '0 4px 6px rgba(0,0,0,0.1)', hoverEffect: 'shadow-xl -translate-y-1', imageWidth: '100%', imageHeight: '280px', objectFit: 'cover', imageRadius: '12px 12px 0 0', contentPadding: '24px', locationBadgeStyle: 'bg-white text-[#c58b32]', priceBadgeStyle: 'text-lg font-bold', btnBg: '#c58b32', btnHover: '#a96f20', btnColor: '#ffffff', btnRadius: '8px' },
  searchCategory: { showSearch: 'true', searchWidth: '100%', searchHeight: '48px', searchPadding: '0 16px', searchBorder: '#e5e7eb', searchRadius: '8px', searchBg: '#ffffff', showCategory: 'true', catBtnBg: '#ffffff', catBtnActive: '#c58b32', catBtnHover: '#f3f4f6', catBtnRadius: '999px' },
  seo: { metaTitle: 'Destinations Voyage | Indeora', metaDescription: 'Découvrez nos destinations de voyage.', metaKeywords: 'destinations, voyages' },
  classes: { pageWrapper: '', container: 'max-w-[1440px] mx-auto px-[40px]', hero: 'relative h-[720px] w-full overflow-hidden flex items-center justify-center', heading: 'text-white text-center', subtitle: 'text-white text-center', destinationsGrid: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8', destinationCard: 'bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300', destinationImage: 'w-full object-cover', destinationContent: 'p-6', destinationTitle: 'text-xl font-bold mb-3', destinationDescription: 'text-gray-600 mb-4', destinationButton: 'inline-flex items-center text-sm font-bold uppercase tracking-wider transition-colors', locationBadge: '', priceBadge: '', searchWrapper: 'w-full max-w-md relative', searchInput: 'w-full outline-none', categoryWrapper: 'flex flex-wrap gap-2 mb-8', categoryButton: 'px-4 py-2 text-sm font-medium transition-colors cursor-pointer border border-slate-200 shadow-sm' },
  responsive: { mobileLayout: 'col', tabletLayout: 'col', desktopLayout: 'row', mobilePadding: '16px', tabletPadding: '32px', desktopPadding: '40px', mobileFontSize: '14px', tabletFontSize: '16px', desktopFontSize: '16px', gridColsMobile: '1', gridColsTablet: '2', gridColsDesktop: '3', cardWidthMobile: '100%', cardWidthTablet: '100%', cardWidthDesktop: '100%', imageHeightMobile: '200px', imageHeightTablet: '240px', imageHeightDesktop: '280px' },
  theme: { primaryColor: '#c58b32', primaryHover: '#a96f20', overlayOpacity: '0.40' }
};

const Destinations = ({ previewConfig, previewSettings, previewAbouts, previewDestinations }) => {
  const features = [
    { title: "Experts Locaux", text: "Nos spécialistes du voyage connaissent l’Inde sur le bout des doigts et conçoivent des itinéraires fondés sur des expériences authentiques.", img: expertIcon },
    { title: "Voyages Sur Mesure", text: "Chaque itinéraire est conçu autour de vos centres d’intérêt, de votre style de voyage et de votre rythme.", img: CustomIcon },
    { title: "Guides Privés", text: "Profitez de visites enrichissantes avec des guides expérimentés, anglophones et francophones.", img: guideIcon },
    { title: "Assistance Voyage 24h/24 Et 7j/7", text: "Notre équipe est disponible à tout moment durant votre voyage pour vous garantir une expérience fluide et sans souci.", img: assistanceIcon },
  ];

  const initialDestinations = [
    { name: "Rajasthan Authentique Varanasi", desc: "Capturez l’âme de l’Inde à travers l’objectif avec nos photographes experts.", img: img21, link: "/voyage-photo-expeditions" },
    { name: "Rajasthan Rural Inde Authentique", desc: "Vivez au rythme des communautés locales pour une expérience humaine profonde.", img: img22, link: "/immersion-villages-indiens" },
    { name: "Rajasthan Gujarat", desc: "Découvrez les techniques ancestrales des artisans indiens, du tissage à la poterie.", img: img23, link: "/art-artisanat-savoir-faire" },
    { name: "Inde Spirituelle Bien-Être", desc: "Retrouvez l’équilibre à travers le yoga, la méditation et les soins ayurvédiques.", img: img24, link: "/spiritualite-yoga-ayurveda" },
    { name: "Inde Sauvage Tigres du Bengale", desc: "Observez le tigre du Bengale et la biodiversité exceptionnelle des parcs nationaux.", img: img25, link: "/safaris-vie-sauvage" },
    { name: "Rajasthan Romantique Kerala", desc: "Célébrez votre union dans les décors somptueux des palais de maharajas.", img: img26, link: "/lune-de-miel-escapades-romantiques" },
    { name: "Rajasthan, Gujarat Inde Tribale", desc: "Explorez la diversité culturelle des peuples de l’Inde et leurs traditions uniques.", img: img27, link: "/rencontres-ethniques-cultures-locales" },
    { name: "Leh, Nubra Valley Pangong Lake", desc: "Dépassez vos limites dans les paysages grandioses des hautes altitudes.", img: img28, link: "/aventure-himalaya-trekking" },
    { name: "Kerala Tropical Houseboat Experience", desc: "Naviguez paisiblement sur les canaux tropicaux à bord d’un kettuvalam traditionnel.", img: img29, link: "/croisieres-backwaters-kerala" },
    { name: "Festivals, couleurs traditions indiennes", desc: "Plongez dans l’effervescence des plus grandes célébrations religieuses et culturelles.", img: img30, link: "/festivals-couleurs-traditions-indiennes" },
  ];

  const [destinations, setDestinations] = useState(initialDestinations);
  const [abouts, setAbouts] = useState([]);
  const [config, setConfig] = useState(DEFAULT_CONFIG);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (previewConfig) {
          const mergedConfig = { ...DEFAULT_CONFIG };
          for (let key in DEFAULT_CONFIG) {
             if (previewConfig[key]) mergedConfig[key] = { ...DEFAULT_CONFIG[key], ...previewConfig[key] };
          }
          setConfig(mergedConfig);
        } else {
          const confRes = await apiRequest('/destinations-page');
          if (confRes && confRes.success && confRes.data && confRes.data.length > 0) {
            const apiConf = confRes.data[0].config;
            const mergedConfig = { ...DEFAULT_CONFIG };
            for (let key in DEFAULT_CONFIG) {
               if (apiConf[key]) mergedConfig[key] = { ...DEFAULT_CONFIG[key], ...apiConf[key] };
            }
            setConfig(mergedConfig);
            if(mergedConfig.seo) document.title = mergedConfig.seo.metaTitle || 'Destinations';
          }
        }

        if (previewAbouts) {
          setAbouts(previewAbouts);
        } else {
          const abRes = await apiList('abouts');
          setAbouts(abRes || []);
        }

        if (previewDestinations) {
          const activeDests = previewDestinations.filter(d => d.status === 'active').map((d, i) => ({
             name: d.title,
             desc: d.meta_description || initialDestinations[i % initialDestinations.length].desc,
             img: d.image_url || initialDestinations[i % initialDestinations.length].img,
             link: `/${d.slug}`
          }));
          setDestinations(activeDests.length > 0 ? activeDests : initialDestinations);
        } else {
          const destRes = await apiList('/destinations?includeInactive=false');
          if (destRes && destRes.length > 0) {
            const activeDests = destRes.map((d, i) => ({
               name: d.title,
               desc: d.meta_description || initialDestinations[i % initialDestinations.length].desc,
               img: d.image_url || initialDestinations[i % initialDestinations.length].img,
               link: `/${d.slug}`
            }));
            setDestinations(activeDests.length > 0 ? activeDests : initialDestinations);
          }
        }
      } catch (e) {
        console.error(e);
      }
    };
    fetchData();
  }, [previewConfig, previewSettings, previewAbouts, previewDestinations]);

  const themes = [
    { title: "Voyage en couple", img: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=500&q=90", link: "/demander-un-devis" },
    { title: "Voyage en famille", img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=500&q=90", link: "/demander-un-devis" },
    { title: "Safaris & nature", img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=500&q=90", link: "/demander-un-devis" },
    { title: "Spiritualité & bien-être", img: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=500&q=90", link: "/demander-un-devis" },
    { title: "Culture & patrimoine", img: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=500&q=90", link: "/demander-un-devis" },
    { title: "Photographie & paysages", img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=500&q=90", link: "/demander-un-devis" },
  ];

  const dynamicFeatures = abouts.filter(a => a.type === 'dest_features').sort((a, b) => a.display_order - b.display_order);
  const activeFeatures = dynamicFeatures.length > 0 ? dynamicFeatures.map(f => ({ title: f.title, text: f.description, img: f.image })) : features;

  const dynamicThemes = abouts.filter(a => a.type === 'dest_themes').sort((a, b) => a.display_order - b.display_order);
  const activeThemes = dynamicThemes.length > 0 ? dynamicThemes.map(t => ({ title: t.title, img: t.image, link: t.subtitle || '/contact' })) : themes;

  const dynamicRegions = abouts.filter(a => a.type === 'dest_regions').sort((a, b) => a.display_order - b.display_order);

  const { layout, theme, content, cardDesign, typography } = config;

  return (
    <div className={`w-full min-h-screen overflow-hidden ${config.classes.pageWrapper}`} style={{ backgroundColor: layout.bgColor, color: theme.textDark, fontFamily: theme.bodyFont === 'serif' ? 'Playfair Display, serif' : 'Inter, sans-serif' }}>
      <Navbar />
      
      {/* LEFT SOCIAL */}
      <div className="hidden md:flex absolute left-5 top-32 z-40 flex-col items-center gap-4">
        {["◎", "in", "f"].map((item, index) => (
          <div
            key={index}
            className="w-8 h-8 rounded-full bg-white shadow-md border border-[#102d45]/5 flex items-center justify-center text-[10px] font-bold text-slate-900 hover:bg-[#102d45] hover:text-white transition-all cursor-pointer"
          >
            {item}
          </div>
        ))}

        <div className="h-20 w-px bg-[#102d45]/20 my-2" />

        <p className="vertical-text text-[8px] tracking-[0.3em] uppercase text-slate-900 font-semibold opacity-70">
          Suivez-nous
        </p>
      </div>

      {/* HERO */}
      <section className={`relative h-[300px] md:h-[650px] overflow-hidden ${config.classes.hero}`}>
        <img
          src={content.heroBg}
          alt={content.heroHeading}
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0" style={{ backgroundColor: `rgba(0,0,0,${theme.overlayOpacity || 0.4})` }} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center w-full max-w-[1440px] mx-auto px-4 md:px-[40px]">
          <div className="max-w-[800px] mt-8 md:mt-0">
            <h1 className="font-serif text-[24px] md:text-[62px] lg:text-[76px] leading-[1.1] mb-2 md:mb-8 drop-shadow-lg" style={{ color: typography.headingColor }}>
              {content.heroHeading}
            </h1>

            <div className="w-10 md:w-16 h-px mb-3 md:mb-6 mx-auto" style={{ backgroundColor: theme.primaryColor }} />

            <p className="text-[10px] md:text-[16px] leading-relaxed text-white/90 max-w-[500px] mx-auto drop-shadow-md px-2">
              {content.heroDescription}
            </p>
          </div>
        </div>
      </section>

      {/* FEATURE BANNER */}
      <section className="relative w-full overflow-hidden" style={{ backgroundColor: layout.bgColor }}>
        <div className="relative z-20 w-full pt-[15px] md:pt-[25px] pb-[10px] md:pb-[18px] text-center px-4" style={{ backgroundColor: layout.bgColor }}>
          <p className="text-[9px] md:text-[15px] font-bold tracking-[0.25em] md:tracking-[0.35em] uppercase mb-[6px] md:mb-[8px]" style={{ color: theme.primaryColor }}>
            {content.subtitle}
          </p>

          <div className="flex items-center justify-center gap-[10px] md:gap-[14px] mb-[6px] md:mb-[8px]">
            <span className="w-[40px] md:w-[90px] h-[1px]" style={{ backgroundColor: theme.primaryColor }} />
            <span className="text-[16px] md:text-[22px] leading-none" style={{ color: theme.primaryColor }}>❧</span>
            <span className="w-[40px] md:w-[90px] h-[1px]" style={{ backgroundColor: theme.primaryColor }} />
          </div>

          <h2 className="font-serif text-[20px] md:text-[36px] lg:text-[40px] leading-[1.1] font-bold tracking-[0.05em] md:tracking-[0.08em] uppercase" style={{ color: typography.headingColor }}>
            {content.pageTitle}
          </h2>

          <p className="text-[11px] md:text-[16px] mt-[6px] md:mt-[8px] font-medium" style={{ color: typography.paragraphColor }}>
            {content.description}
          </p>
        </div>

        <div className="relative w-full overflow-hidden" style={{ backgroundColor: layout.bgColor }}>
          <img
            src={featureBanner}
            alt="Explore India"
            className="w-full h-auto object-cover"
          />

          {/* 7-Column Grid Overlay */}
          <div className="absolute inset-0 grid grid-cols-7 pointer-events-none pl-[10px] md:pl-[30px]">
            {/* Hardcoded 7 columns as originally built, but text mapped */}
            <Link to="/voyage-photo-expeditions" className="flex flex-col items-center justify-start pt-[45px] sm:pt-[60px] md:pt-[190px] lg:pt-[210px] xl:pt-[250px] text-center px-0.5 md:px-1 translate-x-[0px] md:translate-x-[15px] pointer-events-auto group cursor-pointer">
              <img src={archIcon} alt="" className="w-5 md:w-12 h-auto mb-1 md:mb-2 drop-shadow-md transition-transform group-hover:scale-110" />
              <h2 className="font-serif text-[6px] md:text-[13px] lg:text-[15px] text-[#462d14] font-bold tracking-[0.05em] md:tracking-[0.1em] uppercase mb-0.5 md:mb-1">Rajasthan</h2>
              <div className="w-4 md:w-6 h-px bg-[#462d14]/30 mb-1 md:mb-1.5" />
              <p className="hidden md:block text-[7px] md:text-[9px] lg:text-[10px] text-[#462d14]/80 font-medium leading-tight max-w-[100px]">Palais majestueux, déserts dorés et héritage royal.</p>
            </Link>

            <Link to="/immersion-villages-indiens" className="flex flex-col items-center justify-start pt-[45px] sm:pt-[60px] md:pt-[190px] lg:pt-[210px] xl:pt-[250px] text-center px-0.5 md:px-1 pointer-events-auto group cursor-pointer">
              <img src={nordIcon} alt="" className="w-5 md:w-12 h-auto mb-1 md:mb-2 drop-shadow-md transition-transform group-hover:scale-110" />
              <h2 className="font-serif text-[6px] md:text-[13px] lg:text-[15px] text-slate-900 font-bold tracking-[0.05em] md:tracking-[0.1em] uppercase mb-0.5 md:mb-1">Inde du Nord</h2>
              <div className="w-4 md:w-6 h-px bg-[#102d45]/30 mb-1 md:mb-1.5" />
              <p className="hidden md:block text-[7px] md:text-[9px] lg:text-[10px] text-slate-900/80 font-medium leading-tight max-w-[100px]">Villes sacrées, traditions ancestrales et spiritualité.</p>
            </Link>

            <Link to="/croisieres-backwaters-kerala" className="flex flex-col items-center justify-start pt-[45px] sm:pt-[60px] md:pt-[190px] lg:pt-[210px] xl:pt-[250px] text-center px-0.5 md:px-1 -translate-x-[5px] md:-translate-x-[18px] pointer-events-auto group cursor-pointer">
              <img src={keralaIcon} alt="" className="w-5 md:w-12 h-auto mb-1 md:mb-2 drop-shadow-md transition-transform group-hover:scale-110" />
              <h2 className="font-serif text-[6px] md:text-[13px] lg:text-[15px] text-[#2d4a1c] font-bold tracking-[0.05em] md:tracking-[0.1em] uppercase mb-0.5 md:mb-1">Kerala</h2>
              <div className="w-4 md:w-6 h-px bg-[#2d4a1c]/30 mb-1 md:mb-1.5" />
              <p className="hidden md:block text-[7px] md:text-[9px] lg:text-[10px] text-[#2d4a1c]/80 font-medium leading-tight max-w-[100px]">Backwaters paisibles, plages et nature luxuriante.</p>
            </Link>

            <div className="flex flex-col items-center justify-start pt-[45px] sm:pt-[60px] md:pt-[190px] lg:pt-[210px] xl:pt-[250px] text-center px-0.5 md:px-1"><div className="w-4 md:w-6 h-px bg-transparent mb-1 md:mb-1.5" /></div>

            <Link to="/himalaya-aventures-hors-sentiers-battus" className="flex flex-col items-center justify-start pt-[45px] sm:pt-[60px] md:pt-[190px] lg:pt-[210px] xl:pt-[250px] text-center px-0.5 md:px-1 translate-x-[10px] md:translate-x-[50px] pointer-events-auto group cursor-pointer">
              <img src={himalayaIcon} alt="" className="w-5 md:w-12 h-auto mb-1 md:mb-2 drop-shadow-md transition-transform group-hover:scale-110" />
              <h2 className="font-serif text-[6px] md:text-[13px] lg:text-[15px] text-[#2d1a4a] font-bold tracking-[0.05em] md:tracking-[0.1em] uppercase mb-0.5 md:mb-1">Himalaya</h2>
              <div className="w-4 md:w-6 h-px bg-[#2d1a4a]/30 mb-1 md:mb-1.5" />
              <p className="hidden md:block text-[7px] md:text-[9px] lg:text-[10px] text-[#2d1a4a]/80 font-medium leading-tight max-w-[100px]">Montagnes majestueuses et aventures en altitude.</p>
            </Link>

            <Link to="/lune-de-miel-escapades-romantiques" className="flex flex-col items-center justify-start pt-[45px] sm:pt-[60px] md:pt-[190px] lg:pt-[210px] xl:pt-[250px] text-center px-0.5 md:px-1 translate-x-[5px] md:translate-x-[25px] pointer-events-auto group cursor-pointer">
              <img src={sudIcon} alt="" className="w-5 md:w-12 h-auto mb-1 md:mb-2 drop-shadow-md transition-transform group-hover:scale-110" />
              <h2 className="font-serif text-[6px] md:text-[13px] lg:text-[15px] text-[#6b4c1e] font-bold tracking-[0.05em] md:tracking-[0.1em] uppercase mb-0.5 md:mb-1">Inde du Sud</h2>
              <div className="w-4 md:w-6 h-px bg-[#6b4c1e]/30 mb-1 md:mb-1.5" />
              <p className="hidden md:block text-[7px] md:text-[9px] lg:text-[10px] text-[#6b4c1e]/80 font-medium leading-tight max-w-[100px]">Temples grandioses, culture et art de vivre unique.</p>
            </Link>

            <Link to="/rencontres-ethniques-cultures-locales" className="flex flex-col items-center justify-start pt-[45px] sm:pt-[60px] md:pt-[190px] lg:pt-[210px] xl:pt-[250px] text-center px-0.5 md:px-1 pointer-events-auto group cursor-pointer">
              <img src={centraleIcon} alt="" className="w-5 md:w-12 h-auto mb-1 md:mb-2 drop-shadow-md transition-transform group-hover:scale-110" />
              <h2 className="font-serif text-[6px] md:text-[13px] lg:text-[15px] text-[#0f3d3d] font-bold tracking-[0.05em] md:tracking-[0.1em] uppercase mb-0.5 md:mb-1">Centrale</h2>
              <div className="w-4 md:w-6 h-px bg-[#0f3d3d]/30 mb-1 md:mb-1.5" />
              <p className="hidden md:block text-[7px] md:text-[9px] lg:text-[10px] text-[#0f3d3d]/80 font-medium leading-tight max-w-[100px]">Tribus, nature sauvage et trésors cachés.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* DESTINATION MAIN BOX */}
      <section className="relative z-20" style={{ backgroundColor: layout.bgColor }}>
        <div className={`w-full border-y border-[#eadfce]/50 px-3 md:px-12 lg:px-20 py-8 md:py-16 ${config.classes.container}`} style={{ backgroundColor: theme.sectionBgColor || '#ffffff' }}>
          <div className="text-left md:text-center max-w-[720px] mx-auto mb-8 md:mb-14">
            <p className="text-[8px] md:text-[10px] tracking-[0.2em] md:tracking-[0.28em] uppercase font-bold mb-1 md:mb-2" style={{ color: theme.primaryColor }}>
              {content.destinationsHeading}
            </p>

            <h2 className="font-serif text-[18px] md:text-[34px] leading-tight mb-2 md:mb-3" style={{ color: typography.headingColor }}>
              {content.destinationsDescription || 'Des destinations pour tous les rêves de voyage'}
            </h2>
          </div>

          <div className={config.classes.destinationsGrid || "grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-3 md:gap-5"}>
            {destinations.map((item, index) => (
              <Link
                key={index}
                to={item.link}
                className={`group rounded-[6px] md:rounded-[8px] overflow-hidden border transition-all duration-300 ${config.classes.destinationCard}`}
                style={{ backgroundColor: cardDesign.bgColor, borderColor: cardDesign.borderColor, borderRadius: cardDesign.borderRadius, boxShadow: cardDesign.shadow }}
              >
                <div className="h-[90px] md:h-[165px] overflow-hidden" style={{ borderRadius: cardDesign.imageRadius }}>
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    style={{ width: cardDesign.imageWidth, height: cardDesign.imageHeight, objectFit: cardDesign.objectFit }}
                  />
                </div>

                <div className={`p-2 md:p-4 text-left ${config.classes.destinationContent}`} style={{ padding: cardDesign.contentPadding }}>
                  <h3 className={`font-serif leading-tight mb-1 md:mb-2 ${config.classes.destinationTitle}`} style={{ color: typography.titleColor, fontSize: typography.titleSize, fontWeight: typography.titleWeight }}>
                    {item.name}
                  </h3>

                  <p className={`leading-3 md:leading-5 min-h-[35px] md:min-h-[58px] ${config.classes.destinationDescription}`} style={{ color: typography.descColor, fontSize: typography.descSize }}>
                    {item.desc}
                  </p>

                  <span className={`inline-flex items-center gap-1 md:gap-2 font-bold mt-2 md:mt-4 ${config.classes.destinationButton}`} style={{ color: theme.primaryColor }}>
                    {content.exploreBtn} <span>→</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* USP BANNER */}
      <section className="relative w-full py-8 md:py-10 overflow-hidden">
        <img
          src={bgUSPImg}
          alt="Unique India"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0" style={{ backgroundColor: `rgba(0,0,0,${theme.overlayOpacity || 0.75})` }}></div>

        <div className="relative z-10 md: lg:px-16 py-6 md:py-8 w-full max-w-[1440px] mx-auto px-4 md:px-[40px]">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-10 text-left md:text-center">
            {activeFeatures.map((item, index) => (
              <div key={index} className="flex flex-col items-start md:items-center justify-start text-white px-1">
                <div className="h-[40px] md:h-[90px] flex items-end justify-center md:justify-center mb-2 md:mb-3">
                  <img src={item.img} alt={item.title} className="w-[35px] md:w-[80px] h-auto object-contain drop-shadow-[0_8px_10px_rgba(0,0,0,0.45)]" />
                </div>
                <h3 className="font-serif font-bold text-[11px] md:text-[20px] lg:text-[22px] leading-tight drop-shadow-md mb-1 md:mb-2">
                  {item.title}
                </h3>
                <p className="max-w-[280px] text-[8px] md:text-[13px] leading-4 md:leading-relaxed font-medium text-white/90 drop-shadow-md">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THEME SECTION */}
      <section className="px-2 md:px-6 mt-6 mb-8 md:mb-12" style={{ backgroundColor: layout.bgColor }}>
        <div className="grid lg:grid-cols-[330px_1fr] gap-4 md:gap-5 w-full max-w-[1440px] mx-auto px-1 md:px-[40px]">
          <div className="rounded-[8px] md:rounded-[12px] border border-[#eadfce] p-4 md:p-6 shadow-[0_8px_24px_rgba(70,45,20,0.06)] text-left" style={{ backgroundColor: theme.sectionBgColor || '#fffaf2' }}>
            <p className="text-[8px] md:text-[10px] tracking-[0.2em] md:tracking-[0.28em] uppercase font-bold mb-2 md:mb-3" style={{ color: theme.primaryColor }}>
              Voyage selon vos envies
            </p>

            <h2 className="font-serif text-[18px] md:text-[32px] leading-tight mb-2 md:mb-4" style={{ color: typography.headingColor }}>
              Des voyages thématiques sur mesure
            </h2>

            <p className="text-[10px] md:text-[12px] leading-4 md:leading-6 mb-4 md:mb-6" style={{ color: typography.paragraphColor }}>
              Envie d’un voyage romantique, en famille, d’un safari photo ou
              d’un périple spirituel ? Nous créons des itinéraires personnalisés
              selon vos envies.
            </p>

            <Link
              to="/contact"
              className="inline-flex text-[8px] md:text-[10px] tracking-[0.1em] md:tracking-[0.18em] font-bold uppercase rounded-full px-4 py-2.5 md:px-6 md:py-3 transition"
              style={{ backgroundColor: theme.primaryColor, color: '#ffffff' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = theme.primaryHover || '#a96f20'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = theme.primaryColor || '#c58b32'}
            >
              Créer mon voyage sur mesure
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 md:gap-4">
            {activeThemes.map((item, index) => (
              <Link
                key={index}
                to={item.link}
                className="relative h-[150px] md:h-[380px] rounded-[6px] md:rounded-[10px] overflow-hidden group shadow-[0_8px_24px_rgba(70,45,20,0.12)]"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-2 md:p-3 text-white text-left md:text-center">
                  <p className="font-serif text-[10px] md:text-[14px] leading-tight">
                    {item.title}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      <style dangerouslySetInnerHTML={{__html: `
        .vertical-text {
          writing-mode: vertical-rl;
          transform: rotate(180deg);
        }
      `}} />
    </div>
  );
};

export default Destinations;
