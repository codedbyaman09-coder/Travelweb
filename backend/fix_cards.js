const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "../react-vite-tailwind/src/pages/SpiritualVaranasi.jsx");
let content = fs.readFileSync(filePath, "utf8");

const startToken = "{/* Editorial Content Container */}";
const endToken = "{/* Bottom Luxury CTA Banner */}";

const startIndex = content.indexOf(startToken);
const endIndex = content.indexOf(endToken);

if (startIndex === -1 || endIndex === -1) {
  console.log("Tokens not found");
  process.exit(1);
}

// Rebuild the Editorial Content Container
const newEditorialContent = `      {/* Editorial Content Container */}
      <div className="relative z-25 md: -mt-4 md:-mt-8 mb-24 animate-fadeIn w-full max-w-[1440px] mx-auto px-[40px]">
        <div className="max-w-[720px] mx-auto relative">
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
              <div className="mb-16 relative">
                {/* Left Card */}
                <div className="absolute top-0 right-full mr-[32px] md:mr-[56px] w-[240px] hidden lg:block">
                  <div className="relative overflow-hidden aspect-[4/5] bg-white shadow-2xl rounded-sm border border-gray-150 p-3 animate-fadeIn w-full">
                    <img
                      src="https://images.unsplash.com/photo-1598091383021-15ddea10925d?auto=format&fit=crop&q=80&w=800"
                      alt="Left Featured 1"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>
                {/* Right Card */}
                <div className="absolute top-0 left-full ml-[32px] md:ml-[56px] w-[240px] hidden lg:block">
                  <div className="relative overflow-hidden aspect-[4/5] bg-white shadow-2xl rounded-sm border border-gray-150 p-3 animate-fadeIn w-full">
                    <img
                      src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=800"
                      alt="Right Featured 1"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

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
              <div className="mb-16 relative">
                {/* Left Card */}
                <div className="absolute top-0 right-full mr-[32px] md:mr-[56px] w-[240px] hidden lg:block group cursor-pointer">
                  <div className="relative overflow-hidden aspect-[4/5] bg-white shadow-2xl rounded-sm border border-gray-150 p-3 animate-fadeIn w-full">
                    <img src="https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&q=80&w=800" alt="Left Featured 2" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                </div>
                {/* Right Card */}
                <div className="absolute top-0 left-full ml-[32px] md:ml-[56px] w-[240px] hidden lg:block group cursor-pointer">
                  <div className="relative overflow-hidden aspect-[4/5] bg-white shadow-2xl rounded-sm border border-gray-150 p-3 animate-fadeIn w-full">
                    <img src="https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&q=80&w=800" alt="Right Featured 2" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                </div>

                <h2 className="font-serif text-[24px] md:text-[30px] text-[#A88B52] italic mb-6">
                  Le voyage devient plus humain
                </h2>
                <div className="relative overflow-hidden aspect-[16/9] mb-8 border border-[#A88B52]/20 p-1 bg-white">
                  <img src="https://images.unsplash.com/photo-1603262110263-fb0112e7cc33?auto=format&fit=crop&q=80&w=1200" alt="Hawa Mahal Jaipur" className="w-full h-full object-cover" />
                </div>
                <p className="leading-loose font-light mb-4 text-justify">
                  Ce qui marque profondément les voyageurs, ce ne sont pas uniquement les lieux célèbres.
                  Ce sont souvent les moments les plus simples : une invitation spontanée à partager un chai,
                  une discussion improvisée avec un artisan ou un repas partagé avec une famille locale.
                </p>
              </div>

              {/* Subsection 3 */}
              <div className="mb-16 relative">
                {/* Left Card */}
                <div className="absolute top-0 right-full mr-[32px] md:mr-[56px] w-[240px] hidden lg:block group cursor-pointer">
                  <div className="relative overflow-hidden aspect-[4/5] bg-white shadow-2xl rounded-sm border border-gray-150 p-3 animate-fadeIn w-full">
                    <img src="https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&q=80&w=800" alt="Left Featured 3" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                </div>
                {/* Right Card */}
                <div className="absolute top-0 left-full ml-[32px] md:ml-[56px] w-[240px] hidden lg:block group cursor-pointer">
                  <div className="relative overflow-hidden aspect-[4/5] bg-white shadow-2xl rounded-sm border border-gray-150 p-3 animate-fadeIn w-full">
                    <img src="https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&q=80&w=800" alt="Right Featured 3" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                </div>

                <h2 className="font-serif text-[24px] md:text-[30px] text-[#A88B52] italic mb-6">
                  Une autre manière de voyager
                </h2>
                <div className="relative overflow-hidden aspect-[16/9] mb-8 border border-[#A88B52]/20 p-1 bg-white">
                  <img src="https://images.unsplash.com/photo-1591263128582-f4b7c2a78880?auto=format&fit=crop&q=80&w=1200" alt="Lake Pichola Udaipur" className="w-full h-full object-cover" />
                </div>
                <p className="leading-loose font-light mb-4 text-justify">
                  En Inde, tout ne se passe pas toujours comme prévu. Et c’est précisément ce qui transforme
                  le voyage. Peu à peu, on apprend à ralentir, à accepter l’imprévu et à observer davantage
                  plutôt que vouloir tout contrôler.
                </p>
              </div>

              {/* Subsection 4 */}
              <div className="mb-16 relative">
                {/* Left Card */}
                <div className="absolute top-0 right-full mr-[32px] md:mr-[56px] w-[240px] hidden lg:block group cursor-pointer">
                  <div className="relative overflow-hidden aspect-[4/5] bg-white shadow-2xl rounded-sm border border-gray-150 p-3 animate-fadeIn w-full">
                    <img src="https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&q=80&w=800" alt="Left Featured 4" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                </div>
                {/* Right Card */}
                <div className="absolute top-0 left-full ml-[32px] md:ml-[56px] w-[240px] hidden lg:block group cursor-pointer">
                  <div className="relative overflow-hidden aspect-[4/5] bg-white shadow-2xl rounded-sm border border-gray-150 p-3 animate-fadeIn w-full">
                    <img src="https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&q=80&w=800" alt="Right Featured 4" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                </div>

                <h2 className="font-serif text-[24px] md:text-[30px] text-[#A88B52] italic mb-6">
                  Chaque région raconte une émotion
                </h2>
                <div className="relative overflow-hidden aspect-[16/9] mb-8 border border-[#A88B52]/20 p-1 bg-white">
                  <img src="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&q=80&w=1200" alt="Camel desert sunset" className="w-full h-full object-cover" />
                </div>
                <p className="leading-loose font-light mb-4 text-justify">
                  Le Rajasthan évoque l’élégance des palais et les lumières dorées du désert. Le Kerala
                  apaise avec ses paysages tropicaux. Varanasi fascine par sa spiritualité et l’Himalaya invite
                  au silence et à la contemplation.
                </p>
              </div>

              {/* Subsection 5 */}
              <div className="mb-16 relative">
                {/* Left Card */}
                <div className="absolute top-0 right-full mr-[32px] md:mr-[56px] w-[240px] hidden lg:block group cursor-pointer">
                  <div className="relative overflow-hidden aspect-[4/5] bg-white shadow-2xl rounded-sm border border-gray-150 p-3 animate-fadeIn w-full">
                    <img src="https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&q=80&w=800" alt="Left Featured 5" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                </div>
                {/* Right Card */}
                <div className="absolute top-0 left-full ml-[32px] md:ml-[56px] w-[240px] hidden lg:block group cursor-pointer">
                  <div className="relative overflow-hidden aspect-[4/5] bg-white shadow-2xl rounded-sm border border-gray-150 p-3 animate-fadeIn w-full">
                    <img src="https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&q=80&w=800" alt="Right Featured 5" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                </div>

                <h2 className="font-serif text-[24px] md:text-[30px] text-[#A88B52] italic mb-6">
                  Le vrai luxe en Inde
                </h2>
                <div className="relative overflow-hidden aspect-[16/9] mb-8 border border-[#A88B52]/20 p-1 bg-white">
                  <img src="https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=1200" alt="Luxury suite heritage" className="w-full h-full object-cover" />
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
                        {openFaq === idx ? "−" : "+"}
                      </span>
                    </button>

                    <div
                      className={\`overflow-hidden transition-all duration-500 \${openFaq === idx ? "max-h-[300px] mt-4 opacity-100" : "max-h-0 opacity-0"
                        }\`}
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
      </div>
`;

const newContent = content.substring(0, startIndex) + newEditorialContent + content.substring(endIndex);

fs.writeFileSync(filePath, newContent, "utf8");
console.log("Successfully replaced cards");
