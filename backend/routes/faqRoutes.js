const express = require("express");
const router = express.Router();
const faqController = require("../controllers/faqSystemController");

// Public routes
router.get("/", faqController.getPublicCategories);
router.get("/search", faqController.searchPublicFaqs);
router.get("/slug/:slug", faqController.getPublicCategoryBySlug);

// Admin Routes for Categories
router.get("/admin/categories", faqController.getAdminCategories);
router.post("/admin/categories", faqController.createAdminCategory);
router.put("/admin/categories/reorder", faqController.reorderAdminCategories);
router.put("/admin/categories/:id", faqController.updateAdminCategory);
router.delete("/admin/categories/:id", faqController.deleteAdminCategory);

// Reset Default FAQs
router.post("/admin/reset-defaults", faqController.resetDefaults);

// Admin Routes for Questions
router.get("/admin/categories/:id/questions", faqController.getAdminQuestions);
router.post("/admin/categories/:id/questions", faqController.createAdminQuestion);
router.put("/admin/questions/reorder", faqController.reorderAdminQuestions);
router.put("/admin/questions/:id", faqController.updateAdminQuestion);
router.delete("/admin/questions/:id", faqController.deleteAdminQuestion);

module.exports = router;
