import React, { useState } from 'react';
// import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const SpiritualVaranasi = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "Pourquoi un voyage en Inde marque autant ?",
      answer: "Parce que l’Inde est une destination profondément émotionnelle et humaine, où les rencontres, les contrastes et la spiritualité créent une expérience intense."
    },
    {
      question: "L’Inde est-elle difficile pour un premier voyage ?",
      answer: "Avec un itinéraire bien pensé et un accompagnement local, le voyage devient fluide et enrichissant. Avec un itinéraire bien pensé et un accompagnement local, le voyage devient fluide et enrichissant."
    },
    {
      question: "Quelle région choisir pour découvrir l’Inde ?",
      answer: "Le Rajasthan est idéal pour une première découverte, tandis que le Kerala séduit par son atmosphère paisible."
    },
    {
      question: "Pourquoi les voyageurs parlent-ils d’un avant et d’un après l’Inde ?",
      answer: "Parce que l’Inde pousse souvent à sortir de ses repères habituels et transforme la manière de devoir le monde." 
    },
  ];

  return (
    <div className="bg-[#FAF9F6] min-h-screen font-light">
      {/* <Navbar /> */}

      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[75vh] lg:h-[85vh] overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&q=80&w=1600"
            alt="Varanasi Gange"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]"></div>
        </div>

        <div className="relative z-10 text-center text-white mt-16 md:mt-24 w-full max-w-[1440px] mx-auto px-[40px]">
          <span className="text-[10px] md:text-[12px] font-bold tracking-[0.4em] text-[#A88B52] uppercase mb-4 md:mb-6 block animate-fadeIn">
            L'Inde d'Exception
          </span>
          <h1 className="font-serif text-[32px] md:text-[50px] lg:text-[64px] leading-tight md:leading-[1.15] text-white uppercase tracking-wider mb-6 max-w-4xl mx-auto drop-shadow-md">
          POURQUOI L’INDE CHANGE
PROFONDÉMENT CEUX QUI LA
DÉCOUVRENT


          </h1>
          <div className="w-24 h-[1px] bg-[#A88B52] mx-auto mb-6 opacity-80"></div>
          <p className="text-[12px] md:text-[15px] lg:text-[17px] font-serif italic text-gray-200 tracking-wide max-w-2xl mx-auto font-light leading-relaxed">
          Les Carnets d’Indeora — Une expérience émotionnelle et profondément humaine

          </p>
        </div>
      </section>

      {/* Editorial Content Container */}
      <div className="relative z-25 md: -mt-4 md:-mt-8 mb-24 animate-fadeIn w-full max-w-[1440px] mx-auto px-[40px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">

          {/* Left Column: Flanking cards for all Subsections */}
          <div className="lg:col-span-3 lg:w-full lg:mx-auto">
            {/* Card 1: Flanking Section 1 Image */}
            <div className="lg:mt-[655px]">
              <div className="relative overflow-hidden aspect-[4/5] bg-white shadow-2xl rounded-sm border border-gray-150 p-3 animate-fadeIn lg:max-w-[239px] mx-auto">
                <img
                  src="https://images.unsplash.com/photo-1598091383021-15ddea10925d?auto=format&fit=crop&q=80&w=800"
                  alt="Rajasthan Royale Left Featured 1"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            {/* Card 2: Flanking Section 2 Image */}
            <div className="lg:mt-[356px]">
              <div className="relative overflow-hidden aspect-[4/5] bg-white shadow-2xl rounded-sm border border-gray-150 p-3 animate-fadeIn lg:max-w-[239px] mx-auto group cursor-pointer">
                <img
                  src="https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&q=80&w=800"
                  alt="Rajasthan Royale Left Featured 2"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-3 bg-black/0 group-hover:bg-black/45 transition-colors duration-500 flex items-center justify-center rounded-sm">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center gap-3">
                    <span className="text-white text-[11px] md:text-[13px] font-bold tracking-[0.25em] uppercase border-b border-white/40 pb-1">
                      PROCHAINEMENT
                    </span>
                    <svg className="animate-spin h-7 w-7 text-white/90" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3"></circle>
                      <path className="opacity-75" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" d="M12 2a10 10 0 0110 10"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3: Flanking Section 3 Image */}
            <div className="lg:mt-[325px]">
              <div className="relative overflow-hidden aspect-[4/5] bg-white shadow-2xl rounded-sm border border-gray-150 p-3 animate-fadeIn lg:max-w-[240px] mx-auto group cursor-pointer">
                <img
                  src="https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&q=80&w=800"
                  alt="Rajasthan Royale Left Featured 2"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-3 bg-black/0 group-hover:bg-black/45 transition-colors duration-500 flex items-center justify-center rounded-sm">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center gap-3">
                    <span className="text-white text-[11px] md:text-[13px] font-bold tracking-[0.25em] uppercase border-b border-white/40 pb-1">
                      PROCHAINEMENT
                    </span>
                    <svg className="animate-spin h-7 w-7 text-white/90" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3"></circle>
                      <path className="opacity-75" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" d="M12 2a10 10 0 0110 10"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            {/* Card 4: Flanking Section 4 Image */}
            <div className="lg:mt-[291px]">
              <div className="relative overflow-hidden aspect-[4/5] bg-white shadow-2xl rounded-sm border border-gray-150 p-3 animate-fadeIn lg:max-w-[240px] mx-auto group cursor-pointer">
                <img
                  src="https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&q=80&w=800"
                  alt="Rajasthan Royale Left Featured 2"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-3 bg-black/0 group-hover:bg-black/45 transition-colors duration-500 flex items-center justify-center rounded-sm">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center gap-3">
                    <span className="text-white text-[11px] md:text-[13px] font-bold tracking-[0.25em] uppercase border-b border-white/40 pb-1">
                      PROCHAINEMENT
                    </span>
                    <svg className="animate-spin h-7 w-7 text-white/90" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3"></circle>
                      <path className="opacity-75" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" d="M12 2a10 10 0 0110 10"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            {/* Card 5: Flanking Section 5 Image */}
            <div className="lg:mt-[291px]">
              <div className="relative overflow-hidden aspect-[4/5] bg-white shadow-2xl rounded-sm border border-gray-150 p-3 animate-fadeIn lg:max-w-[240px] mx-auto group cursor-pointer">
                <img
                  src="https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&q=80&w=800"
                  alt="Rajasthan Royale Left Featured 2"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-3 bg-black/0 group-hover:bg-black/45 transition-colors duration-500 flex items-center justify-center rounded-sm">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center gap-3">
                    <span className="text-white text-[11px] md:text-[13px] font-bold tracking-[0.25em] uppercase border-b border-white/40 pb-1">
                      PROCHAINEMENT
                    </span>
                    <svg className="animate-spin h-7 w-7 text-white/90" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3"></circle>
                      <path className="opacity-75" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" d="M12 2a10 10 0 0110 10"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Center Column: Main overlapping white editorial card */}
          <div className="lg:col-span-6">
            <div className="bg-white shadow-xl border border-gray-100 rounded-sm p-6 md:p-8 text-gray-800">

              {/* Intro Section */}
              <div className="prose prose-lg max-w-none text-gray-700 font-light leading-relaxed text-[15px] md:text-[17px]">
                {/* Central Luxury Quote */}
                <div className="mb-8 py-6 border-y border-[#A88B52]/20 text-center max-w-2xl mx-auto">
                  <p className="font-serif italic text-[18px] md:text-[22px] text-[#A88B52] leading-relaxed">
                    « L’Inde ne se visite pas simplement. Elle se ressent, s’écoute et se vit intensément. »
                  </p>
                </div>

                <p className="font-light italic leading-loose text-justify text-gray-600 first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:text-[#A88B52] first-letter:mr-3 first-letter:float-left first-letter:mt-1">
                  Certaines destinations offrent de beaux paysages. D’autres permettent simplement de
changer d’air quelques jours. Mais l’Inde laisse une trace bien plus profonde. Pour beaucoup
de voyageurs, un premier voyage en Inde commence avec des images en tête : les palais du
Rajasthan, les couleurs des marchés, les cérémonies sur le Gange ou les paysages
majestueux de l’Himalaya. Pourtant, une fois sur place, quelque chose change. Le voyage
devient émotion.

                </p>
              </div>

              {/* Subsections Divider */}
              <div className="space-y-16 mt-16 pt-16 border-t border-gray-100">

                {/* Subsection 1 */}
                <div className="mb-16">
                  <h2 className="font-serif text-[24px] md:text-[30px] text-[#A88B52] italic mb-6">
                    Une intensité unique
                  </h2>

                  <div className="relative overflow-hidden aspect-[16/9] mb-8 border border-[#A88B52]/20 p-1 bg-white">
                    <img
                      src="https://images.unsplash.com/photo-1598091383021-15ddea10925d?auto=format&fit=crop&q=80&w=1200"
                      alt="Taj Lake Palace Udaipur"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <p className="leading-loose font-light mb-4 text-justify">
                    Dans les rues animées de Delhi, entre les rickshaws, les parfums d’épices et les scènes de
vie fascinantes, le voyageur découvre une énergie impossible à comparer avec un autre
pays. Pourtant, au milieu de cette agitation, apparaissent aussi des instants de calme
presque irréels : une cérémonie au bord du Gange, un coucher de soleil dans le désert du
Rajasthan ou le silence d’un temple ancien.


                  </p>
                </div>

                {/* Subsection 2 */}
                <div className="mb-16">
                  <h2 className="font-serif text-[24px] md:text-[30px] text-[#A88B52] italic mb-6">
                    Le voyage devient plus humain
                  </h2>

                  <div className="relative overflow-hidden aspect-[16/9] mb-8 border border-[#A88B52]/20 p-1 bg-white">
                    <img
                      src="https://images.unsplash.com/photo-1603262110263-fb0112e7cc33?auto=format&fit=crop&q=80&w=1200"
                      alt="Hawa Mahal Jaipur"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <p className="leading-loose font-light mb-4 text-justify">
                  Ce qui marque profondément les voyageurs, ce ne sont pas uniquement les lieux célèbres.
Ce sont souvent les moments les plus simples : une invitation spontanée à partager un chai,
une discussion improvisée avec un artisan ou un repas partagé avec une famille locale.



                  </p>
                </div>

                {/* Subsection 3 */}
                <div className="mb-16">
                  <h2 className="font-serif text-[24px] md:text-[30px] text-[#A88B52] italic mb-6">
                    Une autre manière de voyager

                  </h2>

                  <div className="relative overflow-hidden aspect-[16/9] mb-8 border border-[#A88B52]/20 p-1 bg-white">
                    <img
                      src="https://images.unsplash.com/photo-1591263128582-f4b7c2a78880?auto=format&fit=crop&q=80&w=1200"
                      alt="Lake Pichola Udaipur"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <p className="leading-loose font-light mb-4 text-justify">
                   En Inde, tout ne se passe pas toujours comme prévu. Et c’est précisément ce qui transforme
le voyage. Peu à peu, on apprend à ralentir, à accepter l’imprévu et à observer davantage
plutôt que vouloir tout contrôler.


                  </p>
                </div>

                {/* Subsection 4 */}
                <div className="mb-16">
                  <h2 className="font-serif text-[24px] md:text-[30px] text-[#A88B52] italic mb-6">
                    Chaque région raconte une émotion


                  </h2>

                  <div className="relative overflow-hidden aspect-[16/9] mb-8 border border-[#A88B52]/20 p-1 bg-white">
                    <img
                      src="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&q=80&w=1200"
                      alt="Camel desert sunset"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <p className="leading-loose font-light mb-4 text-justify">
                    Le Rajasthan évoque l’élégance des palais et les lumières dorées du désert. Le Kerala
apaise avec ses paysages tropicaux. Varanasi fascine par sa spiritualité et l’Himalaya invite
au silence et à la contemplation.

                  </p>
                </div>

                {/* Subsection 5 */}
                <div className="mb-16">
                  <h2 className="font-serif text-[24px] md:text-[30px] text-[#A88B52] italic mb-6">
                    Le vrai luxe en Inde
                  </h2>

                  <div className="relative overflow-hidden aspect-[16/9] mb-8 border border-[#A88B52]/20 p-1 bg-white">
                    <img
                      src="https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=1200"
                      alt="Luxury suite heritage"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <p className="leading-loose font-light mb-4 text-justify">
                    Le véritable luxe en Inde ne réside pas seulement dans les hôtels raffinés. Il se trouve dans
les émotions vécues : un lever de soleil sur le Gange, une nuit sous les étoiles dans le désert
ou une rencontre inattendue dans un village.
                  </p>
                </div>
              </div>

              {/* Subsection 6: FAQ Accordion */}
              <div className="mt-20 pt-16 border-t border-gray-100">
                <h2 className="font-serif text-[26px] md:text-[32px] text-[#A88B52] italic mb-10 text-center">
                  FAQ — Pourquoi l’Inde change profondément les
                </h2>

                <div className="space-y-4 max-w-3xl mx-auto">
                  {faqs.map((faq, idx) => (
                    <div
                      key={idx}
                      className="border-b border-[#A88B52]/10 pb-4 transition-all duration-300"
                    >
                      <button
                        onClick={() => toggleFaq(idx)}
                        className="w-full flex justify-between items-center text-left py-2 font-serif text-[16px] md:text-[18px] text-gray-800 hover:text-[#A88B52] transition-colors focus:outline-none"
                      >
                        <span>{faq.question}</span>
                        <span className="text-[#A88B52] font-light text-[22px] ml-4">
                          {openFaq === idx ? '−' : '+'}
                        </span>
                      </button>

                      <div
                        className={`overflow-hidden transition-all duration-500 ${openFaq === idx ? 'max-h-[300px] mt-4 opacity-100' : 'max-h-0 opacity-0'
                          }`}
                      >
                        <p className="text-[14px] md:text-[15px] text-gray-500 leading-relaxed font-light pl-4 border-l-2 border-[#A88B52]/30 italic">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Flanking cards for all Subsections */}
          <div className="lg:col-span-3 lg:w-full lg:mx-auto">
            {/* Card 1: Flanking Section 1 Image */}
            <div className="lg:mt-[655px]">
              <div className="relative overflow-hidden aspect-[4/5] bg-white shadow-2xl rounded-sm border border-gray-150 p-3 animate-fadeIn lg:max-w-[240px] mx-auto">
                <img
                  src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=800"
                  alt="Rajasthan Royale Right Featured 1"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Card 2: Flanking Section 2 Image */}
            <div className="lg:mt-[356px]">
              <div className="relative overflow-hidden aspect-[4/5] bg-white shadow-2xl rounded-sm border border-gray-150 p-3 animate-fadeIn lg:max-w-[240px] mx-auto group cursor-pointer">
                <img
                  src="https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&q=80&w=800"
                  alt="Rajasthan Royale Right Featured 2"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-3 bg-black/0 group-hover:bg-black/45 transition-colors duration-500 flex items-center justify-center rounded-sm">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center gap-3">
                    <span className="text-white text-[11px] md:text-[13px] font-bold tracking-[0.25em] uppercase border-b border-white/40 pb-1">
                      PROCHAINEMENT
                    </span>
                    <svg className="animate-spin h-7 w-7 text-white/90" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3"></circle>
                      <path className="opacity-75" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" d="M12 2a10 10 0 0110 10"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3: Flanking Section 3 Image */}
            <div className="lg:mt-[324px]">
              <div className="relative overflow-hidden aspect-[4/5] bg-white shadow-2xl rounded-sm border border-gray-150 p-3 animate-fadeIn lg:max-w-[240px] mx-auto group cursor-pointer">
                <img
                  src="https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&q=80&w=800"
                  alt="Rajasthan Royale Right Featured 2"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-3 bg-black/0 group-hover:bg-black/45 transition-colors duration-500 flex items-center justify-center rounded-sm">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center gap-3">
                    <span className="text-white text-[11px] md:text-[13px] font-bold tracking-[0.25em] uppercase border-b border-white/40 pb-1">
                      PROCHAINEMENT
                    </span>
                    <svg className="animate-spin h-7 w-7 text-white/90" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3"></circle>
                      <path className="opacity-75" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" d="M12 2a10 10 0 0110 10"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 4: Flanking Section 4 Image */}
            <div className="lg:mt-[290px]">
              <div className="relative overflow-hidden aspect-[4/5] bg-white shadow-2xl rounded-sm border border-gray-150 p-3 animate-fadeIn lg:max-w-[240px] mx-auto group cursor-pointer">
                <img
                  src="https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&q=80&w=800"
                  alt="Rajasthan Royale Right Featured 2"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-3 bg-black/0 group-hover:bg-black/45 transition-colors duration-500 flex items-center justify-center rounded-sm">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center gap-3">
                    <span className="text-white text-[11px] md:text-[13px] font-bold tracking-[0.25em] uppercase border-b border-white/40 pb-1">
                      PROCHAINEMENT
                    </span>
                    <svg className="animate-spin h-7 w-7 text-white/90" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3"></circle>
                      <path className="opacity-75" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" d="M12 2a10 10 0 0110 10"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            {/* Card 5: Flanking Section 5 Image */}
            <div className="lg:mt-[292px]">
              <div className="relative overflow-hidden aspect-[4/5] bg-white shadow-2xl rounded-sm border border-gray-150 p-3 animate-fadeIn lg:max-w-[240px] mx-auto group cursor-pointer">
                <img
                  src="https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&q=80&w=800"
                  alt="Rajasthan Royale Right Featured 2"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-3 bg-black/0 group-hover:bg-black/45 transition-colors duration-500 flex items-center justify-center rounded-sm">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center gap-3">
                    <span className="text-white text-[11px] md:text-[13px] font-bold tracking-[0.25em] uppercase border-b border-white/40 pb-1">
                      PROCHAINEMENT
                    </span>
                    <svg className="animate-spin h-7 w-7 text-white/90" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3"></circle>
                      <path className="opacity-75" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" d="M12 2a10 10 0 0110 10"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>



        </div>
      </div>

      {/* Bottom Luxury CTA Banner */}
      <section className="bg-[#132d45] py-20 px-6 relative overflow-hidden">
        {/* Subtle geometric lines */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <div className="absolute top-0 left-0 w-96 h-96 border border-white rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 border border-white rounded-full translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="relative z-10 max-w-[850px] mx-auto text-center">
          <span className="text-[9px] md:text-[11px] font-bold tracking-[0.4em] text-[#A88B52] uppercase mb-4 block">
            Votre Projet de Voyage
          </span>

          <h2 className="font-serif text-[24px] md:text-[34px] lg:text-[40px] text-white uppercase tracking-wider mb-6 italic">
            ENVIE DE DÉCOUVRIR L’INDE AUTREMENT ?
          </h2>

          <div className="w-16 h-[1.5px] bg-[#A88B52] mx-auto mb-8"></div>

          <p className="text-[13px] md:text-[16px] leading-[1.8] text-gray-300 font-light italic mb-12 max-w-3xl mx-auto">
            Depuis plus de 18 ans, Indeora Voyages imagine des voyages sur mesure en Inde pour les
voyageurs francophones en quête d’authenticité, d’émotions et d’expériences profondément
humaines.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SpiritualVaranasi;
