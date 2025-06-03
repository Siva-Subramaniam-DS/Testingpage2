import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './Gallery.css';

// Import all gallery images
import S1 from '../../assets/images/S1.jpg';
import S2 from '../../assets/images/S2.jpg';
import S3 from '../../assets/images/S3.jpg';
import S4 from '../../assets/images/S4.jpg';
import S5 from '../../assets/images/S5.jpg';
import S6 from '../../assets/images/S6.jpg';
import S7 from '../../assets/images/S7.jpg';
import S8 from '../../assets/images/S8.jpg';
import S9 from '../../assets/images/S9.jpg';
import S10 from '../../assets/images/S10.jpg';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const galleryImages = [
    { id: 1, src: S1, alt: 'Solar Installation 1' },
    { id: 2, src: S2, alt: 'Solar Installation 2' },
    { id: 3, src: S3, alt: 'Solar Installation 3' },
    { id: 4, src: S4, alt: 'Solar Installation 4' },
    { id: 5, src: S5, alt: 'Solar Installation 5' },
    { id: 6, src: S6, alt: 'Solar Installation 6' },
    { id: 7, src: S7, alt: 'Solar Installation 7' },
    { id: 8, src: S8, alt: 'Solar Installation 8' },
    { id: 9, src: S9, alt: 'Solar Installation 9' },
    { id: 10, src: S10, alt: 'Solar Installation 10' },
  ];

  const openLightbox = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const showPrevious = () => {
    const newIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    setCurrentIndex(newIndex);
    setSelectedImage(galleryImages[newIndex]);
  };

  const showNext = () => {
    const newIndex = (currentIndex + 1) % galleryImages.length;
    setCurrentIndex(newIndex);
    setSelectedImage(galleryImages[newIndex]);
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedImage) return;

      switch (e.key) {
        case 'ArrowLeft':
          showPrevious();
          break;
        case 'ArrowRight':
          showNext();
          break;
        case 'Escape':
          closeLightbox();
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, currentIndex]);

  return (
    <section className="gallery-section" id="gallery">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our Solar Projects</h2>
          <p className="section-subtitle">
            Take a look at some of our successful solar installations
          </p>
        </div>

        <div className="gallery-grid">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className="gallery-item"
              onClick={() => openLightbox(image, index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="gallery-image"
                loading="lazy"
              />
              <div className="gallery-overlay">
                <span className="gallery-icon">🔍</span>
              </div>
            </div>
          ))}
        </div>

        {selectedImage && (
          <div className="lightbox" onClick={closeLightbox}>
            <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
              <button className="lightbox-close" onClick={closeLightbox}>
                ×
              </button>
              <button className="lightbox-nav lightbox-prev" onClick={showPrevious}>
                <ChevronLeft size={40} />
              </button>
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="lightbox-image"
              />
              <button className="lightbox-nav lightbox-next" onClick={showNext}>
                <ChevronRight size={40} />
              </button>
              <div className="lightbox-counter">
                {currentIndex + 1} / {galleryImages.length}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery; 