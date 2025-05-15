'use client'
import React, { useState, useEffect } from 'react'
import Emplois from './componenets/Emplois'
import InvestissementFinancement from './componenets/InvestissementFinancement'
import ProductionForm from './componenets/ProductionForm'
import PlanningEtInfosEntrepriseForm from './componenets/PlanningEtInfosEntrepriseForm'
import AvantagesSollicitesForm from './componenets/AvantagesSollicitesForm'
import CompanyInfoForm from './componenets/CompanyInformation'
import GeneralProjectInfo from './componenets/GeneralProjectInfo'
import AutorisationsFormSection from './componenets/AutorisationsFormSection'
import { IdentificationPromoteur } from './componenets/  IdentificationPromoteur'
import ProjectLocationSection from './componenets/ProjectLocationSection'
import axios from 'axios'

export default function DecInv() {
  const [pageNumber, setPageNumber] = useState(1)
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [modeOccupation, setModeOccupation] = useState('')
  const [mode, setMode] = useState([''])
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState(null);

  const initialFormState = {
    identificationPromoteur: {
      nomPrenom: '',
      nationalite: '',
      paysResidence: '',
      statutResidence: '',
      naissance: '',
      niveauEducation: '',
      diplome: '',
      qualite: '',
      raisonSociale: '',
      pieceIdentite: '',
      dateDelivrance: '',
      adresse: '',
      ville: '',
      codePostal: '',
      tel: '',
      fax: '',
      email: '',
      cinPasseport: ''
    },
    companyInfoForm: {
      raisonSociale: '',
      gerant: '',
      siegeSocial: '',
      registreCommerce: '',
      matricule: '',
      capital: '',
      formeJuridique: '',
      participationEtrangere: '',
      repartitionEtrangere: '',
      repartitionLocale: '',
      cnss: '',
      tel: '',
      fax: '',
      email: ''
    },
    generalProjectInfo: {
      regimeInvestissement: '',
      natureProjet: '',
      natureProjetAutre: '',
      secteur: '',
      activite: '',
      activitesSecondaires: '',
      insertionFiliere: '',
      nomFiliere: '',
      donneesDetaillees: ''
    },
    autorisationsection:{
      autorisations: [],
    },
    projectLocationSection: {
      gouvernorat: '',
      delegation: '',
      imada: '',
      adresseImplantation: '',
      port: '',
      surfaceTotale: '',
      surfaceOccupee: '',
      surfaceCouverte: '',
      modeOccupation: ''
    },
    emplois: {
      emploisPrevus: '',
      emploisExistants: '',
      cadres: '',
      techniciens: '',
      administratifs: '',
      autres: '',
      emploisCadresDiplomes: '',
      emploisSaisonniersNombre: '',
      classification: '',
      diplomes: ''
    },
    investissementFinancement: {
      // Investissement fields
      terrain: '',
      genieCivil: '',
      amenagements: '',
      equipementImporte: '',
      equipementLocal: '',
      materielTransport: '',
      betail: '',
      plantations: '',
      fondsRoulement: '',
      fraisEtude: '',
      fraisDivers: '',
      
      // Financement fields
      capitalSocial: '',
      augmentationCapital: '',
      fondsPropres: '',
      compteCourantAssocies: '',
      creditLongTerme: '',
      creditMoyenTerme: '',
      creditCourtTerme: '',
      creditLeasing: '',
      creditFournisseur: '',
      creditFoncier: '',
      creditEtranger: ''
    },
    production :{
  productionPrevue: [],
  productionPrecedente:[],
     

    },
    planningEtInfosEntreprise:{
      creationCapitalMois: '',
      creationCapitalAnnee: '',
      commandeEquipementMois: '',
      commandeEquipementAnnee: '',
      dateActiviteMois: '',
      dateActiviteAnnee: '',
      referenceProjetInitial: '',
      codeDouane: '',
      numeroCnss: '',
      numeroRegistreCommerce: '',
      modeLieuDelivrance: ''},
    avantagesSollicites : {
      avantageSecteursPrioritaires: false,
      avantageFilieresEconomiques: false,
      avantageInvestissementsMateriels: false,
      avantageInvestissementsImmateriels: false,
      avantageRechercheDeveloppement: false,
      avantageFormationCertif: false,
      avantageDevRegional: false,
      avantageCnss: false,
      avantageSalaireEncadrement: false,
      avantageDevDurable: false,
      avantageParticipationCapital: false,
      avantageCreditFoncier: false,
      avantageProjetInteretNational: false,
    },
   
  }

  const [formData, setFormData] = useState(initialFormState)



  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    // Handle checkboxes differently
    const inputValue = type === 'checkbox' ? checked : value;
  
    // Handle nested fields (with dot notation)
    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setFormData(prev => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [child]: inputValue
        }
      }));
    } else {
      // Handle top-level fields
      setFormData(prev => ({ ...prev, [name]: inputValue }));
    }
  
    // Clear error for this field when user types
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  }


  

  const goToPreviousPage = () => {
    if (pageNumber > 1) setPageNumber(pageNumber - 1)
  }

  const goToNextPage = () => {
    if (pageNumber < 10) setPageNumber(pageNumber + 1)
  }
// In parent component
const handleChangeCharge = (index, value) => {
  setFormData(prev => ({
    ...prev,
    autorisationsection: {
      ...prev.autorisationsection,
      autorisations: (prev.autorisationsection?.autorisations || []).map((item, i) => 
        i === index ? value : item
      )
    }
  }));
};

const handleAddField = () => {
  setFormData(prev => ({
    ...prev,
    autorisationsection: {
      ...prev.autorisationsection,
      autorisations: [...(prev.autorisationsection?.autorisations || []), '']
    }
  }));
};

const handleRemoveField = (index) => {
  setFormData(prev => ({
    ...prev,
    autorisationsection: {
      ...prev.autorisationsection,
      autorisations: (prev.autorisationsection?.autorisations || []).filter((_, i) => i !== index)
    }
  }));
};

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await axios.post(
      'http://localhost:5000/declarations', 
      formData,
      {
        responseType: 'blob' // Important to handle binary data (PDF)
      }
    );

    // Create blob URL from PDF
    const blob = new Blob([response.data], { type: 'application/pdf' });
    const blobURL = URL.createObjectURL(blob);

    // Open the PDF in a new tab or trigger download
    window.open(blobURL, '_blank');

    // Optionally, store success
    setResult({
      success: true,
      message: "PDF généré avec succès"
    });
  } catch (error) {
    setResult({
      success: false,
      message: error.response?.data?.message || "Erreur inconnue"
    });
  }
};


  // Helper function to show error message
  const ErrorMessage = ({ name }) => {
    return errors[name] ? (
      <p className="text-red-500 text-xs mt-1">{errors[name]}</p>
    ) : null
  }

  return (
    <div className="max-w-2xl mx-auto p-6 border border-gray-300 rounded-lg shadow-md space-y-4 mt-5 bg-white">
      {/* Progress indicator */}
      <div className="mb-6">
        <div className="flex justify-between mb-1">
          <span className="text-sm text-gray-700">Étape {pageNumber} sur 10</span>
          <span className="text-sm text-gray-700">{Math.round((pageNumber / 10) * 100)}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${(pageNumber / 10) * 100}%` }}></div>
        </div>
      </div>

      {pageNumber === 1 && <IdentificationPromoteur formData={formData} handleChange={handleChange} />}
      {pageNumber === 2 && <CompanyInfoForm formData={formData} handleChange={handleChange} />}
      {pageNumber === 3 && <GeneralProjectInfo formData={formData} handleChange={handleChange} />}
      {pageNumber === 4 && (
  <AutorisationsFormSection   autorisations={formData.autorisationsection?.autorisations || []} 
    handleChangeCharge={handleChangeCharge} 
    handleRemoveField={handleRemoveField} 
    handleAddField={handleAddField} 
  />
)}
      {pageNumber === 5 && <ProjectLocationSection formData={formData} handleChange={handleChange} modeOccupation={modeOccupation} setModeOccupation={setModeOccupation} modes={mode} />}
      {pageNumber === 6 && <Emplois pageNumber={pageNumber} formData={formData} handleChange={handleChange} />}
      {pageNumber === 7 && <InvestissementFinancement pageNumber={pageNumber} formData={formData} handleChange={handleChange} />}

      {pageNumber === 8 && (
  <ProductionForm 
    formData={formData} 
    handleChange={handleChange}
    onProductionPrevueChange={(newProductionPrevue) => {
      setFormData(prev => ({
        ...prev,
        production: {
          ...prev.production,
          productionPrevue: newProductionPrevue
        }
      }));
    }}
    onProductionPrecedenteChange={(newProductionPrecedente) => {
      setFormData(prev => ({
        ...prev,
        production: {
          ...prev.production,
          productionPrecedente: newProductionPrecedente
        }
      }));
    }}
  />
)}
      {pageNumber === 9 && <PlanningEtInfosEntrepriseForm pageNumber={pageNumber} formData={formData} handleChange={handleChange} />}
      {pageNumber === 10 && <AvantagesSollicitesForm pageNumber={pageNumber} formData={formData} handleChange={handleChange} />}

      <div className="pt-4 flex justify-between gap-4">
        <button 
          onClick={goToPreviousPage} 
          disabled={pageNumber === 1} 
          className={`bg-blue-600 text-white py-2 px-4 rounded-md transition-colors ${pageNumber === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'}`}
        >
          Précédent
        </button>

        {pageNumber < 10 ? (
          <button 
            onClick={goToNextPage} 
            className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
          >
            Suivant
          </button>
        ) : (
          <button 
            onClick={handleSubmit}
            disabled={isSubmitting}
            className={`bg-green-600 text-white py-2 px-4 rounded-md transition-colors ${isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-green-700'}`}
          >
            {isSubmitting ? 'Traitement...' : 'Soumettre'}
          </button>
        )}
      </div>
    </div>
  )
}
