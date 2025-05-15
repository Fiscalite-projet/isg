import React from 'react';

const ProjectLocationSection = ({ formData, handleChange, modeOccupation, setModeOccupation, modes }) => {
  const handleNestedChange = (e) => {
    const { name, value } = e.target;
    handleChange({
      target: {
        name: `projectLocationSection.${name}`,
        value
      }
    });
  };

  return (
    <>
      <h1 className="block text-xl font-medium text-gray-700 mb-4 text-center">
        Lieu d'implantation du projet
      </h1>

      <div className="flex flex-wrap gap-4">
        {[
          { name: 'gouvernorat', label: 'Gouvernorat' },
          { name: 'delegation', label: 'Délégation' },
          { name: 'imada', label: 'Imada' },
          { name: 'adresseImplantation', label: 'Lieu / Adresse' },
          { name: 'port', label: 'Port' },
          { name: 'surfaceTotale', label: 'Surface totale (m²)', type: 'number' },
          { name: 'surfaceOccupee', label: 'Surface occupée (m²)', type: 'number' },
          { name: 'surfaceCouverte', label: 'Surface couverte (m²)', type: 'number' }
        ].map(({ name, label, type = 'text' }) => (
          <div key={name} className="w-full md:w-[calc(50%-8px)]">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {label} <span className="text-red-500">*</span>
            </label>
            <input
              type={type}
              name={name}
              value={formData.projectLocationSection?.[name] || ''}
              onChange={handleNestedChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-300"
            />
          </div>
        ))}
      </div>

      <div className="mt-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Mode d'occupation <span className="text-red-500">*</span>
        </label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {modes.map((mode, index) => (
            <label key={index} className="flex items-center space-x-2">
              <input
                type="radio"
                name="modeOccupation"
                value={mode}
                checked={modeOccupation === mode}
                onChange={(e) => {
                  setModeOccupation(e.target.value);
                  handleNestedChange(e);
                }}
                className="text-blue-600 focus:ring-blue-500"
              />
              <span className="text-sm text-gray-700">{mode}</span>
            </label>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProjectLocationSection;