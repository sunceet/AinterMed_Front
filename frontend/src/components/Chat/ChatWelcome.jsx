import { useState, useRef, useEffect } from "react";

export default function ChatWelcome() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  // const [showScrollToBottom, setShowScrollToBottom] = useState(false);
  const bottomRef = useRef(null);
  const historyRef = useRef(null);

  const hasMessages = messages.length > 0;

  const handleSend = () => {
    if (input.trim() !== "") {
      const userMessage = { id: Date.now(), text: input, role: "user" };
      const assistantMessage = {
        id: Date.now() + 1,
        text: "Это ответ ассистента.",
        role: "assistant",
      };
      setMessages((prev) => [...prev, userMessage, assistantMessage]);
      setInput("");
    }
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // useEffect(() => {
  //   const el = historyRef.current;
  //   if (!el) return;
  //   const handleScroll = () => {
  //     const isAtBottom = el.scrollHeight - el.scrollTop - el.clientHeight < 40;
  //     setShowScrollToBottom(!isAtBottom);
  //   };
  //   el.addEventListener("scroll", handleScroll);
  //   return () => el.removeEventListener("scroll", handleScroll);
  // }, []);

  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-transparent">
      {/* История сообщений */}
      <div
        ref={historyRef}
        className={`flex flex-col w-full z-100 px-1 flex-1 overflow-y-auto min-h-0 transition-all duration-500 ${
          hasMessages ? "pt-15" : "hidden"
        }`}
      >
        {messages.map((msg, index) => (
          <article key={msg.id} data-testid={`conversation-turn-${index}`}>
            <div className=" text-base mx-auto py-3 px-2 sm:px-3 lg:px-4 max-w-[864px] ">
              <div
                className={`flex ${
                  msg.role === "assistant"
                    ? "flex-row items-start"
                    : "flex-row-reverse items-end"
                }`}
              >
                {msg.role === "assistant" && (
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#438EFF1A]">
                    <img
                      src="/assets/svg/LogoForChat.svg"
                      alt="Assistant Avatar"
                      className="w-7 h-7"
                    />
                  </div>
                )}
                <div
                  className={`
                              relative  rounded-2xl before:absolute before:top-0 before:border-t-8 mr-1
                              ${
                                msg.role === "user"
                                  ? "max-w-[90%] ml-auto"
                                  : "w-10/12 max-w-full sm:max-w-none md:w-9/12 xl:w-7/12"
                              }
                              whitespace-pre-line bg-blue-100 p-3
                              ${
                                msg.role === "user"
                                  ? "bg-[#E6ECFF] rounded-[24px] px-4 py-3"
                                  : "bg-white px-2 py-2"
                              }
                            `}
                >
                  <div className="prose-primarya prose max-w-none break-words break-all prose-pre:p-0 whitespace-pre-wrap font-[Manrope] text-[15px] text-[#1C1C1C]">
                    {msg.text}
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
        <div ref={bottomRef} />
      </div>

      {/* Кнопка прокрутки вниз */}
      {/* {showScrollToBottom && (
        <div className="w-full z-50 max-w-[864px] bg-amber-200/0 px-4 flex justify-end pointer-events-none">
          <button
            onClick={() => {
              historyRef.current?.scrollTo({
                top: historyRef.current.scrollHeight,
                behavior: "smooth",
              });
            }}
            className="bg-transparent cursor-pointer rounded-full p-2 border border-[#E6ECFF] hover:bg-[#F0F4FF] transition shadow pointer-events-auto"
            aria-label="Прокрутить вниз"
          >
            <img
              src="/assets/svg/Arrow_For_Chat.svg"
              alt="Вниз"
              className="w-7 h-7"
            />
          </button>
        </div>
      )} */}

      {/* Input-блок — по центру или внизу */}
      <div
        className={`w-full max-w-[864px]  px-2 sm:px-4 transition-all duration-500 ${
          hasMessages
            ? ""
            : "flex-1 flex flex-col items-center justify-center gap-6"
        }`}
      >
        {!hasMessages && (
          <h1 className="text-xl sm:text-2xl md:text-[40px] font-semibold bg-gradient-to-r from-[#437CFF] to-[#65EDFF] text-transparent bg-clip-text text-center font-[Involve]">
            Добро пожаловать в AInterMed
          </h1>
        )}

        <div className="w-full px-2 sm:px-3 py-2 sm:py-3 flex flex-col sm:gap-4  border border-[#C6C6C6] shadow-lg rounded-[24px] sm:rounded-[34px]">
          <input
            className="pt-2 sm:pt-[11px] pl-3 pr-3 sm:pl-5 sm:pr-5 bg-transparent text-gray-700 placeholder-gray-500 focus:outline-none text-[15px] sm:text-[16px] md:text-[18px] font-normal font-[Manrope] leading-[20px] sm:leading-[22px] w-full rounded-full border-none"
            placeholder="Спросите что-нибудь..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            style={{ minHeight: 44 }}
          />
          <div className="flex flex-wrap xl:flex-nowrap items-end justify-between mt-2 sm:mt-3 gap-4 sm:gap-8 xl:gap-20">
            <div className="flex gap-1 sm:gap-2 flex-wrap">
              <button
                type="button"
                className="flex items-center pl-3 sm:pl-4 px-3 sm:px-5 py-2 bg-white border border-[#C6C6C6] rounded-full text-xs sm:text-sm font-medium text-gray-800"
                disabled
              >
                <span className="text-black">AInterMed</span>
                <span className="text-[#437CFF] font-semibold">&nbsp;PRO</span>
              </button>
              <button
                type="button"
                className="flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-2 bg-white border border-[#C6C6C6] rounded-full text-xs sm:text-sm font-medium"
                disabled
              >
                <img
                  src="/assets/svg/fi-rr-globe.svg"
                  alt="Globe"
                  className="w-4 h-4 sm:w-5 sm:h-5 xl:w-6 xl:h-6"
                />
                <span>Поиск</span>
              </button>
            </div>
            <button
              onClick={handleSend}
              className="flex flex-row items-center justify-center gap-2 sm:gap-3"
            >
              <img
                src="/assets/svg/lightning.svg"
                alt="Lightning"
                className="w-[15px] h-[20px] sm:w-[17px] sm:h-[22px]"
              />
              <span className="text-[13px] sm:text-[14px] text-black font-[Manrope] font-medium h-[20px] sm:h-[22px] flex items-center">
                Попыток: 4
              </span>
              <img
                src="/assets/svg/bigarrow.svg"
                alt="Arrow"
                className="h-[40px] w-[40px] sm:h-[48px] sm:w-[48px]"
              />
            </button>
          </div>
        </div>
      </div>

      {/* Нижнее предупреждение */}
      <div className="w-full  xl:py-3 flex justify-center pointer-events-none select-none">
        <div className="text-[10px] sm:text-[12px] text-[#888] text-center w-full max-w-2xl mx-auto">
          AInterMed может ошибаться — рекомендуется сверять информацию с
          официальными и проверенными источниками
        </div>
      </div>

      {/* Анимация появления сообщений */}
      <style jsx>{`
        .animate-slide-in {
          animation: slideIn 0.25s ease-out;
        }
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
