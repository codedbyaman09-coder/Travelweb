import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import countryData from "../data/countries";
const allCountries = countryData.allCountries || [];
import Footer from '../components/Footer';

const DemanderUnDevis = () => {
  const [formData, setFormData] = useState({
    title: 'M',
    lastName: '',
    firstName: '',
    email: '',
    countryCode: '+33',
    phone: '',
    zipCode: '',
    country: '',
    destination: '',
    date: '',
    duration: '',
    details: '',
    adults: 2,
    children: 0,
    newsletter: true
  });

  const [showPassengerDropdown, setShowPassengerDropdown] = useState(false);
  const passengerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (passengerRef.current && !passengerRef.current.contains(event.target)) {
        setShowPassengerDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handlePassengerChange = (type, delta) => {
    setFormData(prev => ({
      ...prev,
      [type]: Math.max(type === 'adults' ? 1 : 0, prev[type] + delta)
    }));
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleTitleChange = (val) => {
    setFormData({ ...formData, title: val });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Merci ! Votre demande a été envoyée.');
  };

  return (
    <div className="w-full min-h-screen bg-white overflow-x-hidden font-['Montserrat',sans-serif] pt-32 pb-20">
      <div className="max-w-[900px] mx-auto px-6">

        {/* White Box Container */}
        <div className="bg-white rounded-lg shadow-[0_10px_40px_rgba(0,0,0,0.05)] border border-gray-100 p-8 md:p-16">

          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="font-serif text-[36px] md:text-[48px] text-black mb-4">
              Faites créer votre voyage
            </h1>
            <p className="text-[14px] md:text-[15px] text-gray-600 leading-relaxed max-w-[500px] mx-auto">
              Faites-nous part de vos envies, un conseiller spécialiste vous contactera dans les meilleurs délais.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-12">
            {/* Section: Votre voyage */}
            <section className="space-y-8">
              <h2 className="text-[18px] font-bold text-black border-b border-gray-100 pb-2">Votre voyage</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Destination */}
                <div className="relative">
                  <select
                    name="destination"
                    value={formData.destination}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-sm p-4 appearance-none outline-none focus:border-black text-[14px] text-black bg-white"
                    required
                  >
                    <option value="">Destination *</option>
                    <option value="rajasthan">Rajasthan</option>
                    <option value="kerala">Kerala</option>
                    <option value="ladakh">Ladakh</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </div>
                </div>

                {/* Date */}
                <div className="relative group">
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-sm p-4 outline-none focus:border-black text-[14px] text-black bg-white cursor-pointer appearance-none pr-12"
                    required
                  />
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none flex items-center gap-2">
                    <svg className="w-5 h-5 text-gray-400 group-hover:text-black transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <svg className="w-4 h-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>

                {/* Duration */}
                <div className="relative">
                  <select
                    name="duration"
                    value={formData.duration}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-sm p-4 appearance-none outline-none focus:border-black text-[14px] text-black bg-white cursor-pointer"
                    required
                  >
                    <option value="">Durée du voyage *</option>
                    {[...Array(30)].map((_, i) => (
                      <option key={i + 1} value={`${i + 1} jours`}>{i + 1} {i + 0 === 0 ? 'jour' : 'jours'}</option>
                    ))}
                    <option value="plus">Plus de 30 jours</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </div>
                </div>

                {/* Passengers */}
                <div className="relative group" ref={passengerRef}>
                  <div className="absolute -top-2 left-3 bg-white px-1 text-[10px] text-gray-400 z-10 uppercase tracking-wider font-bold">Nombre de passagers *</div>
                  <div
                    onClick={() => setShowPassengerDropdown(!showPassengerDropdown)}
                    className="w-full border border-gray-300 rounded-sm p-4 cursor-pointer flex items-center justify-between bg-white focus-within:border-black"
                  >
                    <span className="text-[14px] text-black">
                      {formData.adults} Adulte{formData.adults > 1 ? 's' : ''}
                      {formData.children > 0 ? `, ${formData.children} Enfant${formData.children > 1 ? 's' : ''}` : ''}
                    </span>
                    <svg className={`w-4 h-4 text-gray-400 transition-transform ${showPassengerDropdown ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M19 9l-7 7-7-7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>

                  {showPassengerDropdown && (
                    <div className="absolute top-[110%] left-0 right-0 bg-white border border-gray-200 shadow-xl z-[100] rounded-sm p-6 space-y-6 animate-in fade-in slide-in-from-top-2 duration-200">
                      {/* Adults */}
                      <div className="flex items-center justify-between">
                        <span className="text-[14px] font-medium text-black">Adultes</span>
                        <div className="flex items-center gap-3">
                          <button
                            type="button"
                            onClick={() => handlePassengerChange('adults', -1)}
                            disabled={formData.adults <= 1}
                            className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:border-black hover:text-black transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                          >
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M20 12H4" strokeWidth="2.5" strokeLinecap="round" /></svg>
                          </button>
                          <div className="w-12 h-8 border border-gray-100 rounded-sm flex items-center justify-center text-[15px] font-medium text-black bg-gray-50/30">
                            {formData.adults}
                          </div>
                          <button
                            type="button"
                            onClick={() => handlePassengerChange('adults', 1)}
                            className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:border-black hover:text-black transition-colors"
                          >
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 4v16m8-8H4" strokeWidth="2.5" strokeLinecap="round" /></svg>
                          </button>
                        </div>
                      </div>

                      {/* Children */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1">
                          <span className="text-[14px] font-medium text-black">Enfants</span>
                          <span className="text-[9px] text-gray-400 mt-0.5">de moins 12 ans</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <button
                            type="button"
                            onClick={() => handlePassengerChange('children', -1)}
                            disabled={formData.children <= 0}
                            className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:border-black hover:text-black transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                          >
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M20 12H4" strokeWidth="2.5" strokeLinecap="round" /></svg>
                          </button>
                          <div className="w-12 h-8 border border-gray-100 rounded-sm flex items-center justify-center text-[15px] font-medium text-black bg-gray-50/30">
                            {formData.children}
                          </div>
                          <button
                            type="button"
                            onClick={() => handlePassengerChange('children', 1)}
                            className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:border-black hover:text-black transition-colors"
                          >
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 4v16m8-8H4" strokeWidth="2.5" strokeLinecap="round" /></svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Details Textarea */}
              <div className="relative pt-2">
                <div className="absolute top-0 left-3 bg-white px-1 text-[10px] text-gray-400 z-10 uppercase tracking-wider font-bold">Détaillez-nous vos envies pour ce voyage *</div>
                <textarea
                  name="details"
                  value={formData.details}
                  onChange={handleChange}
                  placeholder="Vous pouvez préciser vos envies et souhaits particuliers : rythme, ambiance, activités...etc"
                  className="w-full border border-gray-300 rounded-sm p-4 pt-6 outline-none focus:border-black text-[14px] text-black min-h-[150px] resize-none bg-white"
                  required
                ></textarea>
                <div className="absolute bottom-2 right-2 text-gray-200">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M22 22H2v-2h20v2zM22 18H10v-2h12v2zM22 14H6v-2h16v2zM22 10H14V8h8v2z" /></svg>
                </div>
              </div>
            </section>

            {/* Section: Vos informations personnelles */}
            <section className="space-y-8">
              <h2 className="text-[18px] font-bold text-black border-b border-gray-100 pb-2">Vos informations personnelles</h2>

              {/* Title Selection */}
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => handleTitleChange('M')}
                  className={`w-16 py-2 border rounded-sm text-[13px] font-bold transition-all ${formData.title === 'M' ? 'bg-white text-black border-black border-2' : 'bg-white text-gray-400 border-gray-300 hover:border-gray-400'}`}
                >
                  M
                </button>
                <button
                  type="button"
                  onClick={() => handleTitleChange('MME')}
                  className={`w-16 py-2 border rounded-sm text-[13px] font-bold transition-all ${formData.title === 'MME' ? 'bg-white text-black border-black border-2' : 'bg-white text-gray-400 border-gray-300 hover:border-gray-400'}`}
                >
                  MME
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="lastName"
                  placeholder="Nom *"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-sm p-4 outline-none focus:border-black text-[14px] text-black bg-white"
                  required
                />
                <input
                  type="text"
                  name="firstName"
                  placeholder="Prénom *"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-sm p-4 outline-none focus:border-black text-[14px] text-black bg-white"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email *"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-sm p-4 outline-none focus:border-black text-[14px] text-black bg-white"
                  required
                />
                {/* Phone with all country code */}
                <div className="grid grid-cols-[100px_1fr] gap-3">
                  <div className="relative">
                    <select
                      name="countryCode"
                      value={formData.countryCode}
                      onChange={handleChange}
                      className="w-full h-[45px] border border-gray-300 rounded-sm px-3 appearance-none outline-none focus:border-black text-[13px] text-black bg-white cursor-pointer"
                    >
                      {allCountries.map((country, index) => (
                        <option key={index} value={`+${country.dialCode}`}>
                          {country.iso2.toUpperCase()} +{country.dialCode}
                        </option>
                      ))}
                    </select>
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                      <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                  </div>
                  <input 
                    type="tel"
                    name="phone"
                    placeholder="Téléphone *"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-sm p-4 outline-none focus:border-black text-[14px] text-black bg-white"
                    required
                  />
                </div>
                <input
                  type="text"
                  name="zipCode"
                  placeholder="Code Postal *"
                  value={formData.zipCode}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-sm p-4 outline-none focus:border-black text-[14px] text-black bg-white"
                  required
                />
                <div className="relative">
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-sm p-4 appearance-none outline-none focus:border-black text-[14px] text-black bg-white"
                    required
                  >
                    <option value="">Pays de résidence *</option>
                    <option value="france">France</option>
                    <option value="belgique">Belgique</option>
                    <option value="suisse">Suisse</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </div>
                </div>
              </div>

              {/* Newsletter */}
              <div className="flex gap-4 items-start bg-gray-50/50 p-4 rounded-sm">
                <input
                  type="checkbox"
                  name="newsletter"
                  id="newsletter"
                  checked={formData.newsletter}
                  onChange={handleChange}
                  className="mt-1 w-5 h-5 accent-black cursor-pointer"
                />
                <label htmlFor="newsletter" className="text-[11px] text-gray-500 leading-relaxed cursor-pointer select-none">
                  Je ne m'oppose pas à recevoir par email les lettres d'actualité de Voyageurs du monde. Je garde la possibilité de me désinscrire à tout moment via le lien présent dans chacune de ces newsletters.
                </label>
              </div>
            </section>

            <div className="text-center pt-8 border-t border-gray-100">
              <button
                type="submit"
                className="bg-[#b04a33] hover:bg-[#8e3b29] text-white px-16 py-4 rounded-full text-[15px] font-bold uppercase tracking-wider transition-all duration-300 shadow-md active:scale-95"
              >
                Valider
              </button>
              <div className="mt-8 text-right">
                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">* champs obligatoires</span>
              </div>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default DemanderUnDevis;
