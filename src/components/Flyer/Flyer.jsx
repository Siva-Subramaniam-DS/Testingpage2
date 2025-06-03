import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { COMPANY_INFO } from '../../utils/constants';

const Flyer = () => {
  return (
    <div className="bg-blue-600 text-white p-8 rounded-lg shadow-xl max-w-sm mx-auto my-8">
      <div className="text-center mb-6">
        {/* Company Logo Placeholder */}
        {/* <img src="/path/to/your/logo.png" alt="Company Logo" className="mx-auto mb-4" /> */}
        <h1 className="text-3xl font-bold mb-2">{COMPANY_INFO.name}</h1>
        <p className="text-blue-200 italic">{COMPANY_INFO.tagline}</p>
      </div>

      <div className="space-y-4 mb-6">
        <h2 className="text-2xl font-semibold">Get in Touch</h2>
        
        <div className="flex items-center space-x-3">
          <Phone className="w-5 h-5 text-blue-200" />
          <a href={`tel:${COMPANY_INFO.phone.replace(/\s/g, '')}`} className="text-white hover:underline">
            {COMPANY_INFO.phone}
          </a>
        </div>

        <div className="flex items-center space-x-3">
          <Mail className="w-5 h-5 text-blue-200" />
          <a href={`mailto:${COMPANY_INFO.email}`} className="text-white hover:underline">
            {COMPANY_INFO.email}
          </a>
        </div>

        {COMPANY_INFO.address && (
          <div className="flex items-start space-x-3">
            <MapPin className="w-5 h-5 text-blue-200 mt-1" />
            <p className="text-white">
              {COMPANY_INFO.address}
              {COMPANY_INFO.city && <span>, {COMPANY_INFO.city}</span>}
              {COMPANY_INFO.state && <span>, {COMPANY_INFO.state}</span>}
            </p>
          </div>
        )}
      </div>

      <div className="text-center">
        <p className="text-yellow-300 text-xl font-bold">Schedule a FREE consultation today!</p>
        {/* Consider adding a button or QR code here */}
      </div>
    </div>
  );
};

export default Flyer; 