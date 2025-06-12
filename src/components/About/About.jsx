import React from 'react'
import { Award, Users, Clock, Shield } from 'lucide-react'
import { COMPANY_INFO } from '../../utils/constants'
import aboutImage from '../../assets/images/B1.png';
import './About.css'

const About = () => {
  const stats = [
    {
      icon: <Users className="stat-icon" />,
      value: '2000+',
      label: 'Happy Customers'
    },
    {
      icon: <Award className="stat-icon" />,
      value: '10+',
      label: 'Years Experience'
    },
    {
      icon: <Clock className="stat-icon" />,
      value: '45-90',
      label: 'Days Installation'
    },
    {
      icon: <Shield className="stat-icon" />,
      value: '25',
      label: 'Years Warranty'
    }
  ]

  const scrollToForm = () => {
    const formElement = document.getElementById('consultation-form')
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="about-section" id="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title">About KON Sun Energy</h2>
            <p className="about-description">
              We are a leading solar energy solutions provider in Tamil Nadu, committed to making clean energy accessible to everyone. With over 10 years of experience and more than 2000 successful installations, we have established ourselves as a trusted name in the solar industry.
            </p>
            <p className="about-description">
              Our mission is to empower homes and businesses with sustainable energy solutions while helping them save on electricity costs. We take pride in our Tamil Nadu roots and are dedicated to serving our community with the highest standards of quality and service.
            </p>

            <div className="about-stats">
              {stats.map((stat, index) => (
                <div key={index} className="stat-item">
                  <div className="stat-icon-wrapper">
                    {stat.icon}
                  </div>
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="about-cta">
              <a href="/about" className="about-link">
              </a>
            </div>
          </div>

          <div className="about-image">
            <img src={aboutImage} alt="About KON Sun Energy" />
            <div className="about-badge">
              <span className="badge-text">{COMPANY_INFO.proudlyFrom}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About 