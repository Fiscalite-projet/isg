"use client";
import { useState, useEffect } from 'react';

export default function Steps() {
  const [stepsData, setStepsData] = useState({
    formes: [],
    secteurs: [],
    zones: [],
  });

  const [formData, setFormData] = useState({
    forme: '',
    subType: '',
    subSubType: '',
    secteur: '',
    zone: '',
  });

  const [submitStatus, setSubmitStatus] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/steps/GetSteps');
        const data = await response.json();
        setStepsData(data);
      } catch (error) {
        console.error('Erreur lors de la récupération des étapes', error);
      }
    };
    fetchData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitStatus('en cours');

    const submitFormData = async () => {
      try {
        const response = await fetch('http://localhost:5000/steps/AddForm', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        const data = await response.json();
        if (response.ok) {
          setSubmitStatus('réussi');
          console.log('Formulaire soumis avec succès', data);
        } else {
          setSubmitStatus('erreur');
          console.error('Erreur lors de la soumission', data);
        }
      } catch (error) {
        setSubmitStatus('erreur');
        console.error('Erreur serveur', error);
      }
    };
    submitFormData();
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-semibold text-center text-blue-600 mb-6">Formulaire de Sélection</h1>
      {stepsData?.formes?.length === 0 ? (
        <p className="text-center text-gray-500">Chargement des données...</p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="forme" className="text-sm font-medium text-gray-700">Forme</label>
            <select
              name="forme"
              value={formData.forme}
              onChange={handleChange}
              required
              className="mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Sélectionner une forme</option>
              {stepsData?.formes.map((forme) => (
                <option key={forme.name} value={forme.name}>
                  {forme.name}
                </option>
              ))}
            </select>
          </div>

          {formData?.forme && (
            <>
              <div className="flex flex-col">
                <label htmlFor="subType" className="text-sm font-medium text-gray-700">Sous-Type</label>
                <select
                  name="subType"
                  value={formData.subType}
                  onChange={handleChange}
                  required
                  className="mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Sélectionner un sous-type</option>
                  {stepsData?.formes
                    .find((forme) => forme.name === formData?.forme)
                    ?.subTypes?.map((subType) => (
                      <option key={subType.name} value={subType.name}>
                        {subType.name}
                      </option>
                    ))}
                </select>
              </div>

              {formData?.subType && (
                <div className="flex flex-col">
                  <label htmlFor="subSubType" className="text-sm font-medium text-gray-700">Sous-Sous-Type</label>
                  <select
                    name="subSubType"
                    value={formData.subSubType}
                    onChange={handleChange}
                    required
                    className="mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Sélectionner un sous-sous-type</option>
                    {stepsData?.formes
                      .find((forme) => forme.name === formData.forme)
                      ?.subTypes.find((subType) => subType.name === formData.subType)
                      ?.subTypes.map((subSubType) => (
                        <option key={subSubType.name} value={subSubType.name}>
                          {subSubType.name}
                        </option>
                      ))}
                  </select>
                </div>
              )}
            </>
          )}

          <div className="flex flex-col">
            <label htmlFor="secteur" className="text-sm font-medium text-gray-700">Secteur</label>
            <select
              name="secteur"
              value={formData?.secteur}
              onChange={handleChange}
              required
              className="mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Sélectionner un secteur</option>
              {stepsData?.secteurs.map((secteur) => (
                <option key={secteur.name} value={secteur.name}>
                  {secteur.name}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col">
            <label htmlFor="zone" className="text-sm font-medium text-gray-700">Zone</label>
            <select
              name="zone"
              value={formData?.zone}
              onChange={handleChange}
              required
              className="mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Sélectionner une zone</option>
              {stepsData?.zones.map((zone) => (
                <option key={zone.name} value={zone.name}>
                  {zone.name}
                </option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            className="w-full mt-6 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Envoyer
          </button>
        </form>
      )}

      {/* Affichage du status */}
      {submitStatus && (
        <p className={`text-center mt-4 ${submitStatus === 'réussi' ? 'text-green-600' : 'text-red-600'}`}>
          Status de soumission: {submitStatus}
        </p>
      )}
    </div>
  );
};

