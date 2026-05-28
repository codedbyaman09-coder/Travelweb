import React, { useState, useEffect } from 'react';
import { Plus, Minus } from 'lucide-react';
import { apiList } from '../lib/api';

const FAQSection = ({ settings = {} }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const title = settings.title || "FAQ";
  const subtitle = settings.subtitle || "∞";
  const description = settings.description || "Voyage sur mesure en Inde";
  const extra_text = settings.extra_text || "Toutes les réponses à vos questions avec Indeora Voyages";
  
  const faqs = (settings.items !== undefined) ? settings.items.sort((a,b) => a.display_order - b.display_order) : [];

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
