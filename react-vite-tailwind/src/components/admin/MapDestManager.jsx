import React, { useState, useEffect } from 'react';
import { apiList, apiRequest } from '../../lib/api';

const MapDestManager = () => {
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [message, setMessage] = useState('');
  
  const [formData, setFormData] = useState({
    id: '',
    type: 'map_dest',
    title: '',
    subtitle: '',
    description: '',
    media_url: '',
    display_order: 0
  });

  useEffect(() => {
    fetchDestinations();
  }, []);

  async function fetchDestinations() {
    try {
      const rows = await apiList('/content?type=map_dest');
      setDestinations(rows.sort((a, b) => a.display_order - b.display_order));
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = isEditing ? `/content/${formData.id}` : '/content';
      const method = isEditing ? 'PUT' : 'POST';
      
      const data = await apiRequest(url, {
        method,
        body: JSON.stringify(formData)
      });
      if (data.success) {
        setMessage(isEditing ? 'Destination modifiée !' : 'Destination ajoutée !');
        setFormData({ id: '', type: 'map_dest', title: '', subtitle: '', description: '', media_url: '', display_order: destinations.length + 1 });
        setIsEditing(false);
        fetchDestinations();
        setTimeout(() => setMessage(''), 3000);
      }
    } catch (error) {
      console.error(error);
      setMessage('Erreur lors de la sauvegarde');
    }
  };

  const handleEdit = (dest) => {
    setFormData(dest);
    setIsEditing(true);
    window.scrollTo(0, 0);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Supprimer cette destination ?')) {
      try {
        await apiRequest(`/content/${id}`, { method: 'DELETE' });
        setMessage('Supprimée !');
        fetchDestinations();
        setTimeout(() => setMessage(''), 3000);
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
        <h2 className="text-2xl font-serif text-slate-800 italic">Home - Carte Destinations</h2>
        <p className="text-slate-500 text-sm mt-2">Gérez les destinations (avec leurs liens et photos) affichées autour de la carte de l'Inde.</p>
        <p className="text-blue-500 text-xs mt-1">Note: La première moitié sera affichée à gauche de la carte, l'autre moitié à droite.</p>
      </div>

      {message && <div className="bg-green-50 text-green-700 p-4 rounded-xl text-sm font-medium">{message}</div>}

      <div className="flex flex-col gap-8">
        <div className="bg-white p-6 shadow-sm border border-slate-200 rounded-xl h-fit">
          <h3 className="text-xl font-serif mb-6 text-slate-800">{isEditing ? 'Modifier' : 'Ajouter'}</h3>
          <form onSubmit={handleSubmit} className="space-y-5 text-sm">
            <div>
              <label className="block text-[11px] font-bold uppercase text-slate-400 mb-2">Titre (ex: Rajasthan Royal)</label>
              <input required type="text" value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} className="w-full bg-slate-50 text-slate-900 p-3 rounded-xl border border-slate-300 outline-none focus:border-indigo-600" />
            </div>
            <div>
              <label className="block text-[11px] font-bold uppercase text-slate-400 mb-2">Lien / Slug (ex: rajasthan)</label>
              <input required type="text" value={formData.subtitle || ''} onChange={e => setFormData({...formData, subtitle: e.target.value})} className="w-full bg-slate-50 text-slate-900 p-3 rounded-xl border border-slate-300 outline-none focus:border-indigo-600" />
            </div>
            <div>
              <label className="block text-[11px] font-bold uppercase text-slate-400 mb-2">Texte (Description)</label>
              <textarea required value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})} className="w-full bg-slate-50 text-slate-900 p-3 rounded-xl border border-slate-300 outline-none focus:border-indigo-600 h-24 resize-none" />
            </div>
            <div>
              <label className="block text-[11px] font-bold uppercase text-slate-400 mb-2">Photo URL</label>
              <input required type="text" value={formData.media_url || ''} onChange={e => setFormData({...formData, media_url: e.target.value})} className="w-full bg-slate-50 text-slate-900 p-3 rounded-xl border border-slate-300 outline-none focus:border-indigo-600" />
            </div>
            <div>
              <label className="block text-[11px] font-bold uppercase text-slate-400 mb-2">Ordre d'affichage (1, 2, 3...)</label>
              <input required type="number" value={formData.display_order || 0} onChange={e => setFormData({...formData, display_order: parseInt(e.target.value)})} className="w-full bg-slate-50 text-slate-900 p-3 rounded-xl border border-slate-300 outline-none focus:border-indigo-600" />
            </div>
            <div className="flex gap-3">
              <button type="submit" className="flex-1 bg-indigo-600 text-white py-3 rounded-xl text-xs font-bold uppercase">{isEditing ? 'Mettre à jour' : 'Ajouter'}</button>
              {isEditing && <button type="button" onClick={() => { setIsEditing(false); setFormData({ id: '', type: 'map_dest', title: '', subtitle: '', description: '', media_url: '', display_order: destinations.length + 1 }); }} className="px-4 bg-slate-100 py-3 rounded-xl text-xs font-bold uppercase">Annuler</button>}
            </div>
          </form>
        </div>

        <div className="border-t border-slate-200 pt-8">
          {loading ? <div className="p-8 text-center">Chargement...</div> : (
            <div className="grid grid-cols-1 gap-4">
              {destinations.map((dest) => (
                <div key={dest.id} className="bg-white p-4 rounded-xl border border-slate-200 flex gap-4 items-start">
                  <div className="w-20 h-20 rounded-lg overflow-hidden shrink-0 bg-slate-100">
                    <img src={dest.media_url} alt={dest.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex flex-col flex-1 h-full">
                    <h4 className="font-bold text-sm text-slate-800">{dest.title}</h4>
                    <span className="text-xs text-indigo-600 mb-1">/{dest.subtitle}</span>
                    <p className="text-[11px] text-slate-500 line-clamp-2 mb-3 leading-relaxed">{dest.description}</p>
                    <div className="flex gap-2 mt-auto">
                      <button onClick={() => handleEdit(dest)} className="flex-1 text-xs font-bold text-blue-600 bg-blue-50 hover:bg-blue-100 px-3 py-1.5 rounded-lg transition-colors">Modif</button>
                      <button onClick={() => handleDelete(dest.id)} className="flex-1 text-xs font-bold text-red-600 bg-red-50 hover:bg-red-100 px-3 py-1.5 rounded-lg transition-colors">Suppr</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default MapDestManager;
