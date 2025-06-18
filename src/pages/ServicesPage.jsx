import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Home, Building, Users, Settings, Shield, Zap } from 'lucide-react'

const ServicesPage = () => {
  const services = [
    {
      icon: <Home className="service-icon" />,
      title: "Residential Solar Installation",
      description: "Complete solar solutions for homes, including rooftop installations, ground-mounted systems, and solar water heaters.",
      features: [
        "Custom system design for your home",
        "High-efficiency solar panels",
        "Professional installation and setup",
        "Monitoring and maintenance included"
      ],
      link: "/contact"
    },
    {
      icon: <Building className="service-icon" />,
      title: "Commercial Solar Solutions",
      description: "Large-scale solar installations for businesses, offices, and commercial properties to reduce operational costs.",
      features: [
        "Scalable solutions for any business size",
        "Energy cost reduction up to 90%",
        "Tax benefits and incentives",
        "24/7 monitoring and support"
      ],
      link: "/contact"
    },
    {
      icon: <Users className="service-icon" />,
      title: "Housing Society Projects",
      description: "Community solar projects for housing societies, apartments, and residential complexes.",
      features: [
        "Community-wide energy solutions",
        "Shared infrastructure benefits",
        "Individual metering options",
        "Collective cost savings"
      ],
      link: "/contact"
    },
    {
      icon: <Settings className="service-icon" />,
      title: "Solar System Maintenance",
      description: "Regular maintenance, cleaning, and optimization services to ensure maximum efficiency.",
      features: [
        "Quarterly maintenance visits",
        "Panel cleaning and inspection",
        "Performance optimization",
        "Emergency repair services"
      ],
      link: "/contact"
    },
    {
      icon: <Shield className="service-icon" />,
      title: "Warranty & Support",
      description: "Comprehensive warranty coverage and ongoing technical support for all installations.",
      features: [
        "25-year product warranty",
        "10-year workmanship warranty",
        "24/7 technical support",
        "Free consultation services"
      ],
      link: "/contact"
    },
    {
      icon: <Zap className="service-icon" />,
      title: "Energy Audits",
      description: "Professional energy audits to assess your current consumption and recommend optimal solar solutions.",
      features: [
        "Detailed energy consumption analysis",
        "Custom solar system recommendations",
        "ROI calculations and projections",
        "Government incentive guidance"
      ],
      link: "/contact"
    }
  ]

  return (
    <div className="services-page">
      <section className="services-section">
        <div className="container">
          <div className="section-header">
            <h1 className="section-title">Our Solar Services</h1>
            <p className="section-subtitle">
              Comprehensive solar energy solutions tailored to meet your specific needs. 
              From residential installations to large commercial projects, we've got you covered.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon-wrapper">
                  {service.icon}
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                
                <ul className="service-features">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="service-feature">
                      <span className="feature-bullet"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default ServicesPage 