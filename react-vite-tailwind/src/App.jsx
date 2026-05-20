import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import Loader from './components/Loader';
import Home from './pages/Home';
import About from './pages/About';
import Destinations from './pages/Destinations';
import DestinationDetail from './pages/DestinationDetail';
import Blog from './pages/Blog';
import AvantDePartir from './pages/AvantDePartir';
import Yoga from './pages/Yoga';
import FestivalsCouleursTraditionsIndiennes from './pages/FestivalsCouleursTraditionsIndiennes';
import CroisieresBackwatersKerala from './pages/CroisieresBackwatersKerala';
import HimalayaAventuresHorsSentiersBattus from './pages/HimalayaAventuresHorsSentiersBattus';
import LIndeNordRajasthanPalais from './pages/LIndeNordRajasthanPalais';
import TriangleOrDelhiAgraJaipur from './pages/LE TRIANGLE D’OR Delhi, Agra & Jaipur';
import LeLadakhEtLesContrefortsHimalayens from './pages/Le Ladakh et les contreforts himalayens';
import LaValleeDuGangeEtVaranasi from './pages/La Vallée du Gange et Varanasi';
import LIndeDuSudKeralaEtTamilNadu from './pages/L’Inde du Sud Kerala et Tamil Nadu';
import CalcuttaEtLIndeCentrale from './pages/Calcutta et l’Inde centrale';
import RencontresEthniquesCulturesLocales from './pages/RencontresEthniquesCulturesLocales';
import LuneDeMielEscapadesRomantiques from './pages/LuneDeMielEscapadesRomantiques';
import SafarisVieSauvage from './pages/SafarisVieSauvage';
import SpiritualiteYogaAyurveda from './pages/SpiritualiteYogaAyurveda';
import ArtArtisanatSavoirFaire from './pages/ArtArtisanatSavoirFaire';
import ImmersionVillagesIndiens from './pages/ImmersionVillagesIndiens';
import VoyagePhotoExpeditions from './pages/VoyagePhotoExpeditions';
import DemanderUnDevis from './pages/DemanderUnDevis';
import ContactRapide from './pages/ContactRapide';
import RajasthanRoyale from './pages/RajasthanRoyale';
import KeralaBackwaters from './pages/KeralaBackwaters';
import SpiritualVaranasi from './pages/SpiritualVaranasi';
import Faq from './pages/Faq';
import TopBar from './components/TopBar';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import AdminDashboard from './pages/AdminDashboard';
import BlogDetail from './pages/BlogDetail';
import { AuthProvider } from './context/AuthContext';
import './App.css';

// Sub-component to handle route changes and loader trigger
const AppContent = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [pageName, setPageName] = useState('');

  // Map paths to Page Names
  const getPageName = (path) => {
    if (path === '/login') return 'Connexion';
    if (path === '/register') return 'Inscription';
    if (path === '/profile') return 'Mon Compte';
    if (path === '/admin') return 'Tableau de Bord Admin';
    if (path.startsWith('/blog/')) return 'Blog Article';
    if (path === '/') return 'Accueil';
    if (path === '/about') return 'À propos';
    if (path === '/destinations') return 'Destinations';
    if (path === '/blog') return 'Blog';
    if (path === '/avant-de-partir') return 'Avant de partir';
    if (path === '/faq' || path === '/Faq' || path === '/FAQ') return 'Questions Fréquentes';
    if (path === '/contact-rapide') return 'Contact Rapide';
    if (path === '/festivals-couleurs-traditions-indiennes') return 'Festivals Traditions';
    if (path === '/croisieres-backwaters-kerala') return 'Kerala Experience';
    if (path === '/himalaya-aventures-hors-sentiers-battus') return 'Leh Ladakh';
    if (path === '/destinations/rajasthan') return 'Rajasthan Palais';
    if (path === '/destinations/triangle-or') return 'Triangle d’Or';
    if (path === '/rencontres-ethniques-cultures-locales') return 'Rencontres Ethniques';
    if (path === '/lune-de-miel-escapades-romantiques') return 'Lune de Miel';
    if (path === '/safaris-vie-sauvage') return 'Inde Sauvage Safaris';
    if (path === '/spiritualite-yoga-ayurveda') return 'Inde Spirituelle';
    if (path === '/art-artisanat-savoir-faire') return 'Rajasthan Gujarat';
    if (path === '/immersion-villages-indiens') return 'Rajasthan Rural';
    if (path === '/voyage-photo-expeditions') return 'Rajasthan Varanasi';
    if (path === '/blog/rajasthan-royale') return 'Rajasthan Royale';
    if (path === '/blog/kerala-backwaters') return 'Kerala Backwaters';
    if (path === '/blog/spiritual-varanasi') return 'Spiritual Varanasi';
    if (path.toLowerCase() === '/yoga' || path.toLowerCase() === '/testing') return 'Retraite Yoga';

    // Exact matching for Destinations from Dropdown
    if (path === "/destinations/visites-par-région") return "Visites par Région";
    if (path === "/destinations/idées-de-circuits") return "Idées de circuits";
    if (path === "/destinations/bien-être-yoga-et-ayurveda") return "Bien être, Yoga et Ayurveda";
    if (path === "/destinations/hors-des-sentiers-battus") return "Hors des Sentiers Battus";
    if (path === "/destinations/rencontres-ethniques") return "Rencontres Ethniques";
    if (path === "/destinations/en-famille-lune-de-miel") return "En Famille, Lune de Miel";
    if (path === "/destinations/nature-et-vie-sauvage") return "Nature et Vie Sauvage";

    if (path.startsWith('/destinations/')) {
      const name = path.split('/').pop().replace(/-/g, ' ');
      return name.charAt(0).toUpperCase() + name.slice(1);
    }
    return 'Indeora';
  };

  useEffect(() => {
    setLoading(true);
    // Use decodeURIComponent to handle accented characters in URL (like é)
    const decodedPath = decodeURIComponent(location.pathname);
    setPageName(getPageName(decodedPath));

    // Ensure scroll to top on every route change
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="w-full min-h-screen bg-white overflow-x-hidden pb-[50px]">
      {loading && <Loader onFinish={() => setLoading(false)} pageName={pageName} />}
      <TopBar />
      <Navbar />
      <ScrollToTop />
      <main className={loading ? 'opacity-0' : 'opacity-100 transition-opacity duration-1000'}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/promise" element={<div className="pt-32 text-center">Our Promise Page</div>} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/destinations/rajasthan" element={<LIndeNordRajasthanPalais />} />
          <Route path="/destinations/triangle-or" element={<TriangleOrDelhiAgraJaipur />} />
          <Route path="/destinations/himalaya" element={<LeLadakhEtLesContrefortsHimalayens />} />
          <Route path="/destinations/varanasi" element={<LaValleeDuGangeEtVaranasi />} />
          <Route path="/destinations/kerala" element={<LIndeDuSudKeralaEtTamilNadu />} />
          <Route path="/destinations/inde-nord-est" element={<CalcuttaEtLIndeCentrale />} />
          <Route path="/destinations/:id" element={<DestinationDetail />} />
          <Route path="/experiences" element={<div className="pt-32 text-center">Experiences Page</div>} />
          <Route path="/magazine" element={<div className="pt-32 text-center">Magazine Page</div>} />
          <Route path="/press" element={<div className="pt-32 text-center">Press Page</div>} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/rajasthan-royale" element={<RajasthanRoyale />} />
          <Route path="/blog/kerala-backwaters" element={<KeralaBackwaters />} />
          <Route path="/blog/spiritual-varanasi" element={<SpiritualVaranasi />} />
          <Route path="/avant-de-partir" element={<AvantDePartir />} />
          <Route path="/yoga" element={<Yoga />} />
          <Route path="/Yoga" element={<Yoga />} />
          <Route path="/testing" element={<Yoga />} />
          <Route path="/Testing" element={<Yoga />} />
          <Route path="/festivals-couleurs-traditions-indiennes" element={<FestivalsCouleursTraditionsIndiennes />} />
          <Route path="/croisieres-backwaters-kerala" element={<CroisieresBackwatersKerala />} />
          <Route path="/himalaya-aventures-hors-sentiers-battus" element={<HimalayaAventuresHorsSentiersBattus />} />
          <Route path="/rencontres-ethniques-cultures-locales" element={<RencontresEthniquesCulturesLocales />} />
          <Route path="/lune-de-miel-escapades-romantiques" element={<LuneDeMielEscapadesRomantiques />} />
          <Route path="/safaris-vie-sauvage" element={<SafarisVieSauvage />} />
          <Route path="/spiritualite-yoga-ayurveda" element={<SpiritualiteYogaAyurveda />} />
          <Route path="/art-artisanat-savoir-faire" element={<ArtArtisanatSavoirFaire />} />
          <Route path="/immersion-villages-indiens" element={<ImmersionVillagesIndiens />} />
          <Route path="/voyage-photo-expeditions" element={<VoyagePhotoExpeditions />} />
          <Route path="/demander-un-devis" element={<DemanderUnDevis />} />
          <Route path="/contact-rapide" element={<ContactRapide />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/Faq" element={<Faq />} />
          <Route path="/FAQ" element={<Faq />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />
          <Route path="/contact" element={<div className="pt-32 text-center">Contact Page</div>} />
        </Routes>
      </main>
    </div>
  );
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <AppContent />
      </Router>
    </AuthProvider>
  );
}

export default App;
