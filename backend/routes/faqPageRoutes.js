const express = require("express");
const router = express.Router();
const faqPageController = require("../controllers/faqPageController");

router.get("/", faqPageController.getAll);
router.post("/", faqPageController.create);
router.put("/:id", faqPageController.update);
router.delete("/:id", faqPageController.remove);

module.exports = router;
