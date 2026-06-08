const fs = require('fs');

const filePath = '../react-vite-tailwind/src/pages/Faq.jsx';
let content = fs.readFileSync(filePath, 'utf8');

// Update popupQuestions mapping
content = content.replace(
  /popupQuestions: \[\] \/\/ Will fetch on demand or we can just fetch all at once\. The api\/faqs currently doesn't return questions for performance, let's fetch them on demand\. Wait, the old cards had them\./,
  `popupQuestions: cat.questions.map(q => ({ q: q.question, a: q.answer }))`
);

// Pass cards prop to FaqCategoryCards
content = content.replace(
  /<FaqCategoryCards \/>/,
  `<FaqCategoryCards cards={faqs} />`
);

fs.writeFileSync(filePath, content, 'utf8');
console.log('Faq.jsx updated for props successfully');
