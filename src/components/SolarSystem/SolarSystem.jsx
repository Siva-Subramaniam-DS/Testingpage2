import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const SolarSystem = () => {
  const containerRef = useRef(null);
  const sunRef = useRef(null);
  const planetRefs = useRef([]); // Use an array of refs for planets

  const planets = [
    { id: 1, color: '#a8a29e', size: 8, distance: 50, duration: 3 }, // Mercury
    { id: 2, color: '#e5e7eb', size: 12, distance: 80, duration: 5 }, // Venus
    { id: 3, color: '#3b82f6', size: 14, distance: 120, duration: 8 }, // Earth
    { id: 4, color: '#ef4444', size: 10, distance: 160, duration: 10 }, // Mars
    { id: 5, color: '#f59e0b', size: 24, distance: 220, duration: 15 }, // Jupiter
    { id: 6, color: '#fcd34d', size: 20, distance: 280, duration: 20 }, // Saturn (simplified)
    { id: 7, color: '#22d3ee', size: 18, distance: 330, duration: 25 }, // Uranus
    { id: 8, color: '#60a5fa', size: 16, distance: 380, duration: 30 }, // Neptune
  ];

  useEffect(() => {
    // Animate each planet
    planets.forEach((planet, index) => {
      const planetElement = planetRefs.current[index];
      if (planetElement) {
        gsap.to(planetElement, {
          rotation: 360,
          transformOrigin: `${planet.distance}px center`, // Set transform origin based on distance
          repeat: -1,
          duration: planet.duration,
          ease: 'linear'
        });
      }
    });
  }, [planets]); // Rerun effect if planets data changes

  return (
    <div ref={containerRef} className="flex justify-center items-center w-full h-screen bg-gray-900 overflow-hidden relative">
      {/* Sun */}
      <div
        ref={sunRef}
        className="w-20 h-20 bg-yellow-400 rounded-full absolute flex items-center justify-center"
        style={{ zIndex: 10 }}
      >
        <span className="text-white font-bold text-sm">Sun</span>
      </div>

      {/* Planets */}
      {planets.map((planet, index) => (
        <div
          key={planet.id}
          ref={el => planetRefs.current[index] = el} // Assign ref to each planet div
          className="absolute rounded-full"
          style={{
            backgroundColor: planet.color,
            width: planet.size,
            height: planet.size,
            transform: `translateX(${planet.distance}px)`, // Initial position based on distance
            zIndex: 9 // Planets below Sun
          }}
        ></div>
      ))}
    </div>
  );
};

export default SolarSystem; 