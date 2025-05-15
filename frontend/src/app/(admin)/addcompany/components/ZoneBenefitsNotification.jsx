'use client'
import React, { useEffect, useState } from 'react';

const ZoneBenefitsNotification = ({ zoneName }) => {
  const [zoneData, setZoneData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchZoneData = async () => {
      try {
        console.log('Fetching data for zone:', zoneName); // Debug log
        const res = await fetch('http://localhost:5000/zones');
        
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        
        const data = await res.json();
        console.log('All zones data:', data); // Debug log
        
        const matchedZone = data.find(zone => zone.name === zoneName);
        console.log('Matched zone:', matchedZone); // Debug log
        
        if (!matchedZone) {
          throw new Error(`Zone "${zoneName}" not found`);
        }
        
        setZoneData(matchedZone);
      } catch (err) {
        console.error('Error in ZoneBenefitsNotification:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (zoneName) {
      fetchZoneData();
    } else {
      setZoneData(null);
      setLoading(false);
    }
  }, [zoneName]);

  if (loading) {
    console.log('Loading zone data...'); // Debug log
    return null;
  }

  if (error) {
    console.error('Error state:', error); // Debug log
    return null; // Or you could show an error notification
  }

  if (!zoneData) {
    console.log('No zone data available'); // Debug log
    return null;
  }

  console.log('Rendering with zone data:', zoneData); // Debug log

  // Check if there are actually any benefits to show
  const hasBenefits = (
    zoneData.investmentPrimePercentage ||
    zoneData.investmentMaxAmount ||
    zoneData.taxExemptionYears ||
    zoneData.postExemptionTaxRate ||
    zoneData.socialSecurityExemptionYears ||
    (zoneData.otherBenefits && zoneData.otherBenefits.length > 0)
  );

  if (!hasBenefits) {
    console.log('Zone has no benefits data'); // Debug log
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 bg-yellow-100 text-red-800 p-4 rounded-lg shadow-lg w-96">
      <p className="font-semibold">Avantages fiscaux pour cette zone :</p>
      <ul className="mt-2 list-disc list-inside text-sm">
        {zoneData.investmentPrimePercentage && (
          <li>
            Prime de {zoneData.investmentPrimePercentage}% de l'investissement total
            {zoneData.investmentMaxAmount && (
              <> (max. {zoneData.investmentMaxAmount.toLocaleString()} DT)</>
            )}
          </li>
        )}
        {zoneData.taxExemptionYears && (
          <li>
            Exonération de l'impôt sur les bénéfices pendant {zoneData.taxExemptionYears} ans
            {zoneData.postExemptionTaxRate && (
              <>, puis taux de {zoneData.postExemptionTaxRate}%</>
            )}
          </li>
        )}
        {zoneData.socialSecurityExemptionYears && (
          <li>
            Exonération de la charge sociale pendant {zoneData.socialSecurityExemptionYears} ans
            {zoneData.socialSecurityRate && (
              <> (taux normal: {zoneData.socialSecurityRate}%)</>
            )}
          </li>
        )}
        {zoneData.otherBenefits?.map((benefit, index) => (
          <li key={index}>{benefit}</li>
        ))}
      </ul>
    </div>
  );
};

export default ZoneBenefitsNotification;