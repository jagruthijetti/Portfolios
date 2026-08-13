import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCode, FaLaptopCode, FaDatabase, FaTools, FaTimes, FaCheckCircle } from 'react-icons/fa';
import portfolioData from '../data/portfolioData';

const Skills = () => {
  const { skills } = portfolioData;
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [hoveredNode, setHoveredNode] = useState(null);

  // Constellation SVG Map Nodes Configuration
  const centerNode = { id: 'center', label: 'JAGRUTHI', cx: 300, cy: 180, r: 24, color: '#39C6FF' };
  
  const categoryNodes = [
    { id: 'prog', label: 'PROGRAMMING', cx: 120, cy: 90, color: '#9B5CFF', skills: skills.programming },
    { id: 'web', label: 'WEB DEV', cx: 480, cy: 90, color: '#39C6FF', skills: skills.web },
    { id: 'data', label: 'DATA / ML', cx: 120, cy: 270, color: '#FF4FD8', skills: skills.dataML },
    { id: 'tools', label: 'TOOLS', cx: 480, cy: 270, color: '#00E5FF', skills: skills.tools }
  ];

  const handleNodeClick = (skillObj, categoryName) => {
    setSelectedSkill({
      name: skillObj.name,
      category: categoryName,
      details: skillObj.details || 'Used across production applications and coursework.',
      level: skillObj.level || 80
    });
  };

  return (
    <section id="skills" className="section-container">
      <div className="section-header">
        <span className="section-number">02 // SKILLS</span>
        <h2 className="section-title">MY CONSTELLATION</h2>
      </div>

      {/* Interactive Constellation SVG Map */}
      <div className="glass-card" style={{ padding: '1.5rem', marginBottom: '3rem', position: 'relative', overflow: 'hidden' }}>
        <h3
          style={{
            textAlign: 'center',
            fontSize: '1.2rem',
            letterSpacing: '2px',
            color: 'var(--cosmic-blue)',
            marginBottom: '1rem',
            fontFamily: 'Space Grotesk, sans-serif'
          }}
        >
          ✦ INTERACTIVE SKILL MAP (CLICK OR HOVER NODES)
        </h3>

        <div style={{ width: '100%', overflowX: 'auto', display: 'flex', justifyContent: 'center' }}>
          <svg viewBox="0 0 600 360" style={{ width: '100%', maxWidth: '680px', height: 'auto', minWidth: '320px' }}>
            <defs>
              <filter id="glowNode" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="5" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Connecting Lines */}
            {categoryNodes.map((cat) => {
              const isHighlighted = hoveredNode === cat.id || hoveredNode === 'center';
              return (
                <line
                  key={cat.id}
                  x1={centerNode.cx}
                  y1={centerNode.cy}
                  x2={cat.cx}
                  y2={cat.cy}
                  stroke={cat.color}
                  strokeWidth={isHighlighted ? '3.5' : '1.8'}
                  strokeDasharray={isHighlighted ? 'none' : '4 4'}
                  opacity={isHighlighted ? 0.95 : 0.45}
                  style={{ transition: 'all 0.3s ease' }}
                />
              );
            })}

            {/* Central Node: JAGRUTHI */}
            <g
              onMouseEnter={() => setHoveredNode('center')}
              onMouseLeave={() => setHoveredNode(null)}
              style={{ cursor: 'pointer' }}
            >
              <circle
                cx={centerNode.cx}
                cy={centerNode.cy}
                r={centerNode.r + 6}
                fill="none"
                stroke="#39C6FF"
                strokeWidth="1.5"
                opacity="0.6"
              />
              <circle
                cx={centerNode.cx}
                cy={centerNode.cy}
                r={centerNode.r}
                fill="url(#centerGrad)"
                filter="url(#glowNode)"
              />
              <text
                x={centerNode.cx}
                y={centerNode.cy + 4}
                fill="#FFFFFF"
                fontSize="11"
                fontWeight="800"
                fontFamily="Space Grotesk, sans-serif"
                textAnchor="middle"
              >
                JAGRUTHI
              </text>
              <defs>
                <linearGradient id="centerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#39C6FF" />
                  <stop offset="100%" stopColor="#9B5CFF" />
                </linearGradient>
              </defs>
            </g>

            {/* Category Nodes & Satellite Nodes */}
            {categoryNodes.map((cat) => {
              const isHovered = hoveredNode === cat.id;
              return (
                <g
                  key={cat.id}
                  onMouseEnter={() => setHoveredNode(cat.id)}
                  onMouseLeave={() => setHoveredNode(null)}
                  style={{ cursor: 'pointer' }}
                >
                  <circle
                    cx={cat.cx}
                    cy={cat.cy}
                    r={isHovered ? 26 : 20}
                    fill={cat.color}
                    opacity={isHovered ? 1 : 0.8}
                    filter="url(#glowNode)"
                    style={{ transition: 'all 0.3s ease' }}
                  />
                  <text
                    x={cat.cx}
                    y={cat.cy + 4}
                    fill="#FFFFFF"
                    fontSize="9"
                    fontWeight="700"
                    fontFamily="Space Grotesk, sans-serif"
                    textAnchor="middle"
                  >
                    {cat.label}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        {/* Selected Skill Detail Popup Card */}
        <AnimatePresence>
          {selectedSkill && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 10 }}
              style={{
                position: 'absolute',
                bottom: '1.5rem',
                left: '50%',
                transform: 'translateX(-50%)',
                width: 'calc(100% - 3rem)',
                maxWidth: '450px',
                background: 'rgba(5, 11, 24, 0.95)',
                border: '1px solid var(--cosmic-blue)',
                boxShadow: '0 10px 30px rgba(57, 198, 255, 0.3)',
                borderRadius: '16px',
                padding: '1.2rem',
                zIndex: 10
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                <span style={{ fontSize: '0.8rem', color: 'var(--cosmic-blue)', fontWeight: '700', letterSpacing: '1px' }}>
                  SKILL DETAIL // {selectedSkill.category}
                </span>
                <button
                  onClick={() => setSelectedSkill(null)}
                  style={{ background: 'none', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer' }}
                >
                  <FaTimes />
                </button>
              </div>
              <h4 style={{ fontSize: '1.3rem', fontWeight: '800', color: '#FFF', marginBottom: '0.4rem' }}>
                {selectedSkill.name}
              </h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>
                {selectedSkill.details}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Responsive Skill Category Cards */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '1.5rem'
        }}
      >
        {/* Programming */}
        <SkillCategoryCard
          title="PROGRAMMING"
          icon={<FaCode style={{ color: '#9B5CFF' }} />}
          skillList={skills.programming}
          categoryName="PROGRAMMING"
          onSkillClick={handleNodeClick}
        />

        {/* Web Development */}
        <SkillCategoryCard
          title="WEB DEVELOPMENT"
          icon={<FaLaptopCode style={{ color: '#39C6FF' }} />}
          skillList={skills.web}
          categoryName="WEB DEVELOPMENT"
          onSkillClick={handleNodeClick}
        />

        {/* Data / ML */}
        <SkillCategoryCard
          title="DATA / MACHINE LEARNING"
          icon={<FaDatabase style={{ color: '#FF4FD8' }} />}
          skillList={skills.dataML}
          categoryName="DATA / MACHINE LEARNING"
          onSkillClick={handleNodeClick}
        />

        {/* Tools */}
        <SkillCategoryCard
          title="TOOLS & ENVIRONMENT"
          icon={<FaTools style={{ color: '#00E5FF' }} />}
          skillList={skills.tools}
          categoryName="TOOLS"
          onSkillClick={handleNodeClick}
        />
      </div>
    </section>
  );
};

const SkillCategoryCard = ({ title, icon, skillList, categoryName, onSkillClick }) => (
  <motion.div whileHover={{ y: -5 }} className="glass-card">
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.2rem' }}>
      <div style={{ fontSize: '1.5rem' }}>{icon}</div>
      <h3 style={{ fontSize: '1.1rem', fontWeight: '700', letterSpacing: '1px', color: 'var(--text-primary)' }}>
        {title}
      </h3>
    </div>

    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
      {skillList.map((item, idx) => (
        <div
          key={idx}
          onClick={() => onSkillClick(item, categoryName)}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0.5rem 0.8rem',
            borderRadius: '8px',
            background: 'rgba(255, 255, 255, 0.04)',
            border: '1px solid rgba(255, 255, 255, 0.06)',
            cursor: 'pointer',
            transition: 'all 0.2s ease'
          }}
          className="skill-item-row"
        >
          <span style={{ fontSize: '0.95rem', fontWeight: '600', color: 'var(--text-primary)' }}>
            {item.name}
          </span>
          <FaCheckCircle style={{ color: 'var(--cosmic-blue)', fontSize: '0.85rem' }} />
        </div>
      ))}
    </div>
  </motion.div>
);

export default Skills;
