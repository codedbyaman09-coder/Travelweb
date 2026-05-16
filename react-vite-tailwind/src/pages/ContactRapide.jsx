import React from 'react';
import Footer from '../components/Footer';
import PourquoiVoyager from '../components/PourquoiVoyager';
import VotreVoyageForm from '../components/VotreVoyageForm';

const ContactRapide = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section (New) */}
      <div className="relative h-[85vh] w-full overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=2000&q=80"
            alt="Contact Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/50"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl pt-20 md:pt-32">
          <h1 className="text-white text-5xl sm:text-7xl md:text-9xl font-serif italic mb-6 md:mb-8 drop-shadow-2xl">
            Contact
          </h1>
          <p className="text-white/90 text-xs md:text-[16px] tracking-[0.3em] md:tracking-[0.4em] uppercase mb-10 md:mb-12 font-light leading-relaxed">
            NOUS SOMMES À VOTRE ÉCOUTE POUR CRÉER <br className="hidden md:block" /> LE VOYAGE DE VOS RÊVES EN INDE.
          </p>
          <div>
            <button
              onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-transparent border border-white/40 text-white text-[11px] tracking-[0.4em] font-bold py-6 px-14 hover:bg-white hover:text-black transition-all duration-700 uppercase rounded-sm backdrop-blur-[2px]"
            >
              Envoyer un message
            </button>
          </div>
        </div>
      </div>

      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-6 text-center py-16 md:py-24" id="contact-form">
        <h2 className="text-[10px] md:text-[12px] font-bold tracking-[0.4em] text-[#A88B52] mb-6 md:mb-8 uppercase">REDEFINING LUXURY TRAVEL</h2>
        <p className="text-gray-600 text-sm md:text-[15px] leading-relaxed md:leading-[1.8] max-w-4xl mx-auto font-medium opacity-80">
          Indeora Voyages offers over 25 years of combined luxury travel experience as India's premiere DMC working with discerning agencies and directly with high-profile clients. Our team is here on-the-ground in India working with only the finest vetted networks, luxury accommodations and local, knowledgeable guides. Contact us below to request a custom quote.
        </p>
      </div>

      {/* New Voyage Form Section */}
      <VotreVoyageForm />

      {/* Nos coordonnées Section */}
      <div className="bg-blue-50 py-4 md:py-6 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-serif text-[#2d343e] text-center mb-4 md:mb-6 italic">Nos coordonnées</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

            {/* India Bureau (Alpesh Trading) */}
            <div className="space-y-6">
              <div className="bg-[#2d2d2d] text-white py-5 px-6 flex items-center justify-center gap-4 shadow-lg">
                <div className="w-6 h-6 rounded-full border border-[#A88B52] flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-[#A88B52]"></div>
                </div>
                <h3 className="text-[16px] font-bold tracking-[0.2em] uppercase">BUREAU en INDE</h3>
              </div>

              <div className="space-y-4 px-2">
                <div className="flex items-start gap-4 text-[#2d343e]">
                  <img src="https://flagcdn.com/w20/in.png" alt="India" className="mt-1 w-5" />
                  <span className="text-[13px] font-medium leading-relaxed">
                    Alpesh Trading, Bikaner, Rajasthan 334001, India
                  </span>
                </div>
                <div className="flex items-center gap-4 text-[#2d343e]">
                  <svg className="w-4 h-4 text-[#A88B52]" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" /></svg>
                  <span className="text-[13px] font-medium">+91 70 230 16044</span>
                </div>
                <div className="flex items-center gap-4 text-[#2d343e]">
                  <svg className="w-4 h-4 text-[#A88B52]" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" /></svg>
                  <span className="text-[13px] font-medium underline underline-offset-4 decoration-[#A88B52]/40">contact@indeoravoyages.com</span>
                </div>
                <div className="flex items-center gap-4 text-[#2d343e]">
                  <svg className="w-4 h-4 text-[#A88B52]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" /></svg>
                  <span className="text-[13px] font-medium underline underline-offset-4 decoration-[#A88B52]/40">www.indeoravoyages.com</span>
                </div>
              </div>

              <div className="w-full h-[300px] md:h-[400px] rounded-sm overflow-hidden border border-gray-100 shadow-md">
                <iframe
                  src="https://www.google.com/maps?q=Alpesh+Trading,+Bikaner,+Rajasthan+334001,+India&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="India Map"
                ></iframe>
              </div>
            </div>

            {/* France Bureau (Le Passage en Inde) */}
            <div className="space-y-6">
              <div className="bg-[#2d2d2d] text-white py-5 px-6 flex items-center justify-center gap-4 shadow-lg">
                <div className="w-6 h-6 rounded-full border border-[#A88B52] flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-[#A88B52]"></div>
                </div>
                <h3 className="text-[16px] font-bold tracking-[0.2em] uppercase">BUREAU FRANCE</h3>
              </div>

              <div className="space-y-4 px-2">
                <div className="flex items-start gap-4 text-[#2d343e]">
                  <img src="https://flagcdn.com/w20/fr.png" alt="France" className="mt-1 w-5" />
                  <span className="text-[13px] font-medium leading-relaxed">
                    Le Passage en Inde, Calmont, 12000 Rodez, France
                  </span>
                </div>
                <div className="flex items-center gap-4 text-[#2d343e]">
                  <svg className="w-4 h-4 text-[#A88B52]" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" /></svg>
                  <span className="text-[13px] font-medium">+33 759 47 06 04</span>
                </div>
                <div className="flex items-center gap-4 text-[#2d343e]">
                  <svg className="w-4 h-4 text-[#A88B52]" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" /></svg>
                  <span className="text-[13px] font-medium underline underline-offset-4 decoration-[#A88B52]/40">contact@indeoravoyages.com</span>
                </div>
                <div className="flex items-center gap-4 text-[#2d343e]">
                  <svg className="w-4 h-4 text-[#A88B52]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" /></svg>
                  <span className="text-[13px] font-medium underline underline-offset-4 decoration-[#A88B52]/40">www.indeoravoyages.fr</span>
                </div>
              </div>

              <div className="w-full h-[300px] md:h-[400px] rounded-sm overflow-hidden border border-gray-100 shadow-md">
                <iframe
                  src="https://www.google.com/maps?q=Le+Passage+en+Inde,+Calmont,+12000+Rodez,+France&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="France Map"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      <PourquoiVoyager />
      <Footer />
    </div>
  );
};

export default ContactRapide;
