import React, { useState } from 'react'
import { Phone, Mail, MessageSquare } from 'lucide-react'
import { CONTACT_FORM_FIELDS, COMPANY_INFO } from '../../utils/constants'
import './ConsultationForm.css'

const ConsultationForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    whatsappNumber: '',
    pinCode: '',
    monthlyBill: '',
    serviceType: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // Here you would typically send the form data to your backend
      // For now, we'll simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1000))
      setSubmitStatus('success')
      setFormData({
        fullName: '',
        whatsappNumber: '',
        pinCode: '',
        monthlyBill: '',
        serviceType: ''
      })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="consultation-section" id="consultation-form">
      <div className="container">
        <div className="consultation-content">
          <div className="consultation-info">
            <h2 className="section-title">Get Your Free Solar Consultation</h2>
            <p className="section-subtitle">
              Fill out the form and our solar experts will contact you within 24 hours
            </p>

            <div className="contact-methods">
              <div className="contact-method">
                <Phone className="contact-icon" />
                <div className="contact-details">
                  <h4>Call Us</h4>
                  <a href={`tel:${COMPANY_INFO.phone.replace(/\s/g, '')}`}>
                    {COMPANY_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="contact-method">
                <Mail className="contact-icon" />
                <div className="contact-details">
                  <h4>Email Us</h4>
                  <a href={`mailto:${COMPANY_INFO.email}`}>
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </div>

              <div className="contact-method">
                <MessageSquare className="contact-icon" />
                <div className="contact-details">
                  <h4>WhatsApp</h4>
                  <a 
                    href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hi, I'm interested in solar installation. Please provide more details.`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Chat with us
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="consultation-form-wrapper">
            <form onSubmit={handleSubmit} className="consultation-form">
              <div className="form-group">
                <label htmlFor={CONTACT_FORM_FIELDS.fullName.name}>
                  {CONTACT_FORM_FIELDS.fullName.label}
                </label>
                <input
                  type={CONTACT_FORM_FIELDS.fullName.type}
                  id={CONTACT_FORM_FIELDS.fullName.name}
                  name={CONTACT_FORM_FIELDS.fullName.name}
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder={CONTACT_FORM_FIELDS.fullName.placeholder}
                  required={CONTACT_FORM_FIELDS.fullName.required}
                />
              </div>

              <div className="form-group">
                <label htmlFor={CONTACT_FORM_FIELDS.whatsappNumber.name}>
                  {CONTACT_FORM_FIELDS.whatsappNumber.label}
                </label>
                <input
                  type={CONTACT_FORM_FIELDS.whatsappNumber.type}
                  id={CONTACT_FORM_FIELDS.whatsappNumber.name}
                  name={CONTACT_FORM_FIELDS.whatsappNumber.name}
                  value={formData.whatsappNumber}
                  onChange={handleChange}
                  placeholder={CONTACT_FORM_FIELDS.whatsappNumber.placeholder}
                  required={CONTACT_FORM_FIELDS.whatsappNumber.required}
                />
              </div>

              <div className="form-group">
                <label htmlFor={CONTACT_FORM_FIELDS.pinCode.name}>
                  {CONTACT_FORM_FIELDS.pinCode.label}
                </label>
                <input
                  type={CONTACT_FORM_FIELDS.pinCode.type}
                  id={CONTACT_FORM_FIELDS.pinCode.name}
                  name={CONTACT_FORM_FIELDS.pinCode.name}
                  value={formData.pinCode}
                  onChange={handleChange}
                  placeholder={CONTACT_FORM_FIELDS.pinCode.placeholder}
                  required={CONTACT_FORM_FIELDS.pinCode.required}
                />
              </div>

              <div className="form-group">
                <label htmlFor={CONTACT_FORM_FIELDS.monthlyBill.name}>
                  {CONTACT_FORM_FIELDS.monthlyBill.label}
                </label>
                <select
                  id={CONTACT_FORM_FIELDS.monthlyBill.name}
                  name={CONTACT_FORM_FIELDS.monthlyBill.name}
                  value={formData.monthlyBill}
                  onChange={handleChange}
                  required={CONTACT_FORM_FIELDS.monthlyBill.required}
                >
                  <option value="">Select your monthly bill</option>
                  {CONTACT_FORM_FIELDS.monthlyBill.options.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label>{CONTACT_FORM_FIELDS.serviceType.label}</label>
                <div className="radio-group">
                  {CONTACT_FORM_FIELDS.serviceType.options.map(option => (
                    <label key={option.value} className="radio-label">
                      <input
                        type="radio"
                        name={CONTACT_FORM_FIELDS.serviceType.name}
                        value={option.value}
                        checked={formData.serviceType === option.value}
                        onChange={handleChange}
                        required={CONTACT_FORM_FIELDS.serviceType.required}
                      />
                      <span className="radio-text">{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <button 
                type="submit" 
                className="submit-button"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Get Free Consultation'}
              </button>

              {submitStatus === 'success' && (
                <div className="form-success">
                  Thank you! We'll contact you shortly.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="form-error">
                  Something went wrong. Please try again.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ConsultationForm
