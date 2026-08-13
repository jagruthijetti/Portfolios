import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCertificate, FaRocket } from 'react-icons/fa';
import portfolioData from '../data/portfolioData';

const Education = () => {
  const { education } = portfolioData;

  return (
    <section id="education" className="section-container">
      <div className="section-header">
        <span className="section-number">03 // EDUCATION</span>
        <h2 className="section-title">ORBITAL JOURNEY</h2>
      </div>

      <div
        style={{
          position: 'relative',
          maxWidth: '840px',
          margin: '0 auto',
          padding: '1rem 0'
        }}
      >
        {/* Orbital Center Line */}
        <div
          style={{
            position: 'absolute',
            left: '50%',
            top: 0,
            bottom: 0,
            width: '2px',
            background: 'linear-gradient(180deg, var(--cosmic-blue), var(--cosmic-purple), var(--cosmic-pink))',
            transform: 'translateX(-50%)',
            boxShadow: '0 0 10px var(--cosmic-blue)'
          }}
          className="timeline-line"
        />

        {education.map((item, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: isEven ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              style={{
                display: 'flex',
                justifyContent: isEven ? 'flex-start' : 'flex-end',
                marginBottom: '3rem',
                position: 'relative'
              }}
              className="timeline-item"
            >
              {/* Orbital Glowing Checkpoint Node */}
              <div
                style={{
                  position: 'absolute',
                  left: '50%',
                  top: '24px',
                  transform: 'translate(-50%, -50%)',
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
                  background: 'var(--space-black)',
                  border: '3px solid var(--cosmic-blue)',
                  boxShadow: '0 0 15px var(--cosmic-blue), inset 0 0 8px var(--cosmic-purple)',
                  zIndex: 3
                }}
                className="timeline-checkpoint"
              />

              {/* Timeline Card */}
              <div
                className="glass-card"
                style={{
                  width: 'calc(50% - 40px)',
                  position: 'relative'
                }}
              >
                <span
                  style={{
                    fontFamily: 'Space Grotesk, sans-serif',
                    fontSize: '0.85rem',
                    fontWeight: '700',
                    color: 'var(--cosmic-blue)',
                    letterSpacing: '2px',
                    display: 'block',
                    marginBottom: '0.5rem'
                  }}
                >
                  {item.year}
                </span>

                <h3
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: '800',
                    color: 'var(--text-primary)',
                    marginBottom: '0.3rem'
                  }}
                >
                  {item.degree}
                </h3>

                <h4
                  style={{
                    fontSize: '0.95rem',
                    fontWeight: '600',
                    color: 'var(--cosmic-purple)',
                    marginBottom: '1rem',
                    fontFamily: 'Space Grotesk, sans-serif'
                  }}
                >
                  {item.institution}
                </h4>

                <p
                  style={{
                    fontSize: '0.95rem',
                    color: 'var(--text-secondary)',
                    lineHeight: '1.6',
                    marginBottom: '1rem'
                  }}
                >
                  {item.description}
                </p>

                {/* Achievements List */}
                {item.achievements && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                    {item.achievements.map((ach, aIdx) => (
                      <div
                        key={aIdx}
                        style={{
                          fontSize: '0.85rem',
                          color: 'var(--text-primary)',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem'
                        }}
                      >
                        <span style={{ color: 'var(--cosmic-pink)' }}>✦</span> {ach}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .timeline-line { left: '20px' !important; transform: none !important; }
          .timeline-item { justify-content: flex-start !important; padding-left: 50px !important; }
          .timeline-checkpoint { left: '20px' !important; transform: translateY(-50%) !important; }
          .glass-card { width: 100% !important; }
        }
      `}</style>
    </section>
  );
};

export default Education;
