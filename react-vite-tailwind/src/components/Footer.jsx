import { Link } from 'react-router-dom';
import footerLogo from '../assets/png .png';

const Footer = () => {
  return (
    <>
      {/* SEO Links Section (Appears on all pages above footer) */}
      <section className="bg-white py-4 px-2 md:px-4 border-t border-b border-[#2d343e]/10">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-[8px] md:text-[9px] font-semibold text-[#1f2937] leading-[2] md:leading-[2.2]">
            {[
              "Inde hors des sentiers battus", "découvrir l’Inde autrement", "rencontres locales en Inde", "voyage Kerala sur mesure", "circuit Inde du Sud", "séjour yoga en inde", "visiter le Taj Mahal", "Rajasthan avec chauffeur privé", "circuit Rajasthan et Taj Mahal", "agence voyage Inde sur mesure", "itinéraire Inde", "voyage organisé Inde", "guide francophone Inde", "voyage Inde avis", "première fois en Inde", "quand partir en Inde"
            ].map((keyword, index, array) => (
              <span key={index} className="inline-block">
                <a href="#" className="hover:text-[#A88B52] transition-colors whitespace-nowrap">
                  {keyword}
                </a>
                {index < array.length - 1 && (
                  <span className="mx-2 md:mx-3 text-[#1f2937]/30 font-light">|</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-[#313c45] pt-20 pb-10 px-6 border-t border-gray-100 font-sans">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
            {/* Column 1: Logo & Socials */}
            <div className="space-y-8 flex flex-col items-center md:items-start text-center md:text-left">
              <div className="flex flex-col">
                <Link to="/" className="flex items-center shrink-0">
                  <img src={footerLogo} alt="Indeora Voyages Logo" className="h-14 md:h-20 w-auto mx-auto md:mx-0" />
                </Link>
              </div>
              <p className="text-[#C5A46D]/80 text-[13px] leading-relaxed max-w-[280px]">
                Voyage autrement en Inde avec Indeora Voyages. <br />
                Des expériences uniques et sur mesure, <br />
                conçues pour vous.
              </p>
              <div className="flex gap-4">
                {[
                  { icon: 'fab fa-facebook-f', link: '#' },
                  { icon: 'fab fa-instagram', link: '#' },
                  { icon: 'fab fa-whatsapp', link: '#' },
                  { icon: 'fab fa-youtube', link: '#' }
                ].map((social, i) => (
                  <a key={i} href={social.link} className="w-8 h-8 rounded-full border border-[#C5A46D]/20 flex items-center justify-center text-[#A88B52]/60 hover:text-[#A88B52] hover:border-[#A88B52] transition-all">
                    <i className={social.icon + " text-[10px]"}></i>
                  </a>
                ))}
              </div>
            </div>

            {/* Column 2: Liens Rapides */}
            <div className="text-center md:text-left">
              <h3 className="text-[11px] font-bold tracking-[0.2em] text-[#C5A46D] uppercase mb-8 md:mb-10">LIENS RAPIDES</h3>
              <ul className="space-y-4 md:space-y-5 text-[#C5A46D]/70 text-[13px]">
                <li><Link to="/destinations" className="hover:text-black transition-colors text-[#C5A46D]">Destinations</Link></li>
                <li><Link to="/experiences" className="hover:text-black transition-colors text-[#C5A46D]">Expériences</Link></li>
                <li><Link to="/avant-de-partir" className="hover:text-black transition-colors text-[#C5A46D]">Avant de partir</Link></li>
                <li><Link to="/about" className="hover:text-black transition-colors text-[#C5A46D]">À propos</Link></li>
                <li><Link to="/contact" className="hover:text-black transition-colors">Contact</Link></li>
              </ul>
            </div>

            {/* Column 3: Informations */}
            <div className="text-center md:text-left">
              <h3 className="text-[11px] font-bold tracking-[0.2em] text-[#C5A46D] uppercase mb-8 md:mb-10">INFORMATIONS</h3>
              <ul className="space-y-4 md:space-y-5 text-[#C5A46D]/70 text-[13px]">
                <li className="flex items-center justify-center md:justify-start gap-3 hover:text-black transition-colors cursor-pointer group">
                  <svg className="w-4 h-4 text-[#C5A46D] group-hover:text-black transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  <span className='text-[#C5A46D]'>Bikaner, Rajasthan, Inde</span>
                </li>
                <li className="flex items-center justify-center md:justify-start gap-3 hover:text-black transition-colors cursor-pointer group">
                  <svg className="w-4 h-4 text-[#A88B52] group-hover:text-black transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1.01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  <span className='text-[#C5A46D]'>+91 70 230 16044</span>
                </li>
                <li className="flex items-center justify-center md:justify-start gap-3 hover:text-black transition-colors cursor-pointer group">
                  <svg className="w-4 h-4 text-[#A88B52] group-hover:text-black transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  <span className='text-[#C5A46D]'>contact@indeoravoyages.com</span>
                </li>
                <li className="flex items-center justify-center md:justify-start gap-3 hover:text-black transition-colors cursor-pointer group">
                  <i className="fab fa-whatsapp text-[#A88B52] group-hover:text-black text-base transition-colors"></i>
                  <span className='text-[#C5A46D]'>WhatsApp</span>
                </li>
              </ul>
            </div>

            {/* Column 4: Newsletter */}
            <div className="text-center md:text-left">
              <h3 className="text-[11px] font-bold tracking-[0.2em] text-[#C5A46D] uppercase mb-8 md:mb-10">NEWSLETTER</h3>
              <p className="text-[#C5A46D]/70 text-[13px] mb-8 leading-relaxed mx-auto md:mx-0">
                Recevez nos inspirations de voyage <br />et nos offres exclusives.
              </p>
              <div className="relative border border-[#C6A46D]/20 p-4 flex items-center justify-between group hover:border-black transition-all max-w-[320px] mx-auto md:mx-0">
                <input
                  type="email"
                  placeholder="Votre email"
                  className="bg-transparent text-[13px] text-[#A88B52] placeholder:text-[#A88B52]/40 focus:outline-none w-full text-center md:text-left"
                />
                <button className="text-[#A88B52]/60 group-hover:text-black transition-colors shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Footer Bar */}
          <div className="pt-8 border-t border-[#A88B52]/10 flex flex-col md:flex-row justify-between items-center text-[11px] md:text-[12px] text-[#A88B52]/50 font-light gap-4 text-center">
            <p className='text-[#C6A46D]'>© 2024 Indeora Voyages. Tous droits réservés.</p>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-black transition-colors text-[#C6A46D]">Mentions légales</a>
              <span className="opacity-20">|</span>
              <a href="#" className="hover:text-black transition-colors text-[#C6A46D]">Politique de confidentialité</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Fixed Bottom Contact Bar */}
      <div className="fixed bottom-0 left-0 w-full bg-[#5B6D75] py-2 px-6 border-t border-white/5 z-[9998] shadow-[0_-4px_20px_rgba(0,0,0,0.2)]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-1.5 md:gap-2 text-[9px] md:text-[11px] text-[#C6A46D] tracking-wide">
          <Link to="/contact-rapide" className="hidden md:block hover:text-white transition-colors cursor-pointer">
            Contacter un spécialiste local francophone
          </Link>
          <div className="flex items-center justify-center w-full md:w-auto gap-4 md:gap-6 font-medium">
            <a href="tel:+917023016044" className="hover:text-white transition-colors flex items-center gap-1.5">
              <i className="fas fa-phone-alt text-[8px]"></i>
              <span className="whitespace-nowrap">+91 9 35 14 21 959</span>
            </a>
            <a href="tel:+917023016044" className="hover:text-white transition-colors flex items-center gap-1.5">
              <i className="fas fa-phone-alt text-[8px]"></i>
              <span className="whitespace-nowrap">+33 6 16 64 26 26</span>
            </a>
            <span className="opacity-20">|</span>
            {/* <a href="mailto:contact@indeoravoyages.com" className="hover:text-white transition-colors flex items-center gap-1.5">
              <i className="fas fa-envelope text-[8px]"></i>
              <span className="whitespace-nowrap">contact@indeoravoyages.com</span>
            </a> */}
            <span className="opacity-20">|</span>
            <Link to="/contact-rapide" className="hover:text-white transition-all flex items-center gap-1.5 border border-[#C6A46D]/30 px-3 py-1 rounded-sm hover:border-[#C6A46D]">
              <i className="fas fa-paper-plane text-[8px]"></i>
              <span className="whitespace-nowrap">DEMANDER UN DEVIS</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
