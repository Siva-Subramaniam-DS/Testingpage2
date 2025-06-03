import React from 'react'
import { Home, Building, Building2, ArrowRight } from 'lucide-react'
import { SERVICE_TYPES } from '../../utils/constants'
import './Services.css'

const Services = () => {
  const services = [
    {
      id: 'residential',
      icon: <Home className="service-icon" />,
      title: 'Residential Solar',
      description: 'Power your home with clean, renewable energy and reduce your electricity bills by up to 90%.',
      features: [
        'Customized solutions for homes',
        'Government subsidies available',
        '25-year warranty',
        'Professional installation'
      ]
    },
    {
      id: 'commercial',
      icon: <Building className="service-icon" />,
      title: 'Commercial Solar',
      description: 'Boost your business sustainability and cut operational costs with our commercial solar solutions.',
      features: [
        'Tailored for businesses',
        'Tax benefits and incentives',
        'Energy independence',
        'Corporate sustainability'
      ]
    },
    {
      id: 'housing-society',
      icon: <Building2 className="service-icon" />,
      title: 'Housing Society Solar',
      description: 'Power your entire community with solar energy and enjoy collective savings.',
      features: [
        'Community-wide solutions',
        'Shared cost benefits',
        'Common area power',
        'Collective savings'
      ]
    }
  ]

  return (
    <section className="services-section" id="services">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            Choose the perfect solar solution for your needs
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-icon-wrapper">
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, index) => (
                  <li key={index} className="service-feature">
                    <span className="feature-bullet"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              <a href="/services" className="service-link">
                Learn More <ArrowRight size={16} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
