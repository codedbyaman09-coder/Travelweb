import React, { useState, useEffect } from 'react';
import { apiRequest } from '../../lib/api';
import { GripVertical, Plus, Trash2, ChevronDown, ChevronUp, Palette, Maximize, Link as LinkIcon, Eye, RefreshCw, Type, Layout, Image as ImageIcon, Sidebar, MousePointerClick, Smartphone, Upload } from 'lucide-react';
import Navbar from '../Navbar';

const DEFAULT_CONFIG = {
  version: 2,
  
  // 1. Layout
  navPosition: 'fixed',
  logoPosition: 'center',
  maxWidthType: 'full',
  maxWidth: '100%',
  marginTop: '0px',
  marginTopMobile: '0px',
  headerHeight: '96px',
  headerMobileHeight: '48px',
  paddingX: '40px',
  paddingXMobile: '16px',
  paddingY: '0px',
  paddingYMobile: '0px',
  menuGap: '48px',
  menuGapMobile: '20px',
  borderRadius: '20px',
  borderBottomShow: false,
  borderColor: 'rgba(243, 244, 246, 0.1)',
  shadow: true,
  zIndex: '9999',

  // 2. Logo
  logoShow: true,
  logoUrl: '',
  logoAlt: 'Indeora',
  logoHeight: '64px',
  logoMobileHeight: '28px',
  logoWidth: 'auto',
  logoLinkUrl: '/',

  // 3. Colors
  navBgColor: '#313c45',
  isTransparent: false,
  opacity: 100,
  navTextColor: '#C6A46D',
  navHoverColor: '#ffffff',
  activeMenuColor: '#ffffff',
  dropdownBgColor: '#ffffff',
  dropdownTextColor: '#333333',
  dropdownHoverBgColor: '#f3f4f6',
  mobileMenuBgColor: '#313c45',
  hamburgerColor: '#ffffff',
  closeIconColor: '#ffffff',

  // 4. Typography
  fontSize: '11px',
  fontSizeMobile: '16px',
  fontWeight: '700',
  fontFamily: 'Inter, sans-serif',
  letterSpacing: '0.3em',
  lineHeight: 'normal',
  textTransform: 'uppercase',

  // 5. Dropdown Settings
  dropdownWidth: '220px',
  dropdownPadding: '10px 0px',
  dropdownRadius: '8px',
  dropdownShadow: true,
  dropdownGap: '0px',
  dropdownTop: '100%',
  dropdownAnimation: 'fade',

  // 6. Mobile Navbar
  mobileMenuType: 'slide-right',
  mobileMenuWidth: '80%',
  mobileMenuLinkColor: '#ffffff',
  mobileOverlay: true,
  hamburgerSize: '24px',

  // 7. CTA Button
  ctaShow: false,
  ctaText: 'Réserver',
  ctaUrl: '/contact',
  ctaBgColor: '#C6A46D',
  ctaTextColor: '#ffffff',
  ctaHoverBgColor: '#a88b5a',
  ctaRadius: '8px',
  ctaPadding: '10px 20px',
  ctaFontSize: '12px',
  ctaNewTab: false,

  leftLinks: [
    { label: 'Accueil', url: '/', isExternal: false, isActive: true },
    { label: 'À propos', url: '/about', isExternal: false, isActive: true },
    {
      label: 'Destinations',
      url: '/destinations',
      isActive: true,
      dropdown: [
        { label: "Visites par Région", url: "/destinations", isExternal: false, isActive: true },
        { label: "Idées de circuits", url: "/destinations", isExternal: false, isActive: true },
        { label: "Bien être, Yoga et Ayurveda", url: "/yoga", isExternal: false, isActive: true },
        { label: "Hors des Sentiers Battus", url: "/himalaya-aventures-hors-sentiers-battus", isExternal: false, isActive: true },
        { label: "Rencontres Ethniques", url: "/rencontres-ethniques-cultures-locales", isExternal: false, isActive: true },
        { label: "En Famille, Lune de Miel", url: "/lune-de-miel-escapades-romantiques", isExternal: false, isActive: true },
        { label: "Nature et Vie Sauvage", url: "/safaris-vie-sauvage", isExternal: false, isActive: true }
      ]
    }
  ],
  rightLinks: [
    { label: 'Blog', url: '/blog', isExternal: false, isActive: true },
    { label: 'FAQ', url: '/faq', isExternal: false, isActive: true },
    { label: 'Contact', url: '/contact', isExternal: false, isActive: true }
  ]
};

const MenuManager = () => {
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('');
  const [activeTab, setActiveTab] = useState('layout'); 
  const [navConfig, setNavConfig] = useState(DEFAULT_CONFIG);

  const handleReset = () => {
    if (window.confirm("Êtes-vous sûr de vouloir réinitialiser la barre de navigation à son état par défaut ?")) {
      setNavConfig(DEFAULT_CONFIG);
    }
  };

  const fetchSettings = async () => {
    try {
      const data = await apiRequest('/settings');
      if (data.success && data.data && data.data.navbar_config) {
        try {
          const parsed = typeof data.data.navbar_config === 'string'
            ? JSON.parse(data.data.navbar_config)
            : data.data.navbar_config;
          if (parsed.version === 2) {
            setNavConfig(prev => ({ ...prev, ...parsed }));
          }
        } catch (e) {
          console.error("Erreur de parsing navbar_config", e);
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
      const data = await apiRequest('/settings', {
        method: 'POST',
        body: JSON.stringify({
          navbar_config: JSON.stringify(navConfig)
        })
      });
      if (data.success) {
        setMessage('Menu mis à jour avec succès!');
        setTimeout(() => setMessage(''), 3000);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleConfigChange = (field, value) => {
    setNavConfig(prev => ({ ...prev, [field]: value }));
  };

  const addLink = (group) => {
    setNavConfig(prev => ({
      ...prev,
      [group]: [...prev[group], { label: '', url: '', isExternal: false, isActive: true }]
    }));
  };

  const updateLink = (group, index, field, value) => {
    const newLinks = [...navConfig[group]];
    newLinks[index][field] = value;
    setNavConfig(prev => ({ ...prev, [group]: newLinks }));
  };

  const removeLink = (group, index) => {
    const newLinks = navConfig[group].filter((_, i) => i !== index);
    setNavConfig(prev => ({ ...prev, [group]: newLinks }));
  };

  const moveLink = (group, index, direction) => {
    const newLinks = [...navConfig[group]];
    if (direction === 'up' && index > 0) {
      const temp = newLinks[index];
      newLinks[index] = newLinks[index - 1];
      newLinks[index - 1] = temp;
      setNavConfig(prev => ({ ...prev, [group]: newLinks }));
    } else if (direction === 'down' && index < newLinks.length - 1) {
      const temp = newLinks[index];
      newLinks[index] = newLinks[index + 1];
      newLinks[index + 1] = temp;
      setNavConfig(prev => ({ ...prev, [group]: newLinks }));
    }
  };

  const addDropdownItem = (group, index) => {
    const newLinks = [...navConfig[group]];
    if (!newLinks[index].dropdown) {
      newLinks[index].dropdown = [];
    }
    newLinks[index].dropdown.push({ label: '', url: '', isExternal: false, isActive: true });
    setNavConfig(prev => ({ ...prev, [group]: newLinks }));
  };

  const updateDropdownItem = (group, index, subIndex, field, value) => {
    const newLinks = [...navConfig[group]];
    newLinks[index].dropdown[subIndex][field] = value;
    setNavConfig(prev => ({ ...prev, [group]: newLinks }));
  };

  const removeDropdownItem = (group, index, subIndex) => {
    const newLinks = [...navConfig[group]];
    newLinks[index].dropdown = newLinks[index].dropdown.filter((_, i) => i !== subIndex);
    setNavConfig(prev => ({ ...prev, [group]: newLinks }));
  };

  const moveDropdownItem = (group, index, subIndex, direction) => {
    const newLinks = [...navConfig[group]];
    const dropdown = newLinks[index].dropdown;
    if (direction === 'up' && subIndex > 0) {
      const temp = dropdown[subIndex];
      dropdown[subIndex] = dropdown[subIndex - 1];
      dropdown[subIndex - 1] = temp;
      setNavConfig(prev => ({ ...prev, [group]: newLinks }));
    } else if (direction === 'down' && subIndex < dropdown.length - 1) {
      const temp = dropdown[subIndex];
      dropdown[subIndex] = dropdown[subIndex + 1];
      dropdown[subIndex + 1] = temp;
      setNavConfig(prev => ({ ...prev, [group]: newLinks }));
    }
  };

  const renderLinkGroup = (title, group) => (
    <div className="mb-10 last:mb-0">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
          {title} <span className="bg-slate-200 text-slate-600 px-2 py-0.5 rounded-full text-xs">{navConfig[group].length}</span>
        </h3>
        <button
          type="button"
          onClick={() => addLink(group)}
          className="flex items-center gap-2 bg-indigo-50 text-indigo-600 px-4 py-2 rounded-lg text-sm font-bold hover:bg-indigo-100 transition-colors"
        >
          <Plus size={16} /> Ajouter un lien
        </button>
      </div>

      <div className="space-y-3">
        {navConfig[group].map((link, index) => (
          <div key={index} className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:border-indigo-300 transition-colors group/item">
            <div className="p-4 flex flex-col xl:flex-row xl:items-center gap-4">
              <div className="flex gap-2 text-slate-400">
                <button type="button" onClick={() => moveLink(group, index, 'up')} className="hover:text-indigo-600 transition-colors"><ChevronUp size={20} /></button>
                <button type="button" onClick={() => moveLink(group, index, 'down')} className="hover:text-indigo-600 transition-colors"><ChevronDown size={20} /></button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1">
                <input
                  type="text"
                  placeholder="Titre du lien (ex: Accueil)"
                  value={link.label}
                  onChange={(e) => updateLink(group, index, 'label', e.target.value)}
                  className="w-full p-2.5 bg-slate-50 text-slate-800 border border-slate-200 rounded-lg focus:border-indigo-500 focus:bg-white outline-none"
                />
                <input
                  type="text"
                  placeholder="URL (ex: /about ou https://...)"
                  value={link.url}
                  onChange={(e) => updateLink(group, index, 'url', e.target.value)}
                  className="w-full p-2.5 bg-slate-50 text-slate-800 border border-slate-200 rounded-lg focus:border-indigo-500 focus:bg-white outline-none font-mono text-sm"
                />
              </div>

              <div className="flex items-center gap-4 xl:gap-6 flex-wrap">
                <label className="flex items-center gap-2 text-sm font-medium text-slate-600 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={link.isExternal || false}
                    onChange={(e) => updateLink(group, index, 'isExternal', e.target.checked)}
                    className="w-4 h-4 rounded text-indigo-600 focus:ring-indigo-500 border-slate-300"
                  />
                  Nouvel onglet
                </label>
                <label className="flex items-center gap-2 text-sm font-medium text-slate-600 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={link.isActive !== false}
                    onChange={(e) => updateLink(group, index, 'isActive', e.target.checked)}
                    className="w-4 h-4 rounded text-indigo-600 focus:ring-indigo-500 border-slate-300"
                  />
                  Actif
                </label>
                
                <button
                  type="button"
                  onClick={() => {
                    if (!link.dropdown) {
                      const newLinks = [...navConfig[group]];
                      newLinks[index].dropdown = [];
                      setNavConfig(prev => ({ ...prev, [group]: newLinks }));
                    } else {
                      const newLinks = [...navConfig[group]];
                      delete newLinks[index].dropdown;
                      setNavConfig(prev => ({ ...prev, [group]: newLinks }));
                    }
                  }}
                  className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${link.dropdown ? 'bg-indigo-100 text-indigo-700' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
                >
                  Dropdown
                </button>

                <button
                  type="button"
                  onClick={() => removeLink(group, index)}
                  className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors ml-auto xl:ml-0"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </div>

            {link.dropdown && (
              <div className="bg-slate-50 border-t border-slate-200 p-4 pl-12">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Sous-liens (Dropdown)</span>
                  <button
                    type="button"
                    onClick={() => addDropdownItem(group, index)}
                    className="flex items-center gap-1 px-3 py-1.5 bg-white border border-slate-200 text-slate-700 rounded-lg text-xs font-bold hover:border-indigo-300 transition-colors"
                  >
                    <Plus size={14} /> Ajouter
                  </button>
                </div>

                <div className="space-y-3">
                  {link.dropdown.length === 0 && (
                    <div className="text-xs text-slate-400 italic bg-white p-3 rounded-lg border border-slate-200 border-dashed text-center">Aucun sous-lien pour le moment.</div>
                  )}
                  {link.dropdown.map((sublink, subIndex) => (
                    <div key={subIndex} className="flex flex-col md:flex-row items-center gap-3 bg-white p-3 rounded-lg border border-slate-200 shadow-sm">
                      <div className="flex gap-1 text-slate-400">
                        <button type="button" onClick={() => moveDropdownItem(group, index, subIndex, 'up')} className="hover:text-indigo-600"><ChevronUp size={16} /></button>
                        <button type="button" onClick={() => moveDropdownItem(group, index, subIndex, 'down')} className="hover:text-indigo-600"><ChevronDown size={16} /></button>
                      </div>
                      <input
                        type="text"
                        placeholder="Titre"
                        value={sublink.label}
                        onChange={(e) => updateDropdownItem(group, index, subIndex, 'label', e.target.value)}
                        className="flex-1 p-2 bg-slate-50 text-slate-800 text-sm border border-slate-200 rounded focus:border-indigo-500 outline-none w-full md:w-auto"
                      />
                      <input
                        type="text"
                        placeholder="URL"
                        value={sublink.url}
                        onChange={(e) => updateDropdownItem(group, index, subIndex, 'url', e.target.value)}
                        className="flex-1 p-2 bg-slate-50 text-slate-800 text-sm border border-slate-200 rounded focus:border-indigo-500 outline-none font-mono w-full md:w-auto"
                      />
                      <div className="flex items-center gap-3">
                        <label className="flex items-center gap-1.5 text-xs font-medium text-slate-600">
                          <input
                            type="checkbox"
                            checked={sublink.isExternal || false}
                            onChange={(e) => updateDropdownItem(group, index, subIndex, 'isExternal', e.target.checked)}
                            className="rounded text-indigo-600 focus:ring-indigo-500"
                          />
                          Onglet
                        </label>
                        <label className="flex items-center gap-1.5 text-xs font-medium text-slate-600">
                          <input
                            type="checkbox"
                            checked={sublink.isActive !== false}
                            onChange={(e) => updateDropdownItem(group, index, subIndex, 'isActive', e.target.checked)}
                            className="rounded text-indigo-600 focus:ring-indigo-500"
                          />
                          Actif
                        </label>
                        <button
                          type="button"
                          onClick={() => removeDropdownItem(group, index, subIndex)}
                          className="p-1.5 text-red-500 hover:bg-red-50 rounded transition-colors"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
        {navConfig[group].length === 0 && (
          <div className="text-center p-8 border-2 border-dashed border-slate-200 rounded-xl text-slate-400 text-sm font-medium">
            Aucun lien dans ce groupe.
          </div>
        )}
      </div>
    </div>
  );

  const renderInput = (label, field, placeholder = "") => (
    <div>
      <label className="block text-xs font-bold text-slate-700 mb-1.5">{label}</label>
      <input type="text" value={navConfig[field]} onChange={e => handleConfigChange(field, e.target.value)} className="w-full p-2.5 bg-white text-slate-800 border border-slate-300 rounded-lg focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none text-sm transition-all" placeholder={placeholder} />
    </div>
  );

  const renderColor = (label, field) => (
    <div>
      <label className="block text-xs font-bold text-slate-700 mb-1.5">{label}</label>
      <div className="flex items-center gap-2">
        <input type="color" value={navConfig[field]} onChange={e => handleConfigChange(field, e.target.value)} className="w-10 h-10 rounded cursor-pointer bg-white border border-slate-300" />
        <input type="text" value={navConfig[field]} onChange={e => handleConfigChange(field, e.target.value)} className="w-full p-2.5 bg-white text-slate-800 border border-slate-300 rounded-lg uppercase font-mono focus:border-indigo-500 outline-none text-sm" />
      </div>
    </div>
  );

  const renderToggle = (label, field, desc = "") => (
    <label className="flex items-center gap-3 p-4 bg-white border border-slate-200 rounded-xl cursor-pointer hover:border-indigo-300 transition-all shadow-sm">
      <input type="checkbox" checked={navConfig[field]} onChange={e => handleConfigChange(field, e.target.checked)} className="w-5 h-5 rounded text-indigo-600 focus:ring-indigo-500" />
      <div>
        <div className="font-bold text-sm text-slate-800">{label}</div>
        {desc && <div className="text-xs text-slate-500 mt-0.5">{desc}</div>}
      </div>
    </label>
  );

  if (loading) return <div className="p-12 text-center text-slate-500 font-medium">Chargement des paramètres...</div>;

  const tabs = [
    { id: 'layout', icon: Layout, label: 'Layout' },
    { id: 'logo', icon: ImageIcon, label: 'Logo' },
    { id: 'colors', icon: Palette, label: 'Couleurs' },
    { id: 'typography', icon: Type, label: 'Typographie' },
    { id: 'dropdown', icon: Sidebar, label: 'Dropdown' },
    { id: 'mobile', icon: Smartphone, label: 'Mobile' },
    { id: 'cta', icon: MousePointerClick, label: 'Bouton CTA' },
    { id: 'links', icon: LinkIcon, label: 'Liens (Menus)' },
  ];

  return (
    <div className="animate-fadeIn pb-24">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 border-b border-slate-200 pb-5 gap-4">
        <div>
          <span className="text-indigo-600 text-[10px] tracking-[0.3em] font-bold uppercase mb-1 block">
            Navigation Globale
          </span>
          <h2 className="text-2xl font-black text-slate-800 flex items-center gap-2">Menu Principal (Navbar)</h2>
          <p className="text-slate-500 text-sm mt-2">Contrôlez entièrement le design et les liens de votre menu.</p>
        </div>
        <div>
          <button 
            type="button" 
            onClick={handleReset} 
            className="flex items-center gap-2 bg-rose-50 text-rose-600 px-4 py-2.5 rounded-xl text-sm font-bold border border-rose-200 hover:bg-rose-100 transition-all shadow-sm"
          >
            <RefreshCw size={16} /> Réinitialiser le Design (Reset)
          </button>
        </div>
      </div>

      {message && (
        <div className="mb-6 p-4 bg-emerald-50 text-emerald-700 text-sm font-medium rounded-xl border border-emerald-200 flex items-center gap-3 shadow-sm animate-fadeIn">
          <span className="text-xl">✨</span> {message}
        </div>
      )}

      {/* Live Preview */}
      <div className="mb-8 relative z-50">
        <h3 className="text-sm font-bold text-slate-800 mb-3 flex items-center gap-2">
          <Eye size={16} className="text-indigo-500" /> Aperçu en direct (Live Preview)
        </h3>
        <div className="bg-slate-800 rounded-2xl border-4 border-slate-200 shadow-lg overflow-hidden relative min-h-[300px] flex items-start pt-6 justify-center pointer-events-none">
          <div className="absolute inset-0 opacity-50 bg-[url('https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=2076')] bg-cover bg-center"></div>
          <div className="relative z-10 w-full transform origin-top">
            <Navbar previewConfig={navConfig} previewLogoPosition={navConfig.logoPosition} />
          </div>
        </div>
      </div>

      {/* Tabs Menu */}
      <div className="flex gap-2 mb-8 bg-slate-100 p-1.5 rounded-xl overflow-x-auto border border-slate-200 no-scrollbar">
        {tabs.map(tab => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg font-bold text-sm whitespace-nowrap transition-all ${isActive ? 'bg-white text-indigo-600 shadow-sm border border-slate-200' : 'text-slate-600 hover:bg-slate-200 hover:text-slate-900'}`}
            >
              <Icon size={16} /> {tab.label}
            </button>
          );
        })}
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        
        {/* LAYOUT TAB */}
        {activeTab === 'layout' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="font-black text-slate-800 mb-6">Position & Structure</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">Comportement au scroll</label>
                  <select value={navConfig.navPosition} onChange={e => handleConfigChange('navPosition', e.target.value)} className="w-full p-2.5 bg-white text-slate-800 border border-slate-300 rounded-lg focus:border-indigo-500 outline-none text-sm font-medium">
                    <option value="fixed">Fixed Top (Chevauche le contenu)</option>
                    <option value="sticky">Sticky Top (Pousse le contenu)</option>
                    <option value="normal">Normal (Défile avec la page)</option>\n                    <option value="absolute">Absolu (Flottant sur limage)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">Largeur de la Navbar</label>
                  <select value={navConfig.maxWidthType} onChange={e => {
                      handleConfigChange('maxWidthType', e.target.value);
                      if (e.target.value === 'full') handleConfigChange('maxWidth', '100%');
                      if (e.target.value === 'container') handleConfigChange('maxWidth', '1440px');
                    }} className="w-full p-2.5 bg-white text-slate-800 border border-slate-300 rounded-lg focus:border-indigo-500 outline-none text-sm font-medium">
                    <option value="container">Conteneur (ex: 1440px)</option>
                    <option value="full">Pleine largeur (100%)</option>
                    <option value="custom">Personnalisé</option>
                  </select>
                </div>
                {navConfig.maxWidthType === 'custom' && (
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">Largeur Personnalisée: {navConfig.maxWidth}</label>
                    <input type="range" min="800" max="1920" step="10" value={parseInt(navConfig.maxWidth) || 1200} onChange={e => handleConfigChange('maxWidth', e.target.value + 'px')} className="w-full accent-indigo-600" />
                  </div>
                )}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">Hauteur (Bureau): {navConfig.headerHeight}</label>
                  <input type="range" min="50" max="150" value={parseInt(navConfig.headerHeight) || 96} onChange={e => handleConfigChange('headerHeight', e.target.value + 'px')} className="w-full accent-indigo-600" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">Hauteur (Mobile): {navConfig.headerMobileHeight}</label>
                  <input type="range" min="40" max="100" value={parseInt(navConfig.headerMobileHeight) || 48} onChange={e => handleConfigChange('headerMobileHeight', e.target.value + 'px')} className="w-full accent-indigo-600" />
                </div>\n                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">Marge Haut (Bureau): {navConfig.marginTop || '0px'}</label>
                  <input type="range" min="0" max="100" value={parseInt(navConfig.marginTop) || 0} onChange={e => handleConfigChange('marginTop', e.target.value + 'px')} className="w-full accent-indigo-600" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">Marge Haut (Mobile): {navConfig.marginTopMobile || '0px'}</label>
                  <input type="range" min="0" max="100" value={parseInt(navConfig.marginTopMobile) || 0} onChange={e => handleConfigChange('marginTopMobile', e.target.value + 'px')} className="w-full accent-indigo-600" />
                </div>
                {renderInput('z-index', 'zIndex')}
                {renderInput('Arrondis (Border Radius)', 'borderRadius')}
              </div>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="font-black text-slate-800 mb-6">Espacements intérieurs (Paddings & Gaps)</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                {renderInput('Padding Latéral (Bureau)', 'paddingX')}
                {renderInput('Padding Haut/Bas (Bureau)', 'paddingY')}
                {renderInput('Padding Latéral (Mobile)', 'paddingXMobile')}
                {renderInput('Padding Haut/Bas (Mobile)', 'paddingYMobile')}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {renderInput('Espace entre liens (Bureau)', 'menuGap')}
                {renderInput('Espace entre liens (Mobile)', 'menuGapMobile')}
              </div>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="font-black text-slate-800 mb-6">Bordures & Ombres</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {renderToggle('Ombre (Shadow)', 'shadow', 'Ajoute une ombre sous le menu')}
                {renderToggle('Afficher Bordure Basse', 'borderBottomShow', 'Ligne discrète sous le menu')}
                {renderInput('Couleur Bordure', 'borderColor', 'ex: rgba(0,0,0,0.1)')}
              </div>
            </div>
          </div>
        )}

        {/* LOGO TAB */}
        {activeTab === 'logo' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="font-black text-slate-800 mb-6">Paramètres du Logo</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {renderToggle('Afficher le logo', 'logoShow')}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">Position du Logo</label>
                  <select value={navConfig.logoPosition} onChange={e => handleConfigChange('logoPosition', e.target.value)} className="w-full p-2.5 bg-white text-slate-800 border border-slate-300 rounded-lg focus:border-indigo-500 outline-none text-sm font-medium">
                    <option value="left">À Gauche</option>
                    <option value="center">Au Centre</option>
                    <option value="right">À Droite</option>
                  </select>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">Image du Logo</label>
                  <div className="flex gap-2">
                    <input type="text" value={navConfig.logoUrl} onChange={e => handleConfigChange('logoUrl', e.target.value)} className="w-full p-2.5 bg-white text-slate-800 border border-slate-300 rounded-lg focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none text-sm transition-all" placeholder="URL ou laissez vide" />
                    <label className="w-11 h-11 shrink-0 rounded-lg bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 hover:bg-indigo-100 hover:text-indigo-700 cursor-pointer transition-colors" title="Uploader une image">
                      <Upload size={18} />
                      <input type="file" className="hidden" accept="image/*" onChange={async (e) => {
                        const file = e.target.files?.[0];
                        if (!file) return;
                        const payload = new FormData();
                        payload.append('files', file);
                        try {
                          const data = await apiRequest('/media/upload', { method: 'POST', body: payload });
                          if (data.urls?.[0]) handleConfigChange('logoUrl', data.urls[0]);
                        } catch (err) { console.error(err); }
                      }} />
                    </label>
                  </div>
                </div>
                {renderInput('Hauteur Logo (Bureau)', 'logoHeight')}
                {renderInput('Hauteur Logo (Mobile)', 'logoMobileHeight')}
                {renderInput('Largeur Logo', 'logoWidth', 'auto ou ex: 150px')}
                {renderInput('Texte Alternatif (Alt)', 'logoAlt')}
                {renderInput('Lien au clic (URL)', 'logoLinkUrl')}
              </div>
              <div className="p-4 bg-indigo-50 text-indigo-700 rounded-lg text-sm border border-indigo-100 flex gap-2">
                <span className="text-lg">ℹ️</span> L'image du logo principal est gérée dans l'onglet "Paramètres &gt; Logo du site". Cette section contrôle sa taille et son comportement dans le menu.
              </div>
            </div>
          </div>
        )}

        {/* COLORS TAB */}
        {activeTab === 'colors' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="font-black text-slate-800 mb-6">Couleurs Générales</h3>
              <div className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                {renderToggle('Fond Transparent', 'isTransparent', 'Idéal pour superposer sur une grande image')}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">Opacité du fond (%)</label>
                  <input type="range" min="0" max="100" value={navConfig.opacity} onChange={e => handleConfigChange('opacity', e.target.value)} className="w-full accent-indigo-600" />
                  <div className="text-right text-xs text-slate-500 font-mono mt-1">{navConfig.opacity}%</div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {renderColor('Fond (Background)', 'navBgColor')}
                {renderColor('Texte (Liens)', 'navTextColor')}
                {renderColor('Survol (Hover)', 'navHoverColor')}
                {renderColor('Lien Actif', 'activeMenuColor')}
              </div>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="font-black text-slate-800 mb-6">Couleurs Sous-menus (Dropdown)</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {renderColor('Fond Dropdown', 'dropdownBgColor')}
                {renderColor('Texte Dropdown', 'dropdownTextColor')}
                {renderColor('Fond Hover', 'dropdownHoverBgColor')}
              </div>
            </div>
          </div>
        )}

        {/* TYPOGRAPHY TAB */}
        {activeTab === 'typography' && (
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm animate-fadeIn">
            <h3 className="font-black text-slate-800 mb-6">Typographie des liens</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
              {renderInput('Taille (Bureau)', 'fontSize')}
              {renderInput('Taille (Mobile)', 'fontSizeMobile')}
              {renderInput('Police (Font Family)', 'fontFamily', 'ex: Inter, sans-serif')}
              
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">Graisse (Weight)</label>
                <select value={navConfig.fontWeight} onChange={e => handleConfigChange('fontWeight', e.target.value)} className="w-full p-2.5 bg-white text-slate-800 border border-slate-300 rounded-lg focus:border-indigo-500 outline-none text-sm">
                  <option value="400">Normal (400)</option>
                  <option value="500">Medium (500)</option>
                  <option value="600">Semi Bold (600)</option>
                  <option value="700">Bold (700)</option>
                  <option value="800">Extra Bold (800)</option>
                </select>
              </div>
              
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">Casse (Transform)</label>
                <select value={navConfig.textTransform} onChange={e => handleConfigChange('textTransform', e.target.value)} className="w-full p-2.5 bg-white text-slate-800 border border-slate-300 rounded-lg focus:border-indigo-500 outline-none text-sm">
                  <option value="uppercase">MAJUSCULES (uppercase)</option>
                  <option value="lowercase">minuscules (lowercase)</option>
                  <option value="capitalize">Capitalisé (capitalize)</option>
                  <option value="none">Normal (none)</option>
                </select>
              </div>

              {renderInput('Espacement (Letter Spacing)', 'letterSpacing', 'ex: 0.1em')}
              {renderInput('Hauteur de ligne (Line Height)', 'lineHeight', 'ex: normal ou 1.5')}
            </div>
          </div>
        )}

        {/* DROPDOWN TAB */}
        {activeTab === 'dropdown' && (
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm animate-fadeIn">
            <h3 className="font-black text-slate-800 mb-6">Paramètres des sous-menus</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
              {renderInput('Largeur Dropdown', 'dropdownWidth', 'ex: 220px')}
              {renderInput('Padding intérieur', 'dropdownPadding', 'ex: 10px 0px')}
              {renderInput('Arrondis', 'dropdownRadius')}
              {renderInput('Espace avec le parent', 'dropdownTop', 'ex: 100% ou 40px')}
              
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">Animation d'ouverture</label>
                <select value={navConfig.dropdownAnimation} onChange={e => handleConfigChange('dropdownAnimation', e.target.value)} className="w-full p-2.5 bg-white text-slate-800 border border-slate-300 rounded-lg focus:border-indigo-500 outline-none text-sm">
                  <option value="fade">Fondu (Fade)</option>
                  <option value="slidedown">Glissement (Slide Down)</option>
                  <option value="none">Aucune</option>
                </select>
              </div>
              
              {renderToggle('Ombre Dropdown', 'dropdownShadow')}
            </div>
          </div>
        )}

        {/* MOBILE TAB */}
        {activeTab === 'mobile' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="font-black text-slate-800 mb-6">Menu Mobile (Hamburger)</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">Style d'ouverture</label>
                  <select value={navConfig.mobileMenuType} onChange={e => handleConfigChange('mobileMenuType', e.target.value)} className="w-full p-2.5 bg-white text-slate-800 border border-slate-300 rounded-lg focus:border-indigo-500 outline-none text-sm font-bold text-indigo-700">
                    <option value="slide-right">Tiroir de droite (Slide Right)</option>
                    <option value="slide-left">Tiroir de gauche (Slide Left)</option>
                    <option value="dropdown">Menu déroulant classique</option>
                    <option value="full">Plein écran (Full Screen)</option>
                  </select>
                </div>
                {renderInput('Largeur Menu Mobile', 'mobileMenuWidth', 'ex: 80% ou 300px')}
                {renderInput('Taille icône Hamburger', 'hamburgerSize', 'ex: 24px')}
                {renderColor('Fond Menu Mobile', 'mobileMenuBgColor')}
                {renderColor('Texte Liens Mobile', 'mobileMenuLinkColor')}
                {renderColor('Couleur Hamburger', 'hamburgerColor')}
                {renderColor('Couleur Bouton Fermer', 'closeIconColor')}
                {renderToggle('Fond assombri (Overlay)', 'mobileOverlay')}
              </div>
            </div>
          </div>
        )}

        {/* CTA TAB */}
        {activeTab === 'cta' && (
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm animate-fadeIn">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-black text-slate-800">Bouton d'Appel à l'action (CTA)</h3>
              {renderToggle('Activer le bouton', 'ctaShow')}
            </div>
            
            {navConfig.ctaShow ? (
              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {renderInput('Texte du bouton', 'ctaText')}
                  {renderInput('URL de redirection', 'ctaUrl')}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {renderColor('Couleur de fond', 'ctaBgColor')}
                  {renderColor('Couleur au survol', 'ctaHoverBgColor')}
                  {renderColor('Couleur du texte', 'ctaTextColor')}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {renderInput('Arrondis', 'ctaRadius')}
                  {renderInput('Padding intérieur', 'ctaPadding', 'ex: 10px 20px')}
                  {renderInput('Taille du texte', 'ctaFontSize')}
                  <div className="mt-6">
                    {renderToggle('Ouvrir nouvel onglet', 'ctaNewTab')}
                  </div>
                </div>
              </div>
            ) : (
              <div className="p-8 text-center text-slate-400 border-2 border-dashed border-slate-200 rounded-xl">
                Le bouton est actuellement masqué.
              </div>
            )}
          </div>
        )}

        {/* LINKS TAB */}
        {activeTab === 'links' && (
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm animate-fadeIn">
            <div className="mb-6 p-4 bg-indigo-50 rounded-xl border border-indigo-100 text-indigo-700 text-sm">
              💡 Glissez-déposez ou utilisez les flèches pour réorganiser. Vous pouvez ajouter des sous-menus pour créer des listes déroulantes.
            </div>
            {renderLinkGroup('Menu de Gauche', 'leftLinks')}
            {renderLinkGroup('Menu de Droite', 'rightLinks')}
          </div>
        )}

        {/* Save Bar */}
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-slate-200 shadow-[0_-10px_20px_-10px_rgba(0,0,0,0.1)] z-50 lg:left-64 flex justify-between md:justify-end items-center gap-4">
          <button type="submit" className="w-full md:w-auto bg-indigo-600 text-white px-8 py-3.5 rounded-xl text-sm font-black shadow-lg hover:shadow-indigo-500/30 hover:bg-indigo-700 transition-all transform hover:-translate-y-0.5">
            💾 Sauvegarder les modifications
          </button>
        </div>
      </form>
    </div>
  );
};

export default MenuManager;
