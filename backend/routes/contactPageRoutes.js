const express = require("express");
const router = express.Router();
const contactPageController = require("../controllers/contactPageController");

router.get("/", contactPageController.getAll);
router.post("/", contactPageController.create);
router.put("/:id", contactPageController.update);
router.delete("/:id", contactPageController.remove);

module.exports = router;
