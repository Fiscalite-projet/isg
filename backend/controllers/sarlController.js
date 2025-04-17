const express = require("express");
const router = express.Router();
const CompanyForm = require("../models/sarl"); 

// Récupérer toutes les étapes (Formes, Secteurs, Zones)



// Enregistrer le formulaire utilisateur
exports.addSarl = async (req, res) => {
    try {
      // Extract data from request body
      const formData = req.body;
      
      // Validate required fields
      if (!formData.nomsociete || !formData.objetsociete) {
        return res.status(400).json({
          success: false,
          message: "Le nom et l'objet de la société sont obligatoires"
        });
      }
      
      // Create new SARL document
      const newSarl = new CompanyForm(formData);
      
      // Save to database
      const savedSarl = await newSarl.save();
      
      // Return success response with saved data
      res.status(201).json({
        success: true,
        message: "SARL ajoutée avec succès",
        data: savedSarl
      });
      
    } catch (error) {
      // Handle validation errors separately for better error messages
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
  

// Récupérer toutes les sarl
exports.getAllSarls = async (req, res) => {
    try {
      const sarls = await CompanyForm.find().sort({ createdAt: -1 });
      
      res.status(200).json({
        success: true,
        count: sarls.length,
        data: sarls
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Erreur serveur",
        error: error.message
      });
    }
  };

