import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect mobile touch devices
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const onMouseOver = (e) => {
      if (
        e.target.tagName === 'A' ||
        e.target.tagName === 'BUTTON' ||
        e.target.closest('a') ||
        e.target.closest('button') ||
        e.target.classList.contains('interactive')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseover', onMouseOver);

    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', onMouseOver);
    };
  }, []);

  if (isMobile) return null;

  return (
    <>
      {/* Inner Dot */}
      <div
        style={{
          position: 'fixed',
          top: position.y,
          left: position.x,
          width: '8px',
          height: '8px',
          backgroundColor: '#39C6FF',
          borderRadius: '50%',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
          zIndex: 9999,
          boxShadow: '0 0 10px #39C6FF, 0 0 20px #39C6FF',
          transition: 'transform 0.1s ease-out'
        }}
      />
      {/* Outer Glowing Ring */}
      <div
        style={{
          position: 'fixed',
          top: position.y,
          left: position.x,
          width: isHovered ? '42px' : '26px',
          height: isHovered ? '42px' : '26px',
          border: '1.5px solid rgba(155, 92, 255, 0.8)',
          borderRadius: '50%',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
          zIndex: 9998,
          boxShadow: isHovered ? '0 0 15px rgba(255, 79, 216, 0.6)' : 'none',
          backgroundColor: isHovered ? 'rgba(57, 198, 255, 0.08)' : 'transparent',
          transition: 'width 0.25s ease, height 0.25s ease, background-color 0.25s ease, border-color 0.25s ease'
        }}
      />
    </>
  );
};

export default CustomCursor;
