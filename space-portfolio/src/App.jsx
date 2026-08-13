import React, { useState, useEffect } from 'react';
import SpaceBackground from './components/SpaceBackground';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import ScrollProgress from './components/ScrollProgress';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('space_portfolio_theme') || 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('space_portfolio_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      {/* Dynamic Animated Space Background */}
      <SpaceBackground />

      {/* Desktop Custom Glowing Cursor */}
      <CustomCursor />

      {/* Glassmorphic Navbar */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      {/* Vertical Cosmic Progress Indicator */}
      <ScrollProgress />

      {/* Portfolio Content Sections */}
      <main style={{ position: 'relative', zIndex: 1 }}>
        <Hero />
        <About />
        <Skills />
        <Education />
        <Projects />
        <Certifications />
        <Resume />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
