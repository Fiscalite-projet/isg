const Zone = require('../models/zone');

// GET all zones
exports.getAllZones = async (req, res) => {
  try {
    const zones = await Zone.find({});
    res.json(zones);  // Retourne un tableau directement, ce qui est plus standard en REST
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erreur serveur' });
  }
};

// UPDATE a zone
exports.updateZone = async (req, res) => {
    const { id } = req.params;  // Changed from zoneName to id to match route
  
    try {
      // Find by ID and update
      const zone = await Zone.findByIdAndUpdate(
        id,
        req.body,
        { new: true, runValidators: true }  // Returns updated document and runs validation
      );
  
      if (!zone) {
        return res.status(404).json({ message: 'Zone non trouvée' });
      }
  
      res.json({ message: 'Zone mise à jour avec succès', zone });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Erreur lors de la mise à jour', error: err.message });
    }
  };
