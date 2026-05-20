import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: " pour un voyage sur mesure en Inde ?",
      answer: `Chez Indeora Voyages, chaque itinéraire est créé entièrement selon vos envies, votre rythme et votre manière de voyager. Notre agence franco-indienne basée en Inde vous accompagne avec une expertise locale, des chauffeurs privés expérimentés, des guides francophones et une sélection d’hôtels authentiques et confortables.

Nous concevons des voyages en Inde sur mesure loin des circuits standardisés : Rajasthan, Kerala, Inde du Sud, Himalaya, Ladakh, Varanasi ou expériences plus confidentielles. Notre objectif est de vous faire découvrir une Inde élégante, humaine et profondément authentique.`
    },
    {
      question: "Comment organisons-nous votre voyage personnalisé en Inde ?",
      answer: `La création de votre circuit en Inde commence par un échange simple autour de vos envies : durée du séjour, régions souhaitées, style d’hébergement, expériences recherchées et budget.

Notre équipe imagine ensuite un itinéraire sur mesure mêlant découvertes culturelles, rencontres locales, moments de détente et expériences uniques. Chaque détail est pensé avec soin : transports privés, hôtels de charme, guides francophones, conseils pratiques et assistance locale avant et pendant votre voyage.

Avec Indeora Voyages, vous profitez d’un accompagnement humain et personnalisé du premier contact jusqu’à votre retour.
`

    },
    {
      question: "Qu’est-ce qui rend un voyage avec Indeora Voyages unique ?",
      answer: `Voyager avec Indeora Voyages, c’est vivre l’Inde autrement. Nous privilégions les expériences sincères, les adresses authentiques et les itinéraires équilibrés pour permettre une immersion réelle dans la culture indienne.

Des palais du Rajasthan aux backwaters du Kerala, des villages traditionnels aux grandes villes historiques, nous créons des voyages mêlant émotion, confort, authenticité et liberté. Notre connaissance du terrain permet de proposer des expériences exclusives adaptées aux voyageurs francophones.
`
    },
    {
      question: "Quels types de voyages sur mesure en Inde proposons-nous ?",
      answer: `Nous organisons différents styles de voyages personnalisés en Inde :

Circuits privés au Rajasthan
Voyages culturels en Inde du Nord
Séjours au Kerala et en Inde du Sud
Voyages de noces et lunes de miel en Inde
Voyages spirituels et bien-être
Circuits avec chauffeur privé et guide francophone
Voyages famille et expériences locales
Séjours de luxe et hôtels de charme
Voyages hors des sentiers battus en Inde

Chaque itinéraire est entièrement modulable selon vos envies.

Pourquoi réserver un circuit en Inde avec une agence locale francophone ?

Faire appel à une agence locale francophone en Inde permet de bénéficier d’un accompagnement direct sur place, de meilleurs conseils et d’une organisation plus flexible.

Indeora Voyages combine une connaissance profonde de l’Inde avec une compréhension des attentes des voyageurs francophones. Cela garantit une communication fluide, une assistance rapide sur place et une expérience de voyage plus sereine et authentique.

`
    },
    {
      question: " L’Inde offre une infinité d’expériences uniques. Parmi les itinéraires les plus appréciés :",
      answer: `Le Rajasthan et le Taj Mahal pour un premier voyage en Inde
Le Kerala pour les paysages tropicaux et les backwaters
Le Ladakh et l’Himalaya pour les amateurs de montagne
Varanasi pour l’expérience spirituelle
L’Inde du Sud pour la culture, les temples et la douceur de vivre

Chez Indeora Voyages, nous adaptons chaque circuit selon votre style de voyage afin de créer une expérience vraiment personnelle et mémorable.`    },
  ];

  return (
    <section className="bg-[#fcfaf7] py-4 md:py-6 px-6 overflow-hidden">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-4">
          <h1 className="text-xl md:text-2xl font-bold text-[#b07a34] tracking-tight mb-0.5">
            FAQ
          </h1>

          <div className="flex items-center justify-center gap-2 mb-1.5">
            <div className="w-12 h-[0.5px] bg-[#b07a34]/30" />
            <div className="text-[#b07a34] text-sm">
              <span className="relative top-[-1px]">∞</span>
            </div>
            <div className="w-12 h-[0.5px] bg-[#b07a34]/30" />
          </div>

          <h2 className="text-lg md:text-xl font-serif text-[#1a1a1a] mb-1 leading-tight">
            Voyage sur mesure en Inde
          </h2>

          <p className="text-[10px] md:text-[11px] text-[#2d343e]/70 font-medium">
            Toutes les réponses à vos questions avec <span className="text-[#b07a34]">Indeora Voyages</span>
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-[#f0ede8] rounded-xl overflow-hidden shadow-sm transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-3 md:p-3.5 text-left group hover:bg-[#fcfaf7] transition-colors"
              >
                <span className="text-[11px] md:text-[12px] text-[#2d343e]/80 font-medium leading-relaxed group-hover:text-[#2d343e] transition-colors">
                  {faq.question}
                </span>
                <div className={`flex-shrink-0 ml-4 transition-transform duration-300 ${openIndex === index ? 'rotate-45' : ''}`}>
                  <Plus size={14} className="text-[#b07a34]" />
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
              >
                <div className="p-3 md:p-3.5 pt-0 text-[10px] md:text-[11px] leading-relaxed text-[#2d343e]/60 border-t border-[#f0ede8]/50">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
