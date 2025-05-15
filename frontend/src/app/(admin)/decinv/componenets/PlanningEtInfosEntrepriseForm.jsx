import React from 'react';

const PlanningEtInfosEntrepriseForm = ({ formData, handleChange, pageNumber }) => {
  const handleNestedChange = (e) => {
    const { name, value } = e.target;
    handleChange({
      target: {
        name: `planningEtInfosEntreprise.${name}`,
        value
      }
    });
  };
  if (pageNumber !== 9) return null;


  return (
    <div className="space-y-8">
      {/* Planning prévisionnel des réalisations */}
      <div>
        <h2 className="text-lg font-semibold mb-4">Planning prévisionnel des réalisations</h2>
        <div className="grid grid-cols-4 gap-4 mb-4">
          <input
            type="text"
            name="creationCapitalMois"
            placeholder="Création ou capital (Mois)"
            value={formData.planningEtInfosEntreprise.creationCapitalMois || ''}
            onChange={handleNestedChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
          />
          <input
            type="text"
            name="creationCapitalAnnee"
            placeholder="Année"
            value={formData.planningEtInfosEntreprise.creationCapitalAnnee || ''}
            onChange={handleNestedChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
          />
          <input
            type="text"
            name="commandeEquipementMois"
            placeholder="Commande équipement (Mois)"
            value={formData.planningEtInfosEntreprise.commandeEquipementMois || ''}
            onChange={handleNestedChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
          />
          <input
            type="text"
            name="commandeEquipementAnnee"
            placeholder="Année"
            value={formData.planningEtInfosEntreprise.commandeEquipementAnnee || ''}
            onChange={handleNestedChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>
        <div className="grid grid-cols-4 gap-4 mb-4">
          <input
            type="text"
            name="dateActiviteMois"
            placeholder="Activité (Mois)"
            value={formData.planningEtInfosEntreprise.dateActiviteMois || ''}
            onChange={handleNestedChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
          />
          <input
            type="text"
            name="dateActiviteAnnee"
            placeholder="Année"
            value={formData.planningEtInfosEntreprise.dateActiviteAnnee || ''}
            onChange={handleNestedChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>
      </div>

      {/* Autres informations */}
      <div>
        <h2 className="text-lg font-semibold mb-4">Autres informations sur l’entreprise</h2>
        <div className="grid grid-cols-4 gap-4 mb-4">
          <input
            type="text"
            name="referenceProjetInitial"
            placeholder="Référence du projet initial"
            value={formData.planningEtInfosEntreprise.referenceProjetInitial || ''}
            onChange={handleNestedChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
          />
          <input
            type="text"
            name="codeDouane"
            placeholder="Code en douane"
            value={formData.planningEtInfosEntreprise.codeDouane || ''}
            onChange={handleNestedChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
          />
          <input
            type="text"
            name="numeroCnss"
            placeholder="N° CNSS"
            value={formData.planningEtInfosEntreprise.numeroCnss || ''}
            onChange={handleNestedChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
          />
          <input
            type="text"
            name="numeroRegistreCommerce"
            placeholder="N° du registre de commerce"
            value={formData.planningEtInfosEntreprise.numeroRegistreCommerce || ''}
            onChange={handleNestedChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>
      </div>

      {/* Mode de délivrance de l’ADD */}
      <div>
        <h2 className="text-lg font-semibold mb-4">Mode de délivrance de l’ADD</h2>
        <div className="grid grid-cols-4 gap-4 mb-4">
          <input
            type="text"
            name="modeLieuDelivrance"
            placeholder="Mode et lieu de délivrance"
            value={formData.planningEtInfosEntreprise.modeLieuDelivrance || ''}
            onChange={handleNestedChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>
      </div>
    </div>
  );
};

export default PlanningEtInfosEntrepriseForm;
