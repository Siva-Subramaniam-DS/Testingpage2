import React from 'react'
import { Link } from 'react-router-dom'
import { Home, Building, Users } from 'lucide-react'

const InstallationSection = () => {
  const services = [
    {
      icon: <Home size={32} />,
      title: 'Residential',
      description: 'Ideal for homes, ensuring significant electricity bill savings and energy independence.',
      image: '/src/assets/images/S5.jpg',
    },
    {
      icon: <Building size={32} />,
      title: 'Commercial',
      description: 'Tailored solutions for businesses to reduce operational costs and enhance sustainability.',
      image: '/src/assets/images/S8.jpg',
    },
    {
      icon: <Users size={32} />,
      title: 'Housing Society',
      description: 'Empowering communities with shared solar benefits for common areas and individual homes.',
      image: '/src/assets/images/S9.jpg',
    }
  ]

  return (
    <section className="solar-installation-section section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Solar Panel Installation</h2>
          <p className="section-description">
            We offer comprehensive solar panel installation services for various needs, ensuring efficient and sustainable energy solutions.
          </p>
        </div>

        <div className="installation-types-grid">
          {/* Residential */}
          <div className="installation-card card">
            <div className="card-image-wrapper">
              <img src="/src/assets/images/S5.jpg" alt="Residential" className="card-image" />
            </div>
            <div className="card-content">
              <h3 className="card-title">Residential</h3>
              <p className="card-description">Ideal for homes, ensuring significant electricity bill savings and energy independence</p>
            </div>
          </div>
          {/* Commercial */}
          <div className="installation-card card">
            <div className="card-image-wrapper">
              <img src="/src/assets/images/S8.jpg" alt="Commercial" className="card-image" />
            </div>
            <div className="card-content">
              <h3 className="card-title">Commercial</h3>
              <p className="card-description">Tailored solutions for businesses to reduce operational costs and enhance sustainability</p>
            </div>
          </div>
          {/* Housing Society */}
          <div className="installation-card card">
            <div className="card-image-wrapper">
              <img src="/src/assets/images/S9.jpg" alt="Housing Society" className="card-image" />
            </div>
            <div className="card-content">
              <h3 className="card-title">Housing Society</h3>
              <p className="card-description">Empowering communities with shared solar benefits for common areas and individual homes</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default InstallationSection 