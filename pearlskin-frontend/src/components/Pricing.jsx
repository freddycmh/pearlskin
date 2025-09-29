import { motion } from 'framer-motion';
import { servicesMenu } from '../data/index.js';

const Pricing = () => {
  return (
    <section id="pricing" className="pricing section">
      <div className="container">
        <motion.div
          className="section-header text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>Our Services & Pricing</h2>
          <p>
            Discover our comprehensive range of treatments designed to enhance your natural beauty
          </p>
        </motion.div>

        <div className="pricing-grid">
          {/* Eyelashes */}
          <motion.div
            className="pricing-category"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="category-title">Eyelashes</h3>
            <div className="services-list">
              {servicesMenu.eyelashes.map((service, index) => (
                <motion.div
                  key={index}
                  className="service-item"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <span className="service-name">{service.name}</span>
                  <span className="service-price">{service.price}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skin Treatment */}
          <motion.div
            className="pricing-category"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="category-title">Skin Treatment</h3>
            <div className="services-list">
              {servicesMenu.skinTreatment.map((service, index) => (
                <motion.div
                  key={index}
                  className="service-item"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <span className="service-name">{service.name}</span>
                  <span className="service-price">{service.price}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .pricing {
          background: linear-gradient(135deg, var(--secondary-blush) 0%, var(--white) 100%);
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

        .pricing-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 3rem;
          max-width: 1000px;
          margin: 0 auto;
        }

        .pricing-category {
          background: var(--white);
          border-radius: 20px;
          padding: 2.5rem;
          box-shadow: var(--shadow-light);
          border: 1px solid rgba(232, 180, 184, 0.1);
          transition: all 0.3s ease;
        }

        .pricing-category:hover {
          box-shadow: var(--shadow-medium);
          transform: translateY(-5px);
        }

        .category-title {
          font-size: 1.8rem;
          color: var(--primary-rose);
          margin-bottom: 2rem;
          text-align: center;
          font-weight: 600;
          position: relative;
        }

        .category-title::after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 50px;
          height: 3px;
          background: linear-gradient(135deg, var(--primary-rose), var(--primary-gold));
          border-radius: 2px;
        }

        .services-list {
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
        }

        .service-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 0;
          border-bottom: 1px solid rgba(232, 180, 184, 0.1);
          transition: all 0.3s ease;
        }

        .service-item:last-child {
          border-bottom: none;
        }

        .service-item:hover {
          padding-left: 0.5rem;
          background: rgba(232, 180, 184, 0.05);
          border-radius: 8px;
        }

        .service-name {
          font-size: 1rem;
          color: var(--text-dark);
          font-weight: 500;
          flex: 1;
        }

        .service-price {
          font-size: 1.2rem;
          font-weight: 700;
          color: var(--primary-rose);
          font-family: 'Playfair Display', serif;
        }

        @media (max-width: 768px) {
          .pricing-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .pricing-category {
            padding: 2rem;
          }

          .category-title {
            font-size: 1.5rem;
          }

          .service-name {
            font-size: 0.9rem;
          }

          .service-price {
            font-size: 1.1rem;
          }
        }

        @media (max-width: 480px) {
          .pricing-grid {
            grid-template-columns: 1fr;
          }

          .pricing-category {
            padding: 1.5rem;
          }

          .service-item {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.5rem;
          }

          .service-price {
            align-self: flex-end;
          }
        }
      `}</style>
    </section>
  );
};

export default Pricing;