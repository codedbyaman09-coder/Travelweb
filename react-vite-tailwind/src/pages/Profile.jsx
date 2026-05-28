import React, { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Footer from '../components/Footer';

const Profile = () => {
  const { user, loading, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !user) {
      navigate('/login');
    }
  }, [user, loading, navigate]);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  if (loading) {
    return (
      <div className="w-full min-h-screen bg-[#fcfbf9] flex items-center justify-center pt-24">
        <svg className="animate-spin h-10 w-10 text-[#A88B52]" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
        </svg>
      </div>
    );
  }

  if (!user) return null;

  return (
    <div className="w-full min-h-screen bg-[#fcfbf9] text-[#161c20] flex flex-col justify-between pt-24 font-sans">
      <div className="max-w-4xl mx-auto px-6 py-20 w-full flex-grow">
        <div className="bg-white border border-[#A88B52]/10 shadow-xl rounded-sm p-8 md:p-12 relative overflow-hidden">
          {/* Top golden accent line */}
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#A88B52]"></div>

          <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-gray-100 pb-8 mb-8 gap-4">
            <div>
              <span className="text-[#A88B52] text-[10px] tracking-[0.35em] font-bold uppercase mb-1 block">
                Votre Compte
              </span>
              <h1 className="font-serif text-3xl md:text-4xl text-[#5e412f] italic">
                Namasté, {user.name} !
              </h1>
            </div>

            <div className="flex gap-3">
              <Link
                to="/admin"
                className="bg-[#5e412f] text-white text-xs font-bold tracking-wider uppercase px-6 py-3 rounded-sm hover:bg-[#A88B52] transition-colors"
              >
                Accéder à l'Admin
              </Link>
              <button
                onClick={handleLogout}
                className="bg-red-50 text-red-600 border border-red-100 text-xs font-bold tracking-wider uppercase px-6 py-3 rounded-sm hover:bg-red-100 transition-colors"
              >
                Se déconnecter
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
            <div className="space-y-6">
              <h3 className="text-xs uppercase tracking-widest font-bold text-[#5e412f]/60 pb-2 border-b border-gray-50">
                Informations Personnelles
              </h3>
              
              <div>
                <span className="text-[10px] uppercase font-bold text-gray-400 block mb-1">Nom complet</span>
                <span className="font-medium text-gray-800">{user.name}</span>
              </div>

              <div>
                <span className="text-[10px] uppercase font-bold text-gray-400 block mb-1">Adresse e-mail</span>
                <span className="font-medium text-gray-800">{user.email}</span>
              </div>
            </div>

            <div className="space-y-6 bg-[#fdfbf8] p-6 rounded-sm border border-[#A88B52]/5">
              <h3 className="text-xs uppercase tracking-widest font-bold text-[#A88B52] pb-2 border-b border-[#A88B52]/10">
                Vos privilèges Admin
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed font-light">
                En tant que membre administrateur d'Indeora Voyages, vous pouvez écrire de nouveaux articles de blog, modifier les récits existants et les supprimer en toute sécurité via le tableau de bord d'administration.
              </p>
              <Link to="/admin" className="text-xs font-bold text-[#5e412f] hover:text-[#A88B52] underline block">
                Aller au panneau de configuration des blogs →
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
