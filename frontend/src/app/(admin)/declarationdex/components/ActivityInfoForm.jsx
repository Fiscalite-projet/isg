// components/ActivityInfoForm.js
export default function ActivityInfoForm({ formData, handleChange }) {
    return (
      <div className="grid grid-cols-1 gap-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700 mb-1">النشاط الأصلي</label>
            <input type="text" name="mainActivity" value={formData.mainActivity} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300" />
          </div>
          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700 mb-1">بداية النشاط الأصلي</label>
            <input type="date" name="mainActivityStart" value={formData.mainActivityStart} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300" />
          </div>
        </div>
  
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700 mb-1">النشاط الثانوي</label>
            <input type="text" name="secondaryActivity" value={formData.secondaryActivity} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300" />
          </div>
          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700 mb-1">بداية النشاط الثانوي</label>
            <input type="date" name="secondaryActivityStart" value={formData.secondaryActivityStart} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300" />
          </div>
        </div>
  
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">عنوان النشاط</label>
          <input type="text" name="activityAddress" value={formData.activityAddress} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300" />
        </div>
  
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700 mb-1">الولاية</label>
            <input type="text" name="wilaya" value={formData.wilaya} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300" />
          </div>
          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700 mb-1">البلدية</label>
            <input type="text" name="municipality" value={formData.municipality} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300" />
          </div>
        </div>
  
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700 mb-1">رقم الهاتف</label>
            <input type="text" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300" />
          </div>
          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700 mb-1">الفاكس</label>
            <input type="text" name="fax" value={formData.fax} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300" />
          </div>
        </div>
  
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">البريد الإلكتروني</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300" />
        </div>
  
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700 mb-1">الشكل القانوني</label>
            <input type="text" name="legalForm" value={formData.legalForm} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300" />
          </div>
          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700 mb-1">الجنسية</label>
            <input type="text" name="nationality" value={formData.nationality} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300" />
          </div>
        </div>
  
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700 mb-1">رأس المال الإجتماعي</label>
            <input type="text" name="totalAnnualIncome" value={formData.totalAnnualIncome} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300" />
          </div>
          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700 mb-1">النظام الجبائي</label>
            <input type="text" name="taxRegime" value={formData.taxRegime} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300" />
          </div>
        </div>
  
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">تاريخ القيد</label>
          <input type="date" name="registrationDate" value={formData.registrationDate} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300" />
        </div>
  
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">العنوان الشخصي</label>
          <input type="text" name="personalAddress" value={formData.personalAddress} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300" />
        </div>
  
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700 mb-1">الولاية الشخصية</label>
            <input type="text" name="personalWilaya" value={formData.personalWilaya} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300" />
          </div>
          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700 mb-1">البلدية الشخصية</label>
            <input type="text" name="personalMunicipality" value={formData.personalMunicipality} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300" />
          </div>
        </div>
      </div>
    );
  }
  