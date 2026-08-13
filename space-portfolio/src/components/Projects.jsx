import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaFolderOpen, FaGlobe } from 'react-icons/fa';
import portfolioData from '../data/portfolioData';
import ProjectModal from './ProjectModal';

const filterCategories = ['ALL', 'WEB', 'AI / ML', 'DATA', 'JAVA', 'OTHER'];

const Projects = () => {
  const { projects } = portfolioData;
  const [activeFilter, setActiveFilter] = useState('ALL');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = projects.filter((p) => {
    if (activeFilter === 'ALL') return true;
    return p.category.toUpperCase().includes(activeFilter.replace(' / ', ''));
  });

  return (
    <section id="projects" className="section-container">
      <div className="section-header">
        <span className="section-number">04 // PROJECTS</span>
        <h2 className="section-title">PROJECT GALAXY</h2>
      </div>

      {/* Filter Category Tabs */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '0.75rem',
          marginBottom: '3rem'
        }}
      >
        {filterCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            style={{
              padding: '0.6rem 1.4rem',
              borderRadius: '50px',
              border: activeFilter === cat ? '1px solid var(--cosmic-blue)' : '1px solid var(--glass-border)',
              background: activeFilter === cat ? 'rgba(57, 198, 255, 0.2)' : 'rgba(255, 255, 255, 0.04)',
              color: activeFilter === cat ? 'var(--cosmic-blue)' : 'var(--text-secondary)',
              fontFamily: 'Space Grotesk, sans-serif',
              fontWeight: '700',
              fontSize: '0.85rem',
              letterSpacing: '1px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: activeFilter === cat ? '0 0 15px rgba(57, 198, 255, 0.3)' : 'none'
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Galaxy Grid */}
      <motion.div
        layout
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '2rem'
        }}
      >
        <AnimatePresence>
          {filteredProjects.map((project) => {
            const hasGithub = project.github && project.github !== '' && !project.github.includes('PASTE_');
            const hasLive = project.live && project.live !== '' && !project.live.includes('PASTE_');

            return (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={project.id || project.title}
                className="glass-card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  cursor: 'pointer',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onClick={() => setSelectedProject(project)}
              >
                {/* Planet Header Icon */}
                <div>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '1.2rem'
                    }}
                  >
                    {/* SVG Mini Planet Graphic */}
                    <div
                      style={{
                        width: '46px',
                        height: '46px',
                        borderRadius: '50%',
                        background: `radial-gradient(circle at 30% 30%, ${project.planetColor || '#39C6FF'}, #050B18)`,
                        boxShadow: `0 0 15px ${project.planetColor || '#39C6FF'}80`,
                        position: 'relative'
                      }}
                    />
                    <span
                      style={{
                        fontSize: '0.75rem',
                        fontWeight: '700',
                        color: 'var(--cosmic-blue)',
                        letterSpacing: '1px',
                        padding: '0.25rem 0.75rem',
                        borderRadius: '20px',
                        background: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid var(--glass-border)'
                      }}
                    >
                      {project.category}
                    </span>
                  </div>

                  <h3
                    style={{
                      fontSize: '1.4rem',
                      fontWeight: '800',
                      color: 'var(--text-primary)',
                      marginBottom: '0.6rem'
                    }}
                  >
                    {project.title}
                  </h3>

                  <p
                    style={{
                      color: 'var(--text-secondary)',
                      fontSize: '0.95rem',
                      lineHeight: '1.6',
                      marginBottom: '1.5rem'
                    }}
                  >
                    {project.shortDesc}
                  </p>
                </div>

                {/* Tech Chips & Actions */}
                <div>
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '0.5rem',
                      marginBottom: '1.5rem'
                    }}
                  >
                    {project.technologies.slice(0, 4).map((tech, idx) => (
                      <span
                        key={idx}
                        style={{
                          fontSize: '0.75rem',
                          color: 'var(--text-secondary)',
                          background: 'rgba(255, 255, 255, 0.05)',
                          padding: '0.2rem 0.6rem',
                          borderRadius: '6px'
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Card Bottom Links */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem',
                      borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                      paddingTop: '1rem'
                    }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    {hasGithub && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', transition: 'color 0.2s' }}
                        aria-label="GitHub Repository"
                      >
                        <FaGithub />
                      </a>
                    )}
                    {hasLive && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: 'var(--cosmic-blue)', fontSize: '1.1rem', transition: 'color 0.2s' }}
                        aria-label="Live Demo"
                      >
                        <FaExternalLinkAlt />
                      </a>
                    )}
                    <span
                      onClick={() => setSelectedProject(project)}
                      style={{
                        marginLeft: 'auto',
                        fontSize: '0.8rem',
                        fontWeight: '700',
                        color: 'var(--cosmic-blue)',
                        cursor: 'pointer'
                      }}
                    >
                      VIEW DETAILS →
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>

      {/* Detail Modal Render */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
};

export default Projects;
