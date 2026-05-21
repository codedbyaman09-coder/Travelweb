import React, { useState } from 'react';

const PourquoiVoyager = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="bg-[#f7f5f2] py-10 md:py-14 px-6">
      <div className="text-center w-full max-w-[1440px] mx-auto px-[40px]">
        <h2 className="text-[13px] md:text-[15px] tracking-[0.3em] font-bold text-[#2d343e] uppercase mb-10 md:mb-14">
          VOYAGER EN INDE
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
          {/* Service Sur Mesure */}
          <div className="flex flex-col items-center text-center">
            <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border border-[#C2A36B]/40 flex items-center justify-center mb-4">
              <svg className="w-7 h-7 text-[#C2A36B]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a6.759 6.759 0 010 .255c-.007.38.138.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 010-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
            </div>
            <h4 className="text-[10px] md:text-[11px] font-bold tracking-[0.15em] text-[#C2A36B] uppercase mb-2 italic">Voyage en Inde sur mesure</h4>
            <p className="text-[11px] md:text-[12px] text-[#2d343e]/70 leading-relaxed font-medium">Chaque voyage est conçu selon vos envies et votre personnalité.</p>
          </div>

          {/* Excellence & Raffinement */}
          <div className="flex flex-col items-center text-center">
            <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border border-[#C2A36B]/40 flex items-center justify-center mb-4">
              <svg className="w-7 h-7 text-[#C2A36B]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" /></svg>
            </div>
            <h4 className="text-[10px] md:text-[11px] font-bold tracking-[0.15em] text-[#C2A36B] uppercase mb-2 italic">Circuit Inde du Nord</h4>
            <p className="text-[11px] md:text-[12px] text-[#2d343e]/70 leading-relaxed font-medium">Nous sélectionnons pour vous le meilleur de l'hôtellerie, de la gastronomie et des expériences.</p>
          </div>

          {/* Expertise & Passion */}
          <div className="flex flex-col items-center text-center">
            <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border border-[#C2A36B]/40 flex items-center justify-center mb-4">
              <svg className="w-7 h-7 text-[#C2A36B]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" /></svg>
            </div>
            <h4 className="text-[10px] md:text-[11px] font-bold tracking-[0.15em] text-[#C2A36B] uppercase mb-2 italic">Voyage Rajasthan</h4>
            <p className="text-[11px] md:text-[12px] text-[#2d343e]/70 leading-relaxed font-medium">Notre équipe passionnée met son expertise du terrain à votre service.</p>
          </div>

          {/* Conciergerie 24/7 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border border-[#C2A36B]/40 flex items-center justify-center mb-4">
              <svg className="w-7 h-7 text-[#C2A36B]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" /></svg>
            </div>
            <h4 className="text-[10px] md:text-[11px] font-bold tracking-[0.15em] text-[#C2A36B] uppercase mb-2 italic">Agence locale francophone en Inde</h4>
            <p className="text-[11px] md:text-[12px] text-[#2d343e]/70 leading-relaxed font-medium">Un accompagnement dédié avant, pendant et après votre voyage.</p>
          </div>

          {/* Voyagez En Toute Sérénité */}
          <div className="flex flex-col items-center text-center">
            <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border border-[#C2A36B]/40 flex items-center justify-center mb-4">
              <svg className="w-7 h-7 text-[#C2A36B]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>
            </div>
            <h4 className="text-[10px] md:text-[11px] font-bold tracking-[0.15em] text-[#C2A36B] uppercase mb-2 italic">Voyage privé en Inde</h4>
            <p className="text-[11px] md:text-[12px] text-[#2d343e]/70 leading-relaxed font-medium">Nous veillons à chaque détail pour que vous puissiez voyager l'esprit libre.</p>
          </div>

          {/* Circuit Rajasthan 15 jours */}
          <div className="flex flex-col items-center text-center">
            <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border border-[#C2A36B]/40 flex items-center justify-center mb-4">
              <svg className="w-7 h-7 text-[#C2A36B]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>
            </div>
            <h4 className="text-[10px] md:text-[11px] font-bold tracking-[0.15em] text-[#C2A36B] uppercase mb-2 italic">Circuit Rajasthan 15 jours</h4>
            <p className="text-[11px] md:text-[12px] text-[#2d343e]/70 leading-relaxed font-medium">Nous veillons à chaque détail pour que vous puissiez voyager l'esprit libre.</p>
          </div>
        </div>
      </div>

      {showMore && (
        <div className="mt-10 md:mt-14 space-y-10 md:space-y-14">
          <div className="text-center w-full max-w-[1440px] mx-auto px-[40px]">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
              {/* Service Sur Mesure */}
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border border-[#C2A36B]/40 flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 text-[#C2A36B]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a6.759 6.759 0 010 .255c-.007.38.138.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 010-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <h4 className="text-[10px] md:text-[11px] font-bold tracking-[0.15em] text-[#C2A36B] uppercase mb-2 italic">Circuit Inde 2 semaines</h4>
                <p className="text-[11px] md:text-[12px] text-[#2d343e]/70 leading-relaxed font-medium">Chaque voyage est conçu selon vos envies et votre personnalité.</p>
              </div>

              {/* Excellence & Raffinement */}
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border border-[#C2A36B]/40 flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 text-[#C2A36B]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" /></svg>
                </div>
                <h4 className="text-[10px] md:text-[11px] font-bold tracking-[0.15em] text-[#C2A36B] uppercase mb-2 italic">Voyage Inde avec chauffeur privé</h4>
                <p className="text-[11px] md:text-[12px] text-[#2d343e]/70 leading-relaxed font-medium">Nous sélectionnons pour vous le meilleur de l'hôtellerie, de la gastronomie et des expériences.</p>
              </div>

              {/* Expertise & Passion */}
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border border-[#C2A36B]/40 flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 text-[#C2A36B]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" /></svg>
                </div>
                <h4 className="text-[10px] md:text-[11px] font-bold tracking-[0.15em] text-[#C2A36B] uppercase mb-2 italic">Voyage en Inde avis</h4>
                <p className="text-[11px] md:text-[12px] text-[#2d343e]/70 leading-relaxed font-medium">Notre équipe passionnée met son expertise du terrain à votre service.</p>
              </div>

              {/* Conciergerie 24/7 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border border-[#C2A36B]/40 flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 text-[#C2A36B]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" /></svg>
                </div>
                <h4 className="text-[10px] md:text-[11px] font-bold tracking-[0.15em] text-[#C2A36B] uppercase mb-2 italic">Meilleur circuit Inde</h4>
                <p className="text-[11px] md:text-[12px] text-[#2d343e]/70 leading-relaxed font-medium">Un accompagnement dédié avant, pendant et après votre voyage.</p>
              </div>

              {/* Voyagez En Toute Sérénité */}
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border border-[#C2A36B]/40 flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 text-[#C2A36B]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>
                </div>
                <h4 className="text-[10px] md:text-[11px] font-bold tracking-[0.15em] text-[#C2A36B] uppercase mb-2 italic">Circuit Triangle d’Or Inde</h4>
                <p className="text-[11px] md:text-[12px] text-[#2d343e]/70 leading-relaxed font-medium">Nous veillons à chaque détail pour que vous puissiez voyager l'esprit libre.</p>
              </div>

              {/* Circuit Rajasthan 15 jours */}
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border border-[#C2A36B]/40 flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 text-[#C2A36B]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>
                </div>
                <h4 className="text-[10px] md:text-[11px] font-bold tracking-[0.15em] text-[#C2A36B] uppercase mb-2 italic">Voyage Rajasthan et Kerala</h4>
                <p className="text-[11px] md:text-[12px] text-[#2d343e]/70 leading-relaxed font-medium">Nous veillons à chaque détail pour que vous puissiez voyager l'esprit libre.</p>
              </div>
            </div>
          </div>
          <div className="text-center w-full max-w-[1440px] mx-auto px-[40px]">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
              {/* Service Sur Mesure */}
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border border-[#C2A36B]/40 flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 text-[#C2A36B]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a6.759 6.759 0 010 .255c-.007.38.138.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 010-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <h4 className="text-[10px] md:text-[11px] font-bold tracking-[0.15em] text-[#C2A36B] uppercase mb-2 italic">Voyage spirituel en Inde</h4>
                <p className="text-[11px] md:text-[12px] text-[#2d343e]/70 leading-relaxed font-medium">Chaque voyage est conçu selon vos envies et votre personnalité.</p>
              </div>

              {/* Excellence & Raffinement */}
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border border-[#C2A36B]/40 flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 text-[#C2A36B]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" /></svg>
                </div>
                <h4 className="text-[10px] md:text-[11px] font-bold tracking-[0.15em] text-[#C2A36B] uppercase mb-2 italic">Circuit Inde du Sud</h4>
                <p className="text-[11px] md:text-[12px] text-[#2d343e]/70 leading-relaxed font-medium">Nous sélectionnons pour vous le meilleur de l'hôtellerie, de la gastronomie et des expériences.</p>
              </div>

              {/* Expertise & Passion */}
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border border-[#C2A36B]/40 flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 text-[#C2A36B]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" /></svg>
                </div>
                <h4 className="text-[10px] md:text-[11px] font-bold tracking-[0.15em] text-[#C2A36B] uppercase mb-2 italic">Voyage luxe Inde</h4>
                <p className="text-[11px] md:text-[12px] text-[#2d343e]/70 leading-relaxed font-medium">Notre équipe passionnée met son expertise du terrain à votre service.</p>
              </div>

              {/* Conciergerie 24/7 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border border-[#C2A36B]/40 flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 text-[#C2A36B]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" /></svg>
                </div>
                <h4 className="text-[10px] md:text-[11px] font-bold tracking-[0.15em] text-[#C2A36B] uppercase mb-2 italic">Voyage authentique en Inde</h4>
                <p className="text-[11px] md:text-[12px] text-[#2d343e]/70 leading-relaxed font-medium">Un accompagnement dédié avant, pendant et après votre voyage.</p>
              </div>

              {/* Voyagez En Toute Sérénité */}
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border border-[#C2A36B]/40 flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 text-[#C2A36B]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>
                </div>
                <h4 className="text-[10px] md:text-[11px] font-bold tracking-[0.15em] text-[#C2A36B] uppercase mb-2 italic">Agence spécialiste Inde</h4>
                <p className="text-[11px] md:text-[12px] text-[#2d343e]/70 leading-relaxed font-medium">Nous veillons à chaque détail pour que vous puissiez voyager l'esprit libre.</p>
              </div>

              {/* Circuit Rajasthan 15 jours */}
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border border-[#C2A36B]/40 flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 text-[#C2A36B]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>
                </div>
                <h4 className="text-[10px] md:text-[11px] font-bold tracking-[0.15em] text-[#C2A36B] uppercase mb-2 italic">Circuit Inde du Nord 15 jours</h4>
                <p className="text-[11px] md:text-[12px] text-[#2d343e]/70 leading-relaxed font-medium">Nous veillons à chaque détail pour que vous puissiez voyager l'esprit libre.</p>
              </div>
            </div>
          </div>
          <div className="text-center w-full max-w-[1440px] mx-auto px-[40px]">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
              {/* Service Sur Mesure */}
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border border-[#C2A36B]/40 flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 text-[#C2A36B]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a6.759 6.759 0 010 .255c-.007.38.138.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 010-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <h4 className="text-[10px] md:text-[11px] font-bold tracking-[0.15em] text-[#C2A36B] uppercase mb-2 italic">Voyage en famille en Inde</h4>
                <p className="text-[11px] md:text-[12px] text-[#2d343e]/70 leading-relaxed font-medium">Chaque voyage est conçu selon vos envies et votre personnalité.</p>
              </div>

              {/* Excellence & Raffinement */}
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border border-[#C2A36B]/40 flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 text-[#C2A36B]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" /></svg>
                </div>
                <h4 className="text-[10px] md:text-[11px] font-bold tracking-[0.15em] text-[#C2A36B] uppercase mb-2 italic">Voyage Inde pas cher</h4>
                <p className="text-[11px] md:text-[12px] text-[#2d343e]/70 leading-relaxed font-medium">Nous sélectionnons pour vous le meilleur de l'hôtellerie, de la gastronomie et des expériences.</p>
              </div>

              {/* Expertise & Passion */}
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border border-[#C2A36B]/40 flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 text-[#C2A36B]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" /></svg>
                </div>
                <h4 className="text-[10px] md:text-[11px] font-bold tracking-[0.15em] text-[#C2A36B] uppercase mb-2 italic">Agence de voyage en Inde</h4>
                <p className="text-[11px] md:text-[12px] text-[#2d343e]/70 leading-relaxed font-medium">Notre équipe passionnée met son expertise du terrain à votre service.</p>
              </div>

              {/* Conciergerie 24/7 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border border-[#C2A36B]/40 flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 text-[#C2A36B]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" /></svg>
                </div>
                <h4 className="text-[10px] md:text-[11px] font-bold tracking-[0.15em] text-[#C2A36B] uppercase mb-2 italic">Agence locale Rajasthan</h4>
                <p className="text-[11px] md:text-[12px] text-[#2d343e]/70 leading-relaxed font-medium">Un accompagnement dédié avant, pendant et après votre voyage.</p>
              </div>

              {/* Voyagez En Toute Sérénité */}
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border border-[#C2A36B]/40 flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 text-[#C2A36B]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>
                </div>
                <h4 className="text-[10px] md:text-[11px] font-bold tracking-[0.15em] text-[#C2A36B] uppercase mb-2 italic">Organiser un voyage en Inde
                </h4>
                <p className="text-[11px] md:text-[12px] text-[#2d343e]/70 leading-relaxed font-medium">Nous veillons à chaque détail pour que vous puissiez voyager l'esprit libre.</p>
              </div>

              {/* Circuit Rajasthan 15 jours */}
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border border-[#C2A36B]/40 flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 text-[#C2A36B]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>
                </div>
                <h4 className="text-[10px] md:text-[11px] font-bold tracking-[0.15em] text-[#C2A36B] uppercase mb-2 italic">Carnet de voyage Inde</h4>
                <p className="text-[11px] md:ext-[12px] text-[#2d343e]/70 leading-relaxed font-medium">Nous veillons à chaque détail pour que vous puissiez voyager l'esprit libre.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="text-center w-full max-w-[1440px] mx-auto px-[40px]">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8 mt-8">
          <div className="hidden lg:block lg:col-span-5"></div>
          <div className="col-span-2 sm:col-span-3 lg:col-span-1 flex justify-center">
            <button
              onClick={() => setShowMore(!showMore)}
              className="group relative flex items-center justify-start w-[45px] h-[45px] border-none rounded-full cursor-pointer overflow-hidden transition-all duration-300 shadow-[2px_2px_10px_rgba(0,0,0,0.1)] bg-[#C2A36B] hover:w-[135px] hover:rounded-[40px] active:translate-x-[2px] active:translate-y-[2px]"
            >
              <div className="w-full transition-all duration-300 flex items-center justify-center group-hover:w-[30%] group-hover:pl-4">
                <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" className="w-[17px] h-[17px]">
                  {showMore ? (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
                  )}
                </svg>
              </div>
              <div className="absolute right-0 w-0 opacity-0 text-white text-[11px] font-bold uppercase tracking-widest transition-all duration-300 group-hover:opacity-100 group-hover:w-[70%] group-hover:pr-[10px] whitespace-nowrap flex items-center">
                {showMore ? 'Read Less' : 'Read More'}
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PourquoiVoyager;
