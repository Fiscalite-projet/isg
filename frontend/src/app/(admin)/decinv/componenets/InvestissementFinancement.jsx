import React from 'react';

const InvestissementFinancement = ({ pageNumber, formData, handleChange }) => {
  const handleNestedChange = (e) => {
    const { name, value } = e.target;
    handleChange({
      target: {
        name: `investissementFinancement.${name}`,
        value
      }
    });
  };

  return (
    pageNumber === 7 && (
      <div>
        <h1 className="block text-xl font-medium text-gray-700 mb-4 text-center">
          Schéma d'investissement et de financement
        </h1>

        <div className="flex flex-wrap gap-4">
          {/* Investissement */}
          <h2 className="w-full text-lg font-medium text-gray-700 mb-2">Investissement <span className="text-red-500">*</span></h2>
          
          {[
            ['terrain', 'Terrain'],
            ['genieCivil', 'Génie civil'],
            ['amenagements', 'Aménagements'],
            ['equipementImporte', 'Equipement importé'],
            ['equipementLocal', 'Equipement local'],
            ['materielTransport', 'Matériel de transport'],
            ['betail', 'Le bétail'],
            ['plantations', 'Les plantations'],
            ['fondsRoulement', 'Fonds de roulement'],
            ['fraisEtude', 'Frais d\'étude'],
            ['fraisDivers', 'Frais divers']
          ].map(([name, label]) => (
            <div key={name} className="w-full md:w-[calc(50%-8px)]">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {label} <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                name={name}
                value={formData.investissementFinancement?.[name] || ''}
                onChange={handleNestedChange}
                className="w-full border border-gray-300 px-3 py-2 rounded-md"
              />
            </div>
          ))}

          {/* Financement */}
          <h2 className="w-full text-lg font-medium text-gray-700 mb-2">Financement <span className="text-red-500">*</span></h2>

          {[
            ['capitalSocial', 'Capital social'],
            ['augmentationCapital', 'Augmentation du capital'],
            ['fondsPropres', 'Fonds propres'],
            ['compteCourantAssocies', 'Compte courant des associés'],
            ['creditLongTerme', 'Crédit long terme'],
            ['creditMoyenTerme', 'Crédit moyen terme'],
            ['creditCourtTerme', 'Crédit court terme'],
            ['creditLeasing', 'Crédit leasing'],
            ['creditFournisseur', 'Crédit fournisseur'],
            ['creditFoncier', 'Crédit foncier'],
            ['creditEtranger', 'Crédit étranger']
          ].map(([name, label]) => (
            <div key={name} className="w-full md:w-[calc(50%-8px)]">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {label} {['capitalSocial', 'augmentationCapital'].includes(name) && <span className="text-red-500">*</span>}
              </label>
              <input
                type="number"
                name={name}
                value={formData.investissementFinancement?.[name] || ''}
                onChange={handleNestedChange}
                className="w-full border border-gray-300 px-3 py-2 rounded-md"
              />
            </div>
          ))}
        </div>
      </div>
    )
  );
};

export default InvestissementFinancement;