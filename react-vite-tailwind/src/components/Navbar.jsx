import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { apiRequest } from '../lib/api';

const Navbar = ({ previewConfig, previewLogoPosition }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();
  const [siteLogo, setSiteLogo] = useState('');
  
  // Settings State
  const [logoPosition, setLogoPosition] = useState('center');
  const [navConfig, setNavConfig] = useState({
    version: 2,
    navPosition: 'absolute',
    maxWidthType: 'container',
    maxWidth: 'calc(100% - 80px)',
    marginTop: '24px',
    marginTopMobile: '8px',
    headerHeight: '96px',
    headerMobileHeight: '48px',
    paddingX: '40px',
    paddingXMobile: '16px',
    paddingY: '0px',
    paddingYMobile: '0px',
    menuGap: '48px',
    menuGapMobile: '20px',
    borderRadius: '20px',
    borderBottomShow: false,
    borderColor: 'rgba(243, 244, 246, 0.1)',
    shadow: true,
    zIndex: '9999',
    logoShow: true,
    logoUrl: '',
    logoAlt: 'Indeora',
    logoHeight: '64px',
    logoMobileHeight: '28px',
    logoWidth: 'auto',
    logoLinkUrl: '/',
    navBgColor: '#313c45',
    isTransparent: false,
    opacity: 100,
    navTextColor: '#C6A46D',
    navHoverColor: '#ffffff',
    activeMenuColor: '#ffffff',
    dropdownBgColor: '#ffffff',
    dropdownTextColor: '#333333',
    dropdownHoverBgColor: '#f3f4f6',
    mobileMenuBgColor: '#313c45',
    hamburgerColor: '#ffffff',
    closeIconColor: '#ffffff',
    fontSize: '11px',
    fontSizeMobile: '16px',
    fontWeight: '700',
    fontFamily: 'Inter, sans-serif',
    letterSpacing: '0.3em',
    lineHeight: 'normal',
    textTransform: 'uppercase',
    dropdownWidth: '220px',
    dropdownPadding: '10px 0px',
    dropdownRadius: '8px',
    dropdownShadow: true,
    dropdownGap: '0px',
    dropdownTop: '100%',
    dropdownAnimation: 'fade',
    mobileMenuType: 'slide-right',
    mobileMenuWidth: '80%',
    mobileMenuLinkColor: '#ffffff',
    mobileOverlay: true,
    hamburgerSize: '24px',
    ctaShow: false,
    ctaText: 'Réserver',
    ctaUrl: '/contact',
    ctaBgColor: '#C6A46D',
    ctaTextColor: '#ffffff',
    ctaHoverBgColor: '#a88b5a',
    ctaRadius: '8px',
    ctaPadding: '10px 20px',
    ctaFontSize: '12px',
    ctaNewTab: false,
    leftLinks: [
      { label: 'Accueil', url: '/', isExternal: false, isActive: true },
      { label: 'À propos', url: '/about', isExternal: false, isActive: true },
      { label: 'Destinations', url: '/destinations', isActive: true, dropdown: [] }
    ],
    rightLinks: [
      { label: 'Blog', url: '/blog', isExternal: false, isActive: true },
      { label: 'FAQ', url: '/faq', isExternal: false, isActive: true },
      { label: 'Contact', url: '/contact', isExternal: false, isActive: true }
    ]
  });

  useEffect(() => {
    apiRequest('/content?type=logo')
      .then((data) => {
        const activeLogo = data.data?.find((item) => item.status === 'active' && item.media_url);
        if (activeLogo?.media_url) setSiteLogo(activeLogo.media_url);
      })
      .catch(() => {});

    if (!previewConfig) {
      apiRequest('/settings')
        .then((data) => {
          if (data.success && data.data) {
            if (data.data.logoPosition) setLogoPosition(data.data.logoPosition);
            if (data.data.navbar_config) {
              try {
                const parsed = typeof data.data.navbar_config === 'string'
                  ? JSON.parse(data.data.navbar_config)
                  : data.data.navbar_config;
                if (parsed.version === 2) setNavConfig(prev => ({ ...prev, ...parsed }));
              } catch (e) {}
            }
          }
        })
        .catch(() => {});
    }
  }, [previewConfig]);

  useEffect(() => {
    if (previewConfig) {
      setNavConfig(prev => ({ ...prev, ...previewConfig }));
    }
    if (previewLogoPosition) {
      setLogoPosition(previewLogoPosition);
    }
  }, [previewConfig, previewLogoPosition]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    if (navConfig.navPosition === 'sticky' || navConfig.navPosition === 'fixed') {
      window.addEventListener('scroll', handleScroll);
    }
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navConfig.navPosition]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const isFullWidth = navConfig.maxWidthType === 'full';
  
  // Custom Styles Block
  const CustomStyles = () => (
    <style>
      {`
        .custom-nav-wrapper {
          position: ${previewConfig ? 'relative' : navConfig.navPosition === 'absolute' ? 'absolute' : navConfig.navPosition === 'sticky' ? 'sticky' : navConfig.navPosition === 'fixed' ? 'fixed' : 'relative'};
          top: ${(navConfig.navPosition === 'fixed' || navConfig.navPosition === 'sticky') ? '0' : (navConfig.navPosition === 'absolute' ? navConfig.marginTopMobile : 'auto')};
          left: 0;
          right: 0;
          z-index: ${navConfig.zIndex};
          display: flex;
          justify-content: center;
        }
        @media (min-width: 768px) {
          .custom-nav-wrapper {
             top: ${(navConfig.navPosition === 'fixed' || navConfig.navPosition === 'sticky') ? '0' : (navConfig.navPosition === 'absolute' ? navConfig.marginTop : 'auto')};
          }
        }
        
        .custom-nav-container {
          background-color: ${navConfig.isTransparent && !isScrolled && !previewConfig ? 'transparent' : navConfig.navBgColor};
          opacity: ${navConfig.isTransparent && !isScrolled && !previewConfig ? 1 : (navConfig.opacity / 100)};
          border-radius: ${isFullWidth ? '0px' : navConfig.borderRadius};
          max-width: ${isFullWidth ? '100%' : navConfig.maxWidth};
          width: 100%;
          border-bottom: ${navConfig.borderBottomShow ? `1px solid ${navConfig.borderColor}` : 'none'};
          box-shadow: ${navConfig.shadow ? '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)' : 'none'};
          padding: ${navConfig.paddingYMobile} ${navConfig.paddingXMobile};
          transition: all 0.3s ease;
        }

        @media (min-width: 768px) {
          .custom-nav-container {
            padding: ${navConfig.paddingY} ${navConfig.paddingX};
          }
        }

        .custom-nav-links {
          font-family: ${navConfig.fontFamily};
          font-size: ${navConfig.fontSize};
          font-weight: ${navConfig.fontWeight};
          letter-spacing: ${navConfig.letterSpacing};
          line-height: ${navConfig.lineHeight};
          text-transform: ${navConfig.textTransform};
          color: ${navConfig.navTextColor};
          gap: ${navConfig.menuGap};
        }

        .custom-nav-links a, .custom-nav-links button {
          color: ${navConfig.navTextColor};
          transition: color 0.3s;
        }
        
        .custom-nav-links a:hover, .custom-nav-links button:hover {
          color: ${navConfig.navHoverColor};
        }

        .custom-nav-links a.active {
          color: ${navConfig.activeMenuColor};
        }

        .custom-logo {
          height: ${navConfig.logoMobileHeight};
          width: ${navConfig.logoWidth};
          transition: all 0.3s ease;
        }

        @media (min-width: 768px) {
          .custom-logo {
            height: ${navConfig.logoHeight};
          }
        }

        .custom-dropdown {
          background-color: ${navConfig.dropdownBgColor};
          color: ${navConfig.dropdownTextColor};
          width: ${navConfig.dropdownWidth};
          border-radius: ${navConfig.dropdownRadius};
          padding: ${navConfig.dropdownPadding};
          box-shadow: ${navConfig.dropdownShadow ? '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' : 'none'};
          top: ${navConfig.dropdownTop};
          margin-top: ${navConfig.dropdownGap};
        }

        .custom-dropdown a {
          color: ${navConfig.dropdownTextColor} !important;
          font-size: ${navConfig.fontSize};
          font-weight: ${navConfig.fontWeight};
          letter-spacing: ${navConfig.letterSpacing};
          text-transform: ${navConfig.textTransform};
          transition: background-color 0.2s, color 0.2s;
        }

        .custom-dropdown a:hover {
          background-color: ${navConfig.dropdownHoverBgColor};
        }

        .custom-mobile-menu {
          background-color: ${navConfig.mobileMenuBgColor};
          width: ${navConfig.mobileMenuType === 'full' ? '100%' : navConfig.mobileMenuWidth};
        }

        .custom-mobile-links a, .custom-mobile-links button {
          font-family: ${navConfig.fontFamily};
          font-size: ${navConfig.fontSizeMobile};
          font-weight: ${navConfig.fontWeight};
          letter-spacing: ${navConfig.letterSpacing};
          text-transform: ${navConfig.textTransform};
          color: ${navConfig.mobileMenuLinkColor};
        }

        .custom-cta {
          background-color: ${navConfig.ctaBgColor};
          color: ${navConfig.ctaTextColor};
          border-radius: ${navConfig.ctaRadius};
          padding: ${navConfig.ctaPadding};
          font-size: ${navConfig.ctaFontSize};
          font-weight: ${navConfig.fontWeight};
          text-transform: ${navConfig.textTransform};
          letter-spacing: ${navConfig.letterSpacing};
          transition: all 0.3s;
        }

        .custom-cta:hover {
          background-color: ${navConfig.ctaHoverBgColor};
        }
      `}
    </style>
  );

  const getPositionClass = () => {
    if (previewConfig) return 'relative w-full';
    if (navConfig.navPosition === 'sticky') return 'sticky';
    if (navConfig.navPosition === 'absolute') return 'absolute';
    if (navConfig.navPosition === 'normal') return 'relative';
    return 'fixed';
  };

  const renderDropdown = (items, parentIndex, group) => {
    if (!items || items.length === 0) return null;
    const isActive = activeDropdown === `${group}-${parentIndex}`;
    
    // Animation classes based on config
    let animClass = 'opacity-0 translate-y-2 pointer-events-none';
    if (isActive) {
      if (navConfig.dropdownAnimation === 'fade') animClass = 'opacity-100 transition-opacity duration-300';
      else if (navConfig.dropdownAnimation === 'slidedown') animClass = 'opacity-100 translate-y-0 transition-all duration-300';
      else animClass = 'opacity-100'; // none
    }

    return (
      <div className={`absolute left-1/2 -translate-x-1/2 custom-dropdown ${animClass}`}>
        <div className="flex flex-col">
          {items.map((item, idx) => {
            if (item.isActive === false) return null;
            return item.isExternal ? (
              <a key={idx} href={item.url} target="_blank" rel="noopener noreferrer" className="block px-6 py-3 whitespace-nowrap">
                {item.label}
              </a>
            ) : (
              <Link key={idx} to={item.url} className="block px-6 py-3 whitespace-nowrap">
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>
    );
  };

  const renderNavLinks = (links, group) => {
    return links.map((link, index) => {
      if (link.isActive === false) return null;
      const hasDropdown = link.dropdown && link.dropdown.length > 0;
      const isCurrentPage = location.pathname === link.url;
      
      const content = (
        <>
          {link.label}
          {hasDropdown && <ChevronDown size={14} className={`transition-transform ${activeDropdown === `${group}-${index}` ? 'rotate-180' : ''}`} />}
        </>
      );

      return (
        <div 
          key={index} 
          className="relative group"
          onMouseEnter={() => hasDropdown && setActiveDropdown(`${group}-${index}`)}
          onMouseLeave={() => hasDropdown && setActiveDropdown(null)}
        >
          {link.isExternal ? (
            <a href={link.url} target="_blank" rel="noopener noreferrer" className={`flex items-center gap-1 py-4 ${isCurrentPage ? 'active' : ''}`}>
              {content}
            </a>
          ) : (
            hasDropdown ? (
              <button className={`flex items-center gap-1 py-4 ${isCurrentPage ? 'active' : ''}`}>
                {content}
              </button>
            ) : (
              <Link to={link.url} className={`flex items-center gap-1 py-4 ${isCurrentPage ? 'active' : ''}`}>
                {content}
              </Link>
            )
          )}
          {hasDropdown && renderDropdown(link.dropdown, index, group)}
        </div>
      );
    });
  };

  const currentLogo = navConfig.logoUrl || siteLogo || '/img/logo.png';

  const logoElement = navConfig.logoShow ? (
    <Link to={navConfig.logoLinkUrl} className="flex-shrink-0 z-10 relative">
      <img src={currentLogo} alt={navConfig.logoAlt} className="custom-logo object-contain" />
    </Link>
  ) : null;

  return (
    <>
      <CustomStyles />
      {/* Spacer to prevent overlap when navbar is fixed */}
      {!previewConfig && navConfig.navPosition === 'fixed' && (
        <>
          <div className="w-full hidden md:block" style={{ height: navConfig.headerHeight }}></div>
          <div className="w-full md:hidden" style={{ height: navConfig.headerMobileHeight }}></div>
        </>
      )}

      <nav className={`custom-nav-wrapper ${getPositionClass()}`}>
        <div className="mx-auto custom-nav-container flex items-center justify-between relative" style={{ height: 'var(--header-current-h)' }}>
          <style>
            {`
              .custom-nav-container { height: ${navConfig.headerMobileHeight} !important; }
              @media (min-width: 768px) {
                .custom-nav-container { height: ${navConfig.headerHeight} !important; }
              }
            `}
          </style>

          {/* Mobile Hamburger */}
          <div className="md:hidden z-20 flex items-center gap-4">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
              className="focus:outline-none"
              style={{ color: navConfig.hamburgerColor }}
            >
              <Menu style={{ width: navConfig.hamburgerSize, height: navConfig.hamburgerSize }} />
            </button>
          </div>

          {/* Desktop Left Links */}
          <div className={`hidden md:flex items-center flex-1 custom-nav-links ${logoPosition === 'center' ? 'justify-end' : logoPosition === 'right' ? 'justify-start' : 'justify-start opacity-0 pointer-events-none'}`}>
            {logoPosition !== 'left' && renderNavLinks(navConfig.leftLinks, 'left')}
          </div>

          {/* Left Logo Case */}
          {logoPosition === 'left' && <div className="hidden md:flex flex-1 justify-start">{logoElement}</div>}

          {/* Center Logo Case */}
          {logoPosition === 'center' && (
            <div className="hidden md:flex shrink-0 px-8 z-20 items-center justify-center">
              {logoElement}
            </div>
          )}

          {/* Mobile Center Logo */}
          <div className="md:hidden absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
             {logoElement}
          </div>

          {/* Right Logo Case */}
          {logoPosition === 'right' && <div className="hidden md:flex flex-1 justify-end">{logoElement}</div>}

          {/* Desktop Right Links */}
          <div className={`hidden md:flex items-center flex-1 custom-nav-links ${logoPosition === 'center' ? 'justify-start' : logoPosition === 'left' ? 'justify-end' : 'justify-end opacity-0 pointer-events-none'}`}>
            {logoPosition !== 'right' && (
              <>
                {renderNavLinks(navConfig.rightLinks, 'right')}
                {navConfig.ctaShow && (
                  <div className="ml-4">
                    {navConfig.ctaNewTab ? (
                      <a href={navConfig.ctaUrl} target="_blank" rel="noopener noreferrer" className="custom-cta">{navConfig.ctaText}</a>
                    ) : (
                      <Link to={navConfig.ctaUrl} className="custom-cta">{navConfig.ctaText}</Link>
                    )}
                  </div>
                )}
              </>
            )}
          </div>

          {/* Left Logo Links */}
          {logoPosition === 'left' && (
            <div className="hidden md:flex flex-1 justify-end custom-nav-links">
              {renderNavLinks([...navConfig.leftLinks, ...navConfig.rightLinks], 'all')}
               {navConfig.ctaShow && (
                  <div className="ml-4">
                    {navConfig.ctaNewTab ? (
                      <a href={navConfig.ctaUrl} target="_blank" rel="noopener noreferrer" className="custom-cta">{navConfig.ctaText}</a>
                    ) : (
                      <Link to={navConfig.ctaUrl} className="custom-cta">{navConfig.ctaText}</Link>
                    )}
                  </div>
                )}
            </div>
          )}
          
          {/* Right Logo Links */}
          {logoPosition === 'right' && (
             <div className="hidden md:flex flex-1 justify-start custom-nav-links">
             {renderNavLinks([...navConfig.leftLinks, ...navConfig.rightLinks], 'all')}
              {navConfig.ctaShow && (
                 <div className="ml-4">
                   {navConfig.ctaNewTab ? (
                     <a href={navConfig.ctaUrl} target="_blank" rel="noopener noreferrer" className="custom-cta">{navConfig.ctaText}</a>
                   ) : (
                     <Link to={navConfig.ctaUrl} className="custom-cta">{navConfig.ctaText}</Link>
                   )}
                 </div>
               )}
           </div>
          )}
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {navConfig.mobileOverlay && (
        <div 
          className={`fixed inset-0 bg-black/60 z-[10000] transition-opacity duration-300 md:hidden ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu Panel */}
      <div 
        className={`fixed top-0 bottom-0 z-[10001] custom-mobile-menu transition-transform duration-300 ease-in-out flex flex-col md:hidden ${
          navConfig.mobileMenuType === 'slide-left' 
            ? 'left-0 ' + (isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full')
            : navConfig.mobileMenuType === 'slide-right'
              ? 'right-0 ' + (isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full')
              : navConfig.mobileMenuType === 'dropdown'
                ? 'top-[var(--header-current-h)] left-0 right-0 h-auto ' + (isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none')
                : 'inset-0 ' + (isMobileMenuOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none') // Full screen
        }`}
      >
        <div className="p-4 flex justify-end">
          <button onClick={() => setIsMobileMenuOpen(false)} className="p-2" style={{ color: navConfig.closeIconColor }}>
            <X size={24} />
          </button>
        </div>
        
        <div className="flex-1 overflow-y-auto py-4 px-6 custom-mobile-links flex flex-col" style={{ gap: navConfig.menuGapMobile }}>
          {[...navConfig.leftLinks, ...navConfig.rightLinks].map((link, idx) => {
            if (link.isActive === false) return null;
            const hasDropdown = link.dropdown && link.dropdown.length > 0;
            return (
              <div key={idx} className="flex flex-col">
                <div className="flex justify-between items-center w-full">
                  {link.isExternal ? (
                    <a href={link.url} target="_blank" rel="noopener noreferrer" className="py-2 inline-block flex-1">{link.label}</a>
                  ) : (
                    <Link to={link.url} onClick={() => !hasDropdown && setIsMobileMenuOpen(false)} className="py-2 inline-block flex-1">{link.label}</Link>
                  )}
                  {hasDropdown && (
                    <button onClick={() => setActiveDropdown(activeDropdown === `mobile-${idx}` ? null : `mobile-${idx}`)} className="p-2">
                      <ChevronDown size={18} className={`transition-transform ${activeDropdown === `mobile-${idx}` ? 'rotate-180' : ''}`} />
                    </button>
                  )}
                </div>
                
                {hasDropdown && activeDropdown === `mobile-${idx}` && (
                  <div className="pl-4 mt-2 flex flex-col border-l-2 border-slate-700/20" style={{ gap: '12px' }}>
                    {link.dropdown.map((sub, sIdx) => {
                      if (sub.isActive === false) return null;
                      return sub.isExternal ? (
                         <a key={sIdx} href={sub.url} target="_blank" rel="noopener noreferrer" className="py-1 opacity-80">{sub.label}</a>
                      ) : (
                         <Link key={sIdx} to={sub.url} onClick={() => setIsMobileMenuOpen(false)} className="py-1 opacity-80">{sub.label}</Link>
                      )
                    })}
                  </div>
                )}
              </div>
            );
          })}
          
          {navConfig.ctaShow && (
             <div className="mt-8">
               {navConfig.ctaNewTab ? (
                 <a href={navConfig.ctaUrl} target="_blank" rel="noopener noreferrer" className="custom-cta block text-center w-full">{navConfig.ctaText}</a>
               ) : (
                 <Link to={navConfig.ctaUrl} onClick={() => setIsMobileMenuOpen(false)} className="custom-cta block text-center w-full">{navConfig.ctaText}</Link>
               )}
             </div>
           )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
