import React from 'react'
import { MessageCircle } from 'lucide-react'

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = '919600130810'
    const message = 'Hi! I\'m interested in solar panel installation. Can you provide more information?'
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <div className="whatsapp-button">
      <button
        onClick={handleWhatsAppClick}
        aria-label="Contact us on WhatsApp"
        style={{
          position: 'fixed',
          bottom: '20px',
          left: '20px',
          backgroundColor: '#25d366',
          color: '#fff',
          border: 'none',
          borderRadius: '50%',
          width: '60px',
          height: '60px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
          zIndex: 1000,
          transition: 'background-color 0.3s ease'
        }}
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = '#128c7e'
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = '#25d366'
        }}
      >
        <MessageCircle size={28} />
      </button>
    </div>
  )
}

export default WhatsAppButton 