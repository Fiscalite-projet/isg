import React from 'react'
// components/IdentificationInfoForm.jsx
const IdentificationInfoForm = ({ formData, handleChange }) => {
  return (
    <div className="p-6 border border-gray-300 rounded-md max-w-5xl mx-auto">
      <div className="flex justify-between items-center mb-6">
     
        <h1 className="text-orange-600 text-xl font-bold">تصريح بالوجود (1)</h1>
       
      </div>

      <div className="grid grid-cols-12 gap-2 text-right text-sm mb-4">
        <div className="col-span-4">
          <label className='block text-sm font-medium text-gray-700 mb-1'>رمز المصلحة</label>
          <input type="text" name="identificationInfoForm.systemCode" value={formData.identificationInfoForm.systemCode} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300" />
        </div>
        <div className="col-span-6 col-start-5">
          <label className='block text-sm font-medium text-gray-700 mb-1'>رمز التصريح (2)</label>
          <input type="text" name="identificationInfoForm.systemType" value={formData.identificationInfoForm.systemType} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300" />
        </div>
      </div>

      <div className="">
        <div className="grid grid-cols-12 gap-2 text-right text-sm mb-4">
        <div className="col-span-5">
          <label className='block text-sm font-medium text-gray-700 mb-1'>المعرف الجبائي</label>
          <input type="text" name="identificationInfoForm.nationalId" value={formData.identificationInfoForm.nationalId} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300" />
        </div>
        <div className="col-span-5">
          <label className='block text-sm font-medium text-gray-700 mb-1'>رمز الأداء على القيمة المضافة (م.ق.م)</label>
          <input type="text" name="identificationInfoForm.taxRegime" value={formData.identificationInfoForm.taxRegime} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300" />
        </div>
        </div>
        <div className="grid grid-cols-12 gap-2 text-right text-sm mb-4">
        <div className="col-span-5">
          <label className='block text-sm font-medium text-gray-700 mb-1'>رمز الصنف</label>
          <input type="text" name="identificationInfoForm.symbole" value={formData.identificationInfoForm.symbole} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300" />
        </div>
        <div className="col-span-5">
          <label className='block text-sm font-medium text-gray-700 mb-1'>رقم الفرع الثانوي</label>
          <input type="text" name="identificationInfoForm.branchNumber" value={formData.identificationInfoForm.branchNumber} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300" />
        </div>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-2 text-right text-sm mb-4">
        <div className="col-span-5">
          <label className='block text-sm font-medium text-gray-700 mb-1'>تعيين / أولي</label>
          <select name="identificationInfoForm.legalEntitysimple" value={formData.identificationInfoForm.legalEntitysimple} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300">
            <option value="">اختر</option>
            <option value="تعيين">تعيين</option>
            <option value="أولي">أولي</option>
          </select>
        </div>
      
      </div>

      <div className="grid grid-cols-12 p-2 text-right text-sm mb-4 gap-2">
        <div className="col-span-9">
          <label className='block text-sm font-medium text-gray-700 mb-1'>رقم بطاقة التعريف الوطنية أو رقم الإقامة أو جواز السفر</label>
          <input type="text" name="identificationInfoForm.residenceCardOrPassport" value={formData.identificationInfoForm.residenceCardOrPassport} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300" />
        </div>
        <div className="col-span-3">
          <label className='block text-sm font-medium text-gray-700 mb-1'>تاريخ الإصدار</label>
          <input type="date" name="identificationInfoForm.issueDate" value={formData.identificationInfoForm.issueDate} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300" />
        </div>
        <div className="col-span-3">
          <label className='block text-sm font-medium text-gray-700 mb-1'>الرمز (3)</label>
          <input type="text" name="identificationInfoForm.legalFormCode" value={formData.identificationInfoForm.legalFormCode} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300" />
        </div>
        <div className="col-span-6">
          <label className='block text-sm font-medium text-gray-700 mb-1'>رقم الانخراط في الضمان الإجتماعي</label>
          <input type="text" name="identificationInfoForm.socialSecurityNumber" value={formData.identificationInfoForm.socialSecurityNumber} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300" />
        </div>
      </div>

      <div className="grid grid-cols-12 gap-2 text-right text-sm mb-4">
        <div className="col-span-3">
          <label className='block text-sm font-medium text-gray-700 mb-1'>رقم السجل التجاري</label>
          <input type="text" name="identificationInfoForm.commercialRegistryNumber" value={formData.identificationInfoForm.commercialRegistryNumber} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300" />
        </div>
        <div className="col-span-3">
          <label className='block text-sm font-medium text-gray-700 mb-1'>المحكمة</label>
          <input type="text" name="identificationInfoForm.legalForm" value={formData.identificationInfoForm.legalForm} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300" />
        </div>
        
      </div>
    </div>
  );
};

export default IdentificationInfoForm;
