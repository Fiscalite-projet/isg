const express = require("express");
const router = express.Router();
const PDFDocument = require('pdfkit');
const CompanyForm = require("../models/sarl"); 
const path = require('path');
const fs = require('fs');

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
      // res.status(201).json({
      //   success: true,
      //   message: "SARL ajoutée avec succès",
      //   data: savedSarl
      // });
      try {
        const sarls = await CompanyForm.find();
    
      
    
        if (sarls.length === 0) {
          return res.status(404).json({ success: false, message: 'No SARL data found.' });
        }
    
        const data = sarls[0];
    
        const tempDir = path.join(__dirname, '../temp');
        if (!fs.existsSync(tempDir)) {
          fs.mkdirSync(tempDir, { recursive: true });
        }
    
        const filePath = path.join(tempDir, `${Date.now()}_sarl.pdf`);
        const writeStream = fs.createWriteStream(filePath);
    
        const doc = new PDFDocument({ margin: 50, size: 'A4' });
        doc.pipe(writeStream);
    
        // Title
        doc.fontSize(16).font('Helvetica-Bold').text(
          'STATUT D\'UNE SOCIÉTÉ À RESPONSABILITÉ LIMITÉE (SARL)', { align: 'center' }
        );
        doc.moveDown(2);
    
        // Article 1 - Forme
        doc.fontSize(12).font('Helvetica-Bold').text('Article 1 : Forme');
        doc.fontSize(11).font('Helvetica').text(
          'Il est formé entre les soussignés une société à responsabilité limitée (SARL), régie par les dispositions du Code des Sociétés Commerciales et par les présents statuts.'
        );
        doc.moveDown();
    
        // Article 2 - Dénomination sociale
        doc.fontSize(12).font('Helvetica-Bold').text('Article 2 : Dénomination sociale');
        doc.fontSize(11).font('Helvetica').text(
          `La société prend la dénomination suivante : ${data.nomsociete}`
        );
        doc.moveDown();
    
        // Article 3 - Objet social
        doc.fontSize(12).font('Helvetica-Bold').text('Article 3 : Objet social');
        doc.fontSize(11).font('Helvetica').text(
          `La société a pour objet : ${data.objetsociete}. Et généralement, toutes opérations industrielles, commerciales, financières, mobilières ou immobilières se rattachant directement ou indirectement à l'objet social.`
        );
        doc.moveDown();
    
        // Article 4 - Siège social
        doc.fontSize(12).font('Helvetica-Bold').text('Article 4 : Siège social');
        doc.fontSize(11).font('Helvetica').text(
          `Le siège social est fixé à : ${data.adress}. Il peut être transféré en tout autre lieu en Tunisie par décision de l'assemblée générale extraordinaire.`
        );
        doc.moveDown();
    
        // Article 5 - Durée
        doc.fontSize(12).font('Helvetica-Bold').text('Article 5 : Durée');
        doc.fontSize(11).font('Helvetica').text(
          `La durée de la société est fixée à ${data.duree} ans, sauf dissolution anticipée ou prorogation décidée conformément à la loi.`
        );
        doc.moveDown();
    
        // Article 6 - Capital social
        doc.fontSize(12).font('Helvetica-Bold').text('Article 6 : Capital social');
    
        let totalParts = 0;
        if (data.associes && data.associes.length > 0) {
          data.associes.forEach(a => {
            const parts = parseInt(a.associe_parts);
            if (!isNaN(parts)) {
              totalParts += parts;
            }
          });
        }
    
        if (totalParts === 0 && data.nbrassociee) {
          totalParts = parseInt(data.nbrassociee) || 0;
        }
    
        const partValue = data.valeurpart || '0';
        const capitalTotal = totalParts * parseInt(partValue) || 0;
    
        doc.fontSize(11).font('Helvetica').text(
          `Le capital social est fixé à la somme de ${capitalTotal} Dinars Tunisiens, divisé en ${totalParts} parts sociales de ${partValue} DT chacune, entièrement souscrites et libérées par :`
        );
    
        if (data.associes && data.associes.length > 0) {
          data.associes.forEach((a, index) => {
            doc.text(`- ${a.associe_nom}, CIN: ${a.associe_cin}, Adresse: ${a.associe_adresse}, Parts: ${a.associe_parts}`);
          });
        }
        doc.moveDown();
    
        // Article 7 - Gérance
        doc.fontSize(12).font('Helvetica-Bold').text('Article 7 : Gérance');
        doc.fontSize(11).font('Helvetica').text(
          `La société est gérée par : ${data.gerant_nom}, CIN: ${data.gerant_cin}, Adresse: ${data.gerant_adresse}, Pouvoirs: ${data.gerant_pouvoirs}, Durée du mandat: ${data.gerant_duree}`
        );
        doc.moveDown();
    
        // Article 8 - Assemblées générales
        doc.fontSize(12).font('Helvetica-Bold').text('Article 8 : Assemblées générales');
        doc.fontSize(11).font('Helvetica').text(
          'Les décisions collectives des associés sont prises en assemblée générale conformément aux règles prévues par le Code des Sociétés Commerciales.'
        );
        doc.moveDown();
    
        // Article 9 - Répartition des bénéfices
        doc.fontSize(12).font('Helvetica-Bold').text('Article 9 : Répartition des bénéfices');
        doc.fontSize(11).font('Helvetica').text(
          'Les bénéfices nets, après déduction des charges, provisions et impôts, sont répartis entre les associés proportionnellement au nombre de parts détenues, sauf clause contraire.'
        );
        doc.moveDown();
    
        // Article 10 - Cession de parts
        doc.fontSize(12).font('Helvetica-Bold').text('Article 10 : Cession de parts');
        doc.fontSize(11).font('Helvetica').text(
          'Toute cession de parts à un tiers non associé doit être autorisée par l\'assemblée générale des associés représentant au moins les trois quarts du capital social.'
        );
        doc.moveDown();
    
        // Article 11 - Dissolution
        doc.fontSize(12).font('Helvetica-Bold').text('Article 11 : Dissolution – Liquidation');
        doc.fontSize(11).font('Helvetica').text(
          'En cas de dissolution anticipée ou arrivée à terme, la société sera liquidée selon les dispositions légales en vigueur.'
        );
        doc.moveDown(2);
    
        // Signature
        doc.fontSize(11).text(`Fait à : ${data.lieu}`);
        doc.text(`Le : ${data.date ? new Date(data.date).toLocaleDateString('fr-FR') : ''}`);
        doc.moveDown(2);
        doc.text('Signatures des associés :');
        doc.moveDown();
    
        if (data.associes && data.associes.length > 0) {
          data.associes.forEach((a, index) => {
            doc.text(`${index + 1}. ${a.associe_nom}, Signature: ____________`);
            doc.moveDown(0.5);
          });
        }
    
        doc.end();
    
        writeStream.on('finish', () => {
          res.setHeader('Content-Type', 'application/pdf');
          res.setHeader('Content-Disposition', `attachment; filename="${data.nomsociete}_SARL.pdf"`);
    
          const fileStream = fs.createReadStream(filePath);
          fileStream.pipe(res);
    
          fileStream.on('end', () => {
            fs.unlink(filePath, (err) => {
              if (err) console.error('Error deleting temporary file:', err);
            });
          });
        });
    
      } catch (error) {
        console.error('PDF Generation Error:', error);
        res.status(500).json({
          success: false,
          message: 'Erreur lors de la génération du PDF',
          error: error.message
        });
      }
      
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
  




  exports.getAllSarls = async (req, res) => {
    try {
      const sarls = await CompanyForm.find();
  
      console.log("Retrieved SARL data:", JSON.stringify(sarls, null, 2));
  
      if (sarls.length === 0) {
        return res.status(404).json({ success: false, message: 'No SARL data found.' });
      }
  
      const data = sarls[0];
  
      const tempDir = path.join(__dirname, '../temp');
      if (!fs.existsSync(tempDir)) {
        fs.mkdirSync(tempDir, { recursive: true });
      }
  
      const filePath = path.join(tempDir, `${Date.now()}_sarl.pdf`);
      const writeStream = fs.createWriteStream(filePath);
  
      const doc = new PDFDocument({ margin: 50, size: 'A4' });
      doc.pipe(writeStream);
  
      // Title
      doc.fontSize(16).font('Helvetica-Bold').text(
        'STATUT D\'UNE SOCIÉTÉ À RESPONSABILITÉ LIMITÉE (SARL)', { align: 'center' }
      );
      doc.moveDown(2);
  
      // Article 1 - Forme
      doc.fontSize(12).font('Helvetica-Bold').text('Article 1 : Forme');
      doc.fontSize(11).font('Helvetica').text(
        'Il est formé entre les soussignés une société à responsabilité limitée (SARL), régie par les dispositions du Code des Sociétés Commerciales et par les présents statuts.'
      );
      doc.moveDown();
  
      // Article 2 - Dénomination sociale
      doc.fontSize(12).font('Helvetica-Bold').text('Article 2 : Dénomination sociale');
      doc.fontSize(11).font('Helvetica').text(
        `La société prend la dénomination suivante : ${data.nomsociete}`
      );
      doc.moveDown();
  
      // Article 3 - Objet social
      doc.fontSize(12).font('Helvetica-Bold').text('Article 3 : Objet social');
      doc.fontSize(11).font('Helvetica').text(
        `La société a pour objet : ${data.objetsociete}. Et généralement, toutes opérations industrielles, commerciales, financières, mobilières ou immobilières se rattachant directement ou indirectement à l'objet social.`
      );
      doc.moveDown();
  
      // Article 4 - Siège social
      doc.fontSize(12).font('Helvetica-Bold').text('Article 4 : Siège social');
      doc.fontSize(11).font('Helvetica').text(
        `Le siège social est fixé à : ${data.adress}. Il peut être transféré en tout autre lieu en Tunisie par décision de l'assemblée générale extraordinaire.`
      );
      doc.moveDown();
  
      // Article 5 - Durée
      doc.fontSize(12).font('Helvetica-Bold').text('Article 5 : Durée');
      doc.fontSize(11).font('Helvetica').text(
        `La durée de la société est fixée à ${data.duree} ans, sauf dissolution anticipée ou prorogation décidée conformément à la loi.`
      );
      doc.moveDown();
  
      // Article 6 - Capital social
      doc.fontSize(12).font('Helvetica-Bold').text('Article 6 : Capital social');
  
      let totalParts = 0;
      if (data.associes && data.associes.length > 0) {
        data.associes.forEach(a => {
          const parts = parseInt(a.associe_parts);
          if (!isNaN(parts)) {
            totalParts += parts;
          }
        });
      }
  
      if (totalParts === 0 && data.nbrassociee) {
        totalParts = parseInt(data.nbrassociee) || 0;
      }
  
      const partValue = data.valeurpart || '0';
      const capitalTotal = totalParts * parseInt(partValue) || 0;
  
      doc.fontSize(11).font('Helvetica').text(
        `Le capital social est fixé à la somme de ${capitalTotal} Dinars Tunisiens, divisé en ${totalParts} parts sociales de ${partValue} DT chacune, entièrement souscrites et libérées par :`
      );
  
      if (data.associes && data.associes.length > 0) {
        data.associes.forEach((a, index) => {
          doc.text(`- ${a.associe_nom}, CIN: ${a.associe_cin}, Adresse: ${a.associe_adresse}, Parts: ${a.associe_parts}`);
        });
      }
      doc.moveDown();
  
      // Article 7 - Gérance
      doc.fontSize(12).font('Helvetica-Bold').text('Article 7 : Gérance');
      doc.fontSize(11).font('Helvetica').text(
        `La société est gérée par : ${data.gerant_nom}, CIN: ${data.gerant_cin}, Adresse: ${data.gerant_adresse}, Pouvoirs: ${data.gerant_pouvoirs}, Durée du mandat: ${data.gerant_duree}`
      );
      doc.moveDown();
  
      // Article 8 - Assemblées générales
      doc.fontSize(12).font('Helvetica-Bold').text('Article 8 : Assemblées générales');
      doc.fontSize(11).font('Helvetica').text(
        'Les décisions collectives des associés sont prises en assemblée générale conformément aux règles prévues par le Code des Sociétés Commerciales.'
      );
      doc.moveDown();
  
      // Article 9 - Répartition des bénéfices
      doc.fontSize(12).font('Helvetica-Bold').text('Article 9 : Répartition des bénéfices');
      doc.fontSize(11).font('Helvetica').text(
        'Les bénéfices nets, après déduction des charges, provisions et impôts, sont répartis entre les associés proportionnellement au nombre de parts détenues, sauf clause contraire.'
      );
      doc.moveDown();
  
      // Article 10 - Cession de parts
      doc.fontSize(12).font('Helvetica-Bold').text('Article 10 : Cession de parts');
      doc.fontSize(11).font('Helvetica').text(
        'Toute cession de parts à un tiers non associé doit être autorisée par l\'assemblée générale des associés représentant au moins les trois quarts du capital social.'
      );
      doc.moveDown();
  
      // Article 11 - Dissolution
      doc.fontSize(12).font('Helvetica-Bold').text('Article 11 : Dissolution – Liquidation');
      doc.fontSize(11).font('Helvetica').text(
        'En cas de dissolution anticipée ou arrivée à terme, la société sera liquidée selon les dispositions légales en vigueur.'
      );
      doc.moveDown(2);
  
      // Signature
      doc.fontSize(11).text(`Fait à : ${data.lieu}`);
      doc.text(`Le : ${data.date ? new Date(data.date).toLocaleDateString('fr-FR') : ''}`);
      doc.moveDown(2);
      doc.text('Signatures des associés :');
      doc.moveDown();
  
      if (data.associes && data.associes.length > 0) {
        data.associes.forEach((a, index) => {
          doc.text(`${index + 1}. ${a.associe_nom}, Signature: ____________`);
          doc.moveDown(0.5);
        });
      }
  
      doc.end();
  
      writeStream.on('finish', () => {
        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', `attachment; filename="${data.nomsociete}_SARL.pdf"`);
  
        const fileStream = fs.createReadStream(filePath);
        fileStream.pipe(res);
  
        fileStream.on('end', () => {
          fs.unlink(filePath, (err) => {
            if (err) console.error('Error deleting temporary file:', err);
          });
        });
      });
  
    } catch (error) {
      console.error('PDF Generation Error:', error);
      res.status(500).json({
        success: false,
        message: 'Erreur lors de la génération du PDF',
        error: error.message
      });
    }
  };

