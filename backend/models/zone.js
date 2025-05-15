const mongoose = require('mongoose');

const zoneSchema = new mongoose.Schema({
  name: {
    type: String,
    enum: ['zone1', 'zone2', 'zone3'], // extensible
    required: true,
    unique: true,
  },
  investmentPrimePercentage: { // ex: 30 (%)
    type: Number,
    required: true,
  },
  investmentMaxAmount: { // ex: 3000000 DT
    type: Number,
    required: true,
  },
  taxExemptionYears: { // ex: 10 ans
    type: Number,
    required: true,
  },
  postExemptionTaxRate: { // ex: 10 (%)
    type: Number,
    required: true,
  },
  socialSecurityExemptionYears: { // ex: 10 ans
    type: Number,
    required: true,
  },
  socialSecurityRate: { // ex: 16.57 (%)
    type: Number,
    default: 16.57,
  },
  otherBenefits: [ // tableau d'avantages supplémentaires (optionnel)
    {
      type: String
    }
  ]
});

module.exports = mongoose.model('Zone', zoneSchema);
