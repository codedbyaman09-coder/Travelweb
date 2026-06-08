const fs = require('fs');

const filePath = '../react-vite-tailwind/src/pages/Faq.jsx';
let content = fs.readFileSync(filePath, 'utf8');

// 1. Change FaqCategoryCards to accept cards prop, and remove the huge cards array
content = content.replace(
  /const FaqCategoryCards = \(\) => \{\s*const \[selectedCard, setSelectedCard\] = useState\(null\);\s*const \[openIndex, setOpenIndex\] = useState\(0\);\s*const \[showAll, setShowAll\] = useState\(false\);\s*const cards = \[[\s\S]*?\];\s*const openPopup = \(card\) => \{/,
  `const FaqCategoryCards = ({ cards }) => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [openIndex, setOpenIndex] = useState(0);
  const [showAll, setShowAll] = useState(false);

  const openPopup = (card) => {`
);

// 2. We need to pass cards to FaqCategoryCards in the main component.
// In Faq(), we need state for faqs
content = content.replace(
  /const \[config, setConfig\] = useState\(DEFAULT_CONFIG\);\s*const \[loading, setLoading\] = useState\(true\);\s*const \[searchTerm, setSearchTerm\] = useState\(""\);/,
  `const [config, setConfig] = useState(DEFAULT_CONFIG);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [faqs, setFaqs] = useState([]);`
);

// 3. Update the fetch in Faq() to also fetch faqs
content = content.replace(
  /const configRes = await fetch\("http:\/\/127\.0\.0\.1:8000\/api\/faq-page"\)\.then\(\s*\(res\) => res\.json\(\)\s*\);/,
  `const [configRes, faqsRes] = await Promise.all([
          fetch("http://127.0.0.1:8000/api/faq-page").then((res) => res.json()),
          fetch("http://127.0.0.1:8000/api/faqs").then((res) => res.json())
        ]);
        
        if (faqsRes && faqsRes.success) {
          // Format faqs to match the structure the UI expects
          const formattedCards = faqsRes.data.map((cat, index) => ({
            id: cat.id,
            no: cat.badge_number || String(index + 1).padStart(2, "0"),
            title: cat.title,
            questionsCount: \`\${cat.active_questions_count || 0} questions\`,
            img: cat.image,
            color: index % 2 === 0 ? "#1f6b3f" : "#4b7d33", // Fallback colors if none in db
            desc: cat.description,
            slug: cat.slug,
            popupQuestions: [] // Will fetch on demand or we can just fetch all at once. The api/faqs currently doesn't return questions for performance, let's fetch them on demand. Wait, the old cards had them.
          }));
          setFaqs(formattedCards);
        }`
);

fs.writeFileSync(filePath, content, 'utf8');
console.log('Faq.jsx updated successfully');
