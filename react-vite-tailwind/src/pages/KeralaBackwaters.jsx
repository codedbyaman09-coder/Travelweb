import React, { useState } from 'react';

import Footer from '../components/Footer';

const KeralaBackwaters = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "Quelle est la meilleure région pour un premier voyage en Inde ?",
      answer: "Le Rajasthan est souvent la meilleure destination pour une première découverte grâce à sespalais, ses forts et sa richesse culturelle."
    },
    {
      question: "Combien de jours faut-il prévoir pour visiter l’Inde ",
      answer: "Pour un premier voyage, nous recommandons généralement entre 10 et 15 jours afin de profiter pleinement d’une région sans précipitation."
    },
    {
      question: "Quelle est la meilleure période pour voyager en Inde ?",
      answer: "La période idéale pour visiter le Rajasthan, Delhi, Agra ou le Kerala se situe généralement entre octobre et mars."
    },
    {
      question: "Pourquoi voyager avec une agence locale en Inde ?",
      answer: "Une agence locale spécialisée permet de bénéficier d’une meilleure organisation, d’expériencesplus authentiques et d’un accompagnement personnalisé sur place.",
    },
    
  ];

  return (
    <div className="bg-[#FAF9F6] min-h-screen font-light">
      

      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[75vh] lg:h-[85vh] overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&q=80&w=1600"
            alt="Palais du Rajasthan"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]"></div>
        </div>

        <div className="relative z-10 text-center text-white mt-16 md:mt-24 w-full max-w-[1440px] mx-auto px-[40px]">
          <span className="text-[10px] md:text-[12px] font-bold tracking-[0.4em] text-[#A88B52] uppercase mb-4 md:mb-6 block animate-fadeIn">
            L'Inde d'Exception
          </span>
          <h1 className="font-serif text-[32px] md:text-[50px] lg:text-[64px] leading-tight md:leading-[1.15] text-white uppercase tracking-wider mb-6 max-w-4xl mx-auto drop-shadow-md">
            VOYAGE EN INDE : LE GUIDE COMPLET POUR UN PREMIERV VOYAGE

          </h1>
          <div className="w-24 h-[1px] bg-[#A88B52] mx-auto mb-6 opacity-80"></div>
          <p className="text-[12px] md:text-[15px] lg:text-[17px] font-serif italic text-gray-200 tracking-wide max-w-2xl mx-auto font-light leading-relaxed">
            Les Carnets d’Indeora — Guide premium pour les voyageurs francophones
          </p>
        </div>
      </section>

      {/* Editorial Content Container */}
      <div className="relative z-25 md: -mt-4 md:-mt-8 mb-24 animate-fadeIn w-full max-w-[1440px] mx-auto px-[40px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">

          {/* Left Column: Flanking cards for all Subsections */}
          <div className="lg:col-span-3 lg:w-full lg:mx-auto">
            {/* Card 1: Flanking Section 1 Image */}
            <div className="lg:mt-[838px]">
              <div className="relative overflow-hidden aspect-[4/5] bg-white shadow-2xl rounded-sm border border-gray-150 p-3 animate-fadeIn lg:max-w-[238px] mx-auto">
                <img
                  src="https://images.unsplash.com/photo-1598091383021-15ddea10925d?auto=format&fit=crop&q=80&w=800"
                  alt="Rajasthan Royale Left Featured 1"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            {/* Card 2: Flanking Section 2 Image */}
            <div className="lg:mt-[561px]">
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
            <div className="lg:mt-[454px]">
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
            <div className="lg:mt-[419px]">
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
            
            
          </div>
          {/* Center Column: Main overlapping white editorial card */}
          <div className="lg:col-span-6">
            <div className="bg-white shadow-xl border border-gray-100 rounded-sm p-6 md:p-8 text-gray-800">

              {/* Intro Section */}
              <div className="prose prose-lg max-w-none text-gray-700 font-light leading-relaxed text-[15px] md:text-[17px]">
                {/* Central Luxury Quote */}
                <div className="mb-8 py-6 border-y border-[#A88B52]/20 text-center max-w-2xl mx-auto">
                  <p className="font-serif italic text-[18px] md:text-[22px] text-[#A88B52] leading-relaxed">
                    « Le Rajasthan ne se visite pas seulement. Il se vit comme une émotion. »
                  </p>
                </div>

                <p className="font-light italic leading-loose text-justify text-gray-600 first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:text-[#A88B52] first-letter:mr-3 first-letter:float-left first-letter:mt-1">
                Un premier voyage en Inde ne ressemble à aucun autre voyage. L’Inde ne se visite pas
simplement. Elle se ressent, s’écoute et se vit intensément. Avant même d’y poser les pieds,
beaucoup imaginent déjà les palais du Rajasthan, les cérémonies du Gange, les marchés
colorés ou les paysages majestueux de l’Himalaya. Pourtant, une fois sur place, le voyage
devient bien plus profond que ce que l’on avait imaginé. L’Inde possède cette capacité rare
de transformer un simple séjour en expérience profondément humaine. Chaque région
raconte une histoire différente, chaque rencontre laisse une émotion particulière et chaque
journée semble offrir une nouvelle manière de regarder le monde.

                </p>
              </div>

              {/* Subsections Divider */}
              <div className="space-y-16 mt-16 pt-16 border-t border-gray-100">

                {/* Subsection 1 */}
                <div className="mb-16">
                  <h2 className="font-serif text-[24px] md:text-[30px] text-[#A88B52] italic mb-6">
                    Pourquoi choisir l’Inde pour un premier grand voyage ?
                  </h2>

                  <div className="relative overflow-hidden aspect-[16/9] mb-8 border border-[#A88B52]/20 p-1 bg-white">
                    <img
                      src="https://images.unsplash.com/photo-1598091383021-15ddea10925d?auto=format&fit=crop&q=80&w=1200"
                      alt="Taj Lake Palace Udaipur"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <p className="leading-loose font-light mb-4 text-justify">
                   L’Inde est l’un des pays les plus fascinants au monde par sa diversité culturelle, ses
paysages et la richesse de ses traditions. En quelques jours seulement, vous pouvez passer
des palais majestueux du Rajasthan aux paysages tropicaux du Kerala, des cérémonies
spirituelles de Varanasi aux villages paisibles de l’Himalaya. Mais ce qui rend un voyage en
Inde réellement unique, ce ne sont pas seulement les lieux visités. Ce sont surtout les
émotions vécues sur place : le parfum des épices dans les marchés, les sourires échangés
dans un village, le silence d’un temple au lever du soleil ou encore l’énergie vibrante des
grandes villes indiennes.

                  </p>
                </div>

                {/* Subsection 2 */}
                <div className="mb-16">
                  <h2 className="font-serif text-[24px] md:text-[30px] text-[#A88B52] italic mb-6">
                    Quelle région choisir pour un premier voyage en Inde ?
                  </h2>

                  <div className="relative overflow-hidden aspect-[16/9] mb-8 border border-[#A88B52]/20 p-1 bg-white">
                    <img
                      src="https://images.unsplash.com/photo-1603262110263-fb0112e7cc33?auto=format&fit=crop&q=80&w=1200"
                      alt="Hawa Mahal Jaipur"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <p className="leading-loose font-light mb-4 text-justify">
                  Le Rajasthan reste souvent la meilleure porte d’entrée vers l’Inde. Entre forts majestueux,
palais de maharajas, désert du Thar et villes historiques comme Jaipur, Jodhpur ou Udaipur,
cette région concentre toute la magie de l’Inde du Nord. Le Kerala séduit quant à lui par une
ambiance plus tropicale et apaisante. Les backwaters, les plantations de thé et l’Ayurveda
attirent les voyageurs en quête de nature et de bien-être. Pour les amateurs de spiritualité,
Varanasi et Rishikesh offrent une immersion fascinante au cœur des traditions sacrées
indiennes.


                  </p>
                </div>

                {/* Subsection 3 */}
                <div className="mb-16">
                  <h2 className="font-serif text-[24px] md:text-[30px] text-[#A88B52] italic mb-6">
                    Quand partir en Inde ?
                  </h2>

                  <div className="relative overflow-hidden aspect-[16/9] mb-8 border border-[#A88B52]/20 p-1 bg-white">
                    <img
                      src="https://images.unsplash.com/photo-1591263128582-f4b7c2a78880?auto=format&fit=crop&q=80&w=1200"
                      alt="Lake Pichola Udaipur"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <p className="leading-loose font-light mb-4 text-justify">
                   La meilleure période pour voyager en Inde dépend principalement des régions visitées.
D’octobre à mars, les conditions sont idéales pour découvrir le Rajasthan, Delhi, Agra,
Varanasi ainsi que le Kerala et l’Inde du Sud. Entre avril et juillet, les régions himalayennes
comme le Ladakh deviennent particulièrement agréables. Pendant la mousson, certaines
régions comme le Kerala ou le Nord-Est indien révèlent des paysages luxuriants et une
atmosphère totalement différente.
                  </p>
                </div>

                {/* Subsection 4 */}
                <div className="mb-16">
                  <h2 className="font-serif text-[24px] md:text-[30px] text-[#A88B52] italic mb-6">
                    Le vrai luxe en Inde
                  </h2>

                  <div className="relative overflow-hidden aspect-[16/9] mb-8 border border-[#A88B52]/20 p-1 bg-white">
                    <img
                      src="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&q=80&w=1200"
                      alt="Camel desert sunset"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <p className="leading-loose font-light mb-4 text-justify">
                   Le véritable luxe en Inde ne réside pas uniquement dans les hôtels prestigieux ou les palais
transformés en hébergements de charme. Il se trouve dans les émotions vécues : un
coucher de soleil dans le désert du Rajasthan, une cérémonie au bord du Gange, un repas
partagé avec une famille locale ou encore le silence des montagnes himalayennes. Ce sont
ces instants profondément humains qui rendent un voyage en Inde réellement inoubliable.


                  </p>
                </div>

                {/* Subsection 5 */}
               
              </div>

              {/* Subsection 6: FAQ Accordion */}
              <div className="mt-20 pt-16 border-t border-gray-100">
                <h2 className="font-serif text-[26px] md:text-[32px] text-[#A88B52] italic mb-10 text-center">
                  FAQ — Voyage au Rajasthan
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
            <div className="lg:mt-[836px]">
              <div className="relative overflow-hidden aspect-[4/5] bg-white shadow-2xl rounded-sm border border-gray-150 p-3 animate-fadeIn lg:max-w-[240px] mx-auto">
                <img
                  src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=800"
                  alt="Rajasthan Royale Right Featured 1"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Card 2: Flanking Section 2 Image */}
            <div className="lg:mt-[561Px]">
              <div className="relative overflow-hidden aspect-[4/5] bg-white shadow-2xl rounded-sm border border-gray-150 p-3 animate-fadeIn lg:max-w-[239px] mx-auto group cursor-pointer">
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
            <div className="lg:mt-[452px]">
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
            <div className="lg:mt-[420Px]">
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
humaines. Contactez notre équipe pour créer un voyage entièrement pensé selon vos
envies, votre rythme et votre manière de voyager.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default KeralaBackwaters;
