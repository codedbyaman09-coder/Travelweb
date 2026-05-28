import React, { useEffect, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';
import { Image, Pencil, Plus, Trash2, Upload, Video } from 'lucide-react';
import { apiRequest } from '../../lib/api';

const emptyForm = {
  id: '',
  type: '',
  title: '',
  subtitle: '',
  description: '',
  media_url: '',
  video_url: '',
  link_url: '',
  button_text: '',
  display_order: 0,
  status: 'active',
  extra_json: ''
};

const GenericContentManager = ({
  type,
  title,
  eyebrow = 'Contenu du site',
  description = 'Manage website content',
  mediaLabel = 'Image URL',
  subtitleLabel = 'Sous-titre',
  videoMode = false
}) => {
  const [items, setItems] = useState([]);
  const [formData, setFormData] = useState({ ...emptyForm, type });
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const isEditing = Boolean(formData.id);
  const Icon = videoMode ? Video : Image;

  const sortedItems = useMemo(
    () => [...items].sort((a, b) => (a.display_order || 0) - (b.display_order || 0)),
    [items]
  );

  const fetchItems = async () => {
    setLoading(true);
    setError('');
    try {
      const data = await apiRequest(`/content?type=${type}&includeInactive=true`);
      setItems(data.data || []);
    } catch (err) {
      setError(err.message || 'Unable to load content.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchItems();
  }, [type]);

  const resetForm = () => {
    setFormData({ ...emptyForm, type });
    setError('');
    setShowForm(true);
  };

  const handleEdit = (item) => {
    setShowForm(true);
    setFormData({
      ...emptyForm,
      ...item,
      type,
      extra_json: item.extra_json || ''
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleUpload = async (event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const payload = new FormData();
    payload.append('files', file);
    setUploading(true);
    setError('');

    try {
      const data = await apiRequest('/media/upload', {
        method: 'POST',
        body: payload
      });
      const url = data.urls?.[0] || '';
      setFormData((prev) => ({ ...prev, media_url: url }));
    } catch (err) {
      setError(err.message || 'Upload failed.');
    } finally {
      setUploading(false);
      event.target.value = '';
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSaving(true);
    setError('');
    setMessage('');

    try {
      const path = isEditing ? `/content/${formData.id}` : '/content';
      const method = isEditing ? 'PUT' : 'POST';
      const data = await apiRequest(path, {
        method,
        body: JSON.stringify({ ...formData, type })
      });
      setMessage(data.message || 'Saved successfully.');
      resetForm();
      fetchItems();
      setTimeout(() => setMessage(''), 2500);
    } catch (err) {
      setError(err.message || 'Unable to save content.');
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Supprimer cet élément ?')) return;
    setError('');
    try {
      await apiRequest(`/content/${id}`, { method: 'DELETE' });
      fetchItems();
    } catch (err) {
      setError(err.message || 'Unable to delete content.');
    }
  };

  return (
    <div className="animate-fadeIn">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 border-b border-slate-200 pb-5 gap-4">
        <div>
          <span className="text-indigo-600 text-[10px] tracking-[0.3em] font-bold uppercase mb-1 block">
            {eyebrow}
          </span>
          <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-2">{title}</h2>
          <p className="text-sm text-slate-500 mt-2">{description}</p>
        </div>
        <button
          type="button"
          onClick={resetForm}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 text-white text-[11px] uppercase tracking-wider font-bold shadow-sm hover:bg-indigo-700 transition-colors"
        >
          <Plus size={15} /> Nouveau
        </button>
      </div>

      {message && <div className="mb-6 p-4 bg-emerald-50 text-emerald-700 text-sm rounded-xl border border-emerald-100">{message}</div>}
      {error && <div className="mb-6 p-4 bg-red-50 text-red-700 text-sm rounded-xl border border-red-100">{error}</div>}

      <div>
        {showForm && createPortal(
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-sm transition-opacity animate-fadeIn">
            <div className="bg-white p-6 sm:p-8 rounded-2xl w-full max-w-xl shadow-2xl relative max-h-[90vh] overflow-y-auto custom-scrollbar">
              <div className="flex justify-between items-center mb-6 pb-4 border-b border-slate-100">
                <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
                  {isEditing ? 'Modifier l\'élément' : 'Ajouter un élément'}
                </h3>
                <button type="button" onClick={() => setShowForm(false)} className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 text-slate-500 hover:bg-red-50 hover:text-red-500 transition-colors font-bold">
                  ✕
                </button>
              </div>
              <form onSubmit={handleSubmit} className="space-y-5 text-sm">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">Titre *</label>
                  <input required value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} className="w-full bg-slate-50 text-slate-900 border border-slate-200 px-4 py-3.5 rounded-xl focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">{subtitleLabel}</label>
                  <input value={formData.subtitle || ''} onChange={(e) => setFormData({ ...formData, subtitle: e.target.value })} className="w-full bg-slate-50 text-slate-900 border border-slate-200 px-4 py-3.5 rounded-xl focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">Description / Text</label>
                  <textarea value={formData.description || ''} onChange={(e) => setFormData({ ...formData, description: e.target.value })} className="w-full bg-slate-50 text-slate-900 border border-slate-200 px-4 py-3.5 rounded-xl focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none h-28 resize-none transition-all" />
                </div>
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">{mediaLabel}</label>
                  <div className="flex gap-2">
                    <input value={formData.media_url || ''} onChange={(e) => setFormData({ ...formData, media_url: e.target.value })} className="flex-1 bg-slate-50 text-slate-900 border border-slate-200 px-4 py-3.5 rounded-xl focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all" />
                    <label className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-500 hover:text-indigo-600 cursor-pointer transition-colors" title="Upload file">
                      <Upload size={17} />
                      <input type="file" className="hidden" accept="image/*,video/*" onChange={handleUpload} />
                    </label>
                  </div>
                  {uploading && <p className="text-[11px] text-indigo-500 font-bold mt-2 animate-pulse">Upload en cours...</p>}
                </div>
                {videoMode ? (
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">Video URL / Embed URL</label>
                    <input value={formData.video_url || ''} onChange={(e) => setFormData({ ...formData, video_url: e.target.value })} className="w-full bg-slate-50 text-slate-900 border border-slate-200 px-4 py-3.5 rounded-xl focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all" />
                  </div>
                ) : (
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">Lien (URL) / Link</label>
                    <input value={formData.link_url || ''} onChange={(e) => setFormData({ ...formData, link_url: e.target.value })} className="w-full bg-slate-50 text-slate-900 border border-slate-200 px-4 py-3.5 rounded-xl focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all" placeholder="/votre-lien" />
                  </div>
                )}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">Ordre</label>
                    <input type="number" value={formData.display_order || 0} onChange={(e) => setFormData({ ...formData, display_order: e.target.value })} className="w-full bg-slate-50 text-slate-900 border border-slate-200 px-4 py-3.5 rounded-xl focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all" />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">Statut</label>
                    <select value={formData.status || 'active'} onChange={(e) => setFormData({ ...formData, status: e.target.value })} className="w-full bg-slate-50 text-slate-900 border border-slate-200 px-4 py-3.5 rounded-xl focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all">
                      <option value="active">Actif</option>
                      <option value="inactive">Inactif</option>
                    </select>
                  </div>
                </div>
                <div className="pt-4 border-t border-slate-100 flex gap-3">
                  <button type="button" onClick={() => setShowForm(false)} className="flex-1 bg-slate-100 text-slate-600 py-3.5 rounded-xl text-[11px] font-bold uppercase tracking-widest hover:bg-slate-200 transition-all">
                    Annuler
                  </button>
                  <button type="submit" disabled={saving || uploading} className="flex-1 bg-indigo-600 text-white py-3.5 rounded-xl text-[11px] font-bold uppercase tracking-widest shadow-md hover:shadow-lg transition-all disabled:opacity-50">
                    {saving ? 'Sauvegarde...' : isEditing ? 'Mettre à jour' : 'Enregistrer'}
                  </button>
                </div>
              </form>
            </div>
          </div>,
          document.body
        )}

        <div className="bg-white shadow-sm border border-slate-200 rounded-xl overflow-hidden">
          {loading ? (
            <div className="p-12 text-center text-slate-400 italic font-serif">Chargement...</div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm whitespace-nowrap md:whitespace-normal">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="p-5 font-bold text-[11px] uppercase tracking-wider text-slate-400 border-b border-slate-200">Contenu</th>
                    <th className="p-5 font-bold text-[11px] uppercase tracking-wider text-slate-400 border-b border-slate-200">Statut</th>
                    <th className="p-5 font-bold text-[11px] uppercase tracking-wider text-slate-400 border-b border-slate-200 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {sortedItems.map((item) => (
                    <tr key={item.id} className="hover:bg-slate-50 transition-colors">
                      <td className="p-5">
                        <div className="flex items-center gap-4">
                          <div className="w-14 h-14 bg-slate-50 border border-slate-200 rounded-xl overflow-hidden flex items-center justify-center text-slate-400 shrink-0">
                            {(() => {
                              let thumb = item.media_url;
                              const ytMatch = (item.media_url || item.video_url || '').match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/i);
                              if (ytMatch && ytMatch[1]) {
                                thumb = `https://img.youtube.com/vi/${ytMatch[1]}/hqdefault.jpg`;
                              }
                              return thumb ? <img src={thumb} alt={item.title} className="w-full h-full object-cover" /> : <Icon size={20} />;
                            })()}
                          </div>
                          <div>
                            <div className="font-serif text-base text-slate-800">{item.title}</div>
                            <div className="text-[11px] text-slate-500 line-clamp-1 max-w-[340px] mt-1">{item.subtitle || item.description || '-'}</div>
                          </div>
                        </div>
                      </td>
                      <td className="p-5">
                        <span className={`px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${item.status === 'active' ? 'bg-emerald-50 text-emerald-600 border border-emerald-100' : 'bg-slate-100 text-slate-600 border border-slate-300'}`}>
                          {item.status === 'active' ? 'Actif' : 'Inactif'}
                        </span>
                      </td>
                      <td className="p-5 text-right">
                        <button onClick={() => handleEdit(item)} className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 font-medium text-xs transition-colors mr-4">
                          <Pencil size={13} /> Modif.
                        </button>
                        <button onClick={() => handleDelete(item.id)} className="inline-flex items-center gap-1 text-red-500 hover:text-red-700 font-medium text-xs transition-colors">
                          <Trash2 size={13} /> Suppr.
                        </button>
                      </td>
                    </tr>
                  ))}
                  {sortedItems.length === 0 && <tr><td colSpan="3" className="p-12 text-center text-slate-400 italic font-serif">Aucun élément trouvé</td></tr>}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GenericContentManager;
