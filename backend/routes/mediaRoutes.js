const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const fs = require("fs");

const uploadDir = path.join(__dirname, "../uploads");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + Math.round(Math.random() * 1E9) + path.extname(file.originalname));
  }
});

const upload = multer({
  storage,
  limits: { fileSize: 50 * 1024 * 1024 }
});

router.post("/upload", upload.array("files", 20), (req, res) => {
  if (!req.files || req.files.length === 0) {
    // Fallback to single file for backward compatibility if needed, or just handle single as array
    if (req.file) {
      req.files = [req.file];
    } else {
      return res.status(400).json({ success: false, message: "No files uploaded" });
    }
  }
  
  const fileUrls = req.files.map(file => {
    return `${req.protocol}://${req.get("host")}/uploads/${file.filename}`;
  });
  
  res.json({ success: true, message: "Files uploaded successfully", urls: fileUrls });
});

router.get("/", (req, res) => {
  fs.readdir(uploadDir, (err, files) => {
    if (err) {
      return res.status(500).json({ success: false, message: "Could not read files" });
    }
    const fileList = files.map(file => ({
      name: file,
      url: `${req.protocol}://${req.get("host")}/uploads/${file}`
    }));
    res.json({ success: true, data: fileList });
  });
});

router.delete("/:filename", (req, res) => {
  const safeName = path.basename(req.params.filename);
  const filePath = path.join(uploadDir, safeName);
  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
    res.json({ success: true, message: "File deleted" });
  } else {
    res.status(404).json({ success: false, message: "File not found" });
  }
});

module.exports = router;
