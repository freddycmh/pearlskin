import { motion } from "framer-motion";
import { Award, Users, Clock, Heart, Sparkles, Star } from "lucide-react";

const About = () => {
  const stats = [
    { icon: <Clock size={24} />, number: "25+", label: "Years Experience" },
    { icon: <Award size={24} />, number: "15+", label: "Certifications" },
    { icon: <Star size={24} />, number: "5", label: "Average Rating" },
  ];

  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="about-content">
          <div className="about-main">
            <motion.div
              className="about-text"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2>About Pearl Skin</h2>
              <p className="lead">
                Welcome to Pearl Skin Care Center, where beauty meets science in
                a sanctuary of tranquility and wellness.
              </p>
              <p>
                Founded with a passion for enhancing natural beauty, we
                specialize in advanced facial treatments that combine
                traditional techniques with the latest innovations in skincare
                technology. Our serene studio provides a peaceful escape from
                daily life, where you can indulge in transformative treatments
                designed to reveal your skin's natural radiance.
              </p>
              <p>
                At Pearl Skin Care Center, we believe that healthy, glowing skin
                is an essential part of looking and feeling your best. Our
                expert aesthetician works closely with each client to create
                personalized treatment plans that address specific concerns
                while promoting long-term skin health and vitality.
              </p>
            </motion.div>

            <motion.div
              className="about-visual"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="studio-showcase">
                <div className="image-placeholder">
                  <div className="spa-atmosphere">
                    <div className="treatment-bed"></div>
                    <div className="ambient-glow"></div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

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
                  <div className="stat-icon">{stat.icon}</div>
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .about {
          background: linear-gradient(
            135deg,
            var(--primary-cream) 0%,
            var(--white) 50%,
            var(--secondary-blush) 100%
          );
          position: relative;
          overflow: hidden;
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

        .about-visual {
          display: flex;
          justify-content: center;
        }

        .studio-showcase {
          position: relative;
          width: 100%;
          max-width: 400px;
        }

        .image-placeholder {
          width: 100%;
          height: 400px;
          background: linear-gradient(
            135deg,
            rgba(255, 255, 255, 0.9),
            rgba(232, 180, 184, 0.3)
          );
          border-radius: 20px;
          position: relative;
          box-shadow: var(--shadow-medium);
          border: 1px solid rgba(255, 255, 255, 0.3);
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .spa-atmosphere {
          position: relative;
          width: 200px;
          height: 120px;
        }

        .treatment-bed {
          width: 100%;
          height: 60px;
          background: linear-gradient(
            135deg,
            var(--primary-sage),
            var(--primary-rose)
          );
          border-radius: 30px;
          opacity: 0.7;
          position: relative;
        }

        .treatment-bed::before {
          content: "";
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
          background: radial-gradient(
            circle,
            var(--primary-rose) 0%,
            transparent 70%
          );
          border-radius: 50%;
          opacity: 0.2;
          animation: pulse 4s ease-in-out infinite;
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
          grid-template-columns: repeat(3, 1fr);
          gap: 3rem;
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
          background: linear-gradient(
            135deg,
            var(--primary-rose),
            var(--primary-gold)
          );
          color: var(--white);
          border-radius: 50%;
          margin-bottom: 1rem;
        }

        .stat-number {
          font-size: 2.5rem;
          font-weight: 700;
          color: var(--text-dark);
          font-family: "Playfair Display", serif;
          margin-bottom: 0.5rem;
        }

        .stat-label {
          color: var(--text-light);
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          font-size: 0.9rem;
        }

        @keyframes pulse {
          0%,
          100% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0.2;
          }
          50% {
            transform: translate(-50%, -50%) scale(1.1);
            opacity: 0.4;
          }
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

          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
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

          .image-placeholder {
            height: 300px;
          }

          .spa-atmosphere {
            width: 150px;
            height: 90px;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
