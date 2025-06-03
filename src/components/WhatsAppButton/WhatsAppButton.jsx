import React from 'react';
import { MessageCircle } from 'lucide-react';
import { COMPANY_INFO } from '../../utils/constants';
import './WhatsAppButton.css';

const WhatsAppButton = () => {
  const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsapp}`;

  return (
    <a 
      href={whatsappUrl} 
      className="whatsapp-button"
      target="_blank" 
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={32} />
    </a>
  );
};

export default WhatsAppButton; 