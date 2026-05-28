const express = require('express');
const router = express.Router();
const aboutController = require('../controllers/aboutController');

// All routes here will be prepended with /api/abouts
router.get('/', aboutController.getAll);
router.get('/:id', aboutController.getOne);
router.post('/', aboutController.create);
router.put('/:id', aboutController.update);
router.delete('/:id', aboutController.delete);

module.exports = router;
