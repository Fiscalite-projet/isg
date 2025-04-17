const express = require("express");
const router = express.Router();
const Steps = require("../models/Steps");
const UserSelection = require("../models/UserSelection");

// Récupérer toutes les étapes (Formes, Secteurs, Zones)
exports.GetSteps = async (req, res) => {
  try {
    const steps = await Steps.findOne();
    res.json(steps);
  } catch (error) {
    res.status(500).json({ message: "Erreur serveur", error });
  }
};


// Enregistrer le formulaire utilisateur
exports.AddForm = async (req, res) => {
  try {
    const { forme, subType, subSubType, secteur, zone, isExonorated, delegation } = req.body;

    if (!forme || !subType || !secteur || !zone || !delegation || typeof isExonorated !== 'boolean') {
      return res.status(400).json({ message: "Tous les champs obligatoires doivent être remplis." });
    }

    // Check if the form already exists
    const existingForm = await UserSelection.findOne({
      forme,
      subType,
      subSubType,
      secteur,
      zone,
      delegation
    });

    if (existingForm) {
      // Update the existing form
      existingForm.isExonorated = isExonorated;
      await existingForm.save();
      return res.status(200).json({ message: "Formulaire mis à jour avec succès !", data: existingForm });
    }

    // Create a new form
    const newSelection = new UserSelection({ forme, subType, subSubType, secteur, zone, delegation, isExonorated });
    await newSelection.save();

    res.status(201).json({ message: "Formulaire enregistré avec succès !", data: newSelection });
  } catch (error) {
    res.status(500).json({ message: "Erreur serveur", error });
  }
};




// Récupérer toutes les soumissions
exports.Allform = async (req, res) => {
  try {
    const selections = await UserSelection.find();
    res.json(selections);
  } catch (error) {
    res.status(500).json({ message: "Erreur serveur", error });
  }
};


