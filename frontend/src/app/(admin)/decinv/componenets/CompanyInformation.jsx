import React from 'react';

const CompanyInfoForm = ({ formData, handleChange }) => {
  const handleNestedChange = (e) => {
    const { name, value } = e.target;
    handleChange({
      target: {
        name: `companyInfoForm.${name}`,
        value
      }
    });
  };
  
  return (
    <>
      <h1 className='block text-xl font-medium text-gray-700 mb-4 text-center'>
        Informations sur l’Entreprise
      </h1>

      <div className='flex flex-row gap-4'>
        <div className='w-full md:w-[calc(50%-16px)] m-2'>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Nom (Raison sociale / Nom commercial) <span className="text-red-500">*</span>
          </label>
          <input 
            type="text"
            name="raisonSociale"
            value={formData.companyInfoForm.raisonSocial}
            onChange={handleNestedChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>

        <div className='w-full md:w-[calc(50%-16px)] m-2'>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Le gérant / représentant légal <span className="text-red-500">*</span>
          </label>
          <input 
            type="text"
            name="gerant"
            value={formData.companyInfoForm.gerant}
            onChange={handleNestedChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>
      </div>

      {/* Remaining fields... */}
      {[
        ['siegeSocial', 'Siège social *', 'text'],
        ['registreCommerce', 'N° Registre de commerce', 'text'],
        ['matricule', 'Matricule fiscal et douanière', 'text'],
        ['capital', 'Capital social', 'number'],
        ['formeJuridique', 'Forme juridique', 'text'],
        ['participationEtrangere', 'Participation étrangère', 'text'],
        ['repartitionEtrangere', 'Répartition de la participation étrangère', 'text'],
        ['repartitionLocale', 'Répartition de la participation locale', 'text'],
        ['cnss', 'N° CNSS', 'text'],
        ['tel', 'Tél', 'text'],
        ['fax', 'Fax', 'text'],
        ['email', 'Adresse électronique', 'email'],
      ].reduce((rows, [name, label, type], i, arr) => {
        if (i % 2 === 0) {
          const next = arr[i + 1];
          rows.push(
            <div key={name} className='flex flex-row gap-4'>
              {[arr[i], next].filter(Boolean).map(([n, l, t]) => (
                <div key={n} className='w-full md:w-[calc(50%-16px)] m-2'>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {l} <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type={t}
                    name={n}
                    value={formData.companyInfoForm[n]}
                    onChange={handleNestedChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
                  />
                </div>
              ))}
            </div>
          );
        }
        return rows;
      }, [])}
    </>
  );
};

export default CompanyInfoForm;
