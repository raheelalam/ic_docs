const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

// Input directories (you can add as many directories as needed)
const inputDirs = [
  path.join(__dirname, "docs/assets"),
  path.join(__dirname, "docs/data-residency-as-a-service/search_images"),
  path.join(__dirname, "static/img"),
];

// Output directory where converted WebP files will be saved
const outputDir = path.join(__dirname, "static/webp");

// Image formats to convert
const formats = [".jpg", ".jpeg", ".png"];

// Function to process the directory
function processDir(inputDir) {
  fs.readdirSync(inputDir).forEach((file) => {
    const fullPath = path.join(inputDir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      processDir(fullPath); // Recurse into subfolders
    } else {
      const ext = path.extname(file).toLowerCase();

      if (formats.includes(ext)) {
        const fileNameWithoutExt = path.basename(file, ext);
        const outputFile = path.join(outputDir, fileNameWithoutExt + ".webp"); // Save in root of outputDir

        // Ensure the output directory exists
        if (!fs.existsSync(outputDir)) {
          fs.mkdirSync(outputDir, { recursive: true });
        }

        // Convert and save
        sharp(fullPath)
          .webp({ quality: 80 })
          .toFile(outputFile)
          .then(() => console.log(`Converted ${file} -> ${outputFile}`))
          .catch((err) => console.error(`Error converting ${file}:`, err));
      }
    }
  });
}

// Start processing
inputDirs.forEach((inputDir) => {
  console.log(`Processing directory: ${inputDir}`);
  processDir(inputDir);
});
