"use client";

import { useEffect, useRef } from "react";

const PricingCards = () => {
  const scrollContainerRef = useRef(null);

useEffect(() => {
  const container = scrollContainerRef.current;
  if (!container) return;

  const secondCard = container.children[1];
  if (!secondCard) return;

  const containerRect = container.getBoundingClientRect();
  const cardRect = secondCard.getBoundingClientRect();

  const scrollLeft = secondCard.offsetLeft - container.offsetLeft
    - (containerRect.width / 2 - cardRect.width / 2);

  container.scrollTo({
    left: scrollLeft,
    behavior: "smooth",
  });
}, []);

  const plans = [
    {
      title: "Бесплатный",
      description: "Вариант для знакомства с интеллектуальным помощником AInterMed",
      priceSymbol: "₽",
      price: "0",
      period: "/ месяц",
      buttonColor: "bg-gradient-to-r from-[#437CFF20] to-[#659DFF20]",
      features: [
        "Доступ к основной модели AlnterMed",
        "Базовые инструменты понимания вопросов",
        "Ответы без расширенной аналитики",
        "Нет доступа к Web-поиску",
        "До 4 запросов в день",
      ],
    },
    {
      title: "Продвинутый",
      description: "Выбор для интенсивной подготовки и глубокого погружения в учебный материал",
      priceSymbol: "₽",
      price: "499",
      period: "/ месяц",
      buttonColor: "bg-gradient-to-r from-[#0066FF] to-[#009DFF]",
      features: [
        "Расширенный доступ к модели General",
        "Без ограничений по числу запросов",
        "История запросов и повтор запросов",
        "Web-поиск: до 5 запросов в неделю",
        "Улучшенные ответы с пояснениями",
        "Ранний доступ к новым функциям",
        "Приоритет в обработке",
      ],
    },
    {
      title: "Премиум",
      description: "Всё, что есть — без ограничений. Для тех, кто ищет максимум от интеллектуальной поддержки",
      priceSymbol: "₽",
      price: "899",
      period: "/ месяц",
      buttonColor: "bg-gradient-to-r from-[#00A6FF] to-[#00F2FF]",
      features: [
        "Доступ ко всем моделям AinterMed (General + Pro)",
        "Создан для студентов, врачей и исследователей",
        "Полный доступ к интеллектуальной поддержке",
        "Всё из продвинутой версии AinterMed",
        "Расширенная аналитика и разбор ответов",
        "Детальные обьяснения сложных случаев",
        "Приоритетный доступ к новым возможностям",
        "Ранний доступ к новым функциям",
        "Неограниченный Web-поиск",
      ],
    },
  ];

  return (
<div id="tariffs" className="scroll-mt-[70px] w-full py-10 flex flex-col items-center gap-[30px]">

      <h2 className="text-[36px] font-[Involve] font-semibold text-black text-center">
        Выбери свой{" "}
        <span className="bg-gradient-to-r from-[#437CFF] to-[#65EDFF] text-transparent bg-clip-text">
          тариф
        </span>
      </h2>
      <p className="text-[22px] font-[Involve] font-medium text-[#555555] text-center">
        Дешевле чем репетитор, лучше чем ChatGPT
      </p>

      <div
        ref={scrollContainerRef}
        className="w-full max-w-[1255px] overflow-x-auto snap-x snap-mandatory flex gap-[24px] px-4 lg:px-0 scrollbar-hidden"
        style={{ overflowY: "hidden" }}
      >
        {plans.map((plan, idx) => (
          <div
            key={idx}
            className="snap-center flex-shrink-0 w-[92%] sm:w-[392px] bg-white rounded-[32px] border border-white px-[24px] py-[24px] flex flex-col"
          >
            <div className="text-center mb-4">
              <div className="min-h-[100px] flex flex-col justify-start items-center">
                <h3 className="text-[28px] font-[600] leading-[36px] font-involve">
                  {plan.title}
                </h3>
                <p className="text-[15px] text-[#555555] font-manrope mt-[12px]">
                  {plan.description}
                </p>
              </div>

              <div className="flex items-end justify-center gap-[4px] mt-[1px]">
                <span className="text-[30px] font-involve text-[#555555] font-medium relative -top-[11px]">
                  {plan.priceSymbol}
                </span>
                <span className="text-[48px] font-involve font-medium leading-[56px]">
                  {plan.price}
                </span>
                <span className="text-[20px] font-involve font-[500] text-[#555] mb-[4px]">
                  {plan.period}
                </span>
              </div>
            </div>

            <ul className="flex-grow text-[15px] font-manrope text-[#555555] leading-[26px] list-disc pl-[15px] text-left mb-[24px]">
              {plan.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>

            <button
              className={`w-full h-[56px] rounded-full text-white font-involve text-[15px] font-medium uppercase tracking-wide transition ${plan.buttonColor}`}
            >
              Оформить подписку
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingCards;
