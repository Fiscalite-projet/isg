'use client'
import React, { useState } from 'react'

export default function DeclarationSNC() {
  const [pageNumber, setPageNumber] = useState(1)
  const [currentAssocie, setCurrentAssocie] = useState(0)
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const initialFormState = {
    // Infos société
    raison_sociale: '',
    activite: '',
    date_creation: '',
    registre_commerce: '',
    adresse_siege: '',

    // Associés (tous responsables)
    associes: [{
      nom: '',
      cin: '',
      adresse: '',
      apport: '',
      pourcentage: '',
    }],

    // Revenus/Charges
    chiffre_affaires: '',
    charges: '',

    // Déclaration
    annee_fiscale: new Date().getFullYear() - 1,
    lieu: 'Tunis',
    date: new Date().toISOString().split('T')[0],
  }

  const [formData, setFormData] = useState(initialFormState)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: null }))
  }

  const handleAssocieChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => {
      const updated = [...prev.associes]
      updated[currentAssocie] = { ...updated[currentAssocie], [name]: value }
      return { ...prev, associes: updated }
    })
  }

  const validateCurrentPage = () => {
    const newErrors = {}
    
    if (pageNumber === 1) {
      if (!formData.raison_sociale) newErrors.raison_sociale = "Raison sociale requise"
      if (!formData.registre_commerce) newErrors.registre_commerce = "N° RC requis"
    }
    else if (pageNumber === 2) {
      const associe = formData.associes[currentAssocie]
      if (!associe.nom) newErrors[`associes[${currentAssocie}].nom`] = "Nom requis"
      if (!associe.cin) newErrors[`associes[${currentAssocie}].cin`] = "CIN requise"
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg">
      {/* Progress Bar */}
      <div className="mb-6">
        <div className="flex justify-between mb-1">
          <span className="text-sm">Étape {pageNumber}/3</span>
          <span className="text-sm">{Math.round((pageNumber/3)*100)}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-blue-600 h-2 rounded-full" 
            style={{ width: `${(pageNumber/3)*100}%` }}
          ></div>
        </div>
      </div>

      {/* Page 1: Infos Société */}
      {pageNumber === 1 && (
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Informations de la SNC</h2>
          
          <div>
            <label className="block mb-1">Raison sociale *</label>
            <input
              type="text"
              name="raison_sociale"
              value={formData.raison_sociale}
              onChange={handleChange}
              className={`w-full p-2 border ${errors.raison_sociale ? 'border-red-500' : 'border-gray-300'} rounded`}
            />
            {errors.raison_sociale && <p className="text-red-500 text-xs">{errors.raison_sociale}</p>}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block mb-1">N° Registre Commerce *</label>
              <input
                type="text"
                name="registre_commerce"
                value={formData.registre_commerce}
                onChange={handleChange}
                className={`w-full p-2 border ${errors.registre_commerce ? 'border-red-500' : 'border-gray-300'} rounded`}
              />
              {errors.registre_commerce && <p className="text-red-500 text-xs">{errors.registre_commerce}</p>}
            </div>
            <div>
              <label className="block mb-1">Date création</label>
              <input
                type="date"
                name="date_creation"
                value={formData.date_creation}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
          </div>
        </div>
      )}

      {/* Page 2: Associés */}
      {pageNumber === 2 && (
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Associés</h2>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {formData.associes.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setCurrentAssocie(index)}
                className={`w-8 h-8 rounded-full ${currentAssocie === index ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
              >
                {index + 1}
              </button>
            ))}
            <button
              type="button"
              onClick={() => setFormData(prev => ({
                ...prev,
                associes: [...prev.associes, { nom: '', cin: '', apport: '' }]
              }))}
              className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center"
            >
              +
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block mb-1">Nom complet *</label>
              <input
                type="text"
                name="nom"
                value={formData.associes[currentAssocie]?.nom || ''}
                onChange={handleAssocieChange}
                className={`w-full p-2 border ${errors[`associes[${currentAssocie}].nom`] ? 'border-red-500' : 'border-gray-300'} rounded`}
              />
              {errors[`associes[${currentAssocie}].nom`] && (
                <p className="text-red-500 text-xs">{errors[`associes[${currentAssocie}].nom`]}</p>
              )}
            </div>
            <div>
              <label className="block mb-1">CIN *</label>
              <input
                type="text"
                name="cin"
                value={formData.associes[currentAssocie]?.cin || ''}
                onChange={handleAssocieChange}
                className={`w-full p-2 border ${errors[`associes[${currentAssocie}].cin`] ? 'border-red-500' : 'border-gray-300'} rounded`}
              />
              {errors[`associes[${currentAssocie}].cin`] && (
                <p className="text-red-500 text-xs">{errors[`associes[${currentAssocie}].cin`]}</p>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Navigation */}
      <div className="flex justify-between mt-8">
        <button
          type="button"
          onClick={() => setPageNumber(p => Math.max(1, p-1))}
          disabled={pageNumber === 1}
          className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
        >
          Précédent
        </button>
        
        {pageNumber < 3 ? (
          <button
            type="button"
            onClick={() => validateCurrentPage() && setPageNumber(p => p+1)}
            className="px-4 py-2 bg-blue-600 text-white rounded"
          >
            Suivant
          </button>
        ) : (
          <button
            type="button"
            onClick={() => {
              if (validateCurrentPage()) {
                setIsSubmitting(true)
                // Soumission vers l'API
                console.log("Données SNC:", formData)
                setTimeout(() => setIsSubmitting(false), 1000)
              }
            }}
            disabled={isSubmitting}
            className="px-4 py-2 bg-green-600 text-white rounded disabled:opacity-50"
          >
            {isSubmitting ? 'Envoi...' : 'Soumettre'}
          </button>
        )}
      </div>
    </div>
  )
}