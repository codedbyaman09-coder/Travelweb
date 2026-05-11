import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import Footer from '../components/Footer';
import PourquoiVoyager from '../components/PourquoiVoyager';
import EspritIndeora from '../components/EspritIndeora';
import dipeshImg from '../assets/team/dipesh.png';
import alessiaImg from '../assets/team/alessia.png';
import rajanImg from '../assets/team/rajan.jpg';


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

      {/* 2. Quote Section */}
      <section className="bg-white py-8 md:py-12 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center h-[380px] md:h-[420px] flex flex-col justify-between items-center">
          <div className="pt-0 -mt-6 md:-mt-10 mb-8 flex flex-col items-center">
            <div className="w-[180px] md:w-[240px] h-16 md:h-24 flex justify-center items-center mx-auto">
              <img src={logo} alt="Indeora Logo" className="max-h-full w-auto object-contain" />
            </div>
            {/* <p className="text-[10px] md:text-[11px] tracking-[0.4em] text-[#A88B52] font-bold uppercase mt-2">
            
            </p> */}
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

      {/* 3. Meet the Team Section */}
      <section className="bg-[#60727a] pt-1 md:pt-2 pb-8 md:pb-10 px-6 text-white overflow-hidden">
        <div className="max-w-6xl mx-auto">
          {/* Header Content */}
          <div className="flex flex-col items-center mb-6 md:mb-8 text-center max-w-3xl mx-auto">
            <span className="text-white/60 text-[10px] md:text-[11px] tracking-[0.2em] uppercase mb-2">
              L'art du voyage sur mesure en Inde
            </span>
            <h2 className="text-xl md:text-2xl font-serif italic text-[#D7CBB3] mb-2 leading-tight">
              NOTRE VISION DU VOYAGE
            </h2>
            <p className="text-white/80 text-[12px] md:text-[13px] leading-relaxed font-medium max-w-xl">
              Voyager en Inde, c'est découvrir bien plus qu'une destination. C'est ressentir une émotion, vivre des rencontres sincères and s'ouvrir à une culture parmi les plus fascinantes au monde.
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
            {/* Vishnu Swami */}
            <div className="flex flex-col items-start max-w-xl mx-auto md:mx-0">
              <div className="flex items-center gap-4 md:gap-6 mb-4">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden shadow-2xl border-2 border-white/20 shrink-0">
                  <img src={dipeshImg} alt="Vishnu Swami" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="text-[#D7CBB3] text-lg md:text-xl font-serif italic mb-1">Vishnu Swami</h3>
                  <p className="text-white font-bold text-[13px] md:text-[14px] tracking-wide">Fondateur and accompagnateur francophone</p>
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
              <div className="flex items-center gap-4 md:gap-6 mb-4">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden shadow-2xl border-2 border-white/20 shrink-0">
                  <img src={alessiaImg} alt="Amandine Fastré" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="text-[#D7CBB3] text-lg md:text-xl font-serif italic mb-1">Amandine Fastré</h3>
                  <p className="text-white font-bold text-[13px] md:text-[14px] tracking-wide">Créatrice d'itinéraires sur mesure</p>
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

          <div className="flex justify-center mt-8 md:mt-10">
            <a href="/about" className="bg-[#B54118] hover:bg-[#963512] text-white text-[9px] md:text-[10px] tracking-[0.2em] font-bold py-2.5 px-8 rounded-full transition-all duration-300 shadow-lg border border-white/10 uppercase">
              Explorer Notre Agence
            </a>
          </div>
        </div>
      </section>


      {/* 4. Our Unique Network (Tan) */}
      <section className="bg-[#D7CBB3] py-8 md:py-10 px-6 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-8 md:gap-12">
          <div className="w-full md:w-1/2 order-2 md:order-2 md:-ml-20">
            <h3 className="text-[12px] md:text-[15px] tracking-[0.4em] font-bold opacity-60 mb-2 uppercase">
              L'art du voyage sur mesure en Inde
            </h3>
            <h2 className="text-2xl md:text-3xl font-serif italic mb-6 leading-tight">
              NOTRE VISION DU VOYAGE
            </h2>
            <div className="space-y-6 md:space-y-7 text-white/90 leading-relaxed text-[14px] font-medium pr-[30px]">
              <p>Voyager en Inde, c'est découvrir bien plus qu'une destination. C'est ressentir une émotion, vivre des rencontres sincères and s'ouvrir à une culture parmi les plus fascinantes au monde.</p>
              <div className="pt-4">
                <button onClick={() => setShowFullVision(!showFullVision)} className="text-[10px] tracking-[0.3em] font-bold text-white/60 hover:text-white uppercase flex items-center gap-2 transition-all duration-300">
                  {showFullVision ? 'LIRE MOINS' : 'LIRE LA SUITE'} <span>↓</span>
                </button>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 relative order-1 md:order-1 flex justify-center md:sticky md:top-32">
            <div className="relative z-10 w-full max-w-[300px]">
              <div className="relative z-10 w-full rounded-sm border border-white/10 overflow-hidden">
                <img src="https://indeoravoyages.com/wp-content/uploads/elementor/thumbs/varanasi-13-1-1-rbmynfyklq4sh4uv8ixv7hr2yzu63nyen7aoyqx8ag.jpg" alt="Varanasi" className="w-full h-auto block brightness-95" />
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* 5. Featured Destinations */}
      <section className="bg-white py-6 md:py-8 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-[9px] md:text-[10px] tracking-[0.4em] font-bold text-[#2d343e]/40 mb-2 uppercase">DISCOVER THE BEST OF INDIA</h3>
          <h2 className="text-[9px] md:text-[10px] tracking-[0.2em] font-bold text-[#A88B52] mb-8 uppercase">THIS MONTH'S FEATURED DESTINATIONS</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {[
              { name: 'Rajasthan', img: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80' },
              { name: 'Kerala', img: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80' },
              { name: 'Taj Mahal', img: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=80' },
              { name: 'Varanasi', img: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=800&q=80' },
              { name: 'Gujarat', img: 'https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&w=800&q=80' },
            ].map((dest, i) => (
              <div key={i} className="flex flex-col items-center group cursor-pointer">
                <div className="relative w-full h-[280px] md:h-[320px] overflow-hidden shadow-lg mb-4">
                  <img src={dest.img} alt={dest.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <span className="text-[#2d343e] text-[10px] font-bold tracking-[0.2em] uppercase font-serif italic">{dest.name}</span>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <button className="bg-[#2d343e] hover:bg-black text-white text-[10px] tracking-[0.3em] font-bold py-4 px-12 rounded-sm transition-all duration-300 uppercase">VIEW ALL DESTINATIONS</button>
          </div>
        </div>
      </section>
      <PourquoiVoyager />


      {/* 6. Monthly Feature (Tan) */}
      <section className="bg-[#D7CBB3] pt-8 md:pt-10 pb-10 md:pb-14 px-6 text-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-20 ">
          {/* Left Text Content */}
          <div className="w-full md:w-1/2 order-2 md:order-2">
            <h3 className="text-[9px] md:text-[10px] tracking-[0.4em] font-bold opacity-60 mb-6 uppercase">
              L'art du voyage sur mesure en Inde
            </h3>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif italic mb-8 leading-tight">
              NOTRE VISION DU VOYAGE
            </h2>
            <div className="space-y-6 text-white/90 leading-relaxed text-[14px] font-medium">
              <p>
                Chez Indeora Voyages, agence locale en Inde, nous croyons qu'un voyage réussi repose sur l'expertise, la proximité and la passion. Forte de several décennies d'experience, notre équipe franco-indienne a fait de l'Inde sa seconde maison.
              </p>

              <div className="pt-8">
                <button className="bg-[#2d343e] hover:bg-black text-white text-[10px] tracking-[0.3em] font-bold py-4 px-12 rounded-sm transition-all duration-300 uppercase">
                  LEARN MORE
                </button>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full md:w-1/2 relative order-1 md:order-1 flex justify-center">
            <div className="relative z-10 w-full max-w-[250px] md:max-w-[290px]">
              {/* Main Image Layer */}
              <div className="relative z-10 w-full rounded-sm border border-white/10 overflow-hidden shadow-2xl">
                <img
                  src="https://indeoravoyages.com/wp-content/uploads/2025/08/pexels-abhi31-27554038-scaled.jpg"
                  alt="Buddha"
                  className="w-full h-auto block grayscale-[20%] hover:grayscale-0 transition-all duration-700 brightness-95"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <EspritIndeora />

      <Footer />
    </>
  );
};

export default Home;
