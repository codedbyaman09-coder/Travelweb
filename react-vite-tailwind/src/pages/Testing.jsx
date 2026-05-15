import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Testing = () => {
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
    "Un circuit en Inde du Sud à la découverte des merveilles du Karnataka",
    "Une coupure relaxante en cours de voyage avec un séjour à Goa de deux jours",
    "Le passage par Mysore et ses décors rappelant l'époque des Maharajas",
    "Un voyage en Inde du Sud qui se termine avec l'effervescence de Mumbai"
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
            <div className="space-y-2">
              {[
                "day 1 — Arrivée à Delhi",
                "day 2 — Delhi → Mandawa",
                "day 3 — Mandawa → Bikaner",
                "day 4 — Bikaner : Culture & Traditions",
                "day 5 — Bikaner → Jodhpur",
                "day 6 — Jodhpur : Musiques & Traditions",
                "day 7 — Jodhpur → Pushkar",
                "day 8 — Pushkar → Jaipur",
                "day 9 — Jaipur : Palais & Festivals",
                "day 10 — Jaipur → Agra",
                "day 11 — Agra → Varanasi",
                "day 12 — Varanasi : Spiritualité & Traditions",
                "day 13 — Varanasi → Delhi",
                "day 14 — Départ"
              ].map((day, index) => (
                <h3 key={index} className="text-[#000] font-serif text-[15px] md:text-[16px] font-semibold border-b border-[#b7772e]/5 pb-1 last:border-0">
                  {day}
                </h3>
              ))}
            </div>
            


            <div className="space-y-7 text-[#555] font-['Montserrat'] leading-[1.8] text-[15px]">
              {/* <p>
                Les vestiges hérités des Maharajas à Mysore, les temples fabuleux
                d'Hassan, la splendeur des roches taillées recouvertes de
                végétation à Hampi, les plages de sable fin de Goa et enfin,
                l'effervescence de Bombay, c'est tout cela que l'on vous propose de
                vivre dans ce circuit en Inde du Sud ! Le Karnataka renferme tant
                de joyaux qu'il vous faudrait une vie pour tous les découvrir, nous
                espérons qu'avec ce voyage en Inde du Sud, vous en aurez un bel
                échantillon.
              </p>
              <p>
                Vous apprécierez particulièrement le séjour à Goa en milieu de
                circuit offrant une pause relaxante sur des plages de sable fin...
              </p> */}

              {/* <div className="pt-2">
                <span className="text-gray-700 font-bold">Région traversée au cours de ce voyage en Inde : </span>
                <a href="#" className="text-[#b7772e] underline decoration-1 underline-offset-4">Mumbai & le Karnataka</a>
                <span className="mx-2 text-gray-400">|</span>
                <a href="#" className="text-[#b7772e] underline decoration-1 underline-offset-4">Calcutta & l'Inde centrale</a>
              </div> */}

              {/* <p className="text-[14px] text-gray-600 mt-6 italic font-medium">
                N.B. : Ce voyage en Inde est un voyage individuel sur mesure à
                personnaliser with nos conseillers spécialistes du pays.
              </p> */}
            </div>

            <div className="mt-16">
              {/* <h3 className="text-[#b7772e] font-serif text-2xl font-bold mb-8">
                L'itinéraire
              </h3> */}

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
        return (
          <div className="pt-12 pb-16 px-6 md:px-12 lg:px-16 animate-fadeIn">
            <h2 className="text-[#b7772e] font-serif text-xl font-bold mb-6 italic">Le programme au jour le jour</h2>
            <div className="space-y-12">
              {[
                { 
                  day: "01", 
                  title: "Arrivée à Delhi", 
                  desc: (
                    <div className="space-y-1">
                      <p>• Accueil personnalisé à l’aéroport.</p>
                      <p>• Première immersion dans l’ambiance indienne.</p>
                      <p>• Marchés colorés de Delhi.</p>
                      <p>• Street food et vie locale.</p>
                      <p>• Découverte nocturne de la ville.</p>
                      <p className="mt-2 font-medium">Une première rencontre vibrante avec l’Inde</p>
                    </div>
                  )
                },
                { 
                  day: "02", 
                  title: "Delhi → Mandawa", 
                  desc: (
                    <div className="space-y-1">
                      <p>• Route vers la région du Shekhawati.</p>
                      <p>• Villages ruraux.</p>
                      <p>• Havelis colorées.</p>
                      <p>• Rencontres avec habitants et artisans.</p>
                      <p>• Musique locale et traditions du Rajasthan.</p>
                      <p className="mt-2 font-medium">Une Inde traditionnelle et chaleureuse.</p>
                    </div>
                  )
                },
                { 
                  day: "03", 
                  title: "Mandawa → Bikaner", 
                  desc: (
                    <div className="space-y-1">
                      <p>• Traversée des paysages désertiques.</p>
                      <p>• Marchés traditionnels.</p>
                      <p>• Vieille ville de Bikaner.</p>
                      <p>• Temples et ruelles anciennes.</p>
                      <p>• Ambiance festive locale.</p>
                      <p className="mt-2 font-medium">Le Rajasthan authentique entre désert et traditions.</p>
                    </div>
                  )
                },
                { 
                  day: "04", 
                  title: "Bikaner : Culture & Traditions", 
                  desc: (
                    <div className="space-y-1">
                      <p>• Rencontres avec familles locales.</p>
                      <p>• Cuisine traditionnelle.</p>
                      <p>• Musique folklorique.</p>
                      <p>• Danses locales.</p>
                      <p>• Découverte des traditions rurales.</p>
                      <p className="mt-2 font-medium">Une immersion dans la culture du désert.</p>
                    </div>
                  )
                },
                { 
                  day: "05", 
                  title: "Bikaner → Jodhpur", 
                  desc: (
                    <div className="space-y-1">
                      <p>• Route vers la ville bleue.</p>
                      <p>• Clock Tower Market.</p>
                      <p>• Marchés aux épices.</p>
                      <p>• Artisanat local.</p>
                      <p>• Ambiance animée des bazars.</p>
                      <p className="mt-2 font-medium">Couleurs et énergie du Rajasthan royal.</p>
                    </div>
                  )
                },
                { 
                  day: "06", 
                  title: "Jodhpur : Musiques & Traditions", 
                  desc: (
                    <div className="space-y-1">
                      <p>• Découverte des ruelles bleues.</p>
                      <p>• Spectacle de musique traditionnelle.</p>
                      <p>• Danse folklorique.</p>
                      <p>• Cuisine locale.</p>
                      <p>• Temps libre dans les marchés.</p>
                      <p className="mt-2 font-medium">Une ville vivante et profondément culturelle.</p>
                    </div>
                  )
                },
                { 
                  day: "07", 
                  title: "Jodhpur → Pushkar", 
                  desc: (
                    <div className="space-y-1">
                      <p>• Traversée des villages ruraux.</p>
                      <p>• Découverte du lac sacré.</p>
                      <p>• Ghats et temples.</p>
                      <p>• Marchés bohèmes.</p>
                      <p>• Ambiance spirituelle et festive.</p>
                      <p className="mt-2 font-medium">Entre spiritualité et traditions locales.</p>
                    </div>
                  )
                },
                { 
                  day: "08", 
                  title: "Pushkar → Jaipur", 
                  desc: (
                    <div className="space-y-1">
                      <p>• Route vers Jaipur.</p>
                      <p>• Découverte du Hawa Mahal.</p>
                      <p>• Bazars colorés.</p>
                      <p>• Bijoux et textiles traditionnels.</p>
                      <p>• Vie nocturne des marchés.</p>
                      <p className="mt-2 font-medium">La capitale royale du Rajasthan.</p>
                    </div>
                  )
                },
                { 
                  day: "09", 
                  title: "Jaipur : Palais & Festivals", 
                  desc: (
                    <div className="space-y-1">
                      <p>• Fort d’Amber.</p>
                      <p>• City Palace.</p>
                      <p>• Ateliers artisanaux.</p>
                      <p>• Spectacle de danse traditionnelle.</p>
                      <p>• Cuisine rajasthanie.</p>
                      <p className="mt-2 font-medium">Une journée festive au cœur du Rajasthan.</p>
                    </div>
                  )
                },
                { 
                  day: "10", 
                  title: "Jaipur → Agra", 
                  desc: (
                    <div className="space-y-1">
                      <p>• Arrêt à Chand Baori.</p>
                      <p>• Traversée des villages.</p>
                      <p>• Découverte du Taj Mahal au coucher du soleil.</p>
                      <p>• Photographie des lumières mogholes.</p>
                      
                      <p className="mt-2 font-medium">Romantisme et héritage impérial.</p>
                    </div>
                  )
                },
                { 
                  day: "11", 
                  title: "Agra → Varanasi", 
                  desc: (
                    <div className="space-y-1">
                      <p>• Vol ou train vers Varanasi.</p>
                      <p>• Découverte des ghats.</p>
                      <p>• Cérémonie Aarti sur le Gange.</p>
                      <p>• Ambiance spirituelle et lumineuse.</p>
                      <p className="mt-2 font-medium">Une Inde sacrée et fascinante.</p>
                    </div>
                  )
                },
                { 
                  day: "12", 
                  title: "Varanasi : Spiritualité & Traditions", 
                  desc: (
                    <div className="space-y-1">
                      <p>• Balade en bateau au lever du soleil.</p>
                      <p>• Vie quotidienne sur les ghats.</p>
                      <p>• Prières hindoues.</p>
                      <p>• Marchés traditionnels.</p>
                      <p>• Découverte des temples anciens.</p>
                      <p className="mt-2 font-medium">Une immersion unique dans les traditions indiennes.</p>
                    </div>
                  )
                },
                { 
                  day: "13", 
                  title: "Varanasi → Delhi", 
                  desc: (
                    <div className="space-y-1">
                      <p>• Retour vers Delhi.</p>
                      <p>• Temps libre.</p>
                      <p>• Derniers achats artisanaux.</p>
                      <p>• Dîner d’adieu indien.</p>
                      <p className="mt-2 font-medium">Derniers instants dans l’ambiance festive de l’Inde.</p>
                    </div>
                  )
                },
                { 
                  day: "14", 
                  title: "Départ", 
                  desc: (
                    <div className="space-y-1">
                      <p>• Transfert privé vers l’aéroport.</p>
                      <p>• Assistance jusqu’au départ.</p>
                      <p className="mt-2 font-medium">Fin de votre voyage culturel et festif en Inde.</p>
                    </div>
                  )
                },
              ].map((item, i) => {
                const isOpen = openDay === i;
                return (
                  <div key={i} className="border-b border-gray-100 last:border-0">
                    <button 
                      onClick={() => setOpenDay(isOpen ? null : i)}
                      className="w-full flex items-center justify-between gap-4 py-5 text-left group transition-all"
                    >
                      <div className="flex items-center gap-4">
                        <div className={`text-2xl font-serif font-bold shrink-0 transition-colors duration-300 ${isOpen ? "text-[#b7772e]" : "text-[#b7772e]/20"}`}>
                          {item.day}
                        </div>
                        <h4 className={`font-bold text-[#102d45] text-[15px] uppercase tracking-wide transition-colors ${isOpen ? "text-[#b7772e]" : "group-hover:text-[#b7772e]"}`}>
                          {item.title}
                        </h4>
                      </div>
                      <div className={`transform transition-transform duration-300 ${isOpen ? "rotate-180 text-[#b7772e]" : "text-gray-300"}`}>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </button>
                    
                    <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-[500px] opacity-100 pb-6" : "max-h-0 opacity-0"}`}>
                      <div className="pl-[52px]">
                        <div className="text-gray-600 leading-relaxed text-[13px]">{item.desc}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      case "HÉBERGEMENT":
        return (
          <div className="pt-12 pb-16 px-6 md:px-12 lg:px-16 animate-fadeIn">
            <h2 className="text-[#b7772e] font-serif text-2xl font-bold mb-8 italic">Vos havres de paix</h2>
            <p className="text-gray-600 mb-10 leading-relaxed">Nous avons sélectionné pour vous des établissements alliant charme, confort et authenticité pour une expérience immersive.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { name: "The Taj Mahal Tower", city: "Mumbai", img: "src/assets/image copy 13.png" },
                { name: "Badami Heritage Resort", city: "Badami", img: "src/assets/image copy 14.png" }
              ].map((hotel, i) => (
                <div key={i} className="group cursor-pointer">
                  <div className="relative overflow-hidden h-[240px] mb-4">
                    <img src={hotel.img} alt={hotel.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    <div className="absolute top-4 left-4 bg-[#b7772e] text-white text-[10px] font-bold px-3 py-1 uppercase tracking-widest">Sélection Charme</div>
                  </div>
                  <h4 className="font-bold text-[#102d45]">{hotel.name}</h4>
                  <p className="text-[#b7772e] text-sm font-medium uppercase tracking-widest">{hotel.city}</p>
                </div>
              ))}
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
            <h2 className="text-[#b7772e] font-serif text-2xl font-bold mb-8 italic">Conseils de spécialistes</h2>
            <div className="space-y-8">
              <div className="bg-white border-l-4 border-[#b7772e] p-6 shadow-sm">
                <h4 className="font-bold text-[#102d45] mb-2 uppercase text-sm">Meilleure période</h4>
                <p className="text-gray-600 text-sm leading-relaxed italic">Pour ce circuit au Karnataka, la période idéale s'étend d'octobre à mars, lorsque le climat est sec et tempéré.</p>
              </div>
              <div className="bg-white border-l-4 border-[#b7772e] p-6 shadow-sm">
                <h4 className="font-bold text-[#102d45] mb-2 uppercase text-sm">Santé et formalités</h4>
                <p className="text-gray-600 text-sm leading-relaxed italic">Visa électronique obligatoire. Aucune vaccination n'est imposée, mais nous conseillons d'être à jour pour les rappels universels.</p>
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
            <h1 className="font-serif text-[46px] md:text-[62px] lg:text-[76px] leading-[1.1] text-white mb-8 drop-shadow-lg uppercase tracking-tight">Nos destinations <br /> en Inde</h1>
            <div className="w-16 h-px bg-[#c58b32] mb-6 mx-auto" />
            <p className="text-[14px] md:text-[16px] leading-relaxed text-white/90 max-w-[500px] mx-auto drop-shadow-md">Des régions fascinantes, des cultures uniques et des expériences inoubliables.</p>
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
                  <p className="text-[24px] font-bold text-[#102d45] whitespace-nowrap">12j / 11n</p>
                </div>
              </div>
              <button className="w-full bg-[#b7772e] hover:bg-[#9a6326] text-white font-bold py-5 px-6 rounded-sm shadow-lg transition-all duration-300 uppercase tracking-[0.2em] text-[14px]">DEMANDER UN DEVIS</button>
            </div>

            <div className="bg-white border border-[#eadfce]/40 rounded-sm p-10 shadow-[0_15px_45_rgba(70,45,20,0.12)]">
              <h3 className="font-serif text-[28px] text-[#b7772e] mb-2 text-center">Les points forts</h3>
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
      `}</style>
    </div>
  );
};

export default Testing;