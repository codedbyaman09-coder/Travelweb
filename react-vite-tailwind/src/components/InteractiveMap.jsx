import React from 'react';
import { Link } from 'react-router-dom';
import mapImg from '../assets/ChatGPT Image May 11, 2026, 11_05_10 PM.png';

const destinations = [
  {
    id: 'rajasthan',
    title: 'L’Inde du Nord : le Rajasthan et ses palais',
    subtitle: 'Des palais raffinés de Jaipur aux ruelles bleues de Jodhpur, le Rajasthan offre une immersion unique au cœur de .',
    desc: 'Villes historiques, forts majestueux, désert du Thar, culture vivante et hospitalité légendaire.',
    img: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=400&q=80',
    side: 'left'
  },
  {
    id: 'triangle-or',
    title: "LE TRIANGLE D’OR Delhi, Agra & Jaipur",
    subtitle: 'Des ruelles animées de Delhi aux palais du Rajasthan en passant par l’inoubliable Taj Mahal, le Triangle d’Or est une ',
    desc: "Les incontournables de l'Inde du Nord : Taj Mahal, palais des maharajas et marchés colorés.",
    img: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=400&q=80',
    side: 'left'
  },
  // {
  //   id: 'varanasi',
  //   title: 'La Vallée du Gange et Varanasi',
  //   subtitle: "L'âme spirituelle de l'Inde",
  //   desc: 'Rituels du Gange, temples sacrés, aurores mystiques et une spiritualité millénaire.',
  //   img: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=400&q=80',
  //   side: 'left'
  // },
  {
    id: 'himalaya',
    title: 'Le Ladakh et les contreforts himalayens ',
    subtitle: 'Terre de monastères, de sommets himalayens et de traditions tibétaines, le Ladakh révèle une facette spectaculaire ',
    desc: 'Monastères bouddhestes, vallées préservées, paysages à couper le souffle et treks inoubliables.',
    img: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=400&q=80',
    side: 'left'
  },
  {
    id: 'varanasi',
    title: 'La Vallée du Gange et Varanasi',
    subtitle: "Entre spiritualité, histoire et émotions intenses, la Vallée du Gange invite à découvrir l’âme de l’Inde. Le Taj Mahal, les ghats sacrés de Varanasi et les rituel",
    desc: 'Rituels du Gange, temples sacrés, aurores mystiques et une spiritualité millénaire.',
    img: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=400&q=80',
    side: 'right'
  },
  {
    id: 'kerala',
    title: 'L’Inde du Sud : Kerala et Tamil Nadu',
    subtitle: 'Entre temples majestueux, plantations de thé, backwaters paisibles et nature luxuriante, l’Inde du Sud dévoile une ',
    desc: 'Backwaters, plantations de thé, plages paradisiaques et Ayurveda.',
    img: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=400&q=80',
    side: 'right'
  },
  // {
  //   id: 'inde-sud',
  //   title: 'INDE DU SUD',
  //   subtitle: 'Temples, traditions & spiritualité',
  //   desc: 'Temples majestueux, culture dravidienne, cuisine raffinée et art traditionnel.',
  //   img: 'https://images.unsplash.com/photo-1582510003544-2d09566f030e?auto=format&fit=crop&w=400&q=80',
  //   side: 'right'
  // },
  // {
  //   id: 'goa',
  //   title: 'GOA & CÔTE OUEST',
  //   subtitle: 'Détente, plages & ambiance unique',
  //   desc: 'Plages dorées, héritage portugais, vie nocturne et douceur de vivre.',
  //   img: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=400&q=80',
  //   side: 'right'
  // },
  {
    id: 'inde-nord-est',
    title: 'Calcutta et l’Inde centrale',
    subtitle: 'Entre culture, spiritualité et histoire, Calcutta et l’Inde centrale offrent un voyage hors des sentiers battus au .',
    desc: 'Régions préservées, ethnies fascinantes, parcs nationaux et biodiversité exceptionnelle.',
    img: 'https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&w=400&q=80',
    side: 'right'
  }
];

const InteractiveMap = () => {
  const [hoveredDest, setHoveredDest] = React.useState(null);
  const leftDests = destinations.filter(d => d.side === 'left');
  const rightDests = destinations.filter(d => d.side === 'right');

  // Map coordinates for pulsing markers (percentage based)
  const markers = {
    rajasthan: { top: '30%', left: '28%' },       // Rajasthan / Jaipur side
    'triangle-or': { top: '25%', left: '35%' },   // Delhi - Agra - Jaipur
    himalaya: { top: '13%', left: '44%' },        // Himalaya / Ladakh
    kerala: { top: '79%', left: '42%' },          // Kerala
    varanasi: { top: '40%', left: '56%' },        // Varanasi / UP side
    'inde-sud': { top: '71%', left: '50%' },      // Tamil Nadu / South India
    goa: { top: '63%', left: '34%' },             // Goa / West Coast
    'inde-nord-est': { top: '28%', left: '73%' }  // North-East India    // Assam / North-East
  };

  return (
    <section className="bg-[#f3ede2] py-6 md:py-10 px-6 overflow-hidden relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6 md:mb-8">
          <p className="text-[10px] tracking-[0.4em] text-[#A88B52] font-bold uppercase mb-2">
            UNE AUTRE FAÇON DE VOYAGER EN INDE
          </p>
          <h2 className="text-xl md:text-3xl font-serif text-[#A88B52] mb-3">
            Explorez l’Inde autrement
          </h2>
          <p className="text-[#2d343e]/60 text-[12px] md:text-[13px] max-w-xl mx-auto leading-relaxed">
            Une terre de palais, de spiritualité, de couleurs et de rencontres humaines, où chaque voyage devient une expérience profondément inspirante.
          </p>
        </div>

        <div className="relative flex flex-col lg:flex-row items-center justify-between gap-4">
          {/* Left Column (Desktop Only) */}
          <div className="hidden lg:block w-[22%] space-y-5 z-10">
            {leftDests.map((dest) => (
              <div
                key={dest.id}
                className="flex gap-3 group cursor-pointer items-center transition-transform duration-300 hover:translate-x-1"
                onMouseEnter={() => setHoveredDest(dest.id)}
                onMouseLeave={() => setHoveredDest(null)}
              >
                <div className="w-20 h-20 shrink-0 overflow-hidden rounded-sm shadow-md ring-1 ring-black/5 group-hover:ring-[#A88B52]/30 transition-all">
                  <img src={dest.img} alt={dest.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-[13px] font-bold tracking-wider text-[#2d343e] mb-0.5 group-hover:text-[#A88B52] transition-colors">{dest.title}</h3>
                  <p className="text-[11px] font-bold text-[#A88B52]/80 group-hover:text-[#A88B52] mb-1 leading-tight transition-colors">{dest.subtitle}</p>
                  <Link to={`/destinations/${dest.id}`} className="text-[10px] font-bold tracking-widest text-[#A88B52] hover:text-[#2d343e] transition-colors flex items-center gap-1.5 group-hover:translate-x-1 duration-300">
                    IDÉES <span className="font-serif italic ml-1">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Center Map */}
          <div className="w-full lg:w-[48%] flex justify-center items-center relative py-2 group/map">
            <div className="relative w-full flex justify-center">
              <img
                src={mapImg}
                alt="Carte de l'Inde"
                className="max-w-[95%] md:max-w-[75%] h-auto object-contain drop-shadow-2xl transition-all duration-700"
                style={{ filter: hoveredDest ? 'sepia(20%) brightness(1.05)' : 'none' }}
              />

              {/* Pulsing Markers */}
              {Object.entries(markers).map(([id, pos]) => (
                <div
                  key={id}
                  className={`absolute w-4 h-4 md:w-6 md:h-6 transition-all duration-500 rounded-full flex items-center justify-center ${hoveredDest === id ? 'opacity-100 scale-150' : 'opacity-0 scale-0'
                    }`}
                  style={{ top: pos.top, left: pos.left }}
                >
                  <div className="absolute inset-0 bg-[#A88B52] rounded-full animate-ping opacity-75"></div>
                  <div className="relative w-2 h-2 md:w-3 md:h-3 bg-[#A88B52] rounded-full border border-white/50 shadow-lg"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column (Desktop Only) */}
          <div className="hidden lg:block w-[22%] space-y-5 z-10">
            {rightDests.map((dest) => (
              <div
                key={dest.id}
                className="flex gap-3 group cursor-pointer text-right flex-row-reverse items-center transition-transform duration-300 hover:-translate-x-1"
                onMouseEnter={() => setHoveredDest(dest.id)}
                onMouseLeave={() => setHoveredDest(null)}
              >
                <div className="w-20 h-20 shrink-0 overflow-hidden rounded-sm shadow-md ring-1 ring-black/5 group-hover:ring-[#A88B52]/30 transition-all">
                  <img src={dest.img} alt={dest.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="flex flex-col items-end">
                  <h3 className="text-[13px] font-bold tracking-wider text-[#2d343e] mb-0.5 group-hover:text-[#A88B52] transition-colors">{dest.title}</h3>
                  <p className="text-[11px] font-bold text-[#A88B52]/80 group-hover:text-[#A88B52] mb-1 leading-tight transition-colors">{dest.subtitle}</p>
                  <Link to={`/destinations/${dest.id}`} className="text-[10px] font-bold tracking-widest text-[#A88B52] hover:text-[#2d343e] transition-colors flex items-center gap-1.5 flex-row-reverse group-hover:-translate-x-1 duration-300">
                    IDÉES <span className="font-serif italic ml-1">←</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Carousel (Visible only on mobile) */}
          <div className="lg:hidden w-full mt-8 overflow-hidden">
            <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-4 pb-6 px-4">
              {destinations.map((dest) => (
                <div
                  key={dest.id}
                  className="min-w-[85vw] snap-center bg-white/40 backdrop-blur-sm p-4 flex gap-4 rounded-sm border border-[#A88B52]/10"
                  onClick={() => setHoveredDest(dest.id === hoveredDest ? null : dest.id)}
                >
                  <div className="w-24 h-32 shrink-0 overflow-hidden rounded-sm shadow-sm">
                    <img src={dest.img} alt={dest.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex flex-col justify-center flex-1 overflow-hidden">
                    <h3 className="text-[#A88B52] text-sm md:text-base font-serif italic leading-tight mb-2">
                      Voyage {dest.title}
                    </h3>
                    <p className="text-[11px] text-[#2d343e]/70 line-clamp-3 mb-3">
                      {dest.subtitle}
                    </p>
                    <Link to={`/destinations/${dest.id}`} className="text-[#A88B52] text-[11px] font-bold uppercase border-b border-[#A88B52] w-fit pb-0.5">
                      &gt; DÉCOUVRIR
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Carousel dots */}
            <div className="flex justify-center gap-2 -mt-2">
              {destinations.map((dest) => (
                <div
                  key={dest.id}
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${hoveredDest === dest.id ? 'bg-[#A88B52] w-3' : 'bg-[#A88B52]/30'}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Button */}
        <div className="mt-8 md:mt-16 text-center">
          <Link
            to="/destinations"
            className="inline-block bg-[#A88B52] hover:bg-[#8e7646] text-white text-[10px] md:text-[11px] font-bold py-3.5 px-10 md:px-14 rounded-sm transition-all duration-300 uppercase tracking-[0.2em] shadow-lg"
          >
            Découvrir toutes nos destinations
          </Link>
        </div>
      </div>
    </section>
  );
};

export default InteractiveMap;
