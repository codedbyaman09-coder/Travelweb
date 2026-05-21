import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Footer from '../components/Footer';

const AdminDashboard = () => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  // State
  const [blogs, setBlogs] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  const [currentTab, setCurrentTab] = useState('list'); // 'list' or 'create'
  const [editingBlog, setEditingBlog] = useState(null);

  // Form Fields State
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [category, setCategory] = useState('Culture & Histoire');
  const [excerpt, setExcerpt] = useState('');
  const [content, setContent] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [readTime, setReadTime] = useState('5 min');

  // Messages State
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const API_URL = 'http://localhost:8000/api/blogs';

  // Protect Admin Dashboard
  useEffect(() => {
    if (!loading && !user) {
      navigate('/login');
    }
  }, [user, loading, navigate]);

  // Fetch blogs on load
  const fetchBlogs = async () => {
    setIsFetching(true);
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      if (data.success) {
        setBlogs(data.blogs);
      }
    } catch (err) {
      console.error('Fetch blogs error:', err);
    } finally {
      setIsFetching(false);
    }
  };

  useEffect(() => {
    if (user) {
      fetchBlogs();
    }
  }, [user]);

  // Handle Title to Slug translation
  const handleTitleChange = (val) => {
    setTitle(val);
    // Generate clean slug automatically
    const cleaned = val
      .toLowerCase()
      .replace(/[^a-z0-9 -]/g, '') // remove invalid chars
      .replace(/\s+/g, '-') // collapse whitespace and replace by -
      .replace(/-+/g, '-'); // collapse dashes
    setSlug(cleaned);
  };

  // CREATE BLOG POST
  const handleCreateBlog = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setIsSubmitting(true);

    const token = localStorage.getItem('indeora_token');
    if (!token) {
      setError('Session expirée. Veuillez vous reconnecter.');
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          title,
          slug,
          category,
          excerpt,
          content,
          image_url: imageUrl || 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&q=80&w=800',
          read_time: readTime
        })
      });

      const data = await response.json();

      if (data.success) {
        setSuccess('Le blog a été créé avec succès!');
        // Reset form
        setTitle('');
        setSlug('');
        setExcerpt('');
        setContent('');
        setImageUrl('');
        setReadTime('5 min');
        // Refresh list
        fetchBlogs();
        // Redirect
        setTimeout(() => {
          setCurrentTab('list');
          setSuccess('');
        }, 1500);
      } else {
        setError(data.message || 'Échec de la création du blog.');
      }
    } catch (err) {
      setError('Une erreur réseau est survenue.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // UPDATE BLOG POST
  const handleUpdateBlog = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setIsSubmitting(true);

    const token = localStorage.getItem('indeora_token');
    if (!token) {
      setError('Session expirée.');
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch(`${API_URL}/${editingBlog.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          title: editingBlog.title,
          slug: editingBlog.slug,
          category: editingBlog.category,
          excerpt: editingBlog.excerpt,
          content: editingBlog.content,
          image_url: editingBlog.image_url,
          read_time: editingBlog.read_time
        })
      });

      const data = await response.json();

      if (data.success) {
        setSuccess('Le blog a été modifié avec succès!');
        setEditingBlog(null);
        fetchBlogs();
        setTimeout(() => setSuccess(''), 1500);
      } else {
        setError(data.message || 'Échec de la modification.');
      }
    } catch (err) {
      setError('Erreur de connexion.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // DELETE BLOG POST
  const handleDeleteBlog = async (id) => {
    if (!window.confirm('Êtes-vous sûr de vouloir supprimer ce blog ?')) return;

    setError('');
    setSuccess('');

    const token = localStorage.getItem('indeora_token');
    if (!token) {
      setError('Session expirée.');
      return;
    }

    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      const data = await response.json();

      if (data.success) {
        setSuccess('Le blog a été supprimé.');
        fetchBlogs();
        setTimeout(() => setSuccess(''), 1500);
      } else {
        setError(data.message || 'Échec de la suppression.');
      }
    } catch (err) {
      setError('Erreur de connexion.');
    }
  };

  // Start Edit mode
  const startEdit = (blog) => {
    setEditingBlog({ ...blog });
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
      <div className="py-12 flex-grow w-full max-w-[1440px] mx-auto px-[40px]">
        {/* Header Dashboard */}
        <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-gray-200 pb-6 mb-10 gap-4">
          <div>
            <span className="text-[#A88B52] text-[10px] tracking-[0.35em] font-bold uppercase mb-1 block">
              Panneau d'administration
            </span>
            <h1 className="font-serif text-3xl md:text-4xl text-[#5e412f] italic">
              Gestion des Blogs (CRUD)
            </h1>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => {
                setCurrentTab('list');
                setEditingBlog(null);
              }}
              className={`px-5 py-2.5 text-xs font-bold tracking-wider uppercase border rounded-sm transition-all duration-300 ${currentTab === 'list' && !editingBlog
                  ? 'bg-[#5e412f] text-white border-[#5e412f]'
                  : 'bg-white text-gray-600 border-gray-200 hover:border-[#A88B52]'
                }`}
            >
              Tous les blogs
            </button>
            <button
              onClick={() => {
                setCurrentTab('create');
                setEditingBlog(null);
              }}
              className={`px-5 py-2.5 text-xs font-bold tracking-wider uppercase border rounded-sm transition-all duration-300 ${currentTab === 'create'
                  ? 'bg-[#5e412f] text-white border-[#5e412f]'
                  : 'bg-white text-gray-600 border-gray-200 hover:border-[#A88B52]'
                }`}
            >
              Écrire un blog
            </button>
          </div>
        </div>

        {/* Global Notifications */}
        {error && (
          <div className="mb-6 p-4 bg-red-50 border-l-2 border-red-500 text-red-700 text-xs font-semibold rounded-sm">
            {error}
          </div>
        )}

        {success && (
          <div className="mb-6 p-4 bg-green-50 border-l-2 border-green-500 text-green-700 text-xs font-semibold rounded-sm animate-pulse">
            {success}
          </div>
        )}

        {/* TAB 1: LISTING & EDITING */}
        {currentTab === 'list' && !editingBlog && (
          <div className="bg-white border border-[#A88B52]/10 shadow-md rounded-sm overflow-hidden">
            {isFetching ? (
              <div className="p-20 flex justify-center items-center">
                <svg className="animate-spin h-8 w-8 text-[#A88B52]" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
              </div>
            ) : blogs.length === 0 ? (
              <div className="p-16 text-center text-gray-400">
                Aucun blog trouvé dans la base de données. Cliquez sur "Écrire un blog" pour commencer !
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-[#fcfbf9] border-b border-gray-100 text-[#5e412f]/70 uppercase text-[9px] tracking-widest font-bold">
                      <th className="py-4 px-6">Image</th>
                      <th className="py-4 px-6">Titre</th>
                      <th className="py-4 px-6">Catégorie</th>
                      <th className="py-4 px-6">Temps de lecture</th>
                      <th className="py-4 px-6 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 text-xs">
                    {blogs.map((blog) => (
                      <tr key={blog.id} className="hover:bg-gray-50/50 transition-colors">
                        <td className="py-4 px-6">
                          <img
                            src={blog.image_url}
                            alt={blog.title}
                            className="w-14 h-10 object-cover rounded-sm shadow-sm"
                          />
                        </td>
                        <td className="py-4 px-6 font-serif text-sm text-gray-800 font-medium">
                          {blog.title}
                          <span className="block text-[10px] text-gray-400 font-sans tracking-wide mt-0.5">
                            /{blog.slug}
                          </span>
                        </td>
                        <td className="py-4 px-6">
                          <span className="bg-[#f7f3ed] text-[#A88B52] px-2.5 py-1 rounded-full text-[9px] font-bold uppercase">
                            {blog.category}
                          </span>
                        </td>
                        <td className="py-4 px-6 text-gray-500 font-medium">{blog.read_time}</td>
                        <td className="py-4 px-6 text-right space-x-2">
                          <button
                            onClick={() => startEdit(blog)}
                            className="text-xs text-blue-600 hover:text-blue-800 font-bold uppercase tracking-wider bg-blue-50 px-3 py-1.5 rounded-sm transition-colors cursor-pointer"
                          >
                            Modifier
                          </button>
                          <button
                            onClick={() => handleDeleteBlog(blog.id)}
                            className="text-xs text-red-600 hover:text-red-800 font-bold uppercase tracking-wider bg-red-50 px-3 py-1.5 rounded-sm transition-colors cursor-pointer"
                          >
                            Supprimer
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {/* TAB 2: CREATE BLOG POST */}
        {currentTab === 'create' && !editingBlog && (
          <div className="bg-white border border-[#A88B52]/10 shadow-md rounded-sm p-8 max-w-4xl mx-auto">
            <h2 className="font-serif text-xl text-[#5e412f] border-b border-gray-100 pb-4 mb-6">
              Créer un nouvel article
            </h2>

            <form onSubmit={handleCreateBlog} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] uppercase tracking-wider font-bold text-[#5e412f]/60 mb-2">
                    Titre de l'article
                  </label>
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => handleTitleChange(e.target.value)}
                    className="w-full px-4 py-3 bg-[#fdfdfc] border border-gray-200 rounded-sm focus:outline-none focus:border-[#A88B52] focus:ring-1 focus:ring-[#A88B52] text-sm"
                    placeholder="Ex: Le Rajasthan Royal"
                    required
                  />
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-wider font-bold text-[#5e412f]/60 mb-2">
                    Slug (Auto-généré)
                  </label>
                  <input
                    type="text"
                    value={slug}
                    onChange={(e) => setSlug(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-sm focus:outline-none text-sm text-gray-500 font-mono"
                    placeholder="rajasthan-royal"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-[10px] uppercase tracking-wider font-bold text-[#5e412f]/60 mb-2">
                    Catégorie
                  </label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full px-4 py-3 bg-[#fdfdfc] border border-gray-200 rounded-sm focus:outline-none focus:border-[#A88B52] text-sm font-medium text-gray-700"
                  >
                    <option value="Culture & Histoire">Culture & Histoire</option>
                    <option value="Nature & Bien-être">Nature & Bien-être</option>
                    <option value="Spiritualité">Spiritualité</option>
                    <option value="Aventure">Aventure</option>
                    <option value="Plage & Détente">Plage & Détente</option>
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-[10px] uppercase tracking-wider font-bold text-[#5e412f]/60 mb-2">
                    URL de l'image de couverture
                  </label>
                  <input
                    type="url"
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                    className="w-full px-4 py-3 bg-[#fdfdfc] border border-gray-200 rounded-sm focus:outline-none focus:border-[#A88B52] text-sm"
                    placeholder="https://images.unsplash.com/..."
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label className="block text-[10px] uppercase tracking-wider font-bold text-[#5e412f]/60 mb-2">
                    Temps de lecture
                  </label>
                  <input
                    type="text"
                    value={readTime}
                    onChange={(e) => setReadTime(e.target.value)}
                    className="w-full px-4 py-3 bg-[#fdfdfc] border border-gray-200 rounded-sm focus:outline-none focus:border-[#A88B52] text-sm"
                    placeholder="Ex: 5 min"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-wider font-bold text-[#5e412f]/60 mb-2">
                  Extrait / Résumé court
                </label>
                <textarea
                  value={excerpt}
                  onChange={(e) => setExcerpt(e.target.value)}
                  className="w-full px-4 py-3 bg-[#fdfdfc] border border-gray-200 rounded-sm focus:outline-none focus:border-[#A88B52] text-sm h-20"
                  placeholder="Écrivez un court extrait accrocheur pour la carte du blog..."
                  required
                />
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-wider font-bold text-[#5e412f]/60 mb-2">
                  Contenu de l'article (Supporte le HTML basique)
                </label>
                <textarea
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  className="w-full px-4 py-3 bg-[#fdfdfc] border border-gray-200 rounded-sm focus:outline-none focus:border-[#A88B52] text-sm h-64 font-sans"
                  placeholder="<h2>Titre principal</h2><p>Paragraphe ici...</p>"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-[#5e412f] text-white text-[11px] font-bold tracking-[0.25em] py-4 rounded-sm hover:bg-[#A88B52] transition-colors duration-300 uppercase shadow-md flex items-center justify-center ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
              >
                {isSubmitting ? 'Publication en cours...' : 'Publier le Blog'}
              </button>
            </form>
          </div>
        )}

        {/* EDITING MODE FORM */}
        {editingBlog && (
          <div className="bg-white border border-[#A88B52]/10 shadow-md rounded-sm p-8 max-w-4xl mx-auto animate-fadeIn">
            <div className="flex justify-between items-center border-b border-gray-100 pb-4 mb-6">
              <h2 className="font-serif text-xl text-[#5e412f]">
                Modifier l'article
              </h2>
              <button
                onClick={() => setEditingBlog(null)}
                className="text-gray-400 hover:text-gray-600 font-bold text-xs uppercase tracking-wider"
              >
                Annuler
              </button>
            </div>

            <form onSubmit={handleUpdateBlog} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] uppercase tracking-wider font-bold text-[#5e412f]/60 mb-2">
                    Titre de l'article
                  </label>
                  <input
                    type="text"
                    value={editingBlog.title}
                    onChange={(e) => setEditingBlog({ ...editingBlog, title: e.target.value })}
                    className="w-full px-4 py-3 bg-[#fdfdfc] border border-gray-200 rounded-sm focus:outline-none focus:border-[#A88B52] text-sm"
                    required
                  />
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-wider font-bold text-[#5e412f]/60 mb-2">
                    Slug
                  </label>
                  <input
                    type="text"
                    value={editingBlog.slug}
                    onChange={(e) => setEditingBlog({ ...editingBlog, slug: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-sm text-sm text-gray-500 font-mono focus:outline-none"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-[10px] uppercase tracking-wider font-bold text-[#5e412f]/60 mb-2">
                    Catégorie
                  </label>
                  <select
                    value={editingBlog.category}
                    onChange={(e) => setEditingBlog({ ...editingBlog, category: e.target.value })}
                    className="w-full px-4 py-3 bg-[#fdfdfc] border border-gray-200 rounded-sm focus:outline-none focus:border-[#A88B52] text-sm font-medium text-gray-700"
                  >
                    <option value="Culture & Histoire">Culture & Histoire</option>
                    <option value="Nature & Bien-être">Nature & Bien-être</option>
                    <option value="Spiritualité">Spiritualité</option>
                    <option value="Aventure">Aventure</option>
                    <option value="Plage & Détente">Plage & Détente</option>
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-[10px] uppercase tracking-wider font-bold text-[#5e412f]/60 mb-2">
                    URL de l'image de couverture
                  </label>
                  <input
                    type="url"
                    value={editingBlog.image_url}
                    onChange={(e) => setEditingBlog({ ...editingBlog, image_url: e.target.value })}
                    className="w-full px-4 py-3 bg-[#fdfdfc] border border-gray-200 rounded-sm focus:outline-none focus:border-[#A88B52] text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label className="block text-[10px] uppercase tracking-wider font-bold text-[#5e412f]/60 mb-2">
                    Temps de lecture
                  </label>
                  <input
                    type="text"
                    value={editingBlog.read_time}
                    onChange={(e) => setEditingBlog({ ...editingBlog, read_time: e.target.value })}
                    className="w-full px-4 py-3 bg-[#fdfdfc] border border-gray-200 rounded-sm focus:outline-none focus:border-[#A88B52] text-sm"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-wider font-bold text-[#5e412f]/60 mb-2">
                  Extrait / Résumé court
                </label>
                <textarea
                  value={editingBlog.excerpt}
                  onChange={(e) => setEditingBlog({ ...editingBlog, excerpt: e.target.value })}
                  className="w-full px-4 py-3 bg-[#fdfdfc] border border-gray-200 rounded-sm focus:outline-none focus:border-[#A88B52] text-sm h-20"
                  required
                />
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-wider font-bold text-[#5e412f]/60 mb-2">
                  Contenu de l'article (Supporte le HTML)
                </label>
                <textarea
                  value={editingBlog.content}
                  onChange={(e) => setEditingBlog({ ...editingBlog, content: e.target.value })}
                  className="w-full px-4 py-3 bg-[#fdfdfc] border border-gray-200 rounded-sm focus:outline-none focus:border-[#A88B52] text-sm h-64"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-[#5e412f] text-white text-[11px] font-bold tracking-[0.25em] py-4 rounded-sm hover:bg-[#A88B52] transition-colors duration-300 uppercase shadow-md flex items-center justify-center ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
              >
                {isSubmitting ? 'Sauvegarde en cours...' : 'Sauvegarder les modifications'}
              </button>
            </form>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default AdminDashboard;
