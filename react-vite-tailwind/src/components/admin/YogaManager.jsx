import React, { useState, useEffect } from 'react';
import { apiList, apiRequest } from '../../lib/api';

const YogaManager = () => {
  const [activeTab, setActiveTab] = useState('settings');
  const [elements, setElements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  const [formData, setFormData] = useState({
    id: null,
    type: 'feature',
    title: '',
    description: '',
    image: '',
    display_order: 0
  });

  const [pageSettings, setPageSettings] = useState({
    yoga_hero_overline: "Retraite de",
    yoga_hero_title: "Yoga",
    yoga_hero_subtitle: "En Inde",
    yoga_hero_text: "Corps • Esprit • Âme en Harmonie",
    yoga_hero_quote: "Le Yoga n'est pas \n seulement une pratique, \n c'est un voyage vers \n soi-même.",
    yoga_hero_image: "",
    yoga_history_title: "Brève Histoire du Yoga",
    yoga_history_text: "Le yoga est une science ancienne née en Inde il y a plus de 5 000 ans.\nSes racines se trouvent dans les Vedas...\n\nIl a été transmis par des sages...",
    yoga_history_image: "",
    yoga_faq_title: "Tout Savoir sur le Yoga",
    yoga_itinerary_title: "3 Itinéraires de Yoga en Inde",
    yoga_bottom_title: "Votre Voyage Intérieur \n Commence Ici",
    yoga_bottom_text: "Offrez-vous une expérience transformante en Inde, \n berceau du yoga, de la sagesse et de la paix intérieure.",
    yoga_bottom_image: ""
  });
  const [savingSettings, setSavingSettings] = useState(false);

  const API_PATH = '/yogas';
  const SETTINGS_API_PATH = '/settings';

  const fetchElements = async () => {
    setLoading(true);
    try {
      const rows = await apiList(API_PATH);
      setElements(rows);
    } catch (err) {
      setError("Erreur de chargement.");
    } finally {
      setLoading(false);
    }
  };

  const fetchSettings = async () => {
    try {
      const data = await apiRequest(SETTINGS_API_PATH);
      if (data.success && data.data) {
        setPageSettings(prev => ({
          ...prev,
          ...data.data
        }));
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchElements();
    fetchSettings();
  }, []);

  const handleSaveSettings = async (e) => {
    e.preventDefault();
    setSavingSettings(true);
    setMessage('');
    try {
      const data = await apiRequest(SETTINGS_API_PATH, {
        method: 'POST',
        body: JSON.stringify(pageSettings)
      });
      if (data.success) {
        setMessage('Textes de la page sauvegardés avec succès!');
        setTimeout(() => setMessage(''), 3000);
      } else {
        setError("Erreur lors de la sauvegarde.");
      }
    } catch (err) {
      setError("Erreur de connexion.");
    } finally {
      setSavingSettings(false);
    }
  };

  const handleElementSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = isEditing ? `${API_PATH}/${formData.id}` : API_PATH;
      const method = isEditing ? 'PUT' : 'POST';

      const data = await apiRequest(url, {
        method,
        body: JSON.stringify(formData)
      });

      if (data.success) {
        setMessage(isEditing ? 'Élément mis à jour!' : 'Élément ajouté!');
        setTimeout(() => setMessage(''), 3000);
        resetForm();
        fetchElements();
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError("Erreur lors de l'enregistrement.");
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Voulez-vous vraiment supprimer cet élément ?')) {
      try {
        await apiRequest(`${API_PATH}/${id}`, { method: 'DELETE' });
        fetchElements();
      } catch (err) {
        setError("Erreur lors de la suppression.");
      }
    }
  };

  const resetForm = () => {
    setFormData({ id: null, type: 'feature', title: '', description: '', image: '', display_order: 0 });
    setIsEditing(false);
  };

  const editItem = (item) => {
    setFormData(item);
    setIsEditing(true);
    setActiveTab('elements');
    window.scrollTo(0, 0);
  };

  if (loading) return <div className="p-8 text-center text-slate-500">Chargement...</div>;

  return (
    <div className="animate-fadeIn">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 border-b border-slate-200 pb-5 gap-4">
        <div>
          <span className="text-indigo-600 text-[10px] tracking-[0.3em] font-bold uppercase mb-1 block">
            Pages Statiques
          </span>
          <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-2">Gestion de la page 'Yoga'</h2>
        </div>
        <div className="flex space-x-2">
          <button 
            onClick={() => setActiveTab('settings')} 
            className={`px-6 py-2.5 rounded-full text-[11px] font-bold uppercase tracking-wider transition-all duration-300 ${activeTab === 'settings' ? 'bg-indigo-600 text-white shadow-md' : 'bg-slate-100 text-slate-500 hover:bg-gray-200'}`}
          >
            Textes de la page
          </button>
          <button 
            onClick={() => setActiveTab('elements')} 
            className={`px-6 py-2.5 rounded-full text-[11px] font-bold uppercase tracking-wider transition-all duration-300 ${activeTab === 'elements' ? 'bg-indigo-600 text-white shadow-md' : 'bg-slate-100 text-slate-500 hover:bg-gray-200'}`}
          >
            Éléments Dynamiques
          </button>
        </div>
      </div>

      {error && <div className="mb-6 p-4 bg-red-50 text-red-700 text-sm rounded-xl border border-red-100 flex items-center gap-3"><span className="text-xl">⚠️</span> {error}</div>}
      {message && <div className="mb-6 p-4 bg-emerald-50 text-emerald-700 text-sm rounded-xl border border-emerald-100 flex items-center gap-3"><span className="text-xl">✨</span> {message}</div>}

      {activeTab === 'settings' && (
        <div className="bg-white p-8 shadow-sm border border-slate-200 rounded-xl max-w-4xl mx-auto">
          <h3 className="text-2xl font-serif text-slate-800 italic mb-8 border-b border-slate-200 pb-4">Modifier les Textes Principaux de la Page</h3>
          <form onSubmit={handleSaveSettings} className="space-y-8">
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
              <h4 className="font-bold text-[11px] uppercase tracking-wider text-indigo-600 mb-4">Section Héros (Haut de page)</h4>
              <div className="space-y-5">
                <div>
                  <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">Sur-titre</label>
                  <input type="text" value={pageSettings.yoga_hero_overline || ''} onChange={e => setPageSettings({...pageSettings, yoga_hero_overline: e.target.value})} className="w-full bg-white border border-slate-200 px-4 py-3.5 rounded-xl text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">Titre Principal</label>
                  <input type="text" value={pageSettings.yoga_hero_title || ''} onChange={e => setPageSettings({...pageSettings, yoga_hero_title: e.target.value})} className="w-full bg-white border border-slate-200 px-4 py-3.5 rounded-xl text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">Sous-titre</label>
                  <input type="text" value={pageSettings.yoga_hero_subtitle || ''} onChange={e => setPageSettings({...pageSettings, yoga_hero_subtitle: e.target.value})} className="w-full bg-white border border-slate-200 px-4 py-3.5 rounded-xl text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">Texte de description (Corps, Esprit...)</label>
                  <input type="text" value={pageSettings.yoga_hero_text || ''} onChange={e => setPageSettings({...pageSettings, yoga_hero_text: e.target.value})} className="w-full bg-white border border-slate-200 px-4 py-3.5 rounded-xl text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">Citation flottante (Sauts de ligne possibles)</label>
                  <textarea value={pageSettings.yoga_hero_quote || ''} onChange={e => setPageSettings({...pageSettings, yoga_hero_quote: e.target.value})} className="w-full bg-white border border-slate-200 px-4 py-3.5 rounded-xl text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none h-24 resize-none transition-all" />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">URL de l'image de fond (Héros)</label>
                  <input type="text" value={pageSettings.yoga_hero_image || ''} onChange={e => setPageSettings({...pageSettings, yoga_hero_image: e.target.value})} className="w-full bg-white border border-slate-200 px-4 py-3.5 rounded-xl text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all" placeholder="https://..." />
                </div>
              </div>
            </div>

            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
              <h4 className="font-bold text-[11px] uppercase tracking-wider text-indigo-600 mb-4">Section Histoire</h4>
              <div className="space-y-5">
                <div>
                  <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">Titre de l'histoire</label>
                  <input type="text" value={pageSettings.yoga_history_title || ''} onChange={e => setPageSettings({...pageSettings, yoga_history_title: e.target.value})} className="w-full bg-white border border-slate-200 px-4 py-3.5 rounded-xl text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">Texte de l'histoire</label>
                  <textarea value={pageSettings.yoga_history_text || ''} onChange={e => setPageSettings({...pageSettings, yoga_history_text: e.target.value})} className="w-full bg-white border border-slate-200 px-4 py-3.5 rounded-xl text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none h-32 resize-none transition-all" />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">URL Image de Shiva</label>
                  <input type="text" value={pageSettings.yoga_history_image || ''} onChange={e => setPageSettings({...pageSettings, yoga_history_image: e.target.value})} className="w-full bg-white border border-slate-200 px-4 py-3.5 rounded-xl text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all" placeholder="https://..." />
                </div>
              </div>
            </div>

            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
              <h4 className="font-bold text-[11px] uppercase tracking-wider text-indigo-600 mb-4">Titres des Sections</h4>
              <div className="space-y-5">
                <div>
                  <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">Titre Section FAQ</label>
                  <input type="text" value={pageSettings.yoga_faq_title || ''} onChange={e => setPageSettings({...pageSettings, yoga_faq_title: e.target.value})} className="w-full bg-white border border-slate-200 px-4 py-3.5 rounded-xl text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">Titre Section Itinéraires</label>
                  <input type="text" value={pageSettings.yoga_itinerary_title || ''} onChange={e => setPageSettings({...pageSettings, yoga_itinerary_title: e.target.value})} className="w-full bg-white border border-slate-200 px-4 py-3.5 rounded-xl text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all" />
                </div>
              </div>
            </div>

            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
              <h4 className="font-bold text-[11px] uppercase tracking-wider text-indigo-600 mb-4">Section Bas de page</h4>
              <div className="space-y-5">
                <div>
                  <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">Titre Bannière</label>
                  <input type="text" value={pageSettings.yoga_bottom_title || ''} onChange={e => setPageSettings({...pageSettings, yoga_bottom_title: e.target.value})} className="w-full bg-white border border-slate-200 px-4 py-3.5 rounded-xl text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">Texte Bannière</label>
                  <textarea value={pageSettings.yoga_bottom_text || ''} onChange={e => setPageSettings({...pageSettings, yoga_bottom_text: e.target.value})} className="w-full bg-white border border-slate-200 px-4 py-3.5 rounded-xl text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none h-24 resize-none transition-all" />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">URL Image Bannière</label>
                  <input type="text" value={pageSettings.yoga_bottom_image || ''} onChange={e => setPageSettings({...pageSettings, yoga_bottom_image: e.target.value})} className="w-full bg-white border border-slate-200 px-4 py-3.5 rounded-xl text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all" placeholder="https://..." />
                </div>
              </div>
            </div>

            <button type="submit" disabled={savingSettings} className={`w-full bg-indigo-600 text-white py-4 rounded-xl text-[11px] font-bold uppercase tracking-widest shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 ${savingSettings ? 'opacity-50 pointer-events-none' : ''}`}>
              {savingSettings ? 'Sauvegarde...' : 'Sauvegarder le contenu de la page'}
            </button>
          </form>
        </div>
      )}

      {activeTab === 'elements' && (
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          <div className="xl:col-span-1 bg-white p-8 shadow-sm border border-slate-200 rounded-xl h-fit">
            <h3 className="text-lg font-semibold text-slate-800 mb-6">
              {isEditing ? "Modifier l'Élément" : "Ajouter un Nouvel Élément"}
            </h3>
            
            <form onSubmit={handleElementSubmit} className="space-y-5 text-sm">
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">Type de section</label>
                <select value={formData.type} onChange={e => setFormData({...formData, type: e.target.value})} className="w-full bg-slate-50 border border-slate-200 px-4 py-3.5 rounded-xl text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all appearance-none">
                  <option value="feature">Caractéristique (Barre sous héros)</option>
                  <option value="info">Info Point (Sous image de Shiva)</option>
                  <option value="faq">FAQ (Questions/Réponses)</option>
                  <option value="itinerary">Itinéraire</option>
                  <option value="bottom_feature">Point Bannière Bas de page</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">Titre / Question</label>
                <input type="text" required value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} className="w-full bg-slate-50 border border-slate-200 px-4 py-3.5 rounded-xl text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all" placeholder="Titre principal..." />
              </div>

              {formData.type !== 'feature' && (
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">Description / Réponse</label>
                  <textarea required value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})} className="w-full bg-slate-50 border border-slate-200 px-4 py-3.5 rounded-xl text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none min-h-[100px] resize-none transition-all" placeholder="Texte de description..." />
                </div>
              )}

              {(formData.type === 'itinerary' || formData.type === 'feature' || formData.type === 'info' || formData.type === 'faq' || formData.type === 'bottom_feature') && (
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">Image URL / Nom d'icône</label>
                  <input type="text" value={formData.image} onChange={e => setFormData({...formData, image: e.target.value})} className="w-full bg-slate-50 border border-slate-200 px-4 py-3.5 rounded-xl text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all" placeholder="URL Image ou Icône" />
                </div>
              )}

              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">Ordre d'affichage</label>
                <input type="number" value={formData.display_order} onChange={e => setFormData({...formData, display_order: e.target.value})} className="w-full bg-slate-50 border border-slate-200 px-4 py-3.5 rounded-xl text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all" />
              </div>

              <div className="flex flex-col gap-3 pt-4">
                <button type="submit" className="w-full bg-indigo-600 text-white py-3.5 rounded-xl text-[11px] font-bold uppercase tracking-widest shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5">
                  {isEditing ? 'Mettre à jour' : 'Ajouter'}
                </button>
                {isEditing && (
                  <button type="button" onClick={resetForm} className="w-full text-slate-400 hover:text-slate-600 py-2 text-[11px] font-bold uppercase tracking-widest transition-colors">
                    Annuler
                  </button>
                )}
              </div>
            </form>
          </div>

          <div className="xl:col-span-2 bg-white shadow-sm border border-slate-200 rounded-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm whitespace-nowrap md:whitespace-normal">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="p-5 font-bold text-[11px] uppercase tracking-wider text-slate-400 border-b border-slate-200">Type</th>
                    <th className="p-5 font-bold text-[11px] uppercase tracking-wider text-slate-400 border-b border-slate-200">Titre</th>
                    <th className="p-5 font-bold text-[11px] uppercase tracking-wider text-slate-400 border-b border-slate-200">Ordre</th>
                    <th className="p-5 font-bold text-[11px] uppercase tracking-wider text-slate-400 border-b border-slate-200 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {elements.map(item => (
                    <tr key={item.id} className="hover:bg-slate-50 transition-colors">
                      <td className="p-5">
                        <span className="px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-600 border border-slate-300">
                          {item.type}
                        </span>
                      </td>
                      <td className="p-5 font-serif text-base text-slate-800">{item.title}</td>
                      <td className="p-5 text-sm font-medium text-slate-600">{item.display_order}</td>
                      <td className="p-5 text-right space-x-3">
                        <button onClick={() => editItem(item)} className="text-blue-600 hover:text-blue-800 font-medium text-xs transition-colors">Modif.</button>
                        <button onClick={() => handleDelete(item.id)} className="text-red-500 hover:text-red-700 font-medium text-xs transition-colors">Suppr.</button>
                      </td>
                    </tr>
                  ))}
                  {elements.length === 0 && (
                    <tr><td colSpan="4" className="p-12 text-center text-slate-400 italic font-serif">Aucun élément trouvé.</td></tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default YogaManager;
