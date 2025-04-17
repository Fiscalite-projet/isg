const mongoose = require("mongoose");

// Schema for each associate (associé)
const associeSchema = new mongoose.Schema({
  associe_nom: {
    type: String,
    trim: true
  },
  associe_adresse: {
    type: String,
    trim: true
  },
  associe_cin: {
    type: String,
    trim: true
  },
  associe_parts: {
    type: String,
    trim: true
  }
});

// Main form schema
const formSchema = new mongoose.Schema({
  // Company basic information
  nomsociete: {
    type: String,
    required: true,
    trim: true
  },
  objetsociete: {
    type: String,
    required: true,
    trim: true
  },
  adress: {
    type: String,
    trim: true
  },
  duree: {
    type: String,
    trim: true
  },
  
  // Parts information
  nbrassociee: {
    type: String,
    default: '1'
  },
  valeurpart: {
    type: String,
    trim: true
  },
  
  // Associates information (embedded document array)
  associes: [associeSchema],
  
  // Manager (gérant) information
  gerant_nom: {
    type: String,
    trim: true
  },
  gerant_cin: {
    type: String,
    trim: true
  },
  gerant_adresse: {
    type: String,
    trim: true
  },
  gerant_duree: {
    type: String,
    trim: true
  },
  gerant_pouvoirs: {
    type: String,
    trim: true
  },
  
  // Administrative information
  lieu: {
    type: String,
    trim: true
  },
  date: {
    type: String,
    trim: true
  },
  
  // Timestamps
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

// Update the timestamp on save
formSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model("CompanyForm", formSchema);