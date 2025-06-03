import React from 'react';
import './DroneVideo.css';

const DroneVideo = () => {
  return (
    <section className="drone-video-section">
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-8">Our Solar Projects from Above</h2>
        <div className="video-container">
          <video
            className="w-full h-auto rounded-lg"
            controls
          >
            <source src="src/assets/videos/Drone%20Video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
};

export default DroneVideo; 