import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const EspritIndeora = () => {
  const navigate = useNavigate();
  const [expandedCards, setExpandedCards] = useState([false, false, false, false]);

  const toggleCard = (index) => {
    const newStates = [...expandedCards];
    newStates[index] = !newStates[index];
    setExpandedCards(newStates);
  };

  const cards = [
    {
      title: "Où vous voulez",
      color: "#496344",
      icon: "/src/assets/image.png",
      text: "Des itinéraires imaginés selon vos inspirations, vos passions et votre rythme. Palais du Rajasthan, backwaters du Kerala, Himalaya, spiritualité, nature ou expériences locales : chaque voyage est entièrement personnalisé pour vous faire vivre une Inde qui vous ressemble."
    },
    {
      title: "Quand vous voulez",
      color: "#a34f2c",
      icon: "/src/assets/image copy.png",
      text: "Des itinéraires imaginés selon vos inspirations, vos passions et votre rythme. Palais du Rajasthan, backwaters du Kerala, Himalaya, spiritualité, nature ou expériences locales : chaque voyage est entièrement personnalisé pour vous faire vivre une Inde qui vous ressemble."
    },
    {
      title: "Comme vous aimez voyager",
      color: "#12264a",
      icon: "/src/assets/image copy 3.png",
      text: "Des itinéraires imaginés selon vos inspirations, vos passions et votre rythme. Palais du Rajasthan, backwaters du Kerala, Himalaya, spiritualité, nature ou expériences locales : chaque voyage est entièrement personnalisé pour vous faire vivre une Inde qui vous ressemble."
    },
    {
      title: "Une autre vision",
      color: "#496344",
      icon: "/src/assets/image copy 4.png",
      text: "Des itinéraires imaginés selon vos inspirations, vos passions et votre rythme. Palais du Rajasthan, backwaters du Kerala, Himalaya, spiritualité, nature ou expériences locales : chaque voyage est entièrement personnalisé pour vous faire vivre une Inde qui vous ressemble."
    }
  ];

  return (
    <section className="bg-[#fbfaf7] py-2 md:py-3 px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto text-center">

        {/* Top Decoration */}
        <div className="flex items-center justify-center gap-2 text-[#c59a5b] mb-0.5">
          <span className="w-6 h-[1px] bg-[#c59a5b]"></span>
          <span className="text-sm leading-none">❁</span>
          <span className="w-6 h-[1px] bg-[#c59a5b]"></span>
        </div>

        <h2 className="font-serif text-[#2b1414] text-[18px] md:text-[24px] leading-none mb-1">
          L’esprit Indeora
        </h2>

        <div className="flex items-center justify-center gap-2 text-[#c59a5b] mb-2">
          <span className="w-12 h-[1px] bg-[#c59a5b]"></span>
          <span className="text-xs">◇</span>
          <span className="w-12 h-[1px] bg-[#c59a5b]"></span>
        </div>

        <p className="text-[#161616] text-[11px] md:text-[13px] leading-snug mb-2.5 opacity-90">
          Le voyage sur mesure, pensé selon vos envies et <br />votre manière de découvrir l’Inde
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-4">
          {cards.map((card, idx) => (
            <div key={idx} className={`px-4 ${idx !== cards.length - 1 ? 'lg:border-r border-[#ded2bd]' : ''}`}>
              <div className="w-14 h-14 mx-auto mb-2 rounded-full bg-[#f4efe8] flex items-center justify-center overflow-hidden p-2">
                <img src={card.icon} alt={card.title} className={`w-full h-full object-contain scale-110 ${idx === 0 ? 'translate-x-1.5' : ''}`} />
              </div>

              <h3 className="font-serif text-[15px] mb-1.5" style={{ color: card.color }}>
                {card.title}
              </h3>

              <div className="flex items-center justify-center gap-2 mb-3 text-[#c59a5b]">
                <span className="w-10 h-[1px] bg-[#c59a5b]"></span>
                <span className="text-[6px]">◆</span>
                <span className="w-10 h-[1px] bg-[#c59a5b]"></span>
              </div>

              <p className="text-[#171717] text-[12px] leading-relaxed opacity-90 text-center">
                {expandedCards[idx] ? (
                  <span>
                    {card.text}
                    <button
                      onClick={() => toggleCard(idx)}
                      className="text-[#c59a5b] font-bold ml-1 hover:underline whitespace-nowrap"
                    >
                      [Voir moins]
                    </button>
                  </span>
                ) : (
                  <span>
                    {card.text.slice(0, 100)}
                    <button
                      onClick={() => toggleCard(idx)}
                      className="text-[#c59a5b] font-bold ml-1 hover:underline whitespace-nowrap"
                    >
                      ... Lire la suite
                    </button>
                  </span>
                )}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Button */}
        <div className="mt-2 flex items-center justify-center gap-3">
          <span className="hidden md:block w-8 h-[1px] bg-[#c59a5b]"></span>
          <span className="hidden md:block text-[#c59a5b] text-base">❧</span>

          <button
            onClick={() => navigate('/contact-rapide')}
            className="bg-[#a94f2d] text-white border-[1px] border-[#d8b08b] px-4 py-1.5 rounded-md uppercase tracking-tight text-[11px] md:text-[12px] font-semibold shadow-sm hover:bg-[#8e3f22] transition-all duration-300"
          >
            ❁ &nbsp; Faites imaginer votre voyage en Inde
          </button>

          <span className="hidden md:block text-[#c59a5b] text-base">❧</span>
          <span className="hidden md:block w-8 h-[1px] bg-[#c59a5b]"></span>
        </div>
      </div>
    </section>
  );
};

export default EspritIndeora;
