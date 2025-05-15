const PDFDocument = require('pdfkit');
const ProjetInvestissement = require('../models/decinv');

exports.generateExactTemplatePDF = async (req, res) => {
  try {
    if (!req.body?.identificationPromoteur?.nomPrenom) {
      return res.status(400).json({ success: false, message: "Nom complet est requis" });
    }

    const declaration = new ProjetInvestissement(req.body);
    const savedDeclaration = await declaration.save();

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `attachment; filename="Declaration_${savedDeclaration._id}.pdf"`);

    const doc = new PDFDocument({ margin: 40, size: 'A4' });
    doc.pipe(res);

    const addHeader = () => {
      doc.font('Helvetica-Bold').fontSize(16).text('Liasse Unique', { align: 'center' });
      doc.fontSize(14).text("Dépôt de Déclaration d'Investissement", { align: 'center' });
      doc.fontSize(10).text("Loi de l'Investissement N°2016-71 du 30 Septembre 2016", { align: 'center' });
      doc.moveDown(2);
    };

    const drawLabelValue = (label, value, x, y) => {
      doc.font('Helvetica-Bold').fontSize(10).text(label + ':', x, y);
      doc.font('Helvetica').fontSize(10).text(value || '________________', x + 160, y);
    };

    const drawCheckbox = (label, checked, x, y) => {
      doc.font('Helvetica').text(`${checked ? '☑' : '☐'} ${label}`, x, y);
    };

    const renderSection = (title, entries) => {
      doc.font('Helvetica-Bold').fontSize(14).text(title, { align: 'left' });
      doc.moveDown(1);
      let y = doc.y;
      entries.forEach(({ label, value }) => {
        drawLabelValue(label, value, 50, y);
        y += 20;
      });
      doc.moveDown();
    };

    // === PAGE 1: IDENTIFICATION DU DECLARANT ===
    addHeader();
    doc.font('Helvetica-Bold').fontSize(14).text("Identification du Déclarant (le promoteur)", { align: 'left' });
    doc.moveDown(1);
    const p = savedDeclaration.identificationPromoteur;
    let y = doc.y;
    drawLabelValue("Nom et Prénom", p.nomPrenom, 50, y);
    drawLabelValue("Nationalité", p.nationalite, 50, y + 20);
    drawCheckbox("Résident", p.statutResidence === 'résident', 250, y + 20);
    drawCheckbox("Non Résident", p.statutResidence === 'non-résident', 350, y + 20);
    drawLabelValue("Pays de Résidence", p.paysResidence, 50, y + 40);
    drawLabelValue("Date et lieu de Naissance", p.naissance, 50, y + 60);
    drawLabelValue("Niveau d’éducation", p.niveauEducation, 50, y + 80);
    drawLabelValue("Diplôme", p.diplome, 50, y + 100);
    drawLabelValue("Qualité (gérant/promoteur)", p.qualite, 50, y + 120);
    drawLabelValue("N° CIN/Passeport", p.cinPasseport, 50, y + 140);
    drawLabelValue("Date et lieu de délivrance", p.dateDelivrance, 50, y + 160);
    drawLabelValue("Adresse", p.adresse, 50, y + 180);
    drawLabelValue("Ville", p.ville, 50, y + 200);
    drawLabelValue("Code Postal", p.codePostal, 50, y + 220);
    drawLabelValue("Tél / GSM", p.tel, 50, y + 240);
    drawLabelValue("Fax", p.fax, 50, y + 260);
    drawLabelValue("Adresse Électronique", p.email, 50, y + 280);

    // === PAGE 2: OBLIGATIONS DU PROMOTEUR ===
    doc.addPage();
    addHeader();
    doc.font('Helvetica-Bold').fontSize(14).text('Obligations du Promoteur', { align: 'left' });
    doc.moveDown(1);
    const obligations = [
      "- Informer de tout changement concernant les données mentionnées dans l’attestation de dépôt de déclaration.",
      "- Commencer l'exécution des investissements dans un délai d’un an à partir de la date d’obtention de l’attestation.",
      "- Réaliser le programme d’investissement au cours des quatre années suivant la date d’obtention.",
      "- Les avantages seront déchus en cas de non-respect des dispositions de la loi."
    ];
    obligations.forEach(line => doc.font('Helvetica').fontSize(10).text(line, { align: 'left' }));

    // === PAGE 3: COMPANY INFO ===
    doc.addPage();
    addHeader();
    renderSection("Informations sur l'entreprise", Object.entries(savedDeclaration.companyInfoForm).map(([k, v]) => ({ label: k, value: v })));

    // === PAGE 4: PROJECT INFO ===
    doc.addPage();
    addHeader();
    renderSection("Informations générales sur le projet", Object.entries(savedDeclaration.generalProjectInfo).map(([k, v]) => ({ label: k, value: v })));

    // === PAGE 5: PROJECT LOCATION ===
    doc.addPage();
    addHeader();
    renderSection("Lieu d'implantation du projet", Object.entries(savedDeclaration.projectLocationSection).map(([k, v]) => ({ label: k, value: v })));

    // === PAGE 6: EMPLOYMENT ===
    doc.addPage();
    addHeader();
    renderSection("Emplois", Object.entries(savedDeclaration.emplois).map(([k, v]) => ({ label: k, value: v })));

    // === PAGE 7: INVESTMENT AND FINANCING ===
    doc.addPage();
    addHeader();
    const invest = savedDeclaration.investissementFinancement;
    const investmentFields = ['terrain', 'genieCivil', 'amenagements', 'equipementImporte', 'equipementLocal', 'materielTransport', 'betail', 'plantations', 'fondsRoulement', 'fraisEtude', 'fraisDivers'];
    const financingFields = ['capitalSocial', 'augmentationCapital', 'fondsPropres', 'compteCourantAssocies', 'creditLongTerme', 'creditMoyenTerme', 'creditCourtTerme', 'creditLeasing', 'creditFournisseur', 'creditFoncier', 'creditEtranger'];
    renderSection("Investissements", investmentFields.map(key => ({ label: key, value: invest[key] })));
    renderSection("Financement", financingFields.map(key => ({ label: key, value: invest[key] })));

    // === PAGE 8: PRODUCTION ===
    doc.addPage();
    addHeader();
    doc.font('Helvetica-Bold').fontSize(14).text("Production prévue", { align: 'left' });
    doc.moveDown();
    (savedDeclaration.production.productionPrevue || []).forEach((p, i) => {
      doc.font('Helvetica').text(`- ${p.produit}: ${p.quantite} ${p.unite || ''} (${p.valeur})`);
    });
    doc.moveDown();
    doc.font('Helvetica-Bold').fontSize(14).text("Production de l'année précédente", { align: 'left' });
    (savedDeclaration.production.productionPrecedente || []).forEach((p, i) => {
      doc.font('Helvetica').text(`- ${p.produit}: ${p.quantite} ${p.unite || ''} (${p.valeur})`);
    });

    // === PAGE 9: PLANNING ===
    doc.addPage();
    addHeader();
    renderSection("Planning prévisionnel des réalisations", Object.entries(savedDeclaration.planningEtInfosEntreprise).map(([k, v]) => ({ label: k, value: v })));

    // === PAGE 10: AVANTAGES SOLLICITES ===
    doc.addPage();
    addHeader();
    doc.font('Helvetica-Bold').fontSize(14).text("Avantages sollicités", { align: 'left' });
    doc.moveDown(1);
    Object.entries(savedDeclaration.avantagesSollicites).forEach(([key, value]) => {
      drawCheckbox(key, value, 50, doc.y);
      doc.moveDown();
    });

    // === FINAL SIGNATURE ===
    doc.addPage();
    addHeader();
    doc.moveDown(10);
    doc.font('Helvetica').text('………………………………..le……………….....…………………..', 300);
    doc.text('Nom et prénom………………………………………………………', 300);
    doc.text('Signature', 300);

    doc.end();
  } catch (err) {
    console.error('Error generating PDF:', err);
    res.status(500).json({ success: false, message: err.message });
  }
};
