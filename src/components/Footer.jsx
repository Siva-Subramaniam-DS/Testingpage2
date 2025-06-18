import React from 'react'
import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Clock, Instagram } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Company Info */}
          <div className="footer-block footer-network">
            <Link to="/" className="footer-logo">
              <div className="logo-icon">
                <img 
                  src="src\assets\images\logo.jpg" 
                  alt="KON Sun Energy" 
                  className="company-logo"
                />
              </div>
              <div className="logo-text">
                <div className="logo-name">KON Sun Energy</div>
                <div className="logo-tagline">Solar Power Made Simple</div>
              </div>
            </Link>
            <div className="social-links">
              <a href="https://www.instagram.com/kon.sunenergy?utm_source=qr&igsh=MTl0bW5na3lnajVxeg==" className="social-link" aria-label="Instagram">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Business Hours */}
          <div className="footer-block">
            <h3 className="footer-title">Business Hours</h3>
            <ul className="hours-list">
              <li>
                <span>Monday - Friday</span>
                <span>9:00 AM - 6:00 PM</span>
              </li>
              <li>
                <span>Saturday</span>
                <span>9:00 AM - 6:00 PM</span>
              </li>
              <li>
                <span>Sunday</span>
                <span>Closed</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-block">
            <h3 className="footer-title">Contact Info</h3>
            <div className="contact-info-list">
              <a href="tel:+919600130810" className="contact-info-item">
                <Phone size={16} />
                +91-9600130810
              </a>
              <a href="mailto:tellus@konsunenergy.in" className="contact-info-item">
                <Mail size={16} />
                tellus@konsunenergy.in
              </a>
              <a href="#location" className="contact-info-item">
                <MapPin size={16} />
                NAVANEETHAN NILAYAM 02/192<br />
                Chennai, Tamil Nadu 600023
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="footer-block footer-map-block">
            <h3 className="footer-title">Our Location</h3>
            <div className="footer-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.1234567890123!2d80.2707!3d13.0827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDA0JzU3LjciTiA4MMKwMTYnMTQuNiJF!5e0!3m2!1sen!2sin!4v1234567890123"
                title="KON Sun Energy Location"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="copyright">
            © 2025 KON Sun Energy Solutions | <a href="https://ashwinai.in/" target="_blank" rel="noopener noreferrer" className="footer-dev-link">Developed by Forgeash Technologies</a> | All rights reserved. Privacy Policy | Terms of Service | Refund Policy | Shipping Policy
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 