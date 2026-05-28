const express = require("express");
const router = express.Router();
const blogPageController = require("../controllers/blogPageController");

router.get("/", blogPageController.getAll);
router.post("/", blogPageController.create);
router.put("/:id", blogPageController.update);
router.delete("/:id", blogPageController.remove);

module.exports = router;
