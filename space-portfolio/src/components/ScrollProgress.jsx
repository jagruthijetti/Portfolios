import React, { useState, useEffect } from 'react';

const sections = [
  { id: 'home', label: 'HOME' },
  { id: 'about', label: 'ABOUT' },
  { id: 'skills', label: 'SKILLS' },
  { id: 'education', label: 'EDUCATION' },
  { id: 'projects', label: 'PROJECTS' },
  { id: 'certifications', label: 'CERTIFICATIONS' },
  { id: 'contact', label: 'CONTACT' }
];

const ScrollProgress = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 250;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className="scroll-progress-container"
      style={{
        position: 'fixed',
        right: '25px',
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 900,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        gap: '14px'
      }}
    >
      {sections.map(sec => {
        const isActive = activeSection === sec.id;
        return (
          <a
            key={sec.id}
            href={`#${sec.id}`}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              textDecoration: 'none',
              group: 'scroll-node'
            }}
          >
            <span
              className="scroll-label"
              style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontSize: '0.7rem',
                fontWeight: '700',
                letterSpacing: '1px',
                color: isActive ? 'var(--cosmic-blue)' : 'var(--text-secondary)',
                opacity: isActive ? 1 : 0,
                transition: 'all 0.3s ease',
                pointerEvents: 'none'
              }}
            >
              {sec.label}
            </span>
            <div
              style={{
                width: isActive ? '12px' : '8px',
                height: isActive ? '12px' : '8px',
                borderRadius: '50%',
                backgroundColor: isActive ? 'var(--cosmic-blue)' : 'rgba(255, 255, 255, 0.25)',
                boxShadow: isActive ? '0 0 12px var(--cosmic-blue), 0 0 20px var(--cosmic-purple)' : 'none',
                transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                border: isActive ? '2px solid #ffffff' : 'none'
              }}
            />
          </a>
        );
      })}

      <style>{`
        @media (max-width: 1024px) {
          .scroll-progress-container { display: none !important; }
        }
      `}</style>
    </div>
  );
};

export default ScrollProgress;
