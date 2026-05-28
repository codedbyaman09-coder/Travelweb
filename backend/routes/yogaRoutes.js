const express = require("express");
const router = express.Router();
const yogaController = require("../controllers/yogaController");

router.get("/", yogaController.getAll);
router.get("/:id", yogaController.getOne);
router.post("/", yogaController.create);
router.put("/:id", yogaController.update);
router.delete("/:id", yogaController.delete);

module.exports = router;
