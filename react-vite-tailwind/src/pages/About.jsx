import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import EspritIndeora from '../components/EspritIndeora';

const About = () => {
  return (
    <div className="pt-0 bg-white overflow-hidden">
      {/* Hero Section - Sam to Sam with Destinations */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=2000&q=80"
            alt="À Propos Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/15"></div>
        </div>
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto text-white pt-32 md:pt-40">
          <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-[100px] font-serif italic mb-6 drop-shadow-2xl leading-none">
            À Propos
          </h1>
          <p className="text-[12px] md:text-[14px] font-bold tracking-[0.1em] mb-6 max-w-3xl mx-auto opacity-90 leading-relaxed drop-shadow-md">
            Découvrez l'équipe passionnée derrière Indeora Voyages, votre agence franco-indienne de voyages sur mesure.
          </p>
          <div className="pt-2">
            <button className="bg-black text-white text-[10px] tracking-[0.3em] font-bold py-5 px-12 border border-white/60 hover:bg-white hover:text-black transition-all duration-500 uppercase">
              DÉCOUVRIR NOTRE HISTOIRE
            </button>
          </div>
        </div>
      </section>

      {/* 1. Hero / Founder Section (Vishnu Swami) */}
      <section className="bg-[#C2A36B] py-8 md:py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-6 md:gap-12">
          <div className="w-full md:w-[25%]">
            <div className="relative aspect-[3/4] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
              <img
                src="https://indeoravoyages.com/wp-content/uploads/2025/08/rajan-768x611.jpg"
                alt="Vishnu Swami"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="w-full md:w-[60%] text-[#2d343e] text-center md:text-left">
            <h3 className="text-[9px] md:text-[10px] tracking-[0.5em] font-bold opacity-60 mb-3 uppercase">
              DÉCOUVREZ VISHNU SWAMI ET SON RÉSEAU UNIQUE
            </h3>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif italic mb-4 leading-[1.1]">
              Vishnu Swami – Fondateur et accompagnateur francophone
            </h2>
            <div className="space-y-4 text-[#2d343e]/90 leading-relaxed text-[14px] font-medium max-w-xl">
              <p>
                Passionné de voyages depuis toujours, Vishnu Swami a d’abord exploré le monde au-delà de l’Inde. Il a vécu plusieurs années en France où il a appris le français qu’il parle couramment, et s’est imprégné de la culture et de l’humour français.
              </p>
              <p>
                Formé au BJS Rampuria Jain College (Bikaner), Vishnu a commencé comme guide local certifié dans sa ville natale, puis a accompagné des groupes pour de grands Tours Opérateurs internationaux. Fort de 14 ans d’expérience, il est aujourd’hui reconnu pour son sérieux.
              </p>
              <div className="pt-4">
                <button className="bg-[#2d343e] hover:bg-black text-white text-[10px] tracking-[0.4em] font-bold py-4 px-10 rounded-sm shadow-lg transition-all duration-300 uppercase">
                  NOTRE PROMESSE
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Featured In Section */}
      {/* <section className="bg-white py-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="font-serif italic text-[#A88B52] text-[15px] mb-12 opacity-90">
            Indeora Voyages has been featured in:
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-10 opacity-90 grayscale contrast-125">
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/The_New_York_Times_logo.svg" alt="NYT" className="h-6 md:h-8" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Travel_%2B_Leisure_logo.svg/1280px-Travel_%2B_Leisure_logo.svg.png" alt="Travel + Leisure" className="h-8 md:h-10" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Town_%26_Country_Logo.svg/2560px-Town_%26_Country_Logo.svg.png" alt="Town & Country" className="h-8 md:h-10" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Conde_Nast_Traveler_logo.svg/2560px-Conde_Nast_Traveler_logo.svg.png" alt="Traveler" className="h-6 md:h-8" />
            <span className="text-2xl md:text-3xl font-serif font-bold text-black">the knot</span>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Bloomberg_Logo.svg/2560px-Bloomberg_Logo.svg.png" alt="Bloomberg" className="h-6 md:h-8" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/The_Hollywood_Reporter_logo.svg/2560px-The_Hollywood_Reporter_logo.svg.png" alt="Hollywood Reporter" className="h-6 md:h-8" />
          </div>
        </div>
      </section> */}


      {/* 4. Our Unique Network */}

      {/* 5. Detailed Biography Section (Amandine Fastré) */}
      <section className="bg-[#60727A] py-10 md:py-13 px-6 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row-reverse gap-8 md:gap-12 items-center">
          {/* Right: Round Image and Title */}
          <div className="w-full md:w-1/3 flex flex-col items-center text-center">
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-[#A88B52] mb-8 md:mb-10 shadow-2xl">
              <img
                src="https://indeoravoyages.com/wp-content/uploads/2025/08/amandine-indeora-voyages-1.jpg"
                alt="Amandine Fastré"
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-2xl md:text-3xl font-serif italic leading-tight text-white">
              Amandine Fastré - Créatrice d'itinéraires sur mesure
            </h2>
          </div>

          {/* Left: Bio Text */}
          <div className="w-full md:w-2/3">
            <div className="space-y-4 md:space-y-6 text-white/90 leading-relaxed text-[14px] md:text-[15px] text-center md:text-left">
              <p className="text-xl font-serif italic text-white">
                Amandine est une véritable passionnée de l’Inde, un pays où elle a vécu plus de 15 ans en tant que créatrice de voyages sur mesure.
              </p>
              <p>
                Durant ces années, elle a sillonné de nombreuses régions et exploré des lieux authentiques pour peaufiner ses itinéraires avec soin. L’Inde n’a plus de secret pour elle ! C’est d’ailleurs au détour d’un voyage qu’elle a rencontré Vishnu Swami, donnant naissance à une amitié et une collaboration précieuse.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                <div>
                  <h3 className="text-xl font-serif italic text-[#A88B52] mb-4 border-b border-[#A88B52]/20 pb-2">Son parcours</h3>
                  <p className="text-[15px] font-light">
                    Après des études en Information et Communication à Montpellier, Amandine a décidé de partir avec son sac-à-dos découvrir le monde. Lorsqu’elle a posé le pied en Inde, ce pays s’est imposé à elle comme une seconde maison.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-serif italic text-[#A88B52] mb-4 border-b border-[#A88B52]/20 pb-2">Son rôle aujourd’hui</h3>
                  <p className="text-[15px] font-light">
                    Installée en France, Amandine reste profondément connectée à l’Inde. Elle met son expérience du terrain et son regard franco-indien au service des voyageurs en créant des circuits uniques.
                  </p>
                </div>

                <div className="md:col-span-2">
                  <h3 className="text-xl font-serif italic text-[#A88B52] mb-4 border-b border-[#A88B52]/20 pb-2">Une alliance franco-indienne</h3>
                  <p className="text-[15px] font-light">
                    L’amitié et la confiance qui unissent Amandine et Vishnu sont au cœur de l’esprit de l’agence Indeora voyages. Grâce à cette complicité, nos voyageurs bénéficient d’un accompagnement privilégié et d’une approche à la fois humaine, experte et passionnée.
                  </p>
                </div>
              </div>

              <div className="pt-4">
                <button className="bg-[#2d343e] hover:bg-black text-white text-[10px] tracking-[0.3em] font-bold py-4 px-10 rounded-sm transition-all duration-300 uppercase shadow-lg">
                  NOTRE ÉQUIPE
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Agency Overview */}
      <section className="bg-[#f5f5f5] py-10 md:py-14 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-start text-[#2d343e]">
          <div className="max-w-md text-center md:text-left mx-auto md:mx-0">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">Indeora Voyages</h2>
            <p className="text-[#A88B52] text-[14px] mb-6">— Voyages sur mesure et authentiques</p>
            <p className="text-[15px] text-gray-600 leading-relaxed">
              Chez Indeora voyages, nous créons des voyages sur mesure et authentiques, guidés par une équipe francophone basée en Inde. Nous privilégions les rencontres, culture, nature et confort.
            </p>
          </div>
          <div className="space-y-6 text-[15px] leading-relaxed text-gray-600 text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-semibold text-[#2d343e] mb-4">Indeora Voyages</h2>
            <p>
              est une agence de voyage franco indienne spécialisée dans les circuits et séjours sur mesure. Implantée au Rajasthan à Bikaner, l’agence propose des voyages en Inde sans intermédiaire.
            </p>
            <p>
              Son fondateur Vishnu Swami (Rajan) en Inde et Amandine Fastré en France, ont pour unique préoccupation de répondre à vos attentes.
            </p>
            <p>
              Grâce à une équipe francophone aux partenariats solides, Indeora voyages conçoit des séjours authentiques et personnalisés.
            </p>
          </div>
        </div>
      </section>

      {/* NEW SECTION ADDED FROM SCREENSHOT: Ce qui nous rend différents */}
      <section className="bg-[#e4e4e4] py-10 md:py-14 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">

          {/* Text Content (Left side) */}
          <div className="w-full md:w-1/2 text-[#1a1a1a]">
            <h2 className="text-xl font-bold mb-6">Ce qui nous rend différents</h2>
            <div className="space-y-5 text-[14px] leading-relaxed text-gray-800">
              <p>
                Chez Indeora Voyages / à Indeora Voyages en Inde, agence locale en Inde, nous croyons qu'un voyage réussi repose sur l'expertise, la proximité et la passion. Forte de plusieurs décennies d'expérience, notre équipe franco-indienne a fait de l'Inde sa seconde maison. Nous ne nous contentons pas d'y passer ; nous y vivons, respirons et cultivons des relations durables avec les habitants, ce qui nous permet d'ouvrir des portes qui restent fermées aux voyageurs occasionnels.
              </p>
              <p>
                Cette immersion se traduit par des itinéraires authentiques et créatifs. Nous accompagnons nos clients de manière pédagogique, en partageant notre connaissance de l'histoire, des coutumes et des paysages variés du pays, qui s'étendent des sommets himalayens aux îles tropicales. Chaque étape est pensée pour mettre en avant des expériences uniques (rencontres locales, visites de sites classés, festivals) tout en laissant la place à vos propres découvertes.
              </p>
              <p>
                Nous proposons aussi bien des voyages en Inde du Nord (Delhi, Agra, Jaipur, Varanasi) que des voyages en Inde du Sud (Kerala, Tamil Nadu, Karnataka), en passant par l'Est et le Ladakh. Notre présence sur place garantit des prestations de qualité, des guides francophones certifiés, un confort optimal et un respect des communautés locales. Contrairement à certains opérateurs qui privilégient le volume, nous privilégions la satisfaction et ne faisons aucun compromis sur le contenu de nos circuits. Notre motivation est de partager notre passion pour l'Inde et de vous offrir des souvenirs inoubliables, pas simplement de vendre un voyage.
              </p>
            </div>
          </div>

          {/* Image Content (Right side) */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <div className="w-full max-w-[450px]">
              <img
                src="https://images.unsplash.com/photo-1514222045582-70bfa3f80c55?auto=format&fit=crop&w=800&q=80"
                alt="Rituel Indien"
                className="w-full h-[350px] md:h-[600px] object-cover shadow-md"
              />
            </div>
          </div>

        </div>
      </section>
      <section className="bg-white py-2 md:py-4 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-[9px] md:text-[10px] tracking-[0.4em] font-bold text-[#2d343e]/40 mb-2 uppercase">
            DISCOVER THE BEST OF INDIA - LIKE AN INSIDER
          </h3>
          <h2 className="text-[9px] md:text-[10px] tracking-[0.2em] font-bold text-[#A88B52] mb-4 uppercase">
            THIS MONTH'S FEATURED DESTINATIONS
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-4 px-4 py-2">
            {[
              { name: 'Rajasthan', img: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80' },
              { name: 'Kerala', img: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80' },
              { name: 'Taj Mahal', img: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=80' },
              { name: 'Varanasi', img: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=800&q=80' },
              { name: 'Gujarat', img: 'https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&w=800&q=80' },
            ].map((dest, i) => (
              <div key={i} className="flex flex-col items-center group cursor-pointer">
                <div className="relative w-full h-[300px] md:h-[350px] overflow-hidden shadow-lg mb-4">
                  <img
                    src={dest.img}
                    alt={dest.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition-colors"></div>
                </div>
                <span className="text-[#2d343e] text-[10px] md:text-[11px] font-bold tracking-[0.2em] uppercase font-serif italic">
                  {dest.name}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-4">
            <button className="bg-[#2d343e] hover:bg-black text-white text-[10px] tracking-[0.3em] font-bold py-4 px-12 rounded-sm transition-all duration-300 uppercase">
              VIEW ALL DESTINATIONS
            </button>
          </div>
        </div>
      </section>


      <EspritIndeora />

      <Footer />

      <style dangerouslySetInnerHTML={{ __html: `.vertical-text { writing-mode: vertical-rl; text-orientation: mixed; transform: rotate(180deg); }` }} />
    </div>
  );
};

export default About;