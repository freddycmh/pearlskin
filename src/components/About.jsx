import { motion } from 'framer-motion';
import { Award, Users, Clock, Heart, Sparkles, Star } from 'lucide-react';

const About = () => {
  const stats = [
    {
      icon: <Users size={24} />,
      number: "500+",
      label: "Happy Clients"
    },
    {
      icon: <Clock size={24} />,
      number: "3+",
      label: "Years Experience"
    },
    {
      icon: <Award size={24} />,
      number: "15+",
      label: "Certifications"
    },
    {
      icon: <Star size={24} />,
      number: "4.9",
      label: "Average Rating"
    }
  ];

  const values = [
    {
      icon: <Heart size={32} />,
      title: "Personalized Care",
      description: "Every treatment is tailored to your unique skin type and individual needs for optimal results."
    },
    {
      icon: <Sparkles size={32} />,
      title: "Premium Products",
      description: "We use only the finest, clinically-proven skincare products and cutting-edge technology."
    },
    {
      icon: <Award size={32} />,
      title: "Expert Techniques",
      description: "Our certified aestheticians bring years of experience and continuous education to every service."
    }
  ];

  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="about-content">
          {/* Main About Content */}
          <div className="about-main">
            <motion.div
              className="about-text"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2>About PearlSkin</h2>
              <p className="lead">
                Welcome to PearlSkin Aesthetic Studio, where beauty meets science in a sanctuary of tranquility and wellness.
              </p>
              <p>
                Founded with a passion for enhancing natural beauty, we specialize in advanced facial treatments
                that combine traditional techniques with the latest innovations in skincare technology. Our serene
                studio provides a peaceful escape from daily life, where you can indulge in transformative treatments
                designed to reveal your skin's natural radiance.
              </p>
              <p>
                At PearlSkin, we believe that healthy, glowing skin is the foundation of confidence. Our expert
                aestheticians work closely with each client to develop personalized treatment plans that address
                specific skin concerns while promoting long-term skin health and vitality.
              </p>

              <motion.div
                className="founder-signature"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="signature-content">
                  <p className="signature-text">
                    "Beauty is about feeling confident in your own skin, and we're here to help you achieve that."
                  </p>
                  <div className="signature-author">
                    <strong>Sarah Johnson</strong>
                    <span>Founder & Lead Aesthetician</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              className="about-visual"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="studio-showcase">
                <div className="showcase-item main">
                  <div className="image-placeholder">
                    <div className="spa-elements">
                      <motion.div
                        className="floating-spa-icon"
                        animate={{
                          y: [-5, 5, -5],
                          rotate: [0, 360]
                        }}
                        transition={{
                          duration: 6,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        <Sparkles size={20} />
                      </motion.div>
                      <motion.div
                        className="floating-spa-icon second"
                        animate={{
                          y: [5, -5, 5],
                          rotate: [360, 0]
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: 2
                        }}
                      >
                        <Heart size={16} />
                      </motion.div>
                    </div>
                    <div className="spa-atmosphere">
                      <div className="treatment-bed"></div>
                      <div className="ambient-glow"></div>
                    </div>
                  </div>
                </div>
                <div className="showcase-item secondary">
                  <div className="image-placeholder small">
                    <div className="product-display">
                      <div className="product-bottle"></div>
                      <div className="product-bottle"></div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Stats Section */}
          <motion.div
            className="stats-section"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="stats-grid">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="stat-item"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="stat-icon">
                    {stat.icon}
                  </div>
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Values Section */}
          <motion.div
            className="values-section"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-center">Why Choose PearlSkin</h3>
            <div className="values-grid">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  className="value-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="value-icon">
                    {value.icon}
                  </div>
                  <h4>{value.title}</h4>
                  <p>{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .about {
          background: linear-gradient(135deg, var(--primary-cream) 0%, var(--white) 50%, var(--secondary-blush) 100%);
          position: relative;
          overflow: hidden;
        }

        .about::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: radial-gradient(circle at 20% 50%, rgba(232, 180, 184, 0.05) 0%, transparent 50%),
                            radial-gradient(circle at 80% 20%, rgba(157, 176, 168, 0.05) 0%, transparent 50%);
          pointer-events: none;
        }

        .container {
          position: relative;
          z-index: 1;
        }

        .about-content {
          display: flex;
          flex-direction: column;
          gap: 5rem;
        }

        .about-main {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        .about-text h2 {
          margin-bottom: 1.5rem;
          color: var(--text-dark);
        }

        .lead {
          font-size: 1.3rem;
          font-weight: 500;
          color: var(--primary-rose);
          margin-bottom: 2rem;
          line-height: 1.6;
        }

        .about-text p {
          margin-bottom: 1.5rem;
          line-height: 1.7;
        }

        .founder-signature {
          margin-top: 3rem;
          padding: 2rem;
          background: rgba(255, 255, 255, 0.8);
          border-radius: 15px;
          border-left: 4px solid var(--primary-rose);
          backdrop-filter: blur(10px);
        }

        .signature-text {
          font-size: 1.1rem;
          font-style: italic;
          color: var(--text-dark);
          margin-bottom: 1rem;
          line-height: 1.6;
        }

        .signature-author strong {
          display: block;
          color: var(--text-dark);
          font-weight: 600;
          margin-bottom: 0.25rem;
        }

        .signature-author span {
          color: var(--text-muted);
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .about-visual {
          display: flex;
          justify-content: center;
        }

        .studio-showcase {
          position: relative;
          width: 100%;
          max-width: 400px;
        }

        .showcase-item {
          position: relative;
        }

        .showcase-item.main {
          width: 100%;
          height: 400px;
        }

        .showcase-item.secondary {
          position: absolute;
          bottom: -20px;
          right: -20px;
          width: 150px;
          height: 150px;
        }

        .image-placeholder {
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(232, 180, 184, 0.3));
          border-radius: 20px;
          position: relative;
          box-shadow: var(--shadow-medium);
          border: 1px solid rgba(255, 255, 255, 0.3);
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .image-placeholder.small {
          border-radius: 15px;
        }

        .spa-elements {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
        }

        .floating-spa-icon {
          position: absolute;
          color: var(--primary-rose);
          opacity: 0.6;
        }

        .floating-spa-icon:first-child {
          top: 20%;
          right: 20%;
        }

        .floating-spa-icon.second {
          bottom: 20%;
          left: 15%;
          color: var(--primary-gold);
        }

        .spa-atmosphere {
          position: relative;
          width: 200px;
          height: 120px;
        }

        .treatment-bed {
          width: 100%;
          height: 60px;
          background: linear-gradient(135deg, var(--primary-sage), var(--primary-rose));
          border-radius: 30px;
          opacity: 0.7;
          position: relative;
        }

        .treatment-bed::before {
          content: '';
          position: absolute;
          top: -10px;
          left: 20px;
          right: 20px;
          height: 20px;
          background: rgba(255, 255, 255, 0.8);
          border-radius: 10px;
        }

        .ambient-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 150px;
          height: 150px;
          background: radial-gradient(circle, var(--primary-rose) 0%, transparent 70%);
          border-radius: 50%;
          opacity: 0.2;
          animation: pulse 4s ease-in-out infinite;
        }

        .product-display {
          display: flex;
          gap: 1rem;
          align-items: center;
        }

        .product-bottle {
          width: 30px;
          height: 50px;
          background: linear-gradient(135deg, var(--primary-rose), var(--primary-gold));
          border-radius: 5px 5px 15px 15px;
          opacity: 0.8;
          position: relative;
        }

        .product-bottle::before {
          content: '';
          position: absolute;
          top: -5px;
          left: 50%;
          transform: translateX(-50%);
          width: 15px;
          height: 8px;
          background: var(--primary-sage);
          border-radius: 3px;
        }

        .stats-section {
          background: rgba(255, 255, 255, 0.9);
          border-radius: 20px;
          padding: 3rem 2rem;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(232, 180, 184, 0.2);
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
        }

        .stat-item {
          text-align: center;
        }

        .stat-icon {
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

        .stat-number {
          font-size: 2.5rem;
          font-weight: 700;
          color: var(--text-dark);
          font-family: 'Playfair Display', serif;
          margin-bottom: 0.5rem;
        }

        .stat-label {
          color: var(--text-light);
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          font-size: 0.9rem;
        }

        .values-section h3 {
          margin-bottom: 3rem;
          color: var(--text-dark);
        }

        .values-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }

        .value-card {
          background: rgba(255, 255, 255, 0.9);
          padding: 2rem;
          border-radius: 20px;
          text-align: center;
          box-shadow: var(--shadow-light);
          border: 1px solid rgba(232, 180, 184, 0.1);
          transition: all 0.3s ease;
        }

        .value-card:hover {
          box-shadow: var(--shadow-medium);
          border-color: var(--primary-rose);
        }

        .value-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 70px;
          height: 70px;
          background: linear-gradient(135deg, var(--primary-rose), var(--primary-gold));
          color: var(--white);
          border-radius: 50%;
          margin-bottom: 1.5rem;
        }

        .value-card h4 {
          margin-bottom: 1rem;
          color: var(--text-dark);
        }

        .value-card p {
          color: var(--text-light);
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .about-main {
            grid-template-columns: 1fr;
            gap: 3rem;
            text-align: center;
          }

          .about-visual {
            order: -1;
          }

          .showcase-item.secondary {
            position: static;
            margin-top: 1rem;
            width: 120px;
            height: 120px;
            margin-left: auto;
            margin-right: auto;
          }

          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;
          }

          .values-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .stats-section {
            padding: 2rem 1rem;
          }
        }

        @media (max-width: 480px) {
          .stats-grid {
            grid-template-columns: 1fr;
          }

          .showcase-item.main {
            height: 300px;
          }

          .spa-atmosphere {
            width: 150px;
            height: 90px;
          }

          .founder-signature {
            padding: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default About;