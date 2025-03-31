const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const User = require('../models/user'); // Correction ici

// Route pour ajouter un nouvel utilisateur
router.post('/signUp', async function(req, res) {
  try {
    const { email, password, confirmPassword } = req.body;

    // Vérification des champs requis
    if ( !email || !password || !confirmPassword) {
      return res.status(400).json({ error: "Tous les champs sont obligatoires" });
    }

    // Vérifier si l'email existe déjà dans la base de données
    const existingUser = await User.findOne({ email: email });
    if (existingUser) {
      return res.status(400).json({ error: "L'adresse e-mail existe déjà" });
    }

    // Vérifier si les mots de passe correspondent
    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Les mots de passe ne correspondent pas" });
    }

    // Hasher le mot de passe
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);

    // Créer un nouvel utilisateur
    const newUser = new User({ email, password: hashedPassword });

    // Sauvegarde de l'utilisateur
    await newUser.save();

    // Configuration de Nodemailer pour envoyer un e-mail de confirmation
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'PROJETGESTION4@gmail.com',
        pass: 'ckfzldjnoalhsago'
      }
    });

    const mailOptions = {
      from: 'PROJETGESTION4@gmail.com',
      to: newUser.email,
      subject: 'Bienvenue sur notre plateforme',
      text:` Votre compte a été créé avec succès. Bienvenue ${newUser}!`
    };

    await transporter.sendMail(mailOptions);

    // Réponse de succès
    res.status(201).json({ message: "Utilisateur créé avec succès" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erreur interne du serveur" });
  }
});


// Route de connexion (login)
router.post("/connexion", async (req, res) => {
    try {
      const { email, password } = req.body;
  
      // Vérifier si les champs sont remplis
      if (!email || !password) {
        return res.status(400).json({ message: "Champs vides !" });
      }
  
      // Rechercher l'utilisateur correspondant à l'adresse e-mail fournie
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(404).json({ message: "Adresse email introuvable !" });
      }
  
      // Comparer le mot de passe fourni avec le mot de passe haché enregistré
      const valid = await bcrypt.compare(password, user.password);
      if (!valid) {
        return res.status(401).json({ message: "Mot de passe incorrect !" });
      }
  
      // Créer un token JWT
      const token = jwt.sign(
        { userId: user._id, email: user.email },
        process.env.JWT_SECRET || "123456789", 
        { expiresIn: "7d" } // Durée de validité du token (7 jours)
      );
  
      res.status(200).json({ token });
  
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Erreur serveur !" });
    }
  });
  
module.exports = router;