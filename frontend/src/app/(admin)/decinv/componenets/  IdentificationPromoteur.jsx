import React from 'react'

export const   IdentificationPromoteur = ({ formData, handleChange, pageNumber }) => {
  const handleNestedChange = (e) => {
    const { name, value } = e.target;
    handleChange({
      target: {
        name: `identificationPromoteur.${name}`,
        value
      }
    });
  };
  return (
    (
      <>
        <h1 className='block text-xl font-medium text-gray-700 mb-4 text-center'>
          Identification du Déclarant (le promoteur)
        </h1>
    
        {/* Nom et Nationalité */}
        <div className="flex flex-row gap-4">
          <div className="w-full md:w-[calc(50%-16px)] m-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Nom et Prénom <span className="text-red-500">*</span>
            </label>
            <input
             required
              type="text"
              name="nomPrenom"
              value={formData.identificationPromoteur.nomPrenom}
              onChange={handleNestedChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
    
          <div className="w-full md:w-[calc(50%-16px)] m-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Nationalité <span className="text-red-500">*</span>
            </label>
            <div className="flex flex-col space-y-1">
              <label className="inline-flex items-center">
                <input
                required
                  type="radio"
                  name="nationalite"
                  value="Tunisien"
                  checked={formData.identificationPromoteur.nationalite === 'Tunisien'}
                  onChange={handleNestedChange}
                  className="form-radio text-blue-600"
                />
                <span className="ml-2">Tunisien </span>
              </label>
              <label className="inline-flex items-center">
                <input
                  required
                  type="radio"
                  name="nationalite"
                  value="Résident à l’étranger"
                  checked={formData.identificationPromoteur.nationalite === 'Résident à l’étranger'}
                  onChange={handleNestedChange}
                  className="form-radio text-blue-600"
                />
                <span className="ml-2">Résident à l’étranger</span>
              </label>
            </div>
          </div>
        </div>
    
        {/* Pays de résidence & Résident/Non Résident */}
        <div className="flex flex-row gap-4">
          <div className="w-full md:w-[calc(50%-16px)] m-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Pays de Résidence <span className="text-red-500">*</span>
            </label>
            <input
             required
              type="text"
              name="paysResidence"
              value={formData.identificationPromoteur.paysResidence}
              onChange={handleNestedChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
    
          <div className="w-full md:w-[calc(50%-16px)] m-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Résident / Non Résident <span className="text-red-500">*</span>
            </label>
            <div className="flex space-x-4">
              <label className="inline-flex items-center">
                <input
                 required
                  type="radio"
                  name="statutResidence"
                  value="Résident"
                  checked={formData.identificationPromoteur.statutResidence === 'Résident'}
                  onChange={handleNestedChange}
                  className="form-radio text-blue-600"
                />
                <span className="ml-2">Résident</span>
              </label>
              <label className="inline-flex items-center">
                <input
                 required
                  type="radio"
                  name="statutResidence"
                  value="Non Résident"
                  checked={formData.identificationPromoteur.statutResidence === 'Non Résident'}
                  onChange={handleNestedChange}
                  className="form-radio text-blue-600"
                />
                <span className="ml-2">Non Résident</span>
              </label>
            </div>
          </div>
        </div>
    
        {/* Date et lieu de naissance & Niveau d’éducation */}
        <div className="flex flex-row gap-4">
          <div className="w-full md:w-[calc(50%-16px)] m-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Date et lieu de Naissance <span className="text-red-500">*</span>
            </label>
            <input
              required
              type="text"
              name="naissance"
              value={formData.identificationPromoteur.naissance}
              onChange={handleNestedChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
    
          <div className="w-full md:w-[calc(50%-16px)] m-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Niveau d’éducation <span className="text-red-500">*</span>
            </label>
            <input
            required
              type="text"
              name="niveauEducation"
              value={formData.identificationPromoteur.niveauEducation}
              onChange={handleNestedChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
        </div>
    
        {/* Diplôme & Qualité */}
        <div className="flex flex-row gap-4">
          <div className="w-full md:w-[calc(50%-16px)] m-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Diplôme <span className="text-red-500">*</span>
            </label>
            <input
             required
              type="text"
              name="diplome"
              value={formData.identificationPromoteur.diplome}
              onChange={handleNestedChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
    
          <div className="w-full md:w-[calc(50%-16px)] m-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Qualité (gérant / promoteur) <span className="text-red-500">*</span>
            </label>
            <input
              required
              type="text"
              name="qualite"
              value={formData.identificationPromoteur.qualite}
              onChange={handleNestedChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
        </div>
    
        {/* Raison Sociale & Pièce d’identité */}
        <div className="flex flex-row gap-4">
          <div className="w-full md:w-[calc(50%-16px)] m-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Raison Sociale <span className="text-red-500">*</span>
            </label>
            <input
              required
              type="text"
              name="raisonSociale"
              value={formData.identificationPromoteur.raisonSociale}
              onChange={handleNestedChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
    
          <div className="w-full md:w-[calc(50%-16px)] m-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Pièce d’identité <span className="text-red-500">*</span>
            </label>
            <input
              required
              type="text"
              name="pieceIdentite"
              value={formData.identificationPromoteur.pieceIdentite}
              onChange={handleNestedChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
        </div>
    
        {/* Date et lieu de délivrance & Adresse */}
        <div className="flex flex-row gap-4">
          <div className="w-full md:w-[calc(50%-16px)] m-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Date et lieu de délivrance <span className="text-red-500">*</span>
            </label>
            <input
              required
              type="text"
              name="dateDelivrance"
              value={formData.identificationPromoteur.dateDelivrance}
              onChange={handleNestedChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
    
          <div className="w-full md:w-[calc(50%-16px)] m-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Adresse <span className="text-red-500">*</span>
            </label>
            <input
              required
              type="text"
              name="adresse"
              value={formData.identificationPromoteur.adresse}
              onChange={handleNestedChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
        </div>
    
        {/* Ville & Code Postal */}
        <div className="flex flex-row gap-4">
          <div className="w-full md:w-[calc(50%-16px)] m-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Ville <span className="text-red-500">*</span>
            </label>
            <input
              required
              type="text"
              name="ville"
              value={formData.identificationPromoteur.ville}
              onChange={handleNestedChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
    
          <div className="w-full md:w-[calc(50%-16px)] m-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Code Postal <span className="text-red-500">*</span>
            </label>
            <input
              required
              type="text"
              name="codePostal"
              value={formData.identificationPromoteur.codePostal}
              onChange={handleNestedChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
        </div>
    
        {/* Tél & Fax */}
        <div className="flex flex-row gap-4">
          <div className="w-full md:w-[calc(50%-16px)] m-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Tél / GSM <span className="text-red-500">*</span>
            </label>
            <input
              required
              type="text"
              name="tel"
              value={formData.identificationPromoteur.tel}
              onChange={handleNestedChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
    
          <div className="w-full md:w-[calc(50%-16px)] m-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Fax <span className="text-red-500">*</span>
            </label>
            <input
              required
              type="text"
              name="fax"
              value={formData.identificationPromoteur.fax}
              onChange={handleNestedChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
        </div>
    
        {/* Email & N° CIN / Passeport */}
        <div className="flex flex-row gap-4">
          <div className="w-full md:w-[calc(50%-16px)] m-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Adresse Électronique <span className="text-red-500">*</span>
            </label>
            <input 
              required
              type="email"
              name="email"
              value={formData.identificationPromoteur.email}
              onChange={handleNestedChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
    
          <div className="w-full md:w-[calc(50%-16px)] m-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              N° CIN / N° Passeport <span className="text-red-500">*</span>
            </label>
            <input
              required
              type="text"
              name="cinPasseport"
              value={formData.identificationPromoteur.cinPasseport}
              onChange={handleNestedChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
        </div>
      </>
    )
  )
}
