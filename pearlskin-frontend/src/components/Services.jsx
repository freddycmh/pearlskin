import { motion } from 'framer-motion';
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
          <h2>Treatment Benefits</h2>
        </motion.div>

        <div className="services-grid">
          {servicesData.map((service) => (
            <motion.div
              key={service.id}
              className="service-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
            >

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
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .service-card:hover {
          box-shadow: var(--shadow-medium);
          border-color: var(--primary-rose);
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

        .service-content {
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .service-content h3 {
          font-size: 1.4rem;
          margin-bottom: 1rem;
          color: var(--text-dark);
          height: 2.8rem;
          display: flex;
          align-items: center;
        }

        .service-description {
          color: var(--text-light);
          margin-bottom: 1.5rem;
          line-height: 1.5;
          font-size: 0.9rem;
          height: 6.4rem;
          overflow: hidden;
          display: -webkit-box;
          -webkit-line-clamp: 5;
          -webkit-box-orient: vertical;
        }

        .service-benefits {
          margin-bottom: 1.5rem;
          flex: 1;
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
          height: 8.5rem;
          overflow: hidden;
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



        @media (max-width: 768px) {
          .services-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .service-card {
            padding: 1.5rem;
          }


        }
      `}</style>
    </section>
  );
};

export default Services;