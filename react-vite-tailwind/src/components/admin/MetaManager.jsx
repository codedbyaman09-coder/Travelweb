import React, { useState, useEffect } from 'react';
import { apiList, apiRequest } from '../../lib/api';

const MetaManager = () => {
  const [metaList, setMetaList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [message, setMessage] = useState({ text: '', type: '' });
  const [editId, setEditId] = useState(null);
  const [activeTab, setActiveTab] = useState('basic');

  const API_PATH = '/meta';

  const initialForm = {
    pageName: '', pageUrl: '', pageSlug: '', metaTitle: '', metaDescription: '', metaKeywords: '',
    canonicalUrl: '', robotsTag: 'index, follow', ogTitle: '', ogDescription: '', ogImage: '', ogUrl: '',
    twitterTitle: '', twitterDescription: '', twitterImage: '', twitterCardType: 'summary_large_image', 
    schemaMarkup: '', status: 'active'
  };
  const [formData, setFormData] = useState(initialForm);

  const fetchMetaList = async () => {
    try {
      setLoading(true);
      const rows = await apiList(API_PATH);
      setMetaList(rows);
    } catch (err) {
      console.error(err);
      showMessage('Erreur de chargement des métadonnées', 'error');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMetaList();
  }, []);

  const showMessage = (text, type = 'success') => {
    setMessage({ text, type });
    setTimeout(() => setMessage({ text: '', type: '' }), 4000);
  };

  const generateSlug = (text) => {
    return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
  };

  const handleNameChange = (val) => {
    setFormData(prev => ({ ...prev, pageName: val }));
  };

  const autoGenerateSlug = () => {
    setFormData(prev => ({ ...prev, pageSlug: generateSlug(prev.pageName || prev.pageUrl) }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.pageSlug || !/^[a-z0-9-]+$/.test(formData.pageSlug)) {
      return showMessage("SEO slug est invalide (lettres minuscules, chiffres, tirets uniquement).", "error");
    }

    const method = isEditing ? 'PUT' : 'POST';
    const url = isEditing ? `${API_PATH}/${editId}` : API_PATH;

    try {
      const data = await apiRequest(url, {
        method,
        body: JSON.stringify(formData)
      });
      if (data.success) {
        showMessage(isEditing ? 'Meta mis à jour avec succès!' : 'Meta créé avec succès!');
        setFormData(initialForm);
        setIsEditing(false);
        setEditId(null);
        setActiveTab('basic');
        fetchMetaList();
      } else {
        showMessage(data.message || 'Erreur lors de la sauvegarde.', 'error');
      }
    } catch (err) {
      showMessage('Erreur de réseau.', 'error');
    }
  };

  const handleEdit = (m) => {
    setFormData({
      pageName: m.pageName || '', pageUrl: m.pageUrl || '', pageSlug: m.pageSlug || '', 
      metaTitle: m.metaTitle || '', metaDescription: m.metaDescription || '', metaKeywords: m.metaKeywords || '',
      canonicalUrl: m.canonicalUrl || '', robotsTag: m.robotsTag || 'index, follow', 
      ogTitle: m.ogTitle || '', ogDescription: m.ogDescription || '', ogImage: m.ogImage || '', ogUrl: m.ogUrl || '',
      twitterTitle: m.twitterTitle || '', twitterDescription: m.twitterDescription || '', twitterImage: m.twitterImage || '', twitterCardType: m.twitterCardType || 'summary_large_image', 
      schemaMarkup: m.schemaMarkup || '', status: m.status || 'active'
    });
    setEditId(m.id);
    setIsEditing(true);
    setActiveTab('basic');
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Êtes-vous sûr de vouloir supprimer ces métadonnées ?")) return;
    try {
      await apiRequest(`${API_PATH}/${id}`, { method: 'DELETE' });
      fetchMetaList();
      showMessage('Meta supprimé avec succès!');
    } catch (err) {
      showMessage('Erreur lors de la suppression', 'error');
    }
  };

  return (
    <div className="animate-fadeIn">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 border-b border-slate-200 pb-5 gap-4">
        <div>
          <span className="text-indigo-600 text-[10px] tracking-[0.3em] font-bold uppercase mb-1 block">
            SEO Global
          </span>
          <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-2">Gestion Meta & SEO</h2>
        </div>
        <div className="flex space-x-2">
          <button 
            onClick={() => {setIsEditing(false); setFormData(initialForm); setActiveTab('basic');}} 
            className="px-6 py-2.5 rounded-full text-[11px] font-bold uppercase tracking-wider transition-all duration-300 bg-indigo-600 text-white shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          >
            + Ajouter Meta
          </button>
        </div>
      </div>

      {message.text && (
        <div className={`mb-6 p-4 text-sm rounded-xl border flex items-center gap-3 ${message.type === 'error' ? 'bg-red-50 text-red-700 border-red-100' : 'bg-emerald-50 text-emerald-700 border-emerald-100'}`}>
          <span className="text-xl">{message.type === 'error' ? '❌' : '✨'}</span> {message.text}
        </div>
      )}

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        <div className="xl:col-span-1 bg-white shadow-sm border border-slate-200 rounded-xl overflow-hidden h-fit">
          <div className="p-6 border-b border-slate-100 bg-slate-50 flex justify-between items-center">
            <h3 className="text-lg font-semibold text-slate-800">{isEditing ? 'Modifier SEO' : 'Nouveau SEO'}</h3>
            {isEditing && <span className="bg-indigo-100 text-indigo-700 text-[10px] font-bold px-2 py-1 rounded">ÉDITION</span>}
          </div>

          <div className="flex border-b border-slate-200 text-[11px] font-bold uppercase tracking-wider overflow-x-auto custom-scrollbar">
            {['basic', 'og', 'twitter', 'advanced'].map(tab => (
              <button 
                key={tab} type="button"
                className={`px-4 py-3 whitespace-nowrap transition-colors ${activeTab === tab ? 'text-indigo-600 border-b-2 border-indigo-600 bg-indigo-50/50' : 'text-slate-400 hover:bg-slate-50'}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="p-6 space-y-5 text-sm max-h-[65vh] overflow-y-auto custom-scrollbar bg-white">
            
            <div className={activeTab === 'basic' ? 'block space-y-5' : 'hidden'}>
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">Page Name *</label>
                <input required type="text" value={formData.pageName} onChange={e => handleNameChange(e.target.value)} className="w-full bg-slate-50 border border-slate-200 px-4 py-3 rounded-xl text-sm outline-none focus:border-indigo-500" placeholder="Ex: Accueil" />
              </div>
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">Page URL *</label>
                <input required type="text" value={formData.pageUrl} onChange={e => setFormData({...formData, pageUrl: e.target.value})} className="w-full bg-slate-50 border border-slate-200 px-4 py-3 rounded-xl text-sm outline-none focus:border-indigo-500 font-mono" placeholder="Ex: / ou /about" />
              </div>
              <div>
                <div className="flex justify-between items-end mb-2">
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400">SEO Slug *</label>
                  <button type="button" onClick={autoGenerateSlug} className="text-[10px] text-indigo-600 hover:underline">Générer Auto</button>
                </div>
                <input required type="text" value={formData.pageSlug} onChange={e => setFormData({...formData, pageSlug: e.target.value})} className="w-full bg-slate-50 border border-slate-200 px-4 py-3 rounded-xl text-sm outline-none focus:border-indigo-500 font-mono" />
              </div>
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2 flex justify-between">
                  <span>Meta Title</span>
                  <span className={formData.metaTitle?.length > 60 ? 'text-red-500' : 'text-slate-400'}>{formData.metaTitle?.length || 0}/60</span>
                </label>
                <input type="text" value={formData.metaTitle} onChange={e => setFormData({...formData, metaTitle: e.target.value})} className="w-full bg-slate-50 border border-slate-200 px-4 py-3 rounded-xl text-sm outline-none focus:border-indigo-500" />
              </div>
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2 flex justify-between">
                  <span>Meta Description</span>
                  <span className={formData.metaDescription?.length > 160 ? 'text-red-500' : 'text-slate-400'}>{formData.metaDescription?.length || 0}/160</span>
                </label>
                <textarea value={formData.metaDescription} onChange={e => setFormData({...formData, metaDescription: e.target.value})} className="w-full bg-slate-50 border border-slate-200 px-4 py-3 rounded-xl text-sm outline-none focus:border-indigo-500 h-24 resize-none" />
              </div>
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">Meta Keywords (séparés par virgules)</label>
                <input type="text" value={formData.metaKeywords} onChange={e => setFormData({...formData, metaKeywords: e.target.value})} className="w-full bg-slate-50 border border-slate-200 px-4 py-3 rounded-xl text-sm outline-none focus:border-indigo-500" />
              </div>
            </div>

            <div className={activeTab === 'og' ? 'block space-y-5' : 'hidden'}>
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">OG Title</label>
                <input type="text" value={formData.ogTitle} onChange={e => setFormData({...formData, ogTitle: e.target.value})} className="w-full bg-slate-50 border border-slate-200 px-4 py-3 rounded-xl text-sm outline-none focus:border-indigo-500" />
              </div>
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">OG Description</label>
                <textarea value={formData.ogDescription} onChange={e => setFormData({...formData, ogDescription: e.target.value})} className="w-full bg-slate-50 border border-slate-200 px-4 py-3 rounded-xl text-sm outline-none focus:border-indigo-500 h-24 resize-none" />
              </div>
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">OG Image URL</label>
                <input type="text" value={formData.ogImage} onChange={e => setFormData({...formData, ogImage: e.target.value})} className="w-full bg-slate-50 border border-slate-200 px-4 py-3 rounded-xl text-sm outline-none focus:border-indigo-500" />
              </div>
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">OG URL</label>
                <input type="text" value={formData.ogUrl} onChange={e => setFormData({...formData, ogUrl: e.target.value})} className="w-full bg-slate-50 border border-slate-200 px-4 py-3 rounded-xl text-sm outline-none focus:border-indigo-500" />
              </div>
            </div>

            <div className={activeTab === 'twitter' ? 'block space-y-5' : 'hidden'}>
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">Twitter Card Type</label>
                <select value={formData.twitterCardType} onChange={e => setFormData({...formData, twitterCardType: e.target.value})} className="w-full bg-slate-50 border border-slate-200 px-4 py-3 rounded-xl text-sm outline-none focus:border-indigo-500">
                  <option value="summary">Summary</option>
                  <option value="summary_large_image">Summary Large Image</option>
                </select>
              </div>
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">Twitter Title</label>
                <input type="text" value={formData.twitterTitle} onChange={e => setFormData({...formData, twitterTitle: e.target.value})} className="w-full bg-slate-50 border border-slate-200 px-4 py-3 rounded-xl text-sm outline-none focus:border-indigo-500" />
              </div>
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">Twitter Description</label>
                <textarea value={formData.twitterDescription} onChange={e => setFormData({...formData, twitterDescription: e.target.value})} className="w-full bg-slate-50 border border-slate-200 px-4 py-3 rounded-xl text-sm outline-none focus:border-indigo-500 h-24 resize-none" />
              </div>
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">Twitter Image URL</label>
                <input type="text" value={formData.twitterImage} onChange={e => setFormData({...formData, twitterImage: e.target.value})} className="w-full bg-slate-50 border border-slate-200 px-4 py-3 rounded-xl text-sm outline-none focus:border-indigo-500" />
              </div>
            </div>

            <div className={activeTab === 'advanced' ? 'block space-y-5' : 'hidden'}>
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">Canonical URL</label>
                <input type="text" value={formData.canonicalUrl} onChange={e => setFormData({...formData, canonicalUrl: e.target.value})} className="w-full bg-slate-50 border border-slate-200 px-4 py-3 rounded-xl text-sm outline-none focus:border-indigo-500 font-mono" />
              </div>
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">Robots Tag</label>
                <input type="text" value={formData.robotsTag} onChange={e => setFormData({...formData, robotsTag: e.target.value})} className="w-full bg-slate-50 border border-slate-200 px-4 py-3 rounded-xl text-sm outline-none focus:border-indigo-500" placeholder="index, follow" />
              </div>
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">Schema.org JSON-LD</label>
                <textarea value={formData.schemaMarkup} onChange={e => setFormData({...formData, schemaMarkup: e.target.value})} className="w-full bg-slate-50 border border-slate-200 px-4 py-3 rounded-xl text-xs font-mono outline-none focus:border-indigo-500 h-32 resize-none" placeholder='{ "@context": "https://schema.org", ... }' />
              </div>
              <div>
                <label className="flex items-center gap-3">
                  <input type="checkbox" checked={formData.status === 'active'} onChange={e => setFormData({...formData, status: e.target.checked ? 'active' : 'inactive'})} className="w-4 h-4 text-indigo-600 rounded" />
                  <span className="text-sm font-semibold text-slate-700">SEO Actif</span>
                </label>
              </div>
            </div>
            
            <div className="pt-4 border-t border-slate-100 mt-4">
              <button type="submit" className="w-full bg-indigo-600 text-white py-3.5 rounded-xl text-[11px] font-bold uppercase tracking-widest shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5">
                {isEditing ? 'Mettre à jour SEO' : 'Enregistrer SEO'}
              </button>
            </div>
          </form>
        </div>

        <div className="xl:col-span-2 bg-white shadow-sm border border-slate-200 rounded-xl overflow-hidden">
          {loading ? <div className="p-12 text-center text-slate-400 italic">Chargement des données...</div> : (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm whitespace-nowrap">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="p-4 font-bold text-[11px] uppercase tracking-wider text-slate-400 border-b">Page Name / URL</th>
                    <th className="p-4 font-bold text-[11px] uppercase tracking-wider text-slate-400 border-b">Meta Title</th>
                    <th className="p-4 font-bold text-[11px] uppercase tracking-wider text-slate-400 border-b">Status</th>
                    <th className="p-4 font-bold text-[11px] uppercase tracking-wider text-slate-400 border-b text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {metaList.map(m => (
                    <tr key={m.id} className="hover:bg-slate-50 transition-colors">
                      <td className="p-4">
                        <div className="font-semibold text-slate-800">{m.pageName}</div>
                        <div className="text-[11px] text-slate-400 font-mono mt-0.5">{m.pageUrl}</div>
                        <div className="text-[10px] text-indigo-400 font-mono">{m.pageSlug}</div>
                      </td>
                      <td className="p-4 text-xs text-slate-600 max-w-[200px] truncate" title={m.metaTitle}>{m.metaTitle || '-'}</td>
                      <td className="p-4">
                        <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase ${m.status === 'active' ? 'bg-emerald-100 text-emerald-700' : 'bg-red-100 text-red-700'}`}>
                          {m.status}
                        </span>
                      </td>
                      <td className="p-4 text-right space-x-3">
                        <button onClick={() => handleEdit(m)} className="text-blue-600 hover:text-blue-800 font-medium text-xs">Éditer</button>
                        <button onClick={() => handleDelete(m.id)} className="text-red-500 hover:text-red-700 font-medium text-xs">Suppr.</button>
                      </td>
                    </tr>
                  ))}
                  {metaList.length === 0 && <tr><td colSpan="4" className="p-12 text-center text-slate-400 italic">Aucun SEO défini</td></tr>}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MetaManager;
