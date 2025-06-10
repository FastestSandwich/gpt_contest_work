import React, { useState, useEffect, useRef } from 'react';

const App = () => {
  const [showExplosion, setShowExplosion] = useState(false);
  const canvasRef = useRef(null);
  const animationFrameRef = useRef(null);
  const particlesRef = useRef([]);
  
  // Инициализация canvas
  const initCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    return ctx;
  };
  
  // Создание частиц
  const createParticles = (x, y) => {
    const numParticles = 150;
    particlesRef.current = [];
    
    for (let i = 0; i < numParticles; i++) {
      const angle = Math.random() * 2 * Math.PI;
      const speed = Math.random() * 5 + 3;
      const life = Math.random() * 60 + 30;
      const radius = Math.random() * 3 + 1;
      const hue = Math.random() * 360;
      
      particlesRef.current.push({
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        radius,
        hue,
        life,
        opacity: 1,
        rotation: Math.random() * 2 * Math.PI,
        rotationSpeed: (Math.random() - 0.5) * 0.2,
      });
    }
  };
  
  // Анимация частиц
  const animate = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    ctx.fillStyle = 'rgba(0, 0, 0, 0.15)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    particlesRef.current = particlesRef.current.filter(particle => {
      particle.x += particle.vx;
      particle.y += particle.vy;
      particle.rotation += particle.rotationSpeed;
      particle.life--;
      particle.opacity = particle.life / 60;
      
      ctx.save();
      ctx.translate(particle.x, particle.y);
      ctx.rotate(particle.rotation);
      
      const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, particle.radius);
      gradient.addColorStop(0, `hsla(${particle.hue}, 100%, 70%, ${particle.opacity})`);
      gradient.addColorStop(1, `hsla(${particle.hue}, 100%, 70%, 0)`);
      
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(0, 0, particle.radius * 2, 0, 2 * Math.PI);
      ctx.fill();
      ctx.restore();
      
      return particle.life > 0;
    });
    
    if (particlesRef.current.length > 0) {
      animationFrameRef.current = requestAnimationFrame(animate);
    } else {
      setShowExplosion(false);
    }
  };
  
  // Обработчик изменения размера окна
  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        const canvas = canvasRef.current;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Инициализация canvas при монтировании
  useEffect(() => {
    initCanvas();
  }, []);
  
  // Триггер взрыва
  const triggerExplosion = (e) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    createParticles(x, y);
    setShowExplosion(true);
    animate();
  };
  
  return (
    <div style={{
      position: 'relative',
      width: '100%',
      height: '100vh',
      overflow: 'hidden',
      backgroundColor: '#000000',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      padding: '0 20px'
    }}>
      {/* Canvas для анимации */}
      <canvas 
        ref={canvasRef} 
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
      />
      
      {/* Основной контент */}
      <div style={{
        position: 'relative',
        zIndex: 10,
        textAlign: 'center'
      }}>
        <h1 style={{
          fontSize: '2.5rem',
          fontWeight: 'bold',
          marginBottom: '2rem',
          color: 'transparent',
          backgroundImage: 'linear-gradient(90deg, #6366F1, #A855F7, #EC4899)',
          WebkitBackgroundClip: 'text',
          animation: 'pulse 2s infinite'
        }}>
          Выбрать победителя
        </h1>
        
        <button
          onClick={triggerExplosion}
          style={{
            padding: '1rem 2rem',
            fontSize: '1.2rem',
            fontWeight: 'bold',
            color: 'white',
            background: 'linear-gradient(90deg, #6366F1, #A855F7)',
            borderRadius: '9999px',
            boxShadow: '0 0 15px rgba(168, 85, 247, 0.5)',
            border: 'none',
            cursor: 'pointer',
            transition: 'transform 0.3s, box-shadow 0.3s',
            position: 'relative',
            overflow: 'hidden'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.05)';
            e.currentTarget.style.boxShadow = '0 0 20px rgba(168, 85, 247, 0.7)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.boxShadow = '0 0 15px rgba(168, 85, 247, 0.5)';
          }}
        >
          Выбрать победителя
        </button>
        
        {/* Подзаголовок */}
        <p style={{
          marginTop: '2rem',
          fontSize: '0.875rem',
          color: '#9CA3AF'
        }}>
          Нажмите на кнопку, чтобы запустить эффект взрыва
        </p>
      </div>
      
      {/* Фоновые элементы */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
        <div style={{
          position: 'absolute',
          top: '25%',
          left: '25%',
          width: '16rem',
          height: '16rem',
          background: '#6366F1',
          borderRadius: '9999px',
          mixBlendMode: 'multiply',
          filter: 'blur(120px)',
          opacity: 0.1,
          animation: 'blob 15s infinite'
        }}></div>
        <div style={{
          position: 'absolute',
          top: '33%',
          right: '25%',
          width: '16rem',
          height: '16rem',
          background: '#A855F7',
          borderRadius: '9999px',
          mixBlendMode: 'multiply',
          filter: 'blur(120px)',
          opacity: 0.1,
          animation: 'blob 15s infinite',
          animationDelay: '2s'
        }}></div>
        <div style={{
          position: 'absolute',
          bottom: '25%',
          left: '33%',
          width: '16rem',
          height: '16rem',
          background: '#EC4899',
          borderRadius: '9999px',
          mixBlendMode: 'multiply',
          filter: 'blur(120px)',
          opacity: 0.1,
          animation: 'blob 15s infinite',
          animationDelay: '4s'
        }}></div>
      </div>
      
      {/* Стили для анимаций */}
      <style>
        {`
          @keyframes blob {
            0% { transform: translate(0px, 0px) scale(1); }
            33% { transform: translate(30px, -50px) scale(1.1); }
            66% { transform: translate(-20px, 20px) scale(0.9); }
            100% { transform: translate(0px, 0px) scale(1); }
          }
          
          @keyframes pulse {
            0%, 100% { opacity: 0.4; }
            50% { opacity: 0.8; }
          }
        `}
      </style>
    </div>
  );
};

export default App;
