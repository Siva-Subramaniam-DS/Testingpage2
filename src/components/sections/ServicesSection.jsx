import React from 'react'
import { Link } from 'react-router-dom'
import { Grid, BatteryCharging, Zap, Award, Gauge, Building2 } from 'lucide-react'

const ServicesSection = () => {
  const solarSolutions = [
    {
      icon: <Grid size={32} />,
      title: 'On-Grid Solar',
      description: 'Connected to the electricity grid with net metering benefits',
      features: [
        'Net metering facility',
        'Lower initial investment',
        'Grid backup available',
        'Sell excess power'
      ]
    },
    {
      icon: <BatteryCharging size={32} />,
      title: 'Off-Grid Solar',
      description: 'Independent solar system with battery storage',
      features: [
        'Complete energy independence',
        'Battery backup included',
        'No dependency on grid',
        'Perfect for remote locations'
      ]
    },
    {
      icon: <Zap size={32} />,
      title: 'Hybrid Solar',
      description: 'Combines grid connection with battery backup',
      features: [
        'Best of both worlds',
        'Uninterrupted power supply',
        'Smart energy management',
        'Maximum savings'
      ]
    }
  ]

  const additionalBenefits = [
    {
      icon: <Award size={32} />,
      title: '25 Year Warranty',
      description: 'Long-term protection for your investment'
    },
    {
      icon: <Gauge size={32} />,
      title: '90% Savings',
      description: 'Significantly reduce your electricity bills'
    },
    {
      icon: <Building2 size={32} />,
      title: 'Government Subsidy',
      description: 'Up to ₹50,000 subsidy available'
    }
  ]

  return (
    <section className="solar-solutions-section section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Solar Solutions</h2>
          <p className="section-subtitle">
            Choose the perfect solar solution for your energy needs
          </p>
        </div>

        <div className="solar-solutions-grid">
          {/* On-Grid Solar */}
          <div className="solution-card card">
            <div className="solution-icon-wrapper">
              <Grid size={32} />
            </div>
            <h3 className="solution-card-title">On-Grid Solar</h3>
            <p className="solution-card-description">Connected to the electricity grid with net metering benefits</p>
            <ul className="solution-features">
              <li>Net metering facility</li>
              <li>Lower initial investment</li>
              <li>Grid backup available</li>
              <li>Sell excess power</li>
            </ul>
          </div>
          {/* Off-Grid Solar */}
          <div className="solution-card card">
            <div className="solution-icon-wrapper">
              <BatteryCharging size={32} />
            </div>
            <h3 className="solution-card-title">Off-Grid Solar</h3>
            <p className="solution-card-description">Independent solar system with battery storage</p>
            <ul className="solution-features">
              <li>Complete energy independence</li>
              <li>Battery backup included</li>
              <li>No dependency on grid</li>
              <li>Perfect for remote locations</li>
            </ul>
          </div>
          {/* Hybrid Solar */}
          <div className="solution-card card">
            <div className="solution-icon-wrapper">
              <Zap size={32} />
            </div>
            <h3 className="solution-card-title">Hybrid Solar</h3>
            <p className="solution-card-description">Combines grid connection with battery backup</p>
            <ul className="solution-features">
              <li>Best of both worlds</li>
              <li>Uninterrupted power supply</li>
              <li>Smart energy management</li>
              <li>Maximum savings</li>
            </ul>
          </div>
        </div>

        <div className="additional-benefits-grid">
          {additionalBenefits.map((benefit, index) => (
            <div key={index} className="additional-benefit-card">
              <div className="additional-benefit-icon-wrapper">
                {benefit.icon}
              </div>
              <h3 className="additional-benefit-title">{benefit.title}</h3>
              <p className="additional-benefit-description">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection 