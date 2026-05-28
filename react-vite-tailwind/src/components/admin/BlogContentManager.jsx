import React, { useState, useEffect } from 'react';
import { apiRequest } from '../../lib/api';

const BlogContentManager = ({ blog, onClose }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const [content, setContent] = useState({
    heroImage: '',
    heroTitle: blog.title || '',
    heroSubtitle: '',
    heroQuote: '',
    mainDescription: '',
    flankingImagesLeft: ['', '', '', '', ''],
    flankingImagesRight: ['', '', '', '', ''],
    sections: [
      { title: '', description: '' }
    ],
    faqs: [
      { question: '', answer: '' }
    ]
  });

  useEffect(() => {
    if (blog.page_content) {
      try {
        const parsed = typeof blog.page_content === 'string' ? JSON.parse(blog.page_content) : blog.page_content;
        setContent(prev => ({ ...prev, ...parsed }));
      } catch (err) {
        console.error("Error parsing blog content", err);
      }
    }
  }, [blog]);

  const handleSave = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      const payload = {
        ...blog,
        page_content: JSON.stringify(content)
      };

      const data = await apiRequest(`/blogs/${blog.id}`, {
        method: 'PUT',
        body: JSON.stringify(payload)
      });
      if (data.success) {
        setSuccess('Contenu de la page de blog enregistré avec succès !');
        setTimeout(onClose, 2000);
      } else {
        setError(data.message || 'Erreur lors de la sauvegarde.');
      }
    } catch (err) {
      setError('Erreur réseau.');
    } finally {
      setLoading(false);
    }
  };

  const updateSection = (index, field, val) => {
    const newS = [...content.sections];
    newS[index][field] = val;
    setContent({ ...content, sections: newS });
  };
  const addSection = () => setContent({ ...content, sections: [...content.sections, { title: '', description: '' }] });
  const removeSection = (index) => setContent({ ...content, sections: content.sections.filter((_, i) => i !== index) });

  const updateFaq = (index, field, val) => {
    const newF = [...content.faqs];
    newF[index][field] = val;
    setContent({ ...content, faqs: newF });
  };
  const addFaq = () => setContent({ ...content, faqs: [...content.faqs, { question: '', answer: '' }] });
  const removeFaq = (index) => setContent({ ...content, faqs: content.faqs.filter((_, i) => i !== index) });

  const updateFlankingLeft = (index, val) => {
    const arr = [...content.flankingImagesLeft];
    arr[index] = val;
    setContent({ ...content, flankingImagesLeft: arr });
  };
  const addFlankingLeft = () => setContent({ ...content, flankingImagesLeft: [...content.flankingImagesLeft, ''] });
  const removeFlankingLeft = (index) => setContent({ ...content, flankingImagesLeft: content.flankingImagesLeft.filter((_, i) => i !== index) });

  const updateFlankingRight = (index, val) => {
    const arr = [...content.flankingImagesRight];
    arr[index] = val;
    setContent({ ...content, flankingImagesRight: arr });
  };
  const addFlankingRight = () => setContent({ ...content, flankingImagesRight: [...content.flankingImagesRight, ''] });
  const removeFlankingRight = (index) => setContent({ ...content, flankingImagesRight: content.flankingImagesRight.filter((_, i) => i !== index) });

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 md:p-8">
      <div className="bg-white w-full max-w-6xl h-full max-h-[95vh] rounded-3xl shadow-[0_10px_60px_rgba(0,0,0,0.08)] border border-slate-200 flex flex-col overflow-hidden animate-fadeIn">

        {/* Header */}
        <div className="px-8 py-6 border-b border-slate-200 flex justify-between items-center bg-white">
          <div>
            <span className="text-indigo-600 text-[10px] tracking-[0.3em] font-bold uppercase mb-1 block">
              Éditeur de Contenu
            </span>
            <h2 className="text-2xl font-serif text-slate-800 italic">Blog: {blog.title}</h2>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-red-500 transition-colors p-2 hover:bg-red-50 rounded-full">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-8 custom-scrollbar bg-slate-50/30">
          {error && <div className="bg-red-50 text-red-600 p-4 rounded-xl border border-red-100 mb-6 text-sm flex items-center gap-3"><span className="text-xl">⚠️</span> {error}</div>}
          {success && <div className="bg-emerald-50 text-emerald-700 p-4 rounded-xl border border-emerald-100 mb-6 text-sm flex items-center gap-3"><span className="text-xl">✨</span> {success}</div>}

          <div className="space-y-10">
            {/* Section: Hero */}
            <section className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
              <h3 className="font-serif text-xl text-slate-800 italic mb-6 border-b border-slate-200 pb-4">En-tête de la page (Hero)</h3>
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">Image Principale (URL)</label>
                  <input type="text" value={content.heroImage || ''} onChange={e => setContent({ ...content, heroImage: e.target.value })} className="w-full bg-slate-50 border border-slate-200 px-4 py-3.5 rounded-xl text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all" placeholder="Collez l'URL de l'image ici..." />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">Grand Titre (Hero Title)</label>
                  <input type="text" value={content.heroTitle} onChange={e => setContent({ ...content, heroTitle: e.target.value })} className="w-full bg-slate-50 border border-slate-200 px-4 py-3.5 rounded-xl text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all" placeholder="Ex: POURQUOI L’INDE CHANGE PROFONDÉMENT..." />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">Sous-titre (Hero Subtitle)</label>
                  <input type="text" value={content.heroSubtitle} onChange={e => setContent({ ...content, heroSubtitle: e.target.value })} className="w-full bg-slate-50 border border-slate-200 px-4 py-3.5 rounded-xl text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all" placeholder="Ex: Les Carnets d’Indeora — Une expérience émotionnelle..." />
                </div>
              </div>
            </section>

            {/* Section: Main Content */}
            <section className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
              <h3 className="font-serif text-xl text-slate-800 italic mb-6 border-b border-slate-200 pb-4">Contenu Éditorial</h3>
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">Citation Centrale (Quote)</label>
                  <textarea value={content.heroQuote} onChange={e => setContent({ ...content, heroQuote: e.target.value })} className="w-full bg-slate-50 border border-slate-200 px-4 py-3.5 rounded-xl text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none min-h-[80px] resize-none transition-all" placeholder="Ex: L'Inde n'est pas un pays que l'on visite..." />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">Description Principale (HTML autorisé)</label>
                  <textarea value={content.mainDescription} onChange={e => setContent({ ...content, mainDescription: e.target.value })} className="w-full bg-slate-50 border border-slate-200 px-4 py-3.5 rounded-xl text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none min-h-[160px] resize-none transition-all" placeholder="<p>L'Inde est...</p>" />
                </div>
              </div>
            </section>

            {/* Section: Subsections */}
            <section className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
              <div className="flex justify-between items-center border-b border-slate-200 pb-4 mb-6">
                <h3 className="font-serif text-xl text-slate-800 italic">Sous-sections de l'article</h3>
                <button onClick={addSection} className="text-[10px] bg-slate-100 text-slate-600 px-4 py-2 rounded-full font-bold uppercase tracking-wider hover:bg-gray-200 transition-colors">
                  + Ajouter
                </button>
              </div>
              <div className="space-y-6">
                {content.sections.map((sec, idx) => (
                  <div key={idx} className="bg-slate-50/30 p-6 border border-slate-200 rounded-xl relative group">
                    <button onClick={() => removeSection(idx)} className="absolute top-4 right-4 text-red-400 hover:text-red-600 text-[10px] font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">Supprimer</button>
                    <div className="mb-5">
                      <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">Titre de la section</label>
                      <input type="text" value={sec.title} onChange={e => updateSection(idx, 'title', e.target.value)} className="w-full bg-white border border-slate-200 px-4 py-3 rounded-lg text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all" />
                    </div>
                    <div className="mb-5">
                      <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">Image de la section (URL) - Optionnel</label>
                      <input type="text" value={sec.image || ''} onChange={e => updateSection(idx, 'image', e.target.value)} className="w-full bg-white border border-slate-200 px-4 py-3 rounded-lg text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all" placeholder="Ex: http://..." />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">Texte (HTML autorisé)</label>
                      <textarea value={sec.description} onChange={e => updateSection(idx, 'description', e.target.value)} className="w-full bg-white border border-slate-200 px-4 py-3 rounded-lg text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none min-h-[100px] resize-none transition-all" />
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section: Flanking Images */}
            <section className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
              <h3 className="font-serif text-xl text-slate-800 italic mb-2 border-b border-slate-200 pb-4">Images Décoratives (Flanking Images)</h3>
              <p className="text-xs text-slate-500 mb-6 font-medium">Ces images apparaissent sur les côtés gauche et droit du texte principal (max 5 de chaque côté).</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-slate-50/30 p-6 rounded-xl border border-slate-200">
                  <h4 className="font-bold text-[11px] text-slate-400 mb-5 uppercase tracking-wider">Colonne Gauche</h4>
                  <div className="space-y-4">
                    {content.flankingImagesLeft.map((img, idx) => (
                      <div key={idx} className="flex gap-3 items-center group">
                        <input type="text" value={img} onChange={e => updateFlankingLeft(idx, e.target.value)} className="flex-1 bg-white border border-slate-200 px-4 py-2.5 rounded-lg text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all" placeholder={`Image ${idx + 1} URL`} />
                        <button onClick={() => removeFlankingLeft(idx)} className="text-red-400 hover:text-red-600 bg-red-50 hover:bg-red-100 w-8 h-8 rounded-full flex items-center justify-center transition-colors opacity-0 group-hover:opacity-100">×</button>
                      </div>
                    ))}
                  </div>
                  <button onClick={addFlankingLeft} className="mt-4 text-[10px] font-bold text-indigo-600 uppercase tracking-wider hover:text-indigo-700 transition-colors flex items-center gap-1">+ Ajouter Image (Gauche)</button>
                </div>
                <div className="bg-slate-50/30 p-6 rounded-xl border border-slate-200">
                  <h4 className="font-bold text-[11px] text-slate-400 mb-5 uppercase tracking-wider">Colonne Droite</h4>
                  <div className="space-y-4">
                    {content.flankingImagesRight.map((img, idx) => (
                      <div key={idx} className="flex gap-3 items-center group">
                        <input type="text" value={img} onChange={e => updateFlankingRight(idx, e.target.value)} className="flex-1 bg-white border border-slate-200 px-4 py-2.5 rounded-lg text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all" placeholder={`Image ${idx + 1} URL`} />
                        <button onClick={() => removeFlankingRight(idx)} className="text-red-400 hover:text-red-600 bg-red-50 hover:bg-red-100 w-8 h-8 rounded-full flex items-center justify-center transition-colors opacity-0 group-hover:opacity-100">×</button>
                      </div>
                    ))}
                  </div>
                  <button onClick={addFlankingRight} className="mt-4 text-[10px] font-bold text-indigo-600 uppercase tracking-wider hover:text-indigo-700 transition-colors flex items-center gap-1">+ Ajouter Image (Droite)</button>
                </div>
              </div>
            </section>

            {/* Section: FAQs */}
            <section className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
              <div className="flex justify-between items-center border-b border-slate-200 pb-4 mb-6">
                <h3 className="font-serif text-xl text-slate-800 italic">FAQ / Questions Fréquentes</h3>
                <button onClick={addFaq} className="text-[10px] bg-slate-100 text-slate-600 px-4 py-2 rounded-full font-bold uppercase tracking-wider hover:bg-gray-200 transition-colors">
                  + Ajouter FAQ
                </button>
              </div>
              <div className="space-y-6">
                {content.faqs.map((faq, idx) => (
                  <div key={idx} className="bg-slate-50/30 p-6 border border-slate-200 rounded-xl relative group">
                    <button onClick={() => removeFaq(idx)} className="absolute top-4 right-4 text-red-400 hover:text-red-600 text-[10px] font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">Supprimer</button>
                    <div className="mb-5">
                      <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">Question</label>
                      <input type="text" value={faq.question} onChange={e => updateFaq(idx, 'question', e.target.value)} className="w-full bg-white border border-slate-200 px-4 py-3 rounded-lg text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all" placeholder="Ex: Quelle est la meilleure période ?" />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">Réponse</label>
                      <textarea value={faq.answer} onChange={e => updateFaq(idx, 'answer', e.target.value)} className="w-full bg-white border border-slate-200 px-4 py-3 rounded-lg text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none min-h-[80px] resize-none transition-all" placeholder="La meilleure période est..." />
                    </div>
                  </div>
                ))}
              </div>
            </section>

          </div>
        </div>

        {/* Footer Actions */}
        <div className="px-8 py-6 border-t border-slate-200 bg-white flex justify-end gap-4 rounded-b">
          <button onClick={onClose} className="px-6 py-3 text-[11px] font-bold text-slate-500 uppercase tracking-widest hover:text-slate-800 transition-colors">
            Annuler
          </button>
          <button onClick={handleSave} disabled={loading} className={`px-8 py-3 bg-indigo-600 text-white text-[11px] font-bold uppercase tracking-widest rounded-xl hover:shadow-lg transition-all transform hover:-translate-y-0.5 ${loading ? 'opacity-50 pointer-events-none' : ''}`}>
            {loading ? 'Enregistrement...' : 'Enregistrer le Contenu'}
          </button>
        </div>

      </div>
    </div>
  );
};

export default BlogContentManager;
