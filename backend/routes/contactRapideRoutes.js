const express = require('express');
const router = express.Router();
const contactRapideController = require('../controllers/contactRapideController');

router.post('/send', contactRapideController.sendContactEmail);
router.post('/newsletter', contactRapideController.subscribeNewsletter);

module.exports = router;
