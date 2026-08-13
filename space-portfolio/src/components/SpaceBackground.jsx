import React, { useEffect, useRef } from 'react';

const SpaceBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Stars data
    const starCount = Math.min(Math.floor((width * height) / 3000), 200);
    const stars = [];

    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.6 + 0.4,
        alpha: Math.random() * 0.8 + 0.2,
        twinkleSpeed: (Math.random() * 0.02 + 0.005) * (Math.random() < 0.5 ? 1 : -1),
        color: ['#FFFFFF', '#39C6FF', '#9B5CFF', '#FF4FD8'][Math.floor(Math.random() * 4)],
        vx: (Math.random() - 0.5) * 0.05,
        vy: (Math.random() - 0.5) * 0.05
      });
    }

    // Shooting stars data
    const shootingStars = [];
    const createShootingStar = () => {
      if (prefersReducedMotion) return;
      shootingStars.push({
        x: Math.random() * width,
        y: Math.random() * (height * 0.5),
        length: Math.random() * 80 + 40,
        speed: Math.random() * 8 + 4,
        angle: Math.PI / 4, // 45 degree angle
        opacity: 1,
        life: 0,
        maxLife: Math.random() * 30 + 20
      });
    };

    let lastShootingStarTime = Date.now();

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Render Stars
      stars.forEach(star => {
        if (!prefersReducedMotion) {
          star.alpha += star.twinkleSpeed;
          if (star.alpha > 0.95 || star.alpha < 0.15) {
            star.twinkleSpeed = -star.twinkleSpeed;
          }
          star.x += star.vx;
          star.y += star.vy;

          if (star.x < 0) star.x = width;
          if (star.x > width) star.x = 0;
          if (star.y < 0) star.y = height;
          if (star.y > height) star.y = 0;
        }

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = star.color;
        ctx.globalAlpha = star.alpha;
        ctx.shadowBlur = star.radius > 1.2 ? 6 : 0;
        ctx.shadowColor = star.color;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      // Render Shooting Stars
      const now = Date.now();
      if (!prefersReducedMotion && now - lastShootingStarTime > 4000 && Math.random() < 0.3) {
        createShootingStar();
        lastShootingStarTime = now;
      }

      for (let i = shootingStars.length - 1; i >= 0; i--) {
        const s = shootingStars[i];
        s.x += Math.cos(s.angle) * s.speed;
        s.y += Math.sin(s.angle) * s.speed;
        s.life++;
        s.opacity = 1 - s.life / s.maxLife;

        const tailX = s.x - Math.cos(s.angle) * s.length;
        const tailY = s.y - Math.sin(s.angle) * s.length;

        const grad = ctx.createLinearGradient(s.x, s.y, tailX, tailY);
        grad.addColorStop(0, `rgba(57, 198, 255, ${s.opacity})`);
        grad.addColorStop(0.5, `rgba(155, 92, 255, ${s.opacity * 0.5})`);
        grad.addColorStop(1, 'rgba(255, 255, 255, 0)');

        ctx.beginPath();
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(tailX, tailY);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 2;
        ctx.stroke();

        if (s.life >= s.maxLife) {
          shootingStars.splice(i, 1);
        }
      }

      ctx.globalAlpha = 1;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, pointerEvents: 'none' }}>
      <canvas ref={canvasRef} style={{ width: '100%', height: '100%', display: 'block' }} />
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(ellipse at 20% 30%, rgba(48, 16, 92, 0.25) 0%, transparent 60%), radial-gradient(ellipse at 80% 70%, rgba(11, 22, 53, 0.35) 0%, transparent 60%)',
          pointerEvents: 'none'
        }}
      />
    </div>
  );
};

export default SpaceBackground;
