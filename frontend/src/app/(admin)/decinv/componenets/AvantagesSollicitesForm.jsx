import React from 'react';

const AvantagesSollicitesForm = ({ pageNumber, formData, setFormData ,handleChange}) => {
 

  if (pageNumber !== 10) return null;

  return (
    <div className="p-4 rounded space-y-6">
      <h2 className="font-bold text-lg align-center p-2">
        Les avantages sollicités <span className="text-red-500">*</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[
          { name: 'avantageSecteursPrioritaires', label: 'Prime des secteurs prioritaires ' },
          { name: 'avantageFilieresEconomiques', label: 'Prime des filières économiques' },
          { name: 'avantageInvestissementsMateriels', label: 'Prime des investissements matériels (nouvelles technologies et productivité)' },
          { name: 'avantageInvestissementsImmateriels', label: 'Prime des investissements immatériels' },
          { name: 'avantageRechercheDeveloppement', label: 'Prime de la recherche et développement' },
          { name: 'avantageFormationCertif', label: 'Formation des employés conduisant à la certification des compétences' },
          { name: 'avantageDevRegional', label: 'Prime de développement régional' },
          { name: 'avantageCnss', label: 'Contribution patronale à la CNSS (salaires employés tunisiens)' },
          { name: 'avantageSalaireEncadrement', label: "Prise en charge partielle des salaires selon le niveau d'encadrement" },
          { name: 'avantageDevDurable', label: 'Prime développement durable (pollution & environnement)' },
          { name: 'avantageParticipationCapital', label: 'Participation au capital' },
          { name: 'avantageCreditFoncier', label: 'Crédit foncier agricole' },
          { name: 'avantageProjetInteretNational', label: 'Projet d’intérêt national', full: true },
        ].map(({ name, label, full }) => (
          <label key={name} className={`flex items-center space-x-2 ${full ? 'col-span-full' : ''}`}>
            <input
  type="checkbox"
  name={`avantagesSollicites.${name}`}  // Note the nested path
  checked={formData.avantagesSollicites?.[name] || false}
  onChange={handleChange}
  className="form-checkbox text-blue-600"
/>
            <span>{label}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default AvantagesSollicitesForm;
