import React from 'react';

const AutorisationsFormSection = ({ autorisations, handleChangeCharge, handleAddField, handleRemoveField }) => {
 
  return (
    <>
      <h1 className="block text-xl font-medium text-gray-700 mb-4 text-center">
        Autorisations / Cahiers de charges nécessaires au projet <span className="text-red-500">*</span>
      </h1>

      {autorisations?.map((val, index) => (
        <div key={index} className="mb-4 w-full">
          <label
            htmlFor={`autorisation-${index}`}
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Autorisation N°{index + 1}
          </label>
          <div className="flex items-center gap-2">
            <input
              id={`autorisation-${index}`}
              type="text"
              value={val}
              onChange={(e) => handleChangeCharge(index, e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Ex: Autorisation Ministère de l’Environnement"
            />
            {autorisations.length > 1 && (
              <button
                type="button"
                onClick={() => handleRemoveField(index)}
                className="text-red-600 text-sm hover:underline"
              >
                Supprimer
              </button>
            )}
          </div>
        </div>
      ))}

      <button
        type="button"
        onClick={handleAddField}
        className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
      >
        Ajouter une autre autorisation
      </button>
    </>
  );
};

export default AutorisationsFormSection;
