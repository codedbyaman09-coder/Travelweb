import React, { useState, useEffect } from 'react';
import { apiRequest } from '../../lib/api';

const SettingManager = () => {
  const [settings, setSettings] = useState({
    siteName: '',
    contactEmail: '',
    phoneIndia: '',
    phoneFrance: '',
    topBarContactLabel: '',
    address: ''
  });
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('');

  const fetchSettings = async () => {
    try {
      const data = await apiRequest('/settings');
      if (data.success && data.data) {
        setSettings(prev => ({ ...prev, ...data.data }));
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
        body: JSON.stringify(settings)
      });
      if (data.success) {
        setMessage('ParamÃ¨tres sauvegardÃ©s avec succÃ¨s!');
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
            SystÃ¨me
          </span>
          <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-2">ParamÃ¨tres du site</h2>
        </div>
      </div>

      {message && <div className="mb-6 p-4 bg-emerald-50 text-emerald-700 text-sm rounded-xl border border-emerald-100 flex items-center gap-3"><span className="text-xl">âœ¨</span> {message}</div>}

      <div className="bg-white shadow-sm border border-slate-200 rounded-xl p-8 max-w-2xl">
        <form onSubmit={handleSubmit} className="space-y-6 text-sm">
          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">Nom du Site</label>
            <input type="text" value={settings.siteName || ''} onChange={e => setSettings({...settings, siteName: e.target.value})} className="w-full bg-slate-50 border border-slate-200 px-4 py-3.5 rounded-xl text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all" />
          </div>
          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">Email de contact</label>
            <input type="email" value={settings.contactEmail || ''} onChange={e => setSettings({...settings, contactEmail: e.target.value})} className="w-full bg-slate-50 border border-slate-200 px-4 py-3.5 rounded-xl text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all" />
          </div>
          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">Téléphone Inde</label>
            <input type="text" value={settings.phoneIndia || ''} onChange={e => setSettings({...settings, phoneIndia: e.target.value})} className="w-full bg-slate-50 border border-slate-200 px-4 py-3.5 rounded-xl text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all" />
          </div>
          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">Téléphone France</label>
            <input type="text" value={settings.phoneFrance || ''} onChange={e => setSettings({...settings, phoneFrance: e.target.value})} className="w-full bg-slate-50 border border-slate-200 px-4 py-3.5 rounded-xl text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all" />
          </div>
          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">Topbar Contact Label</label>
            <input type="text" value={settings.topBarContactLabel || ''} onChange={e => setSettings({...settings, topBarContactLabel: e.target.value})} className="w-full bg-slate-50 border border-slate-200 px-4 py-3.5 rounded-xl text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all" />
          </div>
          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">Adresse</label>
            <textarea value={settings.address || ''} onChange={e => setSettings({...settings, address: e.target.value})} className="w-full bg-slate-50 border border-slate-200 px-4 py-3.5 rounded-xl text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none h-24 resize-none transition-all" />
          </div>
          <div>
            <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">URL VidÃ©o YouTube (Page d'accueil)</label>
            <input type="text" value={settings.homeVideoUrl || ''} onChange={e => setSettings({...settings, homeVideoUrl: e.target.value})} className="w-full bg-slate-50 border border-slate-200 px-4 py-3.5 rounded-xl text-sm focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all" placeholder="Ex: https://www.youtube.com/watch?v=4hIXWVt8Rrk" />
          </div>

          <button type="submit" className="w-full bg-indigo-600 text-white py-3.5 rounded-xl text-[11px] font-bold uppercase tracking-widest shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 mt-4">
            Sauvegarder les paramÃ¨tres
          </button>
        </form>
      </div>
    </div>
  );
};

export default SettingManager;



