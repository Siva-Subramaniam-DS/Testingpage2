import React from 'react'
import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube } from 'lucide-react'
import { COMPANY_INFO, NAVIGATION_ITEMS, SOCIAL_MEDIA } from '../../utils/constants'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
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

            <p className="footer-description">
              {COMPANY_INFO.tagline}
            </p>

            <div className="footer-contact">
              <a href={`tel:${COMPANY_INFO.phone.replace(/\s/g, '')}`} className="contact-link">
                <Phone size={16} />
                <span>{COMPANY_INFO.phone}</span>
              </a>
              <a href={`mailto:${COMPANY_INFO.email}`} className="contact-link">
                <Mail size={16} />
                <span>{COMPANY_INFO.email}</span>
              </a>
              <div className="contact-link">
                <MapPin size={16} />
                <span>{COMPANY_INFO.address}</span>
              </div>
            </div>
          </div>

          <div className="footer-links">
            <div className="footer-nav">
              <h3 className="footer-title">Quick Links</h3>
              <ul className="nav-list">
                {NAVIGATION_ITEMS.map((item) => (
                  <li key={item.id}>
                    <Link to={item.path}>{item.name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-services">
              <h3 className="footer-title">Our Services</h3>
              <ul className="nav-list">
                <li><Link to="/services#residential">Residential Solar</Link></li>
                <li><Link to="/services#commercial">Commercial Solar</Link></li>
                <li><Link to="/services#housing-society">Housing Society Solar</Link></li>
                <li><Link to="/services#maintenance">Solar Maintenance</Link></li>
              </ul>
            </div>
          </div>

          <div className="footer-social">
            <h3 className="footer-title">Connect With Us</h3>
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

            <div className="footer-cta">
              <a 
                href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hi, I'm interested in solar installation. Please provide more details.`}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-button"
              >
                Get Free Quote
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            © {currentYear} {COMPANY_INFO.name}. All rights reserved.
          </p>
          <div className="footer-legal">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
