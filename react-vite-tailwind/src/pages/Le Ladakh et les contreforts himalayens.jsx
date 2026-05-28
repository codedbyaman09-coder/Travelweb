import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const LIndeNordRajasthanPalais = () => {
  const [activeTab, setActiveTab] = useState("ITINÉRAIRE");
  const [openDay, setOpenDay] = useState(0); // Default open the first day
  const [showAllHighlights, setShowAllHighlights] = useState(false);

  const tabs = [
    "ITINÉRAIRE",
    "EN DÉTAIL",
    "HÉBERGEMENT",
    "BUDGET",
    "NOS CONSEILS",
  ];

  const highlights = [
    "• Monastères bouddhistes himalayens",
    "• Pangong Lake et Tso Moriri",
    "• Nubra Valley et désert d’altitude",
    "• Col mythique Khardung La",
    "• Villages tibétains et culture ladakhie",
    "• Paysages parmi les plus spectaculaires du monde",
    "• Routes himalayennes légendaires",
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

  const reviews = [
    {
      author: "Fanny Cabe",
      text: `Superbe voyage dans le Kerala organisé par Le Passage en Inde.
Amandine et Vishnu nous ont accompagnés du début à la fin et nous nous sommes sentis pleinement confiants comme en famille.
Le guide et le chauffeur étaient tout aussi parfaits.
Nous n’hésiterons pas à les rappeler pour notre prochain voyage.
`,
      rating: 5
    },
    {
      author: "Marie Constans",
      text: `Un super séjour de 13 jours avec un groupe de 8 femmes. Que dis je, 9 femmes dont notre formidable guide Shabi, dynamique, toujours présente pour nous, à l'écoute de nos envies et à se plier en 4 pour nous.
Amandine a été le début de notre super séjour en Inde et la clé indispensable à notre départ.
L'organisation de ce séjour correspondait à nos idées de ce séjour.
Nous avons rencontrés que des personnes adorables, professionnelles, de confiance et disponible à toutes nos questions et inquiétudes diverses.
Cette expérience, ce voyage a était superbe sur tous les points.
Je recommande "le passage en Inde" les yeux fermés. 🙏`,
      rating: 5
    },
    {
      author: "helene Thiercelin",
      text: `15 jours merveilleusement préparés et guidés. Le passage en Inde a été très à l’écoute de nos attentes et a su créer ce voyage exceptionnel sur mesure. Nous avons été très heureuses du professionnalisme et du savoir de Vishnu 🙏`,
      rating: 5
    },
    {
      author: "Carole VIDAL",
      text: `J’ai fait appel au "Passage en Inde", une micro-agence de voyages, pour organiser un séjour hors des sentiers battus, et j’en suis absolument ravie !
Amandine a été d’un professionnalisme exemplaire : de très bons conseils, disponible, chaleureuse et toujours à l’écoute. Elle nous a accompagnées du début à la fin, ce qui a vraiment fait la différence.

Notre guide sur place, Rakesh a également été fantastique : bienveillant, attentionné, toujours prêt à répondre à nos attentes et à partager ses connaissances. Grâce à eux, nous avons vécu un voyage unique, authentique and perfectly organisé.

Pour un prochain voyage en Inde, je choisirai sans hésiter "Le Passage en Inde" à nouveau. Je recommande cette agence les yeux fermés !
`,
      rating: 5
    },
    {
      author: "Olivia RUIZ",
      text: "Après une visite du Rajasthan il y a deux ans (avec une autre agence), nous voulions explorer le Bengale occidental. Nous avions quelques envies que nous avons transmises à Amandine qui nous a concocté un voyage sur mesure (pour un prix très raisonnable). Nous étions 3 plus Rakesh notre génial guide. Tout a été parfait 🤩 Je recommande vivement 👍😊",
      rating: 5
    }
  ];

  const royalToursUrl = 'https://www.royaltours.fr/agences-de-voyage/12202-rodez/bdfeigihfiejdcdbdebc.htm';
  const agenceContactUrl = 'https://agence-de-voyages.agence.contact/le-passage-en-inde-private-limited-2902445.html';
  const getReviewUrl = (review, index) => {
    if (review.author === 'Carole VIDAL') return royalToursUrl;
    if (review.author === 'Olivia RUIZ') return agenceContactUrl;
    return index % 2 === 0 ? royalToursUrl : agenceContactUrl;
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "ITINÉRAIRE":
        return (
          <div className="pt-12 pb-16 px-6 md:px-12 lg:px-16 animate-fadeIn">
            <div className="mb-12">
              <h2 className="text-[#000] font-serif text-[28px] md:text-[32px] font-bold mb-6 italic leading-tight">
                Leh, Nubra Valley, Pangong Lake Tso Moriri — 15 Jours
              </h2>
              <p className="text-[#000] font-['Montserrat'] leading-[1.8] text-[15px] max-w-3xl">
                Des vallées désertiques du Ladakh aux lacs turquoise perchés à plus de 4 000 mètres d’altitude, ce grand voyage himalayen vous plonge au cœur de l’une des régions les plus fascinantes d’Asie.
              </p>
            </div>
            <div className="space-y-4 mb-16">
              {[
                "day 1 — Arrivée à Leh",
                "day 2 — Leh : Monastères et Culture Tibétaine",
                "day 3 — Vallée de l’Indus et Monastères",
                "day 4 — Leh → Sham Valley",
                "day 5 — Sham Valley → Lamayuru → Leh",
                "day 6 — Leh → Nubra Valley via Khardung La",
                "day 7 — Nubra Valley",
                "day 8 — Nubra Valley → Pangong Lake",
                "day 9 — Pangong Lake → Leh",
                "day 10 — Leh → Tso Moriri",
                "day 11 — Tso Moriri : Vie Nomade et Nature",
                "day 12 — Tso Moriri → Tso Kar → Leh",
                "day 13 — Leh : Derniers Instants Himalayens",
                "day 14 — Leh : Journée Libre ou Excursion",
                "day 15 — Départ"
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
            day: "01", title: "Arrivée à Leh", desc: (
              <div className="space-y-2">
                <p>• Accueil à l’aéroport.</p>
                <p>• Transfert vers l’hôtel.</p>
                <p>• Acclimatation à l’altitude.</p>
                <p>• Balade douce dans Leh.</p>
                <p className="mt-6 font-medium italic text-[#102d45] text-[16px]">Premiers instants dans l’Himalaya.</p>
              </div>
            )
          },
          {
            day: "02", title: "Leh : Monastères et Culture Tibétaine", desc: (
              <div className="space-y-2">
                <p>• Shanti Stupa.</p>
                <p>• Leh Palace.</p>
                <p>• Passage devant le Fort Rouge historique.</p>
                <p>• Marché tibétain.</p>
                <p>• Monastères Spituk et Sankar.</p>
                <p>• Culture tibétaine et prières bouddhistes.</p>
                <p className="mt-6 font-medium italic text-[#102d45] text-[16px]">Une immersion spirituelle dans le Ladakh.</p>
              </div>
            )
          },
          {
            day: "03", title: "Vallée de l’Indus et Monastères", desc: (
              <div className="space-y-2">
                <p>• Hemis Monastery.</p>
                <p>• Thiksey Monastery.</p>
                <p>• Shey Palace.</p>
                <p>• Stok Village.</p>
                <p>• Villages himalayens et rencontres locales.</p>
                <p className="mt-6 font-medium italic text-[#102d45] text-[16px]">Culture bouddhiste et paysages grandioses.</p>
              </div>
            )
          },
          {
            day: "04", title: "Leh → Sham Valley", desc: (
              <div className="space-y-2">
                <p>• Hall of Fame.</p>
                <p>• Magnetic Hill.</p>
                <p>• Confluence Indus et Zanskar.</p>
                <p>• Monastères Alchi et Likir.</p>
                <p>• Villages traditionnels.</p>
                <p className="mt-6 font-medium italic text-[#102d45] text-[16px]">Entre spiritualité et nature himalayenne.</p>
              </div>
            )
          },
          {
            day: "05", title: "Sham Valley → Lamayuru → Leh", desc: (
              <div className="space-y-2">
                <p>• Lamayuru Monastery.</p>
                <p>• Paysages lunaires du Ladakh.</p>
                <p>• Villages isolés.</p>
                <p>• Retour vers Leh.</p>
                <p className="mt-6 font-medium italic text-[#102d45] text-[16px]">Des paysages spectaculaires et mystiques.</p>
              </div>
            )
          },
          {
            day: "06", title: "Leh → Nubra Valley via Khardung La", desc: (
              <div className="space-y-2">
                <p>• Traversée du Khardung La.</p>
                <p>• Sommets enneigés.</p>
                <p>• Désert de Hunder.</p>
                <p>• Villages bouddhistes.</p>
                <p>• Coucher du soleil dans les dunes.</p>
                <p className="mt-6 font-medium italic text-[#102d45] text-[16px]">Une vallée unique entre désert et Himalaya.</p>
              </div>
            )
          },
          {
            day: "07", title: "Nubra Valley", desc: (
              <div className="space-y-2">
                <p>• Diskit Monastery.</p>
                <p>• Statue géante de Bouddha.</p>
                <p>• Chameaux bactriens.</p>
                <p>• Oasis himalayennes.</p>
                <p>• Rencontre avec habitants.</p>
                <p className="mt-6 font-medium italic text-[#102d45] text-[16px]">Culture tibétaine et paysages d’altitude.</p>
              </div>
            )
          },
          {
            day: "08", title: "Nubra Valley → Pangong Lake", desc: (
              <div className="space-y-2">
                <p>• Traversée des paysages spectaculaires.</p>
                <p>• Arrivée au Pangong Lake.</p>
                <p>• Eaux turquoise.</p>
                <p>• Coucher du soleil sur le lac.</p>
                <p className="mt-6 font-medium italic text-[#102d45] text-[16px]">Un des plus beaux paysages du Ladakh.</p>
              </div>
            )
          },
          {
            day: "09", title: "Pangong Lake → Leh", desc: (
              <div className="space-y-2">
                <p>• Lever du soleil sur le lac.</p>
                <p>• Retour vers Leh.</p>
                <p>• Cols himalayens.</p>
                <p>• Villages isolés.</p>
                <p>• Temps libre.</p>
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
            day: "11", title: "Tso Moriri : Vie Nomade et Nature", desc: (
              <div className="space-y-2">
                <p>• Rencontre avec les nomades Changpa.</p>
                <p>• Yaks et chèvres pashmina.</p>
                <p>• Observation des oiseaux.</p>
                <p>• Balade autour du lac.</p>
                <p className="mt-6 font-medium italic text-[#102d45] text-[16px]">Une immersion rare dans le Ladakh sauvage.</p>
              </div>
            )
          },
          {
            day: "12", title: "Tso Moriri → Tso Kar → Leh", desc: (
              <div className="space-y-2">
                <p>• Découverte du lac Tso Kar.</p>
                <p>• Paysages désertiques.</p>
                <p>• Faune sauvage himalayenne.</p>
                <p>• Villages reculés.</p>
                <p>• Retour vers Leh.</p>
                <p className="mt-6 font-medium italic text-[#102d45] text-[16px]">Routes mythiques et grands espaces himalayens.</p>
              </div>
            )
          },
          {
            day: "13", title: "Leh : Derniers Instants Himalayens", desc: (
              <div className="space-y-2">
                <p>• Marché tibétain.</p>
                <p>• Cafés himalayens.</p>
                <p>• Shopping artisanal.</p>
                <p>• Monastères.</p>
                <p>• Dîner d’adieu ladakhi.</p>
                <p className="mt-6 font-medium italic text-[#102d45] text-[16px]">Une dernière immersion dans la culture du Ladakh.</p>
              </div>
            )
          },
          {
            day: "14", title: "Leh : Journée Libre ou Excursion", desc: (
              <div className="space-y-2">
                <p>• Rafting sur l’Indus.</p>
                <p>• Randonnée légère.</p>
                <p>• Excursion supplémentaire.</p>
                <p>• Temps libre et détente.</p>
                <p className="mt-6 font-medium italic text-[#102d45] text-[16px]">Profiter pleinement des derniers paysages himalayens.</p>
              </div>
            )
          },
          {
            day: "15", title: "Départ", desc: (
              <div className="space-y-2">
                <p>• Transfert privé vers l’aéroport.</p>
                <p>• Assistance jusqu’au départ.</p>

                <p className="mt-6 font-medium italic text-[#102d45] text-[16px]">Fin de votre grand voyage himalayen.</p>
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
            <p className="text-gray-600 mb-10 leading-relaxed whitespace-pre-wrap">{dynamicContent?.accommodationText || "Nous avons sélectionné pour vous des établissements d'exception alliant charme architectural, confort moderne et hospitalité légendaire pour une immersion royale."}</p>
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
                <span className="text-3xl font-serif font-bold text-[#102d45]">1345€</span>
              </div>
              <p className="text-xs text-gray-400 italic">Prix indicatif basé sur une occupation double, variable selon la saison touristique et les disponibilités des hôtels.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div>
                <h4 className="font-bold text-[#102d45] mb-4 uppercase text-sm tracking-widest border-b border-[#b7772e] pb-2 inline-block">Le prix comprend</h4>
                <ul className="space-y-2 text-sm text-gray-600 italic">
                  {(dynamicContent?.priceIncludes ? dynamicContent.priceIncludes.split('\n') : [
                      "• L'hébergement de 14 nuits en chambre double de catégorie charme et campements de luxe",
                      "• Les petits-déjeuners gourmands",
                      "• Les transferts en véhicule privé type SUV de montagne avec chauffeur dévoué",
                      "• Toutes les visites, excursions et entrées de monastères mentionnées au programme",
                      "• Les permis d'accès spéciaux (Inner Line Permits) pour les zones réglementées"
                    ]).map((item, idx) => item.trim() ? <li key={idx}>{item}</li> : null)}
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-[#102d45] mb-4 uppercase text-sm tracking-widest border-b border-gray-200 pb-2 inline-block">Le prix ne comprend pas</h4>
                <ul className="space-y-2 text-sm text-gray-600 italic">
                  {(dynamicContent?.priceExcludes ? dynamicContent.priceExcludes.split('\n') : [
                      "• Les vols internationaux",
                      "• Les frais de visa d'entrée en Inde",
                      "• Les repas non mentionnés (déjeuners et dîners libres)",
                      "• Les pourboires d'usage pour le chauffeur et les guides"
                    ]).map((item, idx) => item.trim() ? <li key={idx}>{item}</li> : null)}
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
      

      <section className="relative w-full h-[320px] md:h-[650px] lg:h-[720px] overflow-hidden">
        <img src={dynamicContent?.heroImage || "/src/assets/image copy 21.png"} alt="Rajasthan et ses palais" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center w-full max-w-[1440px] mx-auto px-4 md:px-[40px]">
          <div className="max-w-[800px] mt-16 md:mt-0">
            <h1 className="font-serif text-[24px] md:text-[62px] lg:text-[76px] leading-[1.1] text-white mb-4 md:mb-8 drop-shadow-lg uppercase tracking-tight">
              Leh, Nubra Valley, Pangong Lake Tso Moriri — 15 Jours
            </h1>
            <div className="w-12 md:w-16 h-px bg-[#c58b32] mb-3 md:mb-6 mx-auto" />
            <p className="text-[10px] md:text-[16px] leading-relaxed text-white/90 max-w-[800px] mx-auto drop-shadow-md">
              Des vallées désertiques du Ladakh aux lacs turquoise perchés à plus de 4 000 mètres d’altitude, ce grand voyage himalayen vous plonge au cœur de l’une des régions les plus fascinantes d’Asie.
            </p>
          </div>
        </div>
      </section>

      <div className="relative z-30 mt-0 md:mt-12 pb-24 w-full max-w-[1440px] mx-auto px-0 md:px-[40px]">
        <div className="lg:flex lg:gap-8 items-start">
          <div className="flex-1 bg-white shadow-2xl rounded-none md:rounded-sm overflow-hidden min-h-[600px]">
            <div className="flex overflow-x-auto scrollbar-hide bg-[#fcfcfc] border-b border-gray-200">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 shrink-0 min-w-max px-4 md:px-0 py-4 text-[10px] md:text-[13px] font-bold tracking-widest transition-all duration-300 whitespace-nowrap ${activeTab === tab ? "text-[#b7772e] border-b-[3px] border-[#b7772e]" : "text-gray-400 hover:text-gray-600 border-r border-gray-100 last:border-r-0"}`}
                >
                  {tab}
                </button>
              ))}
            </div>
            {renderTabContent()}
          </div>

          <div className="mt-8 md:mt-12 lg:mt-0 w-full lg:w-[380px] shrink-0 space-y-8 px-4 md:px-0">
            <div className="hidden md:block bg-white border border-[#eadfce]/40 rounded-sm p-8 md:p-10 text-center shadow-[0_15px_45px_rgba(70,45,20,0.12)]">
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
                  <p className="text-[24px] font-bold text-[#102d45] whitespace-nowrap">15j / 14n</p>
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
                  <li key={index} className={`flex items-start gap-4 ${!showAllHighlights && index >= 3 ? 'hidden md:flex' : ''}`}>
                    <div className="mt-1 shrink-0"><svg className="w-5 h-5 text-gray-700" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" /></svg></div>
                    <span className="text-[15px] text-[#444] font-['Montserrat'] leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
              {highlights.length > 3 && (
                <div className="mt-8 flex justify-center md:hidden">
                  <button 
                    onClick={() => setShowAllHighlights(!showAllHighlights)}
                    className="flex flex-col items-center gap-1 text-[#b7772e] font-bold text-[11px] tracking-widest uppercase transition-all"
                  >
                    <span>{showAllHighlights ? "Voir Moins" : "Voir Plus"}</span>
                    <svg className={`w-5 h-5 transition-transform duration-300 ${showAllHighlights ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" /></svg>
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

      <section className="bg-white py-8 md:py-12 px-6 overflow-hidden">
        <div className="text-center h-[380px] md:h-[420px] flex flex-col justify-between items-center w-full max-w-[1440px] mx-auto px-[40px]">
          {/* <div className="pt-0 -mt-6 md:-mt-10 mb-8 flex flex-col items-center">
            <div className="w-[180px] md:w-[240px] h-16 md:h-24 flex justify-center items-center mx-auto">
              <img src={logo} alt="Indeora Logo" className="max-h-full w-auto object-contain" />
            </div>
          </div> */}
          <div className="w-full text-left mb-8">
            <h2 className="text-[#2d343e] font-serif text-[22px] md:text-[28px] italic opacity-90">
              Ils ont aimé voyager avec nous
            </h2>
            <div className="w-12 h-[1px] bg-[#A88B52] mt-2"></div>
          </div>


          <div className="relative w-full flex-grow flex items-center overflow-hidden py-4">
            <div className="flex animate-marquee-cards gap-8 whitespace-nowrap">
              {[...reviews, ...reviews, ...reviews].map((review, i) => (
                <a
                  key={i}
                  href={getReviewUrl(review, i)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-[350px] md:w-[550px] bg-[#fcfbf9] p-10 border border-[#A88B52]/10 rounded-sm shadow-sm whitespace-normal text-left cursor-pointer hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-xs">
                        <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="G" className="w-4 h-auto" />
                      </div>
                      <div className="flex text-[#A88B52] text-sm tracking-tighter">★★★★★</div>
                    </div>
                    <span className="text-[9px] font-bold text-[#2d343e]/30 uppercase tracking-widest">Google Review</span>
                  </div>
                  <p className="text-[#2d343e]/80 text-[14px] md:text-[16px] italic leading-relaxed mb-6 font-medium line-clamp-4">"{review.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-[1px] bg-[#A88B52]/40"></div>
                    <span className="text-[10px] font-bold tracking-[0.2em] text-[#2d343e] uppercase">{review.author}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center gap-4 pb-2">
            <a href="https://www.google.com/search?q=le+passage+en+inde+rodez" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-4 group">
              <div className="w-12 h-12 rounded-full border-2 border-[#A88B52] flex items-center justify-center p-1 group-hover:scale-110 transition-transform duration-300">
                <div className="w-full h-full rounded-full bg-white flex items-center justify-center shadow-sm overflow-hidden">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google Reviews" className="w-6 h-6" />
                </div>
              </div>
              <div className="flex items-center gap-2 -mt-2 group-hover:opacity-80 transition-opacity">
                <span className="text-[12px] md:text-[14px] font-bold text-[#2d343e]">5.0</span>
                <div className="flex text-[#f4b400] text-[10px] md:text-[12px]">★★★★★</div>
                <span className="text-[10px] md:text-[11px] font-medium text-[#2d343e]/60">41 reviews</span>
              </div>
            </a>
            <div className="text-center">
              <p className="text-[9px] font-bold tracking-[0.2em] text-[#2d343e] uppercase">Anciennement</p>
              <p className="text-[9px] font-medium tracking-[0.2em] text-[#2d343e]/40 uppercase">LE PASSAGE EN INDE</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 px-2 md:px-6 bg-[#f7f3f0]">
        <div className="text-center w-full max-w-[1440px] mx-auto px-0 md:px-[40px]">
          <h2 className="font-serif text-[28px] md:text-[42px] text-[#b7772e] mb-2 font-bold italic">Découvrez d'autres voyages en Inde</h2>
          <div className="flex justify-center mb-10 md:mb-16 opacity-70"><div className="w-48 md:w-64 h-[1.5px] bg-[#333]" style={{ clipPath: "polygon(0% 45%, 15% 55%, 30% 40%, 50% 60%, 70% 35%, 85% 50%, 100% 40%, 100% 60%, 85% 55%, 70% 65%, 50% 40%, 30% 60%, 15% 45%, 0% 55%)" }} /></div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
            {otherTrips.map((trip, index) => (
              <div key={index} className="group relative h-[280px] md:h-[450px] overflow-hidden rounded-sm shadow-xl cursor-pointer">
                <img src={trip.image} alt={trip.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-3 md:p-6 text-left flex flex-col items-start gap-1">
                  {trip.tag && <span className="bg-white text-black text-[7px] md:text-[10px] font-bold px-1.5 py-0.5 md:px-2 md:py-1 mb-1 md:mb-2 tracking-widest uppercase">{trip.tag}</span>}
                  <span className="text-white text-[8px] md:text-[11px] font-bold tracking-widest uppercase mb-0.5 md:mb-1 drop-shadow-md">{trip.duration}</span>
                  <h3 className="text-white font-serif text-[14px] md:text-[22px] font-bold leading-tight mb-2 md:mb-4 drop-shadow-lg">{trip.title}</h3>
                  <p className="text-white/90 text-[11px] md:text-[14px] font-medium mb-2 md:mb-4 drop-shadow-md">À partir de <span className="text-[13px] md:text-[18px] font-bold">{trip.price}</span></p>
                  <a href="#" className="text-white text-[9px] md:text-[12px] font-bold tracking-widest uppercase border-b border-white/40 hover:border-white transition-all">&gt; DÉCOUVRIR</a>
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
        @keyframes marqueeHorizontal {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-cards {
          animation: marqueeHorizontal 35s linear infinite;
        }
        .animate-marquee-cards:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default LIndeNordRajasthanPalais;
