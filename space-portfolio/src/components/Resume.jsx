import React from 'react';
import { motion } from 'framer-motion';
import { FaFileAlt, FaDownload, FaExternalLinkAlt, FaCheckCircle } from 'react-icons/fa';
import portfolioData from '../data/portfolioData';

const Resume = () => {
  const { resume, personal } = portfolioData;

  return (
    <section id="resume" className="section-container">
      <div className="section-header">
        <span className="section-number">06 // RESUME</span>
        <h2 className="section-title">MY PROFESSIONAL FILE</h2>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass-card"
        style={{
          maxWidth: '750px',
          margin: '0 auto',
          padding: '3rem 2rem',
          textAlign: 'center',
          background: 'linear-gradient(145deg, rgba(11, 22, 53, 0.8), rgba(48, 16, 92, 0.5))',
          border: '1px solid var(--cosmic-blue)'
        }}
      >
        <div
          style={{
            width: '70px',
            height: '70px',
            borderRadius: '50%',
            background: 'rgba(57, 198, 255, 0.15)',
            border: '2px solid var(--cosmic-blue)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 1.5rem',
            color: 'var(--cosmic-blue)',
            fontSize: '2rem',
            boxShadow: '0 0 25px rgba(57, 198, 255, 0.4)'
          }}
        >
          <FaFileAlt />
        </div>

        <h3
          style={{
            fontSize: '1.8rem',
            fontWeight: '800',
            color: 'var(--text-primary)',
            marginBottom: '0.8rem'
          }}
        >
          {personal.name.toUpperCase()} — CURRICULUM VITAE
        </h3>

        <p
          style={{
            color: 'var(--text-secondary)',
            fontSize: '1rem',
            maxWidth: '520px',
            margin: '0 auto 2.5rem',
            lineHeight: '1.7'
          }}
        >
          Access my verified professional resume detailing technical competencies, educational qualifications, project architecture experience, and achievements.
        </p>

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '1.5rem'
          }}
        >
          <a
            href={resume.url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cosmic-primary"
            id="view-resume-btn"
          >
            <FaExternalLinkAlt /> VIEW RESUME
          </a>

          <a
            href={resume.url}
            download="Jagruthi_Jetti_Resume.pdf"
            className="btn-cosmic-secondary"
            id="download-resume-btn"
          >
            <FaDownload /> DOWNLOAD RESUME
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Resume;
