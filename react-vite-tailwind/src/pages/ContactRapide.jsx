import React from 'react';
import Footer from '../components/Footer';
import PourquoiVoyager from '../components/PourquoiVoyager';

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

      {/* Main Content: Form + Info (Matched to French Promise Screenshot) */}
      <div className="bg-[#60727a] py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">

          {/* Left Column: Form */}
          <div className="w-full lg:w-3/5 text-white order-2 lg:order-1">
            <h3 className="text-2xl md:text-3xl font-serif italic mb-2">Request A Quote</h3>
            <p className="text-[10px] md:text-[11px] mb-10 opacity-80 uppercase tracking-widest">We will respond within 48 business hours to your request.</p>

            <form className="space-y-8">
              {/* Name Row */}
              <div className="space-y-2">
                <label className="block text-[11px] font-bold uppercase tracking-widest italic">Name *</label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <input type="text" className="w-full bg-white text-black p-3 focus:outline-none" />
                    <span className="text-[10px] opacity-70 mt-1 block italic">First</span>
                  </div>
                  <div>
                    <input type="text" className="w-full bg-white text-black p-3 focus:outline-none" />
                    <span className="text-[10px] opacity-70 mt-1 block italic">Last</span>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label className="block text-[11px] font-bold uppercase tracking-widest italic">Email *</label>
                <input type="email" className="w-full bg-white text-black p-3 focus:outline-none" />
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <label className="block text-[11px] font-bold uppercase tracking-widest italic">Phone</label>
                <div className="flex bg-white p-3 items-center gap-3">
                  <div className="flex items-center gap-1 border-r pr-3 border-gray-300">
                    <img src="https://flagcdn.com/w20/fr.png" alt="FR" className="w-5" />
                    <span className="text-black text-sm">▼</span>
                  </div>
                  <input type="tel" placeholder="01 23 45 67 89" className="w-full text-black focus:outline-none" />
                </div>
              </div>

              {/* Country */}
              <div className="space-y-2">
                <label className="block text-[11px] font-bold uppercase tracking-widest italic">Country of Origin *</label>
                <input type="text" className="w-full bg-white text-black p-3 focus:outline-none" />
              </div>

              {/* Travel Requirements */}
              <div className="space-y-6">
                <label className="block text-[11px] font-bold uppercase tracking-widest italic border-b border-white/20 pb-2">Travel Requirements *</label>
                <div className="grid grid-cols-1 gap-y-3">
                  {[
                    "Luxury Tour & Travel Design",
                    "Hotel Reservations",
                    "Transfers & Transport",
                    "Luxury Villa Rental",
                    "Day Tours & Experiences",
                    "Custom Wellness Retreat",
                    "Private Events",
                    "Yacht Charter",
                    "Jet or Helicopter Charter"
                  ].map((req, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <input type="checkbox" className="w-4 h-4" id={`req-${i}`} />
                      <label htmlFor={`req-${i}`} className="text-[12px] font-light italic opacity-90">{req}</label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Budget & Date */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-[11px] font-bold uppercase tracking-widest italic">Trip Budget - Select *</label>
                  <select className="w-full bg-white text-black p-3 focus:outline-none appearance-none">
                    <option>€10,000 to €20,000</option>
                    <option>€20,000 to €50,000</option>
                    <option>€50,000+</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="block text-[11px] font-bold uppercase tracking-widest italic">Arrival Date</label>
                  <input type="date" className="w-full bg-white text-black p-3 focus:outline-none" />
                </div>
              </div>

              {/* Participants & Days */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-[11px] font-bold uppercase tracking-widest italic">Number of Participants *</label>
                  <input type="number" className="w-full bg-white text-black p-3 focus:outline-none" />
                </div>
                <div className="space-y-2">
                  <label className="block text-[11px] font-bold uppercase tracking-widest italic">How many days will you be staying? *</label>
                  <input type="text" className="w-full bg-white text-black p-3 focus:outline-none" />
                </div>
              </div>

              {/* Regions */}
              <div className="space-y-2">
                <label className="block text-[11px] font-bold uppercase tracking-widest italic">In which regions would you like to stay or explore? *</label>
                <input type="text" className="w-full bg-white text-black p-3 focus:outline-none" />
              </div>

              {/* Accommodation */}
              <div className="space-y-2">
                <label className="block text-[11px] font-bold uppercase tracking-widest italic">Accommodation Request: Specific Hotel, Private Villa, Barge?</label>
                <input type="text" className="w-full bg-white text-black p-3 focus:outline-none" />
              </div>

              {/* Comments */}
              <div className="space-y-2">
                <label className="block text-[11px] font-bold uppercase tracking-widest italic">Comments or Travel Requirements (Please include any wine tour related requests or regions, if desired).</label>
                <textarea rows="4" className="w-full bg-white text-black p-3 focus:outline-none"></textarea>
              </div>

              {/* Source */}
              <div className="space-y-2">
                <label className="block text-[11px] font-bold uppercase tracking-widest italic">How did you hear about us? *</label>
                <select className="w-full bg-white text-black p-3 focus:outline-none appearance-none">
                  <option>Select</option>
                  <option>Google Search</option>
                  <option>Social Media</option>
                  <option>Word of Mouth</option>
                  <option>Press Article</option>
                </select>
              </div>

              <button type="submit" className="bg-[#4a5a61] text-white text-[11px] font-bold py-3 px-8 hover:bg-black transition-all uppercase tracking-widest">
                Submit
              </button>
            </form>
          </div>

          {/* Right Column: Image & Info */}
          <div className="w-full lg:w-2/5 order-1 lg:order-2">
            <div className="lg:sticky lg:top-32 space-y-12">
              <div className="aspect-[4/5] overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=800&q=80"
                  alt="Luxury Contact"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="text-white space-y-10 md:space-y-12">
                <div className="space-y-4 text-center lg:text-left">
                  <p className="text-[9px] md:text-[10px] font-bold tracking-widest opacity-70 uppercase italic">IN TRANSIT OR FOR URGENT NEEDS</p>
                  <h4 className="text-2xl md:text-3xl font-serif italic">Contact Info</h4>
                  <div className="text-sm md:text-[14px] space-y-1 opacity-90 leading-relaxed font-light italic">
                    <p className="font-bold not-italic text-lg mb-1">Indeora Voyages</p>
                    <p>Bikaner, Rajasthan, India</p>
                    <p>+91 70 230 16044</p>
                    <p>contact@indeoravoyages.com</p>
                  </div>
                </div>

                <div className="space-y-4 text-center lg:text-left">
                  <p className="text-[9px] md:text-[10px] font-bold tracking-widest opacity-70 uppercase italic">FOR NEW TRAVEL PARTNERS</p>
                  <h4 className="text-2xl md:text-3xl font-serif italic">Request A Zoom</h4>
                  <p className="text-sm md:text-[14px] opacity-90 leading-relaxed font-light italic">
                    Schedule a zoom meeting directly with Founder, Vishnu Swami using our contact form, to learn more about our luxury India travel services and partner amenities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

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
      {/* Luxury Chandelier Banner (Synchronized) */}
      <section className="relative min-h-[320px] py-16 md:py-0 flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=2000&q=80"
            alt="Luxury Interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between w-full gap-8 md:gap-0">
          <div className="max-w-2xl text-center md:text-left">
            <h2 className="text-white text-3xl md:text-5xl lg:text-6xl font-serif italic mb-6 leading-tight">
              Redefining Luxury Travel
            </h2>
            <p className="text-white/90 text-sm md:text-base leading-relaxed mb-6 md:mb-10 max-w-xl">
              Indeora Voyages has over 25 years combined experience in providing award winning, bespoke itineraries and unparalleled luxury DMC India travel services to the most discerning clientele. Contact us today for a quote.
            </p>
          </div>
          <div className="pt-4 md:pt-0">
            <button className="border-2 border-[#A88B52] text-[#A88B52] text-[10px] tracking-[0.3em] font-bold py-5 px-12 hover:bg-[#A88B52] hover:text-white transition-all duration-300 uppercase whitespace-nowrap">
              LIVE THE INDEORA PROMISE
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactRapide;
