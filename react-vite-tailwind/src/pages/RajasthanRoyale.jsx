import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const RajasthanRoyale = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "Quelle est la meilleure ville à visiter au Rajasthan ?",
      answer: "Jaipur, Udaipur et Jodhpur sont souvent considérées comme les villes incontournables pour un premier voyage au Rajasthan."
    },
    {
      question: "Combien de jours faut-il prévoir pour visiter le Rajasthan?",
      answer: "Nous recommandons généralement entre 10 et 15 jours afin de découvrir plusieurs villes sansprécipitation"
    },
    {
      question: "Quelle est la meilleure période pour voyager au Rajasthan ?",
      answer: "Quelle est la meilleure période pour voyager au Rajasthan ?"
    },
    {
      question: "Le Rajasthan est-il adapté pour un premier voyage en Inde ?",
      answer: "Le Rajasthan est-il adapté pour un premier voyage en Inde ?"
    },
    {
      question: "Peut-on dormir dans un palais au Rajasthan ?",
      answer: "Oui, de nombreux anciens palais de maharajas ont été transformés en hôtels de charme ou en hébergements de luxe."
    }
  ];

  return (
    <div className="bg-[#FAF9F6] min-h-screen font-light">
      <Navbar />

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

        <div className="relative z-10 max-w-[1100px] mx-auto px-6 text-center text-white mt-16 md:mt-24">
          <span className="text-[10px] md:text-[12px] font-bold tracking-[0.4em] text-[#A88B52] uppercase mb-4 md:mb-6 block animate-fadeIn">
            L'Inde d'Exception
          </span>
          <h1 className="font-serif text-[32px] md:text-[50px] lg:text-[64px] leading-tight md:leading-[1.15] text-white uppercase tracking-wider mb-6 max-w-4xl mx-auto drop-shadow-md">
            RAJASTHAN : L’INDE DES PALAIS ET DES MAHARAJAS  
          </h1>
          <div className="w-24 h-[1px] bg-[#A88B52] mx-auto mb-6 opacity-80"></div>
          <p className="text-[12px] md:text-[15px] lg:text-[17px] font-serif italic text-gray-200 tracking-wide max-w-2xl mx-auto font-light leading-relaxed">
            Les Carnets d’Indeora — Voyage au cœur des palais, des traditions et des émotions
          </p>
        </div>
      </section>

      {/* Editorial Content Container */}
      <div className="relative z-25 max-w-[1350px] mx-auto px-4 md:px-6 -mt-4 md:-mt-8 mb-24 animate-fadeIn">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">

          {/* Left Column: Flanking cards for all Subsections */}
          <div className="lg:col-span-3 lg:w-full lg:mx-auto">
            {/* Card 1: Flanking Section 1 Image */}
            <div className="lg:mt-[825px]">
              <div className="relative overflow-hidden aspect-[4/5] bg-white shadow-2xl rounded-sm border border-gray-150 p-3 animate-fadeIn lg:max-w-[245px] mx-auto">
                <img
                  src="https://images.unsplash.com/photo-1598091383021-15ddea10925d?auto=format&fit=crop&q=80&w=800"
                  alt="Rajasthan Royale Left Featured 1"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            {/* Card 2: Flanking Section 2 Image */}
            <div className="lg:mt-[445px]">
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
            <div className="lg:mt-[433px]">
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
            <div className="lg:mt-[435px]">
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
            <div className="lg:mt-[354px]">
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
                    « Le Rajasthan ne se visite pas seulement. Il se vit comme une émotion. »
                  </p>
                </div>

                <p className="font-light italic leading-loose text-justify text-gray-600 first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:text-[#A88B52] first-letter:mr-3 first-letter:float-left first-letter:mt-1">
                  Il existe en Inde une région qui semble tout droit sortie d’un autre temps. Une terre où les
                  palais flottent au-dessus des lacs, où les forts dominent le désert et où les traditions
                  continuent de vivre au rythme des couleurs, des fêtes et des marchés animés. Bienvenue au
                  Rajasthan. Pour beaucoup de voyageurs francophones, un voyage au Rajasthan représente
                  la première rencontre avec l’Inde rêvée. Celle des maharajas, des palais majestueux, des
                  saris colorés et des cités royales baignées de lumière dorée au coucher du soleil. Mais
                  au-delà des images iconiques, le Rajasthan possède surtout une atmosphère unique. Une
                  élégance intemporelle mêlée à une culture profondément vivante et à une chaleur humaine
                  qui marque durablement ceux qui la découvrent.
                </p>
              </div>

              {/* Subsections Divider */}
              <div className="space-y-16 mt-16 pt-16 border-t border-gray-100">

                {/* Subsection 1 */}
                <div className="mb-16">
                  <h2 className="font-serif text-[24px] md:text-[30px] text-[#A88B52] italic mb-6">
                    Pourquoi voyager au Rajasthan ?
                  </h2>

                  <div className="relative overflow-hidden aspect-[16/9] mb-8 border border-[#A88B52]/20 p-1 bg-white">
                    <img
                      src="https://images.unsplash.com/photo-1598091383021-15ddea10925d?auto=format&fit=crop&q=80&w=1200"
                      alt="Taj Lake Palace Udaipur"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <p className="leading-loose font-light mb-4 text-justify">
                    Le Rajasthan est souvent considéré comme l’une des plus belles régions d’Inde pour une
                    première découverte du pays. Cette région concentre toute la richesse culturelle et historique
                    de l’Inde du Nord : palais de maharajas, forts majestueux, villages traditionnels, marchés
                    colorés, désert du Thar, temples anciens et artisanat raffiné. Chaque ville possède sa propre
                    identité et raconte une histoire différente. Le Rajasthan n’est pas seulement une destination
                    culturelle. C’est une immersion dans une Inde élégante, vibrante et profondément
                    authentique
                  </p>
                </div>

                {/* Subsection 2 */}
                <div className="mb-16">
                  <h2 className="font-serif text-[24px] md:text-[30px] text-[#A88B52] italic mb-6">
                    Jaipur : la ville rose du Rajasthan

                  </h2>

                  <div className="relative overflow-hidden aspect-[16/9] mb-8 border border-[#A88B52]/20 p-1 bg-white">
                    <img
                      src="https://images.unsplash.com/photo-1603262110263-fb0112e7cc33?auto=format&fit=crop&q=80&w=1200"
                      alt="Hawa Mahal Jaipur"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <p className="leading-loose font-light mb-4 text-justify">
                    Capitale du Rajasthan, Jaipur fascine immédiatement par son architecture, ses palais et son
                    énergie. Le Palais des Vents, le City Palace ou encore le Fort d’Amber témoignent du passé
                    prestigieux des anciens royaumes rajpoutes. Dans les bazars animés, les voyageurs
                    découvrent bijoux traditionnels, tissus colorés, artisanat local et parfums d’épices. Jaipur
                    représente souvent la première grande émotion d’un voyage au Rajasthan.

                  </p>
                </div>

                {/* Subsection 3 */}
                <div className="mb-16">
                  <h2 className="font-serif text-[24px] md:text-[30px] text-[#A88B52] italic mb-6">
                    Udaipur : romantisme et palais au bord des lacs
                  </h2>

                  <div className="relative overflow-hidden aspect-[16/9] mb-8 border border-[#A88B52]/20 p-1 bg-white">
                    <img
                      src="https://images.unsplash.com/photo-1591263128582-f4b7c2a78880?auto=format&fit=crop&q=80&w=1200"
                      alt="Lake Pichola Udaipur"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <p className="leading-loose font-light mb-4 text-justify">
                    Surnommée la “Venise de l’Orient”, Udaipur offre une atmosphère totalement différente.
                    Entre palais blancs, hôtels de charme et couchers de soleil sur le lac Pichola, la ville séduit
                    particulièrement les couples et les voyageurs à la recherche d’une Inde plus élégante et
                    paisible. Flâner dans les ruelles anciennes ou dîner face au City Palace fait partie des
                    expériences les plus mémorables d’un voyage au Rajasthan.

                  </p>
                </div>

                {/* Subsection 4 */}
                <div className="mb-16">
                  <h2 className="font-serif text-[24px] md:text-[30px] text-[#A88B52] italic mb-6">
                    Le désert du Thar : une autre vision de l’Inde
                  </h2>

                  <div className="relative overflow-hidden aspect-[16/9] mb-8 border border-[#A88B52]/20 p-1 bg-white">
                    <img
                      src="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&q=80&w=1200"
                      alt="Camel desert sunset"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <p className="leading-loose font-light mb-4 text-justify">
                    Au-delà des palais et des villes historiques, le Rajasthan révèle aussi des paysages
                    désertiques fascinants. Dormir dans le désert du Thar, assister à un coucher de soleil sur les
                    dunes ou partager une soirée autour de la musique traditionnelle reste souvent un moment
                    fort du voyage. Le désert offre une atmosphère plus silencieuse, plus lente et profondément
                    dépaysante.

                  </p>
                </div>

                {/* Subsection 5 */}
                <div className="mb-16">
                  <h2 className="font-serif text-[24px] md:text-[30px] text-[#A88B52] italic mb-6">
                    Le vrai luxe au Rajasthan
                  </h2>

                  <div className="relative overflow-hidden aspect-[16/9] mb-8 border border-[#A88B52]/20 p-1 bg-white">
                    <img
                      src="https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=1200"
                      alt="Luxury suite heritage"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <p className="leading-loose font-light mb-4 text-justify">
                    Le véritable luxe au Rajasthan ne réside pas uniquement dans les palais ou les hôtels
                    prestigieux. Il se trouve dans les expériences vécues : un dîner sous les étoiles dans le
                    désert, une balade dans les vieux bazars, le calme d’un palais au bord d’un lac ou encore
                    une rencontre inattendue avec une famille locale. Le Rajasthan possède cette capacité rare
                    de mêler élégance, émotion et authenticité
                  </p>
                </div>
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
            <div className="lg:mt-[826px]">
              <div className="relative overflow-hidden aspect-[4/5] bg-white shadow-2xl rounded-sm border border-gray-150 p-3 animate-fadeIn lg:max-w-[240px] mx-auto">
                <img
                  src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=800"
                  alt="Rajasthan Royale Right Featured 1"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Card 2: Flanking Section 2 Image */}
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

            {/* Card 3: Flanking Section 3 Image */}
            <div className="lg:mt-[432px]">
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
            <div className="lg:mt-[432px]">
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
            ENVIE DE DÉCOUVRIR LE RAJASTHAN AUTREMENT ?
          </h2>

          <div className="w-16 h-[1.5px] bg-[#A88B52] mx-auto mb-8"></div>

          <p className="text-[13px] md:text-[16px] leading-[1.8] text-gray-300 font-light italic mb-12 max-w-3xl mx-auto">
            Depuis plus de 18 ans, Indeora Voyages imagine des voyages sur mesure au Rajasthan et à
            travers toute l’Inde pour les voyageurs francophones en quête d’authenticité, d’émotions et
            d’expériences profondément humaines. Contactez notre équipe pour créer un voyage unique
            au cœur des palais, des traditions et des paysages fascinants du Rajasthan.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RajasthanRoyale;