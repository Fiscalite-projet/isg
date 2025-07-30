// components/LegalRepresentativeForm.js
export default function LegalRepresentativeForm({ formData, handleChange }) {
    return (
      <div className="grid grid-cols-1 gap-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700 mb-1">اسم الممثل القانوني</label>
            <input type="text" name="legalRepresentativeForm.repName" value={formData.legalRepresentativeForm.repName} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300" />
          </div>
          <div className="w-full">
    <label className="block text-sm font-medium text-gray-700 mb-1">اللقب (الممثل القانوني)</label>
    <input type="text" name="legalRepresentativeForm.repTitle" value={formData.legalRepresentativeForm.repTitle} onChange={handleChange}
      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300" />
  </div>
          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700 mb-1">جنسية الممثل</label>
            <input type="text" name="legalRepresentativeForm.repNationality" value={formData.legalRepresentativeForm.repNationality} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300" />
          </div>
        </div>
  
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full">
            <label className="block text-sm font-medium textpragmatic meaning-gray-700 mb-1">بطاقة تعريف الممثل</label>
            <input type="text" name="legalRepresentativeForm.repID" value={formData.legalRepresentativeForm.repID} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300" />
          </div>
          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700 mb-1">هاتف الممثل</label>
            <input type="text" name="legalRepresentativeForm.repPhone" value={formData.legalRepresentativeForm.repPhone} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300" />
          </div>
        </div>
  
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700 mb-1">تاريخ إصدار بطاقة الممثل</label>
            <input type="date" name="legalRepresentativeForm.repIssueDate" value={formData.legalRepresentativeForm.repIssueDate} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300" />
          </div>
          <div className="flex flex-col md:flex-row gap-4">
  
  <div className="w-full">
    <label className="block text-sm font-medium text-gray-700 mb-1">تاريخ التعيين</label>
    <input type="date" name="legalRepresentativeForm.repAppointmentDate" value={formData.legalRepresentativeForm.repAppointmentDate} onChange={handleChange}
      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300" />
  </div>
</div>
        
        </div>
      <h3 className="text-lg font-semibold mt-6">معلومات صاحب المؤسسة</h3>

<div className="flex flex-col md:flex-row gap-4">
  <div className="w-full">
    <label className="block text-sm font-medium text-gray-700 mb-1">الاسم</label>
    <input type="text" name="legalRepresentativeForm.ownerName" value={formData.legalRepresentativeForm.ownerName} onChange={handleChange}
      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300" />
  </div>
  <div className="w-full">
    <label className="block text-sm font-medium text-gray-700 mb-1">اللقب</label>
    <input type="text" name="legalRepresentativeForm.ownerTitle" value={formData.legalRepresentativeForm.ownerTitle} onChange={handleChange}
      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300" />
  </div>
</div>

<div className="flex flex-col md:flex-row gap-4">
  <div className="w-full">
    <label className="block text-sm font-medium text-gray-700 mb-1">الجنسية</label>
    <input type="text" name="legalRepresentativeForm.ownerNationality" value={formData.legalRepresentativeForm.ownerNationality} onChange={handleChange}
      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300" />
  </div>
  <div className="w-full">
    <label className="block text-sm font-medium text-gray-700 mb-1">رقم بطاقة التعريف/الإقامة</label>
    <input type="text" name="legalRepresentativeForm.ownerIdNumber" value={formData.legalRepresentativeForm.ownerIdNumber} onChange={handleChange}
      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300" />
  </div>
</div>

<div className="flex flex-col md:flex-row gap-4">
  <div className="w-full">
    <label className="block text-sm font-medium text-gray-700 mb-1">تاريخ إصدار البطاقة</label>
    <input type="date" name="legalRepresentativeForm.ownerIdIssueDate" value={formData.legalRepresentativeForm.ownerIdIssueDate} onChange={handleChange}
      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300" />
  </div>
  <div className="w-full">
    <label className="block text-sm font-medium text-gray-700 mb-1">رقم الهاتف المباشر</label>
    <input type="text" name="legalRepresentativeForm.ownerPhone" value={formData.legalRepresentativeForm.ownerPhone} onChange={handleChange}
      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300" />
  </div>
      </div>
       </div>
    );
  }
  