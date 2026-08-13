import React from 'react';
import { motion } from 'framer-motion';
import { FaAward, FaExternalLinkAlt, FaCheckCircle } from 'react-icons/fa';
import portfolioData from '../data/portfolioData';

const Certifications = () => {
  const { certifications } = portfolioData;

  return (
    <section id="certifications" className="section-container">
      <div className="section-header">
        <span className="section-number">05 // CERTIFICATIONS</span>
        <h2 className="section-title">COSMIC ACHIEVEMENTS</h2>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem'
        }}
      >
        {certifications.map((cert, idx) => {
          const hasLink = cert.credentialLink && cert.credentialLink !== '' && !cert.credentialLink.includes('PASTE_');

          return (
            <motion.div
              key={cert.id || idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="glass-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative'
              }}
            >
              <div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '1.2rem'
                  }}
                >
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '12px',
                      background: 'rgba(155, 92, 255, 0.15)',
                      border: '1px solid var(--cosmic-purple)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--cosmic-purple)',
                      fontSize: '1.4rem'
                    }}
                  >
                    <FaAward />
                  </div>
                  <span
                    style={{
                      fontFamily: 'Space Grotesk, sans-serif',
                      fontSize: '0.8rem',
                      fontWeight: '700',
                      color: 'var(--cosmic-blue)',
                      letterSpacing: '1px'
                    }}
                  >
                    {cert.date}
                  </span>
                </div>

                <h3
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: '800',
                    color: 'var(--text-primary)',
                    marginBottom: '0.4rem'
                  }}
                >
                  {cert.name}
                </h3>

                <h4
                  style={{
                    fontSize: '0.9rem',
                    color: 'var(--text-secondary)',
                    marginBottom: '1rem',
                    fontFamily: 'Space Grotesk, sans-serif'
                  }}
                >
                  {cert.issuer}
                </h4>

                {cert.credentialId && (
                  <div
                    style={{
                      fontSize: '0.8rem',
                      color: 'var(--text-secondary)',
                      fontFamily: 'monospace',
                      marginBottom: '1rem',
                      background: 'rgba(255, 255, 255, 0.04)',
                      padding: '0.3rem 0.6rem',
                      borderRadius: '4px',
                      display: 'inline-block'
                    }}
                  >
                    ID: {cert.credentialId}
                  </div>
                )}
              </div>

              {hasLink && (
                <div style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
                  <a
                    href={cert.credentialLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-cosmic-secondary"
                    style={{ width: '100%', justifyContent: 'center', padding: '0.6rem 1rem', fontSize: '0.85rem' }}
                  >
                    <FaExternalLinkAlt /> VIEW CREDENTIAL
                  </a>
                </div>
              )}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Certifications;
