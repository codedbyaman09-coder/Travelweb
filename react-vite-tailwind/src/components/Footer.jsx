import { useState } from 'react';
import { Link } from 'react-router-dom';
import countryData from '../data/countries';
import footerLogo from '../assets/png .png';
import footerBannerImg from '../assets/ChatGPT Image May 11, 2026, 10_27_35 PM.png';

const allCountries = countryData.allCountries || [];

const Footer = () => {
  const [footerPhone, setFooterPhone] = useState('');
  const [footerCountryCode, setFooterCountryCode] = useState('+33');
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isAppointmentOpen, setIsAppointmentOpen] = useState(false);
  const [isFooterPhoneOpen, setIsFooterPhoneOpen] = useState(false);

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
          <Link
            to="/contact-rapide"
            className="inline-block bg-[#A88B52] hover:bg-[#8e7646] text-white text-[10px] md:text-[12px] font-bold py-3.5 px-10 md:px-14 rounded-sm transition-all duration-300 uppercase tracking-[0.2em] shadow-lg"
          >
            Créer mon voyage
          </Link>
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
                  {
                    icon: (
                      <svg className="w-3.5 h-3.5 fill-[#C5A46D] group-hover:fill-white transition-colors" viewBox="0 0 24 24">
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.717-1.456L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.97C16.59 2.028 14.11 1.002 11.49 1.002 6.062 1.002 1.637 5.37 1.633 10.8c-.001 1.73.46 3.42 1.337 4.927-.393 1.428-1.082 3.95-1.082 3.95l4.093-1.056c1.51.82 3.09 1.229 4.664 1.233zM18.02 14.73c-.328-.163-1.942-.947-2.242-1.056-.302-.109-.522-.163-.74.163-.219.324-.849 1.056-1.04 1.272-.191.218-.383.245-.71.082-1.56-.783-2.73-1.36-3.81-3.21-.285-.49.285-.455.815-1.52.088-.182.043-.341-.021-.477-.064-.136-.522-1.248-.716-1.716-.19-.454-.383-.391-.523-.399-.136-.008-.291-.01-.447-.01-.156 0-.411.058-.627.291-.216.233-.825.797-.825 1.944 0 1.147.844 2.253.962 2.41.118.159 1.662 2.507 4.025 3.511.562.24 1.002.383 1.345.491.565.177 1.079.153 1.485.093.453-.067 1.942-.787 2.215-1.547.273-.76.273-1.41.191-1.546-.082-.136-.301-.218-.629-.382z" />
                      </svg>
                    ),
                    link: 'https://wa.me/919351421959'
                  },
                  {
                    icon: (
                      <svg className="w-3.5 h-3.5 fill-[#C5A46D] group-hover:fill-white transition-colors" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    ),
                    link: 'https://www.facebook.com/indeoravoyages/'
                  },
                  {
                    icon: (
                      <svg className="w-3.5 h-3.5 stroke-[#C5A46D] group-hover:stroke-white fill-none transition-colors" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                      </svg>
                    ),
                    link: 'https://www.instagram.com/indeoravoyages/'
                  },
                  {
                    icon: (
                      <svg className="w-3.5 h-3.5 stroke-[#C5A46D] group-hover:stroke-white fill-none transition-colors" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                      </svg>
                    ),
                    link: 'mailto:contact@indeoravoyages.com'
                  }
                ].map((social, i) => (
                  <a key={i} href={social.link} className="w-8 h-8 rounded-full border border-[#C5A46D]/30 flex items-center justify-center hover:bg-[#C5A46D] hover:border-[#C5A46D] transition-all group">
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Column 2: Liens Rapides */}
            <div className="text-center md:text-left mt-4 md:mt-0">
              <h3 className="text-[10px] md:text-[11px] font-bold tracking-[0.25em] text-[#C5A46D] uppercase mb-8">LIENS RAPIDES</h3>
              <ul className="space-y-3.5 text-[#C5A46D] text-[12px] md:text-[13px] font-light">
                <li><Link to="/destinations" className="hover:text-white transition-colors">Destinations</Link></li>
                <li><Link to="/about" className="hover:text-white transition-colors">À propos</Link></li>
                <li><Link to="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
                <li><Link to="/contact-rapide" className="hover:text-white transition-colors">Contact</Link></li>
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

                {/* Dropdown for Phone Numbers in Footer List */}
                <li className="relative max-w-[240px] mx-auto md:mx-0">
                  <button
                    onClick={() => setIsFooterPhoneOpen(!isFooterPhoneOpen)}
                    className="flex items-center justify-between w-full text-left gap-3 text-[#C5A46D] hover:text-white transition-colors cursor-pointer group py-1 outline-none"
                  >
                    <div className="flex items-center gap-3">
                      <svg className="w-3.5 h-3.5 text-[#C5A46D]" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                      <span className="font-light">Téléphones</span>
                    </div>
                    <svg className={`w-3 h-3 text-[#C5A46D] transition-transform duration-300 ${isFooterPhoneOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  <div className={`transition-all duration-500 overflow-hidden ${isFooterPhoneOpen ? 'max-h-[160px] opacity-100 mt-3 space-y-3 pl-6 border-l border-[#C5A46D]/20 text-left' : 'max-h-0 opacity-0'}`}>
                    <div className="flex items-center gap-3">
                      <img src="https://flagcdn.com/w20/fr.png" alt="France" className="w-4 h-auto shadow-sm opacity-80" />
                      <a href="tel:+33616642626" className="text-[#C5A46D]/80 hover:text-white transition-colors">+33 6 16 64 26 26</a>
                    </div>
                    <div className="flex items-center gap-3">
                      <img src="https://flagcdn.com/w20/in.png" alt="Inde" className="w-4 h-auto shadow-sm opacity-80" />
                      <a href="tel:+919351421959" className="text-[#C5A46D]/80 hover:text-white transition-colors">+91 93514 21959</a>
                    </div>
                    <div className="flex items-center gap-3">
                      <img src="https://flagcdn.com/w20/in.png" alt="Inde Mobile" className="w-4 h-auto shadow-sm opacity-80" />
                      <a href="tel:+919351421959" className="text-[#C5A46D]/80 hover:text-white transition-colors">+91 93514 21959</a>
                    </div>
                  </div>
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
      <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-100 z-[9999] shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">

        {/* Callback Panel (Left) */}
        <div className={`absolute bottom-full left-0 w-full md:w-[450px] bg-[#f8fafb] border-t border-r border-gray-100 transition-all duration-500 overflow-hidden z-[10000] shadow-[10px_-10px_30px_rgba(0,0,0,0.05)] ${isContactOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="px-8 py-10">
            <div className="flex flex-col items-center text-center">
              {/* Custom Map Icon */}
              <div className="mb-6">
                <svg className="w-14 h-14 text-[#2D5C64]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                  <path d="M12 2C8.13401 2 5 5.13401 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13401 15.866 2 12 2Z" />
                  <path d="M12 11C13.1046 11 14 10.1046 14 9C14 7.89543 13.1046 7 12 7C10.8954 7 10 7.89543 10 9C10 10.1046 10.8954 11 12 11Z" />
                  <path d="M7 16L5 18M17 16L19 18M12 4V2M4 12H2M22 12H20" strokeLinecap="round" />
                </svg>
              </div>

              <h3 className="text-[#2D5C64] text-[22px] font-serif italic font-light mb-8">Faites-vous rappeler par nos experts</h3>

              <div className="w-full space-y-6">
                {/* Phone Input with Dark Background */}
                <div className="flex rounded-sm overflow-hidden shadow-sm">
                  <div className="relative w-24 bg-white border border-gray-200 flex items-center">
                    <select
                      value={footerCountryCode}
                      onChange={(e) => setFooterCountryCode(e.target.value)}
                      className="w-full h-full bg-transparent pl-3 pr-6 text-[12px] text-gray-500 outline-none appearance-none cursor-pointer font-light"
                    >
                      {allCountries.map((country, index) => (
                        <option key={index} value={`+${country.dialCode}`}>
                          {country.iso2.toUpperCase()} +{country.dialCode}
                        </option>
                      ))}
                    </select>
                    <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none">
                      <svg className="w-2 h-2 text-gray-400" fill="currentColor" viewBox="0 0 24 24"><path d="M7 10l5 5 5-5z" /></svg>
                    </div>
                  </div>
                  <input
                    type="tel"
                    placeholder="Numéro de téléphone"
                    value={footerPhone}
                    onChange={(e) => setFooterPhone(e.target.value)}
                    className="flex-1 bg-[#3a3a3a] text-white px-6 py-4 text-sm outline-none placeholder:text-gray-400 font-light"
                  />
                </div>

                <div className="text-center">
                  <p className="text-[#2D5C64]/70 text-[13px] mb-5 font-light tracking-wide italic">Quand souhaitez-vous être appelé ?</p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="relative">
                      <select className="w-full px-4 py-3.5 bg-white border border-gray-200 text-sm appearance-none outline-none focus:border-[#2D5C64] cursor-pointer text-gray-400 font-light rounded-sm">
                        <option>Any Day</option>
                        <option>Sunday</option>
                        <option>Monday</option>
                        <option>Tuesday</option>
                        <option>Wednesday</option>
                        <option>Thursday</option>
                        <option>Friday</option>
                        <option>Saturday</option>
                      </select>
                      <svg className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                    <div className="relative">
                      <select className="w-full px-4 py-3.5 bg-white border border-gray-200 text-sm appearance-none outline-none focus:border-[#2D5C64] cursor-pointer text-gray-400 font-light rounded-sm">
                        <option>Any Time</option>
                        <option>Morning</option>
                        <option>Afternoon</option>
                        <option>Evening</option>
                      </select>
                      <svg className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>

                <button className="w-full bg-[#2D5C64] text-white py-4 text-[13px] font-bold tracking-[0.2em] uppercase hover:bg-[#234b51] transition-all duration-300 rounded-sm shadow-md mt-4 text-center">
                  APPELEZ-MOI
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Panel (Right-ish) */}
        <div className={`absolute bottom-full right-[200px] w-full md:w-[450px] bg-[#f8fafb] border-t border-x border-gray-100 transition-all duration-500 overflow-hidden z-[10000] shadow-[0_-10px_30px_rgba(0,0,0,0.05)] ${isAppointmentOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="px-8 md:px-12 py-12">
            {/* Newsletter Section */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-6">
                <svg className="w-14 h-14 text-[#2D5C64]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="text-[#2D5C64] text-sm leading-relaxed mb-10 max-w-sm font-light">
                Voyages thématiques, itinéraires originaux et conseils exclusifs... Recevez notre newsletter
              </p>

              <div className="w-full space-y-6">
                <input
                  type="email"
                  placeholder="Adresse email"
                  className="w-full px-6 py-4 bg-white border border-gray-200 text-sm outline-none focus:border-[#2D5C64] transition-colors placeholder:text-gray-300 rounded-sm font-light shadow-sm"
                />
                <button className="w-full bg-[#2D5C64] text-white py-4 text-[13px] font-bold tracking-[0.2em] uppercase hover:bg-[#234b51] transition-all duration-300 rounded-sm shadow-md">
                  JE M'INSCRIS
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Contacter un specialiste francophone callback panel remains if needed, but phone numbers dropdown panel is removed */}

        <div className="max-w-[1500px] mx-auto flex flex-col md:flex-row items-stretch h-auto md:h-[60px]">


          {/* Info Sections */}
          <div className="flex-1 flex items-center divide-x divide-gray-100">
            {/* Contacter un specialiste francophone */}
            <div
              className="flex-1 flex items-center justify-center gap-3 px-4 py-3 md:py-0 group cursor-pointer hover:bg-gray-50 transition-colors"
              onClick={() => {
                setIsContactOpen(!isContactOpen);
                setIsAppointmentOpen(false);
              }}
            >
              <svg className="w-6 h-6 text-[#2D5C64]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="text-[#2D5C64] text-[11px] md:text-[13px] font-medium tracking-wide whitespace-nowrap">Contacter un specialiste francophone</span>
              <svg className={`w-3 h-3 text-[#2D5C64] transition-transform duration-300 ${isContactOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>

            {/* Phone Section (Direct Contact Numbers Displayed) */}
            <div className="flex-[1.3] flex items-center justify-center gap-3 px-4 py-3 md:py-0 text-[#2D5C64]">
              <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M15 7a2 2 0 0 1 2 2m4 0a6 6 0 0 1-6 6" />
              </svg>
              <div className="flex items-center gap-2 text-[11px] md:text-[13px] font-medium tracking-wide whitespace-nowrap">
                <span>France :</span>
                <a href="tel:+33616642626" className="font-bold hover:underline text-[#2D5C64]">+33 6 16 64 26 26</a>
                <span className="text-gray-300 mx-1">|</span>
                <span>IND :</span>
                <a href="tel:+919351421959" className="font-bold hover:underline text-[#2D5C64]">+91 93514 21959</a>
              </div>
            </div>

            {/* Appointment Section */}
            <div
              className="flex-1 flex items-center justify-center gap-3 px-4 py-3 md:py-0 group cursor-pointer hover:bg-gray-50 transition-colors"
              onClick={() => {
                setIsAppointmentOpen(!isAppointmentOpen);
                setIsContactOpen(false);
              }}
            >
              <svg className="w-6 h-6 text-[#2D5C64]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="text-[#2D5C64] text-[11px] md:text-[13px] font-medium tracking-wide whitespace-nowrap">Prendre rendez-vous</span>
              <svg className={`w-3 h-3 text-[#2D5C64] transition-transform duration-300 ${isAppointmentOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>

          {/* CTA Button */}
          <Link to="/demander-un-devis" className="bg-[#2D5C64] px-8 md:px-12 py-4 md:py-0 flex items-center justify-center cursor-pointer hover:bg-[#234b51] transition-all duration-300 group">
            <span className="text-white text-[12px] md:text-[14px] font-bold tracking-[0.15em] uppercase whitespace-nowrap">DEMANDER UN DEVIS</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Footer;
