'use client'
import React, { useState, useEffect } from 'react'



export default function SocieteAnonyme() {
  const [pageNumber, setPageNumber] = useState(1)
  const [currentActionnaire, setCurrentActionnaire] = useState(0)
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  // État initial spécifique à la SA
  const initialFormState = {
    // Page 1: Infos société
    nomsociete: '',
    objetsociete: '',
    adresse_siege: '',
    duree: '99', // Durée courante en Tunisie
    capital: '',
    nbr_actionnaires: '7', // Minimum 7 en Tunisie
    valeur_action: '',

    // Page 2: Actionnaires
    actionnaires: Array(7).fill().map(() => ({
      nom: '',
      adresse: '',
      cin: '',
      nombre_actions: '',
      type_apport: 'numéraire', // numéraire/nature
    })),

    // Page 3: Gouvernance
    mode_gestion: 'conseil_administration', // conseil_administration/directoire
    administrateurs: [
      { nom: '', cin: '', qualite: 'Président' },
      { nom: '', cin: '', qualite: 'Administrateur' },
    ],
    commissaire_comptes: {
      nom: '',
      cabinet: '',
      rc: '',
    },

    // Page 4: Formalités
    lieu: 'Tunis',
    date: new Date().toISOString().split('T')[0],
  }

  const [formData, setFormData] = useState(initialFormState)

  // Gestion dynamique des actionnaires
  useEffect(() => {
    const currentCount = formData.actionnaires.length
    const targetCount = parseInt(formData.nbr_actionnaires) || 7
    
    if (targetCount > currentCount) {
      setFormData(prev => ({
        ...prev,
        actionnaires: [
          ...prev.actionnaires,
          ...Array(targetCount - currentCount).fill().map(() => ({
            nom: '',
            adresse: '',
            cin: '',
            nombre_actions: '',
            type_apport: 'numéraire',
          }))
        ]
      }))
    } else if (targetCount < currentCount) {
      setFormData(prev => ({
        ...prev,
        actionnaires: prev.actionnaires.slice(0, targetCount)
      }))
      setCurrentActionnaire(Math.max(0, targetCount - 1))
    }
  }, [formData.nbr_actionnaires])

  // Handlers génériques
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: null }))
  }

  const handleActionnaireChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => {
      const updated = [...prev.actionnaires]
      updated[currentActionnaire] = { ...updated[currentActionnaire], [name]: value }
      return { ...prev, actionnaires: updated }
    })
    const errorKey = `actionnaires[${currentActionnaire}].${name}`
    if (errors[errorKey]) setErrors(prev => ({ ...prev, [errorKey]: null }))
  }

  const handleCommissaireChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      commissaire_comptes: { ...prev.commissaire_comptes, [name]: value }
    }))
    if (errors[`commissaire_${name}`]) setErrors(prev => ({ ...prev, [`commissaire_${name}`]: null }))
  }

  // Validation spécifique SA
  const validateCurrentPage = () => {
    const newErrors = {}
    
    if (pageNumber === 1) {
      if (!formData.nomsociete.trim()) newErrors.nomsociete = "Nom requis"
      if (!formData.capital) newErrors.capital = "Capital obligatoire (en TND)"
      if (parseInt(formData.nbr_actionnaires) < 7) {
        newErrors.nbr_actionnaires = "Minimum 7 actionnaires"
      }
    } 
    else if (pageNumber === 2) {
      const act = formData.actionnaires[currentActionnaire]
      if (!act.nom.trim()) newErrors[`actionnaires[${currentActionnaire}].nom`] = "Nom requis"
      if (!act.cin.trim()) newErrors[`actionnaires[${currentActionnaire}].cin`] = "CIN requis"
      if (!act.nombre_actions) newErrors[`actionnaires[${currentActionnaire}].nombre_actions`] = "Nombre d'actions requis"
    }
    else if (pageNumber === 3) {
      if (!formData.commissaire_comptes.nom.trim()) newErrors.commissaire_nom = "Nom obligatoire"
      if (!formData.commissaire_comptes.rc.trim()) newErrors.commissaire_rc = "N° RC obligatoire"
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  // Navigation
  const goToNextPage = () => {
    if (validateCurrentPage()) setPageNumber(pageNumber + 1)
  }

  const goToPreviousPage = () => {
    if (pageNumber > 1) setPageNumber(pageNumber - 1)
  }

  // Soumission
  const handleSubmit = async () => {
    if (!validateCurrentPage()) return
    setIsSubmitting(true)
    
    try {
      const res = await fetch('http://localhost:5000/sa/addSA', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      
      if (res.ok) {
        alert('Statuts SA générés avec succès!')
        setFormData(initialFormState)
        setPageNumber(1)
      } else {
        alert('Erreur lors de la soumission')
      }
    } catch (error) {
      console.error(error)
    } finally {
      setIsSubmitting(false)
    }
  }

  // Composant d'erreur réutilisable
  const ErrorMessage = ({ name }) => (
    errors[name] && <p className="text-red-500 text-xs mt-1">{errors[name]}</p>
  )

  return (
    <div>
    
    <div className="max-w-2xl mx-auto p-6 border border-gray-300 rounded-lg shadow-md space-y-4 mt-5 bg-white">
      {/* Progress Bar */}
      <div className="mb-6">
        <div className="flex justify-between mb-1">
          <span className="text-sm text-gray-700">Étape {pageNumber} sur 4</span>
          <span className="text-sm text-gray-700">{Math.round((pageNumber / 4) * 100)}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${(pageNumber / 4) * 100}%` }}></div>
        </div>
      </div>

      {/* Page 1: Infos Société */}
      {pageNumber === 1 && (
        <>
          <h1 className="text-xl font-medium text-center mb-4">Informations de la Société Anonyme</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Nom de la société *</label>
              <input
                type="text"
                name="nomsociete"
                value={formData.nomsociete}
                onChange={handleChange}
                className={`w-full p-2 border ${errors.nomsociete ? 'border-red-500' : 'border-gray-300'} rounded`}
              />
              <ErrorMessage name="nomsociete" />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Capital social (TND) *</label>
              <input
                type="number"
                name="capital"
                value={formData.capital}
                onChange={handleChange}
                className={`w-full p-2 border ${errors.capital ? 'border-red-500' : 'border-gray-300'} rounded`}
              />
              <ErrorMessage name="capital" />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Nombre d'actionnaires *</label>
              <input
                type="number"
                name="nbr_actionnaires"
                min="7"
                value={formData.nbr_actionnaires}
                onChange={handleChange}
                className={`w-full p-2 border ${errors.nbr_actionnaires ? 'border-red-500' : 'border-gray-300'} rounded`}
              />
              <ErrorMessage name="nbr_actionnaires" />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Siège social *</label>
              <input
                type="text"
                name="adresse_siege"
                value={formData.adresse_siege}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
          </div>
        </>
      )}

      {/* Page 2: Actionnaires */}
      {pageNumber === 2 && (
        <>
          <h1 className="text-xl font-medium text-center mb-4">
            Actionnaire {currentActionnaire + 1}/{formData.actionnaires.length}
          </h1>

          {/* Navigation entre actionnaires */}
          <div className="flex flex-wrap justify-center gap-2 mb-4">
            {formData.actionnaires.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentActionnaire(index)}
                className={`w-8 h-8 rounded-full ${currentActionnaire === index ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
              >
                {index + 1}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Nom complet *</label>
              <input
                type="text"
                name="nom"
                value={formData.actionnaires[currentActionnaire]?.nom || ''}
                onChange={handleActionnaireChange}
                className={`w-full p-2 border ${errors[`actionnaires[${currentActionnaire}].nom`] ? 'border-red-500' : 'border-gray-300'} rounded`}
              />
              <ErrorMessage name={`actionnaires[${currentActionnaire}].nom`} />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">CIN/Passeport *</label>
              <input
                type="text"
                name="cin"
                value={formData.actionnaires[currentActionnaire]?.cin || ''}
                onChange={handleActionnaireChange}
                className={`w-full p-2 border ${errors[`actionnaires[${currentActionnaire}].cin`] ? 'border-red-500' : 'border-gray-300'} rounded`}
              />
              <ErrorMessage name={`actionnaires[${currentActionnaire}].cin`} />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Nombre d'actions *</label>
              <input
                type="number"
                name="nombre_actions"
                value={formData.actionnaires[currentActionnaire]?.nombre_actions || ''}
                onChange={handleActionnaireChange}
                className={`w-full p-2 border ${errors[`actionnaires[${currentActionnaire}].nombre_actions`] ? 'border-red-500' : 'border-gray-300'} rounded`}
              />
              <ErrorMessage name={`actionnaires[${currentActionnaire}].nombre_actions`} />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Type d'apport</label>
              <select
                name="type_apport"
                value={formData.actionnaires[currentActionnaire]?.type_apport || 'numéraire'}
                onChange={handleActionnaireChange}
                className="w-full p-2 border border-gray-300 rounded"
              >
                <option value="numéraire">Numéraire</option>
                <option value="nature">Nature</option>
              </select>
            </div>
          </div>
        </>
      )}

      {/* Page 3: Gouvernance */}
      {pageNumber === 3 && (
        <>
          <h1 className="text-xl font-medium text-center mb-4">Gouvernance de la SA</h1>

          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Mode de gestion</label>
            <div className="flex gap-4">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="mode_gestion"
                  value="conseil_administration"
                  checked={formData.mode_gestion === 'conseil_administration'}
                  onChange={handleChange}
                  className="mr-2"
                />
                Conseil d'administration
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="mode_gestion"
                  value="directoire"
                  checked={formData.mode_gestion === 'directoire'}
                  onChange={handleChange}
                  className="mr-2"
                />
                Directoire + Conseil de surveillance
              </label>
            </div>
          </div>

          {/* Commissaire aux comptes (obligatoire) */}
          <div className="border-t pt-4">
            <h2 className="font-medium mb-3">Commissaire aux Comptes *</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Nom *</label>
                <input
                  type="text"
                  name="nom"
                  value={formData.commissaire_comptes.nom}
                  onChange={handleCommissaireChange}
                  className={`w-full p-2 border ${errors.commissaire_nom ? 'border-red-500' : 'border-gray-300'} rounded`}
                />
                <ErrorMessage name="commissaire_nom" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">N° RC du cabinet *</label>
                <input
                  type="text"
                  name="rc"
                  value={formData.commissaire_comptes.rc}
                  onChange={handleCommissaireChange}
                  className={`w-full p-2 border ${errors.commissaire_rc ? 'border-red-500' : 'border-gray-300'} rounded`}
                />
                <ErrorMessage name="commissaire_rc" />
              </div>
            </div>
          </div>
        </>
      )}

      {/* Page 4: Formalités */}
      {pageNumber === 4 && (
        <>
          <h1 className="text-xl font-medium text-center mb-4">Finalisation des statuts</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Lieu *</label>
              <input
                type="text"
                name="lieu"
                value={formData.lieu}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Date *</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
          </div>

          <div className="mt-6 p-4 bg-blue-50 rounded">
            <h3 className="font-medium text-blue-800">Récapitulatif clé</h3>
            <ul className="mt-2 text-sm text-blue-700 list-disc pl-5">
              <li>Capital: {formData.capital || '--'} TND</li>
              <li>{formData.nbr_actionnaires} actionnaires</li>
              <li>Gestion: {formData.mode_gestion === 'conseil_administration' ? 'Conseil d\'administration' : 'Directoire'}</li>
            </ul>
          </div>
        </>
      )}

      {/* Navigation */}
      <div className="flex justify-between pt-6">
        <button
          onClick={goToPreviousPage}
          disabled={pageNumber === 1}
          className={`px-4 py-2 rounded ${pageNumber === 1 ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
        >
          Précédent
        </button>

        {pageNumber < 4 ? (
          <button
            onClick={goToNextPage}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Suivant
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            disabled={isSubmitting}
            className={`px-4 py-2 rounded ${isSubmitting ? 'bg-green-300 cursor-wait' : 'bg-green-600 text-white hover:bg-green-700'}`}
          >
            {isSubmitting ? 'Soumission...' : 'Valider les statuts'}
          </button>
        )}
      </div>
    </div>
    </div>
  )
}