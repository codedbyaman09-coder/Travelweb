const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const authMiddleware = require("../middleware/authMiddleware");

router.get("/", userController.getAll);
router.put("/profile", authMiddleware, userController.updateProfile);
router.put("/change-password", authMiddleware, userController.changePassword);
router.put("/:id", authMiddleware, userController.updateUser);
router.delete("/:id", authMiddleware, userController.delete);

module.exports = router;
