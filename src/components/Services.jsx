import { motion } from 'framer-motion';
import { Clock, Star, Droplets, Sparkles, Flower, Heart } from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: 1,
      icon: <Sparkles size={32} />,
      title: "Classic European Facial",
      duration: "60 min",
      price: "$85",
      description: "Deep cleansing and hydrating facial with extraction, steam, and customized mask for all skin types.",
      features: ["Deep cleansing", "Steam treatment", "Extractions", "Hydrating mask"],
      popular: false
    },
    {
      id: 2,
      icon: <Droplets size={32} />,
      title: "HydraFacial MD",
      duration: "45 min",
      price: "$150",
      description: "Advanced resurfacing treatment that combines cleansing, exfoliation, extraction, and hydration.",
      features: ["Vortex cleansing", "Chemical peel", "Extraction", "LED therapy"],
      popular: true
    },
    {
      id: 3,
      icon: <Star size={32} />,
      title: "Anti-Aging Facial",
      duration: "75 min",
      price: "$120",
      description: "Targeted treatment using advanced peptides and antioxidants to reduce fine lines and boost collagen.",
      features: ["Peptide treatment", "Collagen boost", "Age-spot reduction", "Firming mask"],
      popular: false
    },
    {
      id: 4,
      icon: <Flower size={32} />,
      title: "Organic Botanical Facial",
      duration: "60 min",
      price: "$95",
      description: "Natural, organic treatment using plant-based ingredients perfect for sensitive skin.",
      features: ["Organic ingredients", "Gentle extraction", "Botanical mask", "Essential oils"],
      popular: false
    },
    {
      id: 5,
      icon: <Heart size={32} />,
      title: "Acne Treatment Facial",
      duration: "60 min",
      price: "$100",
      description: "Specialized treatment for acne-prone skin with deep pore cleansing and anti-bacterial treatment.",
      features: ["Deep pore cleansing", "Salicylic acid treatment", "Blue light therapy", "Healing mask"],
      popular: false
    },
    {
      id: 6,
      icon: <Droplets size={32} />,
      title: "Microdermabrasion",
      duration: "45 min",
      price: "$90",
      description: "Gentle exfoliation treatment that removes dead skin cells and promotes cell renewal.",
      features: ["Diamond tip exfoliation", "Suction therapy", "Moisturizing treatment", "Sun protection"],
      popular: false
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

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

        <motion.div
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              className={`service-card ${service.popular ? 'popular' : ''}`}
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {service.popular && (
                <div className="popular-badge">
                  <Star size={16} />
                  Most Popular
                </div>
              )}

              <div className="service-icon">
                {service.icon}
              </div>

              <div className="service-content">
                <h3>{service.title}</h3>
                <p className="service-description">{service.description}</p>

                <div className="service-features">
                  {service.features.map((feature, index) => (
                    <span key={index} className="feature-tag">
                      {feature}
                    </span>
                  ))}
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
        </motion.div>

        <motion.div
          className="services-footer text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3>Not sure which treatment is right for you?</h3>
          <p>Book a complimentary consultation and let our experts create a personalized treatment plan.</p>
          <motion.button
            className="btn btn-secondary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Schedule Consultation
          </motion.button>
        </motion.div>
      </div>

      <style jsx>{`
        .services {
          background: var(--white);
          position: relative;
        }

        .services::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--primary-rose), transparent);
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

        .service-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(135deg, var(--primary-rose), var(--primary-gold));
          transform: scaleX(0);
          transition: transform 0.3s ease;
        }

        .service-card:hover::before {
          transform: scaleX(1);
        }

        .service-card:hover {
          box-shadow: var(--shadow-medium);
          border-color: var(--primary-rose);
        }

        .service-card.popular {
          border: 2px solid var(--primary-rose);
          background: linear-gradient(135deg, var(--white) 0%, var(--secondary-blush) 100%);
        }

        .service-card.popular::before {
          transform: scaleX(1);
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

        .service-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, var(--primary-rose), var(--primary-gold));
          color: var(--white);
          border-radius: 50%;
          margin-bottom: 1.5rem;
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

        .service-features {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }

        .feature-tag {
          background: var(--secondary-blush);
          color: var(--text-dark);
          padding: 0.25rem 0.75rem;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 500;
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

        .services-footer {
          max-width: 500px;
          margin: 0 auto;
          padding: 3rem 2rem;
          background: var(--secondary-blush);
          border-radius: 20px;
        }

        .services-footer h3 {
          margin-bottom: 1rem;
          color: var(--text-dark);
        }

        .services-footer p {
          margin-bottom: 2rem;
          color: var(--text-light);
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

          .services-footer {
            margin: 0 1rem;
          }
        }

        @media (max-width: 480px) {
          .services-grid {
            grid-template-columns: 1fr;
          }

          .service-card {
            margin: 0;
          }

          .feature-tag {
            font-size: 0.75rem;
            padding: 0.2rem 0.6rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Services;