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
    const { forme, subType, subSubType, secteur, zone } = req.body;

    if (!forme || !subType || !secteur || !zone) {
      return res.status(400).json({ message: "Tous les champs obligatoires doivent être remplis." });
    }

    const newSelection = new UserSelection({ forme, subType, subSubType, secteur, zone });
    await newSelection.save();

    res.status(201).json({ message: " Formulaire enregistré avec succès !", data: newSelection });
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


