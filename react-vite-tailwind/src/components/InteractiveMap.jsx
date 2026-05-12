import React from 'react';
import { Link } from 'react-router-dom';
import mapImg from '../assets/ChatGPT Image May 11, 2026, 11_05_10 PM.png';

const destinations = [
  {
    id: 'rajasthan',
    title: 'RAJASTHAN',
    subtitle: 'Palais, désert et traditions royales',
    desc: 'Villes historiques, forts majestueux, désert du Thar, culture vivante et hospitalité légendaire.',
    img: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=400&q=80',
    side: 'left'
  },
  {
    id: 'triangle-or',
    title: "LE TRIANGLE D'OR",
    subtitle: 'Delhi, Agra & Jaipur',
    desc: "Les incontournables de l'Inde du Nord : Taj Mahal, palais des maharajas et marchés colorés.",
    img: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=400&q=80',
    side: 'left'
  },
  {
    id: 'varanasi',
    title: 'VARANASI',
    subtitle: "L'âme spirituelle de l'Inde",
    desc: 'Rituels du Gange, temples sacrés, aurores mystiques et une spiritualité millénaire.',
    img: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=400&q=80',
    side: 'left'
  },
  {
    id: 'himalaya',
    title: 'HIMALAYA & LADAKH',
    subtitle: 'Nature grandiose et sérénité',
    desc: 'Monastères bouddhestes, vallées préservées, paysages à couper le souffle et treks inoubliables.',
    img: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=400&q=80',
    side: 'left'
  },
  {
    id: 'kerala',
    title: 'KÉRALA',
    subtitle: 'Nature luxuriante & art de vivre',
    desc: 'Backwaters, plantations de thé, plages paradisiaques et Ayurveda.',
    img: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=400&q=80',
    side: 'right'
  },
  {
    id: 'inde-sud',
    title: 'INDE DU SUD',
    subtitle: 'Temples, traditions & spiritualité',
    desc: 'Temples majestueux, culture dravidienne, cuisine raffinée et art traditionnel.',
    img: 'https://images.unsplash.com/photo-1582510003544-2d09566f030e?auto=format&fit=crop&w=400&q=80',
    side: 'right'
  },
  {
    id: 'goa',
    title: 'GOA & CÔTE OUEST',
    subtitle: 'Détente, plages & ambiance unique',
    desc: 'Plages dorées, héritage portugais, vie nocturne et douceur de vivre.',
    img: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=400&q=80',
    side: 'right'
  },
  {
    id: 'inde-nord-est',
    title: 'INDE DU NORD-EST',
    subtitle: 'Nature sauvage & cultures tribales',
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
    'rajasthan': { top: '32%', left: '33%' },
    'triangle-or': { top: '27%', left: '42%' },
    'varanasi': { top: '33%', left: '55%' },
    'himalaya': { top: '12%', left: '48%' },
    'kerala': { top: '82%', left: '42%' },
    'inde-sud': { top: '84%', left: '50%' },
    'goa': { top: '65%', left: '37%' },
    'inde-nord-est': { top: '30%', left: '85%' }
  };

  return (
    <section className="bg-[#f3ede2] py-6 md:py-10 px-6 overflow-hidden relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6 md:mb-8">
          <p className="text-[10px] tracking-[0.4em] text-[#A88B52] font-bold uppercase mb-2">
            DES VOYAGES SUR MESURE, PARTOUT EN INDE
          </p>
          <h2 className="text-xl md:text-3xl font-serif text-[#A88B52] mb-3">
            L'INDE DANS TOUTE SA DIVERSITÉ
          </h2>
          <p className="text-[#2d343e]/60 text-[12px] md:text-[13px] max-w-xl mx-auto leading-relaxed">
            Des régions fascinantes, des cultures uniques et des expériences inoubliables.
          </p>
        </div>

        <div className="relative flex flex-col lg:flex-row items-center justify-between gap-4">
          {/* Left Column */}
          <div className="w-full lg:w-[22%] space-y-4 md:space-y-5 z-10">
            {leftDests.map((dest) => (
              <div 
                key={dest.id} 
                className="flex gap-3 group cursor-pointer items-center transition-transform duration-300 hover:translate-x-1"
                onMouseEnter={() => setHoveredDest(dest.id)}
                onMouseLeave={() => setHoveredDest(null)}
              >
                <div className="w-12 h-12 md:w-16 md:h-16 shrink-0 overflow-hidden rounded-sm shadow-md ring-1 ring-black/5 group-hover:ring-[#A88B52]/30 transition-all">
                  <img src={dest.img} alt={dest.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-[10px] font-bold tracking-wider text-[#2d343e] mb-0.5 group-hover:text-[#A88B52] transition-colors">{dest.title}</h3>
                  <p className="text-[9px] font-bold text-[#A88B52]/80 group-hover:text-[#A88B52] mb-1 leading-tight transition-colors">{dest.subtitle}</p>
                  <Link to={`/destinations/${dest.id}`} className="text-[8px] font-bold tracking-widest text-[#A88B52] hover:text-[#2d343e] transition-colors flex items-center gap-1.5 group-hover:translate-x-1 duration-300">
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
                className="max-w-[85%] md:max-w-[75%] h-auto object-contain drop-shadow-2xl transition-all duration-700"
                style={{ filter: hoveredDest ? 'sepia(20%) brightness(1.05)' : 'none' }}
              />
              
              {/* Pulsing Markers */}
              {Object.entries(markers).map(([id, pos]) => (
                <div
                  key={id}
                  className={`absolute w-3 h-3 md:w-4 md:h-4 transition-all duration-500 rounded-full flex items-center justify-center ${
                    hoveredDest === id ? 'opacity-100 scale-125' : 'opacity-0 scale-0'
                  }`}
                  style={{ top: pos.top, left: pos.left }}
                >
                  <div className="absolute inset-0 bg-[#A88B52] rounded-full animate-ping opacity-75"></div>
                  <div className="relative w-1.5 h-1.5 md:w-2 md:h-2 bg-[#A88B52] rounded-full border border-white/50 shadow-lg"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="w-full lg:w-[22%] space-y-4 md:space-y-5 z-10">
            {rightDests.map((dest) => (
              <div 
                key={dest.id} 
                className="flex gap-3 group cursor-pointer text-right lg:flex-row-reverse items-center transition-transform duration-300 hover:-translate-x-1"
                onMouseEnter={() => setHoveredDest(dest.id)}
                onMouseLeave={() => setHoveredDest(null)}
              >
                <div className="w-12 h-12 md:w-16 md:h-16 shrink-0 overflow-hidden rounded-sm shadow-md ring-1 ring-black/5 group-hover:ring-[#A88B52]/30 transition-all">
                  <img src={dest.img} alt={dest.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="flex flex-col lg:items-end">
                  <h3 className="text-[10px] font-bold tracking-wider text-[#2d343e] mb-0.5 group-hover:text-[#A88B52] transition-colors">{dest.title}</h3>
                  <p className="text-[9px] font-bold text-[#A88B52]/80 group-hover:text-[#A88B52] mb-1 leading-tight transition-colors">{dest.subtitle}</p>
                  <Link to={`/destinations/${dest.id}`} className="text-[8px] font-bold tracking-widest text-[#A88B52] hover:text-[#2d343e] transition-colors flex items-center gap-1.5 lg:flex-row-reverse group-hover:-translate-x-1 duration-300">
                    IDÉES <span className="font-serif italic mr-1">←</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Button */}
        <div className="mt-12 md:mt-16 text-center">
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
