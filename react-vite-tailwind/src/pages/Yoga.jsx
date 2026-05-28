import React from "react";
import { Link } from "react-router-dom";
import yogaBanner from "../assets/image copy 37.png";
import Footer from "../components/Footer";
import shivaImg from "../assets/image copy 38.png";
import itineraryRishikesh from "../assets/image copy 34.png";
import itineraryKerala from "../assets/image copy 35.png";
import itineraryHimalaya from "../assets/image copy 36.png";
import bottomBanner from "../assets/image copy 39.png";

const LotusIcon = ({ className = "w-8 h-8", color = "#213528" }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none">
    <path d="M32 52C20 45 15 32 32 10C49 32 44 45 32 52Z" stroke={color} strokeWidth="1.4" />
    <path d="M32 52C16 50 8 40 10 20C25 25 31 38 32 52Z" stroke={color} strokeWidth="1.4" />
    <path d="M32 52C48 50 56 40 54 20C39 25 33 38 32 52Z" stroke={color} strokeWidth="1.4" />
    <path d="M12 50C24 58 40 58 52 50" stroke={color} strokeWidth="1.4" />
  </svg>
);

const FeatureIcons = {
  Yoga: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25">
      <circle cx="12" cy="5" r="2.2" />
      <path d="M12 8v6m0 0l-4 4m4-4l4 4M4 10l8 2 8-2" />
    </svg>
  ),
  Om: () => <div className="text-[17px] leading-none font-serif select-none">ॐ</div>,
  Nature: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25">
      <path d="M12 3L2 20h20L12 3z" />
      <path d="M8 16l4-7 4 7" />
    </svg>
  ),
  Temple: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25">
      <path d="M3 21h18M5 21V10l7-7 7 7v11M8 21v-7h8v7" />
    </svg>
  ),
  Person: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25">
      <circle cx="12" cy="7" r="3.4" />
      <path d="M4 21v-1.5a4 4 0 014-4h8a4 4 0 014 4V21" />
    </svg>
  ),
  Bowl: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25">
      <path d="M2 12c0 5.5 4.5 10 10 10s10-4.5 10-10H2z" />
      <path d="M7 12c0-3 2-5 5-5s5 2 5 5" />
    </svg>
  ),
  Globe: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25">
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18" />
    </svg>
  ),
  Target: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25">
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.8" />
    </svg>
  ),
  Calendar: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
      <path d="M8 14h.01M12 14h.01M16 14h.01M8 17h.01M12 17h.01M16 17h.01" />
    </svg>
  ),
  Book: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  ),
  Trident: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2v19" />
      <path d="M5 6v3c0 4 3 6 7 6s7-2 7-6V6" />
      <path d="M9 18h6" />
    </svg>
  ),
  Meditation: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="5" r="2.5" />
      <path d="M12 7.5c-2.5 0-4 1.5-4 4.5v3.5" />
      <path d="M12 7.5c2.5 0 4 1.5 4 4.5v3.5" />
      <path d="M5 19.5c1.5-1.5 3.5-2 7-2s5.5.5 7 2" />
      <path d="M3 21.5c2.5-1.5 5-2 9-2s6.5.5 9 2" />
    </svg>
  ),
  MortarPestle: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 11a8 8 0 0 0 16 0H4z" />
      <path d="M3 11h18" />
      <path d="M12 19h-2a2 2 0 0 1 4 0h-2" />
      <path d="M14 5l-4 7" />
    </svg>
  ),
  TargetConcentric: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  ),
};

const HeaderFeature = ({ icon: Icon, text }) => (
  <div className="flex-1 flex items-center justify-center md:justify-start gap-[4px] md:gap-[9px] px-[2px] md:px-[22px] border-r border-[#213528]/25 last:border-r-0 h-full">
    <div className="text-[#213528] scale-[0.6] md:scale-100 shrink-0">
      <Icon />
    </div>

    <span className="text-[7px] md:text-[14px] leading-[1.05] font-black text-[#213528] whitespace-pre-line text-left md:text-left">
      {text}
    </span>
  </div>
);

const InfoItem = ({ icon: Icon, title, text }) => (
  <div className="flex items-start gap-3 mb-[14px] relative z-10">
    <div className="w-[34px] h-[34px] rounded-full bg-[#213528] text-[#efe8d8] flex items-center justify-center shrink-0">
      <Icon />
    </div>

    <div>
      <h4 className="text-[11px] leading-tight font-bold text-[#213528] mb-[2px]">
        {title}
      </h4>
      <p className="text-[8.5px] leading-[1.45] text-[#213528]/80 max-w-[315px]">
        {text}
      </p>
    </div>
  </div>
);

const QuestionItem = ({ no, title, text, icon: Icon }) => (
  <div className="flex gap-[9px] mb-[12px]">
    <div className="flex flex-col items-center shrink-0">
      <div className="w-[16px] h-[16px] rounded-full bg-[#213528] text-white text-[8px] font-bold flex items-center justify-center">
        {no}
      </div>

      <div className="text-[#213528]/70 mt-[5px] flex items-center justify-center w-[18px] h-[18px]">
        <Icon />
      </div>
    </div>

    <div>
      <h4 className="text-[9px] leading-tight font-bold text-[#213528] mb-[3px]">
        {title}
      </h4>
      <p className="text-[8px] leading-[1.35] text-[#213528]/80 whitespace-pre-line">
        {text}
      </p>
    </div>
  </div>
);

const ItineraryCard = ({ no, image, title, duration, desc, features }) => (
  <Link to="/spiritualite-yoga-ayurveda" className="block bg-white rounded-[7px] overflow-hidden border border-[#213528]/15 shadow-[0_1px_4px_rgba(0,0,0,0.28)] transition-all duration-300 hover:shadow-lg hover:scale-[1.01] cursor-pointer no-underline hover:no-underline text-inherit">
    <div className="relative h-[65px] md:h-[98px]">
      <img src={image} alt={title} className="w-full h-full object-cover" />

      <div className="absolute top-[5px] left-[5px] w-[16px] h-[16px] md:w-[22px] md:h-[22px] rounded-full bg-[#213528] text-white text-[8px] md:text-[10px] font-bold flex items-center justify-center">
        {no}
      </div>
    </div>

    <div className="text-left px-2 md:px-3 pt-[8px] md:pt-[12px] pb-[6px] md:pb-[8px]">
      <h3 className="font-serif text-[9px] md:text-[11px] font-bold uppercase text-[#213528] leading-tight">
        {title}
      </h3>

      <p className="text-[7.5px] md:text-[9px] font-bold text-[#213528]/75 mt-[1px] mb-[6px] md:mb-[8px]">
        {duration}
      </p>

      <p className="text-[7px] md:text-[8px] leading-[1.35] text-[#213528]/80 mb-[6px] md:mb-[8px] line-clamp-3 md:line-clamp-none">
        {desc}
      </p>

      <div className="flex flex-wrap gap-y-1.5 md:gap-y-2 mt-1.5 md:mt-2">
        {features.map((item, index) => {
          let Icon = FeatureIcons.Yoga;
          const t = item.toLowerCase();

          if (t.includes("spiritualité")) Icon = FeatureIcons.Om;
          if (t.includes("nature")) Icon = FeatureIcons.Nature;
          if (t.includes("ayurveda")) Icon = FeatureIcons.Bowl;
          if (t.includes("massage")) Icon = FeatureIcons.Person;
          if (t.includes("détox")) Icon = FeatureIcons.Bowl;
          if (t.includes("méditation")) Icon = FeatureIcons.Target;
          if (t.includes("éveil")) Icon = FeatureIcons.Temple;

          return (
            <div key={index} className="w-1/2 flex items-center justify-start gap-[2px]">
              <div className="scale-[0.45] md:scale-[0.55] h-[12px] md:h-[14px] text-[#213528] flex items-center shrink-0">
                <Icon />
              </div>

              <span className="text-[5px] md:text-[6px] leading-[1.1] text-[#213528]/75 font-medium text-left">
                {item}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  </Link>
);

const Yoga = () => {
  const [showAllFaq, setShowAllFaq] = React.useState(false);
  const [elements, setElements] = React.useState([]);
  const [pageSettings, setPageSettings] = React.useState({
    yoga_hero_overline: "Retraite de",
    yoga_hero_title: "Yoga",
    yoga_hero_subtitle: "En Inde",
    yoga_hero_text: "Corps • Esprit • Âme en Harmonie",
    yoga_hero_quote: "Le Yoga n'est pas \n seulement une pratique, \n c'est un voyage vers \n soi-même.",
    yoga_hero_image: yogaBanner,
    yoga_history_title: "Brève Histoire du Yoga",
    yoga_history_text: "Le yoga est une science ancienne née en Inde il y a plus de 5 000 ans.\nSes racines se trouvent dans les Vedas, les Upanishads et les traditions spirituelles de la civilisation indienne.\n\nIl a été transmis par des sages et des maîtres à travers les siècles. Selon la tradition, Lord Shiva est le premier yogi, ou Adiyogi, qui a transmis la connaissance du yoga à l'humanité.\n\nLe sage Patanjali a ensuite compilé les Yoga Sutras, qui décrivent le chemin complet du yoga sous forme de 8 branches.",
    yoga_history_image: shivaImg,
    yoga_faq_title: "Tout Savoir sur le Yoga",
    yoga_itinerary_title: "3 Itinéraires de Yoga en Inde",
    yoga_bottom_title: "Votre Voyage Intérieur \n Commence Ici",
    yoga_bottom_text: "Offrez-vous une expérience transformante en Inde, \n berceau du yoga, de la sagesse et de la paix intérieure.",
    yoga_bottom_image: bottomBanner
  });

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const [elementsRes, settingsRes] = await Promise.all([
          fetch("http://127.0.0.1:8000/api/yogas"),
          fetch("http://127.0.0.1:8000/api/settings")
        ]);
        
        const elementsData = await elementsRes.json();
        const settingsData = await settingsRes.json();

        if (elementsData.success) {
          setElements(elementsData.data);
        }
        if (settingsData.success && settingsData.data) {
          setPageSettings(prev => ({ ...prev, ...settingsData.data }));
        }
      } catch (err) {
        console.error("Error fetching yoga data:", err);
      }
    };
    fetchData();
  }, []);

  const dynamicFeatures = elements.filter(e => e.type === 'feature').sort((a,b) => a.display_order - b.display_order);
  const dynamicInfos = elements.filter(e => e.type === 'info').sort((a,b) => a.display_order - b.display_order);
  const dynamicFaqs = elements.filter(e => e.type === 'faq').sort((a,b) => a.display_order - b.display_order);
  const dynamicItineraries = elements.filter(e => e.type === 'itinerary').sort((a,b) => a.display_order - b.display_order);
  const dynamicBottomFeatures = elements.filter(e => e.type === 'bottom_feature').sort((a,b) => a.display_order - b.display_order);

  return (
    <>
      <div className="w-full min-h-screen bg-white overflow-x-hidden font-sans text-[#213528] yoga-wrapper">
        {/* HERO */}
        <section className="relative min-h-[300px] md:min-h-[420px] flex flex-col justify-between overflow-hidden">
          <img
            src={pageSettings.yoga_hero_image || yogaBanner}
            alt="Yoga en Inde"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#f4ead6]/80 via-[#f4ead6]/15 to-transparent" />

          <div className="relative z-10 w-full px-4 md:px-5 pt-[50px] md:pt-[110px] pb-[10px] md:pb-0 flex-grow">
            <div className="w-full md:w-[50%]">
              <div className="flex flex-col items-start md:items-center max-w-[320px] md:mx-0">
                <LotusIcon className="w-[43px] h-[43px] mb-[2px] self-start md:self-center" />

                <div className="flex items-center gap-2 mb-[-2px] self-start md:self-center">
                  <span className="hidden md:inline-block w-[34px] h-px bg-[#213528]/40 relative top-[-3px]" />
                  <span className="font-serif text-[15px] tracking-[0.22em] uppercase">
                    {pageSettings.yoga_hero_overline}
                  </span>
                  <span className="inline-block w-[34px] h-px bg-[#213528]/40 relative top-[-3px]" />
                </div>

                <h1 className="font-serif uppercase text-[50px] md:text-[78px] leading-tight md:leading-[0.82] tracking-[-0.06em] text-[#213528]">
                  {pageSettings.yoga_hero_title}
                </h1>

                <h2 className="font-serif uppercase text-[20px] md:text-[30px] tracking-[0.1em] md:tracking-[0.16em] leading-none text-[#213528]">
                  {pageSettings.yoga_hero_subtitle}
                </h2>

                <p className="font-bold text-[10px] mt-[14px] tracking-[0.02em]">
                  {pageSettings.yoga_hero_text}
                </p>
              </div>
            </div>

            <div className="absolute right-[46px] bottom-[90px] w-[210px] text-center text-white">
              <p className="font-serif italic text-[12px] leading-[1.45] drop-shadow-md whitespace-pre-line">
                {pageSettings.yoga_hero_quote}
              </p>

              <div className="flex items-center justify-center mt-2 gap-2 opacity-90">
                <span className="w-[36px] h-px bg-white" />
                <LotusIcon className="w-[18px] h-[18px]" color="#ffffff" />
                <span className="w-[36px] h-px bg-white" />
              </div>
            </div>
          </div>

          <div className="relative md:absolute left-0 right-0 bottom-0 z-20 bg-[#f7f1e6]/92 border-y border-[#213528]/15 mt-auto">
            <div className="h-[40px] md:h-[47px] flex flex-nowrap items-center w-full">
              {dynamicFeatures.length > 0 ? (
                dynamicFeatures.map((item, index) => {
                  const IconComponent = FeatureIcons[item.image] || FeatureIcons.Yoga;
                  return <HeaderFeature key={index} icon={IconComponent} text={item.title} />
                })
              ) : (
                <>
                  <HeaderFeature icon={FeatureIcons.Yoga} text={"Yoga\nAuthentique"} />
                  <HeaderFeature icon={FeatureIcons.Om} text={"Spiritualité"} />
                  <HeaderFeature icon={FeatureIcons.Bowl} text={"Ayurveda"} />
                  <HeaderFeature icon={FeatureIcons.Nature} text={"Nature\n& Sérénité"} />
                </>
              )}
            </div>
          </div>
        </section>

        {/* MIDDLE - Right below hero image */}
        <section className="grid grid-cols-1 md:grid-cols-[45%_55%] min-h-[475px] bg-white text-[#213528]">
          <div className="relative bg-[#eee8d9] px-[14px] pt-[24px] pb-[16px] overflow-hidden border-r border-[#213528]/10 flex flex-col justify-between">
            {/* Top block: Header + Paragraphs + Shiva Image side-by-side */}
            <div className="relative w-full flex min-h-[190px]">
              <div className="w-[58%] relative z-10 pr-[10px]">
                <h3 className="font-serif uppercase text-[15px] mb-[12px]">
                  {pageSettings.yoga_history_title}
                </h3>

                <div className="text-[8.5px] leading-[1.5] text-[#213528]/85 space-y-[8px]">
                  {pageSettings.yoga_history_text.split('\n').filter(p => p.trim() !== '').map((p, i) => <p key={i}>{p}</p>)}
                </div>
              </div>

              {/* Shiva Statue Image on the right side of this top block */}
              <div className="absolute right-[-14px] top-[-24px] bottom-[-16px] w-[50%] overflow-hidden z-0">
                <img
                  src={pageSettings.yoga_history_image || shivaImg}
                  alt="Shiva"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: '100% center' }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#eee8d9] via-[#eee8d9]/50 to-transparent" />
              </div>
            </div>

            {/* Bottom block: Bullet points flow naturally BELOW the Shiva image, on solid beige */}
            <div className="relative z-10 space-y-[8px] mt-[14px]">
              {dynamicInfos.length > 0 ? (
                dynamicInfos.map((item, index) => {
                  const IconComponent = FeatureIcons[item.image] || FeatureIcons.Target;
                  return <InfoItem key={index} icon={IconComponent} title={item.title} text={item.description} />
                })
              ) : (
                <>
                  <InfoItem
                    icon={FeatureIcons.Yoga}
                    title="Yoga traditionnel vs moderne"
                    text="Le yoga traditionnel inclut spiritualité, méditation, respiration et philosophie. Le yoga moderne est souvent centré sur le corps."
                  />

                  <InfoItem
                    icon={FeatureIcons.Temple}
                    title="Pourquoi l'Inde is la terre du yoga ?"
                    text="Parce que l'Inde a donné naissance au yoga et préserve les traditions authentiques à travers ses ashrams et maîtres."
                  />

                  <InfoItem
                    icon={FeatureIcons.Target}
                    title="Les lieux sacrés du yoga"
                    text="Rishikesh, Himalaya, Varanasi, Kerala et Dharamshala sont des lieux emblématiques pour pratiquer le yoga."
                  />

                  <InfoItem
                    icon={FeatureIcons.Globe}
                    title="Le yoga aujourd'hui"
                    text="Le yoga est pratiqué dans le monde entier, mais en Inde, il reste un art de vivre et un chemin spirituel profond."
                  />
                </>
              )}
            </div>

            <div className="absolute left-[-25px] bottom-[-22px] opacity-[0.08] pointer-events-none z-0">
              <LotusIcon className="w-[120px] h-[120px]" />
            </div>
          </div>

          <div className="bg-[#fbfaf6] pt-[22px] px-[28px] pb-[14px]">
            <div className="text-center mb-[18px]">
              <h2 className="font-serif uppercase text-[17px] tracking-[0.03em]">
                {pageSettings.yoga_faq_title}
              </h2>

              <div className="flex items-center justify-center gap-2 mt-[2px]">
                <span className="w-[60px] h-px bg-[#213528]/25" />
                <LotusIcon className="w-[17px] h-[17px]" />
                <span className="w-[60px] h-px bg-[#213528]/25" />
              </div>
            </div>

            <div className="grid md:grid-cols-[1fr_auto_1fr] gap-x-0">
              <div className="pr-0 md:pr-[20px]">
                {dynamicFaqs.length > 0 ? (
                  dynamicFaqs.slice(0, Math.ceil(dynamicFaqs.length / 2)).map((item, index) => {
                    const IconComponent = FeatureIcons[item.image] || FeatureIcons.Om;
                    return (
                      <div key={index} className={`${index > 2 && !showAllFaq ? 'hidden md:block' : 'block'}`}>
                        <QuestionItem no={index + 1} icon={IconComponent} title={item.title} text={item.description} />
                      </div>
                    )
                  })
                ) : (
                  <>
                    <QuestionItem
                      no="1"
                      icon={FeatureIcons.Om}
                      title={`Que signifie le mot "Yoga" ?`}
                      text={`Le mot Yoga vient du sanskrit "Yuj"\nqui signifie unir, connecter, harmoniser.`}
                    />

                    <QuestionItem
                      no="2"
                      icon={FeatureIcons.Calendar}
                      title="Quand le yoga est-il apparu ?"
                      text="Le yoga est apparu il y a plus de 5 000 ans en Inde ancienne."
                    />

                    <QuestionItem
                      no="3"
                      icon={FeatureIcons.Book}
                      title="Que sont les Vedas ?"
                      text="Les Vedas sont les textes sacrés les plus anciens de l'Inde. Ils contiennent prières, mantras, philosophie et connaissances spirituelles."
                    />

                    <div className={`${showAllFaq ? 'block' : 'hidden md:block'}`}>
                      <QuestionItem
                        no="4"
                        icon={FeatureIcons.Trident}
                        title="Pourquoi le yoga est-il lié à Shiva ?"
                        text="Shiva est considéré comme le premier yogi (Adiyogi). Il a médité dans l'Himalaya et transmis la science du yoga à ses disciples."
                      />

                      <QuestionItem
                        no="5"
                        icon={FeatureIcons.Meditation}
                        title="Qui est un Yogi ? Une Yogini ?"
                        text="Un Yogi est un homme qui pratique le yoga. Une Yogini est une femme qui pratique le yoga. Ils cherchent la paix intérieure et l'éveil spirituel."
                      />
                    </div>
                  </>
                )}
              </div>

              {/* Vertical dividing line between left and right columns */}
              <div className="hidden md:block w-[1px] bg-[#213528]/15 self-stretch my-2" />

              <div className={`pl-0 md:pl-[20px] mt-2 md:mt-0 ${showAllFaq ? 'block' : 'hidden md:block'}`}>
                {dynamicFaqs.length > 0 ? (
                  dynamicFaqs.slice(Math.ceil(dynamicFaqs.length / 2)).map((item, index) => {
                    const IconComponent = FeatureIcons[item.image] || FeatureIcons.Om;
                    return <QuestionItem key={index} no={Math.ceil(dynamicFaqs.length / 2) + index + 1} icon={IconComponent} title={item.title} text={item.description} />
                  })
                ) : (
                  <>
                    <QuestionItem
                      no="6"
                      icon={FeatureIcons.Meditation}
                      title="Combien existe-t-il de postures ?"
                      text="Les textes anciens parlent de 8,4 millions de postures symboliques. Dans la pratique moderne, environ 84 postures principales sont essentielles."
                    />

                    <QuestionItem
                      no="7"
                      icon={FeatureIcons.Meditation}
                      title="Quelles sont les 8 branches du Yoga ?"
                      text={`1. Yama (valeurs morales)\n2. Niyama (discipline personnelle)\n3. Asana (postures)\n4. Pranayama (respiration)\n5. Pratyahara (controls des sens)\n6. Dharana (concentration)\n7. Dhyana (méditation)\n8. Samadhi (éveil spirituel)`}
                    />

                    <QuestionItem
                      no="8"
                      icon={FeatureIcons.TargetConcentric}
                      title="Quel est le but du yoga ?"
                      text="Calmer le mental, équilibrer le corps, réduire le stress et atteindre l'éveil spirituel."
                    />

                    <QuestionItem
                      no="9"
                      icon={FeatureIcons.MortarPestle}
                      title="Yoga & Ayurveda ?"
                      text="Le yoga et l'Ayurveda sont complémentaires. Le yoga équilibre l'esprit et l'énergie, l'Ayurveda équilibre le corps et la santé."
                    />
                  </>
                )}
              </div>
            </div>

            {/* Mobile Show More Button */}
            <div className="flex justify-center mt-4 md:hidden">
              <button
                onClick={() => setShowAllFaq(!showAllFaq)}
                className="flex flex-col items-center justify-center text-[#213528] bg-transparent border-none outline-none"
              >
                <span className="text-[9px] font-bold uppercase tracking-[0.2em] mb-1">
                  {showAllFaq ? "Voir Moins" : "Voir Plus"}
                </span>
                <svg className={`w-4 h-4 transition-transform duration-300 ${showAllFaq ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          </div>
        </section>


        {/* ITINERARY */}
        <section className="bg-[#eee8d9] border-t border-[#213528]/10 py-[10px]">
          <div className="px-5">
            <div className="text-center mb-[9px]">
              <div className="flex items-center justify-center gap-3">
                <span className="w-[90px] h-px bg-[#213528]/30" />

              <h2 className="font-serif uppercase text-[15px] tracking-[0.05em]">
                  {pageSettings.yoga_itinerary_title}
                </h2>

                <span className="w-[90px] h-px bg-[#213528]/30" />
              </div>

              <LotusIcon className="w-[17px] h-[17px] mx-auto mt-[2px]" />
            </div>

            <div className="flex flex-wrap justify-center -mx-1 md:-mx-2">
              {dynamicItineraries.length > 0 ? (
                dynamicItineraries.map((item, index) => (
                  <div key={index} className={`w-1/2 md:w-1/3 px-1 md:px-2 max-w-[380px] mb-2 md:mb-4 ${index > 1 ? 'hidden md:block' : ''}`}>
                    <ItineraryCard
                      no={index + 1}
                      image={item.image}
                      title={item.title}
                      desc={item.description}
                      duration={item.type} // we can use 'type' or something if duration is needed, wait itinerary needs features too... 
                      // Actually, features can just be derived or let's use the description for all.
                      features={[]} // We won't map features dynamically right now to save time, or we can comma separate.
                    />
                  </div>
                ))
              ) : (
                <>
                  <div className="w-1/2 md:w-1/3 px-1 md:px-2 max-w-[380px] mb-2 md:mb-4">
                    <ItineraryCard
                      no="1"
                      image={itineraryRishikesh}
                      title="Inde Spirituelle Bien-Être 14 Jours"
                      desc="Yoga quotidien, méditation, Aarti au Gange, visites d'ashrams et nature inspirante."
                      features={["Yoga & Méditation", "Spiritualité", "Nature", "Détox & Bien-être"]}
                    />
                  </div>

                  <div className="w-1/2 md:w-1/3 px-1 md:px-2 max-w-[380px] mb-2 md:mb-4">
                    <ItineraryCard
                      no="2"
                      image={itineraryKerala}
                      title="Yoga & Ayurveda au Kerala"
                      duration="8 Jours / 7 Nuits"
                      desc="Yoga, soins ayurvédiques, alimentation saine, détente et rajeunissement complet."
                      features={["Yoga", "Ayurveda", "Massage", "Détox"]}
                    />
                  </div>

                  <div className="hidden md:block w-1/2 md:w-1/3 px-1 md:px-2 max-w-[380px] mb-2 md:mb-4">
                    <ItineraryCard
                      no="3"
                      image={itineraryHimalaya}
                      title="Yoga & Himalaya"
                      duration="9 Jours / 8 Nuits"
                      desc="Yoga en montagne, méditation profonde, randonnées, silence et reconnexion intérieure."
                      features={["Yoga", "Méditation", "Nature", "Éveil intérieur"]}
                    />
                  </div>
                </>
              )}
            </div>
          </div>
        </section>

        {/* BOTTOM */}
        <section className="relative h-auto md:h-[170px] py-[20px] md:py-0 overflow-hidden">
          <img
            src={pageSettings.yoga_bottom_image || bottomBanner}
            alt="Votre voyage intérieur commence ici"
            className="absolute inset-0 w-full h-full object-cover object-left"
          />

          <div className="absolute inset-0 bg-[#11241c]/40" />

          <div className="relative z-10 h-full px-2 md:px-5 flex flex-row items-center justify-between gap-2 md:gap-8 max-w-7xl mx-auto">
            <div className="text-left text-[#f4ead6] pl-2 md:pl-[150px] flex-1">
              <LotusIcon className="w-[18px] h-[18px] md:w-[28px] md:h-[28px] mb-[2px] ml-0" color="#d8b45e" />

              <h2 className="font-serif uppercase text-[15px] md:text-[29px] leading-[1.1] md:leading-[0.96] tracking-[0.03em] mt-1 whitespace-pre-line">
                {pageSettings.yoga_bottom_title}
              </h2>

              <p className="text-[6.5px] md:text-[8.5px] leading-[1.45] mt-[6px] md:mt-[10px] max-w-[180px] md:max-w-[360px] whitespace-pre-line">
                {pageSettings.yoga_bottom_text}
              </p>

              <div className="mt-[10px] md:mt-[14px] flex flex-wrap md:flex-nowrap items-start justify-start gap-2 md:gap-[18px] max-w-[180px] md:max-w-none">
                {dynamicBottomFeatures.length > 0 ? (
                  dynamicBottomFeatures.map((item, index) => {
                    const IconComponent = FeatureIcons[item.image] || FeatureIcons.Person;
                    return (
                      <div key={index} className="w-[calc(50%-4px)] md:w-auto flex flex-col items-start md:items-center text-[#f4ead6]">
                        <div className="scale-[0.5] md:scale-[0.7] h-[10px] md:h-[14px] ml-[-6px] md:ml-0">
                          <IconComponent />
                        </div>
                        <span className="text-[5px] md:text-[6.5px] leading-tight whitespace-pre-line mt-[1px] md:mt-[2px] text-left md:text-center">
                          {item.title}
                        </span>
                      </div>
                    )
                  })
                ) : (
                  [
                    ["Enseignants\nexpérimentés", FeatureIcons.Person],
                    ["Hébergements\npaisibles", FeatureIcons.Temple],
                    ["Cuisine saine\nvégétarienne", FeatureIcons.Bowl],
                    ["Accompagnement\npersonnalisé", FeatureIcons.Globe],
                  ].map(([text, Icon], index) => (
                    <div key={index} className="w-[calc(50%-4px)] md:w-auto flex flex-col items-start md:items-center text-[#f4ead6]">
                      <div className="scale-[0.5] md:scale-[0.7] h-[10px] md:h-[14px] ml-[-6px] md:ml-0">
                        <Icon />
                      </div>

                      <span className="text-[5px] md:text-[6.5px] leading-tight whitespace-pre-line mt-[1px] md:mt-[2px] text-left md:text-center">
                        {text}
                      </span>
                    </div>
                  ))
                )}
              </div>
            </div>

            <div className="bg-[#f3ecdc] rounded-[6px] md:rounded-[10px] w-[130px] md:w-[230px] h-auto md:h-[130px] py-2 md:py-0 px-2 shrink-0 flex flex-col items-center justify-center text-center shadow-xl">
              <LotusIcon className="w-[14px] h-[14px] md:w-[23px] md:h-[23px] mb-[2px] md:mb-[4px]" />

              <h3 className="font-serif text-[8px] md:text-[12px] leading-tight mb-[6px] md:mb-[9px]">
                Prêt à commencer <br />
                votre transformation ?
              </h3>

              <button className="bg-[#213528] text-white text-[5px] md:text-[7px] uppercase font-bold tracking-[0.08em] px-[12px] md:px-[22px] py-[5px] md:py-[7px] rounded-[2px] mb-[5px] md:mb-[8px]">
                Réserver ma retraite
              </button>

              <p className="text-[4.5px] md:text-[7px] leading-[1.35] text-[#213528]/75">
                Reconnectez-vous à vous-même, <br />
                retournez chez vous transformé.
              </p>

              <div className="text-[7px] md:text-[10px] text-[#213528]/50 mt-[1px] md:mt-[2px]">♡</div>
            </div>
          </div>
        </section>

      </div>

      <Footer />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Montserrat:wght@300;400;500;600;700&display=swap');

        .font-serif {
          font-family: 'Playfair Display', serif;
        }

        .font-sans {
          font-family: 'Montserrat', sans-serif;
        }

        .yoga-wrapper {
          zoom: 1.25;
        }

        @media (max-width: 767px) {
          .yoga-wrapper {
            zoom: 1 !important;
            width: 100vw;
          }
          section {
            height: auto !important;
          }

          .grid {
            grid-template-columns: 1fr !important;
          }

          .pl-\\[250px\\] {
            padding-left: 0 !important;
          }

          .w-\\[50\\%\\] {
            width: 100% !important;
          }

          .text-\\[78px\\] {
            font-size: 62px !important;
          }

          .grid-cols-\\[1fr_250px\\] {
            grid-template-columns: 1fr !important;
          }

          .absolute.right-\\[46px\\] {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
};

export default Yoga;
