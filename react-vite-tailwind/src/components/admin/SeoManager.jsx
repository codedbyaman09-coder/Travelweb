import React, { useState, useEffect } from 'react';
import { apiList, apiRequest } from '../../lib/api';

const SeoManager = () => {
  const [pages, setPages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [message, setMessage] = useState('');
  const [editId, setEditId] = useState(null);
  const API_PATH = '/seo';

  const initialForm = {
    pageName: '', pageSlug: '', metaTitle: '', metaDescription: '', metaKeywords: '',
    canonicalUrl: '', ogTitle: '', ogDescription: '', ogImage: '',
    twitterTitle: '', twitterDescription: '', twitterImage: '',
    robots: 'index, follow', schemaMarkup: '', status: 'active'
  };
  const [formData, setFormData] = useState(initialForm);

  const fetchPages = async () => {
    try {
      const rows = await apiList(API_PATH);
      setPages(rows);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPages();
  }, []);

  const handleNameChange = (val) => {
    setFormData(prev => ({
      ...prev,
      pageName: val,
      pageSlug: val.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '')
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
        setMessage(isEditing ? 'SEO mis à jour !' : 'SEO créé !');
        setFormData(initialForm);
        setIsEditing(false);
        setEditId(null);
        fetchPages();
        setTimeout(() => setMessage(''), 3000);
      } else {
        setMessage(data.message || 'Erreur lors de la sauvegarde.');
      }
    } catch (err) {
      setMessage('Erreur réseau.');
    }
  };

  const handleEdit = (p) => {
    setFormData({
      pageName: p.pageName || '', pageSlug: p.pageSlug || '', metaTitle: p.metaTitle || '', 
      metaDescription: p.metaDescription || '', metaKeywords: p.metaKeywords || '',
      canonicalUrl: p.canonicalUrl || '', ogTitle: p.ogTitle || '', ogDescription: p.ogDescription || '', 
      ogImage: p.ogImage || '', twitterTitle: p.twitterTitle || '', twitterDescription: p.twitterDescription || '', 
      twitterImage: p.twitterImage || '', robots: p.robots || 'index, follow', schemaMarkup: p.schemaMarkup || '', 
      status: p.status || 'active'
    });
    setEditId(p.id);
    setIsEditing(true);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Supprimer ce SEO ?")) return;
    try {
      await apiRequest(`${API_PATH}/${id}`, { method: 'DELETE' });
      fetchPages();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="animate-fadeIn">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 border-b border-slate-200 pb-5 gap-4">
        <div>
          <span className="text-indigo-600 text-[10px] tracking-[0.3em] font-bold uppercase mb-1 block">
            Paramètres Avancés
          </span>
          <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-2">Gestion SEO & Pages</h2>
        </div>
        <div className="flex space-x-2">
          <button 
            onClick={() => {setIsEditing(false); setFormData(initialForm);}} 
            className="px-6 py-2.5 rounded-full text-[11px] font-bold uppercase tracking-wider transition-all duration-300 bg-indigo-600 text-white shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          >
            Ajouter une page
          </button>
        </div>
      </div>

      {message && <div className="mb-6 p-4 bg-emerald-50 text-emerald-700 text-sm rounded-xl border border-emerald-100 flex items-center gap-3"><span className="text-xl">✨</span> {message}</div>}

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        <div className="xl:col-span-1 bg-white p-8 shadow-sm border border-slate-200 rounded-xl h-fit">
          <h3 className="text-lg font-semibold text-slate-800 mb-6">{isEditing ? 'Modifier SEO' : 'Ajouter SEO'}</h3>
          <form onSubmit={handleSubmit} className="space-y-5 text-sm max-h-[70vh] overflow-y-auto pr-2 custom-scrollbar">
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">Nom de la page *</label>
              <input required type="text" value={formData.pageName} onChange={e => handleNameChange(e.target.value)} className="w-full bg-slate-50 border border-slate-200 px-4 py-3.5 rounded-xl text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all" placeholder="Ex: Accueil" />
            </div>
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">Slug *</label>
              <input required type="text" value={formData.pageSlug} onChange={e => setFormData({...formData, pageSlug: e.target.value})} className="w-full bg-slate-50 border border-slate-200 px-4 py-3.5 rounded-xl text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none font-mono transition-all" />
            </div>
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2 flex justify-between">
                <span>Meta Title</span>
                <span className={formData.metaTitle?.length > 60 ? 'text-red-500' : 'text-slate-400'}>{formData.metaTitle?.length || 0}/60</span>
              </label>
              <input type="text" maxLength={60} value={formData.metaTitle} onChange={e => setFormData({...formData, metaTitle: e.target.value})} className="w-full bg-slate-50 border border-slate-200 px-4 py-3.5 rounded-xl text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all" />
            </div>
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2 flex justify-between">
                <span>Meta Description</span>
                <span className={formData.metaDescription?.length > 160 ? 'text-red-500' : 'text-slate-400'}>{formData.metaDescription?.length || 0}/160</span>
              </label>
              <textarea maxLength={160} value={formData.metaDescription} onChange={e => setFormData({...formData, metaDescription: e.target.value})} className="w-full bg-slate-50 border border-slate-200 px-4 py-3.5 rounded-xl text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none h-24 resize-none transition-all" />
            </div>
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">Meta Keywords</label>
              <input type="text" value={formData.metaKeywords} onChange={e => setFormData({...formData, metaKeywords: e.target.value})} className="w-full bg-slate-50 border border-slate-200 px-4 py-3.5 rounded-xl text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all" placeholder="séparés par des virgules" />
            </div>
            
            <div className="border-t border-slate-200 pt-6 mt-6">
              <h4 className="font-bold text-[11px] uppercase tracking-wider text-indigo-600 mb-4">Open Graph (Réseaux Sociaux)</h4>
              <div className="space-y-4">
                <input type="text" placeholder="OG Title" value={formData.ogTitle} onChange={e => setFormData({...formData, ogTitle: e.target.value})} className="w-full bg-slate-50 border border-slate-200 px-4 py-3.5 rounded-xl text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all" />
                <textarea placeholder="OG Description" value={formData.ogDescription} onChange={e => setFormData({...formData, ogDescription: e.target.value})} className="w-full bg-slate-50 border border-slate-200 px-4 py-3.5 rounded-xl text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none h-20 resize-none transition-all" />
                <input type="text" placeholder="OG Image URL" value={formData.ogImage} onChange={e => setFormData({...formData, ogImage: e.target.value})} className="w-full bg-slate-50 border border-slate-200 px-4 py-3.5 rounded-xl text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all" />
              </div>
            </div>
            
            <div className="border-t border-slate-200 pt-6 mt-6">
              <h4 className="font-bold text-[11px] uppercase tracking-wider text-slate-500 mb-4">Avancé</h4>
              <div className="space-y-4">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">Robots</label>
                  <input type="text" placeholder="ex: index, follow" value={formData.robots} onChange={e => setFormData({...formData, robots: e.target.value})} className="w-full bg-slate-50 border border-slate-200 px-4 py-3.5 rounded-xl text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">Schema.org JSON-LD</label>
                  <textarea placeholder="{...}" value={formData.schemaMarkup} onChange={e => setFormData({...formData, schemaMarkup: e.target.value})} className="w-full bg-slate-50 border border-slate-200 px-4 py-3.5 rounded-xl text-xs focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none h-24 font-mono transition-all" />
                </div>
              </div>
            </div>
            
            <button type="submit" className="w-full bg-indigo-600 text-white py-3.5 rounded-xl text-[11px] font-bold uppercase tracking-widest shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 mt-4">
              {isEditing ? 'Mettre à jour' : 'Enregistrer'}
            </button>
          </form>
        </div>

        <div className="xl:col-span-2 bg-white shadow-sm border border-slate-200 rounded-xl overflow-hidden">
          {loading ? <div className="p-12 text-center text-slate-400 italic font-serif">Chargement...</div> : (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm whitespace-nowrap md:whitespace-normal">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="p-5 font-bold text-[11px] uppercase tracking-wider text-slate-400 border-b border-slate-200">Page / Slug</th>
                    <th className="p-5 font-bold text-[11px] uppercase tracking-wider text-slate-400 border-b border-slate-200">Meta Title</th>
                    <th className="p-5 font-bold text-[11px] uppercase tracking-wider text-slate-400 border-b border-slate-200 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {pages.map(p => (
                    <tr key={p.id} className="hover:bg-slate-50 transition-colors">
                      <td className="p-5">
                        <div className="font-serif text-base text-slate-800">{p.pageName}</div>
                        <div className="text-[11px] text-slate-400 mt-1">/{p.pageSlug}</div>
                      </td>
                      <td className="p-5 text-xs text-slate-600 max-w-[200px] truncate">{p.metaTitle || '-'}</td>
                      <td className="p-5 text-right space-x-3">
                        <button onClick={() => handleEdit(p)} className="text-blue-600 hover:text-blue-800 font-medium text-xs transition-colors">Modif.</button>
                        <button onClick={() => handleDelete(p.id)} className="text-red-500 hover:text-red-700 font-medium text-xs transition-colors">Suppr.</button>
                      </td>
                    </tr>
                  ))}
                  {pages.length === 0 && <tr><td colSpan="3" className="p-12 text-center text-slate-400 italic font-serif">Aucun SEO défini</td></tr>}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SeoManager;
