import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import Footer from '../components/Footer';
import EspritIndeora from '../components/EspritIndeora';
import EnviesGrid from '../components/EnviesGrid';
import FAQSection from '../components/FAQSection';
import dipeshImg from '../assets/team/dipesh.png';
import alessiaImg from '../assets/team/alessia.png';
import rajanImg from '../assets/team/rajan.jpg';
import InteractiveMap from '../components/InteractiveMap';
import VisionSection from '../components/VisionSection';
import EnviesVoyage from '../components/EnviesVoyage';


const Home = () => {
  const navigate = useNavigate();
  const [showFullVision, setShowFullVision] = React.useState(false);
  const [showFullCarnet, setShowFullCarnet] = React.useState(false);
  const [showFullVishnu, setShowFullVishnu] = React.useState(false);
  const [showFullAlessia, setShowFullAlessia] = React.useState(false);
  const [textIndex, setTextIndex] = React.useState(0);

  const heroTexts = [
    { top: "VOYAGE SUR MESURE", bottom: "en inde" },
    { top: "Agence De Voyage", bottom: "En Inde" },
    { top: "Séjour Personnalisé", bottom: "En Inde" },
    { top: "Voyage authentique", bottom: "En Inde" }
  ];

  const videoRef = React.useRef(null);

  // Sync text changes exactly to the video's playback position
  React.useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let animId;
    let lastIndex = 0;

    const syncText = () => {
      if (video.duration && !isNaN(video.duration)) {
        const seg = video.duration / heroTexts.length;
        const idx = Math.min(Math.floor(video.currentTime / seg), heroTexts.length - 1);
        if (idx !== lastIndex) {
          lastIndex = idx;
          setTextIndex(idx);
        }
      }
      animId = requestAnimationFrame(syncText);
    };

    // Reset text when video loops
    const handleSeeking = () => {
      if (video.currentTime < 1) {
        lastIndex = 0;
        setTextIndex(0);
      }
    };

    video.addEventListener('seeking', handleSeeking);
    animId = requestAnimationFrame(syncText);

    return () => {
      cancelAnimationFrame(animId);
      video.removeEventListener('seeking', handleSeeking);
    };
  }, [heroTexts.length]);

  const reviews = [
    {
      author: "Fanny Cabe",
      text: `Superbe voyage dans le Kerala organisé par Le Passage en Inde.
Amandine et Vishnu nous ont accompagnés du début à la fin et nous nous sommes sentis pleinement confiants comme en famille.
Le guide et le chauffeur étaient tout aussi parfaits.
Nous n’hésiterons pas à les rappeler pour notre prochain voyage.
`,
      rating: 5
    },
    {
      author: "Marie Constans",
      text: `Un super séjour de 13 jours avec un groupe de 8 femmes. Que dis je, 9 femmes dont notre formidable guide Shabi, dynamique, toujours présente pour nous, à l'écoute de nos envies et à se plier en 4 pour nous.
Amandine a été le début de notre super séjour en Inde et la clé indispensable à notre départ.
L'organisation de ce séjour correspondait à nos idées de ce séjour.
Nous avons rencontrés que des personnes adorables, professionnelles, de confiance et disponible à toutes nos questions et inquiétudes diverses.
Cette expérience, ce voyage a était superbe sur tous les points.
Je recommande "le passage en Inde" les yeux fermés. 🙏`,
      rating: 5
    },
    {
      author: "helene Thiercelin",
      text: `15 jours merveilleusement préparés et guidés. Le passage en Inde a été très à l’écoute de nos attentes et a su créer ce voyage exceptionnel sur mesure. Nous avons été très heureuses du professionnalisme et du savoir de Vishnu 🙏`,
      rating: 5
    },
    {
      author: "Carole VIDAL",
      text: `J’ai fait appel au "Passage en Inde", une micro-agence de voyages, pour organiser un séjour hors des sentiers battus, et j’en suis absolument ravie !
Amandine a été d’un professionnalisme exemplaire : de très bons conseils, disponible, chaleureuse et toujours à l’écoute. Elle nous a accompagnées du début à la fin, ce qui a vraiment fait la différence.

Notre guide sur place, Rakesh a également été fantastique : bienveillant, attentionné, toujours prêt à répondre à nos attentes et à partager ses connaissances. Grâce à eux, nous avons vécu un voyage unique, authentique and parfaitement organisé.

Pour un prochain voyage en Inde, je choisirai sans hésiter "Le Passage en Inde" à nouveau. Je recommande cette agence les yeux fermés !
`,
      rating: 5
    },
    {
      author: "Olivia RUIZ",
      text: "Après une visite du Rajasthan il y a deux ans (avec une autre agence), nous voulions explorer le Bengale occidental. Nous avions quelques envies que nous avons transmises à Amandine qui nous a concocté un voyage sur mesure (pour un prix très raisonnable). Nous étions 3 plus Rakesh notre génial guide. Tout a été parfait 🤩 Je recommande vivement 👍😊",
      rating: 5
    }
  ];

  const royalToursUrl = 'https://www.royaltours.fr/agences-de-voyage/12202-rodez/bdfeigihfiejdcdbdebc.htm';
  const agenceContactUrl = 'https://agence-de-voyages.agence.contact/le-passage-en-inde-private-limited-2902445.html';
  const getReviewUrl = (review, index) => {
    if (review.author === 'Carole VIDAL') return royalToursUrl;
    if (review.author === 'Olivia RUIZ') return agenceContactUrl;
    return index % 2 === 0 ? royalToursUrl : agenceContactUrl;
  };

  return (
    <>
      {/* 1. Hero Section */}
      <div className="relative min-h-screen w-full overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            autoPlay
            muted
            playsInline
            loop
            src="https://indeoravoyages.com/wp-content/uploads/2025/09/Design-sans-titre-2.mp4"
          ></video>
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        {/* Hero Text Content (Bottom Right) */}
        <div className="relative z-10 h-screen w-full">
          <div className="absolute bottom-10 right-6 md:bottom-20 md:right-20 text-right max-w-[90%]">
            <h1 key={`top-${textIndex}`} className="text-white text-[9px] md:text-[10px] lg:text-[12px] font-light tracking-[0.3em] mb-1.5 uppercase opacity-80 animate-fadeIn text-right">
              {heroTexts[textIndex].top}
            </h1>
            <h2 key={`bottom-${textIndex}`} className="text-white text-sm sm:text-base md:text-xl font-serif italic leading-tight drop-shadow-xl animate-fadeIn text-right">
              {heroTexts[textIndex].bottom}
            </h2>
          </div>
        </div>

        {/* Social Sidebar (Left) */}
        <div className="absolute left-6 md:left-10 top-[60%] -translate-y-1/2 hidden sm:flex flex-col items-center space-y-8 z-10">
          <a href="#" className="w-8 h-8 rounded-full border border-white/40 flex items-center justify-center text-white/60 hover:text-white hover:border-white transition-all">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
          </a>
          <a href="#" className="w-8 h-8 rounded-full border border-white/40 flex items-center justify-center text-white/60 hover:text-white hover:border-white transition-all">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
          </a>
          <a href="#" className="w-8 h-8 rounded-full border border-white/40 flex items-center justify-center text-white/60 hover:text-white hover:border-white transition-all">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" /></svg>
          </a>
          <div className="h-16 w-[1px] bg-white/20 mx-auto"></div>
          <span className="text-white/60 text-[10px] tracking-[0.4em] vertical-text uppercase font-bold">Follow us</span>
        </div>

        {/* Navigation Arrows */}
        <button className="absolute left-2 md:left-10 top-1/2 -translate-y-1/2 text-white/30 hover:text-white transition-colors z-10">
          <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button className="absolute right-2 md:right-10 top-1/2 -translate-y-1/2 text-white/30 hover:text-white transition-colors z-10">
          <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <style dangerouslySetInnerHTML={{
          __html: `
          .vertical-text {
            writing-mode: vertical-rl;
            text-orientation: mixed;
            transform: rotate(180deg);
          }
          @keyframes marqueeHorizontal {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee-cards {
            animation: marqueeHorizontal 35s linear infinite;
          }
          .animate-marquee-cards:hover {
            animation-play-state: paused;
          }
        `}} />
      </div>

      <EspritIndeora />

      {/* 3. Meet the Team Section */}
      <section className="bg-[#60727a] py-3 md:py-4 px-6 text-white overflow-hidden">
        <div className="max-w-6xl mx-auto">
          {/* Header Content */}
          <div className="flex flex-col items-center mb-4 md:mb-8 text-center max-w-3xl mx-auto">
            <span className="text-white/60 text-[8px] md:text-[9px] tracking-[0.2em] uppercase mb-1">
              L’Inde, une émotion avant tout
            </span>
            <h2 className="text-lg md:text-xl font-serif italic text-[#D7CBB3] mb-2 leading-tight">
              L’art du voyage sur mesure en Inde
            </h2>
            <p className="text-white/80 text-[11px] md:text-[12px] leading-relaxed font-medium max-w-xl">
              L’Inde se découvre avec émotion, authenticité et liberté, au rythme de vos envies.
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
            {/* Vishnu Swami */}
            <div className="flex flex-col items-start max-w-xl mx-auto md:mx-0">
              <div className="flex items-center gap-4 mb-2">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden shadow-xl border border-white/20 shrink-0">
                  <img src={dipeshImg} alt="Vishnu Swami" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="text-[#D7CBB3] text-base md:text-lg font-serif italic mb-0">Vishnu Swami</h3>
                  <p className="text-white font-bold text-[10px] md:text-[11px] tracking-wide">Fondateur francophone</p>
                </div>
              </div>
              <div className="text-white/80 text-[13px] md:text-[14px] leading-relaxed flex flex-col h-full">
                <p className="flex-grow">
                  Passionné de voyages depuis toujours, Vishnu Swami a d’abord exploré le monde au-delà de l’Inde. Il a vécu plusieurs années en France où il a appris le français qu’il parle couramment, and s’est imprégné de la culture européenne.
                  {showFullVishnu && (
                    <>
                      {" "}Directeur de notre agence à Delhi, Vishnu incarne la promesse d'authenticité. Sa connaissance du terrain and sa passion pour le principe de Atithi Devo Bhava garantissent une immersion profonde.
                    </>
                  )}
                  {!showFullVishnu && "..."}
                </p>
                <a
                  href="/about"
                  className="text-[10px] tracking-[0.3em] font-bold text-white/40 hover:text-white uppercase flex items-center gap-2 mt-4 transition-all duration-300"
                >
                  LIRE LA SUITE <span>↓</span>
                </a>
              </div>
            </div>

            {/* Amandine Fastré */}
            <div className="flex flex-col items-start max-w-xl mx-auto md:mx-0">
              <div className="flex items-center gap-4 mb-2">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden shadow-xl border border-white/20 shrink-0">
                  <img src={alessiaImg} alt="Amandine Fastré" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="text-[#D7CBB3] text-base md:text-lg font-serif italic mb-0">Amandine Fastré</h3>
                  <p className="text-white font-bold text-[10px] md:text-[11px] tracking-wide">Créatrice d'itinéraires</p>
                </div>
              </div>
              <div className="text-white/80 text-[13px] md:text-[14px] leading-relaxed flex flex-col h-full">
                <p className="flex-grow">
                  Amandine est une véritable passionnée de l’Inde, un pays où elle a vécu plus de 18 ans en tant que créatrice de voyages sur mesure. Durant ces années, elle a sillonné de nombreuses régions and exploré des lieux authentiques.
                  {showFullAlessia && (
                    <>
                      {" "}Basée en France, Amandine est votre premier point de contact and l'architecte de votre voyage. Elle transforme vos envies en itinéraire sur mesure, alliant découvertes culturelles and organisation fluide.
                    </>
                  )}
                  {!showFullAlessia && "..."}
                </p>
                <a
                  href="/about"
                  className="text-[10px] tracking-[0.3em] font-bold text-white/40 hover:text-white uppercase flex items-center gap-2 mt-4 transition-all duration-300"
                >
                  LIRE LA SUITE <span>↓</span>
                </a>
              </div>
            </div>
          </div>
          {/* 
          <div className="flex justify-center mt-8 md:mt-10">
            <a href="/about" className="bg-[#B54118] hover:bg-[#963512] text-white text-[9px] md:text-[10px] tracking-[0.2em] font-bold py-2.5 px-8 rounded-full transition-all duration-300 shadow-lg border border-white/10 uppercase">
              Explorer Notre Agence
            </a>
          </div> */}
        </div>
      </section>


      <InteractiveMap />
      <EnviesGrid />
      <VisionSection />

      <EnviesVoyage />
      {/* <VisionSection /> */}

      {/* 5. Featured Destinations */}
      <section className="bg-white py-10 md:py-14 px-6">
        <div className="max-w-[1500px] mx-auto text-center">
          {/* Top Heading */}
          <p className="text-[11px] md:text-[13px] tracking-[0.55em] font-bold text-[#2d343e]/40 uppercase mb-3">
            L’INDE AUTREMENT
          </p>

          <h2 className="font-serif text-[26px] md:text-[36px] lg:text-[42px] text-[#6b4632] leading-tight mb-4">
            Des expériences uniques, des souvenirs pour la vie.
          </h2>

          <div className="flex items-center justify-center mb-3">
            <span className="w-14 h-px bg-[#c5a15c]/60"></span>
            <span className="mx-4 text-[#c5a15c] text-3xl leading-none">♧</span>
            <span className="w-14 h-px bg-[#c5a15c]/60"></span>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2 md:gap-3">
            {[
              {
                title: "BIEN-ÊTRE, YOGA\n& AYURVEDA",
                icon: "♧",
                desc: "Yoga, méditation et soins ayurvédiques.",
                img: "/src/assets/image copy 9.png",
                link: "/spiritualite-yoga-ayurveda",
              },
              {
                title: "HORS DES\nSENTIERS BATTUS",
                icon: "△",
                desc: "Régions préservées et beauté de l’Inde.",
                img: "/src/assets/image copy 10.png",
                link: "/himalaya-aventures-hors-sentiers-battus",
              },
              {
                title: "RENCONTRES\nETHNIQUES",
                icon: "☟",
                desc: "Communautés locales et traditions.",
                img: "/src/assets/image copy 11.png",
                link: "/rencontres-ethniques-cultures-locales",
              },
              {
                title: "FAMILLE &\nLUNE DE MIEL",
                icon: "♥",
                desc: "Expériences sur mesure and moments magiques.",
                img: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=900&q=90",
                link: "/lune-de-miel-escapades-romantiques",
              },
              {
                title: "NATURE &\nVIE SAUVAGE",
                icon: "♣",
                desc: "Nature sauvage, safaris and parcs nationaux.",
                img: "/src/assets/image copy 12.png",
                link: "/safaris-vie-sauvage",
              },
            ].map((item, i) => (
        <Link
          key={i}
          to={item.link}
          className="relative h-[340px] md:h-[380px] lg:h-[420px] bg-white overflow-hidden group shadow-sm border border-[#eadfce]/20 block cursor-pointer"
        >
          {/* Image - Maximized height */}
          <img
            src={item.img}
            alt={item.title}
            className="absolute top-0 left-0 w-full h-[85%] object-cover transition-transform duration-700 group-hover:scale-105"
          />

          {/* Smooth fade into white */}
          <div className="absolute left-0 right-0 top-[55%] h-[35%] bg-gradient-to-b from-transparent via-white/80 to-white"></div>

          {/* Compact White bottom */}
          <div className="absolute left-0 right-0 bottom-0 h-[15%] bg-white"></div>

          {/* Content - Compressed at the bottom */}
          <div className="absolute left-0 right-0 bottom-0 px-3 pb-3 text-center flex flex-col items-center">
            {/* Gold Lotus SVG */}
            <div className="text-[#A88B52] mb-2 opacity-90 scale-90">
               <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
                <path d="M12,22C12,22 12,18 15,15C18,12 22,12 22,12C22,12 18,12 15,9C12,6 12,2 12,2C12,2 12,6 9,9C6,12 2,12 2,12C2,12 6,12 9,15C12,18 12,22 12,22Z" />
              </svg>
            </div>

            <h3 className="font-serif text-[14px] md:text-[16px] text-[#5e412f] font-bold leading-tight tracking-[0.03em] uppercase whitespace-pre-line mb-1">
              {item.title}
            </h3>

            <p className="hidden md:block text-[11px] leading-tight text-[#2d343e]/70 font-medium max-w-[180px] mx-auto line-clamp-1 mb-1">
              {item.desc}
            </p>

            <div className="w-8 h-[0.5px] bg-[#c5a15c]/30 mx-auto"></div>
          </div>
        </Link>
            ))}
          </div>
        </div>
      </section>
      <FAQSection />





      {/* Google Reviews Section */}
      <section className="bg-white py-8 md:py-12 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center h-[380px] md:h-[420px] flex flex-col justify-between items-center">
          {/* <div className="pt-0 -mt-6 md:-mt-10 mb-8 flex flex-col items-center">
            <div className="w-[180px] md:w-[240px] h-16 md:h-24 flex justify-center items-center mx-auto">
              <img src={logo} alt="Indeora Logo" className="max-h-full w-auto object-contain" />
            </div>
          </div> */}
          <div className="w-full text-left mb-8">
            <h2 className="text-[#2d343e] font-serif text-[22px] md:text-[28px] italic opacity-90">
              Ils ont aimé voyager avec nous
            </h2>
            <div className="w-12 h-[1px] bg-[#A88B52] mt-2"></div>
          </div>


          <div className="relative w-full flex-grow flex items-center overflow-hidden py-4">
            <div className="flex animate-marquee-cards gap-8 whitespace-nowrap">
              {[...reviews, ...reviews, ...reviews].map((review, i) => (
                <a
                  key={i}
                  href={getReviewUrl(review, i)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-[350px] md:w-[550px] bg-[#fcfbf9] p-10 border border-[#A88B52]/10 rounded-sm shadow-sm whitespace-normal text-left cursor-pointer hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-xs">
                        <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="G" className="w-4 h-auto" />
                      </div>
                      <div className="flex text-[#A88B52] text-sm tracking-tighter">★★★★★</div>
                    </div>
                    <span className="text-[9px] font-bold text-[#2d343e]/30 uppercase tracking-widest">Google Review</span>
                  </div>
                  <p className="text-[#2d343e]/80 text-[14px] md:text-[16px] italic leading-relaxed mb-6 font-medium line-clamp-4">"{review.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-[1px] bg-[#A88B52]/40"></div>
                    <span className="text-[10px] font-bold tracking-[0.2em] text-[#2d343e] uppercase">{review.author}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center gap-4 pb-2">
            <a href="https://www.google.com/search?q=le+passage+en+inde+rodez" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-4 group">
              <div className="w-12 h-12 rounded-full border-2 border-[#A88B52] flex items-center justify-center p-1 group-hover:scale-110 transition-transform duration-300">
                <div className="w-full h-full rounded-full bg-white flex items-center justify-center shadow-sm overflow-hidden">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google Reviews" className="w-6 h-6" />
                </div>
              </div>
              <div className="flex items-center gap-2 -mt-2 group-hover:opacity-80 transition-opacity">
                <span className="text-[12px] md:text-[14px] font-bold text-[#2d343e]">5.0</span>
                <div className="flex text-[#f4b400] text-[10px] md:text-[12px]">★★★★★</div>
                <span className="text-[10px] md:text-[11px] font-medium text-[#2d343e]/60">41 reviews</span>
              </div>
            </a>
            <div className="text-center">
              <p className="text-[9px] font-bold tracking-[0.2em] text-[#2d343e] uppercase">Anciennement</p>
              <p className="text-[9px] font-medium tracking-[0.2em] text-[#2d343e]/40 uppercase">LE PASSAGE EN INDE</p>
            </div>
          </div>
        </div>
      </section>


      <Footer />
    </>
  );
};

export default Home;
