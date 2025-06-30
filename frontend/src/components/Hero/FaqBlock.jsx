"use client";
import { useState, useRef, useEffect } from "react";

const faqs = [
  {
    question: "Что такое AInterMed?",
    answer:
      "AInterMed — это инновационная платформа с искусственным интеллектом, предназначенная для медицинских студентов и молодых специалистов, стремящихся упростить процесс обучения и улучшить профессиональные навыки.",
  },
  {
    question: "Как зарегистрироваться на платформе?",
    answer:
      "Регистрация осуществляется на главной странице сайта с помощью электронной почты.",
  },
  {
    question: "Какие способы оплаты поддерживаются?",
    answer: "Платформа принимает банковские карты и онлайн-платежи.",
  },
  {
    question: "Чем отличается бесплатный доступ от подписки?",
    answer:
      "Бесплатный доступ предоставляет ограниченное количество ежедневных запросов к AI, а подписка открывает неограниченный доступ и дополнительные функции.",
  },
  {
    question: "Сколько вопросов можно задавать?",
    answer:
      "В бесплатной версии можно задавать до 4 вопросов в день только в модели General",
  },
  {
    question: "Как получить неограниченный доступ к сервису?",
    answer: "Неограниченный доступ возможен при оформлении платной подписки.",
  },
  {
    question: "Какие источники использует AI для ответов?",
    answer:
      "AI использует проверенные медицинские источники, базы данных PubMed, Stanford и различные клинические рекомендации.",
  },
];

const FaqBlock = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const contentRefs = useRef([]);

  const toggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  useEffect(() => {
    contentRefs.current.forEach((ref, i) => {
      if (!ref) return;
      if (openIndex === i) {
        ref.style.maxHeight = ref.scrollHeight + "px";
        ref.style.opacity = "1";
      } else {
        ref.style.maxHeight = "0px";
        ref.style.opacity = "0";
      }
    });
  }, [openIndex]);

  return (
    <div className="w-full pt-16 pb-12 px-4 flex justify-center">
      <div className="flex flex-col gap-6 items-center max-w-[1080px] w-full">
        <h2 className="mb-6 w-full text-center text-black text-[28px] md:text-[40px] leading-tight font-semibold font-[Involve]">
          Вопросы и&nbsp;
          <span className="bg-gradient-to-r from-[#437CFF] to-[#65EDFF] text-transparent bg-clip-text">
            ответы
          </span>
        </h2>

        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              className="w-full bg-white xl:rounded-[32px] rounded-[18px] overflow-hidden transition-all duration-500 ease-in-out border border-white"
            >
              {/* ВОПРОС */}
              <button
                type="button"
                onClick={() => toggle(index)}
                className="w-full px-4 sm:px-6 py-6 flex items-center justify-between gap-1 cursor-pointer min-h-[72px] md:min-h-[96px]"
              >
                <h3 className="flex-1 self-center text-left text-[13px] sm:text-[18px] md:text-[24px] leading-[1.2] text-black font-semibold font-[Involve]">
                  {faq.question}
                </h3>

                <div className="w-10 h-10 sm:w-[56px] sm:h-[56px] perspective shrink-0 flex items-center justify-center">
                  <div
                    className={`relative w-full h-full transition-transform duration-500 ease-in-out [transform-style:preserve-3d] ${
                      isOpen ? "rotate-x-180" : ""
                    }`}
                  >
                    {/* "+" */}
                    <div className="absolute inset-0 flex items-center justify-center bg-[#F3F3F3] rounded-xl backface-hidden">
                      <div className="relative w-4 h-4 sm:w-6 sm:h-6">
                        <span className="absolute left-0 top-1/2 w-full h-[2px] bg-black transform -translate-y-1/2" />
                        <span className="absolute top-0 left-1/2 h-full w-[2px] bg-black transform -translate-x-1/2" />
                      </div>
                    </div>

                    {/* "×" */}
                    <div className="absolute inset-0 flex items-center justify-center bg-[#F3F3F3] rounded-xl rotate-x-180 backface-hidden">
                      <div className="relative w-4 h-4 sm:w-6 sm:h-6">
                        <span className="absolute left-0 top-1/2 w-full h-[2px] bg-black transform rotate-45 -translate-y-1/2 origin-center" />
                        <span className="absolute left-0 top-1/2 w-full h-[2px] bg-black transform -rotate-45 -translate-y-1/2 origin-center" />
                      </div>
                    </div>
                  </div>
                </div>
              </button>

              {/* ОТВЕТ */}
              <div
                ref={(el) => (contentRefs.current[index] = el)}
                className={`px-4 sm:px-6 overflow-hidden transition-all duration-500 ease-in-out ${
                  isOpen ? " pb-8" : ""
                }`}
                style={{
                  maxHeight: "0px",
                  opacity: 0,
                }}
              >
                <div className="pt-[-10px] pb-1">
                  <p className="text-left text-[12px] sm:text-[14px] md:text-[18px] leading-[20px] sm:leading-[24px] md:leading-[26px] font-normal text-[#555555] font-[Manrope]">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FaqBlock;
