import React, { useState, useEffect } from 'react';
import { Plus, Edit2, Trash2, ArrowUp, ArrowDown, Image as ImageIcon, Save, X, ChevronRight, List } from 'lucide-react';
import { apiRequest } from '../../lib/api';

const FaqManagement = () => {
  const [categories, setCategories] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [debugInfo, setDebugInfo] = useState('Fetching...');

  const [isCatModalOpen, setIsCatModalOpen] = useState(false);
  const [editingCat, setEditingCat] = useState(null);
  const [catFormData, setCatFormData] = useState({
    title: '', slug: '', description: '', image: '', badge_number: '', status: 'active', sort_order: 0
  });

  const [isQModalOpen, setIsQModalOpen] = useState(false);
  const [editingQ, setEditingQ] = useState(null);
  const [qFormData, setQFormData] = useState({
    question: '', answer: '', status: 'active', sort_order: 0
  });

  const [isUploading, setIsUploading] = useState(false);

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    if (activeCategory) {
      fetchQuestions(activeCategory.id);
    } else {
      setQuestions([]);
    }
  }, [activeCategory]);

  const fetchCategories = async () => {
    setLoading(true);
    setDebugInfo('Starting fetch...');
    try {
      const res = await apiRequest('/faqs/admin/categories');
      setDebugInfo('Response: ' + JSON.stringify(res).substring(0, 100));
      if (res.success) setCategories(res.data);
    } catch (err) {
      setDebugInfo('Error: ' + err.message);
      setError('Erreur lors du chargement des catégories');
    } finally {
      setLoading(false);
    }
  };

  const fetchQuestions = async (categoryId) => {
    setLoading(true);
    try {
      const res = await apiRequest(`/faqs/admin/categories/${categoryId}/questions`);
      if (res.success) setQuestions(res.data);
    } catch (err) {
      console.error('fetchQuestions error:', err);
      setError('Erreur lors du chargement des questions');
    } finally {
      setLoading(false);
    }
  };

  const handleTitleChange = (val) => {
    setCatFormData(prev => ({ ...prev, title: val }));
    if (!editingCat) {
      const slug = val.toLowerCase().replace(/[^a-z0-9 -]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-');
      setCatFormData(prev => ({ ...prev, slug }));
    }
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setIsUploading(true);
    const formData = new FormData();
    formData.append('files', file);

    try {
      const response = await fetch('http://localhost:8000/api/media/upload', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();
      if (data.success && data.urls.length > 0) {
        setCatFormData({ ...catFormData, image: data.urls[0] });
      }
    } catch (err) {
      console.error('Upload error', err);
    } finally {
      setIsUploading(false);
    }
  };

  const saveCategory = async (e) => {
    e.preventDefault();
    try {
      const method = editingCat ? 'PUT' : 'POST';
      const url = editingCat ? `/faqs/admin/categories/${editingCat.id}` : '/faqs/admin/categories';
      const res = await apiRequest(url, { method, body: JSON.stringify(catFormData) });

      if (res.success) {
        setSuccess('Catégorie enregistrée');
        setIsCatModalOpen(false);
        fetchCategories();
      } else {
        alert("Server returned error: " + JSON.stringify(res));
      }
    } catch (err) {
      alert("Erreur: " + err.message);
      setError('Erreur lors de la sauvegarde');
    }
  };

  const saveQuestion = async (e) => {
    e.preventDefault();
    try {
      const method = editingQ ? 'PUT' : 'POST';
      const url = editingQ ? `/faqs/admin/questions/${editingQ.id}` : `/faqs/admin/categories/${activeCategory.id}/questions`;
      const res = await apiRequest(url, { method, body: JSON.stringify(qFormData) });

      if (res.success) {
        setSuccess('Question enregistrée');
        setIsQModalOpen(false);
        fetchQuestions(activeCategory.id);
      } else {
        alert("Server returned error: " + JSON.stringify(res));
      }
    } catch (err) {
      alert("Erreur: " + err.message);
      setError('Erreur lors de la sauvegarde');
    }
  };

  const deleteCategory = async (id) => {
    if (!window.confirm("Supprimer cette catégorie ? Toutes les questions associées seront perdues.")) return;
    try {
      const res = await apiRequest(`/faqs/admin/categories/${id}`, { method: 'DELETE' });
      if (res.success) {
        if (activeCategory?.id === id) setActiveCategory(null);
        fetchCategories();
      } else {
        alert("Server returned error: " + JSON.stringify(res));
      }
    } catch (err) { 
      alert("Erreur lors de la suppression de la catégorie: " + err.message);
    }
  };

  const deleteQuestion = async (id) => {
    if (!window.confirm("Supprimer cette question ?")) return;
    try {
      const res = await apiRequest(`/faqs/admin/questions/${id}`, { method: 'DELETE' });
      if (res.success) {
        fetchQuestions(activeCategory.id);
      } else {
        alert("Server returned error: " + JSON.stringify(res));
      }
    } catch (err) { 
      alert("Erreur lors de la suppression de la question: " + err.message);
    }
  };

  const resetDefaults = async () => {
    if (!window.confirm("ATTENTION : Voulez-vous vraiment réinitialiser toutes les FAQ aux valeurs par défaut ? Toutes vos modifications et ajouts seront perdus !")) return;
    setLoading(true);
    try {
      const res = await apiRequest('/faqs/admin/reset-defaults', { method: 'POST' });
      if (res.success) {
        alert("Toutes les FAQ ont été réinitialisées avec succès !");
        setActiveCategory(null);
        fetchCategories();
      } else {
        alert("Erreur: " + JSON.stringify(res));
      }
    } catch (err) {
      alert("Erreur lors de la réinitialisation : " + err.message);
    } finally {
      setLoading(false);
    }
  };

  const openCatModal = (cat = null) => {
    setEditingCat(cat);
    if (cat) {
      setCatFormData(cat);
    } else {
      setCatFormData({ title: '', slug: '', description: '', image: '', badge_number: '', status: 'active', sort_order: categories.length + 1 });
    }
    setIsCatModalOpen(true);
  };

  const openQModal = (q = null) => {
    setEditingQ(q);
    if (q) {
      setQFormData(q);
    } else {
      setQFormData({ question: '', answer: '', status: 'active', sort_order: questions.length + 1 });
    }
    setIsQModalOpen(true);
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden min-h-[600px] flex">
      {/* Categories Sidebar */}
      <div className="w-1/3 border-r border-slate-200 flex flex-col bg-slate-50">
        <div className="p-4 border-b border-slate-200 flex justify-between items-center bg-white">
          <h2 className="font-bold text-slate-800 flex items-center gap-2">
            <List size={18} /> Catégories
          </h2>
          <div className="absolute top-0 left-1/3 bg-blue-100 text-blue-800 p-2 text-xs z-50">
            Debug: {debugInfo}
          </div>
          {error && <div className="absolute top-16 left-4 bg-red-500 text-white p-2 z-50 text-xs">{error}</div>}
          <div className="flex items-center gap-3">
            <button onClick={resetDefaults} className="px-3 py-1.5 text-xs font-bold bg-rose-100 text-rose-600 rounded hover:bg-rose-200 transition-colors flex items-center gap-1">
              Réinitialiser
            </button>
            <button onClick={() => openCatModal()} className="p-1.5 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition-colors">
              <Plus size={16} />
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-3 space-y-2">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className={`p-3 rounded-lg border transition-all cursor-pointer flex justify-between items-center group
                ${activeCategory?.id === cat.id ? 'bg-indigo-50 border-indigo-200' : 'bg-white border-slate-200 hover:border-indigo-300'}
              `}
              onClick={() => setActiveCategory(cat)}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded bg-slate-200 overflow-hidden flex-shrink-0 flex items-center justify-center text-slate-400">
                  {cat.image ? <img src={cat.image} className="w-full h-full object-cover" /> : <ImageIcon size={20} />}
                </div>
                <div>
                  <h3 className={`font-semibold text-sm ${activeCategory?.id === cat.id ? 'text-indigo-800' : 'text-slate-700'}`}>{cat.title}</h3>
                  <p className="text-xs text-slate-500">{cat.total_questions || 0} questions</p>
                </div>
              </div>
              <div className="flex items-center opacity-0 group-hover:opacity-100 transition-opacity gap-1">
                <button onClick={(e) => { e.stopPropagation(); openCatModal(cat); }} className="p-1.5 text-slate-400 hover:text-indigo-600"><Edit2 size={14} /></button>
                <button onClick={(e) => { e.stopPropagation(); deleteCategory(cat.id); }} className="p-1.5 text-slate-400 hover:text-rose-500"><Trash2 size={14} /></button>
              </div>
            </div>
          ))}
          {categories.length === 0 && !loading && (
            <p className="text-center text-slate-500 py-8 text-sm">Aucune catégorie.</p>
          )}
        </div>
      </div>

      {/* Questions Area */}
      <div className="w-2/3 flex flex-col bg-white">
        {!activeCategory ? (
          <div className="flex-1 flex flex-col items-center justify-center text-slate-400">
            <List size={48} className="mb-4 opacity-20" />
            <p>Sélectionnez une catégorie pour gérer ses questions.</p>
          </div>
        ) : (
          <>
            <div className="p-4 border-b border-slate-200 flex justify-between items-center bg-white sticky top-0">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600 block mb-1">Questions</span>
                <h2 className="font-bold text-slate-800 flex items-center gap-2">
                  {activeCategory.title}
                </h2>
              </div>
              <button onClick={() => openQModal()} className="px-3 py-1.5 bg-indigo-600 text-white rounded font-medium text-sm hover:bg-indigo-700 transition-colors flex items-center gap-2">
                <Plus size={16} /> Ajouter une question
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {questions.map((q) => (
                <div key={q.id} className="border border-slate-200 rounded-lg p-4 bg-white group hover:border-indigo-200 transition-colors shadow-sm">
                  <div className="flex justify-between items-start gap-4">
                    <div className="flex-1">
                      <h4 className="font-semibold text-slate-800 text-sm mb-2">{q.question}</h4>
                      <p className="text-sm text-slate-600 whitespace-pre-line leading-relaxed">{q.answer}</p>
                    </div>
                    <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button onClick={() => openQModal(q)} className="p-1.5 text-slate-400 hover:text-indigo-600 rounded bg-slate-50"><Edit2 size={14} /></button>
                      <button onClick={() => deleteQuestion(q.id)} className="p-1.5 text-slate-400 hover:text-rose-500 rounded bg-slate-50"><Trash2 size={14} /></button>
                    </div>
                  </div>
                  <div className="mt-3 pt-3 border-t border-slate-100 flex justify-between items-center text-xs">
                    <span className={`px-2 py-0.5 rounded font-medium ${q.status === 'active' ? 'bg-emerald-50 text-emerald-600' : 'bg-slate-100 text-slate-500'}`}>
                      {q.status === 'active' ? 'Actif' : 'Inactif'}
                    </span>
                    <span className="text-slate-400 font-mono">Ordre: {q.sort_order}</span>
                  </div>
                </div>
              ))}
              {questions.length === 0 && !loading && (
                <div className="text-center py-12 text-slate-500">
                  <p>Aucune question dans cette catégorie.</p>
                </div>
              )}
            </div>
          </>
        )}
      </div>

      {/* Category Modal */}
      {isCatModalOpen && (
        <div className="fixed inset-0 bg-slate-900/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-md overflow-hidden">
            <div className="p-4 border-b border-slate-200 flex justify-between items-center">
              <h3 className="font-bold text-slate-800">{editingCat ? 'Modifier la Catégorie' : 'Nouvelle Catégorie'}</h3>
              <button onClick={() => setIsCatModalOpen(false)} className="text-slate-400 hover:text-slate-700"><X size={20} /></button>
            </div>
            <div className="p-5 space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Titre</label>
                <input required type="text" value={catFormData.title} onChange={e => handleTitleChange(e.target.value)} className="w-full p-2.5 border rounded-lg outline-none focus:border-indigo-500 text-sm bg-white text-slate-800" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Numéro (ex: 01)</label>
                  <input type="text" value={catFormData.badge_number} onChange={e => setCatFormData({ ...catFormData, badge_number: e.target.value })} className="w-full p-2.5 border rounded-lg outline-none focus:border-indigo-500 text-sm bg-white text-slate-800" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Ordre</label>
                  <input type="number" value={catFormData.sort_order} onChange={e => setCatFormData({ ...catFormData, sort_order: parseInt(e.target.value) })} className="w-full p-2.5 border rounded-lg outline-none focus:border-indigo-500 text-sm bg-white text-slate-800" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Description courte</label>
                <textarea value={catFormData.description} onChange={e => setCatFormData({ ...catFormData, description: e.target.value })} className="w-full p-2.5 border rounded-lg outline-none focus:border-indigo-500 text-sm h-20 resize-none bg-white text-slate-800" />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Image de couverture</label>
                <div className="flex gap-3 items-center">
                  <div className="w-16 h-16 rounded border bg-slate-50 flex items-center justify-center overflow-hidden shrink-0">
                    {catFormData.image ? <img src={catFormData.image} className="w-full h-full object-cover" /> : <ImageIcon size={24} className="text-slate-300" />}
                  </div>
                  <div className="flex-1">
                    <input type="file" onChange={handleImageUpload} accept="image/*" className="text-xs w-full mb-2" />
                    {isUploading && <span className="text-xs text-indigo-600 font-medium">Upload en cours...</span>}
                  </div>
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Statut</label>
                <select value={catFormData.status} onChange={e => setCatFormData({ ...catFormData, status: e.target.value })} className="w-full p-2.5 border rounded-lg outline-none focus:border-indigo-500 text-sm bg-white text-slate-800">
                  <option value="active">Actif</option>
                  <option value="inactive">Inactif</option>
                </select>
              </div>
            </div>
            <div className="p-4 border-t border-slate-200 bg-slate-50 flex justify-end gap-2">
              <button onClick={() => setIsCatModalOpen(false)} className="px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-200 rounded-lg transition-colors">Annuler</button>
              <button onClick={saveCategory} className="px-4 py-2 text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg transition-colors flex items-center gap-2">
                <Save size={16} /> Enregistrer
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Question Modal */}
      {isQModalOpen && (
        <div className="fixed inset-0 bg-slate-900/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-2xl overflow-hidden">
            <div className="p-4 border-b border-slate-200 flex justify-between items-center">
              <h3 className="font-bold text-slate-800">{editingQ ? 'Modifier la Question' : 'Nouvelle Question'}</h3>
              <button onClick={() => setIsQModalOpen(false)} className="text-slate-400 hover:text-slate-700"><X size={20} /></button>
            </div>
            <div className="p-5 space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Question</label>
                <input required type="text" value={qFormData.question} onChange={e => setQFormData({ ...qFormData, question: e.target.value })} className="w-full p-2.5 border rounded-lg outline-none focus:border-indigo-500 text-sm font-medium bg-white text-slate-800" />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Réponse</label>
                <textarea required value={qFormData.answer} onChange={e => setQFormData({ ...qFormData, answer: e.target.value })} className="w-full p-3 border rounded-lg outline-none focus:border-indigo-500 text-sm h-48 resize-none font-sans bg-white text-slate-800" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Ordre d'affichage</label>
                  <input type="number" value={qFormData.sort_order} onChange={e => setQFormData({ ...qFormData, sort_order: parseInt(e.target.value) })} className="w-full p-2.5 border rounded-lg outline-none focus:border-indigo-500 text-sm bg-white text-slate-800" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Statut</label>
                  <select value={qFormData.status} onChange={e => setQFormData({ ...qFormData, status: e.target.value })} className="w-full p-2.5 border rounded-lg outline-none focus:border-indigo-500 text-sm bg-white text-slate-800">
                    <option value="active">Actif</option>
                    <option value="inactive">Inactif</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="p-4 border-t border-slate-200 bg-slate-50 flex justify-end gap-2">
              <button onClick={() => setIsQModalOpen(false)} className="px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-200 rounded-lg transition-colors">Annuler</button>
              <button onClick={saveQuestion} className="px-4 py-2 text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg transition-colors flex items-center gap-2">
                <Save size={16} /> Enregistrer
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default FaqManagement;
