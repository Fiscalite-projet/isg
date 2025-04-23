const mongoose = require("mongoose");

// SUARL Schema
const suarlSchema = new mongoose.Schema({
  // Informations sur la société
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

  // Informations sur le capital
  capital: {
    type: Number,
    required: true
  },
  parts: {
    type: Number,
    required: true
  },
  valeurpart: {
    type: Number,
    required: true
  },

  // Informations sur le gérant
  gerant_nom: {
    type: String,
    required: true,
    trim: true
  },
  gerant_cin: {
    type: String,
    required: true,
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

// Met à jour le champ updatedAt automatiquement
suarlSchema.pre('save', function (next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model("Suarl", suarlSchema);
