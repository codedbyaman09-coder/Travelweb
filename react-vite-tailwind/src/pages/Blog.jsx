import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import EspritIndeora from '../components/EspritIndeora';

const DEFAULT_CONFIG = {
  layout: { pageWidth: '100%', containerWidth: '1440px', sectionWidth: '100%', sectionHeight: 'auto', minHeight: '100vh', maxWidth: '100%', bgColor: '#FAF9F6', bgImage: '', border: 'none', borderRadius: '0px', boxShadow: 'none', overflow: 'hidden', responsiveWidth: '100%' },
  spacing: { marginTop: '0px', marginBottom: '0px', marginLeft: 'auto', marginRight: 'auto', paddingTop: '64px', paddingBottom: '64px', paddingLeft: '16px', paddingRight: '16px', gapCards: '32px', gapSections: '48px', mobile: { pt: '32px', pb: '32px', px: '16px' }, tablet: { pt: '48px', pb: '48px', px: '32px' }, desktop: { pt: '64px', pb: '64px', px: '40px' } },
  alignment: { sectionAlign: 'center', textAlign: 'center', gridAlign: 'center', categoryAlign: 'center', cardContentAlign: 'left', flexDirection: 'row', gridColumns: '3' },
  typography: { headingColor: '#1a1a1a', headingSize: '54px', headingWeight: 'bold', headingLineHeight: '1.2', headingLetterSpacing: '0', paragraphColor: '#6b7280', paragraphSize: '16px', titleSize: '24px', titleWeight: 'bold', titleColor: '#1a1a1a', descSize: '14px', descColor: '#6b7280', categorySize: '12px', categoryColor: '#A88B52', dateSize: '12px', dateColor: '#999999', authorSize: '12px', authorColor: '#999999' },
  content: { pageTitle: 'Notre Blog', subtitle: 'ACTUALITÉS & INSPIRATIONS', description: 'Découvrez nos derniers articles, conseils de voyage et inspirations pour votre prochaine aventure en Inde.', heroHeading: 'Le Journal de Voyage', heroDescription: 'Plongez au cœur de l\'Inde avec nos récits et conseils.', blogHeading: 'Derniers Articles', blogDescription: '', emptyBlogMessage: 'Aucun article trouvé', searchPlaceholder: 'Rechercher un article...', categoryTitle: 'Catégories', readMoreBtn: 'Lire la suite', heroBg: 'https://images.unsplash.com/photo-1548013146-72479768bbfd?q=80&w=1200' },
  cardDesign: { bgColor: '#ffffff', padding: '0px', margin: '0px', borderColor: '#e5e7eb', borderRadius: '12px', shadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)', hoverEffect: 'shadow-xl -translate-y-1', imageWidth: '100%', imageHeight: '240px', objectFit: 'cover', imageRadius: '12px 12px 0 0', contentPadding: '24px', btnBg: 'transparent', btnHover: '#f3f4f6', btnColor: '#A88B52', btnRadius: '4px' },
  searchCategory: { showSearch: 'true', searchWidth: '100%', searchHeight: '48px', searchPadding: '0 16px', searchBorder: '#e5e7eb', searchRadius: '8px', searchBg: '#ffffff', showCategory: 'true', catBtnBg: '#ffffff', catBtnActive: '#A88B52', catBtnHover: '#f3f4f6', catBtnRadius: '999px' },
  seo: { metaTitle: 'Blog Voyage Inde | Indeora Voyages', metaDescription: 'Découvrez nos conseils, itinéraires et récits de voyage en Inde.', metaKeywords: 'blog inde, voyage inde, conseils voyage inde' },
  classes: { pageWrapper: '', container: 'max-w-[1440px] mx-auto px-[40px]', hero: 'relative h-[85vh] w-full overflow-hidden flex items-center justify-center', heading: 'text-white text-center', subtitle: 'text-white text-center', blogGrid: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8', blogCard: 'bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300', blogImage: 'w-full object-cover', blogContent: 'p-6', blogTitle: 'text-xl font-bold mb-3', blogDescription: 'text-gray-600 mb-4', blogButton: 'inline-flex items-center text-sm font-bold uppercase tracking-wider transition-colors', searchWrapper: 'w-full max-w-md relative', searchInput: 'w-full outline-none', categoryWrapper: 'flex flex-wrap gap-2 mb-8', categoryButton: 'px-4 py-2 text-sm font-medium transition-colors cursor-pointer border border-slate-200 shadow-sm' },
  responsive: { mobileLayout: 'col', tabletLayout: 'col', desktopLayout: 'row', mobilePadding: '16px', tabletPadding: '32px', desktopPadding: '40px', mobileFontSize: '14px', tabletFontSize: '16px', desktopFontSize: '16px', gridColsMobile: '1', gridColsTablet: '2', gridColsDesktop: '3', cardWidthMobile: '100%', cardWidthTablet: '100%', cardWidthDesktop: '100%', imageHeightMobile: '200px', imageHeightTablet: '240px', imageHeightDesktop: '240px' },
  theme: { primaryColor: '#A88B52', overlayOpacity: '0.40' }
};

const defaultStaticPosts = [
  { id: 1, title: "RAJASTHAN : L’INDE DES PALAIS ET DES MAHARAJAS", slug: "rajasthan-royale", category: "Patrimoine & Culture", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2WaN4uFLmSnMZh46fxzWRdxJJ8iKUVZn9kw&s", description: "Découvrez les majestueux forts et palais du royaume du désert de l'Inde.", link: "/blog/rajasthan-royale" },
  { id: 2, title: "VOYAGE EN INDE : LE GUIDE COMPLET POUR UN PREMIER VOYAGE", slug: "kerala-backwaters", category: "Nature & Bien-être", image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&q=80&w=800", description: "Laissez-vous dériver sur les canaux sereins du Kerala à bord d'un houseboat de luxe.", link: "/blog/kerala-backwaters" },
  { id: 3, title: "POURQUOI L’INDE CHANGE PROFONDÉMENT CEUX QUI LA DÉCOUVRENT", slug: "spiritual-varanasi", category: "Spiritualité", image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&q=80&w=800", description: "Assistez aux rituels éternels sur les rives du Gange sacré à Varanasi.", link: "/blog/spiritual-varanasi" },
  { id: 4, title: "Ladakh Heights", category: "Aventure", image: "https://images.unsplash.com/photo-1581791534721-e599df4417f7?auto=format&fit=crop&q=80&w=800", description: "Voyagez à travers les déserts de haute altitude et les cols montagneux spectaculaires." },
  { id: 5, title: "Goan Serenity", category: "Plage & Détente", image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&q=80&w=800", description: "Détendez-vous sur des plages de sable blanc immaculé et admirez l'architecture coloniale." },
  { id: 6, title: "Hampi Echoes", category: "Ruines Antiques", image: "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&q=80&w=800", description: "Explorez les paysages parsemés de rochers de l'ancien empire de Vijayanagara." }
];

const Blog = () => {
  const [config, setConfig] = useState(DEFAULT_CONFIG);
  const [visiblePosts, setVisiblePosts] = useState(6);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [dbBlogs, setDbBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [configRes, faqsRes] = await Promise.all([
          fetch('http://127.0.0.1:8000/api/blog-page').then(res => res.json()),
          fetch('http://127.0.0.1:8000/api/blogs').then(res => res.json())
        ]);

        if (configRes.success && configRes.data && configRes.data.length > 0) {
          const apiConfig = configRes.data[0].config;
          const mergedConfig = { ...DEFAULT_CONFIG };
          for (let key in DEFAULT_CONFIG) {
            if (apiConfig[key]) {
              mergedConfig[key] = { ...DEFAULT_CONFIG[key], ...apiConfig[key] };
            }
          }
          setConfig(mergedConfig);
          if (mergedConfig.seo) {
            document.title = mergedConfig.seo.metaTitle || 'Blog';
          }
        }

        if (faqsRes.success && faqsRes.blogs) {
          setDbBlogs(faqsRes.blogs);
        }
      } catch (err) {
        console.error("Error loading blog data:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleLoadMore = () => {
    setIsLoadingMore(true);
    setTimeout(() => {
      setVisiblePosts(prev => prev + 3);
      setIsLoadingMore(false);
    }, 1000);
  };

  const { layout, spacing, alignment, typography, content, cardDesign, searchCategory, classes, theme } = config;

  // Process posts
  const dynamicPosts = dbBlogs.map((b) => ({
    id: `db-${b.id}`,
    title: b.title.toUpperCase(),
    category: b.category,
    image: b.image_url,
    description: b.excerpt,
    link: `/blog/${b.slug}`
  }));

  const fallbackPosts = defaultStaticPosts.filter(sp => !dbBlogs.some(dbb => dbb.slug === sp.slug));
  const posts = [...dynamicPosts, ...fallbackPosts];

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Chargement...</div>;
  }

  return (
    <div className={`min-h-screen ${classes.pageWrapper}`} style={{ backgroundColor: layout.bgColor, backgroundImage: `url(${layout.bgImage})` }}>
      <Navbar />

      {/* Dynamic Style Injection */}
      <style dangerouslySetInnerHTML={{__html: `
        :root { --blog-primary: ${theme.primaryColor}; }
        .blog-hero-bg { background-image: url('${content.heroBg}'); }
      `}} />

      {/* Hero Section */}
      <div className={`${classes.hero} blog-hero-bg bg-cover bg-[75%_center] relative`}>
        <div className="absolute inset-0" style={{ backgroundColor: `rgba(0,0,0,${theme.overlayOpacity || '0.40'})` }}></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50"></div>

        <div className="relative z-10 text-center px-6 md:px-12 max-w-4xl pt-20 md:pt-32">
          <div className="md:translate-x-72 lg:translate-x-[33rem] translate-y-32 md:translate-y-[15rem] animate-fadeInUp text-center max-w-2xl mx-auto">
            <h1 className="text-white text-[12px] md:text-[14px] lg:text-[16px] tracking-[0.25em] md:tracking-[0.3em] uppercase font-medium leading-relaxed mb-5 max-w-md mx-auto" dangerouslySetInnerHTML={{ __html: content.heroHeading }} />
            <p className="text-white/80 text-[10px] md:text-[12px] tracking-[0.18em] md:tracking-[0.22em] uppercase font-light leading-relaxed max-w-lg mx-auto" dangerouslySetInnerHTML={{ __html: content.heroDescription }} />
          </div>
        </div>
      </div>

      <div className={`py-16 md:py-24 w-full ${classes.container}`}>
        {/* Header */}
        <div className="text-center mb-16 md:mb-24 animate-fadeIn" style={{ textAlign: alignment.sectionAlign }}>
          <h2 className="text-[12px] md:text-[16px] lg:text-[20px] font-bold tracking-[0.25em] md:tracking-[0.35em] uppercase mb-4" style={{ color: theme.primaryColor }}>
            {content.pageTitle}
          </h2>
          <p className="max-w-2xl mx-auto text-sm" style={{ color: typography.paragraphColor }}>{content.description}</p>
          <div className="w-24 h-[1px] mx-auto mt-6 md:mt-8 opacity-30" style={{ backgroundColor: theme.primaryColor, margin: alignment.sectionAlign === 'center' ? 'auto mt-6' : 'mt-6' }}></div>
        </div>

        {/* Grid */}
        <div className={classes.blogGrid || `grid grid-cols-1 md:grid-cols-${alignment.gridColumns} lg:grid-cols-${alignment.gridColumns} gap-x-12 gap-y-20`} style={{ gap: spacing.gapCards }}>
          {posts.slice(0, visiblePosts).map((post, index) => {
            const CardComponent = post.link ? Link : 'div';
            const extraProps = post.link ? { to: post.link } : {};
            return (
              <CardComponent
                key={post.id}
                className={`group cursor-pointer animate-fadeInUp block ${classes.blogCard}`}
                style={{ animationDelay: `${index * 100}ms`, backgroundColor: cardDesign.bgColor, borderRadius: cardDesign.borderRadius, boxShadow: cardDesign.shadow, padding: cardDesign.padding, margin: cardDesign.margin, borderColor: cardDesign.borderColor }}
                {...extraProps}
              >
                <div className="relative overflow-hidden aspect-[3/4] mb-6 shadow-sm rounded-t-sm" style={{ borderRadius: cardDesign.imageRadius }}>
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    style={{ width: cardDesign.imageWidth, height: cardDesign.imageHeight, objectFit: cardDesign.objectFit }}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"></div>

                  {post.link ? (
                    <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-gradient-to-t from-black/60 to-transparent">
                      <button className="text-white text-[10px] font-bold tracking-[0.2em] uppercase border-b border-white/50 pb-1">
                        {content.readMoreBtn}
                      </button>
                    </div>
                  ) : (
                    <>
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/45 transition-colors duration-500 flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                          <svg className="animate-spin h-10 w-10 text-white/90" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3"></circle><path className="opacity-75" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" d="M12 2a10 10 0 0110 10"></path></svg>
                        </div>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none"></div>
                      <div className="absolute bottom-12 md:bottom-20 left-8 z-10">
                        <span className="text-white text-[16px] md:text-[22px] font-bold tracking-[0.25em] uppercase border-b-[3px] border-white/70 pb-2">
                          PROCHAINEMENT
                        </span>
                      </div>
                    </>
                  )}
                </div>

                <div className={classes.blogContent || "text-center px-4"} style={{ padding: cardDesign.contentPadding, textAlign: alignment.cardContentAlign }}>
                  <span className="text-[10px] font-bold tracking-[0.3em] uppercase mb-3 block" style={{ color: typography.categoryColor, fontSize: typography.categorySize }}>
                    {post.category}
                  </span>
                  <h3 className={`font-serif mb-4 group-hover:text-[var(--blog-primary)] transition-colors duration-300 tracking-wide leading-snug ${classes.blogTitle}`} style={{ color: typography.titleColor, fontSize: typography.titleSize, fontWeight: typography.titleWeight }}>
                    {post.title}
                  </h3>
                  {post.description && (
                    <p className={`line-clamp-2 italic opacity-80 ${classes.blogDescription}`} style={{ color: typography.descColor, fontSize: typography.descSize }}>
                      {post.description}
                    </p>
                  )}

                  <div className={`mt-8 flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${alignment.cardContentAlign === 'center' ? 'justify-center' : 'justify-start'}`}>
                    <div className="h-[1px] w-8 bg-[#A88B52]/30" style={{ backgroundColor: theme.primaryColor, opacity: 0.3 }}></div>
                    <span className="text-[13px] md:text-[15px] font-bold uppercase tracking-[0.3em]" style={{ color: cardDesign.btnColor }}>
                      {post.link ? content.readMoreBtn : "PROCHAINEMENT"}
                    </span>
                    <div className="h-[1px] w-8 bg-[#A88B52]/30" style={{ backgroundColor: theme.primaryColor, opacity: 0.3 }}></div>
                  </div>
                </div>
              </CardComponent>
            );
          })}
        </div>

        {visiblePosts < posts.length && (
          <div className="mt-32 text-center">
            <button
              onClick={handleLoadMore}
              disabled={isLoadingMore}
              className="px-14 py-6 border text-[11px] font-bold tracking-[0.4em] uppercase transition-all duration-500 rounded-full inline-flex items-center justify-center min-w-[280px]"
              style={{ borderColor: theme.primaryColor, color: theme.primaryColor, '--tw-hover-bg': theme.primaryColor }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = theme.primaryColor; e.currentTarget.style.color = '#fff'; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = theme.primaryColor; }}
            >
              {isLoadingMore ? (
                <span className="flex items-center justify-center gap-3">
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3"></circle><path className="opacity-75" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" d="M12 2a10 10 0 0110 10"></path></svg>
                  <span className="ml-1">Chargement...</span>
                </span>
              ) : (
                "Charger plus d'articles"
              )}
            </button>
          </div>
        )}
      </div>
      
      <EspritIndeora />
      <Footer />
    </div>
  );
};

export default Blog;
