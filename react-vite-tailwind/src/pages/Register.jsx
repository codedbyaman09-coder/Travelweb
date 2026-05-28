import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Footer from '../components/Footer';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setIsLoading(true);

    if (password.length < 6) {
      setError('Le mot de passe doit contenir au moins 6 caractères.');
      setIsLoading(false);
      return;
    }

    const result = await register(name, email, password);
    setIsLoading(false);

    if (result.success) {
      setSuccess('Compte créé avec succès! Redirection vers la page de connexion...');
      setTimeout(() => {
        navigate('/login');
      }, 2000);
    } else {
      setError(result.message || 'Échec de l\'inscription.');
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#313c45] text-white flex flex-col justify-between pt-24 font-sans relative overflow-hidden">
      {/* Decorative luxury gradient background glows */}
      <div className="absolute top-[-20%] left-[-20%] w-[60%] h-[60%] rounded-full bg-[#C6A46D]/10 blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-[-20%] right-[-20%] w-[60%] h-[60%] rounded-full bg-[#C6A46D]/10 blur-[150px] pointer-events-none"></div>

      <div className="max-w-md w-full mx-auto px-6 py-24 flex-grow flex flex-col justify-center relative z-10">
        <div className="bg-[#242e35]/80 backdrop-blur-md border border-[#C6A46D]/20 shadow-2xl rounded-2xl p-8 md:p-10 transition-all duration-300 hover:border-[#C6A46D]/45">
          
          <div className="text-center mb-8">
            <span className="text-[#C6A46D] text-[10px] tracking-[0.4em] font-bold uppercase mb-2 block animate-pulse">
              Rejoindre l'administration
            </span>
            <h1 className="font-serif text-3xl text-white italic tracking-wide">
              Créer un Compte
            </h1>
            <div className="w-16 h-[1.5px] bg-[#C6A46D] mx-auto mt-4 opacity-50"></div>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-500/10 border-l-2 border-red-500 text-red-200 text-xs font-semibold rounded-lg">
              {error}
            </div>
          )}

          {success && (
            <div className="mb-6 p-4 bg-green-500/10 border-l-2 border-green-500 text-green-200 text-xs font-semibold rounded-lg animate-pulse">
              {success}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-[10px] uppercase tracking-widest font-bold text-[#C6A46D] mb-2">
                Nom complet
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3.5 bg-[#313c45]/50 border border-gray-600/40 rounded-xl focus:outline-none focus:border-[#C6A46D] focus:ring-1 focus:ring-[#C6A46D] text-sm text-white transition-all duration-300 placeholder-gray-500"
                placeholder="Ex: Aman Sharma"
                required
              />
            </div>

            <div>
              <label className="block text-[10px] uppercase tracking-widest font-bold text-[#C6A46D] mb-2">
                Adresse e-mail
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3.5 bg-[#313c45]/50 border border-gray-600/40 rounded-xl focus:outline-none focus:border-[#C6A46D] focus:ring-1 focus:ring-[#C6A46D] text-sm text-white transition-all duration-300 placeholder-gray-500"
                placeholder="Ex: admin@indeora.com"
                required
              />
            </div>

            <div>
              <label className="block text-[10px] uppercase tracking-widest font-bold text-[#C6A46D] mb-2">
                Mot de passe (min. 6 caractères)
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3.5 bg-[#313c45]/50 border border-gray-600/40 rounded-xl focus:outline-none focus:border-[#C6A46D] focus:ring-1 focus:ring-[#C6A46D] text-sm text-white transition-all duration-300 placeholder-gray-500"
                placeholder="••••••••"
                required
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className={`w-full bg-[#C6A46D] hover:bg-white text-[#313c45] font-bold text-[11px] tracking-[0.3em] py-4 rounded-xl transition-all duration-300 uppercase shadow-lg hover:shadow-[#C6A46D]/20 flex items-center justify-center cursor-pointer ${
                isLoading ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {isLoading ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin h-4 w-4 text-[#313c45]" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Inscription...
                </span>
              ) : 'S\'inscrire'}
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-gray-700/30 text-center text-xs text-gray-400">
            Vous avez déjà un compte ?{' '}
            <Link to="/login" className="text-[#C6A46D] hover:text-white font-bold transition-colors underline decoration-dotted">
              Se connecter
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Register;
