import { motion } from 'framer-motion';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Instagram,
  Facebook,
  Twitter,
  Heart,
  Sparkles
} from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: <Instagram size={20} />, href: '#', label: 'Instagram' },
    { icon: <Facebook size={20} />, href: '#', label: 'Facebook' },
    { icon: <Twitter size={20} />, href: '#', label: 'Twitter' }
  ];

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' }
  ];

  const services = [
    'Classic European Facial',
    'HydraFacial MD',
    'Anti-Aging Facial',
    'Acne Treatment',
    'Microdermabrasion',
    'Consultation'
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-background">
        <div className="footer-pattern"></div>
      </div>

      <div className="container">
        {/* Main Footer Content */}
        <div className="footer-main">
          <motion.div
            className="footer-section brand-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="footer-logo">
              <h3>PearlSkin</h3>
              <span>Aesthetic Studio</span>
            </div>
            <p className="footer-description">
              Your journey to radiant, healthy skin begins here. Experience the perfect blend
              of luxury, science, and personalized care in our serene wellness sanctuary.
            </p>
            <div className="social-links">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="social-link"
                  aria-label={social.label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="footer-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4>Quick Links</h4>
            <ul className="footer-links">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="footer-link"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="footer-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4>Our Services</h4>
            <ul className="footer-links">
              {services.map((service, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <span className="footer-link">{service}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="footer-section contact-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4>Contact Info</h4>
            <div className="contact-info">
              <div className="contact-item">
                <MapPin size={18} />
                <div>
                  <p>123 Beauty Boulevard</p>
                  <p>Suite 456, Wellness Center</p>
                  <p>City, State 12345</p>
                </div>
              </div>
              <div className="contact-item">
                <Phone size={18} />
                <div>
                  <p>(123) 456-7890</p>
                  <p>Text for quick questions</p>
                </div>
              </div>
              <div className="contact-item">
                <Mail size={18} />
                <div>
                  <p>hello@pearlskin.com</p>
                  <p>24-hour response time</p>
                </div>
              </div>
              <div className="contact-item">
                <Clock size={18} />
                <div>
                  <p>Mon - Fri: 9 AM - 6 PM</p>
                  <p>Sat: 9 AM - 4 PM</p>
                  <p>Sun: Closed</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Newsletter Section */}
        <motion.div
          className="newsletter-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="newsletter-content">
            <div className="newsletter-text">
              <Sparkles size={24} />
              <div>
                <h4>Stay Glowing</h4>
                <p>Subscribe for skincare tips, exclusive offers, and treatment updates</p>
              </div>
            </div>
            <div className="newsletter-form">
              <input
                type="email"
                placeholder="Enter your email address"
                className="newsletter-input"
              />
              <motion.button
                className="btn btn-primary newsletter-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Footer Bottom */}
        <motion.div
          className="footer-bottom"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="footer-bottom-content">
            <p className="copyright">
              © 2024 PearlSkin Aesthetic Studio. All rights reserved.
            </p>
            <div className="footer-bottom-links">
              <a href="#" className="footer-bottom-link">Privacy Policy</a>
              <a href="#" className="footer-bottom-link">Terms of Service</a>
              <a href="#" className="footer-bottom-link">Cancellation Policy</a>
            </div>
            <p className="made-with-love">
              Made with <Heart size={16} className="heart-icon" /> for beautiful skin
            </p>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .footer {
          background: linear-gradient(135deg, var(--text-dark) 0%, #1a1a1a 100%);
          color: var(--white);
          position: relative;
          overflow: hidden;
        }

        .footer-background {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          opacity: 0.1;
        }

        .footer-pattern {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: radial-gradient(circle at 25% 25%, var(--primary-rose) 2px, transparent 2px),
                            radial-gradient(circle at 75% 75%, var(--primary-gold) 1px, transparent 1px);
          background-size: 60px 60px, 40px 40px;
        }

        .container {
          position: relative;
          z-index: 2;
        }

        .footer-main {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1.5fr;
          gap: 3rem;
          padding: 4rem 0 3rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .footer-section h4 {
          color: var(--white);
          margin-bottom: 1.5rem;
          font-size: 1.2rem;
          position: relative;
        }

        .footer-section h4::after {
          content: '';
          position: absolute;
          bottom: -8px;
          left: 0;
          width: 30px;
          height: 2px;
          background: linear-gradient(135deg, var(--primary-rose), var(--primary-gold));
        }

        .brand-section {
          max-width: 350px;
        }

        .footer-logo {
          margin-bottom: 1.5rem;
        }

        .footer-logo h3 {
          font-size: 2rem;
          color: var(--primary-rose);
          margin: 0;
          font-weight: 600;
        }

        .footer-logo span {
          font-size: 0.85rem;
          color: rgba(255, 255, 255, 0.7);
          font-weight: 400;
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        .footer-description {
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.6;
          margin-bottom: 2rem;
          font-size: 0.95rem;
        }

        .social-links {
          display: flex;
          gap: 1rem;
        }

        .social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 45px;
          height: 45px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          color: var(--white);
          text-decoration: none;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }

        .social-link:hover {
          background: linear-gradient(135deg, var(--primary-rose), var(--primary-gold));
          color: var(--white);
        }

        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer-links li {
          margin-bottom: 0.75rem;
        }

        .footer-link {
          color: rgba(255, 255, 255, 0.8);
          text-decoration: none;
          font-size: 0.9rem;
          transition: color 0.3s ease;
          cursor: pointer;
        }

        .footer-link:hover {
          color: var(--primary-rose);
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .contact-item {
          display: flex;
          gap: 0.75rem;
          align-items: flex-start;
        }

        .contact-item svg {
          color: var(--primary-rose);
          flex-shrink: 0;
          margin-top: 2px;
        }

        .contact-item p {
          color: rgba(255, 255, 255, 0.8);
          margin: 0;
          font-size: 0.9rem;
          line-height: 1.4;
        }

        .newsletter-section {
          padding: 3rem 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .newsletter-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: rgba(255, 255, 255, 0.05);
          padding: 2rem;
          border-radius: 15px;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .newsletter-text {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .newsletter-text svg {
          color: var(--primary-gold);
        }

        .newsletter-text h4 {
          margin: 0 0 0.25rem 0;
          color: var(--white);
        }

        .newsletter-text p {
          margin: 0;
          color: rgba(255, 255, 255, 0.8);
          font-size: 0.9rem;
        }

        .newsletter-form {
          display: flex;
          gap: 1rem;
          align-items: center;
        }

        .newsletter-input {
          padding: 0.75rem 1rem;
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.1);
          color: var(--white);
          font-size: 0.9rem;
          min-width: 250px;
          backdrop-filter: blur(10px);
        }

        .newsletter-input::placeholder {
          color: rgba(255, 255, 255, 0.6);
        }

        .newsletter-input:focus {
          outline: none;
          border-color: var(--primary-rose);
          box-shadow: 0 0 0 2px rgba(232, 180, 184, 0.2);
        }

        .newsletter-btn {
          white-space: nowrap;
          padding: 0.75rem 1.5rem;
        }

        .footer-bottom {
          padding: 2rem 0;
        }

        .footer-bottom-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .copyright {
          color: rgba(255, 255, 255, 0.7);
          margin: 0;
          font-size: 0.9rem;
        }

        .footer-bottom-links {
          display: flex;
          gap: 2rem;
        }

        .footer-bottom-link {
          color: rgba(255, 255, 255, 0.7);
          text-decoration: none;
          font-size: 0.85rem;
          transition: color 0.3s ease;
        }

        .footer-bottom-link:hover {
          color: var(--primary-rose);
        }

        .made-with-love {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: rgba(255, 255, 255, 0.7);
          margin: 0;
          font-size: 0.85rem;
        }

        .heart-icon {
          color: var(--primary-rose);
          animation: heartbeat 2s ease-in-out infinite;
        }

        @keyframes heartbeat {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
        }

        @media (max-width: 768px) {
          .footer-main {
            grid-template-columns: 1fr;
            gap: 2rem;
            padding: 3rem 0 2rem;
          }

          .newsletter-content {
            flex-direction: column;
            gap: 2rem;
            text-align: center;
          }

          .newsletter-form {
            flex-direction: column;
            width: 100%;
          }

          .newsletter-input {
            width: 100%;
            min-width: unset;
          }

          .newsletter-btn {
            width: 100%;
          }

          .footer-bottom-content {
            flex-direction: column;
            text-align: center;
            gap: 1.5rem;
          }

          .footer-bottom-links {
            order: -1;
          }
        }

        @media (max-width: 480px) {
          .newsletter-content {
            padding: 1.5rem;
          }

          .footer-bottom-links {
            flex-direction: column;
            gap: 1rem;
          }

          .social-links {
            justify-content: center;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;