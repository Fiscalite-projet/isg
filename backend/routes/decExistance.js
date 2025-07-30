const express = require('express');
const router = express.Router();
const formDataController = require('../controllers/decExistance');

// @route   POST /api/form-data
// @desc    Create new form entry
router.post('/', formDataController.createFormData);

// @route   GET /api/form-data
// @desc    Get all form entries
router.get('/', formDataController.getAllFormData);

// @route   GET /api/form-data/:id
// @desc    Get a single form entry by ID
router.get('/:id', formDataController.getFormDataById);

// @route   PUT /api/form-data/:id
// @desc    Update a form entry by ID
router.put('/:id', formDataController.updateFormData);

// @route   DELETE /api/form-data/:id
// @desc    Delete a form entry by ID
router.delete('/:id', formDataController.deleteFormData);

module.exports = router;
