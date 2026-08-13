import React, { useState, useEffect } from 'react';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';

const navItems = [
  { label: 'HOME', href: '#home' },
  { label: 'ABOUT', href: '#about' },
  { label: 'SKILLS', href: '#skills' },
  { label: 'EDUCATION', href: '#education' },
  { label: 'PROJECTS', href: '#projects' },
  { label: 'CERTIFICATIONS', href: '#certifications' },
  { label: 'CONTACT', href: '#contact' }
];

const Navbar = ({ theme, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Intersection observer logic for active link highlight
      const sections = navItems.map(item => item.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 1000,
        transition: 'all 0.3s ease',
        background: scrolled
          ? (theme === 'dark' ? 'rgba(5, 11, 24, 0.92)' : 'rgba(255, 255, 255, 0.92)')
          : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled
          ? (theme === 'dark' ? '1px solid rgba(57, 198, 255, 0.15)' : '1px solid rgba(121, 40, 202, 0.15)')
          : 'none',
        boxShadow: scrolled ? '0 10px 30px rgba(0, 0, 0, 0.3)' : 'none'
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '1.2rem 1.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        {/* Brand Logo */}
        <a
          href="#home"
          style={{
            fontFamily: 'Space Grotesk, sans-serif',
            fontSize: '1.35rem',
            fontWeight: '800',
            letterSpacing: '2px',
            color: 'var(--text-primary)',
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}
        >
          <span style={{ color: 'var(--cosmic-blue)' }}>✦</span> JAGRUTHI
        </a>

        {/* Desktop Nav Links */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1.8rem',
            '@media (maxWidth: 768px)': { display: 'none' }
          }}
          className="desktop-nav"
        >
          {navItems.map(item => {
            const id = item.href.substring(1);
            const isActive = activeSection === id;
            return (
              <a
                key={item.label}
                href={item.href}
                style={{
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontSize: '0.85rem',
                  fontWeight: isActive ? '700' : '600',
                  letterSpacing: '1.5px',
                  color: isActive ? 'var(--cosmic-blue)' : 'var(--text-secondary)',
                  textDecoration: 'none',
                  position: 'relative',
                  padding: '0.3rem 0',
                  transition: 'color 0.25s ease'
                }}
              >
                {item.label}
                {isActive && (
                  <span
                    style={{
                      position: 'absolute',
                      bottom: '-4px',
                      left: 0,
                      width: '100%',
                      height: '2px',
                      background: 'linear-gradient(90deg, var(--cosmic-blue), var(--cosmic-purple))',
                      borderRadius: '2px'
                    }}
                  />
                )}
              </a>
            );
          })}

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            style={{
              background: 'rgba(255, 255, 255, 0.08)',
              border: '1px solid var(--glass-border)',
              borderRadius: '50%',
              width: '38px',
              height: '38px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--cosmic-blue)',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
          >
            {theme === 'dark' ? <FaSun size={16} /> : <FaMoon size={16} />}
          </button>
        </div>

        {/* Mobile Hamburger Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }} className="mobile-controls">
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="mobile-theme-btn"
            style={{
              background: 'rgba(255, 255, 255, 0.08)',
              border: '1px solid var(--glass-border)',
              borderRadius: '50%',
              width: '36px',
              height: '36px',
              display: 'none',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--cosmic-blue)',
              cursor: 'pointer'
            }}
          >
            {theme === 'dark' ? <FaSun size={15} /> : <FaMoon size={15} />}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Mobile Menu"
            className="mobile-hamburger"
            style={{
              background: 'transparent',
              border: 'none',
              color: 'var(--text-primary)',
              fontSize: '1.5rem',
              cursor: 'pointer',
              display: 'none'
            }}
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            background: theme === 'dark' ? 'rgba(5, 11, 24, 0.98)' : 'rgba(245, 247, 255, 0.98)',
            borderBottom: '1px solid var(--glass-border)',
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.2rem'
          }}
        >
          {navItems.map(item => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontSize: '1rem',
                fontWeight: '700',
                letterSpacing: '2px',
                color: activeSection === item.href.substring(1) ? 'var(--cosmic-blue)' : 'var(--text-primary)',
                textDecoration: 'none'
              }}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 868px) {
          .desktop-nav { display: none !important; }
          .mobile-hamburger { display: block !important; }
          .mobile-theme-btn { display: flex !important; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
