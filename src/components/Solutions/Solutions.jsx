import React from 'react'
import { Zap, Sun, Battery, Grid } from 'lucide-react'
import { SOLAR_PANEL_TYPES } from '../../utils/constants'
import './Solutions.css'

const Solutions = () => {
  const solutions = [
    {
      id: 'on-grid',
      icon: <Grid className="solution-icon" />,
      title: 'On-Grid Solar',
      description: 'Connected to the electricity grid with net metering benefits',
      benefits: [
        'Net metering facility',
        'Lower initial investment',
        'Grid backup available',
        'Sell excess power'
      ]
    },
    {
      id: 'off-grid',
      icon: <Battery className="solution-icon" />,
      title: 'Off-Grid Solar',
      description: 'Independent solar system with battery storage',
      benefits: [
        'Complete energy independence',
        'Battery backup included',
        'No dependency on grid',
        'Perfect for remote locations'
      ]
    },
    {
      id: 'hybrid',
      icon: <Zap className="solution-icon" />,
      title: 'Hybrid Solar',
      description: 'Combines grid connection with battery backup',
      benefits: [
        'Best of both worlds',
        'Uninterrupted power supply',
        'Smart energy management',
        'Maximum savings'
      ]
    }
  ]

  return (
    <section className="solutions-section" id="solutions">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Solar Solutions</h2>
          <p className="section-subtitle">
            Choose the perfect solar solution for your energy needs
          </p>
        </div>

        <div className="solutions-grid">
          {solutions.map((solution) => (
            <div key={solution.id} className="solution-card">
              <div className="solution-icon-wrapper">
                {solution.icon}
              </div>
              <h3 className="solution-title">{solution.title}</h3>
              <p className="solution-description">{solution.description}</p>
              <ul className="solution-benefits">
                {solution.benefits.map((benefit, index) => (
                  <li key={index} className="solution-benefit">
                    <span className="benefit-bullet"></span>
                    {benefit}
                  </li>
                ))}
              </ul>
              <div className="solution-cta">
                <a href="/services" className="solution-link">
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="solutions-features">
          <div className="feature-card">
            <Sun className="feature-icon" />
            <h4>25 Year Warranty</h4>
            <p>Long-term protection for your investment</p>
          </div>
          <div className="feature-card">
            <Zap className="feature-icon" />
            <h4>90% Savings</h4>
            <p>Significantly reduce your electricity bills</p>
          </div>
          <div className="feature-card">
            <Grid className="feature-icon" />
            <h4>Government Subsidy</h4>
            <p>Up to ₹50,000 subsidy available</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Solutions
