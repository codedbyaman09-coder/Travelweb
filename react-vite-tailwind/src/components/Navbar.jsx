import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/png .png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDestOpen, setIsDestOpen] = useState(false);
  const [isMobileDestOpen, setIsMobileDestOpen] = useState(false);

  const destinations = [
    "Visites par Région",
    "Idées de circuits",
    "Bien être, Yoga et Ayurveda",
    "Hors des Sentiers Battus",
    "Rencontres Ethniques",
    "En Famille, Lune de Miel",
    "Nature et Vie Sauvage"
  ];

  return (
    <nav className="absolute top-2 md:top-6 left-2 md:left-10 right-2 md:left-10 z-50 bg-[#313c45] rounded-[12px] md:rounded-[20px] shadow-xl border border-gray-100/10 transition-all duration-300">
      <div className="max-w-[1500px] mx-auto px-4 md:px-8 h-16 md:h-24 flex items-center justify-between lg:justify-center lg:gap-12 xl:gap-16 relative">
        {/* Left Menu */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-10">
          <Link to="/" className="text-[9px] xl:text-[10px] font-bold tracking-[0.2em] xl:tracking-[0.3em] text-[#C6A46D] uppercase hover:text-white transition-colors whitespace-nowrap">Accueil</Link>
          <Link to="/about" className="text-[9px] xl:text-[10px] font-bold tracking-[0.2em] xl:tracking-[0.3em] text-[#C6A46D] uppercase hover:text-white transition-colors whitespace-nowrap">À propos</Link>

          {/* Destinations Dropdown */}
          <div
            className="relative group h-24 flex items-center"
            onMouseEnter={() => setIsDestOpen(true)}
            onMouseLeave={() => setIsDestOpen(false)}
          >
            <Link to="/destinations" className="text-[9px] xl:text-[10px] font-bold tracking-[0.2em] xl:tracking-[0.3em] text-[#C6A46D] uppercase hover:text-white transition-colors flex items-center gap-1 whitespace-nowrap">
              Destinations
              <svg className={`w-3 h-3 transition-transform duration-300 ${isDestOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </Link>

            {/* Dropdown Menu */}
            {isDestOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-72 bg-[#313c45] shadow-2xl rounded-xl border border-gray-100/10 py-6 px-2 animate-fadeIn">
                {destinations.map((dest, i) => {
                  let targetUrl = `/destinations/${dest.toLowerCase().replace(/,/g, '').replace(/ /g, '-')}`;
                  if (dest === "Visites par Région" || dest === "Idées de circuits") {
                    targetUrl = "/destinations";
                  } else if (dest === "Bien être, Yoga et Ayurveda") {
                    targetUrl = "/Testing";
                  } else if (dest === "Hors des Sentiers Battus") {
                    targetUrl = "/himalaya-aventures-hors-sentiers-battus";
                  } else if (dest === "Rencontres Ethniques") {
                    targetUrl = "/rencontres-ethniques-cultures-locales";
                  } else if (dest === "En Famille, Lune de Miel") {
                    targetUrl = "/lune-de-miel-escapades-romantiques";
                  } else if (dest === "Nature et Vie Sauvage") {
                    targetUrl = "/safaris-vie-sauvage";
                  }
                  return (
                    <Link
                      key={i}
                      to={targetUrl}
                      className="block px-6 py-3 text-[11px] font-medium text-[#C6A46D]/80 hover:text-white hover:bg-white/5 transition-all rounded-lg"
                    >
                      {dest}
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        {/* Logo */}
        <Link to="/" className="flex items-center shrink-0 mx-auto lg:mx-0">
          <div className="h-10 md:h-14 lg:h-16 relative flex justify-center items-center transition-all duration-300">
            <img
              src={logo}
              alt="Indeora Voyages Logo"
              className="h-full w-auto object-contain"
            />
          </div>
        </Link>

        {/* Right Menu */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-10">
          <Link to="/blog" className="text-[9px] xl:text-[10px] font-bold tracking-[0.2em] xl:tracking-[0.3em] text-[#C6A46D] uppercase hover:text-white transition-colors whitespace-nowrap">Blog</Link>
          <Link to="/faq" className="text-[9px] xl:text-[10px] font-bold tracking-[0.2em] xl:tracking-[0.3em] text-[#C6A46D] uppercase hover:text-white transition-colors whitespace-nowrap">FAQ</Link>
          <Link to="/contact-rapide" className="text-[9px] xl:text-[10px] font-bold tracking-[0.2em] xl:tracking-[0.3em] text-[#C6A46D] uppercase hover:text-white transition-colors whitespace-nowrap">Contact rapide</Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="lg:hidden text-[#C6A46D] absolute right-4 z-50 p-2 hover:bg-white/5 rounded-full transition-all" onClick={() => setIsOpen(!isOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l18 18" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-[calc(100%+8px)] left-0 right-0 bg-[#313c45] rounded-[15px] shadow-2xl border border-gray-100/10 py-8 px-8 flex flex-col gap-6 animate-fadeIn max-h-[75vh] overflow-y-auto">
          <Link to="/" className="text-[11px] font-bold tracking-[0.3em] text-[#C6A46D] uppercase hover:text-white transition-colors" onClick={() => setIsOpen(false)}>Accueil</Link>
          <Link to="/about" className="text-[11px] font-bold tracking-[0.3em] text-[#C6A46D] uppercase hover:text-white transition-colors" onClick={() => setIsOpen(false)}>À propos</Link>

          <div className="flex flex-col gap-4">
            <button
              className="flex items-center justify-between text-[11px] font-bold tracking-[0.3em] text-[#C6A46D] uppercase w-full text-left hover:text-white transition-colors"
              onClick={() => setIsMobileDestOpen(!isMobileDestOpen)}
            >
              <span>Destinations</span>
              <svg className={`w-3 h-3 transition-transform duration-300 ${isMobileDestOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {isMobileDestOpen && (
              <div className="pl-5 flex flex-col gap-4 border-l border-[#C6A46D]/20 mt-2 animate-fadeIn">
                {destinations.map((dest, i) => {
                  let targetUrl = `/destinations/${dest.toLowerCase().replace(/,/g, '').replace(/ /g, '-')}`;
                  if (dest === "Visites par Région" || dest === "Idées de circuits") {
                    targetUrl = "/destinations";
                  } else if (dest === "Bien être, Yoga et Ayurveda") {
                    targetUrl = "/Testing";
                  } else if (dest === "Hors des Sentiers Battus") {
                    targetUrl = "/himalaya-aventures-hors-sentiers-battus";
                  } else if (dest === "Rencontres Ethniques") {
                    targetUrl = "/rencontres-ethniques-cultures-locales";
                  } else if (dest === "En Famille, Lune de Miel") {
                    targetUrl = "/lune-de-miel-escapades-romantiques";
                  } else if (dest === "Nature et Vie Sauvage") {
                    targetUrl = "/safaris-vie-sauvage";
                  }
                  return (
                    <Link
                      key={i}
                      to={targetUrl}
                      className="text-[12px] font-medium text-[#C6A46D]/70 hover:text-white transition-colors"
                      onClick={() => {
                        setIsOpen(false);
                        setIsMobileDestOpen(false);
                      }}
                    >
                      {dest}
                    </Link>
                  );
                })}
              </div>
            )}
          </div>

          <Link to="/blog" className="text-[11px] font-bold tracking-[0.3em] text-[#C6A46D] uppercase hover:text-white transition-colors" onClick={() => setIsOpen(false)}>Blog</Link>
          <Link to="/faq" className="text-[11px] font-bold tracking-[0.3em] text-[#C6A46D] uppercase hover:text-white transition-colors" onClick={() => setIsOpen(false)}>FAQ</Link>
          <Link to="/demander-un-devis" className="text-[11px] font-bold tracking-[0.3em] text-white bg-[#C6A46D] px-4 py-2 rounded-sm text-center uppercase transition-colors" onClick={() => setIsOpen(false)}>Demander un devis</Link>
          <Link to="/contact-rapide" className="text-[11px] font-bold tracking-[0.3em] text-[#C6A46D] uppercase hover:text-white transition-colors" onClick={() => setIsOpen(false)}>Contact rapide</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
