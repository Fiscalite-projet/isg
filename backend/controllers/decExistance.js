const FormData = require('../models/decExistance');

// Create new form data
exports.createFormData = async (req, res) => {
  try {
    const formData = new FormData(req.body);
    const savedForm = await formData.save();
    res.status(201).json(savedForm);
  } catch (err) {
    res.status(400).json({ error: 'Error saving form data', details: err.message });
  }
};

// Get all form entries
exports.getAllFormData = async (req, res) => {
  try {
    const forms = await FormData.find();
    res.status(200).json(forms);
  } catch (err) {
    res.status(500).json({ error: 'Error retrieving form data', details: err.message });
  }
};

// Get single form by ID
exports.getFormDataById = async (req, res) => {
  try {
    const form = await FormData.findById(req.params.id);
    if (!form) {
      return res.status(404).json({ error: 'Form not found' });
    }
    res.status(200).json(form);
  } catch (err) {
    res.status(500).json({ error: 'Error retrieving form', details: err.message });
  }
};

// Update form data by ID
exports.updateFormData = async (req, res) => {
  try {
    const updatedForm = await FormData.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updatedForm) {
      return res.status(404).json({ error: 'Form not found' });
    }
    res.status(200).json(updatedForm);
  } catch (err) {
    res.status(400).json({ error: 'Error updating form', details: err.message });
  }
};

// Delete form by ID
exports.deleteFormData = async (req, res) => {
  try {
    const deletedForm = await FormData.findByIdAndDelete(req.params.id);
    if (!deletedForm) {
      return res.status(404).json({ error: 'Form not found' });
    }
    res.status(200).json({ message: 'Form deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Error deleting form', details: err.message });
  }
};
