import React from 'react';

const Emplois = ({ pageNumber, formData, handleChange }) => {
  const handleNestedChange = (e) => {
    const { name, value } = e.target;
    handleChange({
      target: {
        name: `emplois.${name}`,
        value
      }
    });
  };
  return (
    pageNumber === 6 && (
      <div>
        <h1 className="block text-xl font-medium text-gray-700 mb-4 text-center">
          Emplois
        </h1>

        <div className="flex flex-wrap gap-4">
          {/* Emplois prévus et existants */}
          <div className="w-full md:w-[calc(50%-8px)]">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Nombre d’emplois prévus <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              name="emploisPrevus"
              value={formData.emplois.emploisPrevus}
              onChange={handleNestedChange}
              className="w-full border border-gray-300 px-3 py-2 rounded-md"
            />
          </div>
          <div className="w-full md:w-[calc(50%-8px)]">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Nombre d’emplois existants <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              name="emploisExistants"
              value={formData.emplois.emploisExistants}
              onChange={handleNestedChange}
              className="w-full border border-gray-300 px-3 py-2 rounded-md"
            />
          </div>

          {/* Cadres, techniciens, administratifs, autres */}
          {[
            ['cadres', 'techniciens'],
            ['administratifs', 'autres'],
          ].map(([left, right], i) => (
            <React.Fragment key={i}>
              <div className="w-full md:w-[calc(50%-8px)]">
                <label className="block text-sm font-medium text-gray-700 mb-1 capitalize">
                  {left} <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  name={left}
                  value={formData.emplois[left]}
                  onChange={handleNestedChange}
                  className="w-full border border-gray-300 px-3 py-2 rounded-md"
                />
              </div>
              <div className="w-full md:w-[calc(50%-8px)]">
                <label className="block text-sm font-medium text-gray-700 mb-1 capitalize">
                  {right} <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  name={right}
                  value={formData.emplois[right]}
                  onChange={handleNestedChange}
                  className="w-full border border-gray-300 px-3 py-2 rounded-md"
                />
              </div>
            </React.Fragment>
          ))}

          {/* Emplois des cadres */}
          <div className="w-full md:w-[calc(50%-8px)]">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Emplois des cadres (diplômes) <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="emploisCadresDiplomes"
              value={formData.emplois.emploisCadresDiplomes}
              onChange={handleNestedChange}
              placeholder="Ex : ingénieurs, master, etc."
              className="w-full border border-gray-300 px-3 py-2 rounded-md"
            />
          </div>

          {/* Emplois saisonniers */}
          <div className="w-full md:w-[calc(50%-8px)]">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Emplois saisonniers (nombre) <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              name="emploisSaisonniersNombre"
              value={formData.emplois.emploisSaisonniersNombre}
              onChange={handleNestedChange}
              className="w-full border border-gray-300 px-3 py-2 rounded-md"
            />
          </div>

          <div className="w-full md:w-[calc(50%-8px)]">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Classification <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="classification"
              value={formData.emplois.classification}
              onChange={handleNestedChange}
              placeholder="Ex : agricole, BTP, etc."
              className="w-full border border-gray-300 px-3 py-2 rounded-md"
            />
          </div>

          <div className="w-full md:w-[calc(50%-8px)]">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Diplômes <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="diplomes"
              value={formData.emplois.diplomes}
              onChange={handleNestedChange}
              placeholder="Ex : CAP, BTS, Licence"
              className="w-full border border-gray-300 px-3 py-2 rounded-md"
            />
          </div>
        </div>
      </div>
    )
  );
};

export default Emplois;

