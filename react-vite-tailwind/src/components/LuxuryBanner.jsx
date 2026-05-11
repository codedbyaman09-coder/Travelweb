import React from 'react';

const LuxuryBanner = () => {
  return (
    <section className="relative min-h-[250px] py-10 md:py-8 flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=2000&q=80"
          alt="Luxury Interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between w-full gap-6 md:gap-0">
        <div className="max-w-xl text-center md:text-left">
          <h2 className="text-white text-2xl md:text-4xl lg:text-5xl font-serif italic mb-4 leading-tight">
            Redéfinir le Voyage de Luxe
          </h2>
          <p className="text-white/90 text-xs md:text-sm leading-relaxed mb-4 md:mb-6 max-w-lg">
            Indeora Voyages est le premier DMC indien et conseiller en voyages de luxe avec plus de 14 ans d'expérience. Contactez-nous dès aujourd'hui pour un devis.
          </p>
        </div>
        <div className="pt-2 md:pt-0">
          <button className="border-2 border-[#A88B52] text-[#A88B52] text-[9px] tracking-[0.3em] font-bold py-4 px-10 hover:bg-[#A88B52] hover:text-white transition-all duration-300 uppercase whitespace-nowrap">
            VIVRE LA PROMESSE INDEORA
          </button>
        </div>
      </div>
    </section>
  );
};

export default LuxuryBanner;
