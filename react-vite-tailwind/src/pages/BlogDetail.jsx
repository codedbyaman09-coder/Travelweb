import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Footer from '../components/Footer';
import EspritIndeora from '../components/EspritIndeora';

const BlogDetail = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchBlogDetail = async () => {
      setLoading(true);
      setError(false);
      try {
        const response = await fetch(`http://localhost:8000/api/blogs/${slug}`);
        const data = await response.json();
        if (data.success) {
          setBlog(data.blog);
        } else {
          setError(true);
        }
      } catch (err) {
        console.error('Fetch blog detail error:', err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogDetail();
  }, [slug]);

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

  // Fallback for static posts if database is offline or not set up
  if (error || !blog) {
    return (
      <div className="w-full min-h-screen bg-[#fcfbf9] text-center pt-32 px-6 flex flex-col justify-between">
        <div className="max-w-md mx-auto py-20">
          <h2 className="font-serif text-2xl text-[#5e412f] mb-4">Article non disponible</h2>
          <p className="text-sm text-gray-500 mb-8">
            Désolé, cet article n'a pas pu être chargé depuis le serveur.
          </p>
          <Link to="/blog" className="bg-[#5e412f] text-white text-[11px] font-bold tracking-widest py-3 px-8 rounded-sm uppercase hover:bg-[#A88B52] transition-colors">
            Retour au Blog
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-[#FAF9F6] min-h-screen text-[#161c20] font-sans">
      {/* Article Hero */}
      <div className="relative h-[65vh] w-full overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src={blog.image_url}
            alt={blog.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl pt-20">
          <span className="text-[#A88B52] text-xs font-bold tracking-[0.3em] uppercase mb-4 block">
            {blog.category}
          </span>
          <h1 className="text-white text-3xl md:text-5xl font-serif italic mb-6 leading-tight max-w-3xl mx-auto drop-shadow-md">
            {blog.title}
          </h1>
          <div className="flex items-center justify-center gap-4 text-white/80 text-xs font-medium tracking-wide">
            <span>Temps de lecture: {blog.read_time}</span>
            <span>•</span>
            <span>Publié le: {new Date(blog.created_at).toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
          </div>
        </div>
      </div>

      {/* Article Breadcrumbs & Content */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="mb-10 text-xs">
          <Link to="/" className="text-gray-400 hover:text-[#A88B52] transition-colors">Accueil</Link>
          <span className="mx-2 text-gray-300">/</span>
          <Link to="/blog" className="text-gray-400 hover:text-[#A88B52] transition-colors">Blog</Link>
          <span className="mx-2 text-gray-300">/</span>
          <span className="text-[#A88B52] font-semibold">{blog.title}</span>
        </div>

        {/* Excerpt Banner */}
        <div className="border-l-4 border-[#A88B52] pl-6 py-2 mb-12 italic text-gray-600 text-lg leading-relaxed">
          "{blog.excerpt}"
        </div>

        {/* HTML Content rendering safely */}
        <article
          className="prose prose-lg max-w-none text-gray-700 leading-8 space-y-6 text-sm md:text-base font-light"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />

        {/* Action Button at bottom */}
        <div className="mt-16 pt-10 border-t border-gray-100 text-center">
          <h3 className="font-serif text-2xl text-[#5e412f] mb-4 italic">Prêt à vivre votre propre aventure ?</h3>
          <p className="text-xs text-gray-500 max-w-md mx-auto mb-8">
            Laissez nos experts francophones concevoir un itinéraire sur mesure adapté à toutes vos envies.
          </p>
          <Link to="/demander-un-devis" className="bg-[#5e412f] text-white text-[11px] font-bold tracking-[0.25em] py-4 px-10 rounded-sm uppercase hover:bg-[#A88B52] transition-colors shadow-md inline-block">
            Demander un Devis Personnalisé
          </Link>
        </div>
      </div>

      <EspritIndeora />
      <Footer />
    </div>
  );
};

export default BlogDetail;
