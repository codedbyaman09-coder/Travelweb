const express = require("express");
const router = express.Router();
const destinationsPageController = require("../controllers/destinationsPageController");

router.get("/", destinationsPageController.getAll);
router.post("/", destinationsPageController.create);
router.put("/:id", destinationsPageController.update);
router.delete("/:id", destinationsPageController.remove);

module.exports = router;
