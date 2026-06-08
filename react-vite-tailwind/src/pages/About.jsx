import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { apiList, apiRequest } from '../lib/api';
import Footer from "../components/Footer";
import logo from "../assets/png .png";
import bgHistoryImg from "../assets/image copy 40.jpeg";
import bgValuesImg from "../assets/image copy 41.jpeg";
import expertIcon from "../assets/ChatGPT Image May 14, 2026, 01_29_59 PM.png";
import CustomIcon from "../assets/ChatGPT Image May 14, 2026, 01_34_31 PM.png";
import guideIcon from "../assets/ChatGPT Image May 14, 2026, 01_37_59 PM.png";
import assistanceIcon from "../assets/ChatGPT Image May 14, 2026, 01_40_49 PM.png";
import bgUSPImg from "../assets/image copy 42.jpeg";
import amandineImg from "../assets/image copy 46.jpeg";
import dipeshImg from "../assets/image copy 47.jpeg";


const About = ({ previewConfig, previewSettings }) => {
  const features = [
    {
      title: "Experts Locaux",
      text: "Nos spécialistes du voyage connaissent l’Inde sur le bout des doigts et conçoivent des itinéraires fondés sur des expériences authentiques.",
      img: expertIcon,
    },
    {
      title: "Voyages Sur Mesure",
      text: "Chaque itinéraire est conçu autour de vos centres d’intérêt, de votre style de voyage et de votre rythme.",
      img: CustomIcon,
    },
    {
      title: "Guides Privés",
      text: "Profitez de visites enrichissantes avec des guides expérimentés, anglophones et francophones.",
      img: guideIcon,
    },
    {
      title: "Assistance Voyage 24h/24 Et 7j/7",
      text: "Notre équipe est disponible à tout moment durant votre voyage pour vous garantir une expérience fluide et sans souci.",
      img: assistanceIcon,
    },
  ];

  const [isPhilosophieOpen, setIsPhilosophieOpen] = useState(false);
  const [isParcoursOpen, setIsParcoursOpen] = useState(false);
  const [activeTeamMember, setActiveTeamMember] = useState(null);
  const team = [
    {
      name: "Vishnu Swami",
      role: "Fondateur francophone",
      img: dipeshImg,
      text: "Passionné de voyages depuis toujours, Vishnu Swami a d’abord exploré le monde au-delà de l’Inde. Il a vécu plusieurs années en France où il a appris le français qu’il parle couramment.",
    },
    {
      name: "Amandine Fastré",
      role: "Créatrice d’itinéraires",
      img: amandineImg,
      text: "Amandine est une véritable passionnée de l’Inde, un pays où elle a vécu plus de 15 ans en tant que créatrice de voyages sur mesure.",
    },
  ];

  const values = [
    {
      icon: "♡",
      title: "Authenticité",
      text: "Nous privilégions les expériences vraies et les rencontres sincères.",
    },
    {
      icon: "♙",
      title: "Respect",
      text: "Nous respectons les cultures, les traditions et les communautés locales.",
    },
    {
      icon: "♧",
      title: "Éthique",
      text: "Nous travaillons avec des partenaires de confiance partageant nos valeurs.",
    },
    {
      icon: "◇",
      title: "Qualité",
      text: "Nous sélectionnons le meilleur pour vous offrir confort, sécurité et sérénité.",
    },
    {
      icon: "◎",
      title: "Engagement",
      text: "Nous soutenons un tourisme durable et bénéfique pour les régions que nous visitons.",
    },
  ];

  const services = [
    "Hôtels de charme et hébergements authentiques",
    "Guides francophones passionnés",
    "Chauffeurs privés expérimentés",
    "Expériences locales uniques et exclusives",
  ];



  const defaultAboutConfig = {
    theme: {
      primaryColor: "#b89450",
      primaryHover: "#9f7d3e",
      bgColor: "#f7f3ed",
      sectionBgColor: "#fbf8f2",
      textDark: "#161c20",
      textLight: "#273137",
      headingFont: "serif",
      bodyFont: "sans",
      borderRadius: "0px",
      hero: { overlayOpacity: "0.55", height: "560px", padding: "4rem 1.5rem", alignment: "center" },
      mission: { layout: "row", imgRadius: "0px", imgShadow: "0 18px 45px rgba(0,0,0,0.12)", padding: "5rem 1.5rem", gap: "5rem" },
      history: { overlayOpacity: "0.60", padding: "4rem 1.5rem" },
      team: { cardBg: "#fcf9f5", cardRadius: "4px", gap: "2rem" },
      values: { overlayOpacity: "0.40", columns: "5", gap: "2rem" },
      usp: { overlayOpacity: "0.75", columns: "4", gap: "2.5rem" }
    }
  };



  const [aboutsData, setAboutsData] = useState([]);
  const [pageSettings, setPageSettings] = useState({
    about_hero_title: "L’Inde, notre passion",
    about_hero_subtitle: "Votre plus beau voyage",
    about_hero_text: "Indéora Voyages est une agence locale francophone basée en Inde, spécialisée dans la création de voyages sur mesure, authentiques et responsables.",
    about_hero_overline: "À propos d’Indéora Voyages",
    about_mission_title: "Créer des voyages qui ont du sens",
    about_mission_text: "Nous croyons qu’un beau voyage ne se résume pas à une liste de monuments à voir.\n\nNotre mission est de vous faire découvrir l’Inde autrement, loin des circuits classiques.\n\nChaque voyage que nous imaginons est une invitation à vivre des moments sincères et ressentir la culture indienne.",
    about_mission_overline: "Notre mission",
    about_history_title: "Une passion franco-indienne",
    about_history_text: "Indéora Voyages est née de la rencontre entre deux cultures et une passion pour l’Inde.\n\nAprès plusieurs années d’expérience, nous avons voulu créer une agence différente.\n\nNotre connaissance du terrain nous ouvre les portes d’une Inde chaleureuse.",
    about_history_overline: "Notre histoire",
    about_team_title: "Des experts passionnés à vos côtés",
    about_team_overline: "Notre équipe",
    about_values_title: "Des voyages responsables et authentiques",
    about_values_overline: "Nos valeurs",
    about_services_title: "Une immersion locale unique",
    about_services_overline: "Dans les coulisses",
    about_services_text: "Nous sommes basés en Inde et parcourons régulièrement le terrain pour sélectionner avec soin nos partenaires, hébergements et expériences. Cette présence locale nous permet de vous offrir un accompagnement réactif et personnalisé.",
    about_hero_image: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=2000&q=90",
    about_mission_image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=90",
    about_history_image: "",
    about_values_image: "",
    about_services_image_1: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=700&q=80",
    about_services_image_2: "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&w=700&q=80",
    about_services_image_3: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=700&q=80",
    about_services_image_4: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=700&q=80"
  });

  const [dbConfig, setDbConfig] = useState(defaultAboutConfig);

  useEffect(() => {
    if (pageSettings.about_config) {
      try {
        const parsed = JSON.parse(pageSettings.about_config);
        setDbConfig({
          theme: { ...defaultAboutConfig.theme, ...(parsed.theme || {}) }
        });
      } catch (e) {
        console.error("Failed to parse about_config", e);
      }
    }
  }, [pageSettings.about_config]);

  const activeConfig = previewConfig || dbConfig;
  const theme = activeConfig.theme;

  const activeSettings = previewSettings ? { ...pageSettings, ...previewSettings } : pageSettings;


  useEffect(() => {
    const fetchAbouts = async () => {
      try {
        const data = await apiList('/abouts');
        if (data && data.length > 0) {
          setAboutsData(data);
        }
      } catch (error) {
        console.error("Error fetching abouts:", error);
      }
    };

    const fetchSettings = async () => {
      try {
        const data = await apiRequest('/settings');
        if (data.success && data.data) {
          setPageSettings(prev => ({
            ...prev,
            ...data.data
          }));
        }
      } catch (error) {
        console.error("Error fetching settings:", error);
      }
    };

    fetchAbouts();
    fetchSettings();
  }, []);

  const dynamicFeatures = aboutsData.filter(item => item.type === 'feature').length > 0
    ? aboutsData.filter(item => item.type === 'feature').sort((a, b) => a.display_order - b.display_order).map(i => ({ title: i.title, text: i.description, img: i.image || (i.title === 'Voyages Sur Mesure' ? CustomIcon : i.title === 'Guides Privés' ? guideIcon : i.title === 'Assistance Voyage 24h/24 Et 7j/7' ? assistanceIcon : expertIcon) }))
    : features;

  const dynamicMission = aboutsData.filter(item => item.type === 'mission').length > 0
    ? aboutsData.filter(item => item.type === 'mission').sort((a, b) => a.display_order - b.display_order)
    : [];

  const dynamicTeam = aboutsData.filter(item => item.type === 'team').length > 0
    ? aboutsData.filter(item => item.type === 'team').sort((a, b) => a.display_order - b.display_order).map(i => ({ name: i.title, role: i.subtitle, text: i.description, img: i.image || dipeshImg }))
    : team;

  const dynamicValues = aboutsData.filter(item => item.type === 'value').length > 0
    ? aboutsData.filter(item => item.type === 'value').sort((a, b) => a.display_order - b.display_order).map(i => ({ title: i.title, text: i.description, icon: i.icon || "♡" }))
    : values;

  const dynamicServices = aboutsData.filter(item => item.type === 'service').length > 0
    ? aboutsData.filter(item => item.type === 'service').sort((a, b) => a.display_order - b.display_order).map(i => i.title)
    : services;

  return (
    <div className="w-full bg-[var(--about-bg,var(--about-bg,#f7f3ed))] text-[var(--about-text-dark,var(--about-text-dark,#161c20))] overflow-hidden about-page-wrapper font-sans">

      <style>{`
        .about-page-wrapper {
          --about-primary: ${theme.primaryColor || '#b89450'};
          --about-primary-hover: ${theme.primaryHover || '#9f7d3e'};
          --about-bg: ${theme.bgColor || '#f7f3ed'};
          --about-section-bg: ${theme.sectionBgColor || '#fbf8f2'};
          --about-text-dark: ${theme.textDark || '#161c20'};
          --about-text-light: ${theme.textLight || '#273137'};
          --about-radius: ${theme.borderRadius || '0px'};
          
          --hero-opacity: ${theme.hero?.overlayOpacity || '0.55'};
          --hero-height: ${theme.hero?.height || '560px'};
          --hero-align: ${theme.hero?.alignment || 'center'};
          
          --mission-dir: ${theme.mission?.layout === 'row-reverse' ? 'row-reverse' : 'row'};
          --mission-gap: ${theme.mission?.gap || '5rem'};
          --mission-radius: ${theme.mission?.imgRadius || '0px'};
          
          --hist-opacity: ${theme.history?.overlayOpacity || '0.60'};
          --team-card-bg: ${theme.team?.cardBg || '#fcf9f5'};
          --team-gap: ${theme.team?.gap || '2rem'};
          
          --val-opacity: ${theme.values?.overlayOpacity || '0.40'};
          --usp-opacity: ${theme.usp?.overlayOpacity || '0.75'};

          font-family: ${theme.bodyFont === 'serif' ? '"Playfair Display", serif' : '"Inter", sans-serif'};
        }
        .about-heading {
          font-family: ${theme.headingFont === 'sans' ? '"Inter", sans-serif' : '"Playfair Display", serif'} !important;
        }
        .about-radius {
          border-radius: var(--about-radius) !important;
        }
      `}</style>

      {/* HEADER + HERO */}
      <section className="relative min-h-[380px] min-h-[var(--hero-height)] flex items-center justify-center text-white overflow-hidden">
        <img
          src={activeSettings.about_hero_image || "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=2000&q=90"}
          alt="Indeora hero"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black opacity-[var(--hero-opacity)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/20 to-black/50" />

        {/* Navbar */}
        {/* <header className="absolute top-0 left-0 w-full z-20 px-6 md:px-16 py-5">
          <nav className="flex items-center justify-between text-[10px] tracking-[0.26em] font-bold uppercase w-full max-w-[1440px] mx-auto px-[40px]">
            <div className="hidden lg:flex items-center gap-10">
              <Link to="/" className="hover:text-[var(--about-primary,#c5a15c)]">
                Accueil
              </Link>
              <Link
                to="/about"
                className="text-[var(--about-primary,#c5a15c)] border-b border-[var(--about-primary,#c5a15c)] pb-2"
              >
                À Propos
              </Link>
              <Link to="/destinations" className="hover:text-[var(--about-primary,#c5a15c)]">
                Destinations⌄
              </Link>
            </div>

            <Link to="/" className="flex items-center justify-center">
              <img src={logo} alt="Indéora Voyages" className="h-12 md:h-16 w-auto" />
            </Link>

            <div className="hidden lg:flex items-center gap-10">
              <Link to="/blog" className="hover:text-[var(--about-primary,#c5a15c)]">
                Blog
              </Link>
              <Link to="/avant-de-partir" className="hover:text-[var(--about-primary,#c5a15c)]">
                Avant de partir
              </Link>
              <Link to="/contact" className="hover:text-[var(--about-primary,#c5a15c)]">
                Contact rapide
              </Link>
            </div>
          </nav>
        </header> */}

        {/* Social */}
        <div className="hidden md:flex absolute left-8 top-1/2 -translate-y-1/2 z-20 flex-col items-center gap-4">
          {["ig", "in", "f"].map((item) => (
            <div
              key={item}
              className="w-8 h-8 rounded-full border border-white/45 flex items-center justify-center text-[10px] font-bold"
            >
              {item}
            </div>
          ))}

          <div className="h-20 w-px bg-white/35 mt-3" />

          <p className="vertical-text text-[9px] tracking-[0.25em] uppercase">
            Suivez-nous
          </p>
        </div>

        <div className="relative z-10 text-center px-6 pt-16 md:pt-28 max-w-4xl mx-auto">
          <p className="text-[var(--about-primary,#d2aa5c)] text-[9px] md:text-[12px] tracking-[0.35em] uppercase font-bold mb-4 md:mb-6">
            {activeSettings.about_hero_overline}
          </p>

          <h1 className="about-heading text-3xl md:text-6xl lg:text-7xl leading-tight mb-2">
            {activeSettings.about_hero_title}
          </h1>

          <h2 className="about-heading italic text-[var(--about-primary,#d2aa5c)] text-2xl md:text-5xl leading-tight mb-5 md:mb-7">
            {activeSettings.about_hero_subtitle}
          </h2>

          <p className="max-w-2xl mx-auto text-[12px] md:text-base leading-6 md:leading-8 text-white/90">
            {activeSettings.about_hero_text}
          </p>
        </div>
      </section>

      {/* MISSION */}
      <section className="bg-[var(--about-section-bg,#fbf8f2)] py-3 md:py-20 px-2 md:px-6">
        <div className="flex flex-col md:flex-row items-center w-full max-w-[1440px] mx-auto px-1 md:px-[40px]" style={{ gap: "var(--mission-gap)", flexDirection: theme.mission?.layout === "row-reverse" ? "row-reverse" : "row" }}>
          <div className="flex-1">
            <p className="text-[var(--about-primary,#b89450)] text-[7px] md:text-[11px] tracking-[0.25em] md:tracking-[0.35em] uppercase font-bold mb-2 md:mb-4">
              {activeSettings.about_mission_overline}
            </p>

            <h2 className="about-heading text-lg md:text-5xl leading-tight mb-3 md:mb-8 whitespace-pre-line">
              {activeSettings.about_mission_title}
            </h2>

            <div className="space-y-2 md:space-y-5 text-[10px] md:text-[15px] leading-4 md:leading-7 text-[var(--about-text-light,#273137)]/85 max-w-md">
              {activeSettings.about_mission_text.split('\n').filter(p => p.trim() !== '').map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            <button
              onClick={() => setIsPhilosophieOpen(true)}
              className="mt-4 md:mt-8 bg-[var(--about-primary,#b89450)] text-white text-[7px] md:text-[10px] tracking-[0.2em] md:tracking-[0.35em] uppercase font-bold px-3 py-2 md:px-8 md:py-4 hover:bg-[var(--about-primary-hover,#9f7d3e)] transition"
            >
              Notre philosophie
            </button>
          </div>

          <div className="about-radius overflow-hidden shadow-[0_18px_45px_rgba(0,0,0,0.12)]">
            <img
              src={activeSettings.about_mission_image || "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=90"}
              alt="Mission"
              className="w-full h-[200px] md:h-[430px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* HISTOIRE + MAP */}
      <section className="relative text-white py-4 md:py-16 px-2 md:px-6 overflow-hidden">
        {/* Background Image with Black Filter Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={activeSettings.about_history_image || bgHistoryImg}
            alt="Background history"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-[var(--usp-opacity)]" />
        </div>

        <div className="relative z-10 grid grid-cols-2 gap-4 md:gap-20 items-center w-full max-w-[1440px] mx-auto px-1 md:px-[40px]">
          <div>
            <p className="text-[var(--about-primary,#b89450)] text-[7px] md:text-[11px] tracking-[0.25em] md:tracking-[0.35em] uppercase font-bold mb-2 md:mb-4">
              {activeSettings.about_history_overline}
            </p>

            <h2 className="about-heading text-lg md:text-5xl leading-tight mb-3 md:mb-7">
              {activeSettings.about_history_title}
            </h2>

            <div className="space-y-2 md:space-y-5 text-[10px] md:text-[15px] leading-4 md:leading-7 text-white/75 max-w-lg">
              {activeSettings.about_history_text.split('\n').filter(p => p.trim() !== '').map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            <button
              onClick={() => setIsParcoursOpen(true)}
              className="mt-4 md:mt-8 bg-[var(--about-primary,#b89450)] text-white text-[7px] md:text-[10px] tracking-[0.2em] md:tracking-[0.35em] uppercase font-bold px-3 py-2 md:px-8 md:py-4 hover:bg-[var(--about-primary-hover,#9f7d3e)] transition"
            >
              Notre parcours
            </button>
          </div>

          <div className="relative w-full max-w-[280px] md:max-w-[400px] aspect-[4/5] flex items-center justify-center bg-transparent mx-auto">
            {/* The Map Background */}
            <img
              src="src/assets/ChatGPT Image May 13, 2026, 09_36_16 PM.png"
              alt="Carte de l'Inde"
              className="w-full h-full object-contain opacity-70 grayscale contrast-125"
              style={{
                filter: 'sepia(100%) saturate(280%) brightness(1.1) hue-rotate(350deg)',
                mixBlendMode: 'screen'
              }}
            />

            {/* Connection Lines (SVG Overlay) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" viewBox="0 0 400 500">
              <defs>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Himalaya & Ladakh */}
              {/* <line x1="220" y1="80" x2="250" y2="70" stroke="var(--about-primary,#d2aa5c)" strokeWidth="1" strokeDasharray="3,3" />
              <circle cx="220" cy="80" r="3" fill="var(--about-primary,#d2aa5c)" filter="url(#glow)" /> */}

              {/* Rajasthan */}
              {/* <line x1="140" y1="160" x2="100" y2="160" stroke="var(--about-primary,#d2aa5c)" strokeWidth="1" strokeDasharray="3,3" />
              <circle cx="140" cy="160" r="6" fill="var(--about-primary,#d2aa5c)" filter="url(#glow)" /> */}

              {/* Varanasi */}
              {/* <line x1="280" y1="230" x2="310" y2="230" stroke="var(--about-primary,#d2aa5c)" strokeWidth="1" strokeDasharray="3,3" />
              <circle cx="280" cy="230" r="3" fill="var(--about-primary,#d2aa5c)" filter="url(#glow)" /> */}

              {/* Goa & Côte Ouest */}
              {/* <line x1="150" y1="320" x2="120" y2="330" stroke="var(--about-primary,#d2aa5c)" strokeWidth="1" strokeDasharray="3,3" />
              <circle cx="150" cy="320" r="4" fill="var(--about-primary,#d2aa5c)" filter="url(#glow)" /> */}

              {/* Kerala */}
              {/* <line x1="180" y1="410" x2="130" y2="430" stroke="var(--about-primary,#d2aa5c)" strokeWidth="1" strokeDasharray="3,3" />
              <circle cx="180" cy="410" r="3" fill="var(--about-primary,#d2aa5c)" filter="url(#glow)" /> */}

              {/* Inde du Sud */}
              {/* <line x1="220" y1="380" x2="260" y2="360" stroke="var(--about-primary,#d2aa5c)" strokeWidth="1" strokeDasharray="3,3" />
              <circle cx="220" cy="380" r="3" fill="var(--about-primary,#d2aa5c)" filter="url(#glow)" /> */}
            </svg>

            {/* Labels */}
            {/* <span className="absolute top-[12%] right-[10%] text-[var(--about-primary,#d2aa5c)] text-[10px] font-bold tracking-[0.2em] uppercase whitespace-nowrap z-20">
              Himalaya & Ladakh
            </span>
            <span className="absolute top-[30%] left-[0%] text-[var(--about-primary,#d2aa5c)] text-[10px] font-bold tracking-[0.2em] uppercase whitespace-nowrap z-20">
              Rajasthan
            </span>
            <span className="absolute top-[44%] right-[5%] text-[var(--about-primary,#d2aa5c)] text-[10px] font-bold tracking-[0.2em] uppercase whitespace-nowrap z-20">
              Varanasi
            </span>
            <span className="absolute bottom-[30%] left-[0%] text-[var(--about-primary,#d2aa5c)] text-[10px] font-bold tracking-[0.2em] uppercase whitespace-nowrap z-20">
              Goa & Côte Ouest
            </span>
            <span className="absolute bottom-[10%] left-[12%] text-[var(--about-primary,#d2aa5c)] text-[10px] font-bold tracking-[0.2em] uppercase whitespace-nowrap z-20">
              Kerala
            </span>
            <span className="absolute bottom-[25%] right-[15%] text-[var(--about-primary,#d2aa5c)] text-[10px] font-bold tracking-[0.2em] uppercase whitespace-nowrap z-20">
              Inde du Sud
            </span> */}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="bg-[var(--about-section-bg,#fbf8f2)] py-4 md:py-16 px-4 md:px-6">
        <div className="w-full max-w-[1440px] mx-auto px-2 md:px-[40px]">
          <div className="text-center mb-8 md:mb-12">
            <p className="text-[var(--about-primary,#b89450)] text-[9px] md:text-[10px] tracking-[0.35em] uppercase font-bold mb-2 md:mb-3">
              {activeSettings.about_team_overline}
            </p>

            <h2 className="about-heading text-xl md:text-4xl">
              {activeSettings.about_team_title}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-20">
            {dynamicTeam.map((person, index) => (
              <div
                key={person.name}
                className={`flex gap-3 md:gap-6 items-start ${index === 1 ? "md:border-l md:pl-16 border-[#d8cdbc]" : ""
                  }`}
              >
                <div className="w-16 h-16 md:w-28 md:h-28 rounded-full overflow-hidden shrink-0">
                  <img
                    src={person.img}
                    alt={person.name}
                    className={`w-full h-full object-cover ${index === 0 ? 'scale-[2.5] object-[20%_25%] -translate-y-10' : index === 1 ? 'scale-[1.8] object-center translate-y-8' : ''}`}
                  />
                </div>

                <div>
                  <h3 className="about-heading text-base md:text-xl mb-0.5 md:mb-1">{person.name}</h3>
                  <p className="text-[var(--about-primary,#b89450)] text-[9px] md:text-[12px] font-bold mb-1.5 md:mb-3">
                    {person.role}
                  </p>
                  <p className="text-[10px] md:text-[13px] leading-4 md:leading-6 text-[var(--about-text-light,#273137)]/75 line-clamp-5">
                    {person.text}
                  </p>
                  <button
                    onClick={() => setActiveTeamMember(person)}
                    className="mt-1 md:mt-2 text-[var(--about-primary,#b89450)] hover:text-[var(--about-primary-hover,#9f7d3e)] text-[8px] md:text-[10px] tracking-[0.15em] uppercase font-bold flex items-center gap-1.5 transition-colors group cursor-pointer"
                  >
                    Lire la suite <span className="text-[8px] md:text-[10px] group-hover:translate-y-0.5 transition-transform">↓</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="relative text-white py-4 md:py-16 px-4 md:px-6 overflow-hidden">
        {/* Background Image with Black Filter Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={activeSettings.about_values_image || bgValuesImg}
            alt="Background values"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-[var(--usp-opacity)]" />
        </div>

        <div className="relative z-10 text-center w-full max-w-[1440px] mx-auto px-2 md:px-[40px]">
          <p className="text-[var(--about-primary,#b89450)] text-[9px] md:text-[10px] tracking-[0.35em] uppercase font-bold mb-2 md:mb-3">
            {activeSettings.about_values_overline}
          </p>

          <h2 className="about-heading text-xl md:text-4xl mb-8 md:mb-12">
            {activeSettings.about_values_title}
          </h2>

          <div className="grid grid-cols-2 lg:grid-cols-5 gap-3 md:gap-8">
            {dynamicValues.map((item, index) => (
              <div
                key={item.title}
                className={`${index !== 0 ? "lg:border-l border-white/15" : ""
                  } px-1 md:px-5`}
              >
                <div className="text-[var(--about-primary,#d2aa5c)] text-xl md:text-3xl mb-1.5 md:mb-4">
                  {item.icon}
                </div>
                <h3 className="about-heading text-[11px] md:text-lg mb-0.5 md:mb-3">{item.title}</h3>
                <p className="text-[8px] md:text-[12px] leading-[14px] md:leading-5 text-white/65">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IMMERSION */}
      <section className="bg-[var(--about-section-bg,#fbf8f2)] py-4 md:py-16 px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center w-full max-w-[1440px] mx-auto px-2 md:px-[40px]">
          <div className="grid grid-cols-2 gap-2">
            <img
              src={activeSettings.about_services_image_1 || "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=700&q=80"}
              alt="Services 1"
              className="w-full h-28 md:h-48 object-cover"
            />
            <img
              src={activeSettings.about_services_image_2 || "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&w=700&q=80"}
              alt="Services 2"
              className="w-full h-28 md:h-48 object-cover"
            />
            <img
              src={activeSettings.about_services_image_3 || "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=700&q=80"}
              alt="Services 3"
              className="w-full h-28 md:h-48 object-cover"
            />
            <img
              src={activeSettings.about_services_image_4 || "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=700&q=80"}
              alt="Services 4"
              className="w-full h-28 md:h-48 object-cover"
            />
          </div>

          <div>
            <p className="text-[var(--about-primary,#b89450)] text-[9px] md:text-[11px] tracking-[0.35em] uppercase font-bold mb-3 md:mb-4">
              {activeSettings.about_services_overline}
            </p>

            <h2 className="about-heading text-2xl md:text-5xl leading-tight mb-4 md:mb-6">
              {activeSettings.about_services_title}
            </h2>

            <p className="text-[13px] md:text-[15px] leading-6 md:leading-7 text-[var(--about-text-light,#273137)]/80 mb-8 md:mb-10 max-w-xl">
              {activeSettings.about_services_text}
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {dynamicServices.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="text-[var(--about-primary,#b89450)] text-2xl mb-3">▧</div>
                  <p className="text-[11px] leading-4 font-semibold text-[var(--about-text-light,#273137)]/80">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* TRUST */}


      {/* Premium Philosophy Modal */}
      {isPhilosophieOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-all duration-300"
          onClick={() => setIsPhilosophieOpen(false)}
        >
          <div
            className="relative bg-[var(--team-card-bg)] border-t-4 border-[var(--about-primary,#b89450)] max-w-2xl w-full about-radius shadow-[0_24px_54px_rgba(0,0,0,0.3)] p-8 md:p-12 animate-fadeIn overflow-y-auto max-h-[90vh] -translate-y-8 md:-translate-y-16"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsPhilosophieOpen(false)}
              className="absolute top-4 right-5 text-gray-400 hover:text-[var(--about-primary,#b89450)] transition-colors text-xl font-bold p-2"
              aria-label="Fermer"
            >
              ✕
            </button>

            <div className="text-center mb-8">
              <p className="text-[var(--about-primary,#b89450)] text-[10px] tracking-[0.35em] uppercase font-bold mb-3">
                Notre mission
              </p>
              <h2 className="about-heading text-3xl md:text-4xl text-[var(--about-text-dark,#161c20)] italic">
                Créer des voyages qui ont du sens
              </h2>
              <div className="w-24 h-[1px] bg-[var(--about-primary,#b89450)]/30 mx-auto mt-4" />
            </div>

            <div className="about-heading italic text-base md:text-lg leading-relaxed text-[var(--about-primary,#b89450)] mb-8 text-center px-2">
              "Nous croyons qu’un beau voyage ne se résume pas à une liste de monuments à visiter ou de photos à rapporter. Un véritable voyage est une émotion. Une rencontre. Un souvenir qui reste longtemps après le retour."
            </div>

            {dynamicMission.length > 0 ? (
              <div className="space-y-8 mt-8">
                {dynamicMission.map((item, idx) => (
                  <div key={idx} className="flex flex-col gap-4">
                    {item.image && <img src={item.image} alt={item.title} className="w-full h-48 md:h-64 object-cover rounded-md shadow-md" />}
                    <div>
                      {item.title && <h3 className="about-heading text-xl md:text-2xl text-[var(--about-primary,#b89450)] mb-2">{item.title}</h3>}
                      {item.description && <p className="text-sm md:text-base leading-relaxed text-[var(--about-text-light,#273137)]/90 whitespace-pre-line">{item.description}</p>}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-6 text-sm md:text-base leading-relaxed text-[var(--about-text-light,#273137)]/90 font-medium">
                <p>
                  Notre mission est de vous faire découvrir l’Inde autrement — une Inde plus humaine, plus sincère et profondément vivante. Loin des circuits impersonnels et du tourisme standardisé, nous imaginons des voyages uniques, pensés selon votre personnalité, votre rythme et votre manière de ressentir le monde.
                </p>
                <p>
                  Chaque itinéraire est conçu comme une expérience à vivre pleinement : partager un thé avec une famille dans un village du Rajasthan, assister à une cérémonie au lever du soleil sur les rives du Gange, traverser les paysages paisibles du Kerala ou écouter les histoires d’un guide passionné au cœur des anciens palais indiens.
                </p>
                <p>
                  À travers Indeora Voyages, nous souhaitons créer des moments vrais, des émotions profondes et des souvenirs qui marquent durablement. Parce que voyager en Inde, ce n’est pas seulement découvrir un pays — c’est apprendre à le ressentir, à le comprendre et parfois même à se redécouvrir soi-même.
                </p>
              </div>
            )}

            <div className="mt-10 text-center">
              <button
                onClick={() => setIsPhilosophieOpen(false)}
                className="bg-[var(--about-primary,#b89450)] text-white text-[9px] tracking-[0.3em] font-bold py-3.5 px-8 hover:bg-[var(--about-primary-hover,#9f7d3e)] transition uppercase"
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Premium Parcours Modal */}
      {isParcoursOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-all duration-300"
          onClick={() => setIsParcoursOpen(false)}
        >
          <div
            className="relative bg-[var(--team-card-bg)] border-t-4 border-[var(--about-primary,#b89450)] max-w-2xl w-full about-radius shadow-[0_24px_54px_rgba(0,0,0,0.3)] p-8 md:p-12 animate-fadeIn overflow-y-auto max-h-[90vh] -translate-y-8 md:-translate-y-16"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsParcoursOpen(false)}
              className="absolute top-4 right-5 text-gray-400 hover:text-[var(--about-primary,#b89450)] transition-colors text-xl font-bold p-2"
              aria-label="Fermer"
            >
              ✕
            </button>

            <div className="text-center mb-8">
              <p className="text-[var(--about-primary,#b89450)] text-[10px] tracking-[0.35em] uppercase font-bold mb-3">
                Notre histoire
              </p>
              <h2 className="about-heading text-3xl md:text-4xl text-[var(--about-text-dark,#161c20)] italic">
                Une passion franco-indienne
              </h2>
              <div className="w-24 h-[1px] bg-[var(--about-primary,#b89450)]/30 mx-auto mt-4" />
            </div>

            <div className="about-heading italic text-base md:text-lg leading-relaxed text-[var(--about-primary,#b89450)] mb-8 text-center px-2">
              "Indeora Voyages est née de la rencontre entre deux cultures, deux regards sur le voyage et une même passion profonde pour l’Inde."
            </div>

            <div className="space-y-6 text-sm md:text-base leading-relaxed text-[var(--about-text-light,#273137)]/90 font-medium">
              <p>
                D’un côté, l’amour du voyage, du partage et de la découverte. De l’autre, une connaissance intime du terrain, des traditions et de l’âme véritable de l’Inde. Ensemble, ces expériences ont donné naissance à une agence franco-indienne pensée autrement : plus humaine, plus proche et plus authentique.
              </p>
              <p>
                Après plusieurs années consacrées au tourisme et à la création de voyages sur mesure, nous avons ressenti l’envie de proposer une approche différente. Une agence à taille humaine, fondée sur l’écoute, la confiance et la passion du voyage vécu avec sincérité.
              </p>
              <p>
                Au fil du temps, nous avons parcouru l’Inde bien au-delà des itinéraires classiques, explorant des régions méconnues, rencontrant des familles, des artisans, des guides passionnés et des lieux encore préservés du tourisme de masse. Cette immersion nous a permis de construire un réseau local solide et précieux, basé sur des relations humaines et durables.
              </p>
              <p>
                Aujourd’hui, cette double culture franco-indienne nous permet de comprendre les attentes des voyageurs francophones tout en leur ouvrant les portes d’une Inde authentique, chaleureuse et profondément vivante.
              </p>
              <p>
                À travers Indeora Voyages, nous ne souhaitons pas simplement organiser des séjours. Nous voulons transmettre une émotion, partager une vision du voyage et faire découvrir une Inde que l’on ne regarde pas seulement avec les yeux, mais que l’on ressent avec le cœur.
              </p>
            </div>

            <div className="mt-10 text-center">
              <button
                onClick={() => setIsParcoursOpen(false)}
                className="bg-[var(--about-primary,#b89450)] text-white text-[9px] tracking-[0.3em] font-bold py-3.5 px-8 hover:bg-[var(--about-primary-hover,#9f7d3e)] transition uppercase"
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Premium Dynamic Team Modal */}
      {activeTeamMember && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-all duration-300"
          onClick={() => setActiveTeamMember(null)}
        >
          <div
            className="relative bg-[var(--team-card-bg)] border-t-4 border-[var(--about-primary,#b89450)] max-w-2xl w-full about-radius shadow-[0_24px_54px_rgba(0,0,0,0.3)] p-8 md:p-12 animate-fadeIn overflow-y-auto max-h-[90vh] -translate-y-8 md:-translate-y-16 text-left"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveTeamMember(null)}
              className="absolute top-4 right-5 text-gray-400 hover:text-[var(--about-primary,#b89450)] transition-colors text-xl font-bold p-2"
              aria-label="Fermer"
            >
              ✕
            </button>

            <div className="text-center mb-8">
              <p className="text-[var(--about-primary,#b89450)] text-[10px] tracking-[0.35em] uppercase font-bold mb-3">
                {activeTeamMember.role}
              </p>
              <h2 className="about-heading text-3xl md:text-4xl text-[var(--about-text-dark,#161c20)] italic">
                {activeTeamMember.name}
              </h2>
              <div className="w-24 h-[1px] bg-[var(--about-primary,#b89450)]/30 mx-auto mt-4" />
            </div>

            {(() => {
              const paragraphs = (activeTeamMember.text || "").split('\n').filter(p => p.trim() !== '');
              if (paragraphs.length === 0) return null;

              return (
                <>
                  {/* First paragraph is styled as an italic quote */}
                  <div className="about-heading italic text-base md:text-lg leading-relaxed text-[var(--about-primary,#b89450)] mb-8 text-center px-2">
                    "{paragraphs[0]}"
                  </div>

                  {/* Remaining paragraphs are standard text */}
                  {paragraphs.length > 1 && (
                    <div className="space-y-6 text-sm md:text-base leading-relaxed text-[var(--about-text-light,#273137)]/90 font-medium">
                      {paragraphs.slice(1).map((p, idx) => (
                        <p key={idx}>{p}</p>
                      ))}
                    </div>
                  )}
                </>
              );
            })()}

            <div className="mt-10 text-center">
              <button
                onClick={() => setActiveTeamMember(null)}
                className="bg-[var(--about-primary,#b89450)] text-white text-[9px] tracking-[0.3em] font-bold py-3.5 px-8 hover:bg-[var(--about-primary-hover,#9f7d3e)] transition uppercase"
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}

      {/* USP BANNER */}
      <section className="relative w-full py-8 md:py-10 overflow-hidden">
        <img
          src={activeSettings.about_values_image || bgValuesImg}
          alt="Unique India"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black opacity-[var(--usp-opacity)]"></div>

        <div className="relative z-10 md: lg:px-16 py-6 md:py-8 w-full max-w-[1440px] mx-auto px-2 md:px-[40px]">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-10 text-center">
            {dynamicFeatures.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-start text-white px-1"
              >
                <div className="h-[50px] md:h-[90px] flex items-end justify-center mb-2 md:mb-3">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-[40px] md:w-[80px] h-auto object-contain drop-shadow-[0_8px_10px_rgba(0,0,0,0.45)]"
                  />
                </div>

                <h3 className="about-heading font-bold text-[12px] md:text-[20px] lg:text-[22px] leading-tight drop-shadow-md mb-1 md:mb-2">
                  {item.title}
                </h3>

                <p className="max-w-[280px] text-[9px] md:text-[13px] leading-4 md:leading-relaxed font-medium text-white/90 drop-shadow-md">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {!previewConfig && <Footer />}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95) translateY(10px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </div>
  );
};

export default About;
