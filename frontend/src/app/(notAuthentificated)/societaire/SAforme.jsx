import React, { useState } from 'react';
import { Send, ThumbsUp, FileText, Info, CheckCircle, XCircle, Monitor, Edit, Megaphone } from 'lucide-react';

const SAFormeJuridique = () => {
  const [activeTab, setActiveTab] = useState('cadre');

  const renderTabContent = () => {
    switch(activeTab) {
      case 'cadre':
        return (
          <>
            {/* Key Information Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
              
              {/* Capital Social Card */}
              <div className="bg-white rounded-xl shadow-md p-8 text-center hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">
                  <Send className="w-12 h-12 text-blue-500" />
                </div>
                <h3 className="text-lg font-semibold text-slate-700 mb-4">
                  Capital Social Minimum (DT)
                </h3>
                <div className="text-5xl font-bold text-blue-500">
                  5000<span className="text-3xl">+</span>
                </div>
              </div>

              {/* Nombre Associé(s) Card */}
              <div className="bg-white rounded-xl shadow-md p-8 text-center hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">
                  <ThumbsUp className="w-12 h-12 text-blue-500" />
                </div>
                <h3 className="text-lg font-semibold text-slate-700 mb-4">
                  Nombre Associé(s)
                </h3>
                <div className="text-5xl font-bold text-blue-500">
                  7<span className="text-3xl">+</span>
                </div>
              </div>
            </div>

            {/* Definition Section */}
            <div className="bg-white rounded-xl shadow-md p-8 mb-12">
              <h2 className="text-3xl font-bold text-slate-800 text-center mb-8">
                Qu'est ce Qu'une Société Anonyme | SA ?
              </h2>
              
              <div className="space-y-6 text-slate-700 leading-relaxed">
                <p className="text-center">
                  <span className="font-semibold text-slate-800">La Société Anonyme | SA:</span> est une <span className="font-semibold text-slate-800">personne morale</span> constituée d'<span className="font-semibold text-slate-800">au moins 7 associés</span> (personnes physiques ou morales).
                </p>
                
                <p className="text-center">
                  <span className="font-semibold text-slate-800">Le capital social minimum est de 5000 dinars</span> ; Le minimum est de 50 000 dinars si la société fait appel public à l'épargne.
                </p>
                
                <p className="text-center">
                  <span className="font-semibold text-slate-800">La Société Anonyme est dirigé</span> par un conseil d'administration et un directeur général.
                </p>
                
                <p className="text-justify">
                  <span className="font-semibold text-slate-800">La constitution et les caractéristiques d'une SA sont proches de celles d'une SARL.</span> Notamment c'est une société à responsabilité limitée, c'est– à-dire les actionnaires sont responsables à hauteur de leur apport, protégeant ainsi leur patrimoine. La SA se différencie de la SARL dans le fait qu'elle est adapté à l'entrée de nombreux actionnaires anonymes avec une procédure simple qui facilite donc l'accès à des capitaux importants pour l'entreprise.
                </p>
              </div>
            </div>

            {/* Obligations, Avantages, Inconvénients */}
            <div className="grid grid-cols-1  gap-8 mb-12">
              
              {/* Obligations */}
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                <h3 className="text-lg font-bold text-blue-600 text-center mb-6">OBLIGATIONS</h3>
                <div className="space-y-6">
                  <div className="text-left">
                    <span className="font-bold text-slate-800">(1)</span>
                    <span className="ml-2 text-sm text-slate-700 leading-relaxed">
                      Enregistrement de statuts obligatoire
                    </span>
                  </div>
                  <div className="text-left">
                    <span className="font-bold text-slate-800">(2)</span>
                    <span className="ml-2 text-sm text-slate-700 leading-relaxed">
                      Assigner un commissaire au compte dès la création de la société anonyme
                    </span>
                  </div>
                </div>
              </div>

              {/* Avantages */}
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                <h3 className="text-lg font-bold text-blue-600 text-center mb-6">AVANTAGES</h3>
                <div className="space-y-6">
                  <div className="text-left">
                    <div className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <div className="text-sm text-slate-700 leading-relaxed">
                        <span className="font-semibold">Protection des associés.</span> En cas de faillite, la responsabilité des actionnaires est limitée à leurs apports.
                      </div>
                    </div>
                  </div>
                  <div className="text-left">
                    <div className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <div className="text-sm text-slate-700 leading-relaxed">
                        Adapté pour des structures avec un capital social ou un nombre d'actionnaires élevé
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Inconvénients */}
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                <h3 className="text-lg font-bold text-blue-600 text-center mb-6">INCONVÉNIENTS</h3>
                <div className="space-y-6">
                  <div className="text-left">
                    <span className="font-bold text-slate-800">(1)</span>
                    <span className="ml-2 text-sm text-slate-700 leading-relaxed">
                      Nécessité d'assigner un commissaire au compte dès le démarrage.
                    </span>
                  </div>
                  <div className="text-left">
                    <span className="font-bold text-slate-800">(2)</span>
                    <span className="ml-2 text-sm text-slate-700 leading-relaxed">
                      Gestion via un conseil d'administration.
                    </span>
                  </div>
                  <div className="text-left">
                    <span className="font-bold text-slate-800">(3)</span>
                    <span className="ml-2 text-sm text-slate-700 leading-relaxed">
                      Besoin de capital plus important qu'une SARL pour démarrer.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      
      case 'preparer':
        return (
          <>
            {/* Preparation Section */}
            <div className="bg-white rounded-xl shadow-md p-8 mb-12">
              <h2 className="text-3xl font-bold text-slate-800 text-center mb-8">
                Création d'une SA | Ce Qu'il Faut Préparer
              </h2>
              
              <p className="text-center text-slate-700 leading-relaxed mb-12">
                Une Société Anonyme a une raison sociale, une adresse, un statut qui définit le cadre de la collaboration des associés. Le statut rempli servira à ouvrir un compte bancaire provisoire nécessaire pour la création de votre entreprise.
              </p>

              {/* Preparation Steps */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                
                {/* Raison Sociale */}
                <div className="bg-gray-50 rounded-xl p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <Monitor className="w-12 h-12 text-blue-500" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-4">Raison Sociale</h3>
                  <p className="text-sm text-slate-600 mb-6">
                    Réserver la dénomination sociale de votre SA en ligne auprès du RNE (registre national des entreprises).
                  </p>
                 
                </div>

                {/* Siège Social */}
                <div className="bg-gray-50 rounded-xl p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <Edit className="w-12 h-12 text-blue-500" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-4">Siège Social</h3>
                  <p className="text-sm text-slate-600 mb-6">
                    Une SA doit mentionner dans les statuts une adresse: contrat de location, ou attestation de domiciliation, ou du titre de propriété (ou contrat d'achat)
                  </p>
                 
                </div>

                {/* Statut SA */}
                <div className="bg-gray-50 rounded-xl p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <Megaphone className="w-12 h-12 text-blue-500" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-4">Statut SA</h3>
                  <p className="text-sm text-slate-600 mb-6">
                    Le statut d'une SA doit contenir, notamment, la dénomination sociale, l'objet social, les associés & leurs parts sociales, et l'adresse du siège social.
                  </p>
                
                </div>
              </div>

              {/* Call to Action */}
             
            </div>
          </>
        );
      
      case 'actualite':
        return (
          <div className="bg-white rounded-xl shadow-md p-8 mb-12">
            <h2 className="text-3xl font-bold text-slate-800 text-center mb-8">
              Actualité SA
            </h2>
            <p className="text-center text-slate-600">
              Contenu d'actualité à venir...
            </p>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            SA | Forme Juridique
          </h1>
          <p className="text-lg text-slate-600 mb-8">
            Tout savoir sur la Société Anonyme en Tunisie (SA)
          </p>
          
          {/* Navigation Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button 
              onClick={() => setActiveTab('cadre')}
              className={`px-6 py-2 font-medium transition-colors ${
                activeTab === 'cadre' 
                  ? 'text-slate-700 border-b-2 border-blue-500' 
                  : 'text-slate-600 hover:text-blue-600'
              }`}
            >
              Cadre Juridique
            </button>
            <button 
              onClick={() => setActiveTab('preparer')}
              className={`px-6 py-2 font-medium transition-colors ${
                activeTab === 'preparer' 
                  ? 'text-slate-700 border-b-2 border-blue-500' 
                  : 'text-slate-600 hover:text-blue-600'
              }`}
            >
              Ce qu'il faut préparer
            </button>
            <button 
              onClick={() => setActiveTab('actualite')}
              className={`px-6 py-2 font-medium transition-colors ${
                activeTab === 'actualite' 
                  ? 'text-slate-700 border-b-2 border-blue-500' 
                  : 'text-slate-600 hover:text-blue-600'
              }`}
            >
              Actualité
            </button>
          </div>
        </div>

        {/* Tab Content */}
        {renderTabContent()}

        {/* Additional Information Section - Only show on Cadre Juridique tab */}
        {activeTab === 'cadre' && (
          <div className="bg-white rounded-xl shadow-md p-8">
            <h3 className="text-2xl font-bold text-slate-800 text-center mb-8">
              Caractéristiques de la SA
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <div className="bg-blue-50 rounded-lg p-6 text-left">
                <h4 className="font-semibold text-slate-800 mb-4">Responsabilité</h4>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Les actionnaires ne sont responsables des dettes qu'à concurrence de leurs apports
                </p>
              </div>

              <div className="bg-green-50 rounded-lg p-6 text-left">
                <h4 className="font-semibold text-slate-800 mb-4">Gouvernance</h4>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Direction par conseil d'administration ou directoire selon le choix
                </p>
              </div>

              <div className="bg-yellow-50 rounded-lg p-6 text-left">
                <h4 className="font-semibold text-slate-800 mb-4">Capital</h4>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Capital divisé en actions librement cessibles et négociables
                </p>
              </div>

              <div className="bg-purple-50 rounded-lg p-6 text-left">
                <h4 className="font-semibold text-slate-800 mb-4">Publicité</h4>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Publication des comptes annuels obligatoire au JORT
                </p>
              </div>

              <div className="bg-red-50 rounded-lg p-6 text-left">
                <h4 className="font-semibold text-slate-800 mb-4">Contrôle</h4>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Commissaire aux comptes obligatoire pour contrôler la gestion
                </p>
              </div>

              <div className="bg-indigo-50 rounded-lg p-6 text-left">
                <h4 className="font-semibold text-slate-800 mb-4">Assemblées</h4>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Assemblées générales ordinaires et extraordinaires obligatoires
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Bottom Call to Action */}
        {activeTab !== 'preparer' && (
          <div className="text-center mt-12">
           
          </div>
        )}
      </div>
    </div>
  );
};

export default SAFormeJuridique;