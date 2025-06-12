import React from 'react'
import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube } from 'lucide-react'
import { COMPANY_INFO, NAVIGATION_ITEMS, SOCIAL_MEDIA } from '../../utils/constants'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const businessHours = [
    { day: 'Monday - Friday', time: '9:00 AM - 6:00 PM' },
    { day: 'Saturday - Sunday ', time: ' Closed' },
  ]

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-block footer-network">
            <Link to="/" className="footer-logo">
              <div className="logo-icon">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <circle cx="20" cy="20" r="18" fill="#ff6b35" stroke="#fff" strokeWidth="2"/>
                  <path d="M12 20 L20 12 L28 20 L20 28 Z" fill="#ffd23f"/>
                  <circle cx="20" cy="20" r="4" fill="#fff"/>
                </svg>
              </div>
              <div className="logo-text">
                <span className="logo-name">{COMPANY_INFO.name}</span>
                <span className="logo-tagline">Solar Energy Solutions</span>
              </div>
            </Link>
            <p className="network-description">Design with soul. Spaces with story.</p>
            <div className="social-links">
              <a
                href={SOCIAL_MEDIA.facebook.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <Facebook size={20} />
              </a>
              <a
                href={SOCIAL_MEDIA.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <Instagram size={20} />
              </a>
              <a
                href={SOCIAL_MEDIA.youtube.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div className="footer-block footer-hours">
            <h3 className="footer-title">Business Hours</h3>
            <ul className="hours-list">
              {businessHours.map((hour, index) => (
                <li key={index}>
                  <span>{hour.day}</span>
                  <span>{hour.time}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-block footer-quick-links">
            <h3 className="footer-title">Quick Links</h3>
            <ul className="nav-list">
              {NAVIGATION_ITEMS.map((item) => (
                <li key={item.id}>
                  <Link to={item.path}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-block footer-contact-us">
            <h3 className="footer-title">Contact Us</h3>
            <div className="contact-info-list">
              <a href={`mailto:${COMPANY_INFO.email}`} className="contact-info-item">
                <Mail size={16} />
                <span>{COMPANY_INFO.email}</span>
              </a>
              <a href={`tel:${COMPANY_INFO.phone.replace(/\s/g, '')}`} className="contact-info-item">
                <Phone size={16} />
                <span>{COMPANY_INFO.phone}</span>
              </a>
              <div className="contact-info-item">
                <MapPin size={16} />
                <span>{COMPANY_INFO.address}</span>
              </div>
            </div>
            <div className="footer-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.134812345678!2d80.2072957148227!3d13.10548869080786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526685413c6b2b%3A0x6b2b6b2b6b2b6b2b!2sNAVANEETHAN%20NILAYAM%2002%2F192%20Chennai%20-%20600023!5e0!3m2!1sen!2sin!4v1678888888888!5m2!1sen!2sin"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Location Map"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            © {currentYear} {COMPANY_INFO.name} | Developed by <a href="https://ashwinai.in/" target="_blank" rel="noopener noreferrer">Forgeash Technologies</a> | All rights reserved.
          </p>
          <div className="footer-legal">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
            <Link to="/refund">Refund Policy</Link>
            <Link to="/shipping">Shipping Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
