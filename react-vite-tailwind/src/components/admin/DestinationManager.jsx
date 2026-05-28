import React, { useState, useEffect, useRef } from 'react';
import DestinationContentManager from './DestinationContentManager';
import { apiList, apiRequest } from '../../lib/api';
import Destinations from '../../pages/Destinations';
import { Plus, Layout, Maximize, AlignCenter, Type, AlignLeft, Sidebar, Settings, Code, MonitorSmartphone, PlusCircle, Search, Upload, Pencil, Trash2, Tags, Image as ImageIcon, Globe, Save, Map, Star, Heart } from 'lucide-react';

const DEFAULT_CONFIG = {
  layout: { pageWidth: '100%', containerWidth: '1440px', sectionWidth: '100%', sectionHeight: 'auto', minHeight: '100vh', maxWidth: '100%', bgColor: '#f6efe3', bgImage: '', border: 'none', borderRadius: '0px', boxShadow: 'none', overflow: 'hidden', responsiveWidth: '100%' },
  spacing: { marginTop: '0px', marginBottom: '0px', marginLeft: 'auto', marginRight: 'auto', paddingTop: '64px', paddingBottom: '64px', paddingLeft: '16px', paddingRight: '16px', gapCards: '32px', gapSections: '48px', mobile: { pt: '32px', pb: '32px', px: '16px' }, tablet: { pt: '48px', pb: '48px', px: '32px' }, desktop: { pt: '64px', pb: '64px', px: '40px' } },
  alignment: { sectionAlign: 'center', textAlign: 'center', gridAlign: 'center', categoryAlign: 'center', cardContentAlign: 'left', flexDirection: 'row', gridColumns: '3' },
  typography: { headingColor: '#102d45', headingSize: '54px', headingWeight: 'bold', headingLineHeight: '1.2', headingLetterSpacing: '0', paragraphColor: '#5f6263', paragraphSize: '16px', titleSize: '24px', titleWeight: 'bold', titleColor: '#102d45', descSize: '14px', descColor: '#5f6263', categorySize: '12px', categoryColor: '#c58b32', locationSize: '12px', locationColor: '#c58b32', priceSize: '18px', priceColor: '#102d45', buttonSize: '14px', buttonWeight: 'bold' },
  content: { pageTitle: 'Nos Destinations', subtitle: 'DÉCOUVREZ LE MONDE', description: 'Explorez nos destinations sélectionnées pour des voyages inoubliables.', heroHeading: 'Où voulez-vous aller ?', heroDescription: 'Trouvez l\'inspiration pour votre prochain voyage.', destinationsHeading: 'Destinations Populaires', destinationsDescription: '', emptyDestinationsMessage: 'Aucune destination trouvée', searchPlaceholder: 'Rechercher une destination...', categoryTitle: 'Régions', exploreBtn: 'Explorer', viewDetailsBtn: 'Voir les détails', heroBg: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1200' },
  cardDesign: { bgColor: '#ffffff', padding: '0px', margin: '0px', borderColor: '#e5e7eb', borderRadius: '12px', shadow: '0 4px 6px rgba(0,0,0,0.1)', hoverEffect: 'shadow-xl -translate-y-1', imageWidth: '100%', imageHeight: '280px', objectFit: 'cover', imageRadius: '12px 12px 0 0', contentPadding: '24px', locationBadgeStyle: 'bg-white text-[#c58b32]', priceBadgeStyle: 'text-lg font-bold', btnBg: '#c58b32', btnHover: '#a96f20', btnColor: '#ffffff', btnRadius: '8px' },
  searchCategory: { showSearch: 'true', searchWidth: '100%', searchHeight: '48px', searchPadding: '0 16px', searchBorder: '#e5e7eb', searchRadius: '8px', searchBg: '#ffffff', showCategory: 'true', catBtnBg: '#ffffff', catBtnActive: '#c58b32', catBtnHover: '#f3f4f6', catBtnRadius: '999px' },
  seo: { metaTitle: 'Destinations Voyage | Indeora', metaDescription: 'Découvrez nos destinations de voyage.', metaKeywords: 'destinations, voyages' },
  classes: { pageWrapper: '', container: 'max-w-[1440px] mx-auto px-[40px]', hero: 'relative h-[720px] w-full overflow-hidden flex items-center justify-center', heading: 'text-white text-center', subtitle: 'text-white text-center', destinationsGrid: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8', destinationCard: 'bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300', destinationImage: 'w-full object-cover', destinationContent: 'p-6', destinationTitle: 'text-xl font-bold mb-3', destinationDescription: 'text-gray-600 mb-4', destinationButton: 'inline-flex items-center text-sm font-bold uppercase tracking-wider transition-colors', locationBadge: '', priceBadge: '', searchWrapper: 'w-full max-w-md relative', searchInput: 'w-full outline-none', categoryWrapper: 'flex flex-wrap gap-2 mb-8', categoryButton: 'px-4 py-2 text-sm font-medium transition-colors cursor-pointer border border-slate-200 shadow-sm' },
  responsive: { mobileLayout: 'col', tabletLayout: 'col', desktopLayout: 'row', mobilePadding: '16px', tabletPadding: '32px', desktopPadding: '40px', mobileFontSize: '14px', tabletFontSize: '16px', desktopFontSize: '16px', gridColsMobile: '1', gridColsTablet: '2', gridColsDesktop: '3', cardWidthMobile: '100%', cardWidthTablet: '100%', cardWidthDesktop: '100%', imageHeightMobile: '200px', imageHeightTablet: '240px', imageHeightDesktop: '280px' },
  theme: { primaryColor: '#c58b32', primaryHover: '#a96f20', overlayOpacity: '0.40' }
};

const DestinationManager = () => {
  const [configId, setConfigId] = useState(null);
  const [config, setConfig] = useState(DEFAULT_CONFIG);
  const [saving, setSaving] = useState(false);
  const [activeTab, setActiveTab] = useState('destinations');
  const [message, setMessage] = useState('');

  // Destinations State
  const [destinations, setDestinations] = useState([]);
  const [isEditingCard, setIsEditingCard] = useState(false);
  const [cardFormData, setCardFormData] = useState({ title: '', slug: '', image_url: '', meta_title: '', meta_description: '', status: 'active' });
  const [editCardId, setEditCardId] = useState(null);
  const [editingContentFor, setEditingContentFor] = useState(null);

  // Abouts (Items) State
  const [abouts, setAbouts] = useState([]);
  const [isEditingItem, setIsEditingItem] = useState(false);
  const [itemFormData, setItemFormData] = useState({ type: 'dest_regions', title: '', subtitle: '', description: '', image: '', display_order: 0 });
  const [editItemId, setEditItemId] = useState(null);
  const [itemTypeFilter, setItemTypeFilter] = useState('dest_regions');

  // Image upload state
  const [uploadingImage, setUploadingImage] = useState(false);
  const formImageInputRef = useRef(null);
  const inlineImageInputRef = useRef(null);
  const [inlineImageTargetId, setInlineImageTargetId] = useState(null);

  useEffect(() => {
    fetchConfig();
    fetchDestinations();
    fetchAbouts();
  }, []);

  const fetchConfig = async () => {
    try {
      const response = await apiRequest('/destinations-page');
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
    } catch (err) { console.error(err); }
  };

  const fetchDestinations = async () => {
    try {
      const rows = await apiList('/destinations?includeInactive=true');
      setDestinations(rows || []);
    } catch (err) { console.error(err); }
  };

  const fetchAbouts = async () => {
    try {
      const data = await apiList('abouts');
      setAbouts(data || []);
    } catch (error) { console.error(error); }
  };

  const handleSaveConfig = async () => {
    setSaving(true);
    try {
      if (configId) {
        await apiRequest(`/destinations-page/${configId}`, { method: 'PUT', body: JSON.stringify({ config }) });
      } else {
        const res = await apiRequest('/destinations-page', { method: 'POST', body: JSON.stringify({ config }) });
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

  const handleResetConfig = async () => {
    if(window.confirm('Voulez-vous vraiment réinitialiser aux paramètres par défaut ?')) {
        setConfig(DEFAULT_CONFIG);
        if(configId) {
            await apiRequest(`/destinations-page/${configId}`, { method: 'DELETE' });
            setConfigId(null);
        }
        setMessage('Réinitialisé aux paramètres par défaut.');
        setTimeout(() => setMessage(''), 3000);
    }
  };

  const handleChange = (section, key, value) => {
    setConfig(prev => ({ ...prev, [section]: { ...prev[section], [key]: value } }));
  };

  // Image upload
  const uploadImage = async (file) => {
    setUploadingImage(true);
    try {
      const formData = new FormData();
      formData.append('files', file);
      const data = await apiRequest('/media/upload', { method: 'POST', body: formData });
      if (data.success && data.urls && data.urls[0]) return data.urls[0];
    } catch (err) { console.error(err); }
    finally { setUploadingImage(false); }
    return null;
  };

  const handleFormImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const url = await uploadImage(file);
    if (url) {
      if(activeTab === 'destinations') setCardFormData(prev => ({ ...prev, image_url: url }));
      else if(activeTab === 'items') setItemFormData(prev => ({ ...prev, image: url }));
    }
  };

  // Destinations CRUD
  const handleCardSubmit = async (e) => {
    e.preventDefault();
    const method = isEditingCard ? 'PUT' : 'POST';
    const url = isEditingCard ? `/destinations/${editCardId}` : '/destinations';
    try {
      await apiRequest(url, { method, body: JSON.stringify(cardFormData) });
      setCardFormData({ title: '', slug: '', image_url: '', meta_title: '', meta_description: '', status: 'active' });
      setIsEditingCard(false);
      setEditCardId(null);
      fetchDestinations();
      setMessage(isEditingCard ? 'Destination mise à jour!' : 'Destination ajoutée!');
      setTimeout(() => setMessage(''), 3000);
    } catch (err) { console.error(err); }
  };

  const handleCardTitleChange = (val) => {
    setCardFormData(prev => ({
      ...prev, title: val, slug: val.toLowerCase().replace(/[^a-z0-9 -]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-')
    }));
  };

  const handleDeleteCard = async (id) => {
    if (window.confirm("Supprimer cette destination ?")) {
      await apiRequest(`/destinations/${id}`, { method: 'DELETE' });
      fetchDestinations();
      setMessage('Destination supprimée!');
      setTimeout(() => setMessage(''), 3000);
    }
  };

  // Abouts Items CRUD
  const handleItemSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isEditingItem && editItemId) {
        await apiRequest(`/abouts/${editItemId}`, { method: 'PUT', body: JSON.stringify(itemFormData) });
      } else {
        await apiRequest('/abouts', { method: 'POST', body: JSON.stringify(itemFormData) });
      }
      setIsEditingItem(false);
      setItemFormData({ type: itemTypeFilter, title: '', subtitle: '', description: '', image: '', display_order: 0 });
      setEditItemId(null);
      fetchAbouts();
      setMessage(isEditingItem ? 'Élément mis à jour!' : 'Élément ajouté!');
      setTimeout(() => setMessage(''), 3000);
    } catch (error) { console.error(error); }
  };

  const handleItemEdit = (item) => {
    setItemFormData(item);
    setEditItemId(item.id);
    setIsEditingItem(true);
  };

  const handleItemDelete = async (id) => {
    if (window.confirm("Supprimer cet élément ?")) {
      await apiRequest(`/abouts/${id}`, { method: 'DELETE' });
      fetchAbouts();
      setMessage('Élément supprimé!');
      setTimeout(() => setMessage(''), 3000);
    }
  };

  // Rendering Helpers
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
    { id: 'destinations', icon: Layout, label: 'Destinations (CRUD)' },
    { id: 'items', icon: Tags, label: 'Régions/Thèmes (CRUD)' },
    { id: 'content', icon: AlignLeft, label: 'Content' },
    { id: 'layout', icon: Layout, label: 'Layout' },
    { id: 'spacing', icon: Maximize, label: 'Spacing' },
    { id: 'alignment', icon: AlignCenter, label: 'Alignment' },
    { id: 'typography', icon: Type, label: 'Typography' },
    { id: 'cardDesign', icon: Sidebar, label: 'Card Design' },
    { id: 'searchCategory', icon: Search, label: 'Search/Category' },
    { id: 'seo', icon: Globe, label: 'SEO' },
    { id: 'classes', icon: Code, label: 'Tailwind Classes' },
    { id: 'responsive', icon: MonitorSmartphone, label: 'Responsive' }
  ];

  return (
    <div className="animate-fadeIn pb-24">
      <input ref={formImageInputRef} type="file" accept="image/*" className="hidden" onChange={handleFormImageUpload} />
      
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 border-b border-slate-200 pb-5 gap-4">
        <div>
          <span className="text-indigo-600 text-[10px] tracking-[0.3em] font-bold uppercase mb-1 block">Manager</span>
          <h2 className="text-2xl font-black text-slate-800 flex items-center gap-2">Destinations Page Manager</h2>
          <p className="text-slate-500 text-sm mt-2">Gérez le contenu, les régions, et le design de la page Destinations.</p>
        </div>
        <div className="flex gap-3">
          <button onClick={handleResetConfig} className="flex items-center gap-2 bg-rose-50 text-rose-600 px-4 py-2.5 rounded-xl text-sm font-bold border border-rose-200 hover:bg-rose-100 transition-all shadow-sm">
            <Trash2 size={16} /> Reset Default
          </button>
          <button onClick={handleSaveConfig} disabled={saving} className="flex items-center gap-2 bg-indigo-600 text-white px-6 py-2.5 rounded-xl text-sm font-black shadow-lg hover:shadow-indigo-500/30 hover:bg-indigo-700 transition-all transform hover:-translate-y-0.5">
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
        {/* DESTINATIONS CRUD TAB */}
        {activeTab === 'destinations' && (
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 animate-fadeIn">
            <div className="xl:col-span-1 bg-slate-50 p-6 shadow-sm border border-slate-200 rounded-xl h-fit">
              <h3 className="text-lg font-black text-slate-800 mb-6 border-b pb-2">{isEditingCard ? 'Modifier Destination' : 'Ajouter Destination'}</h3>
              <form onSubmit={handleCardSubmit} className="space-y-4 text-sm">
                <div>
                  <label className="block text-[11px] font-bold text-slate-500 mb-1">Image Principale</label>
                  <div onClick={() => formImageInputRef.current?.click()} className="relative w-full h-36 rounded-lg border-2 border-dashed border-slate-300 hover:border-indigo-400 cursor-pointer overflow-hidden bg-white transition-all group">
                    {cardFormData.image_url ? (
                      <><img src={cardFormData.image_url} className="w-full h-full object-cover" alt="cover" /><div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"><span className="text-white text-xs font-bold flex items-center gap-1"><Upload size={14} /> Changer</span></div></>
                    ) : (
                      <div className="flex flex-col items-center justify-center h-full text-slate-400 gap-2">{uploadingImage ? <span className="text-xs">Upload...</span> : <><Upload size={20} /><span className="text-xs font-bold">Cliquer pour uploader</span></>}</div>
                    )}
                  </div>
                  <input type="text" value={cardFormData.image_url} onChange={e => setCardFormData({...cardFormData, image_url: e.target.value})} placeholder="ou coller une URL" className="w-full mt-2 p-2.5 border border-slate-300 rounded-lg bg-white text-slate-900 text-xs outline-none" />
                </div>
                <div><label className="block text-[11px] font-bold text-slate-500 mb-1">Titre</label><input required type="text" value={cardFormData.title} onChange={e => handleCardTitleChange(e.target.value)} className="w-full p-2.5 border border-slate-300 rounded-lg bg-white text-slate-900 outline-none focus:border-indigo-500" /></div>
                <div><label className="block text-[11px] font-bold text-slate-500 mb-1">Slug URL</label><input required type="text" value={cardFormData.slug} onChange={e => setCardFormData({...cardFormData, slug: e.target.value})} className="w-full p-2.5 border border-slate-300 rounded-lg font-mono text-xs bg-white text-slate-900 outline-none" /></div>
                <div><label className="block text-[11px] font-bold text-slate-500 mb-1">Description Courte</label><textarea value={cardFormData.meta_description} onChange={e => setCardFormData({...cardFormData, meta_description: e.target.value})} className="w-full p-2.5 border border-slate-300 rounded-lg h-20 resize-none bg-white text-slate-900 outline-none focus:border-indigo-500" /></div>
                <div><label className="block text-[11px] font-bold text-slate-500 mb-1">Statut</label><select value={cardFormData.status} onChange={e => setCardFormData({...cardFormData, status: e.target.value})} className="w-full p-2.5 border border-slate-300 rounded-lg bg-white text-slate-900 outline-none"><option value="active">Actif</option><option value="inactive">Inactif</option></select></div>
                <button type="submit" className="w-full bg-indigo-600 text-white py-3 rounded-lg font-bold text-xs uppercase shadow-md hover:bg-indigo-700 transition-all">{isEditingCard ? 'Mettre à jour' : 'Ajouter'}</button>
                {isEditingCard && <button type="button" onClick={() => { setIsEditingCard(false); setCardFormData({ title:'', slug:'', image_url:'', meta_title:'', meta_description:'', status:'active' }); }} className="w-full mt-2 text-slate-500 py-2 text-xs font-bold uppercase hover:bg-slate-200 rounded-lg transition-all">Annuler</button>}
              </form>
            </div>
            
            <div className="xl:col-span-2 bg-white shadow-sm border border-slate-200 rounded-xl overflow-hidden">
              <div className="flex justify-between items-center p-4 border-b border-slate-200">
                <h3 className="font-black text-slate-800">Liste des Destinations ({destinations.length})</h3>
                <button onClick={() => { setIsEditingCard(false); setCardFormData({ title:'', slug:'', image_url:'', meta_title:'', meta_description:'', status:'active' }); }} className="bg-indigo-50 text-indigo-600 px-4 py-2 rounded-lg font-bold text-xs uppercase flex items-center gap-2 hover:bg-indigo-100 transition-all">
                  <PlusCircle size={16} /> Nouvelle
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead className="bg-slate-50">
                    <tr>
                      <th className="p-4 font-bold text-[11px] uppercase text-slate-400 border-b">Destination</th>
                      <th className="p-4 font-bold text-[11px] uppercase text-slate-400 border-b">Statut</th>
                      <th className="p-4 font-bold text-[11px] uppercase text-slate-400 border-b text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {destinations.map(dest => (
                      <tr key={dest.id} className="hover:bg-slate-50 transition-colors">
                        <td className="p-4 flex items-center gap-3">
                          {dest.image_url ? <img src={dest.image_url} className="w-12 h-12 object-cover rounded" /> : <div className="w-12 h-12 bg-slate-100 rounded border"></div>}
                          <div><div className="font-bold">{dest.title}</div><div className="text-[10px] text-slate-400 font-mono">/{dest.slug}</div></div>
                        </td>
                        <td className="p-4"><span className={`px-2 py-1 rounded text-[10px] uppercase font-bold ${dest.status === 'active' ? 'bg-green-50 text-green-600' : 'bg-slate-100 text-slate-500'}`}>{dest.status || 'active'}</span></td>
                        <td className="p-4 text-right space-x-2">
                          <button onClick={() => setEditingContentFor(dest)} className="text-indigo-600 bg-indigo-50 border border-indigo-100 px-2 py-1 rounded text-[10px] uppercase hover:bg-indigo-100 transition-colors">Contenu Page</button>
                          <button onClick={() => { setCardFormData({ title: dest.title, slug: dest.slug, image_url: dest.image_url||'', meta_description: dest.meta_description||'', status: dest.status }); setEditCardId(dest.id); setIsEditingCard(true); }} className="text-blue-600 text-[11px] font-bold hover:underline">Modif.</button>
                          <button onClick={() => handleDeleteCard(dest.id)} className="text-rose-500 text-[11px] font-bold hover:underline">Suppr.</button>
                        </td>
                      </tr>
                    ))}
                    {destinations.length === 0 && <tr><td colSpan="3" className="p-8 text-center text-slate-400">Aucune destination trouvée.</td></tr>}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* ITEMS (ABOUTS) CRUD TAB */}
        {activeTab === 'items' && (
          <div className="animate-fadeIn">
             <div className="flex gap-2 mb-6 border-b pb-2">
               {['dest_regions', 'dest_themes', 'dest_features'].map(t => (
                 <button key={t} onClick={() => { setItemTypeFilter(t); setItemFormData({...itemFormData, type: t}); }} className={`px-4 py-2 text-sm font-bold uppercase rounded-t-lg transition-colors ${itemTypeFilter === t ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-500 hover:bg-slate-200'}`}>
                   {t === 'dest_regions' ? 'Régions' : t === 'dest_themes' ? 'Thèmes' : 'USPs / Features'}
                 </button>
               ))}
             </div>
             
             <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
               <div className="xl:col-span-1 bg-slate-50 p-6 shadow-sm border border-slate-200 rounded-xl h-fit">
                 <h3 className="text-lg font-black text-slate-800 mb-6 border-b pb-2">{isEditingItem ? 'Modifier Élément' : 'Ajouter Élément'}</h3>
                 <form onSubmit={handleItemSubmit} className="space-y-4 text-sm">
                   <div>
                      <label className="block text-[11px] font-bold text-slate-500 mb-1">Image Principale</label>
                      <div onClick={() => formImageInputRef.current?.click()} className="relative w-full h-36 rounded-lg border-2 border-dashed border-slate-300 hover:border-indigo-400 cursor-pointer overflow-hidden bg-white transition-all group">
                        {itemFormData.image ? (
                          <><img src={itemFormData.image} className="w-full h-full object-cover" alt="cover" /><div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"><span className="text-white text-xs font-bold flex items-center gap-1"><Upload size={14} /> Changer</span></div></>
                        ) : (
                          <div className="flex flex-col items-center justify-center h-full text-slate-400 gap-2">{uploadingImage ? <span className="text-xs">Upload...</span> : <><Upload size={20} /><span className="text-xs font-bold">Cliquer pour uploader</span></>}</div>
                        )}
                      </div>
                      <input type="text" value={itemFormData.image} onChange={e => setItemFormData({...itemFormData, image: e.target.value})} placeholder="ou coller une URL" className="w-full mt-2 p-2.5 border border-slate-300 rounded-lg bg-white text-slate-900 text-xs outline-none" />
                   </div>
                   <div><label className="block text-[11px] font-bold text-slate-500 mb-1">Titre</label><input required type="text" value={itemFormData.title} onChange={e => setItemFormData({...itemFormData, title: e.target.value})} className="w-full p-2.5 border border-slate-300 rounded-lg bg-white text-slate-900 outline-none" /></div>
                   {(itemTypeFilter === 'dest_regions' || itemTypeFilter === 'dest_themes') && <div><label className="block text-[11px] font-bold text-slate-500 mb-1">Lien / Sous-titre</label><input type="text" value={itemFormData.subtitle} onChange={e => setItemFormData({...itemFormData, subtitle: e.target.value})} className="w-full p-2.5 border border-slate-300 rounded-lg bg-white text-slate-900 outline-none" /></div>}
                   {itemTypeFilter !== 'dest_themes' && <div><label className="block text-[11px] font-bold text-slate-500 mb-1">Description</label><textarea value={itemFormData.description} onChange={e => setItemFormData({...itemFormData, description: e.target.value})} className="w-full p-2.5 border border-slate-300 rounded-lg h-20 resize-none bg-white text-slate-900 outline-none" /></div>}
                   <div><label className="block text-[11px] font-bold text-slate-500 mb-1">Ordre d'affichage</label><input type="number" value={itemFormData.display_order} onChange={e => setItemFormData({...itemFormData, display_order: parseInt(e.target.value)})} className="w-full p-2.5 border border-slate-300 rounded-lg bg-white text-slate-900 outline-none" /></div>
                   
                   <button type="submit" className="w-full bg-indigo-600 text-white py-3 rounded-lg font-bold text-xs uppercase shadow-md hover:bg-indigo-700 transition-all">{isEditingItem ? 'Mettre à jour' : 'Ajouter'}</button>
                   {isEditingItem && <button type="button" onClick={() => { setIsEditingItem(false); setItemFormData({ type: itemTypeFilter, title: '', subtitle: '', description: '', image: '', display_order: 0 }); }} className="w-full mt-2 text-slate-500 py-2 text-xs font-bold uppercase hover:bg-slate-200 rounded-lg transition-all">Annuler</button>}
                 </form>
               </div>
               
               <div className="xl:col-span-2 bg-white shadow-sm border border-slate-200 rounded-xl overflow-hidden h-fit">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-slate-50"><tr><th className="p-4 font-bold text-[11px] uppercase text-slate-400 border-b">Élément</th><th className="p-4 font-bold text-[11px] uppercase text-slate-400 border-b">Ordre</th><th className="p-4 font-bold text-[11px] uppercase text-slate-400 border-b text-right">Actions</th></tr></thead>
                    <tbody className="divide-y divide-slate-100">
                       {abouts.filter(a => a.type === itemTypeFilter).sort((a,b) => a.display_order - b.display_order).map(item => (
                         <tr key={item.id} className="hover:bg-slate-50">
                           <td className="p-4 flex items-center gap-3">
                             {item.image ? <img src={item.image} className="w-10 h-10 object-cover rounded" /> : <div className="w-10 h-10 bg-slate-100 rounded border"></div>}
                             <div className="font-bold text-slate-800">{item.title}</div>
                           </td>
                           <td className="p-4">{item.display_order}</td>
                           <td className="p-4 text-right space-x-2">
                              <button onClick={() => handleItemEdit(item)} className="text-blue-600 text-[11px] font-bold">Modif.</button>
                              <button onClick={() => handleItemDelete(item.id)} className="text-rose-500 text-[11px] font-bold">Suppr.</button>
                           </td>
                         </tr>
                       ))}
                    </tbody>
                  </table>
               </div>
             </div>
          </div>
        )}

        {/* CONTENT TAB */}
        {activeTab === 'content' && (
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fadeIn">
             <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
                <h3 className="font-black text-slate-800 border-b pb-2 mb-4">Hero Section</h3>
                {renderInput('content', 'Hero Background Image', 'heroBg')}
                {renderInput('content', 'Hero Heading', 'heroHeading')}
                {renderTextarea('content', 'Hero Description', 'heroDescription')}
                {renderInput('theme', 'Hero Overlay Opacity (0 to 1)', 'overlayOpacity')}
             </div>
             
             <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
                <h3 className="font-black text-slate-800 border-b pb-2 mb-4">Destinations Section Text</h3>
                {renderInput('content', 'Page Title', 'pageTitle')}
                {renderInput('content', 'Subtitle', 'subtitle')}
                {renderTextarea('content', 'Description', 'description')}
                {renderInput('content', 'Destinations Heading', 'destinationsHeading')}
                {renderTextarea('content', 'Destinations Description', 'destinationsDescription')}
                {renderInput('content', 'Empty Message', 'emptyDestinationsMessage')}
             </div>

             <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
                <h3 className="font-black text-slate-800 border-b pb-2 mb-4">Search & Categories</h3>
                {renderInput('content', 'Search Placeholder Text', 'searchPlaceholder')}
                {renderInput('content', 'Category Section Title', 'categoryTitle')}
                {renderInput('content', 'Explore Button Text', 'exploreBtn')}
                {renderInput('content', 'View Details Button Text', 'viewDetailsBtn')}
             </div>
           </div>
        )}

        {/* LAYOUT TAB */}
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

        {/* SPACING TAB */}
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
                   {renderInput('spacing', 'Gap Between Cards', 'gapCards')}
                </div>
             </div>
           </div>
        )}

        {/* ALIGNMENT TAB */}
        {activeTab === 'alignment' && (
           <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4 animate-fadeIn">
              <h3 className="font-black text-slate-800 border-b pb-2 mb-4">Alignment Options</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                 {renderInput('alignment', 'Section Align', 'sectionAlign', 'center, left, right')}
                 {renderInput('alignment', 'Text Align', 'textAlign', 'center, left, right')}
                 {renderInput('alignment', 'Grid Align', 'gridAlign')}
                 {renderInput('alignment', 'Category Tabs Align', 'categoryAlign')}
                 {renderInput('alignment', 'Card Content Align', 'cardContentAlign')}
                 {renderInput('alignment', 'Flex Direction', 'flexDirection', 'row or column')}
                 {renderInput('alignment', 'Grid Columns', 'gridColumns', 'e.g. 1, 2, 3')}
              </div>
           </div>
        )}

        {/* TYPOGRAPHY TAB */}
        {activeTab === 'typography' && (
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fadeIn">
             <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
                <h3 className="font-black text-slate-800 border-b pb-2 mb-4">Headings & Text</h3>
                {renderColor('typography', 'Heading Color', 'headingColor')}
                {renderInput('typography', 'Heading Font Size', 'headingSize')}
                {renderInput('typography', 'Heading Font Weight', 'headingWeight')}
                {renderInput('typography', 'Heading Line Height', 'headingLineHeight')}
                {renderInput('typography', 'Heading Letter Spacing', 'headingLetterSpacing')}
                {renderColor('typography', 'Paragraph Color', 'paragraphColor')}
                {renderInput('typography', 'Paragraph Size', 'paragraphSize')}
             </div>
             <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
                <h3 className="font-black text-slate-800 border-b pb-2 mb-4">Card Typography</h3>
                {renderColor('typography', 'Title Color', 'titleColor')}
                {renderInput('typography', 'Title Size', 'titleSize')}
                {renderInput('typography', 'Title Weight', 'titleWeight')}
                {renderColor('typography', 'Description Color', 'descColor')}
                {renderInput('typography', 'Description Size', 'descSize')}
                {renderColor('typography', 'Category Color', 'categoryColor')}
                {renderInput('typography', 'Category Size', 'categorySize')}
                {renderColor('typography', 'Location Color', 'locationColor')}
                {renderInput('typography', 'Location Size', 'locationSize')}
                {renderColor('typography', 'Price Color', 'priceColor')}
                {renderInput('typography', 'Price Size', 'priceSize')}
                {renderInput('typography', 'Button Size', 'buttonSize')}
                {renderInput('typography', 'Button Weight', 'buttonWeight')}
             </div>
           </div>
        )}

        {/* CARD DESIGN TAB */}
        {activeTab === 'cardDesign' && (
           <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4 animate-fadeIn">
              <h3 className="font-black text-slate-800 border-b pb-2 mb-4">Destination Card Design</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                 {renderColor('cardDesign', 'Card Background', 'bgColor')}
                 {renderInput('cardDesign', 'Card Padding', 'padding')}
                 {renderInput('cardDesign', 'Card Margin', 'margin')}
                 {renderColor('cardDesign', 'Border Color', 'borderColor')}
                 {renderInput('cardDesign', 'Border Radius', 'borderRadius')}
                 {renderInput('cardDesign', 'Card Shadow', 'shadow')}
                 {renderInput('cardDesign', 'Hover Effect (Tailwind)', 'hoverEffect')}
                 {renderInput('cardDesign', 'Image Width', 'imageWidth')}
                 {renderInput('cardDesign', 'Image Height', 'imageHeight')}
                 {renderInput('cardDesign', 'Image Object Fit', 'objectFit')}
                 {renderInput('cardDesign', 'Image Border Radius', 'imageRadius')}
                 {renderInput('cardDesign', 'Content Padding', 'contentPadding')}
                 {renderInput('cardDesign', 'Location Badge Style', 'locationBadgeStyle')}
                 {renderInput('cardDesign', 'Price Badge Style', 'priceBadgeStyle')}
                 {renderColor('cardDesign', 'Button Background', 'btnBg')}
                 {renderColor('cardDesign', 'Button Hover Color', 'btnHover')}
                 {renderColor('cardDesign', 'Button Text Color', 'btnColor')}
                 {renderInput('cardDesign', 'Button Border Radius', 'btnRadius')}
              </div>
           </div>
        )}

        {/* SEARCH/CATEGORY TAB */}
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

        {/* SEO TAB */}
        {activeTab === 'seo' && (
           <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4 animate-fadeIn">
              <h3 className="font-black text-slate-800 border-b pb-2 mb-4">Page SEO Details</h3>
              <div className="grid grid-cols-1 gap-6">
                 {renderInput('seo', 'Meta Title', 'metaTitle')}
                 {renderTextarea('seo', 'Meta Description', 'metaDescription')}
                 {renderInput('seo', 'Meta Keywords', 'metaKeywords')}
              </div>
           </div>
        )}

        {/* CLASSES TAB */}
        {activeTab === 'classes' && (
           <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4 animate-fadeIn">
              <h3 className="font-black text-slate-800 border-b pb-2 mb-4 flex items-center gap-2"><Code size={18}/> Custom Tailwind Classes</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                 {renderInput('classes', 'Page Wrapper Class', 'pageWrapper')}
                 {renderInput('classes', 'Container Class', 'container')}
                 {renderInput('classes', 'Hero Section Class', 'hero')}
                 {renderInput('classes', 'Heading Class', 'heading')}
                 {renderInput('classes', 'Subtitle Class', 'subtitle')}
                 {renderInput('classes', 'Destinations Grid Class', 'destinationsGrid')}
                 {renderInput('classes', 'Destination Card Class', 'destinationCard')}
                 {renderInput('classes', 'Destination Image Class', 'destinationImage')}
                 {renderInput('classes', 'Destination Content Class', 'destinationContent')}
                 {renderInput('classes', 'Destination Title Class', 'destinationTitle')}
                 {renderInput('classes', 'Destination Description Class', 'destinationDescription')}
                 {renderInput('classes', 'Destination Button Class', 'destinationButton')}
                 {renderInput('classes', 'Location Badge Class', 'locationBadge')}
                 {renderInput('classes', 'Price Badge Class', 'priceBadge')}
                 {renderInput('classes', 'Search Wrapper Class', 'searchWrapper')}
                 {renderInput('classes', 'Search Input Class', 'searchInput')}
                 {renderInput('classes', 'Category Wrapper Class', 'categoryWrapper')}
                 {renderInput('classes', 'Category Button Class', 'categoryButton')}
              </div>
           </div>
        )}

        {/* RESPONSIVE TAB */}
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
                 {renderInput('responsive', 'Image Height (Mobile)', 'imageHeightMobile')}
                 {renderInput('responsive', 'Image Height (Tablet)', 'imageHeightTablet')}
                 {renderInput('responsive', 'Image Height (Desktop)', 'imageHeightDesktop')}
              </div>
           </div>
        )}
      </div>

      {editingContentFor && (
        <DestinationContentManager
          destination={editingContentFor}
          onClose={() => { setEditingContentFor(null); fetchDestinations(); }}
        />
      )}
    </div>
  );
};

export default DestinationManager;
