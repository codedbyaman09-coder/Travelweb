import React from 'react';

const ChevronSmall = () => (
  <span className="text-[#A88B52] ml-1 text-[10px] opacity-70">›</span>
);

const Icons = {
  Suitcase: () => (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-80">
      <rect width="16" height="10" x="4" y="7" rx="2"/><path d="M9 7V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v3"/>
    </svg>
  ),
  Users: () => (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-80">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  ),
  Landmark: () => (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-80">
      <line x1="3" x2="21" y1="22" y2="22"/><line x1="6" x2="6" y1="18" y2="11"/><line x1="10" x2="10" y1="18" y2="11"/><line x1="14" x2="14" y1="18" y2="11"/><line x1="18" x2="18" y1="18" y2="11"/><polygon points="12 2 20 7 4 7"/>
    </svg>
  ),
  Waves: () => (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-80">
      <path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/>
    </svg>
  ),
  MapPin: () => (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-80">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>
    </svg>
  ),
  Mountain: () => (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-80">
      <path d="m8 3 4 8 5-5 5 15H2L8 3z"/>
    </svg>
  ),
  BookOpen: () => (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-80">
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
    </svg>
  ),
  Palmtree: () => (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-80">
      <path d="M13 8c0-2.76-2.46-5-5.5-5S2 5.24 2 8h2c1.66 0 3 1.34 3 3v9"/><path d="M13 7.14A5.82 5.82 0 0 1 16.5 6c3.04 0 5.5 2.24 5.5 5h-3"/>
    </svg>
  ),
  Palette: () => (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-80">
      <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/>
    </svg>
  ),
  Car: () => (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-80">
      <rect width="16" height="9" x="4" y="9" rx="2"/><path d="M9 9V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v5"/><circle cx="7" cy="18" r="2"/><circle cx="17" cy="18" r="2"/>
    </svg>
  ),
  Star: () => (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-80">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
  ),
  Compass: () => (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-80">
      <circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>
    </svg>
  ),
  Layers: () => (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-80">
      <polygon points="12 2 2 7 12 12 22 7 12 2"/><polygon points="2 12 12 17 22 12"/>
    </svg>
  ),
  Gem: () => (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-80">
      <path d="M6 3h12l4 6-10 13L2 9Z"/><path d="M11 3 8 9l3 13m2-19 3 6-3 13"/>
    </svg>
  ),
  Leaf: () => (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-80">
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/>
    </svg>
  ),
  Heart: () => (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-80">
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
    </svg>
  ),
  Sparkles: () => (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-80">
      <path d="m12 3 1.912 5.813a2 2 0 0 0 1.275 1.275L21 12l-5.813 1.912a2 2 0 0 0-1.275 1.275L12 21l-1.912-5.813a2 2 0 0 0-1.275-1.275L3 12l5.813-1.912a2 2 0 0 0 1.275-1.275L12 3Z"/>
    </svg>
  ),
  Footprints: () => (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-80">
      <path d="M4 16v-2.3c0-1.2.6-2.3 1.7-3l2.8-1.8a2.4 2.4 0 0 1 3.3.7l1.4 2.1"/>
    </svg>
  ),
  Train: () => (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-80">
      <rect width="16" height="16" x="4" y="3" rx="2"/><path d="M4 11h16"/><path d="M12 3v8"/>
    </svg>
  ),
  Calendar: () => (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-80">
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/>
    </svg>
  ),
  Moon: () => (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-80">
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>
    </svg>
  ),
  PrayingHands: () => (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-80">
      <path d="m18 8-4-4-4 4"/><path d="M14 4v16"/><path d="M10 8v12"/><path d="M18 8v12"/>
    </svg>
  ),
  Tent: () => (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-80">
      <path d="M3.5 21 14 3l10.5 18"/><path d="M8.4 21 14 12l5.6 9"/>
    </svg>
  ),
  Route: () => (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-80">
      <circle cx="6" cy="19" r="3"/><path d="M9 19h8.5a3.5 3.5 0 1 0 0-7h-11a3.5 3.5 0 1 1 0-7H15"/>
    </svg>
  ),
  FileText: () => (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-80">
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
    </svg>
  ),
};

const EnviesVoyage = () => {
  const categories = [
    { name: "Voyage sur mesure Inde", icon: <Icons.Suitcase /> },
    { name: "Voyage en famille en Inde", icon: <Icons.Users /> },
    { name: "Circuit Inde du Sud", icon: <Icons.Landmark /> },
    { name: "Séjour plages en Inde", icon: <Icons.Waves /> },
    { name: "Agences locales en Inde", icon: <Icons.MapPin /> },
    { name: "Circuit Inde du Nord", icon: <Icons.Mountain /> },
    { name: "Première fois en Inde", icon: <Icons.BookOpen /> },
    { name: "Voyage Kerala sur mesure", icon: <Icons.Palmtree /> },
    { name: "Circuit culturel en Inde", icon: <Icons.Palette /> },
    { name: "Chauffeur privé en Inde", icon: <Icons.Car /> },
    { name: "Voyage Rajasthan sur mesure", icon: <Icons.Star /> },
    { name: "Voyage hors des sentiers battus", icon: <Icons.Compass /> },
    { name: "Combiné Nord & Sud", icon: <Icons.Layers /> },
    { name: "Voyage luxe en Inde", icon: <Icons.Gem /> },
    { name: "Voyage responsable en Inde", icon: <Icons.Leaf /> },
    { name: "Séjour bien-être & Ayurvéda", icon: <Icons.Heart /> },
    { name: "Voyage religieux en Inde", icon: <Icons.Sparkles /> },
    { name: "Trek & aventure en Inde", icon: <Icons.Footprints /> },
    { name: "Inde en train de luxe", icon: <Icons.Train /> },
    { name: "Quand partir en Inde ?", icon: <Icons.Calendar /> },
    { name: "Voyage de noces en Inde", icon: <Icons.Moon /> },
    { name: "Yoga & méditation en Inde", icon: <Icons.PrayingHands /> },
    { name: "Safari & nature en Inde", icon: <Icons.Tent /> },
    { name: "Road trip en Inde", icon: <Icons.Route /> },
    { name: "Visa & formalités Inde", icon: <Icons.FileText /> },
  ];

  return (
    <section className="bg-[#f3ede2] py-4 md:py-6 px-6 md:px-12 border-t border-b border-[#A88B52]/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-center gap-4 mb-4 md:mb-6">
          <div className="h-[1px] w-6 md:w-16 bg-[#A88B52]/20"></div>
          <h2 className="text-[9px] md:text-[10px] tracking-[0.4em] font-bold text-[#A88B52] uppercase text-center whitespace-nowrap">
            TOUTES VOS ENVIES DE VOYAGE EN INDE
          </h2>
          <div className="h-[1px] w-6 md:w-16 bg-[#A88B52]/20"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-2 gap-x-6 md:gap-x-10">
          {categories.map((cat, i) => (
            <a 
              key={i} 
              href="#" 
              className="flex items-center gap-2.5 group transition-all duration-300"
            >
              <span className="text-[#A88B52] shrink-0 opacity-70 group-hover:opacity-100 transition-opacity scale-90">
                {cat.icon}
              </span>
              <span className="text-[9.5px] md:text-[10px] font-medium text-[#2d343e]/85 group-hover:text-[#A88B52] transition-colors whitespace-nowrap">
                {cat.name}
              </span>
              <ChevronSmall />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EnviesVoyage;
