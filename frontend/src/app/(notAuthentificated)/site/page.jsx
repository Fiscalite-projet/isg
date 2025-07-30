'use client';
import { useState } from 'react';

export default function HomePage() {
  
    const [showGuide, setShowGuide] = useState(false);

  return (
    <>
      {/* Header */}
      

      

      {/* Posts Section */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="bg-white p-12 md:p-24 flex justify-end items-center">
          <a href="/blog/this-is-latest-post/">
            <img
              src="https://executiveeducation.wharton.upenn.edu/wp-content/uploads/2021/07/2107-the-enterprise-mindset-integrated-approach-600.jpg"
              alt="Latest post"
              className="w-full max-w-md"
            />
          </a>
        </div>
        <div className="bg-gray-100 p-12 md:p-24 flex justify-start items-center">
          <div className="max-w-md">
            <div className="w-24 h-2 bg-blue-800 mb-4"></div>
            <h2 className="foAuthnt-display font-bold text-2xl md:text-3xl lg:text-4xl mb-6">
             Création d'entreprise
            </h2>
            <div className="font-light text-gray-600 text-sm md:text-base mb-6 leading-relaxed">
           <ul className="list-disc pl-6 space-y-2 text-gray-700 text-lg">
  <li>Assistant interactif pour la création selon la forme juridique</li>
  <li>Génération automatique des statuts juridiques</li>
  <li>Liste des documents à préparer</li>
</ul>

            </div>
            <a
              href="/blog/this-is-latest-post/"
              className="inline-block border-2 border-blue-800 font-light text-blue-800 text-sm uppercase tracking-widest py-3 px-8 hover:bg-blue-800 hover:text-white"
            >
              Read more
            </a>
          </div>
        </div>
      </div>

      {/* Fullscreen Image Section */}
      <img
        src="https://skale-france.com/wp-content/uploads/2024/07/Etapes-creation-entreprise-1536x797.jpg.webp"
        alt="Travel background"
        className="w-full h-screen object-cover"
      />

      {/* Travel Section */}
      <div className="max-w-xl mx-auto text-center py-24 md:py-32">
        <div className="w-24 h-2 bg-blue-800 mb-4 mx-auto"></div>
        <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl mb-6">Simulateur d’avantages fiscaux</h2>
        <p className="font-light text-gray-600 mb-6 leading-relaxed">
         Calculez vos exonérations et réductions selon votre secteur et zone d’implantation


        </p>
      </div>

      {/* Categories Section */}
      <div className="flex flex-wrap bg-black">
        <a
          href="/categories/sandy-beaches/"
          className="bg-black relative w-full md:w-auto md:flex-1 flex items-center justify-center h-72 font-heading text-white uppercase tracking-widest hover:opacity-75"
        >
          <div className="relative z-10">Assistant de déclaration fiscale </div>
          <img
            src="https://app.ipaidthat.io/mag/wp-content/uploads/2022/04/creer-une-entreprise-3-1024x576.png"
            alt="Démarrage d’entreprise"
            className="absolute inset-0 w-full h-full object-cover opacity-50"
          />
        </a>
        <a
          href="/categories/forest-trials/"
          className="bg-black relative w-full md:w-auto md:flex-1 flex items-center justify-center h-72 font-heading text-white uppercase tracking-widest hover:opacity-75"
        >
          <div className="relative z-10">Conseils fiscaux personnalisés</div>
          <img
            src="https://og4tax.ma/wp-content/uploads/2024/09/1-300x252-1.webp"
            alt="Forest Trails"
            className="absolute inset-0 w-full h-full object-cover opacity-50"
          />
        </a>
        <a
          href="/categories/city-streets/"
          className="bg-black relative w-full md:w-auto md:flex-1 flex items-center justify-center h-72 font-heading text-white uppercase tracking-widest hover:opacity-75"
        >
          <div className="relative z-10">Tableau de bord fiscal</div>
          <img
            src="https://www.slideteam.net/wp/wp-content/uploads/2023/07/Tableau-de-bord-financier-pour-les-revenus-et-depenses-de-fin-de-mois-1.png"
            alt="City Streets"
            className="absolute inset-0 w-full h-full object-cover opacity-50"
          />
        </a>
      </div>

      {/* Posts Section 2 */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="bg-white p-12 md:p-24 flex justify-start items-center">
          <a href="/blog/my-third-big-post/">
            <img
              src="https://swiver.io/wp-content/uploads/2024/04/calendrier-fiscal-Tunisie.jpg"
              alt="Second post"
              className="w-full max-w-md"
            />
          </a>
        </div>
        <div className="md:order-first bg-gray-100 p-12 md:p-24 flex justify-end items-center">
          <div className="max-w-md">
            <div className="w-24 h-2 bg-blue-800 mb-4"></div>
            <h2 className="font-display font-bold text-2xl md:text-3xl lg:text-4xl mb-6">
              Calendrier fiscal intelligent
            </h2>
            <div className="font-light text-gray-600 text-sm md:text-base mb-6 leading-relaxed">
               <ul className="list-disc pl-6 space-y-2 text-gray-700 text-lg">
  <li>Vue mensuelle des déclarations à effectuer
</li>
  <li>Rappels automatiques personnalisés par email ou notification</li>

</ul>
            </div>
        
          </div>
        </div>
      </div>

      {/* Customizable Section */}
      <div className="relative w-full py-12 px-12">
        <div className="relative z-10 text-center py-12 md:py-24">
          <h1 className="text-white text-center text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-bold mb-6">
            Parce que chaque entreprise mérite un bon départ.
          </h1>
          <p className="text-white mb-10 text-base md:text-lg font-bold">
           Créer. Gérer. Réussir. Ensemble.
          </p>
          <a
            href="/pages/about-us"
            className="inline-block bg-blue-800 text-white uppercase text-sm tracking-widest font-heading px-8 py-4"
          >
          En savoir plus
          </a>
        </div>
        <img
          src="https://www.ec2finance.com/wp-content/uploads/2025/04/EC2_Blogue_Avril.jpg"
          alt="Customizable background"
          className="w-full h-full absolute inset-0 object-cover"
        />
      </div>

      {/* Footer */}
     
    </>
  );
}
