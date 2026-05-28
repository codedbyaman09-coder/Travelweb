
import React, { useState, useEffect } from 'react';
import { apiList, apiRequest } from '../../lib/api';
import About from '../../pages/About';
import dipeshImg from '../../assets/team/dipesh.png';
import CustomIcon from '../../assets/ChatGPT Image May 14, 2026, 01_34_31 PM.png';
import guideIcon from '../../assets/ChatGPT Image May 14, 2026, 01_37_59 PM.png';
import assistanceIcon from '../../assets/ChatGPT Image May 14, 2026, 01_40_49 PM.png';
import expertIcon from '../../assets/ChatGPT Image May 14, 2026, 01_29_59 PM.png';
import { Layout, Palette, Type, Image as ImageIcon, Users, Heart, Star, Settings } from 'lucide-react';

const defaultThemeConfig = {
  primaryColor: "#b89450",
  primaryHover: "#9f7d3e",
  bgColor: "#f7f3ed",
  sectionBgColor: "#fbf8f2",
  textDark: "#161c20",
  textLight: "#273137",
  headingFont: "serif",
  bodyFont: "sans",
  borderRadius: "0px",
  hero: { overlayOpacity: "0.55", height: "560px", padding: "4rem 1.5rem", alignment: "center" },
  mission: { layout: "row", imgRadius: "0px", imgShadow: "0 18px 45px rgba(0,0,0,0.12)", padding: "5rem 1.5rem", gap: "5rem" },
  history: { overlayOpacity: "0.60", padding: "4rem 1.5rem" },
  team: { cardBg: "#fcf9f5", cardRadius: "4px", gap: "2rem" },
  values: { overlayOpacity: "0.40", columns: "5", gap: "2rem" },
  usp: { overlayOpacity: "0.75", columns: "4", gap: "2.5rem" }
};

const AboutManager = () => {
  const [abouts, setAbouts] = useState([]);
  const [loading, setLoading] = useState(true);

  // New Layout State
  const [activeSection, setActiveSection] = useState('global');
  const [activeTab, setActiveTab] = useState('design');

  const [pageSettings, setPageSettings] = useState({
    about_hero_title: '', about_hero_subtitle: '', about_hero_text: '', about_hero_overline: '', about_hero_image: '',
    about_mission_title: '', about_mission_text: '', about_mission_overline: '', about_mission_image: '',
    about_history_title: '', about_history_text: '', about_history_overline: '', about_history_image: '',
    about_team_title: '', about_team_overline: '',
    about_values_title: '', about_values_overline: '', about_values_image: '',
    about_services_title: '', about_services_overline: '',
    about_config: ''
  });

  const [themeConfig, setThemeConfig] = useState(defaultThemeConfig);
  const [savingSettings, setSavingSettings] = useState(false);

  // CRUD State
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({ type: 'team', title: '', subtitle: '', description: '', image: '', icon: '', display_order: 0 });
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetchAbouts();
    fetchSettings();
  }, []);

  async function fetchAbouts() {
    try {
      const data = await apiList('abouts');
      setAbouts(data);
    } catch (error) {
      console.error("Error fetching abouts:", error);
    } finally {
      setLoading(false);
    }
  };

  async function fetchSettings() {
    try {
      const response = await apiRequest('/settings');
      if (response && response.success && response.data) {
        const settingsMap = response.data;

        // Convert any non-string values to string if necessary, but actually the API parses JSON
        const normalizedMap = {};
        for (const key in settingsMap) {
          normalizedMap[key] = typeof settingsMap[key] === 'object' ? JSON.stringify(settingsMap[key]) : String(settingsMap[key]);
        }

        setPageSettings(prev => ({ ...prev, ...normalizedMap }));

        if (settingsMap.about_config) {
          try {
            const parsed = typeof settingsMap.about_config === 'string' ? JSON.parse(settingsMap.about_config) : settingsMap.about_config;
            if (parsed.theme) setThemeConfig(prev => ({ ...prev, ...parsed.theme }));
          } catch (e) {
            console.error("Failed to parse about_config", e);
          }
        }
      }
    } catch (error) {
      console.error("Error fetching settings:", error);
    }
  };

  const updateTheme = (key, value) => {
    setThemeConfig(prev => {
      const newTheme = typeof key === 'string' ? { ...prev, [key]: value } : { ...prev, [key.parent]: { ...prev[key.parent], [key.child]: value } };
      setPageSettings(p => ({ ...p, about_config: JSON.stringify({ theme: newTheme }) }));
      return newTheme;
    });
  };

  const handleSaveSettings = async (e) => {
    e?.preventDefault();
    setSavingSettings(true);
    try {
      await apiRequest('/settings', { method: 'POST', body: JSON.stringify(pageSettings) });
      alert('Paramètres sauvegardés avec succès !');
    } catch (error) {
      console.error("Error saving settings:", error);
      alert('Erreur lors de la sauvegarde.');
    } finally {
      setSavingSettings(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isEditing && editId) {
        await apiRequest(`/abouts/${editId}`, { method: 'PUT', body: JSON.stringify(formData) });
      } else {
        await apiRequest('/abouts', { method: 'POST', body: JSON.stringify(formData) });
      }
      setIsEditing(false);
      setFormData({ type: activeSection === 'team' ? 'team' : activeSection === 'values' ? 'value' : activeSection === 'usp' ? 'feature' : 'team', title: '', subtitle: '', description: '', image: '', icon: '', display_order: 0 });
      setEditId(null);
      fetchAbouts();
    } catch (error) {
      console.error("Error saving element:", error);
    }
  };

  const handleEdit = (item) => {
    setFormData(item);
    setEditId(item.id);
    setIsEditing(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Êtes-vous sûr de vouloir supprimer cet élément ?")) {
      try {
        await apiRequest(`/abouts/${id}`, { method: 'DELETE' });
        fetchAbouts();
      } catch (error) {
        console.error("Error deleting:", error);
      }
    }
  };

  const sectionsList = [
    { id: 'global', icon: Settings, label: 'Thème Global' },
    { id: 'hero', icon: ImageIcon, label: 'Héros Section' },
    { id: 'mission', icon: Layout, label: 'Mission' },
    { id: 'history', icon: Type, label: 'Histoire' },
    { id: 'team', icon: Users, label: 'Équipe' },
    { id: 'values', icon: Heart, label: 'Valeurs' },
    { id: 'usp', icon: Star, label: 'USP (Unique)' },
  ];

  const renderTabs = () => {
    const hasItems = ['team', 'values', 'usp', 'history', 'mission'].includes(activeSection);
    return (
      <div className="flex space-x-2 border-b border-slate-200 mb-6">
        {activeSection !== 'global' && (
          <button onClick={() => setActiveTab('content')} className={`pb-3 px-4 text-sm font-bold uppercase tracking-wider ${activeTab === 'content' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-slate-400 hover:text-slate-600'}`}>
            Contenu
          </button>
        )}
        <button onClick={() => setActiveTab('design')} className={`pb-3 px-4 text-sm font-bold uppercase tracking-wider ${activeTab === 'design' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-slate-400 hover:text-slate-600'}`}>
          Design & Layout
        </button>
        {hasItems && (
          <button onClick={() => { setActiveTab('items'); setFormData({ ...formData, type: activeSection === 'team' ? 'team' : activeSection === 'values' ? 'value' : activeSection === 'history' ? 'history' : activeSection === 'mission' ? 'mission' : 'feature' }); }} className={`pb-3 px-4 text-sm font-bold uppercase tracking-wider ${activeTab === 'items' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-slate-400 hover:text-slate-600'}`}>
            Éléments (Items)
          </button>
        )}
      </div>
    );
  };

  const renderContentInputs = () => {
    switch (activeSection) {
      case 'hero':
        return (
          <div className="space-y-4">
            <div><label className="block text-xs font-bold text-slate-500 mb-1">Titre Principal</label><input type="text" value={pageSettings.about_hero_title} onChange={e => setPageSettings({ ...pageSettings, about_hero_title: e.target.value })} className="bg-white text-slate-800 w-full border px-3 py-2 rounded" /></div>
            <div><label className="block text-xs font-bold text-slate-500 mb-1">Sous-titre</label><input type="text" value={pageSettings.about_hero_subtitle} onChange={e => setPageSettings({ ...pageSettings, about_hero_subtitle: e.target.value })} className="bg-white text-slate-800 w-full border px-3 py-2 rounded" /></div>
            <div><label className="block text-xs font-bold text-slate-500 mb-1">Sur-titre (Overline)</label><input type="text" value={pageSettings.about_hero_overline} onChange={e => setPageSettings({ ...pageSettings, about_hero_overline: e.target.value })} className="bg-white text-slate-800 w-full border px-3 py-2 rounded" /></div>
            <div><label className="block text-xs font-bold text-slate-500 mb-1">Description</label><textarea value={pageSettings.about_hero_text} onChange={e => setPageSettings({ ...pageSettings, about_hero_text: e.target.value })} className="bg-white text-slate-800 w-full border px-3 py-2 rounded h-24" /></div>
            <div><label className="block text-xs font-bold text-slate-500 mb-1">URL de l'image de fond</label><input type="text" value={pageSettings.about_hero_image} onChange={e => setPageSettings({ ...pageSettings, about_hero_image: e.target.value })} className="bg-white text-slate-800 w-full border px-3 py-2 rounded" /></div>
          </div>
        );
      case 'mission':
        return (
          <div className="space-y-4">
            <div><label className="block text-xs font-bold text-slate-500 mb-1">Titre</label><input type="text" value={pageSettings.about_mission_title} onChange={e => setPageSettings({ ...pageSettings, about_mission_title: e.target.value })} className="bg-white text-slate-800 w-full border px-3 py-2 rounded" /></div>
            <div><label className="block text-xs font-bold text-slate-500 mb-1">Sur-titre</label><input type="text" value={pageSettings.about_mission_overline} onChange={e => setPageSettings({ ...pageSettings, about_mission_overline: e.target.value })} className="bg-white text-slate-800 w-full border px-3 py-2 rounded" /></div>
            <div><label className="block text-xs font-bold text-slate-500 mb-1">Description (paragraphes séparés par Entrée)</label><textarea value={pageSettings.about_mission_text} onChange={e => setPageSettings({ ...pageSettings, about_mission_text: e.target.value })} className="bg-white text-slate-800 w-full border px-3 py-2 rounded h-32" /></div>
            <div><label className="block text-xs font-bold text-slate-500 mb-1">URL de l'image</label><input type="text" value={pageSettings.about_mission_image} onChange={e => setPageSettings({ ...pageSettings, about_mission_image: e.target.value })} className="bg-white text-slate-800 w-full border px-3 py-2 rounded" /></div>
          </div>
        );
      case 'history':
        return (
          <div className="space-y-4">
            <div><label className="block text-xs font-bold text-slate-500 mb-1">Titre</label><input type="text" value={pageSettings.about_history_title} onChange={e => setPageSettings({ ...pageSettings, about_history_title: e.target.value })} className="bg-white text-slate-800 w-full border px-3 py-2 rounded" /></div>
            <div><label className="block text-xs font-bold text-slate-500 mb-1">Sur-titre</label><input type="text" value={pageSettings.about_history_overline} onChange={e => setPageSettings({ ...pageSettings, about_history_overline: e.target.value })} className="bg-white text-slate-800 w-full border px-3 py-2 rounded" /></div>
            <div><label className="block text-xs font-bold text-slate-500 mb-1">Description</label><textarea value={pageSettings.about_history_text} onChange={e => setPageSettings({ ...pageSettings, about_history_text: e.target.value })} className="bg-white text-slate-800 w-full border px-3 py-2 rounded h-32" /></div>
            <div><label className="block text-xs font-bold text-slate-500 mb-1">Image de fond (URL)</label><input type="text" value={pageSettings.about_history_image} onChange={e => setPageSettings({ ...pageSettings, about_history_image: e.target.value })} className="bg-white text-slate-800 w-full border px-3 py-2 rounded" /></div>
          </div>
        );
      case 'team': return <div><label className="block text-xs font-bold text-slate-500 mb-1">Titre de section</label><input type="text" value={pageSettings.about_team_title} onChange={e => setPageSettings({ ...pageSettings, about_team_title: e.target.value })} className="bg-white text-slate-800 w-full border px-3 py-2 rounded" /></div>;
      case 'values': return (
        <div className="space-y-4">
          <div><label className="block text-xs font-bold text-slate-500 mb-1">Titre</label><input type="text" value={pageSettings.about_values_title} onChange={e => setPageSettings({ ...pageSettings, about_values_title: e.target.value })} className="bg-white text-slate-800 w-full border px-3 py-2 rounded" /></div>
          <div><label className="block text-xs font-bold text-slate-500 mb-1">Image de fond (URL)</label><input type="text" value={pageSettings.about_values_image} onChange={e => setPageSettings({ ...pageSettings, about_values_image: e.target.value })} className="bg-white text-slate-800 w-full border px-3 py-2 rounded" /></div>
        </div>
      );
      case 'usp': return <div><label className="block text-xs font-bold text-slate-500 mb-1">Titre (Services)</label><input type="text" value={pageSettings.about_services_title} onChange={e => setPageSettings({ ...pageSettings, about_services_title: e.target.value })} className="bg-white text-slate-800 w-full border px-3 py-2 rounded" /></div>;
      default: return null;
    }
  };

  const renderDesignInputs = () => {
    switch (activeSection) {
      case 'global':
        return (
          <div className="space-y-6">
            <h4 className="font-bold text-[11px] uppercase text-indigo-600 border-b pb-2">Couleurs Principales</h4>
            <div className="grid grid-cols-2 gap-4">
              <div><label className="block text-[11px] font-bold text-slate-500 uppercase mb-2">Couleur Principale</label><div className="flex gap-2"><input type="color" value={themeConfig.primaryColor} onChange={e => updateTheme('primaryColor', e.target.value)} className="w-10 h-10 rounded cursor-pointer" /><input type="text" value={themeConfig.primaryColor} onChange={e => updateTheme('primaryColor', e.target.value)} className="bg-white text-slate-800 flex-1 border px-2 text-sm rounded" /></div></div>
              <div><label className="block text-[11px] font-bold text-slate-500 uppercase mb-2">Hover</label><div className="flex gap-2"><input type="color" value={themeConfig.primaryHover} onChange={e => updateTheme('primaryHover', e.target.value)} className="w-10 h-10 rounded cursor-pointer" /><input type="text" value={themeConfig.primaryHover} onChange={e => updateTheme('primaryHover', e.target.value)} className="bg-white text-slate-800 flex-1 border px-2 text-sm rounded" /></div></div>
              <div><label className="block text-[11px] font-bold text-slate-500 uppercase mb-2">Fond de Page</label><div className="flex gap-2"><input type="color" value={themeConfig.bgColor} onChange={e => updateTheme('bgColor', e.target.value)} className="w-10 h-10 rounded cursor-pointer" /><input type="text" value={themeConfig.bgColor} onChange={e => updateTheme('bgColor', e.target.value)} className="bg-white text-slate-800 flex-1 border px-2 text-sm rounded" /></div></div>
              <div><label className="block text-[11px] font-bold text-slate-500 uppercase mb-2">Fond de Section</label><div className="flex gap-2"><input type="color" value={themeConfig.sectionBgColor} onChange={e => updateTheme('sectionBgColor', e.target.value)} className="w-10 h-10 rounded cursor-pointer" /><input type="text" value={themeConfig.sectionBgColor} onChange={e => updateTheme('sectionBgColor', e.target.value)} className="bg-white text-slate-800 flex-1 border px-2 text-sm rounded" /></div></div>
              <div><label className="block text-[11px] font-bold text-slate-500 uppercase mb-2">Texte Sombre</label><div className="flex gap-2"><input type="color" value={themeConfig.textDark} onChange={e => updateTheme('textDark', e.target.value)} className="w-10 h-10 rounded cursor-pointer" /><input type="text" value={themeConfig.textDark} onChange={e => updateTheme('textDark', e.target.value)} className="bg-white text-slate-800 flex-1 border px-2 text-sm rounded" /></div></div>
              <div><label className="block text-[11px] font-bold text-slate-500 uppercase mb-2">Texte Clair</label><div className="flex gap-2"><input type="color" value={themeConfig.textLight} onChange={e => updateTheme('textLight', e.target.value)} className="w-10 h-10 rounded cursor-pointer" /><input type="text" value={themeConfig.textLight} onChange={e => updateTheme('textLight', e.target.value)} className="bg-white text-slate-800 flex-1 border px-2 text-sm rounded" /></div></div>
            </div>
            <h4 className="font-bold text-[11px] uppercase text-indigo-600 border-b pb-2 mt-6">Typographie & Formes</h4>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] font-bold text-slate-500 uppercase mb-2">Police des Titres</label>
                <select value={themeConfig.headingFont} onChange={e => updateTheme('headingFont', e.target.value)} className="bg-white text-slate-800 w-full border p-2 rounded">
                  <option value="serif">Serif (Playfair)</option><option value="sans">Sans-Serif (Inter)</option>
                </select>
              </div>
              <div>
                <label className="block text-[11px] font-bold text-slate-500 uppercase mb-2">Police du Texte</label>
                <select value={themeConfig.bodyFont} onChange={e => updateTheme('bodyFont', e.target.value)} className="bg-white text-slate-800 w-full border p-2 rounded">
                  <option value="sans">Sans-Serif (Inter)</option><option value="serif">Serif (Playfair)</option>
                </select>
              </div>
              <div className="col-span-2">
                <label className="block text-[11px] font-bold text-slate-500 uppercase mb-2">Arrondi des Bordures (Border Radius)</label>
                <select value={themeConfig.borderRadius} onChange={e => updateTheme('borderRadius', e.target.value)} className="bg-white text-slate-800 w-full border p-2 rounded">
                  <option value="0px">Carré (0px)</option><option value="4px">Léger (4px)</option><option value="16px">Arrondi (16px)</option><option value="9999px">Pilule (9999px)</option>
                </select>
              </div>
            </div>
          </div>
        );
      case 'hero':
        return (
          <div className="space-y-4">
            <div><label className="block text-[11px] font-bold text-slate-500 mb-1">Hauteur (ex: 560px, 100vh)</label><input type="text" value={themeConfig.hero?.height || ''} onChange={e => updateTheme({ parent: 'hero', child: 'height' }, e.target.value)} className="bg-white text-slate-800 w-full border px-2 py-1 text-sm rounded" /></div>
            <div><label className="block text-[11px] font-bold text-slate-500 mb-1">Opacité Filtre Noir (0.0 à 1.0)</label><input type="number" step="0.05" min="0" max="1" value={themeConfig.hero?.overlayOpacity || ''} onChange={e => updateTheme({ parent: 'hero', child: 'overlayOpacity' }, e.target.value)} className="bg-white text-slate-800 w-full border px-2 py-1 text-sm rounded" /></div>
          </div>
        );
      case 'mission':
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-[11px] font-bold text-slate-500 mb-1">Alignement Layout</label>
              <select value={themeConfig.mission?.layout || 'row'} onChange={e => updateTheme({ parent: 'mission', child: 'layout' }, e.target.value)} className="bg-white text-slate-800 w-full border px-2 py-1 text-sm rounded">
                <option value="row">Texte à gauche, Image à droite</option>
                <option value="row-reverse">Image à gauche, Texte à droite</option>
              </select>
            </div>
            <div><label className="block text-[11px] font-bold text-slate-500 mb-1">Espace (Gap) ex: 5rem</label><input type="text" value={themeConfig.mission?.gap || ''} onChange={e => updateTheme({ parent: 'mission', child: 'gap' }, e.target.value)} className="bg-white text-slate-800 w-full border px-2 py-1 text-sm rounded" /></div>
            <div><label className="block text-[11px] font-bold text-slate-500 mb-1">Arrondi Image ex: 16px</label><input type="text" value={themeConfig.mission?.imgRadius || ''} onChange={e => updateTheme({ parent: 'mission', child: 'imgRadius' }, e.target.value)} className="bg-white text-slate-800 w-full border px-2 py-1 text-sm rounded" /></div>
          </div>
        );
      case 'history':
        return <div><label className="block text-[11px] font-bold text-slate-500 mb-1">Opacité Filtre (0 à 1)</label><input type="number" step="0.05" min="0" max="1" value={themeConfig.history?.overlayOpacity || ''} onChange={e => updateTheme({ parent: 'history', child: 'overlayOpacity' }, e.target.value)} className="bg-white text-slate-800 w-full border px-2 py-1 text-sm rounded" /></div>;
      case 'team':
        return (
          <div className="space-y-4">
            <div><label className="block text-[11px] font-bold text-slate-500 mb-1">Fond des Cartes</label><div className="flex gap-2"><input type="color" value={themeConfig.team?.cardBg || '#fcf9f5'} onChange={e => updateTheme({ parent: 'team', child: 'cardBg' }, e.target.value)} className="w-10 h-10 rounded cursor-pointer" /><input type="text" value={themeConfig.team?.cardBg || ''} onChange={e => updateTheme({ parent: 'team', child: 'cardBg' }, e.target.value)} className="bg-white text-slate-800 flex-1 border px-2 py-1 text-sm rounded" /></div></div>
            <div><label className="block text-[11px] font-bold text-slate-500 mb-1">Espace entre cartes (Gap)</label><input type="text" value={themeConfig.team?.gap || ''} onChange={e => updateTheme({ parent: 'team', child: 'gap' }, e.target.value)} className="bg-white text-slate-800 w-full border px-2 py-1 text-sm rounded" /></div>
          </div>
        );
      case 'values':
      case 'usp':
        return <div><label className="block text-[11px] font-bold text-slate-500 mb-1">Opacité Filtre (0 à 1)</label><input type="number" step="0.05" min="0" max="1" value={themeConfig[activeSection]?.overlayOpacity || ''} onChange={e => updateTheme({ parent: activeSection, child: 'overlayOpacity' }, e.target.value)} className="bg-white text-slate-800 w-full border px-2 py-1 text-sm rounded" /></div>;
      default: return null;
    }
  };

  const renderItemsInputs = () => {
    const itemType = activeSection === 'team' ? 'team' : activeSection === 'values' ? 'value' : activeSection === 'history' ? 'history' : activeSection === 'mission' ? 'mission' : 'feature';
    const filteredItems = abouts.filter(a => a.type === itemType);

    return (
      <div className="space-y-6">
        <form onSubmit={handleSubmit} className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-4">
          <h4 className="font-bold text-indigo-600 text-sm mb-2">{isEditing ? 'Modifier un Élément' : 'Ajouter un Élément'}</h4>
          <div className="grid grid-cols-2 gap-4">
            <div><label className="block text-xs font-bold text-slate-500 mb-1">Titre / Nom</label><input required type="text" value={formData.title} onChange={e => setFormData({ ...formData, title: e.target.value })} className="bg-white text-slate-800 w-full border px-3 py-2 rounded" /></div>
            {(itemType === 'team' || itemType === 'feature') && <div><label className="block text-xs font-bold text-slate-500 mb-1">Image URL</label><input type="text" value={formData.image} onChange={e => setFormData({ ...formData, image: e.target.value })} className="bg-white text-slate-800 w-full border px-3 py-2 rounded" /></div>}
            {itemType === 'team' && <div><label className="block text-xs font-bold text-slate-500 mb-1">Sous-titre / Rôle</label><input type="text" value={formData.subtitle} onChange={e => setFormData({ ...formData, subtitle: e.target.value })} className="bg-white text-slate-800 w-full border px-3 py-2 rounded" /></div>}
            {itemType === 'value' && <div><label className="block text-xs font-bold text-slate-500 mb-1">Icône (Caractère)</label><input type="text" value={formData.icon} onChange={e => setFormData({ ...formData, icon: e.target.value })} className="bg-white text-slate-800 w-full border px-3 py-2 rounded" /></div>}
            <div><label className="block text-xs font-bold text-slate-500 mb-1">Ordre</label><input type="number" value={formData.display_order} onChange={e => setFormData({ ...formData, display_order: parseInt(e.target.value) })} className="bg-white text-slate-800 w-full border px-3 py-2 rounded" /></div>
            <div className="col-span-2"><label className="block text-xs font-bold text-slate-500 mb-1">Description</label><textarea required={itemType !== 'feature'} value={formData.description} onChange={e => setFormData({ ...formData, description: e.target.value })} className="bg-white text-slate-800 w-full border px-3 py-2 rounded h-20" /></div>
          </div>
          <div className="flex gap-2 mt-4">
            <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded font-bold text-xs uppercase tracking-wider">{isEditing ? 'Mettre à jour' : 'Ajouter'}</button>
            {isEditing && <button type="button" onClick={() => { setIsEditing(false); setFormData({ type: itemType, title: '', subtitle: '', description: '', image: '', icon: '', display_order: 0 }); }} className="bg-slate-200 text-slate-600 px-4 py-2 rounded font-bold text-xs uppercase tracking-wider">Annuler</button>}
          </div>
        </form>

        <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50"><tr><th className="p-3">Titre</th><th className="p-3">Détails</th><th className="p-3">Actions</th></tr></thead>
            <tbody className="divide-y divide-slate-100">
              {filteredItems.map(item => (
                <tr key={item.id} className="hover:bg-slate-50">
                  <td className="p-3 font-medium flex items-center gap-3">
                    {item.image ? (
                      <img src={item.image} alt={item.title} className="w-10 h-10 object-cover rounded-md shrink-0 border border-slate-200" />
                    ) : item.type === 'feature' ? (
                      <img src={item.title === 'Voyages Sur Mesure' ? CustomIcon : item.title === 'Guides Privés' ? guideIcon : item.title === 'Assistance Voyage 24h/24 Et 7j/7' ? assistanceIcon : expertIcon} alt={item.title} className="w-10 h-10 object-cover rounded-md shrink-0 border border-slate-200" />
                    ) : item.type === 'team' ? (
                      <img src={dipeshImg} alt={item.title} className="w-10 h-10 object-cover rounded-md shrink-0 border border-slate-200" />
                    ) : item.icon ? (
                      <div className="w-10 h-10 bg-slate-100 text-slate-600 rounded-md flex items-center justify-center text-xl shrink-0 border border-slate-200">{item.icon}</div>
                    ) : (
                      <div className="w-10 h-10 bg-slate-50 text-slate-300 rounded-md flex items-center justify-center shrink-0 border border-slate-100"><ImageIcon size={16} /></div>
                    )}
                    <span className="truncate">{item.title}</span>
                  </td>
                  <td className="p-3 text-xs text-slate-500 truncate max-w-[200px]">{item.description}</td>
                  <td className="p-3 space-x-2">
                    <button onClick={() => handleEdit(item)} className="text-blue-600">Modif.</button>
                    <button onClick={() => handleDelete(item.id)} className="text-red-500">Suppr.</button>
                  </td>
                </tr>
              ))}
              {filteredItems.length === 0 && <tr><td colSpan="3" className="p-4 text-center text-slate-400">Aucun élément.</td></tr>}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-6 animate-fadeIn pb-20">
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
        <h2 className="text-2xl font-bold text-slate-800">Dynamic About Page Manager</h2>
        <p className="text-slate-500 text-sm mt-1">Gérez le contenu, les éléments et le design de la page À Propos en temps réel.</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        <div className="w-full lg:w-1/4 space-y-4">
          <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200">
            <h3 className="font-bold text-[11px] uppercase tracking-wider text-slate-400 mb-4 px-2">Sections</h3>
            <div className="space-y-1">
              {sectionsList.map((sec) => {
                const Icon = sec.icon;
                return (
                  <button key={sec.id} onClick={() => { setActiveSection(sec.id); setActiveTab(sec.id === 'global' ? 'design' : 'content'); }} className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all ${activeSection === sec.id ? 'bg-indigo-50 text-indigo-700 shadow-sm border border-indigo-100' : 'text-slate-500 hover:bg-slate-50'}`}>
                    <Icon size={16} /> {sec.label}
                  </button>
                )
              })}
            </div>
            <div className="mt-6 pt-4 border-t border-slate-200 px-2">
              <button onClick={handleSaveSettings} disabled={savingSettings} className="w-full flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-lg text-xs uppercase tracking-wider transition">
                <Settings size={14} /> {savingSettings ? 'En cours...' : 'Tout Sauvegarder'}
              </button>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-3/4 bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          {renderTabs()}
          {activeTab === 'content' && activeSection !== 'global' && renderContentInputs()}
          {activeTab === 'design' && renderDesignInputs()}
          {activeTab === 'items' && renderItemsInputs()}
        </div>
      </div>

      {/* LIVE PREVIEW SEPARATOR */}
      <div className="mt-16 mb-8 text-center">
        <h3 className="text-xl font-bold text-slate-400 uppercase tracking-widest">Aperçu en Direct</h3>
        <p className="text-sm text-slate-500 mt-2">Les modifications apportées ci-dessus apparaîtront instantanément ici.</p>
        <div className="w-24 h-1 bg-slate-200 mx-auto mt-4 rounded-full"></div>
      </div>

      {/* LIVE PREVIEW CONTAINER */}
      <div className="border-[12px] border-slate-800 rounded-2xl overflow-hidden shadow-2xl relative mb-20 pointer-events-none">
        <div className="absolute top-0 w-full h-8 bg-slate-800 flex items-center justify-center gap-2 z-50">
          <div className="w-3 h-3 rounded-full bg-slate-600"></div>
          <div className="w-3 h-3 rounded-full bg-slate-600"></div>
          <div className="w-3 h-3 rounded-full bg-slate-600"></div>
        </div>
        <div className="pt-8 h-[800px] overflow-y-auto bg-white pointer-events-auto custom-scrollbar">
          <About previewConfig={{ theme: themeConfig }} previewSettings={pageSettings} />
        </div>
      </div>
    </div>
  );
};

export default AboutManager;
