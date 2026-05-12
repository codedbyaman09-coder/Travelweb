import React from 'react';
import visionImg from '../assets/image copy 5.png';

const VisionSection = () => {
  return (
    <section className="bg-[#f3ede2] overflow-hidden border-y border-[#A88B52]/10">
      <div className="flex flex-col md:flex-row items-stretch h-auto md:h-[220px]">
        {/* Left Side: Image */}
        <div className="w-full md:w-[60%] h-[180px] md:h-full">
          <img 
            src={visionImg} 
            alt="Notre Vision du Voyage" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Side: Text */}
        <div className="w-full md:w-[40%] flex items-center px-6 md:px-12 py-6 md:py-0">
          <div className="max-w-xl">
            <p className="text-[8px] md:text-[9px] tracking-[0.3em] text-[#A88B52] font-bold uppercase mb-2">
              L'ART DU VOYAGE SUR MESURE EN INDE
            </p>
            <div className="relative mb-3">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-serif text-[#2d343e] italic leading-tight">
                Notre vision du voyage
              </h2>
              <div className="w-8 h-[1px] bg-[#A88B52] mt-2 opacity-30"></div>
            </div>
            <p className="text-[#2d343e]/70 text-[11px] md:text-[12px] leading-relaxed mb-4 max-w-lg">
              Voyager en Inde, c'est découvrir bien plus qu'une destination. 
              C'est ressentir une émotion, vivre des rencontres sincères 
              et s'ouvrir à une culture parmi les plus fascinantes au monde.
            </p>
            <a 
              href="/about" 
              className="text-[9px] tracking-[0.2em] font-bold text-[#A88B52] hover:text-[#2d343e] uppercase flex items-center gap-2 transition-all duration-300 group"
            >
              LIRE LA SUITE <span className="text-[12px] group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
