import React from 'react'

const DroneVideoSection = () => {
  return (
    <section className="drone-video-section section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">See Our Work in Action</h2>
          <p className="section-subtitle">
            Watch our drone footage showcasing professional solar panel installations
          </p>
        </div>

        <div className="video-container">
          <video 
            controls
            poster="src\assets\images\B1.png"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: '12px'
            }}
          >
            <source src="src\assets\videos\Drone Video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  )
}

export default DroneVideoSection 