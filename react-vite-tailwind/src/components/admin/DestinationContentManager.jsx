import React, { useState, useEffect } from 'react';
import { apiRequest } from '../../lib/api';

const DestinationContentManager = ({ destination, onClose, type = 'destination' }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const [content, setContent] = useState({
    heroImage: '',
    heroTitle: destination.title || '',
    heroDuration: '',
    heroDescription: '',
    price: '',
    durationText: '',
    highlights: [''],
    bestPeriod: '',
    travelStyle: '',
    accommodationText: '',
    priceIncludes: '',
    priceExcludes: '',
    accommodations: [{ title: '', subtitle: '', desc: '' }],
    conseils: [{ title: '', desc: '' }],
    itinerary: [{ day: '1', title: '', desc: '' }]
  });

  useEffect(() => {
    if (destination.page_content) {
      try {
        const parsed = typeof destination.page_content === 'string' ? JSON.parse(destination.page_content) : destination.page_content;
        setContent({ ...content, ...parsed });
      } catch (err) {
        console.error("Error parsing content", err);
      }
    }
  }, [destination]);

  const handleSave = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      const payload = {
        ...destination,
        page_content: JSON.stringify(content)
      };

      const endpoint = type === 'itinerary'
        ? `/itineraries/${destination.id}`
        : `/destinations/${destination.id}`;

      const data = await apiRequest(endpoint, {
        method: 'PUT',
        body: JSON.stringify(payload)
      });
      if (data.success) {
        setSuccess('Contenu de la page enregistré avec succès !');
        setTimeout(() => {
          onClose();
          const targetSlug = destination.slug || '';
          window.open(`/${targetSlug.replace(/-$/, '')}`, '_blank');
        }, 1000);
      } else {
        setError(data.message || 'Erreur lors de la sauvegarde.');
      }
    } catch (err) {
      setError('Erreur réseau.');
    } finally {
      setLoading(false);
    }
  };

  const updateHighlight = (index, val) => {
    const newH = [...content.highlights];
    newH[index] = val;
    setContent({ ...content, highlights: newH });
  };
  const addHighlight = () => setContent({ ...content, highlights: [...content.highlights, ''] });
  const removeHighlight = (index) => setContent({ ...content, highlights: content.highlights.filter((_, i) => i !== index) });

  const updateItinerary = (index, field, val) => {
    const newI = [...content.itinerary];
    newI[index][field] = val;
    setContent({ ...content, itinerary: newI });
  };
  const addItineraryDay = () => setContent({ ...content, itinerary: [...content.itinerary, { day: `${content.itinerary.length + 1}`, title: '', desc: '' }] });
  const removeItineraryDay = (index) => setContent({ ...content, itinerary: content.itinerary.filter((_, i) => i !== index) });

  const updateAccommodation = (index, field, val) => {
    const newA = content.accommodations ? [...content.accommodations] : [];
    newA[index][field] = val;
    setContent({ ...content, accommodations: newA });
  };
  const addAccommodation = () => setContent({ ...content, accommodations: [...(content.accommodations || []), { title: '', subtitle: '', desc: '' }] });
  const removeAccommodation = (index) => setContent({ ...content, accommodations: (content.accommodations || []).filter((_, i) => i !== index) });

  const updateConseil = (index, field, val) => {
    const newC = content.conseils ? [...content.conseils] : [];
    newC[index][field] = val;
    setContent({ ...content, conseils: newC });
  };
  const addConseil = () => setContent({ ...content, conseils: [...(content.conseils || []), { title: '', desc: '' }] });
  const removeConseil = (index) => setContent({ ...content, conseils: (content.conseils || []).filter((_, i) => i !== index) });

  return (
    <div className="fixed inset-0 bg-[#f8fafc]/90 backdrop-blur-sm z-50 flex items-center justify-center p-4 md:p-8 animate-fadeIn">
      <div className="bg-white w-full max-w-6xl h-full max-h-[95vh] rounded-3xl shadow-[0_10px_60px_rgba(0,0,0,0.08)] flex flex-col overflow-hidden border border-slate-200">

        {/* Header */}
        <div className="px-10 py-8 border-b border-slate-200 flex justify-between items-center bg-white sticky top-0 z-10 shadow-sm">
          <div>
            <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-2">Éditeur de Page: <span className="text-indigo-600">{destination.title}</span></h2>
            <p className="text-[11px] uppercase tracking-wider font-bold text-slate-400 mt-2">Personnalisez le contenu affiché sur la page détaillée de cette destination.</p>
          </div>
          <button onClick={onClose} className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center text-slate-400 hover:text-red-500 hover:bg-red-50 transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-10 custom-scrollbar bg-slate-50/30">
          {error && <div className="bg-red-50 text-red-600 p-4 rounded-xl border border-red-100 mb-8 text-sm flex items-center gap-3"><span className="text-xl">⚠️</span> {error}</div>}
          {success && <div className="bg-emerald-50 text-emerald-600 p-4 rounded-xl border border-emerald-100 mb-8 text-sm flex items-center gap-3"><span className="text-xl">✨</span> {success}</div>}

          <div className="space-y-12">
            {/* Section: Header Infos */}
            <section className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
              <h3 className="font-serif text-2xl text-slate-800 italic mb-6 border-b border-slate-200 pb-4">En-tête de la page (Hero)</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="md:col-span-2">
                  <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">Image Principale (URL)</label>
                  <input type="text" value={content.heroImage || ''} onChange={e => setContent({ ...content, heroImage: e.target.value })} className="w-full bg-slate-50 border border-slate-200 px-4 py-3.5 rounded-xl text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all" placeholder="Collez l'URL de l'image ici..." />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">Grand Titre</label>
                  <input type="text" value={content.heroTitle} onChange={e => setContent({ ...content, heroTitle: e.target.value })} className="w-full bg-slate-50 border border-slate-200 px-4 py-3.5 rounded-xl text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all" placeholder="Ex: Rajasthan Authentique Varanasi" />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">Durée (Sous-titre)</label>
                  <input type="text" value={content.heroDuration} onChange={e => setContent({ ...content, heroDuration: e.target.value })} className="w-full bg-slate-50 border border-slate-200 px-4 py-3.5 rounded-xl text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all" placeholder="Ex: 14 Jours" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">Description d'introduction</label>
                  <textarea value={content.heroDescription} onChange={e => setContent({ ...content, heroDescription: e.target.value })} className="w-full bg-slate-50 border border-slate-200 px-4 py-3.5 rounded-xl text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none min-h-[100px] resize-none transition-all" placeholder="Un voyage pensé pour les amoureux..." />
                </div>
              </div>
            </section>

            {/* Section: Pricing & Infos */}
            <section className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
              <h3 className="font-serif text-2xl text-slate-800 italic mb-6 border-b border-slate-200 pb-4">Prix & Infos Pratiques</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">Prix (Ex: 860€)</label>
                  <input type="text" value={content.price} onChange={e => setContent({ ...content, price: e.target.value })} className="w-full bg-slate-50 border border-slate-200 px-4 py-3.5 rounded-xl text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">Durée texte court (Ex: 14j / 11n)</label>
                  <input type="text" value={content.durationText} onChange={e => setContent({ ...content, durationText: e.target.value })} className="w-full bg-slate-50 border border-slate-200 px-4 py-3.5 rounded-xl text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">Meilleure période</label>
                  <input type="text" value={content.bestPeriod} onChange={e => setContent({ ...content, bestPeriod: e.target.value })} className="w-full bg-slate-50 border border-slate-200 px-4 py-3.5 rounded-xl text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all" placeholder="Ex: Octobre à mars" />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">Style du voyage</label>
                  <input type="text" value={content.travelStyle} onChange={e => setContent({ ...content, travelStyle: e.target.value })} className="w-full bg-slate-50 border border-slate-200 px-4 py-3.5 rounded-xl text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all" placeholder="Ex: Voyage privé et immersif" />
                </div>
              </div>
            </section>

            {/* Section: Hébergement */}
            <section className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
              <h3 className="font-serif text-2xl text-slate-800 italic mb-6 border-b border-slate-200 pb-4">Hébergement (Vos havres de paix)</h3>
              <div>
                <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">Texte d'introduction</label>
                <textarea value={content.accommodationText} onChange={e => setContent({ ...content, accommodationText: e.target.value })} className="w-full bg-slate-50 border border-slate-200 px-4 py-3.5 rounded-xl text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none min-h-[80px] mb-8 resize-none transition-all" placeholder="Nous avons sélectionné pour vous..." />
              </div>

              <div className="space-y-6 mb-6">
                {(content.accommodations || []).map((acc, idx) => (
                  <div key={idx} className="bg-white p-4 border border-slate-300 rounded relative">
                    <button onClick={() => removeAccommodation(idx)} className="absolute top-4 right-4 text-red-400 hover:text-red-600 text-sm font-bold">Supprimer</button>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Titre (Ex: Châteaux & Demeures)</label>
                        <input type="text" value={acc.title} onChange={e => updateAccommodation(idx, 'title', e.target.value)} className="w-full bg-slate-50 border border-slate-300 px-3 py-2 rounded text-sm focus:border-indigo-600 outline-none" placeholder="Titre de la carte..." />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Sous-titre (Ex: Patrimoine & Charme)</label>
                        <input type="text" value={acc.subtitle} onChange={e => updateAccommodation(idx, 'subtitle', e.target.value)} className="w-full bg-slate-50 border border-slate-300 px-3 py-2 rounded text-sm focus:border-indigo-600 outline-none" placeholder="Sous-titre de la carte..." />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Description</label>
                      <textarea value={acc.desc} onChange={e => updateAccommodation(idx, 'desc', e.target.value)} className="w-full bg-slate-50 border border-slate-300 px-3 py-2 rounded text-sm focus:border-indigo-600 outline-none min-h-[80px]" placeholder="Dormez dans d'anciens forts..." />
                    </div>
                  </div>
                ))}
              </div>
              <button onClick={addAccommodation} className="text-sm font-bold text-indigo-600 hover:text-indigo-700">+ Ajouter une carte d'hébergement</button>
            </section>

            {/* Section: Budget */}
            <section className="bg-slate-50 p-6 rounded border border-slate-200">
              <h3 className="font-serif text-lg text-[#102d45] mb-4 border-b border-slate-300 pb-2">Le budget détaillé</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Le prix comprend (Utilisez • pour les puces)</label>
                  <textarea value={content.priceIncludes} onChange={e => setContent({ ...content, priceIncludes: e.target.value })} className="w-full bg-white border border-slate-300 px-4 py-3 rounded text-sm focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 outline-none min-h-[120px]" placeholder="• L'hébergement... \n• Les petits-déjeuners..." />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Le prix ne comprend pas (Utilisez • pour les puces)</label>
                  <textarea value={content.priceExcludes} onChange={e => setContent({ ...content, priceExcludes: e.target.value })} className="w-full bg-white border border-slate-300 px-4 py-3 rounded text-sm focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 outline-none min-h-[120px]" placeholder="• Les vols... \n• Les frais de visa..." />
                </div>
              </div>
            </section>

            {/* Section: Highlights */}
            <section className="bg-slate-50 p-6 rounded border border-slate-200">
              <h3 className="font-serif text-lg text-[#102d45] mb-4 border-b border-slate-300 pb-2">Points forts du voyage</h3>
              <div className="space-y-3 mb-4">
                {content.highlights.map((h, idx) => (
                  <div key={idx} className="flex gap-3">
                    <input type="text" value={h} onChange={e => updateHighlight(idx, e.target.value)} className="flex-1 bg-white border border-slate-300 px-4 py-2 rounded text-sm focus:border-indigo-600 outline-none" placeholder="Ex: • Street photography authentique" />
                    <button onClick={() => removeHighlight(idx)} className="px-3 bg-red-50 text-red-500 rounded hover:bg-red-100">X</button>
                  </div>
                ))}
              </div>
              <button onClick={addHighlight} className="text-sm font-bold text-indigo-600 hover:text-indigo-700">+ Ajouter un point fort</button>
            </section>

            {/* Section: Nos Conseils */}
            <section className="bg-slate-50 p-6 rounded border border-slate-200">
              <h3 className="font-serif text-lg text-[#102d45] mb-4 border-b border-slate-300 pb-2">Nos Conseils (Informations utiles)</h3>
              <div className="space-y-6 mb-6">
                {(content.conseils || []).map((conseil, idx) => (
                  <div key={idx} className="bg-white p-4 border border-l-4 border-l-indigo-600 border-slate-300 rounded relative shadow-sm">
                    <button onClick={() => removeConseil(idx)} className="absolute top-4 right-4 text-red-400 hover:text-red-600 text-sm font-bold">Supprimer</button>
                    <div className="mb-4">
                      <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Titre (Ex: Meilleure période)</label>
                      <input type="text" value={conseil.title} onChange={e => updateConseil(idx, 'title', e.target.value)} className="w-full bg-slate-50 border border-slate-300 px-3 py-2 rounded text-sm focus:border-indigo-600 outline-none" placeholder="Titre..." />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Description</label>
                      <textarea value={conseil.desc} onChange={e => updateConseil(idx, 'desc', e.target.value)} className="w-full bg-slate-50 border border-slate-300 px-3 py-2 rounded text-sm focus:border-indigo-600 outline-none min-h-[80px]" placeholder="Description..." />
                    </div>
                  </div>
                ))}
              </div>
              <button onClick={addConseil} className="text-sm font-bold text-indigo-600 hover:text-indigo-700">+ Ajouter un conseil</button>
            </section>

            {/* Section: Itinerary */}
            <section className="bg-slate-50 p-6 rounded border border-slate-200">
              <h3 className="font-serif text-lg text-[#102d45] mb-4 border-b border-slate-300 pb-2">Itinéraire Jour par Jour</h3>
              <div className="space-y-6 mb-6">
                {content.itinerary.map((day, idx) => (
                  <div key={idx} className="bg-white p-4 border border-slate-300 rounded relative">
                    <button onClick={() => removeItineraryDay(idx)} className="absolute top-4 right-4 text-red-400 hover:text-red-600 text-sm font-bold">Supprimer</button>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                      <div className="md:col-span-1">
                        <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Jour (Ex: 01)</label>
                        <input type="text" value={day.day} onChange={e => updateItinerary(idx, 'day', e.target.value)} className="w-full bg-slate-50 border border-slate-300 px-3 py-2 rounded text-sm focus:border-indigo-600 outline-none" />
                      </div>
                      <div className="md:col-span-3">
                        <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Titre de l'étape</label>
                        <input type="text" value={day.title} onChange={e => updateItinerary(idx, 'title', e.target.value)} className="w-full bg-slate-50 border border-slate-300 px-3 py-2 rounded text-sm focus:border-indigo-600 outline-none" placeholder="Ex: Arrivée à Delhi" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Description (Utilisez • pour les puces)</label>
                      <textarea value={day.desc} onChange={e => updateItinerary(idx, 'desc', e.target.value)} className="w-full bg-slate-50 border border-slate-300 px-3 py-2 rounded text-sm focus:border-indigo-600 outline-none min-h-[120px]" placeholder="• Accueil personnalisé... \n• Transfert..." />
                    </div>
                  </div>
                ))}
              </div>
              <button onClick={addItineraryDay} className="text-sm font-bold text-indigo-600 hover:text-indigo-700">+ Ajouter un jour</button>
            </section>

          </div>
        </div>

        {/* Footer */}
        <div className="px-8 py-5 border-t border-slate-200 bg-slate-50 flex justify-end gap-4">
          <button onClick={onClose} className="px-6 py-2.5 text-sm font-bold text-slate-500 hover:text-slate-700 transition-colors uppercase tracking-wider">Annuler</button>
          <button onClick={handleSave} disabled={loading} className="px-8 py-2.5 text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-700 rounded shadow transition-all uppercase tracking-wider disabled:opacity-50">
            {loading ? 'Enregistrement...' : 'Enregistrer le contenu'}
          </button>
        </div>

      </div>
    </div>
  );
};

export default DestinationContentManager;