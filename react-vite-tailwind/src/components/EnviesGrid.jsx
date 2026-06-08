import React, { useState, useEffect } from 'react';
import { apiUrl } from '../lib/api';
import * as LucideIcons from "lucide-react";
import { Link } from 'react-router-dom';

const EnviesGrid = ({ settings = {} }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const title = "TOUTES VOS ENVIES DE VOYAGE EN INDE";
  const items = (settings.items !== undefined) 
    ? settings.items 
    : [
        { title: "Voyage sur mesure Inde", icon: "Compass", link: "" },
        { title: "Circuit Inde du Nord", icon: "Mountain", link: "" },
        { title: "Voyage Rajasthan sur mesure", icon: "Map", link: "" },
        { title: "Séjour bien-être & Ayurveda", icon: "Flower2", link: "" },
        { title: "Voyage de noces en Inde", icon: "Heart", link: "" },
        { title: "Voyage en famille en Inde", icon: "Users", link: "" },
        { title: "Première fois en Inde", icon: "Sparkles", link: "" },
        { title: "Voyage hors des sentiers battus", icon: "Compass", link: "" },
        { title: "Voyage religieux en Inde", icon: "Church", link: "" },
        { title: "Yoga & méditation en Inde", icon: "Leaf", link: "" },
        { title: "Circuit Inde du Sud", icon: "Waves", link: "" },
        { title: "Voyage Kerala sur mesure", icon: "Palmtree", link: "" },
        { title: "Combiné Nord & Sud", icon: "Route", link: "" },
        { title: "Trek & aventure en Inde", icon: "Tent", link: "" },
        { title: "Safari & nature en Inde", icon: "Trees", link: "" },
        { title: "Séjour plages en Inde", icon: "Waves", link: "" },
        { title: "Circuit culturel en Inde", icon: "Landmark", link: "" },
        { title: "Voyage luxe en Inde", icon: "Sparkles", link: "" },
        { title: "Inde en train de luxe", icon: "Train", link: "" },
        { title: "Road trip en Inde", icon: "Car", link: "" },
        { title: "Agences locales en Inde", icon: "Building2", link: "" },
        { title: "Chauffeur privé en Inde", icon: "Car", link: "" },
        { title: "Voyage responsable en Inde", icon: "Leaf", link: "" },
        { title: "Quand partir en Inde ?", icon: "Compass", link: "" },
        { title: "Visa & formalités Inde", icon: "ShieldCheck", link: "" },
      ];

  // Divide into up to 5 columns
  const chunkArray = (array, numColumns) => {
    if (!array || array.length === 0) return [];
    const size = Math.ceil(array.length / numColumns);
    const result = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  };

  const columns = chunkArray(items, 5);

  return (
    <section className="w-full bg-[#f8f3ec] border-y border-[#e6dac9] py-10 md:py-24 px-4 md:px-[40px] overflow-hidden">
      <div className="w-full max-w-[1440px] mx-auto md:px-[40px]">
        {/* TITLE */}
        <div className="flex flex-row items-center justify-center gap-2 md:gap-4 mb-5 md:mb-8">
          <div className="w-8 md:w-20 h-[1px] bg-[#d4b48a] shrink-0" />
          <h2 className="uppercase tracking-[0.2em] md:tracking-[0.45em] text-[#b07a34] text-[9px] md:text-[11px] font-semibold text-center leading-snug">
            {title}
          </h2>
          <div className="w-8 md:w-20 h-[1px] bg-[#d4b48a] shrink-0" />
        </div>

        {/* MOBILE MENU */}
        <div className="md:hidden flex flex-col space-y-4 px-2">
          {items.slice(0, isExpanded ? items.length : 3).map((item, index) => {
            const Icon = LucideIcons[item.icon] || LucideIcons.Compass;
            const content = (
              <div
                key={index}
                className="flex items-center gap-3 text-[#7c5a31] hover:text-[#a56b25] transition-all duration-300 cursor-pointer group"
              >
                <Icon
                  size={16}
                  strokeWidth={1.7}
                  className="min-w-[16px] text-[#A88B52]"
                />
                <p className="text-[13px] leading-none tracking-[0.02em] group-hover:translate-x-1 transition-all duration-300">
                  {item.title} <span className="ml-1 opacity-50">›</span>
                </p>
              </div>
            );
            return item.link ? <Link key={index} to={item.link}>{content}</Link> : content;
          })}

          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-6 flex flex-col items-center justify-center gap-1.5 text-[#A88B52] mx-auto group hover:text-[#8e7646] transition-colors"
          >
            <span className="text-[10px] uppercase font-bold tracking-widest">{isExpanded ? 'Voir Moins' : 'Voir Plus'}</span>
            <svg 
              className={`w-5 h-5 transition-transform duration-500 ${isExpanded ? 'rotate-180' : ''}`} 
              fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-5 gap-6">
          {columns.map((column, colIndex) => (
            <div
              key={colIndex}
              className="space-y-3 border-r border-[#eadfce] last:border-r-0 pr-4"
            >
              {column.map((item, index) => {
                const Icon = LucideIcons[item.icon] || LucideIcons.Compass;
                const content = (
                  <div
                    key={index}
                    className="flex items-center gap-2 text-[#7c5a31] hover:text-[#a56b25] transition-all duration-300 cursor-pointer group"
                  >
                    <Icon
                      size={14}
                      strokeWidth={1.7}
                      className="min-w-[14px]"
                    />
                    <p className="text-[12px] leading-none tracking-[0.02em] group-hover:translate-x-1 transition-all duration-300">
                      {item.title} <span className="ml-1">›</span>
                    </p>
                  </div>
                );
                return item.link ? <Link key={index} to={item.link}>{content}</Link> : content;
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EnviesGrid;
