import React, { useState, useEffect } from 'react';
import { apiRequest } from '../../lib/api';
import * as LucideIcons from "lucide-react";

const EnviesManager = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('');
  const [title, setTitle] = useState('TOUTES VOS ENVIES DE VOYAGE EN INDE');

  const fetchSettings = async () => {
    try {
      const data = await apiRequest('/settings');
      if (data.success && data.data) {
        if (data.data.envies_grid_items) {
          try {
            setItems(typeof data.data.envies_grid_items === 'string' ? JSON.parse(data.data.envies_grid_items) : data.data.envies_grid_items);
          } catch(e) {
            console.error("Error parsing envies_grid_items", e);
          }
        } else {
          // Default initial
          setItems([
            { title: "Voyage sur mesure Inde", icon: "Compass", link: "" },
            { title: "Circuit Inde du Nord", icon: "Mountain", link: "" },
            { title: "Voyage Rajasthan sur mesure", icon: "Map", link: "" },
            { title: "Séjour bien-être & Ayurveda", icon: "Flower2", link: "" },
            { title: "Voyage de noces en Inde", icon: "Heart", link: "" },
            { title: "Voyage en famille en Inde", icon: "Users", link: "" },
            { title: "Première fois en Inde", icon: "Sparkles", link: "" },
            { title: "Voyage hors des sentiers battus", icon: "Compass", link: "" },
            { title: "Voyage religieux en Inde", icon: "Church", link: "" },
            { title: "Yoga & méditation en Inde", icon: "Leaf", link: "" },
            { title: "Circuit Inde du Sud", icon: "Waves", link: "" },
            { title: "Voyage Kerala sur mesure", icon: "Palmtree", link: "" },
            { title: "Combiné Nord & Sud", icon: "Route", link: "" },
            { title: "Trek & aventure en Inde", icon: "Tent", link: "" },
            { title: "Safari & nature en Inde", icon: "Trees", link: "" },
            { title: "Séjour plages en Inde", icon: "Waves", link: "" },
            { title: "Circuit culturel en Inde", icon: "Landmark", link: "" },
            { title: "Voyage luxe en Inde", icon: "Sparkles", link: "" },
            { title: "Inde en train de luxe", icon: "Train", link: "" },
            { title: "Road trip en Inde", icon: "Car", link: "" },
            { title: "Agences locales en Inde", icon: "Building2", link: "" },
            { title: "Chauffeur privé en Inde", icon: "Car", link: "" },
            { title: "Voyage responsable en Inde", icon: "Leaf", link: "" },
            { title: "Quand partir en Inde ?", icon: "Compass", link: "" },
            { title: "Visa & formalités Inde", icon: "ShieldCheck", link: "" },
          ]);
        }
        if (data.data.envies_grid_title) {
          setTitle(data.data.envies_grid_title);
        }
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
      const payload = {
        envies_grid_items: JSON.stringify(items),
        envies_grid_title: title
      };
      const data = await apiRequest('/settings', {
        method: 'POST',
        body: JSON.stringify(payload)
      });
      if (data.success) {
        setMessage('Paramètres sauvegardés avec succès!');
        setTimeout(() => setMessage(''), 3000);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const addItem = () => {
    setItems([...items, { title: '', icon: 'Compass', link: '' }]);
  };

  const updateItem = (index, field, value) => {
    const newItems = [...items];
    newItems[index][field] = value;
    setItems(newItems);
  };

  const removeItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  const moveItem = (index, direction) => {
    if (direction === 'up' && index > 0) {
      const newItems = [...items];
      const temp = newItems[index];
      newItems[index] = newItems[index - 1];
      newItems[index - 1] = temp;
      setItems(newItems);
    } else if (direction === 'down' && index < items.length - 1) {
      const newItems = [...items];
      const temp = newItems[index];
      newItems[index] = newItems[index + 1];
      newItems[index + 1] = temp;
      setItems(newItems);
    }
  };

  if (loading) return <div className="p-8 text-center text-slate-500">Chargement...</div>;

  return (
    <div className="animate-fadeIn">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 border-b border-slate-200 pb-5 gap-4">
        <div>
          <span className="text-indigo-600 text-[10px] tracking-[0.3em] font-bold uppercase mb-1 block">
            Navigation
          </span>
          <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-2">Toutes vos envies de voyage</h2>
          <p className="text-slate-500 text-sm mt-2">Gérez la grille de liens affichée au-dessus du footer (icônes, titres, liens).</p>
        </div>
      </div>

      {message && <div className="mb-6 p-4 bg-emerald-50 text-emerald-700 text-sm rounded-xl border border-emerald-100 flex items-center gap-3"><span className="text-xl">✨</span> {message}</div>}

      <div className="bg-white shadow-sm border border-slate-200 rounded-xl p-8 mb-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">Titre de la section</label>
            <input type="text" value={title} onChange={e => setTitle(e.target.value)} className="w-full bg-slate-50 border border-slate-200 px-4 py-3.5 rounded-xl text-sm focus:border-indigo-500 outline-none transition-all" />
          </div>

          <div className="flex justify-between items-center border-b border-slate-200 pb-2 mb-4 mt-8">
            <h3 className="font-serif text-xl text-slate-800 italic">Liens de navigation</h3>
            <button type="button" onClick={addItem} className="text-sm font-bold text-indigo-600 hover:text-indigo-700 px-4 py-2 bg-indigo-50 rounded-lg">
              + Ajouter un lien
            </button>
          </div>

          <div className="space-y-4">
            {items.map((item, idx) => {
              const IconComp = LucideIcons[item.icon] || LucideIcons.Compass;
              return (
                <div key={idx} className="flex flex-col md:flex-row items-center gap-4 bg-slate-50 p-4 rounded-xl border border-slate-200 relative group">
                  <div className="flex flex-col gap-1 shrink-0">
                    <button type="button" onClick={() => moveItem(idx, 'up')} disabled={idx === 0} className="text-slate-400 hover:text-slate-700 disabled:opacity-30">▲</button>
                    <button type="button" onClick={() => moveItem(idx, 'down')} disabled={idx === items.length - 1} className="text-slate-400 hover:text-slate-700 disabled:opacity-30">▼</button>
                  </div>
                  
                  <div className="shrink-0 w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-200 flex items-center justify-center text-indigo-500">
                    <IconComp size={20} strokeWidth={1.5} />
                  </div>

                  <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">Titre</label>
                      <input type="text" value={item.title} onChange={e => updateItem(idx, 'title', e.target.value)} className="w-full bg-white border border-slate-200 px-3 py-2.5 rounded-lg text-sm outline-none" placeholder="Ex: Voyage sur mesure Inde" required />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">Icône (Lucide)</label>
                      <input type="text" value={item.icon} onChange={e => updateItem(idx, 'icon', e.target.value)} className="w-full bg-white border border-slate-200 px-3 py-2.5 rounded-lg text-sm outline-none" placeholder="Ex: Compass, Map, Heart" />
                      <a href="https://lucide.dev/icons/" target="_blank" rel="noreferrer" className="text-[9px] text-blue-500 hover:underline mt-1 block">Voir les icônes</a>
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">Lien URL</label>
                      <input type="text" value={item.link} onChange={e => updateItem(idx, 'link', e.target.value)} className="w-full bg-white border border-slate-200 px-3 py-2.5 rounded-lg text-sm outline-none" placeholder="Ex: /destinations/inde" />
                    </div>
                  </div>

                  <button type="button" onClick={() => removeItem(idx)} className="w-8 h-8 flex items-center justify-center bg-red-50 text-red-500 rounded-lg hover:bg-red-100 hover:text-red-600 transition-colors shrink-0">
                    ✕
                  </button>
                </div>
              );
            })}
          </div>

          <button type="submit" className="w-full bg-indigo-600 text-white py-4 rounded-xl text-[11px] font-bold uppercase tracking-widest shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 mt-8">
            Sauvegarder les modifications
          </button>
        </form>
      </div>
    </div>
  );
};

export default EnviesManager;
