// components/GeneralInfoForm.js
import React from 'react'

export default function GeneralInfoForm({ formData, handleChange,setFormData }) {
  return (
     <div className="max-w-6xl mx-auto p-6 bg-white" dir="rtl">
      <div className="p-6">
        {/* Header */}
          <div className="grid grid-cols-1 md:grid-cols-2 my-5">
          <h1 className="className='block text-sm font-medium text-gray-700 mb-1'  ">الاسم أو الاسم الاجتماعي</h1>
            
            <input 
                type="text" 
                name="generalInfoForm.fullName" 
                value={formData.generalInfoForm.fullName} 
                onChange={handleChange} 
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300" 
              />
        
          
        </div>

        {/* Form Content */}
        <div className="grid grid-cols-1 gap-6">
          
          {/* Header Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">عنوان النشاط: المقر</label>
              <input 
                type="text" 
                name="generalInfoForm.address" 
                value={formData.generalInfoForm.address} 
                onChange={handleChange} 
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300" 
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">العدد</label>
              <input 
                type="text" 
                name="generalInfoForm.nationalId" 
                value={formData.generalInfoForm.nationalId} 
                onChange={handleChange} 
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300" 
              />
            </div>
          </div>

          {/* National ID and Branch Number */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">الرقم البريدي</label>
              <input 
                type="text" 
                name="generalInfoForm.nationalIdNumber" 
                value={formData.generalInfoForm.nationalIdNumber} 
                onChange={handleChange} 
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300" 
              />
            </div>
            
          </div>

          {/* Address Information */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">المدينة</label>
              <input 
                type="text" 
                name="generalInfoForm.city" 
                value={formData.generalInfoForm.city} 
                onChange={handleChange} 
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300" 
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">الولاية</label>
              <input 
                type="text" 
                name="generalInfoForm.state" 
                value={formData.generalInfoForm.state} 
                onChange={handleChange} 
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300" 
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">المعتمدية</label>
              <input 
                type="text" 
                name="generalInfoForm.country" 
                value={formData.generalInfoForm.country} 
                onChange={handleChange} 
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300" 
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">الرمز البريدي</label>
              <input 
                type="text" 
                name="generalInfoForm.postalCode" 
                value={formData.generalInfoForm.postalCode} 
                onChange={handleChange} 
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300" 
              />
            </div>
             <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">الرمز</label>
              <input 
                type="text" 
                name="generalInfoForm.symbole" 
                value={formData.generalInfoForm.symbole} 
                onChange={handleChange} 
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300" 
              />
            </div>
          </div>

          {/* Phone and Fax Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">رقم الهاتف (5)</label>
              <input 
                type="text" 
                name="generalInfoForm.phoneNumber" 
                value={formData.generalInfoForm.phoneNumber} 
                onChange={handleChange} 
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300" 
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">رقم الفاكس (5)</label>
              <input 
                type="text" 
                name="generalInfoForm.faxNumber" 
                value={formData.generalInfoForm.faxNumber} 
                onChange={handleChange} 
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300" 
              />
            </div>
             
          </div>

          {/* Birth Date and Gender */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">الشكل القانوني (4)</label>
              <input 
                type="text" 
                name="generalInfoForm.legalFormType" 
                value={formData.generalInfoForm.legalFormType} 
                onChange={handleChange} 
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300" 
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">الجنسية (6)</label>
              <input 
                type="text" 
                name="generalInfoForm.nationality" 
                value={formData.generalInfoForm.nationality} 
                onChange={handleChange} 
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300" 
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">بداية من</label>
              <input 
                type="date" 
                name="generalInfoForm.birthDate" 
                value={formData.generalInfoForm.birthDate} 
                onChange={handleChange} 
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300" 
              />
            </div>
          </div>

          {/* Gender Selection */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
            
              <div className="flex gap-4">
                <label className="flex items-center">
                  <input 
                    type="radio" 
                    name="generalInfoForm.genderMale" 
                    value="ذكر" 
                    checked={formData.generalInfoForm.genderMale} 
                    onChange={(e) => setFormData(prev => ({...prev, genderMale: e.target.checked, genderFemale: false}))} 
                    className="mr-2"
                  />
                  ذكر
                </label>
                <label className="flex items-center">
                  <input 
                    type="radio" 
                    name="generalInfoForm.genderFemale" 
                    value="أنثى" 
                    checked={formData.generalInfoForm.genderFemale} 
                    onChange={(e) => setFormData(prev => ({...prev, genderFemale: e.target.checked, genderMale: false}))} 
                    className="mr-2"
                  />
                  أنثى
                </label>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">السنة</label>
              <input 
                type="date" 
                name="generalInfoForm.accountingPeriod" 
                value={formData.generalInfoForm.accountingPeriod} 
                onChange={handleChange} 
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300" 
              />
            </div>
          </div>

          {/* Social Security Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">رأس المال الاجتماعي (بالدينار)</label>
              <input 
                type="text" 
                name="generalInfoForm.socialSecurityHead" 
                value={formData.generalInfoForm.socialSecurityHead} 
                onChange={handleChange} 
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300" 
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">نظام الصرف  (8)</label>
              <div className="flex gap-4">
                <label className="flex items-center">
                  <input 
                    type="radio" 
                    name="generalInfoForm.bankingSystemType" 
                    value="مقيم" 
                    checked={formData.generalInfoForm.bankingSystemType === 'مقيم'} 
                    onChange={handleChange} 
                    className="mr-2"
                  />
                  مقيم
                </label>
                <label className="flex items-center">
                  <input 
                    type="radio" 
                    name="generalInfoForm.bankingSystemType" 
                    value="غير مقيم" 
                    checked={formData.generalInfoForm.bankingSystemType === 'غير مقيم'} 
                    onChange={handleChange} 
                    className="mr-2"
                  />
                  غير مقيم
                </label>
              </div>
            </div>
          </div>

          {/* Registration Date Information */}
          <div className="grid grid-cols-1  gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">تاريخ الولادة بالنسبة إلى الأشخاص الطبيعيين</label>
              <div className="grid grid-cols-3 gap-2">
                <input 
                  type="text" 
                  name="generalInfoForm.registrationDate" 
                  value={formData.generalInfoForm.registrationDate} 
                  onChange={handleChange} 
                  placeholder="اليوم"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300" 
                />
                <input 
                  type="text" 
                  name="generalInfoForm.registrationMonth" 
                  value={formData.generalInfoForm.registrationMonth} 
                  onChange={handleChange} 
                  placeholder="الشهر"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300" 
                />
                <input 
                  type="text" 
                  name="generalInfoForm.registrationYear" 
                  value={formData.generalInfoForm.registrationYear} 
                  onChange={handleChange} 
                  placeholder="السنة"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300" 
                />
              </div>
            </div>
           
          </div>
           <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">تسجيل القانون الأساسي (7)</label>
              <h2 className='block text-sm font-medium text-gray-700 mb-1'>رمز القباضة المالية</h2>
              <input 
                type="text" 
                name="generalInfoForm.registrationCode" 
                value={formData.generalInfoForm.registrationCode} 
                onChange={handleChange} المعتمدية
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300" 
              />
            </div>
            
          {/* Additional Date and Reference Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">المرجع</label>
              <div className="grid grid-cols-3 gap-2">
                <input 
                  type="text" 
                  name="generalInfoForm.referenceDate" 
                  value={formData.generalInfoForm.referenceDate} 
                  onChange={handleChange} 
                  placeholder="اليوم"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300" 
                />
                <input 
                  type="text" 
                  name="generalInfoForm.referenceMonth" 
                  value={formData.generalInfoForm.referenceMonth} 
                  onChange={handleChange} 
                  placeholder="الشهر"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300" 
                />
                <input 
                  type="text" 
                  name="generalInfoForm.referenceYear" 
                  value={formData.generalInfoForm.referenceYear} 
                  onChange={handleChange}
                  placeholder="السنة"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300" 
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">تاريخ</label>
              <div className="grid grid-cols-3 gap-2">
                <input 
                  type="text" 
                  name="generalInfoForm.applicationDate" 
                  value={formData.generalInfoForm.applicationDate} 
                  onChange={handleChange} 
                  placeholder="اليوم"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300" 
                />
                <input 
                  type="text" 
                  name="generalInfoForm.applicationMonth" 
                  value={formData.generalInfoForm.applicationMonth} 
                  onChange={handleChange} 
                  placeholder="الشهر"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300" 
                />
                <input 
                  type="text" 
                  name="generalInfoForm.applicationYear" 
                  value={formData.generalInfoForm.applicationYear} 
                  onChange={handleChange} 
                  placeholder="السنة"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300" 
                />
              </div>
            </div>
          </div>

        

          {/* Additional Date Information */}
         
          {/* Final Date Information */}
          <div >
            

            <div className=" pt-4">
            <h3 className="block text-sm font-medium text-gray-700 mb-2">النظام القانوني بالنسبة إلى الأشخاص الطبيعيين (8)</h3>
            <div className="">
              <div className='block text-sm font-medium text-gray-700 mb-2'>
                <h4> الذين يحققون أرباح غير تجارية:</h4>
              <div className='flex'>
                <label className="fblock text-sm font-medium text-gray-700  mb-2">

                  <input 
                    type="checkbox" 
                    name="generalInfoForm.legalEntityBasic" 
                    checked={formData.generalInfoForm.legalEntityBasic} 
                    onChange={handleChange} 
                    className="mr-2"
                  />
                  نظام حقيقي 
                </label>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <input 
                    type="checkbox" 
                    name="generalInfoForm.legalEntityAdvanced" 
                    checked={formData.generalInfoForm.legalEntityAdvanced} 
                  
                    onChange={handleChange} 
                    className="mr-2"
                  />
                    على أساس قاعدة تقديرية
                </label>
               
              </div>
              </div>
              <div className='block text-sm font-medium text-gray-700 mb-2'>
                <h4> الذين يحققون أرباح  تجارية و صناعية:</h4>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                  <input 
                    type="checkbox" 
                    name="generalInfoForm.legalEntitysimple" 
                    checked={formData.generalInfoForm.legalEntitysimple} 
                    onChange={handleChange} 
                    className="mr-2"
                  />      

                    نظام حقيقي
                </label>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <input 
                    type="checkbox" 
                    name="generalInfoForm.legalEntityCommercial" 
                    checked={formData.generalInfoForm.legalEntityCommercial}                     

                    onChange={handleChange} 
                    className="mr-2"
                  />
                    نظام حقيقي مبسط
                </label>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <input 
                    type="checkbox" 
                    name="generalInfoForm.legalEntityNonCommercial" 
                    checked={formData.generalInfoForm.legalEntityNonCommercial} 
                    onChange={handleChange} 
                    className="mr-2"
                  />
                 نظام حقيقي مبسط طبقا للأحكام الفصل 18 من قانون المالية لسنة 2016
                </label>
              </div>
            </div>
          </div>
            {/* Document Date Information */}
         
          </div>
           <div >
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">تاريخ الإنضواء تحت الظام الجبائي</label>
              <div className="grid grid-cols-3 gap-2">
                <input 
                  type="text" 
                  name="generalInfoForm.documentDate" 
                  value={formData.generalInfoForm.documentDate} 
                  onChange={handleChange} 
                  placeholder="اليوم"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300" 
                />
                <input 
                  type="text" 
                  name="generalInfoForm.documentMonth" 
                  value={formData.generalInfoForm.documentMonth} 
                  onChange={handleChange} 
                  placeholder="الشهر"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300" 
                />
                <input 
                  type="text" 
                  name="generalInfoForm.documentYear" 
                  value={formData.generalInfoForm.documentYear} 
                  onChange={handleChange} 
                  placeholder="السنة"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300" 
                />
              </div>
            </div>
             <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">تاريخ تغيير الصنف</label>
              <div className="grid grid-cols-3 gap-2">
                <input 
                  type="date" 
                  name="generalInfoForm.documentDate" 
                  value={formData.generalInfoForm.changeDate} 
                  onChange={handleChange} 
                  placeholder="اليوم"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300" 
                />
                
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t pt-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">الصفة بالنظر الأداء على القيمة المضافة (9)</label>
                <input 
                  type="text" 
                  name="generalInfoForm.modificationDate" 
                  value={formData.generalInfoForm.modificationDate} 
                  onChange={handleChange} 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1 mt-5">تاريخ الحصول</label>
                <input 
                  type="text" 
                  name="generalInfoForm.modificationMonth" 
                  value={formData.generalInfoForm.modificationMonth} 
                  onChange={handleChange} 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1  mt-5">الاختيار</label>
                <input 
                  type="text" 
                  name="generalInfoForm.modificationYear" 
                  value={formData.generalInfoForm.modificationYear} 
                  onChange={handleChange} 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300" 
                />
              </div>
            </div>
            
          </div>

        
         
        </div>
      </div>
    </div>
  );

  
}
