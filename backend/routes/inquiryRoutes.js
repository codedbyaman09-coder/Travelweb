const express = require("express");
const router = express.Router();
const inquiryController = require("../controllers/inquiryController");

router.get("/", inquiryController.getAll);
router.get("/:id", inquiryController.getOne);
router.post("/", inquiryController.create);
router.put("/:id/status", inquiryController.updateStatus);
router.delete("/:id", inquiryController.delete);

module.exports = router;
