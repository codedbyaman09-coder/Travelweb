import React, { useState, useEffect } from 'react';
import { apiRequest } from '../../lib/api';
import { Settings, Image as ImageIcon, AlignLeft } from 'lucide-react';

const VisionManager = () => {
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('');
  
  const [visionSubtitle, setVisionSubtitle] = useState("L'ART DU VOYAGE SUR MESURE EN INDE");
  const [visionTitle, setVisionTitle] = useState("Notre vision du voyage");
  const [visionShortDesc, setVisionShortDesc] = useState("Voyager en Inde, c'est découvrir bien plus qu'une destination. C'est ressentir une émotion, vivre des rencontres sincères et s'ouvrir à une culture parmi les plus fascinantes au monde.");
  const [visionQuote, setVisionQuote] = useState("\"Chez Indeora Voyages, nous croyons qu’un voyage en Inde ne se résume pas à une simple succession de visites ou de paysages. Voyager en Inde, c’est vivre une émotion, ressentir une atmosphère...\"");
  const [visionImage, setVisionImage] = useState("");
  const [visionParagraphsText, setVisionParagraphsText] = useState(
    "Chez Indeora Voyages, nous croyons qu’un voyage en Inde ne se résume pas à une simple succession de visites ou de paysages...\n\nNotre vision du voyage repose sur une approche profondément humaine, immersive et personnalisée...\n\nGrâce à notre double culture franco-indienne, nous comprenons à la fois les attentes des voyageurs francophones et l’âme véritable de l’Inde...\n\nDes palais majestueux du Rajasthan aux villages oubliés de l’Himalaya...\n\nNous accordons une importance particulière à la qualité des rencontres humaines...\n\nPlus qu’un voyage organisé, nous créons des expériences qui marquent durablement les souvenirs..."
  );

  const fetchSettings = async () => {
    try {
      const data = await apiRequest('/settings');
      if (data.success && data.data) {
        if (data.data.vision_subtitle) setVisionSubtitle(data.data.vision_subtitle);
        if (data.data.vision_title) setVisionTitle(data.data.vision_title);
        if (data.data.vision_short_desc) setVisionShortDesc(data.data.vision_short_desc);
        if (data.data.vision_quote) setVisionQuote(data.data.vision_quote);
        if (data.data.vision_image) setVisionImage(data.data.vision_image);
        if (data.data.vision_paragraphs) {
          try {
            const parsed = typeof data.data.vision_paragraphs === 'string' ? JSON.parse(data.data.vision_paragraphs) : data.data.vision_paragraphs;
            if (Array.isArray(parsed) && parsed.length > 0) setVisionParagraphsText(parsed.join('\n\n'));
          } catch(e) {
            console.error("Error parsing vision_paragraphs", e);
          }
        }
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSettings();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        vision_subtitle: visionSubtitle,
        vision_title: visionTitle,
        vision_short_desc: visionShortDesc,
        vision_quote: visionQuote,
        vision_image: visionImage,
        vision_paragraphs: JSON.stringify(visionParagraphsText.split('\n').filter(p => p.trim() !== ''))
      };
      const data = await apiRequest('/settings', {
        method: 'POST',
        body: JSON.stringify(payload)
      });
      if (data.success) {
        setMessage('Paramètres sauvegardés avec succès!');
        setTimeout(() => setMessage(''), 3000);
      }
    } catch (err) {
      console.error(err);
    }
  };



  if (loading) return <div className="p-8 text-center text-slate-500">Chargement...</div>;

  return (
    <div className="animate-fadeIn">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 border-b border-slate-200 pb-5 gap-4">
        <div>
          <span className="text-indigo-600 text-[10px] tracking-[0.3em] font-bold uppercase mb-1 block">
            Page d'accueil
          </span>
          <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-2">Notre vision du voyage</h2>
          <p className="text-slate-500 text-sm mt-2">Gérez le contenu de la section "Vision" et le texte du modal de détails.</p>
        </div>
      </div>

      {message && <div className="mb-6 p-4 bg-emerald-50 text-emerald-700 text-sm rounded-xl border border-emerald-100 flex items-center gap-3"><span className="text-xl">✨</span> {message}</div>}

      <div className="bg-white shadow-sm border border-slate-200 rounded-xl p-8 mb-8">
        <form onSubmit={handleSubmit} className="space-y-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">Sous-titre (L'ART DU VOYAGE...)</label>
              <input type="text" value={visionSubtitle} onChange={e => setVisionSubtitle(e.target.value)} className="w-full bg-slate-50 text-slate-900 border border-slate-200 px-4 py-3.5 rounded-xl text-sm outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500" />
            </div>
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">Titre Principal</label>
              <input type="text" value={visionTitle} onChange={e => setVisionTitle(e.target.value)} className="w-full bg-slate-50 text-slate-900 border border-slate-200 px-4 py-3.5 rounded-xl text-sm outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500" />
            </div>
          </div>

          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">Description Courte (Page d'accueil)</label>
            <textarea value={visionShortDesc} onChange={e => setVisionShortDesc(e.target.value)} className="w-full bg-slate-50 text-slate-900 border border-slate-200 px-4 py-3.5 rounded-xl text-sm outline-none h-24 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500" />
          </div>
          
          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">Image de la section (URL / chemin optionnel)</label>
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-center shrink-0 text-slate-400"><ImageIcon size={20} /></div>
              <input type="text" value={visionImage} onChange={e => setVisionImage(e.target.value)} placeholder="Laissez vide pour l'image par défaut" className="w-full bg-slate-50 text-slate-900 border border-slate-200 px-4 py-3.5 rounded-xl text-sm outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500" />
            </div>
          </div>

          <div className="border-t border-slate-200 pt-8 mt-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="font-serif text-xl text-slate-800 italic">Contenu du Modal (Lire la suite)</h3>
                <p className="text-xs text-slate-400 mt-1">Gérez le texte qui s'affiche lorsque l'utilisateur clique sur "Lire la suite".</p>
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">Citation mise en avant (Or)</label>
              <textarea value={visionQuote} onChange={e => setVisionQuote(e.target.value)} className="w-full bg-orange-50/30 border border-orange-100 px-4 py-3.5 rounded-xl text-sm outline-none h-24 text-indigo-500 font-serif italic" />
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center mb-2">
                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400">Texte (Paragraphes)</label>
                <span className="text-xs text-slate-400">Séparez les paragraphes par un saut de ligne.</span>
              </div>
              <textarea 
                value={visionParagraphsText} 
                onChange={e => setVisionParagraphsText(e.target.value)} 
                className="w-full bg-slate-50 text-slate-900 border border-slate-200 px-4 py-4 rounded-xl text-sm outline-none min-h-[300px] leading-relaxed transition-all focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500" 
                placeholder="Saisissez votre texte ici..." 
              />
            </div>
          </div>

          <button type="submit" className="w-full bg-indigo-600 text-white py-4 rounded-xl text-[11px] font-bold uppercase tracking-widest shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 mt-8">
            Sauvegarder les modifications
          </button>
        </form>
      </div>
    </div>
  );
};

export default VisionManager;
