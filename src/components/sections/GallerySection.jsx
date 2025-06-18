import React, { useState } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

const GallerySection = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImage, setCurrentImage] = useState(0)

  const images = [
    '/src/assets/images/S1.jpg',
    '/src/assets/images/S2.jpg',
    '/src/assets/images/S3.jpg',
    '/src/assets/images/S4.jpg',
    '/src/assets/images/S5.jpg',
    '/src/assets/images/S6.jpg'
  ]

  const openLightbox = (index) => {
    setCurrentImage(index)
    setLightboxOpen(true)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
  }

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <section className="gallery-section section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Our Solar Projects</h2>
          <p className="section-subtitle">
            Take a look at some of our successful solar installations
          </p>
        </div>

        <div className="gallery-grid">
          {images.map((image, index) => (
            <div 
              key={index} 
              className="gallery-item"
              onClick={() => openLightbox(index)}
            >
              <img 
                src={image} 
                alt={`Solar Installation ${index + 1}`}
                className="gallery-image"
              />
              <div className="gallery-overlay">
                <div className="gallery-icon">🔍</div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {lightboxOpen && (
          <div className="lightbox" onClick={closeLightbox}>
            <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
              <button className="lightbox-close" onClick={closeLightbox}>
                <X size={24} />
              </button>
              <img 
                src={images[currentImage]} 
                alt={`Solar Installation ${currentImage + 1}`}
                className="lightbox-image"
              />
              <button className="lightbox-nav lightbox-prev" onClick={prevImage}>
                <ChevronLeft size={24} />
              </button>
              <button className="lightbox-nav lightbox-next" onClick={nextImage}>
                <ChevronRight size={24} />
              </button>
              <div className="lightbox-counter">
                {currentImage + 1} / {images.length}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default GallerySection 