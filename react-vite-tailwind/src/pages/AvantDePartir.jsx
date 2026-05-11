import React from 'react';
import Footer from '../components/Footer';
import EspritIndeora from '../components/EspritIndeora';

const AvantDePartir = () => {
  const articles = [
    {
      id: 1,
      title: "Visas & Formalités",
      category: "Essentiels",
      image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&w=800&q=80",
      description: "Tout savoir sur l'e-Visa indien et les documents nécessaires pour votre voyage."
    },
    {
      id: 2,
      title: "Santé & Bien-être",
      category: "Conseils",
      image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&w=800&q=80",
      description: "Vaccinations, trousse à pharmacie et précautions pour un séjour en toute sérénité."
    },
    {
      id: 3,
      title: "Budget & Change",
      category: "Pratique",
      image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&w=800&q=80",
      description: "Gérer vos roupies, utiliser votre carte bancaire et comprendre le coût de la vie."
    },
    {
      id: 4,
      title: "Valise Idéale",
      category: "Préparation",
      image: "https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=800&q=80",
      description: "Vêtements adaptés, adaptateurs et indispensables pour chaque saison."
    },
    {
      id: 5,
      title: "Coutumes & Étiquette",
      category: "Culture",
      image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80",
      description: "Les gestes à adopter et les traditions à respecter pour une immersion réussie."
    },
    {
      id: 6,
      title: "Internet & Télécoms",
      category: "Connectivité",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80",
      description: "Comment obtenir une carte SIM locale et rester connecté partout en Inde."
    },
    {
      id: 7,
      title: "Se déplacer en Inde",
      category: "Transport",
      image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&w=800&q=80",
      description: "Trains mythiques, vols intérieurs et chauffeurs privés : nos recommandations."
    },
    {
      id: 8,
      title: "Météo & Saisons",
      category: "Planification",
      image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&w=800&q=80",
      description: "Choisir la meilleure période pour visiter le Rajasthan, le Kerala ou l'Himalaya."
    },
    {
      id: 9,
      title: "Cuisine & Alimentation",
      category: "Gastronomie",
      image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&w=800&q=80",
      description: "Nos conseils pour savourer la street-food sans risques et découvrir les saveurs locales."
    }
  ];

  return (
    <div className="bg-[#FAF9F6] min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[85vh] w-full overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=2000&q=80"
            alt="Avant de Partir Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/50"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl pt-20 md:pt-32">
          <h1 className="text-white text-5xl sm:text-7xl md:text-9xl font-serif italic mb-6 md:mb-8 animate-fadeInUp drop-shadow-2xl">
            Préparez
          </h1>
          <p className="text-white/90 text-xs md:text-[16px] tracking-[0.3em] md:tracking-[0.4em] uppercase mb-10 md:mb-12 animate-fadeInUp font-light leading-relaxed" style={{ animationDelay: '200ms' }}>
            Tout ce qu'il faut savoir avant de s'envoler <br className="hidden md:block" /> pour un voyage inoubliable en terre indienne.
          </p>
          <div className="animate-fadeInUp" style={{ animationDelay: '400ms' }}>
            <button className="bg-transparent border border-white/40 text-white text-[11px] tracking-[0.4em] font-bold py-6 px-14 hover:bg-white hover:text-black transition-all duration-700 uppercase rounded-sm backdrop-blur-[2px]">
              Nous Contacter
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-24">
        {/* Header */}
        <div className="text-center mb-16 md:mb-24 animate-fadeIn">
          <h2 className="text-[10px] md:text-[12px] font-bold tracking-[0.5em] text-[#A88B52] uppercase mb-4">Informations Pratiques</h2>
          <div className="w-24 h-[1px] bg-[#A88B52] mx-auto mt-6 md:mt-8 opacity-30"></div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
          {articles.map((article, index) => (
            <div
              key={article.id}
              className="group cursor-pointer animate-fadeInUp"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden aspect-[3/4] mb-8 shadow-sm">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"></div>

                {/* Hover Details */}
                <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-gradient-to-t from-black/60 to-transparent">
                  <button className="text-white text-[10px] font-bold tracking-[0.2em] uppercase border-b border-white/50 pb-1">
                    En savoir plus
                  </button>
                </div>
              </div>

              <div className="text-center px-4">
                <span className="text-[10px] font-bold tracking-[0.3em] text-[#A88B52] uppercase mb-3 block">
                  {article.category}
                </span>
                <h3 className="text-2xl font-serif text-gray-800 mb-4 group-hover:text-[#A88B52] transition-colors duration-300 italic">
                  {article.title}
                </h3>
                <p className="text-[14px] text-gray-500 leading-relaxed font-light line-clamp-2 italic opacity-80">
                  "{article.description}"
                </p>

                <div className="mt-8 flex justify-center items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="h-[1px] w-8 bg-[#A88B52]/30"></div>
                  <span className="text-[10px] font-medium text-gray-400 uppercase tracking-[0.3em]">Consulter</span>
                  <div className="h-[1px] w-8 bg-[#A88B52]/30"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="mt-32 text-center">
          <button className="px-14 py-6 border border-[#A88B52]/30 text-[#A88B52] text-[11px] font-bold tracking-[0.4em] uppercase hover:bg-[#A88B52] hover:text-white transition-all duration-500 rounded-full">
            Télécharger le Guide PDF
          </button>
        </div>
      </div>
      <EspritIndeora />

      <Footer />
    </div>
  );
};

export default AvantDePartir;
