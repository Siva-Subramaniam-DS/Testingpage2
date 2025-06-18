import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Phone, Mail, MapPin, Menu, X } from 'lucide-react'

const Header = ({ isScrolled }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  const isActive = (path) => {
    return location.pathname === path
  }

  return (
    <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
      {/* Top Header */}
      <div className="header-top">
        <div className="header-top-content-wrapper">
          <div className="header-top-content">
            <div className="header-contact">
              <a href="tel:+919600130810" className="contact-link">
                <Phone size={16} />
                9600 13 0810
              </a>
              <a href="mailto:tellus@konsunenergy.in" className="contact-link">
                <Mail size={16} />
                tellus@konsunenergy.in
              </a>
            </div>
            <div className="header-cta">
              <Link to="/contact" className="btn btn-secondary cta-btn">
                Schedule a FREE consultation today!
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="header-main">
        <div className="header-main-content-wrapper">
          <div className="header-content">
            {/* Logo */}
            <Link to="/" className="header-logo" onClick={closeMobileMenu}>
              <div className="logo-icon">
                <img 
                  src="src/assets/images/logo.jpg" 
                  alt="KON Sun Energy Solutions" 
                  width="40" 
                  height="40"
                />
              </div>
              <div className="logo-text">
                <div className="logo-name">KON Sun Energy Solutions</div>
                <div className="logo-tagline">Solar Energy Solutions</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="desktop-nav">
              <Link 
                to="/" 
                className={`nav-link ${isActive('/') ? 'nav-link-active' : ''}`}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className={`nav-link ${isActive('/about') ? 'nav-link-active' : ''}`}
              >
                About Us
              </Link>
              <Link 
                to="/services" 
                className={`nav-link ${isActive('/services') ? 'nav-link-active' : ''}`}
              >
                Services
              </Link>
              <Link 
                to="/contact" 
                className={`nav-link ${isActive('/contact') ? 'nav-link-active' : ''}`}
              >
                Contact
              </Link>
            </nav>

            {/* CTA Button */}
            <div className="header-cta-button">
              <Link to="/contact" className="btn btn-primary">
                Get Free Quote
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button 
              className="mobile-menu-toggle"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <nav className={`mobile-nav ${isMobileMenuOpen ? 'mobile-nav-open' : ''}`}>
        <div className="mobile-nav-content">
          <div className="mobile-nav-menu">
            <Link 
              to="/" 
              className={`mobile-nav-link ${isActive('/') ? 'mobile-nav-link-active' : ''}`}
              onClick={closeMobileMenu}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`mobile-nav-link ${isActive('/about') ? 'mobile-nav-link-active' : ''}`}
              onClick={closeMobileMenu}
            >
              About Us
            </Link>
            <Link 
              to="/services" 
              className={`mobile-nav-link ${isActive('/services') ? 'mobile-nav-link-active' : ''}`}
              onClick={closeMobileMenu}
            >
              Services
            </Link>
            <Link 
              to="/contact" 
              className={`mobile-nav-link ${isActive('/contact') ? 'mobile-nav-link-active' : ''}`}
              onClick={closeMobileMenu}
            >
              Contact
            </Link>
          </div>

          <div className="mobile-nav-cta">
            <Link to="/contact" className="btn btn-primary" onClick={closeMobileMenu}>
              Get Free Quote
            </Link>
          </div>

          <div className="mobile-nav-contact">
            <a href="tel:+919600130810" className="mobile-contact-link">
              <Phone size={20} />
              +91-9600130810
            </a>
            <a href="mailto:tellus@konsunenergy.in" className="mobile-contact-link">
              <Mail size={20} />
              tellus@konsunenergy.in
            </a>
            <a href="#location" className="mobile-contact-link">
              <MapPin size={20} />
              Chennai, Tamil Nadu
            </a>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="mobile-nav-overlay" 
          onClick={closeMobileMenu}
          aria-hidden="true"
        />
      )}
    </header>
  )
}

export default Header 