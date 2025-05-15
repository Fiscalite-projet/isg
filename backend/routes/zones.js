const express = require('express');
const router = express.Router();
const zoneController = require('../controllers/zoneController');

router.get('/', zoneController.getAllZones);
router.put('/:id', zoneController.updateZone);

module.exports = router;
