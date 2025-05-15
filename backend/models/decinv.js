const mongoose = require('mongoose');

// Sub-schemas for production items
const ProductionItemSchema = new mongoose.Schema({
  produit: String,
  quantite: String,
  superficie: String,
  valeur: String,
  unite: String
});

// Schema for authorization items
const AutorisationItemSchema = new mongoose.Schema({
  type: String,
  numero: String,
  dateDelivrance: Date,
  organisme: String
});

// Main Schema - Revised to match form structure
const ProjetInvestissementSchema = new mongoose.Schema({
  // Section 1: Identification du Promoteur
  identificationPromoteur: {
    nomPrenom: String,
    nationalite: String,
    paysResidence: String,
    statutResidence: String,
    naissance: String,
    niveauEducation: String,
    diplome: String,
    qualite: String,
    pieceIdentite: String,
    dateDelivrance: String,
    adresse: String,
    ville: String,
    codePostal: String,
    tel: String,
    fax: String,
    email: String,
    cinPasseport: String
  },

  // Section 2: Company Information
  companyInfoForm: {
    raisonSociale: String,
    gerant: String,
    siegeSocial: String,
    registreCommerce: String,
    matricule: String,
    capital: String,
    formeJuridique: String,
    participationEtrangere: String,
    repartitionEtrangere: String,
    repartitionLocale: String,
    cnss: String,
    tel: String,
    fax: String,
    email: String
  },

  // Section 3: General Project Information
  generalProjectInfo: {
    regimeInvestissement: String,
    natureProjet: String,
    natureProjetAutre: String,
    secteur: String,
    activite: String,
    activitesSecondaires: String,
    insertionFiliere: String,
    nomFiliere: String,
    donneesDetaillees: String
  },

  // Section 4: Authorizations
  autorisationsection: {
    autorisations: [String]
  },

  // Section 5: Project Location
  projectLocationSection: {
    gouvernorat: String,
    delegation: String,
    imada: String,
    adresseImplantation: String,
    port: String,
    surfaceTotale: String,
    surfaceOccupee: String,
    surfaceCouverte: String,
    modeOccupation: String
  },

  // Section 6: Employment
  emplois: {
    emploisPrevus: String,
    emploisExistants: String,
    cadres: String,
    techniciens: String,
    administratifs: String,
    autres: String,
    emploisCadresDiplomes: String,
    emploisSaisonniersNombre: String,
    classification: String,
    diplomes: String
  },

  // Section 7: Investment and Financing
  investissementFinancement: {
    // Investment fields
    terrain: String,
    genieCivil: String,
    amenagements: String,
    equipementImporte: String,
    equipementLocal: String,
    materielTransport: String,
    betail: String,
    plantations: String,
    fondsRoulement: String,
    fraisEtude: String,
    fraisDivers: String,
    
    // Financing fields
    capitalSocial: String,
    augmentationCapital: String,
    fondsPropres: String,
    compteCourantAssocies: String,
    creditLongTerme: String,
    creditMoyenTerme: String,
    creditCourtTerme: String,
    creditLeasing: String,
    creditFournisseur: String,
    creditFoncier: String,
    creditEtranger: String
  },

  // Section 8: Production
  production: {
    productionPrevue: [ProductionItemSchema],
    productionPrecedente: [ProductionItemSchema]
  },

  // Section 9: Planning and Enterprise Info
  planningEtInfosEntreprise: {
    creationCapitalMois: String,
    creationCapitalAnnee: String,
    commandeEquipementMois: String,
    commandeEquipementAnnee: String,
    dateActiviteMois: String,
    dateActiviteAnnee: String,
    referenceProjetInitial: String,
    codeDouane: String,
    numeroCnss: String,
    numeroRegistreCommerce: String,
    modeLieuDelivrance: String
  },

  // Section 10: Advantages Requested
  avantagesSollicites: {
    avantageSecteursPrioritaires: { type: Boolean, default: false },
    avantageFilieresEconomiques: { type: Boolean, default: false },
    avantageInvestissementsMateriels: { type: Boolean, default: false },
    avantageInvestissementsImmateriels: { type: Boolean, default: false },
    avantageRechercheDeveloppement: { type: Boolean, default: false },
    avantageFormationCertif: { type: Boolean, default: false },
    avantageDevRegional: { type: Boolean, default: false },
    avantageCnss: { type: Boolean, default: false },
    avantageSalaireEncadrement: { type: Boolean, default: false },
    avantageDevDurable: { type: Boolean, default: false },
    avantageParticipationCapital: { type: Boolean, default: false },
    avantageCreditFoncier: { type: Boolean, default: false },
    avantageProjetInteretNational: { type: Boolean, default: false }
  },

  // Metadata (keeping relevant fields from original schema)
  status: { 
    type: String, 
    enum: ['brouillon', 'soumis', 'validé', 'rejeté'], 
    default: 'brouillon' 
  },
  dateSoumission: Date,
  numeroDeclaration:String,
  documentsAnnexes: [String],
  observations: String,

  // Timestamps
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

// Auto-generate declaration number before save
ProjetInvestissementSchema.pre('save', async function(next) {
  if (!this.numeroDeclaration) {
    const count = await this.constructor.countDocuments();
    this.numeroDeclaration = `DEC-${new Date().getFullYear()}-${(count + 1).toString().padStart(3, '0')}`;
  }
  this.updatedAt = new Date();
  next();
});

module.exports = mongoose.model('ProjetInvestissement', ProjetInvestissementSchema);