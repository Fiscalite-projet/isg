const express = require('express');
const router = express.Router();
const declarationController = require('../controllers/Declaration');

router.post('/', declarationController.generateExactTemplatePDF);

module.exports = router;