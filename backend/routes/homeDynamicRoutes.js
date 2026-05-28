const express = require("express");
const router = express.Router();
const controller = require("../controllers/homeDynamicController");

// Admin routes (would normally be protected by authMiddleware)
router.get("/admin/sections", controller.getAllSections);
router.post("/admin/sections", controller.addSection);
router.put("/admin/sections/:id", controller.updateSection);
router.delete("/admin/sections/:id", controller.deleteSection);
router.put("/admin/sections/:section_id/theme", controller.updateTheme);
router.post("/admin/sections/reorder", controller.updateSectionOrder);

// Items CRUD
router.post("/admin/sections/:section_id/items", controller.addSectionItem);
router.put("/admin/items/:itemId", controller.updateSectionItem);
router.delete("/admin/items/:itemId", controller.deleteSectionItem);

// Public API for frontend
router.get("/public/sections", controller.getPublicSections);

module.exports = router;
