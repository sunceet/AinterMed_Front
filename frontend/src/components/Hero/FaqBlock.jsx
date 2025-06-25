"use client";
import { useRef, useState, useEffect } from "react";

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

  useEffect(() => {
    contentRefs.current.forEach((ref) => {
      if (ref) {
        ref.style.setProperty("--content-height", ref.scrollHeight + "px");
      }
    });
  }, [openIndex]);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full pt-20 pb-0 px-4 flex justify-center">
      <div className="flex flex-col gap-6 items-center max-w-[1080px] w-full">
        <h2 className="mb-10 w-full text-center text-black text-[28px] md:text-[42px] leading-tight font-semibold font-[Involve]">
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
              className="w-full bg-white border border-white xl:rounded-[32px] rounded-[18px] overflow-hidden transition-all duration-500 ease-in-out md:min-h-[120px]"
            >
              <div
                className="px-4 sm:px-6 pt-4 sm:pt-6 pb-2 flex justify-between items-center cursor-pointer"
                onClick={() => toggle(index)}
              >
                <h3 className="text-[13px] sm:text-[18px] md:text-[24px] leading-snug text-black font-semibold font-[Involve]">
                  {faq.question}
                </h3>

                <div className="w-10 h-10 sm:w-[64px] sm:h-[64px] perspective">
                  <div
                    className={`flip-card-inner relative w-full h-full transition-transform duration-500 ease-in-out ${
                      isOpen ? "rotate-x-180" : ""
                    }`}
                  >
                    {/* "+" (передняя сторона) */}
                    <div className="flip-card-front absolute inset-0 flex items-center justify-center bg-[#F3F3F3] rounded-xl">
                      <div className="relative w-4 h-4 sm:w-6 sm:h-6">
                        <span className="absolute left-0 top-1/2 w-full h-[2px] bg-black transform -translate-y-1/2"></span>
                        <span className="absolute top-0 left-1/2 h-full w-[2px] bg-black transform -translate-x-1/2"></span>
                      </div>
                    </div>

                    {/* "×" (задняя сторона) */}
                    <div className="flip-card-back absolute inset-0 flex items-center justify-center bg-[#F3F3F3] rounded-xl rotate-x-180">
                      <div className="relative w-4 h-4 sm:w-6 sm:h-6">
                        <span className="absolute left-0 top-1/2 w-full h-[2px] bg-black transform -translate-y-1/2 rotate-45 origin-center"></span>
                        <span className="absolute left-0 top-1/2 w-full h-[2px] bg-black transform -translate-y-1/2 -rotate-45 origin-center"></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Ответ */}
              <div
                ref={(el) => (contentRefs.current[index] = el)}
                className={`px-4 sm:px-6 text-left transition-all duration-500 ease-in-out overflow-hidden`}
                style={{
                  maxHeight: isOpen ? "var(--content-height)" : "0px",
                }}
              >
                <div className="pt-0 pb-5">
                  <p className="text-[12px] sm:text-[14px] md:text-[18px] leading-[20px] sm:leading-[24px] md:leading-[26px] font-normal text-[#555555] font-[Manrope]">
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
