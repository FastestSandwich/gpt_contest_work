import React, { useState } from "react";

const App = () => {
  const [winner, setWinner] = useState(null);
  const [isSpinning, setIsSpinning] = useState(false);
  const [progress, setProgress] = useState(0);
  const [particles, setParticles] = useState([]);
  const [showExplosion, setShowExplosion] = useState(false);
  const [currentPreview, setCurrentPreview] = useState({ prompt: "", answer: "" });

  // Данные из файла для разыгрыша.xlsx
  const entries = [
    {
      prompt: "Опиши профессию системного администратора в стиле фильма Форрест Гамп одним предложением",
      answer:
        "Системный администратор — это как коробка шоколадных конфет, никогда не знаешь, с каким вирусом или сбоем придется столкнуться, но он всегда спокойно и упорно чинит всё, чтобы сеть работала как часы.",
      explanation:
        "Промт демонстрирует нестандартное мышление, задавая оригинальный художественный стиль, который раскрывает профессию с неожиданной стороны. Ответ выполнен в духе «фильма Форрест Гамп одним предложением», грамотно обыгрывая особенности языка и поведения персонажа. Идеальное сочетание иронии и профессионализма делает ответ особенно удачным."
    },
    {
      prompt: "Опиши профессию специалист по товарной политике в стиле ужастиков одним предложением",
      answer:
        "Специалист по товарной политике — это безумный кукловод, роковым взглядом манипулирующий ассортиментом и ценами, чтобы затянуть покупателей в зловещую ловушку маркетинговых интриг и вечного дефицита.",
      explanation:
        "Промт демонстрирует нестандартное мышление, задавая оригинальный художественный стиль, который раскрывает профессию с неожиданной стороны. Ответ выполнен в духе «ужастиков одним предложением», грамотно обыгрывая особенности языка и поведения персонажа. Такое описание точно привлечёт внимание и легко запомнится."
    },
    {
      prompt: "Опиши профессию Старший операционный менеджер в стиле вселенной Marvel одним предложением",
      answer:
        "Старший операционный менеджер — это центральная сила, которая, словно гравитация, удерживает вместе бесчисленные элементы бизнеса, направляя их движение в гармоничный и мощный космос успеха.",
      explanation:
        "Использование узнаваемого культурного контекста делает промт выразительным и хорошо направляет на творческое переосмысление профессии. Ответ выполнен в духе «вселенной Marvel одним предложением», грамотно обыгрывая особенности языка и поведения персонажа. Эффектность формулировки усиливает интерес к самой профессии."
    },
    {
      prompt: "Опиши профессию заместителя информационно-справочной службы аптек в образе Тимати одним предложением",
      answer:
        "Заместитель информационно-справочной службы аптек — это словно Тимати в мире фармацевтики: всегда на стиле, чётко знает, как раскачать информационный поток, и быстро решает любые вопросы, оставаясь на пике популярности внутри коллектива.",
      explanation:
        "Промт демонстрирует нестандартное мышление, задавая оригинальный художественный стиль, который раскрывает профессию с неожиданной стороны. Стилистика «Тимати одним предложением» выдержана блестяще: читается сразу и вызывает живую ассоциацию. Идеальное сочетание иронии и профессионализма делает ответ особенно удачным."
    },
    {
      prompt: "Опиши должность специалиста по охране труда в сказочном стиле",
      answer:
        "В волшебном королевстве Специалист по Охране Труда был добрым стражем безопасности, который с помощью магических правил и заботливых чар оберегал всех жителей от бед и несчастий, превращая труд в радость и гармонию.",
      explanation:
        "Промт фокусируется на профессии напрямую, что открывает широкие возможности для интерпретации и художественного подхода. Описание подано живо и выразительно, не теряя при этом связи с сутью профессии. Яркое, необычное выражение позволяет по-новому взглянуть на привычную роль."
    },
    {
      prompt: "Опиши профессию веб-аналитик в стиле персонажа \"Тимон и Пумба\" одним предложением",
      answer:
        "Веб-аналитик — это внимательный сурикат, который зорко следит за данными сайта и мобильного приложения, чтобы помочь своей цифровой стае стать самой успешной и привлекательной в интернете.",
      explanation:
        "Формулировка промта задаёт чёткий стилистический ориентир, стимулируя нестандартный подход к описанию. Автору удалось вжиться в образ «персонажа \"Тимон и Пумба\" одним предложением» и передать его через язык описания профессии. Такое описание точно привлечёт внимание и легко запомнится."
    },
    {
      prompt: "Опиши профессию провизор в стиле танос одним предложением",
      answer:
        "Провизор, как Танос фармацевтики, стремится собрать все знания о лекарствах, чтобы контролировать здоровье человечества и обеспечить его баланс.",
      explanation:
        "Промт демонстрирует нестандартное мышление, задавая оригинальный художественный стиль, который раскрывает профессию с неожиданной стороны. Стилистика «танос одним предложением» выдержана блестяще: читается сразу и вызывает живую ассоциацию. Такое описание точно привлечёт внимание и легко запомнится."
    },
    {
      prompt: "Опиши профессию менеджера по закупкам лекарственных препаратов в стиле превью к телепередаче пусть говорят одним предложением",
      answer:
        "Сегодня в студии — менеджер по закупкам лекарственных препаратов, человек, который решает, какие лекарства попадут в аптеки и больницы, и кто контролирует баланс между здоровьем миллионов и прибыльностью фармацевтических гигантов — не пропустите!",
      explanation:
        "Использование узнаваемого культурного контекста делает промт выразительным и хорошо направляет на творческое переосмысление профессии. Ответ точно воспроизводит стиль «превью к телепередаче пусть говорят одним предложением» — как по интонации, так и по характерной лексике. Эффектность формулировки усиливает интерес к самой профессии."
    },
    {
      prompt: "Опиши профессию оператора по бонусной программе и техническим вопросам в стиле детективов Конана Дойла одним предложением",
      answer:
        "Оператор по бонусной программе и техническим вопросам — это некий незаметный, но хитроумный сыщик цифрового мира, который, словно Шерлок с лупой, разгадывает загадки сбившихся бонусов и техподдержки, добывая улики в виде кода и кнопок.",
      explanation:
        "Формулировка промта задаёт чёткий стилистический ориентир, стимулируя нестандартный подход к описанию. Ответ точно воспроизводит стиль «детективов Конана Дойла.» — как по интонации, так и по характерной лексике. Идеальное сочетание иронии и профессионализма делает ответ особенно удачным."
    },
    {
      prompt: "Опиши профессию специалиста по сертификации и забраковке в стиле средневековой Японской поэзии одним предложением.",
      answer:
        "В тени сакуры под строгим взором старцев специалист, словно мечом разрезая тьму, проверяет целебные зелья, отделяя ложь от правды.",
      explanation:
        "Промт демонстрирует нестандартное мышление, задавая оригинальный художественный стиль, который раскрывает профессию с неожиданной стороны. Стилистика «средневековой Японской поэзии одним предложением.» выдержана блестяще: читается сразу и вызывает живую ассоциацию. Идеальное сочетание иронии и профессионализма делает ответ особенно удачным."
    },
    {
      prompt: "Опиши профессию специалиста по ВЭД в стиле персонажа из книг Стивена Кинга одним предложением",
      answer:
        "Специалист по ВЭД — это словно человек, который в темных коридорах международной торговли ходит по тонкому льду, стараясь не провалиться в пропасть бюрократии и неожиданных кризисов, где за каждым контрактом может скрываться своя маленькая жуткая тайна.",
      explanation:
        "Использование узнаваемого культурного контекста делает промт выразительным и хорошо направляет на творческое переосмысление профессии. Ответ выполнен в духе «персонажа из книг Стивена Кинга одним предложением», грамотно обыгрывая особенности языка и поведения персонажа. Идеальное сочетание иронии и профессионализма делает ответ особенно удачным."
    },
    {
      prompt: "Опиши профессию специалиста экономической безопасности в стиле реп батла древнеримской эпохи одним предложением",
      answer:
        "Я, как легионер теней, стою на страже казны империи, врагам шепчу — тут не пройти, ведь я хранитель порядка и экономической судьбы!",
      explanation:
        "Использование узнаваемого культурного контекста делает промт выразительным и хорошо направляет на творческое переосмысление профессии. Ответ точно воспроизводит стиль «реп батла древнеримской эпохи одним предложением» — как по интонации, так и по характерной лексике. Идеальное сочетание иронии и профессионализма делает ответ особенно удачным."
    },
    {
      prompt: "Опиши профессию менеджера по подбору персонала в стиле белки одним предложением",
      answer:
        "Менеджер по подбору персонала — это такая ловкая и быстрая белочка, которая мчится по веткам резюме и собеседований, чтобы собрать самую крепкую и дружную команду для большого корпоративного леса!",
      explanation:
        "Формулировка промта задаёт чёткий стилистический ориентир, стимулируя нестандартный подход к описанию. Стилистика «белки одним предложением» выдержана блестяще: читается сразу и вызывает живую ассоциацию. Идеальное сочетание иронии и профессионализма делает ответ особенно удачным."
    },
    {
      prompt: "Опиши профессию архивариуса в стиле комедии одним предложением.",
      answer:
        "Архивариус- это ловкий ниндзя бумаги, который с юмором и терпением выуживает из хаоса потерявшиеся документы и тайком прячет секретные файлы от любопытных коллег.",
      explanation:
        "Формулировка промта задаёт чёткий стилистический ориентир, стимулируя нестандартный подход к описанию. Ответ выполнен в духе «комедии одним предложением.», грамотно обыгрывая особенности языка и поведения персонажа. Яркое, необычное выражение позволяет по-новому взглянуть на привычную роль."
    }
    // Можно добавить остальные записи из Excel
  ];

  const selectWinner = () => {
    if (isSpinning) return;

    setIsSpinning(true);
    setProgress(0);

    let spinCount = 0;
    const maxSpins = 14; // ~7 секунд при 500 мс

    const interval = setInterval(() => {
      if (spinCount < maxSpins) {
        const randomEntry = entries[Math.floor(Math.random() * entries.length)];
        setCurrentPreview({
          prompt: randomEntry.prompt,
          answer: randomEntry.answer,
        });
        setProgress((spinCount / maxSpins) * 100);
        spinCount++;
      } else {
        clearInterval(interval);
        const finalEntry = entries[Math.floor(Math.random() * entries.length)];
        setWinner(finalEntry);
        triggerExplosion();
        setTimeout(() => {
          setIsSpinning(false);
        }, 800);
      }
    }, 500);
  };

  const triggerExplosion = () => {
    setShowExplosion(true);
    const newParticles = [];

    for (let i = 0; i < 30; i++) {
      const angle = Math.random() * 2 * Math.PI;
      const speed = Math.random() * 6 + 2;
      newParticles.push({
        x: 0,
        y: 0,
        dx: Math.cos(angle) * speed,
        dy: Math.sin(angle) * speed,
      });
    }

    setParticles(newParticles);

    setTimeout(() => {
      setShowExplosion(false);
      setParticles([]);
    }, 1000);
  };

  return (
    <div className="bg-gradient-to-b from-blue-950 via-slate-900 to-indigo-950 text-white min-h-screen font-mono">
      {/* Абстрактный фон */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.1)_0%,_transparent_70%)] pointer-events-none"></div>
      <div className="fixed inset-0 opacity-40 bg-[url('https://www.transparenttextures.com/patterns/diamond-upholstery.png')]"></div> 

      {/* Заголовок */}
      <header className="relative z-10 py-8 px-6 text-center">
        <h1 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400 tracking-tight">
          Конкурс: Профессии в стиле GPT
        </h1>
        <p className="mt-2 text-sm md:text-base text-blue-200">Нажмите на голографическую кнопку, чтобы выбрать победителя</p>
      </header>

      {/* Прогрессбар между заголовком и вариантами */}
      <div className="flex justify-center mt-6 mb-8 relative z-10">
        {isSpinning && (
          <svg width="100" height="100" viewBox="0 0 100 100" className="progress-ring">
            <circle cx="50" cy="50" r="46" fill="none" stroke="#0f172a" strokeWidth="4" />
            <circle
              cx="50"
              cy="50"
              r="46"
              fill="none"
              stroke="cyan"
              strokeWidth="4"
              strokeLinecap="round"
              strokeDasharray="289"
              strokeDashoffset={289 - (289 * progress) / 100}
              transform="rotate(-90 50 50)"
              style={{ transition: "stroke-dashoffset 0.3s linear" }}
            />
            <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" fontSize="10" fill="white">
              {Math.round(progress)}%
            </text>
          </svg>
        )}
      </div>

      {/* Основной контент */}
      <main className="relative z-10 max-w-4xl mx-auto px-4 pb-10 space-y-6">
        {/* Предпросмотр во время анимации */}
        {isSpinning && !winner && (
          <div className="animate-pulse text-center mt-6">
            <h3 className="text-xl text-cyan-300 font-bold">{currentPreview.prompt || "Подбираем..."}</h3>
            <p className="mt-2 italic text-gray-300">{currentPreview.answer || "..."}</p>
          </div>
        )}

        {/* Карточка победителя с эффектом взрыва */}
        {winner && !isSpinning && (
          <div className="winner-box neon-glow particles-bg bg-slate-800/80 backdrop-blur-md border border-cyan-500/30 rounded-lg p-6 shadow-lg mt-8 animate-fade-in-up">
            <h3 className="text-xl font-semibold text-cyan-300 font-bold">{winner.prompt}</h3>
            <p className="mt-2 text-gray-300 italic font-bold">{winner.answer}</p>
            <div className="gpt-explanation mt-4 bg-slate-700/70 border border-cyan-500/20 rounded-md p-4 text-white text-2xl font-bold">
              {winner.explanation}
            </div>
          </div>
        )}

        {/* Контейнер частиц взрыва */}
        {showExplosion && (
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden flex items-center justify-center">
            {particles.map((p, i) => (
              <div
                key={i}
                className="data-particle absolute w-2 h-2 rounded-full bg-cyan-400"
                style={{
                  animationDelay: `${Math.random() * 0.2}s`,
                  left: "50%",
                  top: "50%",
                  transform: "translate(-50%, -50%)",
                  animation: "explode 1s ease forwards"
                }}
              ></div>
            ))}
          </div>
        )}

        {/* Центральная большая кнопка до первого нажатия */}
        {!isSpinning && !winner && (
          <div className="flex justify-center mt-10">
            <button
              onClick={selectWinner}
              className="relative w-64 h-64 rounded-full flex items-center justify-center text-white font-bold uppercase hover:scale-105 active:scale-95 transition-transform duration-300"
              style={{
                backgroundImage: "radial-gradient(circle at center, #00f2ff, #001a4d)",
                boxShadow: "0 0 30px 10px rgba(0, 255, 255, 0.7), 0 0 60px 20px rgba(0, 255, 255, 0.3)",
                border: "2px solid rgba(0, 255, 255, 0.6)",
                backdropFilter: "blur(10px)",
                fontSize: "1.5rem",
                textAlign: "center",
                lineHeight: "1.5rem"
              }}
            >
              Выбрать<br />победителя
            </button>
          </div>
        )}

        {/* Мини-кнопка после первого нажатия */}
        {winner && !isSpinning && (
          <div className="fixed bottom-6 right-6 hover:scale-110 transition-transform duration-300">
            <button
              onClick={selectWinner}
              className="w-14 h-14 rounded-full flex items-center justify-center text-white font-bold uppercase text-xs"
              style={{
                backgroundImage: "radial-gradient(circle at center, #00f2ff, #001a4d)",
                boxShadow: "0 0 15px 4px rgba(0, 255, 255, 0.6), 0 0 20px 8px rgba(0, 255, 255, 0.3)",
                border: "2px solid rgba(0, 255, 255, 0.6)",
                backdropFilter: "blur(5px)"
              }}
            >
              Повтор
            </button>
          </div>
        )}
      </main>

      {/* Анимации и стили */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 1s ease forwards;
        }

        .neon-glow {
          box-shadow: 0 0 15px 4px cyan, 0 0 30px 8px cyan, 0 0 60px 12px rgba(0, 255, 255, 0.4);
          animation: pulseGlow 2s infinite alternate ease-in-out;
        }

        @keyframes pulseGlow {
          from {
            box-shadow: 0 0 15px 4px cyan, 0 0 30px 8px cyan, 0 0 60px 12px rgba(0, 255, 255, 0.4);
          }
          to {
            box-shadow: 0 0 30px 10px cyan, 0 0 60px 16px rgba(0, 255, 255, 0.7);
          }
        }

        .particles-bg::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 200%;
          height: 200%;
          background: repeating-radial-gradient(circle, white 1px, transparent 2px), repeating-radial-gradient(circle, white 1px, transparent 2px);
          animation: particleMove 3s infinite linear;
          opacity: 0.05;
          pointer-events: none;
        }

        @keyframes particleMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(-20px, -20px); }
        }

        .data-particle {
          position: absolute;
          width: 4px;
          height: 4px;
          background-color: #00ffff;
          border-radius: 50%;
          opacity: 1;
          pointer-events: none;
        }

        @keyframes explode {
          from {
            transform: translate(0, 0) scale(1);
            opacity: 1;
          }
          to {
            transform: translate(var(--x), var(--y)) scale(0.5);
            opacity: 0;
          }
        }

        .animate-explosion {
          animation: explode 1s ease-out forwards;
        }

        .font-mono {
          font-family: 'Courier New', Courier, monospace;
        }
      `}</style>
    </div>
  );
};

export default App;
