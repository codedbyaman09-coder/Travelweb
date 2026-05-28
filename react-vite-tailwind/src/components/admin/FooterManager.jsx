import React, { useState, useEffect } from 'react';
import { Image, Upload } from 'lucide-react';
import { apiRequest } from '../../lib/api';
import Footer from '../Footer';


const defaultFooterConfig = {
  style: {
    backgroundColor: '#1b2228',
    textColor: '#C5A46D',
    titleColor: '#C5A46D',
    paddingTop: '64px',
    paddingBottom: '48px',
    mobilePaddingTop: '16px',
    mobilePaddingBottom: '24px',
    fontFamily: 'sans-serif',
    fontSize: '13px',
    fontWeight: '300',
    borderColor: 'rgba(255,255,255,0.05)',
    gap: '64px',
    mobileGap: '20px',
  },
  content: {
    contactInfo: {
      address: 'Bikaner, Rajasthan, Inde',
      phoneFrance: '+33 6 16 64 26 26',
      phoneIndia: '+91 93514 21959',
      email: 'contact@indeoravoyages.com'
    },
    seoText: "Agence de voyage Inde Paris • Agence locale Inde du Sud • Agence de voyage Inde du Nord • Agence locale francophone Inde • Receptif inde • Agence locale Rajasthan • agence de voyage en inde • Agence de voyage spécialisée pour l'Inde • Meilleure agence de voyage inde",
    description: "Agence locale francophone en Inde pour des voyages sur mesure, authentiques et responsables.",
    copyright: "© 2024 Indeora Voyages. Tous droits réservés.",
    logoAlign: "left",
    logoUrl: "",
    bannerUrl: "",
    ctaTitle: "Prêt à découvrir l'Inde autrement ?",
    ctaSubtitle: "Parlons ensemble de votre projet de voyage sur mesure.",
    ctaButtonText: "Créer mon voyage",
    ctaButtonLink: "/contact-rapide",
    ctaButtonColor: "#A88B52",
    ctaButtonHoverColor: "#8e7646",
    ctaButtonTextColor: "#FFFFFF",
    bottomLinks: [
      { label: "Mentions légales", action: "legal" },
      { label: "Politique de confidentialité", action: "privacy" },
      { label: "Conditions d’annulation", action: "cancel" }
    ],
    socials: [
      { icon: 'whatsapp', link: 'https://wa.me/919351421959' },
      { icon: 'facebook', link: 'https://www.facebook.com/indeoravoyages/' },
      { icon: 'instagram', link: 'https://www.instagram.com/indeoravoyages/' },
      { icon: 'mail', link: 'mailto:contact@indeoravoyages.com' }
    ],
    columns: [
      {
        id: 'liens',
        title: 'LIENS RAPIDES',
        type: 'links',
        items: [
          { label: 'Destinations', link: '/destinations' },
          { label: 'À propos', link: '/about' },
          { label: 'FAQ', link: '/faq' },
          { label: 'Contact', link: '/contact-rapide' }
        ]
      },
      {
        id: 'infos',
        title: 'INFORMATIONS',
        type: 'contact',
        items: [] 
      },
      {
        id: 'news',
        title: 'NEWSLETTER',
        type: 'newsletter',
        text: "Recevez nos inspirations de voyage et nos offres exclusives."
      }
    ]
  }
};

const FooterManager = () => {
  const [config, setConfig] = useState(defaultFooterConfig);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [activeTab, setActiveTab] = useState('design'); // design, content, columns, social

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const res = await apiRequest('/settings');
        if (res.success && res.data && res.data.footer_config) {
          // Merge defaults with DB to avoid missing keys
          setConfig({
            style: { ...defaultFooterConfig.style, ...res.data.footer_config.style },
            content: { ...defaultFooterConfig.content, ...res.data.footer_config.content }
          });
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchSettings();
  }, []);

  const handleSave = async (e) => {
    e.preventDefault();
    setSaving(true);
    setError('');
    setMessage('');
    try {
      const res = await apiRequest('/settings', {
        method: 'POST',
        body: JSON.stringify({ footer_config: config })
      });
      if (res.success) {
        setMessage('Footer configuration saved successfully!');
        setTimeout(() => setMessage(''), 3000);
      } else {
        setError('Error saving configuration.');
      }
    } catch (err) {
      setError('Network error.');
    } finally {
      setSaving(false);
    }
  };

  const [uploading, setUploading] = useState(false);

  const handleUpload = async (event, key) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const payload = new FormData();
    payload.append('files', file);
    setUploading(true);
    setError('');

    try {
      const data = await apiRequest('/media/upload', {
        method: 'POST',
        body: payload
      });
      const url = data.urls?.[0] || '';
      if (url) {
        updateContent(key, url);
        setMessage('Logo uploaded successfully!');
        setTimeout(() => setMessage(''), 3000);
      }
    } catch (err) {
      setError(err.message || 'Upload failed.');
    } finally {
      setUploading(false);
      event.target.value = '';
    }
  };

  const updateStyle = (key, value) => {
    setConfig({ ...config, style: { ...config.style, [key]: value } });
  };

  const updateContent = (key, value) => {
    setConfig({ ...config, content: { ...config.content, [key]: value } });
  };

  if (loading) return <div className="p-8 text-center text-gray-500">Loading footer settings...</div>;

  return (
    <div className="animate-fadeIn max-w-5xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 border-b border-slate-200 pb-5 gap-4">
        <div>
          <span className="text-indigo-600 text-[10px] tracking-[0.3em] font-bold uppercase mb-1 block">Global Component</span>
          <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-2">Footer Management</h2>
        </div>
        <div className="flex space-x-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
          {['design', 'banner_cta', 'content', 'columns', 'social'].map(tab => (
            <button 
              key={tab}
              onClick={() => setActiveTab(tab)} 
              className={`px-4 py-2 rounded-full text-[11px] font-bold uppercase tracking-wider transition-all duration-300 whitespace-nowrap ${activeTab === tab ? 'bg-indigo-600 text-white shadow-md' : 'bg-slate-100 text-slate-500 hover:bg-gray-200'}`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {message && <div className="mb-6 p-4 bg-emerald-50 text-emerald-700 text-sm rounded-xl border border-emerald-100 flex items-center gap-3">✨ {message}</div>}
      {error && <div className="mb-6 p-4 bg-red-50 text-red-700 text-sm rounded-xl border border-red-100 flex items-center gap-3">⚠️ {error}</div>}

      <form onSubmit={handleSave} className="bg-white p-6 md:p-8 shadow-sm border border-slate-200 rounded-xl">
        
        
        {activeTab === 'banner_cta' && (
          <div className="space-y-6">
            <h3 className="font-serif text-xl text-slate-800 border-b pb-3">Banner & Top CTA Section</h3>
            
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
              <label className="block text-sm font-semibold text-slate-700 mb-2">Background Banner Image</label>
              <div className="flex flex-col md:flex-row gap-4 items-start">
                <div className="w-full md:w-1/3 aspect-video bg-slate-100 rounded-lg flex items-center justify-center overflow-hidden border-2 border-dashed border-slate-300 relative group">
                  {config.content.bannerUrl ? (
                    <img src={config.content.bannerUrl} alt="Footer Banner" className="w-full h-full object-cover" />
                  ) : (
                    <div className="text-slate-400 flex flex-col items-center">
                      <Image size={32} className="mb-2" />
                      <span className="text-xs">No banner selected</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <label className="cursor-pointer bg-white text-slate-800 px-4 py-2 rounded-lg text-xs font-bold flex items-center gap-2 hover:bg-slate-100">
                      <Upload size={14} />
                      {uploading ? 'Uploading...' : 'Upload Banner'}
                      <input type="file" className="hidden" accept="image/*" onChange={e => handleUpload(e, 'bannerUrl')} disabled={uploading} />
                    </label>
                  </div>
                </div>
                <div className="flex-1 space-y-3">
                  <p className="text-xs text-slate-500">Upload a custom background banner. If left empty, the website will use the default footer banner.</p>
                  <div>
                    <label className="block text-xs font-semibold text-slate-500 mb-1">Banner URL (Optional)</label>
                    <input type="text" value={config.content.bannerUrl || ''} onChange={e => updateContent('bannerUrl', e.target.value)} className="w-full bg-white border border-slate-200 px-3 py-2 rounded text-sm" placeholder="https://..." />
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
              <label className="block text-sm font-semibold text-slate-700 mb-2">Top SEO Links / Keywords (Appears at the very top of footer)</label>
              <textarea 
                value={config.content.seoText} 
                onChange={e => updateContent('seoText', e.target.value)} 
                className="w-full bg-white border border-slate-200 px-4 py-3 rounded-xl text-sm min-h-[80px]"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">CTA Title</label>
                <input type="text" value={config.content.ctaTitle} onChange={e => updateContent('ctaTitle', e.target.value)} className="w-full bg-white border border-slate-200 px-4 py-3 rounded-xl text-sm" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">CTA Subtitle</label>
                <input type="text" value={config.content.ctaSubtitle} onChange={e => updateContent('ctaSubtitle', e.target.value)} className="w-full bg-white border border-slate-200 px-4 py-3 rounded-xl text-sm" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Button Text</label>
                <input type="text" value={config.content.ctaButtonText} onChange={e => updateContent('ctaButtonText', e.target.value)} className="w-full bg-white border border-slate-200 px-4 py-3 rounded-xl text-sm" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Button Link URL</label>
                <input type="text" value={config.content.ctaButtonLink} onChange={e => updateContent('ctaButtonLink', e.target.value)} className="w-full bg-white border border-slate-200 px-4 py-3 rounded-xl text-sm" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Button Background Color</label>
                <div className="flex gap-3">
                  <input type="color" value={config.content.ctaButtonColor} onChange={e => updateContent('ctaButtonColor', e.target.value)} className="h-10 w-12 rounded cursor-pointer" />
                  <input type="text" value={config.content.ctaButtonColor} onChange={e => updateContent('ctaButtonColor', e.target.value)} className="flex-1 bg-white border border-slate-200 px-3 py-2 rounded text-sm" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Button Text Color</label>
                <div className="flex gap-3">
                  <input type="color" value={config.content.ctaButtonTextColor} onChange={e => updateContent('ctaButtonTextColor', e.target.value)} className="h-10 w-12 rounded cursor-pointer" />
                  <input type="text" value={config.content.ctaButtonTextColor} onChange={e => updateContent('ctaButtonTextColor', e.target.value)} className="flex-1 bg-white border border-slate-200 px-3 py-2 rounded text-sm" />
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'design' && (
          <div className="space-y-6">
            <h3 className="font-serif text-xl text-slate-800 border-b pb-3">Design & Layout Settings</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 space-y-4">
                <h4 className="font-bold text-xs uppercase tracking-wider text-indigo-600">Colors</h4>
                <div>
                  <label className="block text-xs font-semibold text-slate-500 mb-1">Background Color</label>
                  <div className="flex gap-3">
                    <input type="color" value={config.style.backgroundColor} onChange={e => updateStyle('backgroundColor', e.target.value)} className="h-10 w-12 rounded cursor-pointer" />
                    <input type="text" value={config.style.backgroundColor} onChange={e => updateStyle('backgroundColor', e.target.value)} className="flex-1 bg-white border border-slate-200 px-3 py-2 rounded text-sm" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-500 mb-1">Text Color</label>
                  <div className="flex gap-3">
                    <input type="color" value={config.style.textColor} onChange={e => updateStyle('textColor', e.target.value)} className="h-10 w-12 rounded cursor-pointer" />
                    <input type="text" value={config.style.textColor} onChange={e => updateStyle('textColor', e.target.value)} className="flex-1 bg-white border border-slate-200 px-3 py-2 rounded text-sm" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-500 mb-1">Title Color</label>
                  <div className="flex gap-3">
                    <input type="color" value={config.style.titleColor} onChange={e => updateStyle('titleColor', e.target.value)} className="h-10 w-12 rounded cursor-pointer" />
                    <input type="text" value={config.style.titleColor} onChange={e => updateStyle('titleColor', e.target.value)} className="flex-1 bg-white border border-slate-200 px-3 py-2 rounded text-sm" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-500 mb-1">Border Color (Separators)</label>
                  <input type="text" value={config.style.borderColor} onChange={e => updateStyle('borderColor', e.target.value)} className="w-full bg-white border border-slate-200 px-3 py-2 rounded text-sm" placeholder="rgba(255,255,255,0.05)" />
                </div>
              </div>

              <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 space-y-4">
                <h4 className="font-bold text-xs uppercase tracking-wider text-indigo-600">Typography</h4>
                <div>
                  <label className="block text-xs font-semibold text-slate-500 mb-1">Font Family</label>
                  <input type="text" value={config.style.fontFamily} onChange={e => updateStyle('fontFamily', e.target.value)} className="w-full bg-white border border-slate-200 px-3 py-2 rounded text-sm" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-500 mb-1">Font Size (Base)</label>
                  <input type="text" value={config.style.fontSize} onChange={e => updateStyle('fontSize', e.target.value)} className="w-full bg-white border border-slate-200 px-3 py-2 rounded text-sm" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-500 mb-1">Font Weight</label>
                  <input type="text" value={config.style.fontWeight} onChange={e => updateStyle('fontWeight', e.target.value)} className="w-full bg-white border border-slate-200 px-3 py-2 rounded text-sm" />
                </div>
              </div>

              <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 space-y-4 md:col-span-2">
                <h4 className="font-bold text-xs uppercase tracking-wider text-indigo-600">Spacing & Layout</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-500 mb-1">Desktop Padding Top</label>
                    <input type="text" value={config.style.paddingTop} onChange={e => updateStyle('paddingTop', e.target.value)} className="w-full bg-white border border-slate-200 px-3 py-2 rounded text-sm" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-500 mb-1">Desktop Padding Bottom</label>
                    <input type="text" value={config.style.paddingBottom} onChange={e => updateStyle('paddingBottom', e.target.value)} className="w-full bg-white border border-slate-200 px-3 py-2 rounded text-sm" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-500 mb-1">Mobile Padding Top</label>
                    <input type="text" value={config.style.mobilePaddingTop} onChange={e => updateStyle('mobilePaddingTop', e.target.value)} className="w-full bg-white border border-slate-200 px-3 py-2 rounded text-sm" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-500 mb-1">Mobile Padding Bottom</label>
                    <input type="text" value={config.style.mobilePaddingBottom} onChange={e => updateStyle('mobilePaddingBottom', e.target.value)} className="w-full bg-white border border-slate-200 px-3 py-2 rounded text-sm" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-500 mb-1">Desktop Column Gap</label>
                    <input type="text" value={config.style.gap} onChange={e => updateStyle('gap', e.target.value)} className="w-full bg-white border border-slate-200 px-3 py-2 rounded text-sm" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-500 mb-1">Mobile Column Gap</label>
                    <input type="text" value={config.style.mobileGap} onChange={e => updateStyle('mobileGap', e.target.value)} className="w-full bg-white border border-slate-200 px-3 py-2 rounded text-sm" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'content' && (
          <div className="space-y-6">
            <h3 className="font-serif text-xl text-slate-800 border-b pb-3">Basic Content</h3>
            
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
              <label className="block text-sm font-semibold text-slate-700 mb-2">Footer Logo</label>
              <div className="flex flex-col md:flex-row gap-4 items-start">
                <div className="w-full md:w-1/3 aspect-video bg-slate-100 rounded-lg flex items-center justify-center overflow-hidden border-2 border-dashed border-slate-300 relative group">
                  {config.content.logoUrl ? (
                    <img src={config.content.logoUrl} alt="Footer Logo" className="w-full h-full object-contain p-2" />
                  ) : (
                    <div className="text-slate-400 flex flex-col items-center">
                      <Image size={32} className="mb-2" />
                      <span className="text-xs">No logo selected</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <label className="cursor-pointer bg-white text-slate-800 px-4 py-2 rounded-lg text-xs font-bold flex items-center gap-2 hover:bg-slate-100">
                      <Upload size={14} />
                      {uploading ? 'Uploading...' : 'Upload Logo'}
                      <input type="file" className="hidden" accept="image/*" onChange={e => handleUpload(e, 'logoUrl')} disabled={uploading} />
                    </label>
                  </div>
                </div>
                <div className="flex-1 space-y-3">
                  <p className="text-xs text-slate-500">Upload a custom logo specifically for the footer. If left empty, the website will use the default header logo or the logo configured in Logo Management.</p>
                  <div>
                    <label className="block text-xs font-semibold text-slate-500 mb-1">Logo URL (Optional)</label>
                    <input type="text" value={config.content.logoUrl || ''} onChange={e => updateContent('logoUrl', e.target.value)} className="w-full bg-white border border-slate-200 px-3 py-2 rounded text-sm" placeholder="https://..." />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-500 mb-1">Logo Alignment</label>
                    <select value={config.content.logoAlign || 'left'} onChange={e => updateContent('logoAlign', e.target.value)} className="w-full bg-white border border-slate-200 px-3 py-2 rounded text-sm">
                      <option value="left">Left</option>
                      <option value="center">Center</option>
                      <option value="right">Right</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Company Description (Under Logo)</label>
              <textarea value={config.content.description} onChange={e => updateContent('description', e.target.value)} className="w-full bg-white border border-slate-200 px-4 py-3 rounded-xl text-sm min-h-[100px]" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Copyright Text</label>
              <input type="text" value={config.content.copyright} onChange={e => updateContent('copyright', e.target.value)} className="w-full bg-white border border-slate-200 px-4 py-3 rounded-xl text-sm" />
            </div>
          </div>
        )}

        {activeTab === 'columns' && (
          <div className="space-y-8">
            <h3 className="font-serif text-xl text-slate-800 border-b pb-3">Manage Columns & Links</h3>
            
            {config.content.columns.map((col, colIndex) => (
              <div key={colIndex} className="bg-slate-50 p-5 rounded-xl border border-slate-200">
                <div className="flex justify-between items-center mb-4">
                  <input 
                    type="text" 
                    value={col.title}
                    onChange={(e) => {
                      const newCols = [...config.content.columns];
                      newCols[colIndex].title = e.target.value;
                      updateContent('columns', newCols);
                    }}
                    className="font-bold text-sm bg-white border border-slate-200 px-3 py-2 rounded"
                  />
                  <span className="text-xs font-semibold px-2 py-1 bg-indigo-100 text-indigo-700 rounded uppercase">{col.type}</span>
                </div>

                {col.type === 'links' && (
                  <div className="space-y-3 pl-4 border-l-2 border-indigo-200">
                    {col.items.map((link, linkIndex) => (
                      <div key={linkIndex} className="flex gap-3 items-center">
                        <input 
                          type="text" 
                          value={link.label}
                          onChange={(e) => {
                            const newCols = [...config.content.columns];
                            newCols[colIndex].items[linkIndex].label = e.target.value;
                            updateContent('columns', newCols);
                          }}
                          className="flex-1 bg-white border border-slate-200 px-3 py-2 rounded text-xs" placeholder="Label"
                        />
                        <input 
                          type="text" 
                          value={link.link}
                          onChange={(e) => {
                            const newCols = [...config.content.columns];
                            newCols[colIndex].items[linkIndex].link = e.target.value;
                            updateContent('columns', newCols);
                          }}
                          className="flex-1 bg-white border border-slate-200 px-3 py-2 rounded text-xs" placeholder="URL (/path)"
                        />
                        <button type="button" onClick={() => {
                          const newCols = [...config.content.columns];
                          newCols[colIndex].items.splice(linkIndex, 1);
                          updateContent('columns', newCols);
                        }} className="text-red-500 hover:text-red-700 text-xs font-bold px-2 py-1">X</button>
                      </div>
                    ))}
                    <button type="button" onClick={() => {
                      const newCols = [...config.content.columns];
                      newCols[colIndex].items.push({ label: 'New Link', link: '/' });
                      updateContent('columns', newCols);
                    }} className="text-indigo-600 text-xs font-bold">+ Add Link</button>
                  </div>
                )}

                {col.type === 'newsletter' && (
                  <div>
                    <label className="block text-xs font-semibold text-slate-500 mb-1">Newsletter Text</label>
                    <textarea 
                      value={col.text}
                      onChange={(e) => {
                        const newCols = [...config.content.columns];
                        newCols[colIndex].text = e.target.value;
                        updateContent('columns', newCols);
                      }}
                      className="w-full bg-white border border-slate-200 px-3 py-2 rounded text-xs h-20"
                    />
                  </div>
                )}
                
                {col.type === 'contact' && (
                  <div className="space-y-4 pl-4 border-l-2 border-indigo-200 mt-4">
                    <p className="text-xs text-slate-500 mb-2">Manage Contact Information Details:</p>
                    <div>
                      <label className="block text-xs font-semibold text-slate-500 mb-1">Address</label>
                      <input 
                        type="text" 
                        value={config.content.contactInfo?.address || ''}
                        onChange={(e) => {
                          const newContactInfo = { ...(config.content.contactInfo || {}), address: e.target.value };
                          updateContent('contactInfo', newContactInfo);
                        }}
                        className="w-full bg-white border border-slate-200 px-3 py-2 rounded text-xs" 
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-500 mb-1">Email</label>
                      <input 
                        type="email" 
                        value={config.content.contactInfo?.email || ''}
                        onChange={(e) => {
                          const newContactInfo = { ...(config.content.contactInfo || {}), email: e.target.value };
                          updateContent('contactInfo', newContactInfo);
                        }}
                        className="w-full bg-white border border-slate-200 px-3 py-2 rounded text-xs" 
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-500 mb-2">Phone Numbers (Added dynamically with Flags)</label>
                      <div className="space-y-2">
                        {(config.content.contactInfo?.phones || [
                          { country: 'fr', number: config.content.contactInfo?.phoneFrance || '+33 6 16 64 26 26' },
                          { country: 'in', number: config.content.contactInfo?.phoneIndia || '+91 93514 21959' }
                        ]).map((phone, pIdx) => (
                          <div key={pIdx} className="flex gap-2 items-center">
                            <select 
                              value={phone.country}
                              onChange={(e) => {
                                const newContactInfo = { ...(config.content.contactInfo || {}) };
                                const phones = [...(newContactInfo.phones || [
                                  { country: 'fr', number: config.content.contactInfo?.phoneFrance || '+33 6 16 64 26 26' },
                                  { country: 'in', number: config.content.contactInfo?.phoneIndia || '+91 93514 21959' }
                                ])];
                                phones[pIdx].country = e.target.value;
                                newContactInfo.phones = phones;
                                updateContent('contactInfo', newContactInfo);
                              }}
                              className="bg-white border border-slate-200 px-2 py-2 rounded text-xs w-28 uppercase font-bold text-slate-600"
                            >
                              <option value="fr">🇫🇷 France</option>
                              <option value="in">🇮🇳 India</option>
                              <option value="us">🇺🇸 USA</option>
                              <option value="gb">🇬🇧 UK</option>
                              <option value="ch">🇨🇭 Swiss</option>
                              <option value="ca">🇨🇦 Canada</option>
                            </select>
                            <input 
                              type="text" 
                              value={phone.number}
                              onChange={(e) => {
                                const newContactInfo = { ...(config.content.contactInfo || {}) };
                                const phones = [...(newContactInfo.phones || [
                                  { country: 'fr', number: config.content.contactInfo?.phoneFrance || '+33 6 16 64 26 26' },
                                  { country: 'in', number: config.content.contactInfo?.phoneIndia || '+91 93514 21959' }
                                ])];
                                phones[pIdx].number = e.target.value;
                                newContactInfo.phones = phones;
                                updateContent('contactInfo', newContactInfo);
                              }}
                              className="flex-1 bg-white border border-slate-200 px-3 py-2 rounded text-xs" 
                              placeholder="e.g. +91 99999 99999"
                            />
                            <button type="button" onClick={() => {
                                const newContactInfo = { ...(config.content.contactInfo || {}) };
                                const phones = [...(newContactInfo.phones || [
                                  { country: 'fr', number: config.content.contactInfo?.phoneFrance || '+33 6 16 64 26 26' },
                                  { country: 'in', number: config.content.contactInfo?.phoneIndia || '+91 93514 21959' }
                                ])];
                                phones.splice(pIdx, 1);
                                newContactInfo.phones = phones;
                                updateContent('contactInfo', newContactInfo);
                            }} className="text-red-500 font-bold px-3 py-2 text-xs bg-red-50 rounded hover:bg-red-100 transition-colors">X</button>
                          </div>
                        ))}
                        <button type="button" onClick={() => {
                          const newContactInfo = { ...(config.content.contactInfo || {}) };
                          const phones = [...(newContactInfo.phones || [
                            { country: 'fr', number: config.content.contactInfo?.phoneFrance || '+33 6 16 64 26 26' },
                            { country: 'in', number: config.content.contactInfo?.phoneIndia || '+91 93514 21959' }
                          ])];
                          phones.push({ country: 'in', number: '+91 ' });
                          newContactInfo.phones = phones;
                          updateContent('contactInfo', newContactInfo);
                        }} className="text-indigo-600 font-bold text-xs mt-2 px-3 py-2 bg-indigo-50 rounded hover:bg-indigo-100 transition-colors block">+ Add Phone Number</button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {activeTab === 'social' && (
          <div className="space-y-6">
            <h3 className="font-serif text-xl text-slate-800 border-b pb-3">Social Media Links</h3>
            <div className="space-y-4">
              {config.content.socials.map((social, idx) => (
                <div key={idx} className="flex gap-4 items-center bg-slate-50 p-4 rounded-xl border border-slate-200">
                  <div className="w-24">
                    <select 
                      value={social.icon} 
                      onChange={(e) => {
                        const newSocials = [...config.content.socials];
                        newSocials[idx].icon = e.target.value;
                        updateContent('socials', newSocials);
                      }}
                      className="w-full bg-white border border-slate-200 px-2 py-2 rounded text-xs uppercase font-bold text-slate-600"
                    >
                      <option value="whatsapp">WhatsApp</option>
                      <option value="facebook">Facebook</option>
                      <option value="instagram">Instagram</option>
                      <option value="twitter">Twitter</option>
                      <option value="youtube">YouTube</option>
                      <option value="mail">Email</option>
                    </select>
                  </div>
                  <input 
                    type="text" 
                    value={social.link}
                    onChange={(e) => {
                      const newSocials = [...config.content.socials];
                      newSocials[idx].link = e.target.value;
                      updateContent('socials', newSocials);
                    }}
                    className="flex-1 bg-white border border-slate-200 px-3 py-2 rounded text-sm" placeholder="https://..."
                  />
                  <button type="button" onClick={() => {
                    const newSocials = [...config.content.socials];
                    newSocials.splice(idx, 1);
                    updateContent('socials', newSocials);
                  }} className="text-red-500 hover:text-red-700 font-bold px-2 text-xl">×</button>
                </div>
              ))}
              <button type="button" onClick={() => {
                const newSocials = [...config.content.socials];
                newSocials.push({ icon: 'whatsapp', link: '' });
                updateContent('socials', newSocials);
              }} className="bg-slate-100 text-indigo-600 font-bold text-xs uppercase tracking-wider py-2 px-4 rounded hover:bg-slate-200 transition-colors">
                + Add Social Link
              </button>
            </div>
          </div>
        )}

        <div className="mt-8 pt-6 border-t border-slate-200">
          <button type="submit" disabled={saving} className={`w-full md:w-auto bg-indigo-600 text-white py-3.5 px-8 rounded-xl text-[11px] font-bold uppercase tracking-widest shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 ${saving ? 'opacity-50 pointer-events-none' : ''}`}>
            {saving ? 'Saving...' : 'Save Footer Configuration'}
          </button>
        </div>
      </form>

      <div className="mt-12 bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="bg-slate-50 px-6 py-4 border-b border-slate-200 flex justify-between items-center">
          <h3 className="font-serif text-lg text-slate-800">Live Preview</h3>
          <span className="text-xs bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full font-bold uppercase">Real-time</span>
        </div>
        <div className="relative">
          <div className="absolute inset-0 bg-black/5 pointer-events-none z-50"></div>
          <Footer previewConfig={config} />
        </div>
      </div>
    </div>
  );
};

export default FooterManager;
