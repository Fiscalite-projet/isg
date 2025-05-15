const Zone = require('../models/zone');

const seedZones = async () => {
  const existingZones = await Zone.find({});
  if (existingZones.length > 0) {
    console.log('Zones already exist, skipping seeding.');
    return;
  }

  const initialZones = [
    {
      name: 'zone1',
      investmentPrimePercentage: 15,
      investmentMaxAmount: 1500000,
      taxExemptionYears: 5,
      postExemptionTaxRate: 10,
      socialSecurityExemptionYears: 5,
      socialSecurityRate: 16.57,
      otherBenefits: [],
    },
    {
      name: 'zone2',
      investmentPrimePercentage: 30,
      investmentMaxAmount: 3000000,
      taxExemptionYears: 10,
      postExemptionTaxRate: 10,
      socialSecurityExemptionYears: 10,
      socialSecurityRate: 16.57,
      otherBenefits: [
        "Accès prioritaire au foncier industriel",
        "Aide à la formation initiale"
      ],
    },
  ];

  await Zone.insertMany(initialZones);
  console.log('Zones seeded successfully.');
};

module.exports = seedZones;
