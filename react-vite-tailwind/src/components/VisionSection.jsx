import React, { useState, useEffect } from 'react';
import visionImg from '../assets/image copy 5.png';
import { apiUrl } from '../lib/api';

const VisionSection = ({ settings = {} }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const visionSubtitle = settings.subtitle || "L'ART DU VOYAGE SUR MESURE EN INDE";
  const visionTitle = settings.title || "Notre vision du voyage";
  const visionShortDesc = settings.description || "Voyager en Inde, c'est découvrir bien plus qu'une destination. C'est ressentir une émotion, vivre des rencontres sincères et s'ouvrir à une culture parmi les plus fascinantes au monde.";
  const visionQuote = settings.extra_text || "\"Chez Indeora Voyages, nous croyons qu’un voyage en Inde ne se résume pas à une simple succession de visites ou de paysages. Voyager en Inde, c’est vivre une émotion, ressentir une atmosphère...\"";
  const visionImage = settings.image_url || visionImg;
  const buttonText = settings.button_text || "LIRE LA SUITE";
  const buttonLink = settings.button_link || "/about";

  const defaultParagraphs = [
    "Chez Indeora Voyages, nous croyons qu’un voyage en Inde ne se résume pas à une simple succession de visites ou de paysages. Voyager en Inde, c’est vivre une émotion, ressentir une atmosphère, découvrir une culture fascinante et se laisser transformer par l’intensité du pays.",
    "Notre vision du voyage repose sur une approche profondément humaine, immersive et personnalisée. Chaque itinéraire est imaginé comme une expérience unique, pensée selon votre rythme, vos envies et votre manière de ressentir le monde. Nous privilégions les rencontres sincères, les lieux authentiques et les expériences qui donnent du sens au voyage.",
    "Grâce à notre double culture franco-indienne, nous comprenons à la fois les attentes des voyageurs francophones et l’âme véritable de l’Inde. Cette sensibilité nous permet de créer des voyages élégants et équilibrés, mêlant découvertes incontournables, moments exclusifs et immersion dans une Inde plus intime, loin des itinéraires standardisés.",
    "Des palais majestueux du Rajasthan aux villages oubliés de l’Himalaya, des cérémonies spirituelles sur les rives du Gange aux paysages tropicaux du Kerala, chaque région révèle une facette différente de l’Inde. Notre rôle est de vous ouvrir les portes de cette diversité, avec authenticité, fluidité et attention au moindre detail.",
    "Nous accordons une importance particulière à la qualité des rencontres humaines, au choix des hébergements, à la richesse culturelle des expériences et au confort de votre voyage. Chauffeurs privés expérimentés, guides francophones passionnés, assistance avant, pendant et après le séjour : tout est pensé pour vous permettre de voyager sereinement et pleinement.",
    "Plus qu’un voyage organisé, nous créons des expériences qui marquent durablement les souvenirs. Car pour nous, découvrir l’Inde ne signifie pas seulement voir un pays — c’est apprendre à le ressentir, à le comprendre et à le vivre de l’intérieur."
  ];

  const visionParagraphs = settings.modal_text
    ? settings.modal_text.split('\n').filter(p => p.trim() !== '')
    : defaultParagraphs;

  return (
    <section className="bg-[#f3ede2] overflow-hidden border-y border-[#A88B52]/10 w-full">
      <div className="flex flex-col md:flex-row items-stretch h-auto md:h-[320px] w-full max-w-[1440px] mx-auto px-4 md:px-[40px] py-6 md:py-0">
        {/* Left Side: Text */}
        <div className="w-full md:w-[40%] flex items-center px-0 md:px-12 pb-8 md:pb-0">
          <div className="max-w-xl w-full">
            <p className="text-[8px] md:text-[9px] tracking-[0.3em] text-[#A88B52] font-bold uppercase mb-2">
              {visionSubtitle}
            </p>
            <div className="relative mb-3">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-serif text-[#2d343e] italic leading-tight whitespace-pre-line">
                {visionTitle}
              </h2>
              <div className="w-8 h-[1px] bg-[#A88B52] mt-2 opacity-30"></div>
            </div>
            <p className="text-[#2d343e]/70 text-[11px] md:text-[12px] leading-relaxed mb-6 md:mb-8 max-w-lg whitespace-pre-line">
              {visionShortDesc}
            </p>
            <a
              href={buttonLink}
              onClick={(e) => { e.preventDefault(); setIsModalOpen(true); }}
              className="text-[9px] tracking-[0.2em] font-bold text-[#A88B52] hover:text-[#2d343e] uppercase flex items-center gap-2 transition-all duration-300 group cursor-pointer mb-4 md:mb-8"
            >
              {buttonText} <span className="text-[12px] group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="w-full md:w-[60%] h-[200px] md:h-full">
          <img
            src={visionImage}
            alt={visionTitle}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Premium Vision Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-all duration-300"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="relative bg-[#fcf9f5] border-t-4 border-[#A88B52] max-w-2xl w-full rounded-sm shadow-[0_24px_54px_rgba(0,0,0,0.3)] p-8 md:p-12 animate-fadeIn overflow-y-auto max-h-[90vh] -translate-y-8 md:-translate-y-16 text-left"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-5 text-gray-400 hover:text-[#A88B52] transition-colors text-xl font-bold p-2"
              aria-label="Fermer"
            >
              ✕
            </button>

            <div className="text-center mb-8">
              <p className="text-[#A88B52] text-[10px] tracking-[0.35em] uppercase font-bold mb-3">
                {visionSubtitle}
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-[#2d343e] italic whitespace-pre-line">
                {visionTitle}
              </h2>
              <div className="w-24 h-[1px] bg-[#A88B52]/30 mx-auto mt-4" />
            </div>

            <div className="font-serif italic text-base md:text-lg leading-relaxed text-[#A88B52] mb-8 text-center px-2">
              {visionQuote}
            </div>

            <div className="space-y-6 text-sm md:text-base leading-relaxed text-[#2d343e]/90 font-medium">
              {visionParagraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            <div className="mt-10 text-center">
              <button
                onClick={() => setIsModalOpen(false)}
                className="bg-[#A88B52] text-white text-[9px] tracking-[0.3em] font-bold py-3.5 px-8 hover:bg-[#8d713c] transition uppercase"
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95) translateY(10px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </section>
  );
};

export default VisionSection;
