"use client";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import Image from 'next/image';
import { signOut } from "next-auth/react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleMobileDropdown = () => {
    setIsMobileDropdownOpen(!isMobileDropdownOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const navItems = [
    { name: "Tableau de bord", href: "/Dashboard" },
    { name: "Ajouter une entreprise", href: "/addcompany" },
    { name: "Déclaration D'investissement", href: "/decinv" },
    { name: "Déclaration d'existance", href: "/declarationdex" },
    {
      name: "Préparation des statuts",
      dropdown: true,
      items: [
        { name: "SARL", href: "/sarl", description: "Société à Responsabilité Limitée" },
        { name: "SUARL", href: "/suarl", description: "Société Unipersonnelle à Responsabilité Limitée" },
        { name: "SCS", href: "/scs", description: "Société en Commandite Simple" },
        { name: "SNC", href: "/snc", description: "Société en Nom Collectif" },
        { name: "SA", href: "/sa", description: "Société Anonyme" }
      ]
    },
  ];

  return (
    <div>
      <nav className="block w-full max-w-screen bg-blue-50 bg-opacity-90 sticky top-3 shadow backdrop-blur-lg backdrop-saturate-150 z-[9999]">
        <div className="w-full flex flex-wrap items-center justify-between text-slate-800">
          {/* Logo */}
          <Link href="/" className="block cursor-pointer flex font-bold text-2xl">
            <Image src="/logo.png" width={75} height={50} alt="Logo" />
            <p className="text-blue-800 my-auto mr-15">OptiEntreprise</p>
          </Link>

          {/* Hamburger menu for mobile */}
          <div className="lg:hidden ml-5">
            <button
              className="relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px]"
              onClick={toggleMobileMenu}
              type="button"
            >
              <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </span>
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`fixed top-0 left-0 min-h-screen w-64 bg-slate-100 shadow-lg transform transition-transform duration-300 ease-in-out ${
              isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
            } lg:hidden z-50`}
          >
            <div className="flex flex-row items-center border-b pb-4">
              <Link href="/" className="cursor-pointer text-red-600 font-bold text-xl pt-4 ps-4">
                <Image src="/logo.png" width={100} height={100} alt="Logo" />
              </Link>
              <button
                onClick={toggleMobileMenu}
                className="absolute top-4 right-4 text-slate-600 hover:text-red-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <ul className="flex flex-col h-full gap-4 p-4">
              {navItems.map((item, index) =>
                item.dropdown ? (
                  <li key={index}>
                    <button
                      onClick={toggleMobileDropdown}
                      className="flex items-center justify-between w-full text-lg text-slate-600 hover:text-red-500"
                    >
                      {item.name}
                      <span>{isMobileDropdownOpen ? "▲" : "▼"}</span>
                    </button>
                    {isMobileDropdownOpen && (
                      <ul className="ml-4 mt-2 space-y-2">
                        {item.items.map((subItem, subIndex) => (
                          <li key={subIndex}>
                            <Link
                              href={subItem.href}
                              className="block text-sm text-gray-700 hover:text-blue-500"
                              onClick={toggleMobileMenu}
                            >
                              <div className="font-medium">{subItem.name}</div>
                              <div className="text-xs text-gray-500">{subItem.description}</div>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ) : (
                  <li key={index} className="text-lg text-slate-600 hover:text-red-500">
                    <Link href={item.href} onClick={toggleMobileMenu}>{item.name}</Link>
                  </li>
                )
              )}
              <li className="mt-4">
                <button
                  onClick={() => signOut({ callbackUrl: "/login" })}
                  className="bg-blue-400 text-white px-8 py-2 rounded-md hover:bg-red-500"
                >
                  Déconnecter
                </button>
              </li>
            </ul>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center">
            <ul className="flex flex-row items-center gap-10">
              {navItems.map((item, index) =>
                item.dropdown ? (
                  <li key={index} className="relative" ref={dropdownRef}>
                    <button
                      onClick={toggleDropdown}
                      className="text-lg text-slate-600 hover:text-blue-500 cursor-pointer flex items-center gap-1"
                    >
                      {item.name}
                      <span className={`transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}>
                        ▼
                      </span>
                    </button>
                    
                    {/* Enhanced Dropdown Menu */}
                    {isDropdownOpen && (
                      <ul className="absolute top-full left-0 mt-2 bg-white shadow-lg border rounded-lg z-50 min-w-[280px] overflow-hidden">
                        <div className="bg-gray-50 px-4 py-2 border-b">
                          <span className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
                            Types de sociétés
                          </span>
                        </div>
                        {item.items.map((subItem, subIndex) => (
                          <li key={subIndex}>
                            <Link
                              href={subItem.href}
                              className="block px-4 py-3 text-sm hover:bg-blue-50 transition-colors border-b border-gray-100 last:border-b-0"
                              onClick={() => setIsDropdownOpen(false)}
                            >
                              <div className="font-medium text-slate-700 hover:text-blue-600">
                                {subItem.name}
                              </div>
                              <div className="text-xs text-gray-500 mt-1">
                                {subItem.description}
                              </div>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ) : (
                  <li key={index} className="text-lg text-slate-600 hover:text-blue-500">
                    <Link href={item.href}>{item.name}</Link>
                  </li>
                )
              )}
            </ul>
            <button
              onClick={() => signOut({ callbackUrl: "/login" })}
              className="ml-8 bg-blue-700 hover:bg-blue-800 text-white px-5 py-2 rounded-md mr-4"
            >
              Déconnecter
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}