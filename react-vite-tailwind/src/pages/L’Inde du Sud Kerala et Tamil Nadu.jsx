import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const LIndeNordRajasthanPalais = () => {
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
    "• Temples majestueux du Tamil Nadu",
    "• Pondichéry & héritage français",
    "• Temple Meenakshi de Madurai",
    "• Plantations de thé du Kerala",
    "• Ayurveda & bien-être",
    "• Croisière dans les backwaters",
    "• Nature tropicale & plages paisibles",
    "• Assistance francophone Indeora Voyages",
  ];

  const otherTrips = [
    {
      title: "Les incontournables de l'Inde du Nord",
      duration: "8 JOURS / 7 NUITS",
      price: "825€",
      image: "/src/assets/image copy 8.png",
      tag: null
    },
    {
      title: "L'Inde du Sud version charme",
      duration: "13 JOURS / 12 NUITS",
      price: "1325€",
      image: "/src/assets/image copy 10.png",
      tag: "VOYAGE D'EXCEPTION"
    },
    {
      title: "Circuit de charme en Inde du Nord",
      duration: "11 JOURS / 10 NUITS",
      price: "1845€",
      image: "/src/assets/image copy 11.png",
      tag: "VOYAGE D'EXCEPTION"
    },
    {
      title: "L'Inde du Sud en Ecolodges",
      duration: "13 JOURS / 12 NUITS",
      price: "1810€",
      image: "/src/assets/image copy 12.png",
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
                L’Inde du Sud Kerala et Tamil Nadu — 13 Jours
              </h2>
              <p className="text-[#000] font-['Montserrat'] leading-[1.8] text-[15px] max-w-3xl">
                Entre temples colorés, plantations de thé, villages tropicaux et lagunes bordées de cocotiers, l’Inde du Sud dévoile une facette plus douce, spirituelle et apaisante de l’Inde.
              </p>
            </div>
            <div className="space-y-4 mb-16">
              {[
                "day 1 — Arrivée à Chennai",
                "day 2 — Chennai → Mahabalipuram",
                "day 3 — Mahabalipuram → Pondichéry",
                "day 4 — Pondichéry → Tanjore",
                "day 5 — Tanjore → Chettinad → Madurai",
                "day 6 — Madurai : Spiritualité & Culture Tamoule",
                "day 7 — Madurai → Munnar",
                "day 8 — Munnar : Nature & Plantations",
                "day 9 — Munnar → Thekkady",
                "day 10 — Thekkady → Alleppey",
                "day 11 — Alleppey → Marari Beach",
                "day 12 — Marari Beach → Kochi",
                "day 13 — Départ",

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
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3540209.689035133!2d72.39206689073108!3d26.544837588147514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396a3ef5084deb0f%3A0x7d2de7d19d674a2b!2sRajasthan%2C%20India!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
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
            day: "01", title: "Arrivée à Chennai", desc: (
              <div className="space-y-2">
                <p>• Accueil personnalisé à l’aéroport.</p>
                <p>• Découverte de Marina Beach.</p>
                <p>• Quartiers coloniaux.</p>
                <p>• Première immersion dans la culture tamoule.</p>
                <p className="mt-6 font-medium italic text-[#102d45] text-[16px]">Bienvenue dans le sud de l’Inde.</p>
              </div>
            )
          },
          {
            day: "02", title: "Chennai → Mahabalipuram", desc: (
              <div className="space-y-2">
                <p>• Route vers la côte du Tamil Nadu.</p>
                <p>• Shore Temple.</p>
                <p>• Bas-reliefs classés UNESCO.</p>
                <p>• Atmosphère balnéaire et culturelle.</p>
                <p className="mt-6 font-medium italic text-[#102d45] text-[16px]">Entre culture dravidienne et douceur maritime.</p>
              </div>
            )
          },
          {
            day: "03", title: "Mahabalipuram → Pondichéry", desc: (
              <div className="space-y-2">
                <p>• Route le long de la côte de Coromandel.</p>
                <p>• Quartier français.</p>
                <p>• Ashram de Sri Aurobindo.</p>
                <p>• Cafés coloniaux.</p>
                <p>• Balade dans les ruelles colorées.</p>
                <p className="mt-6 font-medium italic text-[#102d45] text-[16px]">Une ambiance unique entre Inde et héritage français.</p>
              </div>
            )
          },
          {
            day: "04", title: "Pondichéry → Tanjore", desc: (
              <div className="space-y-2">
                <p>• Découverte du temple de Brihadeeswarar.</p>
                <p>• Architecture Chola.</p>
                <p>• Vie locale tamoule.</p>
                <p>• Temples majestueux.</p>
                <p className="mt-6 font-medium italic text-[#102d45] text-[16px]">Un patrimoine sacré parmi les plus impressionnants d’Inde.</p>
              </div>
            )
          },
          {
            day: "05", title: "Tanjore → Chettinad → Madurai", desc: (
              <div className="space-y-2">
                <p>• Villages du Chettinad..</p>
                <p>• Maisons traditionnelles.</p>
                <p>• Cuisine tamoule authentique.</p>
                <p>• Arrivée à Madurai.</p>
                <p className="mt-6 font-medium italic text-[#102d45] text-[16px]">Culture et traditions du Tamil Nadu.</p>
              </div>
            )
          },
          {
            day: "06", title: "Madurai : Spiritualité & Culture Tamoule", desc: (
              <div className="space-y-2">
                <p>• Temple Meenakshi.</p>
                <p>• Marchés traditionnels.</p>
                <p>• Vieille ville.</p>
                <p>• Vie spirituelle tamoule.</p>
                <p>• Cérémonie du soir au temple.</p>
                <p className="mt-6 font-medium italic text-[#102d45] text-[16px]">Une ville vibrante et profondément spirituelle.</p>
              </div>
            )
          },
          {
            day: "07", title: "Madurai → Munnar", desc: (
              <div className="space-y-2">
                <p>• Route vers le Kerala.</p>
                <p>• Montagnes tropicales.</p>
                <p>• Cascades.</p>
                <p>• Plantations de thé.</p>
                <p>• Arrivée à Munnar.</p>
                <p className="mt-6 font-medium italic text-[#102d45] text-[16px]">Transition vers les paysages verdoyants du Kerala.</p>
              </div>
            )
          },
          {
            day: "08", title: "Munnar : Nature & Plantations", desc: (
              <div className="space-y-2">
                <p>• Balade dans les plantations de thé.</p>
                <p>• Jardins d’épices.</p>
                <p>• Points de vue panoramiques.</p>
                <p>• Temps libre dans la nature.</p>
                <p className="mt-6 font-medium italic text-[#102d45] text-[16px]">Fraîcheur et sérénité tropicale.</p>
              </div>
            )
          },
          {
            day: "09", title: "Munnar → Thekkady", desc: (
              <div className="space-y-2">
                <p>• Plantations d’épices.</p>
                <p>• Nature tropicale.</p>
                <p>• Villages du Kerala.</p>
                <p>• Massage ayurvédique.</p>
                <p>• Spectacle Kalaripayattu.</p>
                <p className="mt-6 font-medium italic text-[#102d45] text-[16px]">Entre jungle tropicale et bien-être.</p>
              </div>
            )
          },
          {
            day: "10", title: "Thekkady → Alleppey", desc: (
              <div className="space-y-2">
                <p>• Arrivée dans les backwaters.</p>
                <p>• Installation en houseboat privé.</p>
                <p>• Croisière paisible.</p>
                <p>• Villages au bord de l’eau.</p>
                <p>• Cuisine locale à bord.</p>
                <p>• Coucher du soleil sur les canaux.  </p>
                <p className="mt-6 font-medium italic text-[#102d45] text-[16px]">Une expérience emblématique du Kerala.</p>
              </div>
            )
          },
          {
            day: "11", title: "Alleppey → Marari Beach", desc: (
              <div className="space-y-2">
                <p>• Temps libre sur la plage.</p>
                <p>• Ayurveda.</p>
                <p>• Balade au coucher du soleil.</p>
                <p>• Détente tropicale.</p>
                <p className="mt-6 font-medium italic text-[#102d45] text-[16px]">Repos et douceur du sud de l’Inde.</p>
              </div>
            )
          },
          {
            day: "12", title: "JaMarari Beach → Kochi", desc: (
              <div className="space-y-2">
                <p>• Retour vers Kochi.</p>
                <p>• Fort Kochi.</p>
                <p>• Filets de pêche chinois.</p>
                <p>• Quartier colonial.</p>
                <p>• Dîner d’adieu traditionnel.</p>
                <p className="mt-6 font-medium italic text-[#102d45] text-[16px]">L'excellence royale et les trésors de l'artisanat.</p>
              </div>
            )
          },
          {
            day: "13", title: "Départ", desc: (
              <div className="space-y-2">
                <p>• Transfert privé vers l’aéroport.</p>
                <p>• Assistance jusqu’au départ.</p>
                <p className="mt-6 font-medium italic text-[#102d45] text-[16px]">Fin de votre voyage dans le sud de l’Inde.</p>
              </div>
            )
          },
          {
            day: "14", title: "Agra (Taj Mahal) → Delhi & Départ", desc: (
              <div className="space-y-2">
                <p>• Visite féerique du Taj Mahal au lever du soleil, moment où le marbre blanc se teinte de nuances dorées et rosées.</p>
                <p>• Retour à l'hôtel pour le petit-déjeuner puis route vers Delhi.</p>
                <p>• Quelques heures de shopping ou de visites complémentaires selon vos horaires de vol.</p>
                <p>• Transfert privé vers l'aéroport international de Delhi et assistance pour votre départ.</p>
                <p className="mt-6 font-medium italic text-[#102d45] text-[16px]">Fin de votre fabuleux voyage royal au Rajasthan.</p>
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
            <p className="text-gray-600 mb-10 leading-relaxed">Nous avons sélectionné pour vous des établissements d'exception alliant charme architectural, confort moderne et hospitalité légendaire pour une immersion royale.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="group cursor-pointer p-8 border border-gray-150 hover:border-[#b7772e]/20 transition-all bg-white shadow-sm">
                <h4 className="font-bold text-[#102d45] text-[18px] mb-2">Châteaux & Demeures Historiques</h4>
                <p className="text-[#b7772e] text-[13px] font-bold uppercase tracking-widest">Patrimoine & Charme</p>
                <p className="text-sm text-gray-500 mt-3 leading-relaxed">Dormez dans d'anciens forts de Maharajas restaurés ou des havelis d'époque pour vivre le rêve princier.</p>
              </div>
              <div className="group cursor-pointer p-8 border border-gray-150 hover:border-[#b7772e]/20 transition-all bg-white shadow-sm">
                <h4 className="font-bold text-[#102d45] text-[18px] mb-2">Hôtels Boutiques & Ecolodges</h4>
                <p className="text-[#b7772e] text-[13px] font-bold uppercase tracking-widest">Modernité & Confort</p>
                <p className="text-sm text-gray-500 mt-3 leading-relaxed">Des havres de tranquillité et de design au milieu des oasis de verdure and des paysages désertiques.</p>
              </div>
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
                <span className="text-3xl font-serif font-bold text-[#102d45]">1345€</span>
              </div>
              <p className="text-xs text-gray-400 italic">Prix indicatif basé sur une occupation double, variable selon la saison touristique and les disponibilités des hôtels.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <h4 className="font-bold text-[#102d45] mb-4 uppercase text-sm tracking-widest border-b border-[#b7772e] pb-2 inline-block">Le prix comprend</h4>
                <ul className="space-y-2 text-sm text-gray-600 italic">
                  <li>• L'hébergement de 12 nuits en chambre double de catégorie charme</li>
                  <li>• Les petits-déjeuners gourmands</li>
                  <li>• Les transferts en véhicule privé climatisé avec chauffeur dévoué</li>
                  <li>• Toutes les visites, excursions et entrées mentionnées au programme (dont temple Meenakshi et Pondichéry)</li>
                  <li>• La croisière en houseboat privé dans les backwaters du Kerala</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-[#102d45] mb-4 uppercase text-sm tracking-widest border-b border-gray-200 pb-2 inline-block">Le prix ne comprend pas</h4>
                <ul className="space-y-2 text-sm text-gray-600 italic">
                  <li>• Les vols internationaux</li>
                  <li>• Les frais de visa d'entrée en Inde</li>
                  <li>• Les repas non mentionnés (déjeuners et dîners libres)</li>
                  <li>• Les pourboires d'usage pour le chauffeur and les guides</li>
                </ul>
              </div>
            </div>
          </div>
        );
      case "NOS CONSEILS":
        return (
          <div className="pt-12 pb-16 px-6 md:px-12 lg:px-16 animate-fadeIn">
            <h2 className="text-[#b7772e] font-serif text-2xl font-bold mb-8 italic">Informations utiles</h2>
            <div className="space-y-8">
              <div className="bg-white border-l-4 border-[#b7772e] p-6 shadow-sm">
                <h4 className="font-bold text-[#102d45] mb-2 uppercase text-sm">Meilleure période</h4>
                <p className="text-gray-600 text-sm leading-relaxed italic">Octobre à mars</p>
              </div>
              <div className="bg-white border-l-4 border-[#b7772e] p-6 shadow-sm">
                <h4 className="font-bold text-[#102d45] mb-2 uppercase text-sm">Style du voyage</h4>
                <p className="text-gray-600 text-sm leading-relaxed italic">Voyage privé culturel et tropical entre spiritualité, nature et détente.</p>
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
        <img src="/src/assets/image copy 21.png" alt="L’Inde du Sud Kerala et Tamil Nadu" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 max-w-[1180px] mx-auto h-full flex flex-col items-center justify-center px-6 md:px-10 text-center">
          <div className="max-w-[800px]">
            <h1 className="font-serif text-[46px] md:text-[62px] lg:text-[76px] leading-[1.1] text-white mb-8 drop-shadow-lg uppercase tracking-tight">L’Inde du Sud : Kerala et Tamil Nadu — 13 Jours</h1>
            <div className="w-16 h-px bg-[#c58b32] mb-6 mx-auto" />
            <p className="text-[14px] md:text-[16px] leading-relaxed text-white/90 max-w-[800px] mx-auto drop-shadow-md">
              Entre temples colorés, plantations de thé, villages tropicaux et lagunes bordées de cocotiers, l’Inde du Sud dévoile une facette plus douce, spirituelle et apaisante de l’Inde.
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
                  <p className="text-[24px] font-bold text-[#102d45]">1345€/pers</p>
                </div>
                <div className="w-px h-16 bg-[#eadfce]/60" />
                <div>
                  <div className="flex flex-col items-center gap-1.5 text-[#b7772e] mb-1">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span className="text-[11px] font-bold tracking-[0.2em] uppercase">Durée</span>
                  </div>
                  <p className="text-[24px] font-bold text-[#102d45] whitespace-nowrap">13j / 12n</p>
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
              <p className="text-[13px] md:text-[14px] leading-[1.6] text-[#555] font-medium italic mb-6 px-2">un voyage merveilleux, très confortable, bien encadré mais avec la possibilité de quand même découvrir l'âme de L'Inde par soi-même en gardant des moments de découverte personnelle. On a adoré la spiritualité et la ferveur du Rajasthan. Sa population est souriante et accueillante. Ses temples et son architecture sont éblouissants. les vieux centres ville restent uniques et très dépaysants.</p>
              <div className="space-y-0.5">
                <p className="text-[12px] font-bold tracking-[0.2em] text-[#102d45] uppercase">- DORIANE ET PAULINE -</p>
                <p className="text-[11px] text-gray-400">Avril 2026</p>
              </div>
              <div className="mt-6 space-y-1.5">
                <p className="text-[11px] text-gray-400">Avis relatif au voyage "L'Inde du Nord au Sud en circuit"</p>
                <div className="flex items-center justify-center gap-2 text-[11px] text-gray-400"><span>Note satisfaction Inde en liberté :</span><span className="text-[#b7772e] font-bold">5/5</span><div className="flex gap-0.5">{[...Array(5)].map((_, i) => (<svg key={i} className="w-2.5 h-2.5 text-[#b7772e] fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>))}</div><span>basée sur</span></div>
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

export default LIndeNordRajasthanPalais;
