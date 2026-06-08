import React, { useState, useEffect } from 'react';
import { Plus, Minus } from 'lucide-react';
import { apiList } from '../lib/api';

const FAQSection = ({ settings = {} }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const title = settings.title || "FAQ";
  const subtitle = settings.subtitle || "∞";
  const description = "L’Inde en toute sérénité";
  const extra_text = "Conseils, informations pratiques et inspirations pour découvrir l’Inde sereinement avec Indeora Voyages.";

  const faqs = [
    {
      id: "faq-1",
      title: "Est-il prudent de voyager en Inde ?",
      question: "Est-il prudent de voyager en Inde ?",
      description: "Oui, l’Inde peut être une destination très agréable et rassurante lorsqu’elle est découverte avec une organisation sérieuse et un accompagnement local de confiance. Comme dans tout grand voyage, quelques précautions simples suffisent généralement à profiter pleinement de l’expérience.",
      answer: "Oui, l’Inde peut être une destination très agréable et rassurante lorsqu’elle est découverte avec une organisation sérieuse et un accompagnement local de confiance. Comme dans tout grand voyage, quelques précautions simples suffisent généralement à profiter pleinement de l’expérience."
    },
    {
      id: "faq-2",
      title: "Quel budget prévoir pour un voyage en Inde ?",
      question: "Quel budget prévoir pour un voyage en Inde ?",
      description: "L’Inde offre un excellent rapport qualité-prix pour des voyages privés et personnalisés. Le budget dépend principalement de la durée du séjour, des hôtels choisis et du style de voyage souhaité, du plus authentique au plus raffiné.",
      answer: "L’Inde offre un excellent rapport qualité-prix pour des voyages privés et personnalisés. Le budget dépend principalement de la durée du séjour, des hôtels choisis et du style de voyage souhaité, du plus authentique au plus raffiné."
    },
    {
      id: "faq-3",
      title: "Où aller pour un premier voyage en Inde ?",
      question: "Où aller pour un premier voyage en Inde ?",
      description: "Le Rajasthan reste l’une des plus belles introductions à l’Inde avec ses palais, villes colorées, traditions et atmosphère unique. Beaucoup de voyageurs choisissent également de combiner Delhi, Agra et Jaipur pour une première découverte équilibrée et inspirante.",
      answer: "Le Rajasthan reste l’une des plus belles introductions à l’Inde avec ses palais, villes colorées, traditions et atmosphère unique. Beaucoup de voyageurs choisissent également de combiner Delhi, Agra et Jaipur pour une première découverte équilibrée et inspirante."
    },
    {
      id: "faq-4",
      title: "Quelle est la meilleure période pour visiter l’Inde ?",
      question: "Quelle est la meilleure période pour visiter l’Inde ?",
      description: "La période entre octobre et mars est généralement idéale pour découvrir le Rajasthan, le Nord de l’Inde, Varanasi ou encore le Kerala dans les meilleures conditions climatiques.",
      answer: "La période entre octobre et mars est généralement idéale pour découvrir le Rajasthan, le Nord de l’Inde, Varanasi ou encore le Kerala dans les meilleures conditions climatiques."
    },
    {
      id: "faq-5",
      title: "Comment s’habiller en Inde ?",
      question: "Comment s’habiller en Inde ?",
      description: "Des vêtements légers, confortables et élégants sont généralement les plus adaptés. L’Inde est un pays très diversifié, mais des tenues simples et respectueuses permettent de voyager confortablement dans toutes les régions.",
      answer: "Des vêtements légers, confortables et élégants sont généralement les plus adaptés. L’Inde est un pays très diversifié, mais des tenues simples et respectueuses permettent de voyager confortablement dans toutes les régions."
    },
    {
      id: "faq-6",
      title: "Peut-on voyager en Inde avec des enfants ?",
      question: "Peut-on voyager en Inde avec des enfants ?",
      description: "Oui, l’Inde peut être une expérience merveilleuse à vivre en famille. Avec un itinéraire adapté, des hébergements confortables et un rythme agréable, le voyage devient souvent une aventure inoubliable pour petits et grands.",
      answer: "Oui, l’Inde peut être une expérience merveilleuse à vivre en famille. Avec un itinéraire adapté, des hébergements confortables et un rythme agréable, le voyage devient souvent une aventure inoubliable pour petits et grands."
    }
  ];
  return (
    <section className="bg-[#fcfaf7] py-4 md:py-6 px-[40px] overflow-hidden w-full">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-4">
          <h1 className="text-xl md:text-2xl font-bold text-[#b07a34] tracking-tight mb-0.5 whitespace-pre-line">
            {title}
          </h1>

          <div className="flex items-center justify-center gap-2 mb-1.5">
            <div className="w-12 h-[0.5px] bg-[#b07a34]/30" />
            <div className="text-[#b07a34] text-sm">
              <span className="relative top-[-1px]">{subtitle}</span>
            </div>
            <div className="w-12 h-[0.5px] bg-[#b07a34]/30" />
          </div>

          <h2 className="text-lg md:text-xl font-serif text-[#1a1a1a] mb-1 leading-tight whitespace-pre-line">
            {description}
          </h2>

          <p className="text-[10px] md:text-[11px] text-[#2d343e]/70 font-medium whitespace-pre-line">
            {extra_text}
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.length === 0 ? (
            <div className="text-center py-8 text-slate-400">Aucune FAQ trouvée.</div>
          ) : (
            faqs.map((faq, index) => (
              <div
                key={faq.id || index}
                className="bg-white border border-[#f0ede8] rounded-xl overflow-hidden shadow-sm transition-all duration-300"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-3 md:p-3.5 text-left group hover:bg-[#fcfaf7] transition-colors"
                >
                  <span className="text-[11px] md:text-[12px] text-[#2d343e]/80 font-medium leading-relaxed group-hover:text-[#2d343e] transition-colors">
                    {faq.title || faq.question}
                  </span>
                  <div className={`flex-shrink-0 ml-4 transition-transform duration-300 ${openIndex === index ? 'rotate-45' : ''}`}>
                    <Plus size={14} className="text-[#b07a34]" />
                  </div>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
                >
                  <div className="p-3 md:p-3.5 pt-0 text-[10px] md:text-[11px] leading-relaxed text-[#2d343e]/60 border-t border-[#f0ede8]/50 whitespace-pre-line">
                    {faq.description || faq.answer}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
