import React, { useEffect, useState } from "react";
import chatSamples from "./chatSamples"; // Импорт примеров чатов

const ChatPreviewCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(2); // Индекс текущей активной карточки
  const total = chatSamples.length; // Общее количество карточек
  const [isMobile, setIsMobile] = useState(false); // Флаг: мобильное устройство или нет

  useEffect(() => {
    // Проверка ширины экрана для определения мобильного устройства
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize(); // Вызов сразу при монтировании
    window.addEventListener("resize", handleResize); // Обновление при изменении размера окна
    return () => window.removeEventListener("resize", handleResize); // Очистка слушателя
  }, []);

  useEffect(() => {
    // Обработка свайпов только для мобильных устройств
    if (!isMobile) return;

    let touchStartX = 0;
    let touchEndX = 0;

    // Начало свайпа
    const handleTouchStart = (e) => {
      touchStartX = e.touches[0].clientX;
    };

    // Движение пальца по экрану
    const handleTouchMove = (e) => {
      touchEndX = e.touches[0].clientX;
    };

    // Завершение свайпа
    const handleTouchEnd = () => {
      const deltaX = touchStartX - touchEndX;
      if (deltaX > 50) handleNext(); // Свайп влево — следующая карточка
      if (deltaX < -50) handlePrev(); // Свайп вправо — предыдущая карточка
    };

    const container = document.getElementById("chat-carousel"); // Получаем контейнер карусели

    // Навешиваем слушатели
    container.addEventListener("touchstart", handleTouchStart);
    container.addEventListener("touchmove", handleTouchMove);
    container.addEventListener("touchend", handleTouchEnd);

    // Удаляем слушатели при размонтировании
    return () => {
      container.removeEventListener("touchstart", handleTouchStart);
      container.removeEventListener("touchmove", handleTouchMove);
      container.removeEventListener("touchend", handleTouchEnd);
    };
  }, [isMobile]);

  // Переход к предыдущей карточке
  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  };

  // Переход к следующей карточке
  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % total);
  };

  // Базовые параметры карточек в зависимости от устройства
  const baseWidth = isMobile ? 300 : 460;
  const baseHeight = isMobile ? 320 : 300;
  const offsetX = isMobile ? 140 : 200;
  const scaleStep = 0.06; // Шаг масштабирования для эффекта глубины

  return (
    <div className="relative w-full mt-15 flex flex-col items-center justify-center">
      {/* Заголовок */}
      <div className="w-full flex flex-col items-center justify-center text-center">
        <div className="text-[24px] leading-[1] font-medium font-[Involve] text-[#555555] max-w-[750px]">
          Чем точнее запрос — тем лучше помощь
        </div>
        <div className="text-[40px] leading-[1] font-semibold font-[Involve] text-gray-900 max-w-[827px] mt-2">
          <span className="bg-gradient-to-r from-[#437CFF] to-[#437CFF] text-transparent bg-clip-text">
            Развивай
          </span>{" "}
          клиническое мышление
        </div>
      </div>

      {/* Основной контейнер с каруселью */}
      <div
        id="chat-carousel"
        className="relative w-full max-w-[640px] mx-auto h-[400px] flex items-center justify-center"
      >
        {/* Верхнее свечение */}
        <div
          className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[1000px] h-[100px] z-0 pointer-events-none opacity-30"
          style={{
            background: "linear-gradient(180deg, #437CFF 0%, #65EDFF 100%)",
            borderRadius: "50%",
            filter: "blur(130px)",
          }}
        />
        {/* Нижнее свечение */}
        <div
          className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[1000px] h-[120px] z-0 pointer-events-none opacity-30"
          style={{
            background: "linear-gradient(0deg, #437CFF 0%, #65EDFF 100%)",
            borderRadius: "50%",
            filter: "blur(130px)",
          }}
        />

        {/* Кнопка "влево" для десктопа */}
        {!isMobile && (
          <button
            onClick={handlePrev}
            className="absolute xl:-left-85 md:left-5 lg:-left-10 top-1/2 transform -translate-y-1/2 z-50 hover:opacity-80"
          >
            <img src="/assets/svg/arrow_left.svg" alt="Left" className="w-6 h-6" />
          </button>
        )}

        {/* Отображение карточек чатов */}
        <div className="relative w-full h-full flex items-center justify-center overflow-visible z-10">
          {chatSamples.map((chat, i) => {
            // Расчёт позиции карточки относительно активной
            let diff = i - activeIndex;
            if (diff > total / 2) diff -= total;
            if (diff < -total / 2) diff += total;

            const position = diff;
            const scale = 1 - Math.abs(position) * scaleStep; // Масштаб по позиции
            const translateX = position * offsetX; // Смещение по позиции
            const blur =
              position === 0
                ? "blur-none"
                : Math.abs(position) === 1
                ? "blur-[2px]"
                : "blur-[5px]"; // Эффект размытия
            const zIndex = 30 - Math.abs(position) * 10; // Слои (центральная сверху)
            const opacity = Math.abs(position) <= 2 ? (position === 0 ? 1 : 0.85) : 0; // Прозрачность
            const pointerEvents = Math.abs(position) <= 2 ? "auto" : "none"; // Отключение кликов

            return (
              <div
                key={i}
                className={`absolute rounded-[28px] ${isMobile ? 'border-[1px]' : 'border'} border-gray-200 bg-white px-4 pt-4 pb-3 shadow-sm flex flex-col justify-between transition-all duration-300 ease-in-out ${blur}`}
                style={{
                  width: baseWidth,
                  height: baseHeight,
                  transform: `translateX(${translateX}px) scale(${scale})`,
                  zIndex,
                  opacity,
                  pointerEvents,
                }}
              >
                <CardContent chat={chat} position={position} />
              </div>
            );
          })}
        </div>

        {/* Кнопка "вправо" для десктопа */}
        {!isMobile && (
          <button
            onClick={handleNext}
            className="absolute xl:-right-85 md:right-5 lg:-right-10 top-1/2 transform -translate-y-1/2 z-50 hover:opacity-80"
          >
            <img src="/assets/svg/arrow_right.svg" alt="Right" className="w-6 h-6" />
          </button>
        )}
      </div>

      {/* Кнопка под каруселью */}
      <div className="w-full flex justify-center mb-6 mt-4">
        <button
          className="bg-gradient-to-r from-[#437CFF] to-[#65EDFF] font-[Involve] text-white text-[18px] font-semibold tracking-[0.02em] uppercase rounded-full w-[282px] h-[64px] hover:brightness-110 transition"
          onClick={() => window.open("https://aintermed.com/ai", "_blank")}
        >
          Войти и попробовать
        </button>
      </div>
    </div>
  );
};

// Компонент содержимого карточки
const CardContent = ({ chat, position = 0 }) => (
  <>
    {/* Сообщение ассистента */}
    <div className="flex items-start gap-2">
      <div className="bg-blue-100 rounded-full w-6 h-6 flex items-center justify-center shrink-0 mt-[2px]">
        <img src="/assets/svg/mini_logo.svg" alt="Logo" className="w-3.5 h-3.5 object-contain" />
      </div>
      <div className="text-[12px] leading-tight font-[Manrope] text-gray-800 text-left overflow-hidden">
        {chat.assistant}
      </div>
    </div>

    {/* Сообщение пользователя и действия */}
    <div className="w-full mt-4 sm:mt-2 px-3 py-2 border border-gray-200 rounded-[20px] bg-white shadow-inner flex flex-col justify-between text-left min-h-[88px] relative group">
      <div className="text-[12px] text-[#555555] font-[Manrope] leading-tight mb-2 sm:mb-2">
        {chat.user}
      </div>

      <div className="flex items-end justify-between transition-opacity duration-200 group-hover:opacity-100 gap-2">
        {/* Кнопки ссылок */}
        <div className={`flex gap-1.5 flex-wrap ${position !== 0 ? "pointer-events-none opacity-50" : ""}`}>
          <a
            href="https://aintermed.com/ai"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-2.5 py-1.5 sm:px-3 sm:py-1.5 bg-white border border-gray-200 rounded-full text-[11px] sm:text-[12px] text-gray-800 hover:bg-gray-100"
          >
            AInterMed&nbsp;<span className="text-[#437CFF]">PRO</span>
          </a>
          <a
            href="https://aintermed.com/ai"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 px-2.5 py-1.5 sm:px-3 sm:py-1.5 bg-white border border-gray-200 rounded-full text-[11px] sm:text-[12px] text-gray-800 hover:bg-gray-100"
          >
            <img src="/assets/svg/fi-rr-globe.svg" alt="Globe" className="w-4 h-4" />
            Поиск
          </a>
        </div>

        {/* Кнопка перехода */}
        <div className={position !== 0 ? "pointer-events-none opacity-50" : ""}>
          <button
            onClick={() => window.open("https://aintermed.com/ai", "_blank")}
            className="w-8 h-8 flex items-center justify-center"
          >
            <img src="/assets/svg/bigarrow.svg" alt="Arrow" className="w-7 h-7" />
          </button>
        </div>
      </div>
    </div>
  </>
);

export default ChatPreviewCarousel;
