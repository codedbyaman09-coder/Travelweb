import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const HimalayaAventuresHorsSentiersBattus = () => {
  const [activeTab, setActiveTab] = useState("ITINÉRAIRE");
  const [openDay, setOpenDay] = useState(0); // Default open the first day

  const tabs = [
    "ITINÉRAIRE",
    "EN DÉTAIL",
    "HÉBERGEMENT",
    "BUDGET",
    "NOS CONSEILS",
  ];

  const highlights = [
    "• Festival traditionnel du Ladakh",
    "• Monastères bouddhistes himalayens",
    "• Nubra Valley & désert d’altitude",
    "• Pangong Lake & Tso Moriri",
    "• Culture tibétaine authentique",
    "• Villages himalayens isolés",
    "• Paysages parmi les plus spectaculaires du monde",
    "• Assistance francophone Indeora Voyages",
  ];

  const otherTrips = [
    {
      title: "Les incontournables de l'Inde du Nord",
      duration: "8 JOURS / 7 NUITS",
      price: "825€",
      image: "src/assets/image copy 8.png",
      tag: null
    },
    {
      title: "L'Inde du Sud version charme",
      duration: "13 JOURS / 12 NUITS",
      price: "1325€",
      image: "src/assets/image copy 10.png",
      tag: "VOYAGE D'EXCEPTION"
    },
    {
      title: "Circuit de charme en Inde du Nord",
      duration: "11 JOURS / 10 NUITS",
      price: "1845€",
      image: "src/assets/image copy 11.png",
      tag: "VOYAGE D'EXCEPTION"
    },
    {
      title: "L'Inde du Sud en Ecolodges",
      duration: "13 JOURS / 12 NUITS",
      price: "1810€",
      image: "src/assets/image copy 12.png",
      tag: null
    }
  ];

  const guarantees = [
    {
      title: "Expertise locale",
      icon: (
        <svg className="w-10 h-10 mb-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M9 20l-5-2V4l5 2m0 14l6-2m-6 2V6m6 12l5 2V6l-5-2m0 14V4" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="12" cy="10" r="2" />
        </svg>
      )
    },
    {
      title: "Expérience sur-mesure",
      icon: (
        <svg className="w-10 h-10 mb-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M11.5 7h1c.828 0 1.5.672 1.5 1.5v1c0 .828-.672 1.5-1.5 1.5h-1M11.5 7v4m0-4c0-.828.672-1.5 1.5-1.5h1c.828 0 1.5.672 1.5 1.5v1c0 .828-.672 1.5-1.5 1.5" />
          <path d="M8.5 11.5v1c0 .828.672 1.5 1.5 1.5h1c.828 0 1.5-.672 1.5-1.5v-1c0-.828-.672-1.5-1.5-1.5h-1" />
          <path d="M12 21a9 9 0 100-18 9 9 0 000 18z" />
        </svg>
      )
    },
    {
      title: "Paiement sécurisé",
      icon: (
        <svg className="w-10 h-10 mb-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="3" y="5" width="18" height="14" rx="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M3 10h18M7 15h.01" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 15l1 1 3-3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      title: "Engagement responsable",
      icon: (
        <svg className="w-10 h-10 mb-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="12" cy="11" r="3" />
        </svg>
      )
    }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case "ITINÉRAIRE":
        return (
          <div className="pt-12 pb-16 px-6 md:px-12 lg:px-16 animate-fadeIn">
            <div className="mb-12">
              <h2 className="text-[#000] font-serif text-[28px] md:text-[32px] font-bold mb-6 italic leading-tight">
                Leh, Nubra Valley  Pangong Lake — 14 Jours
              </h2>
              <p className="text-[#000] font-['Montserrat'] leading-[1.8] text-[15px] max-w-3xl">
                Un voyage exceptionnel au cœur de l’Himalaya indien, entre cols mythiques, villages bouddhistes,
                festivals traditionnels et panoramas parmi les plus impressionnants du monde. Découvrez le Ladakh,
                terre de silence et de spiritualité.
              </p>
            </div>
            <div className="space-y-4 mb-16">
              {[
                "day 1 — Arrivée à Leh",
                "day 2 —  Leh : Monastères & Acclimatation",
                "day 3 — Festival du Ladakh à Leh",
                "day 4 — Leh → Sham Valley",
                "day 5 — Sham Valley → Lamayuru → Leh",
                "day 6 — Leh → Nubra Valley",
                "day 7 — Nubra Valley",
                "day 8 — Nubra Valley → Pangong Lake",
                "day 9 — Pangong Lake → Leh",
                "day 10 — Leh → Tso Moriri",
                "day 11 — Tso Moriri",
                "day 12 — Tso Moriri → Leh",
                "day 13 — Leh : Dernière Immersion",
                "day 14 — Départ"
              ].map((day, index) => (
                <div
                  key={index}
                  className="flex items-center gap-6 group cursor-pointer transition-all hover:translate-x-1"
                  onClick={() => { setActiveTab("EN DÉTAIL"); setOpenDay(index); }}
                >
                  <span className="text-[#b7772e]/50 font-serif font-bold text-[15px] group-hover:text-[#b7772e] transition-colors w-20 shrink-0 tracking-widest uppercase border-b-2 border-transparent group-hover:border-[#b7772e] pb-0.5">
                    JOUR {index + 1}
                  </span>
                  <h3 className="text-[#222] font-serif text-[17px] font-semibold border-b border-transparent group-hover:border-[#b7772e]/20 pb-1 transition-all">
                    {day.split(' — ')[1]}
                  </h3>
                </div>
              ))}
            </div>

            <div className="mt-16">
              <div className="relative rounded shadow-sm overflow-hidden border border-gray-100">
                <div className="aspect-[4/3] w-full relative overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3506195.934891152!2d77.1025!3d15.3173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    title="Google Map Itinerary"
                    className="grayscale-[0.1] contrast-[1.05]"
                  ></iframe>
                </div>
              </div>

              <div className="mt-10 flex justify-center">
                <button className="bg-[#b7772e] hover:bg-[#9a6326] text-white font-bold py-4 px-12 rounded shadow-[0_4px_14px_rgba(183,119,46,0.39)] transition-all duration-300 uppercase tracking-[0.1em] text-[15px]">
                  DEMANDER UN DEVIS
                </button>
              </div>
            </div>
          </div>
        );
      case "EN DÉTAIL":
        const itinerary = [
          {
            day: "01", title: "Arrivée à Leh", desc: (
              <div className="space-y-2">
                <p>• Accueil à l’aéroport.</p>
                <p>• Transfert à l’hôtel.</p>
                <p>• Acclimatation à l’altitude.</p>
                <p>• Balade douce dans Leh.</p>

                <p className="mt-6 font-medium italic text-[#102d45] text-[16px]">Premiers instants dans l’Himalaya.</p>
              </div>
            )
          },
          {
            day: "02", title: "Leh : Monastères & Acclimatation", desc: (
              <div className="space-y-2">
                <p>• Shanti Stupa.</p>
                <p>• Leh Palace.</p>
                <p>• Marché tibétain.</p>
                <p>• Monastères Spituk et Sankar.</p>
                <p className="mt-6 font-medium italic text-[#102d45] text-[16px]">Immersion dans la culture bouddhiste.</p>
              </div>
            )
          },
          {
            day: "03", title: "Festival du Ladakh à Leh", desc: (
              <div className="space-y-2">
                <p>• Danses masquées.</p>
                <p>• Costumes tibétains.</p>
                <p>• Musique locale.</p>
                <p>• Cérémonies bouddhistes.</p>
                <p>• Marchés artisanaux.</p>
                <p className="mt-6 font-medium italic text-[#102d45] text-[16px]">Une célébration culturelle unique.</p>
              </div>
            )
          },
          {
            day: "04", title: "Leh → Sham Valley", desc: (
              <div className="space-y-2">
                <p>• Hall of Fame.</p>
                <p>• Magnetic Hill.</p>
                <p>• Confluence Indus & Zanskar.</p>
                <p>• Monastères Alchi et Likir.</p>
                <p className="mt-6 font-medium italic text-[#102d45] text-[16px]">Villages himalayens et paysages grandioses.</p>
              </div>
            )
          },
          {
            day: "05", title: "Sham Valley → Lamayuru → Leh", desc: (
              <div className="space-y-2">
                <p>• Monastère de Lamayuru.</p>
                <p>• Paysages lunaires.</p>
                <p>• Villages isolés.</p>
                <p>• Retour vers Leh.</p>
                <p className="mt-6 font-medium italic text-[#102d45] text-[16px]">Ambiance mystique du Ladakh.
                </p>
              </div>
            )
          },
          {
            day: "06", title: "Leh → Nubra Valley", desc: (
              <div className="space-y-2">
                <p>• Traversée du Khardung La.</p>
                <p>• Désert de Hunder.</p>
                <p>• Villages bouddhistes.</p>
                <p>• Coucher du soleil dans les dunes.</p>
                <p className="mt-6 font-medium italic text-[#102d45] text-[16px]">Entre désert et Himalaya.</p>
              </div>
            )
          },
          {
            day: "07", title: "Nubra Valley", desc: (
              <div className="space-y-2">
                <p>• Monastère de Diskit.</p>
                <p>• Statue géante de Bouddha.</p>
                <p>• Villages traditionnels.</p>
                <p>• Chameaux bactriens.</p>
                <p className="mt-6 font-medium italic text-[#102d45] text-[16px]">Culture tibétaine et oasis himalayennes.
                </p>
              </div>
            )
          },
          {
            day: "08", title: "Nubra Valley → Pangong Lake", desc: (
              <div className="space-y-2">
                <p>• Traversée des paysages spectaculaires.</p>
                <p>• Arrivée au lac Pangong.</p>
                <p>• Eaux turquoise.</p>
                <p>• Coucher du soleil au bord du lac.</p>
                <p className="mt-6 font-medium italic text-[#102d45] text-[16px]">Un paysage mythique du Ladakh.</p>
              </div>
            )
          },
          {
            day: "09", title: "Pangong Lake → Leh", desc: (
              <div className="space-y-2">
                <p>• Lever du soleil sur le lac.</p>
                <p>• Retour vers Leh.</p>
                <p>• Cols himalayens.</p>
                <p>• Temps libre.</p>
                <p>• Cuisine rajasthanie.</p>
                <p className="mt-6 font-medium italic text-[#102d45] text-[16px]">Des panoramas inoubliables.</p>
              </div>
            )
          },
          {
            day: "10", title: "Leh → Tso Moriri", desc: (
              <div className="space-y-2">
                <p>• Route vers les hauts plateaux.</p>
                <p>• Villages nomades.</p>
                <p>• Faune himalayenne.</p>
                <p>• Arrivée au lac Tso Moriri.</p>
                <p className="mt-6 font-medium italic text-[#102d45] text-[16px]">Nature sauvage et silence absolu.</p>
              </div>
            )
          },
          {
            day: "11", title: "Tso Moriri", desc: (
              <div className="space-y-2">
                <p>• Rencontre avec nomades Changpa.</p>
                <p>• Yaks et chèvres pashmina.</p>
                <p>• Observation des oiseaux.</p>
                <p>• Temps libre et contemplation.</p>
                <p className="mt-6 font-medium italic text-[#102d45] text-[16px]">Une immersion rare dans le Ladakh sauvage.</p>
              </div>
            )
          },
          {
            day: "12", title: "Tso Moriri → Leh", desc: (
              <div className="space-y-2">
                <p>• Villages reculés.</p>
                <p>• Sources chaudes.</p>
                <p>• Paysages de haute altitude.</p>
                <p>• Shopping tibétain.</p>
                <p className="mt-6 font-medium italic text-[#102d45] text-[16px]">Retour progressif vers Leh.</p>
              </div>
            )
          },
          {
            day: "13", title: "Leh : Dernière Immersion", desc: (
              <div className="space-y-2">
                <p>• Marché tibétain.</p>
                <p>• Cafés himalayens.</p>
                <p>• Monastères.</p>
                <p>• Dîner d’adieu ladakhi.</p>
                <p className="mt-6 font-medium italic text-[#102d45] text-[16px]">Derniers moments dans l’Himalaya.</p>
              </div>
            )
          },
          {
            day: "14", title: "Départ", desc: (
              <div className="space-y-2">
                <p>• Transfert privé vers l’aéroport.</p>
                <p>• Assistance jusqu’au départ.</p>
                <p className="mt-6 font-medium italic text-[#102d45] text-[16px]">Fin de votre aventure himalayenne.</p>
              </div>
            )
          },
        ];

        const selectedDay = itinerary[openDay] || itinerary[0];

        return (
          <div className="pt-12 pb-16 px-6 md:px-12 lg:px-16 animate-fadeIn">
            <h2 className="text-[#b7772e] font-serif text-[20px] md:text-[24px] font-bold mb-12 italic border-b border-[#b7772e]/10 pb-4">
              Le programme au jour le jour
            </h2>

            <div className="flex flex-col md:flex-row gap-12 md:gap-20">
              {/* Left Sidebar: Day List */}
              <div className="w-full md:w-[180px] shrink-0 border-r border-gray-50 pr-8">
                <div className="flex flex-row md:flex-col gap-8 md:gap-5 overflow-x-auto md:overflow-visible pb-6 md:pb-0 scrollbar-hide">
                  {itinerary.map((item, i) => (
                    <button
                      key={i}
                      onClick={() => setOpenDay(i)}
                      className={`text-left whitespace-nowrap font-serif text-[20px] md:text-[24px] font-bold tracking-wider uppercase transition-all py-1 border-b-2 inline-block w-fit ${openDay === i
                        ? "text-[#b7772e] border-[#b7772e] opacity-100"
                        : "text-[#b7772e]/40 border-transparent hover:text-[#b7772e]/70"
                        }`}
                    >
                      JOUR {parseInt(item.day)}
                    </button>
                  ))}
                </div>
              </div>

              {/* Right Content: Day Details */}
              <div className="flex-1">
                <div key={openDay} className="animate-fadeIn">
                  <div className="flex items-center gap-6 mb-10">
                    <div className="text-[40px] md:text-[52px] font-serif font-bold text-[#b7772e] leading-none">
                      {selectedDay.day}
                    </div>
                    <h3 className="text-[20px] md:text-[26px] font-bold text-[#102d45] uppercase tracking-[0.05em] leading-tight">
                      {selectedDay.title}
                    </h3>
                  </div>

                  <div className="text-[#444] leading-[1.85] text-[16px] font-['Montserrat'] pl-4 border-l-2 border-[#b7772e]/20 max-w-2xl">
                    {selectedDay.desc}
                  </div>

                  <div className="mt-16 pt-10 border-t border-gray-50 flex justify-between items-center text-[13px] font-bold tracking-[0.2em] text-gray-300 uppercase">
                    <span className="text-[#b7772e]/40">Étape {parseInt(selectedDay.day)} / {itinerary.length}</span>
                    <div className="flex gap-8">
                      <button
                        onClick={() => setOpenDay(Math.max(0, openDay - 1))}
                        disabled={openDay === 0}
                        className={`hover:text-[#b7772e] transition-all flex items-center gap-2 ${openDay === 0 ? 'opacity-20 cursor-not-allowed' : ''}`}
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" /></svg>
                        PRÉCÉDENT
                      </button>
                      <button
                        onClick={() => setOpenDay(Math.min(itinerary.length - 1, openDay + 1))}
                        disabled={openDay === itinerary.length - 1}
                        className={`hover:text-[#b7772e] transition-all flex items-center gap-2 ${openDay === itinerary.length - 1 ? 'opacity-20 cursor-not-allowed' : ''}`}
                      >
                        SUIVANT
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" /></svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case "HÉBERGEMENT":
        return (
          <div className="pt-12 pb-16 px-6 md:px-12 lg:px-16 animate-fadeIn">
            <h2 className="text-[#b7772e] font-serif text-2xl font-bold mb-8 italic">Vos havres de paix</h2>
            <p className="text-gray-600 mb-10 leading-relaxed">Nous avons sélectionné pour vous des établissements alliant charme, confort et authenticité pour une expérience immersive.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* {[
                // { name: "The Taj Mahal Tower", city: "Mumbai", img: "src/assets/image copy 13.png" },
                // { name: "Badami Heritage Resort", city: "Badami", img: "src/assets/image copy 14.png" }
              ].map((hotel, i) => (
                <div key={i} className="group cursor-pointer p-8 border border-gray-50 hover:border-[#b7772e]/20 transition-all bg-white">
                  <h4 className="font-bold text-[#102d45] text-[18px] mb-2">{hotel.name}</h4>
                  <p className="text-[#b7772e] text-[13px] font-bold uppercase tracking-widest">{hotel.city}</p>
                </div>
              ))} */}
            </div>
            <div className="mt-16 flex justify-center border-t border-gray-50 pt-10">
              <button className="bg-[#b7772e] hover:bg-[#9a6326] text-white font-bold py-4 px-12 rounded-sm shadow-lg transition-all duration-300 uppercase tracking-[0.2em] text-[14px]">
                DEMANDER UN DEVIS
              </button>
            </div>
          </div>
        );
      case "BUDGET":
        return (
          <div className="pt-12 pb-16 px-6 md:px-12 lg:px-16 animate-fadeIn">
            <h2 className="text-[#b7772e] font-serif text-2xl font-bold mb-8 italic">Budget et conditions</h2>
            <div className="bg-[#fcfcfc] border border-gray-100 p-8 mb-10">
              <div className="flex justify-between items-center mb-6">
                <span className="text-gray-600 font-bold uppercase tracking-widest text-sm">Prix par personne</span>
                <span className="text-3xl font-serif font-bold text-[#102d45]">860€</span>
              </div>
              <p className="text-xs text-gray-400 italic">Prix basé sur une occupation double, variable selon la saison et les disponibilités.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <h4 className="font-bold text-[#102d45] mb-4 uppercase text-sm tracking-widest border-b border-[#b7772e] pb-2 inline-block">Le prix comprend</h4>
                <ul className="space-y-2 text-sm text-gray-600 italic">
                  <li>• L'hébergement en chambre double</li>
                  <li>• Les petits-déjeuners</li>
                  <li>• Les transferts en véhicule privé</li>
                  <li>• Les vols domestiques mentionnés</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-[#102d45] mb-4 uppercase text-sm tracking-widest border-b border-gray-200 pb-2 inline-block">Le prix ne comprend pas</h4>
                <ul className="space-y-2 text-sm text-gray-600 italic">
                  <li>• Le vol international</li>
                  <li>• Les frais de visa</li>
                  <li>• Les repas non mentionnés</li>
                  <li>• Les pourboires</li>
                </ul>
              </div>
            </div>
          </div>
        );
      case "NOS CONSEILS":
        return (
          <div className="pt-12 pb-16 px-6 md:px-12 lg:px-16 animate-fadeIn">
            <h2 className="text-[#b7772e] font-serif text-2xl font-bold mb-8 italic">Meilleure période </h2>
            <div className="space-y-8">
              <div className="bg-white border-l-4 border-[#b7772e] p-6 shadow-sm">
                <h4 className="font-bold text-[#102d45] mb-2 uppercase text-sm">Meilleure période</h4>
                <p className="text-gray-600 text-sm leading-relaxed italic">Juin à septembre</p>
              </div>
              <div className="bg-white border-l-4 border-[#b7772e] p-6 shadow-sm">
                <h4 className="font-bold text-[#102d45] mb-2 uppercase text-sm">Style du voyage</h4>
                <p className="text-gray-600 text-sm leading-relaxed italic">Voyage privé et aventure himalayenne dédié aux amoureux de montagne, photographie et
                  culture tibétaine..</p>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#f7f3f0] overflow-x-hidden">
      <Navbar />

      <section className="relative h-[500px] md:h-[650px] lg:h-[720px] overflow-hidden">
        <img src="src\assets\image copy 20.png" alt="Nos destinations" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 max-w-[1180px] mx-auto h-full flex flex-col items-center justify-center px-6 md:px-10 text-center">
          <div className="max-w-[800px]">
            <h1 className="font-serif text-[46px] md:text-[62px] lg:text-[76px] leading-[1.1] text-white mb-8 drop-shadow-lg uppercase tracking-tight">Leh, Nubra Valley  Pangong Lake 14 Jours</h1>
            <div className="w-16 h-px bg-[#c58b32] mb-6 mx-auto" />
            <p className="text-[14px] md:text-[16px] leading-relaxed text-white/90 max-w-[800px] mx-auto drop-shadow-md">Un voyage exceptionnel au cœur de l’Himalaya indien, entre cols mythiques, villages bouddhistes, festivals
              traditionnels et panoramas parmi les plus impressionnants du monde. Découvrez le Ladakh, terre de silence et de
              spiritualité.
            </p>
          </div>
        </div>
      </section>

      <div className="relative z-30 mt-12 pb-24 px-4 max-w-7xl mx-auto">
        <div className="lg:flex lg:gap-8 items-start">
          <div className="flex-1 bg-white shadow-2xl rounded-sm overflow-hidden min-h-[600px]">
            <div className="flex bg-[#fcfcfc] border-b border-gray-200">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 py-4 text-[11px] md:text-[13px] font-bold tracking-widest transition-all duration-300 ${activeTab === tab ? "text-[#b7772e] border-b-[3px] border-[#b7772e]" : "text-gray-400 hover:text-gray-600 border-r border-gray-100 last:border-r-0"}`}
                >
                  {tab}
                </button>
              ))}
            </div>
            {renderTabContent()}
          </div>

          <div className="mt-12 lg:mt-0 w-full lg:w-[380px] shrink-0 space-y-8">
            <div className="bg-white border border-[#eadfce]/40 rounded-sm p-10 text-center shadow-[0_15px_45px_rgba(70,45,20,0.12)]">
              <h3 className="font-serif text-[30px] text-[#b7772e] mb-2 italic">Circuit en Inde</h3>
              <div className="flex justify-center mb-8 opacity-70">
                <div className="w-56 h-[1.5px] bg-[#333]" style={{ clipPath: "polygon(0% 45%, 15% 55%, 30% 40%, 50% 60%, 70% 35%, 85% 50%, 100% 40%, 100% 60%, 85% 55%, 70% 65%, 50% 40%, 30% 60%, 15% 45%, 0% 55%)" }} />
              </div>
              <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-6 mb-12">
                <div>
                  <div className="flex flex-col items-center gap-1.5 text-[#b7772e] mb-1">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" /></svg>
                    <span className="text-[11px] font-bold tracking-[0.2em] uppercase">À partir de</span>
                  </div>
                  <p className="text-[24px] font-bold text-[#102d45]">860€/pers</p>
                </div>
                <div className="w-px h-16 bg-[#eadfce]/60" />
                <div>
                  <div className="flex flex-col items-center gap-1.5 text-[#b7772e] mb-1">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span className="text-[11px] font-bold tracking-[0.2em] uppercase">Durée</span>
                  </div>
                  <p className="text-[24px] font-bold text-[#102d45] whitespace-nowrap">14j / 11n</p>
                </div>
              </div>
              <button className="w-full bg-[#b7772e] hover:bg-[#9a6326] text-white font-bold py-5 px-6 rounded-sm shadow-lg transition-all duration-300 uppercase tracking-[0.2em] text-[14px]">DEMANDER UN DEVIS</button>
            </div>

            <div className="bg-white border border-[#eadfce]/40 rounded-sm p-10 shadow-[0_15px_45_rgba(70,45,20,0.12)]">
              <h3 className="font-serif text-[28px] text-[#b7772e] mb-2 text-center">Points forts du voyage</h3>
              <div className="flex justify-center mb-10 opacity-70">
                <div className="w-56 h-[1.5px] bg-[#333]" style={{ clipPath: "polygon(0% 45%, 15% 55%, 30% 40%, 50% 60%, 70% 35%, 85% 50%, 100% 40%, 100% 60%, 85% 55%, 70% 65%, 50% 40%, 30% 60%, 15% 45%, 0% 55%)" }} />
              </div>
              <ul className="space-y-6">
                {highlights.map((point, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="mt-1 shrink-0"><svg className="w-5 h-5 text-gray-700" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" /></svg></div>
                    <span className="text-[15px] text-[#444] font-['Montserrat'] leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white border border-[#eadfce]/40 rounded-sm p-10 shadow-[0_15px_45_rgba(70,45,20,0.12)]">
              <h3 className="font-serif text-[28px] text-[#b7772e] mb-2 text-center">Nos garanties</h3>
              <div className="flex justify-center mb-10 opacity-70">
                <div className="w-56 h-[1.5px] bg-[#333]" style={{ clipPath: "polygon(0% 45%, 15% 55%, 30% 40%, 50% 60%, 70% 35%, 85% 50%, 100% 40%, 100% 60%, 85% 55%, 70% 65%, 50% 40%, 30% 60%, 15% 45%, 0% 55%)" }} />
              </div>
              <div className="grid grid-cols-2 gap-y-10 relative">
                <div className="absolute top-1/2 left-0 right-0 h-px bg-gray-100 -translate-y-1/2" />
                <div className="absolute top-0 bottom-0 left-1/2 w-px bg-gray-100 -translate-x-1/2" />
                {guarantees.map((item, index) => (
                  <div key={index} className="flex flex-col items-center text-center p-4">
                    <div className="text-[#102d45] opacity-80">{item.icon}</div>
                    <span className="text-[14px] md:text-[15px] font-serif font-bold text-[#102d45] leading-tight max-w-[120px]">{item.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="bg-[#f0f2f4] py-8 px-6 border-t border-gray-200">
        <div className="max-w-4xl mx-auto text-center relative">
          <h2 className="font-serif text-[24px] md:text-[30px] text-[#102d45] mb-4 font-bold">Les avis de nos voyageurs</h2>
          <div className="flex flex-col items-center gap-1 mb-6">
            <span className="text-[#b7772e] font-bold text-sm">5/5</span>
            <div className="flex gap-0.5 text-[#b7772e]">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
              ))}
            </div>
          </div>
          <div className="relative max-w-2xl mx-auto px-8 md:px-12 py-4">
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.02]"><span className="text-[160px] font-serif font-bold text-gray-800 leading-none -translate-y-4">"</span></div>
            <button className="absolute left-0 top-1/2 -translate-y-1/2 p-1 text-gray-400 hover:text-[#b7772e] transition-colors"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 19l-7-7 7-7" /></svg></button>
            <div className="relative z-10">
              <p className="text-[13px] md:text-[14px] leading-[1.6] text-[#555] font-medium italic mb-6 px-2">un voyage merveilleux ,très confortable, bien encadré mis avec la possibilité de quand même découvrir l'âme de L'Inde par soi-même en gardant des moments de découverte personnelle . On a adoré la spiritualité et la ferveur du Rajasthan . Sa population est souriante et accueillante. Ses temples et son architecture sont éblouissants. les vieux centres ville restent uniques et très dépaysants.</p>
              <div className="space-y-0.5">
                <p className="text-[12px] font-bold tracking-[0.2em] text-[#102d45] uppercase">- DORIANE ET PAULINE -</p>
                <p className="text-[11px] text-gray-400">Avril 2026</p>
              </div>
              <div className="mt-6 space-y-1.5">
                <p className="text-[11px] text-gray-400">Avis relatif au voyage "L'Inde du Nord au Sud en circuit"</p>
                <div className="flex items-center justify-center gap-2 text-[11px] text-gray-400"><span>Note satisfaction Inde en liberté :</span><span className="text-[#b7772e] font-bold">/5</span><div className="flex gap-0.5">{[...Array(5)].map((_, i) => (<svg key={i} className="w-2.5 h-2.5 text-gray-200 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>))}</div><span>basée sur</span></div>
              </div>
            </div>
            <button className="absolute right-0 top-1/2 -translate-y-1/2 p-1 text-gray-400 hover:text-[#b7772e] transition-colors"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5l7 7-7 7" /></svg></button>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-[#f7f3f0]">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="font-serif text-[32px] md:text-[42px] text-[#b7772e] mb-2 font-bold italic">Découvrez d'autres voyages en Inde</h2>
          <div className="flex justify-center mb-16 opacity-70"><div className="w-64 h-[1.5px] bg-[#333]" style={{ clipPath: "polygon(0% 45%, 15% 55%, 30% 40%, 50% 60%, 70% 35%, 85% 50%, 100% 40%, 100% 60%, 85% 55%, 70% 65%, 50% 40%, 30% 60%, 15% 45%, 0% 55%)" }} /></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {otherTrips.map((trip, index) => (
              <div key={index} className="group relative h-[450px] overflow-hidden rounded-sm shadow-xl cursor-pointer">
                <img src={trip.image} alt={trip.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-left flex flex-col items-start gap-1">
                  {trip.tag && <span className="bg-white text-black text-[10px] font-bold px-2 py-1 mb-2 tracking-widest uppercase">{trip.tag}</span>}
                  <span className="text-white text-[11px] font-bold tracking-widest uppercase mb-1 drop-shadow-md">{trip.duration}</span>
                  <h3 className="text-white font-serif text-[20px] md:text-[22px] font-bold leading-tight mb-4 drop-shadow-lg">{trip.title}</h3>
                  <p className="text-white/90 text-[14px] font-medium mb-4 drop-shadow-md">À partir de <span className="text-[18px] font-bold">{trip.price}</span></p>
                  <a href="#" className="text-white text-[12px] font-bold tracking-widest uppercase border-b border-white/40 hover:border-white transition-all">&gt; DÉCOUVRIR</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      <style>{`
        .vertical-text { writing-mode: vertical-rl; transform: rotate(180deg); }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fadeIn { animation: fadeIn 0.5s ease-out forwards; }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
};

export default HimalayaAventuresHorsSentiersBattus;
