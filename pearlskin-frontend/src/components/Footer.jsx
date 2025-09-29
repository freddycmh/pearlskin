import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter, Heart } from 'lucide-react';
import { navigationData, companyInfo } from '../data/index.js';

const Footer = () => {
  const socialLinks = [
    { icon: <Instagram size={20} />, href: companyInfo.socialMedia.instagram, label: 'Instagram' },
    { icon: <Facebook size={20} />, href: companyInfo.socialMedia.facebook, label: 'Facebook' },
    { icon: <Twitter size={20} />, href: companyInfo.socialMedia.twitter, label: 'Twitter' }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-main">
          <motion.div
            className="footer-section brand-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="footer-logo">
              <h3>{companyInfo.name}</h3>
              <span>{companyInfo.tagline}</span>
            </div>
            <p className="footer-description">
              {companyInfo.description}
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
              {navigationData.quickLinks.map((link, index) => (
                <li key={index}>
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
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="footer-section contact-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4>Contact Info</h4>
            <div className="contact-info">
              <div className="contact-item">
                <MapPin size={18} />
                <div>
                  <p>{companyInfo.contact.address.street}</p>
                  <p>{companyInfo.contact.address.suite}</p>
                  <p>{companyInfo.contact.address.city}</p>
                </div>
              </div>
              <div className="contact-item">
                <Phone size={18} />
                <div>
                  <p>{companyInfo.contact.phone}</p>
                  <p>Text for quick questions</p>
                </div>
              </div>
              <div className="contact-item">
                <Mail size={18} />
                <div>
                  <p>{companyInfo.contact.email}</p>
                  <p>24-hour response time</p>
                </div>
              </div>
              <div className="contact-item">
                <Clock size={18} />
                <div>
                  <p>{companyInfo.hours.weekdays}</p>
                  <p>{companyInfo.hours.saturday}</p>
                  <p>{companyInfo.hours.sunday}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="footer-bottom"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="footer-bottom-content">
            <p className="copyright">
              © 2024 PearlSkin Aesthetic Studio. All rights reserved.
            </p>
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

        .footer-main {
          display: grid;
          grid-template-columns: 2fr 1fr 1.5fr;
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

          .footer-bottom-content {
            flex-direction: column;
            text-align: center;
            gap: 1.5rem;
          }
        }

        @media (max-width: 480px) {
          .social-links {
            justify-content: center;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;