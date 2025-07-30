'use client'
import { useState } from 'react';
import { FaPerson } from "react-icons/fa6";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { MdComputer, MdEdit, MdDescription } from "react-icons/md";

export default function EntrepriseSocietaire() {
  const [activeTab, setActiveTab] = useState('Actuality');

  const tabs = [
    { key: 'Actuality', label: 'Définition' },
    { key: 'CadreJuridique', label: 'Cadre Juridique' },
    { key: 'toPrepare', label: "Ce qu'il faut préparer" },

    
  ];

  const renderTabContent = () => {
    switch (activeTab) {
   
      case 'Actuality':
        return (
<div className=" mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden">
<p className='font-bold m-2 my-5 '>Une société individuelle est une entreprise gérée par une seule personne, qui en est l’unique propriétaire et responsable.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 p-4">
            
      {/* Capital Social Minimum Card */}
      <div className="flex-1 rounded-2xl shadow-md p-6 text-center  bg-blue-50 border-l-4 border-blue-600 rounded-lg p-6 mb-8" >
        <RiMoneyDollarCircleLine  className="mx-auto text-blue-500 w-10 h-10 mb-2" />
        <h2 className="font-semibold text-gray-700">Capital Social Minimum (DT)</h2>
        <p className="text-3xl font-bold text-blue-500 mt-2">0</p>
      </div>

      {/* Nombre Associé(s) Card */}
     <div className="flex-1 rounded-2xl shadow-md p-6 text-center  bg-blue-50 border-l-4 border-blue-600 rounded-lg p-6 mb-8" >
        <FaPerson className="mx-auto text-blue-500 w-10 h-10 mb-2" />
        <h2 className="font-semibold text-gray-700">Nombre Associé(s)</h2>
        <p className="text-3xl font-bold text-blue-500 mt-2">1</p>
      </div>
    </div>
    </div>
        );
           case 'CadreJuridique':
        return (
           <div className="min-h-screen  p-4 md:p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white text-center py-12 px-6">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-shadow">
            Qu'est ce Qu'une Entreprise Individuelle ?
          </h1>
          <p className="text-lg md:text-xl opacity-90 font-light">
            L'entreprise individuelle est équivalente au statut d'indépendant
          </p>
        </div>

        <div className="p-6 md:p-10">
          {/* Definition Section */}
          <div className="bg-blue-50 border-l-4 border-blue-600 rounded-lg p-6 mb-8">
            <p className="text-gray-800 leading-relaxed text-justify">
              L'entreprise individuelle est, comme son nom l'indique, limitée à une 
              personne physique unique ; elle n'a pas de personnalité juridique. L'entreprise 
              porte le nom de la personne associée et il n'y a pas de séparation entre le 
              patrimoine de l'entreprise et de son gérant.
            </p>
          </div>

          {/* Capital Information */}
          <div className="bg-gradient-to-r from-orange-200 to-yellow-200 rounded-lg p-6 text-center mb-8">
            <p className="text-blue-800 font-semibold text-lg">
              Le capital social minimum est de{' '}
              <span className="font-bold text-blue-900">0 dinars</span>{' '}
              (il n'y a pas de notion de capital social).
            </p>
          </div>

          {/* Creation Process */}
          <div className="bg-green-50 rounded-lg p-6 mb-10">
            <p className="text-gray-800 leading-relaxed text-justify">
              L'entreprise est gérée par, et confondu à, la personne qui a créé l'entreprise 
              individuelle. La procédure de création est simple, par rapport à d'autres 
              formes juridiques (
              <a href="#" className="text-blue-600 font-semibold hover:underline">SUARL</a>, {' '}
              <a href="#" className="text-blue-600 font-semibold hover:underline">SARL</a>, {' '}
              <a href="#" className="text-blue-600 font-semibold hover:underline">SA</a>
              ) et ne demande pas de statuts.
            </p>
          </div>

          {/* Three Columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Obligations */}
            <div className="bg-white rounded-lg border-t-4 border-blue-500 shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-blue-500 font-bold text-xl mb-4 text-center">
                OBLIGATIONS
              </h3>
              <p className="text-gray-700 leading-relaxed text-sm text-justify">
                La nouvelle réglementation demande l'immatriculation des{' '}
                <a href="#" className="text-blue-600 font-semibold hover:underline">
                  entreprises individuelles auprès du registre national des entreprises (RNE)
                </a>.
              </p>
            </div>

            {/* Avantages */}
            <div className="bg-white rounded-lg border-t-4 border-green-500 shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-green-500 font-bold text-xl mb-4 text-center">
                AVANTAGES
              </h3>
              <p className="text-gray-700 leading-relaxed text-sm text-justify">
                Formalité simple. Pas besoin de capital social ou de statuts. Liberté de décision.
              </p>
            </div>

            {/* Inconvénients */}
            <div className="bg-white rounded-lg border-t-4 border-red-500 shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-red-500 font-bold text-xl mb-4 text-center">
                INCONVÉNIENTS
              </h3>
              <p className="text-gray-700 leading-relaxed text-sm text-justify">
                La responsabilité envers les créanciers est personnelle et illimitée 
                (contrairement à la forme juridique{' '}
                <a href="#" className="text-red-600 font-semibold hover:underline">SUARL</a>).
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
        );
      case "toPrepare":
        return (
           <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Création d'une Entreprise Individuelle | Ce Qu'il Faut Préparer
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Une Entreprise Individuelle a une raison sociale, une adresse, et doit être 
            immatriculée au près du registre national des entreprises (RNE).
          </p>
        </div>

        {/* Three Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Raison Sociale Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="flex flex-col items-center mb-6">
              <div className="bg-blue-100 p-4 rounded-2xl mb-4">
                <MdComputer  className="w-8 h-8 text-blue-600" />
              </div>
              <h2 className="text-xl font-bold text-gray-800">Raison Sociale</h2>
            </div>
            
            <div className="space-y-4 text-gray-700">
              <p className="text-sm leading-relaxed">
                Réserver la dénomination sociale de votre SUARL en ligne auprès du RNE (registre national des entreprises).
              </p>
              
              <div className="bg-blue-50 rounded-lg p-4">
                <a href="#" className="text-blue-600 font-semibold hover:underline text-sm">
                  Réserver en ligne votre dénomination sociale sur le site du RNE
                </a>
              </div>
            </div>
          </div>

          {/* Siège Social Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="flex flex-col items-center mb-6">
              <div className="bg-orange-100 p-4 rounded-2xl mb-4">
                <MdEdit  className="w-8 h-8 text-orange-600" />
              </div>
              <h2 className="text-xl font-bold text-gray-800">Siège Social</h2>
            </div>
            
            <div className="space-y-4 text-gray-700">
              <p className="text-sm leading-relaxed">
                Une SUARL doit mentionner une adresse: contrat de location, ou attestation de domiciliation, ou du titre de propriété (ou contrat d'achat)
              </p>
              
              <div className="bg-orange-50 rounded-lg p-4">
                <a href="#" className="text-orange-600 font-semibold hover:underline text-sm">
                  Tout savoir sur le siège social d'une entreprise
                </a>
              </div>
            </div>
          </div>

          {/* Documents Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="flex flex-col items-center mb-6">
              <div className="bg-green-100 p-4 rounded-2xl mb-4">
                <MdDescription  className="w-8 h-8 text-green-600" />
              </div>
              <h2 className="text-xl font-bold text-gray-800">Documents</h2>
            </div>
            
            <div className="space-y-4 text-gray-700">
              <p className="text-sm leading-relaxed">
                La constitution d'une entreprise individuelle passe par des formalités simplifiées. Voici les documents nécessaires pour sa constitution.
              </p>
              
              <div className="bg-green-50 rounded-lg p-4">
                <a href="#" className="text-green-600 font-semibold hover:underline text-sm">
                  Documents nécessaires pour la constitution d'une entreprise individuelle
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6 sm:px-12 md:px-24 lg:px-32 font-sans">
      <h1 className="text-3xl font-bold text-center text-blue-800 mb-10">Entreprise Sociétaire</h1>

      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex justify-center gap-4 mb-6 border-b border-gray-200">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`py-2 px-4 text-sm font-medium transition-all duration-200 ${
                activeTab === tab.key
                  ? 'text-blue-700 border-b-2 border-blue-700'
                  : 'text-blue-600 hover:text-blue-600'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="text-gray-700 leading-relaxed">{renderTabContent()}</div>
      </div>
    </div>
  );
}
