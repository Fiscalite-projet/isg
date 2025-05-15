export default function DeclarationInfoForm({ formData, handleChange }) {
    return (
      <div className="block text-xl font-medium text-gray-700 mb-4 text-center">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">مكان التصريح</label>
          <input type="text" name="declarationPlace" value={formData.declarationPlace} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">تاريخ التصريح</label>
          <input type="date" name="declarationDate" value={formData.declarationDate} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300" />
        </div>
      </div>
    );
  }
