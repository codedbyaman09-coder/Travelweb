import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ArtArtisanatSavoirFaire = () => {
  const [activeTab, setActiveTab] = useState("ITINÉRAIRE");
  const [openDay, setOpenDay] = useState(0); // Default open the first day
  const [showAllHighlights, setShowAllHighlights] = useState(false);
  const [dynamicContent, setDynamicContent] = useState(null);

    useEffect(() => {
    Promise.all([
      fetch('http://127.0.0.1:8000/api/itineraries').then(res => res.json()),
      fetch('http://127.0.0.1:8000/api/destinations').then(res => res.json())
    ])
    .then(([itinData, destData]) => {
      let itin = null;
      if (itinData.success) {
        itin = itinData.data.find(d => d.slug.replace(/-$/, '') === 'art-artisanat-savoir-faire');
      }

      let dest = null;
      if (destData.success) {
        dest = destData.data.find(d => d.slug.replace(/-$/, '') === 'art-artisanat-savoir-faire');
      }

      if (itin || dest) {
        try {
          const rawContent = (itin && itin.page_content) ? itin.page_content : dest.page_content;
          let parsedContent = typeof rawContent === 'string' ? JSON.parse(rawContent) : rawContent;
          if (!parsedContent) parsedContent = {};

          setDynamicContent({
            ...parsedContent,
            heroTitle: parsedContent.heroTitle || dest?.title || itin?.title,
            heroDuration: parsedContent.heroDuration || (itin?.days ? `${itin.days} Jours` : ''),
            price: parsedContent.price || (itin?.price ? `${itin.price}€` : ''),
            durationText: parsedContent.durationText || (itin?.days ? `${itin.days}j / ${Math.max(1, itin.days - 1)}n` : ''),
          });
        } catch (e) {
          console.error("Error parsing dynamic content:", e);
        }
      }
    })
    .catch(err => console.error("Error fetching data:", err));
  }, []);

  const tabs = [
    "ITINÉRAIRE",
    "EN DÉTAIL",
    "HÉBERGEMENT",
    "BUDGET",
    "NOS CONSEILS",
  ];

  const defaultHighlights = [
    " • Rencontre avec artisans traditionnels",
    " • Impression textile & broderie indienne",
    " • Peinture miniature du Rajasthan",
    " • Villages artisanaux du Gujarat",
    " • Marchés colorés & savoir-faire ancestraux",
    " • Palais royaux & architecture historique",
    " • Expériences culturelles authentiques",
    "• Assistance francophone Indeora Voyages",
  ];
  const highlights = dynamicContent?.highlights?.length > 0 ? dynamicContent.highlights : defaultHighlights;

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
              <h2 className="text-[#000] font-serif text-[28px] md:text-[32px] font-bold mb-6 italic leading-tight">{dynamicContent?.heroTitle || "Rajasthan Gujarat — 14 Jours"} — {dynamicContent?.heroDuration ? (String(dynamicContent.heroDuration).toLowerCase().includes('jour') ? dynamicContent.heroDuration : `${dynamicContent.heroDuration} Jours`) : ""}</h2>
              <p className="text-[#000] font-['Montserrat'] leading-[1.8] text-[15px] max-w-3xl">{dynamicContent?.heroDescription || "Un voyage immersif à travers les régions les plus artistiques de l’Inde. Découvrez les métiers ancestraux, les palais royaux, les marchés colorés et les villages d’artisans où les traditions se transmettent depuis des générations."}</p>
            </div>
            <div className="space-y-4 mb-16">
              {(dynamicContent?.itinerary?.length > 0 && typeof dynamicContent.itinerary[0]?.title === 'string' && dynamicContent.itinerary[0].title.trim() !== "" ? dynamicContent.itinerary : [
                { day: "1", title: "Arrivée à Delhi," },
                { day: "2", title: "Delhi → Jaipur," },
                { day: "3", title: "Jaipur : Artisanat Royal," },
                { day: "4", title: "Jaipur → Jodhpur," },
                { day: "5", title: "Jodhpur : Artisans & Vie Locale," },
                { day: "6", title: "Jodhpur → Ranakpur → Udaipur," },
                { day: "7", title: "Udaipur : Arts & Miniatures," },
                { day: "8", title: "Udaipur → Ahmedabad," },
                { day: "9", title: "Ahmedabad → Bhuj," },
                { day: "10", title: "Villages artisanaux du Kutch," },
                { day: "11", title: "Kutch & Désert Blanc," },
                { day: "12", title: "Bhuj → Ahmedabad," },
                { day: "13", title: "Ahmedabad → Delhi," },
                { day: "14", title: "Départ" }
              ]).map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-6 group cursor-pointer transition-all hover:translate-x-1"
                  onClick={() => { setActiveTab("EN DÉTAIL"); setOpenDay(index); }}
                >
                  <span className="text-[#b7772e]/50 font-serif font-bold text-[15px] group-hover:text-[#b7772e] transition-colors w-20 shrink-0 tracking-widest uppercase border-b-2 border-transparent group-hover:border-[#b7772e] pb-0.5">
                    JOUR {item.day || index + 1}
                  </span>
                  <h3 className="text-[#222] font-serif text-[17px] font-semibold border-b border-transparent group-hover:border-[#b7772e]/20 pb-1 transition-all">
                    {typeof item === 'string' ? item.split(' — ')[1] : item.title}
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
        const defaultItinerary = [
          {
            day: "01", title: "Arrivée à Delhi", desc: (
              <div className="space-y-2">
                <p>• Accueil à l’aéroport.</p>
                <p>• Découverte de New Delhi.</p>
                <p>• Connaught Place.</p>
                <p>• Marchés artisanaux.</p>
                <p>• Premières scènes de vie indienne.</p>
                <p className="mt-6 font-medium italic text-[#102d45] text-[16px]">Une première immersion entre patrimoine et modernité.</p>
              </div>
            )
          },
          {
            day: "02", title: "Delhi → Jaipur", desc: (
              <div className="space-y-2">
                <p>• Route vers Jaipur.</p>
                <p>• Découverte du Hawa Mahal.</p>
                <p>• City Palace.</p>
                <p>• Bazars traditionnels.</p>
                <p>• Ateliers de bijoux et textile.</p>
                <p className="mt-6 font-medium italic text-[#102d45] text-[16px]">Première immersion dans l’artisanat royal du Rajasthan.</p>
              </div>
            )
          },
          {
            day: "03", title: "Jaipur : Artisanat Royal", desc: (
              <div className="space-y-2">
                <p>• Atelier d’impression textile au bloc.</p>
                <p>• Fabrication de bijoux rajputs.</p>
                <p>• Découverte des pierres précieuses.</p>
                <p>• Poterie artisanale.</p>
                <p>• Fabrication de marionnettes traditionnelles.</p>
                <p>• Rencontre avec familles d’artisans.</p>
                <p className="mt-6 font-medium italic text-[#102d45] text-[16px]">Traditions et savoir-faire transmis depuis des générations.</p>
              </div>
            )
          },
          {
            day: "04", title: "Jaipur → Jodhpur", desc: (
              <div className="space-y-2">
                <p>• Traversée des paysages ruraux.</p>
                <p>• Villages traditionnels.</p>
                <p>• Marchés locaux.</p>
                <p>• Découverte de la ville bleue.</p>
                <p>• Artisanat du cuir et textile.</p>
                <p className="mt-6 font-medium italic text-[#102d45] text-[16px]">Entre désert et patrimoine royal.</p>
              </div>
            )
          },
          {
            day: "05", title: "Jodhpur : Artisans & Vie Locale", desc: (
              <div className="space-y-2">
                <p>• Atelier de tissage traditionnel.</p>
                <p>• Fabrication d’épices.</p>
                <p>• Travail du cuir.</p>
                <p>• Poterie locale.</p>
                <p>• Balade dans les ruelles bleues.</p>
                <p className="mt-6 font-medium italic text-[#102d45] text-[16px]">Une ville vivante et profondément artistique.</p>
              </div>
            )
          },
          {
            day: "06", title: "Jodhpur → Ranakpur → Udaipur", desc: (
              <div className="space-y-2">
                <p>• Visite des temples jaïns de Ranakpur.</p>
                <p>• Traversée des Aravalli.</p>
                <p>• Villages ruraux.</p>
                <p>• Première découverte d’Udaipur.</p>
                <p>• Balade au bord du lac Pichola.</p>
                <p className="mt-6 font-medium italic text-[#102d45] text-[16px]">Élégance et douceur du Rajasthan.</p>
              </div>
            )
          },
          {
            day: "07", title: "Udaipur : Arts & Miniatures", desc: (
              <div className="space-y-2">
                <p>• Découverte du City Palace.</p>
                <p>• Atelier de peinture miniature.</p>
                <p>• Rencontre avec artistes locaux.</p>
                <p>• Marchés artisanaux.</p>
                <p>• Découverte des ghats et de la vieille ville.</p>
                <p className="mt-6 font-medium italic text-[#102d45] text-[16px]">Une ville romantique et artistique.</p>
              </div>
            )
          },
          {
            day: "08", title: "Udaipur → Ahmedabad", desc: (
              <div className="space-y-2">
                <p>• Vol intérieur ou train.</p>
                <p>• Découverte des pols traditionnels.</p>
                <p>• Marchés textiles.</p>
                <p>• Architecture historique.</p>
                <p className="mt-6 font-medium italic text-[#102d45] text-[16px]">Entre patrimoine et artisanat du Gujarat.</p>
              </div>
            )
          },
          {
            day: "09", title: "Ahmedabad → Bhuj", desc: (
              <div className="space-y-2">
                <p>• Départ vers la région du Kutch.</p>
                <p>• Premières découvertes des villages artisanaux.</p>
                <p>• Broderies traditionnelles.</p>
                <p>• Artisanat local.</p>
                <p className="mt-6 font-medium italic text-[#102d45] text-[16px]">Une région riche en traditions et couleurs.</p>
              </div>
            )
          },
          {
            day: "10", title: "Villages artisanaux du Kutch", desc: (
              <div className="space-y-2">
                <p>• Rencontre avec communautés artisanales.</p>
                <p>• Broderie traditionnelle.</p>
                <p>• Tissage à la main.</p>
                <p>• Travail du cuir.</p>
                <p>• Fabrication de tissus naturels.</p>
                <p className="mt-6 font-medium italic text-[#102d45] text-[16px]">Immersion authentique dans les traditions du Gujarat.</p>
              </div>
            )
          },
          {
            day: "11", title: "Kutch & Désert Blanc", desc: (
              <div className="space-y-2">
                <p>• Découverte des villages ethniques.</p>
                <p>• Artisanat local. </p>
                <p>• Désert blanc du Rann of Kutch.</p>
                <p>• Coucher du soleil dans le désert.</p>
                <p className="mt-6 font-medium italic text-[#102d45] text-[16px]">Une atmosphère irréelle entre culture et paysages uniques.</p>
              </div>
            )
          },
          {
            day: "12", title: "Bhuj → Ahmedabad", desc: (
              <div className="space-y-2">
                <p>• Retour vers Ahmedabad.</p>
                <p>• Temps libre dans les marchés artisanaux.</p>
                <p>• Textiles traditionnels.</p>
                <p>• Architecture historique.</p>
                <p className="mt-6 font-medium italic text-[#102d45] text-[16px]">Une dernière immersion dans l’artisanat indien.</p>
              </div>
            )
          },
          {
            day: "13", title: "Ahmedabad → Delhi", desc: (
              <div className="space-y-2">
                <p>• Vol vers Delhi.</p>
                <p>• Shopping artisanal.</p>
                <p>• Temps libre.</p>
                <p>• Dîner d’adieu indien.</p>
                <p className="mt-6 font-medium italic text-[#102d45] text-[16px]">Derniers instants dans l’ambiance indienne.</p>
              </div>
            )
          },
          {
            day: "14", title: "Départ", desc: (
              <div className="space-y-2">
                <p>• Transfert vers l’aéroport.</p>
                <p>• Assistance jusqu’au départ.</p>
                <p className="mt-6 font-medium italic text-[#102d45] text-[16px]">Fin de votre voyage artistique en Inde.</p>
              </div>
            )
          },
        ];

        const formattedDynamicItinerary = dynamicContent?.itinerary?.map(item => ({
          day: item.day,
          title: item.title,
          desc: (
            <div className="space-y-2 whitespace-pre-wrap">
              {item.desc}
            </div>
          )
        }));

        const activeItinerary = formattedDynamicItinerary && formattedDynamicItinerary.length > 0 && typeof formattedDynamicItinerary[0]?.title === 'string' && formattedDynamicItinerary[0].title.trim() !== "" ? formattedDynamicItinerary : defaultItinerary;

        const selectedDay = activeItinerary[openDay] || activeItinerary[0] || defaultItinerary[0];

        return (
          <div className="pt-12 pb-16 px-6 md:px-12 lg:px-16 animate-fadeIn">
            <h2 className="text-[#b7772e] font-serif text-[20px] md:text-[24px] font-bold mb-12 italic border-b border-[#b7772e]/10 pb-4">
              Le programme au jour le jour
            </h2>

            <div className="flex flex-col md:flex-row gap-12 md:gap-20">
              {/* Left Sidebar: Day List */}
              <div className="w-full md:w-[180px] shrink-0 border-r border-gray-50 pr-8">
                <div className="flex flex-row md:flex-col gap-8 md:gap-5 overflow-x-auto md:overflow-visible pb-6 md:pb-0 scrollbar-hide">
                  {activeItinerary.map((item, i) => (
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
                    <span className="text-[#b7772e]/40">Étape {parseInt(selectedDay.day)} / {activeItinerary.length}</span>
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
                        onClick={() => setOpenDay(Math.min(activeItinerary.length - 1, openDay + 1))}
                        disabled={openDay === activeItinerary.length - 1}
                        className={`hover:text-[#b7772e] transition-all flex items-center gap-2 ${openDay === activeItinerary.length - 1 ? 'opacity-20 cursor-not-allowed' : ''}`}
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
            <p className="text-gray-600 mb-10 leading-relaxed whitespace-pre-wrap">{dynamicContent?.accommodationText || "Nous avons sélectionné pour vous des établissements alliant charme, confort et authenticité pour une expérience immersive."}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {(dynamicContent?.accommodations?.length > 0 && typeof dynamicContent.accommodations[0]?.title === 'string' && dynamicContent.accommodations[0].title.trim() !== "" ? dynamicContent.accommodations : [
                {
                  title: "Châteaux & Demeures Historiques",
                  subtitle: "Patrimoine & Charme",
                  desc: "Dormez dans d'anciens forts de Maharajas restaurés ou des havelis d'époque pour vivre le rêve princier."
                },
                {
                  title: "Hôtels Boutiques & Ecolodges",
                  subtitle: "Modernité & Confort",
                  desc: "Des havres de tranquillité et de design au milieu des oasis de verdure et des paysages désertiques."
                }
              ]).map((acc, idx) => (
                <div key={idx} className="group cursor-pointer p-8 border border-gray-150 hover:border-[#b7772e]/20 transition-all bg-white shadow-sm">
                  <h4 className="font-bold text-[#102d45] text-[18px] mb-2 break-words">{acc.title}</h4>
                  <p className="text-[#b7772e] text-[13px] font-bold uppercase tracking-widest break-words">{acc.subtitle}</p>
                  <p className="text-sm text-gray-500 mt-3 leading-relaxed whitespace-pre-wrap break-words">{acc.desc}</p>
                </div>
              ))}
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
                <span className="text-3xl font-serif font-bold text-[#102d45]">{dynamicContent?.price ? (String(dynamicContent.price).includes('/') ? dynamicContent.price : `${dynamicContent.price}/pers`) : "860€/pers"}</span>
              </div>
              <p className="text-xs text-gray-400 italic">Prix basé sur une occupation double, variable selon la saison et les disponibilités.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <h4 className="font-bold text-[#102d45] mb-4 uppercase text-sm tracking-widest border-b border-[#b7772e] pb-2 inline-block">Le prix comprend</h4>
                <ul className="space-y-2 text-sm text-gray-600 italic">
                  {(dynamicContent?.priceIncludes ? dynamicContent.priceIncludes.split('\n') : [
                      "• L'hébergement en chambre double",
                      "• Les petits-déjeuners",
                      "• Les transferts en véhicule privé",
                      "• Les vols domestiques mentionnés"
                    ]).map((item, idx) => item.trim() ? <li key={idx}>{item}</li> : null)}
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-[#102d45] mb-4 uppercase text-sm tracking-widest border-b border-gray-200 pb-2 inline-block">Le prix ne comprend pas</h4>
                <ul className="space-y-2 text-sm text-gray-600 italic">
                  {(dynamicContent?.priceExcludes ? dynamicContent.priceExcludes.split('\n') : [
                      "• Le vol international",
                      "• Les frais de visa",
                      "• Les repas non mentionnés",
                      "• Les pourboires"
                    ]).map((item, idx) => item.trim() ? <li key={idx}>{item}</li> : null)}
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
              {(dynamicContent?.conseils?.length > 0 && typeof dynamicContent.conseils[0]?.title === 'string' && dynamicContent.conseils[0].title.trim() !== "" ? dynamicContent.conseils : [
                {
                  title: "Meilleure période",
                  desc: dynamicContent?.bestPeriod || "Mars à mai"
                },
                {
                  title: "Style du voyage",
                  desc: dynamicContent?.travelStyle || "Voyage privé et aventure nature dédié aux amoureux de faune sauvage et de photographie."
                }
              ]).map((conseil, idx) => (
                <div key={idx} className="bg-white border-l-4 border-[#b7772e] p-6 shadow-sm">
                  <h4 className="font-bold text-[#102d45] mb-2 uppercase text-sm break-words">{conseil.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed italic whitespace-pre-wrap break-words">{conseil.desc}</p>
                </div>
              ))}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#f7f3f0] overflow-x-hidden">
      

      <section className="relative h-[300px] md:h-[650px] lg:h-[720px] overflow-hidden">
        <img src={dynamicContent?.heroImage || "src/assets/image copy 20.png"} alt="Nos destinations" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center w-full max-w-[1440px] mx-auto px-4 md:px-[40px] mt-8 md:mt-0">
          <div className="max-w-[800px]">
            <h1 className="font-serif text-[28px] md:text-[62px] lg:text-[76px] leading-[1.1] text-white mb-4 md:mb-8 drop-shadow-lg uppercase tracking-tight">{dynamicContent?.heroTitle || "Rajasthan Gujarat 14 Jours"} — {dynamicContent?.heroDuration ? (String(dynamicContent.heroDuration).toLowerCase().includes('jour') ? dynamicContent.heroDuration : `${dynamicContent.heroDuration} Jours`) : ""}</h1>
            <div className="w-12 md:w-16 h-px bg-[#c58b32] mb-4 md:mb-6 mx-auto" />
            <p className="text-[11px] md:text-[16px] leading-relaxed text-white/90 max-w-[800px] mx-auto drop-shadow-md">{dynamicContent?.heroDescription || "Un voyage immersif à travers les régions les plus artistiques de l’Inde. Découvrez les métiers ancestraux, les palais royaux, les marchés colorés et les villages d’artisans où les traditions se transmettent depuis des générations."}</p>

          </div>
        </div>
      </section>

      <div className="relative z-30 mt-4 md:mt-12 pb-12 md:pb-24 w-full max-w-[1440px] mx-auto px-0 md:px-[40px]">
        <div className="lg:flex lg:gap-8 items-start">
          <div className="flex-1 bg-white shadow-2xl rounded-sm overflow-hidden min-h-[600px]">
            <div className="flex bg-[#fcfcfc] border-b border-gray-200 overflow-x-auto scrollbar-hide">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 min-w-max px-4 py-4 text-[10px] md:text-[13px] font-bold tracking-wide md:tracking-widest transition-all duration-300 whitespace-nowrap ${activeTab === tab ? "text-[#b7772e] border-b-[3px] border-[#b7772e]" : "text-gray-400 hover:text-gray-600 border-r border-gray-100 last:border-r-0"}`}
                >
                  {tab}
                </button>
              ))}
            </div>
            {renderTabContent()}
          </div>

          <div className="mt-12 lg:mt-0 w-full lg:w-[380px] shrink-0 space-y-8">
            <div className="hidden md:block bg-white border border-[#eadfce]/40 rounded-sm p-10 text-center shadow-[0_15px_45px_rgba(70,45,20,0.12)]">
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
                  <p className="text-[24px] font-bold text-[#102d45]">{dynamicContent?.price ? (String(dynamicContent.price).includes('/') ? dynamicContent.price : `${dynamicContent.price}/pers`) : "860€/pers"}</p>
                </div>
                <div className="w-px h-16 bg-[#eadfce]/60" />
                <div>
                  <div className="flex flex-col items-center gap-1.5 text-[#b7772e] mb-1">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span className="text-[11px] font-bold tracking-[0.2em] uppercase">Durée</span>
                  </div>
                  <p className="text-[24px] font-bold text-[#102d45] whitespace-nowrap">{dynamicContent?.durationText || "14j / 11n"}</p>
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
                {(dynamicContent?.highlights?.length > 0 && typeof dynamicContent.highlights[0] === 'string' && dynamicContent.highlights[0].trim() !== "" ? dynamicContent.highlights : highlights).map((point, index) => (
                  <li key={index} className={`items-start gap-4 animate-fadeIn ${index > 2 && !showAllHighlights ? 'hidden md:flex' : 'flex'}`}>
                    <div className="mt-1 shrink-0"><svg className="w-5 h-5 text-gray-700" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" /></svg></div>
                    <span className="text-[15px] text-[#444] font-['Montserrat'] leading-relaxed">{String(point)}</span>
                  </li>
                ))}
              </ul>
              {((dynamicContent?.highlights?.length > 0 && typeof dynamicContent.highlights[0] === 'string' && dynamicContent.highlights[0].trim() !== "" ? dynamicContent.highlights : highlights).length > 3) && (
                <div className="mt-8 flex justify-center border-t border-gray-100 pt-6 md:hidden">
                  <button 
                    onClick={() => setShowAllHighlights(!showAllHighlights)}
                    className="flex flex-col items-center justify-center text-[#b7772e] hover:text-[#9a6326] transition-all group"
                  >
                    <span className="text-[11px] font-bold tracking-widest uppercase mb-1">
                      {showAllHighlights ? "VOIR MOINS" : "VOIR PLUS"}
                    </span>
                    <svg className={`w-6 h-6 transition-transform duration-300 group-hover:translate-y-1 ${showAllHighlights ? "rotate-180 group-hover:-translate-y-1" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                  </button>
                </div>
              )}
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

      <section className="py-8 md:py-20 px-0 md:px-6 bg-[#f7f3f0]">
        <div className="text-center w-full max-w-[1440px] mx-auto px-0 md:px-[40px]">
          <h2 className="font-serif text-[28px] md:text-[42px] text-[#b7772e] mb-2 font-bold italic px-2">Découvrez d'autres voyages en Inde</h2>
          <div className="flex justify-center mb-8 md:mb-16 opacity-70"><div className="w-48 md:w-64 h-[1.5px] bg-[#333]" style={{ clipPath: "polygon(0% 45%, 15% 55%, 30% 40%, 50% 60%, 70% 35%, 85% 50%, 100% 40%, 100% 60%, 85% 55%, 70% 65%, 50% 40%, 30% 60%, 15% 45%, 0% 55%)" }} /></div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-1 md:gap-6">
            {otherTrips.map((trip, index) => (
              <div key={index} className="group relative h-[250px] md:h-[450px] overflow-hidden rounded-sm shadow-xl cursor-pointer">
                <img src={trip.image} alt={trip.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-3 md:p-6 text-left flex flex-col items-start gap-0.5 md:gap-1">
                  {trip.tag && <span className="bg-white text-black text-[6px] md:text-[10px] font-bold px-1.5 py-0.5 md:px-2 md:py-1 mb-1 md:mb-2 tracking-widest uppercase">{trip.tag}</span>}
                  <span className="text-white text-[7px] md:text-[11px] font-bold tracking-widest uppercase mb-0.5 md:mb-1 drop-shadow-md">{trip.duration}</span>
                  <h3 className="text-white font-serif text-[12px] md:text-[22px] font-bold leading-tight mb-2 md:mb-4 drop-shadow-lg">{trip.title}</h3>
                  <p className="text-white/90 text-[9px] md:text-[14px] font-medium mb-2 md:mb-4 drop-shadow-md">À partir de <span className="text-[12px] md:text-[18px] font-bold">{trip.price}</span></p>
                  <div className="text-white text-[8px] md:text-[12px] font-bold tracking-widest uppercase border-b border-white/40 group-hover:border-white transition-all">&gt; DÉCOUVRIR</div>
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

export default ArtArtisanatSavoirFaire;
