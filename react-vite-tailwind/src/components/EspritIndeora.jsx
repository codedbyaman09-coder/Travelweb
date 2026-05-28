import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const EspritIndeora = ({ title, subtitle, items }) => {
  const navigate = useNavigate();
  const [expandedCards, setExpandedCards] = useState([false, false, false, false]);

  const toggleCard = (index) => {
    const newStates = [...expandedCards];
    newStates[index] = !newStates[index];
    setExpandedCards(newStates);
  };

  const displayCards = items !== undefined ? items.map(c => ({
    title: c.title,
    color: c.subtitle || '#496344',
    icon: c.image_url,
    text: c.description
  })) : [
    {
      title: "Où vous voulez",
      color: "#496344",
      icon: "/src/assets/image.png",
      text: "Des itinéraires imaginés selon vos inspirations, vos passions et votre rythme. Palais du Rajasthan, backwatersdu Kerala, Himalaya, spiritualité, nature ou expériences locales : chaque voyage est entièrement personnalisé pour vous faire vivre une Inde qui vous ressemble."
    },
    {
      title: "Quand vous voulez",
      color: "#a34f2c",
      icon: "/src/assets/image copy.png",
      text: "Avant, pendant et après votre séjour, notre équipe reste à vos côtés.  Conseiller dédié, assistance francophone, chauffeurs privés expérimentés et accompagnement local : voyager librement tout en étant parfaitement entouré."
    },
    {
      title: "Comme vous aimez voyager",
      color: "#12264a",
      icon: "/src/assets/image copy 3.png",
      text: "En couple, en famille, entre amis ou en solo. Road trip au Rajasthan, voyage en train à travers l’Inde, séjour immersif, hôtels de charme ou escapade plus confortable : chaque détail s’adapte à votre façon de voyager."
    },
    {
      title: "Une autre vision de l’Inde",
      color: "#496344",
      icon: "/src/assets/image copy 4.png",
      text: "Nous croyons qu’un beau voyage ne se résume pas à visiter des lieux. Il doit faire ressentir une émotion, créer des rencontres sincères et laisser des souvenirs profonds. C’est cette Inde plus humaine, élégante et authentique que nous aimons partager."
    }
  ];

  return (
    <section className="bg-[#fbfaf7] py-6 md:py-8 px-1 md:px-[40px] overflow-hidden w-full">
      <div className="text-center w-full max-w-[1440px] mx-auto md:px-[40px]">

        {/* Top Decoration */}
        <div className="flex items-center justify-center gap-2 text-[#c59a5b] mb-2">
          <span className="w-6 h-[1px] bg-[#c59a5b]"></span>
          <span className="text-sm leading-none">❁</span>
          <span className="w-6 h-[1px] bg-[#c59a5b]"></span>
        </div>

        <h2 className="font-serif text-[#2b1414] text-[16px] md:text-[24px] leading-none mb-3">
          {title || 'L’esprit Indeora'}
        </h2>

        <div className="flex items-center justify-center gap-2 text-[#c59a5b] mb-4">
          <span className="w-12 h-[1px] bg-[#c59a5b]"></span>
          <span className="text-xs">◇</span>
          <span className="w-12 h-[1px] bg-[#c59a5b]"></span>
        </div>

        <p className="text-[#161616] text-[10px] md:text-[13px] leading-snug mb-8 opacity-90">
          {subtitle || 'Le voyage sur mesure, pensé selon vos envies et votre manière de découvrir l’Inde'}
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-4 gap-x-1 md:gap-x-4">
          {displayCards.map((card, idx) => (
            <div key={idx} className={`px-1 md:px-6 lg:px-8 ${idx !== displayCards.length - 1 ? 'lg:border-r border-[#ded2bd]' : ''}`}>
              <div className="w-8 h-8 md:w-24 md:h-24 mx-auto mb-1.5 md:mb-4 rounded-full bg-[#f4efe8] flex items-center justify-center overflow-hidden p-1.5 md:p-4">
                <img src={card.icon} alt={card.title} className={`w-full h-full object-contain scale-110 ${idx === 0 ? 'translate-x-1.5' : ''}`} />
              </div>

              <h3 className="font-serif text-[8px] md:text-[15px] mb-1 leading-tight" style={{ color: card.color }}>
                {card.title}
              </h3>

              <div className="flex items-center justify-center gap-1 md:gap-2 mb-1.5 md:mb-3 text-[#c59a5b]">
                <span className="w-3 md:w-10 h-[1px] bg-[#c59a5b]"></span>
                <span className="text-[3px] md:text-[6px]">◆</span>
                <span className="w-3 md:w-10 h-[1px] bg-[#c59a5b]"></span>
              </div>

              <p className="text-[#171717] text-[6.5px] md:text-[12px] leading-relaxed opacity-90 text-center">
                {expandedCards[idx] ? (
                  <span>
                    {card.text}
                    <button
                      onClick={() => toggleCard(idx)}
                      className="text-[#c59a5b] font-bold ml-1 hover:underline whitespace-nowrap text-[6.5px] md:text-[12px]"
                    >
                      [Voir moins]
                    </button>
                  </span>
                ) : (
                  <span>
                    {card.text?.slice(0, 100)}
                    <button
                      onClick={() => toggleCard(idx)}
                      className="text-[#c59a5b] font-bold ml-1 hover:underline whitespace-nowrap text-[6.5px] md:text-[12px]"
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
        <div className="mt-20 mb-4 flex items-center justify-center gap-3">
          <span className="hidden md:block w-8 h-[1px] bg-[#c59a5b]"></span>
          <span className="hidden md:block text-[#c59a5b] text-base">❧</span>

          <button
            onClick={() => navigate('/contact-rapide')}
            className="bg-[#f2bd80] text-white border-[1px] border-[#d8b08b] px-4 py-1.5 rounded-md uppercase tracking-tight text-[11px] md:text-[12px] font-semibold shadow-sm hover:bg-[#8e3f22] transition-all duration-300"
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
