  import React, { useState, useRef, useEffect } from 'react';
  import countryData from "../data/countries";
  import Footer from '../components/Footer';

  const allCountries = countryData.allCountries || [];

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

    const inputClass =
      "peer w-full h-[52px] border border-[#d8cdb9] rounded-md px-4 pt-1 outline-none text-[14px] text-[#2d343e] bg-transparent placeholder-transparent focus:border-[#A88B52] focus:ring-1 focus:ring-[#A88B52] transition-all duration-300";

    const selectClass =
      "peer w-full h-[52px] border border-[#d8cdb9] rounded-md px-4 pr-10 pt-1 appearance-none outline-none text-[14px] text-[#2d343e] bg-transparent focus:border-[#A88B52] focus:ring-1 focus:ring-[#A88B52] transition-all duration-300 cursor-pointer";

    const labelClass =
      "absolute left-3 px-1 text-[11px] tracking-[0.18em] uppercase text-[#A88B52] font-bold bg-white transition-all duration-300 transform -translate-y-1/2 top-0 z-10 " +
      "peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-[14px] peer-placeholder-shown:tracking-normal peer-placeholder-shown:normal-case peer-placeholder-shown:text-[#9b917f] peer-placeholder-shown:font-normal " +
      "peer-focus:top-0 peer-focus:text-[11px] peer-focus:tracking-[0.18em] peer-focus:uppercase peer-focus:text-[#A88B52] peer-focus:font-bold " +
      "cursor-text pointer-events-none";

    const selectLabelClass =
      "absolute left-3 px-1 text-[11px] tracking-[0.18em] uppercase text-[#A88B52] font-bold bg-white transition-all duration-300 transform -translate-y-1/2 top-0 z-10 " +
      "peer-invalid:top-1/2 peer-invalid:text-[14px] peer-invalid:tracking-normal peer-invalid:normal-case peer-invalid:text-[#9b917f] peer-invalid:font-normal " +
      "peer-focus:top-0 peer-focus:text-[11px] peer-focus:tracking-[0.18em] peer-focus:uppercase peer-focus:text-[#A88B52] peer-focus:font-bold " +
      "cursor-text pointer-events-none";

    return (
      <div className="w-full min-h-screen bg-[#f3ede2] overflow-x-hidden font-['Montserrat',sans-serif] pt-32 pb-20">
        <div className="max-w-[980px] mx-auto px-4 sm:px-6">

          {/* Main Form Box */}
          <div className="bg-[#fbfaf6] rounded-xl shadow-[0_12px_40px_rgba(45,52,62,0.08)] border border-[#eadfce] p-5 sm:p-7 md:p-10">

            {/* Header */}
            <div className="text-center mb-10">
              <p className="text-[10px] tracking-[0.35em] uppercase text-[#A88B52] font-bold mb-3">
                Voyage sur mesure
              </p>

              <h1 className="font-serif text-[32px] md:text-[46px] text-[#2d343e] mb-4 leading-tight">
                Faites créer votre voyage
              </h1>

              <p className="text-[14px] md:text-[15px] text-[#2d343e]/65 leading-relaxed max-w-[560px] mx-auto font-medium">
                Faites-nous part de vos envies, un conseiller spécialiste vous contactera dans les meilleurs délais.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">

              {/* Section: Votre voyage */}
              <section className="bg-white rounded-lg border border-[#eadfce] p-5 md:p-7 space-y-6">
                <h2 className="text-[20px] font-serif italic text-[#2d343e] border-b border-[#eadfce] pb-3">
                  Votre voyage
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {/* Destination */}
                  <div className="relative">
                    <select
                      name="destination"
                      id="destination"
                      value={formData.destination}
                      onChange={handleChange}
                      className={selectClass}
                      required
                    >
                      <option value="" disabled hidden></option>
                      <option value="rajasthan">Rajasthan</option>
                      <option value="kerala">Kerala</option>
                      <option value="ladakh">Ladakh</option>
                    </select>
                    <label htmlFor="destination" className={selectLabelClass}>Destination *</label>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                      <svg className="w-4 h-4 text-[#A88B52]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path d="M19 9l-7 7-7-7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>

                  {/* Date */}
                  <div className="relative">
                    <input
                      type="date"
                      name="date"
                      id="date"
                      placeholder=" "
                      value={formData.date}
                      onChange={handleChange}
                      className={`${inputClass} pr-12`}
                      required
                    />
                    <label htmlFor="date" className={labelClass.replace('peer-placeholder-shown:top-1/2', 'peer-invalid:top-1/2').replace('peer-placeholder-shown:', 'peer-invalid:')}>Date de départ *</label>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                      <svg className="w-5 h-5 text-[#A88B52]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="1.5"
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Duration */}
                  <div className="relative">
                    <select
                      name="duration"
                      id="duration"
                      value={formData.duration}
                      onChange={handleChange}
                      className={selectClass}
                      required
                    >
                      <option value="" disabled hidden></option>
                      {[...Array(30)].map((_, i) => (
                        <option key={i + 1} value={`${i + 1} jours`}>
                          {i + 1} {i + 0 === 0 ? 'jour' : 'jours'}
                        </option>
                      ))}
                      <option value="plus">Plus de 30 jours</option>
                    </select>
                    <label htmlFor="duration" className={selectLabelClass}>Durée du voyage *</label>

                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                      <svg className="w-4 h-4 text-[#A88B52]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path d="M19 9l-7 7-7-7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>

                  {/* Passengers */}
                  <div ref={passengerRef} className="relative mt-2">
                    <div
                      onClick={() => setShowPassengerDropdown(!showPassengerDropdown)}
                      className="w-full h-[52px] border border-[#d8cdb9] rounded-md px-4 pt-1 cursor-pointer flex items-center justify-between bg-transparent hover:border-[#A88B52] transition-all duration-300 peer"
                    >
                      <span className="text-[14px] text-[#2d343e] font-medium">
                        {formData.adults} Adulte{formData.adults > 1 ? 's' : ''}
                        {formData.children > 0 ? `, ${formData.children} Enfant${formData.children > 1 ? 's' : ''}` : ''}
                      </span>

                      <svg
                        className={`w-4 h-4 text-[#A88B52] transition-transform ${showPassengerDropdown ? 'rotate-180' : ''
                          }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19 9l-7 7-7-7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <label className="absolute left-3 px-1 text-[11px] tracking-[0.18em] uppercase text-[#A88B52] font-bold bg-white transform -translate-y-1/2 top-0 z-10 pointer-events-none">Nombre de passagers *</label>

                    {showPassengerDropdown && (
                      <div className="absolute top-[calc(100%+10px)] left-0 right-0 bg-white border border-[#eadfce] shadow-[0_15px_35px_rgba(45,52,62,0.13)] z-[100] rounded-lg p-5 space-y-5">

                        {/* Adults */}
                        <div className="flex items-center justify-between">
                          <span className="text-[14px] font-bold text-[#2d343e]">Adultes</span>

                          <div className="flex items-center gap-3">
                            <button
                              type="button"
                              onClick={() => handlePassengerChange('adults', -1)}
                              disabled={formData.adults <= 1}
                              className="w-8 h-8 rounded-full border border-[#d8cdb9] flex items-center justify-center text-[#A88B52] hover:bg-[#A88B52] hover:text-white transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                            >
                              −
                            </button>

                            <div className="w-11 h-8 border border-[#eadfce] rounded-md flex items-center justify-center text-[14px] font-bold text-[#2d343e] bg-[#fbfaf6]">
                              {formData.adults}
                            </div>

                            <button
                              type="button"
                              onClick={() => handlePassengerChange('adults', 1)}
                              className="w-8 h-8 rounded-full border border-[#d8cdb9] flex items-center justify-center text-[#A88B52] hover:bg-[#A88B52] hover:text-white transition-colors"
                            >
                              +
                            </button>
                          </div>
                        </div>

                        {/* Children */}
                        <div className="flex items-center justify-between">
                          <div>
                            <span className="text-[14px] font-bold text-[#2d343e]">Enfants</span>
                            <p className="text-[10px] text-[#9b917f] mt-1">de moins 12 ans</p>
                          </div>

                          <div className="flex items-center gap-3">
                            <button
                              type="button"
                              onClick={() => handlePassengerChange('children', -1)}
                              disabled={formData.children <= 0}
                              className="w-8 h-8 rounded-full border border-[#d8cdb9] flex items-center justify-center text-[#A88B52] hover:bg-[#A88B52] hover:text-white transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                            >
                              −
                            </button>

                            <div className="w-11 h-8 border border-[#eadfce] rounded-md flex items-center justify-center text-[14px] font-bold text-[#2d343e] bg-[#fbfaf6]">
                              {formData.children}
                            </div>

                            <button
                              type="button"
                              onClick={() => handlePassengerChange('children', 1)}
                              className="w-8 h-8 rounded-full border border-[#d8cdb9] flex items-center justify-center text-[#A88B52] hover:bg-[#A88B52] hover:text-white transition-colors"
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Details */}
                <div className="relative pt-2">
                  <textarea
                    name="details"
                    id="details"
                    value={formData.details}
                    onChange={handleChange}
                    placeholder=" "
                    className="peer w-full min-h-[145px] border border-[#d8cdb9] rounded-md p-4 pt-6 outline-none text-[14px] text-[#2d343e] bg-transparent resize-none focus:border-[#A88B52] focus:ring-1 focus:ring-[#A88B52] transition-all duration-300"
                    required
                  ></textarea>
                  <label htmlFor="details" className="absolute left-3 px-1 text-[11px] tracking-[0.18em] uppercase text-[#A88B52] font-bold bg-white transition-all duration-300 transform -translate-y-1/2 top-2 z-10 peer-placeholder-shown:top-8 peer-placeholder-shown:text-[14px] peer-placeholder-shown:tracking-normal peer-placeholder-shown:normal-case peer-placeholder-shown:text-[#9b917f] peer-placeholder-shown:font-normal peer-focus:top-2 peer-focus:text-[11px] peer-focus:tracking-[0.18em] peer-focus:uppercase peer-focus:text-[#A88B52] peer-focus:font-bold cursor-text pointer-events-none">Détaillez-nous vos envies *</label>
                </div>
              </section>

              {/* Section: Vos informations personnelles */}
              <section className="bg-white rounded-lg border border-[#eadfce] p-5 md:p-7 space-y-6">
                <h2 className="text-[20px] font-serif italic text-[#2d343e] border-b border-[#eadfce] pb-3">
                  Vos informations personnelles
                </h2>

                {/* Title Selection */}
                <div className="relative pt-3">
                  <label className="absolute left-3 px-1 text-[11px] tracking-[0.18em] uppercase text-[#A88B52] font-bold bg-white transform -translate-y-1/2 top-3 z-10 pointer-events-none">Civilité</label>

                  <div className="flex gap-3">
                    <button
                      type="button"
                      onClick={() => handleTitleChange('M')}
                      className={`w-16 h-10 rounded-full text-[13px] font-bold transition-all ${formData.title === 'M'
                          ? 'bg-[#A88B52] text-white shadow-md'
                          : 'bg-white text-[#9b917f] border border-[#d8cdb9] hover:border-[#A88B52]'
                        }`}
                    >
                      M
                    </button>

                    <button
                      type="button"
                      onClick={() => handleTitleChange('MME')}
                      className={`w-20 h-10 rounded-full text-[13px] font-bold transition-all ${formData.title === 'MME'
                          ? 'bg-[#A88B52] text-white shadow-md'
                          : 'bg-white text-[#9b917f] border border-[#d8cdb9] hover:border-[#A88B52]'
                        }`}
                    >
                      MME
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="relative mt-2">
                    <input
                      type="text"
                      name="lastName"
                      id="lastName"
                      placeholder=" "
                      value={formData.lastName}
                      onChange={handleChange}
                      className={inputClass}
                      required
                    />
                    <label htmlFor="lastName" className={labelClass}>Nom *</label>
                  </div>

                  <div className="relative mt-2">
                    <input
                      type="text"
                      name="firstName"
                      id="firstName"
                      placeholder=" "
                      value={formData.firstName}
                      onChange={handleChange}
                      className={inputClass}
                      required
                    />
                    <label htmlFor="firstName" className={labelClass}>Prénom *</label>
                  </div>

                  <div className="relative mt-2">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder=" "
                      value={formData.email}
                      onChange={handleChange}
                      className={inputClass}
                      required
                    />
                    <label htmlFor="email" className={labelClass}>Email *</label>
                  </div>

                  {/* Phone with all country code */}
                  <div className="relative mt-2">

                    <div className="grid grid-cols-[112px_1fr] gap-3">
                      <div className="relative">
                        <select
                          name="countryCode"
                          value={formData.countryCode}
                          onChange={handleChange}
                          className="w-full h-[52px] border border-[#d8cdb9] rounded-md px-3 pr-8 appearance-none outline-none text-[13px] text-[#2d343e] bg-transparent focus:border-[#A88B52] focus:ring-1 focus:ring-[#A88B52] transition-all cursor-pointer"
                        >
                          {allCountries.map((country, index) => (
                            <option key={index} value={`+${country.dialCode}`}>
                              {country.iso2.toUpperCase()} +{country.dialCode}
                            </option>
                          ))}
                        </select>

                        <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                          <svg className="w-3 h-3 text-[#A88B52]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path d="M19 9l-7 7-7-7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                      </div>

                      <div className="relative">
                        <input
                          type="tel"
                          name="phone"
                          id="phone"
                          placeholder=" "
                          value={formData.phone}
                          onChange={handleChange}
                          className={inputClass}
                          required
                        />
                        <label htmlFor="phone" className={labelClass}>Téléphone *</label>
                      </div>
                    </div>
                  </div>

                  <div className="relative mt-2">
                    <input
                      type="text"
                      name="zipCode"
                      id="zipCode"
                      placeholder=" "
                      value={formData.zipCode}
                      onChange={handleChange}
                      className={inputClass}
                      required
                    />
                    <label htmlFor="zipCode" className={labelClass}>Code Postal *</label>
                  </div>

                  <div className="relative mt-2">
                    <select
                      name="country"
                      id="country"
                      value={formData.country}
                      onChange={handleChange}
                      className={selectClass}
                      required
                    >
                      <option value="" disabled hidden></option>
                      <option value="france">France</option>
                      <option value="belgique">Belgique</option>
                      <option value="suisse">Suisse</option>
                    </select>
                    <label htmlFor="country" className={selectLabelClass}>Pays de résidence *</label>

                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                      <svg className="w-4 h-4 text-[#A88B52]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path d="M19 9l-7 7-7-7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                </div>

              </section>

              {/* Submit */}
              <div className="text-center pt-4">
                <button
                  type="submit"
                  className="bg-[#A88B52] hover:bg-[#8e7646] text-white px-12 md:px-16 py-3.5 rounded-full text-[13px] font-bold uppercase tracking-[0.18em] transition-all duration-300 shadow-md active:scale-95"
                >
                  Valider
                </button>

                <div className="mt-6 text-center">
                  <span className="text-[10px] text-[#9b917f] font-bold uppercase tracking-[0.22em]">
                    * champs obligatoires
                  </span>
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