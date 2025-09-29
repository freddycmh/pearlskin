import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Calendar } from "lucide-react";
import { contactData, companyInfo } from "../data/index.js";

const Contact = () => {
  const contactInfo = [
    {
      icon: <MapPin size={24} />,
      title: "Visit Us",
      details: [
        companyInfo.contact.address.street,
        companyInfo.contact.address.suite,
        companyInfo.contact.address.city,
      ],
    },
    {
      icon: <Phone size={24} />,
      title: "Call Us",
      details: [companyInfo.contact.phone, "Text us for quick questions"],
    },
    {
      icon: <Mail size={24} />,
      title: "Email Us",
      details: [companyInfo.contact.email, "We respond within 24 hours"],
    },
    {
      icon: <Clock size={24} />,
      title: "Hours",
      details: [
        companyInfo.hours.weekdays,
        companyInfo.hours.saturday,
        companyInfo.hours.sunday,
      ],
    },
  ];

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
          <h2>{contactData.title}</h2>
          <p>{contactData.description}</p>
        </motion.div>

        <div className="contact-content">
          <motion.div
            className="booking-cta-container"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="cta-header">
              <Calendar size={32} />
              <h3>Ready to Book Your Appointment?</h3>
            </div>

            <div className="cta-content">
              <p className="cta-message">
                Skip the forms and get personalized service! Call us directly to
                schedule your treatment. Our friendly staff will help you choose
                the perfect service and find the best time that works for you.
              </p>

              <div className="cta-phone">
                <Phone size={24} />
                <div>
                  <h4>Call Now to Book:</h4>
                  <a
                    href={`tel:${companyInfo.contact.phone}`}
                    className="phone-number"
                  >
                    {companyInfo.contact.phone}
                  </a>
                </div>
              </div>

              <div className="cta-benefits">
                <h4>Why call instead?</h4>
                <ul>
                  <li>Instant confirmation</li>
                  <li>Personalized service recommendations</li>
                  <li>Flexible scheduling options</li>
                  <li>Answer any questions you have</li>
                </ul>
              </div>

              <motion.a
                href={`tel:${companyInfo.contact.phone}`}
                className="btn btn-primary cta-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone size={18} />
                Call Now to Book
              </motion.a>
            </div>
          </motion.div>

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
                  <div className="contact-icon">{info.icon}</div>
                  <h4>{info.title}</h4>
                  <div className="contact-details">
                    {info.details.map((detail, idx) => (
                      <p key={idx}>{detail}</p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Google Map Section */}
        <motion.div
          className="map-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3>Find Us</h3>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.953243948672!2d-73.99854792392888!3d40.71904577139264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259e58b2c664d%3A0x4b736035458b337e!2sPearl%20Skin%20Care%20Center!5e0!3m2!1sen!2sus!4v1759113233453!5m2!1sen!2sus"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Pearl Skin Care Center Location"
            ></iframe>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .contact {
          background: linear-gradient(
            135deg,
            var(--white) 0%,
            var(--primary-cream) 100%
          );
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

        .booking-cta-container {
          background: var(--white);
          border-radius: 20px;
          padding: 2.5rem;
          box-shadow: var(--shadow-medium);
          border: 1px solid rgba(232, 180, 184, 0.1);
        }

        .cta-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 2rem;
          color: var(--primary-rose);
          text-align: center;
          justify-content: center;
        }

        .cta-header h3 {
          margin: 0;
          color: var(--text-dark);
          font-size: 1.8rem;
        }

        .cta-content {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          text-align: center;
        }

        .cta-message {
          font-size: 1.1rem;
          color: var(--text-light);
          line-height: 1.6;
          margin: 0;
        }

        .cta-phone {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          padding: 2rem;
          background: linear-gradient(
            135deg,
            var(--secondary-blush) 0%,
            var(--primary-cream) 100%
          );
          border-radius: 15px;
        }

        .cta-phone div h4 {
          margin: 0 0 0.5rem 0;
          color: var(--text-dark);
          font-size: 1.1rem;
        }

        .phone-number {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--primary-rose);
          text-decoration: none;
          font-family: "Playfair Display", serif;
        }

        .phone-number:hover {
          color: var(--primary-gold);
        }

        .cta-benefits {
          text-align: left;
          max-width: 400px;
          margin: 0 auto;
        }

        .cta-benefits h4 {
          margin-bottom: 1rem;
          color: var(--text-dark);
          text-align: center;
        }

        .cta-benefits ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .cta-benefits li {
          position: relative;
          padding-left: 1.5rem;
          margin-bottom: 0.75rem;
          color: var(--text-light);
        }

        .cta-benefits li::before {
          content: "✓";
          position: absolute;
          left: 0;
          top: 0;
          color: var(--primary-rose);
          font-weight: bold;
        }

        .cta-btn {
          align-self: center;
          padding: 1rem 2rem;
          font-size: 1.1rem;
          gap: 0.5rem;
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
          background: linear-gradient(
            135deg,
            var(--primary-rose),
            var(--primary-gold)
          );
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

        .map-section {
          margin-top: 4rem;
          text-align: center;
        }

        .map-section h3 {
          color: var(--text-dark);
          margin-bottom: 2rem;
          font-size: 2rem;
        }

        .map-container {
          border-radius: 20px;
          overflow: hidden;
          box-shadow: var(--shadow-medium);
          border: 1px solid rgba(232, 180, 184, 0.1);
          background: var(--white);
          padding: 0.5rem;
        }

        .map-container iframe {
          border-radius: 15px;
          width: 100%;
          height: 450px;
        }

        @media (max-width: 768px) {
          .contact-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .contact-cards {
            grid-template-columns: 1fr;
          }

          .booking-cta-container {
            padding: 1.5rem;
          }

          .cta-header {
            flex-direction: column;
            gap: 0.5rem;
          }

          .cta-header h3 {
            font-size: 1.5rem;
          }

          .cta-phone {
            flex-direction: column;
            text-align: center;
          }

          .phone-number {
            font-size: 1.3rem;
          }

          .map-section {
            margin-top: 3rem;
          }

          .map-section h3 {
            font-size: 1.5rem;
            margin-bottom: 1.5rem;
          }

          .map-container iframe {
            height: 300px;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;
