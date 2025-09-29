import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Calendar,
  User,
  MessageSquare,
  Send,
  CheckCircle
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const services = [
    'Classic European Facial',
    'HydraFacial MD',
    'Anti-Aging Facial',
    'Organic Botanical Facial',
    'Acne Treatment Facial',
    'Microdermabrasion',
    'Consultation'
  ];

  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'
  ];

  const contactInfo = [
    {
      icon: <MapPin size={24} />,
      title: "Visit Us",
      details: [
        "123 Beauty Boulevard",
        "Suite 456, Wellness Center",
        "City, State 12345"
      ]
    },
    {
      icon: <Phone size={24} />,
      title: "Call Us",
      details: [
        "(123) 456-7890",
        "Text us for quick questions"
      ]
    },
    {
      icon: <Mail size={24} />,
      title: "Email Us",
      details: [
        "hello@pearlskin.com",
        "We respond within 24 hours"
      ]
    },
    {
      icon: <Clock size={24} />,
      title: "Hours",
      details: [
        "Mon - Fri: 9:00 AM - 6:00 PM",
        "Sat: 9:00 AM - 4:00 PM",
        "Sun: Closed"
      ]
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to a backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <motion.div
          className="section-header text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>Book Your Appointment</h2>
          <p>
            Ready to begin your skincare journey? Contact us to schedule your personalized treatment
            or consultation. We can't wait to help you achieve your beauty goals.
          </p>
        </motion.div>

        <div className="contact-content">
          {/* Booking Form */}
          <motion.div
            className="booking-form-container"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="form-header">
              <Calendar size={24} />
              <h3>Schedule Your Visit</h3>
            </div>

            <form onSubmit={handleSubmit} className="booking-form">
              <div className="form-group">
                <label htmlFor="name">
                  <User size={18} />
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your full name"
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">
                    <Mail size={18} />
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="your@email.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">
                    <Phone size={18} />
                    Phone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    placeholder="(123) 456-7890"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="service">
                  <Calendar size={18} />
                  Preferred Service *
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select a service</option>
                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="date">
                    <Calendar size={18} />
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    required
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="time">
                    <Clock size={18} />
                    Preferred Time *
                  </label>
                  <select
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select time</option>
                    {timeSlots.map((time) => (
                      <option key={time} value={time}>
                        {time}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">
                  <MessageSquare size={18} />
                  Additional Notes
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="4"
                  placeholder="Any specific concerns or questions? (Optional)"
                ></textarea>
              </div>

              <motion.button
                type="submit"
                className="btn btn-primary submit-btn"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitted}
              >
                {isSubmitted ? (
                  <>
                    <CheckCircle size={18} />
                    Request Sent!
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Booking Request
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="contact-cards">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  className="contact-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="contact-icon">
                    {info.icon}
                  </div>
                  <h4>{info.title}</h4>
                  <div className="contact-details">
                    {info.details.map((detail, idx) => (
                      <p key={idx}>{detail}</p>
                    ))}
                  </div>
                </motion.card>
              ))}
            </div>

            <motion.div
              className="map-placeholder"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="map-content">
                <MapPin size={32} />
                <h4>Find Us</h4>
                <p>Located in the heart of the Wellness District</p>
                <div className="map-visual">
                  <div className="location-marker"></div>
                  <div className="location-pulse"></div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="emergency-contact"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <h4>Need to reschedule or have questions?</h4>
              <p>Call us at <strong>(123) 456-7890</strong> or text us for immediate assistance.</p>
              <p className="cancellation-policy">
                <em>Please provide 24-hour notice for cancellations to avoid fees.</em>
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .contact {
          background: linear-gradient(135deg, var(--white) 0%, var(--primary-cream) 100%);
          position: relative;
        }

        .section-header {
          max-width: 600px;
          margin: 0 auto 4rem;
        }

        .section-header h2 {
          margin-bottom: 1rem;
          color: var(--text-dark);
        }

        .section-header p {
          font-size: 1.1rem;
          color: var(--text-light);
        }

        .contact-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: start;
        }

        .booking-form-container {
          background: var(--white);
          border-radius: 20px;
          padding: 2rem;
          box-shadow: var(--shadow-medium);
          border: 1px solid rgba(232, 180, 184, 0.1);
        }

        .form-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 2rem;
          color: var(--primary-rose);
        }

        .form-header h3 {
          margin: 0;
          color: var(--text-dark);
        }

        .booking-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
        }

        .form-group label {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.5rem;
          font-weight: 500;
          color: var(--text-dark);
          font-size: 0.9rem;
        }

        .form-group input,
        .form-group select,
        .form-group textarea {
          padding: 0.75rem 1rem;
          border: 2px solid rgba(232, 180, 184, 0.2);
          border-radius: 10px;
          font-family: inherit;
          font-size: 1rem;
          transition: all 0.3s ease;
          background: var(--white);
        }

        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: var(--primary-rose);
          box-shadow: 0 0 0 3px rgba(232, 180, 184, 0.1);
        }

        .form-group textarea {
          resize: vertical;
          min-height: 100px;
        }

        .submit-btn {
          margin-top: 1rem;
          width: 100%;
          justify-content: center;
          gap: 0.5rem;
          font-size: 1rem;
          padding: 1rem;
        }

        .submit-btn:disabled {
          background: var(--primary-sage);
          cursor: not-allowed;
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .contact-cards {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }

        .contact-card {
          background: var(--white);
          padding: 1.5rem;
          border-radius: 15px;
          text-align: center;
          box-shadow: var(--shadow-light);
          border: 1px solid rgba(232, 180, 184, 0.1);
          transition: all 0.3s ease;
        }

        .contact-card:hover {
          box-shadow: var(--shadow-medium);
          border-color: var(--primary-rose);
        }

        .contact-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 50px;
          height: 50px;
          background: linear-gradient(135deg, var(--primary-rose), var(--primary-gold));
          color: var(--white);
          border-radius: 50%;
          margin-bottom: 1rem;
        }

        .contact-card h4 {
          margin-bottom: 0.75rem;
          color: var(--text-dark);
          font-size: 1.1rem;
        }

        .contact-details p {
          margin: 0.25rem 0;
          color: var(--text-light);
          font-size: 0.9rem;
        }

        .map-placeholder {
          background: var(--white);
          border-radius: 15px;
          padding: 2rem;
          text-align: center;
          box-shadow: var(--shadow-light);
          border: 1px solid rgba(232, 180, 184, 0.1);
          position: relative;
          overflow: hidden;
        }

        .map-content {
          position: relative;
          z-index: 2;
        }

        .map-content h4 {
          margin: 1rem 0 0.5rem;
          color: var(--text-dark);
        }

        .map-content p {
          color: var(--text-light);
          margin-bottom: 1.5rem;
        }

        .map-visual {
          position: relative;
          width: 100px;
          height: 100px;
          margin: 0 auto;
        }

        .location-marker {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 20px;
          height: 20px;
          background: var(--primary-rose);
          border-radius: 50%;
          z-index: 2;
        }

        .location-pulse {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 60px;
          height: 60px;
          background: var(--primary-rose);
          border-radius: 50%;
          opacity: 0.3;
          animation: pulse 2s ease-in-out infinite;
        }

        .emergency-contact {
          background: var(--secondary-blush);
          border-radius: 15px;
          padding: 1.5rem;
          text-align: center;
        }

        .emergency-contact h4 {
          margin-bottom: 0.75rem;
          color: var(--text-dark);
        }

        .emergency-contact p {
          margin: 0.5rem 0;
          color: var(--text-light);
        }

        .emergency-contact strong {
          color: var(--primary-rose);
        }

        .cancellation-policy {
          font-size: 0.85rem;
          color: var(--text-muted);
          margin-top: 1rem;
        }

        @keyframes pulse {
          0%, 100% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0.3;
          }
          50% {
            transform: translate(-50%, -50%) scale(1.2);
            opacity: 0.1;
          }
        }

        @media (max-width: 768px) {
          .contact-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .form-row {
            grid-template-columns: 1fr;
          }

          .contact-cards {
            grid-template-columns: 1fr;
          }

          .booking-form-container {
            padding: 1.5rem;
          }
        }

        @media (max-width: 480px) {
          .contact-cards {
            gap: 1rem;
          }

          .contact-card {
            padding: 1rem;
          }

          .map-placeholder {
            padding: 1.5rem;
          }

          .emergency-contact {
            padding: 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;