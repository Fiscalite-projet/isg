// pages/form.js
'use client'
import { useState } from 'react';

import ActivityInfoForm from './components/ActivityInfoForm';
import LegalRepresentativeForm from './components/LegalRepresentativeForm';
import DeclarationInfoForm from './components/DeclarationInfoForm';
import GeneralInfoForm from './components/GeneralInfoForm';
import IdentificationInfoForm from './components/IdentificationInfoForm';
import axios from 'axios';



export default function FormPage() {
  const [pageNumber, setPageNumber] = useState(1);
  const [formData, setFormData] = useState({
  activityInfoForm:{
  mainActivity: '',
  mainActivityStart: '',
  secondaryActivity: '',
  secondaryActivityStart: '',
  activityAddress: '',
  adressNumber: '',
  postalCodeActivity: '',
  wilaya: '',
  municipality: '',
  activityCode: '',
  employeNumber: '',
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
  hasBranches: '',        // e.g. 'نعم' | 'لا' | ''
  branchCount: '',        // number or string parsed to number
  taxBenefit1: '',
  taxCode1: '',
  taxBenefit2: '',
  taxCode2: '',
  financialYearEndDate: '',

    },
     declarationInfo: {
    declarationPlace: '',
    declarationDate: '',
  },
  generalInfoForm:{
  fullName: "",
  address: "",
  nationalId:'',
  nationalIdNumber:'',
  city:'',
  state:'',
  state:'',
  country:'',
  postalCode:'',
  symbole:'',
  phoneNumber:'',
  faxNumber:'',
  legalFormType:'',
  nationality:'',
  birthDate:'',
  genderMale: false,
  genderFemale:false,
  accountingPeriod:'',
  socialSecurityHead:'',
  bankingSystemType:'',
  registrationDate:'',
  registrationMonth:'',
  registrationYear:'',
  registrationCode:'',
  referenceDate:'',
  referenceMonth:'',
  referenceYear:'',
  applicationDate:'',
  applicationMonth:'',
  applicationYear:'',
  legalEntityBasic:'',
  legalEntityAdvanced:'',
  legalEntitysimple:'',
  legalEntityCommercial:'',
  legalEntityNonCommercial:'',
  documentDate:'',
 documentMonth:'',
 documentYear:'',
 changeDate:'',
 modificationDate:'',
 modificationMonth:'',
 modificationYear:'',
},
identificationInfoForm:{
  systemCode:'',
  systemType:'',
  commercialRegistryNumber:'',
  nationalId:'',
  taxRegime:'',
  symbole:'',
  branchNumber:'',
  legalEntitysimple:'',
  residenceCardOrPassport:'',
  issueDate:'',
  legalFormCode:'',
  socialSecurityNumber:'',
  legalForm:'',
},
legalRepresentativeForm:{
  repName:'',
  repNationality:'',
  repID:'',
  repPhone:'',
  repIssueDate:'',
  repTitle:'',
  repAppointmentDate:'',
  ownerName:'',
  ownerTitle:'',
  ownerNationality:'',
  ownerIdNumber:'',
  ownerIdIssueDate:'',
  ownerPhone:'',
}


  });

 const handleChange = (e) => {
  const { name, value } = e.target;

  // Support nested fields like generalInfoForm.fullName
  if (name.includes('.')) {
    const [section, field] = name.split('.');
    setFormData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value,
      },
    }));
  } else {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
};




  const goToPreviousPage = () => {
    if (pageNumber > 1) setPageNumber(pageNumber - 1);
  };

  const goToNextPage = () => {
    if (pageNumber < 5) setPageNumber(pageNumber + 1);
  };

 const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await axios.post('http://localhost:5000/decex', formData, {
      responseType: 'blob', // important to receive PDF blob
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // Create a link to download the PDF
    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'generated_declaration.pdf');
    document.body.appendChild(link);
    link.click();
    link.remove();
  } catch (error) {
    console.error('Submission error:', error);
    alert('An error occurred while submitting the form.');
  }
};

  return (
    <div className="max-w-2xl mx-auto p-6 border border-gray-300 rounded-lg shadow-md space-y-4 mt-5 bg-white" dir="rtl">
      {/* Progress Indicator */}
      <div className="mb-6">
        <div className="flex justify-between mb-1">
          <span className="text-sm text-gray-700">الخطوة {pageNumber} من 5</span>
          <span className="text-sm text-gray-700">{Math.round((pageNumber / 5) * 100)}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${(pageNumber / 4) * 100}%` }}></div>
        </div>
      </div>
      {pageNumber === 1 && (
  <IdentificationInfoForm
    formData={formData}
    handleChange={handleChange}
  />
)}
      {pageNumber === 2 && <GeneralInfoForm formData={formData} handleChange={handleChange} setFormData={setFormData}/>}
      {pageNumber === 3&& <ActivityInfoForm formData={formData} handleChange={handleChange} />}
      {pageNumber === 4 && <LegalRepresentativeForm formData={formData} handleChange={handleChange} />}
      {pageNumber === 5 && <DeclarationInfoForm formData={formData} handleChange={handleChange} />}

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
