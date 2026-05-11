import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import EspritIndeora from '../components/EspritIndeora';

const Destinations = () => {
  const featuredDestinations = [
    { name: 'Visites par Région', img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80' },
    { name: 'Idées de circuits', img: 'https://images.unsplash.com/photo-1549918830-11ec21609f98?auto=format&fit=crop&w=800&q=80' },
    { name: 'Bien être, Yoga et Ayurveda', img: 'https://images.unsplash.com/photo-1545208393-2160295eb44e?auto=format&fit=crop&w=800&q=80' },
    { name: 'Hors des Sentiers Battus', img: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80' },
    { name: 'Rencontres Ethniques', img: 'https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&w=800&q=80' },
    { name: 'En Famille, Lune de Miel', img: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=800&q=80' },
    { name: 'Nature et Vie Sauvage', img: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80' },
  ];

  return (
    <div className="pt-0 bg-white min-h-screen">
      {/* 1. Hero Section (Vineyard) */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea?auto=format&fit=crop&w=2000&q=80"
            alt="French Wine Regions"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/15"></div>
        </div>
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto text-white pt-32 md:pt-40">
          <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-[100px] font-serif italic mb-6 drop-shadow-2xl leading-none">
            French Wine Regions
          </h1>
          <p className="text-[12px] md:text-[14px] font-bold tracking-[0.1em] mb-12 max-w-3xl mx-auto opacity-90 leading-relaxed drop-shadow-md">
            Discover our Burgundy wine tours, a favorite of Philip's, featuring exclusive tastings and hidden gems...
          </p>
          <div className="pt-4">
            <button className="bg-black text-white text-[10px] tracking-[0.3em] font-bold py-5 px-12 border border-white/60 hover:bg-white hover:text-black transition-all duration-500 uppercase">
              DISCOVER OUR WINE TOURS
            </button>
          </div>
        </div>
      </section>

      {/* 2. Introduction Section */}
      <section className="py-16 md:py-24 px-6 text-center bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-serif italic text-[#A88B52] mb-6 md:mb-8">
            Destinations
          </h2>
          <h3 className="text-[11px] font-bold tracking-[0.3em] text-[#2d343e] mb-12 uppercase">
            DISCOVER THE ULTIMATE, LUXURY TRAVEL EXPERIENCE IN INDIA
          </h3>
          <p className="text-gray-600 text-[15px] leading-[1.8] max-w-4xl mx-auto font-medium opacity-80">
            Discover our must-see, luxury India travel destinations with our bespoke itineraries. Our expert Indeora Voyages travel guides and drivers will create a magical insider's experience just for you, from the moment you land, to your final destination. We are the country's leading luxury India travel advisors and experts in both tried-and-true destinations as Rajasthan, Kerala, Varanasi, and the Himalayas, to off-the-beaten-path alternatives.
          </p>
        </div>
      </section>

      {/* 3. Destinations Grid Section */}
      <section className="pb-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {featuredDestinations.map((dest, i) => (
              <Link
                key={i}
                to={`/destinations/${dest.name.toLowerCase().replace(/,/g, '').replace(/ /g, '-')}`}
                className="flex flex-col items-center group cursor-pointer"
              >
                <div className="relative w-full aspect-[2/5] overflow-hidden shadow-lg mb-6 rounded-sm">
                  <img
                    src={dest.img}
                    alt={dest.name}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500"></div>
                </div>
                <span className="text-[#A88B52] text-[10px] font-bold tracking-[0.2em] uppercase text-center px-2 leading-relaxed">
                  {dest.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <EspritIndeora />

      <Footer />
    </div>
  );
};

export default Destinations;
