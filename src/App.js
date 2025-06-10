import React, { useState, useEffect, useRef } from 'react';

const App = () => {
  const [items, setItems] = useState([
    { id: 1, prompt: "Опиши профессию системного администратора в стиле фильма Форрест Гамп одним предложением", answer: "Системный администратор — это как коробка шоколадных конфет, никогда не знаешь, с каким вирусом или сбоем придется столкнуться, но он всегда спокойно и упорно чинит всё, чтобы сеть работала как часы.", justification: "Промт демонстрирует нестандартное мышление, задавая оригинальный художественный стиль, который раскрывает профессию с неожиданной стороны. Ответ выполнен в духе «фильма Форрест Гамп одним предложением», грамотно обыгрывая особенности языка и поведения персонажа. Идеальное сочетание иронии и профессионализма делает ответ особенно удачным." },
    { id: 2, prompt: "Опиши профессию специалист по товарной политике в стиле ужастиков одним предложением", answer: "Специалист по товарной политике — это безумный кукловод, роковым взглядом манипулирующий ассортиментом и ценами, чтобы затянуть покупателей в зловещую ловушку маркетинговых интриг и вечного дефицита.", justification: "Промт демонстрирует нестандартное мышление, задавая оригинальный художественный стиль, который раскрывает профессию с неожиданной стороны. Ответ выполнен в духе «ужастиков одним предложением», грамотно обыгрывая особенности языка и поведения персонажа. Такое описание точно привлечёт внимание и легко запомнится." },
    { id: 3, prompt: "Опиши профессию Старший операционный менеджер в стиле вселенной одним предложением", answer: "Старший операционный менеджер — это центральная сила, которая, словно гравитация, удерживает вместе бесчисленные элементы бизнеса, направляя их движение в гармоничный и мощный космос успеха.", justification: "Использование узнаваемого культурного контекста делает промт выразительным и хорошо направляет на творческое переосмысление профессии. Ответ выполнен в духе «вселенной одним предложением», грамотно обыгрывая особенности языка и поведения персонажа. Эффектность формулировки усиливает интерес к самой профессии." },
    { id: 4, prompt: "Опиши профессию заместителя информационно-справочной службы аптек в образе Тимати одним предложением", answer: "Заместитель информационно-справочной службы аптек — это словно Тимати в мире фармацевтики: всегда на стиле, чётко знает, как раскачать информационный поток, и быстро решает любые вопросы, оставаясь на пике популярности внутри коллектива.", justification: "Промт демонстрирует нестандартное мышление, задавая оригинальный художественный стиль, который раскрывает профессию с неожиданной стороны. Стилистика «Тимати одним предложением» выдержана блестяще: читается сразу и вызывает живую ассоциацию. Идеальное сочетание иронии и профессионализма делает ответ особенно удачным." },
    { id: 5, prompt: "опиши должность специалиста по охране труда в сказочном стиле", answer: "В волшебном королевстве Специалист по Охране Труда был добрым стражем безопасности, который с помощью магических правил и заботливых чар оберегал всех жителей от бед и несчастий, превращая труд в радость и гармонию.", justification: "Промт фокусируется на профессии напрямую, что открывает широкие возможности для интерпретации и художественного подхода. Описание подано живо и выразительно, не теряя при этом связи с сутью профессии. Яркое, необычное выражение позволяет по-новому взглянуть на привычную роль." },
    { id: 6, prompt: "Опиши профессию веб-аналитик в стиле персонажа \"Тимон и Пумба\" одним предложением", answer: "Веб-аналитик — это внимательный сурикат, который зорко следит за данными сайта и мобильного приложения, чтобы помочь своей цифровой стае стать самой успешной и привлекательной в интернете.", justification: "Формулировка промта задаёт чёткий стилистический ориентир, стимулируя нестандартный подход к описанию. Автору удалось вжиться в образ «персонажа \"Тимон и Пумба\" одним предложением» и передать его через язык описания профессии. Такое описание точно привлечёт внимание и легко запомнится." },
    { id: 7, prompt: "Опиши профессию провизор в стиле танос одним предложением", answer: "Провизор, как Танос фармацевтики, стремится собрать все знания о лекарствах, чтобы контролировать здоровье человечества и обеспечить его баланс.", justification: "Промт демонстрирует нестандартное мышление, задавая оригинальный художественный стиль, который раскрывает профессию с неожиданной стороны. Стилистика «танос одним предложением» выдержана блестяще: читается сразу и вызывает живую ассоциацию. Такое описание точно привлечёт внимание и легко запомнится." },
    { id: 8, prompt: "Опиши профессию менеджера по закупкам лекарственных препаратов в стиле превью к телепередаче пусть говорят одним предложением", answer: "Сегодня в студии — менеджер по закупкам лекарственных препаратов, человек, который решает, какие лекарства попадут в аптеки и больницы, и кто контролирует баланс между здоровьем миллионов и прибыльностью фармацевтических гигантов — не пропустите!", justification: "Использование узнаваемого культурного контекста делает промт выразительным и хорошо направляет на творческое переосмысление профессии. Ответ точно воспроизводит стиль «превью к телепередаче пусть говорят одним предложением» — как по интонации, так и по характерной лексике. Эффектность формулировки усиливает интерес к самой профессии." },
    { id: 9, prompt: "Опиши с юмором должность оператора по бонусной программе и техническим вопросам одним предложением в стиле детективов Конана Дойла.", answer: "Оператор по бонусной программе и техническим вопросам — это некий незаметный, но хитроумный сыщик цифрового мира, который, словно Шерлок с лупой, разгадывает загадки сбившихся бонусов и техподдержки, добывая улики в виде кода и кнопок, а когда система глючит, он в мгновение ока находит уязвимое место, раскрывая дело и возвращая порядок в виртуальный хаос, словно истинный мастер своего дела, который никогда не оставляет клиента в беде и всегда готов выйти на след.", justification: "Формулировка промта задаёт чёткий стилистический ориентир, стимулируя нестандартный подход к описанию. Ответ точно воспроизводит стиль «детективов Конана Дойла.» — как по интонации, так и по характерной лексике. Идеальное сочетание иронии и профессионализма делает ответ особенно удачным." },
    { id: 10, prompt: "Опиши профессию менеджер по подбору персонала в стиле молчание ягнят одним предложением", answer: "Менеджер по подбору персонала — это искусный охотник за душами, который сканирует тьму резюме, проникает в глубины человеческих умов и ловко выбирает тех, кто идеально подходит, словно хищник в ночи, без малейшей ошибки.", justification: "Выбранный стиль в промте провоцирует на креативную подачу и позволяет выйти за рамки формального объяснения профессии. Автору удалось вжиться в образ «молчание ягнят одним предложением» и передать его через язык описания профессии. Яркое, необычное выражение позволяет по-новому взглянуть на привычную роль." },
  ]);
  
  const [selectedItem, setSelectedItem] = useState(null);
  const [spinning, setSpinning] = useState(false);
  const [showButton, setShowButton] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [speed, setSpeed] = useState(0);
  const [animationId, setAnimationId] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [showFireworks, setShowFireworks] = useState(false);
  const scrollContainerRef = useRef(null);
  const itemWidthRef = useRef(0);
  const itemRefs = useRef([]);
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const fireworksTimeoutRef = useRef(null);
  const resultTimeoutRef = useRef(null);
  
  // Запуск прокрутки
  const startScrolling = () => {
    if (spinning || items.length === 0) return;
    
    setSpinning(true);
    setSelectedItem(null);
    setSpeed(15); // Начальная скорость
    
    // Небольшая задержка перед скрытием кнопки для визуального эффекта
    setTimeout(() => setShowButton(false), 200);
    
    const animate = () => {
      const newSpeed = speed * 0.95; // Замедление
      const newScroll = scrollPosition + newSpeed;
      
      setScrollPosition(newScroll);
      setSpeed(newSpeed);
      
      if (newSpeed > 0.5) {
        setAnimationId(requestAnimationFrame(animate));
      } else {
        stopScrolling(newScroll);
      }
    };
    
    animate();
  };
  
  // Остановка прокрутки
  const stopScrolling = (finalScroll) => {
    cancelAnimationFrame(animationId);
    setSpinning(false);
    
    // Найдем ближайший элемент
    const itemWidth = itemWidthRef.current + 20; // 20px margin
    const selectedIndex = Math.round(finalScroll / itemWidth) % items.length;
    
    setSelectedItem(items[selectedIndex]);
    
    // Показываем результат с анимацией
    resultTimeoutRef.current = setTimeout(() => {
      setShowResult(true);
      // Запускаем салют после появления плашки
      setTimeout(() => {
        launchFireworks();
      }, 500);
    }, 500);
  };
  
  // Создание частиц фейерверка
  const createFireworksParticles = (x, y) => {
    const numParticles = 150;
    particlesRef.current = [];
    
    for (let i = 0; i < numParticles; i++) {
      const angle = Math.random() * 2 * Math.PI;
      const speed = Math.random() * 5 + 3;
      const life = Math.random() * 60 + 30;
      const radius = Math.random() * 3 + 1;
      const hue = Math.floor(Math.random() * 60) * 6; // Неоновые оттенки (синий, зеленый, фиолетовый)
      
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
        rotationSpeed: (Math.random() - 0.5) * 0.2
      });
    }
  };
  
  // Анимация фейерверка
  const animateFireworks = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    
    ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
    ctx.fillRect(0, 0, width, height);
    
    particlesRef.current = particlesRef.current.filter(particle => {
      particle.x += particle.vx;
      particle.y += particle.vy;
      particle.life--;
      particle.opacity = particle.life / 60;
      
      ctx.save();
      ctx.translate(particle.x, particle.y);
      ctx.rotate(particle.rotation);
      
      const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, particle.radius * 2);
      gradient.addColorStop(0, `hsla(${particle.hue}, 100%, 70%, ${particle.opacity})`);
      gradient.addColorStop(1, `hsla(${particle.hue}, 100%, 70%, 0)`);
      
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(0, 0, particle.radius * 2, 0, 2 * Math.PI);
      ctx.fill();
      ctx.restore();
      
      particle.rotation += particle.rotationSpeed;
      
      return particle.life > 0;
    });
    
    if (particlesRef.current.length > 0) {
      requestAnimationFrame(animateFireworks);
    }
  };
  
  // Запуск фейерверка
  const launchFireworks = () => {
    setShowFireworks(true);
    
    // Запускаем несколько фейерверков в случайных местах
    const fireworkPositions = [
      { x: window.innerWidth * 0.2, y: window.innerHeight * 0.3 },
      { x: window.innerWidth * 0.8, y: window.innerHeight * 0.4 },
      { x: window.innerWidth * 0.5, y: window.innerHeight * 0.2 },
      { x: window.innerWidth * 0.3, y: window.innerHeight * 0.7 },
      { x: window.innerWidth * 0.7, y: window.innerHeight * 0.6 }
    ];
    
    // Создаем несколько фейерверков с интервалом
    let fireworkIndex = 0;
    const interval = setInterval(() => {
      if (fireworkIndex >= fireworkPositions.length) {
        clearInterval(interval);
        return;
      }
      
      createFireworksParticles(
        fireworkPositions[fireworkIndex].x,
        fireworkPositions[fireworkIndex].y
      );
      animateFireworks();
      fireworkIndex++;
    }, 800);
    
    // Останавливаем через 10 секунд
    fireworksTimeoutRef.current = setTimeout(() => {
      setShowFireworks(false);
      particlesRef.current = [];
      clearInterval(interval);
    }, 10000);
  };
  
  // Инициализация canvas
  const initCanvas = () => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    return canvas.getContext('2d');
  };
  
  // Измерение ширины элемента
  useEffect(() => {
    if (itemRefs.current[0]) {
      itemWidthRef.current = itemRefs.current[0].offsetWidth;
    }
  }, [items]);
  
  // Обработчик изменения размера окна
  useEffect(() => {
    const handleResize = () => {
      if (itemRefs.current[0]) {
        itemWidthRef.current = itemRefs.current[0].offsetWidth;
      }
      initCanvas();
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Инициализация canvas при монтировании
  useEffect(() => {
    initCanvas();
  }, []);
  
  // Очистка таймеров при размонтировании
  useEffect(() => {
    return () => {
      clearTimeout(resultTimeoutRef.current);
      clearTimeout(fireworksTimeoutRef.current);
    };
  }, []);
  
  // Очистка анимации при размонтировании
  useEffect(() => {
    return () => {
      if (animationId) cancelAnimationFrame(animationId);
    };
  }, [animationId]);
  
  return (
    <div style={{
      position: 'relative',
      width: '100%',
      height: '100vh',
      backgroundColor: '#0a0a0a',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
      overflow: 'hidden'
    }}>
      {/* Заголовок */}
      <h1 style={{
        fontSize: '2rem',
        fontWeight: 'bold',
        marginBottom: '2rem',
        textAlign: 'center',
        background: 'linear-gradient(90deg, #00f2ff, #00ff87, #d400ff)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        animation: 'pulse 2s infinite'
      }}>
        Выберите победителя
      </h1>
      
      {/* Контейнер для прокрутки */}
      <div style={{
        width: '90%',
        maxWidth: '800px',
        height: '100px',
        overflow: 'hidden',
        position: 'relative',
        marginBottom: '2rem'
      }}>
        {/* Линия прокрутки */}
        <div 
          style={{
            display: 'flex',
            transform: `translateX(-${scrollPosition}px)`,
            transition: spinning ? 'transform 0.05s linear' : 'transform 0.5s ease-out',
            position: 'absolute',
            whiteSpace: 'nowrap'
          }}
        >
          {/* Дублируем элементы для бесконечного скролла */}
          {[...items, ...items].map((item, index) => (
            <div 
              key={`${item.id}-${index}`}
              ref={(el) => itemRefs.current[index] = el}
              style={{
                width: '200px',
                margin: '0 10px',
                padding: '15px',
                backgroundColor: selectedItem?.id === item.id ? '#00f2ff' : 'rgba(255, 255, 255, 0.1)',
                border: selectedItem?.id === item.id ? '2px solid #00ff87' : '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '10px',
                boxShadow: selectedItem?.id === item.id ? '0 0 15px rgba(0, 255, 135, 0.5)' : 'none',
                textAlign: 'center',
                fontSize: '0.85rem',
                transition: 'all 0.3s ease',
                flexShrink: 0,
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                textOverflow: 'ellipsis',
                color: selectedItem?.id === item.id ? '#000' : '#fff'
              }}
              title={item.prompt} // Подсказка при наведении
            >
              {item.prompt}
            </div>
          ))}
        </div>
        
        {/* Эффект затемнения по краям */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100px',
          height: '100%',
          background: 'linear-gradient(to right, #0a0a0a, transparent)',
          pointerEvents: 'none',
          zIndex: 1
        }}></div>
        <div style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '100px',
          height: '100%',
          background: 'linear-gradient(to left, #0a0a0a, transparent)',
          pointerEvents: 'none',
          zIndex: 1
        }}></div>
      </div>
      
      {/* Кнопка */}
      {showButton && (
        <button
          onClick={startScrolling}
          disabled={spinning}
          style={{
            padding: '15px 30px',
            fontSize: '1.2rem',
            fontWeight: 'bold',
            color: 'white',
            background: 'linear-gradient(90deg, #00f2ff, #d400ff)',
            borderRadius: '50px',
            boxShadow: spinning ? '0 0 15px rgba(0, 242, 255, 0.5)' : '0 0 15px rgba(0, 242, 255, 0.3)',
            border: 'none',
            cursor: spinning ? 'not-allowed' : 'pointer',
            transition: 'all 0.3s ease',
            position: 'relative',
            overflow: 'hidden',
            zIndex: 10
          }}
          onMouseEnter={(e) => {
            if (!spinning) {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 242, 255, 0.7)';
            }
          }}
          onMouseLeave={(e) => {
            if (!spinning) {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 0 15px rgba(0, 242, 255, 0.5)';
            }
          }}
        >
          {spinning ? 'Вращается...' : 'Выбрать победителя'}
        </button>
      )}
      
      {/* Результат */}
      {showResult && selectedItem && (
        <div style={{
          width: '90%',
          maxWidth: '600px',
          padding: '20px',
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          borderRadius: '10px',
          boxShadow: '0 0 15px rgba(0, 242, 255, 0.5)',
          textAlign: 'center',
          animation: 'fadeIn 1s ease-in-out',
          marginBottom: '2rem',
          position: 'relative',
          zIndex: 11,
          backdropFilter: 'blur(5px)'
        }}>
          <h3 style={{
            fontSize: '1.2rem',
            fontWeight: 'bold',
            marginBottom: '10px',
            color: '#00f2ff',
            animation: 'neonGlow 1.5s infinite alternate'
          }}>
            Победитель:
          </h3>
          <p style={{
            fontStyle: 'italic',
            marginBottom: '10px',
            color: '#00ff87',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap'
          }}>{selectedItem.prompt}</p>
          <p style={{
            color: '#d400ff',
            fontSize: '0.9rem',
            marginTop: '15px'
          }}>{selectedItem.answer}</p>
          <p style={{
            fontSize: '0.85rem',
            color: '#aaaaaa',
            marginTop: '15px'
          }}>{selectedItem.justification}</p>
        </div>
      )}
      
      {/* Canvas для фейерверка */}
      <canvas 
        ref={canvasRef} 
        style={{ 
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          zIndex: 9
        }}
      />
      
      {/* Стили для анимаций */}
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.8; }
          50% { opacity: 1; }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes neonGlow {
          from {
            text-shadow: 0 0 5px #00f2ff, 0 0 10px #00f2ff, 0 0 20px #00f2ff;
          }
          to {
            text-shadow: 0 0 10px #00f2ff, 0 0 20px #00f2ff, 0 0 30px #00f2ff;
          }
        }
      `}</style>
    </div>
  );
};

export default App;
