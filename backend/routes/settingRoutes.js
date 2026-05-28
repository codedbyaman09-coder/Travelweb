const express = require("express");
const router = express.Router();
const settingController = require("../controllers/settingController");

router.get("/", settingController.getAll);
router.post("/", settingController.update);

module.exports = router;
