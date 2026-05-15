import React from 'react';
import { Link } from 'react-router-dom';
import {
  Sun,
  Mountain,
  CloudRain,
  Sparkles,
  ClipboardCheck,
  ShieldCheck,
  Banknote,
  Languages,
  MapPin,
  Users,
  Settings2,
  Map,
  Compass,
  Star,
  ChevronRight
} from 'lucide-react';

const EnviesVoyage = () => {
  return (
    <section className="bg-[#f8f6f3] relative overflow-hidden py-10 md:py-16 px-6">
      {/* Decorative Background Elements */}
      {/* <div className="absolute left-0 top-0 h-full w-[15%] opacity-10 pointer-events-none hidden md:block">
        <img 
          src="https://images.unsplash.com/photo-1548013146-72479768bbfd?q=80&w=1400&auto=format&fit=crop" 
          alt="Archway" 
          className="h-full object-cover"
        />
      </div>
      <div className="absolute right-0 top-0 h-full w-[20%] opacity-5 pointer-events-none hidden md:block">
        <img 
          src="https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=1400&auto=format&fit=crop" 
          alt="Taj Mahal" 
          className="h-full object-cover"
        />
      </div>
      <div className="absolute bottom-10 left-10 w-40 opacity-20 pointer-events-none hidden lg:block">
        <img 
          src="https://images.unsplash.com/photo-1599307737119-216997637855?q=80&w=1400&auto=format&fit=crop" 
          alt="Lotus" 
          className="w-full"
        />
      </div> */}

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 xl:gap-8">

          {/* Column 1: Saison Idéale */}
          <div className="rounded-[2px] flex flex-col h-full">
            <div className="w-40 h-40 overflow-hidden rounded-full relative group mx-auto">
              <img
                src="src\assets\WhatsApp Image 2026-05-13 at 1.57.37 PM.jpeg"
                alt="Faut Savoir"
                className="w-full h-full object-contain hover:scale-110 transition-transform duration-700"
              />
            </div>
            <div className="p-4 flex-grow flex flex-col">
              <div className="flex flex-col items-center mb-4">
                <span className="text-[8px] tracking-[0.3em] font-bold text-[#C2A36B] uppercase mb-1"> SAISON IDÉALE</span>
                <h3 className="text-[20px] font-serif text-[#2d343e] text-center leading-tight">Quand partir en Inde ?</h3>
              </div>

              <div className="space-y-3.5 flex-grow">
                <div className="flex items-start gap-3 group">
                  <div className="w-7 h-7 rounded-lg bg-white/50 flex items-center justify-center flex-shrink-0 group-hover:bg-white transition-colors duration-300">
                    <Sun size={14} className="text-[#C2A36B]" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold tracking-wider text-[#2d343e] uppercase">OCTOBRE À MARS</h4>
                    <p className="text-[11px] text-[#2d343e]/70 leading-snug">Climat agréable pour découvrir le Rajasthan, le Kerala, Delhi, Agra et Varanasi.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 group">
                  <div className="w-7 h-7 rounded-lg bg-white/50 flex items-center justify-center flex-shrink-0 group-hover:bg-white transition-colors duration-300">
                    <Mountain size={14} className="text-[#C2A36B]" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold tracking-wider text-[#2d343e] uppercase">AVRIL À JUILLET</h4>
                    <p className="text-[11px] text-[#2d343e]/70 leading-snug">Idéal pour le Ladakh, Rishikesh et les régions montagneuses spectaculaires.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 group">
                  <div className="w-7 h-7 rounded-lg bg-white/50 flex items-center justify-center flex-shrink-0 group-hover:bg-white transition-colors duration-300">
                    <CloudRain size={14} className="text-[#C2A36B]" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold tracking-wider text-[#2d343e] uppercase">JUILLET À OCTOBRE</h4>
                    <p className="text-[11px] text-[#2d343e]/70 leading-snug">Parfait pour Kolkata, l'Assam et les régions verdoyantes du Nord-Est.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 group">
                  <div className="w-7 h-7 rounded-lg bg-white/50 flex items-center justify-center flex-shrink-0 group-hover:bg-white transition-colors duration-300">
                    <Sparkles size={14} className="text-[#C2A36B]" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold tracking-wider text-[#2d343e] uppercase">OCTOBRE À DÉCEMBRE</h4>
                    <p className="text-[11px] text-[#2d343e]/70 leading-snug">Ambiance magique avec les festivals et les célébrations du Rajasthan.</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-[#d6cfc5]/50">
                <p className="text-[11px] text-[#2d343e]/60 italic text-center mb-4 px-4 leading-relaxed">
                  Chaque saison révèle une Inde différente. Choisissons ensemble le moment idéal selon vos envies.
                </p>
                <div className="flex justify-center">
                  <Link to="/testing" className="text-[10px] font-bold tracking-[0.2em] text-[#C2A36B] uppercase flex items-center gap-2 hover:translate-x-2 transition-transform">
                    EN SAVOIR PLUS <ChevronRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Faut Savoir */}
          <div className="rounded-[2px] flex flex-col h-full">
            <div className="w-40 h-40 overflow-hidden rounded-full relative group mx-auto">
              <img
                src="/src/assets/WhatsApp Image 2026-05-13 at 1.50.31 PM.jpeg"
                alt="Faut Savoir"
                className="w-full h-full object-contain hover:scale-110 transition-transform duration-700"
              />
            </div>
            <div className="p-4 flex-grow flex flex-col">
              <div className="flex flex-col items-center mb-4">
                <span className="text-[8px] tracking-[0.3em] font-bold text-[#C2A36B] uppercase mb-1"> FAUT SAVOIR</span>
                <h3 className="text-[20px] font-serif text-[#2d343e] text-center leading-tight">Tout ce qu'il faut savoir avant de partir.</h3>
              </div>

              <div className="space-y-3.5 flex-grow">
                <div className="flex items-center gap-3 group">
                  <div className="w-8 h-8 rounded-full bg-white/50 flex items-center justify-center flex-shrink-0 group-hover:bg-white transition-all duration-300">
                    <ClipboardCheck size={14} className="text-[#C2A36B]" />
                  </div>
                  <div>
                    <h4 className="text-[12px] font-bold text-[#2d343e]">Formalités</h4>
                    <p className="text-[11px] text-[#2d343e]/70">Visa, passeport, documents essentiels.</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 group">
                  <div className="w-8 h-8 rounded-full bg-white/50 flex items-center justify-center flex-shrink-0 group-hover:bg-white transition-all duration-300">
                    <ShieldCheck size={14} className="text-[#C2A36B]" />
                  </div>
                  <div>
                    <h4 className="text-[12px] font-bold text-[#2d343e]">Santé & Sécurité</h4>
                    <p className="text-[11px] text-[#2d343e]/70">Conseils pour un voyage serein.</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 group">
                  <div className="w-8 h-8 rounded-full bg-white/50 flex items-center justify-center flex-shrink-0 group-hover:bg-white transition-all duration-300">
                    <Banknote size={14} className="text-[#C2A36B]" />
                  </div>
                  <div>
                    <h4 className="text-[12px] font-bold text-[#2d343e]">Argent & Budget</h4>
                    <p className="text-[11px] text-[#2d343e]/70">Monnaie, cartes et pourboires.</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 group">
                  <div className="w-8 h-8 rounded-full bg-white/50 flex items-center justify-center flex-shrink-0 group-hover:bg-white transition-all duration-300">
                    <Languages size={14} className="text-[#C2A36B]" />
                  </div>
                  <div>
                    <h4 className="text-[12px] font-bold text-[#2d343e]">Langue & Culture</h4>
                    <p className="text-[11px] text-[#2d343e]/70">Clés culturelles et mots utiles.</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 group">
                  <div className="w-8 h-8 rounded-full bg-white/50 flex items-center justify-center flex-shrink-0 group-hover:bg-white transition-all duration-300">
                    <MapPin size={14} className="text-[#C2A36B]" />
                  </div>
                  <div>
                    <h4 className="text-[12px] font-bold text-[#2d343e]">Sur place</h4>
                    <p className="text-[11px] text-[#2d343e]/70">Transports, internet, communications.</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-[#d6cfc5]/50">
                <p className="text-[11px] text-[#2d343e]/60 italic text-center mb-4 px-4 leading-relaxed">
                  Des informations essentielles pour voyager sereinement et profiter pleinement de l'Inde.
                </p>
                <div className="flex justify-center">
                  <Link to="/testing" className="text-[10px] font-bold tracking-[0.2em] text-[#C2A36B] uppercase flex items-center gap-2 hover:translate-x-2 transition-transform">
                    EN SAVOIR PLUS <ChevronRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Column 3: Pourquoi Voyager */}
          <div className="rounded-[2px] flex flex-col h-full">
            <div className="w-40 h-40 overflow-hidden rounded-full relative group mx-auto">
              <img
                src="/src/assets/WhatsApp Image 2026-05-13 at 1.57.37 PM (3).jpeg"
                alt="Pourquoi Voyager"
                className="w-full h-full object-contain hover:scale-110 transition-transform duration-700"
              />
            </div>
            <div className="p-4 flex-grow flex flex-col">
              <div className="flex flex-col items-center mb-4">
                <span className="text-[8px] tracking-[0.3em] font-bold text-[#C2A36B] uppercase mb-1"> POURQUOI VOYAGER</span>
                <h3 className="text-[20px] font-serif text-[#2d343e] text-center leading-tight">Avec Indeora Voyages ?</h3>
              </div>

              <div className="space-y-3.5 flex-grow">
                <div className="flex items-center gap-3 group">
                  <div className="w-8 h-8 rounded bg-[#C2A36B]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#C2A36B]/20 transition-all duration-300">
                    <Users size={14} className="text-[#C2A36B]" />
                  </div>
                  <div>
                    <h4 className="text-[12px] font-bold text-[#2d343e]">Agence locale francophone</h4>
                    <p className="text-[11px] text-[#2d343e]/70">Conseils concrets en direct d'Inde.</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 group">
                  <div className="w-8 h-8 rounded bg-[#C2A36B]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#C2A36B]/20 transition-all duration-300">
                    <Settings2 size={14} className="text-[#C2A36B]" />
                  </div>
                  <div>
                    <h4 className="text-[12px] font-bold text-[#2d343e]">Voyages sur mesure</h4>
                    <p className="text-[11px] text-[#2d343e]/70">Adapté à votre rythme et budget.</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 group">
                  <div className="w-8 h-8 rounded bg-[#C2A36B]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#C2A36B]/20 transition-all duration-300">
                    <ShieldCheck size={14} className="text-[#C2A36B]" />
                  </div>
                  <div>
                    <h4 className="text-[12px] font-bold text-[#2d343e]">Circuits de confiance</h4>
                    <p className="text-[11px] text-[#2d343e]/70">Itinéraires réalistes et maîtrisés.</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 group">
                  <div className="w-8 h-8 rounded bg-[#C2A36B]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#C2A36B]/20 transition-all duration-300">
                    <Map size={14} className="text-[#C2A36B]" />
                  </div>
                  <div>
                    <h4 className="text-[12px] font-bold text-[#2d343e]">Accompagnement complet</h4>
                    <p className="text-[11px] text-[#2d343e]/70">Assistance et réactivité constante.</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 group">
                  <div className="w-8 h-8 rounded bg-[#C2A36B]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#C2A36B]/20 transition-all duration-300">
                    <Star size={14} className="text-[#C2A36B]" />
                  </div>
                  <div>
                    <h4 className="text-[12px] font-bold text-[#2d343e]">Expériences authentiques</h4>
                    <p className="text-[11px] text-[#2d343e]/70">Rencontres et lieux préservés.</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-[#d6cfc5]/50">
                <p className="text-[11px] text-[#2d343e]/60 italic text-center mb-4 px-4 leading-relaxed">
                  Parce qu’avec Indeora Voyages, chaque voyage devient une expérience authentique, humaine
                </p>
                <div className="flex justify-center">
                  <Link to="/testing" className="text-[10px] font-bold tracking-[0.2em] text-[#C2A36B] uppercase flex items-center gap-2 hover:translate-x-2 transition-transform">
                    EN SAVOIR PLUS SUR INDEORA VOYAGES <ChevronRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Advice Bar */}
        <div className="mt-8 relative overflow-hidden rounded-[2px] py-2 md:py-3 px-6 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <img
            src="src\assets\ChatGPT Image May 14, 2026, 11_48_07 AM.png"
            alt="Background"
            className="absolute inset-0 w-full h-full object-cover z-0 brightness-[0.8]"
          />
          {/* Dark overlay to ensure text readability */}
          <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px] z-10"></div>

          <div className="relative z-20 flex items-center gap-6">
            <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center flex-shrink-0">
              <Compass size={16} className="text-white/40" />
            </div>
            <div className="h-6 w-[1px] bg-white/20 hidden md:block"></div>
            <div>
              <h4 className="text-[13px] font-serif text-[#C2A36B] italic mb-0.5">Notre conseil</h4>
              <p className="text-[12px] text-white/90 leading-relaxed">
                L'Inde est vaste, vibrante et changeante. Un voyage bien préparé est la clé d'une expérience inoubliable.
              </p>
            </div>
          </div>
          <button className="relative z-20 text-[10px] font-bold tracking-[0.2em] text-white uppercase border-b border-[#C2A36B] pb-0.5 hover:text-[#C2A36B] transition-colors whitespace-nowrap">
            PARLEZ À UN EXPERT →
          </button>
        </div>
      </div>
    </section>
  );
};

export default EnviesVoyage;
