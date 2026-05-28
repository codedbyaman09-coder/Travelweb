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

  const [viewDate1, setViewDate1] = useState(new Date(2026, 5, 1));
  const [viewDate2, setViewDate2] = useState(new Date(2026, 6, 1));

  const [isCountryCodeOpen, setIsCountryCodeOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(countryCodes[0]);

  // Form states
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [destination, setDestination] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

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
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  };

  const isSelected = (day, month, year) => {
    if (!startDate && !endDate) return false;
    const date = new Date(year, month, day);

    return (
      (startDate && date.getTime() === startDate.getTime()) ||
      (endDate && date.getTime() === endDate.getTime())
    );
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

  const handleSubmit = async () => {
    if (!name || !email || !phone) {
      setSubmitMessage('Veuillez remplir votre nom, email et téléphone.');
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage('');

    // Prepare message with all the context
    let travelDetails = `Période: ${knowsDates ? `Du ${startDate?.toLocaleDateString()} au ${endDate?.toLocaleDateString()}` : selectedPeriod}\n`;
    travelDetails += `Durée: ${knowsDates ? `${getDuration()} jours` : selectedDuration}\n`;
    travelDetails += `Voyageurs: ${adults} adulte(s), ${children} enfant(s)\n`;
    travelDetails += `Budget par personne: ${selectedBudget}\n`;
    travelDetails += `Destination souhaitée: ${destination || 'Non spécifiée'}\n`;

    try {
      const res = await fetch('http://127.0.0.1:8000/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          phone: `${selectedCountry.code} ${phone}`,
          message: travelDetails
        })
      });
      const data = await res.json();
      if (data.success) {
        setSubmitMessage('Votre demande a été envoyée avec succès ! Nous vous contacterons bientôt.');
        setName('');
        setEmail('');
        setPhone('');
        setDestination('');
      } else {
        setSubmitMessage('Une erreur est survenue.');
      }
    } catch (err) {
      setSubmitMessage('Impossible de contacter le serveur.');
    } finally {
      setIsSubmitting(false);
    }
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

  const fieldClass =
    "w-full bg-white border border-[#ead8cf] rounded-2xl px-5 pt-6 pb-3 text-[15px] text-[#241f1c] outline-none focus:border-[#b8795f] focus:shadow-[0_0_0_4px_rgba(184,121,95,0.12)] transition-all duration-300 placeholder-transparent peer";

  const labelClass =
    "absolute left-5 top-3 text-[10px] tracking-[0.2em] uppercase text-[#b8795f] font-bold pointer-events-none";

  const sectionCard =
    "bg-white/75 backdrop-blur-sm border border-white rounded-[28px] shadow-[0_20px_70px_rgba(45,35,30,0.08)] p-5 md:p-8";

  const sectionHeading =
    "flex items-center justify-between gap-4 border-b border-[#ead8cf] pb-5 mb-8";

  const optionClass = (active) =>
    `relative rounded-2xl border p-5 text-left transition-all duration-300 ${
      active
        ? 'bg-[#b8795f] border-[#b8795f] text-white shadow-[0_14px_35px_rgba(184,121,95,0.28)]'
        : 'bg-white border-[#ead8cf] text-[#241f1c] hover:border-[#b8795f] hover:-translate-y-1'
    }`;

  const renderCalendarGrid = (viewDate) => {
    const daysInMonth = getDaysInMonth(viewDate);
    const firstDay = getFirstDayOfMonth(viewDate);
    const month = viewDate.getMonth();
    const year = viewDate.getFullYear();
    const monthName = viewDate.toLocaleDateString('fr-FR', { month: 'long' });

    return (
      <div className="bg-[#fffaf7] rounded-[24px] border border-[#ead8cf] p-5">
        <div className="flex items-center justify-between mb-6">
          <button
            type="button"
            onClick={() => {
              const d = new Date(viewDate);
              d.setMonth(d.getMonth() - 1);
              viewDate === viewDate1 ? setViewDate1(d) : setViewDate2(d);
            }}
            className="w-9 h-9 rounded-full bg-white border border-[#ead8cf] hover:bg-[#b8795f] hover:text-white transition-all"
          >
            ←
          </button>

          <span className="text-[13px] font-bold text-[#241f1c] uppercase tracking-[0.18em]">
            {monthName} {year}
          </span>

          <button
            type="button"
            onClick={() => {
              const d = new Date(viewDate);
              d.setMonth(d.getMonth() + 1);
              viewDate === viewDate1 ? setViewDate1(d) : setViewDate2(d);
            }}
            className="w-9 h-9 rounded-full bg-white border border-[#ead8cf] hover:bg-[#b8795f] hover:text-white transition-all"
          >
            →
          </button>
        </div>

        <div className="grid grid-cols-7 text-[10px] text-[#8f8178] mb-3 text-center uppercase font-bold">
          <span>lun.</span>
          <span>mar.</span>
          <span>mer.</span>
          <span>jeu.</span>
          <span>ven.</span>
          <span>sam.</span>
          <span>dim.</span>
        </div>

        <div className="grid grid-cols-7 gap-y-2 text-center text-sm">
          {[...Array(firstDay)].map((_, i) => (
            <div key={`empty-${i}`} />
          ))}

          {[...Array(daysInMonth)].map((_, i) => {
            const day = i + 1;
            const selected = isSelected(day, month, year);
            const inRange = isInRange(day, month, year);

            return (
              <button
                type="button"
                key={day}
                onClick={() => handleDateClick(day, month, year)}
                className={`w-9 h-9 mx-auto rounded-full transition-all ${
                  selected
                    ? 'bg-[#b8795f] text-white font-bold shadow-md'
                    : inRange
                    ? 'bg-[#f1d7cc] text-[#241f1c]'
                    : 'text-[#241f1c] hover:bg-white'
                }`}
              >
                {day}
              </button>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className="w-full min-h-screen bg-[#f4e6e0] py-20 px-4 md:px-8 font-serif overflow-x-hidden">
      <div className="w-full max-w-[1180px] mx-auto">
        {/* Top Header */}
        <div className="text-center mb-8 md:mb-14">
          <p className="text-[7.5px] md:text-[10px] tracking-[0.45em] uppercase text-[#b8795f] font-bold mb-2 md:mb-4">
            Indeora Voyages
          </p>

          <h2 className="text-[26px] md:text-[54px] leading-tight text-[#241f1c] font-light tracking-[0.08em] uppercase">
            Votre Voyage
          </h2>

          <div className="flex items-center justify-center mt-3 md:mt-5">
            <span className="w-10 md:w-14 h-px bg-[#b8795f]/50"></span>
            <span className="mx-3 md:mx-4 text-[#b8795f] text-sm md:text-xl">✦</span>
            <span className="w-10 md:w-14 h-px bg-[#b8795f]/50"></span>
          </div>

          <p className="max-w-[640px] mx-auto mt-4 md:mt-5 text-[10.5px] md:text-[15px] text-[#5e514a] leading-relaxed px-2 md:px-0">
            Confiez-nous vos envies, vos dates et votre budget. Nous imaginons un voyage sur mesure, fluide et profondément personnel.
          </p>
        </div>

        <div className="space-y-8">
          {/* Step 01 */}
          <section className={sectionCard}>
            <div className={sectionHeading}>
              <div>
                <p className="text-[10px] uppercase tracking-[0.28em] text-[#b8795f] font-bold mb-2">
                  Étape 01
                </p>
                <h3 className="text-[24px] md:text-[30px] text-[#241f1c] font-light">
                  Dates du voyage
                </h3>
              </div>

              <div className="hidden md:flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase text-[#8f8178]">
                <span className="w-2 h-2 rounded-full bg-[#b8795f]"></span>
                calendrier
              </div>
            </div>

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-5 mb-8">
              <p className="text-[#241f1c] text-[15px] italic">
                Connaissez-vous les dates précises de votre voyage ?
              </p>

              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setKnowsDates(true)}
                  className={`px-10 py-3 rounded-full text-[12px] uppercase tracking-[0.2em] font-bold transition-all ${
                    knowsDates
                      ? 'bg-[#241f1c] text-white'
                      : 'bg-white text-[#241f1c] border border-[#ead8cf] hover:border-[#b8795f]'
                  }`}
                >
                  Oui
                </button>

                <button
                  type="button"
                  onClick={() => setKnowsDates(false)}
                  className={`px-10 py-3 rounded-full text-[12px] uppercase tracking-[0.2em] font-bold transition-all ${
                    !knowsDates
                      ? 'bg-[#241f1c] text-white'
                      : 'bg-white text-[#241f1c] border border-[#ead8cf] hover:border-[#b8795f]'
                  }`}
                >
                  Non
                </button>
              </div>
            </div>

            {knowsDates ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div className="relative">
                    <input
                      type="date"
                      value={startDate ? startDate.toISOString().split('T')[0] : ''}
                      onChange={(e) => handleInputChange('start', e.target.value)}
                      onClick={(e) => e.target.showPicker && e.target.showPicker()}
                      className={fieldClass}
                      placeholder=" "
                    />
                    <label className={labelClass}>Date de départ *</label>
                  </div>

                  <div className="relative">
                    <input
                      type="date"
                      value={endDate ? endDate.toISOString().split('T')[0] : ''}
                      onChange={(e) => handleInputChange('end', e.target.value)}
                      onClick={(e) => e.target.showPicker && e.target.showPicker()}
                      className={fieldClass}
                      placeholder=" "
                    />
                    <label className={labelClass}>Date de retour *</label>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {renderCalendarGrid(viewDate1)}
                  {renderCalendarGrid(viewDate2)}
                </div>

                <div className="mt-8 text-center">
                  <span className="inline-flex items-center justify-center rounded-full bg-[#241f1c] text-white px-8 py-3 text-[12px] uppercase tracking-[0.22em] font-bold">
                    Durée du voyage : {getDuration()} jour{getDuration() > 1 ? 's' : ''}
                  </span>
                </div>
              </>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-[12px] uppercase tracking-[0.22em] text-[#241f1c] font-bold mb-4">
                    Période envisagée *
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {periods.map((p) => (
                      <button
                        type="button"
                        key={p.id}
                        onClick={() => setSelectedPeriod(p.id)}
                        className={optionClass(selectedPeriod === p.id)}
                      >
                        <span className="text-xl mr-3">{p.icon}</span>
                        <span className="text-[14px] font-medium">{p.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-[12px] uppercase tracking-[0.22em] text-[#241f1c] font-bold mb-4">
                    Durée du voyage *
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {durations.map((d) => (
                      <button
                        type="button"
                        key={d}
                        onClick={() => setSelectedDuration(d)}
                        className={optionClass(selectedDuration === d)}
                      >
                        <span className="text-[14px] font-medium">{d}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </section>

          {/* Step 02 */}
          <section className={sectionCard}>
            <div className={sectionHeading}>
              <div>
                <p className="text-[10px] uppercase tracking-[0.28em] text-[#b8795f] font-bold mb-2">
                  Étape 02
                </p>
                <h3 className="text-[24px] md:text-[30px] text-[#241f1c] font-light">
                  Voyageurs & budget
                </h3>
              </div>

              <div className="hidden md:flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase text-[#8f8178]">
                <span className="w-2 h-2 rounded-full bg-[#b8795f]"></span>
                préférences
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-10">
              <div>
                <h4 className="text-[12px] uppercase tracking-[0.22em] text-[#241f1c] font-bold mb-5">
                  Voyageurs *
                </h4>

                <div className="space-y-4">
                  <div className="flex items-center justify-between bg-[#fffaf7] border border-[#ead8cf] rounded-2xl p-4">
                    <span className="text-[15px] text-[#241f1c] italic">adulte(s)</span>

                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        onClick={() => setAdults(Math.max(1, adults - 1))}
                        className="w-9 h-9 rounded-full bg-white border border-[#ead8cf] hover:bg-[#241f1c] hover:text-white transition-all"
                      >
                        -
                      </button>

                      <span className="w-9 text-center font-bold text-[#241f1c]">
                        {adults}
                      </span>

                      <button
                        type="button"
                        onClick={() => setAdults(adults + 1)}
                        className="w-9 h-9 rounded-full bg-white border border-[#ead8cf] hover:bg-[#241f1c] hover:text-white transition-all"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between bg-[#fffaf7] border border-[#ead8cf] rounded-2xl p-4">
                    <span className="text-[15px] text-[#241f1c] italic">
                      enfant(s) 0-12 ans
                    </span>

                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        onClick={() => setChildren(Math.max(0, children - 1))}
                        className="w-9 h-9 rounded-full bg-white border border-[#ead8cf] hover:bg-[#241f1c] hover:text-white transition-all"
                      >
                        -
                      </button>

                      <span className="w-9 text-center font-bold text-[#241f1c]">
                        {children}
                      </span>

                      <button
                        type="button"
                        onClick={() => setChildren(children + 1)}
                        className="w-9 h-9 rounded-full bg-white border border-[#ead8cf] hover:bg-[#241f1c] hover:text-white transition-all"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-[12px] uppercase tracking-[0.22em] text-[#241f1c] font-bold mb-5">
                  Budget par personne *
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {budgets.map((b) => (
                    <button
                      type="button"
                      key={b.id}
                      onClick={() => setSelectedBudget(b.id)}
                      className={optionClass(selectedBudget === b.id)}
                    >
                      <div className="flex items-center justify-between gap-4">
                        <span className="text-[14px] font-medium">{b.label}</span>
                        {b.popular && (
                          <span className="text-xs bg-white/30 px-3 py-1 rounded-full">
                            populaire
                          </span>
                        )}
                      </div>
                    </button>
                  ))}
                </div>

                <p className="text-[11px] text-[#5e514a] italic mt-4">
                  *Un budget de 5 000 € / personne est l'option la plus populaire parmi les clients partant en Inde avec Indeora.
                </p>
              </div>
            </div>
          </section>

          {/* Step 03 */}
          <section className={sectionCard}>
            <div className={sectionHeading}>
              <div>
                <p className="text-[10px] uppercase tracking-[0.28em] text-[#b8795f] font-bold mb-2">
                  Étape 03
                </p>
                <h3 className="text-[24px] md:text-[30px] text-[#241f1c] font-light">
                  Vos informations
                </h3>
              </div>

              <div className="hidden md:flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase text-[#8f8178]">
                <span className="w-2 h-2 rounded-full bg-[#b8795f]"></span>
                contact
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="relative">
                <input type="text" value={name} onChange={e => setName(e.target.value)} className={fieldClass} placeholder=" " />
                <label className={labelClass}>Nom & Prénom *</label>
              </div>

              <div className="relative">
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} className={fieldClass} placeholder=" " />
                <label className={labelClass}>Email *</label>
              </div>

              <div className="grid grid-cols-[130px_1fr] gap-4">
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setIsCountryCodeOpen(!isCountryCodeOpen)}
                    className="w-full h-full min-h-[64px] bg-white border border-[#ead8cf] rounded-2xl px-4 pt-5 pb-2 text-left hover:border-[#b8795f] transition-all"
                  >
                    <span className="block text-[14px] font-bold text-[#241f1c]">
                      {selectedCountry.flag} {selectedCountry.code}
                    </span>

                    <span className="absolute left-4 top-3 text-[10px] tracking-[0.2em] uppercase text-[#b8795f] font-bold">
                      Code
                    </span>
                  </button>

                  {isCountryCodeOpen && (
                    <div className="absolute top-[calc(100%+10px)] left-0 w-[280px] bg-white border border-[#ead8cf] shadow-2xl z-50 max-h-72 overflow-y-auto rounded-2xl">
                      {countryCodes.map((c, idx) => (
                        <button
                          type="button"
                          key={`${c.code}-${idx}`}
                          onClick={() => {
                            setSelectedCountry(c);
                            setIsCountryCodeOpen(false);
                          }}
                          className={`w-full p-3 hover:bg-[#fff0e8] cursor-pointer text-sm text-[#241f1c] border-b border-[#f4ece7] flex items-center gap-3 transition-colors ${
                            selectedCountry.code === c.code ? 'bg-[#fff0e8]' : ''
                          }`}
                        >
                          <span className="text-lg">{c.flag}</span>
                          <span className="font-bold">{c.code}</span>
                          <span className="text-[10px] text-[#8f8178] uppercase tracking-tighter truncate">
                            {c.name}
                          </span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                <div className="relative">
                  <input type="tel" value={phone} onChange={e => setPhone(e.target.value)} className={fieldClass} placeholder=" " />
                  <label className={labelClass}>Téléphone *</label>
                </div>
              </div>

              <div className="relative">
                <input type="text" value={destination} onChange={e => setDestination(e.target.value)} className={fieldClass} placeholder=" " />
                <label className={labelClass}>Destination souhaitée</label>
              </div>
            </div>

            {submitMessage && (
              <div className={`mb-6 p-4 rounded-md text-sm text-center ${submitMessage.includes('succès') ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                {submitMessage}
              </div>
            )}

            <div className="text-center">
              <button
                type="button"
                onClick={handleSubmit}
                disabled={isSubmitting}
                className={`group relative overflow-hidden bg-[#241f1c] text-white px-10 md:px-16 py-4 rounded-full text-[12px] md:text-sm tracking-[0.22em] uppercase transition-all duration-500 font-bold shadow-[0_18px_45px_rgba(36,31,28,0.22)] ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-[#b8795f]'}`}
              >
                {isSubmitting ? 'Envoi en cours...' : 'Demander un devis personnalisé'}
              </button>
            </div>
          </section>

          {/* Included */}
          <section className="bg-[#241f1c] text-white rounded-[28px] p-6 md:p-10">
            <h3 className="text-center text-[13px] font-bold uppercase tracking-[0.28em] mb-10">
              Inclus avec votre agence de voyages Indeora
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                'Itinéraire haute couture',
                'Conseiller dédié',
                'Chauffeur à disposition',
                'Activités sur place',
              ].map((item, index) => (
                <div key={index} className="flex flex-col items-center text-center gap-4">
                  <div className="w-14 h-14 rounded-full border border-white/30 flex items-center justify-center text-[#f1d7cc] text-xl">
                    ✦
                  </div>

                  <p className="text-[11px] uppercase tracking-wider font-bold leading-tight text-white/85">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default VotreVoyageForm;
