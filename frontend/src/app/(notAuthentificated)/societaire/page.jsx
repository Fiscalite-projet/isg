'use client'
import { useState } from 'react';
import { FaUsers,FaArrowDown,FaBuilding,FaShieldAlt } from "react-icons/fa";
import { IoIosTrendingUp } from "react-icons/io";
import { FiAlertTriangle } from "react-icons/fi";
import { IoIosGitBranch } from "react-icons/io";

export default function EntrepriseSocietaire() {
  const [activeTab, setActiveTab] = useState('personnes');

  const tabs = [
    { key: 'personnes', label: 'Société de personnes' },
    { key: 'capitaux', label: 'Sociétés de capitaux' },
    { key: 'hybrides', label: 'Sociétés hybrides' },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'personnes':
        return (
           <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header with purple accent */}
        <div className="text-center mb-12">
          <div className="w-full h-1 bg-gradient-to-r from-blue-500 to-blue-700 mb-8"></div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Société de personnes
          </h1>
        </div>

        {/* Organizational Chart */}
        <div className="flex flex-col items-center space-y-8">
          {/* Main Title Box */}
          <div className="bg-white rounded-2xl shadow-lg p-6 border-t-4 border-blue-500">
            <div className="flex items-center justify-center space-x-3">
              <FaUsers  className="w-8 h-8 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-800">Société de personnes</h2>
            </div>
          </div>

          {/* Arrows pointing down */}
          <div className="flex space-x-32">
            <FaArrowDown  className="w-8 h-8 text-gray-600 transform rotate-12" />
            <FaArrowDown  className="w-8 h-8 text-gray-600 transform -rotate-12" />
          </div>

          {/* Two Main Categories */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full">
            {/* SNC Card */}
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">(SNC)</h3>
                <h4 className="text-lg font-semibold text-blue-600">Société en Nom Collectif</h4>
              </div>
              
              <div className="text-gray-700 leading-relaxed text-justify space-y-4">
                <p className="text-sm">
                  C'est une société de personnes constituée entre deux ou plusieurs personnes qui sont responsables 
                  personnellement et solidairement du passif social. Elle exerce son activité sous une raison sociale qui se 
                  compose du nom de tous les associés ou du nom de l'un ou de quelques-uns d'entre eux suivis des mots «et 
                  compagnie». Les associés faisant partie de la société au moment où l'engagement social a été contracté sont 
                  tenus solidairement sur leurs biens propres. La gestion de la société est un droit pour tous les associés sauf si 
                  les statuts ou une convention ultérieure ne prévoient le contraire.
                </p>
              </div>
            </div>

            {/* SCS Card */}
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">(SCS)</h3>
                <h4 className="text-lg font-semibold text-green-600">Société en Commandite Simple</h4>
              </div>
              
              <div className="text-gray-700 leading-relaxed text-justify space-y-4">
                <p className="text-sm">
                  C'est une société de personne qui comprend deux associés au moins et qui sont les commandités 
                  lesquels sont tenus, personnellement et solidairement de dettes sociales et de deux associés au moins, les 
                  commanditaires, qui sont tenus qu'à concurrence de leurs apports. Les associés commandités sont soumis au 
                  même régime que celui auquel sont soumis les associés dans une société en nom collectif. Les associés 
                  commanditaires sont soumis au même régime juridique que celui auquel sont soumis les associés dans une 
                  société à responsabilité limitée. L'associé commanditaire ne peut faire un apport en industrie.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom purple accent */}
        <div className="w-full h-1 bg-gradient-to-r from-blue-500 to-blue-700 mt-12"></div>
      </div>
    </div>
        );
      case 'capitaux':
        return (
         <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-700 mb-8"></div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Sociétés de capitaux
          </h1>
        </div>

        {/* First Section - SA and SCA Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* SA Section */}
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-xl font-bold text-gray-800 mb-2">(SA)</h2>
              <h3 className="text-lg font-semibold text-blue-600 mb-6">Société anonyme</h3>
              
              <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
                <div className="flex items-center justify-center mb-4">
                  <FaBuilding  className="w-8 h-8 text-blue-600 mr-3" />
                  <h4 className="text-2xl font-bold text-gray-800 underline">SA</h4>
                </div>
              </div>
            </div>

            {/* SA Advantages/Disadvantages Table */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="grid grid-cols-2">
                <div className="bg-green-500 text-white p-4 text-center">
                  <h4 className="font-bold text-lg">Avantages</h4>
                </div>
                <div className="bg-red-500 text-white p-4 text-center">
                  <h4 className="font-bold text-lg">Inconvénients</h4>
                </div>
              </div>
              
              <div className="grid grid-cols-2 min-h-[200px]">
                <div className="p-6 border-r border-gray-200">
                  <ul className="space-y-3 text-sm text-gray-700">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Modèle de sécurité pour les investisseurs.
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Répartition des pouvoirs.
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Actions facilement négociables.
                    </li>
                  </ul>
                </div>
                <div className="p-6">
                  <ul className="space-y-3 text-sm text-gray-700">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Besoin d'un capital important.
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Modèle d'administration plus complexe.
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Obligation de nommer un commissaire aux comptes.
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Concerne les grands projets.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* SCA Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
            <div className="text-center mb-6">
              <h2 className="text-xl font-bold text-gray-800 mb-2">(SCA)</h2>
              <h3 className="text-lg font-semibold text-purple-600 mb-4">société en commandite par actions</h3>
            </div>
            
            <div className="text-gray-700 leading-relaxed text-justify">
              <p className="text-sm">
                La société en commandite par actions est une société dont le capital est divisé en actions. Elle 
                est constituée par contrat entre deux ou plusieurs commandités et des commanditaires. 
                Les commanditaires ont seuls la qualité d'actionnaires et ne supportent les pertes qu'à 
                concurrence de leurs apports. Le nombre des commanditaires ne peut être inférieur à trois. 
                Les commandités ont la qualité de commerçant et répondent indéfiniment et solidairement des 
                dettes sociales. Le nombre minimum d'actionnaires est 4.
              </p>
            </div>
          </div>
        </div>

        {/* Second Section - SCA Detailed Table */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">(SCA)</h2>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-2">
              <div className="bg-green-500 text-white p-6 text-center">
                <div className="flex items-center justify-center">
                  <IoIosTrendingUp  className="w-6 h-6 mr-2" />
                  <h4 className="font-bold text-xl">Avantages</h4>
                </div>
              </div>
              <div className="bg-red-500 text-white p-6 text-center">
                <div className="flex items-center justify-center">
                  <FiAlertTriangle  className="w-6 h-6 mr-2" />
                  <h4 className="font-bold text-xl">Inconvénients</h4>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 min-h-[250px]">
              <div className="p-8 border-r border-gray-200">
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-3 h-3 bg-green-500 rounded-full mt-1.5 mr-4 flex-shrink-0"></span>
                    <span className="text-sm leading-relaxed">Modèle de sécurité pour les investisseurs.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-3 h-3 bg-green-500 rounded-full mt-1.5 mr-4 flex-shrink-0"></span>
                    <span className="text-sm leading-relaxed">Répartition des pouvoirs.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-3 h-3 bg-green-500 rounded-full mt-1.5 mr-4 flex-shrink-0"></span>
                    <span className="text-sm leading-relaxed">Actions facilement négociables.</span>
                  </li>
                </ul>
              </div>
              <div className="p-8">
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-3 h-3 bg-red-500 rounded-full mt-1.5 mr-4 flex-shrink-0"></span>
                    <span className="text-sm leading-relaxed">Le capital ne pas être inférieur à dix mille Dinars.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-3 h-3 bg-red-500 rounded-full mt-1.5 mr-4 flex-shrink-0"></span>
                    <span className="text-sm leading-relaxed">Les apports payés par les commanditaires immédiatement et intégralement à la souscription.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom accent */}
        <div className="w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-700 mt-12"></div>
      </div>
    </div>
        );
      case 'hybrides':
        return (
         <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
          <div className="w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-700 mt-12 mb-12"></div>
        {/* Organizational Chart */}
        <div className="flex flex-col items-center space-y-8 mb-12">
          {/* Main Title Box */}
          <div className="bg-white rounded-2xl shadow-lg p-6 border-t-4 border-indigo-500">
            <div className="flex items-center justify-center space-x-3">
              <IoIosGitBranch className="w-8 h-8 text-indigo-600" />
              <h2 className="text-2xl font-bold text-gray-800">Sociétés hybrides</h2>
            </div>
          </div>

          {/* Arrows pointing down */}
          <div className="flex space-x-32">
            <FaArrowDown className="w-8 h-8 text-gray-600 transform rotate-12" />
            <FaArrowDown className="w-8 h-8 text-gray-600 transform -rotate-12" />
          </div>
        </div>

        {/* Two Main Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* SARL Section */}
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-xl font-bold text-gray-800 mb-2">(SARL)</h2>
              <h3 className="text-lg font-semibold text-purple-600 mb-4">Société A Responsabilité Limité</h3>
              
              <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
                <div className="flex items-center justify-center mb-4">
                  <FaShieldAlt  className="w-8 h-8 text-purple-600 mr-3" />
                  <h4 className="text-2xl font-bold text-gray-800 underline">SARL</h4>
                </div>
                <p className="text-sm text-gray-600 italic">copier le contenu du lien</p>
              </div>
            </div>

            {/* SARL Advantages/Disadvantages Table */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border-4 border-purple-500">
              <div className="grid grid-cols-2">
                <div className="bg-green-500 text-white p-4 text-center">
                  <h4 className="font-bold text-lg">Avantages</h4>
                </div>
                <div className="bg-red-500 text-white p-4 text-center">
                  <h4 className="font-bold text-lg">Inconvénients</h4>
                </div>
              </div>
              
              <div className="grid grid-cols-2 min-h-[200px]">
                <div className="p-6 border-r border-gray-200">
                  <ul className="space-y-4 text-sm text-gray-700">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Procédures de constitution simples.
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Séparation entre le patrimoine personnel et le patrimoine de la société.
                    </li>
                  </ul>
                </div>
                <div className="p-6">
                  <ul className="space-y-4 text-sm text-gray-700">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Nécessité d'enregistrer et d'inscrire tous les documents afférents à la société dans toutes les étapes et procéder à la publicité légale.
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Formalités pendant la constitution et l'administration.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* SUARL Section */}
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-xl font-bold text-gray-800 mb-2">(SUARL)</h2>
              <h3 className="text-lg font-semibold text-blue-600 mb-4">Société Unipersonnelle A Responsabilité Limité</h3>
              
              <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
                <div className="flex items-center justify-center mb-4">
                  <FaUsers className="w-8 h-8 text-blue-600 mr-3" />
                  <h4 className="text-2xl font-bold text-gray-800 underline">SUARL</h4>
                </div>
                <p className="text-sm text-gray-600 italic">copier le contenu du lien</p>
              </div>
            </div>

            {/* SUARL Advantages/Disadvantages Table */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border-4 border-gray-400">
              <div className="grid grid-cols-2">
                <div className="bg-green-500 text-white p-4 text-center">
                  <h4 className="font-bold text-lg">Avantages</h4>
                </div>
                <div className="bg-red-500 text-white p-4 text-center">
                  <h4 className="font-bold text-lg">Inconvénients</h4>
                </div>
              </div>
              
              <div className="grid grid-cols-2 min-h-[200px]">
                <div className="p-6 border-r border-gray-200">
                  <ul className="space-y-4 text-sm text-gray-700">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      L'associé est responsable à hauteur du capital.
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Séparation entre le patrimoine personnel et le patrimoine de la société.
                    </li>
                  </ul>
                </div>
                <div className="p-6">
                  <ul className="space-y-4 text-sm text-gray-700">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Nécessité d'enregistrer et d'inscrire tous les documents afférents à la société dans toutes les étapes et procéder à la publicité légale.
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Formalités pendant la constitution et l'administration
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
          <div className="w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-700 mt-12"></div>
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
