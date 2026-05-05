import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/png .png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-6 left-10 right-10 z-50 bg-white rounded-[20px] shadow-xl border border-gray-100">
      <div className="max-w-[1500px] mx-auto px-10 h-24 flex items-center justify-between">
        {/* Logo (Crest Style) */}
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Indeora Voyages Logo" className="h-16 w-auto" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-10">
          <Link to="/" className="text-[10px] font-bold tracking-[0.3em] text-[#A88B52] hover:text-black transition-colors uppercase">Accueil</Link>
          <Link to="/about" className="text-[10px] font-bold tracking-[0.3em] text-[#A88B52] hover:text-black transition-colors uppercase">A propos de nous</Link>
          <Link to="/destinations" className="text-[10px] font-bold tracking-[0.3em] text-[#A88B52] hover:text-black transition-colors uppercase">Destination</Link>

          <div className="relative group">
            <button className="text-[10px] font-bold tracking-[0.3em] text-[#A88B52] hover:text-black transition-colors uppercase flex items-center gap-1">
              Blog
              <svg className="w-2 h-2 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>

          <Link to="/blog" className="text-[10px] font-bold tracking-[0.3em] text-[#A88B52] hover:text-black transition-colors uppercase">Avant de partir</Link>
          <Link to="/press" className="text-[10px] font-bold tracking-[0.3em] text-[#A88B52] hover:text-black transition-colors uppercase">Contact repide </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-[#A88B52]"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l18 18" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 py-6 px-6 flex flex-col gap-4 animate-fadeIn">
          <Link to="/" className="text-[10px] font-bold tracking-[0.3em] text-[#A88B52] uppercase">About</Link>
          <Link to="/destinations" className="text-[10px] font-bold tracking-[0.3em] text-[#A88B52] uppercase">Destinations</Link>
          <Link to="/contact" className="text-[10px] font-bold tracking-[0.3em] text-[#A88B52] uppercase">Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

