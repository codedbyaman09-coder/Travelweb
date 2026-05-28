const express = require('express');
const router = express.Router();
const cookieConsentController = require('../controllers/cookieConsentController');

router.post('/', cookieConsentController.saveConsent);
router.get('/:uuid', cookieConsentController.getConsent);

module.exports = router;
