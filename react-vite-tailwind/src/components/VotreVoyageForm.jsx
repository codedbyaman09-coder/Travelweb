import React, { useState, useEffect } from 'react';

const countryCodes = [
  { code: '+33', name: 'France', flag: '🇫🇷' },
  { code: '+91', name: 'Inde', flag: '🇮🇳' },
  { code: '+41', name: 'Suisse', flag: '🇨🇭' },
  { code: '+32', name: 'Belgique', flag: '🇧🇪' },
  { code: '+1', name: 'USA/Canada', flag: '🇺🇸' },
  { code: '+44', name: 'UK', flag: '🇬🇧' },
  { code: '+93', name: 'Afghanistan', flag: '🇦🇫' },
  { code: '+355', name: 'Albania', flag: '🇦🇱' },
  { code: '+213', name: 'Algeria', flag: '🇩🇿' },
  { code: '+376', name: 'Andorra', flag: '🇦🇩' },
  { code: '+244', name: 'Angola', flag: '🇦🇴' },
  { code: '+1', name: 'Antigua and Barbuda', flag: '🇦🇬' },
  { code: '+54', name: 'Argentina', flag: '🇦🇷' },
  { code: '+374', name: 'Armenia', flag: '🇦🇲' },
  { code: '+61', name: 'Australia', flag: '🇦🇺' },
  { code: '+43', name: 'Austria', flag: '🇦🇹' },
  { code: '+994', name: 'Azerbaijan', flag: '🇦🇿' },
  { code: '+973', name: 'Bahrain', flag: '🇧🇭' },
  { code: '+880', name: 'Bangladesh', flag: '🇧🇩' },
  { code: '+375', name: 'Belarus', flag: '🇧🇾' },
  { code: '+501', name: 'Belize', flag: '🇧🇿' },
  { code: '+229', name: 'Benin', flag: '🇧🇯' },
  { code: '+975', name: 'Bhutan', flag: '🇧🇹' },
  { code: '+591', name: 'Bolivia', flag: '🇧🇴' },
  { code: '+387', name: 'Bosnia and Herzegovina', flag: '🇧🇦' },
  { code: '+267', name: 'Botswana', flag: '🇧🇼' },
  { code: '+55', name: 'Brazil', flag: '🇧🇷' },
  { code: '+673', name: 'Brunei', flag: '🇧🇳' },
  { code: '+359', name: 'Bulgaria', flag: '🇧🇬' },
  { code: '+226', name: 'Burkina Faso', flag: '🇧🇫' },
  { code: '+257', name: 'Burundi', flag: '🇧🇮' },
  { code: '+855', name: 'Cambodia', flag: '🇰🇭' },
  { code: '+237', name: 'Cameroon', flag: '🇨🇲' },
  { code: '+238', name: 'Cape Verde', flag: '🇨🇻' },
  { code: '+236', name: 'Central African Republic', flag: '🇨🇫' },
  { code: '+235', name: 'Chad', flag: '🇹🇩' },
  { code: '+56', name: 'Chile', flag: '🇨🇱' },
  { code: '+86', name: 'China', flag: '🇨🇳' },
  { code: '+57', name: 'Colombia', flag: '🇨🇴' },
  { code: '+269', name: 'Comoros', flag: '🇰🇲' },
  { code: '+242', name: 'Congo', flag: '🇨🇬' },
  { code: '+506', name: 'Costa Rica', flag: '🇨🇷' },
  { code: '+225', name: 'Côte d\'Ivoire', flag: '🇨🇮' },
  { code: '+385', name: 'Croatia', flag: '🇭🇷' },
  { code: '+53', name: 'Cuba', flag: '🇨🇺' },
  { code: '+357', name: 'Cyprus', flag: '🇨🇾' },
  { code: '+420', name: 'Czech Republic', flag: '🇨🇿' },
  { code: '+45', name: 'Denmark', flag: '🇩🇰' },
  { code: '+253', name: 'Djibouti', flag: '🇩🇯' },
  { code: '+1', name: 'Dominica', flag: '🇩🇲' },
  { code: '+1', name: 'Dominican Republic', flag: '🇩🇴' },
  { code: '+593', name: 'Ecuador', flag: '🇪🇨' },
  { code: '+20', name: 'Egypt', flag: '🇪🇬' },
  { code: '+503', name: 'El Salvador', flag: '🇸🇻' },
  { code: '+240', name: 'Equatorial Guinea', flag: '🇬🇶' },
  { code: '+291', name: 'Eritrea', flag: '🇪🇷' },
  { code: '+372', name: 'Estonia', flag: '🇪🇪' },
  { code: '+251', name: 'Ethiopia', flag: '🇪🇹' },
  { code: '+679', name: 'Fiji', flag: '🇫🇯' },
  { code: '+358', name: 'Finland', flag: '🇫🇮' },
  { code: '+241', name: 'Gabon', flag: '🇬🇦' },
  { code: '+220', name: 'Gambia', flag: '🇬🇲' },
  { code: '+995', name: 'Georgia', flag: '🇬🇪' },
  { code: '+49', name: 'Germany', flag: '🇩🇪' },
  { code: '+233', name: 'Ghana', flag: '🇬🇭' },
  { code: '+30', name: 'Greece', flag: '🇬🇷' },
  { code: '+1', name: 'Grenada', flag: '🇬🇩' },
  { code: '+502', name: 'Guatemala', flag: '🇬🇹' },
  { code: '+224', name: 'Guinea', flag: '🇬🇳' },
  { code: '+245', name: 'Guinea-Bissau', flag: '🇬🇼' },
  { code: '+592', name: 'Guyana', flag: '🇬🇾' },
  { code: '+509', name: 'Haiti', flag: '🇭🇹' },
  { code: '+504', name: 'Honduras', flag: '🇭🇳' },
  { code: '+36', name: 'Hungary', flag: '🇭🇺' },
  { code: '+354', name: 'Iceland', flag: '🇮🇸' },
  { code: '+62', name: 'Indonesia', flag: '🇮🇩' },
  { code: '+98', name: 'Iran', flag: '🇮🇷' },
  { code: '+964', name: 'Iraq', flag: '🇮🇶' },
  { code: '+353', name: 'Ireland', flag: '🇮🇪' },
  { code: '+972', name: 'Israel', flag: '🇮🇱' },
  { code: '+39', name: 'Italy', flag: '🇮🇹' },
  { code: '+1', name: 'Jamaica', flag: '🇯🇲' },
  { code: '+81', name: 'Japan', flag: '🇯🇵' },
  { code: '+962', name: 'Jordan', flag: '🇯🇴' },
  { code: '+7', name: 'Kazakhstan', flag: '🇰🇿' },
  { code: '+254', name: 'Kenya', flag: '🇰🇪' },
  { code: '+686', name: 'Kiribati', flag: '🇰🇮' },
  { code: '+850', name: 'North Korea', flag: '🇰🇵' },
  { code: '+82', name: 'South Korea', flag: '🇰🇷' },
  { code: '+965', name: 'Kuwait', flag: '🇰🇼' },
  { code: '+996', name: 'Kyrgyzstan', flag: '🇰🇬' },
  { code: '+856', name: 'Laos', flag: '🇱🇦' },
  { code: '+371', name: 'Latvia', flag: '🇱🇻' },
  { code: '+961', name: 'Lebanon', flag: '🇱🇧' },
  { code: '+266', name: 'Lesotho', flag: '🇱🇸' },
  { code: '+231', name: 'Liberia', flag: '🇱🇷' },
  { code: '+218', name: 'Libya', flag: '🇱🇾' },
  { code: '+423', name: 'Liechtenstein', flag: '🇱🇮' },
  { code: '+370', name: 'Lithuania', flag: '🇱🇹' },
  { code: '+352', name: 'Luxembourg', flag: '🇱🇺' },
  { code: '+261', name: 'Madagascar', flag: '🇲🇬' },
  { code: '+265', name: 'Malawi', flag: '🇲🇼' },
  { code: '+60', name: 'Malaysia', flag: '🇲🇾' },
  { code: '+960', name: 'Maldives', flag: '🇲🇻' },
  { code: '+223', name: 'Mali', flag: '🇲🇱' },
  { code: '+356', name: 'Malta', flag: '🇲🇹' },
  { code: '+222', name: 'Mauritania', flag: '🇲🇷' },
  { code: '+230', name: 'Mauritius', flag: '🇲🇺' },
  { code: '+52', name: 'Mexico', flag: '🇲🇽' },
  { code: '+373', name: 'Moldova', flag: '🇲🇩' },
  { code: '+377', name: 'Monaco', flag: '🇲🇨' },
  { code: '+976', name: 'Mongolia', flag: '🇲🇳' },
  { code: '+382', name: 'Montenegro', flag: '🇲🇪' },
  { code: '+212', name: 'Morocco', flag: '🇲🇦' },
  { code: '+258', name: 'Mozambique', flag: '🇲🇿' },
  { code: '+95', name: 'Myanmar', flag: '🇲🇲' },
  { code: '+264', name: 'Namibia', flag: '🇳🇦' },
  { code: '+977', name: 'Nepal', flag: '🇳🇵' },
  { code: '+31', name: 'Netherlands', flag: '🇳🇱' },
  { code: '+64', name: 'New Zealand', flag: '🇳🇿' },
  { code: '+505', name: 'Nicaragua', flag: '🇳🇮' },
  { code: '+227', name: 'Niger', flag: '🇳🇪' },
  { code: '+234', name: 'Nigeria', flag: '🇳🇬' },
  { code: '+47', name: 'Norway', flag: '🇳🇴' },
  { code: '+968', name: 'Oman', flag: '🇴🇲' },
  { code: '+92', name: 'Pakistan', flag: '🇵🇰' },
  { code: '+507', name: 'Panama', flag: '🇵🇦' },
  { code: '+675', name: 'Papua New Guinea', flag: '🇵🇬' },
  { code: '+595', name: 'Paraguay', flag: '🇵🇾' },
  { code: '+51', name: 'Peru', flag: '🇵🇪' },
  { code: '+63', name: 'Philippines', flag: '🇵🇭' },
  { code: '+48', name: 'Poland', flag: '🇵🇱' },
  { code: '+351', name: 'Portugal', flag: '🇵🇹' },
  { code: '+974', name: 'Qatar', flag: '🇶🇦' },
  { code: '+40', name: 'Romania', flag: '🇷🇴' },
  { code: '+7', name: 'Russia', flag: '🇷🇺' },
  { code: '+250', name: 'Rwanda', flag: '🇷🇼' },
  { code: '+966', name: 'Saudi Arabia', flag: '🇸🇦' },
  { code: '+221', name: 'Senegal', flag: '🇸🇳' },
  { code: '+381', name: 'Serbia', flag: '🇷🇸' },
  { code: '+248', name: 'Seychelles', flag: '🇸🇨' },
  { code: '+232', name: 'Sierra Leone', flag: '🇸🇱' },
  { code: '+65', name: 'Singapore', flag: '🇸🇬' },
  { code: '+421', name: 'Slovakia', flag: '🇸🇰' },
  { code: '+386', name: 'Slovenia', flag: '🇸🇮' },
  { code: '+252', name: 'Somalia', flag: '🇸🇴' },
  { code: '+27', name: 'South Africa', flag: '🇿🇦' },
  { code: '+34', name: 'Spain', flag: '🇪🇸' },
  { code: '+94', name: 'Sri Lanka', flag: '🇱🇰' },
  { code: '+249', name: 'Sudan', flag: '🇸🇩' },
  { code: '+597', name: 'Suriname', flag: '🇸🇷' },
  { code: '+46', name: 'Sweden', flag: '🇸🇪' },
  { code: '+963', name: 'Syria', flag: '🇸🇾' },
  { code: '+886', name: 'Taiwan', flag: '🇹🇼' },
  { code: '+992', name: 'Tajikistan', flag: '🇹🇯' },
  { code: '+255', name: 'Tanzania', flag: '🇹🇿' },
  { code: '+66', name: 'Thailand', flag: '🇹🇭' },
  { code: '+228', name: 'Togo', flag: '🇹🇬' },
  { code: '+216', name: 'Tunisia', flag: '🇹🇳' },
  { code: '+90', name: 'Turkey', flag: '🇹🇷' },
  { code: '+993', name: 'Turkmenistan', flag: '🇹🇲' },
  { code: '+256', name: 'Uganda', flag: '🇺🇬' },
  { code: '+380', name: 'Ukraine', flag: '🇺🇦' },
  { code: '+971', name: 'United Arab Emirates', flag: '🇦🇪' },
  { code: '+598', name: 'Uruguay', flag: '🇺🇾' },
  { code: '+998', name: 'Uzbekistan', flag: '🇺🇿' },
  { code: '+58', name: 'Venezuela', flag: '🇻🇪' },
  { code: '+84', name: 'Vietnam', flag: '🇻🇳' },
  { code: '+967', name: 'Yemen', flag: '🇾🇪' },
  { code: '+260', name: 'Zambia', flag: '🇿🇲' },
  { code: '+263', name: 'Zimbabwe', flag: '🇿🇼' }
];

const VotreVoyageForm = () => {
  const [knowsDates, setKnowsDates] = useState(true);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [selectedBudget, setSelectedBudget] = useState('5k-7k');
  const [selectedPeriod, setSelectedPeriod] = useState(null);
  const [selectedDuration, setSelectedDuration] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const [viewDate1, setViewDate1] = useState(new Date(2026, 5, 1)); // June 2026
  const [viewDate2, setViewDate2] = useState(new Date(2026, 6, 1)); // July 2026

  const [isCountryCodeOpen, setIsCountryCodeOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(countryCodes[0]);

  const handleDateClick = (day, month, year) => {
    const clickedDate = new Date(year, month, day);
    
    if (!startDate || (startDate && endDate)) {
      setStartDate(clickedDate);
      setEndDate(null);
    } else if (startDate && !endDate) {
      if (clickedDate < startDate) {
        setStartDate(clickedDate);
      } else {
        setEndDate(clickedDate);
      }
    }
  };

  const getDuration = () => {
    if (!startDate || !endDate) return 0;
    const diffTime = Math.abs(endDate - startDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const formatDate = (date) => {
    if (!date) return 'DD/MM/YYYY';
    return date.toLocaleDateString('fr-FR');
  };

  const isSelected = (day, month, year) => {
    if (!startDate && !endDate) return false;
    const date = new Date(year, month, day);
    return (startDate && date.getTime() === startDate.getTime()) || 
           (endDate && date.getTime() === endDate.getTime());
  };

  const isInRange = (day, month, year) => {
    if (!startDate || !endDate) return false;
    const date = new Date(year, month, day);
    return date > startDate && date < endDate;
  };

  const getDaysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date) => {
    let day = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    return day === 0 ? 6 : day - 1;
  };

  const handleInputChange = (type, val) => {
    if (!val) {
      type === 'start' ? setStartDate(null) : setEndDate(null);
      return;
    }
    const d = new Date(val);
    if (type === 'start') {
      setStartDate(d);
      setViewDate1(new Date(d.getFullYear(), d.getMonth(), 1));
      setViewDate2(new Date(d.getFullYear(), d.getMonth() + 1, 1));
    } else {
      setEndDate(d);
      setViewDate2(new Date(d.getFullYear(), d.getMonth(), 1));
    }
  };

  const renderCalendarGrid = (viewDate, onDayClick) => {
    const daysInMonth = getDaysInMonth(viewDate);
    const firstDay = getFirstDayOfMonth(viewDate);
    const month = viewDate.getMonth();
    const year = viewDate.getFullYear();
    const monthName = viewDate.toLocaleDateString('fr-FR', { month: 'long' });

    return (
      <div className="flex-1">
        <div className="flex items-center justify-between mb-6 px-2">
          <button onClick={() => {
            const d = new Date(viewDate);
            d.setMonth(d.getMonth() - 1);
            viewDate === viewDate1 ? setViewDate1(d) : setViewDate2(d);
          }} className="text-black hover:text-[#d4a38d] font-bold">←</button>
          <span className="font-bold text-sm text-black uppercase tracking-widest">{monthName} {year}</span>
          <button onClick={() => {
            const d = new Date(viewDate);
            d.setMonth(d.getMonth() + 1);
            viewDate === viewDate1 ? setViewDate1(d) : setViewDate2(d);
          }} className="text-black hover:text-[#d4a38d] font-bold">→</button>
        </div>
        <div className="grid grid-cols-7 text-[10px] text-gray-400 mb-2 text-center uppercase font-bold">
          <span>lun.</span><span>mar.</span><span>mer.</span><span>jeu.</span><span>ven.</span><span>sam.</span><span>dim.</span>
        </div>
        <div className="grid grid-cols-7 gap-y-1 text-center text-sm">
          {[...Array(firstDay)].map((_, i) => <div key={`empty-${i}`} />)}
          {[...Array(daysInMonth)].map((_, i) => {
            const day = i + 1;
            const selected = isSelected(day, month, year);
            const inRange = isInRange(day, month, year);
            return (
              <div 
                key={day} 
                onClick={() => handleDateClick(day, month, year)}
                className={`p-2 cursor-pointer transition-all ${
                  selected ? 'bg-[#d4a38d] text-white rounded-full font-bold' : 
                  inRange ? 'bg-[#f2dfd7] text-black' : 'text-black hover:bg-gray-100 rounded-full'
                }`}
              >
                {day}
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  const periods = [
    { id: 'ete2026', label: 'Été 2026', icon: '☀️' },
    { id: 'automne2026', label: 'Automne 2026', icon: '🍂' },
    { id: 'hiver2026', label: 'Hiver 2026', icon: '❄️' },
    { id: 'debut2027', label: 'Début 2027', icon: '❄️' },
    { id: 'printemps2027', label: 'Printemps 2027', icon: '🌸' },
    { id: 'conseillez', label: 'Conseillez moi', icon: '🌐' },
  ];

  const durations = [
    '1 semaine',
    '1 à 2 semaines',
    '2 semaines',
    '2 à 3 semaines',
    '+ de 3 semaines',
    'Je ne sais pas',
  ];

  const budgets = [
    { id: '3k-5k', label: 'de 3 000 € à 5 000 €' },
    { id: '5k-7k', label: 'de 5 000 € à 7 000 €', popular: true },
    { id: 'gt10k', label: '> 10 000 €' },
    { id: 'unknown', label: 'Je ne sais pas' },
  ];

  return (
    <div className="bg-[#f4e6e0] py-20 px-4 md:px-8 font-serif">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 relative">
          <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-gray-300 -z-0"></div>
          <h2 className="bg-[#f4e6e0] relative z-10 inline-block px-10 text-2xl md:text-3xl tracking-[0.3em] uppercase text-black font-light">
            VOTRE VOYAGE
          </h2>
        </div>

        <div className="mb-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
            <p className="text-black text-[15px] font-medium italic">
              Connaissez-vous les dates précises de votre voyage ?
            </p>
            <div className="flex gap-2">
              <button
                onClick={() => setKnowsDates(true)}
                className={`px-12 py-3 text-sm tracking-widest uppercase transition-all border ${
                  knowsDates 
                    ? 'bg-[#d4a38d] text-white border-[#d4a38d]' 
                    : 'bg-white text-black border-gray-200 hover:border-[#d4a38d]'
                }`}
              >
                Oui
              </button>
              <button
                onClick={() => setKnowsDates(false)}
                className={`px-12 py-3 text-sm tracking-widest uppercase transition-all border ${
                  !knowsDates 
                    ? 'bg-[#d4a38d] text-white border-[#d4a38d]' 
                    : 'bg-white text-black border-gray-200 hover:border-[#d4a38d]'
                }`}
              >
                Non
              </button>
            </div>
          </div>

          {knowsDates ? (
            <div className="bg-white/50 border border-gray-200 p-8 rounded-sm mb-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                <div>
                  <div className="flex flex-col gap-4 mb-8">
                    <label className="text-[12px] font-bold uppercase tracking-[0.2em] text-black">Date de départ *</label>
                    <div className="relative">
                      <input 
                        type="date" 
                        value={startDate ? startDate.toISOString().split('T')[0] : ''} 
                        onChange={(e) => handleInputChange('start', e.target.value)}
                        onClick={(e) => e.target.showPicker && e.target.showPicker()}
                        className="bg-white border border-gray-300 p-4 focus:outline-none focus:border-[#d4a38d] text-sm text-black rounded-sm w-full shadow-sm pr-12 cursor-pointer"
                      />
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  {renderCalendarGrid(viewDate1, (d) => handleDateClick(d, viewDate1.getMonth(), viewDate1.getFullYear()))}
                </div>

                <div>
                  <div className="flex flex-col gap-4 mb-8">
                    <label className="text-[12px] font-bold uppercase tracking-[0.2em] text-black">Date de retour *</label>
                    <div className="relative">
                      <input 
                        type="date" 
                        value={endDate ? endDate.toISOString().split('T')[0] : ''} 
                        onChange={(e) => handleInputChange('end', e.target.value)}
                        onClick={(e) => e.target.showPicker && e.target.showPicker()}
                        className="bg-white border border-gray-300 p-4 focus:outline-none focus:border-[#d4a38d] text-sm text-black rounded-sm w-full shadow-sm pr-12 cursor-pointer"
                      />
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  {renderCalendarGrid(viewDate2, (d) => handleDateClick(d, viewDate2.getMonth(), viewDate2.getFullYear()))}
                </div>
              </div>
              
              <div className="mt-12 pt-8 border-t border-gray-200 text-center">
                <span className="text-sm text-black italic font-bold uppercase tracking-[0.2em] bg-[#f2dfd7] px-8 py-3 rounded-full shadow-sm">
                  Durée du voyage : {getDuration()} jour{getDuration() > 1 ? 's' : ''}
                </span>
              </div>
            </div>
          ) : (
            <div className="space-y-12 mb-12">
              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-black mb-6 border-b border-gray-300 pb-2">
                  Période envisagée *
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {periods.map((p) => (
                    <button
                      key={p.id}
                      onClick={() => setSelectedPeriod(p.id)}
                      className={`flex items-center gap-4 p-4 border transition-all ${
                        selectedPeriod === p.id 
                          ? 'border-[#d4a38d] bg-white shadow-sm' 
                          : 'border-gray-200 bg-white/50 hover:border-[#d4a38d]'
                      }`}
                    >
                      <span className="text-xl">{p.icon}</span>
                      <span className="text-[14px] text-black font-medium">{p.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-black mb-6 border-b border-gray-300 pb-2">
                  Durée du voyage *
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {durations.map((d) => (
                    <button
                      key={d}
                      onClick={() => setSelectedDuration(d)}
                      className={`p-4 border text-[14px] transition-all ${
                        selectedDuration === d 
                          ? 'border-[#d4a38d] bg-white shadow-sm' 
                          : 'border-gray-200 bg-white/50 hover:border-[#d4a38d]'
                      }`}
                    >
                      <span className="text-black font-medium">{d}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="mb-16">
          <h3 className="text-sm font-bold uppercase tracking-widest text-black mb-6 border-b border-gray-300 pb-2">
            Voyageurs *
          </h3>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex items-center gap-4">
              <div className="flex border border-gray-200 bg-white shadow-sm">
                <button 
                  onClick={() => setAdults(Math.max(1, adults - 1))}
                  className="px-4 py-2 bg-gray-100 hover:bg-gray-200"
                >-</button>
                  <div className="px-6 py-2 min-w-[60px] text-center text-black font-bold">{adults}</div>
                  <button 
                    onClick={() => setAdults(adults + 1)}
                    className="px-4 py-2 bg-gray-100 hover:bg-gray-200"
                  >+</button>
                </div>
                <span className="text-sm italic text-black font-medium">adulte(s)</span>
              </div>

            <div className="flex items-center gap-4">
              <div className="flex border border-gray-200 bg-white shadow-sm">
                <button 
                  onClick={() => setChildren(Math.max(0, children - 1))}
                  className="px-4 py-2 bg-gray-100 hover:bg-gray-200"
                >-</button>
                  <div className="px-6 py-2 min-w-[60px] text-center text-black font-bold">{children}</div>
                  <button 
                    onClick={() => setChildren(children + 1)}
                    className="px-4 py-2 bg-gray-100 hover:bg-gray-200"
                  >+</button>
                </div>
                <span className="text-sm italic text-black font-medium">enfant(s) 0-12 ans</span>
              </div>
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-sm font-bold uppercase tracking-widest text-black mb-6 border-b border-gray-300 pb-2">
            Budget par personne *
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            {budgets.slice(0, 3).map((b) => (
              <button
                key={b.id}
                onClick={() => setSelectedBudget(b.id)}
                className={`relative p-4 border text-[13px] transition-all flex items-center justify-center gap-2 ${
                  selectedBudget === b.id 
                    ? 'border-[#d4a38d] bg-[#f2dfd7] shadow-sm' 
                    : 'border-gray-200 bg-white/50 hover:border-[#d4a38d]'
                }`}
              >
                {b.popular && (
                  <span className="text-[#d4a38d] text-lg">★</span>
                )}
                <span className="text-black font-medium">{b.label}</span>
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
             {budgets.slice(3).map((b) => (
              <button
                key={b.id}
                onClick={() => setSelectedBudget(b.id)}
                className={`p-4 border text-[13px] transition-all ${
                  selectedBudget === b.id 
                    ? 'border-[#d4a38d] bg-[#f2dfd7] shadow-sm' 
                    : 'border-gray-200 bg-white/50 hover:border-[#d4a38d]'
                }`}
              >
                <span className="text-black font-medium">{b.label}</span>
              </button>
            ))}
          </div>
          <p className="text-[11px] text-black italic">
            *Un budget de 5 000 € / personne est l'option la plus populaire parmi les clients partant en Inde avec Indeora.
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-sm font-bold uppercase tracking-widest text-black mb-6 border-b border-gray-300 pb-2">
            Vos informations de contact *
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="space-y-2">
              <label className="block text-[11px] font-bold uppercase tracking-widest italic text-black">Nom & Prénom *</label>
              <input type="text" className="w-full bg-white border border-gray-200 p-4 focus:outline-none focus:border-[#d4a38d] transition-all text-black shadow-sm" />
            </div>
            <div className="space-y-2">
              <label className="block text-[11px] font-bold uppercase tracking-widest italic text-black">Email *</label>
              <input type="email" className="w-full bg-white border border-gray-200 p-4 focus:outline-none focus:border-[#d4a38d] transition-all text-black shadow-sm" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="space-y-2">
              <label className="block text-[11px] font-bold uppercase tracking-widest italic text-black">Téléphone *</label>
              <div className="flex gap-2">
                <div className="relative w-32">
                  <div 
                    onClick={() => setIsCountryCodeOpen(!isCountryCodeOpen)}
                    className="bg-white border border-gray-200 p-4 focus:outline-none focus:border-[#d4a38d] text-black shadow-sm text-sm cursor-pointer flex justify-between items-center h-full rounded-sm hover:border-[#d4a38d] transition-all"
                  >
                    <span className="font-medium">{selectedCountry.flag} {selectedCountry.code}</span>
                    <svg className={`w-4 h-4 transition-transform duration-300 ${isCountryCodeOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                  
                  {isCountryCodeOpen && (
                    <div className="absolute top-full left-0 w-full mt-1 bg-white border border-gray-200 shadow-xl z-50 max-h-64 overflow-y-auto rounded-sm animate-in fade-in slide-in-from-top-1">
                      {countryCodes.map((c, idx) => (
                        <div 
                          key={`${c.code}-${idx}`}
                          onClick={() => {
                            setSelectedCountry(c);
                            setIsCountryCodeOpen(false);
                          }}
                          className={`p-3 hover:bg-[#f2dfd7] cursor-pointer text-sm text-black border-b border-gray-50 flex items-center gap-3 transition-colors ${selectedCountry.code === c.code ? 'bg-[#f4e6e0]' : ''}`}
                        >
                          <span className="text-lg">{c.flag}</span>
                          <span className="font-bold">{c.code}</span>
                          <span className="text-[10px] text-gray-500 uppercase tracking-tighter truncate">{c.name}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <input type="tel" className="flex-1 bg-white border border-gray-200 p-4 focus:outline-none focus:border-[#d4a38d] transition-all text-black shadow-sm rounded-sm" placeholder="Numéro" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="block text-[11px] font-bold uppercase tracking-widest italic text-black">Destination souhaitée</label>
              <input type="text" className="w-full bg-white border border-gray-200 p-4 focus:outline-none focus:border-[#d4a38d] transition-all text-black shadow-sm" placeholder="Ex: Rajasthan, Kerala..." />
            </div>
          </div>
          <div className="text-center">
            <button className="bg-[#2d343e] text-white px-16 py-4 text-sm tracking-[0.2em] uppercase hover:bg-[#d4a38d] transition-all duration-500 font-bold shadow-lg">
              Demander un devis personnalisé
            </button>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest text-black mb-12 border-b border-gray-300 pb-2">
            Inclus avec votre agence de voyages Indeora
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center gap-4">
              <div className="w-16 h-16 flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-12 h-12 text-black" fill="none" stroke="currentColor" strokeWidth="1">
                  <path d="M12 2C7.03 2 3 6.03 3 11c0 4.97 4.03 9 9 9s9-4.03 9-9c0-4.97-4.03-9-9-9zM12 18c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7z" />
                  <path d="M12 6v10M8 11h8" />
                </svg>
              </div>
              <p className="text-[11px] uppercase tracking-wider text-black font-bold leading-tight">
                Itinéraire haute couture
              </p>
            </div>

            <div className="flex flex-col items-center text-center gap-4">
              <div className="w-16 h-16 flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-12 h-12 text-black" fill="none" stroke="currentColor" strokeWidth="1">
                  <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
                </svg>
              </div>
              <p className="text-[11px] uppercase tracking-wider text-black font-bold leading-tight">
                Vols A/R
              </p>
            </div>

            <div className="flex flex-col items-center text-center gap-4">
              <div className="w-16 h-16 flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-12 h-12 text-black" fill="none" stroke="currentColor" strokeWidth="1">
                  <rect x="2" y="7" width="20" height="10" rx="2" />
                  <circle cx="7" cy="17" r="2" />
                  <circle cx="17" cy="17" r="2" />
                  <path d="M7 7l2-4h6l2 4" />
                </svg>
              </div>
              <p className="text-[11px] uppercase tracking-wider text-black font-bold leading-tight">
                Chauffeur à disposition
              </p>
            </div>

            <div className="flex flex-col items-center text-center gap-4">
              <div className="w-16 h-16 flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-12 h-12 text-black" fill="none" stroke="currentColor" strokeWidth="1">
                  <path d="M4 4h16v16H4z" />
                  <path d="M12 4v16M4 12h16" />
                </svg>
              </div>
              <p className="text-[11px] uppercase tracking-wider text-black font-bold leading-tight">
                Activités sur place
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VotreVoyageForm;
