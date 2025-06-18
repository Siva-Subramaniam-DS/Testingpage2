import React from 'react'
import { Home, BatteryCharging, Leaf, Banknote, Sun, Lightbulb } from 'lucide-react'

const BenefitsSection = () => {
  const benefits = [
    {
      icon: <Lightbulb className="benefit-icon" />,
      title: "Massive Cost Savings",
      description: "Reduce electricity bills by up to 90%. With average savings of ₹5,000-₹8,000 per month, recover your investment in just 3-4 years and enjoy free electricity for 20+ years."
    },
    {
      icon: <Home className="benefit-icon" />,
      title: "Increase Property Value",
      description: "Solar installations increase property value by 15-20%. Homes with solar sell 20% faster and attract premium buyers looking for energy-efficient properties."
    },
    {
      icon: <BatteryCharging className="benefit-icon" />,
      title: "Energy Independence",
      description: "Reduce dependency on grid electricity and protect yourself from rising power tariffs. Generate clean energy during peak sunlight hours in Tamil Nadu."
    },
    {
      icon: <Leaf className="benefit-icon" />,
      title: "Environmental Impact",
      description: "Reduce carbon footprint by 4+ tons of CO₂ annually. Equivalent to planting 100+ trees every year and contributing to a cleaner Tamil Nadu."
    },
    {
      icon: <Banknote className="benefit-icon" />,
      title: "Government Support",
      description: "Avail central and state subsidies up to ₹50,000. Additional benefits include net metering, accelerated depreciation, and tax incentives."
    },
    {
      icon: <Sun className="benefit-icon" />,
      title: "Perfect Climate",
      description: "Tamil Nadu receives 300+ sunny days annually with high solar irradiation levels. Ideal conditions for maximum solar energy generation year-round."
    }
  ]

  return (
    <section className="benefits-solar-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Benefits of Solar Energy in Tamil Nadu</h2>
          <p className="section-subtitle">
            Understanding why solar is the smartest investment for your home
          </p>
        </div>

        <div className="benefits-grid">
          {/* Massive Cost Savings */}
          <div className="benefit-card">
            <div className="benefit-icon-wrapper">
              <Lightbulb className="benefit-icon" />
            </div>
            <h3 className="benefit-card-title">Massive Cost Savings</h3>
            <p className="benefit-card-description">Reduce electricity bills by up to 90%. With average savings of ₹5,000-₹8,000 per month, recover your investment in just 3-4 years and enjoy free electricity for 20+ years.</p>
          </div>
          {/* Increase Property Value */}
          <div className="benefit-card">
            <div className="benefit-icon-wrapper">
              <Home className="benefit-icon" />
            </div>
            <h3 className="benefit-card-title">Increase Property Value</h3>
            <p className="benefit-card-description">Solar installations increase property value by 15-20%. Homes with solar sell 20% faster and attract premium buyers looking for energy-efficient properties.</p>
          </div>
          {/* Energy Independence */}
          <div className="benefit-card">
            <div className="benefit-icon-wrapper">
              <BatteryCharging className="benefit-icon" />
            </div>
            <h3 className="benefit-card-title">Energy Independence</h3>
            <p className="benefit-card-description">Reduce dependency on grid electricity and protect yourself from rising power tariffs. Generate clean energy during peak sunlight hours in Tamil Nadu.</p>
          </div>
          {/* Environmental Impact */}
          <div className="benefit-card">
            <div className="benefit-icon-wrapper">
              <Leaf className="benefit-icon" />
            </div>
            <h3 className="benefit-card-title">Environmental Impact</h3>
            <p className="benefit-card-description">Reduce carbon footprint by 4+ tons of CO₂ annually. Equivalent to planting 100+ trees every year and contributing to a cleaner Tamil Nadu.</p>
          </div>
          {/* Government Support */}
          <div className="benefit-card">
            <div className="benefit-icon-wrapper">
              <Banknote className="benefit-icon" />
            </div>
            <h3 className="benefit-card-title">Government Support</h3>
            <p className="benefit-card-description">Avail central and state subsidies up to ₹50,000. Additional benefits include net metering, accelerated depreciation, and tax incentives.</p>
          </div>
          {/* Perfect Climate */}
          <div className="benefit-card">
            <div className="benefit-icon-wrapper">
              <Sun className="benefit-icon" />
            </div>
            <h3 className="benefit-card-title">Perfect Climate</h3>
            <p className="benefit-card-description">Tamil Nadu receives 300+ sunny days annually with high solar irradiation levels. Ideal conditions for maximum solar energy generation year-round.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BenefitsSection 