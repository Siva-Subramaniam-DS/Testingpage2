import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone, Mail } from 'lucide-react'
import { COMPANY_INFO, NAVIGATION_ITEMS } from '../../utils/constants'
import './Header.css'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMenuOpen(false)
  }, [location])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const isActiveLink = (path) => {
    return location.pathname === path
  }

  return (
    <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
      {/* Top Bar */}
      <div className="header-top">
        
          <div className="header-top-content-wrapper">
            <div className="header-top-content">
              <div className="header-contact">
                <a href={`tel:${COMPANY_INFO.phone.replace(/\s/g, '')}`} className="contact-link">
                  <Phone size={16} />
                  <span>{COMPANY_INFO.phone}</span>
                </a>
                <a href={`mailto:${COMPANY_INFO.email}`} className="contact-link">
                  <Mail size={16} />
                  <span>{COMPANY_INFO.email}</span>
                </a>
              </div>
              <div className="header-cta">
                <span className="cta-text">Schedule a FREE consultation today!</span>
              </div>
            </div>
          </div>
        
      </div>

      {/* Main Header */}
      <div className="header-main">
        
          <div className="header-main-content-wrapper">
            <div className="header-content">
              {/* Logo */}
              <Link to="/" className="header-logo">
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

              {/* Desktop Navigation */}
              <nav className="header-nav desktop-nav">
                {NAVIGATION_ITEMS.map((item) => (
                  <Link
                    key={item.id}
                    to={item.path}
                    className={`nav-link ${isActiveLink(item.path) ? 'nav-link-active' : ''}`}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>

              {/* CTA Button */}
              <div className="header-cta-button">
                <a 
                  href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hi, I'm interested in solar installation. Please provide more details.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Get Free Quote
                </a>
              </div>

              {/* Mobile Menu Button */}
              <button 
                className="mobile-menu-toggle"
                onClick={toggleMenu}
                aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        
      </div>

      {/* Mobile Navigation */}
      <div className={`mobile-nav ${isMenuOpen ? 'mobile-nav-open' : ''}`}>
        <div className="mobile-nav-content">
          <nav className="mobile-nav-menu">
            {NAVIGATION_ITEMS.map((item) => (
              <Link
                key={item.id}
                to={item.path}
                className={`mobile-nav-link ${isActiveLink(item.path) ? 'mobile-nav-link-active' : ''}`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          
          <div className="mobile-nav-cta">
            <a 
              href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hi, I'm interested in solar installation. Please provide more details.`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-lg"
            >
              Get Free Quote
            </a>
          </div>

          <div className="mobile-nav-contact">
            <a href={`tel:${COMPANY_INFO.phone.replace(/\s/g, '')}`} className="mobile-contact-link">
              <Phone size={18} />
              <span>{COMPANY_INFO.phone}</span>
            </a>
            <a href={`mailto:${COMPANY_INFO.email}`} className="mobile-contact-link">
              <Mail size={18} />
              <span>{COMPANY_INFO.email}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div 
          className="mobile-nav-overlay"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </header>
  )
}

export default Header