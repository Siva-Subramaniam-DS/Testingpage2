import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Users, Award, Zap, Shield } from 'lucide-react'

const AboutSection = () => {
  return (
    <section className="about-section section">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title">About KON Sun Energy</h2>
            <p className="about-description">
              We are a leading solar energy company in Tamil Nadu, specializing in residential, 
              commercial, and housing society solar installations. With years of experience and 
              a commitment to quality, we help homeowners and businesses transition to clean, 
              renewable energy while saving money on electricity bills.
            </p>
            
            <div className="about-stats">
              <div className="stat-item">
                <div className="stat-icon-wrapper">
                  <Users className="stat-icon" />
                </div>
                <div className="stat-value">2000</div>
              </div>
              <div className="stat-item">
                <div className="stat-icon-wrapper">
                  <Award className="stat-icon" />
                </div>
                <div className="stat-value">10+</div>
                <div className="stat-label">Years Warranty</div>
              </div>
              <div className="stat-item">
                <div className="stat-icon-wrapper">
                  <Zap className="stat-icon" />
                </div>
                <div className="stat-value">45-90</div>
                <div className="stat-label">Energy Savings</div>
              </div>
              <div className="stat-item">
                <div className="stat-icon-wrapper">
                  <Shield className="stat-icon" />
                </div>
                <div className="stat-value">100%</div>
                <div className="stat-label">Quality Assured</div>
              </div>
            </div>
          </div>

          <div className="about-image">
            <img 
              src="/src/assets/images/S1.jpg"
              alt="Solar Panel Installation" 
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '16px',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)'
              }}
            />
            <div className="about-badge">
              <div className="badge-text">Proudly FROM TAMIL NADU & TAMIL BRAINS ❤️</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection 