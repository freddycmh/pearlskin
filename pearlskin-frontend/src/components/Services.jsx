import { motion } from 'framer-motion';
import { Clock, Star } from 'lucide-react';
import { servicesData } from '../data/index.js';

const Services = () => {

  return (
    <section id="services" className="services section">
      <div className="container">
        <motion.div
          className="section-header text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>Our Signature Treatments</h2>
          <p>
            Indulge in our carefully curated selection of facial treatments,
            each designed to address your unique skin needs and enhance your natural beauty.
          </p>
        </motion.div>

        <div className="services-grid">
          {servicesData.map((service) => (
            <motion.div
              key={service.id}
              className={`service-card ${service.popular ? 'popular' : ''}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              {service.popular && (
                <div className="popular-badge">
                  <Star size={16} />
                  Most Popular
                </div>
              )}

              <div className="service-image">
                <img
                  src={service.imageUrl}
                  alt={service.title}
                  className="service-img"
                  loading="lazy"
                />
              </div>

              <div className="service-content">
                <h3>{service.title}</h3>
                <p className="service-description">{service.description}</p>

                <div className="service-benefits">
                  <h4>Treatment Benefits:</h4>
                  <ul className="benefits-list">
                    {service.benefits.map((benefit, index) => (
                      <li key={index} className="benefit-item">
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="service-details">
                  <div className="duration">
                    <Clock size={16} />
                    <span>{service.duration}</span>
                  </div>
                  <div className="price">
                    <span className="price-amount">{service.price}</span>
                  </div>
                </div>

                <motion.button
                  className="btn btn-primary service-btn"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Book Treatment
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .services {
          background: var(--white);
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

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
          margin-bottom: 4rem;
        }

        .service-card {
          background: var(--white);
          border-radius: 20px;
          padding: 2rem;
          box-shadow: var(--shadow-light);
          border: 1px solid rgba(232, 180, 184, 0.1);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .service-card:hover {
          box-shadow: var(--shadow-medium);
          border-color: var(--primary-rose);
        }

        .service-card.popular {
          border: 2px solid var(--primary-rose);
          background: linear-gradient(135deg, var(--white) 0%, var(--secondary-blush) 100%);
        }

        .popular-badge {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: linear-gradient(135deg, var(--primary-rose), var(--primary-gold));
          color: var(--white);
          padding: 0.5rem 1rem;
          border-radius: 50px;
          font-size: 0.8rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 0.25rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .service-image {
          width: 100%;
          height: 200px;
          margin-bottom: 1.5rem;
          border-radius: 15px;
          overflow: hidden;
          position: relative;
        }

        .service-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .service-card:hover .service-img {
          transform: scale(1.05);
        }

        .service-content h3 {
          font-size: 1.4rem;
          margin-bottom: 1rem;
          color: var(--text-dark);
        }

        .service-description {
          color: var(--text-light);
          margin-bottom: 1.5rem;
          line-height: 1.6;
        }

        .service-benefits {
          margin-bottom: 1.5rem;
        }

        .service-benefits h4 {
          font-size: 1rem;
          color: var(--primary-rose);
          margin-bottom: 0.75rem;
          font-weight: 600;
        }

        .benefits-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .benefit-item {
          position: relative;
          padding-left: 1.5rem;
          margin-bottom: 0.5rem;
          color: var(--text-light);
          font-size: 0.9rem;
          line-height: 1.4;
        }

        .benefit-item::before {
          content: '✓';
          position: absolute;
          left: 0;
          top: 0;
          color: var(--primary-rose);
          font-weight: bold;
          font-size: 1rem;
        }

        .service-details {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
          padding: 1rem 0;
          border-top: 1px solid rgba(232, 180, 184, 0.2);
        }

        .duration {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--text-light);
          font-size: 0.9rem;
        }

        .price {
          display: flex;
          align-items: center;
        }

        .price-amount {
          font-size: 1.8rem;
          font-weight: 700;
          color: var(--primary-rose);
          font-family: 'Playfair Display', serif;
        }

        .service-btn {
          width: 100%;
          justify-content: center;
        }

        @media (max-width: 768px) {
          .services-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .service-card {
            padding: 1.5rem;
          }

          .popular-badge {
            position: static;
            margin-bottom: 1rem;
            align-self: flex-start;
          }

          .service-details {
            flex-direction: column;
            gap: 1rem;
            text-align: center;
          }
        }
      `}</style>
    </section>
  );
};

export default Services;