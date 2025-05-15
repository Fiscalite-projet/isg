import React from 'react';

const ProductionForm = ({ 
  formData,
  onProductionPrevueChange,
  onProductionPrecedenteChange
}) => {
  const productionPrevue = formData.production?.productionPrevue || [];
  const productionPrecedente = formData.production?.productionPrecedente || [];

  const handleProductionChange = (index, field, value, type = 'prevue') => {
    const updateList = [...(type === 'prevue' ? productionPrevue : productionPrecedente)];
    updateList[index] = { ...updateList[index], [field]: value };
    
    if (type === 'prevue') {
      onProductionPrevueChange(updateList);
    } else {
      onProductionPrecedenteChange(updateList);
    }
  };

  const handleAddRow = (type = 'prevue') => {
    const newRow = { produit: '', quantite: '', superficie: '', valeur: '' };
    if (type === 'prevue') {
      onProductionPrevueChange([...productionPrevue, newRow]);
    } else {
      onProductionPrecedenteChange([...productionPrecedente, newRow]);
    }
  };

  return (
    <div className="space-y-8">
      {/* Production prévue */}
      <div>
        <h2 className="text-lg font-semibold mb-4">Production prévue</h2>
        {productionPrevue?.map((item, index) => (
          <div key={index} className="grid grid-cols-4 gap-4 mb-4">
            <input
              type="text"
              placeholder="Produits/services"
              value={item.produit}
              onChange={(e) => handleProductionChange(index, 'produit', e.target.value, 'prevue')}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
            />
            <input
              type="text"
              placeholder="Quantité (unité)"
              value={item.quantite}
              onChange={(e) => handleProductionChange(index, 'quantite', e.target.value, 'prevue')}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
            />
            <input
              type="text"
              placeholder="Superficie"
              value={item.superficie}
              onChange={(e) => handleProductionChange(index, 'superficie', e.target.value, 'prevue')}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
            />
            <input
              type="text"
              placeholder="Valeur"
              value={item.valeur}
              onChange={(e) => handleProductionChange(index, 'valeur', e.target.value, 'prevue')}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
        ))}
        <button
          type="button"
          onClick={() => handleAddRow('prevue')}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Ajouter une ligne
        </button>
      </div>

      {/* Production de l'année précédente */}
      <div>
        <h2 className="text-lg font-semibold mb-4">Production de l'année précédente</h2>
        {productionPrecedente?.map((item, index) => (
          <div key={index} className="grid grid-cols-4 gap-4 mb-4">
            <input
              type="text"
              placeholder="Produits/services"
              value={item.produit}
              onChange={(e) => handleProductionChange(index, 'produit', e.target.value, 'precedente')}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
            />
            <input
              type="text"
              placeholder="Quantité (unité)"
              value={item.quantite}
              onChange={(e) => handleProductionChange(index, 'quantite', e.target.value, 'precedente')}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
            />
            <input
              type="text"
              placeholder="Superficie"
              value={item.superficie}
              onChange={(e) => handleProductionChange(index, 'superficie', e.target.value, 'precedente')}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
            />
            <input
              type="text"
              placeholder="Valeur"
              value={item.valeur}
              onChange={(e) => handleProductionChange(index, 'valeur', e.target.value, 'precedente')}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
        ))}
        <button
          type="button"
          onClick={() => handleAddRow('precedente')}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Ajouter une ligne
        </button>
      </div>
    </div>
  );
};

export default ProductionForm;