import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

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

const Destinations = () => {
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

  const destinations = [
    {
      name: "Rajasthan Authentique  Varanasi",
      desc: "Capturez l’âme de l’Inde à travers l’objectif avec nos photographes experts.",
      img: img21,
      link: "/voyage-photo-expeditions",
    },
    {
      name: "Rajasthan Rural  Inde Authentique",
      desc: "Vivez au rythme des communautés locales pour une expérience humaine profonde.",
      img: img22,
      link: "/immersion-villages-indiens",
    },
    {
      name: "Rajasthan  Gujarat",
      desc: "Découvrez les techniques ancestrales des artisans indiens, du tissage à la poterie.",
      img: img23,
      link: "/art-artisanat-savoir-faire",
    },
    {
      name: "Inde Spirituelle  Bien-Être",
      desc: "Retrouvez l’équilibre à travers le yoga, la méditation et les soins ayurvédiques.",
      img: img24,
      link: "/spiritualite-yoga-ayurveda",
    },
    {
      name: "Inde Sauvage Tigres du Bengale",
      desc: "Observez le tigre du Bengale et la biodiversité exceptionnelle des parcs nationaux.",
      img: img25,
      link: "/safaris-vie-sauvage",
    },
    {
      name: "Rajasthan Romantique Kerala",
      desc: "Célébrez votre union dans les décors somptueux des palais de maharajas.",
      img: img26,
      link: "/lune-de-miel-escapades-romantiques",
    },
    {
      name: "Rajasthan, Gujarat  Inde Tribale",
      desc: "Explorez la diversité culturelle des peuples de l’Inde et leurs traditions uniques.",
      img: img27,
      link: "/rencontres-ethniques-cultures-locales",
    },
    {
      name: "Leh, Nubra Valley  Pangong Lake",
      desc: "Dépassez vos limites dans les paysages grandioses des hautes altitudes.",
      img: img28,
      link: "/himalaya-aventures-hors-sentiers-battus",
    },
    {
      name: "Kerala Tropical  Houseboat Experience",
      desc: "Naviguez paisiblement sur les canaux tropicaux à bord d’un kettuvalam traditionnel.",
      img: img29,
      link: "/croisieres-backwaters-kerala",
    },
    {
      name: "Festivals, couleurs  traditions indiennes",
      desc: "Plongez dans l’effervescence des plus grandes célébrations religieuses et culturelles.",
      img: img30,
      link: "/festivals-couleurs-traditions-indiennes",
    },
  ];

  const themes = [
    {
      title: "Voyage en couple",
      img: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=500&q=90",
      link: "/demander-un-devis",
    },
    {
      title: "Voyage en famille",
      img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=500&q=90",
      link: "/demander-un-devis",
    },
    {
      title: "Safaris & nature",
      img: "https://images.unsplash.com/photo-1549366021-9f761d040a94?auto=format&fit=crop&w=500&q=90",
      link: "/demander-un-devis",
    },
    {
      title: "Spiritualité & bien-être",
      img: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=500&q=90",
      link: "/demander-un-devis",
    },
    {
      title: "Culture & patrimoine",
      img: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=500&q=90",
      link: "/demander-un-devis",
    },
    {
      title: "Photographie & paysages",
      img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=500&q=90",
      link: "/demander-un-devis",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-[#f6efe3] text-[#102d45] overflow-hidden">
      {/* LEFT SOCIAL */}
      <div className="hidden md:flex absolute left-5 top-32 z-40 flex-col items-center gap-4">
        {["◎", "in", "f"].map((item, index) => (
          <div
            key={index}
            className="w-8 h-8 rounded-full bg-white shadow-md border border-[#102d45]/5 flex items-center justify-center text-[10px] font-bold text-[#102d45] hover:bg-[#102d45] hover:text-white transition-all cursor-pointer"
          >
            {item}
          </div>
        ))}

        <div className="h-20 w-px bg-[#102d45]/20 my-2" />

        <p className="vertical-text text-[8px] tracking-[0.3em] uppercase text-[#102d45] font-semibold opacity-70">
          Suivez-nous
        </p>
      </div>

      {/* HERO */}
      <section className="relative h-[500px] md:h-[650px] lg:h-[720px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=2000&q=90"
          alt="Nos destinations en Inde"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />

        <div className="relative z-10 max-w-[1180px] mx-auto h-full flex flex-col items-center justify-center px-6 md:px-10 text-center">
          <div className="max-w-[800px]">
            <h1 className="font-serif text-[46px] md:text-[62px] lg:text-[76px] leading-[1.1] text-white mb-8 drop-shadow-lg">
              Nos destinations <br /> en Inde
            </h1>

            <div className="w-16 h-px bg-[#c58b32] mb-6 mx-auto" />

            <p className="text-[14px] md:text-[16px] leading-relaxed text-white/90 max-w-[500px] mx-auto drop-shadow-md">
              Des régions fascinantes, des cultures uniques et des expériences
              inoubliables.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURE BANNER */}
      <section className="relative w-full bg-white overflow-hidden">
        {/* WHITE HEADING TOP */}
        <div className="relative z-20 w-full bg-white pt-[25px] pb-[18px] text-center">
          <p className="text-[#9b5a24] text-[13px] md:text-[15px] font-bold tracking-[0.35em] uppercase mb-[8px]">
            DÉCOUVREZ LES RÉGIONS DE L'INDE
          </p>

          <div className="flex items-center justify-center gap-[14px] mb-[8px]">
            <span className="w-[90px] h-[1px] bg-[#b98b55]" />
            <span className="text-[#b98b55] text-[22px] leading-none">❧</span>
            <span className="w-[90px] h-[1px] bg-[#b98b55]" />
          </div>

          <h2 className="font-serif text-[#153d2f] text-[30px] md:text-[36px] lg:text-[40px] leading-[1.1] font-bold tracking-[0.08em] uppercase">
            L’INDE, UNE TERRE AUX MILLE VISAGES
          </h2>

          <p className="text-[#5f6263] text-[14px] md:text-[16px] mt-[8px] font-medium">
            Des régions uniques, des cultures vibrantes, des paysages
            inoubliables.
          </p>
        </div>

        <div className="relative w-full h-[720px] overflow-hidden bg-white">
          <img
            src={featureBanner}
            alt="Explore India"
            className="absolute inset-0 w-full h-full object-cover object-top"
          />

          {/* 7-Column Grid Overlay */}
          <div className="absolute inset-0 grid grid-cols-7 pointer-events-none pl-[30px]">
            {/* Col 1: Rajasthan */}
            <Link
              to="/voyage-photo-expeditions"
              className="flex flex-col items-center justify-start pt-[180px] text-center px-1 translate-x-[0px] pointer-events-auto group cursor-pointer"
            >
              <img
                src={archIcon}
                alt=""
                className="w-8 md:w-12 h-auto mb-2 drop-shadow-md transition-transform group-hover:scale-110"
              />
              <h2 className="font-serif text-[10px] md:text-[13px] lg:text-[15px] text-[#462d14] font-bold tracking-[0.1em] uppercase mb-1">
                Rajasthan
              </h2>
              <div className="w-6 h-px bg-[#462d14]/30 mb-1.5" />
              <p className="text-[7px] md:text-[9px] lg:text-[10px] text-[#462d14]/80 font-medium leading-tight max-w-[100px]">
                Palais majestueux, déserts dorés et héritage royal.
              </p>
            </Link>

            {/* Col 2: Inde du Nord */}
            <Link
              to="/immersion-villages-indiens"
              className="flex flex-col items-center justify-start pt-[180px] text-center px-1 pointer-events-auto group cursor-pointer"
            >
              <img
                src={nordIcon}
                alt=""
                className="w-8 md:w-12 h-auto mb-2 drop-shadow-md transition-transform group-hover:scale-110"
              />
              <h2 className="font-serif text-[10px] md:text-[13px] lg:text-[15px] text-[#102d45] font-bold tracking-[0.1em] uppercase mb-1">
                Inde du Nord
              </h2>
              <div className="w-6 h-px bg-[#102d45]/30 mb-1.5" />
              <p className="text-[7px] md:text-[9px] lg:text-[10px] text-[#102d45]/80 font-medium leading-tight max-w-[100px]">
                Villes sacrées, traditions ancestrales et spiritualité.
              </p>
            </Link>

            {/* Col 3: Kerala */}
            <Link
              to="/croisieres-backwaters-kerala"
              className="flex flex-col items-center justify-start pt-[180px] text-center px-1 -translate-x-[18px] pointer-events-auto group cursor-pointer"
            >
              <img
                src={keralaIcon}
                alt=""
                className="w-8 md:w-12 h-auto mb-2 drop-shadow-md transition-transform group-hover:scale-110"
              />
              <h2 className="font-serif text-[10px] md:text-[13px] lg:text-[15px] text-[#2d4a1c] font-bold tracking-[0.1em] uppercase mb-1">
                Kerala
              </h2>
              <div className="w-6 h-px bg-[#2d4a1c]/30 mb-1.5" />
              <p className="text-[7px] md:text-[9px] lg:text-[10px] text-[#2d4a1c]/80 font-medium leading-tight max-w-[100px]">
                Backwaters paisibles, plages et nature luxuriante.
              </p>
            </Link>

            {/* Col 4: Map Space */}
            <div className="flex flex-col items-center justify-start pt-[180px] text-center px-1">
              <div className="w-6 h-px bg-transparent mb-1.5" />
            </div>

            {/* Col 5: Himalaya */}
            {/* Col 5: Himalaya */}
            <Link
              to="/himalaya-aventures-hors-sentiers-battus"
              className="flex flex-col items-center justify-start pt-[180px] text-center px-1 translate-x-[35px] pointer-events-auto group cursor-pointer"
            >
              <img
                src={himalayaIcon}
                alt=""
                className="w-8 md:w-12 h-auto mb-2 drop-shadow-md transition-transform group-hover:scale-110"
              />
              <h2 className="font-serif text-[10px] md:text-[13px] lg:text-[15px] text-[#2d1a4a] font-bold tracking-[0.1em] uppercase mb-1">
                Himalaya
              </h2>
              <div className="w-6 h-px bg-[#2d1a4a]/30 mb-1.5" />
              <p className="text-[7px] md:text-[9px] lg:text-[10px] text-[#2d1a4a]/80 font-medium leading-tight max-w-[100px]">
                Montagnes majestueuses et aventures en altitude.
              </p>
            </Link>

            {/* Col 6: Inde du Sud */}
            {/* Col 6: Inde du Sud */}
            <Link
              to="/lune-de-miel-escapades-romantiques"
              className="flex flex-col items-center justify-start pt-[180px] text-center px-1 translate-x-[25px] pointer-events-auto group cursor-pointer"
            >
              <img
                src={sudIcon}
                alt=""
                className="w-8 md:w-12 h-auto mb-2 drop-shadow-md transition-transform group-hover:scale-110"
              />
              <h2 className="font-serif text-[10px] md:text-[13px] lg:text-[15px] text-[#6b4c1e] font-bold tracking-[0.1em] uppercase mb-1">
                Inde du Sud
              </h2>
              <div className="w-6 h-px bg-[#6b4c1e]/30 mb-1.5" />
              <p className="text-[7px] md:text-[9px] lg:text-[10px] text-[#6b4c1e]/80 font-medium leading-tight max-w-[100px]">
                Temples grandioses, culture et art de vivre unique.
              </p>
            </Link>

            {/* Col 7: Inde Centrale */}
            <Link
              to="/rencontres-ethniques-cultures-locales"
              className="flex flex-col items-center justify-start pt-[180px] text-center px-1 pointer-events-auto group cursor-pointer"
            >
              <img
                src={centraleIcon}
                alt=""
                className="w-8 md:w-12 h-auto mb-2 drop-shadow-md transition-transform group-hover:scale-110"
              />
              <h2 className="font-serif text-[10px] md:text-[13px] lg:text-[15px] text-[#0f3d3d] font-bold tracking-[0.1em] uppercase mb-1">
                Inde Centrale
              </h2>
              <div className="w-6 h-px bg-[#0f3d3d]/30 mb-1.5" />
              <p className="text-[7px] md:text-[9px] lg:text-[10px] text-[#0f3d3d]/80 font-medium leading-tight max-w-[100px]">
                Tribus, nature sauvage et trésors cachés.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* DESTINATION MAIN BOX */}
      <section className="relative z-20">
        <div className="w-full bg-[#fffaf2]/95 border-y border-[#eadfce]/50 px-6 md:px-12 lg:px-20 py-12 md:py-16">
          <div className="text-center max-w-[720px] mx-auto mb-8">
            <p className="text-[#c58b32] text-[10px] tracking-[0.28em] uppercase font-bold mb-2">
              Explorer l’Inde autrement
            </p>

            <h2 className="font-serif text-[26px] md:text-[34px] leading-tight text-[#102d45] mb-3">
              Des destinations pour tous les rêves de voyage
            </h2>

            <p className="text-[12px] md:text-[13px] leading-6 text-[#102d45]/70">
              De la magie des palais du Rajasthan à la sérénité du Kerala, de la
              spiritualité de Varanasi aux sommets de l’Himalaya, chaque région
              de l’Inde vous promet des émotions uniques.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-5">
            {destinations.map((item, index) => (
              <Link
                key={index}
                to={item.link}
                className="group bg-[#fffdf8] rounded-[8px] overflow-hidden border border-[#eadfce] shadow-[0_8px_24px_rgba(70,45,20,0.06)] hover:-translate-y-1 hover:shadow-[0_16px_35px_rgba(70,45,20,0.14)] transition-all duration-300"
              >
                <div className="h-[150px] md:h-[165px] overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                <div className="p-4">
                  <h3 className="font-serif text-[17px] text-[#102d45] mb-2">
                    {item.name}
                  </h3>

                  <p className="text-[11px] leading-5 text-[#102d45]/65 min-h-[58px]">
                    {item.desc}
                  </p>

                  <span className="inline-flex items-center gap-2 text-[#c58b32] text-[11px] font-bold mt-4">
                    Découvrir <span>→</span>
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

        <div className="absolute inset-0 bg-black/75"></div>

        <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16 py-6 md:py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 text-center">
            {features.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-start text-white"
              >
                <div className="h-[70px] md:h-[90px] flex items-end justify-center mb-3">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-[60px] md:w-[80px] h-auto object-contain drop-shadow-[0_8px_10px_rgba(0,0,0,0.45)]"
                  />
                </div>

                <h3 className="font-serif font-bold text-[18px] md:text-[20px] lg:text-[22px] leading-tight drop-shadow-md mb-2">
                  {item.title}
                </h3>

                <p className="max-w-[280px] text-[12px] md:text-[13px] leading-relaxed font-medium text-white/90 drop-shadow-md">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THEME SECTION */}
      <section className="px-3 md:px-6 mt-6">
        <div className="max-w-[1180px] mx-auto grid lg:grid-cols-[330px_1fr] gap-5">
          <div className="bg-[#fffaf2] rounded-[12px] border border-[#eadfce] p-6 shadow-[0_8px_24px_rgba(70,45,20,0.06)]">
            <p className="text-[#c58b32] text-[10px] tracking-[0.28em] uppercase font-bold mb-3">
              Voyage selon vos envies
            </p>

            <h2 className="font-serif text-[27px] md:text-[32px] leading-tight text-[#102d45] mb-4">
              Des voyages thématiques sur mesure
            </h2>

            <p className="text-[12px] leading-6 text-[#102d45]/70 mb-6">
              Envie d’un voyage romantique, en famille, d’un safari photo ou
              d’un périple spirituel ? Nous créons des itinéraires personnalisés
              selon vos envies.
            </p>

            <Link
              to="/contact"
              className="inline-flex bg-[#c58b32] text-white text-[10px] tracking-[0.18em] font-bold uppercase rounded-full px-6 py-3 hover:bg-[#a96f20] transition"
            >
              Créer mon voyage sur mesure
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {themes.map((item, index) => (
              <Link
                key={index}
                to={item.link}
                className="relative h-[380px] rounded-[10px] overflow-hidden group shadow-[0_8px_24px_rgba(70,45,20,0.12)]"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-3 text-white text-center">
                  <p className="font-serif text-[14px] leading-tight">
                    {item.title}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      <style>{`
        .vertical-text {
          writing-mode: vertical-rl;
          transform: rotate(180deg);
        }
      `}</style>
    </div>
  );
};

export default Destinations;