  import React from 'react';
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
    ChevronRight,
    Headphones,
    HeartHandshake
  } from 'lucide-react';
  import Navbar from '../components/Navbar';
  import Footer from '../components/Footer';

  const AvantDePartir = () => {
    return (
      <div className="bg-[#fdfbf7] min-h-screen font-sans selection:bg-[#C2A36B]/20 pt-20">
        <Navbar />

        {/* Main Container */}
        <div className="max-w-[1600px] mx-auto px-4 md:px-8 py-12">
          
          {/* Header Logo */}
          <div className="flex flex-col items-center mb-20">
            <div className="flex items-center gap-4 mb-2">
              <div className="w-[1px] h-8 bg-[#C2A36B]/40"></div>
              <Compass size={24} className="text-[#C2A36B]" />
              <div className="w-[1px] h-8 bg-[#C2A36B]/40"></div>
            </div>
            <h1 className="text-[20px] md:text-[24px] tracking-[0.6em] font-serif uppercase text-[#8b7355] ml-4">
              INDEORA VOYAGES
            </h1>
          </div>

          {/* 1. QUAND PARTIR SECTION */}
          <div className="bg-white rounded-[4px] shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-[#e8e2d9] overflow-hidden mb-16">
            <div className="flex flex-col lg:flex-row">
              {/* Left Decorative Image */}
              <div className="lg:w-[45%] relative min-h-[400px]">
                <img 
                  src="https://images.unsplash.com/photo-1548013146-72479768bbfd?q=80&w=1400&auto=format&fit=crop" 
                  alt="Quand partir" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="absolute top-12 left-12 text-white">
                  <span className="text-[10px] tracking-[0.4em] font-bold uppercase opacity-80 mb-4 block">QUAND PARTIR EN INDE ?</span>
                  <div className="w-12 h-[1px] bg-white/40 mb-8"></div>
                  <h2 className="text-[40px] md:text-[54px] font-serif leading-tight italic drop-shadow-lg">
                    Chaque saison,<br />
                    <span className="opacity-80">une Inde différente.</span>
                  </h2>
                  <div className="w-12 h-[1px] bg-white/40 mt-8 mb-8"></div>
                  <p className="max-w-[300px] text-[14px] leading-relaxed opacity-90 italic">
                    Le climat varie selon les régions et transforme chaque expérience de voyage. Choisissez le moment idéal selon vos envies.
                  </p>
                  <button className="mt-10 px-8 py-3 border border-white/50 rounded-sm text-[11px] tracking-[0.2em] font-bold uppercase hover:bg-white hover:text-black transition-all">
                    VOIR LE GUIDE COMPLET →
                  </button>
                </div>
              </div>

              {/* Right Grid */}
              <div className="lg:w-[55%] p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12">
                  {[
                    { 
                      icon: <Sun size={28} />, 
                      title: "OCTOBRE À MARS", 
                      text: "Idéal pour le Rajasthan, Delhi, Agra, Varanasi, le Kerala et le Sud de l'Inde" 
                    },
                    { 
                      icon: <Mountain size={28} />, 
                      title: "AVRIL À JUILLET", 
                      text: "Parfait pour le Ladakh, l'Himalaya, Rishikesh, l'Uttarakhand et les régions montagneuses" 
                    },
                    { 
                      icon: <CloudRain size={28} />, 
                      title: "JUILLET À OCTOBRE", 
                      text: "Superbe période pour le Bengale, Darjeeling, l'Assam et les paysages verdoyants du Nord-Est" 
                    },
                    { 
                      icon: <Sparkles size={28} />, 
                      title: "OCTOBRE À DÉCEMBRE", 
                      text: "Ambiance festive au Rajasthan avec les lumières, les célébrations et les festivals traditionnels" 
                    }
                  ].map((item, i) => (
                    <div key={i} className="group cursor-pointer">
                      <div className="text-[#C2A36B] mb-6 transform group-hover:scale-110 transition-transform duration-500">
                        {item.icon}
                      </div>
                      <h3 className="text-[13px] font-bold tracking-[0.2em] text-[#2d343e] uppercase mb-4">{item.title}</h3>
                      <p className="text-[14px] text-[#2d343e]/70 leading-relaxed font-light mb-6">
                        {item.text}
                      </p>
                      <button className="text-[10px] font-bold tracking-[0.2em] text-[#C2A36B] uppercase border-b border-[#C2A36B]/30 pb-1 group-hover:border-[#C2A36B] transition-all">
                        EN SAVOIR PLUS →
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 2. FAUT SAVOIR SECTION */}
          <div className="bg-white rounded-[4px] shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-[#e8e2d9] overflow-hidden mb-16">
            <div className="flex flex-col lg:flex-row">
              {/* Left Decorative Image */}
              <div className="lg:w-[35%] relative min-h-[400px]">
                <img 
                  src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=1400&auto=format&fit=crop" 
                  alt="Faut savoir" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="absolute inset-x-12 bottom-12 text-white">
                  <span className="text-[10px] tracking-[0.4em] font-bold uppercase opacity-80 mb-4 block">TOUT CE QU'IL FAUT</span>
                  <h2 className="text-[40px] font-serif leading-tight italic drop-shadow-lg mb-8">
                    savoir avant<br />de partir.
                  </h2>
                  <div className="w-12 h-[1px] bg-white/40 mb-8"></div>
                  <p className="text-[14px] leading-relaxed opacity-90 italic mb-10">
                    Des informations essentielles pour voyager sereinement en Inde.
                  </p>
                  <button className="px-8 py-3 border border-white/50 rounded-sm text-[11px] tracking-[0.2em] font-bold uppercase hover:bg-white hover:text-black transition-all">
                    VOIR TOUTES LES INFOS →
                  </button>
                </div>
              </div>

              {/* Right Grid */}
              <div className="lg:w-[65%] p-8 md:p-12 lg:p-16">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-y-12 gap-x-8">
                  {[
                    { icon: <ClipboardCheck size={32} />, title: "FORMALITÉS", text: "Visa, passeport, documents nécessaires pour voyager en toute tranquillité." },
                    { icon: <ShieldCheck size={32} />, title: "SANTÉ & SÉCURITÉ", text: "Recommandations sanitaires et conseils pour un voyage en toute sérénité." },
                    { icon: <Banknote size={32} />, title: "ARGENT & BUDGET", text: "Monnaie, cartes bancaires, pourboires et conseils budgétaires." },
                    { icon: <Languages size={32} />, title: "LANGUE & CULTURE", text: "Quelques mots utiles et clés culturelles pour mieux échanger." },
                    { icon: <MapPin size={32} />, title: "SUR PLACE", text: "Transports, internet, communications : tout ce qu'il faut savoir." },
                    { icon: <Compass size={32} />, title: "CONSEILS PRATIQUES", text: "Astuces, comportements locaux et informations essentielles pour un voyage sans stress." }
                  ].map((item, i) => (
                    <div key={i} className="text-center group">
                      <div className="text-[#C2A36B] flex justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                        {item.icon}
                      </div>
                      <h3 className="text-[11px] font-bold tracking-[0.3em] text-[#2d343e] uppercase mb-4">{item.title}</h3>
                      <p className="text-[12px] text-[#2d343e]/60 leading-relaxed font-light">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Advice Bar */}
                <div className="mt-16 bg-[#f9f7f4] border border-[#e8e2d9] p-6 rounded-sm flex items-center justify-between">
                  <div className="flex items-center gap-6">
                    <Compass size={32} className="text-[#C2A36B]/40" />
                    <div>
                      <h4 className="text-[14px] font-serif text-[#C2A36B] italic mb-1">Notre conseil</h4>
                      <p className="text-[13px] text-[#2d343e]/70 leading-relaxed">
                        La meilleure période dépend de votre itinéraire. Nous créons le voyage qui correspond au bon moment pour vous.
                      </p>
                    </div>
                  </div>
                  <button className="text-[11px] font-bold tracking-[0.2em] text-[#C2A36B] uppercase border-b border-[#C2A36B]/30 pb-1 hover:border-[#C2A36B] transition-colors whitespace-nowrap ml-6">
                    EN PARLER À UN EXPERT →
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* 3. POURQUOI VOYAGER SECTION */}
          <div className="bg-white rounded-[4px] shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-[#e8e2d9] overflow-hidden mb-16">
            <div className="flex flex-col lg:flex-row">
              {/* Left Decorative Image */}
              <div className="lg:w-[35%] relative min-h-[400px]">
                <img 
                  src="https://images.unsplash.com/photo-1514222134-b57cbb8ce073?q=80&w=1400&auto=format&fit=crop" 
                  alt="Pourquoi Voyager" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="absolute inset-12 text-white">
                  <span className="text-[10px] tracking-[0.4em] font-bold uppercase opacity-80 mb-4 block">POURQUOI VOYAGER</span>
                  <h2 className="text-[40px] font-serif leading-tight italic drop-shadow-lg mb-8">
                    avec Indeora Voyages ?
                  </h2>
                  <div className="w-12 h-[1px] bg-white/40 mb-8"></div>
                  <p className="text-[14px] leading-relaxed opacity-90 italic mb-10">
                    Une expertise locale pour un voyage authentique, fluide et inoubliable.
                  </p>
                  <button className="px-8 py-3 border border-white/50 rounded-sm text-[11px] tracking-[0.2em] font-bold uppercase hover:bg-white hover:text-black transition-all">
                    DÉCOUVRIR NOS SERVICES →
                  </button>
                </div>
              </div>

              {/* Right Grid */}
              <div className="lg:w-[65%] p-8 md:p-12 lg:p-16">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-y-12 gap-x-8">
                  {[
                    { icon: <Users size={32} />, title: "AGENCE LOCALE FRANCOPHONE", text: "Notre équipe basée en Inde accompagne les voyageurs francophones avec des conseils concrets." },
                    { icon: <Settings2 size={32} />, title: "VOYAGES EN INDE SUR MESURE", text: "Chaque voyage est adapté à votre rythme, à vos centres d'intérêt et au niveau de confort souhaité." },
                    { icon: <ShieldCheck size={32} />, title: "DES CIRCUITS DE CONFIANCE", text: "Du Rajasthan au Kerala, de Varanasi à Rishikesh, nous construisons des itinéraires réalistes et pensés pour des découvertes authentiques." },
                    { icon: <Star size={32} />, title: "EXPÉRIENCES AUTHENTIQUES", text: "Rencontres, activités locales, hébergements soigneusement sélectionnés : vivez une Inde vraie." },
                    { icon: <Headphones size={32} />, title: "ACCOMPAGNEMENT COMPLET", text: "Avant, pendant et après votre voyage, nous restons à vos côtés pour vous offrir assistance et réactivité." },
                    { icon: <HeartHandshake size={32} />, title: "ASSISTANCE LOCALE 7J/7", text: "Une équipe disponible et réactive pour répondre à toutes vos questions à chaque étape du voyage." }
                  ].map((item, i) => (
                    <div key={i} className="text-center group">
                      <div className="text-[#C2A36B] flex justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                        {item.icon}
                      </div>
                      <h3 className="text-[11px] font-bold tracking-[0.3em] text-[#2d343e] uppercase mb-4">{item.title}</h3>
                      <p className="text-[12px] text-[#2d343e]/60 leading-relaxed font-light">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Contact Bar */}
                <div className="mt-16 bg-[#f9f7f4] border border-[#e8e2d9] p-6 rounded-sm flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="flex items-center gap-6">
                    <Compass size={32} className="text-[#C2A36B]/40" />
                    <div>
                      <h4 className="text-[14px] font-serif text-[#C2A36B] italic mb-1">Parlez à un expert</h4>
                      <p className="text-[13px] text-[#2d343e]/70 leading-relaxed">
                        Un projet, une question, une envie d'évasion ? Notre équipe est à votre écoute pour créer le voyage qui vous ressemble.
                      </p>
                    </div>
                  </div>
                  <button className="bg-[#4d3b25] text-white text-[11px] tracking-[0.2em] font-bold uppercase px-8 py-4 rounded-sm hover:bg-[#3d2f1d] transition-colors whitespace-nowrap">
                    CONTACTER UN EXPERT →
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>

        <Footer />
      </div>
    );
  };

  export default AvantDePartir;
