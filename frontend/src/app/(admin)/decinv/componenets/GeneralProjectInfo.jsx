import React from 'react';

const GeneralProjectInfo = ({ formData, handleChange }) => {
  const handleNestedChange = (e) => {
    const { name, value } = e.target;
    handleChange({
      target: {
        name: `generalProjectInfo.${name}`,
        value
      }
    });
  };
  
  return (
    <>
      <h1 className='block text-xl font-medium text-gray-700 mb-4 text-center'>
        Informations Générales sur le projet
      </h1>

      {/* Régime d'investissement & Nature du projet */}
      <div className='flex flex-row gap-4'>
        <div className='w-full md:w-[calc(50%-16px)] m-2'>
          <label className='block text-sm font-medium text-gray-700 mb-1'>
            Régime d'investissement <span className="text-red-500">*</span>
          </label>
          <select
            name="regimeInvestissement"
            value={formData.generalProjectInfo?.regimeInvestissement || ''}
            onChange={handleNestedChange}
            className='w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300'
          >
            <option value="">Sélectionner</option>
            <option value="Total">Total</option>
            <option value="Export">Export</option>
          </select>
        </div>

        <div className='w-full md:w-[calc(50%-16px)] m-2'>
          <label className='block text-sm font-medium text-gray-700 mb-1'>
            Nature du projet <span className="text-red-500">*</span>
          </label>
          <div className='space-y-1'>
            {['Création', 'Extension', 'Renouvellement'].map((option) => (
              <label key={option} className='flex items-center gap-2'>
                <input
                  type='radio'
                  name='natureProjet'
                  value={option}
                  onChange={handleNestedChange}
                  checked={formData.generalProjectInfo?.natureProjet === option}
                />
                {option}
              </label>
            ))}
            <label className='block mt-1'>
              Autre : <span className="text-red-500">*</span>
              <input
                type='text'
                name='natureProjetAutre'
                placeholder='Préciser...'
                value={formData.generalProjectInfo?.natureProjetAutre || ''}
                onChange={handleNestedChange}
                className='ml-2 mt-1 px-2 py-1 border border-gray-300 rounded-md w-full'
              />
            </label>
          </div>
        </div>
      </div>

      {/* Secteur & Activité */}
      <div className='flex flex-row gap-4'>
        <div className='w-full md:w-[calc(50%-16px)] m-2'>
          <label className='block text-sm font-medium text-gray-700 mb-1'>
            Secteur <span className="text-red-500">*</span>
          </label>
          <input
            type='text'
            name='secteur'
            value={formData.generalProjectInfo?.secteur || ''}
            onChange={handleNestedChange}
            className='w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300'
          />
        </div>

        <div className='w-full md:w-[calc(50%-16px)] m-2'>
          <label className='block text-sm font-medium text-gray-700 mb-1'>
            Activité <span className="text-red-500">*</span>
          </label>
          <input
            type='text'
            name='activite'
            value={formData.generalProjectInfo?.activite || ''}
            onChange={handleNestedChange}
            className='w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300'
          />
        </div>
      </div>

      {/* Activités secondaires */}
      <div className='w-full m-2'>
        <label className='block text-sm font-medium text-gray-700 mb-1'>
          Activités secondaires <span className="text-red-500">*</span>
        </label>
        <input
          type='text'
          name='activitesSecondaires'
          value={formData.generalProjectInfo?.activitesSecondaires || ''}
          onChange={handleNestedChange}
          className='w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300'
        />
      </div>

      {/* Insertion dans filière économique */}
      <div className='w-full m-2'>
        <label className='block text-sm font-medium text-gray-700 mb-1'>
          Insertion du projet dans une filière économique <span className="text-red-500">*</span>
        </label>
        <div className='flex gap-4'>
          {['Oui', 'Non'].map((val) => (
            <label key={val} className='flex items-center gap-2'>
              <input
                type='radio'
                name='insertionFiliere'
                value={val}
                onChange={handleNestedChange}
                checked={formData.generalProjectInfo?.insertionFiliere === val}
              />
              {val}
            </label>
          ))}
        </div>

        <div className='mt-2'>
          <label className='block text-sm font-medium text-gray-700 mb-1'>
            Nom de la filière économique <span className="text-red-500">*</span>
          </label>
          <input
            type='text'
            name='nomFiliere'
            value={formData.generalProjectInfo?.nomFiliere || ''}
            onChange={handleNestedChange}
            className='w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300'
          />
        </div>
      </div>

      {/* Données détaillées */}
      <div className='w-full m-2'>
        <label className='block text-sm font-medium text-gray-700 mb-1'>
          Données détaillées sur le projet <span className="text-red-500">*</span>
        </label>
        <textarea
          name='donneesDetaillees'
          rows='4'
          value={formData.generalProjectInfo?.donneesDetaillees || ''}
          onChange={handleNestedChange}
          className='w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300'
        />
      </div>
    </>
  );
};

export default GeneralProjectInfo;