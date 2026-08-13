import React from 'react';
import { FaRocket, FaAngleUp } from 'react-icons/fa';
import portfolioData from '../data/portfolioData';

const Footer = () => {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        position: 'relative',
        zIndex: 2,
        background: 'rgba(5, 11, 24, 0.95)',
        borderTop: '1px solid var(--glass-border)',
        padding: '3rem 1.5rem 2rem'
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1.5rem',
          textAlign: 'center'
        }}
      >
        {/* Brand */}
        <div
          style={{
            fontFamily: 'Space Grotesk, sans-serif',
            fontSize: '1.4rem',
            fontWeight: '800',
            letterSpacing: '2px',
            color: 'var(--text-primary)'
          }}
        >
          <span style={{ color: 'var(--cosmic-blue)' }}>✦</span> {personal.name.toUpperCase()} SPACE PORTFOLIO
        </div>

        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', maxWidth: '500px' }}>
          Navigating software engineering, computer science & interactive digital universes.
        </p>

        {/* Back to top floating button */}
        <button
          onClick={scrollToTop}
          className="btn-cosmic-secondary"
          style={{
            marginTop: '0.5rem',
            padding: '0.6rem 1.4rem',
            fontSize: '0.85rem'
          }}
          id="return-to-orbit-btn"
        >
          RETURN TO ORBIT <FaAngleUp />
        </button>

        <div
          style={{
            width: '100%',
            height: '1px',
            background: 'rgba(255, 255, 255, 0.08)',
            margin: '1rem 0'
          }}
        />

        <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
          © {new Date().getFullYear()} {personal.name}. All cosmic rights reserved. Built with React + Vite.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
