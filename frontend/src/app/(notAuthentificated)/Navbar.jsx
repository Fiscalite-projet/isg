'use client'
import React, { useState } from 'react'

export const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showGuide, setShowGuide] = useState(false); // ✅ Add this line

  return (
    <>
    <div className="h-24 z-50 relative container mx-auto px-6 grid grid-cols-3">
      <div className="flex items-center">
        <button onClick={() => setShowMenu(true)}>
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>

        {showMenu && (
          <div className="fixed inset-0 w-full h-full bg-white z-50 text-blue-100">
            <div className="container h-full mx-auto px-6 py-8 relative z-10 flex flex-col items-center justify-center text-2xl uppercase font-bold tracking-widest space-y-6">
              <button onClick={() => setShowMenu(false)} className="absolute top-0 left-0 mt-8 ml-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <a href="/" className="inline-block border-b-4 border-transparent hover:border-blue-100">Accueil</a>
              <a href="/auth" className="inline-block border-b-4 border-transparent hover:border-blue-100">S’inscrire</a>
              <a href="/login" className="inline-block border-b-4 border-transparent hover:border-blue-100">Se connecter</a>

              {/* Guide toggle */}
              <p onClick={() => setShowGuide(!showGuide)} className="inline-block border-b-4 border-transparent hover:border-blue-100 cursor-pointer">
                Consulter le guide
              </p>

              {showGuide && (
                <>
                  <a href="/individuelle" className="inline-block border-b-4 border-transparent hover:border-blue-100">Société Individuelle</a>
                  <a href="/societaire" className="inline-block border-b-4 border-transparent hover:border-blue-100">Société Sociétaire</a>
                </>
              )}
            </div>

            <div className="absolute inset-0 w-full h-full bg-blue-900 bg-opacity-20"></div>
          </div>
        )}
      </div>

      <div className="flex items-center justify-center">
        <a href="/" className="text-white uppercase font-bold text-2xl tracking-widest">OptiEntreprise</a>
      </div>

      <div className="flex items-center justify-end">
        <a href="/contact">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </a>
      </div>
    </div>
    <div className="w-full h-24 bg-blue-900 bg-opacity-95 absolute top-0 left-0"></div>

      {/* Hero Section */}
      <div className="-mt-24 relative w-full py-12 px-12 bg-blue-900">
        <div className="relative z-10 text-center py-24 md:py-48">
          <h1 className="text-white text-center text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-bold mb-12">
            Optimisez votre entreprise dès aujourd’hui !
          </h1>
          <a href="/blog" className="inline-block bg-blue-800 text-white uppercase text-sm tracking-widest font-heading px-8 py-4">
           Consulter le guide
          </a>
        </div>
        <div className="relative z-10 mx-auto max-w-4xl flex justify-between uppercase text-white font-heading tracking-widest text-sm">
          <a href="/auth" className="border-b border-white">S’inscrire</a>
          <a href="/login" className="border-b border-white">Se connecter</a>
        </div>
        <img
          src="https://static.vecteezy.com/system/resources/previews/025/751/345/non_2x/business-growth-wallpaper-with-the-glowing-bar-chart-static-and-up-arrow-stock-market-growth-in-futuristic-technology-style-graphic-of-successful-financial-development-on-the-dark-background-vector.jpg"
          alt="Hero Background"
          className="w-full h-full absolute inset-0 object-cover opacity-70"
        />
      </div></>
  );
};
