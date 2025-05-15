// pages/form.js
'use client'
import { useState } from 'react';

import ActivityInfoForm from './components/ActivityInfoForm';
import LegalRepresentativeForm from './components/LegalRepresentativeForm';
import DeclarationInfoForm from './components/DeclarationInfoForm';
import GeneralInfoForm from './components/GeneralInfoForm';



export default function FormPage() {
  const [pageNumber, setPageNumber] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    nationalId: '',
    branchNumber: '',
    socialSecurityNumber: '',
    residenceCardOrPassport: '',
    commercialRegistryNumber: '',
    issueDate: '',
    birthDate: '',
    mainActivity: '',
    mainActivityStart: '',
    secondaryActivity: '',
    secondaryActivityStart: '',
    activityAddress: '',
    wilaya: '',
    municipality: '',
    phone: '',
    fax: '',
    email: '',
    legalForm: '',
    nationality: '',
    totalAnnualIncome: '',
    taxRegime: '',
    registrationDate: '',
    personalAddress: '',
    personalWilaya: '',
    personalMunicipality: '',
    secondaryBranch: 'no',
    numberOfBranches: '',
    taxChangeDate: '',
    cessationDate: '',
    VATRegistrationDate: '',
    VATExitDate: '',
    repName: '',
    repNationality: '',
    repID: '',
    repPhone: '',
    repIssueDate: '',
    legalRepName: '',
    legalRepNationality: '',
    legalRepID: '',
    legalRepPhone: '',
    legalRepIssueDate: '',
    declarationPlace: '',
    declarationDate: ''
  });
console.log(formData)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const goToPreviousPage = () => {
    if (pageNumber > 1) setPageNumber(pageNumber - 1);
  };

  const goToNextPage = () => {
    if (pageNumber < 4) setPageNumber(pageNumber + 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    if (res.ok) {
      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'generated_declaration.pdf';
      link.click();
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 border border-gray-300 rounded-lg shadow-md space-y-4 mt-5 bg-white" dir="rtl">
      {/* Progress Indicator */}
      <div className="mb-6">
        <div className="flex justify-between mb-1">
          <span className="text-sm text-gray-700">الخطوة {pageNumber} من 4</span>
          <span className="text-sm text-gray-700">{Math.round((pageNumber / 4) * 100)}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${(pageNumber / 4) * 100}%` }}></div>
        </div>
      </div>

      {pageNumber === 1 && <GeneralInfoForm formData={formData} handleChange={handleChange} />}
      {pageNumber === 2 && <ActivityInfoForm formData={formData} handleChange={handleChange} />}
      {pageNumber === 3 && <LegalRepresentativeForm formData={formData} handleChange={handleChange} />}
      {pageNumber === 4 && <DeclarationInfoForm formData={formData} handleChange={handleChange} />}

      <div className="pt-4 flex justify-between gap-4">
        <button
          onClick={goToPreviousPage}
          disabled={pageNumber === 1}
          className={`bg-blue-600 text-white py-2 px-4 rounded-md transition-colors ${pageNumber === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'}`}
        >
          السابق
        </button>

        {pageNumber < 4 ? (
          <button
            onClick={goToNextPage}
            className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
          >
            التالي
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors"
          >
            إرسال
          </button>
        )}
      </div>
    </div>
  );
}
