import { motion } from 'framer-motion';
import { Sparkles, Star, Calendar } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const element = document.querySelector('#services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="gradient-overlay"></div>
        <div className="pattern-overlay"></div>
      </div>

      <div className="container">
        <div className="hero-content">
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              className="hero-badge"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Sparkles size={16} />
              <span>Premium Skincare Experience</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Reveal Your
              <span className="gradient-text"> Natural Radiance</span>
            </motion.h1>

            <motion.p
              className="hero-description"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              Transform your skin with our luxurious facial treatments and
              personalized skincare solutions. Experience the art of beauty
              in our serene, spa-like environment.
            </motion.p>

            <motion.div
              className="hero-stats"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <div className="stat">
                <Star size={20} />
                <span>
                  <strong>4.9/5</strong>
                  <small>Client Rating</small>
                </span>
              </div>
              <div className="stat">
                <Sparkles size={20} />
                <span>
                  <strong>500+</strong>
                  <small>Happy Clients</small>
                </span>
              </div>
              <div className="stat">
                <Calendar size={20} />
                <span>
                  <strong>3+</strong>
                  <small>Years Experience</small>
                </span>
              </div>
            </motion.div>

            <motion.div
              className="hero-actions"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <motion.button
                className="btn btn-primary"
                onClick={scrollToContact}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Book Consultation
              </motion.button>
              <motion.button
                className="btn btn-secondary"
                onClick={scrollToServices}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Services
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <div className="hero-image">
              <div className="image-placeholder">
                <div className="floating-elements">
                  <motion.div
                    className="floating-element"
                    animate={{
                      y: [-10, 10, -10],
                      rotate: [0, 5, 0]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <Sparkles size={24} />
                  </motion.div>
                  <motion.div
                    className="floating-element second"
                    animate={{
                      y: [10, -10, 10],
                      rotate: [0, -5, 0]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1
                    }}
                  >
                    <Star size={20} />
                  </motion.div>
                </div>
                <div className="beauty-illustration">
                  <div className="face-outline"></div>
                  <div className="glow-effect"></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
          background: linear-gradient(135deg, var(--primary-cream) 0%, var(--secondary-blush) 100%);
        }

        .hero-background {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 1;
        }

        .gradient-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(ellipse at center, transparent 0%, rgba(232, 180, 184, 0.1) 70%);
        }

        .pattern-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: radial-gradient(circle at 25% 25%, rgba(232, 180, 184, 0.1) 2px, transparent 2px),
                            radial-gradient(circle at 75% 75%, rgba(157, 176, 168, 0.1) 1px, transparent 1px);
          background-size: 50px 50px, 30px 30px;
          opacity: 0.5;
        }

        .container {
          position: relative;
          z-index: 2;
        }

        .hero-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
          min-height: 80vh;
        }

        .hero-text {
          max-width: 600px;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(255, 255, 255, 0.9);
          padding: 0.75rem 1.5rem;
          border-radius: 50px;
          color: var(--primary-rose);
          font-weight: 500;
          font-size: 0.9rem;
          margin-bottom: 2rem;
          box-shadow: var(--shadow-light);
          backdrop-filter: blur(10px);
        }

        .hero h1 {
          margin-bottom: 1.5rem;
          line-height: 1.1;
        }

        .gradient-text {
          background: linear-gradient(135deg, var(--primary-rose), var(--primary-gold));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-description {
          font-size: 1.2rem;
          line-height: 1.7;
          margin-bottom: 2rem;
          color: var(--text-light);
        }

        .hero-stats {
          display: flex;
          gap: 2rem;
          margin-bottom: 3rem;
          flex-wrap: wrap;
        }

        .stat {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: var(--primary-rose);
        }

        .stat span {
          display: flex;
          flex-direction: column;
          color: var(--text-dark);
        }

        .stat strong {
          font-size: 1.2rem;
          font-weight: 600;
          line-height: 1;
        }

        .stat small {
          font-size: 0.8rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .hero-actions {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .hero-visual {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .hero-image {
          position: relative;
          width: 100%;
          max-width: 500px;
          aspect-ratio: 1;
        }

        .image-placeholder {
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(232, 180, 184, 0.2));
          border-radius: 50%;
          position: relative;
          box-shadow: var(--shadow-heavy);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .floating-elements {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
        }

        .floating-element {
          position: absolute;
          color: var(--primary-rose);
          opacity: 0.7;
        }

        .floating-element:first-child {
          top: 15%;
          right: 20%;
        }

        .floating-element.second {
          bottom: 20%;
          left: 15%;
          color: var(--primary-gold);
        }

        .beauty-illustration {
          position: relative;
          width: 200px;
          height: 200px;
        }

        .face-outline {
          width: 100%;
          height: 100%;
          border: 3px solid var(--primary-rose);
          border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
          position: relative;
          opacity: 0.6;
        }

        .face-outline::before {
          content: '';
          position: absolute;
          top: 30%;
          left: 25%;
          width: 8px;
          height: 8px;
          background: var(--primary-rose);
          border-radius: 50%;
        }

        .face-outline::after {
          content: '';
          position: absolute;
          top: 30%;
          right: 25%;
          width: 8px;
          height: 8px;
          background: var(--primary-rose);
          border-radius: 50%;
        }

        .glow-effect {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 150px;
          height: 150px;
          background: radial-gradient(circle, var(--primary-rose) 0%, transparent 70%);
          border-radius: 50%;
          opacity: 0.3;
          animation: pulse 3s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0.3;
          }
          50% {
            transform: translate(-50%, -50%) scale(1.1);
            opacity: 0.5;
          }
        }

        @media (max-width: 768px) {
          .hero-content {
            grid-template-columns: 1fr;
            gap: 3rem;
            text-align: center;
          }

          .hero-visual {
            order: -1;
          }

          .hero-image {
            max-width: 300px;
          }

          .hero-stats {
            justify-content: center;
            gap: 1.5rem;
          }

          .stat {
            flex-direction: column;
            text-align: center;
            gap: 0.5rem;
          }

          .hero-actions {
            justify-content: center;
          }

          .beauty-illustration {
            width: 150px;
            height: 150px;
          }

          .glow-effect {
            width: 120px;
            height: 120px;
          }
        }

        @media (max-width: 480px) {
          .hero-stats {
            flex-direction: column;
            align-items: center;
            gap: 1rem;
          }

          .hero-actions {
            flex-direction: column;
            align-items: center;
          }

          .btn {
            width: 100%;
            max-width: 250px;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;