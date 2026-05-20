const express = require("express");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require("./routes/authRoutes");
const blogRoutes = require("./routes/blogRoutes");

const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(cors({
  origin: ["http://localhost:5173", "http://localhost:3000"],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

app.use(express.json());

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
