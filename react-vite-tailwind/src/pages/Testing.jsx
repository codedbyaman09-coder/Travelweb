import React from "react";
import yogaBanner from "../assets/image copy 37.png";
import shivaImg from "../assets/image copy 38.png";
// import itineraryRishikesh from "../assets/itinerary_rishikesh_1778933920513.png";
// import itineraryKerala from "../assets/itinerary_kerala_1778933936136.png";
// import itineraryHimalaya from "../assets/itinerary_himalaya_1778933951970.png";
import Footer from "../components/Footer";

const LotusIconMain = ({ className = "w-20 h-20" }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none">
    <path d="M32 52C20 45 15 32 32 10C49 32 44 45 32 52Z" stroke="#7d673bff" strokeWidth="1.5" />
    <path d="M32 52C16 50 8 40 10 20C25 25 31 38 32 52Z" stroke="#7d673bff" strokeWidth="1.5" />
    <path d="M32 52C48 50 56 40 54 20C39 25 33 38 32 52Z" stroke="#7d673bff" strokeWidth="1.5" />
    <path d="M12 50C24 58 40 58 52 50" stroke="#7d673bff" strokeWidth="1.5" />
  </svg>
);

const FeatureIcons = {
  Yoga: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
      <circle cx="12" cy="5" r="2.5" />
      <path d="M12 8v6m0 0l-4 4m4-4l4 4M4 10l8 2 8-2" />
    </svg>
  ),
  Om: () => (
    <div className="text-[22px] leading-none font-serif">ॐ</div>
  ),
  Ayurveda: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <path d="M2 12l10 5 10-5" />
      <path d="M2 17l10 5 10-5" />
    </svg>
  ),
  Nature: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M12 3L2 20h20L12 3z" />
      <path d="M8 16l4-7 4 7" />
    </svg>
  ),
  Temple: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M3 21h18M5 21V10l7-7 7 7v11M8 21v-7h8v7" />
    </svg>
  ),
  Pin: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  ),
  Globe: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" />
    </svg>
  ),
  Shiva: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M12 2v20M8 5h8M9 20h6" />
      <circle cx="12" cy="11" r="3" />
    </svg>
  ),
  Person: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
      <circle cx="12" cy="7" r="4" />
      <path d="M4 21v-2a4 4 0 014-4h8a4 4 0 014 4v2" />
    </svg>
  ),
  Target: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  ),
  Bowl: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
      <path d="M2 12c0 5.5 4.5 10 10 10s10-4.5 10-10H2z" />
      <path d="M7 12c0-3 2-5 5-5s5 2 5 5" />
    </svg>
  ),
};

const Flourish = () => (
  <svg width="24" height="8" viewBox="0 0 24 8" fill="none" className="opacity-40">
    <path d="M0 4H20M20 4L16 0M20 4L16 8" stroke="currentColor" strokeWidth="0.5" />
    <circle cx="22" cy="4" r="1" fill="currentColor" />
  </svg>
);

const QuestionItem = ({ number, question, answer, icon: Icon }) => (
  <div className="flex gap-4 mb-10">
    <div className="flex flex-col items-center">
      <div className="w-8 h-8 rounded-full bg-[#1c2d24] text-white flex items-center justify-center text-[14px] font-bold shrink-0 mb-2">
        {number}
      </div>
      {Icon && (
        <div className="text-[#1c2d24]/60 mt-1">
          <Icon />
        </div>
      )}
    </div>
    <div className="flex-1">
      <h4 className="text-[16px] font-bold text-[#1c2d24] mb-2 leading-tight uppercase tracking-wide">
        {question}
      </h4>
      <div className="text-[14px] leading-relaxed text-[#1c2d24]/80 whitespace-pre-line">
        {answer}
      </div>
    </div>
  </div>
);

const InfoItemLeft = ({ title, content, icon: Icon }) => (
  <div className="flex gap-4 items-start mb-8 relative z-10">
    <div className="w-11 h-11 rounded-full bg-[#1c2d24] flex items-center justify-center text-white shrink-0">
      <Icon />
    </div>
    <div className="flex-1">
      <h4 className="text-[16px] font-bold text-[#1c2d24] mb-1 leading-tight">
        {title}
      </h4>
      <p className="text-[13px] leading-relaxed text-[#1c2d24]/70 max-w-[440px]">
        {content}
      </p>
    </div>
  </div>
);

const ItineraryCard = ({ number, title, duration, description, image, features }) => (
  <div className="bg-white rounded-[20px] overflow-hidden shadow-sm flex flex-col h-full border border-[#1c2d24]/5">
    <div className="relative h-[220px] overflow-hidden">
      <img src={image} alt={title} className="w-full h-full object-cover" />
      <div className="absolute top-4 left-4 w-8 h-8 rounded-full bg-[#1c2d24] text-white flex items-center justify-center text-[14px] font-bold">
        {number}
      </div>
    </div>

    <div className="p-8 flex flex-col items-center text-center flex-1">
      <h4 className="text-[18px] md:text-[20px] font-serif font-bold text-[#1c2d24] mb-2 uppercase tracking-wide">
        {title}
      </h4>

      <p className="text-[14px] font-bold text-[#1c2d24]/60 mb-6 uppercase tracking-wider">
        {duration}
      </p>

      <p className="text-[14px] leading-relaxed text-[#1c2d24]/80 mb-8 max-w-[280px]">
        {description}
      </p>

      <div className="mt-auto pt-6 border-t border-[#1c2d24]/10 w-full grid grid-cols-4 gap-2">
        {features.map((feature, idx) => {
          const Icon = [FeatureIcons.Yoga, FeatureIcons.Om, FeatureIcons.Nature, FeatureIcons.Bowl][idx % 4];

          return (
            <div key={idx} className="flex flex-col items-center gap-2">
              <div className="text-[#1c2d24]/80">
                <Icon />
              </div>
              <span className="text-[8px] md:text-[9px] font-bold text-[#1c2d24]/60 uppercase text-center leading-tight">
                {feature}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  </div>
);

const Testing = () => {
  const leftQuestions = [
    {
      number: 1,
      question: 'Que signifie le mot "Yoga" ?',
      answer: 'Le mot Yoga vient du sanskrit "Yuj" qui signifie unir, connecter, harmoniser.',
      icon: FeatureIcons.Om,
    },
    {
      number: 2,
      question: "Quand le yoga est-il apparu ?",
      answer: "Le yoga est apparu il y a plus de 5 000 ans en Inde ancienne.",
      icon: FeatureIcons.Temple,
    },
    {
      number: 3,
      question: "Que sont les Vedas ?",
      answer: "Les Vedas sont les textes sacrés les plus anciens de l'Inde. Ils contiennent prières, mantras, philosophie et connaissances spirituelles.",
      icon: FeatureIcons.Ayurveda,
    },
    {
      number: 4,
      question: "Pourquoi le yoga est-il lié à Shiva ?",
      answer: "Shiva est considéré comme le premier yogi (Adiyogi). Il a médité dans l'Himalaya et transmis la science du yoga à ses disciples.",
      icon: FeatureIcons.Shiva,
    },
    {
      number: 5,
      question: "Qui est un Yogi ? Une Yogini ?",
      answer: "Un Yogi est un homme qui pratique le yoga. Une Yogini est une femme qui pratique le yoga. Ils cherchent la paix intérieure et l'éveil spirituel.",
      icon: FeatureIcons.Person,
    },
  ];

  const rightQuestions = [
    {
      number: 6,
      question: "Combien existe-t-il de postures ?",
      answer: "Les textes anciens parlent de 8,4 millions de postures symboliques. Dans la pratique moderne, environ 84 postures principales sont essentielles.",
      icon: FeatureIcons.Yoga,
    },
    {
      number: 7,
      question: "Quelles sont les 8 branches du Yoga ?",
      answer:
        "1. Yama (valeurs morales)\n2. Niyama (discipline personnelle)\n3. Asana (postures)\n4. Pranayama (respiration)\n5. Pratyahara (contrôle des sens)\n6. Dharana (concentration)\n7. Dhyana (méditation)\n8. Samadhi (éveil spirituel)",
      icon: FeatureIcons.Nature,
    },
    {
      number: 8,
      question: "Quel est le but du yoga ?",
      answer: "Calmer le mental, équilibrer le corps, réduire le stress et atteindre l'éveil spirituel.",
      icon: FeatureIcons.Target,
    },
    {
      number: 9,
      question: "Yoga & Ayurveda ?",
      answer: "Le yoga et l'Ayurveda sont complémentaires. Le yoga équilibre l'esprit et l'énergie, l'Ayurveda équilibre le corps et la santé.",
      icon: FeatureIcons.Bowl,
    },
  ];

  return (
    <div className="w-full min-h-screen bg-white overflow-x-hidden font-sans">
      {/* HERO BANNER */}
      <section className="relative w-full h-[600px] md:h-[750px] lg:h-[820px] overflow-hidden flex items-center justify-center">
        <img
          src={yogaBanner}
          alt="Yoga Retreat India"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="relative z-10 w-full max-w-[1440px] h-full mx-auto px-6 md:px-16 flex flex-col pt-28 md:pt-40 lg:pt-48">
          <div className="flex flex-col md:flex-row justify-between items-start w-full">
            <div className="flex flex-col items-center md:items-start max-w-[700px]">
              <div className="flex flex-col items-center text-[#1c2d24]">
                <div className="flex flex-col items-center mb-2">
                  <div className="mb-6 md:mb-8">
                    <LotusIconMain className="w-16 h-16 md:w-20 md:h-20" />
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="rotate-180">
                      <Flourish />
                    </div>
                    <span className="text-[14px] md:text-[18px] font-serif tracking-[0.4em] uppercase">
                      Retraite de
                    </span>
                    <Flourish />
                  </div>
                </div>

                <h1 className="text-[80px] md:text-[110px] lg:text-[140px] font-serif font-bold leading-[0.85] uppercase tracking-[-0.03em] mb-2">
                  Yoga
                </h1>

                <h2 className="text-[36px] md:text-[50px] lg:text-[70px] font-serif font-bold leading-none uppercase tracking-[0.1em]">
                  en Inde
                </h2>

                <div className="mt-8 md:mt-10 flex items-center gap-3">
                  <span className="text-[14px] md:text-[18px] font-medium">
                    Corps • Esprit • Âme en Harmonie
                  </span>
                </div>
              </div>

              <div className="mt-12 md:mt-16 lg:mt-20 flex flex-row flex-nowrap items-center gap-x-4 md:gap-x-6 lg:gap-x-8 text-[#1c2d24] whitespace-nowrap w-full md:w-auto overflow-hidden -ml-8 md:-ml-16 lg:-ml-24">
                <div className="flex items-center gap-2 md:gap-3">
                  <FeatureIcons.Yoga />
                  <span className="text-[10px] md:text-[12px] lg:text-[13px] font-bold leading-tight">
                    Yoga <br /> Authentique
                  </span>
                </div>

                <div className="w-px h-8 bg-[#1c2d24]/20" />

                <div className="flex items-center gap-2 md:gap-3">
                  <FeatureIcons.Om />
                  <span className="text-[10px] md:text-[12px] lg:text-[13px] font-bold">
                    Spiritualité
                  </span>
                </div>

                <div className="w-px h-8 bg-[#1c2d24]/20" />

                <div className="flex items-center gap-2 md:gap-3">
                  <FeatureIcons.Ayurveda />
                  <span className="text-[10px] md:text-[12px] lg:text-[13px] font-bold">
                    Ayurveda
                  </span>
                </div>

                <div className="w-px h-8 bg-[#1c2d24]/20" />

                <div className="flex items-center gap-2 md:gap-3">
                  <FeatureIcons.Nature />
                  <span className="text-[10px] md:text-[12px] lg:text-[13px] font-bold leading-tight">
                    Nature <br /> & Sérénité
                  </span>
                </div>
              </div>
            </div>

            <div className="hidden lg:block absolute bottom-12 md:bottom-20 right-6 md:right-16 max-w-[320px] lg:max-w-[400px]">
              <p className="text-[18px] lg:text-[22px] font-serif italic text-white text-center leading-[1.4] mb-6">
                "Le Yoga n'est pas <br />
                seulement une pratique, <br />
                c'est un voyage vers <br />
                soi-même."
              </p>

              <div className="flex flex-col items-center gap-4">
                <div className="flex items-center gap-4 justify-center w-full text-white">
                  <div className="w-12 h-px bg-current" />
                  <LotusIconMain className="w-5 h-5" />
                  <div className="w-12 h-px bg-current" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HISTORY & KNOWLEDGE SECTION */}
      <section className="flex flex-col lg:flex-row w-full min-h-[900px]">
        <div className="w-full lg:w-[45%] bg-[#f5f1e8] pt-0 md:pt-0 pb-10 md:pb-20 pl-4 md:pl-6 pr-10 md:pr-20 relative overflow-hidden flex flex-col">
          <div className="relative z-10 pt-10 mb-16">
            <h3 className="text-[16px] md:text-[18px] font-serif font-bold text-[#1c2d24] uppercase mb-10 leading-tight">
              Brève Histoire du Yoga
            </h3>

            <div className="space-y-6 text-[#1c2d24]/80 text-[11px] md:text-[12px] leading-relaxed max-w-[700px]">
              <p>
                Le yoga est une science ancienne née en Inde il y a plus de 5 000 ans.
                <br />
                Ses racines se trouvent dans les Vedas, les Upanishads et les traditions spirituelles de la <br />
                civilisation indienne.
              </p>

              <p>
                Il a été transmis par des sages et des maîtres à travers les siècles.
                <br />
                Selon la tradition, Lord Shiva est le premier yogi, ou Adiyogi,
                <br />
                qui a transmis la connaissance du yoga à l'humanité.
              </p>

              <p>
                Le sage Patanjali a ensuite compile Les Yoga Sutras,
                <br />
                qui decrivent la chemin complet du yoga sous
                <br />
                forme de 8 branches.
              </p>
            </div>
          </div>

          <div className="mt-32">
            <InfoItemLeft
              title="Yoga traditionnel vs moderne"
              content="Le yoga traditionnel inclut spiritualité, méditation, respiration et philosophie. Le yoga moderne est souvent centré sur le corps."
              icon={FeatureIcons.Yoga}
            />
            <InfoItemLeft
              title="Pourquoi l'Inde est la terre du yoga ?"
              content="Parce que l'Inde a donné naissance au yoga et préserve les traditions authentiques à travers ses ashrams et maîtres."
              icon={FeatureIcons.Temple}
            />
            <InfoItemLeft
              title="Les lieux sacrés du yoga"
              content="Rishikesh, Himalaya, Varanasi, Kerala et Dharamshala sont des lieux emblématiques pour pratiquer le yoga."
              icon={FeatureIcons.Pin}
            />
            <InfoItemLeft
              title="Le yoga aujourd'hui"
              content="Le yoga est pratiqué dans le monde entier, mais en Inde, il reste un art de vivre et un chemin spirituel profond."
              icon={FeatureIcons.Globe}
            />
          </div>

          <img
            src={shivaImg}
            alt="Lord Shiva Meditating"
            className="absolute top-[-12rem] lg:top-[-10rem] right-0 h-[60%] md:h-[70%] lg:h-[80%] w-auto object-contain opacity-80 lg:opacity-90 mix-blend-multiply pointer-events-none"
          />
        </div>

        <div className="w-full lg:w-[55%] bg-white p-10 md:p-20">
          <div className="max-w-[800px] mx-auto">
            <div className="flex flex-col items-center mb-12">
              <h3 className="text-[28px] md:text-[40px] font-serif font-bold text-[#1c2d24] uppercase text-center mb-4">
                Tout savoir sur le yoga
              </h3>

              <div className="flex items-center gap-4">
                <div className="h-[1px] w-24 bg-[#1c2d24]/20" />
                <LotusIconMain className="w-8 h-8 text-[#1c2d24]/40" />
                <div className="h-[1px] w-24 bg-[#1c2d24]/20" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-2">
              <div className="space-y-4">
                {leftQuestions.map((q) => (
                  <QuestionItem key={q.number} {...q} />
                ))}
              </div>

              <div className="space-y-4">
                {rightQuestions.map((q) => (
                  <QuestionItem key={q.number} {...q} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3 ITINÉRAIRES SECTION */}
      <section className="bg-[#f5f1e8] py-20 px-6 md:px-16">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col items-center mb-16">
            <div className="flex items-center gap-6 mb-4">
              <div className="rotate-180 opacity-40">
                <Flourish />
              </div>

              <h2 className="text-[24px] md:text-[32px] lg:text-[36px] font-serif font-bold text-[#1c2d24] uppercase tracking-[0.1em] text-center">
                3 Itinéraires de Yoga en Inde
              </h2>

              <div className="opacity-40">
                <Flourish />
              </div>
            </div>

            <LotusIconMain className="w-8 h-8 opacity-60" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ItineraryCard
              number={1}
              title="Yoga & Spiritualité à Rishikesh"
              duration="7 Jours / 6 Nuits"
              description="Yoga quotidien, méditation, Aarti au Gange, visites d'ashrams et nature inspirante."
              features={["Yoga & Méditation", "Spiritualité", "Nature", "Détox & Bien-être"]}
            />

            <ItineraryCard
              number={2}
              title="Yoga & Ayurveda au Kerala"
              duration="8 Jours / 7 Nuits"
              description="Yoga, soins ayurvédiques, alimentation saine, détente et rajeunissement complet."
              features={["Yoga", "Ayurveda", "Massage", "Détox"]}
            />

            <ItineraryCard
              number={3}
              title="Yoga & Himalaya"
              duration="9 Jours / 8 Nuits"
              description="Yoga en montagne, méditation profonde, randonnées, silence et reconnexion intérieure."
              features={["Yoga", "Méditation", "Nature", "Éveil intérieur"]}
            />
          </div>
        </div>
      </section>

      {/* SEO FOOTER LINKS */}
      <section className="bg-[#fcfaf7] py-10 border-t border-[#1c2d24]/5">
        <div className="max-w-[1440px] mx-auto px-6 md:px-16 flex flex-wrap justify-center gap-x-4 gap-y-2 text-center">
          {[
            "AGENCE DE VOYAGE INDE PARIS",
            "AGENCE LOCALE INDE DU SUD",
            "AGENCE DE VOYAGE INDE DU NORD",
            "AGENCE LOCALE FRANCOPHONE INDE",
            "RECEPTIF INDE",
            "AGENCE LOCALE RAJASTHAN",
            "AGENCE DE VOYAGE EN INDE",
            "AGENCE DE VOYAGE SPÉCIALISÉE POUR L'INDE",
            "MEILLEURE AGENCE DE VOYAGE INDE",
          ].map((link, idx) => (
            <React.Fragment key={idx}>
              <span className="text-[10px] md:text-[11px] font-sans font-medium text-[#1c2d24]/30 uppercase tracking-[0.1em] hover:text-[#1c2d24]/60 cursor-pointer transition-colors">
                {link}
              </span>
              {idx < 8 && <span className="text-[#1c2d24]/10 text-[10px]">•</span>}
            </React.Fragment>
          ))}
        </div>
      </section>

      <Footer />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&family=Montserrat:wght@300;400;500;600;700&display=swap');
        .font-serif { font-family: 'Playfair Display', serif; }
        .font-sans { font-family: 'Montserrat', sans-serif; }
        h1, h2 { letter-spacing: -0.02em; }
      `}</style>
    </div>
  );
};

export default Testing;