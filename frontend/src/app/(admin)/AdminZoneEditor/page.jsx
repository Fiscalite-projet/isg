'use client';
import React, { useEffect, useState } from 'react';

const AdminZonesEditor = () => {
  const [zonesData, setZonesData] = useState([]);
  const [selectedZoneIndex, setSelectedZoneIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);
  const [otherBenefits, setOtherBenefits] = useState(['']);
  const [successMessage, setSuccessMessage] = useState('');

  // Fetch data on load
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('http://localhost:5000/zones');
        if (!res.ok) {
          throw new Error('Failed to fetch zones');
        }
        const data = await res.json();
        setZonesData(data);
        if (data.length > 0) {
          setOtherBenefits(data[0].otherBenefits || ['']);
        }
        setLoading(false);
      } catch (err) {
        console.error("Error loading zones:", err);
        setError(err.message);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setZonesData((prev) => {
      const updatedZones = [...prev];
      updatedZones[selectedZoneIndex] = {
        ...updatedZones[selectedZoneIndex],
        [name]: value === '' ? '' : Number(value),
      };
      return updatedZones;
    });
  };

  const handleBenefitChange = (index, value) => {
    const updatedBenefits = [...otherBenefits];
    updatedBenefits[index] = value;
    setOtherBenefits(updatedBenefits);
  };

  const handleAddBenefit = () => {
    setOtherBenefits((prev) => [...prev, '']);
  };

  const handleRemoveBenefit = (index) => {
    const updatedBenefits = [...otherBenefits];
    updatedBenefits.splice(index, 1);
    setOtherBenefits(updatedBenefits);
  };

  const handleSave = async () => {
    setSaving(true);
    setError(null);
    setSuccessMessage('');
    
    const currentZone = zonesData[selectedZoneIndex];

    // Validation
    if (
      !currentZone.investmentPrimePercentage ||
      !currentZone.investmentMaxAmount ||
      !currentZone.taxExemptionYears ||
      !currentZone.postExemptionTaxRate ||
      !currentZone.socialSecurityExemptionYears
    ) {
      setError('Tous les champs doivent être remplis avec des valeurs valides.');
      setSaving(false);
      return;
    }

    try {
      const res = await fetch(`http://localhost:5000/zones/${currentZone._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          investmentPrimePercentage: currentZone.investmentPrimePercentage,
          investmentMaxAmount: currentZone.investmentMaxAmount,
          taxExemptionYears: currentZone.taxExemptionYears,
          postExemptionTaxRate: currentZone.postExemptionTaxRate,
          socialSecurityExemptionYears: currentZone.socialSecurityExemptionYears,
          otherBenefits: otherBenefits.filter(b => b.trim() !== ''),
        }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || 'Erreur serveur');
      }

      const updatedZone = await res.json();
      // Update local state with the returned data
      setZonesData(prev => {
        const newZones = [...prev];
        newZones[selectedZoneIndex] = updatedZone.zone;
        return newZones;
      });
      
      setSuccessMessage('Données mises à jour avec succès');
      setTimeout(() => setSuccessMessage(''), 3000);
    } catch (err) {
      setError(`Erreur lors de la sauvegarde: ${err.message}`);
    } finally {
      setSaving(false);
    }
  };

  const handleZoneChange = (e) => {
    const newIndex = Number(e.target.value);
    setSelectedZoneIndex(newIndex);
    setOtherBenefits(zonesData[newIndex].otherBenefits || ['']);
  };

  const currentZone = zonesData[selectedZoneIndex];

  if (loading) {
    return <div className="text-center mt-10 text-gray-600">Chargement...</div>;
  }

  if (!currentZone) {
    return <div className="text-center mt-10 text-red-600">Aucune donnée de zone disponible</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
      <h1 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Modifier les avantages par zone</h1>

      {/* Success and error messages */}
      {successMessage && (
        <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-md">
          {successMessage}
        </div>
      )}
      {error && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md">
          {error}
        </div>
      )}

      {/* Zone selector */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">Zone</label>
        <select
          value={selectedZoneIndex}
          onChange={handleZoneChange}
          className="block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {zonesData.map((zone, index) => (
            <option key={zone._id} value={index}>
              {zone.name === 'zone1' ? 'Zone 1' : 
               zone.name === 'zone2' ? 'Zone 2' : 
               zone.name === 'zone3' ? 'Zone 3' : zone.name}
            </option>
          ))}
        </select>
      </div>

      {/* Form Inputs */}
      <div className="grid gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Prime (%)
          </label>
          <input
            type="number"
            name="investmentPrimePercentage"
            value={currentZone.investmentPrimePercentage || ''}
            onChange={handleChange}
            min="0"
            max="100"
            className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Plafond Prime (DT)
          </label>
          <input
            type="number"
            name="investmentMaxAmount"
            value={currentZone.investmentMaxAmount || ''}
            onChange={handleChange}
            min="0"
            className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Années d'exonération fiscale
          </label>
          <input
            type="number"
            name="taxExemptionYears"
            value={currentZone.taxExemptionYears || ''}
            onChange={handleChange}
            min="0"
            className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Taux d'imposition après exonération (%)
          </label>
          <input
            type="number"
            name="postExemptionTaxRate"
            value={currentZone.postExemptionTaxRate || ''}
            onChange={handleChange}
            min="0"
            max="100"
            className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Années d'exonération charge sociale
          </label>
          <input
            type="number"
            name="socialSecurityExemptionYears"
            value={currentZone.socialSecurityExemptionYears || ''}
            onChange={handleChange}
            min="0"
            className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Other Benefits */}
        <div className="mt-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Autres avantages</label>
          {otherBenefits.map((benefit, index) => (
            <div key={index} className="flex items-center gap-2 mb-2">
              <input
                type="text"
                value={benefit}
                onChange={(e) => handleBenefitChange(index, e.target.value)}
                placeholder="Saisir un avantage"
                className="px-3 py-2 border rounded-md shadow-sm w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="button"
                onClick={() => handleRemoveBenefit(index)}
                className="text-red-600 hover:text-red-800 p-2"
                aria-label="Supprimer avantage"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={handleAddBenefit}
            className="flex items-center text-blue-600 hover:text-blue-800 mt-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
            </svg>
            Ajouter un avantage
          </button>
        </div>
      </div>

      {/* Save Button */}
      <div className="pt-6 text-center">
        <button
          onClick={handleSave}
          disabled={saving}
          className={`bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
            saving ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          {saving ? (
            <>
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Enregistrement...
            </>
          ) : 'Enregistrer'}
        </button>
      </div>
    </div>
  );
};

export default AdminZonesEditor;