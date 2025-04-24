'use client'
import React, { useState } from 'react';
import { zone, secteur, form } from './constants';
import { useNotifications } from 'reapop';
import { useRouter } from 'next/navigation';

const Formulaire = () => {
  const [formData, setFormData] = useState({
    forme: '',
    subType: '',
    subSubType: '',
    secteur: '',
    zone: '',
    delegation: '',
    isExonorated : ''
  });
  const [isExoneratedZone, setIsExoneratedZone] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const router = useRouter();

  const { notify } = useNotifications();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === 'delegation') {
      const selected = zone
        .find((z) => z.governorate === formData.zone)
        ?.delegations?.find((d) => d.name === value);

      setIsExoneratedZone(selected?.isExonorated || false);
      formData.isExonorated=selected?.isExonorated
    }
  };

  const handleZoneChange = (e) => {
    const value = e.target.value;
    setFormData((prev) => ({ ...prev, zone: value, delegation: '' }));
    setIsExoneratedZone(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus('en cours');

    try {
      const response = await fetch('http://localhost:5000/steps/AddForm', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        if (formData.subSubType === 'sarl') {
          router.push('/sarl');
        } else if (formData.subSubType === 'SA') {
          router.push('/SA');
        } else if (formData.subSubType === 'SNC') {
          router.push('/SNC');
        } else if (formData.subSubType === 'SCS') {
          router.push('/SCS');
        }
    
        setSubmitStatus('réussi');
        

        notify({ title: 'Succès', message: 'Formulaire soumis avec succès', status: 'success' });
      } else {
        setSubmitStatus('erreur');
        notify({ title: 'Erreur', message: data?.message || 'Erreur de soumission', status: 'error' });
      }
    } catch (error) {
      setSubmitStatus('erreur');
      notify({ title: 'Erreur', message: 'Erreur serveur', status: 'error' });
    }
  };

  const currentZone = zone.find((z) => z.governorate === formData.zone);
  const currentForme = form.find((f) => f.name === formData.forme);
  const currentSubType = currentForme?.subTypes.find((s) => s.name === formData.subType);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
      <h1 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Ajouter une entreprise</h1>
      <form onSubmit={handleSubmit} className="space-y-4">

        {/* Gouvernorat */}
        <div>
          <label htmlFor="zone" className="block text-sm font-medium text-gray-700">Gouvernorat</label>
          <select
            id="zone"
            name="zone"
            value={formData.zone}
            onChange={handleZoneChange}
            className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm"
            required
          >
            <option value="">Sélectionner un gouvernorat</option>
            {zone.map((z) => (
              <option key={z.governorate} value={z.governorate}>{z.governorate}</option>
            ))}
          </select>
        </div>

        {/* Délégation */}
        {formData.zone && (
          <div>
            <label htmlFor="delegation" className="block text-sm font-medium text-gray-700">Délégation</label>
            <select
              id="delegation"
              name="delegation"
              value={formData.delegation}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm"
              required
            >
              <option value="">Sélectionner une délégation</option>
              {currentZone?.delegations?.map((d) => (
                <option key={d.name} value={d.name} className={d.isExonorated ? 'text-green-600' : ''}>
                  {d.name}
                </option>
              ))}
            </select>
            {isExoneratedZone && (
              <p className="bg-yellow-100 text-red-800 p-3 rounded-md mt-2">
                Cette zone est une zone d'exonération fiscale.
              </p>
            )}
          </div>
        )}

        {/* Secteur */}
        <div>
          <label htmlFor="secteur" className="block text-sm font-medium text-gray-700">Secteur d'activité</label>
          <select
            id="secteur"
            name="secteur"
            value={formData.secteur}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm"
            required
          >
            <option value="">Sélectionner un secteur</option>
            {secteur.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>

        {/* Forme */}
        <div>
          <label htmlFor="forme" className="block text-sm font-medium text-gray-700">Forme juridique</label>
          <select
            id="forme"
            name="forme"
            value={formData.forme}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm"
            required
          >
            <option value="">Sélectionner une forme</option>
            {form.map((f) => (
              <option key={f.name} value={f.name}>{f.name}</option>
            ))}
          </select>
        </div>

        {/* Sous-Type */}
        {currentForme && (
          <div>
            <label htmlFor="subType" className="block text-sm font-medium text-gray-700">Sous-type</label>
            <select
              id="subType"
              name="subType"
              value={formData.subType}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm"
              required
            >
              <option value="">Sélectionner un sous-type</option>
              {currentForme.subTypes.map((s) => (
                <option key={s.name} value={s.name}>{s.name}</option>
              ))}
            </select>
          </div>
        )}

        {/* Sous-Sous-Type */}
        {formData.subType && currentSubType && (
          <div>
            <label htmlFor="subSubType" className="block text-sm font-medium text-gray-700">Sous-sous-type</label>
            <select
              id="subSubType"
              name="subSubType"
              value={formData.subSubType}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm"
              required
            >
              <option value="">Sélectionner un sous-sous-type</option>
              {currentSubType.subTypes.map((sub) => (
                <option key={sub.name} value={sub.name}>{sub.name}</option>
              ))}
            </select>
          </div>
        )}

        {/* Soumettre */}
        <div className="pt-4">
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
          >
            Soumettre
          </button>
        </div>
      </form>

      {/* Affichage du status */}
      {submitStatus && (
        <p className={`text-center mt-4 ${submitStatus === 'réussi' ? 'text-green-600' : 'text-red-600'}`}>
          Statut de soumission : {submitStatus}
        </p>
      )}
    </div>
  );
};

export default Formulaire;
