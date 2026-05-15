import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import logo from "../assets/png .png";

const About = () => {
  const team = [
    {
      name: "Vishnu Swami",
      role: "Fondateur francophone",
      img: "https://indeoravoyages.com/wp-content/uploads/2025/08/rajan-768x611.jpg",
      text: "Passionné de voyages depuis toujours, Vishnu Swami a d’abord exploré le monde au-delà de l’Inde. Il a vécu plusieurs années en France où il a appris le français qu’il parle couramment.",
    },
    {
      name: "Amandine Fastré",
      role: "Créatrice d’itinéraires",
      img: "https://indeoravoyages.com/wp-content/uploads/2025/08/amandine-indeora-voyages-1.jpg",
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

  return (
    <div className="w-full bg-[#f7f3ed] text-[#161c20] overflow-hidden font-sans">
      {/* HEADER + HERO */}
      <section className="relative min-h-[630px] md:min-h-[720px] flex items-center justify-center text-white overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=2000&q=90"
          alt="Indeora hero"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/20 to-black/50" />

        {/* Navbar */}
        {/* <header className="absolute top-0 left-0 w-full z-20 px-6 md:px-16 py-5">
          <nav className="max-w-[1280px] mx-auto flex items-center justify-between text-[10px] tracking-[0.26em] font-bold uppercase">
            <div className="hidden lg:flex items-center gap-10">
              <Link to="/" className="hover:text-[#c5a15c]">
                Accueil
              </Link>
              <Link
                to="/about"
                className="text-[#c5a15c] border-b border-[#c5a15c] pb-2"
              >
                À Propos
              </Link>
              <Link to="/destinations" className="hover:text-[#c5a15c]">
                Destinations⌄
              </Link>
            </div>

            <Link to="/" className="flex items-center justify-center">
              <img src={logo} alt="Indéora Voyages" className="h-12 md:h-16 w-auto" />
            </Link>

            <div className="hidden lg:flex items-center gap-10">
              <Link to="/blog" className="hover:text-[#c5a15c]">
                Blog
              </Link>
              <Link to="/avant-de-partir" className="hover:text-[#c5a15c]">
                Avant de partir
              </Link>
              <Link to="/contact" className="hover:text-[#c5a15c]">
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

        <div className="relative z-10 text-center px-6 pt-28 max-w-4xl mx-auto">
          <p className="text-[#d2aa5c] text-[11px] md:text-[12px] tracking-[0.35em] uppercase font-bold mb-6">
            À propos d’Indéora Voyages
          </p>

          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-tight mb-2">
            L’Inde, notre passion
          </h1>

          <h2 className="font-serif italic text-[#d2aa5c] text-3xl md:text-5xl leading-tight mb-7">
            Votre plus beau voyage
          </h2>

          <p className="max-w-2xl mx-auto text-sm md:text-base leading-8 text-white/90">
            Indéora Voyages est une agence locale francophone basée en Inde,
            spécialisée dans la création de voyages sur mesure, authentiques et
            responsables.
          </p>
        </div>
      </section>

      {/* MISSION */}
      <section className="bg-[#fbf8f2] py-16 md:py-20 px-6">
        <div className="max-w-[1160px] mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div>
            <p className="text-[#b89450] text-[11px] tracking-[0.35em] uppercase font-bold mb-4">
              Notre mission
            </p>

            <h2 className="font-serif text-3xl md:text-5xl leading-tight mb-8">
              Créer des voyages qui <br /> ont du sens
            </h2>

            <div className="space-y-5 text-[14px] md:text-[15px] leading-7 text-[#273137]/85 max-w-md">
              <p>
                Nous croyons qu’un beau voyage ne se résume pas à une liste de
                monuments à voir.
              </p>

              <p>
                Notre mission est de vous faire découvrir l’Inde autrement, loin
                des circuits classiques, en créant des itinéraires uniques qui
                vous ressemblent.
              </p>

              <p>
                Chaque voyage que nous imaginons est une invitation à vivre des
                moments sincères, à rencontrer, comprendre et ressentir la
                culture indienne.
              </p>
            </div>

            <button className="mt-8 bg-[#b89450] text-white text-[10px] tracking-[0.35em] uppercase font-bold px-8 py-4 hover:bg-[#9f7d3e] transition">
              Notre philosophie
            </button>
          </div>

          <div className="rounded-sm overflow-hidden shadow-[0_18px_45px_rgba(0,0,0,0.12)]">
            <img
              src="https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=90"
              alt="Taj Mahal"
              className="w-full h-[320px] md:h-[430px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* HISTOIRE + MAP */}
      <section className="bg-[#11191d] text-white py-16 md:py-20 px-6">
        <div className="max-w-[1160px] mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div>
            <p className="text-[#b89450] text-[11px] tracking-[0.35em] uppercase font-bold mb-4">
              Notre histoire
            </p>

            <h2 className="font-serif text-3xl md:text-5xl leading-tight mb-7">
              Une passion franco-indienne
            </h2>

            <div className="space-y-5 text-[14px] md:text-[15px] leading-7 text-white/75 max-w-lg">
              <p>
                Indéora Voyages est née de la rencontre entre deux cultures, deux
                sensibilités et une même passion pour l’Inde.
              </p>

              <p>
                Après plusieurs années d’expérience dans le tourisme et
                l’organisation de voyages, nous avons voulu créer une agence
                différente, à taille humaine.
              </p>

              <p>
                Notre connaissance du terrain et notre réseau local nous
                permettent de vous ouvrir les portes d’une Inde vraie et
                chaleureuse.
              </p>
            </div>

            <button className="mt-8 bg-[#b89450] text-white text-[10px] tracking-[0.35em] uppercase font-bold px-8 py-4 hover:bg-[#9f7d3e] transition">
              Notre parcours
            </button>
          </div>

          <div className="relative w-full max-w-[500px] aspect-[4/5] flex items-center justify-center bg-[#11191d]">
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
              {/* <line x1="220" y1="80" x2="250" y2="70" stroke="#d2aa5c" strokeWidth="1" strokeDasharray="3,3" />
              <circle cx="220" cy="80" r="3" fill="#d2aa5c" filter="url(#glow)" /> */}

              {/* Rajasthan */}
              {/* <line x1="140" y1="160" x2="100" y2="160" stroke="#d2aa5c" strokeWidth="1" strokeDasharray="3,3" />
              <circle cx="140" cy="160" r="6" fill="#d2aa5c" filter="url(#glow)" /> */}

              {/* Varanasi */}
              {/* <line x1="280" y1="230" x2="310" y2="230" stroke="#d2aa5c" strokeWidth="1" strokeDasharray="3,3" />
              <circle cx="280" cy="230" r="3" fill="#d2aa5c" filter="url(#glow)" /> */}

              {/* Goa & Côte Ouest */}
              {/* <line x1="150" y1="320" x2="120" y2="330" stroke="#d2aa5c" strokeWidth="1" strokeDasharray="3,3" />
              <circle cx="150" cy="320" r="4" fill="#d2aa5c" filter="url(#glow)" /> */}

              {/* Kerala */}
              {/* <line x1="180" y1="410" x2="130" y2="430" stroke="#d2aa5c" strokeWidth="1" strokeDasharray="3,3" />
              <circle cx="180" cy="410" r="3" fill="#d2aa5c" filter="url(#glow)" /> */}

              {/* Inde du Sud */}
              {/* <line x1="220" y1="380" x2="260" y2="360" stroke="#d2aa5c" strokeWidth="1" strokeDasharray="3,3" />
              <circle cx="220" cy="380" r="3" fill="#d2aa5c" filter="url(#glow)" /> */}
            </svg>

            {/* Labels */}
            {/* <span className="absolute top-[12%] right-[10%] text-[#d2aa5c] text-[10px] font-bold tracking-[0.2em] uppercase whitespace-nowrap z-20">
              Himalaya & Ladakh
            </span>
            <span className="absolute top-[30%] left-[0%] text-[#d2aa5c] text-[10px] font-bold tracking-[0.2em] uppercase whitespace-nowrap z-20">
              Rajasthan
            </span>
            <span className="absolute top-[44%] right-[5%] text-[#d2aa5c] text-[10px] font-bold tracking-[0.2em] uppercase whitespace-nowrap z-20">
              Varanasi
            </span>
            <span className="absolute bottom-[30%] left-[0%] text-[#d2aa5c] text-[10px] font-bold tracking-[0.2em] uppercase whitespace-nowrap z-20">
              Goa & Côte Ouest
            </span>
            <span className="absolute bottom-[10%] left-[12%] text-[#d2aa5c] text-[10px] font-bold tracking-[0.2em] uppercase whitespace-nowrap z-20">
              Kerala
            </span>
            <span className="absolute bottom-[25%] right-[15%] text-[#d2aa5c] text-[10px] font-bold tracking-[0.2em] uppercase whitespace-nowrap z-20">
              Inde du Sud
            </span> */}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="bg-[#fbf8f2] py-14 md:py-16 px-6">
        <div className="max-w-[1050px] mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#b89450] text-[10px] tracking-[0.35em] uppercase font-bold mb-3">
              Notre équipe
            </p>

            <h2 className="font-serif text-2xl md:text-4xl">
              Des experts passionnés à vos côtés
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-10 md:gap-20">
            {team.map((person, index) => (
              <div
                key={person.name}
                className={`flex gap-6 items-start ${index === 1 ? "md:border-l md:pl-16 border-[#d8cdbc]" : ""
                  }`}
              >
                <img
                  src={person.img}
                  alt={person.name}
                  className="w-24 h-24 md:w-28 md:h-28 rounded-full object-cover"
                />

                <div>
                  <h3 className="font-serif text-xl mb-1">{person.name}</h3>
                  <p className="text-[#b89450] text-[12px] font-bold mb-3">
                    {person.role}
                  </p>
                  <p className="text-[13px] leading-6 text-[#273137]/75">
                    {person.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-[#11191d] text-white py-14 md:py-16 px-6">
        <div className="max-w-[1180px] mx-auto text-center">
          <p className="text-[#b89450] text-[10px] tracking-[0.35em] uppercase font-bold mb-3">
            Nos valeurs
          </p>

          <h2 className="font-serif text-2xl md:text-4xl mb-12">
            Des voyages responsables et authentiques
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {values.map((item, index) => (
              <div
                key={item.title}
                className={`${index !== 0 ? "lg:border-l border-white/15" : ""
                  } px-5`}
              >
                <div className="text-[#d2aa5c] text-3xl mb-4">
                  {item.icon}
                </div>
                <h3 className="font-serif text-lg mb-3">{item.title}</h3>
                <p className="text-[12px] leading-5 text-white/65">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IMMERSION */}
      <section className="bg-[#fbf8f2] py-16 px-6">
        <div className="max-w-[1160px] mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="grid grid-cols-2 gap-2">
            <img
              src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=700&q=80"
              alt=""
              className="w-full h-36 md:h-48 object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&w=700&q=80"
              alt=""
              className="w-full h-36 md:h-48 object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=700&q=80"
              alt=""
              className="w-full h-36 md:h-48 object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=700&q=80"
              alt=""
              className="w-full h-36 md:h-48 object-cover"
            />
          </div>

          <div>
            <p className="text-[#b89450] text-[11px] tracking-[0.35em] uppercase font-bold mb-4">
              Dans les coulisses
            </p>

            <h2 className="font-serif text-3xl md:text-5xl leading-tight mb-6">
              Une immersion locale unique
            </h2>

            <p className="text-[14px] md:text-[15px] leading-7 text-[#273137]/80 mb-10 max-w-xl">
              Nous sommes basés en Inde et parcourons régulièrement le terrain
              pour sélectionner avec soin nos partenaires, hébergements et
              expériences. Cette présence locale nous permet de vous offrir un
              accompagnement réactif et personnalisé.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {services.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="text-[#b89450] text-2xl mb-3">▧</div>
                  <p className="text-[11px] leading-4 font-semibold text-[#273137]/80">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="relative py-14 md:py-16 px-6 text-white overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1800&q=90"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/75" />

        <div className="relative max-w-[1160px] mx-auto text-center">
          <p className="text-[#b89450] text-[10px] tracking-[0.35em] uppercase font-bold mb-10">
            Pourquoi voyager avec Indéora Voyages ?
          </p>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {[
              ["10+", "Années d’expérience"],
              ["2500+", "Voyageurs accompagnés"],
              ["15+", "Destinations en Inde"],
              ["98%", "Voyageurs satisfaits"],
              ["100%", "Voyages sur mesure"],
            ].map(([num, label], index) => (
              <div
                key={index}
                className={`${index !== 0 ? "md:border-l border-white/20" : ""
                  }`}
              >
                <div className="font-serif text-[#d2aa5c] text-4xl md:text-5xl mb-3">
                  {num}
                </div>
                <p className="text-[10px] tracking-[0.22em] uppercase font-bold leading-5">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="bg-[#fbf8f2] py-12 px-6">
        <div className="max-w-[1050px] mx-auto text-center">
          <p className="text-[#b89450] text-[10px] tracking-[0.35em] uppercase font-bold mb-10">
            Ils nous font confiance
          </p>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-10 items-center opacity-55 grayscale">
            <div className="text-2xl font-bold tracking-[0.2em]">
              AROUT
              <br />
              FRANCE
            </div>
            <div className="text-3xl font-bold">IATA</div>
            <div className="font-serif text-2xl">
              Les Entreprises
              <br />
              du Voyage
            </div>
            <div className="font-serif text-4xl">APST</div>
            <div className="text-3xl font-bold">USTOA</div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;