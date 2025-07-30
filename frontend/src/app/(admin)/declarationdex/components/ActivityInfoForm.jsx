// components/ActivityInfoForm.js
export default function ActivityInfoForm({ formData, handleChange }) {
    return (
      <div className="grid grid-cols-1 gap-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700 mb-1">النشاط الأصلي</label>
            <input type="text" name="activityInfoForm.mainActivity" value={formData.activityInfoForm.mainActivity} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300" />
          </div>
          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700 mb-1">بداية النشاط الأصلي</label>
            <input type="date" name="activityInfoForm.mainActivityStart" value={formData.activityInfoForm.mainActivityStart} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300" />
          </div>
        </div>
  
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700 mb-1">النشاط الثانوي</label>
            <input type="text" name="activityInfoForm.secondaryActivity" value={formData.activityInfoForm.secondaryActivity} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300" />
          </div>
          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700 mb-1">بداية النشاط الثانوي</label>
            <input type="date" name="activityInfoForm.secondaryActivityStart" value={formData.activityInfoForm.secondaryActivityStart} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300" />
          </div>
        </div>
  
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">عنوان النشاط المقرر للتبليغ</label>
          <input type="text" name="activityInfoForm.activityAddress" value={formData.activityInfoForm.activityAddress} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300" />
        </div>
           <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">العدد</label>
              <input 
                type="number" 
                name="activityInfoForm.adressNumber" 
                value={formData.activityInfoForm.adressNumber} 
                onChange={handleChange} 
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300" 
              />
            </div>
    <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">الرمز البريدي</label>
              <input 
                type="text" 
                name="activityInfoForm.postalCodeActivity" 
                value={formData.activityInfoForm.postalCodeActivity} 
                onChange={handleChange} 
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300" 
              />
            </div>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700 mb-1">الولاية</label>
            <input type="text" name="activityInfoForm.wilaya" value={formData.activityInfoForm.wilaya} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300" />
          </div>
          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700 mb-1">المعتمدية</label>
            <input type="text" name="activityInfoForm.municipality" value={formData.activityInfoForm.municipality} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300" />
          </div>
            <div className="w-full">
            <label className="block text-sm font-medium text-gray-700 mb-1">الرمز</label>
            <input type="text" name="activityInfoForm.activityCode" value={formData.activityInfoForm.activityCode} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300" />
          </div>
            <div className="w-full">
            <label className="block text-sm font-medium text-gray-700 mb-1">عدد العمال</label>
            <input type="text" name="activityInfoForm.employeNumber" value={formData.activityInfoForm.employeNumber} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300" />
          </div>
        </div>
  
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700 mb-1">رقم الهاتف</label>
            <input type="number" name="activityInfoForm.phone" value={formData.activityInfoForm.phone} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300" />
          </div>
          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700 mb-1">الفاكس</label>
            <input type="text" name="activityInfoForm.fax" value={formData.activityInfoForm.fax} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300" />
          </div>
        </div>
  
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">البريد الإلكتروني</label>
          <input type="email" name="activityInfoForm.email" value={formData.activityInfoForm.email} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300" />
        </div>
  
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700 mb-1">الشكل القانوني</label>
            <input type="text" name="activityInfoForm.legalForm" value={formData.activityInfoForm.legalForm} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300" />
          </div>
          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700 mb-1">الجنسية</label>
            <input type="text" name="activityInfoForm.nationality" value={formData.activityInfoForm.nationality} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300" />
          </div>
        </div>
  
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700 mb-1">رأس المال الإجتماعي</label>
            <input type="text" name="activityInfoForm.totalAnnualIncome" value={formData.activityInfoForm.totalAnnualIncome} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300" />
          </div>
          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700 mb-1">النظام الجبائي</label>
            <input type="text" name="activityInfoForm.taxRegime" value={formData.activityInfoForm.taxRegime} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300" />
          </div>
        </div>
  
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">تاريخ القيد</label>
          <input type="date" name="activityInfoForm.registrationDate" value={formData.activityInfoForm.registrationDate} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300" />
        </div>
  
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">العنوان الشخصي</label>
          <input type="text" name="activityInfoForm.personalAddress" value={formData.activityInfoForm.personalAddress} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300" />
        </div>
  
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700 mb-1">الولاية الشخصية</label>
            <input type="text" name="activityInfoForm.personalWilaya" value={formData.activityInfoForm.personalWilaya} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300" />
          </div>
          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700 mb-1">البلدية الشخصية</label>
            <input type="text" name="activityInfoForm.personalMunicipality" value={formData.activityInfoForm.personalMunicipality} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300" />
          </div>
        </div>
        {/* هل لكم فروع ثانوية؟ وعددها */}
<div className="flex flex-col md:flex-row gap-4 items-center">
  <div className="w-full md:w-1/2">
    <label className="block text-sm font-medium text-gray-700 mb-1">هل لكم فروع ثانوية؟</label>
    <select
      name="activityInfoForm.hasBranches"
      value={formData.activityInfoForm.hasBranches}
      onChange={handleChange}
      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
    >
      <option value="">اختر</option>
      <option value="نعم">نعم</option>
      <option value="لا">لا</option>
    </select>
  </div>

  <div className="w-full md:w-1/2">
    <label className="block text-sm font-medium text-gray-700 mb-1">عدد الفروع الثانوية</label>
    <input
      type="number"
      name="activityInfoForm.branchCount"
      value={formData.activityInfoForm.branchCount}
      onChange={handleChange}
      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
    />
  </div>
</div>

{/* الامتيازات الجبائية */}
<div>
  <label className="block text-sm font-medium text-gray-700 mb-1">الإمتياز الجبائي 1</label>
  <div className="flex gap-4">
    <input
      type="text"
      name="activityInfoForm.taxBenefit1"
      value={formData.activityInfoForm.taxBenefit1}
      onChange={handleChange}
      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
      placeholder="وصف الإمتياز"
    />
    <input
      type="text"
      name="activityInfoForm.taxCode1"
      value={formData.activityInfoForm.taxCode1}
      onChange={handleChange}
      className="w-1/4 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
      placeholder="الرمز (4)"
    />
  </div>
</div>

<div>
  <label className="block text-sm font-medium text-gray-700 mb-1">الإمتياز الجبائي 2</label>
  <div className="flex gap-4">
    <input
      type="text"
      name="activityInfoForm.taxBenefit2"
      value={formData.activityInfoForm.taxBenefit2}
      onChange={handleChange}
      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
      placeholder="وصف الإمتياز"
    />
    <input
      type="text"
      name="activityInfoForm.taxCode2"
      value={formData.activityInfoForm.taxCode2}
      onChange={handleChange}
      className="w-1/4 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
      placeholder="الرمز (4)"
    />
  </div>
</div>

{/* تاريخ ختم السنة المالية */}
<div>
  <label className="block text-sm font-medium text-gray-700 mb-1">تاريخ ختم السنة المالية</label>
  <input
    type="date"
    name="activityInfoForm.financialYearEndDate"
    value={formData.activityInfoForm.financialYearEndDate}
    onChange={handleChange}
    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
  />
</div>

      </div>
    );
  }
  