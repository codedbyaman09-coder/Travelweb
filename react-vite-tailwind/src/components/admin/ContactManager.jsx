import React, { useState, useEffect } from 'react';
import { apiRequest } from '../../lib/api';
import { Save, RefreshCw, Trash2, Layout, Maximize, AlignCenter, Type, AlignLeft, PaintBucket, Sidebar, Settings, Code, MonitorSmartphone } from 'lucide-react';

const DEFAULT_CONFIG = {
  layout: { pageWidth: '100%', containerWidth: '1440px', sectionWidth: '100%', sectionHeight: 'auto', minHeight: '100vh', maxWidth: '100%', bgColor: '#ffffff', bgImage: '', border: 'none', borderRadius: '0px', boxShadow: 'none', overflow: 'hidden', responsiveWidth: '100%' },
  spacing: { marginTop: '0px', marginBottom: '0px', marginLeft: 'auto', marginRight: 'auto', paddingTop: '64px', paddingBottom: '64px', paddingLeft: '16px', paddingRight: '16px', gapSections: '32px', gapColumns: '24px', mobile: { pt: '32px', pb: '32px', px: '16px' }, tablet: { pt: '48px', pb: '48px', px: '32px' }, desktop: { pt: '64px', pb: '64px', px: '40px' } },
  alignment: { sectionAlign: 'center', textAlign: 'center', formAlign: 'center', mapAlign: 'center', cardAlign: 'left', flexDirection: 'row', gridColumns: '2' },
  typography: { headingText: 'UNE AUTRE FAÇON DE DÉCOUVRIR L’INDE', headingColor: '#A88B52', headingSize: '12px', headingWeight: 'bold', headingLineHeight: '1.5', headingLetterSpacing: '0.4em', paragraphText: 'Depuis plus de 18 ans...', paragraphColor: '#4b5563', paragraphSize: '15px', labelColor: '#374151', inputColor: '#111827', placeholderColor: '#9ca3af', buttonTextColor: '#ffffff' },
  content: { pageTitle: 'Contact', title: 'UNE AUTRE FAÇON DE DÉCOUVRIR L’INDE', subtitle: '', description: 'Depuis plus de 18 ans, Indeora Voyages imagine des voyages sur mesure en Inde...', inAddress: 'INDEORA VOYAGES, Bikaner, Rajasthan 334001, India', inPhone: '+91 93514 21959', inEmail: 'contact@indeoravoyages.com', workingHours: '', socialLinks: '', inMap: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6104.419158273716!2d73.31993271792733!3d28.02009685969809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e08edcd9da98535%3A0xdea99cf3a46df3c4!2sINDEORA%20VOYAGES!5e0!3m2!1sen!2sin!4v1779356710556!5m2!1sen!2sin', formTitle: 'Envoyer un message', formDesc: '', buttonText: 'Envoyer', heroBg: 'https://images.unsplash.com/photo-1548013146-72479768bbfd?q=80&w=1200', heroText: 'NOUS SOMMES À VOTRE ÉCOUTE', frAddress: 'Le Passage en Inde, Calmont, 12000 Rodez, France', frPhone: '+33 759 47 06 04', frEmail: 'contact@indeoravoyages.com', frWeb: 'www.indeoravoyages.fr', frMap: 'https://www.google.com/maps?q=Le+Passage+en+Inde,+Calmont,+12000+Rodez,+France&output=embed', inWeb: 'www.indeoravoyages.com' },
  formDesign: { inputWidth: '100%', inputHeight: '48px', inputPadding: '12px', inputMargin: '0 0 16px 0', borderColor: '#e5e7eb', borderRadius: '4px', bgColor: '#f9fafb', focusColor: '#A88B52', textareaHeight: '120px', labelPosition: 'top', buttonWidth: 'auto', buttonHeight: '48px', buttonBg: '#A88B52', buttonHoverBg: '#8c7344', buttonRadius: '2px', buttonClasses: '' },
  cards: { bg: '#2d2d2d', padding: '24px', margin: '0', radius: '4px', shadow: '0 4px 6px -1px rgba(0,0,0,0.1)', borderColor: 'transparent', iconColor: '#A88B52', iconSize: '24px', hoverEffect: 'none', align: 'center', headerBg: '#eff6ff' },
  classes: { pageWrapper: '', container: 'max-w-[1440px] mx-auto px-[40px]', hero: 'relative h-[280px] md:h-[85vh] w-full overflow-hidden flex items-center justify-center', heading: 'text-[10px] md:text-[12px] font-bold tracking-[0.4em] text-[var(--contact-primary)] mb-6 md:mb-8 uppercase', subtitle: '', contactGrid: 'grid grid-cols-1 md:grid-cols-2 gap-12', contactCard: 'space-y-6', formWrapper: '', input: '', textarea: '', button: 'bg-transparent border border-white/40 text-white hover:bg-white hover:text-black transition-all duration-700 uppercase', mapWrapper: 'w-full h-[250px] md:h-[400px] rounded-sm overflow-hidden border border-gray-100 shadow-md' },
  responsive: { mobileLayout: 'col', tabletLayout: 'col', desktopLayout: 'row', mobilePadding: '16px', tabletPadding: '32px', desktopPadding: '40px', mobileFontSize: '14px', tabletFontSize: '16px', desktopFontSize: '16px', gridColsMobile: '1', gridColsTablet: '2', gridColsDesktop: '2' }
};

const ContactManager = () => {
  const [configId, setConfigId] = useState(null);
  const [config, setConfig] = useState(DEFAULT_CONFIG);
  const [saving, setSaving] = useState(false);
  const [activeTab, setActiveTab] = useState('content');
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetchConfig();
  }, []);

  const fetchConfig = async () => {
    try {
      const response = await apiRequest('/contact-page');
      if (response && response.success && response.data && response.data.length > 0) {
        setConfigId(response.data[0].id);
        const fetchedConfig = response.data[0].config;
        
        // Merge fetched config with default to ensure all keys exist
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

  const handleSave = async () => {
    setSaving(true);
    try {
      if (configId) {
        await apiRequest(`/contact-page/${configId}`, { method: 'PUT', body: JSON.stringify({ config }) });
      } else {
        const res = await apiRequest('/contact-page', { method: 'POST', body: JSON.stringify({ config }) });
        if (res.id) setConfigId(res.id);
      }
      setMessage('Configuration de contact sauvegardée avec succès!');
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
            await apiRequest(`/contact-page/${configId}`, { method: 'DELETE' });
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
    { id: 'content', icon: AlignLeft, label: 'Content' },
    { id: 'layout', icon: Layout, label: 'Layout' },
    { id: 'spacing', icon: Maximize, label: 'Spacing' },
    { id: 'alignment', icon: AlignCenter, label: 'Alignment' },
    { id: 'typography', icon: Type, label: 'Typography' },
    { id: 'formDesign', icon: Sidebar, label: 'Form Design' },
    { id: 'cards', icon: PaintBucket, label: 'Cards' },
    { id: 'classes', icon: Code, label: 'Tailwind Classes' },
    { id: 'responsive', icon: MonitorSmartphone, label: 'Responsive' }
  ];

  return (
    <div className="animate-fadeIn pb-24">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 border-b border-slate-200 pb-5 gap-4">
        <div>
          <span className="text-indigo-600 text-[10px] tracking-[0.3em] font-bold uppercase mb-1 block">Manager</span>
          <h2 className="text-2xl font-black text-slate-800 flex items-center gap-2">Contact Page Manager</h2>
          <p className="text-slate-500 text-sm mt-2">Gérez complètement le design et le contenu de la page Contact.</p>
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
        {activeTab === 'content' && (
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fadeIn">
             <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
                <h3 className="font-black text-slate-800 border-b pb-2 mb-4">Hero Section</h3>
                {renderInput('content', 'Hero Background Image', 'heroBg')}
                {renderTextarea('content', 'Hero Text', 'heroText')}
                {renderInput('content', 'Page Title', 'title')}
                {renderInput('content', 'Subtitle', 'subtitle')}
                {renderTextarea('content', 'Description', 'description')}
             </div>
             
             <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
                <h3 className="font-black text-slate-800 border-b pb-2 mb-4">Form Text</h3>
                {renderInput('content', 'Form Title', 'formTitle')}
                {renderInput('content', 'Form Description', 'formDesc')}
                {renderInput('content', 'Button Text', 'buttonText')}
             </div>

             <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
                <h3 className="font-black text-slate-800 border-b pb-2 mb-4">Contact Info (India)</h3>
                {renderInput('content', 'Address', 'inAddress')}
                {renderInput('content', 'Phone', 'inPhone')}
                {renderInput('content', 'Email', 'inEmail')}
                {renderInput('content', 'Website', 'inWeb')}
                {renderInput('content', 'Google Map Iframe URL (src only)', 'inMap', 'Paste only the src="https://..." URL here')}
                {config.content.inMap && (
                  <div className="mt-2 h-40 rounded-lg overflow-hidden border border-slate-200">
                    <iframe src={config.content.inMap} width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy"></iframe>
                  </div>
                )}
             </div>

             <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
                <h3 className="font-black text-slate-800 border-b pb-2 mb-4">Contact Info (France)</h3>
                {renderInput('content', 'Address', 'frAddress')}
                {renderInput('content', 'Phone', 'frPhone')}
                {renderInput('content', 'Email', 'frEmail')}
                {renderInput('content', 'Website', 'frWeb')}
                {renderInput('content', 'Google Map Iframe URL (src only)', 'frMap', 'Paste only the src="https://..." URL here')}
                {config.content.frMap && (
                  <div className="mt-2 h-40 rounded-lg overflow-hidden border border-slate-200">
                    <iframe src={config.content.frMap} width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy"></iframe>
                  </div>
                )}
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
                <div className="grid grid-cols-2 gap-6">
                   {renderInput('spacing', 'Gap Between Sections', 'gapSections')}
                   {renderInput('spacing', 'Gap Between Columns', 'gapColumns')}
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
                 {renderInput('alignment', 'Form Align', 'formAlign')}
                 {renderInput('alignment', 'Map Align', 'mapAlign')}
                 {renderInput('alignment', 'Contact Card Align', 'cardAlign')}
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
                <h3 className="font-black text-slate-800 border-b pb-2 mb-4">Paragraph & Labels</h3>
                {renderColor('typography', 'Paragraph Color', 'paragraphColor')}
                {renderInput('typography', 'Paragraph Size', 'paragraphSize')}
                {renderColor('typography', 'Label Color', 'labelColor')}
                {renderColor('typography', 'Input Text Color', 'inputColor')}
                {renderColor('typography', 'Placeholder Color', 'placeholderColor')}
                {renderColor('typography', 'Button Text Color', 'buttonTextColor')}
             </div>
           </div>
        )}

        {activeTab === 'formDesign' && (
           <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4 animate-fadeIn">
              <h3 className="font-black text-slate-800 border-b pb-2 mb-4">Form Inputs & Button Design</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                 {renderInput('formDesign', 'Input Width', 'inputWidth')}
                 {renderInput('formDesign', 'Input Height', 'inputHeight')}
                 {renderInput('formDesign', 'Input Padding', 'inputPadding')}
                 {renderInput('formDesign', 'Input Margin', 'inputMargin')}
                 {renderColor('formDesign', 'Border Color', 'borderColor')}
                 {renderInput('formDesign', 'Border Radius', 'borderRadius')}
                 {renderColor('formDesign', 'Background Color', 'bgColor')}
                 {renderColor('formDesign', 'Focus Color', 'focusColor')}
                 {renderInput('formDesign', 'Textarea Height', 'textareaHeight')}
                 {renderInput('formDesign', 'Label Position', 'labelPosition')}
                 {renderInput('formDesign', 'Button Width', 'buttonWidth')}
                 {renderInput('formDesign', 'Button Height', 'buttonHeight')}
                 {renderColor('formDesign', 'Button Background', 'buttonBg')}
                 {renderColor('formDesign', 'Button Hover', 'buttonHoverBg')}
                 {renderInput('formDesign', 'Button Radius', 'buttonRadius')}
                 {renderInput('formDesign', 'Button Custom Classes', 'buttonClasses')}
              </div>
           </div>
        )}

        {activeTab === 'cards' && (
           <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4 animate-fadeIn">
              <h3 className="font-black text-slate-800 border-b pb-2 mb-4">Contact Info Card Design</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                 {renderColor('cards', 'Card Background', 'bg')}
                 {renderColor('cards', 'Card Header BG', 'headerBg')}
                 {renderInput('cards', 'Card Padding', 'padding')}
                 {renderInput('cards', 'Card Margin', 'margin')}
                 {renderInput('cards', 'Border Radius', 'radius')}
                 {renderInput('cards', 'Card Shadow', 'shadow')}
                 {renderColor('cards', 'Border Color', 'borderColor')}
                 {renderColor('cards', 'Icon Color', 'iconColor')}
                 {renderInput('cards', 'Icon Size', 'iconSize')}
                 {renderInput('cards', 'Hover Effect', 'hoverEffect')}
                 {renderInput('cards', 'Card Alignment', 'align')}
              </div>
           </div>
        )}

        {activeTab === 'classes' && (
           <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4 animate-fadeIn">
              <h3 className="font-black text-slate-800 border-b pb-2 mb-4 flex items-center gap-2"><Code size={18}/> Custom Tailwind Classes</h3>
              <p className="text-xs text-slate-500 mb-4">Définissez des classes Tailwind CSS personnalisées pour chaque section afin de contrôler entièrement le design de la page.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 {renderInput('classes', 'Page Wrapper Class', 'pageWrapper')}
                 {renderInput('classes', 'Container Class', 'container')}
                 {renderInput('classes', 'Hero Section Class', 'hero')}
                 {renderInput('classes', 'Heading Class', 'heading')}
                 {renderInput('classes', 'Subtitle Class', 'subtitle')}
                 {renderInput('classes', 'Contact Grid Class', 'contactGrid')}
                 {renderInput('classes', 'Contact Info Card Class', 'contactCard')}
                 {renderInput('classes', 'Form Wrapper Class', 'formWrapper')}
                 {renderInput('classes', 'Input Class', 'input')}
                 {renderInput('classes', 'Textarea Class', 'textarea')}
                 {renderInput('classes', 'Button Class', 'button')}
                 {renderInput('classes', 'Map Wrapper Class', 'mapWrapper')}
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

export default ContactManager;
