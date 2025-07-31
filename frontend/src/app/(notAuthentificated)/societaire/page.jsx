'use client'
import { useState } from 'react';
import { FaUsers,FaArrowDown,FaBuilding,FaShieldAlt } from "react-icons/fa";
import { IoIosTrendingUp } from "react-icons/io";
import { FiAlertTriangle } from "react-icons/fi";
import { IoIosGitBranch } from "react-icons/io";
import { Building } from 'lucide-react';
import SAFormeJuridique from './SAforme';
import SarlFormeJuridique from './Sarl';
import SuarlFormeJuridique from './Suarl';

export default function EntrepriseSocietaire() {
  const [activeTab, setActiveTab] = useState('personnes');

  const tabs = [
    { key: 'personnes', label: 'Société de personnes' },
    { key: 'capitaux', label: 'Sociétés de capitaux' },
    { key: 'hybrides', label: 'Sociétés hybrides' },
  ];
 
  const [selectedType, setSelectedType] = useState(null); // null shows both, 'SA' or 'SCA' shows specific

  const handleTypeClick = (type) => {
    setSelectedType(selectedType === type ? null : type); // Toggle selection
  };

  const resetView = () => {
    setSelectedType(null);
  }

  const renderTabContent = () => {
    switch (activeTab) {
      case 'personnes':
        return (
           <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header with purple accent */}
        <div className="w-full h-1 bg-gradient-to-r from-blue-500 to-blue-700 mb-12"></div>
        

        {/* Organizational Chart */}
        <div className="flex flex-col items-center space-y-8">
          {/* Main Title Box */}
        

          {/* Arrows pointing down */}
        

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
          
          {/* Navigation Buttons */}
          <div className="flex justify-center space-x-4 mb-8">
            <button
              onClick={() => handleTypeClick('SA')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                selectedType === 'SA' 
                  ? 'bg-blue-600 text-white shadow-lg' 
                  : 'bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-50'
              }`}
            >
              Afficher SA
            </button>
            <button
              onClick={() => handleTypeClick('SCA')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                selectedType === 'SCA' 
                  ? 'bg-blue-600 text-white shadow-lg' 
                  : 'bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-50'
              }`}
            >
              Afficher SCA
            </button>
            {selectedType && (
              <button
                onClick={resetView}
                className="px-6 py-3 rounded-lg font-semibold bg-gray-600 text-white hover:bg-gray-700 transition-all duration-300"
              >
                Afficher Tout
              </button>
            )}
          </div>
        </div>

        {/* Content Section */}
        <div className={`grid gap-12 ${selectedType ? 'grid-cols-1 justify-items-center' : 'grid-cols-1 lg:grid-cols-2'}`}>
          
          {/* SA Section */}
          {(!selectedType || selectedType === 'SA') && (
            <div className={`space-y-6 ${selectedType === 'SA' ? 'max-w-2xl' : ''}`}>
              <div className="text-center">
                <div 
                  className="bg-white rounded-lg shadow-lg p-6 mb-6 cursor-pointer hover:shadow-xl transition-shadow duration-300"
                  onClick={() => handleTypeClick('SA')}
                >
                  <div className="flex items-center justify-center mb-4">
                    <Building className="w-8 h-8 text-blue-600 mr-3" />
                    <h4 className="text-2xl font-bold text-gray-800">SA</h4>
                  </div>
                  {!selectedType && (
                    <p className="text-sm text-gray-500">Cliquez pour voir les détails</p>
                  )}
                </div>
              </div>
              
              <div className="text-gray-700 leading-relaxed text-justify bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <SAFormeJuridique/>
              </div>
            </div>
          )}

          {/* SCA Section */}
          {(!selectedType || selectedType === 'SCA') && (
            <div className={`space-y-6 ${selectedType === 'SCA' ? 'max-w-2xl' : ''}`}>
              <div className="text-center">
                <div 
                  className="bg-white rounded-lg shadow-lg p-6 mb-6 cursor-pointer hover:shadow-xl transition-shadow duration-300"
                  onClick={() => handleTypeClick('SCA')}
                >
                  <div className="flex items-center justify-center mb-4">
                    <Building className="w-8 h-8 text-blue-600 mr-3" />
                    <h4 className="text-2xl font-bold text-gray-800">SCA</h4>
                  </div>
                  {!selectedType && (
                    <p className="text-sm text-gray-500 mt-2">Cliquez pour voir les détails</p>
                  )}
                </div>
              </div>
              
              <div className="text-gray-700 leading-relaxed text-justify bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
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
          )}
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
        <div className="w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-700 mt-12 mb-12"></div>

        <div className="flex justify-center space-x-4 mb-8">
          <button
            onClick={() => handleTypeClick('SARL')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
              selectedType === 'SARL' 
                ? 'bg-blue-600 text-white shadow-lg' 
                : 'bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-50'
            }`}
          >
            Afficher SARL
          </button>
          <button
            onClick={() => handleTypeClick('SUARL')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
              selectedType === 'SUARL' 
                ? 'bg-blue-600 text-white shadow-lg' 
                : 'bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-50'
            }`}
          >
            Afficher SUARL
          </button>
          {selectedType && (
            <button
              onClick={resetView}
              className="px-6 py-3 rounded-lg font-semibold bg-gray-600 text-white hover:bg-gray-700 transition-all duration-300"
            >
              Afficher Tout
            </button>
          )}
        </div>

        <div className={`grid gap-12 ${selectedType ? 'grid-cols-1 justify-items-center' : 'grid-cols-1 lg:grid-cols-2'}`}>
          
          {/* SARL Section */}
          {(!selectedType || selectedType === 'SARL') && (
            <div className={`space-y-6 ${selectedType === 'SARL' ? 'max-w-2xl' : ''}`}>
              <div className="bg-white rounded-lg shadow-lg p-6 cursor-pointer hover:shadow-xl transition-shadow duration-300 text-center" onClick={() => handleTypeClick('SARL')}>
                <div className="flex items-center justify-center mb-4">
                  <FaShieldAlt className="w-8 h-8 text-purple-600 mr-3" />
                  <h4 className="text-2xl font-bold text-gray-800 underline">SARL</h4>
                </div>
                {!selectedType && (
                  <p className="text-sm text-gray-500">Cliquez pour voir les détails</p>
                )}
              </div>

              {/* SARL Detailed Content */}
              <div className="text-sm text-gray-700 leading-relaxed bg-white rounded-2xl shadow-lg p-8">
                <SarlFormeJuridique/>
              </div>
            </div>
          )}

          {/* SUARL Section */}
          {(!selectedType || selectedType === 'SUARL') && (
            <div className={`space-y-6 ${selectedType === 'SUARL' ? 'max-w-2xl' : ''}`}>
              <div className="bg-white rounded-lg shadow-lg p-6 cursor-pointer hover:shadow-xl transition-shadow duration-300 text-center" onClick={() => handleTypeClick('SUARL')}>
                <div className="flex items-center justify-center mb-4">
                  <FaUsers className="w-8 h-8 text-blue-600 mr-3" />
                  <h4 className="text-2xl font-bold text-gray-800 underline">SUARL</h4>
                </div>
                {!selectedType && (
                  <p className="text-sm text-gray-500">Cliquez pour voir les détails</p>
                )}
              </div>

              {/* SUARL Detailed Content */}
              <div className="text-sm text-gray-700 leading-relaxed bg-white rounded-2xl shadow-lg p-8">
                <SuarlFormeJuridique/>
              </div>
            </div>
          )}
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
             onClick={() => {
        setActiveTab(tab.key);
        setSelectedType(null); // Reset selected type when tab changes
      }}
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
