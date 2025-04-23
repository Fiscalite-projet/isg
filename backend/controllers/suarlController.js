const SuarlModel = require("../models/suarl"); // ← Ton modèle SUARL

// ➕ Ajouter une SUARL
exports.addSuarl = async (req, res) => {
  try {
    const formData = req.body;

    // Vérification de base
    if (!formData.nomsociete || !formData.objetsociete) {
      return res.status(400).json({
        success: false,
        message: "Le nom et l'objet de la société sont obligatoires"
      });
    }

    // Création de la SUARL
    const newSuarl = new SuarlModel(formData);
    const savedSuarl = await newSuarl.save();

    res.status(201).json({
      success: true,
      message: "SUARL ajoutée avec succès",
      data: savedSuarl
    });

  } catch (error) {
    if (error.name === "ValidationError") {
      const messages = Object.values(error.errors).map(val => val.message);
      return res.status(400).json({
        success: false,
        message: "Erreur de validation",
        errors: messages
      });
    }

    res.status(500).json({
      success: false,
      message: "Erreur serveur",
      error: error.message
    });
  }
};

// 📄 Récupérer toutes les SUARL
exports.getAllSuarl = async (req, res) => {
  try {
    const suarls = await SuarlModel.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: suarls.length,
      data: suarls
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Erreur serveur",
      error: error.message
    });
  }
};
