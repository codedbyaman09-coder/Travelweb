import { Link } from 'react-router-dom';
import footerLogo from '../assets/png .png';
import footerBannerImg from '../assets/ChatGPT Image May 11, 2026, 10_27_35 PM.png';

const Footer = () => {
  return (
    <>
      <div className="bg-white pb-6 pt-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-[#1b2228]/30 text-[8px] md:text-[9px] tracking-[0.15em] uppercase text-center leading-relaxed">
            Agence de voyage Inde Paris • Agence locale Inde du Sud • Agence de voyage Inde du Nord • Agence locale francophone Inde • Receptif inde • Agence locale Rajasthan • agence de voyage en inde • Agence de voyage spécialisée pour l'Inde • Meilleure agence de voyage inde
          </div>
        </div>
      </div>

      {/* Footer Banner */}
      <section className="relative w-full h-[220px] md:h-[320px] overflow-hidden flex items-center justify-center">
        <img src={footerBannerImg} alt="Indeora Voyage" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-white/10"></div>

        {/* Bottom Fade to Footer */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#1b2228] to-transparent"></div>

        <div className="relative z-10 text-center px-6 pt-12">
          <h2 className="text-[#FFFFFF] text-2xl md:text-5xl font-serif font-light italic mb-4 drop-shadow-xl">
            Prêt à découvrir l'Inde autrement ?
          </h2>
          <p className="text-[#F3EAD3]/90 text-[11px] md:text-[14px] mb-8 tracking-wide font-light max-w-2xl mx-auto">
            Parlons ensemble de votre projet de voyage sur mesure.
          </p>
          <a
            href="#"
            className="inline-block bg-[#A88B52] hover:bg-[#8e7646] text-white text-[10px] md:text-[12px] font-bold py-3.5 px-10 md:px-14 rounded-sm transition-all duration-300 uppercase tracking-[0.2em] shadow-lg"
          >
            Créer mon voyage
          </a>
        </div>
      </section>

      <footer className="bg-[#1b2228] pt-16 pb-12 px-6 font-sans">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-16 mb-16">
            {/* Column 1: Logo & Socials */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <Link to="/" className="mb-6">
                <img src={footerLogo} alt="Indeora Voyages Logo" className="h-16 md:h-20 w-auto" />
              </Link>
              <p className="text-[#C5A46D]/80 text-[12px] md:text-[13px] leading-relaxed max-w-[260px] mb-8 font-light">
                Agence locale francophone en Inde pour des voyages sur mesure, authentiques et responsables.
              </p>
              <div className="flex gap-4">
                {[
                  { icon: 'fab fa-facebook-f', link: '#' },
                  { icon: 'fab fa-instagram', link: '#' },
                  { icon: 'fab fa-whatsapp', link: '#' },
                  { icon: 'far fa-envelope', link: '#' }
                ].map((social, i) => (
                  <a key={i} href={social.link} className="w-8 h-8 rounded-full border border-[#C5A46D]/30 flex items-center justify-center text-[#C5A46D]/60 hover:text-[#C5A46D] hover:border-[#C5A46D] transition-all">
                    <i className={social.icon + " text-[10px]"}></i>
                  </a>
                ))}
              </div>
            </div>

            {/* Column 2: Liens Rapides */}
            <div className="text-center md:text-left mt-4 md:mt-0">
              <h3 className="text-[10px] md:text-[11px] font-bold tracking-[0.25em] text-[#C5A46D] uppercase mb-8">LIENS RAPIDES</h3>
              <ul className="space-y-3.5 text-[#C5A46D] text-[12px] md:text-[13px] font-light">
                <li><Link to="/destinations" className="hover:text-white transition-colors">Destinations</Link></li>
                <li><Link to="/experiences" className="hover:text-white transition-colors">Expériences</Link></li>
                <li><Link to="/about" className="hover:text-white transition-colors">À propos</Link></li>
                <li><Link to="/avant-de-partir" className="hover:text-white transition-colors">Avant de partir</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>

            {/* Column 3: Informations */}
            <div className="text-center md:text-left mt-4 md:mt-0">
              <h3 className="text-[10px] md:text-[11px] font-bold tracking-[0.25em] text-[#C5A46D] uppercase mb-8">INFORMATIONS</h3>
              <ul className="space-y-3.5 text-[#C5A46D] text-[12px] md:text-[13px] font-light">
                <li className="flex items-center justify-center md:justify-start gap-3 hover:text-white transition-colors cursor-pointer group">
                  <svg className="w-3.5 h-3.5 text-[#C5A46D]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  <span>Bikaner, Rajasthan, Inde</span>
                </li>
                <li className="flex items-center justify-center md:justify-start gap-3 hover:text-white transition-colors cursor-pointer group">
                  <svg className="w-3.5 h-3.5 text-[#C5A46D]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1.01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  <span>+91 70 230 16044</span>
                </li>
                <li className="flex items-center justify-center md:justify-start gap-3 hover:text-white transition-colors cursor-pointer group">
                  <svg className="w-3.5 h-3.5 text-[#C5A46D]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  <span>contact@indeoravoyages.com</span>
                </li>
                <li className="flex items-center justify-center md:justify-start gap-3 hover:text-white transition-colors cursor-pointer group">
                  <i className="fab fa-whatsapp text-[#C5A46D] text-[14px]"></i>
                  <span>WhatsApp</span>
                </li>
              </ul>
            </div>

            {/* Column 4: Newsletter */}
            <div className="text-center md:text-left mt-4 md:mt-0">
              <h3 className="text-[10px] md:text-[11px] font-bold tracking-[0.25em] text-[#C5A46D] uppercase mb-8">NEWSLETTER</h3>
              <p className="text-[#C5A46D] text-[12px] md:text-[13px] mb-8 leading-relaxed font-light">
                Recevez nos inspirations de voyage et nos offres exclusives.
              </p>
              <div className="relative border border-[#C6A46D]/30 p-3 flex items-center justify-between group hover:border-[#C6A46D]/60 transition-all max-w-[300px] mx-auto md:mx-0 rounded-sm bg-white/5">
                <input
                  type="email"
                  placeholder="Votre email"
                  className="bg-transparent text-[12px] text-[#C5A46D] placeholder:text-[#C5A46D]/40 focus:outline-none w-full px-2"
                />
                <button className="text-[#C5A46D] group-hover:text-white transition-colors shrink-0 pr-1">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Footer Bar */}
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] md:text-[11px] text-[#C5A46D]/50 font-light gap-6 md:gap-4 text-center">
            <p>© 2024 Indeora Voyages. Tous droits réservés.</p>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-white transition-colors">Mentions légales</a>
              <a href="#" className="hover:text-white transition-colors">Politique de confidentialité</a>
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
