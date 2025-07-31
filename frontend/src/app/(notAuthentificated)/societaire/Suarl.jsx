import React, { useState } from 'react';
import { Send, ThumbsUp, FileText, Info, CheckCircle, XCircle, Monitor, Edit, Megaphone } from 'lucide-react';

const SuarlFormeJuridique = () => {
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
                  1000<span className="text-3xl">+</span>
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
                 1<span className="text-3xl">+</span>
                </div>
              </div>
            </div>

            {/* Definition Section */}
            <div className="bg-white rounded-xl shadow-md p-8 mb-12">
              <h2 className="text-3xl font-bold text-slate-800 text-center mb-8">
              Qu'est ce Qu'une Société Unipersonnelle A Responsabilité Limitée | SUARL ?
              </h2>
              
              <div className="space-y-6 text-slate-700 leading-relaxed">
                <p className="text-center">
                  <span className="font-semibold text-slate-800">La Société Unipersonnelle à Responsabilité Limitée | SUARL:</span> est une <span className="font-semibold text-slate-800">personne morale</span> constituée d'<span className="font-semibold text-slate-800">d'une seule personne (personnes physique ou morale)</span> Une SUARL est très similaire à forme juridique SARL (pour 2 associés ou plus) .
                </p>
                
                <p className="text-center">
                  <span className="font-semibold text-slate-800">Le capital social minimum est de 1000 dinars</span> .
                </p>
                
                <p className="text-center">
                  <span className="font-semibold text-slate-800">La société est gérée</span> par une personnes physique (l'associé principal ou un tiers) qui aura la capacité d’agir au nom de la société. Le gérant doit être une personne physique même dans le cas où l'associé unique de la SUARL serait une personne morale.
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
                      Assigner un commissaire au compte si le CA dépasse 300k DT, le Bilan dépasse 100k DT ou le nombre d'employé dépasse 10.
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
                        <span className="font-semibold">Protection des associés.</span> En cas de faillite, la responsabilité des associés est limitée à leurs apports. Le patrimoine des associés est donc séparé du patrimoine de l'entité juridique dans le cas d'une SUARL.
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
                   Lourdeur Administrative. Ce qui explique que les petits entrepreneurs préfèrent en général créer une une entreprise individuel (patente ou personne physique).
‍
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
                Création d'une SUARL | Ce Qu'il Faut Préparer
              </h2>
              
              <p className="text-center text-slate-700 leading-relaxed mb-12">
               Une Société Unipersonnelle A Responsabilité Limitée (SUARL) a une raison sociale, une adresse, un statut qui définit le cadre de la collaboration des associés. Le statut rempli servira à ouvrir un compte bancaire provisoire nécessaire pour la création de votre entreprise.
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
                   Réserver la dénomination sociale de votre SARL en ligne auprès du RNE (registre national des entreprises).
‍
                  </p>
                  
                </div>

                {/* Siège Social */}
                <div className="bg-gray-50 rounded-xl p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <Edit className="w-12 h-12 text-blue-500" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-4">Siège Social</h3>
                  <p className="text-sm text-slate-600 mb-6">
                    Une SUARL doit mentionner une adresse: contrat de location, ou attestation de domiciliation, ou du titre de propriété (ou contrat d’achat)
                  </p>
                  
                </div>

                {/* Statut SA */}
                <div className="bg-gray-50 rounded-xl p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <Megaphone className="w-12 h-12 text-blue-500" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-4">Statut SARL</h3>
                  <p className="text-sm text-slate-600 mb-6">
                 Le statut d'une SUARL doit contenir, notamment, la dénomination sociale, l'objet social, les associés & leurs parts sociales, et l'adresse du siège social.
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
              Actualité SUARL
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
          SARL | Forme Juridique
          </h1>
          <p className="text-lg text-slate-600 mb-8">
          Tout savoir sur la Société Unipersonnelle A Responsabilité Limitée (SUARL)
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
       

        {/* Bottom Call to Action */}
        {activeTab !== 'preparer' && (
          <div className="text-center mt-12">
           
          </div>
        )}
      </div>
    </div>
  );
};

export default SuarlFormeJuridique;