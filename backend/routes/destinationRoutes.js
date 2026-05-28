const express = require("express");
const router = express.Router();
const destinationController = require("../controllers/destinationController");
// Assuming there's an auth middleware, we could use it here.
// const { protect } = require("../middleware/authMiddleware");

router.get("/", destinationController.getAll);
router.get("/:id", destinationController.getOne);
router.post("/", destinationController.create);
router.put("/:id", destinationController.update);
router.delete("/:id", destinationController.delete);

module.exports = router;
