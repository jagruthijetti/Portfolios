import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaInstagram, FaPaperPlane, FaCheckCircle, FaInfoCircle } from 'react-icons/fa';
import portfolioData from '../data/portfolioData';

const Contact = () => {
  const { personal, social } = portfolioData;

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const hasEmail = personal.email && personal.email !== '' && !personal.email.includes('PASTE_');
  const hasPhone = personal.phone && personal.phone !== '' && !personal.phone.includes('PASTE_');
  const hasGithub = social.github && social.github !== '' && !social.github.includes('PASTE_');
  const hasLinkedin = social.linkedin && social.linkedin !== '' && !social.linkedin.includes('PASTE_');
  const hasInstagram = social.instagram && social.instagram !== '' && !social.instagram.includes('PASTE_');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Trigger Mailto pre-filled client as backend-free fallback
    const targetEmail = hasEmail ? personal.email : 'jagruthi@example.com';
    const mailtoUrl = `mailto:${targetEmail}?subject=Space Transmission from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message + '\n\nSender Email: ' + formData.email)}`;
    
    window.location.href = mailtoUrl;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section-container">
      <div className="section-header">
        <span className="section-number">07 // CONTACT</span>
        <h2 className="section-title">ESTABLISH CONNECTION</h2>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.2fr',
          gap: '2.5rem',
          alignItems: 'start'
        }}
        className="contact-grid"
      >
        {/* Left Side: Communication Station Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card"
        >
          <h3
            style={{
              fontSize: '1.5rem',
              fontWeight: '800',
              color: 'var(--text-primary)',
              marginBottom: '1.2rem'
            }}
          >
            COMMUNICATION STATION
          </h3>

          <p
            style={{
              color: 'var(--text-secondary)',
              fontSize: '1rem',
              lineHeight: '1.7',
              marginBottom: '2rem'
            }}
          >
            Ready to collaborate on new space projects, software development, internship opportunities, or algorithmic challenges? Transmit a message directly!
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', marginBottom: '2rem' }}>
            <ContactInfoRow
              icon={<FaEnvelope style={{ color: 'var(--cosmic-blue)' }} />}
              label="EMAIL TRANSMISSION"
              value={hasEmail ? personal.email : 'jagruthi@example.com (Editable)'}
            />
            <ContactInfoRow
              icon={<FaPhone style={{ color: 'var(--cosmic-purple)' }} />}
              label="PHONE / SIGNAL"
              value={hasPhone ? personal.phone : '+91 XXXXX XXXXX (Editable)'}
            />
            <ContactInfoRow
              icon={<FaMapMarkerAlt style={{ color: 'var(--cosmic-pink)' }} />}
              label="LOCATION ORBIT"
              value={personal.location}
            />
          </div>

          {/* Social Frequency Links */}
          <h4
            style={{
              fontSize: '0.9rem',
              fontFamily: 'Space Grotesk, sans-serif',
              fontWeight: '700',
              letterSpacing: '1px',
              color: 'var(--text-primary)',
              marginBottom: '1rem'
            }}
          >
            CONNECT ON SOCIAL FREQUENCIES
          </h4>

          <div style={{ display: 'flex', gap: '1rem' }}>
            {hasGithub && (
              <SocialIconLink href={social.github} icon={<FaGithub />} label="GitHub" />
            )}
            {hasLinkedin && (
              <SocialIconLink href={social.linkedin} icon={<FaLinkedin />} label="LinkedIn" />
            )}
            {hasInstagram && (
              <SocialIconLink href={social.instagram} icon={<FaInstagram />} label="Instagram" />
            )}
          </div>
        </motion.div>

        {/* Right Side: Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card"
        >
          <h3
            style={{
              fontSize: '1.5rem',
              fontWeight: '800',
              color: 'var(--text-primary)',
              marginBottom: '1.5rem'
            }}
          >
            SEND TRANSMISSION
          </h3>

          {submitted ? (
            <div
              style={{
                padding: '2rem',
                borderRadius: '16px',
                background: 'rgba(57, 198, 255, 0.1)',
                border: '1px solid var(--cosmic-blue)',
                textAlign: 'center'
              }}
            >
              <FaCheckCircle size={48} color="var(--cosmic-blue)" style={{ marginBottom: '1rem' }} />
              <h4 style={{ fontSize: '1.3rem', fontWeight: '800', color: '#FFF', marginBottom: '0.5rem' }}>
                TRANSMISSION LAUNCHED!
              </h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                Your default email client opened with the pre-filled message. To enable automatic background submission without opening an email app, connect your Formspree or EmailJS endpoint in <code>Contact.jsx</code>.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="btn-cosmic-secondary"
                style={{ marginTop: '1.5rem' }}
              >
                Send Another Transmission
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '700', letterSpacing: '1px', color: 'var(--text-secondary)', marginBottom: '0.4rem', fontFamily: 'Space Grotesk, sans-serif' }}>
                  YOUR NAME
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter your name..."
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.85rem 1rem',
                    borderRadius: '10px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid var(--glass-border)',
                    color: 'var(--text-primary)',
                    fontSize: '0.95rem',
                    outline: 'none'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '700', letterSpacing: '1px', color: 'var(--text-secondary)', marginBottom: '0.4rem', fontFamily: 'Space Grotesk, sans-serif' }}>
                  YOUR EMAIL FREQUENCY
                </label>
                <input
                  type="email"
                  required
                  placeholder="Enter your email address..."
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.85rem 1rem',
                    borderRadius: '10px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid var(--glass-border)',
                    color: 'var(--text-primary)',
                    fontSize: '0.95rem',
                    outline: 'none'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '700', letterSpacing: '1px', color: 'var(--text-secondary)', marginBottom: '0.4rem', fontFamily: 'Space Grotesk, sans-serif' }}>
                  TRANSMISSION MESSAGE
                </label>
                <textarea
                  rows="4"
                  required
                  placeholder="Type your transmission message here..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '0.85rem 1rem',
                    borderRadius: '10px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid var(--glass-border)',
                    color: 'var(--text-primary)',
                    fontSize: '0.95rem',
                    outline: 'none',
                    resize: 'vertical'
                  }}
                />
              </div>

              <button type="submit" className="btn-cosmic-primary" style={{ width: '100%', justifyContent: 'center', marginTop: '0.5rem' }}>
                <FaPaperPlane /> SEND TRANSMISSION
              </button>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>
                <FaInfoCircle color="var(--cosmic-blue)" />
                <span>Opens default mail client using mailto fallback. Connect Formspree/EmailJS if desired.</span>
              </div>
            </form>
          )}
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 868px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};

const ContactInfoRow = ({ icon, label, value }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
    <div
      style={{
        width: '42px',
        height: '42px',
        borderRadius: '10px',
        background: 'rgba(255, 255, 255, 0.05)',
        border: '1px solid var(--glass-border)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '1.2rem'
      }}
    >
      {icon}
    </div>
    <div>
      <span style={{ display: 'block', fontSize: '0.75rem', fontWeight: '700', letterSpacing: '1px', color: 'var(--text-secondary)', fontFamily: 'Space Grotesk, sans-serif' }}>
        {label}
      </span>
      <span style={{ fontSize: '0.95rem', fontWeight: '600', color: 'var(--text-primary)' }}>
        {value}
      </span>
    </div>
  </div>
);

const SocialIconLink = ({ href, icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    style={{
      width: '42px',
      height: '42px',
      borderRadius: '50%',
      background: 'rgba(255, 255, 255, 0.06)',
      border: '1px solid var(--glass-border)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--cosmic-blue)',
      fontSize: '1.2rem',
      transition: 'all 0.3s ease'
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = 'translateY(-3px)';
      e.currentTarget.style.borderColor = 'var(--cosmic-blue)';
      e.currentTarget.style.boxShadow = '0 0 15px rgba(57, 198, 255, 0.4)';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.borderColor = 'var(--glass-border)';
      e.currentTarget.style.boxShadow = 'none';
    }}
  >
    {icon}
  </a>
);

export default Contact;
