import React, { useEffect, useState } from 'react';
import { Pencil, Trash2 } from 'lucide-react';
import { apiRequest } from '../../lib/api';

const emptyForm = { id: '', name: '', slug: '', description: '', display_order: 0, status: 'active' };

const toSlug = (value) =>
  value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');

const BlogCategoryManager = () => {
  const [categories, setCategories] = useState([]);
  const [formData, setFormData] = useState(emptyForm);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const isEditing = Boolean(formData.id);

  const fetchCategories = async () => {
    setLoading(true);
    try {
      const data = await apiRequest('/blog-categories?includeInactive=true');
      setCategories(data.data || []);
    } catch (err) {
      setError(err.message || 'Unable to load categories.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleNameChange = (value) => {
    setFormData((prev) => ({
      ...prev,
      name: value,
      slug: prev.id ? prev.slug : toSlug(value)
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setMessage('');
    setError('');
    try {
      const path = isEditing ? `/blog-categories/${formData.id}` : '/blog-categories';
      const method = isEditing ? 'PUT' : 'POST';
      const data = await apiRequest(path, { method, body: JSON.stringify(formData) });
      setMessage(data.message || 'Saved successfully.');
      setFormData(emptyForm);
      fetchCategories();
      setTimeout(() => setMessage(''), 2500);
    } catch (err) {
      setError(err.message || 'Unable to save category.');
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Supprimer cette catégorie ?')) return;
    try {
      await apiRequest(`/blog-categories/${id}`, { method: 'DELETE' });
      fetchCategories();
    } catch (err) {
      setError(err.message || 'Unable to delete category.');
    }
  };

  return (
    <div className="animate-fadeIn">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 border-b border-slate-200 pb-5 gap-4">
        <div>
          <span className="text-indigo-600 text-[10px] tracking-[0.3em] font-bold uppercase mb-1 block">
            Blog
          </span>
          <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-2">Blog Category Management</h2>
        </div>
      </div>

      {message && <div className="mb-6 p-4 bg-emerald-50 text-emerald-700 text-sm rounded-xl border border-emerald-100">{message}</div>}
      {error && <div className="mb-6 p-4 bg-red-50 text-red-700 text-sm rounded-xl border border-red-100">{error}</div>}

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        <div className="xl:col-span-1 bg-white p-8 shadow-sm border border-slate-200 rounded-xl h-fit">
          <h3 className="text-lg font-semibold text-slate-800 mb-6">{isEditing ? 'Modifier Catégorie' : 'Ajouter Catégorie'}</h3>
          <form onSubmit={handleSubmit} className="space-y-5 text-sm">
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">Nom *</label>
              <input required value={formData.name} onChange={(e) => handleNameChange(e.target.value)} className="w-full bg-slate-50 border border-slate-200 px-4 py-3.5 rounded-xl focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all" />
            </div>
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">Slug *</label>
              <input required value={formData.slug} onChange={(e) => setFormData({ ...formData, slug: e.target.value })} className="w-full bg-slate-50 border border-slate-200 px-4 py-3.5 rounded-xl font-mono text-xs focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all" />
            </div>
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">Description</label>
              <textarea value={formData.description || ''} onChange={(e) => setFormData({ ...formData, description: e.target.value })} className="w-full bg-slate-50 border border-slate-200 px-4 py-3.5 rounded-xl focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none h-24 resize-none transition-all" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <input type="number" value={formData.display_order || 0} onChange={(e) => setFormData({ ...formData, display_order: e.target.value })} className="w-full bg-slate-50 border border-slate-200 px-4 py-3.5 rounded-xl focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all" />
              <select value={formData.status} onChange={(e) => setFormData({ ...formData, status: e.target.value })} className="w-full bg-slate-50 border border-slate-200 px-4 py-3.5 rounded-xl focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all">
                <option value="active">Actif</option>
                <option value="inactive">Inactif</option>
              </select>
            </div>
            <button className="w-full bg-indigo-600 text-white py-3.5 rounded-xl text-[11px] font-bold uppercase tracking-widest shadow-md hover:shadow-lg transition-all">
              {isEditing ? 'Mettre à jour' : 'Enregistrer'}
            </button>
            {isEditing && <button type="button" onClick={() => setFormData(emptyForm)} className="w-full text-slate-400 hover:text-slate-600 py-2 text-[11px] font-bold uppercase tracking-widest">Annuler</button>}
          </form>
        </div>

        <div className="xl:col-span-2 bg-white shadow-sm border border-slate-200 rounded-xl overflow-hidden">
          {loading ? <div className="p-12 text-center text-slate-400 italic font-serif">Chargement...</div> : (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm whitespace-nowrap md:whitespace-normal">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="p-5 font-bold text-[11px] uppercase tracking-wider text-slate-400 border-b border-slate-200">Catégorie</th>
                    <th className="p-5 font-bold text-[11px] uppercase tracking-wider text-slate-400 border-b border-slate-200">Statut</th>
                    <th className="p-5 font-bold text-[11px] uppercase tracking-wider text-slate-400 border-b border-slate-200 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {categories.map((cat) => (
                    <tr key={cat.id} className="hover:bg-slate-50 transition-colors">
                      <td className="p-5">
                        <div className="font-serif text-base text-slate-800">{cat.name}</div>
                        <div className="text-[11px] text-slate-400 mt-1">/{cat.slug}</div>
                      </td>
                      <td className="p-5">{cat.status === 'active' ? 'Actif' : 'Inactif'}</td>
                      <td className="p-5 text-right">
                        <button onClick={() => setFormData(cat)} className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 font-medium text-xs mr-4"><Pencil size={13} /> Modif.</button>
                        <button onClick={() => handleDelete(cat.id)} className="inline-flex items-center gap-1 text-red-500 hover:text-red-700 font-medium text-xs"><Trash2 size={13} /> Suppr.</button>
                      </td>
                    </tr>
                  ))}
                  {categories.length === 0 && <tr><td colSpan="3" className="p-12 text-center text-slate-400 italic font-serif">Aucune catégorie trouvée</td></tr>}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogCategoryManager;
