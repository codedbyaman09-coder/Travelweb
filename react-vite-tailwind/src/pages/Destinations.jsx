import React from "react";
import { Link } from "react-router-dom";
import Footer from '../components/Footer';
import expertIcon from '../assets/ChatGPT Image May 14, 2026, 01_29_59 PM.png';
import CustomIcon from '../assets/ChatGPT Image May 14, 2026, 01_34_31 PM.png';
import guideIcon from '../assets/ChatGPT Image May 14, 2026, 01_37_59 PM.png';
import assistanceIcon from '../assets/ChatGPT Image May 14, 2026, 01_40_49 PM.png';
import featureBanner from '../assets/image copy 19.png';
import archIcon from '../assets/ChatGPT Image May 14, 2026, 05_53_26 PM.png';
import img21 from '../assets/image copy 21.png';
import img22 from '../assets/image copy 22.png';
import img23 from '../assets/image copy 23.png';
import img24 from '../assets/image copy 24.png';
import img25 from '../assets/image copy 25.png';
import img26 from '../assets/image copy 26.png';
import img27 from '../assets/image copy 27.png';
import img28 from '../assets/image copy 28.png';
import img29 from '../assets/image copy 29.png';
import img30 from '../assets/image copy 30.png';

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
      name: "Voyage photo  expéditions visuelles",
      desc: "Capturez l’âme de l’Inde à travers l’objectif avec nos photographes experts.",
      img: img21,
    },
    {
      name: "Immersion dans les villages indiens",
      desc: "Vivez au rythme des communautés locales pour une expérience humaine profonde.",
      img: img22,
    },
    {
      name: "Art, artisanat  savoir-faire traditionnels",
      desc: "Découvrez les techniques ancestrales des artisans indiens, du tissage à la poterie.",
      img: img23,
    },
    {
      name: "Spiritualité, yoga  Ayurveda",
      desc: "Retrouvez l’équilibre du corps et de l’esprit dans les berceaux du bien-être.",
      img: img24,
    },
    {
      name: "Safaris  vie sauvage",
      desc: "Observez le tigre du Bengale et la biodiversité exceptionnelle des parcs nationaux.",
      img: img25,
    },
    {
      name: "Lune de miel  escapades romantiques",
      desc: "Célébrez votre union dans les décors somptueux des palais de maharajas.",
      img: img26,
    },
    {
      name: "Rencontres ethniques  cultures locales",
      desc: "Explorez la diversité culturelle des peuples de l’Inde et leurs traditions uniques.",
      img: img27,
    },
    {
      name: "Himalaya  aventures hors des sentiers battus",
      desc: "Dépassez vos limites dans les paysages grandioses des hautes altitudes.",
      img: img28,
    },
    {
      name: "Croisières  backwaters du Kerala",
      desc: "Naviguez paisiblement sur les canaux tropicaux à bord d’un kettuvalam traditionnel.",
      img: img29,
    },
    {
      name: "Festivals, couleurs  traditions indiennes",
      desc: "Plongez dans l’effervescence des plus grandes célébrations religieuses et culturelles.",
      img: img30,
    },
  ];

  const themes = [
    {
      title: "Voyage en couple",
      img: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=500&q=90",
    },
    {
      title: "Voyage en famille",
      img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=500&q=90",
    },
    {
      title: "Safaris & nature",
      img: "https://images.unsplash.com/photo-1549366021-9f761d040a94?auto=format&fit=crop&w=500&q=90",
    },
    {
      title: "Spiritualité & bien-être",
      img: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=500&q=90",
    },
    {
      title: "Culture & patrimoine",
      img: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=500&q=90",
    },
    {
      title: "Photographie & paysages",
      img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=500&q=90",
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
              Des régions fascinantes, des cultures uniques et des expériences inoubliables.
            </p>
          </div>
        </div>
      </section>


      {/* FEATURE BANNER - Requested Complete WhatsApp Image with Overlay */}
      <section className="relative w-full bg-white overflow-hidden">
        <img
          src={featureBanner}
          alt="Explore India"
          className="w-full h-[720px] object-cover object-top"
        />

        {/* 7-Column Grid Overlay to match the banner regions */}
        <div className="absolute inset-0 grid grid-cols-7 pointer-events-none">
          {/* Col 1: Rajasthan */}
          <div className="flex flex-col items-center justify-start pt-[350px] text-center px-1">
            <img src={archIcon} alt="" className="w-8 md:w-12 h-auto mb-2 drop-shadow-md" />
            <h2 className="font-serif text-[10px] md:text-[13px] lg:text-[15px] text-[#462d14] font-bold tracking-[0.1em] uppercase mb-1">
              Rajasthan
            </h2>
            <div className="w-6 h-px bg-[#462d14]/30 mb-1.5" />
            <p className="text-[7px] md:text-[9px] lg:text-[10px] text-[#462d14]/80 font-medium leading-tight max-w-[100px]">
              Palais majestueux, déserts dorés et héritage royal.
            </p>
          </div>

          {/* Col 2: Nord */}
          <div className="flex flex-col items-center justify-start pt-[350px] text-center px-1">
            <img src="src\assets\image copy 18.png" alt="" className="w-8 md:w-12 h-auto mb-2 drop-shadow-md" />
            <h2 className="font-serif text-[10px] md:text-[13px] lg:text-[15px] text-[#102d45] font-bold tracking-[0.1em] uppercase mb-1">
              Inde du Nord
            </h2>
            <div className="w-6 h-px bg-[#102d45]/30 mb-1.5" />
            <p className="text-[7px] md:text-[9px] lg:text-[10px] text-[#102d45]/80 font-medium leading-tight max-w-[100px]">
              Villes sacrées, traditions ancestrales et spiritualité.
            </p>
          </div>

          {/* Col 3: Kerala */}
          <div className="flex flex-col items-center justify-start pt-[350px] text-center px-1">
            <img src={archIcon} alt="" className="w-8 md:w-12 h-auto mb-2 drop-shadow-md" />
            <h2 className="font-serif text-[10px] md:text-[13px] lg:text-[15px] text-[#2d4a1c] font-bold tracking-[0.1em] uppercase mb-1">
              Kerala
            </h2>
            <div className="w-6 h-px bg-[#2d4a1c]/30 mb-1.5" />
            <p className="text-[7px] md:text-[9px] lg:text-[10px] text-[#2d4a1c]/80 font-medium leading-tight max-w-[100px]">
              Backwaters paisibles, plages et nature luxuriante.
            </p>
          </div>

          {/* Col 4: Map Space */}
          <div className="flex flex-col items-center justify-start pt-[350px] text-center px-1">
            <img src={archIcon} alt="" className="w-8 md:w-12 h-auto mb-2 drop-shadow-md" />
            <h2 className="font-serif text-[10px] md:text-[13px] lg:text-[15px] text-[#2d1a4a] font-bold tracking-[0.1em] uppercase mb-1">
              Himalaya
            </h2>
            <div className="w-6 h-px bg-[#2d1a4a]/30 mb-1.5" />
            <p className="text-[7px] md:text-[9px] lg:text-[10px] text-[#2d1a4a]/80 font-medium leading-tight max-w-[100px]">
              Montagnes majestueuses et aventures en altitude.
            </p>
          </div>
          {/* <div /> */}

          {/* Col 5: Himalaya */}
          <div className="flex flex-col items-center justify-start pt-[350px] text-center px-1">
            <img src={archIcon} alt="" className="w-8 md:w-12 h-auto mb-2 drop-shadow-md" />
            <h2 className="font-serif text-[10px] md:text-[13px] lg:text-[15px] text-[#2d1a4a] font-bold tracking-[0.1em] uppercase mb-1">
              Himalaya
            </h2>
            <div className="w-6 h-px bg-[#2d1a4a]/30 mb-1.5" />
            <p className="text-[7px] md:text-[9px] lg:text-[10px] text-[#2d1a4a]/80 font-medium leading-tight max-w-[100px]">
              Montagnes majestueuses et aventures en altitude.
            </p>
          </div>

          {/* Col 6: Sud */}
          <div className="flex flex-col items-center justify-start pt-[350px] text-center px-1">
            <img src={archIcon} alt="" className="w-8 md:w-12 h-auto mb-2 drop-shadow-md" />
            <h2 className="font-serif text-[10px] md:text-[13px] lg:text-[15px] text-[#6b4c1e] font-bold tracking-[0.1em] uppercase mb-1">
              Inde du Sud
            </h2>
            <div className="w-6 h-px bg-[#6b4c1e]/30 mb-1.5" />
            <p className="text-[7px] md:text-[9px] lg:text-[10px] text-[#6b4c1e]/80 font-medium leading-tight max-w-[100px]">
              Temples grandioses, culture et art de vivre unique.
            </p>
          </div>

          {/* Col 7: Centrale */}
          <div className="flex flex-col items-center justify-start pt-[350px] text-center px-1">
            <img src={archIcon} alt="" className="w-8 md:w-12 h-auto mb-2 drop-shadow-md" />
            <h2 className="font-serif text-[10px] md:text-[13px] lg:text-[15px] text-[#0f3d3d] font-bold tracking-[0.1em] uppercase mb-1">
              Inde Centrale
            </h2>
            <div className="w-6 h-px bg-[#0f3d3d]/30 mb-1.5" />
            <p className="text-[7px] md:text-[9px] lg:text-[10px] text-[#0f3d3d]/80 font-medium leading-tight max-w-[100px]">
              Tribus, nature sauvage et trésors cachés.
            </p>
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
                to="/destinations"
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
      <section className="relative w-full py-8 md:py-10 bg-[#0a0f14] overflow-hidden">
        {/* Background Image */}
        <img
          src="https://images.unsplash.com/photo-1514222134-b57cbb8ce073?auto=format&fit=crop&w=2000&q=90"
          alt="Unique India"
          className="absolute inset-0 w-full h-full object-cover opacity-100"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/35"></div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16 py-6 md:py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 text-center">
            {features.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-start text-white"
              >
                {/* Icon */}
                <div className="h-[70px] md:h-[90px] flex items-end justify-center mb-3">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-[60px] md:w-[80px] h-auto object-contain drop-shadow-[0_8px_10px_rgba(0,0,0,0.45)]"
                  />
                </div>

                {/* Title */}
                <h3 className="font-serif font-bold text-[18px] md:text-[20px] lg:text-[22px] leading-tight drop-shadow-md mb-2">
                  {item.title}
                </h3>

                {/* Text */}
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
                to="/experiences"
                className="relative h-[185px] rounded-[10px] overflow-hidden group shadow-[0_8px_24px_rgba(70,45,20,0.12)]"
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

      {/* FOOTER */}
      {/* <footer className="mt-6 bg-[#fffaf2] border-t border-[#eadfce] px-6 md:px-10 py-10">
        <div className="max-w-[1180px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full border border-[#c58b32] flex items-center justify-center text-[#c58b32] font-serif text-xl">
                IV
              </div>

              <div>
                <div className="font-serif text-[24px] text-[#102d45] leading-none">
                  Indeora
                </div>
                <p className="text-[9px] tracking-[0.22em] uppercase text-[#c58b32]">
                  Voyages
                </p>
              </div>
            </div>

            <p className="text-[11px] leading-5 text-[#102d45]/65">
              Agence locale francophone en Inde spécialisée dans les voyages sur
              mesure, authentiques et responsables.
            </p>
          </div>

          <div>
            <h3 className="text-[10px] tracking-[0.25em] uppercase font-bold text-[#c58b32] mb-4">
              Liens rapides
            </h3>

            <ul className="space-y-2 text-[12px] text-[#102d45]/70">
              <li>Destinations</li>
              <li>Expériences</li>
              <li>À propos</li>
              <li>Avant de partir</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h3 className="text-[10px] tracking-[0.25em] uppercase font-bold text-[#c58b32] mb-4">
              Informations
            </h3>

            <ul className="space-y-2 text-[12px] text-[#102d45]/70">
              <li>📍 Bikaner, Rajasthan, Inde</li>
              <li>☎ +91 70 230 16044</li>
              <li>✉ contact@indeoravoyages.com</li>
              <li>WhatsApp</li>
            </ul>
          </div>

          <div>
            <h3 className="text-[10px] tracking-[0.25em] uppercase font-bold text-[#c58b32] mb-4">
              Newsletter
            </h3>

            <p className="text-[12px] leading-5 text-[#102d45]/65 mb-4">
              Recevez nos inspirations de voyage et nos offres exclusives.
            </p>

            <div className="flex h-10 border border-[#eadfce] bg-white">
              <input
                type="email"
                placeholder="Votre email"
                className="flex-1 px-3 text-[11px] bg-transparent outline-none"
              />
              <button className="w-10 text-[#c58b32]">→</button>
            </div>
          </div>
        </div>
      </footer> */}

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