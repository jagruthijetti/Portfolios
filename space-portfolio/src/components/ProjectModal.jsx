import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaGithub, FaExternalLinkAlt, FaRocket, FaTasks, FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa';

const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  const hasGithub = project.github && project.github !== '' && !project.github.includes('PASTE_');
  const hasLive = project.live && project.live !== '' && !project.live.includes('PASTE_');

  return (
    <AnimatePresence>
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1.5rem',
          backgroundColor: 'rgba(2, 3, 10, 0.85)',
          backdropFilter: 'blur(16px)'
        }}
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.85, y: 20 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          onClick={(e) => e.stopPropagation()}
          className="glass-card"
          style={{
            maxWidth: '750px',
            width: '100%',
            maxHeight: '90vh',
            overflowY: 'auto',
            position: 'relative',
            padding: '2.5rem',
            border: `1.5px solid ${project.planetColor || 'var(--cosmic-blue)'}`,
            boxShadow: `0 0 40px ${project.planetColor || 'var(--cosmic-blue)'}40`
          }}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            aria-label="Close modal"
            style={{
              position: 'absolute',
              top: '1.2rem',
              right: '1.2rem',
              background: 'rgba(255, 255, 255, 0.08)',
              border: '1px solid var(--glass-border)',
              borderRadius: '50%',
              width: '36px',
              height: '36px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--text-primary)',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
          >
            <FaTimes />
          </button>

          {/* Badge & Title */}
          <div style={{ display: 'inline-block', padding: '0.3rem 0.9rem', borderRadius: '50px', background: 'rgba(57, 198, 255, 0.1)', border: '1px solid var(--cosmic-blue)', color: 'var(--cosmic-blue)', fontSize: '0.8rem', fontWeight: '700', letterSpacing: '1px', marginBottom: '1rem' }}>
            {project.badge || project.category}
          </div>

          <h2 style={{ fontSize: '2.2rem', fontWeight: '800', color: 'var(--text-primary)', marginBottom: '1rem' }}>
            {project.title}
          </h2>

          {/* Overview */}
          <div style={{ marginBottom: '1.8rem' }}>
            <h4 style={{ fontSize: '1rem', color: 'var(--cosmic-blue)', letterSpacing: '1px', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <FaRocket /> OVERVIEW
            </h4>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', fontSize: '1rem' }}>
              {project.overview || project.shortDesc}
            </p>
          </div>

          {/* Technologies Used */}
          <div style={{ marginBottom: '1.8rem' }}>
            <h4 style={{ fontSize: '1rem', color: 'var(--cosmic-purple)', letterSpacing: '1px', marginBottom: '0.6rem' }}>
              TECHNOLOGIES USED
            </h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
              {project.technologies.map((tech, idx) => (
                <span key={idx} style={{ padding: '0.35rem 0.9rem', borderRadius: '20px', background: 'rgba(255, 255, 255, 0.06)', border: '1px solid rgba(255, 255, 255, 0.1)', fontSize: '0.85rem', color: 'var(--text-primary)', fontWeight: '600' }}>
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Role & Challenges Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '2rem' }}>
            <div>
              <h4 style={{ fontSize: '0.95rem', color: 'var(--cosmic-blue)', marginBottom: '0.4rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <FaTasks /> MY ROLE
              </h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                {project.myRole || 'Full-stack design & implementation.'}
              </p>
            </div>
            <div>
              <h4 style={{ fontSize: '0.95rem', color: 'var(--cosmic-pink)', marginBottom: '0.4rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <FaExclamationTriangle /> CHALLENGES
              </h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                {project.challenges || 'Optimizing component render times and user experience.'}
              </p>
            </div>
          </div>

          {/* Result */}
          {project.result && (
            <div style={{ marginBottom: '2rem', padding: '1rem', borderRadius: '12px', background: 'rgba(57, 198, 255, 0.08)', border: '1px solid rgba(57, 198, 255, 0.2)' }}>
              <h4 style={{ fontSize: '0.9rem', color: 'var(--cosmic-blue)', fontWeight: '700', marginBottom: '0.3rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <FaCheckCircle /> RESULT & IMPACT
              </h4>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-primary)' }}>{project.result}</p>
            </div>
          )}

          {/* Modal Action Links */}
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            {hasGithub && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-cosmic-primary">
                <FaGithub /> GITHUB REPOSITORY
              </a>
            )}
            {hasLive && (
              <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn-cosmic-secondary">
                <FaExternalLinkAlt /> LIVE DEMO
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ProjectModal;
