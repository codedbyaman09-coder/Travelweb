import React, { useState, useEffect } from 'react';
import { apiRequest } from '../../lib/api';

const GlobalContentManager = () => {
  const [settings, setSettings] = useState({});
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('');
  const [activeTab, setActiveTab] = useState('home');

  const defaultTexts = {
    // HOME
    home_dest_subtitle: 'L\'INDE AUTREMENT',
    home_dest_title: 'Des expériences uniques, des souvenirs pour la vie.',
    home_esprit_title: 'L’esprit Indeora',
    home_esprit_subtitle: 'Le voyage sur mesure, pensé selon vos envies et votre manière de découvrir l’Inde',
    home_team_subtitle: 'L\'Inde, une émotion avant tout',
    home_team_title: 'L\'art du voyage sur mesure en Inde',
    home_team_desc: 'L\'Inde se découvre avec émotion, authenticité et liberté, au rythme de vos envies.',
    home_map_subtitle: 'UNE AUTRE FAÇON DE VOYAGER EN INDE',
    home_map_title: 'Explorez l’Inde autrement',
    home_map_desc: 'Une terre de palais, de spiritualité, de couleurs et de rencontres humaines, où chaque voyage devient une expérience profondément inspirante.',
    
    // DESTINATIONS
    destinations_hero_title: 'Nos destinations en Inde',
    destinations_hero_desc: 'Des régions fascinantes, des cultures uniques et des expériences inoubliables.',
    destinations_section1_title: 'L’INDE, UNE TERRE AUX MILLE VISAGES',
    destinations_section1_desc: 'Des régions uniques, des cultures vibrantes...',
    
    // BLOG
    blog_hero_title: 'Notre Blog Voyage',
    blog_hero_desc: 'Inspirations, conseils et récits de voyage en Inde',
    
    // FAQ
    faq_hero_title: 'Questions Fréquentes',
    faq_hero_desc: 'Tout ce que vous devez savoir pour préparer votre voyage',
  };

  const fetchSettings = async () => {
    try {
      const data = await apiRequest('/settings');
      if (data.success && data.data) {
        setSettings({...defaultTexts, ...data.data});
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSettings();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await apiRequest('/settings', {
        method: 'POST',
        body: JSON.stringify(settings)
      });
      if (data.success) {
        setMessage('Textes sauvegardés avec succès !');
        setTimeout(() => setMessage(''), 3000);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (key, value) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  if (loading) return <div className="p-8 text-center text-slate-500">Chargement...</div>;

  const renderInputs = (prefix) => {
    return Object.keys(defaultTexts)
      .filter(key => key.startsWith(prefix))
      .map(key => (
        <div key={key} className="mb-4">
          <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
            {key.replace(prefix + '_', '').replace(/_/g, ' ')}
          </label>
          {key.includes('desc') || key.includes('text') ? (
            <textarea
              value={settings[key] || ''}
              onChange={(e) => handleChange(key, e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 px-4 py-3.5 rounded-xl text-sm focus:border-indigo-500 outline-none transition-all h-24"
            />
          ) : (
            <input
              type="text"
              value={settings[key] || ''}
              onChange={(e) => handleChange(key, e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 px-4 py-3.5 rounded-xl text-sm focus:border-indigo-500 outline-none transition-all"
            />
          )}
        </div>
      ));
  };

  return (
    <div className="animate-fadeIn">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 border-b border-slate-200 pb-5 gap-4">
        <div>
          <span className="text-indigo-600 text-[10px] tracking-[0.3em] font-bold uppercase mb-1 block">
            Contenu Global
          </span>
          <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-2">Textes Principaux</h2>
        </div>
        <div className="flex space-x-2">
          {['home', 'destinations', 'blog', 'faq'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2.5 rounded-full text-[11px] font-bold uppercase tracking-wider transition-all duration-300 ${activeTab === tab ? 'bg-indigo-600 text-white shadow-md' : 'bg-slate-100 text-slate-500 hover:bg-gray-200'}`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {message && <div className="mb-6 p-4 bg-emerald-50 text-emerald-700 text-sm rounded-xl border border-emerald-100 flex items-center gap-3"><span className="text-xl">✨</span> {message}</div>}

      <div className="bg-white shadow-sm border border-slate-200 rounded-xl p-8 max-w-4xl">
        <form onSubmit={handleSubmit}>
          {renderInputs(activeTab)}
          <button type="submit" className="w-full mt-6 bg-indigo-600 text-white py-3.5 rounded-xl text-[11px] font-bold uppercase tracking-widest shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5">
            Sauvegarder les textes
          </button>
        </form>
      </div>
    </div>
  );
};

export default GlobalContentManager;
