'use client'
import React, { useState } from 'react'

export default function Page() {
  const [page, setPage] = useState(1)
  const [form, setForm] = useState({
    nomsociete: '',
    objetsociete: '',
    adress: '',
    duree: '',
    capital: '',
    parts: '',
    valeurpart: '',
    gerant_nom: '',
    gerant_cin: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const nextPage = () => setPage(p => Math.min(3, p + 1))
  const prevPage = () => setPage(p => Math.max(1, p - 1))

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const res = await fetch("http://localhost:5000/suarl/addSuarl", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      });

      const data = await res.json();

      if (res.ok) {
        alert("✅ SUARL ajoutée avec succès !");
        console.log("Réponse backend :", data);
      } else {
        alert("❌ Erreur côté serveur : " + data.message);
      }
    } catch (error) {
      console.error("❌ Erreur réseau :", error);
      alert("Erreur lors de la connexion au serveur.");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 border border-gray-300 rounded-lg shadow-md space-y-4 mt-5 bg-white">
      <div className="mb-6">
        <div className="flex justify-between mb-1">
          <span className="text-sm text-gray-700">Étape {page} sur 3</span>
          <span className="text-sm text-gray-700">{Math.round((page / 3) * 100)}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${(page / 3) * 100}%` }}></div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {page === 1 && (
          <fieldset className="space-y-4">
            <legend className="text-xl font-semibold text-center text-gray-700 mb-4">Formulaire de préparation des statuts d'une SUARL</legend>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Nom de la société <span className="text-red-500">*</span>
              </label>
              <input name="nomsociete" type="text" value={form.nomsociete} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Objet de la société <span className="text-red-500">*</span>
              </label>
              <input name="objetsociete" type="text" value={form.objetsociete} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Adresse du siège social <span className="text-red-500">*</span>
              </label>
              <input name="adress" type="text" value={form.adress} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Durée (en années) <span className="text-red-500">*</span>
              </label>
              <input name="duree" type="number" value={form.duree} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded" />
            </div>
          </fieldset>
        )}

        {page === 2 && (
          <fieldset className="space-y-4">
            <legend className="text-xl font-semibold text-center">Capital Social</legend>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Montant du capital social (en Dinars) <span className="text-red-500">*</span>
              </label>
              <input name="capital" type="number" value={form.capital} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Nombre de parts sociales <span className="text-red-500">*</span>
              </label>
              <input name="parts" type="number" value={form.parts} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Valeur d’une part <span className="text-red-500">*</span>
              </label>
              <input name="valeurpart" type="number" value={form.valeurpart} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded" />
            </div>
          </fieldset>
        )}

        {page === 3 && (
          <fieldset className="space-y-4">
            <legend className="text-xl font-semibold text-center">Gérant de la société</legend>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Nom & Prénom <span className="text-red-500">*</span>
              </label>
              <input name="gerant_nom" type="text" value={form.gerant_nom} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                N° CIN / Passeport <span className="text-red-500">*</span>
              </label>
              <input name="gerant_cin" type="text" value={form.gerant_cin} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded" />
            </div>
          </fieldset>
        )}

        <div className="flex justify-between pt-4">
          <button type="button" onClick={prevPage} disabled={page === 1} className={`px-4 py-2 rounded text-white ${page === 1 ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'}`}>Précédent</button>
          {page < 3 ? (
            <button type="button" onClick={nextPage} className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded">Suivant</button>
          ) : (
            <button type="submit" className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded">Soumettre</button>
          )}
        </div>
      </form>
    </div>
  )
}
