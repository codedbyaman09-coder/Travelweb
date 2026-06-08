import React, { useState, useEffect, useRef } from 'react';
import BlogContentManager from './BlogContentManager';
import BlogCategoryManager from './BlogCategoryManager';
import { apiList, apiRequest, API_BASE_URL } from '../../lib/api';
import Blog from '../../pages/Blog';
import { Plus, Layout, Maximize, AlignCenter, Type, AlignLeft, Sidebar, Settings, Code, MonitorSmartphone, PlusCircle, Search, Upload, Pencil, Trash2, Tags, Image as ImageIcon, Globe, Save } from 'lucide-react';

const DEFAULT_CONFIG = {
  layout: { pageWidth: '100%', containerWidth: '1440px', sectionWidth: '100%', sectionHeight: 'auto', minHeight: '100vh', maxWidth: '100%', bgColor: '#FAF9F6', bgImage: '', border: 'none', borderRadius: '0px', boxShadow: 'none', overflow: 'hidden', responsiveWidth: '100%' },
  spacing: { marginTop: '0px', marginBottom: '0px', marginLeft: 'auto', marginRight: 'auto', paddingTop: '64px', paddingBottom: '64px', paddingLeft: '16px', paddingRight: '16px', gapCards: '32px', gapSections: '48px', mobile: { pt: '32px', pb: '32px', px: '16px' }, tablet: { pt: '48px', pb: '48px', px: '32px' }, desktop: { pt: '64px', pb: '64px', px: '40px' } },
  alignment: { sectionAlign: 'center', textAlign: 'center', gridAlign: 'center', categoryAlign: 'center', cardContentAlign: 'left', flexDirection: 'row', gridColumns: '3' },
  typography: { headingColor: '#1a1a1a', headingSize: '54px', headingWeight: 'bold', headingLineHeight: '1.2', headingLetterSpacing: '0', paragraphColor: '#6b7280', paragraphSize: '16px', titleSize: '24px', titleWeight: 'bold', titleColor: '#1a1a1a', descSize: '14px', descColor: '#6b7280', categorySize: '12px', categoryColor: '#A88B52', dateSize: '12px', dateColor: '#999999', authorSize: '12px', authorColor: '#999999' },
  content: { pageTitle: 'Notre Blog', subtitle: 'ACTUALITÉS & INSPIRATIONS', description: 'Découvrez nos derniers articles, conseils de voyage et inspirations pour votre prochaine aventure en Inde.', heroHeading: 'Le Journal de Voyage', heroDescription: 'Plongez au cœur de l\'Inde avec nos récits et conseils.', blogHeading: 'Derniers Articles', blogDescription: '', emptyBlogMessage: 'Aucun article trouvé', searchPlaceholder: 'Rechercher un article...', categoryTitle: 'Catégories', readMoreBtn: 'Lire la suite', heroBg: 'https://images.unsplash.com/photo-1548013146-72479768bbfd?q=80&w=1200' },
  cardDesign: { bgColor: '#ffffff', padding: '0px', margin: '0px', borderColor: '#e5e7eb', borderRadius: '12px', shadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)', hoverEffect: 'shadow-xl -translate-y-1', imageWidth: '100%', imageHeight: '240px', objectFit: 'cover', imageRadius: '12px 12px 0 0', contentPadding: '24px', btnBg: 'transparent', btnHover: '#f3f4f6', btnColor: '#A88B52', btnRadius: '4px' },
  searchCategory: { showSearch: 'true', searchWidth: '100%', searchHeight: '48px', searchPadding: '0 16px', searchBorder: '#e5e7eb', searchRadius: '8px', searchBg: '#ffffff', showCategory: 'true', catBtnBg: '#ffffff', catBtnActive: '#A88B52', catBtnHover: '#f3f4f6', catBtnRadius: '999px' },
  seo: { metaTitle: 'Blog Voyage Inde | Indeora Voyages', metaDescription: 'Découvrez nos conseils, itinéraires et récits de voyage en Inde.', metaKeywords: 'blog inde, voyage inde, conseils voyage inde' },
  classes: { pageWrapper: '', container: 'max-w-[1440px] mx-auto px-[40px]', hero: 'relative min-h-[40vh] flex items-center justify-center bg-slate-900', heading: 'text-white text-center', subtitle: 'text-white text-center', blogGrid: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8', blogCard: 'bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300', blogImage: 'w-full object-cover', blogContent: 'p-6', blogTitle: 'text-xl font-bold mb-3', blogDescription: 'text-gray-600 mb-4', blogButton: 'inline-flex items-center text-sm font-bold uppercase tracking-wider transition-colors', searchWrapper: 'w-full max-w-md relative', searchInput: 'w-full outline-none', categoryWrapper: 'flex flex-wrap gap-2 mb-8', categoryButton: 'px-4 py-2 text-sm font-medium transition-colors cursor-pointer border border-slate-200 shadow-sm' },
  responsive: { mobileLayout: 'col', tabletLayout: 'col', desktopLayout: 'row', mobilePadding: '16px', tabletPadding: '32px', desktopPadding: '40px', mobileFontSize: '14px', tabletFontSize: '16px', desktopFontSize: '16px', gridColsMobile: '1', gridColsTablet: '2', gridColsDesktop: '3', cardWidthMobile: '100%', cardWidthTablet: '100%', cardWidthDesktop: '100%', imageHeightMobile: '200px', imageHeightTablet: '240px', imageHeightDesktop: '240px' },
  theme: { primaryColor: '#A88B52', overlayOpacity: '0.40' }
};

const BlogManager = () => {
  const [configId, setConfigId] = useState(null);
  const [config, setConfig] = useState(DEFAULT_CONFIG);
  const [saving, setSaving] = useState(false);
  const [activeTab, setActiveTab] = useState('blogs');
  const [message, setMessage] = useState('');

  // Blog Cards State
  const [blogs, setBlogs] = useState([]);
  const [isEditingCard, setIsEditingCard] = useState(false);
  const [cardFormData, setCardFormData] = useState({ title: '', slug: '', category: '', excerpt: '', content: '', image_url: '', read_time: '5 min', status: 'active' });
  const [editCardId, setEditCardId] = useState(null);
  const [editingContentFor, setEditingContentFor] = useState(null);

  // Image upload state
  const [uploadingImage, setUploadingImage] = useState(false);
  const formImageInputRef = useRef(null);
  const inlineImageInputRef = useRef(null);
  const [inlineImageTargetId, setInlineImageTargetId] = useState(null);

  // Categories
  const [blogCategories, setBlogCategories] = useState([]);

  useEffect(() => {
    fetchConfig();
    fetchBlogs();
    fetchCategories();
  }, []);

  const fetchConfig = async () => {
    try {
      const response = await apiRequest('/blog-page');
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

  const fetchBlogs = async () => {
    try {
      const rows = await apiList('/blogs?includeInactive=true', ['blogs']);
      setBlogs(rows || []);
    } catch (err) { console.error(err); }
  };

  const fetchCategories = async () => {
    try {
      const rows = await apiList('/blog-categories?includeInactive=true');
      setBlogCategories(rows || []);
    } catch (err) { console.error(err); }
  };

  const handleSaveConfig = async () => {
    setSaving(true);
    try {
      if (configId) {
        await apiRequest(`/blog-page/${configId}`, { method: 'PUT', body: JSON.stringify({ config }) });
      } else {
        const res = await apiRequest('/blog-page', { method: 'POST', body: JSON.stringify({ config }) });
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
            await apiRequest(`/blog-page/${configId}`, { method: 'DELETE' });
            setConfigId(null);
        }
        setMessage('Réinitialisé aux paramètres par défaut.');
        setTimeout(() => setMessage(''), 3000);
    }
  };

  const handleChange = (section, key, value) => {
    setConfig(prev => ({ ...prev, [section]: { ...prev[section], [key]: value } }));
  };

  // Blog CRUD handlers
  const handleCardSubmit = async (e) => {
    e.preventDefault();
    const method = isEditingCard ? 'PUT' : 'POST';
    const url = isEditingCard ? `/blogs/${editCardId}` : '/blogs';
    try {
      await apiRequest(url, { method, body: JSON.stringify(cardFormData) });
      setCardFormData({ title: '', slug: '', category: '', excerpt: '', content: '', image_url: '', read_time: '5 min', status: 'active' });
      setIsEditingCard(false);
      setEditCardId(null);
      fetchBlogs();
      setMessage(isEditingCard ? 'Blog mis à jour!' : 'Blog ajouté!');
      setTimeout(() => setMessage(''), 3000);
    } catch (err) { console.error(err); }
  };

  const handleCardTitleChange = (val) => {
    setCardFormData(prev => ({
      ...prev, title: val, slug: val.toLowerCase().replace(/[^a-z0-9 -]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-')
    }));
  };

  const handleDeleteBlog = async (id) => {
    if (window.confirm("Supprimer ce blog ?")) {
      await apiRequest(`/blogs/${id}`, { method: 'DELETE' });
      fetchBlogs();
      setMessage('Blog supprimé!');
      setTimeout(() => setMessage(''), 3000);
    }
  };

  // Image upload handlers
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
    if (url) setCardFormData(prev => ({ ...prev, image_url: url }));
  };

  const handleInlineImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file || !inlineImageTargetId) return;
    const url = await uploadImage(file);
    if (url) {
      const blog = blogs.find(b => b.id === inlineImageTargetId);
      if (blog) {
        await apiRequest(`/blogs/${inlineImageTargetId}`, { method: 'PUT', body: JSON.stringify({ ...blog, image_url: url }) });
        fetchBlogs();
      }
    }
    setInlineImageTargetId(null);
  };

  // Inline title edit
  const [inlineEditId, setInlineEditId] = useState(null);
  const [inlineEditTitle, setInlineEditTitle] = useState('');

  const handleInlineTitleSave = async (blog) => {
    if (!inlineEditTitle.trim() || inlineEditTitle === blog.title) { setInlineEditId(null); return; }
    await apiRequest(`/blogs/${blog.id}`, { method: 'PUT', body: JSON.stringify({ ...blog, title: inlineEditTitle }) });
    setInlineEditId(null);
    fetchBlogs();
  };

  // Config Input Helpers
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
    { id: 'blogs', icon: Layout, label: 'Blog Posts (CRUD)' },
    { id: 'categories', icon: Tags, label: 'Categories' },
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

  const renderCRUDManager = () => {
    const cats = blogCategories.length > 0 ? blogCategories.map(c => c.name || c) : ['Culture & Histoire','Nature & Bien-être','Spiritualité','Aventure','Plage & Détente'];
    return (
      <div className="space-y-6 animate-fadeIn">
        <input ref={formImageInputRef} type="file" accept="image/*" className="hidden" onChange={handleFormImageUpload} />
        <input ref={inlineImageInputRef} type="file" accept="image/*" className="hidden" onChange={handleInlineImageUpload} />

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          <div className="xl:col-span-1 bg-slate-50 p-6 shadow-sm border border-slate-200 rounded-xl h-fit">
            <h3 className="text-lg font-black text-slate-800 mb-6 border-b pb-2">{isEditingCard ? 'Modifier Blog' : 'Ajouter Blog'}</h3>
            <form onSubmit={handleCardSubmit} className="space-y-4 text-sm">
              <div>
                <label className="block text-[11px] font-bold text-slate-500 mb-1">Image de couverture</label>
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
              <div><label className="block text-[11px] font-bold text-slate-500 mb-1">Catégorie</label><select value={cardFormData.category} onChange={e => setCardFormData({...cardFormData, category: e.target.value})} className="w-full p-2.5 border border-slate-300 rounded-lg bg-white text-slate-900 outline-none focus:border-indigo-500"><option value="">Sélectionner...</option>{cats.map(c => <option key={c} value={c}>{c}</option>)}</select></div>
              <div><label className="block text-[11px] font-bold text-slate-500 mb-1">Temps de lecture</label><input type="text" value={cardFormData.read_time} onChange={e => setCardFormData({...cardFormData, read_time: e.target.value})} className="w-full p-2.5 border border-slate-300 rounded-lg bg-white text-slate-900 outline-none" /></div>
              <div><label className="block text-[11px] font-bold text-slate-500 mb-1">Extrait</label><textarea value={cardFormData.excerpt} onChange={e => setCardFormData({...cardFormData, excerpt: e.target.value})} className="w-full p-2.5 border border-slate-300 rounded-lg h-20 resize-none bg-white text-slate-900 outline-none focus:border-indigo-500" /></div>
              <div><label className="block text-[11px] font-bold text-slate-500 mb-1">Statut</label><select value={cardFormData.status} onChange={e => setCardFormData({...cardFormData, status: e.target.value})} className="w-full p-2.5 border border-slate-300 rounded-lg bg-white text-slate-900 outline-none"><option value="active">Actif</option><option value="inactive">Inactif</option></select></div>
              <button type="submit" className="w-full bg-indigo-600 text-white py-3 rounded-lg font-bold text-xs uppercase shadow-md hover:bg-indigo-700 transition-all">{isEditingCard ? 'Mettre à jour' : 'Publier'}</button>
              {isEditingCard && <button type="button" onClick={() => { setIsEditingCard(false); setCardFormData({ title:'', slug:'', category:'', excerpt:'', content:'', image_url:'', read_time:'5 min', status:'active' }); }} className="w-full mt-2 text-slate-500 py-2 text-xs font-bold uppercase hover:bg-slate-200 rounded-lg transition-all">Annuler</button>}
            </form>
          </div>

          <div className="xl:col-span-2 bg-white shadow-sm border border-slate-200 rounded-xl overflow-hidden">
            <div className="flex justify-between items-center p-4 border-b border-slate-200">
              <h3 className="font-black text-slate-800">Liste des Blogs ({blogs.length})</h3>
              <button onClick={() => { setIsEditingCard(false); setCardFormData({ title:'', slug:'', category:'', excerpt:'', content:'', image_url:'', read_time:'5 min', status:'active' }); }} className="bg-indigo-50 text-indigo-600 px-4 py-2 rounded-lg font-bold text-xs uppercase flex items-center gap-2 hover:bg-indigo-100 transition-all">
                <PlusCircle size={16} /> Nouveau
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="p-4 font-bold text-[11px] uppercase text-slate-400 border-b">Image</th>
                    <th className="p-4 font-bold text-[11px] uppercase text-slate-400 border-b">Titre</th>
                    <th className="p-4 font-bold text-[11px] uppercase text-slate-400 border-b">Catégorie</th>
                    <th className="p-4 font-bold text-[11px] uppercase text-slate-400 border-b">Statut</th>
                    <th className="p-4 font-bold text-[11px] uppercase text-slate-400 border-b text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {blogs.map(blog => (
                    <tr key={blog.id} className="hover:bg-slate-50 transition-colors">
                      <td className="p-4">
                        <div className="relative w-14 h-14 rounded-lg overflow-hidden cursor-pointer group border border-slate-200" onClick={() => { setInlineImageTargetId(blog.id); inlineImageInputRef.current?.click(); }}>
                          {blog.image_url ? <img src={blog.image_url} className="w-full h-full object-cover" alt={blog.title} /> : <div className="w-full h-full bg-slate-100 flex items-center justify-center"><ImageIcon size={16} className="text-slate-400" /></div>}
                          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"><Upload size={14} className="text-white" /></div>
                        </div>
                      </td>
                      <td className="p-4">
                        {inlineEditId === blog.id ? (
                          <div className="flex items-center gap-2"><input autoFocus type="text" value={inlineEditTitle} onChange={e => setInlineEditTitle(e.target.value)} onBlur={() => handleInlineTitleSave(blog)} onKeyDown={e => { if (e.key === 'Enter') handleInlineTitleSave(blog); if (e.key === 'Escape') setInlineEditId(null); }} className="border border-indigo-400 rounded px-2 py-1 text-sm w-full outline-none focus:ring-1 focus:ring-indigo-500" /></div>
                        ) : (
                          <div className="flex items-center gap-2 group/title">
                            <div><div className="font-bold text-slate-800">{blog.title}</div><div className="text-[10px] text-slate-400 font-mono">/{blog.slug}</div></div>
                            <button onClick={() => { setInlineEditId(blog.id); setInlineEditTitle(blog.title); }} className="opacity-0 group-hover/title:opacity-100 transition-opacity p-1 text-slate-400 hover:text-indigo-600"><Pencil size={12} /></button>
                          </div>
                        )}
                      </td>
                      <td className="p-4"><span className="bg-indigo-50 text-indigo-600 px-2 py-1 rounded text-[10px] uppercase font-bold">{blog.category}</span></td>
                      <td className="p-4"><span className={`px-2 py-1 rounded text-[10px] uppercase font-bold ${blog.status === 'active' ? 'bg-green-50 text-green-600' : 'bg-slate-100 text-slate-500'}`}>{blog.status || 'active'}</span></td>
                      <td className="p-4 text-right space-x-2">
                        <button onClick={() => setEditingContentFor(blog)} className="text-indigo-600 bg-indigo-50 border border-indigo-100 px-2 py-1 rounded text-[10px] uppercase hover:bg-indigo-100 transition-colors">Contenu Page</button>
                        <button onClick={() => { setCardFormData({ title: blog.title, slug: blog.slug, category: blog.category||'', excerpt: blog.excerpt||'', content: blog.content||'', image_url: blog.image_url||'', read_time: blog.read_time||'5 min', status: blog.status||'active' }); setEditCardId(blog.id); setIsEditingCard(true); }} className="text-blue-600 text-[11px] font-bold hover:underline">Modif.</button>
                        <button onClick={() => handleDeleteBlog(blog.id)} className="text-rose-500 text-[11px] font-bold hover:underline">Suppr.</button>
                      </td>
                    </tr>
                  ))}
                  {blogs.length === 0 && <tr><td colSpan="5" className="p-8 text-center text-slate-400">Aucun blog trouvé.</td></tr>}
                </tbody>
              </table>
            </div>
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
          <h2 className="text-2xl font-black text-slate-800 flex items-center gap-2">Blog Page Manager</h2>
          <p className="text-slate-500 text-sm mt-2">Gérez complètement le design, les catégories et les articles du Blog.</p>
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
        {activeTab === 'blogs' && renderCRUDManager()}
        
        {activeTab === 'categories' && (
           <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 animate-fadeIn">
             <BlogCategoryManager />
           </div>
        )}

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
                <h3 className="font-black text-slate-800 border-b pb-2 mb-4">Blog Section Text</h3>
                {renderInput('content', 'Page Title', 'pageTitle')}
                {renderInput('content', 'Subtitle', 'subtitle')}
                {renderTextarea('content', 'Description', 'description')}
                {renderInput('content', 'Blog Heading', 'blogHeading')}
                {renderTextarea('content', 'Blog Description', 'blogDescription')}
                {renderInput('content', 'Empty Blog Message', 'emptyBlogMessage')}
             </div>

             <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
                <h3 className="font-black text-slate-800 border-b pb-2 mb-4">Search & Categories</h3>
                {renderInput('content', 'Search Placeholder Text', 'searchPlaceholder')}
                {renderInput('content', 'Category Section Title', 'categoryTitle')}
                {renderInput('content', 'Read More Button Text', 'readMoreBtn')}
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
                   {renderInput('spacing', 'Gap Between Blog Cards', 'gapCards')}
                </div>
             </div>
           </div>
        )}

        {activeTab === 'alignment' && (
           <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4 animate-fadeIn">
              <h3 className="font-black text-slate-800 border-b pb-2 mb-4">Alignment Options</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                 {renderInput('alignment', 'Section Align', 'sectionAlign', 'center, left, right')}
                 {renderInput('alignment', 'Text Align', 'textAlign', 'center, left, right')}
                 {renderInput('alignment', 'Blog Grid Align', 'gridAlign')}
                 {renderInput('alignment', 'Category Tabs Align', 'categoryAlign')}
                 {renderInput('alignment', 'Card Content Align', 'cardContentAlign')}
                 {renderInput('alignment', 'Flex Direction', 'flexDirection', 'row or column')}
                 {renderInput('alignment', 'Grid Columns', 'gridColumns', 'e.g. 1, 2, 3')}
              </div>
           </div>
        )}

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
                <h3 className="font-black text-slate-800 border-b pb-2 mb-4">Blog Card Text</h3>
                {renderColor('typography', 'Blog Title Color', 'titleColor')}
                {renderInput('typography', 'Blog Title Size', 'titleSize')}
                {renderInput('typography', 'Blog Title Weight', 'titleWeight')}
                {renderColor('typography', 'Blog Description Color', 'descColor')}
                {renderInput('typography', 'Blog Description Size', 'descSize')}
                {renderColor('typography', 'Category Color', 'categoryColor')}
                {renderInput('typography', 'Category Size', 'categorySize')}
                {renderColor('typography', 'Date Color', 'dateColor')}
                {renderInput('typography', 'Date Size', 'dateSize')}
                {renderColor('typography', 'Author Color', 'authorColor')}
                {renderInput('typography', 'Author Size', 'authorSize')}
             </div>
           </div>
        )}

        {activeTab === 'cardDesign' && (
           <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4 animate-fadeIn">
              <h3 className="font-black text-slate-800 border-b pb-2 mb-4">Blog Card Design Settings</h3>
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
                 {renderColor('cardDesign', 'Button Background', 'btnBg')}
                 {renderColor('cardDesign', 'Button Hover Color', 'btnHover')}
                 {renderColor('cardDesign', 'Button Text Color', 'btnColor')}
                 {renderInput('cardDesign', 'Button Border Radius', 'btnRadius')}
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

        {activeTab === 'seo' && (
           <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4 animate-fadeIn">
              <h3 className="font-black text-slate-800 border-b pb-2 mb-4">Blog Page SEO Details</h3>
              <div className="grid grid-cols-1 gap-6">
                 {renderInput('seo', 'Meta Title', 'metaTitle')}
                 {renderTextarea('seo', 'Meta Description', 'metaDescription')}
                 {renderInput('seo', 'Meta Keywords', 'metaKeywords')}
              </div>
           </div>
        )}

        {activeTab === 'classes' && (
           <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4 animate-fadeIn">
              <h3 className="font-black text-slate-800 border-b pb-2 mb-4 flex items-center gap-2"><Code size={18}/> Custom Tailwind Classes</h3>
              <p className="text-xs text-slate-500 mb-4">Définissez des classes Tailwind CSS personnalisées pour contrôler entièrement le design de la page Blog.</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                 {renderInput('classes', 'Page Wrapper Class', 'pageWrapper')}
                 {renderInput('classes', 'Container Class', 'container')}
                 {renderInput('classes', 'Hero Section Class', 'hero')}
                 {renderInput('classes', 'Heading Class', 'heading')}
                 {renderInput('classes', 'Subtitle Class', 'subtitle')}
                 {renderInput('classes', 'Blog Grid Class', 'blogGrid')}
                 {renderInput('classes', 'Blog Card Class', 'blogCard')}
                 {renderInput('classes', 'Blog Image Class', 'blogImage')}
                 {renderInput('classes', 'Blog Content Class', 'blogContent')}
                 {renderInput('classes', 'Blog Title Class', 'blogTitle')}
                 {renderInput('classes', 'Blog Description Class', 'blogDescription')}
                 {renderInput('classes', 'Blog Button Class', 'blogButton')}
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
                 {renderInput('responsive', 'Image Height (Mobile)', 'imageHeightMobile')}
                 {renderInput('responsive', 'Image Height (Tablet)', 'imageHeightTablet')}
                 {renderInput('responsive', 'Image Height (Desktop)', 'imageHeightDesktop')}
              </div>
           </div>
        )}
      </div>

      {editingContentFor && (
        <BlogContentManager
          blog={editingContentFor}
          onClose={() => { setEditingContentFor(null); fetchBlogs(); }}
        />
      )}

      {/* ── LIVE PREVIEW ── */}
      <div className="mt-16 mb-8 text-center">
        <h3 className="text-xl font-bold text-slate-400 uppercase tracking-widest">Aperçu en Direct</h3>
        <p className="text-sm text-slate-500 mt-2">Les modifications apparaîtront instantanément ici.</p>
        <div className="w-24 h-1 bg-slate-200 mx-auto mt-4 rounded-full"></div>
      </div>

      <div className="border-[12px] border-slate-800 rounded-2xl overflow-hidden shadow-2xl relative mb-20">
        <div className="absolute top-0 w-full h-8 bg-slate-800 flex items-center justify-center gap-2 z-50">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="pt-8 h-[800px] overflow-y-auto bg-white custom-scrollbar pointer-events-auto">
          <Blog />
        </div>
      </div>
    </div>
  );
};

export default BlogManager;
