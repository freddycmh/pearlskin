import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Phone, Calendar } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <motion.header
      className={`header ${isScrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container">
        <div className="header-content">
          <motion.div
            className="logo"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <h3>PearlSkin</h3>
            <span>Aesthetic Studio</span>
          </motion.div>

          <nav className="desktop-nav">
            {navItems.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className="nav-link"
                whileHover={{ y: -2 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
              >
                {item.label}
              </motion.a>
            ))}
          </nav>

          <div className="header-actions">
            <motion.a
              href="tel:+1234567890"
              className="phone-link"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Phone size={20} />
              <span>(123) 456-7890</span>
            </motion.a>

            <motion.button
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
            >
              <Calendar size={18} />
              Book Now
            </motion.button>

            <button
              className="mobile-menu-toggle"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.nav
          className={`mobile-nav ${isMenuOpen ? 'open' : ''}`}
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isMenuOpen ? 1 : 0,
            height: isMenuOpen ? 'auto' : 0
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="mobile-nav-content">
            {navItems.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className="mobile-nav-link"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: isMenuOpen ? 1 : 0, x: isMenuOpen ? 0 : -20 }}
                transition={{ delay: index * 0.1 }}
              >
                {item.label}
              </motion.a>
            ))}
            <motion.a
              href="tel:+1234567890"
              className="mobile-phone-link"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: isMenuOpen ? 1 : 0, x: isMenuOpen ? 0 : -20 }}
              transition={{ delay: 0.4 }}
            >
              <Phone size={20} />
              (123) 456-7890
            </motion.a>
          </div>
        </motion.nav>
      </div>

      <style jsx>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(232, 180, 184, 0.1);
          transition: all 0.3s ease;
        }

        .header.scrolled {
          background: rgba(255, 255, 255, 0.98);
          box-shadow: var(--shadow-light);
        }

        .header-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem 0;
        }

        .logo {
          cursor: pointer;
        }

        .logo h3 {
          font-size: 1.8rem;
          color: var(--primary-rose);
          margin: 0;
          font-weight: 600;
        }

        .logo span {
          font-size: 0.8rem;
          color: var(--text-muted);
          font-weight: 400;
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        .desktop-nav {
          display: flex;
          gap: 2rem;
          align-items: center;
        }

        .nav-link {
          color: var(--text-dark);
          text-decoration: none;
          font-weight: 500;
          position: relative;
          transition: color 0.3s ease;
        }

        .nav-link:hover {
          color: var(--primary-rose);
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--primary-rose);
          transition: width 0.3s ease;
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .header-actions {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .phone-link {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--text-dark);
          text-decoration: none;
          font-weight: 500;
          transition: color 0.3s ease;
        }

        .phone-link:hover {
          color: var(--primary-rose);
        }

        .phone-link span {
          font-size: 0.9rem;
        }

        .btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.9rem;
        }

        .mobile-menu-toggle {
          display: none;
          background: none;
          border: none;
          color: var(--text-dark);
          cursor: pointer;
          padding: 0.5rem;
        }

        .mobile-nav {
          overflow: hidden;
          background: var(--white);
        }

        .mobile-nav-content {
          padding: 1rem 0;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .mobile-nav-link {
          color: var(--text-dark);
          text-decoration: none;
          font-weight: 500;
          padding: 0.5rem 0;
          border-bottom: 1px solid rgba(232, 180, 184, 0.1);
        }

        .mobile-phone-link {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--primary-rose);
          text-decoration: none;
          font-weight: 500;
          padding: 0.5rem 0;
        }

        @media (max-width: 768px) {
          .desktop-nav {
            display: none;
          }

          .phone-link {
            display: none;
          }

          .mobile-menu-toggle {
            display: block;
          }

          .btn {
            padding: 0.75rem 1.5rem;
            font-size: 0.8rem;
          }

          .btn span {
            display: none;
          }
        }

        @media (max-width: 480px) {
          .logo h3 {
            font-size: 1.5rem;
          }

          .logo span {
            font-size: 0.7rem;
          }
        }
      `}</style>
    </motion.header>
  );
};

export default Header;