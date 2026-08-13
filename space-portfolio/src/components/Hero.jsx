import React from 'react';
import { motion } from 'framer-motion';
import { FaRocket, FaDownload, FaCompass } from 'react-icons/fa';
import portfolioData from '../data/portfolioData';

const Hero = () => {
  const { personal, resume } = portfolioData;

  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '7rem 1.5rem 4rem',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          width: '100%',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '3rem',
          alignItems: 'center',
          position: 'relative',
          zIndex: 2
        }}
        className="hero-grid"
      >
        {/* Left Side: Hero Text & CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.6rem',
              padding: '0.4rem 1.2rem',
              borderRadius: '50px',
              background: 'rgba(57, 198, 255, 0.1)',
              border: '1px solid rgba(57, 198, 255, 0.3)',
              color: 'var(--cosmic-blue)',
              fontSize: '0.85rem',
              fontFamily: 'Space Grotesk, sans-serif',
              fontWeight: '700',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              marginBottom: '1.5rem'
            }}
          >
            <FaCompass size={14} /> EXPLORING THE DIGITAL UNIVERSE
          </div>

          <h1
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 4.2rem)',
              fontWeight: '800',
              lineHeight: '1.1',
              marginBottom: '1rem',
              background: 'linear-gradient(135deg, #FFFFFF 0%, #AAB4D0 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            {personal.name.toUpperCase()}
          </h1>

          <h2
            style={{
              fontSize: 'clamp(1.1rem, 2.5vw, 1.6rem)',
              fontWeight: '700',
              color: 'var(--cosmic-blue)',
              marginBottom: '1.5rem',
              fontFamily: 'Space Grotesk, sans-serif',
              letterSpacing: '1px'
            }}
          >
            {personal.role.toUpperCase()}
          </h2>

          <p
            style={{
              fontSize: '1.1rem',
              color: 'var(--text-secondary)',
              maxWidth: '540px',
              lineHeight: '1.7',
              marginBottom: '2.5rem'
            }}
          >
            {personal.tagline} Building digital experiences through code, creativity, and curiosity.
          </p>

          {/* Action Buttons */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1.2rem'
            }}
          >
            <a href="#about" className="btn-cosmic-primary" id="explore-btn">
              <FaRocket /> EXPLORE MY UNIVERSE
            </a>

            <a
              href={resume.url}
              download="Jagruthi_Jetti_Resume.pdf"
              className="btn-cosmic-secondary"
              id="download-resume-hero"
            >
              <FaDownload /> DOWNLOAD RESUME
            </a>
          </div>
        </motion.div>

        {/* Right Side: Futuristic Planet & Holographic Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative'
          }}
        >
          {/* Futuristic CSS/SVG Planet Background */}
          <div
            style={{
              position: 'relative',
              width: '340px',
              height: '340px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            {/* Outer Planet Orbital Ring */}
            <svg
              viewBox="0 0 400 400"
              style={{
                position: 'absolute',
                width: '460px',
                height: '460px',
                top: '-60px',
                left: '-60px',
                pointerEvents: 'none',
                animation: 'spinOrbit 25s linear infinite'
              }}
            >
              <ellipse
                cx="200"
                cy="200"
                rx="190"
                ry="65"
                fill="none"
                stroke="url(#ringGrad)"
                strokeWidth="4"
                transform="rotate(-28 200 200)"
                opacity="0.85"
              />
              <circle cx="360" cy="170" r="8" fill="#39C6FF" filter="drop-shadow(0 0 8px #39C6FF)" />
              <circle cx="50" cy="230" r="5" fill="#FF4FD8" filter="drop-shadow(0 0 6px #FF4FD8)" />
              <defs>
                <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#39C6FF" />
                  <stop offset="50%" stopColor="#9B5CFF" />
                  <stop offset="100%" stopColor="#FF4FD8" />
                </linearGradient>
              </defs>
            </svg>

            {/* Glowing Planet Sphere Background */}
            <div
              style={{
                position: 'absolute',
                width: '320px',
                height: '320px',
                borderRadius: '50%',
                background: 'radial-gradient(circle at 35% 35%, #39C6FF 0%, #30105C 60%, #050B18 100%)',
                boxShadow: '0 0 60px rgba(57, 198, 255, 0.4), inset -20px -20px 50px rgba(0, 0, 0, 0.8)',
                opacity: 0.9
              }}
            />

            {/* Laser Scan Line Effect */}
            <div
              style={{
                position: 'absolute',
                width: '270px',
                height: '2px',
                background: 'linear-gradient(90deg, transparent, #39C6FF, #FF4FD8, transparent)',
                boxShadow: '0 0 15px #39C6FF',
                zIndex: 4,
                animation: 'scanLaser 3s ease-in-out infinite'
              }}
            />

            {/* Holographic Avatar Frame Container */}
            <div
              style={{
                position: 'relative',
                width: '260px',
                height: '260px',
                borderRadius: '50%',
                overflow: 'hidden',
                border: '3px solid var(--cosmic-blue)',
                boxShadow: '0 0 30px rgba(57, 198, 255, 0.6), inset 0 0 20px rgba(155, 92, 255, 0.4)',
                zIndex: 3
              }}
            >
              <img
                src={personal.profileImage}
                alt={personal.name}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="260" height="260" viewBox="0 0 260 260"><rect width="260" height="260" fill="%230B1635"/><circle cx="130" cy="100" r="50" fill="%2339C6FF"/><path d="M 30 240 C 30 170, 230 170, 230 240 Z" fill="%239B5CFF"/></svg>';
                }}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Keyframe Animations */}
      <style>{`
        @keyframes spinOrbit {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes scanLaser {
          0% { top: 15%; opacity: 0.2; }
          50% { top: 85%; opacity: 0.9; }
          100% { top: 15%; opacity: 0.2; }
        }

        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            text-align: center;
          }
          .hero-grid > div:first-child {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
