import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCode, FaRocket, FaGlobe } from 'react-icons/fa';
import portfolioData from '../data/portfolioData';

const About = () => {
  const { personal, statistics } = portfolioData;

  const statIcons = [<FaRocket />, <FaCode />, <FaGraduationCap />, <FaGlobe />];

  return (
    <section id="about" className="section-container">
      <div className="section-header">
        <span className="section-number">01 // ABOUT</span>
        <h2 className="section-title">MY JOURNEY</h2>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '2rem',
          alignItems: 'stretch'
        }}
        className="about-grid"
      >
        {/* Left Column: Glass Card Profile Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card"
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}
        >
          <div>
            <h3
              style={{
                fontSize: '1.6rem',
                fontWeight: '700',
                color: 'var(--text-primary)',
                marginBottom: '1.2rem'
              }}
            >
              SPACE STATION PROFILE
            </h3>

            <p
              style={{
                color: 'var(--text-secondary)',
                fontSize: '1.05rem',
                lineHeight: '1.8',
                marginBottom: '1.5rem'
              }}
            >
              {personal.bio}
            </p>
          </div>

          {/* Mission Statement Glass Box */}
          <div
            style={{
              padding: '1.2rem 1.5rem',
              borderRadius: '16px',
              background: 'linear-gradient(135deg, rgba(57, 198, 255, 0.1) 0%, rgba(155, 92, 255, 0.1) 100%)',
              borderLeft: '4px solid var(--cosmic-blue)',
              marginTop: '1.5rem'
            }}
          >
            <span
              style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontSize: '0.8rem',
                fontWeight: '700',
                letterSpacing: '2px',
                color: 'var(--cosmic-blue)',
                display: 'block',
                marginBottom: '0.4rem'
              }}
            >
              MISSION STATEMENT
            </span>
            <p
              style={{
                fontStyle: 'italic',
                color: 'var(--text-primary)',
                fontWeight: '600',
                fontSize: '1.05rem'
              }}
            >
              "{personal.missionStatement}"
            </p>
          </div>
        </motion.div>

        {/* Right Column: Statistics Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '1.2rem'
          }}
          className="stats-grid"
        >
          {statistics.map((stat, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.04 }}
              className="glass-card"
              style={{
                textAlign: 'center',
                padding: '2rem 1.2rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <div
                style={{
                  fontSize: '2rem',
                  color: 'var(--cosmic-blue)',
                  marginBottom: '0.75rem',
                  filter: 'drop-shadow(0 0 10px rgba(57, 198, 255, 0.4))'
                }}
              >
                {statIcons[idx % statIcons.length]}
              </div>

              <h4
                style={{
                  fontSize: '2.5rem',
                  fontWeight: '800',
                  color: 'var(--text-primary)',
                  marginBottom: '0.3rem',
                  background: 'linear-gradient(135deg, var(--cosmic-blue), var(--cosmic-pink))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                {stat.value}
              </h4>

              <span
                style={{
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontSize: '0.85rem',
                  fontWeight: '700',
                  letterSpacing: '1px',
                  color: 'var(--text-secondary)',
                  textTransform: 'uppercase'
                }}
              >
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 868px) {
          .about-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 480px) {
          .stats-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

export default About;
