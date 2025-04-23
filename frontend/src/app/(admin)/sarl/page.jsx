'use client'
import React, { useState, useEffect } from 'react'

export default function Suarl() {
  const [pageNumber, setPageNumber] = useState(1)
  const [currentAssocie, setCurrentAssocie] = useState(0)
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const initialFormState = {
    nomsociete: '',
    objetsociete: '',
    adress: '',
    duree: '',
    nbrassociee: '1',
    valeurpart: '',
    associes: [{
      associe_nom: '',
      associe_adresse: '',
      associe_cin: '',
      associe_parts: '',
    }],
    gerant_nom: '',
    gerant_cin: '',
    gerant_adresse: '',
    gerant_duree: '',
    gerant_pouvoirs: '',
    lieu: '',
    date: '',
  }

  const [formData, setFormData] = useState(initialFormState)
console.log(formData)
  // Synchronize nbrassociee with associes array
  useEffect(() => {
    const currentCount = formData.associes.length
    const targetCount = parseInt(formData.nbrassociee) || 1
    
    if (targetCount > currentCount) {
      // Add missing associates
      const toAdd = targetCount - currentCount
      setFormData(prev => ({
        ...prev,
        associes: [
          ...prev.associes,
          ...Array(toAdd).fill().map(() => ({
            associe_nom: '',
            associe_adresse: '',
            associe_cin: '',
            associe_parts: '',
          }))
        ]
      }))
    } else if (targetCount < currentCount) {
      // Remove extra associates
      setFormData(prev => ({
        ...prev,
        associes: prev.associes.slice(0, targetCount)
      }))
      if (currentAssocie >= targetCount) {
        setCurrentAssocie(Math.max(0, targetCount - 1))
      }
    }
  }, [formData.nbrassociee])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    
    // Clear error for this field when user types
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }))
    }
  }

  const handleAssocieChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => {
      const updatedAssocies = [...prev.associes]
      updatedAssocies[currentAssocie] = {
        ...updatedAssocies[currentAssocie],
        [name]: value
      }
      return { ...prev, associes: updatedAssocies }
    })
    
    // Clear error for this field when user types
    const errorKey = `associes[${currentAssocie}].${name}`
    if (errors[errorKey]) {
      setErrors(prev => ({ ...prev, [errorKey]: null }))
    }
  }

  const addAssocie = () => {
    const newCount = formData.associes.length + 1
    setFormData(prev => ({
      ...prev,
      nbrassociee: newCount.toString(),
      associes: [
        ...prev.associes,
        {
          associe_nom: '',
          associe_adresse: '',
          associe_cin: '',
          associe_parts: '',
        }
      ]
    }))
    setCurrentAssocie(newCount - 1)
  }

  const removeAssocie = (index) => {
    if (formData.associes.length <= 1) {
      alert("Une SARL doit avoir au moins un associé")
      return
    }

    const newCount = formData.associes.length - 1
    setFormData(prev => ({
      ...prev,
      nbrassociee: newCount.toString(),
      associes: prev.associes.filter((_, i) => i !== index)
    }))

    if (currentAssocie >= index) {
      setCurrentAssocie(prev => Math.max(0, prev - 1))
    }
  }

  const validateCurrentPage = () => {
    const newErrors = {}
    
    if (pageNumber === 1) {
      // Validate first page fields
      if (!formData.nomsociete.trim()) newErrors.nomsociete = "Le nom de la société est requis"
      if (!formData.objetsociete.trim()) newErrors.objetsociete = "L'objet de la société est requis"
      if (!formData.adress.trim()) newErrors.adress = "L'adresse est requise"
      if (!formData.duree.trim()) newErrors.duree = "La durée est requise"
      if (!formData.valeurpart) newErrors.valeurpart = "La valeur d'une part est requise"
    } 
    else if (pageNumber === 2) {
      // Validate current associate fields
      const associe = formData.associes[currentAssocie]
      if (!associe.associe_nom.trim()) newErrors[`associes[${currentAssocie}].associe_nom`] = "Le nom est requis"
      if (!associe.associe_adresse.trim()) newErrors[`associes[${currentAssocie}].associe_adresse`] = "L'adresse est requise"
      if (!associe.associe_cin.trim()) newErrors[`associes[${currentAssocie}].associe_cin`] = "Le CIN/Passeport est requis"
      if (!associe.associe_parts.trim()) newErrors[`associes[${currentAssocie}].associe_parts`] = "Le nombre de parts est requis"
    }
    else if (pageNumber === 3) {
      // Validate manager fields
      if (!formData.gerant_nom.trim()) newErrors.gerant_nom = "Le nom du gérant est requis"
      if (!formData.gerant_cin.trim()) newErrors.gerant_cin = "Le CIN/Passeport du gérant est requis"
      if (!formData.gerant_adresse.trim()) newErrors.gerant_adresse = "L'adresse du gérant est requise"
      if (!formData.gerant_duree.trim()) newErrors.gerant_duree = "La durée du mandat est requise"
      if (!formData.gerant_pouvoirs.trim()) newErrors.gerant_pouvoirs = "Les pouvoirs du gérant sont requis"
      if (!formData.lieu.trim()) newErrors.lieu = "Le lieu est requis"
      if (!formData.date) newErrors.date = "La date est requise"
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const validateAllAssociates = () => {
    const newErrors = {}
    
    formData.associes.forEach((associe, index) => {
      if (!associe.associe_nom.trim()) newErrors[`associes[${index}].associe_nom`] = "Le nom est requis"
      if (!associe.associe_adresse.trim()) newErrors[`associes[${index}].associe_adresse`] = "L'adresse est requise"
      if (!associe.associe_cin.trim()) newErrors[`associes[${index}].associe_cin`] = "Le CIN/Passeport est requis"
      if (!associe.associe_parts.trim()) newErrors[`associes[${index}].associe_parts`] = "Le nombre de parts est requis"
    })
    
    return { valid: Object.keys(newErrors).length === 0, errors: newErrors }
  }

  const validateAllForm = () => {
    // Validate first page
    if (!formData.nomsociete.trim()) return false
    if (!formData.objetsociete.trim()) return false
    if (!formData.adress.trim()) return false
    if (!formData.duree.trim()) return false
    if (!formData.valeurpart) return false
    
    // Validate all associates
    const { valid } = validateAllAssociates()
    if (!valid) return false
    
    // Validate manager info
    if (!formData.gerant_nom.trim()) return false
    if (!formData.gerant_cin.trim()) return false
    if (!formData.gerant_adresse.trim()) return false
    if (!formData.gerant_duree.trim()) return false
    if (!formData.gerant_pouvoirs.trim()) return false
    if (!formData.lieu.trim()) return false
    if (!formData.date) return false
    
    return true
  }

  const goToNextPage = () => {
    if (validateCurrentPage()) {
      if (pageNumber === 2) {
        // When moving from associates page, check all associates
        const { valid, errors: associateErrors } = validateAllAssociates()
        if (!valid) {
          setErrors(associateErrors)
          // If current associate is valid but others aren't, move to the first invalid one
          for (let i = 0; i < formData.associes.length; i++) {
            if (associateErrors[`associes[${i}].associe_nom`] || 
                associateErrors[`associes[${i}].associe_adresse`] || 
                associateErrors[`associes[${i}].associe_cin`] || 
                associateErrors[`associes[${i}].associe_parts`]) {
              setCurrentAssocie(i)
              return
            }
          }
          return
        }
      }
      setPageNumber(pageNumber + 1)
    }
  }

  const goToPreviousPage = () => {
    if (pageNumber > 1) setPageNumber(pageNumber - 1)
  }

  // const handleSubmit = async () => {
  //   if (!validateCurrentPage()) return
    
  //   // Final validation of all form data
  //   if (!validateAllForm()) {
  //     alert("Veuillez remplir tous les champs obligatoires avant de soumettre le formulaire.")
  //     return
  //   }
    
  //   setIsSubmitting(true)
    
  //   try {
  //     const res = await fetch('http://localhost:5000/sarl/addSarl', {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify(formData),
  //     })
      
  //     if (res.ok) {
  //       alert('Formulaire soumis avec succès!')
  //       // Optional: Reset form
  //       setFormData(initialFormState)
  //       setPageNumber(1)
  //     } else {
  //       const errorData = await res.json().catch(() => null)
  //       alert(`Échec de la soumission: ${errorData?.message || 'Erreur inconnue'}`)
  //     }
  //   } catch (error) {
  //     console.error(error)
  //     alert('Une erreur est survenue lors de la connexion au serveur.')
  //   } finally {
  //     setIsSubmitting(false)
  //   }
  // }
  const handleSubmit = async () => {
    if (!validateCurrentPage()) return;
    
    // Final validation of all form data
    if (!validateAllForm()) {
      alert("Veuillez remplir tous les champs obligatoires avant de soumettre le formulaire.");
      return;
    }
  
    setIsSubmitting(true);
    
    try {
      // Send form data to backend to add SARL
      const res = await fetch('http://localhost:5000/sarl/addSarl', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
  
      if (res.ok) {
        alert('Formulaire soumis avec succès!');
        
        // Get the PDF file from the response
        const blob = await res.blob(); // Assuming the response is the PDF as a blob
        
        // Create a link element to trigger the download
        const link = document.createElement('a');
        const url = URL.createObjectURL(blob); // Create a URL for the blob
        link.href = url;
        link.download = `${formData.nomsociete}_SARL.pdf`; // Set the filename for the download
        link.click(); // Trigger the download
        URL.revokeObjectURL(url); // Clean up the URL object after the download
  
        // Optional: Reset form
        setFormData(initialFormState);
        setPageNumber(1);
      } else {
        const errorData = await res.json().catch(() => null);
        alert(`Échec de la soumission: ${errorData?.message || 'Erreur inconnue'}`);
      }
    } catch (error) {
      console.error(error);
      alert('Une erreur est survenue lors de la connexion au serveur.');
    } finally {
      setIsSubmitting(false);
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
          <span className="text-sm text-gray-700">Étape {pageNumber} sur 3</span>
          <span className="text-sm text-gray-700">{Math.round((pageNumber / 3) * 100)}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${(pageNumber / 3) * 100}%` }}></div>
        </div>
      </div>

      {pageNumber === 1 && (
        <>
          <h1 className='block text-xl font-medium text-gray-700 mb-1 text-center mb-4'>Formulaire de préparation des statuts d'une SARL</h1>
          <div className='flex  flex-row  gap-4'>
            <div className='w-full md:w-[calc(50%-16px)] m-2'>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Nom de la société <span className="text-red-500">*</span>
              </label>
              <input 
                type="text" 
                name="nomsociete" 
                value={formData.nomsociete} 
                onChange={handleChange} 
                className={`w-full px-3 py-2 border ${errors.nomsociete ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300`} 
              />
              <ErrorMessage name="nomsociete" />
            </div>
            
            <div className="w-full md:w-[calc(50%-16px)] m-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Objet de la société <span className="text-red-500">*</span>
              </label>
              <input 
                type="text" 
                name="objetsociete" 
                value={formData.objetsociete} 
                onChange={handleChange} 
                className={`w-full px-3 py-2 border ${errors.objetsociete ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300`} 
              />
              <ErrorMessage name="objetsociete" />
            </div>
          </div>

          <div className='flex flex-row gap-4'>
            <div className='w-full md:w-[calc(50%-16px)] m-2'>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Adresse du siège social <span className="text-red-500">*</span>
              </label>
              <input 
                type="text" 
                name="adress" 
                value={formData.adress} 
                onChange={handleChange} 
                className={`w-full px-3 py-2 border ${errors.adress ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300`} 
              />
              <ErrorMessage name="adress" />
            </div>
            
            <div className="w-full md:w-[calc(50%-16px)] m-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Durée (en années) <span className="text-red-500">*</span>
              </label>
              <input 
                type="text" 
                name="duree" 
                value={formData.duree} 
                onChange={handleChange} 
                className={`w-full px-3 py-2 border ${errors.duree ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300`} 
              />
              <ErrorMessage name="duree" />
            </div>
          </div>

          <div className='flex flex-row gap-4'>
            <div className='w-full md:w-[calc(50%-16px)] m-2'>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Nombre d'associés <span className="text-red-500">*</span>
              </label>
              <input 
                type="number" 
                name="nbrassociee" 
                min="1"
                value={formData.nbrassociee} 
                onChange={handleChange}
                className={`w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300`} 
              />
            </div>
            
            <div className="w-full md:w-[calc(50%-16px)] m-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Valeur d'une part <span className="text-red-500">*</span>
              </label>
              <input 
                type="number" 
                name="valeurpart" 
                value={formData.valeurpart} 
                onChange={handleChange} 
                className={`w-full px-3 py-2 border ${errors.valeurpart ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300`} 
              />
              <ErrorMessage name="valeurpart" />
            </div>
          </div>
        </>
      )}

      {pageNumber === 2 && (
        <>
          <h1 className='block text-xl font-medium text-gray-700 mb-1 text-center mb-4'>
            Associé {currentAssocie + 1} sur {formData.associes.length}
          </h1>
          
          {formData.associes.length > 1 && (
            <div className="flex justify-center mb-4">
              <div className="flex flex-wrap justify-center space-x-2">
                {formData.associes.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentAssocie(index)}
                    className={`w-8 h-8 rounded-full flex items-center justify-center mb-2 ${
                      currentAssocie === index
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-200 text-gray-700'
                    }`}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
            </div>
          )}
          
          <div className='flex flex-row gap-4'>
            <div className='w-full md:w-[calc(50%-16px)] m-2'>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Nom & Prénom <span className="text-red-500">*</span>
              </label>
              <input 
                type="text" 
                name="associe_nom" 
                value={formData.associes[currentAssocie]?.associe_nom || ''} 
                onChange={handleAssocieChange} 
                className={`w-full px-3 py-2 border ${errors[`associes[${currentAssocie}].associe_nom`] ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300`} 
              />
              <ErrorMessage name={`associes[${currentAssocie}].associe_nom`} />
            </div>
            
            <div className="w-full md:w-[calc(50%-16px)] m-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Adresse <span className="text-red-500">*</span>
              </label>
              <input 
                type="text" 
                name="associe_adresse" 
                value={formData.associes[currentAssocie]?.associe_adresse || ''} 
                onChange={handleAssocieChange} 
                className={`w-full px-3 py-2 border ${errors[`associes[${currentAssocie}].associe_adresse`] ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300`} 
              />
              <ErrorMessage name={`associes[${currentAssocie}].associe_adresse`} />
            </div>
          </div>

          <div className='flex flex-row gap-4'>
            <div className='w-full md:w-[calc(50%-16px)] m-2'>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                N° CIN / Passeport <span className="text-red-500">*</span>
              </label>
              <input 
                type="text" 
                name="associe_cin" 
                value={formData.associes[currentAssocie]?.associe_cin || ''} 
                onChange={handleAssocieChange} 
                className={`w-full px-3 py-2 border ${errors[`associes[${currentAssocie}].associe_cin`] ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300`} 
              />
              <ErrorMessage name={`associes[${currentAssocie}].associe_cin`} />
            </div>
            
            <div className="w-full md:w-[calc(50%-16px)] m-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Nombre de parts <span className="text-red-500">*</span>
              </label>
              <input 
                type="text" 
                name="associe_parts" 
                value={formData.associes[currentAssocie]?.associe_parts || ''} 
                onChange={handleAssocieChange} 
                className={`w-full px-3 py-2 border ${errors[`associes[${currentAssocie}].associe_parts`] ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300`} 
              />
              <ErrorMessage name={`associes[${currentAssocie}].associe_parts`} />
            </div>
          </div>

          <div className="flex flex-row justify-between mt-4">
            <div>
              {formData.associes.length > 1 && (
                <button 
                  onClick={() => removeAssocie(currentAssocie)}
                  className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition-colors"
                >
                  Supprimer cet associé
                </button>
              )}
            </div>
            <button 
              onClick={addAssocie}
              className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition-colors"
            >
              Ajouter un associé
            </button>
          </div>
        </>
      )}

      {pageNumber === 3 && (
        <>
          <h1 className='block text-xl font-medium text-gray-700 mb-1 text-center mb-4'>Gérant de la société</h1>
          <div className='flex flex-row gap-4'>
            <div className='w-full md:w-[calc(50%-16px)] m-2'>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Nom & Prénom <span className="text-red-500">*</span>
              </label>
              <input 
                type="text" 
                name="gerant_nom" 
                value={formData.gerant_nom} 
                onChange={handleChange} 
                className={`w-full px-3 py-2 border ${errors.gerant_nom ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300`} 
              />
              <ErrorMessage name="gerant_nom" />
            </div>
            
            <div className="w-full md:w-[calc(50%-16px)] m-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                N° CIN / Passeport <span className="text-red-500">*</span>
              </label>
              <input 
                type="text" 
                name="gerant_cin" 
                value={formData.gerant_cin} 
                onChange={handleChange} 
                className={`w-full px-3 py-2 border ${errors.gerant_cin ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300`} 
              />
              <ErrorMessage name="gerant_cin" />
            </div>
          </div>

          <div className='flex flex-row gap-4'>
            <div className='w-full md:w-[calc(50%-16px)] m-2'>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Adresse <span className="text-red-500">*</span>
              </label>
              <input 
                type="text" 
                name="gerant_adresse" 
                value={formData.gerant_adresse} 
                onChange={handleChange} 
                className={`w-full px-3 py-2 border ${errors.gerant_adresse ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300`} 
              />
              <ErrorMessage name="gerant_adresse" />
            </div>
            
            <div className="w-full md:w-[calc(50%-16px)] m-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Durée du mandat <span className="text-red-500">*</span>
              </label>
              <input 
                type="text" 
                name="gerant_duree" 
                value={formData.gerant_duree} 
                onChange={handleChange} 
                className={`w-full px-3 py-2 border ${errors.gerant_duree ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300`} 
              />
              <ErrorMessage name="gerant_duree" />
            </div>
          </div>

          <div className='flex flex-row gap-4'>
            <div className="w-full md:w-[calc(50%-16px)] m-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Pouvoirs <span className="text-red-500">*</span>
              </label>
              <input 
                type="text" 
                name="gerant_pouvoirs" 
                value={formData.gerant_pouvoirs} 
                onChange={handleChange} 
                className={`w-full px-3 py-2 border ${errors.gerant_pouvoirs ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300`} 
              />
              <ErrorMessage name="gerant_pouvoirs" />
            </div>
            
            <div className="w-full md:w-[calc(50%-16px)] m-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Lieu <span className="text-red-500">*</span>
              </label>
              <input 
                type="text" 
                name="lieu" 
                value={formData.lieu} 
                onChange={handleChange} 
                className={`w-full px-3 py-2 border ${errors.lieu ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300`} 
              />
              <ErrorMessage name="lieu" />
            </div>
          </div>

          <div className="m-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Date <span className="text-red-500">*</span>
            </label>
            <input 
              type="date" 
              name="date" 
              value={formData.date} 
              onChange={handleChange} 
              className={`w-full px-3 py-2 border ${errors.date ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300`} 
            />
            <ErrorMessage name="date" />
          </div>
        </>
      )}

      <div className="pt-4 flex justify-between gap-4">
        <button 
          onClick={goToPreviousPage} 
          disabled={pageNumber === 1} 
          className={`bg-blue-600 text-white py-2 px-4 rounded-md transition-colors ${pageNumber === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'}`}
        >
          Précédent
        </button>

        {pageNumber < 3 ? (
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