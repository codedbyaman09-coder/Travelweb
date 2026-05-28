import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);

  // Preferences State
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false
  });

  useEffect(() => {
    const checkConsent = async () => {
      let user_uuid = localStorage.getItem('indeora_user_uuid');

      if (!user_uuid) {
        // First time visitor
        const timer = setTimeout(() => setShowBanner(true), 1000);
        return () => clearTimeout(timer);
      }

      try {
        const fallbackApiBase = typeof window !== 'undefined' ? `http://${window.location.hostname || '127.0.0.1'}:8000/api` : 'http://127.0.0.1:8000/api';
        const API_URL = (import.meta.env.VITE_API_URL || fallbackApiBase).replace(/\/$/, '') + '/cookie-consent/' + user_uuid;

        const response = await fetch(API_URL);
        const data = await response.json();

        if (data.success && data.data) {
          // Backend has consent, sync it locally
          localStorage.setItem('indeora_cookie_consent', JSON.stringify({
            necessary: !!data.data.necessary,
            analytics: !!data.data.analytics,
            marketing: !!data.data.marketing,
            acceptedAt: data.data.created_at
          }));
          setShowBanner(false);
        } else {
          // Backend doesn't have it, show banner
          const timer = setTimeout(() => setShowBanner(true), 1000);
          return () => clearTimeout(timer);
        }
      } catch (error) {
        console.error('Failed to fetch consent from API:', error);
        // Fallback to local storage if API is down
        const localConsent = localStorage.getItem('indeora_cookie_consent');
        if (!localConsent) {
          const timer = setTimeout(() => setShowBanner(true), 1000);
          return () => clearTimeout(timer);
        }
      }
    };

    checkConsent();
  }, []);

  const saveConsent = async (prefs) => {
    // Generate or get UUID
    let user_uuid = localStorage.getItem('indeora_user_uuid');
    if (!user_uuid) {
      user_uuid = crypto.randomUUID ? crypto.randomUUID() : Math.random().toString(36).substring(2) + Date.now().toString(36);
      localStorage.setItem('indeora_user_uuid', user_uuid);
    }

    const consentData = {
      ...prefs,
      acceptedAt: new Date().toISOString()
    };

    // Save locally to hide popup immediately
    localStorage.setItem('indeora_cookie_consent', JSON.stringify(consentData));
    setShowBanner(false);
    setShowPreferences(false);

    // Send to backend API
    try {
      const fallbackApiBase = typeof window !== 'undefined' ? `http://${window.location.hostname || '127.0.0.1'}:8000/api` : 'http://127.0.0.1:8000/api';
      const API_URL = (import.meta.env.VITE_API_URL || fallbackApiBase).replace(/\/$/, '') + '/cookie-consent';

      await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          user_uuid,
          ...prefs
        })
      });
    } catch (error) {
      console.error('Failed to save cookie consent to backend:', error);
    }
  };

  const handleAcceptAll = () => {
    saveConsent({ necessary: true, analytics: true, marketing: true });
  };

  const handleRejectAll = () => {
    saveConsent({ necessary: true, analytics: false, marketing: false });
  };

  const handleSavePreferences = () => {
    saveConsent(preferences);
  };

  if (!showBanner) return null;

  return (
    <>
      {/* Main Cookie Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-[9999] p-4 md:p-6 animate-[slideUp_0.5s_ease-out]">
        <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-[0_-10px_40px_rgba(0,0,0,0.1)] border border-slate-100 p-5 md:p-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex-1 text-slate-600 text-sm md:text-base leading-relaxed">
            <h3 className="text-lg font-bold text-slate-800 mb-2 font-serif">Respect de votre vie privée</h3>
            <p className="text-sm">
              Nous utilisons des cookies afin d’améliorer votre expérience de navigation, analyser le trafic du site et personnaliser le contenu proposé. Vous pouvez accepter tous les cookies ou gérer vos préférences.

              {/* We use cookies to improve your browsing experience, analyze traffic, and personalize content. You can accept all cookies or manage your preferences. */}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
            <button
              onClick={() => setShowPreferences(true)}
              className="px-5 py-2.5 text-sm font-bold text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors whitespace-nowrap"
            >
              Gérer les préférences
            </button>
            <button
              onClick={handleRejectAll}
              className="px-5 py-2.5 text-sm font-bold text-slate-600 border border-slate-200 hover:bg-slate-50 rounded-lg transition-colors whitespace-nowrap"
            >
              Refuser

            </button>
            <button
              onClick={handleAcceptAll}
              className="px-5 py-2.5 text-sm font-bold text-white bg-[#b89450] hover:bg-[#9f7d3e] rounded-lg transition-colors whitespace-nowrap"
            >
              Accepter tout
            </button>
          </div>
        </div>
      </div>

      {/* Preferences Modal Overlay */}
      {showPreferences && (
        <div className="fixed inset-0 z-[10000] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] flex flex-col animate-[scaleIn_0.3s_ease-out]">
            <div className="p-6 border-b border-slate-100 flex items-center justify-between">
              <h3 className="text-xl font-bold text-slate-800 font-serif">Manage Cookie Preferences</h3>
              <button onClick={() => setShowPreferences(false)} className="text-slate-400 hover:text-slate-600 transition-colors">
                <X size={24} />
              </button>
            </div>

            <div className="p-6 overflow-y-auto flex-1 space-y-6">
              {/* Necessary */}
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h4 className="font-bold text-slate-800 flex items-center gap-2">
                    Necessary Cookies
                    <span className="text-[10px] uppercase tracking-wider bg-slate-100 text-slate-500 px-2 py-0.5 rounded">Always Active</span>
                  </h4>
                  <p className="text-sm text-slate-500 mt-1">Essential for the website to function properly. They cannot be disabled.</p>
                </div>
                <div className="shrink-0 pt-1">
                  <div className="w-12 h-6 bg-[#b89450] rounded-full flex items-center p-1 justify-end opacity-60 cursor-not-allowed">
                    <div className="w-4 h-4 bg-white rounded-full shadow-sm"></div>
                  </div>
                </div>
              </div>

              {/* Analytics */}
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h4 className="font-bold text-slate-800">Analytics Cookies</h4>
                  <p className="text-sm text-slate-500 mt-1">Help us understand how visitors interact with the website by collecting and reporting information anonymously.</p>
                </div>
                <div className="shrink-0 pt-1">
                  <button
                    onClick={() => setPreferences(p => ({ ...p, analytics: !p.analytics }))}
                    className={`w-12 h-6 rounded-full flex items-center p-1 transition-colors ${preferences.analytics ? 'bg-[#b89450] justify-end' : 'bg-slate-300 justify-start'}`}
                  >
                    <div className="w-4 h-4 bg-white rounded-full shadow-sm transition-all"></div>
                  </button>
                </div>
              </div>

              {/* Marketing */}
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h4 className="font-bold text-slate-800">Marketing Cookies</h4>
                  <p className="text-sm text-slate-500 mt-1">Used to track visitors across websites. The intention is to display ads that are relevant and engaging for the individual user.</p>
                </div>
                <div className="shrink-0 pt-1">
                  <button
                    onClick={() => setPreferences(p => ({ ...p, marketing: !p.marketing }))}
                    className={`w-12 h-6 rounded-full flex items-center p-1 transition-colors ${preferences.marketing ? 'bg-[#b89450] justify-end' : 'bg-slate-300 justify-start'}`}
                  >
                    <div className="w-4 h-4 bg-white rounded-full shadow-sm transition-all"></div>
                  </button>
                </div>
              </div>
            </div>

            <div className="p-6 border-t border-slate-100 bg-slate-50 rounded-b-2xl flex justify-end gap-3">
              <button
                onClick={handleSavePreferences}
                className="px-6 py-2.5 text-sm font-bold text-white bg-slate-800 hover:bg-slate-900 rounded-lg transition-colors"
              >
                Save Preferences
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CookieConsent;
