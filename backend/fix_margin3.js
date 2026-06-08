const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "../react-vite-tailwind/src/pages/SpiritualVaranasi.jsx");
let content = fs.readFileSync(filePath, "utf8");

const rightColIndex = content.indexOf("{/* Right Column: Flanking cards for all Subsections */}");
if (rightColIndex !== -1) {
  let leftPart = content.substring(0, rightColIndex);
  let rightPart = content.substring(rightColIndex);
  
  // Replace mt-[620px] with mt-[670px]
  rightPart = rightPart.replace(/lg:mt-\[620px\]/, "lg:mt-[670px]");
  
  // If we had checked out HEAD again, it would be 685px
  rightPart = rightPart.replace(/lg:mt-\[685px\]/, "lg:mt-[670px]");
  
  fs.writeFileSync(filePath, leftPart + rightPart, "utf8");
  console.log("Margin fixed to 670px");
}
