import React, { useState, useEffect } from 'react';
import { apiUrl } from '../lib/api';
import { Link } from 'react-router-dom';
import * as LucideIcons from 'lucide-react';
import namasteIcon from '../assets/ChatGPT Image May 14, 2026, 01_29_59 PM.png';

const defaultCol1 = [
  { title: "OCTOBRE À MARS", desc: "Climat agréable pour découvrir le Rajasthan, le Kerala, Delhi, Agra et Varanasi.", icon: "Sun" },
  { title: "AVRIL À JUILLET", desc: "Idéal pour le Ladakh, Rishikesh et les régions montagneuses spectaculaires.", icon: "Mountain" },
  { title: "JUILLET À OCTOBRE", desc: "Parfait pour Kolkata, l'Assam et les régions verdoyantes du Nord-Est.", icon: "CloudRain" },
  { title: "OCTOBRE À DÉCEMBRE", desc: "Ambiance magique avec les festivals et les célébrations du Rajasthan.", icon: "Sparkles" }
];

const defaultCol2 = [
  { title: "Formalités", desc: "Visa, passeport, documents essentiels.", icon: "ClipboardCheck" },
  { title: "Santé & Sécurité", desc: "Conseils pour un voyage serein.", icon: "ShieldCheck" },
  { title: "Argent & Budget", desc: "Monnaie, cartes et pourboires.", icon: "Banknote" },
  { title: "Langue & Culture", desc: "Clés culturelles et mots utiles.", icon: "Languages" },
  { title: "Sur place", desc: "Transports, internet, communications.", icon: "MapPin" }
];

const defaultCol3 = [
  { title: "Agence locale francophone", desc: "Conseils concrets en direct d'Inde.", icon: "Users" },
  { title: "Voyages sur mesure", desc: "Adapté à votre rythme et budget.", icon: "Settings2" },
  { title: "Circuits de confiance", desc: "Itinéraires réalistes et maîtrisés.", icon: "ShieldCheck" },
  { title: "Accompagnement complet", desc: "Assistance et réactivité constante.", icon: "Map" },
  { title: "Expériences authentiques", desc: "Rencontres et lieux préservés.", icon: "Star" }
];

const EnviesVoyage = () => {
  const [col1, setCol1] = useState(defaultCol1);
  const [col2, setCol2] = useState(defaultCol2);
  const [col3, setCol3] = useState(defaultCol3);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [res1, res2, res3] = await Promise.all([
          fetch(apiUrl('/content?type=home_envies_col1')),
          fetch(apiUrl('/content?type=home_envies_col2')),
          fetch(apiUrl('/content?type=home_envies_col3'))
        ]);
        
        const d1 = await res1.json();
        const d2 = await res2.json();
        const d3 = await res3.json();

        const processData = (data) => {
          if (!data || data.length === 0) return null;
          return data.filter(c => c.status === 'active')
            .sort((a,b) => a.display_order - b.display_order)
            .map(c => ({
              title: c.title, 
              desc: c.description || '', 
              icon: c.subtitle || 'Star'
            }));
        };

        const activeCol1 = processData(d1.data);
        const activeCol2 = processData(d2.data);
        const activeCol3 = processData(d3.data);

        if (activeCol1 && activeCol1.length > 0) setCol1(activeCol1);
        if (activeCol2 && activeCol2.length > 0) setCol2(activeCol2);
        if (activeCol3 && activeCol3.length > 0) setCol3(activeCol3);
      } catch(e) { 
        console.error("Error fetching envies cols", e); 
      }
    };
    fetchData();
  }, []);

  return (
    <section className="bg-[#f8f6f3] relative overflow-hidden py-10 md:py-16 px-[40px] w-full">
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 md:px-[40px]">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6 xl:gap-8">

          {/* Column 1: Saison Idéale */}
          <div className="rounded-[2px] flex flex-col h-full">
            <div className="w-20 h-20 md:w-40 md:h-40 overflow-hidden rounded-full relative group mx-auto mb-2 md:mb-4">
              <img
                src="src/assets/WhatsApp Image 2026-05-13 at 1.57.37 PM.jpeg"
                alt="Saison Idéale"
                className="w-full h-full object-contain hover:scale-110 transition-transform duration-700"
              />
            </div>
            <div className="flex flex-col items-center mb-1">
              <span className="text-[7px] md:text-[8px] tracking-[0.2em] md:tracking-[0.3em] font-bold text-[#C2A36B] uppercase mb-1 text-center leading-tight">SAISON IDÉALE</span>
              <h3 className="text-[13px] md:text-[20px] font-serif text-[#2d343e] text-center leading-tight">Quand partir en Inde ?</h3>
            </div>
            <div className="flex items-center justify-center gap-1 md:gap-2 mb-3 md:mb-6 text-[#C2A36B]">
              <span className="w-6 md:w-10 h-[1px] bg-[#C2A36B]"></span>
              <span className="text-[5px] md:text-[6px]">◆</span>
              <span className="w-6 md:w-10 h-[1px] bg-[#C2A36B]"></span>
            </div>
            
            <div className="px-1 md:px-4 pb-2 md:pb-4 flex-grow flex flex-col">
              <div className="space-y-2.5 md:space-y-3.5">
                {col1.map((item, i) => {
                  const Icon = LucideIcons[item.icon] || LucideIcons.Star;
                  return (
                    <div key={i} className="flex items-start gap-2 md:gap-3 group">
                      <div className="w-5 h-5 md:w-7 md:h-7 rounded bg-white/50 flex items-center justify-center flex-shrink-0 group-hover:bg-white transition-colors duration-300">
                        <Icon size={10} className="text-[#C2A36B] md:w-3.5 md:h-3.5" />
                      </div>
                      <div>
                        <h4 className="text-[8px] md:text-[10px] font-bold tracking-wider text-[#2d343e] uppercase">{item.title}</h4>
                        <p className="text-[9px] md:text-[11px] text-[#2d343e]/70 leading-snug">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-auto pt-2 md:pt-4 border-t border-[#d6cfc5]/50 flex flex-col justify-end">
                <p className="text-[9px] md:text-[11px] text-[#2d343e]/60 italic text-center mb-1.5 md:mb-4 leading-relaxed min-h-[56px] md:min-h-[48px] flex items-center justify-center">
                  Chaque saison révèle une Inde différente. Choisissons ensemble le moment idéal selon vos envies.
                </p>
                <div className="flex justify-center">
                  <Link to="/avant-de-partir" className="text-[8px] md:text-[10px] font-bold tracking-[0.1em] md:tracking-[0.2em] text-[#C2A36B] uppercase flex items-center gap-1 hover:translate-x-1 transition-transform">
                    EN SAVOIR PLUS <LucideIcons.ChevronRight size={10} className="md:w-3.5 md:h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Faut Savoir */}
          <div className="rounded-[2px] flex flex-col h-full">
            <div className="w-20 h-20 md:w-40 md:h-40 overflow-hidden rounded-full relative group mx-auto mb-2 md:mb-4">
              <img
                src="/src/assets/WhatsApp Image 2026-05-13 at 1.50.31 PM.jpeg"
                alt="Faut Savoir"
                className="w-full h-full object-contain hover:scale-110 transition-transform duration-700"
              />
            </div>
            <div className="flex flex-col items-center mb-1">
              <span className="text-[7px] md:text-[8px] tracking-[0.2em] md:tracking-[0.3em] font-bold text-[#C2A36B] uppercase mb-1 text-center leading-tight">FAUT SAVOIR</span>
              <h3 className="text-[13px] md:text-[20px] font-serif text-[#2d343e] text-center leading-tight">Tout ce qu'il faut savoir avant de partir.</h3>
            </div>
            <div className="flex items-center justify-center gap-1 md:gap-2 mb-3 md:mb-6 text-[#C2A36B]">
              <span className="w-6 md:w-10 h-[1px] bg-[#C2A36B]"></span>
              <span className="text-[5px] md:text-[6px]">◆</span>
              <span className="w-6 md:w-10 h-[1px] bg-[#C2A36B]"></span>
            </div>

            <div className="px-1 md:px-4 pb-2 md:pb-4 flex-grow flex flex-col">
              <div className="space-y-2.5 md:space-y-3.5">
                {col2.map((item, i) => {
                  const Icon = LucideIcons[item.icon] || LucideIcons.Star;
                  return (
                    <div key={i} className="flex items-center gap-2 md:gap-3 group">
                      <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-white/50 flex items-center justify-center flex-shrink-0 group-hover:bg-white transition-all duration-300">
                        <Icon size={10} className="text-[#C2A36B] md:w-3.5 md:h-3.5" />
                      </div>
                      <div>
                        <h4 className="text-[9px] md:text-[12px] font-bold text-[#2d343e]">{item.title}</h4>
                        <p className="text-[9px] md:text-[11px] text-[#2d343e]/70">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-auto pt-2 md:pt-4 border-t border-[#d6cfc5]/50 flex flex-col justify-end">
                <p className="text-[9px] md:text-[11px] text-[#2d343e]/60 italic text-center mb-1.5 md:mb-4 leading-relaxed min-h-[56px] md:min-h-[48px] flex items-center justify-center">
                  Des informations essentielles pour voyager sereinement et profiter pleinement de l'Inde.
                </p>
                <div className="flex justify-center">
                  <Link to="/avant-de-partir" className="text-[8px] md:text-[10px] font-bold tracking-[0.1em] md:tracking-[0.2em] text-[#C2A36B] uppercase flex items-center gap-1 hover:translate-x-1 transition-transform">
                    EN SAVOIR PLUS <LucideIcons.ChevronRight size={10} className="md:w-3.5 md:h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Column 3: Pourquoi Voyager */}
          <div className="hidden md:flex rounded-[2px] flex-col h-full col-span-1 mt-0 w-full">
            <div className="w-24 h-24 md:w-40 md:h-40 overflow-hidden rounded-full relative group mx-auto mb-2 md:mb-4">
              <img
                src="/src/assets/WhatsApp Image 2026-05-13 at 1.57.37 PM (3).jpeg"
                alt="Pourquoi Voyager"
                className="w-full h-full object-contain hover:scale-110 transition-transform duration-700"
              />
            </div>
            <div className="flex flex-col items-center mb-1">
              <span className="text-[7px] md:text-[8px] tracking-[0.2em] md:tracking-[0.3em] font-bold text-[#C2A36B] uppercase mb-1 text-center leading-tight">POURQUOI VOYAGER</span>
              <h3 className="text-[13px] md:text-[20px] font-serif text-[#2d343e] text-center leading-tight">Avec Indeora Voyages ?</h3>
            </div>
            <div className="flex items-center justify-center gap-1 md:gap-2 mb-3 md:mb-6 text-[#C2A36B]">
              <span className="w-6 md:w-10 h-[1px] bg-[#C2A36B]"></span>
              <span className="text-[5px] md:text-[6px]">◆</span>
              <span className="w-6 md:w-10 h-[1px] bg-[#C2A36B]"></span>
            </div>
            <div className="px-1 md:px-4 pb-2 md:pb-4 flex-grow flex flex-col">
              <div className="space-y-2.5 md:space-y-3.5 flex-grow">
                {col3.map((item, i) => {
                  const Icon = LucideIcons[item.icon] || LucideIcons.Star;
                  return (
                    <div key={i} className="flex items-center gap-2 md:gap-3 group">
                      <div className="w-6 h-6 md:w-8 h-8 rounded bg-[#C2A36B]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#C2A36B]/20 transition-all duration-300">
                        <Icon size={10} className="text-[#C2A36B] md:w-3.5 md:h-3.5" />
                      </div>
                      <div>
                        <h4 className="text-[9px] md:text-[12px] font-bold text-[#2d343e]">{item.title}</h4>
                        <p className="text-[9px] md:text-[11px] text-[#2d343e]/70">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-4 md:mt-8 pt-3 md:pt-4 border-t border-[#d6cfc5]/50">
                <p className="text-[9px] md:text-[11px] text-[#2d343e]/60 italic text-center mb-2 md:mb-4 leading-relaxed">
                  Parce qu’avec Indeora Voyages, chaque voyage devient une expérience authentique, humaine
                </p>
                <div className="flex justify-center">
                  <Link to="/contact-rapide" className="text-[8px] md:text-[10px] font-bold tracking-[0.1em] md:tracking-[0.2em] text-[#C2A36B] uppercase flex items-center gap-1 hover:translate-x-1 transition-transform">
                    EN SAVOIR PLUS <LucideIcons.ChevronRight size={10} className="md:w-3.5 md:h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Advice Bar */}
        <div className="mt-8 relative overflow-hidden rounded-[2px] py-2 md:py-3 px-6 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <img
            src="src/assets/ChatGPT Image May 14, 2026, 11_48_07 AM.png"
            alt="Background"
            className="absolute inset-0 w-full h-full object-cover z-0 brightness-[0.8]"
          />
          {/* Dark overlay to ensure text readability */}
          <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px] z-10"></div>

          <div className="relative z-20 flex items-center gap-6">
            <div className="w-10 h-10 rounded-full overflow-hidden border border-white/20 flex items-center justify-center flex-shrink-0">
              <img src={namasteIcon} alt="Advisor" className="w-full h-full object-cover" />
            </div>
            <div className="h-6 w-[1px] bg-white/20 hidden md:block"></div>
            <div>
              <h4 className="text-[13px] font-serif text-[#C2A36B] italic mb-0.5">Notre conseil</h4>
              <p className="text-[12px] text-white/90 leading-relaxed">
                L'Inde est vaste, vibrante et changeante. Un voyage bien préparé est la clé d'une expérience inoubliable.
              </p>
            </div>
          </div>
          <Link to="/demander-un-devis" className="relative z-20 text-[10px] font-bold tracking-[0.2em] text-white uppercase border-b border-[#C2A36B] pb-0.5 hover:text-[#C2A36B] transition-colors whitespace-nowrap">
            PARLEZ À UN EXPERT →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EnviesVoyage;
