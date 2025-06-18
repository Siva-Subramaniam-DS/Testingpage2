import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Play } from 'lucide-react'

const HeroSection = () => {
  return (
    <section className="hero">
      {/* Background Video */}
      <video 
        className="background-video" 
        autoPlay 
        muted 
        loop 
        playsInline
      >
        <source src="/src/assets/videos/Drone Video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>
              Power Your Home with <span className="highlight">Clean Solar Energy</span>
            </h1>
            <p>
              Save up to 90% on electricity bills with government subsidies up to 50,000. Join 2000+ happy customers across Tamil Nadu who chose sustainable energy.
            </p>

            {/* Stats */}
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">2000+</span>
                <span className="stat-label">Happy Customers</span>
              </div>
              <div className="stat">
                <span className="stat-number">50K</span>
                <span className="stat-label">Max Subsidy</span>
              </div>
              <div className="stat">
                <span className="stat-number">25</span>
                <span className="stat-label">Year Warranty</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="hero-buttons">
              <Link to="/savings" className="btn-primary">
                Calculate Savings
                <ArrowRight size={20} />
              </Link>
              <Link to="/contact" className="btn-secondary">
                Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection 