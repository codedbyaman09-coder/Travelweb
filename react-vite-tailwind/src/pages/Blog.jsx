import React from 'react';
import Footer from '../components/Footer';
import EspritIndeora from '../components/EspritIndeora';

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: "Rajasthan Royale",
      category: "Heritage & Culture",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2WaN4uFLmSnMZh46fxzWRdxJJ8iKUVZn9kw&s",
      description: "Experience the majestic forts and palaces of India's desert kingdom."
    },
    {
      id: 2,
      title: "Kerala Backwaters",
      category: "Nature & Wellness",
      image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&q=80&w=800",
      description: "Drift through the serene waterways on a luxury houseboat."
    },
    {
      id: 3,
      title: "Spiritual Varanasi",
      category: "Spirituality",
      image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&q=80&w=800",
      description: "Witness the eternal rituals on the banks of the sacred Ganges."
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
            src="https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=2000&q=80"
            alt="Blog Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/50"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl pt-20 md:pt-32">
          <h1 className="text-white text-5xl sm:text-7xl md:text-9xl font-serif italic mb-6 md:mb-8 animate-fadeInUp drop-shadow-2xl">
            Inspirations
          </h1>
          <p className="text-white/90 text-xs md:text-[16px] tracking-[0.3em] md:tracking-[0.4em] uppercase mb-10 md:mb-12 animate-fadeInUp font-light leading-relaxed" style={{ animationDelay: '200ms' }}>
            Discover incredible stories and hidden gems from the heart of India, <br className="hidden md:block" /> brimming with culture and heritage all-year round.
          </p>
          <div className="animate-fadeInUp" style={{ animationDelay: '400ms' }}>
            <button className="bg-transparent border border-white/40 text-white text-[11px] tracking-[0.4em] font-bold py-6 px-14 hover:bg-white hover:text-black transition-all duration-700 uppercase rounded-sm backdrop-blur-[2px]">
              Book Your Voyage
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-24">
        {/* Header */}
        <div className="text-center mb-16 md:mb-24 animate-fadeIn">
          <h2 className="text-[10px] md:text-[12px] font-bold tracking-[0.5em] text-[#A88B52] uppercase mb-4">Inspiration</h2>
          <div className="w-24 h-[1px] bg-[#A88B52] mx-auto mt-6 md:mt-8 opacity-30"></div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
          {posts.map((post, index) => (
            <div
              key={post.id}
              className="group cursor-pointer animate-fadeInUp"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden aspect-[3/4] mb-8 shadow-sm">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"></div>

                {/* Hover Details */}
                <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-gradient-to-t from-black/60 to-transparent">
                  <button className="text-white text-[10px] font-bold tracking-[0.2em] uppercase border-b border-white/50 pb-1">
                    Découvrir l'article
                  </button>
                </div>
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
                  <span className="text-[10px] font-medium text-gray-400 uppercase tracking-[0.3em]">Lire la suite</span>
                  <div className="h-[1px] w-8 bg-[#A88B52]/30"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="mt-32 text-center">
          <button className="px-14 py-6 border border-[#A88B52]/30 text-[#A88B52] text-[11px] font-bold tracking-[0.4em] uppercase hover:bg-[#A88B52] hover:text-white transition-all duration-500 rounded-full">
            Charger plus d'articles
          </button>
        </div>
      </div>
      <EspritIndeora />

      <Footer />
    </div>
  );
};

export default Blog;
