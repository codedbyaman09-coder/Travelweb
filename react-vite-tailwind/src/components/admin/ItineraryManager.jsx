import React, { useState, useEffect } from 'react';
import DestinationContentManager from './DestinationContentManager';
import { apiList, apiRequest } from '../../lib/api';

const ItineraryManager = () => {
  const [itineraries, setItineraries] = useState([]);
  const [editingContent, setEditingContent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({ title: '', slug: '', days: 1, price: 0, status: 'active' });
  const [editId, setEditId] = useState(null);
  const [message, setMessage] = useState('');

  const API_PATH = '/itineraries';

  const fetchItineraries = async () => {
    setLoading(true);
    try {
      const rows = await apiList(`${API_PATH}?includeInactive=true`);
      setItineraries(rows);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchItineraries();
  }, []);

  const handleTitleChange = (val) => {
    setFormData(prev => ({
      ...prev,
      title: val,
      slug: val.toLowerCase().replace(/[^a-z0-9 -]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-')
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const method = isEditing ? 'PUT' : 'POST';
    const url = isEditing ? `${API_PATH}/${editId}` : API_PATH;

    try {
      const data = await apiRequest(url, {
        method,
        body: JSON.stringify(formData)
      });
      if (data.success) {
        setMessage(isEditing ? 'Itinéraire modifié avec succès!' : 'Itinéraire créé avec succès!');
        setFormData({ title: '', slug: '', days: 1, price: 0, status: 'active' });
        setIsEditing(false);
        setEditId(null);
        fetchItineraries();
        setTimeout(() => setMessage(''), 2000);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleEdit = (itinerary) => {
    setFormData({ title: itinerary.title, slug: itinerary.slug, days: itinerary.days, price: itinerary.price || 0, status: itinerary.status });
    setEditId(itinerary.id);
    setIsEditing(true);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Supprimer cet itinéraire ?")) return;
    try {
      await apiRequest(`${API_PATH}/${id}`, { method: 'DELETE' });
      fetchItineraries();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="animate-fadeIn">
      <div className="flex justify-between items-center mb-8 border-b border-slate-200 pb-5">
        <div>
          <span className="text-indigo-600 text-[10px] tracking-[0.3em] font-bold uppercase mb-1 block">
            Circuits & Voyages
          </span>
          <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-2">Gestion des Itinéraires</h2>
        </div>
      </div>

      {message && <div className="mb-6 p-4 bg-emerald-50 text-emerald-700 text-sm rounded-xl border border-emerald-100 flex items-center gap-3"><span className="text-xl">✨</span> {message}</div>}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-1 bg-white p-8 shadow-sm border border-slate-200 rounded-xl h-fit">
          <h3 className="text-lg font-semibold text-slate-800 mb-6">{isEditing ? 'Modifier Itinéraire' : 'Ajouter Itinéraire'}</h3>
          <form onSubmit={handleSubmit} className="space-y-5 text-sm">
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">Titre de l'itinéraire</label>
              <input required type="text" value={formData.title} onChange={e => handleTitleChange(e.target.value)} className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all outline-none" placeholder="Ex: Découverte du Gange" />
            </div>
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">Slug URL</label>
              <input required type="text" value={formData.slug} onChange={e => setFormData({ ...formData, slug: e.target.value })} className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all outline-none font-mono text-xs" />
            </div>
            <div className="flex gap-4">
              <div className="w-1/2">
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">Jours</label>
                <input required type="number" min="1" value={formData.days} onChange={e => setFormData({ ...formData, days: parseInt(e.target.value) })} className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all outline-none" />
              </div>
              <div className="w-1/2">
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">Prix (€)</label>
                <input type="number" value={formData.price} onChange={e => setFormData({ ...formData, price: parseFloat(e.target.value) })} className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all outline-none" />
              </div>
            </div>
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">Statut</label>
              <select value={formData.status} onChange={e => setFormData({ ...formData, status: e.target.value })} className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all outline-none appearance-none">
                <option value="active">Actif</option>
                <option value="inactive">Inactif</option>
              </select>
            </div>
            <button type="submit" className="w-full bg-indigo-600 text-white py-3.5 rounded-xl text-[11px] font-bold uppercase tracking-widest shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5">
              {isEditing ? 'Mettre à jour' : 'Enregistrer'}
            </button>
            {isEditing && (
              <button type="button" onClick={() => { setIsEditing(false); setFormData({ title: '', slug: '', days: 1, price: 0, status: 'active' }); }} className="w-full mt-3 text-slate-400 hover:text-slate-600 py-2 text-[11px] font-bold uppercase tracking-widest transition-colors">Annuler</button>
            )}
          </form>
        </div>

        <div className="md:col-span-2 bg-white shadow-sm border border-slate-200 rounded-xl overflow-hidden">
          {loading ? <div className="p-12 text-center text-slate-400 italic font-serif">Chargement...</div> : (
            <div className="overflow-x-auto">
            <table className="w-full text-left text-sm whitespace-nowrap md:whitespace-normal">
              <thead className="bg-slate-50">
                <tr>
                  <th className="p-5 font-bold text-[11px] uppercase tracking-wider text-slate-400 border-b border-slate-200">Itinéraire</th>
                  <th className="p-5 font-bold text-[11px] uppercase tracking-wider text-slate-400 border-b border-slate-200">Durée</th>
                  <th className="p-5 font-bold text-[11px] uppercase tracking-wider text-slate-400 border-b border-slate-200">Prix</th>
                  <th className="p-5 font-bold text-[11px] uppercase tracking-wider text-slate-400 border-b border-slate-200">Statut</th>
                  <th className="p-5 font-bold text-[11px] uppercase tracking-wider text-slate-400 border-b border-slate-200 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {itineraries.map(itin => (
                  <tr key={itin.id} className="hover:bg-slate-50 transition-colors">
                    <td className="p-5">
                      <div className="font-serif text-base text-slate-800">{itin.title}</div>
                      <div className="text-[10px] text-slate-400 mt-1 font-mono">/{itin.slug}</div>
                    </td>
                    <td className="p-5 text-sm font-medium text-slate-600">{itin.days} Jours</td>
                    <td className="p-5 text-sm font-bold text-slate-800">{itin.price ? `${itin.price} €` : '-'}</td>
                    <td className="p-5">
                      <span className={`px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${itin.status === 'active' ? 'bg-emerald-50 text-emerald-600 border border-emerald-100' : 'bg-slate-100 text-slate-600 border border-slate-300'}`}>
                        {itin.status === 'active' ? 'Actif' : 'Inactif'}
                      </span>
                    </td>
                    <td className="p-5 text-right space-x-3">
                      <button onClick={() => setEditingContent(itin)} className="text-indigo-600 bg-indigo-50 hover:bg-indigo-50 border border-indigo-100 font-bold transition-colors text-[10px] uppercase tracking-wider px-3 py-1.5 rounded-xl mr-2">Contenu Page</button>
                      <button onClick={() => handleEdit(itin)} className="text-blue-600 hover:text-blue-800 font-medium text-xs transition-colors">Modif.</button>
                      <button onClick={() => handleDelete(itin.id)} className="text-red-500 hover:text-red-700 font-medium text-xs transition-colors">Suppr.</button>
                    </td>
                  </tr>
                ))}
                {itineraries.length === 0 && <tr><td colSpan="5" className="p-12 text-center text-slate-400 italic font-serif">Aucun itinéraire trouvé</td></tr>}
              </tbody>
            </table>
            </div>
          )}
        </div>
      </div>
      {editingContent && (
        <DestinationContentManager
          destination={editingContent}
          type="itinerary"
          onClose={() => {
            setEditingContent(null);
            fetchItineraries();
          }}
        />
      )}
    </div>
  );
};

export default ItineraryManager;
