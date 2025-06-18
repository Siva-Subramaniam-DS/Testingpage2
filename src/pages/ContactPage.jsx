import React, { useState } from 'react'
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
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
        service: '',
        message: ''
      })
      
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000)
    }, 2000)
  }

  const contactInfo = [
    {
      icon: <Phone className="contact-icon" />,
      title: "Phone",
      details: [
        { label: "Main", value: "+91-9600130810" },
        { label: "Support", value: "+91-9600130810" }
      ]
    },
    {
      icon: <Mail className="contact-icon" />,
      title: "Email",
      details: [
        { label: "General", value: "tellus@konsunenergy.in" },
        { label: "Support", value: "support@konsunenergy.in" }
      ]
    },
    {
      icon: <MapPin className="contact-icon" />,
      title: "Address",
      details: [
        { label: "Office", value: "NAVANEETHAN NILAYAM 02/192, Chennai, Tamil Nadu 600023" }
      ]
    },
    {
      icon: <Clock className="contact-icon" />,
      title: "Business Hours",
      details: [
        { label: "Monday - Saturday", value: "9:00 AM - 6:00 PM" },
        { label: "Sunday", value: "Closed" }
      ]
    }
  ]

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="container">
          <div className="contact-hero-content">
            <h1>Get In Touch</h1>
            <p>Ready to start your solar journey? Contact us for a free consultation and quote.</p>
          </div>
        </div>
      </section>

      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Information */}
            <div className="contact-info">
              <h2>Contact Information</h2>
              <p>We're here to help you with all your solar energy needs. Reach out to us through any of the following channels.</p>
              
              <div className="contact-info-list">
                {contactInfo.map((info, index) => (
                  <div key={index} className="contact-info-item">
                    <div className="contact-info-icon">
                      {info.icon}
                    </div>
                    <div className="contact-info-details">
                      <h3>{info.title}</h3>
                      {info.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="contact-detail">
                          <span className="detail-label">{detail.label}:</span>
                          <span className="detail-value">{detail.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-wrapper">
              <h2>Send us a Message</h2>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
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
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="service">Service Interest</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                  >
                    <option value="">Select a service</option>
                    <option value="residential">Residential Solar Installation</option>
                    <option value="commercial">Commercial Solar Solutions</option>
                    <option value="housing-society">Housing Society Projects</option>
                    <option value="maintenance">Solar System Maintenance</option>
                    <option value="energy-audit">Energy Audit</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    placeholder="Tell us about your solar project requirements..."
                  ></textarea>
                </div>

                {submitStatus === 'success' && (
                  <div className="form-success">
                    Thank you! Your message has been sent successfully. We'll get back to you soon.
                  </div>
                )}

                <button 
                  type="submit" 
                  className="submit-button"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : (
                    <>
                      Send Message
                      <Send size={16} />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage 