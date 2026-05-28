import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import FaqManager from '../components/admin/FaqManager';
import InquiryManager from '../components/admin/InquiryManager';
import DestinationManager from '../components/admin/DestinationManager';
import ItineraryManager from '../components/admin/ItineraryManager';
import DashboardOverview from '../components/admin/DashboardOverview';
import UserManager from '../components/admin/UserManager';
import MediaManager from '../components/admin/MediaManager';
import SettingManager from '../components/admin/SettingManager';
import MenuManager from '../components/admin/MenuManager';
import MetaManager from '../components/admin/MetaManager';
import GlobalContentManager from '../components/admin/GlobalContentManager';
import SeoManager from '../components/admin/SeoManager';
import BlogContentManager from '../components/admin/BlogContentManager';
import AboutManager from '../components/admin/AboutManager';
import YogaManager from '../components/admin/YogaManager';
import HomeManager from '../components/admin/HomeManager';
import GenericContentManager from '../components/admin/GenericContentManager';
import MapDestManager from '../components/admin/MapDestManager';
import BlogCategoryManager from '../components/admin/BlogCategoryManager';
import BlogManager from '../components/admin/BlogManager';
import ProfileManager from '../components/admin/ProfileManager';
import EnviesManager from '../components/admin/EnviesManager';
import VisionManager from '../components/admin/VisionManager';
import FooterManager from '../components/admin/FooterManager';
import ConfirmModal from '../components/admin/ConfirmModal';
import {
  FileText, GalleryHorizontalEnd, HelpCircle, Home as HomeIcon,
  Image, Inbox, Info, LayoutDashboard, Map, Mountain,
  Route as RouteIcon, Search, Settings, Star, Tags,
  UserCog, Users, Video, ChevronDown, ChevronUp
} from 'lucide-react';
import { apiList, apiRequest } from '../lib/api';

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

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeModule, setActiveModule] = useState('dashboard');
  const [expandedNavGroups, setExpandedNavGroups] = useState({ home: false });
  const [blogCategories, setBlogCategories] = useState(['Culture & Histoire', 'Nature & Bien-être', 'Spiritualité', 'Aventure', 'Plage & Détente']);
  const [managingContentBlog, setManagingContentBlog] = useState(null);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [blogToDelete, setBlogToDelete] = useState(null);
  const API_PATH = '/blogs';

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
    setError(''); setSuccess(''); setIsSubmitting(true);
    try {
      const res = await apiRequest(API_PATH, { method: 'POST', body: JSON.stringify({ title, slug, category, excerpt, content, image_url: imageUrl, read_time: readTime }) });
      if (res && res.success) {
        setSuccess('Blog publié avec succès !');
        setTitle(''); setSlug(''); setCategory('Culture & Histoire'); setExcerpt(''); setContent(''); setImageUrl(''); setReadTime('5 min');
        setCurrentTab('list'); fetchBlogs();
        setTimeout(() => setSuccess(''), 3000);
      } else { setError(res?.message || 'Erreur.'); }
    } catch (err) { setError('Erreur de connexion.'); }
    finally { setIsSubmitting(false); }
  };

  // UPDATE BLOG POST
  const handleUpdateBlog = async (e) => {
    e.preventDefault();
    setError(''); setSuccess(''); setIsSubmitting(true);
    try {
      const res = await apiRequest(`${API_PATH}/${editingBlog.id}`, { method: 'PUT', body: JSON.stringify(editingBlog) });
      if (res && res.success) {
        setSuccess('Blog mis à jour !'); setEditingBlog(null); fetchBlogs();
        setTimeout(() => setSuccess(''), 3000);
      } else { setError(res?.message || 'Erreur.'); }
    } catch (err) { setError('Erreur de connexion.'); }
    finally { setIsSubmitting(false); }
  };

  // DELETE BLOG POST
  const handleDeleteBlog = (id) => { setBlogToDelete(id); setDeleteModalOpen(true); };
  const handleConfirmDeleteBlog = async () => {
    if (!blogToDelete) return;
    setDeleteModalOpen(false);
    try {
      const res = await apiRequest(`${API_PATH}/${blogToDelete}`, { method: 'DELETE' });
      if (res && res.success) { setSuccess('Blog supprimé.'); fetchBlogs(); setTimeout(() => setSuccess(''), 1500); }
      else { setError(res?.message || 'Échec.'); }
    } catch (err) { setError('Erreur de connexion.'); }
    finally { setBlogToDelete(null); }
  };

  const startEdit = (blog) => { setEditingBlog({ ...blog }); };


  const navItems = [
    { id: 'dashboard', icon: LayoutDashboard, label: 'Dashboard' },
    { id: 'settings', icon: Settings, label: 'Website Settings' },
    { id: 'menu', icon: RouteIcon, label: 'Navigation Menu' },
    { id: 'meta', icon: Tags, label: 'Meta SEO Manager' },
    { id: 'footer', icon: LayoutDashboard, label: 'Footer Management' },
    { id: 'home', icon: HomeIcon, label: 'Home Page Builder' },
    { id: 'abouts', icon: Info, label: 'About Management' },
    { id: 'destinations', icon: Map, label: 'Destinations Management' },
    { id: 'blogs', icon: FileText, label: 'Blog Management' },
    { id: 'blog_categories', icon: Tags, label: 'Blog Categories' },
    { id: 'logo', icon: Image, label: 'Logo Management' },
    { id: 'banners', icon: GalleryHorizontalEnd, label: 'Banner / Hero' },
    {
      id: 'home_group', icon: HomeIcon, label: 'Home Pages', children: [
        { id: 'home_content', icon: HomeIcon, label: 'Home Content' },
        { id: 'esprit', icon: Star, label: "Home - L'esprit Indeora" },
        { id: 'map_dest', icon: Map, label: 'Home - Carte Destinations' },
        { id: 'vision', icon: Info, label: 'Home - Vision du Voyage' },
      ]
    },
    { id: 'envies', icon: RouteIcon, label: 'Toutes Vos Envies' },
    { id: 'itineraries', icon: RouteIcon, label: 'Tours / Packages' },
    { id: 'gallery', icon: GalleryHorizontalEnd, label: 'Gallery' },
    { id: 'videos', icon: Video, label: 'Videos' },
    { id: 'testimonials', icon: Star, label: 'Testimonials' },
    { id: 'faq', icon: HelpCircle, label: 'FAQ' },
    { id: 'inquiries', icon: Inbox, label: 'Contact Enquiries' },
    { id: 'page_content', icon: FileText, label: 'Textes Principaux' },
    { id: 'pages', icon: Search, label: 'SEO Management' },
    { id: 'yoga', icon: Mountain, label: 'Yoga' },
    { id: 'media', icon: Image, label: 'Media Library' },
    { id: 'users', icon: Users, label: 'Users' },
    { id: 'profile', icon: UserCog, label: 'Admin Profile' },
  ];


  if (loading) {
    return (
      <div className="w-full min-h-screen bg-[#f1f5f9] flex items-center justify-center pt-24">
        <svg className="animate-spin h-10 w-10 text-indigo-500" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
        </svg>
      </div>
    );
  }
  if (!user) return null;


  return (
    <div className="flex h-screen bg-[#f1f5f9] font-sans overflow-hidden text-[#1b2228]">
      {/* Sidebar */}
      <aside className={`bg-[#0f172a] border-r border-slate-800 transition-all duration-300 ${isSidebarOpen ? 'w-64' : 'w-20'} flex flex-col shrink-0 z-20 shadow-2xl`}>
        <div className="h-20 flex items-center justify-center border-b border-slate-800/50 shrink-0">
          <span className="text-white font-serif italic text-2xl tracking-widest">{isSidebarOpen ? 'Indeora.' : 'I.'}</span>
        </div>
        <nav className="flex-1 py-6 space-y-1 px-4 overflow-y-auto custom-scrollbar">
          {navItems.map(item => {
            if (item.children) {
              const isOpen = expandedNavGroups[item.id];
              const Icon = item.icon;
              return (
                <div key={item.id}>
                  <button onClick={() => setExpandedNavGroups(p => ({ ...p, [item.id]: !p[item.id] }))} className="w-full flex items-center justify-between px-4 py-3 rounded-lg text-slate-400 hover:bg-[#1e293b]/50 hover:text-slate-200 transition-all group">
                    <div className="flex items-center gap-3">
                      <Icon size={19} strokeWidth={1.8} />
                      {isSidebarOpen && <span className="text-[11px] uppercase tracking-wider font-bold whitespace-nowrap">{item.label}</span>}
                    </div>
                    {isSidebarOpen && (isOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />)}
                  </button>
                  {isOpen && isSidebarOpen && item.children.map(child => {
                    const CIcon = child.icon;
                    return (
                      <button key={child.id} onClick={() => setActiveModule(child.id)} className={`w-full flex items-center gap-3 px-4 py-2.5 ml-4 rounded-lg text-[11px] font-bold uppercase tracking-wider transition-all ${activeModule === child.id ? 'bg-[#1e293b] text-indigo-400 shadow-[inset_4px_0_0_#818cf8]' : 'text-slate-500 hover:bg-[#1e293b]/50 hover:text-slate-200'}`}>
                        <CIcon size={15} strokeWidth={1.8} />{child.label}
                      </button>
                    );
                  })}
                </div>
              );
            }
            const Icon = item.icon;
            return (
              <button key={item.id} onClick={() => setActiveModule(item.id)} className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all group ${activeModule === item.id ? 'bg-[#1e293b] text-indigo-400 shadow-[inset_4px_0_0_#818cf8]' : 'text-slate-400 hover:bg-[#1e293b]/50 hover:text-slate-200'}`}>
                <span className={`transition-transform duration-300 ${activeModule === item.id ? 'scale-110' : 'group-hover:scale-110'}`}><Icon size={19} strokeWidth={1.8} /></span>
                {isSidebarOpen && <span className={`ml-1 text-[11px] uppercase tracking-wider font-bold whitespace-nowrap ${activeModule === item.id ? 'text-indigo-400' : 'text-slate-400 group-hover:text-slate-200'}`}>{item.label}</span>}
              </button>
            );
          })}
        </nav>
        <div className="p-6 border-t border-slate-800/50 shrink-0 bg-[#0b1121]">
          <button onClick={() => navigate('/')} className="flex items-center text-slate-400 hover:text-indigo-400 transition-colors w-full group">
            <span className="group-hover:-translate-x-1 transition-transform duration-300"><HomeIcon size={18} strokeWidth={1.8} /></span>
            {isSidebarOpen && <span className="ml-4 font-bold text-[10px] uppercase tracking-[0.2em] whitespace-nowrap">Retour au site</span>}
          </button>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden bg-[#f1f5f9] relative">
        <header className="h-20 bg-white/80 backdrop-blur-md border-b border-slate-200 flex items-center justify-between px-8 shrink-0 z-10 sticky top-0">
          <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-slate-500 hover:text-slate-800 hover:bg-slate-200 transition-all">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
          </button>
          <div className="flex items-center gap-4">
            <div className="text-right hidden md:block">
              <p className="text-xs font-bold text-slate-800 uppercase tracking-wider">{user.name || 'Admin'}</p>
              <p className="text-[10px] text-slate-500 font-mono mt-0.5">{user.email || 'admin@indeora.com'}</p>
            </div>
            <div className="w-10 h-10 rounded-lg bg-[#0f172a] text-white flex items-center justify-center font-bold text-lg shadow-sm border border-slate-200">{user.name ? user.name[0].toUpperCase() : 'A'}</div>
          </div>
        </header>

        <div className="flex-1 overflow-auto p-4 md:p-8">
          <div className="max-w-[1440px] mx-auto">
            {activeModule === 'dashboard' && <DashboardOverview />}
            {activeModule === 'home' && <HomeManager />}
            {activeModule === 'faq' && <FaqManager />}
            {activeModule === 'inquiries' && <InquiryManager />}
            {activeModule === 'destinations' && <DestinationManager />}
            {activeModule === 'envies' && <EnviesManager />}
            {activeModule === 'vision' && <VisionManager />}
            {activeModule === 'itineraries' && <ItineraryManager />}
            {activeModule === 'media' && <MediaManager />}
            {activeModule === 'users' && <UserManager />}
            {activeModule === 'settings' && <SettingManager />}
            {activeModule === 'footer' && <FooterManager />}
            {activeModule === 'abouts' && <AboutManager />}
            {activeModule === 'yoga' && <YogaManager />}
            {activeModule === 'pages' && <SeoManager />}
            {activeModule === 'page_content' && <GlobalContentManager />}
            {activeModule === 'menu' && <MenuManager />}
            {activeModule === 'meta' && <MetaManager />}
            {activeModule === 'logo' && <GenericContentManager type="logo" title="Logo Management" description="Upload and manage website header/footer logos." mediaLabel="Logo URL" />}
            {activeModule === 'banners' && <GenericContentManager type="banner" title="Banner / Hero Section Management" description="Manage hero banners, headings, buttons and banner images." mediaLabel="Banner Image URL" />}
            {activeModule === 'map_dest' && <MapDestManager />}
            {activeModule === 'esprit' && <GenericContentManager type="esprit" title="L'esprit Indeora" description="Gérer les 4 colonnes de la section Esprit Indeora." mediaLabel="URL de l'icône" />}
            {activeModule === 'home_content' && <GenericContentManager type="home_content" title="Home Page Content Management" description="Manage editable home page text blocks and media." />}
            {activeModule === 'gallery' && <GenericContentManager type="gallery" title="Gallery Management" description="Manage gallery images used across the website." mediaLabel="Gallery Image URL" />}
            {activeModule === 'videos' && <GenericContentManager type="video" title="Video Management" description="Manage videos, thumbnails and embed URLs." mediaLabel="Video Thumbnail URL" videoMode />}
            {activeModule === 'testimonials' && <GenericContentManager type="testimonial" title="Testimonial Management" description="Manage client reviews and testimonial content." mediaLabel="Client Image URL" />}
            {activeModule === 'blog_categories' && <BlogCategoryManager />}
            {activeModule === 'profile' && <ProfileManager />}

            {activeModule === 'blogs' && <BlogManager />}

          </div>
        </div>
      </main>

      {managingContentBlog && (
        <BlogContentManager blog={managingContentBlog} onClose={() => { setManagingContentBlog(null); fetchBlogs(); }} />
      )}
      <ConfirmModal isOpen={deleteModalOpen} title="Supprimer le blog" message="Êtes-vous sûr de vouloir supprimer cet article de blog ? Cette action est irréversible." onConfirm={handleConfirmDeleteBlog} onCancel={() => { setDeleteModalOpen(false); setBlogToDelete(null); }} />
    </div>
  );
};

export default AdminDashboard;
