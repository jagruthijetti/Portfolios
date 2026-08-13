import React from 'react';
import { FaRocket, FaGlobe, FaLaptopCode, FaArrowRight } from 'react-icons/fa';

// EDITABLE SPACE PORTFOLIO URL
// Replace this with your actual deployed Vercel URL once space-portfolio is deployed!
const SPACE_PORTFOLIO_URL = "https://YOUR-SPACE-PORTFOLIO.vercel.app";

function App() {
  return (
    <div className="container">
      <header>
        <div className="logo-badge">PORTFOLIO HUB</div>
        <h1>Jagruthi Jetti</h1>
        <p className="subtitle">
          Welcome to my main portfolio hub. Select an experience below to explore my projects, technical skills, and software development journey.
        </p>
      </header>

      <main className="portfolio-grid">
        {/* SPACE THEMED PORTFOLIO CARD */}
        <a 
          href={SPACE_PORTFOLIO_URL} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="portfolio-card space-theme"
          id="space-portfolio-link"
        >
          <div>
            <div className="icon-wrapper">
              <FaRocket />
            </div>
            <h2 className="card-title">Space Portfolio</h2>
            <p className="card-desc">
              An immersive, cosmic-themed interactive portfolio experience taking you through my digital universe, projects, constellations of skills, and orbital journey.
            </p>
          </div>
          <div className="card-tag">
            Launch Space Mission <span><FaArrowRight /></span>
          </div>
        </a>

        {/* WEB CLASSIC PORTFOLIO CARD PLACEHOLDER */}
        <div className="portfolio-card">
          <div>
            <div className="icon-wrapper" style={{ color: '#38ef7d' }}>
              <FaLaptopCode />
            </div>
            <h2 className="card-title">Classic Web Portfolio</h2>
            <p className="card-desc">
              A minimalist, clean single-page web portfolio displaying standard engineering resumes, repository highlights, and project documentation.
            </p>
          </div>
          <div className="card-tag" style={{ color: '#38ef7d' }}>
            Explore Web Version <span><FaArrowRight /></span>
          </div>
        </div>

        {/* INTERACTIVE PROJECTS HUBS PLACEHOLDER */}
        <div className="portfolio-card">
          <div>
            <div className="icon-wrapper" style={{ color: '#9B5CFF' }}>
              <FaGlobe />
            </div>
            <h2 className="card-title">Project Directory</h2>
            <p className="card-desc">
              Direct access to live demonstrations, GitHub repositories, micro-services, machine learning notebooks, and deployment endpoints.
            </p>
          </div>
          <div className="card-tag" style={{ color: '#9B5CFF' }}>
            View Repository List <span><FaArrowRight /></span>
          </div>
        </div>
      </main>

      <footer>
        <p>© {new Date().getFullYear()} Jagruthi Jetti. Built with React & Vite.</p>
      </footer>
    </div>
  );
}

export default App;
