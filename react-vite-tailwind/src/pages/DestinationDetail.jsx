import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Footer from '../components/Footer';
import EspritIndeora from '../components/EspritIndeora';
import InteractiveMap from '../components/InteractiveMap';
import EnviesGrid from '../components/EnviesGrid';
import SEO from '../components/SEO';

const DestinationDetail = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('inclusions');

  const normalizedId = decodeURIComponent(id).toLowerCase();

  const destinationData = {
    "visite-de-l'himalaya": {
      layout: 'standard',
      title: "Visite Du Village De L'himalyas",
      heroImg: "https://indeoravoyages.com/wp-content/uploads/2025/08/rajan-768x611.jpg",
      content: { inclusions: [], exclusions: [], information: "" }
    },
    "visites-par-région": {
      layout: 'premium',
      title: "French Alps",
      bg: '#edeff1',
      heroImg: "https://images.unsplash.com/photo-1531310197839-ccf54634509e?auto=format&fit=crop&w=2000&q=80",
      subtitle: "Discover incredible hiking and the Alps charming villages brimming with outdoor activities all-year round",
      buttonText: "BOOK YOUR VOYAGE",
      mainText: "For nature lovers, the French Alps and Pyrénées offer some of the best places to visit in France offering year-round outdoor activities within breathtaking backdrops.",
      secondaryText: "The alps boast some of the most magnificent scenery in Europe.",
      dropcap: "F",
      dropcapColor: "white",
      quote: "Founder, Philip Haslett, can unlock the Palace of the Popes at night...",
      quoteAuthor: "",
      gridImages: [
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1472712739516-7ad2b786e1f7?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1518136247453-74e7b5265980?auto=format&fit=crop&w=800&q=80"
      ],
      hotelSectionTitle: "Discover just a few of our favorite luxury hotels in the French Mountains.",
      hotels: [
        { name: "Château De Riell", img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80" },
        { name: "Four Seasons Megève", img: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80" }
      ]
    },
    "idées-de-circuits": {
      layout: 'premium',
      title: "Alsatian Wine Tours",
      bg: '#c2af8a',
      heroImg: "https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea?auto=format&fit=crop&w=2000&q=80",
      subtitle: "Discover the region's dynamic wines from Rieslings, Pinot Blanc, Pinot Gris, Gewurztraminers and Crémant d'Alsace",
      buttonText: "DISCOVER ALSACE",
      mainText: "Alsace is a historical region in northeastern France on the Rhine River plain. Bordering Germany and Switzerland, it has alternated between German and French control over the centuries and reflects a mix of cultures and local color.",
      secondaryText: "Its capital, Strasbourg, is centered on the Ill River's Grand Île island, bordered by canals and home to the Gothic Cathédrale.",
      dropcap: "A",
      dropcapColor: "white",
      quote: "We had a lot of specific desires, and nothing was impossible or out of the question. My entire family is very grateful and appreciative of all of the hard work by Philip and his team.",
      quoteAuthor: "- Jamie, Chicago USA",
      gridImages: [
        "https://images.unsplash.com/photo-1551310644-fa057bd6602c?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1511018556340-d16986a1c194?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1514890547357-a9ee2887a35f?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1549918830-11ec21609f98?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1533501064032-4742618641a0?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1493246318656-5bbd4afb09b7?auto=format&fit=crop&w=800&q=80"
      ],
      hotelSectionTitle: "OUR ALSACE HOTEL SELECTIONS",
      hotels: [
        { name: "Cour du Corbeau", img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80" },
        { name: "Villa René Lalique", img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80" }
      ]
    },
    "bien-être-yoga-et-ayurveda": {
      layout: 'premium',
      title: "Yoga & Ayurveda",
      bg: '#edeff1',
      heroImg: "https://images.unsplash.com/photo-1507752533523-5186b0bc4c43?auto=format&fit=crop&w=2000&q=80",
      subtitle: "Discover our world-class wellness retreats, holistic centers, and the spiritual heart of India",
      buttonText: "BOOK YOUR TRIP",
      mainText: "Bordeaux, the cosmopolitan center of the Atlantic coast is a must-see, not only for its world-famous wine-growing region, but also its buzzing cultural scene, gastronomy, art and architectural marvels including the Gothic Cathédrale Saint-André, 18th- to 19th-century mansions and notable art museums, such as the Musée des Beaux-Arts de Bordeaux. While the Basque Country is a destination that rewards curiosity. From the elegance of its coastline to the traditions preserved inland, it offers a rare combination of authenticity and sophistication.",
      secondaryText: "For travellers who value both culture and nature, it is a region that lingers long after the journey ends.",
      dropcap: "B",
      dropcapColor: "black",
      quote: "Philip, Julie, and Sarah really went above and beyond in Bordeaux. It was requested that we compose our wine resume, and then Sarah was able to secure private tours for us at châteaux in the region (three in St. Emilion and three in Medoc). That was an amazing experience to see the variety of the châteaux and the wine-making process at each and was a highlight of the trip. I highly recommend Philip, Julie, and Sarah. They incorporated our trip wish list beautifully.",
      quoteAuthor: "- Helen, Nov 2012",
      gridImages: [
        "https://images.unsplash.com/photo-1507752533523-5186b0bc4c43?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=800&q=80"
      ],
      hotelSectionTitle: "Our Bordeaux, Basque Country & Saint-Émilion Hotel Picks",
      hotelSectionDesc: "Discover just a few of our favorite luxury hotels in Bordeaux, Saint-Émilion and the Basque regions. Our French Promise team routinely visits and inspects each property personally for our discerning clients. You may want to combine this destination with France's West Coast as well.",
      hotels: [
        { name: "70 Hectares", subtitle: "& L'Océan", img: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80" },
        { name: "Château Ferrand", subtitle: "Saint-Émilion", img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80" },
        { name: "Grand Hôtel Intercontinental", subtitle: "Bordeaux", img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80" }
      ]
    },
    "hors-des-sentiers-battus": {
      layout: 'premium',
      title: "History & Rich French Traditions",
      bg: '#edeff1',
      heroImg: "https://www.shutterstock.com/image-photo/wet-asphalt-road-city-skyline-600nw-2717340977.jpg",
      subtitle: "Discover strong traditions, charming, and colorful villages",
      buttonText: "DISCOVER BRITTANY",
      introText: "Brittany is one of the less visited regions of France for our clientele, and this is a shame. If you are looking for outrageous luxury or feted locations, then indeed, it may be wise to look elsewhere. However, if you are looking for strong French traditions, incredible beautiful villages, wonderful food and and fascinating historical anecdotes about very colorful characters, then this is a region for you.",
      mainText: "The north part of Brittany facing England and the English Channel is a rugged one. Here the weather is less pleasant than on the southern side, but that is also part of its charm. If you come at the height of summer, it rains a lot less. In the city of Saint Malo, discover where privateers were based to attack and plunder ships usually British. We can immerse you into this part of history with a visit of a true privateers house, while learning the legend of Robert Surcouf.",
      secondaryText: "Brittany is also filled with charming villages listed among the most beautiful of France including: Dinan, Moncontour, Locronan, Saint-Suliac and Rochefort-en-Terre. The city of Rennes, offers outstanding farmers market on Saturdays, and is the second biggest market in France. The mysterious menhirs and Dolmens literally found in thousands across the region, which leaned witness to the Neolithic times, are where druids performed rituals to mother earth.",
      dropcap: "",
      quote: "Brittany is such a beautiful part of France overlooked by Americans. I highly recommend Dinard, the Hotel Castelbrac in Dinard, and the private boat tour of the Emerald Coast that Philip and Sarah arranged. They secured one of the best guides we have ever had in our travels!",
      quoteAuthor: "",
      gridImages: [
        "https://images.unsplash.com/photo-1551310644-fa057bd6602c?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1493246318656-5bbd4afb09b7?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1549918830-11ec21609f98?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1533501064032-4742618641a0?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80"
      ],
      hotelSectionTitle: "Our Recommended Hotels in Brittany",
      hotelSectionDesc: "As to be expected within a region 'off the beaten track', the choice of hotels in Brittany is smaller than for some more popular regions, but that doesn't mean that they're any less interesting! Prior to recommending, our team stays and does repeat visits to ensure the property meets our client's needs.",
      hotels: [
        { name: "Castelbrac", subtitle: "Dinard", img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80" },
        { name: "Château de Locguénolé", subtitle: "Hennebont", img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80" },
        { name: "Grand Hôtel de Dinard", subtitle: "Dinard", img: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80" }
      ]
    },
    "rencontres-ethniques": {
      layout: 'premium',
      title: "Burgundy",
      bg: '#c2af8a', // Ochre/Gold background from screenshot
      heroImg: "https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea?auto=format&fit=crop&w=2000&q=80",
      subtitle: "Discover the world's finest wine domain with a local expert team",
      buttonText: "PLAN YOUR TRIP",
      introText: "One of French Promise founder, Philip Haslett’s expertise areas are fine wine tasting tours in Burgundy. Having spent some of the most important years of his career as a tour guide, balloon pilot, and barge captain in Burgundy, we can confidently say you’d be hard-pressed to find someone who knows the region better than Philip. Whether it’s searching for the famous Bourgogne truffle through wild forests with trained dogs or taking an iconic Citroën 2CV driving tour of the local vineyards, Philip and his team of local guides will orchestrate every detail.",
      mainText: "Delight in hand-delivered picnics along your journey or private wine cave in a famous chateau. Discover Burgundy’s gastronomy with hands-on cooking classes with Michelin-starred chefs in the prestigious local areas of Beaune and Meursault or on a private chateau. Whether you prefer exploring by car, biking through vineyards, cruising on a luxury hotel barge, or in a hot air balloon, Burgundy has something special for everyone. It can be part of a journey to the South of France, a weeklong adventure, or a combination of Champagne or Loire Valley road trips.",
      secondaryText: "And let’s not forget about Beaune! Not only can you discover the world’s finest wines through the wine trail, but also its historical and cultural heritage from the famous Hospices de Beaune and its Hotel Dieu, the Palace of the Dukes of Burgundy, the Chartreuse Clos de Vougeot, or the Chateau of Cormatin and the Cluny Abbeys.",
      dropcap: "D",
      dropcapColor: "white",
      quote: "The winemakers here aren't as visitor-ready as those in Champagne or even Bordeaux. The farmers are out turning up in a BMW - they're in the vineyard, so it doesn't matter who you are, because they don't have anything extra to sell. Yesterday, I ended my two-day wine tour in a private cellar in the Côte de Beaune, alone with my clients, smelling the wine from the barrel and feeling still a bit festive... - Jennifer, Philip Haslett featured in Town and Country Magazine feature about Burgundy",
      quoteAuthor: "",
      gridImages: [
        "https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1504275107627-0c2ba7a43dba?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1549918830-11ec21609f98?auto=format&fit=crop&w=800&q=80"
      ],
      hotelSectionTitle: "Our Top Picks For Burgundy, Beaune & Saint-Émilion Hotels",
      hotelSectionDesc: "Discover just a few of our favorite luxury hotels in the Burgundy wine region. Our French Promise team routinely visits and inspects each property personally for our discerning clients.",
      hotels: [
        { name: "Château de la Commaraine", subtitle: "Pommard", img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80" },
        { name: "COMO Le Montrachet Hotel", subtitle: "Puligny-Montrachet", img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80" },
        { name: "Hostellerie de Levernois", subtitle: "Levernois", img: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80" }
      ],
      gridFirst: true // Special layout flag for Burgundy where grid comes before text
    },
    "en-famille-lune-de-miel": {
      layout: 'premium',
      title: "A Rich History",
      bg: '#edeff1',
      heroImg: "https://www.shutterstock.com/image-photo/wet-asphalt-road-city-skyline-600nw-2717340977.jpg",
      subtitle: "Discover the region's natural beauty, hilltop villages, caves and rich history",
      buttonText: "BOOK YOUR VOYAGE",
      mainText: "Dordogne is part of the southwestern Périgord region of France, set between the verdant Loire Valley and the Pyrénées mountains. Dordogne is rich in prehistoric history with its 'grottes' and cave paintings located in the Vézère Valley, including the UNESCO World Heritage Site, Lascaux, discovered only in 1940. There are actually 15 prehistoric sites in the Vézère Valley mostly in and around Les Eyzies-de-Tayac-Sireuil, which has been called the 'Capital of Prehistory' which is a dream of a trip for archaeology lovers and families alike.",
      secondaryText: "The town of Périgueux is home to the Cathédrale St-Front, with its 5 domes, and the Vesunna Museum, built around Roman ruins. The charming, medieval market town of Sarlat-la-Canéda is a great base for exploring this rich, cultural region filled with off-the-beaten path châteaux, beautiful riverside villages and natural beauty. And for the gastronomy lovers, do not miss our classic Southwest gaudry gourmet tours and culinary classes. For nature lovers, canoe and picnic along the Dordogne for unique views and access to Dordogne's most beautiful villages.",
      dropcap: "D",
      dropcapColor: "black",
      quote: "We had an amazing trip to the Dordogne in late September. Philip Haslett, with his associate Evane, planned a fabulous itinerary that included all of the villages, castles, restaurants and historic sites on our wish list. We were based in Sarlat, and had daily excursions with our private guide / driver, Sandra. I must add that Sandra was an outstanding guide, so personable and incredibly knowledgeable about the area. We loved Sandra's 'add-on' suggestions and would not hesitate to utilize the entire team on another trip.",
      quoteAuthor: "- Rhonda, 2021",
      gridImages: [
        "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1518136247453-74e7b5265980?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1551310644-fa057bd6602c?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1472712739516-7ad2b786e1f7?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1493246318656-5bbd4afb09b7?auto=format&fit=crop&w=800&q=80"
      ],
      hotelSectionTitle: "OUR DORDOGNE HOTEL SELECTIONS",
      hotelSectionDesc: "Discover just a few of our favorite luxury hotels in Dordogne. Our French Promise team routinely visits and inspects each property personally for our discerning clients.",
      hotelBg: '#c2af8a',
      hotels: [
        { name: "Château De La Treyne", img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80" },
        { name: "Domaine Des Etangs", img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80" },
        { name: "Le Moulin De L'Abbaye", img: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80" }
      ]
    },
    "nature-et-vie-sauvage": {
      layout: 'premium',
      title: "The Slow Life",
      bg: '#edeff1',
      heroImg: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=2000&q=80", // Forest/Nature vibe
      subtitle: "Discover our authentic luxury of Provence, away from the crowds",
      buttonText: "LIVE THE DREAM",
      mainText: "Our French Promise offices are located in the historic Mazarin district of chic, Aix-en-Provence, where we have established our reputation over the past 30 years as the Provence Luxury Travel specialist, with our first travel brands: Kairos and Unique Provence. Aix-en-Provence is the historical capital of Provence brimming with beautiful markets and is considered by many to be the most elegant town in the region. It was founded by the Romans in 122 BC when Caius Sextius Calvinus established a garrison here. It was given the name of 'Aquae Sextiae' after the conquering invader and the local sources which has made it famous as a spa town.",
      secondaryText: "From Aix-en-Provence, you can quickly access the stunning calanques and old fishing ports of Cassis and La Ciotat, or the charming Luberon hilltop villages to the north. Or head west to the wild beaches and horses of the Camargue, while stopping in to explore the burgeoning art scene in Arles. Whether it's visiting the culturally rich cities of: Arles, Aix or Avignon, or tailored wine tours and tastings at reputable domaines in Châteauneuf-du-Pape, Cassis or Bandol, we'll develop a tailored tour just for you. Our vetted 'Circle of Trust' network allows our clients the most intimate, highly curated experiences and itineraries in this incredibly beautiful region. We are the leading luxury travel specialists in Provence in the creation of luxury itineraries, day tours and unique travel experiences. Contact us and we'll design your very own personalised made-to-measure vacation in one of France's most breath-taking destinations.",
      dropcap: "O",
      dropcapColor: "black",
      quote: "Philip planned a terrific trip which wound up being one of the best weeks of our entire lives! He listened very carefully to our list of wants and desires and the result was a perfectly paced yet action-packed week. We visited wineries, explored several old and charming towns, ate in 3-Michelin-star restaurants as well as fantastic low key cafes, shopped and took a hike in the footsteps of Van Gogh. We have fallen in love with Provence and will definitely going back. I am looking forward to seeing Philip's plan for our next trip there!",
      quoteAuthor: "",
      gridImages: [
        "https://images.unsplash.com/photo-1565011523534-707a4fe1da8a?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1505852679233-d9fd70aff56d?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1518136247453-74e7b5265980?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1551310644-fa057bd6602c?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1472712739516-7ad2b786e1f7?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80"
      ],
      hotelSectionTitle: "OUR FAVORITE PROVENCE HOTELS",
      hotelSectionDesc: "Discover just a few of our favorite luxury hotels in the breathtaking Provence region. Our French Promise team routinely visits and inspects each property personally for our discerning clients.",
      hotels: [
        { name: "Bastide De Marie", img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80" },
        { name: "Baumaniere", img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80" },
        { name: "Château De Berne", img: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80" }
      ]
    }
  };

  const data = destinationData[normalizedId] || {
    layout: 'standard',
    title: normalizedId.replace(/-/g, ' ').toUpperCase(),
    heroImg: "https://images.unsplash.com/photo-1548013146-72479768bbaa?auto=format&fit=crop&w=2000&q=80",
    content: { inclusions: [], exclusions: [], information: "" }
  };

  if (data.layout === 'premium') {
    return (
      <div className="pt-0 bg-white min-h-screen">
        <SEO 
          pageType="destination-detail" 
          customSlug={normalizedId} 
          dynamicData={{ 
            title: data.title, 
            description: data.subtitle || data.mainText?.substring(0, 160), 
            keywords: `${data.title}, voyage inde, indeora`, 
            image: data.heroImg, 
            canonicalUrl: `https://indeoravoyages.com/destinations/${normalizedId}` 
          }} 
        />
        <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0"><img src={data.heroImg} alt={data.title} className="w-full h-full object-cover" key={data.heroImg} /><div className="absolute inset-0 bg-black/20"></div></div>
          <div className="relative z-10 text-center text-white pt-32 md:pt-40 w-full max-w-[1440px] mx-auto px-[40px]">
            <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-[100px] font-serif italic mb-6 drop-shadow-2xl leading-none">{data.title}</h1>
            <p className="text-[12px] md:text-[14px] font-bold tracking-[0.05em] mb-12 max-w-4xl mx-auto opacity-90 leading-relaxed drop-shadow-md">{data.subtitle}</p>
            <div className="pt-4"><button className="bg-black text-white text-[10px] tracking-[0.3em] font-bold py-5 px-12 border border-white/60 hover:bg-white hover:text-black transition-all duration-500 uppercase">{data.buttonText}</button></div>
          </div>
        </section>

        {data.introText && (
          <section className="py-16 md:py-24 px-6 md:px-24 bg-white text-center">
            <p className="max-w-4xl mx-auto text-lg md:text-[20px] text-gray-700 leading-relaxed italic font-serif">{data.introText}</p>
          </section>
        )}

        {data.gridFirst && data.gridImages && (
          <section className="pt-20 pb-0 px-6" style={{ backgroundColor: data.bg }}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-[1440px] mx-auto px-[40px]">
              {data.gridImages.map((img, i) => (
                <div key={i} className="aspect-square overflow-hidden shadow-sm hover:shadow-xl transition-all duration-700 group"><img src={img} alt="Lifestyle" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" /></div>
              ))}
            </div>
          </section>
        )}

        <section className="py-20 md:py-40 px-6 md:px-24" style={{ backgroundColor: data.bg }}>
          <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start w-full max-w-[1440px] mx-auto px-[40px]">
            <div className={`space-y-8 md:space-y-12 leading-relaxed text-base md:text-[17px] font-medium ${data.bg === '#c2af8a' ? 'text-white' : 'text-gray-800'}`}>
              <div className="relative overflow-hidden">
                {data.dropcap && <span className={`float-left text-7xl md:text-[180px] font-serif italic mr-6 md:mr-8 mt-6 md:mt-10 leading-none select-none ${data.dropcapColor === 'black' ? 'text-black opacity-100' : 'text-white'}`}>{data.dropcap}</span>}
                <p className={data.dropcap ? "pt-8 md:pt-12" : ""}>{data.mainText}</p>
              </div>
              <p>{data.secondaryText}</p>
            </div>
            <div className="relative flex flex-col items-center text-center px-4 md:px-6 pt-12 md:pt-24 border-t md:border-t-0 md:border-l border-white/20">
              <svg className={`w-12 h-12 md:w-16 md:h-16 mb-8 md:mb-12 opacity-80 ${data.bg === '#c2af8a' ? 'text-white' : 'text-[#A88B23]'}`} fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C14.9124 8 14.017 7.10457 14.017 6V3L14.017 3H21.017V15C21.017 18.3137 18.3307 21 15.017 21H14.017ZM3.017 21L3.017 18C3.017 16.8954 3.91243 16 5.017 16H8.017C8.56928 16 9.017 15.5523 9.017 15V9C9.017 8.44772 8.56928 8 8.017 8H5.017C3.91243 8 3.017 7.10457 3.017 6V3L3.017 3H10.017V15C10.017 18.3137 7.33072 21 4.017 21H3.017Z" /></svg>
              <p className={`text-xl md:text-3xl font-serif italic leading-relaxed ${data.bg === '#c2af8a' ? 'text-white' : 'text-gray-900'}`}>"{data.quote}"</p>
              {data.quoteAuthor && <p className="mt-8 md:mt-12 text-[12px] md:text-[13px] font-bold tracking-[0.3em] uppercase">{data.quoteAuthor}</p>}
            </div>
          </div>
        </section>

        {!data.gridFirst && data.gridImages && (
          <section className="pb-32 px-6 bg-white">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-[1440px] mx-auto px-[40px]">
              {data.gridImages.map((img, i) => (
                <div key={i} className="aspect-square overflow-hidden shadow-sm hover:shadow-xl transition-all duration-700 group"><img src={img} alt="Lifestyle" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" /></div>
              ))}
            </div>
          </section>
        )}

        {data.hotels && (
          <section className="py-20 md:py-32 px-6 border-t border-gray-100" style={{ backgroundColor: data.hotelBg || 'white' }}>
            <div className="text-center w-full max-w-[1440px] mx-auto px-[40px]">
              <div className={`flex justify-center mb-8 md:mb-10 ${data.hotelBg === '#c2af8a' ? 'text-white/40' : 'text-[#A88B23]'} opacity-60 tracking-[0.5em] text-xl md:text-2xl font-light select-none`}>//////////</div>
              <h2 className={`text-3xl md:text-5xl font-serif italic mb-8 md:mb-12 tracking-wide leading-tight px-4 max-w-4xl mx-auto ${data.hotelBg === '#c2af8a' ? 'text-white' : 'text-gray-800'}`}>{data.hotelSectionTitle}</h2>
              {data.hotelSectionDesc && <p className={`text-sm md:text-[16px] max-w-4xl mx-auto mb-16 md:mb-20 leading-relaxed px-4 ${data.hotelBg === '#c2af8a' ? 'text-white/80' : 'text-gray-600'}`}>{data.hotelSectionDesc}</p>}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-20 px-6">
                {data.hotels.map((hotel, i) => (
                  <div key={i} className="flex flex-col items-center group cursor-pointer">
                    <div className="aspect-[4/3] w-full overflow-hidden mb-8 shadow-sm hover:shadow-2xl transition-all duration-700"><img src={hotel.img} alt={hotel.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" /></div>
                    <div className="space-y-2">
                      <h4 className={`text-[18px] md:text-[22px] font-serif italic group-hover:text-[#A88B23] transition-colors ${data.hotelBg === '#c2af8a' ? 'text-white' : 'text-gray-800'}`}>{hotel.name}</h4>
                      {hotel.subtitle && <p className={`text-[12px] font-medium tracking-[0.1em] uppercase ${data.hotelBg === '#c2af8a' ? 'text-white/50' : 'text-gray-400'}`}>{hotel.subtitle}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        <InteractiveMap />
        <EnviesGrid />
        <EspritIndeora />

        <Footer />
      </div>
    );
  }

  return (
    <div className="pt-32 bg-white min-h-screen font-sans text-center">
      <SEO 
        pageType="destination-detail" 
        customSlug={normalizedId} 
        dynamicData={{ 
          title: data.title, 
          description: data.subtitle || data.title, 
          keywords: `${data.title}, voyage inde, indeora`, 
          image: data.heroImg, 
          canonicalUrl: `https://indeoravoyages.com/destinations/${normalizedId}` 
        }} 
      />
      <section className="relative h-[65vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0"><img src={data.heroImg} alt={data.title} className="w-full h-full object-cover" /><div className="absolute inset-0 bg-black/30"></div></div>
        <div className="relative z-10 px-6"><h1 className="text-white text-5xl md:text-7xl font-bold">{data.title}</h1></div>
      </section>
      <InteractiveMap />
      <EnviesGrid />
      <EspritIndeora />

      <Footer />
    </div>
  );
};

export default DestinationDetail;
