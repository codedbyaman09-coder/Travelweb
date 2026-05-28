import React, { useState, useEffect } from 'react';
import { apiRequest, apiList } from '../../lib/api';
import { Save, Trash2, Layout, Maximize, AlignCenter, Type, AlignLeft, PaintBucket, Sidebar, Settings, Code, MonitorSmartphone, PlusCircle, Search } from 'lucide-react';
import Faq from '../../pages/Faq';

const DEFAULT_CONFIG = {
  layout: { pageWidth: '100%', containerWidth: '1440px', sectionWidth: '100%', sectionHeight: 'auto', minHeight: '100vh', maxWidth: '100%', bgColor: '#ffffff', bgImage: '', border: 'none', borderRadius: '0px', boxShadow: 'none', overflow: 'hidden', responsiveWidth: '100%' },
  spacing: { marginTop: '0px', marginBottom: '0px', marginLeft: 'auto', marginRight: 'auto', paddingTop: '64px', paddingBottom: '64px', paddingLeft: '16px', paddingRight: '16px', gapSections: '32px', gapColumns: '24px', faqItemGap: '0px', mobile: { pt: '32px', pb: '32px', px: '16px' }, tablet: { pt: '48px', pb: '48px', px: '32px' }, desktop: { pt: '64px', pb: '64px', px: '40px' } },
  alignment: { sectionAlign: 'center', textAlign: 'center', faqAlign: 'left', categoryAlign: 'left', flexDirection: 'row', gridColumns: '2' },
  typography: { headingColor: '#111111', headingSize: '67px', headingWeight: 'normal', headingLineHeight: '0.98', headingLetterSpacing: '-0.035em', paragraphColor: '#303030', paragraphSize: '14px', questionSize: '13.2px', questionWeight: '500', questionColor: '#242424', answerSize: '12.5px', answerColor: '#555555', categorySize: '20px', categoryColor: '#151515' },
  content: { pageTitle: 'QUESTIONS<br/>FRÉQUENTES', subtitle: 'FAQ', description: 'Retrouvez ici les réponses aux questions les plus courantes pour préparer votre voyage en Inde en toute sérénité.', faqHeading: 'Vos Questions', faqDescription: '', emptyFaqMessage: 'Aucune question trouvée', searchPlaceholder: 'Rechercher une question...', ctaSub: 'PRÊT À DÉCOUVRIR L’INDE ?', ctaTitle: 'Parlez-nous de votre projet de voyage', ctaDesc: 'En couple, en famille ou entre amis, nous créons avec vous le voyage qui vous ressemble.', ctaBtn: 'DEMANDER UN DEVIS PERSONNALISÉ', heroBg: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=1800', statsQuote: 'L’Inde n’est pas seulement<br/>une destination, c’est une émotion<br/>qui reste pour toujours.', stats1v: '18+', stats1l: 'ANS<br/>D’EXPÉRIENCE', stats2v: '100%', stats2l: 'VOYAGES<br/>SUR MESURE', stats3v: 'ÉQUIPE', stats3l: 'FRANCO-<br/>INDIENNE', stats4v: '24/7', stats4l: 'ASSISTANCE<br/>SUR PLACE', statsBg: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=1400', ctaBg: 'https://images.unsplash.com/photo-1548013146-72479768bbfd?q=80&w=1200' },
  accordion: { bgColor: '#fffdf8', padding: '20px', margin: '0', borderColor: '#ded2c0', borderRadius: '2px', shadow: 'none', questionHeight: '48px', answerPadding: '12px 20px 16px', answerBg: '#ffffff', iconColor: '#c6a263', iconSize: '17px', openIcon: 'plus', closeIcon: 'minus', hoverEffect: 'none', activeStyle: '' },
  searchCategory: { showSearch: 'true', searchWidth: '390px', searchHeight: '47px', searchPadding: '0 18px', searchBorder: '#d8cbb7', searchRadius: '6px', searchBg: '#ffffff', showCategory: 'true', catBtnBg: 'transparent', catBtnActive: '#bd8a3a', catBtnHover: '#fbf3e6', catBtnRadius: '2px' },
  classes: { pageWrapper: '', container: 'max-w-[1440px] mx-auto px-[40px]', hero: '', heading: '', subtitle: '', faqWrapper: '', faqItem: '', question: '', answer: '', icon: '', searchWrapper: '', searchInput: '', categoryWrapper: '', categoryButton: '' },
  responsive: { mobileLayout: 'col', tabletLayout: 'col', desktopLayout: 'row', mobilePadding: '16px', tabletPadding: '32px', desktopPadding: '40px', mobileFontSize: '14px', tabletFontSize: '16px', desktopFontSize: '16px', gridColsMobile: '1', gridColsTablet: '2', gridColsDesktop: '2' },
  theme: { primaryColor: '#bd8a3a' }
};

const FaqManager = () => {
  const [configId, setConfigId] = useState(null);
  const [config, setConfig] = useState(DEFAULT_CONFIG);
  const [saving, setSaving] = useState(false);
  const [activeTab, setActiveTab] = useState('items'); // Default to CRUD
  const [message, setMessage] = useState('');

  // CRUD State
  const [faqs, setFaqs] = useState([]);
  const [isEditingItem, setIsEditingItem] = useState(false);
  const [formData, setFormData] = useState({ category: 'AVANT DE PARTIR EN INDE', question: '', answer: '', display_order: 0, status: 'active' });
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetchConfig();
    fetchFaqs();
  }, []);

  const fetchConfig = async () => {
    try {
      const response = await apiRequest('/faq-page');
      if (response && response.success && response.data && response.data.length > 0) {
        setConfigId(response.data[0].id);
        const fetchedConfig = response.data[0].config;
        
        const mergedConfig = { ...DEFAULT_CONFIG };
        for(let key in DEFAULT_CONFIG) {
           if(fetchedConfig[key]) {
             mergedConfig[key] = { ...DEFAULT_CONFIG[key], ...fetchedConfig[key] };
           }
        }
        setConfig(mergedConfig);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const fetchFaqs = async () => {
    try {
      const rows = await apiList('/faqs');
      setFaqs(rows || []);
    } catch (err) { console.error(err); }
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      if (configId) {
        await apiRequest(`/faq-page/${configId}`, { method: 'PUT', body: JSON.stringify({ config }) });
      } else {
        const res = await apiRequest('/faq-page', { method: 'POST', body: JSON.stringify({ config }) });
        if (res.id) setConfigId(res.id);
      }
      setMessage('Configuration sauvegardée avec succès!');
      setTimeout(() => setMessage(''), 3000);
    } catch (error) {
      alert('Erreur lors de la sauvegarde.');
    } finally {
      setSaving(false);
    }
  };

  const handleReset = async () => {
    if(window.confirm('Voulez-vous vraiment réinitialiser aux paramètres par défaut ?')) {
        setConfig(DEFAULT_CONFIG);
        if(configId) {
            await apiRequest(`/faq-page/${configId}`, { method: 'DELETE' });
            setConfigId(null);
        }
        setMessage('Réinitialisé aux paramètres par défaut.');
        setTimeout(() => setMessage(''), 3000);
    }
  };

  const handleChange = (section, key, value) => {
    setConfig(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [key]: value
      }
    }));
  };

  // CRUD Handlers
  const handleItemSubmit = async (e) => {
    e.preventDefault();
    const method = isEditingItem ? 'PUT' : 'POST';
    const url = isEditingItem ? `/faqs/${editId}` : '/faqs';
    try {
      await apiRequest(url, { method, body: JSON.stringify(formData) });
      setFormData({ category: 'AVANT DE PARTIR EN INDE', question: '', answer: '', display_order: 0, status: 'active' });
      setIsEditingItem(false);
      setEditId(null);
      fetchFaqs();
      setMessage(isEditingItem ? 'FAQ mise à jour!' : 'FAQ ajoutée!');
      setTimeout(() => setMessage(''), 3000);
    } catch (err) { console.error(err); }
  };

  const handleDeleteItem = async (id) => {
    if (window.confirm("Supprimer cette FAQ ?")) {
      await apiRequest(`/faqs/${id}`, { method: 'DELETE' });
      fetchFaqs();
      setMessage('FAQ supprimée!');
      setTimeout(() => setMessage(''), 3000);
    }
  };

  const renderInput = (section, label, field, placeholder = "") => (
    <div>
      <label className="block text-xs font-bold text-slate-700 mb-1.5">{label}</label>
      <input type="text" value={config[section][field] || ''} onChange={e => handleChange(section, field, e.target.value)} className="w-full p-2.5 bg-white text-slate-800 border border-slate-300 rounded-lg focus:border-indigo-500 outline-none text-sm transition-all" placeholder={placeholder} />
    </div>
  );

  const renderTextarea = (section, label, field, placeholder = "") => (
    <div>
      <label className="block text-xs font-bold text-slate-700 mb-1.5">{label}</label>
      <textarea value={config[section][field] || ''} onChange={e => handleChange(section, field, e.target.value)} className="w-full p-2.5 bg-white text-slate-800 border border-slate-300 rounded-lg focus:border-indigo-500 outline-none text-sm transition-all h-24" placeholder={placeholder} />
    </div>
  );

  const renderColor = (section, label, field) => (
    <div>
      <label className="block text-xs font-bold text-slate-700 mb-1.5">{label}</label>
      <div className="flex gap-2">
        <input type="color" value={config[section][field] || '#ffffff'} onChange={e => handleChange(section, field, e.target.value)} className="w-10 h-10 rounded cursor-pointer border border-slate-300" />
        <input type="text" value={config[section][field] || ''} onChange={e => handleChange(section, field, e.target.value)} className="w-full p-2.5 bg-white border border-slate-300 rounded-lg uppercase font-mono text-sm" />
      </div>
    </div>
  );

  const tabs = [
    { id: 'items', icon: Layout, label: 'FAQ Items (CRUD)' },
    { id: 'content', icon: AlignLeft, label: 'Content' },
    { id: 'layout', icon: Layout, label: 'Layout' },
    { id: 'spacing', icon: Maximize, label: 'Spacing' },
    { id: 'alignment', icon: AlignCenter, label: 'Alignment' },
    { id: 'typography', icon: Type, label: 'Typography' },
    { id: 'accordion', icon: Sidebar, label: 'Accordion Design' },
    { id: 'searchCategory', icon: Search, label: 'Search/Category' },
    { id: 'classes', icon: Code, label: 'Tailwind Classes' },
    { id: 'responsive', icon: MonitorSmartphone, label: 'Responsive' }
  ];

  const renderCRUDManager = () => {
    const cats = ['AVANT DE PARTIR EN INDE', 'SANTÉ & CONFORT', 'ORGANISATION DU VOYAGE', 'EXPÉRIENCES & DÉCOUVERTES', 'ACCOMPAGNEMENT & RÉSERVATION'];
    return (
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 animate-fadeIn">
        <div className="xl:col-span-1 bg-slate-50 p-6 shadow-sm border border-slate-200 rounded-xl h-fit">
          <h3 className="text-lg font-black text-slate-800 mb-6 border-b pb-2">{isEditingItem ? 'Modifier FAQ' : 'Ajouter FAQ'}</h3>
          <form onSubmit={handleItemSubmit} className="space-y-4 text-sm">
            <div><label className="block text-[11px] font-bold text-slate-500 mb-1">Catégorie</label>
              <select value={formData.category} onChange={e => setFormData({...formData, category: e.target.value})} className="w-full p-2.5 border border-slate-300 rounded-lg bg-white text-slate-900 outline-none focus:border-indigo-500">
                {cats.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
            <div><label className="block text-[11px] font-bold text-slate-500 mb-1">Question</label><input required type="text" value={formData.question} onChange={e => setFormData({...formData, question: e.target.value})} className="w-full p-2.5 border border-slate-300 rounded-lg bg-white text-slate-900 outline-none focus:border-indigo-500" /></div>
            <div><label className="block text-[11px] font-bold text-slate-500 mb-1">Réponse (HTML accepté)</label><textarea required value={formData.answer} onChange={e => setFormData({...formData, answer: e.target.value})} className="w-full p-2.5 border border-slate-300 rounded-lg h-32 resize-none bg-white text-slate-900 outline-none focus:border-indigo-500" /></div>
            <div><label className="block text-[11px] font-bold text-slate-500 mb-1">Ordre</label><input type="number" value={formData.display_order} onChange={e => setFormData({...formData, display_order: parseInt(e.target.value)})} className="w-full p-2.5 border border-slate-300 rounded-lg bg-white text-slate-900 outline-none focus:border-indigo-500" /></div>
            <div><label className="block text-[11px] font-bold text-slate-500 mb-1">Statut</label><select value={formData.status} onChange={e => setFormData({...formData, status: e.target.value})} className="w-full p-2.5 border border-slate-300 rounded-lg bg-white text-slate-900 outline-none focus:border-indigo-500"><option value="active">Actif</option><option value="inactive">Inactif</option></select></div>
            <button type="submit" className="w-full bg-indigo-600 text-white py-3 rounded-lg font-bold text-xs uppercase shadow-md hover:bg-indigo-700 transition-all">{isEditingItem ? 'Mettre à jour' : 'Ajouter'}</button>
            {isEditingItem && <button type="button" onClick={() => { setIsEditingItem(false); setFormData({ category: 'AVANT DE PARTIR EN INDE', question: '', answer: '', display_order: 0, status: 'active' }); }} className="w-full mt-2 text-slate-500 py-2 text-xs font-bold uppercase hover:bg-slate-200 rounded-lg transition-all">Annuler</button>}
          </form>
        </div>
        <div className="xl:col-span-2 bg-white shadow-sm border border-slate-200 rounded-xl overflow-hidden">
          <div className="flex justify-between items-center p-4 border-b border-slate-200">
            <h3 className="font-black text-slate-800">Liste des Questions</h3>
            <button onClick={() => { setIsEditingItem(false); setFormData({ category: 'AVANT DE PARTIR EN INDE', question: '', answer: '', display_order: 0, status: 'active' }); }} className="bg-indigo-50 text-indigo-600 px-4 py-2 rounded-lg font-bold text-xs uppercase flex items-center gap-2 hover:bg-indigo-100 transition-all">
              <PlusCircle size={16} /> Nouvelle
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-50"><tr><th className="p-4 font-bold text-[11px] uppercase text-slate-400 border-b">Ordre</th><th className="p-4 font-bold text-[11px] uppercase text-slate-400 border-b">Catégorie</th><th className="p-4 font-bold text-[11px] uppercase text-slate-400 border-b w-1/2">Question</th><th className="p-4 font-bold text-[11px] uppercase text-slate-400 border-b">Statut</th><th className="p-4 font-bold text-[11px] uppercase text-slate-400 border-b text-right">Actions</th></tr></thead>
              <tbody className="divide-y divide-slate-100">
                {faqs.map(faq => (
                  <tr key={faq.id} className="hover:bg-slate-50 transition-colors">
                    <td className="p-4 font-bold text-slate-500">{faq.display_order}</td>
                    <td className="p-4"><span className="bg-indigo-50 text-indigo-600 px-2 py-1 rounded text-[9px] uppercase font-bold">{faq.category}</span></td>
                    <td className="p-4 text-slate-800">{faq.question}</td>
                    <td className="p-4"><span className={`px-2 py-1 rounded text-[9px] uppercase font-bold ${faq.status === 'active' ? 'bg-green-50 text-green-600' : 'bg-slate-100 text-slate-500'}`}>{faq.status||'active'}</span></td>
                    <td className="p-4 text-right space-x-2">
                      <button onClick={() => { setFormData({ category: faq.category, question: faq.question, answer: faq.answer, display_order: faq.display_order, status: faq.status||'active' }); setEditId(faq.id); setIsEditingItem(true); }} className="text-blue-600 text-[11px] font-bold hover:underline">Modif.</button>
                      <button onClick={() => handleDeleteItem(faq.id)} className="text-rose-500 text-[11px] font-bold hover:underline">Suppr.</button>
                    </td>
                  </tr>
                ))}
                {faqs.length === 0 && (
                  <tr><td colSpan="5" className="p-8 text-center text-slate-400">Aucune question trouvée.</td></tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="animate-fadeIn pb-24">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 border-b border-slate-200 pb-5 gap-4">
        <div>
          <span className="text-indigo-600 text-[10px] tracking-[0.3em] font-bold uppercase mb-1 block">Manager</span>
          <h2 className="text-2xl font-black text-slate-800 flex items-center gap-2">FAQ Page Manager</h2>
          <p className="text-slate-500 text-sm mt-2">Gérez complètement le design et les questions de la page FAQ.</p>
        </div>
        <div className="flex gap-3">
          <button onClick={handleReset} className="flex items-center gap-2 bg-rose-50 text-rose-600 px-4 py-2.5 rounded-xl text-sm font-bold border border-rose-200 hover:bg-rose-100 transition-all shadow-sm">
            <Trash2 size={16} /> Reset Default
          </button>
          <button onClick={handleSave} disabled={saving} className="flex items-center gap-2 bg-indigo-600 text-white px-6 py-2.5 rounded-xl text-sm font-black shadow-lg hover:shadow-indigo-500/30 hover:bg-indigo-700 transition-all transform hover:-translate-y-0.5">
            <Save size={16} /> {saving ? 'Saving...' : 'Save Config'}
          </button>
        </div>
      </div>

      {message && (
        <div className="mb-6 p-4 bg-emerald-50 text-emerald-700 text-sm font-medium rounded-xl border border-emerald-200 flex items-center gap-3 shadow-sm animate-fadeIn">
          <span className="text-xl">✨</span> {message}
        </div>
      )}

      {/* Tabs Menu */}
      <div className="flex gap-2 mb-8 bg-slate-100 p-1.5 rounded-xl overflow-x-auto border border-slate-200 no-scrollbar">
        {tabs.map(tab => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`flex items-center gap-2 px-4 py-2.5 rounded-lg font-bold text-sm whitespace-nowrap transition-all ${isActive ? 'bg-white text-indigo-600 shadow-sm border border-slate-200' : 'text-slate-600 hover:bg-slate-200 hover:text-slate-900'}`}>
              <Icon size={16} /> {tab.label}
            </button>
          );
        })}
      </div>

      <div className="space-y-6">
        {activeTab === 'items' && renderCRUDManager()}

        {activeTab === 'content' && (
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fadeIn">
             <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
                <h3 className="font-black text-slate-800 border-b pb-2 mb-4">Hero Section</h3>
                {renderInput('content', 'Hero Background Image', 'heroBg')}
                {renderTextarea('content', 'Page Title', 'pageTitle')}
                {renderInput('content', 'Subtitle', 'subtitle')}
                {renderTextarea('content', 'Description', 'description')}
             </div>
             
             <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
                <h3 className="font-black text-slate-800 border-b pb-2 mb-4">FAQ Section Text</h3>
                {renderInput('content', 'FAQ Heading', 'faqHeading')}
                {renderTextarea('content', 'FAQ Description', 'faqDescription')}
                {renderInput('content', 'Empty FAQ Message', 'emptyFaqMessage')}
                {renderInput('content', 'Search Placeholder', 'searchPlaceholder')}
             </div>

             <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
                <h3 className="font-black text-slate-800 border-b pb-2 mb-4">Stats Card (Image Card)</h3>
                {renderInput('content', 'Stats Background Image', 'statsBg')}
                {renderTextarea('content', 'Stats Quote', 'statsQuote')}
                {renderInput('content', 'Stat 1 Value', 'stats1v')}
                {renderInput('content', 'Stat 1 Label', 'stats1l')}
                {renderInput('content', 'Stat 2 Value', 'stats2v')}
                {renderInput('content', 'Stat 2 Label', 'stats2l')}
                {renderInput('content', 'Stat 3 Value', 'stats3v')}
                {renderInput('content', 'Stat 3 Label', 'stats3l')}
                {renderInput('content', 'Stat 4 Value', 'stats4v')}
                {renderInput('content', 'Stat 4 Label', 'stats4l')}
             </div>

             <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
                <h3 className="font-black text-slate-800 border-b pb-2 mb-4">CTA Section</h3>
                {renderInput('content', 'CTA Background Image', 'ctaBg')}
                {renderInput('content', 'CTA Subtitle', 'ctaSub')}
                {renderInput('content', 'CTA Title', 'ctaTitle')}
                {renderTextarea('content', 'CTA Description', 'ctaDesc')}
                {renderInput('content', 'Button Text', 'ctaBtn')}
             </div>
           </div>
        )}

        {activeTab === 'layout' && (
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fadeIn">
             <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4 col-span-1 md:col-span-3">
               <h3 className="font-black text-slate-800 border-b pb-2 mb-4">Page Layout & Background</h3>
               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                 {renderInput('layout', 'Full Page Width', 'pageWidth')}
                 {renderInput('layout', 'Container Width', 'containerWidth')}
                 {renderInput('layout', 'Section Width', 'sectionWidth')}
                 {renderInput('layout', 'Section Height', 'sectionHeight')}
                 {renderInput('layout', 'Min Height', 'minHeight')}
                 {renderInput('layout', 'Max Width', 'maxWidth')}
                 {renderColor('layout', 'Background Color', 'bgColor')}
                 {renderInput('layout', 'Background Image URL', 'bgImage')}
                 {renderColor('theme', 'Primary Color', 'primaryColor')}
               </div>
             </div>
             <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4 col-span-1 md:col-span-3">
               <h3 className="font-black text-slate-800 border-b pb-2 mb-4">Borders & Overflow</h3>
               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                 {renderInput('layout', 'Border', 'border')}
                 {renderInput('layout', 'Border Radius', 'borderRadius')}
                 {renderInput('layout', 'Box Shadow', 'boxShadow')}
                 {renderInput('layout', 'Overflow Control', 'overflow')}
               </div>
             </div>
           </div>
        )}

        {activeTab === 'spacing' && (
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fadeIn">
             <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
                <h3 className="font-black text-slate-800 border-b pb-2 mb-4">Margins</h3>
                {renderInput('spacing', 'Margin Top', 'marginTop')}
                {renderInput('spacing', 'Margin Bottom', 'marginBottom')}
                {renderInput('spacing', 'Margin Left', 'marginLeft')}
                {renderInput('spacing', 'Margin Right', 'marginRight')}
             </div>
             <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
                <h3 className="font-black text-slate-800 border-b pb-2 mb-4">Paddings</h3>
                {renderInput('spacing', 'Padding Top', 'paddingTop')}
                {renderInput('spacing', 'Padding Bottom', 'paddingBottom')}
                {renderInput('spacing', 'Padding Left', 'paddingLeft')}
                {renderInput('spacing', 'Padding Right', 'paddingRight')}
             </div>
             <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4 col-span-1 md:col-span-2">
                <h3 className="font-black text-slate-800 border-b pb-2 mb-4">Gaps</h3>
                <div className="grid grid-cols-3 gap-6">
                   {renderInput('spacing', 'Gap Between Sections', 'gapSections')}
                   {renderInput('spacing', 'Gap Between Columns', 'gapColumns')}
                   {renderInput('spacing', 'Gap Between FAQ Items', 'faqItemGap')}
                </div>
             </div>
           </div>
        )}

        {activeTab === 'alignment' && (
           <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4 animate-fadeIn">
              <h3 className="font-black text-slate-800 border-b pb-2 mb-4">Alignment Options</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                 {renderInput('alignment', 'Section Align', 'sectionAlign', 'e.g. center, left, right')}
                 {renderInput('alignment', 'Text Align', 'textAlign', 'e.g. center, left, right')}
                 {renderInput('alignment', 'FAQ Accordion Align', 'faqAlign')}
                 {renderInput('alignment', 'Category Tabs Align', 'categoryAlign')}
                 {renderInput('alignment', 'Flex Direction', 'flexDirection', 'row or column')}
                 {renderInput('alignment', 'Grid Columns', 'gridColumns', 'e.g. 1, 2, 3')}
              </div>
           </div>
        )}

        {activeTab === 'typography' && (
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fadeIn">
             <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
                <h3 className="font-black text-slate-800 border-b pb-2 mb-4">Headings</h3>
                {renderColor('typography', 'Heading Color', 'headingColor')}
                {renderInput('typography', 'Font Size', 'headingSize')}
                {renderInput('typography', 'Font Weight', 'headingWeight')}
                {renderInput('typography', 'Line Height', 'headingLineHeight')}
                {renderInput('typography', 'Letter Spacing', 'headingLetterSpacing')}
             </div>
             <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
                <h3 className="font-black text-slate-800 border-b pb-2 mb-4">Content & Accordion</h3>
                {renderColor('typography', 'Paragraph Color', 'paragraphColor')}
                {renderInput('typography', 'Paragraph Size', 'paragraphSize')}
                {renderColor('typography', 'Category Color', 'categoryColor')}
                {renderInput('typography', 'Category Size', 'categorySize')}
                {renderColor('typography', 'Question Color', 'questionColor')}
                {renderInput('typography', 'Question Size', 'questionSize')}
                {renderInput('typography', 'Question Weight', 'questionWeight')}
                {renderColor('typography', 'Answer Color', 'answerColor')}
                {renderInput('typography', 'Answer Size', 'answerSize')}
             </div>
           </div>
        )}

        {activeTab === 'accordion' && (
           <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4 animate-fadeIn">
              <h3 className="font-black text-slate-800 border-b pb-2 mb-4">FAQ Accordion Design Settings</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                 {renderColor('accordion', 'Item Background', 'bgColor')}
                 {renderInput('accordion', 'Item Padding', 'padding')}
                 {renderInput('accordion', 'Item Margin', 'margin')}
                 {renderColor('accordion', 'Border Color', 'borderColor')}
                 {renderInput('accordion', 'Border Radius', 'borderRadius')}
                 {renderInput('accordion', 'Item Shadow', 'shadow')}
                 {renderInput('accordion', 'Question Row Height', 'questionHeight')}
                 {renderInput('accordion', 'Answer Padding', 'answerPadding')}
                 {renderColor('accordion', 'Answer Background', 'answerBg')}
                 {renderColor('accordion', 'Icon Color', 'iconColor')}
                 {renderInput('accordion', 'Icon Size', 'iconSize')}
                 {renderInput('accordion', 'Open Icon (e.g. plus)', 'openIcon')}
                 {renderInput('accordion', 'Close Icon (e.g. minus)', 'closeIcon')}
                 {renderInput('accordion', 'Hover Effect', 'hoverEffect')}
                 {renderInput('accordion', 'Active Item Style', 'activeStyle')}
              </div>
           </div>
        )}

        {activeTab === 'searchCategory' && (
           <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4 animate-fadeIn">
              <h3 className="font-black text-slate-800 border-b pb-2 mb-4">Search & Category Design Settings</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                 {renderInput('searchCategory', 'Show Search Box (true/false)', 'showSearch')}
                 {renderInput('searchCategory', 'Search Input Width', 'searchWidth')}
                 {renderInput('searchCategory', 'Search Input Height', 'searchHeight')}
                 {renderInput('searchCategory', 'Search Input Padding', 'searchPadding')}
                 {renderColor('searchCategory', 'Search Border Color', 'searchBorder')}
                 {renderInput('searchCategory', 'Search Border Radius', 'searchRadius')}
                 {renderColor('searchCategory', 'Search Background Color', 'searchBg')}
                 {renderInput('searchCategory', 'Show Category Filter (true/false)', 'showCategory')}
                 {renderColor('searchCategory', 'Category Button BG', 'catBtnBg')}
                 {renderColor('searchCategory', 'Category Button Active BG', 'catBtnActive')}
                 {renderColor('searchCategory', 'Category Button Hover BG', 'catBtnHover')}
                 {renderInput('searchCategory', 'Category Button Radius', 'catBtnRadius')}
              </div>
           </div>
        )}

        {activeTab === 'classes' && (
           <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4 animate-fadeIn">
              <h3 className="font-black text-slate-800 border-b pb-2 mb-4 flex items-center gap-2"><Code size={18}/> Custom Tailwind Classes</h3>
              <p className="text-xs text-slate-500 mb-4">Définissez des classes Tailwind CSS personnalisées pour chaque section afin de contrôler entièrement le design de la page FAQ.</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                 {renderInput('classes', 'Page Wrapper Class', 'pageWrapper')}
                 {renderInput('classes', 'Container Class', 'container')}
                 {renderInput('classes', 'Hero Section Class', 'hero')}
                 {renderInput('classes', 'Heading Class', 'heading')}
                 {renderInput('classes', 'Subtitle Class', 'subtitle')}
                 {renderInput('classes', 'FAQ Wrapper Class', 'faqWrapper')}
                 {renderInput('classes', 'FAQ Item Class', 'faqItem')}
                 {renderInput('classes', 'Question Class', 'question')}
                 {renderInput('classes', 'Answer Class', 'answer')}
                 {renderInput('classes', 'Icon Class', 'icon')}
                 {renderInput('classes', 'Search Wrapper Class', 'searchWrapper')}
                 {renderInput('classes', 'Search Input Class', 'searchInput')}
                 {renderInput('classes', 'Category Wrapper Class', 'categoryWrapper')}
                 {renderInput('classes', 'Category Button Class', 'categoryButton')}
              </div>
           </div>
        )}

        {activeTab === 'responsive' && (
           <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4 animate-fadeIn">
              <h3 className="font-black text-slate-800 border-b pb-2 mb-4">Responsive Settings</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                 {renderInput('responsive', 'Mobile Layout', 'mobileLayout')}
                 {renderInput('responsive', 'Tablet Layout', 'tabletLayout')}
                 {renderInput('responsive', 'Desktop Layout', 'desktopLayout')}
                 {renderInput('responsive', 'Mobile Padding', 'mobilePadding')}
                 {renderInput('responsive', 'Tablet Padding', 'tabletPadding')}
                 {renderInput('responsive', 'Desktop Padding', 'desktopPadding')}
                 {renderInput('responsive', 'Mobile Font Size', 'mobileFontSize')}
                 {renderInput('responsive', 'Tablet Font Size', 'tabletFontSize')}
                 {renderInput('responsive', 'Desktop Font Size', 'desktopFontSize')}
                 {renderInput('responsive', 'Grid Cols (Mobile)', 'gridColsMobile')}
                 {renderInput('responsive', 'Grid Cols (Tablet)', 'gridColsTablet')}
                 {renderInput('responsive', 'Grid Cols (Desktop)', 'gridColsDesktop')}
              </div>
           </div>
        )}
      </div>
    </div>
  );
};

export default FaqManager;
