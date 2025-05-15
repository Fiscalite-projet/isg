// components/LegalRepresentativeForm.js
export default function LegalRepresentativeForm({ formData, handleChange }) {
    return (
      <div className="grid grid-cols-1 gap-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700 mb-1">اسم الممثل القانوني</label>
            <input type="text" name="repName" value={formData.repName} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300" />
          </div>
          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700 mb-1">جنسية الممثل</label>
            <input type="text" name="repNationality" value={formData.repNationality} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300" />
          </div>
        </div>
  
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700 mb-1">بطاقة تعريف الممثل</label>
            <input type="text" name="repID" value={formData.repID} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300" />
          </div>
          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700 mb-1">هاتف الممثل</label>
            <input type="text" name="repPhone" value={formData.repPhone} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300" />
          </div>
        </div>
  
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700 mb-1">تاريخ إصدار بطاقة الممثل</label>
            <input type="date" name="repIssueDate" value={formData.repIssueDate} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300" />
          </div>
          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700 mb-1">اسم الممثل القانوني الآخر</label>
            <input type="text" name="legalRepName" value={formData.legalRepName} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300" />
          </div>
        </div>
  
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700 mb-1">جنسية الممثل القانوني الآخر</label>
            <input type="text" name="legalRepNationality" value={formData.legalRepNationality} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300" />
          </div>
          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700 mb-1">بطاقة تعريف الممثل القانوني الآخر</label>
            <input type="text" name="legalRepID" value={formData.legalRepID} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300" />
          </div>
        </div>
  
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700 mb-1">هاتف الممثل القانوني الآخر</label>
            <input type="text" name="legalRepPhone" value={formData.legalRepPhone} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300" />
          </div>
          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700 mb-1">تاريخ إصدار البطاقة للممثل القانوني الآخر</label>
            <input type="date" name="legalRepIssueDate" value={formData.legalRepIssueDate} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300" />
          </div>
        </div>
      </div>
    );
  }
  