import React from 'react'
import { ArrowRight, Sun, Zap, Shield, TrendingUp } from 'lucide-react'
import { COMPANY_INFO } from '../../utils/constants'
import droneVideo from '../../assets/videos/Drone Video.mp4';
import './Hero.css'

const Hero = () => {
  const benefits = [
    {
      icon: <Zap className="benefit-icon" />,
      title: 'Reduce Bills by 90%',
      description: 'Significantly lower your electricity costs'
    },
    {
      icon: <Sun className="benefit-icon" />,
      title: 'Clean Energy',
      description: 'Environmentally friendly solar power'
    },
    {
      icon: <Shield className="benefit-icon" />,
      title: '25 Year Warranty',
      description: 'Long-term protection and peace of mind'
    },
    {
      icon: <TrendingUp className="benefit-icon" />,
      title: 'Increase Property Value',
      description: 'Boost your home\'s market value'
    }
  ]

  const scrollToForm = () => {
    const formElement = document.getElementById('consultation-form')
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="hero">
      <div className="hero-background">
        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={droneVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="hero-overlay"></div>
      </div>
      
      <div className="hero-content-wrapper">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-badge fade-in">
              <Sun size={16} />
              <span>Proudly From Tamil Nadu ❤️</span>
            </div>
            
            <h1 className="hero-title slide-in-left">
              Rooftop Solar Made <span className="text-gradient">Simple</span>
            </h1>
            
            <p className="hero-subtitle slide-in-left animate-delay-1">
              We don't just sell solar — we give you peace of mind. Get up to 90% savings on electricity bills with government subsidies up to ₹50,000.
            </p>
            
            <div className="hero-stats slide-in-left animate-delay-2">
              <div className="stat-item">
                <div className="stat-number">5+</div>
                <div className="stat-label">Happy Customers</div>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <div className="stat-number">₹50K</div>
                <div className="stat-label">Max Subsidy</div>
              </div>              
            </div>
            
            <div className="hero-buttons slide-in-left animate-delay-3">
              <button className="button button-primary" onClick={scrollToForm}>
                Get a Quote <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}   

export default Hero