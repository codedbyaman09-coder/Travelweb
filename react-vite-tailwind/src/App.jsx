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
import Testing from './pages/Testing';
import ContactRapide from './pages/ContactRapide';
import './App.css';

// Sub-component to handle route changes and loader trigger
const AppContent = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [pageName, setPageName] = useState('');

  // Map paths to Page Names
  const getPageName = (path) => {
    if (path === '/') return 'Accueil';
    if (path === '/about') return 'À propos';
    if (path === '/destinations') return 'Destinations';
    if (path === '/blog') return 'Blog';
    if (path === '/avant-de-partir') return 'Avant de partir';
    if (path === '/contact-rapide') return 'Contact Rapide';

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
    <div className="w-full min-h-screen bg-white overflow-x-hidden">
      {loading && <Loader onFinish={() => setLoading(false)} pageName={pageName} />}
      <Navbar />
      <ScrollToTop />
      <main className={loading ? 'opacity-0' : 'opacity-100 transition-opacity duration-1000'}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/promise" element={<div className="pt-32 text-center">Our Promise Page</div>} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/destinations/:id" element={<DestinationDetail />} />
          <Route path="/experiences" element={<div className="pt-32 text-center">Experiences Page</div>} />
          <Route path="/magazine" element={<div className="pt-32 text-center">Magazine Page</div>} />
          <Route path="/press" element={<div className="pt-32 text-center">Press Page</div>} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/avant-de-partir" element={<AvantDePartir />} />
          <Route path="/testing" element={<Testing />} />
          <Route path="/contact-rapide" element={<ContactRapide />} />
          <Route path="/contact" element={<div className="pt-32 text-center">Contact Page</div>} />
        </Routes>
      </main>
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
