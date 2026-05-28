const express = require("express");
const blogCategoryController = require("../controllers/blogCategoryController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/", blogCategoryController.getAll);
router.get("/:id", blogCategoryController.getOne);
router.post("/", authMiddleware, blogCategoryController.create);
router.put("/:id", authMiddleware, blogCategoryController.update);
router.delete("/:id", authMiddleware, blogCategoryController.delete);

module.exports = router;
