import React, { useEffect, useState } from "react";
import { Search } from "lucide-react";
import { apiRequest } from "../lib/api";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ctaImg from "../assets/image copy 27.png";

const DEFAULT_CONFIG = {
  layout: {
    bgColor: "#ffffff",
    bgImage: "",
  },
  typography: {
    headingColor: "#111111",
    headingSize: "67px",
    headingWeight: "normal",
    headingLineHeight: "0.98",
    headingLetterSpacing: "-0.035em",
    paragraphColor: "#303030",
    paragraphSize: "14px",
  },
  content: {
    pageTitle: "QUESTIONS<br/>FRÉQUENTES",
    subtitle: "FAQ",
    description:
      "Retrouvez ici les réponses aux questions les plus courantes pour préparer votre voyage en Inde en toute sérénité.",
    searchPlaceholder: "Rechercher une question...",
    ctaSub: "PRÊT À DÉCOUVRIR L’INDE ?",
    ctaTitle: "Parlez-nous de votre projet de voyage",
    ctaDesc:
      "En couple, en famille ou entre amis, nous créons avec vous le voyage qui vous ressemble.",
    ctaBtn: "DEMANDER UN DEVIS PERSONNALISÉ",
    heroBg:
      "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=1800",
    ctaBg:
      "https://images.unsplash.com/photo-1548013146-72479768bbfd?q=80&w=1200",
  },
  searchCategory: {
    showSearch: "true",
    searchWidth: "390px",
    searchHeight: "47px",
    searchPadding: "0 18px",
    searchBorder: "#d8cbb7",
    searchRadius: "6px",
    searchBg: "#ffffff",
  },
  classes: {
    pageWrapper: "",
    container: "max-w-[1440px] mx-auto px-[40px]",
    hero:
      "relative min-h-[280px] pt-16 md:pt-24 overflow-hidden border-b border-[#eadfce]",
    heading:
      "font-serif text-[32px] md:text-[67px] uppercase leading-[0.98] tracking-[-0.035em]",
    subtitle: "mb-[4px] md:mb-[8px] font-serif text-[16px] md:text-[22px]",
    searchWrapper:
      "mt-[16px] md:mt-[28px] flex h-10 md:h-[47px] w-full max-w-[280px] md:max-w-full md:w-[390px] items-center rounded-[6px] border bg-white px-3 md:px-[18px]",
    searchInput:
      "h-full w-full bg-transparent text-[11px] md:text-[13px] outline-none",
  },
  alignment: {
    textAlign: "center",
  },
  theme: {
    primaryColor: "#bd8a3a",
  },
};

const FaqCategoryCards = ({ cards }) => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [openIndex, setOpenIndex] = useState(0);
  const [showAll, setShowAll] = useState(false);

  const openPopup = (card) => {
    setSelectedCard(card);
    setOpenIndex(0);
    setShowAll(false);
  };

  const closePopup = () => {
    setSelectedCard(null);
    setOpenIndex(0);
    setShowAll(false);
  };

  const currentQuestions = selectedCard?.popupQuestions || [];
  const visibleQuestions = showAll
    ? currentQuestions
    : currentQuestions.slice(0, 6);

  return (
    <>
      <div className="px-4 md:px-0 mb-8 md:mb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {cards.map((card, index) => (
            <button
              type="button"
              key={index}
              onClick={() => openPopup(card)}
              className="group text-left overflow-hidden rounded-[10px] border border-[#e8dfd2] bg-white shadow-[0_4px_18px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_28px_rgba(0,0,0,0.10)]"
            >
              <div className="relative h-[135px] overflow-hidden">
                <img
                  src={card.img}
                  alt={card.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

                <div
                  className="absolute left-4 bottom-[-18px] z-10 flex h-[38px] w-[38px] items-center justify-center rounded-full border-[3px] border-white text-[14px] font-bold text-white shadow-md"
                  style={{ backgroundColor: card.color }}
                >
                  {card.no}
                </div>
              </div>

              <div className="relative px-4 pb-4 pt-8 min-h-[108px]">
                <h3 className="font-serif text-[18px] leading-[1.12] text-[#171717]">
                  {card.title}
                </h3>

                <div className="mt-4 flex items-center justify-between">
                  <p className="text-[13px] text-[#555]">
                    {card.questionsCount}
                  </p>

                  <span className="flex h-[28px] w-[28px] items-center justify-center rounded-full border border-[#d8d0c5] bg-white text-[#1f1f1f] transition-all duration-300 group-hover:border-[#bd8a3a] group-hover:bg-[#bd8a3a] group-hover:text-white">
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {selectedCard && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 px-3 py-5">
          <div className="relative w-full max-w-[1180px] max-h-[92vh] overflow-hidden rounded-[12px] bg-[#fffdf8] border border-[#e7dccd] shadow-[0_25px_80px_rgba(0,0,0,0.30)]">
            <button
              type="button"
              onClick={closePopup}
              className="absolute right-4 top-4 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-[#d8d0c5] bg-white text-[#444] hover:bg-[#bd8a3a] hover:text-white transition-all"
            >
              ✕
            </button>

            <div className="grid grid-cols-1 md:grid-cols-[310px_1fr] max-h-[92vh] overflow-y-auto">
              <div className="border-r border-[#eee2d2] bg-[#fffaf2] p-5">
                <div className="relative overflow-hidden rounded-[8px]">
                  <img
                    src={selectedCard.img}
                    alt={selectedCard.title}
                    className="h-[145px] w-full object-cover"
                  />

                  <div
                    className="absolute left-4 bottom-[-1px] flex h-[42px] w-[42px] items-center justify-center rounded-full border-[3px] border-white text-[15px] font-bold text-white shadow-md"
                    style={{ backgroundColor: selectedCard.color }}
                  >
                    {selectedCard.no}
                  </div>
                </div>

                <h2 className="mt-6 font-serif text-[23px] leading-tight text-[#171717]">
                  {selectedCard.title}
                </h2>

                <p className="mt-1 text-[13px] font-medium text-[#333]">
                  {selectedCard.questionsCount}
                </p>

                <p className="mt-5 max-w-[235px] text-[13px] leading-[1.55] text-[#545454]">
                  {selectedCard.desc}
                </p>

                <div className="mt-6 text-[#d7c7b2]">
                  <svg
                    width="220"
                    height="70"
                    viewBox="0 0 220 70"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="opacity-70"
                  >
                    <path
                      d="M10 45C55 62 97 51 132 34C163 19 185 16 205 7"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeDasharray="3 3"
                    />
                    <path
                      d="M178 18L208 4L195 32L188 21L178 18Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      fill="none"
                    />
                    <rect
                      x="6"
                      y="28"
                      width="28"
                      height="30"
                      rx="3"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M13 36H27M13 43H25M13 50H22"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                  </svg>
                </div>
              </div>

              <div className="bg-white">
                {visibleQuestions.map((item, index) => (
                  <div
                    key={index}
                    className="border-b border-[#eee2d2] last:border-b-0"
                  >
                    <button
                      type="button"
                      onClick={() =>
                        setOpenIndex(openIndex === index ? null : index)
                      }
                      className="flex w-full items-start justify-between gap-4 px-6 md:px-8 py-4 text-left hover:bg-[#fffaf2] transition-colors"
                    >
                      <div className="flex gap-3">
                        <span className="mt-[2px] text-[16px] text-[#c69a55]">
                          +
                        </span>

                        <h3 className="text-[14.5px] md:text-[16px] font-semibold leading-[1.4] text-[#1d1d1d]">
                          {item.q}
                        </h3>
                      </div>

                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#d7d0c7] text-[#9a9a9a]">
                        {openIndex === index ? "−" : "+"}
                      </span>
                    </button>

                    <div
                      className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index
                          ? "max-h-[500px] opacity-100"
                          : "max-h-0 opacity-0"
                        }`}
                    >
                      <p className="px-12 md:px-[68px] pb-5 text-[13.5px] md:text-[14.5px] leading-[1.65] text-[#4e4e4e]">
                        {item.a}
                      </p>
                    </div>
                  </div>
                ))}

                {currentQuestions.length > 6 && (
                  <button
                    type="button"
                    onClick={() => setShowAll(!showAll)}
                    className="flex w-full items-center justify-center gap-2 py-4 text-[14px] font-semibold text-[#5e6f61] hover:bg-[#fffaf2] transition-colors"
                  >
                    {showAll
                      ? "Masquer les questions"
                      : `Voir les ${currentQuestions.length - 6} autres questions`}

                    <svg
                      className={`h-4 w-4 transition-transform ${showAll ? "rotate-180" : ""
                        }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const Faq = () => {
  const [config, setConfig] = useState(DEFAULT_CONFIG);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [configRes, faqsRes] = await Promise.all([
          apiRequest('/faq-page'),
          apiRequest('/faqs')
        ]);
        
        if (faqsRes && faqsRes.success) {
          // Format faqs to match the structure the UI expects
          const formattedCards = faqsRes.data.map((cat, index) => ({
            id: cat.id,
            no: cat.badge_number || String(index + 1).padStart(2, "0"),
            title: cat.title,
            questionsCount: `${cat.active_questions_count || 0} questions`,
            img: cat.image,
            color: index % 2 === 0 ? "#1f6b3f" : "#4b7d33", // Fallback colors if none in db
            desc: cat.description,
            slug: cat.slug,
            popupQuestions: cat.questions.map(q => ({ q: q.question, a: q.answer }))
          }));
          setFaqs(formattedCards);
        }

        if (configRes.success && configRes.data && configRes.data.length > 0) {
          const apiConfig = configRes.data[0].config;
          const mergedConfig = { ...DEFAULT_CONFIG };

          for (let key in DEFAULT_CONFIG) {
            if (apiConfig[key]) {
              mergedConfig[key] = {
                ...DEFAULT_CONFIG[key],
                ...apiConfig[key],
              };
            }
          }

          setConfig(mergedConfig);
        }
      } catch (err) {
        console.error("Error loading FAQ config:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const { layout, typography, content, searchCategory, classes, alignment, theme } =
    config;

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Chargement...
      </div>
    );
  }

  return (
    <div
      className={`min-h-screen ${classes.pageWrapper}`}
      style={{
        backgroundColor: layout.bgColor,
        backgroundImage: `url(${layout.bgImage})`,
        color: typography.paragraphColor,
      }}
    >
      <Navbar />

      <style
        dangerouslySetInnerHTML={{
          __html: `
            :root { --faq-primary: ${theme.primaryColor}; }
            .faq-hero-bg { background-image: url('${content.heroBg}'); }
            .faq-cta-bg { background-image: url('${content.ctaBg}'); }
          `,
        }}
      />

      <section className={`${classes.hero} bg-cover bg-center relative`} style={{ backgroundImage: `url('${content.heroBg}')` }}>
        <div
          className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"
          style={{
            "--tw-gradient-from": layout.bgColor,
            "--tw-gradient-via": `${layout.bgColor}CC`,
          }}
        />

        <div
          className={`relative z-10 flex h-full items-center py-4 w-full ${classes.container}`}
        >
          <div className="pt-[10px]" style={{ textAlign: alignment.textAlign }}>
            <p className={classes.subtitle} style={{ color: theme.primaryColor }}>
              {content.subtitle}
            </p>

            <h1
              className={classes.heading}
              style={{
                color: typography.headingColor,
                fontSize: typography.headingSize,
                fontWeight: typography.headingWeight,
                lineHeight: typography.headingLineHeight,
                letterSpacing: typography.headingLetterSpacing,
              }}
              dangerouslySetInnerHTML={{ __html: content.pageTitle }}
            />

            <div
              className="my-[12px] md:my-[22px] h-[1px] w-[35px] md:w-[45px]"
              style={{
                backgroundColor: theme.primaryColor,
                margin: alignment.textAlign === "center" ? "auto" : "",
              }}
            />

            <p
              className="max-w-[280px] md:max-w-[350px] text-[11px] md:text-[14px] font-medium leading-[1.7] md:leading-[1.9]"
              style={{
                color: typography.paragraphColor,
                fontSize: typography.paragraphSize,
                margin: alignment.textAlign === "center" ? "auto" : "",
              }}
            >
              {content.description}
            </p>

            {searchCategory.showSearch === "true" && (
              <div
                className={classes.searchWrapper}
                style={{
                  width: searchCategory.searchWidth,
                  height: searchCategory.searchHeight,
                  borderColor: searchCategory.searchBorder,
                  borderRadius: searchCategory.searchRadius,
                  backgroundColor: searchCategory.searchBg,
                  padding: searchCategory.searchPadding,
                  margin: alignment.textAlign === "center" ? "auto" : "",
                }}
              >
                <Search size={16} className="mr-2 md:mr-[14px] text-[#777]" />

                <input
                  type="text"
                  placeholder={content.searchPlaceholder}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className={classes.searchInput}
                />
              </div>
            )}
          </div>
        </div>
      </section>

      <main className={`py-6 md:py-[45px] w-full ${classes.container}`}>
        <FaqCategoryCards cards={faqs} />

        <section
          className="mt-8 md:mt-[46px] grid overflow-hidden rounded-[4px] shadow-sm lg:grid-cols-[0.92fr_1.28fr]"
          style={{ backgroundColor: "#fbf3e7" }}
        >
          <div className="h-[200px] md:h-[305px] bg-cover bg-center" style={{ backgroundImage: `url('${content.ctaBg || ctaImg}')` }} />

          <div className="flex flex-col justify-center px-6 py-6 md:px-[42px] md:py-[38px]">
            <p className="mb-2 md:mb-[10px] text-[9px] md:text-[13px] font-semibold uppercase tracking-[0.14em] text-[var(--faq-primary)]">
              {content.ctaSub}
            </p>

            <h2 className="font-serif text-[20px] md:text-[31px] leading-tight text-gray-900">
              {content.ctaTitle}
            </h2>

            <div className="mt-3 md:mt-[18px] h-[1px] w-[38px] bg-[var(--faq-primary)]" />

            <p className="mt-4 md:mt-[28px] max-w-[540px] text-[11px] md:text-[13.5px] font-medium leading-[1.6] md:leading-[1.85] text-gray-700">
              {content.ctaDesc}
            </p>

            <button
              className="mt-4 md:mt-[28px] w-fit py-2.5 md:py-[13px] px-8 text-[8px] md:text-[10.5px] font-bold uppercase tracking-[0.12em] text-white"
              style={{
                backgroundColor: theme.primaryColor,
                borderRadius: "2px",
              }}
            >
              {content.ctaBtn}
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Faq;