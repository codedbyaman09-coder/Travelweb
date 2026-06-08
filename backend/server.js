const express = require("express");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

// Route imports
const authRoutes = require("./routes/authRoutes");
const blogRoutes = require("./routes/blogRoutes");
const blogCategoryRoutes = require("./routes/blogCategoryRoutes");
const destinationRoutes = require("./routes/destinationRoutes");
const inquiryRoutes = require("./routes/inquiryRoutes");
const itineraryRoutes = require("./routes/itineraryRoutes");
const faqRoutes = require("./routes/faqRoutes");
const userRoutes = require("./routes/userRoutes");
const settingRoutes = require("./routes/settingRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");
const mediaRoutes = require("./routes/mediaRoutes");
const seoRoutes = require("./routes/seoRoutes");
const aboutRoutes = require("./routes/aboutRoutes");
const yogaRoutes = require("./routes/yogaRoutes");
const contentRoutes = require("./routes/contentRoutes");
const homeDynamicRoutes = require("./routes/homeDynamicRoutes");
const contactPageRoutes = require("./routes/contactPageRoutes");
const faqPageRoutes = require("./routes/faqPageRoutes");
const blogPageRoutes = require("./routes/blogPageRoutes");
const destinationsPageRoutes = require("./routes/destinationsPageRoutes");
const metaRoutes = require("./routes/metaRoutes");
const cookieConsentRoutes = require("./routes/cookieConsentRoutes");
const contactRapideRoutes = require("./routes/contactRapideRoutes");

const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(
  cors({
    origin: process.env.CORS_ORIGIN || true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true
  })
);

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Test route
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Indeora backend server is running smoothly."
  });
});

// App routes
app.use("/api/auth", authRoutes);
app.use("/api/blogs", blogRoutes);
app.use("/api/blog-categories", blogCategoryRoutes);
app.use("/api/destinations", destinationRoutes);
app.use("/api/inquiries", inquiryRoutes);
app.use("/api/itineraries", itineraryRoutes);
app.use("/api/faqs", faqRoutes);
app.use("/api/users", userRoutes);
app.use("/api/settings", settingRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/media", mediaRoutes);
app.use("/api/seo", seoRoutes);
app.use("/api/about-sections", aboutRoutes);
app.use("/api/yogas", yogaRoutes);
app.use("/api/content", contentRoutes);
app.use("/api/home-dynamic", homeDynamicRoutes);
app.use("/api/contact-page", contactPageRoutes);
app.use("/api/faq-page", faqPageRoutes);
app.use("/api/blog-page", blogPageRoutes);
app.use("/api/destinations-page", destinationsPageRoutes);
app.use("/api/meta", metaRoutes);
app.use("/api/cookie-consent", cookieConsentRoutes);
app.use("/api/contact-rapide", contactRapideRoutes);

// 404 route
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "API Route not found"
  });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error("Server Error:", err.stack || err.message);
  res.status(500).json({
    success: false,
    message: "Internal server error"
  });
});

// Start server
const server = app.listen(PORT, () => {
  console.log("=================================================");
  console.log("🚀 Indeora Backend Started Successfully");
  console.log(`📡 URL: http://localhost:${PORT}`);
  console.log(`📚 Database Connected: ${process.env.DB_NAME}`);
  console.log("=================================================");
});

// Error handling to prevent crashes
process.on("uncaughtException", (err) => {
  console.error("❌ Uncaught Exception:", err.message);
});

process.on("unhandledRejection", (err) => {
  console.error("❌ Unhandled Rejection:", err.message);
});
