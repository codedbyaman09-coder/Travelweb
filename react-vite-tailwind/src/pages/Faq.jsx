import React, { useState } from "react";
import {
  Search,
  Plus,
  Building2,
  HeartPulse,
  Car,
  Sparkles,
  Headphones,
  Flower2,
} from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import imageCopy45 from "../assets/image copy 45.jpg";
import { Link } from "react-router-dom";

const faqData = [
  {
    no: "01.",
    title: "AVANT DE PARTIR EN INDE",
    icon: Building2,
    questions: [
      {
        q: "Faut-il un visa pour voyager en Inde ?",
        a: (
          <>
            Oui, les voyageurs français doivent obtenir un visa avant leur départ. Le e-visa touristique est généralement la solution la plus simple et rapide pour découvrir l’Inde. <strong>pour voir plus des info</strong> - <img src={imageCopy45} alt="pointer" className="inline-block h-[15px] w-auto mx-1.5 align-middle" /> <a href="https://www.diplomatie.gouv.fr/fr/information-par-pays/inde/conseils-aux-voyageurs-entree-sejour" target="_blank" rel="noopener noreferrer" className="text-[#bd8a3a] hover:underline font-bold">cliquez ici</a>
          </>
        )
      },
      {
        q: "Quelle est la meilleure période pour voyager en Inde ?",
        a: "La période idéale se situe généralement entre octobre et mars pour le Rajasthan, Delhi, Agra, Varanasi, le Kerala et l’Inde du Sud. Pour le Ladakh et les régions himalayiennes, la meilleure saison se situe plutôt entre avril et septembre."
      },
      {
        q: "L’Inde est-elle adaptée à un premier voyage ?",
        a: "Oui. Avec un itinéraire bien pensé, un chauffeur privé et un accompagnement local sérieux, un premier voyage en Inde devient une expérience fluide, confortable et profondément enrichissante."
      },
      {
        q: "L’Inde est-elle une destination sûre pour les voyageurs français ?",
        a: "Oui, l’Inde est une destination très appréciée des voyageurs français. Comme dans tout grand pays, quelques précautions simples sont recommandées, mais un voyage bien organisé reste très confortable et sécurisé."
      },
      {
        q: "Peut-on voyager en Inde en tant que femme seule ?",
        a: "Oui, de nombreuses femmes voyagent en Inde chaque année. Avec un itinéraire adapté, des hébergements soigneusement sélectionnés et un chauffeur privé, le voyage peut se dérouler sereinement."
      },
      {
        q: "Combien de temps prévoir pour découvrir l’Inde ?",
        a: "Nous conseillons généralement entre 10 et 15 jours pour découvrir une région sans précipitation et profiter pleinement du voyage."
      }
    ]
  },
  {
    no: "02.",
    title: "SANTÉ & CONFORT",
    icon: HeartPulse,
    questions: [
      {
        q: "Peut-on manger facilement en Inde sans être malade ?",
        a: (
          <>
            Oui, avec quelques précautions simples et une bonne sélection d’adresses, il est tout à fait possible de profiter pleinement de la cuisine indienne pendant votre voyage. <strong>pour voir plus des info</strong> - <img src={imageCopy45} alt="pointer" className="inline-block h-[15px] w-auto mx-1.5 align-middle" /> <a href="https://www.service-public.gouv.fr/particuliers/vosdroits/F1109" target="_blank" rel="noopener noreferrer" className="text-[#bd8a3a] hover:underline font-bold">cliquez ici</a>
          </>
        )
      },
      {
        q: "L’eau est-elle potable en Inde ?",
        a: "Nous recommandons de boire uniquement de l’eau filtrée ou en bouteille pendant le séjour."
      },
      {
        q: "Quels médicaments faut-il prévoir pour un voyage en Inde ?",
        a: "Nous conseillons de prévoir une petite trousse de voyage avec les médicaments habituels ainsi qu’un traitement basique contre les troubles digestifs. "
      },
      {
        q: "Les hôtels en Inde sont-ils confortables ?",
        a: "Oui. Indeora Voyages sélectionne des hôtels de charme, palais historiques et hébergements soigneusement choisis pour leur confort, leur atmosphère et la qualité de leur accueil."
      }
    ],
    card: true
  },
  {
    no: "03.",
    title: "ORGANISATION DU VOYAGE",
    icon: Car,
    questions: [
      {
        q: "Proposez-vous des voyages sur mesure en Inde ?",
        a: "Oui, tous nos voyages sont entièrement personnalisés selon vos envies, votre rythme, votrebudget et votre manière de découvrir l’Inde."
      },
      {
        q: "Les chauffeurs sont-ils privés ?",
        a: "Oui, nos circuits sont organisés avec chauffeurs privés expérimentés afin de garantir confort,sécurité et liberté tout au long du voyage."
      },
      
      {
        q: "Quels types d’hébergements proposez-vous ?",
        a: "Nous sélectionnons des hôtels de charme, palais historiques, boutique hôtels et hébergements authentiques selon le style de voyage recherché."
      },
      {
        q: "Peut-on combiner plusieurs régions dans un même voyage ?",
        a: "Oui, il est possible de combiner par exemple le Rajasthan et le Kerala, l’Inde du Nord et leLadakh ou encore Varanasi avec l’Inde du Sud. "
      }
    ]
  },
  {
    no: "04.",
    title: "EXPÉRIENCES & DÉCOUVERTES",
    icon: Sparkles,
    questions: [
      {
        q: "Peut-on découvrir une Inde authentique loin des circuits classiques ?",
        a: "Oui. Notre approche privilégie les rencontres humaines, les expériences locales, les villages, lestraditions et les lieux préservés afin de découvrir une Inde plus vraie et plus inspirante.."
      },
      {
        q: "Quels types de voyages proposez-vous ?",
        a: "Nous organisons des voyages culturels, circuits privés, séjours bien-être & Ayurveda, voyages en famille, lunes de miel et découvertes du Rajasthan et de l’Inde du Sud."
      },
      {
        q: "L’Inde est-elle une destination spirituelle ?",
        a: "Oui, l’Inde possède une spiritualité omniprésente à travers ses temples, cérémonies, yoga, méditation, Ayurveda et lieux sacrés comme Varanasi ou Rishikesh. "
      },
      {
        q: "Quel est le plus beau voyage à faire en Inde ?",
        a: "Le Rajasthan reste souvent le voyage le plus emblématique pour une première découverte, mais le Kerala, le Ladakh ou Varanasi offrent également des expériences très différentes et fascinantes. "
      }
    ]
  },
  {
    no: "05.",
    title: "ACCOMPAGNEMENT & RÉSERVATION",
    icon: Headphones,
    questions: [
      {
        q: "Sommes-nous accompagnés pendant le voyage ?",
        a: "Oui, notre équipe reste disponible avant, pendant et après votre séjour afin de garantir un accompagnement réactif et personnalisé. "
      },
      {
        q: "Comment demander un devis ?",
        a: "Il vous suffit de remplir notre formulaire de contact rapide en ligne ou de nous envoyer un message avec vos souhaits de voyage."
      },
      {
        q: "Pourquoi choisir une agence locale franco-indienne ?",
        a: "Une agence franco-indienne permet de bénéficier à la fois d’une compréhension des attentes des voyageurs francophones et d’une expertise locale directement sur le terrain en Inde. "
      },
      {
        q: "Pourquoi choisir Indeora Voyages ?",
        a: "Parce que nous sommes une agence franco-indienne à taille humaine avec plus de 18 ans d’expérience, une présence locale en Inde, des partenaires de confiance et une approche profondément humaine du voyage. "
      }
    ]
  }
];

const FaqBox = ({ item }) => {
  const Icon = item.icon;
  const [open, setOpen] = useState(null);

  return (
    <div className="w-full">
      <div className="mb-[18px] flex items-start gap-[18px]">
        <Icon size={34} strokeWidth={1.05} className="mt-[6px] text-[#c6a263]" />

        <div>
          <p className="text-[13px] font-semibold leading-none tracking-[0.04em] text-[#bd8a3a]">
            {item.no}
          </p>

          <h3 className="mt-[6px] font-serif text-[20px] uppercase leading-[1.05] text-[#151515]">
            {item.title}
          </h3>

          <div className="mt-[11px] h-[1px] w-[38px] bg-[#c6a263]" />
        </div>
      </div>

      <div className="overflow-hidden rounded-[2px] border border-[#ded2c0] bg-[#fffdf8]">
        {item.questions.map((q, index) => (
          <div key={index}>
            <button
              onClick={() => setOpen(open === index ? null : index)}
              className="flex min-h-[48px] w-full items-center justify-between px-[20px] text-left text-[13.2px] font-medium leading-[1.45] text-[#242424]"
            >
              <span>{q.q}</span>
              <Plus
                size={17}
                strokeWidth={1.35}
                className={`ml-4 shrink-0 text-[#b98534] transition-transform duration-300 ${open === index ? "rotate-45" : ""
                  }`}
              />
            </button>

            {open === index && (
              <div className="border-t border-[#ded2c0] bg-white px-[20px] pb-4 pt-3 text-[12.5px] leading-6 text-[#555]">
                {q.a}
              </div>
            )}

            {index !== item.questions.length - 1 && (
              <div className="h-[1px] bg-[#ded2c0]" />
            )}
          </div>
        ))}
      </div>

      {item.card && (
        <div className="mt-[28px] flex min-h-[145px] items-center gap-[34px] rounded-[2px] bg-[#fbf3e6] px-[36px] py-[26px]">
          <div className="shrink-0 text-[#c6a263]">
            <Flower2 size={60} strokeWidth={1.05} />
          </div>

          <div>
            <h4 className="font-serif text-[18px] leading-[1.25] text-[#1b1b1b]">
              Une autre manière de découvrir l’Inde
            </h4>

            <p className="mt-[13px] max-w-[300px] text-[12px] leading-[1.55] text-[#575757]">
              Chez Indeora Voyages, nous croyons qu’un beau voyage ne se résume pas à une liste de lieux à
              visiter. Notre mission est de vous faire découvrir une Inde élégante, authentique et profondément
              humaine à travers des expériences pensées selon votre manière de voyager.
            </p>

            <button className="mt-[14px] rounded-[2px] bg-[#b98231] px-[26px] py-[10px] text-[10px] font-bold uppercase tracking-[0.12em] text-white">
              CONTACTEZ-NOUS
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const Faq = () => {
  return (
    <div className="min-h-screen bg-[#fbf8f1] text-[#171717]">
      <Navbar />

      {/* HERO */}
      <section className="relative min-h-[480px] md:min-h-[520px] pt-20 md:pt-24 overflow-hidden border-b border-[#eadfce]">
        <img
          src="https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=1800&auto=format&fit=crop"
          alt="India palace lake"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#fbf8f1] via-[#fbf8f1]/75 to-transparent" />

        <div className="relative z-10 mx-auto flex h-full max-w-[1230px] items-center px-6 py-4">
          <div className="pt-[10px]">
            <p className="mb-[8px] font-serif text-[22px] text-[#bd8a3a]">
              FAQ
            </p>

            <h1 className="font-serif text-[58px] uppercase leading-[0.98] tracking-[-0.035em] text-[#111] md:text-[67px]">
              QUESTIONS
              <br />
              FRÉQUENTES
            </h1>

            <div className="my-[22px] h-[1px] w-[45px] bg-[#bd8a3a]" />

            <p className="max-w-[350px] text-[14px] font-medium leading-[1.9] text-[#303030]">
              Retrouvez ici les réponses aux questions les plus courantes pour
              préparer votre voyage en Inde en toute sérénité.
            </p>

            <div className="mt-[28px] flex h-[47px] w-[390px] max-w-full items-center rounded-[6px] border border-[#d8cbb7] bg-white px-[18px]">
              <Search size={18} className="mr-[14px] text-[#777]" />
              <input
                type="text"
                placeholder="Rechercher une question..."
                className="h-full w-full bg-transparent text-[13px] text-[#333] outline-none placeholder:text-[#8b8b8b]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ CONTENT */}
      <main className="mx-auto max-w-[1120px] px-6 py-[45px]">
        <div className="grid grid-cols-1 gap-x-[58px] gap-y-[54px] lg:grid-cols-2">
          <FaqBox item={faqData[0]} />
          <FaqBox item={faqData[1]} />
        </div>

        <div className="my-[38px] h-[1px] bg-[#e2d6c5]" />

        <div className="grid grid-cols-1 gap-x-[58px] gap-y-[54px] lg:grid-cols-2">
          <FaqBox item={faqData[2]} />
          <FaqBox item={faqData[3]} />
        </div>

        <div className="my-[38px] h-[1px] bg-[#e2d6c5]" />

        <div className="grid grid-cols-1 gap-x-[58px] gap-y-[54px] lg:grid-cols-2">
          <FaqBox item={faqData[4]} />

          {/* DARK IMAGE CARD */}
          <div className="mt-[30px] overflow-hidden rounded-[5px] border border-[#1c130d] bg-black shadow-[0_14px_35px_rgba(0,0,0,0.16)]">
            <div className="relative min-h-[330px]">
              <img
                src="https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=1400&auto=format&fit=crop"
                alt="India night temple"
                className="absolute inset-0 h-full w-full object-cover opacity-75"
              />

              <div className="absolute inset-0 bg-black/55" />

              <div className="relative z-10 flex min-h-[330px] flex-col justify-between px-[34px] py-[26px] text-white">
                <div>
                  <p className="font-serif text-[43px] leading-none text-white">
                    “
                  </p>

                  <h3 className="mx-auto mt-[12px] max-w-[430px] text-center font-serif text-[23px] leading-[1.35]">
                    L’Inde n’est pas seulement
                    <br />
                    une destination, c’est une émotion
                    <br />
                    qui reste pour toujours.
                  </h3>

                  <div className="mx-auto mt-[28px] flex w-[220px] items-center justify-center gap-4">
                    <div className="h-[1px] flex-1 bg-white/65" />
                    <Sparkles size={17} strokeWidth={1} />
                    <div className="h-[1px] flex-1 bg-white/65" />
                  </div>
                </div>

                <div className="grid grid-cols-4 gap-3 text-center">
                  <div>
                    <h4 className="text-[26px] font-bold leading-none">18+</h4>
                    <p className="mt-[10px] text-[10px] uppercase leading-[1.35] tracking-[0.1em]">
                      ANS
                      <br />
                      D’EXPÉRIENCE
                    </p>
                  </div>

                  <div>
                    <h4 className="text-[26px] font-bold leading-none">100%</h4>
                    <p className="mt-[10px] text-[10px] uppercase leading-[1.35] tracking-[0.1em]">
                      VOYAGES
                      <br />
                      SUR MESURE
                    </p>
                  </div>

                  <div>
                    <h4 className="text-[22px] font-bold uppercase leading-none">
                      ÉQUIPE
                    </h4>
                    <p className="mt-[10px] text-[10px] uppercase leading-[1.35] tracking-[0.1em]">
                      FRANCO-
                      <br />
                      INDIENNE
                    </p>
                  </div>

                  <div>
                    <h4 className="text-[26px] font-bold leading-none">24/7</h4>
                    <p className="mt-[10px] text-[10px] uppercase leading-[1.35] tracking-[0.1em]">
                      ASSISTANCE
                      <br />
                      SUR PLACE
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <section className="mt-[46px] grid overflow-hidden rounded-[4px] bg-[#fbf3e7] shadow-sm lg:grid-cols-[0.92fr_1.28fr]">
          <div className="h-[305px]">
            <img
              src="https://images.unsplash.com/photo-1548013146-72479768bbfd?q=80&w=1200&auto=format&fit=crop"
              alt="Taj Mahal arch"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="flex flex-col justify-center px-[42px] py-[38px]">
            <p className="mb-[10px] text-[13px] font-semibold uppercase tracking-[0.14em] text-[#bd8a3a]">
              PRÊT À DÉCOUVRIR L’INDE ?
            </p>

            <h2 className="font-serif text-[31px] leading-tight text-[#171717]">
              Parlez-nous de votre projet de voyage
            </h2>

            <div className="mt-[18px] h-[1px] w-[38px] bg-[#c6a263]" />

            <p className="mt-[28px] max-w-[540px] text-[13.5px] font-medium leading-[1.85] text-[#333]">
              En couple, en famille ou entre amis, nous créons avec vous le
              voyage qui vous ressemble.
            </p>

            <button className="mt-[28px] w-fit rounded-[2px] bg-[#b98231] px-[30px] py-[13px] text-[10.5px] font-bold uppercase tracking-[0.12em] text-white">
              DEMANDER UN DEVIS PERSONNALISÉ
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Faq;