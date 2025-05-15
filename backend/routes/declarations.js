const express = require('express');
const router = express.Router();
const declarationController = require('../controllers/DecExistance');

router.post('/', declarationController.generateExactTemplatePDF);

module.exports = router;