import React, { useState, useRef, useEffect } from 'react';

const App = () => {
  const [items, setItems] = useState([
    { id: 1, prompt: "Опиши профессию системного администратора в стиле фильма Форрест Гамп одним предложением", answer: "Системный администратор — это как коробка шоколадных конфет, никогда не знаешь, с каким вирусом или сбоем придется столкнуться, но он всегда спокойно и упорно чинит всё, чтобы сеть работала как часы." },
    { id: 2, prompt: "Опиши профессию специалист по товарной политике в стиле ужастиков одним предложением", answer: "Специалист по товарной политике — это безумный кукловод, роковым взглядом манипулирующий ассортиментом и ценами, чтобы затянуть покупателей в зловещую ловушку маркетинговых интриг и вечного дефицита." },
    { id: 3, prompt: "Опиши профессию Старший операционный менеджер в стиле вселенной одним предложением", answer: "Старший операционный менеджер — это центральная сила, которая, словно гравитация, удерживает вместе бесчисленные элементы бизнеса, направляя их движение в гармоничный и мощный космос успеха." },
    { id: 4, prompt: "Опиши профессию заместителя информационно-справочной службы аптек в образе Тимати одним предложением", answer: "Заместитель информационно-справочной службы аптек — это словно Тимати в мире фармацевтики: всегда на стиле, чётко знает, как раскачать информационный поток, и быстро решает любые вопросы, оставаясь на пике популярности внутри коллектива." },
    { id: 5, prompt: "опиши должность специалиста по охране труда в сказочном стиле", answer: "В волшебном королевстве Специалист по Охране Труда был добрым стражем безопасности, который с помощью магических правил и заботливых чар оберегал всех жителей от бед и несчастий, превращая труд в радость и гармонию." },
    { id: 6, prompt: "Опиши профессию веб-аналитик в стиле персонажа \"Тимон и Пумба\" одним предложением", answer: "Веб-аналитик — это внимательный сурикат, который зорко следит за данными сайта и мобильного приложения, чтобы помочь своей цифровой стае стать самой успешной и привлекательной в интернете." },
    { id: 7, prompt: "Опиши профессию провизор в стиле танос одним предложением", answer: "Провизор, как Танос фармацевтики, стремится собрать все знания о лекарствах, чтобы контролировать здоровье человечества и обеспечить его баланс." },
    { id: 8, prompt: "Опиши профессию менеджера по закупкам лекарственных препаратов в стиле превью к телепередаче пусть говорят одним предложением", answer: "Сегодня в студии — менеджер по закупкам лекарственных препаратов, человек, который решает, какие лекарства попадут в аптеки и больницы, и кто контролирует баланс между здоровьем миллионов и прибыльностью фармацевтических гигантов — не пропустите!" },
    { id: 9, prompt: "Опиши с юмором должность оператора по бонусной программе и техническим вопросам одним предложением в стиле детективов Конана Дойла.", answer: "Оператор по бонусной программе и техническим вопросам — это некий незаметный, но хитроумный сыщик цифрового мира, который, словно Шерлок с лупой, разгадывает загадки сбившихся бонусов и техподдержки..." },
    { id: 10, prompt: "Опиши профессию менеджер по подбору персонала в стиле молчание ягнят одним предложением", answer: "Менеджер по подбору персонала — это искусный охотник за душами, который сканирует тьму резюме, проникает в глубины человеческих умов и ловко выбирает тех, кто идеально подходит..." },
    { id: 11, prompt: "Опиши профессию специалист по сертификации и забраковке в стиле традиционной средневековой Японской поэзии одним предложением.", answer: "В тени сакуры под строгим взором старцев специалист, словно мечом разрезая тьму, проверяет целебные зелья, отделяя ложь от правды." },
    { id: 12, prompt: "Опиши профессию специалист по ВЭД в стиле персонажа из книг Стивена Кинга одним предложением", answer: "Специалист по ВЭД — это словно человек, который в темных коридорах международной торговли ходит по тонкому льду, стараясь не провалиться в пропасть бюрократии..." },
    { id: 13, prompt: "Опиши профессию главного бухгалтера в стиле Кин-дза-дза одним предложением", answer: "Главный бухгалтер - это высший чатлан Плюка, который без штанов, но с гигантской калькуляторной пушкой в руках так жёстко «хряпает» чужие деньги..." },
    { id: 14, prompt: "Опиши профессию специалист экономической безопасности в стиле реп батла древнеримской эпохи одним предложением", answer: "Я, как легионер теней, стою на страже казны империи, врагам шепчу — тут не пройти, ведь я хранитель порядка и экономической судьбы!" },
    { id: 15, prompt: "Опиши профессию менеджера по подбору персонала в стиле в стиле белки одним предложением", answer: "Менеджер по подбору персонала — это такая ловкая и быстрая белочка, которая мчится по веткам резюме и собеседований..." },
    { id: 16, prompt: "Опиши профессию архивариуса в стиле комедии одним предложением.", answer: "Архивариус- это ловкий ниндзя бумаги, который с юмором и терпением выуживает из хаоса потерявшиеся документы..." },
    { id: 17, prompt: "Опиши профессию провизор в стиле Говарда Лафкрафта одним предложением.", answer: "Провизор — это загадочный алхимик современных избранных, обреченный сквозь мрачные страницы древних манускриптов..." },
    { id: 18, prompt: "Опиши профессию инженера по ремонту и эксплуатации аптек в стиле Гарика Харламова одним предложением:", answer: "Инженер по ремонту и эксплуатации аптек — это такой парень, который чинит аптеку так, чтобы лекарства не только выдавали..." },
    { id: 19, prompt: "Опиши профессию заместителя директора одним предложением в стиле звездочета", answer: "Заместитель директора - это звезда, что светит рядом с ярким центром, направляя пути компании через туман неопределенности..." },
    { id: 20, prompt: "Опиши профессию инженер по ремонту аптек в стиле Павла Воли одним предложением:", answer: "Инженер по ремонту аптек — это чувак, который чинит всё, что сломалось между градусником и кассой..." },
    { id: 21, prompt: "Опиши профессию начальник информационно-справочной службы в стиле хоббитов одним предложением.", answer: "Начальник информационно-справочной службы — это такой добропорядочный хранитель списков, справок и полезных сведений..." },
    { id: 22, prompt: "Опиши должность специалиста по маркировке в стиле Warhammer: Rogue trader одним предложением", answer: "Специалист по маркировке — это непоколебимый агент Империума, чьё острое око и священные печати безжалостно клеймят каждый товар..." },
    { id: 23, prompt: "Опиши профессию  ведущего специалиста управления аптечной сетью в стиле котёнка мяу одним предложением.", answer: "Ведущий специалист управления аптечной сетью — это такой умный и ласковый эксперт, который мурлычет своими знаниями..." },
    { id: 24, prompt: "опиши профессию инспектор по кадрам в стиле бойцовского клуба одним предложением", answer: "Инспектор по кадрам — это незаметный боец на передовой офисной войны, который знает все слабости сотрудников..." },
    { id: 25, prompt: "Опиши профессию офис-менеджера административного отдела в стиле мультяшного героя Инспектор Гаджет, который много задач одновременно одним предложением.", answer: "Офис-менеджер административного отдела — это Инспектор Гаджет в мире офисной рутины: вытаскивает решения из кармана..." },
    { id: 26, prompt: "Опиши профессию офис-менеджера административного отдела в стиле мультяшного героя Соник, который быстро и качественно делает свою работу одним предложением.", answer: "Офис-менеджер административного отдела — как Соник на кроссовках-реактивках: за секунду организует встречу..." },
    { id: 27, prompt: "Опиши профессию специалиста по работе с базой наименований в стиле ДНД одним предложением", answer: "Специалист по работе с базой наименований — это мудрый хранитель волшебных свитков, который бережно ведет учет имен и тайн..." },
    { id: 28, prompt: "Опиши профессию руководитель административного отдела в стиле контролера на входе в театр одним предложением.", answer: "Руководитель административного отдела — как контролёр на входе в театр: следит, чтобы всё было по регламенту..." },
    { id: 29, prompt: "Опиши пожалуйста профессию сетевой инженер в стиле рассказов Лавкрафта одним предложением.", answer: "Сетевой инженер — это безумец, чьё сознание сковано тенетами невидимых сил и загадочных протоколов..." },
    { id: 30, prompt: "Опиши профессию Бренд-менеджер в стиле Владимира Маяковского одним предложением", answer: "Бренд-менеджер — кличет, творит, кричит в мир ясный, чтоб имя торговое в каждом сердце билось страстно и властно!" },
    { id: 31, prompt: "Профессия менеджера дирекции по закупкам  в образе Лилу из к/ф «Пятый элемент» в фантастическом стиле", answer: "Менеджер дирекции по закупкам — словно загадочная Лилу из будущего, что с космической ловкостью и интуицией сканирует галактики предложений..." },
    { id: 32, prompt: "Опиши профессию архивариус в стиле юмористической фантастики одним предложением", answer: "Архивариус – это космический шериф, который борется с повстанцами Хаоса, сортируя вселенские документы..." },
    { id: 33, prompt: "Опиши профессию менеджера по подбору персонала в стиле шизофреника одним предложением", answer: "Менеджер по подбору персонала — это тот, кто в хаосе мыслей и голосов внутри себя находит нужных людей..." },
    { id: 34, prompt: "Опиши профессию экономиста в стиле ведущего кулинарного шоу, одним предложением", answer: "Экономист — это особое блюдо, в котором берется одна часть логики, две части запутанных графиков..." },
    { id: 35, prompt: "Опиши профессию ведущий инспектор отдела кадров в стиле Мальвины одним предложением", answer: "Ведущий инспектор отдела кадров — это добросердечный и внимательный хранитель порядка в мире человеческих судеб..." },
    { id: 36, prompt: "Опиши профессию Специалиста по охране труда в стиле война и мир одним предложением", answer: "Специалист по охране труда- это безмолвный страж, чья мудрость и неутомимая бдительность, подобного стратегу на поле битвы..." },
    { id: 37, prompt: "Опиши профессию специалиста по развитию и обучению в стиле Фай Родис из романа Ефремова \"Час Быка\" одним предложением", answer: "Специалист по развитию и обучению — это проводник в неизведанные внутренние миры человеческих возможностей..." },
    { id: 38, prompt: "Опиши профессию инженера программиста профессией провизора одним предложением", answer: "Инженер-программист — это как провизор, который вместо лекарств создает и \"лечит\" программы..." },
    { id: 39, prompt: "Опиши профессию менеджера по персоналу в стиле Ежика в тумане одним предложением", answer: "Менеджер по персоналу — это такой проводник в тумане трудовых отношений, который мягко и заботливо помогает людям найти свой путь..." },
    { id: 40, prompt: "Опиши профессию начальник отдела программ лояльности в стиле куклы чаки одним предложением", answer: "Начальник отдела программ лояльности — это как кукла Чаки: маленький, но ужасно хитрый и неотразимый мастер манипуляций..." },
    { id: 41, prompt: "Опиши профессию маркетолога, продвигающего собственные торговые марки в аптечной сети в стиле Люциоса Малфоя, когда он выступает на совете магов одним предложением", answer: "Маркетолог, продвигающий собственные торговые марки в аптечной сети, подобен истинному знатоку искусства влияния..." }
  ]);
  
  const [selectedItem, setSelectedItem] = useState(null);
  const [spinning, setSpinning] = useState(false);
  const [showFireworks, setShowFireworks] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [currentItemIndex, setCurrentItemIndex] = useState(0);
  const [animationId, setAnimationId] = useState(null);
  const canvasRef = useRef(null);
  const rotationRef = useRef(0);
  const speedRef = useRef(0);
  const particlesRef = useRef([]);
  
  // Инициализация canvas
  const initCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    return ctx;
  };
  
  // Создание частиц для фейерверка
  const createFireworksParticles = (x, y) => {
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
        opacity: 1
      });
    }
  };
  
  // Анимация фейерверка
  const animateFireworks = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    particlesRef.current = particlesRef.current.filter(particle => {
      particle.x += particle.vx;
      particle.y += particle.vy;
      particle.life--;
      particle.opacity = particle.life / 60;
      
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.radius, 0, 2 * Math.PI);
      ctx.fillStyle = `hsla(${particle.hue}, 100%, 70%, ${particle.opacity})`;
      ctx.fill();
      
      return particle.life > 0;
    });
    
    if (particlesRef.current.length > 0) {
      requestAnimationFrame(animateFireworks);
    }
  };
  
  // Запуск фейерверка
  const launchFireworks = () => {
    setShowFireworks(true);
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    
    createFireworksParticles(centerX, centerY);
    animateFireworks();
    
    setTimeout(() => {
      setShowFireworks(false);
      particlesRef.current = [];
    }, 3000);
  };
  
  // Анимация вращения барабана
  const startSpinning = () => {
    if (spinning) return;
    
    setSpinning(true);
    setSelectedItem(null);
    speedRef.current = 10; // Начальная скорость
    rotationRef.current = 0;
    
    const spin = () => {
      rotationRef.current += speedRef.current;
      setRotation(rotationRef.current % 360);
      
      // Уменьшаем скорость со временем
      speedRef.current *= 0.98;
      
      if (speedRef.current > 0.1) {
        setAnimationId(requestAnimationFrame(spin));
      } else {
        stopSpinning();
      }
    };
    
    spin();
  };
  
  // Остановка барабана и выбор победителя
  const stopSpinning = () => {
    cancelAnimationFrame(animationId);
    setSpinning(false);
    
    // Вычисляем индекс победителя
    const itemHeight = 100; // Высота элемента в стилях
    const totalItems = items.length;
    const fullRotations = Math.floor(rotation / 360);
    const finalRotation = rotation % 360;
    const selectedIndex = totalItems - 1 - Math.round((finalRotation / 360) * totalItems) % totalItems;
    
    setSelectedItem(items[selectedIndex]);
    
    // Запускаем фейерверк
    launchFireworks();
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
  
  return (
    <div style={{
      position: 'relative',
      width: '100%',
      height: '100vh',
      overflow: 'hidden',
      backgroundColor: '#0f0f0f',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      padding: '20px'
    }}>
      {/* Canvas для фейерверка */}
      <canvas 
        ref={canvasRef} 
        style={{ 
          position: 'absolute', 
          top: 0, 
          left: 0, 
          width: '100%', 
          height: '100%', 
          pointerEvents: 'none' 
        }}
      />
      
      <h1 style={{
        fontSize: '2.5rem',
        fontWeight: 'bold',
        marginBottom: '2rem',
        textAlign: 'center',
        background: 'linear-gradient(90deg, #ff6b6b, #ff8e53, #ffd166)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        animation: 'pulse 2s infinite'
      }}>
        Выбрать победителя
      </h1>
      
      {/* Барабан вращения */}
      <div style={{
        position: 'relative',
        width: '400px',
        height: '300px',
        perspective: '1000px',
        marginBottom: '2rem'
      }}>
        <div style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          transformStyle: 'preserve-3d',
          transform: `rotateX(${rotation}deg)`,
          transition: spinning ? 'transform 0.1s linear' : 'transform 1s ease-out'
        }}>
          {items.map((item, index) => {
            const angle = (360 / items.length) * index;
            const radius = 150;
            const radianAngle = (angle * Math.PI) / 180;
            
            const x = radius * Math.sin(radianAngle);
            const y = -radius * Math.cos(radianAngle);
            
            return (
              <div 
                key={item.id}
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: `translate(-50%, -50%) translate3d(${x}px, ${y}px, ${radius}px)`,
                  transformOrigin: 'center',
                  width: '300px',
                  padding: '15px',
                  backgroundColor: selectedItem?.id === item.id ? '#ff6b6b' : 'rgba(255, 255, 255, 0.1)',
                  border: selectedItem?.id === item.id ? '2px solid #ffd166' : '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: '10px',
                  boxShadow: selectedItem?.id === item.id ? '0 0 15px rgba(255, 105, 180, 0.5)' : 'none',
                  textAlign: 'center',
                  fontSize: '0.9rem',
                  transition: 'all 0.3s ease',
                  pointerEvents: 'none',
                  zIndex: selectedItem?.id === item.id ? 10 : 1
                }}
              >
                {item.prompt}
              </div>
            );
          })}
        </div>
        
        {/* Указатель */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '0',
          height: '0',
          borderLeft: '20px solid transparent',
          borderRight: '20px solid transparent',
          borderBottom: '30px solid #ffd166',
          zIndex: 20
        }}></div>
      </div>
      
      {/* Кнопка */}
      <button
        onClick={startSpinning}
        disabled={spinning}
        style={{
          padding: '15px 30px',
          fontSize: '1.2rem',
          fontWeight: 'bold',
          color: 'white',
          background: 'linear-gradient(90deg, #ff6b6b, #ff8e53)',
          borderRadius: '50px',
          boxShadow: spinning ? '0 0 15px rgba(255, 105, 180, 0.5)' : '0 0 15px rgba(255, 105, 180, 0.3)',
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
            e.currentTarget.style.boxShadow = '0 0 20px rgba(255, 105, 180, 0.7)';
          }
        }}
        onMouseLeave={(e) => {
          if (!spinning) {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.boxShadow = '0 0 15px rgba(255, 105, 180, 0.5)';
          }
        }}
      >
        {spinning ? 'Вращается...' : 'Выбрать победителя'}
      </button>
      
      {/* Результат */}
      {selectedItem && (
        <div style={{
          position: 'absolute',
          bottom: '20px',
          width: '90%',
          maxWidth: '600px',
          padding: '20px',
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '10px',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          boxShadow: '0 0 15px rgba(255, 105, 180, 0.5)',
          textAlign: 'center',
          animation: 'fadeIn 1s ease-in-out'
        }}>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '10px' }}>Победитель:</h3>
          <p style={{ fontStyle: 'italic', marginBottom: '10px' }}>{selectedItem.prompt}</p>
          <p style={{ color: '#ffd166' }}>{selectedItem.answer}</p>
        </div>
      )}
      
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
      `}</style>
    </div>
  );
};

export default App;
