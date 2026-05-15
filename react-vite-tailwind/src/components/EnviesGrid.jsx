import React from 'react';
import {
  Mountain,
  Map,
  Palmtree,
  Flower2,
  Heart,
  Users,
  Sparkles,
  Compass,
  Church,
  Leaf,
  Waves,
  Tent,
  Train,
  Trees,
  Building2,
  Landmark,
  Car,
  Route,
  ShieldCheck,
} from "lucide-react";

const EnviesGrid = () => {
  const menuData = [
    [
      ["Voyage sur mesure Inde", Compass],
      ["Circuit Inde du Nord", Mountain],
      ["Voyage Rajasthan sur mesure", Map],
      ["Séjour bien-être & Ayurveda", Flower2],
      ["Voyage de noces en Inde", Heart],
    ],
    [
      ["Voyage en famille en Inde", Users],
      ["Première fois en Inde", Sparkles],
      ["Voyage hors des sentiers battus", Compass],
      ["Voyage religieux en Inde", Church],
      ["Yoga & méditation en Inde", Leaf],
    ],
    [
      ["Circuit Inde du Sud", Waves],
      ["Voyage Kerala sur mesure", Palmtree],
      ["Combiné Nord & Sud", Route],
      ["Trek & aventure en Inde", Tent],
      ["Safari & nature en Inde", Trees],
    ],
    [
      ["Séjour plages en Inde", Waves],
      ["Circuit culturel en Inde", Landmark],
      ["Voyage luxe en Inde", Sparkles],
      ["Inde en train de luxe", Train],
      ["Road trip en Inde", Car],
    ],
    [
      ["Agences locales en Inde", Building2],
      ["Chauffeur privé en Inde", Car],
      ["Voyage responsable en Inde", Leaf],
      ["Quand partir en Inde ?", Compass],
      ["Visa & formalités Inde", ShieldCheck],
    ],
  ];

  return (
    <section className="w-full bg-[#f8f3ec] border-y border-[#e6dac9] py-3 px-6 overflow-hidden">
      <div className="max-w-[1700px] mx-auto">
        {/* TITLE */}
        <div className="flex items-center justify-center gap-4 mb-5">
          <div className="w-20 h-[1px] bg-[#d4b48a]" />
          <h2 className="uppercase tracking-[0.45em] text-[#b07a34] text-[11px] font-semibold whitespace-nowrap">
            TOUTES VOS ENVIES DE VOYAGE EN INDE
          </h2>
          <div className="w-20 h-[1px] bg-[#d4b48a]" />
        </div>

        {/* MENU */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {menuData.map((column, colIndex) => (
            <div
              key={colIndex}
              className="space-y-3 border-r border-[#eadfce] last:border-r-0 pr-4"
            >
              {column.map(([title, Icon], index) => (
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
                    {title} <span className="ml-1">›</span>
                  </p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EnviesGrid;
