import React from 'react';
import footerLogo from '../assets/png .png';

const Home = () => {
  return (
    <>
      {/* 1. Hero Section */}
      <div className="relative min-h-screen w-full overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            playsInline
            loop
            src="https://indeoravoyages.com/wp-content/uploads/2025/09/Design-sans-titre-2.mp4"
          ></video>
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        {/* Hero Text Content (Bottom Right) */}
        <div className="relative z-10 h-screen w-full">
          <div className="absolute bottom-20 right-20 text-right">
            <h1 className="text-white text-xl md:text-2xl font-light tracking-[0.4em] mb-2 uppercase opacity-80">
              REDEFINING
            </h1>
            <h2 className="text-white text-5xl md:text-7xl font-serif italic leading-tight drop-shadow-xl">
              luxury travel
            </h2>
          </div>
        </div>

        {/* Social Sidebar (Left) */}
        <div className="absolute left-10 top-1/2 -translate-y-1/2 flex flex-col items-center space-y-8 z-10">
          <a href="#" className="w-8 h-8 rounded-full border border-white/40 flex items-center justify-center text-white/60 hover:text-white hover:border-white transition-all">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
          </a>
          <a href="#" className="w-8 h-8 rounded-full border border-white/40 flex items-center justify-center text-white/60 hover:text-white hover:border-white transition-all">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
          </a>
          <a href="#" className="w-8 h-8 rounded-full border border-white/40 flex items-center justify-center text-white/60 hover:text-white hover:border-white transition-all">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" /></svg>
          </a>
          <div className="h-16 w-[1px] bg-white/20 mx-auto"></div>
          <span className="text-white/60 text-[10px] tracking-[0.4em] vertical-text uppercase font-bold">Follow us</span>
        </div>

        {/* Navigation Arrows */}
        <button className="absolute left-10 top-1/2 -translate-y-1/2 text-white/30 hover:text-white transition-colors z-10">
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button className="absolute right-10 top-1/2 -translate-y-1/2 text-white/30 hover:text-white transition-colors z-10">
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <style dangerouslySetInnerHTML={{
          __html: `
          .vertical-text {
            writing-mode: vertical-rl;
            text-orientation: mixed;
            transform: rotate(180deg);
          }
        `}} />
      </div>

      {/* 2. Quote Section */}
      <section className="bg-white py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="font-serif italic text-[#A88B52] text-3xl mb-4">
            Indeora Voyages
          </h3>
          <p className="text-[10px] tracking-[0.4em] font-bold text-[#A88B52] mb-16 uppercase">
            Redefining Luxury Travel
          </p>
          <p className="text-xl md:text-2xl font-medium text-[#2d343e]/70 leading-relaxed italic max-w-3xl mx-auto mb-16">
            "Vishnu can unlock the secrets of Rajasthan at night, unlock most doors in Delhi, helicopter you in to hike with nomads in the Himalayas, or ensconce you in a chic lakeside palace. From the Ganges to the backwaters, he excels at trips that focus on culture and adventure, enjoying traditional hospitality and world-class service."
          </p>
          <div className="flex flex-col items-center gap-4">
            <div className="w-16 h-16 rounded-full border-2 border-[#A88B52] flex items-center justify-center p-1">
              <div className="w-full h-full rounded-full bg-[#A88B52] flex items-center justify-center text-white font-bold italic text-sm">
                IV
              </div>
            </div>
            <div className="text-center">
              <p className="text-[10px] font-bold tracking-[0.2em] text-[#2d343e] uppercase">VISHNU SWAMI'S WOW LIST</p>
              <p className="text-[10px] font-medium tracking-[0.2em] text-[#2d343e]/40 uppercase">INDIA TRAVEL ADVISOR 2026</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Discover Section (Blue/Gray)      {/* Hybrid Section: French Promise Blue/Gray Design + Indeora Content */}
      <section className="bg-[#60727a] py-24 px-6 text-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-20">
          {/* Left Text Content */}
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <h3 className="text-[10px] tracking-[0.4em] font-bold opacity-60 mb-6 uppercase">
              INDIA'S PREMIERE LUXURY TRAVEL ADVISORS
            </h3>
            <h2 className="text-5xl md:text-6xl font-serif italic mb-8 leading-tight">
              Discover <br />Indeora Voyages
            </h2>
            <div className="space-y-6 text-white/80 leading-relaxed text-[15px] font-medium">
              <p>
                Indeora Voyages est une agence de voyage franco-indienne spécialisée dans les circuits sur mesure et les séjours authentiques. Basée au Rajasthan, à Bikaner, notre équipe conçoit directement vos voyages en Inde with des partenaires locaux, sans intermédiaire, for garantir des tarifs avantageux et un service de qualité.
              </p>
              <p>
                Grâce à une équipe francophone and à des collaborations solides, nous créons des circuits personnalisés adaptés à vos envies :
              </p>
              <ul className="list-none space-y-2 pl-2 border-l border-white/20">
                <li>– Explorer les palais du Rajasthan and ses cités princières,</li>
                <li>– Découvrir la spiritualité du Gange and les temples sacrés,</li>
                <li>– Vivre l'expérience des paysages tropicaux du Kerala</li>
              </ul>
              <div className="pt-8">
                <button className="bg-[#2d343e] hover:bg-black text-white text-[10px] tracking-[0.3em] font-bold py-4 px-12 rounded-sm transition-all duration-300 uppercase">
                  IN THE PRESS
                </button>
              </div>
            </div>
          </div>

          {/* Right Image with Awards */}
          <div className="w-full md:w-1/2 relative order-1 md:order-2">
            <div className="relative z-10 rounded-sm overflow-hidden shadow-2xl h-[600px]">
              <img
                src="https://www.frenchpromise.com/wp-content/uploads/2023/11/Beaulieu-%C2%A9C-MOIRENC-243__MOB7465-1536x1024.webp"
                alt="Discover"
                className="w-full h-full object-cover brightness-90"
              />
              <div className="absolute top-10 left-10 flex flex-col space-y-4">
                <div className="bg-white p-4 w-28 h-28 flex flex-col items-center justify-center text-black text-center shadow-xl">
                  <span className="text-[8px] font-bold tracking-widest opacity-60 uppercase">TRAVEL + LEISURE</span>
                  <span className="text-2xl font-serif font-bold italic">A List</span>
                  <span className="text-[10px] font-bold">2026</span>
                </div>
                <div className="bg-[#A88B52] p-4 w-28 h-28 flex flex-col items-center justify-center text-white text-center shadow-xl">
                  <span className="text-[8px] font-bold tracking-widest uppercase">CONDE NAST</span>
                  <span className="text-lg font-serif font-bold italic leading-tight">Traveler</span>
                  <span className="text-[10px] font-bold">2026</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Our Unique Network (Tan) */}
      <section className="bg-[#D7CBB3] py-24 px-6 text-[#2d343e]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-20">
          <div className="w-full md:w-1/2 order-1 md:order-1">
            <div className="rounded-sm overflow-hidden shadow-2xl h-[550px]">
              <img
                src="https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80"
                alt="Luxury Travel"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 order-2 md:order-2">
            <h3 className="text-[10px] tracking-[0.4em] font-bold text-[#2d343e]/60 mb-6 uppercase">
              OUR UNIQUE NETWORK
            </h3>
            <h2 className="text-5xl md:text-6xl font-serif italic mb-8 leading-tight text-[#2d343e]">
              We're Redefining <br />Luxury Travel
            </h2>
            <div className="space-y-6 text-[#2d343e]/80 leading-relaxed text-[15px] font-medium">
              <p>
                Indeora Voyages est une agence de voyage franco-indienne spécialisée dans les circuits sur mesure et les séjours authentiques.
              </p>
              <div className="pt-8">
                <button className="bg-[#2d343e] hover:bg-black text-white text-[10px] tracking-[0.3em] font-bold py-4 px-12 rounded-sm transition-all duration-300 uppercase">
                  ABOUT US
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Featured Destinations (Grid of 5) */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-[10px] tracking-[0.4em] font-bold text-[#2d343e]/40 mb-2 uppercase">
            DISCOVER THE BEST OF INDIA - LIKE AN INSIDER
          </h3>
          <h2 className="text-[10px] tracking-[0.2em] font-bold text-[#A88B52] mb-16 uppercase">
            THIS MONTH'S FEATURED DESTINATIONS
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-4 px-4">
            {[
              { name: 'Rajasthan', img: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80' },
              { name: 'Kerala', img: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80' },
              { name: 'Taj Mahal', img: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=80' },
              { name: 'Varanasi', img: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=800&q=80' },
              { name: 'Gujarat', img: 'https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&w=800&q=80' },
            ].map((dest, i) => (
              <div key={i} className="flex flex-col items-center group cursor-pointer">
                <div className="relative w-full h-[350px] overflow-hidden shadow-lg mb-4">
                  <img
                    src={dest.img}
                    alt={dest.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition-colors"></div>
                </div>
                <span className="text-[#2d343e] text-[11px] font-bold tracking-[0.2em] uppercase font-serif italic">
                  {dest.name}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-16">
            <button className="bg-[#2d343e] hover:bg-black text-white text-[10px] tracking-[0.3em] font-bold py-4 px-12 rounded-sm transition-all duration-300 uppercase">
              VIEW ALL DESTINATIONS
            </button>
          </div>
        </div>
      </section>

      {/* 6. Monthly Feature (Tan) */}
      <section className="bg-[#D7CBB3] py-24 px-6 text-[#2d343e]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-20">
          {/* Left Text Content */}
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <h3 className="text-[10px] tracking-[0.4em] font-bold text-[#2d343e]/60 mb-6 uppercase">
              PHILIP'S MONTHLY FEATURE DESTINATION
            </h3>
            <h2 className="text-5xl md:text-6xl font-serif italic mb-8 leading-tight">
              Pourquoi nous choisir? <br />Ce qui nous rend différents
            </h2>
            <div className="space-y-6 text-[#2d343e]/80 leading-relaxed text-[15px] font-medium">
              <p>
                Chez Indeora Voyages, agence locale en Inde, nous croyons qu'un voyage réussi repose sur l'expertise, la proximité et la passion. Forte de several décennies d'expérience, notre équipe franco-indienne a fait de l'Inde sa seconde maison.
              </p>
              <div className="pt-8">
                <button className="bg-[#2d343e] hover:bg-black text-white text-[10px] tracking-[0.3em] font-bold py-4 px-12 rounded-sm transition-all duration-300 uppercase">
                  LEARN MORE
                </button>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full md:w-1/2 order-1 md:order-2">
            <div className="rounded-sm overflow-hidden shadow-2xl h-[550px]">
              <img
                src="https://indeoravoyages.com/wp-content/uploads/2025/08/pexels-abhi31-27554038-scaled.jpg"
                alt="Buddha"
                className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 8. Luxury Chandelier Banner (New) */}
      <section className="relative h-[320px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=2000&q=80"
            alt="Luxury Interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-12 flex flex-col md:flex-row items-center justify-between w-full">
          <div className="max-w-2xl">
            <h2 className="text-white text-5xl md:text-6xl font-serif italic mb-6 leading-tight">
              Redefining Luxury Travel
            </h2>
            <p className="text-white/90 text-sm md:text-base leading-relaxed mb-10 max-w-xl">
              Indeora Voyages has over 25 years combined experience in providing award winning, bespoke itineraries and unparalleled luxury DMC India travel services to the most discerning clientele. Contact us today for a quote.
            </p>
          </div>
          <div className="pt-10 md:pt-0">
            <button className="border-2 border-[#A88B52] text-[#A88B52] text-[10px] tracking-[0.3em] font-bold py-5 px-12 hover:bg-[#A88B52] hover:text-white transition-all duration-300 uppercase">
              LIVE THE INDEORA PROMISE
            </button>
          </div>
        </div>
      </section>

      {/* 9. Partner Logos Grid Removed */}

      {/* 7. Refined White Footer Section (100% Match) */}
      <footer className="bg-[#fcfcfc] pt-20 pb-10 px-6 border-t border-gray-100 font-sans">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
            {/* Column 1: Logo & Socials */}
            <div className="space-y-8">
              <div className="flex flex-col">
                <img src={footerLogo} alt="Indeora Voyages Logo" className="h-20 w-auto object-contain" />
              </div>
              <p className="text-[#A88B52]/80 text-[13px] leading-relaxed max-w-[280px]">
                Voyage autrement en Inde avec Indeora Voyages. <br />
                Des expériences uniques et sur mesure, <br />
                conçues pour vous.
              </p>
              <div className="flex gap-4">
                {[
                  { icon: 'fab fa-facebook-f', link: '#' },
                  { icon: 'fab fa-instagram', link: '#' },
                  { icon: 'fab fa-whatsapp', link: '#' },
                  { icon: 'fab fa-youtube', link: '#' }
                ].map((social, i) => (
                  <a key={i} href={social.link} className="w-8 h-8 rounded-full border border-[#A88B52]/20 flex items-center justify-center text-[#A88B52]/60 hover:text-[#A88B52] hover:border-[#A88B52] transition-all">
                    <i className={social.icon + " text-[10px]"}></i>
                  </a>
                ))}
              </div>
            </div>

            {/* Column 2: Liens Rapides */}
            <div>
              <h3 className="text-[11px] font-bold tracking-[0.2em] text-[#A88B52] uppercase mb-10">LIENS RAPIDES</h3>
              <ul className="space-y-5 text-[#A88B52]/70 text-[13px]">
                <li><a href="#" className="hover:text-black transition-colors">Destinations</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Expériences</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Nos voyages</a></li>
                <li><a href="#" className="hover:text-black transition-colors">À propos</a></li>
                <li><a href="#" className="hover:text-black transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Column 3: Informations */}
            <div>
              <h3 className="text-[11px] font-bold tracking-[0.2em] text-[#A88B52] uppercase mb-10">INFORMATIONS</h3>
              <ul className="space-y-5 text-[#A88B52]/70 text-[13px]">
                <li className="flex items-center gap-3 hover:text-black transition-colors cursor-pointer group">
                  <svg className="w-4 h-4 text-[#A88B52] group-hover:text-black transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                  <span>Bikaner, Rajasthan, Inde</span>
                </li>
                <li className="flex items-center gap-3 hover:text-black transition-colors cursor-pointer group">
                  <svg className="w-4 h-4 text-[#A88B52] group-hover:text-black transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                  <span>+91 70 230 16044</span>
                </li>
                <li className="flex items-center gap-3 hover:text-black transition-colors cursor-pointer group">
                  <svg className="w-4 h-4 text-[#A88B52] group-hover:text-black transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                  <span>contact@indeoravoyages.com</span>
                </li>
                <li className="flex items-center gap-3 hover:text-black transition-colors cursor-pointer group">
                  <i className="fab fa-whatsapp text-[#A88B52] group-hover:text-black text-base transition-colors"></i>
                  <span>WhatsApp</span>
                </li>
              </ul>
            </div>

            {/* Column 4: Newsletter */}
            <div>
              <h3 className="text-[11px] font-bold tracking-[0.2em] text-[#A88B52] uppercase mb-10">NEWSLETTER</h3>
              <p className="text-[#A88B52]/70 text-[13px] mb-8 leading-relaxed">
                Recevez nos inspirations de voyage <br />et nos offres exclusives.
              </p>
              <div className="relative border border-[#A88B52]/20 p-4 flex items-center justify-between group hover:border-black transition-all">
                <input
                  type="email"
                  placeholder="Votre email"
                  className="bg-transparent text-[13px] text-[#A88B52] placeholder:text-[#A88B52]/40 focus:outline-none w-full"
                />
                <button className="text-[#A88B52]/60 group-hover:text-black transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Footer Bar */}
          <div className="pt-8 border-t border-[#A88B52]/10 flex flex-col md:flex-row justify-between items-center text-[12px] text-[#A88B52]/50 font-light">
            <p>© 2024 Indeora Voyages. Tous droits réservés.</p>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-black transition-colors">Mentions légales</a>
              <span className="opacity-20">|</span>
              <a href="#" className="hover:text-black transition-colors">Politique de confidentialité</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;
