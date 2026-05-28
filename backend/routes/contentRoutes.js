const express = require("express");
const contentController = require("../controllers/contentController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/", contentController.getAll);
router.get("/:id", contentController.getOne);
router.post("/", authMiddleware, contentController.create);
router.put("/:id", authMiddleware, contentController.update);
router.delete("/:id", authMiddleware, contentController.delete);

module.exports = router;
