// components/GeneralInfoForm.js
import React from 'react'

export default function GeneralInfoForm({ formData, handleChange }) {
  return (
    <div className="grid grid-cols-1 gap-4">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="w-full">
          <label className="block text-sm font-medium text-gray-700 mb-1">الاسم الكامل</label>
          <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300" />
        </div>
        <div className="w-full">
          <label className="block text-sm font-medium text-gray-700 mb-1">رقم بطاقة التعريف الوطنية</label>
          <input type="text" name="nationalId" value={formData.nationalId} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300" />
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="w-full">
          <label className="block text-sm font-medium text-gray-700 mb-1">رقم الفرع الثاني</label>
          <input type="text" name="branchNumber" value={formData.branchNumber} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300" />
        </div>
        <div className="w-full">
          <label className="block text-sm font-medium text-gray-700 mb-1">رقم الانخراط في الضمان الاجتماعي</label>
          <input type="text" name="socialSecurityNumber" value={formData.socialSecurityNumber} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300" />
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="w-full">
          <label className="block text-sm font-medium text-gray-700 mb-1">رقم بطاقة الإقامة أو جواز السفر</label>
          <input type="text" name="residenceCardOrPassport" value={formData.residenceCardOrPassport} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300" />
        </div>
        <div className="w-full">
          <label className="block text-sm font-medium text-gray-700 mb-1">رقم السجل التجاري</label>
          <input type="text" name="commercialRegistryNumber" value={formData.commercialRegistryNumber} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300" />
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="w-full">
          <label className="block text-sm font-medium text-gray-700 mb-1">تاريخ الإصدار</label>
          <input type="date" name="issueDate" value={formData.issueDate} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300" />
        </div>
        <div className="w-full">
          <label className="block text-sm font-medium text-gray-700 mb-1">تاريخ الولادة</label>
          <input type="date" name="birthDate" value={formData.birthDate} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300" />
        </div>
      </div>
    </div>
  )
}
