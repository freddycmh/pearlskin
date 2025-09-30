import { motion } from 'framer-motion';
import { Shield, Calendar, CreditCard, RefreshCw } from 'lucide-react';

const Policy = () => {
  const policies = [
    {
      icon: <Calendar size={24} />,
      title: "Booking & Cancellation",
      points: [
        "24-hour advance notice required for cancellations",
        "Late cancellations may incur a 50% fee",
        "No-shows will be charged the full service amount",
        "Appointments can be rescheduled with proper notice"
      ]
    },
    {
      icon: <CreditCard size={24} />,
      title: "Payment Policy",
      points: [
        "Payment due at time of service",
        "We accept all major credit cards and cash",
        "Gift certificates available for purchase",
        "Refills must be within 2 weeks for discounted pricing"
      ]
    },
    {
      icon: <Shield size={24} />,
      title: "Health & Safety",
      points: [
        "All tools and equipment are properly sanitized",
        "Please inform us of any allergies or sensitivities",
        "Patch tests available upon request",
        "We maintain the highest hygiene standards"
      ]
    },
    {
      icon: <RefreshCw size={24} />,
      title: "Service Guarantee",
      points: [
        "Client satisfaction is our top priority",
        "Free touch-ups within 48 hours if needed",
        "Complimentary consultations before all services",
        "Personalized aftercare instructions provided"
      ]
    }
  ];

  return (
    <section id="policy" className="policy section">
      <div className="container">
        <motion.div
          className="section-header text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>Our Policies</h2>
          <p>Please review our policies to ensure a smooth and enjoyable experience</p>
        </motion.div>

        <div className="policy-grid">
          {policies.map((policy, index) => (
            <motion.div
              key={index}
              className="policy-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="policy-icon">{policy.icon}</div>
              <h3>{policy.title}</h3>
              <ul className="policy-list">
                {policy.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .policy {
          background: linear-gradient(135deg, var(--white) 0%, var(--primary-cream) 100%);
          position: relative;
        }

        .section-header {
          margin-bottom: 4rem;
        }

        .section-header h2 {
          margin-bottom: 1rem;
        }

        .section-header p {
          font-size: 1.1rem;
          color: var(--text-light);
          max-width: 600px;
          margin: 0 auto;
        }

        .policy-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
        }

        .policy-card {
          background: var(--white);
          padding: 2.5rem;
          border-radius: 15px;
          box-shadow: var(--shadow-medium);
          border: 1px solid rgba(232, 180, 184, 0.2);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .policy-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-heavy);
        }

        .policy-icon {
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

        .policy-card h3 {
          font-size: 1.5rem;
          margin-bottom: 1.5rem;
          color: var(--text-dark);
        }

        .policy-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .policy-list li {
          padding: 0.75rem 0;
          padding-left: 1.5rem;
          position: relative;
          color: var(--text-light);
          line-height: 1.6;
          border-bottom: 1px solid rgba(232, 180, 184, 0.1);
        }

        .policy-list li:last-child {
          border-bottom: none;
        }

        .policy-list li::before {
          content: "•";
          position: absolute;
          left: 0;
          color: var(--primary-rose);
          font-weight: bold;
          font-size: 1.2rem;
        }

        @media (max-width: 768px) {
          .policy-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .policy-card {
            padding: 2rem;
          }

          .section-header {
            margin-bottom: 2.5rem;
          }
        }

        @media (max-width: 480px) {
          .policy-card {
            padding: 1.5rem;
          }

          .policy-card h3 {
            font-size: 1.3rem;
          }

          .policy-icon {
            width: 50px;
            height: 50px;
          }
        }
      `}</style>
    </section>
  );
};

export default Policy;