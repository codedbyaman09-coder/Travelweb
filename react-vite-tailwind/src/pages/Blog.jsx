import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import EspritIndeora from '../components/EspritIndeora';
import blogHeroImg from '../assets/image copy 44.png';

const Blog = () => {
  const [visiblePosts, setVisiblePosts] = useState(6);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const handleLoadMore = () => {
    setIsLoadingMore(true);
    setTimeout(() => {
      setVisiblePosts(prev => prev + 3);
      setIsLoadingMore(false);
    }, 1500);
  };

  const posts = [
    {
      id: 1,
      title: "Rajasthan Royale",
      category: "Heritage & Culture",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2WaN4uFLmSnMZh46fxzWRdxJJ8iKUVZn9kw&s",
      description: "Experience the majestic forts and palaces of India's desert kingdom.",
      link: "/blog/rajasthan-royale"
    },
    {
      id: 2,
      title: "VOYAGE EN INDE : LE GUIDE COMPLET POUR UN PREMIER VOYAGE",
      category: "Nature & Wellness",
      image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&q=80&w=800",
      description: "Drift through the serene waterways on a luxury houseboat.",
      link: "/blog/kerala-backwaters"
    },
    {
      id: 3,
      title: "POURQUOI L’INDE CHANGE PROFONDÉMENT CEUX QUI LA DÉCOUVRENT",
      category: "Spirituality",
      image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&q=80&w=800",
      description: "Witness the eternal rituals on the banks of the sacred Ganges.",
      link: "/blog/spiritual-varanasi"
    },
    {
      id: 4,
      title: "Ladakh Heights",
      category: "Adventure",
      image: "https://images.unsplash.com/photo-1581791534721-e599df4417f7?auto=format&fit=crop&q=80&w=800",
      description: "Journey through the high-altitude deserts and mountain passes."
    },
    {
      id: 5,
      title: "Goan Serenity",
      category: "Beach & Leisure",
      image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&q=80&w=800",
      description: "Relax on pristine white sands and enjoy Portuguese architecture."
    },
    {
      id: 6,
      title: "Hampi Echoes",
      category: "Ancient Ruins",
      image: "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&q=80&w=800",
      description: "Explore the boulder-strewn landscapes of the Vijayanagara Empire."
    },
    {
      id: 7,
      title: "Munnar Mist",
      category: "Nature",
      image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=800",
      description: "Lose yourself in the rolling tea gardens and misty mountains."
    },
    {
      id: 8,
      title: "Udaipur Romance",
      category: "Luxury",
      image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&q=80&w=800",
      description: "The city of lakes offers a perfect blend of luxury and romance."
    },
    {
      id: 9,
      title: "Rishikesh Retreat",
      category: "Yoga & Wellness",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2WaN4uFLmSnMZh46fxzWRdxJJ8iKUVZn9kw&s",
      description: "Find inner peace in the yoga capital of the world."
    }
  ];

  return (
    <div className="bg-[#FAF9F6] min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[85vh] w-full overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src={blogHeroImg}
            alt="Blog Hero"
            className="w-full h-full object-cover object-[75%_center]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/50"></div>
        </div>

        <div className="relative z-10 text-center px-12 max-w-4xl pt-20 md:pt-32">
          <div className="md:translate-x-72 lg:translate-x-[33rem] translate-y-32 md:translate-y-[15rem] animate-fadeInUp text-center max-w-2xl mx-auto" style={{ animationDelay: '200ms' }}>
            <h1 className="text-white text-[9.5px] md:text-[11.5px] lg:text-[13px] tracking-[0.25em] md:tracking-[0.3em] uppercase font-medium leading-relaxed mb-5 max-w-md mx-auto">
              Récits de voyage, inspirations, <br className="hidden md:block" /> conseils et regards authentiques sur l’Inde.
            </h1>
            <p className="text-white/80 text-[7.5px] md:text-[9px] tracking-[0.18em] md:tracking-[0.22em] uppercase font-light leading-relaxed max-w-lg mx-auto">
              À travers nos carnets, découvrez une Inde élégante, humaine et profondément inspirante,<br className="hidden md:block" />
              racontée au fil des rencontres, des émotions et des experiences vécues sur le terrain.
            </p>
          </div>


        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-24">
        {/* Header */}
        <div className="text-center mb-16 md:mb-24 animate-fadeIn">
          <h2 className="text-[9px] md:text-[14px] lg:text-[17px] font-bold tracking-[0.25em] md:tracking-[0.35em] lg:tracking-[0.45em] text-[#A88B52] uppercase mb-4 w-full whitespace-nowrap">“Plus qu’une destination, l’Inde est une émotion qui se raconte.”
          </h2>
          <div className="w-24 h-[1px] bg-[#A88B52] mx-auto mt-6 md:mt-8 opacity-30"></div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
          {posts.slice(0, visiblePosts).map((post, index) => {
            const CardComponent = post.link ? Link : 'div';
            const extraProps = post.link ? { to: post.link } : {};
            return (
              <CardComponent
                key={post.id}
                className="group cursor-pointer animate-fadeInUp block"
                style={{ animationDelay: `${index * 100}ms` }}
                {...extraProps}
              >
                <div className="relative overflow-hidden aspect-[3/4] mb-8 shadow-sm">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"></div>

                  {post.link ? (
                    /* Hover Details for real articles */
                    <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-gradient-to-t from-black/60 to-transparent">
                      <button className="text-white text-[10px] font-bold tracking-[0.2em] uppercase border-b border-white/50 pb-1">
                        Découvrir l'article
                      </button>
                    </div>
                  ) : (
                    /* Hover/Permanent state for unlinked cards */
                    <>
                      {/* Dark overlay on hover */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/45 transition-colors duration-500 flex items-center justify-center">
                        {/* Smooth gradient circular loading spinner in the center on hover */}
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                          <svg className="animate-spin h-10 w-10 text-white/90" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3"></circle>
                            <path className="opacity-75" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" d="M12 2a10 10 0 0110 10"></path>
                          </svg>
                        </div>
                      </div>

                      {/* Permanent PROCHAINEMENT text at the bottom left */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none"></div>
                      <div className="absolute bottom-52 left-8 z-10">
                        <span className="text-white text-[16px] md:text-[20px] lg:text-[22px] font-bold tracking-[0.25em] uppercase border-b-[3px] border-white/70 pb-2">
                          PROCHAINEMENT
                        </span>
                      </div>
                    </>
                  )}
                </div>

                <div className="text-center px-4">
                  <span className="text-[10px] font-bold tracking-[0.3em] text-[#A88B52] uppercase mb-3 block">
                    {post.category}
                  </span>
                  <h3 className="text-2xl font-serif text-gray-800 mb-4 group-hover:text-[#A88B52] transition-colors duration-300 italic">
                    {post.title}
                  </h3>
                  <p className="text-[14px] text-gray-500 leading-relaxed font-light line-clamp-2 italic opacity-80">
                    "{post.description}"
                  </p>

                  <div className="mt-8 flex justify-center items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="h-[1px] w-8 bg-[#A88B52]/30"></div>
                    <span className="text-[13px] md:text-[15px] font-bold text-gray-400 uppercase tracking-[0.3em]">
                      {post.link ? "Lire la suite" : "PROCHAINEMENT"}
                    </span>
                    <div className="h-[1px] w-8 bg-[#A88B52]/30"></div>
                  </div>
                </div>
              </CardComponent>
            );
          })}
        </div>

        {/* Footer CTA */}
        {visiblePosts < posts.length && (
          <div className="mt-32 text-center">
            <button
              onClick={handleLoadMore}
              disabled={isLoadingMore}
              className="px-14 py-6 border border-[#A88B52]/30 text-[#A88B52] text-[11px] font-bold tracking-[0.4em] uppercase hover:bg-[#A88B52] hover:text-white transition-all duration-500 rounded-full inline-flex items-center justify-center min-w-[280px]"
            >
              {isLoadingMore ? (
                <span className="flex items-center justify-center gap-3">
                  <svg className="animate-spin h-5 w-5 text-[#A88B52]" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3"></circle>
                    <path className="opacity-75" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" d="M12 2a10 10 0 0110 10"></path>
                  </svg>
                  <span className="ml-1">Chargement...</span>
                </span>
              ) : (
                "Charger plus d'articles"
              )}
            </button>
          </div>
        )}
      </div>
      <EspritIndeora />

      <Footer />
    </div>
  );
};

export default Blog;
