const express = require("express");
const router = express.Router();
const metaController = require("../controllers/metaController");

router.get("/", metaController.getAllMeta);
router.get("/page/:pageUrl", metaController.getMetaByPageUrl);
router.get("/slug/:slug", metaController.getMetaBySlug);
router.post("/", metaController.createMeta);
router.put("/:id", metaController.updateMeta);
router.delete("/:id", metaController.deleteMeta);

module.exports = router;
