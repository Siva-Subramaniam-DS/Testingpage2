import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { COMPANY_INFO } from '../../utils/constants';
import ConsultationForm from '../ConsultationForm/ConsultationForm';
import './ContactUs.css';

const ContactUs = () => {
  // Use the provided Google Maps URL
  const mapUrl = 'https://www.google.com/maps/search/NAVANEETHAN+NILAYAM+02%2F192+Chennai+-+600023/@13.1054887,80.2072957,15z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI1MDUyNi4wIKXMDSoASAFQAw%3D%3D';

  return (
    <section className="contact-us-section" id="contact-us">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Get in Touch</h2>
          <p className="section-subtitle">
            We'd love to hear from you! Reach out to us through any of the methods below.
          </p>
        </div>

        <div className="contact-us-content">
          <div className="contact-info">
            <h3>Contact Information</h3>
            <div className="contact-item">
              <Phone className="contact-icon" />
              <a href={`tel:${COMPANY_INFO.phone.replace(/\s/g, '')}`}>
                {COMPANY_INFO.phone}
              </a>
            </div>
            <div className="contact-item">
              <Mail className="contact-icon" />
              <a href={`mailto:${COMPANY_INFO.email}`}>
                {COMPANY_INFO.email}
              </a>
            </div>
            <div className="contact-item">
              <MapPin className="contact-icon" />
              <div>
                <span>{COMPANY_INFO.address}</span>
                {COMPANY_INFO.city && <span>, {COMPANY_INFO.city}</span>}
                {COMPANY_INFO.state && <span>, {COMPANY_INFO.state}</span>}
              </div>
            </div>

            {/* Embedded Map */}
            <div className="map-container">
              <iframe
                src={mapUrl}
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Company Location Map"
              ></iframe>
            </div>
          </div>

          <div className="contact-form-wrapper">
            <h3>Send us a Message</h3>
            <ConsultationForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
