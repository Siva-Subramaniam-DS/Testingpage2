import React, { useState } from 'react'
import { Phone, Mail, MapPin, Send } from 'lucide-react'

const ConsultationSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    propertyType: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        phone: '',
        propertyType: '',
        message: ''
      })
      
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000)
    }, 2000)
  }

  return (
    <section className="consultation-section section">
      <div className="container">
        <div className="consultation-content">
          <div className="consultation-info">
            <h2 className="section-title">Get Your Free Solar Consultation</h2>
            <p className="section-subtitle">
              Ready to start your solar journey? Contact us for a free consultation and quote.
            </p>
            
            <div className="contact-methods">
              <div className="contact-method">
                <div className="contact-icon">
                  <Phone size={24} />
                </div>
                <div className="contact-details">
                  <h4>Call Us</h4>
                  <a href="tel:+919600130810">+91-9600130810</a>
                </div>
              </div>
              
              <div className="contact-method">
                <div className="contact-icon">
                  <Mail size={24} />
                </div>
                <div className="contact-details">
                  <h4>Email Us</h4>
                  <a href="mailto:tellus@konsunenergy.in">tellus@konsunenergy.in</a>
                </div>
              </div>
              
              <div className="contact-method">
                <div className="contact-icon">
                  <MapPin size={24} />
                </div>
                <div className="contact-details">
                  <h4>Visit Us</h4>
                  <span>Chennai, Tamil Nadu</span>
                </div>
              </div>
            </div>
          </div>

          <div className="consultation-form-wrapper">
            <form className="consultation-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="propertyType">Property Type</label>
                <select
                  id="propertyType"
                  name="propertyType"
                  value={formData.propertyType}
                  onChange={handleChange}
                >
                  <option value="">Select Property Type</option>
                  <option value="residential">Residential</option>
                  <option value="commercial">Commercial</option>
                  <option value="housing-society">Housing Society</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Tell us about your solar requirements..."
                />
              </div>

              {submitStatus === 'success' && (
                <div className="form-success">
                  Thank you! We'll contact you soon with your free consultation.
                </div>
              )}

              <button 
                type="submit" 
                className="submit-button btn btn-primary"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Get Free Consultation'}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ConsultationSection 