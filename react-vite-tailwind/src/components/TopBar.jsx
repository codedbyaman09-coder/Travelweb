import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchSettings } from '../lib/api';

const TopBar = () => {
  const [settings, setSettings] = useState({});

  useEffect(() => {
    fetchSettings().then(setSettings).catch(() => {});
  }, []);

  const contactLabel = settings.topBarContactLabel || 'Contacter un specialiste francophone';
  const phoneIndia = settings.phoneIndia || '+91 93514 21959';
  const phoneFrance = settings.phoneFrance || '+33 6 16 64 26 26';

  return (
    <div className="w-full h-[50px] bg-white border-t border-gray-100 hidden lg:flex items-center justify-between px-10 fixed bottom-0 left-0 right-0 z-[100] shadow-[0_-5px_20px_rgba(0,0,0,0.05)]">
      <div className="flex items-center gap-8 h-full">
        {/* Email Contact */}
        <div className="flex items-center gap-2 group cursor-pointer">
          <svg className="w-4 h-4 text-[#2D5C64]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="text-[12px] text-gray-600 font-medium group-hover:text-[#2D5C64] transition-colors">{contactLabel}</span>
        </div>

        <div className="h-4 w-[1px] bg-gray-200" />

        {/* Phone Contact */}
        <div className="flex items-center gap-3">
          <svg className="w-4 h-4 text-[#2D5C64]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <div className="flex items-center gap-2">
            <span className="text-[11px] text-gray-400 font-bold uppercase tracking-wider">Contact :</span>
            <span className="text-[12px] text-gray-700 font-bold">{phoneIndia}</span>
            <span className="text-gray-300 mx-1">|</span>
            <span className="text-[12px] text-gray-700 font-bold">{phoneFrance}</span>
          </div>
        </div>
      </div>

      <div className="flex items-center h-full">
        {/* Appointment */}
        <div className="flex items-center gap-2 group cursor-pointer px-6 border-l border-gray-100 h-full">
          <svg className="w-4 h-4 text-[#2D5C64]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <path d="M16 2v4M8 2v4M3 10h18" />
          </svg>
          <span className="text-[12px] text-gray-600 font-medium group-hover:text-[#2D5C64] transition-colors">Prendre rendez-vous</span>
          <svg className="w-3 h-3 text-gray-400 group-hover:text-[#2D5C64] transition-colors ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>

        {/* CTA Button */}
        <Link
          to="/demander-un-devis"
          className="bg-[#2D5C64] h-full px-8 flex items-center justify-center cursor-pointer hover:bg-[#234b51] transition-all duration-300"
        >
          <span className="text-white text-[13px] font-bold tracking-[0.15em] uppercase whitespace-nowrap">DEMANDER UN DEVIS</span>
        </Link>
      </div>
    </div>
  );
};

export default TopBar;
