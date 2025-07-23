import { useState, useRef, useEffect } from "react";
import Image from "next/image";

export default function ChatWelcome() {
  const [input, setInput] = useState("");
  const [inputKey, setInputKey] = useState(0);
  const [messages, setMessages] = useState([]);
  const bottomRef = useRef(null);
  const historyRef = useRef(null);
  const textareaRef = useRef(null);
  const [isOpen] = useState(false);

  const hasMessages = messages.length > 0;

  useEffect(() => {
    const setVh = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };
    setVh();
    window.addEventListener("resize", setVh);
    return () => window.removeEventListener("resize", setVh);
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

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
      setInputKey((prev) => prev + 1);
    }
  };

  return (
    <div
      className="flex flex-col w-full bg-transparent overflow-hidden"
      style={{
        height: "100dvh",
        overflow: isOpen ? "visible" : "hidden",
        position:
          typeof window !== "undefined" && window.innerWidth <= 640 && isOpen
            ? "fixed"
            : "static",
      }}
    >
      {/* Скроллируемая история сообщений */}
      <div
        ref={historyRef}
        className={`flex flex-col w-full z-100 px-1 flex-1 overflow-y-auto min-h-0 transition-all duration-500 scrollbar-stable ${
          hasMessages ? "pt-15" : "hidden"
        }`}
        style={{ overflowY: "overlay" }}
      >
        {messages.map((msg, index) => (
          <article key={msg.id} data-testid={`conversation-turn-${index}`}>
            <div className="text-base mx-auto py-4 max-w-[864px]">
              <div
                className={`flex ${
                  msg.role === "assistant"
                    ? "flex-row items-start ml-1 lg:ml-2 2xl:ml-5"
                    : "flex-row-reverse items-end mr-1 lg:mr-2"
                }`}
              >
                {msg.role === "assistant" && (
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#438EFF1A]">
                    <Image
                      src="/assets/svg/LogoForChat.svg"
                      alt="Assistant Avatar"
                      width={28}
                      height={28}
                    />
                  </div>
                )}
                <div
                  className={`relative rounded-2xl before:absolute before:top-0 before:border-t-8 ${
                    msg.role === "user"
                      ? "max-w-[90%] ml-auto bg-[#E6ECFF] dark:bg-[#438EFF1A] rounded-[24px] rounded-br-[2px] px-4 py-3"
                      : "w-10/12 max-w-full sm:max-w-none md:w-9/12 xl:w-7/12 bg-white dark:bg-[#1b1c1d] px-2 py-2"
                  }`}
                >
                  <div className="prose max-w-none break-words break-all whitespace-pre-wrap font-[Manrope] text-[15px] text-[#1C1C1C] dark:text-white">
                    {msg.text}
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
        <div ref={bottomRef} />
      </div>

      {/* Ввод и welcome */}
      <div
        className={`w-full max-w-[910px] px-2 xl:px-3 transition-all duration-500 flex flex-col items-center ${
          hasMessages ? "" : "justify-center gap-6 flex-grow"
        }`}
      >
        {!hasMessages && (
          <h1 className="relative z-[100] text-xl sm:text-[34px] md:text-[40px] font-semibold bg-gradient-to-r from-[#437CFF] to-[#65EDFF] dark:from-[#437CFF] dark:to-[#65EDFF] text-transparent bg-clip-text text-center font-[Involve]">
            Добро пожаловать в AInterMed
          </h1>
        )}

        <div className="relative z-100 w-full px-2 sm:px-3 py-2 sm:py-3 flex flex-col bg-white dark:bg-[#282A2C] border border-[#C6C6C6] dark:border-[#373737] shadow-2xl/5 rounded-[24px] sm:rounded-[34px] shadow-[0_0_60px_20px_rgba(255,255,255,1)] dark:shadow-[0_0_60px_20px_#1b1c1d]">
          <textarea
            key={inputKey}
            ref={textareaRef}
            className="pt-2 pb-2.5 sm:pt-[11px] pl-3 pr-3 sm:pl-5 sm:pr-6 bg-transparent text-gray-700 dark:text-white placeholder-gray-500 dark:placeholder-[#A3A3A3] focus:outline-none text-[16px] sm:text-[19px] md:text-[19px] font-normal font-[Manrope] leading-[24px] w-full rounded-[24px] border-none resize-none max-h-[200px] overflow-y-auto"
            placeholder="Спросите что-нибудь..."
            value={input}
            onChange={(e) => {
              const el = e.target;
              setInput(el.value);
              el.style.height = "auto";
              el.style.height = `${el.scrollHeight}px`;
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSend();
              }
            }}
            rows={1}
          />

          <div className="flex flex-wrap xl:flex-nowrap items-end justify-between mt-1 sm:mt-2 gap-4 sm:gap-8 xl:gap-20">
            <div className="flex gap-1 sm:gap-2 flex-wrap">
              <button
                type="button"
                className="flex items-center pl-3 sm:pl-4 px-3 sm:px-5 py-2 bg-white dark:bg-[#282a2c] border border-[#C6C6C6] dark:border-[#373737] rounded-full text-xs sm:text-sm font-medium text-gray-800"
                disabled
              >
                <span className="text-black dark:text-white">AInterMed</span>
                <span className="text-[#437CFF] font-semibold">
                  &nbsp;&nbsp;PRO
                </span>
              </button>
              <button
                type="button"
                className="flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-2 bg-white dark:bg-[#282a2c] border border-[#C6C6C6] dark:border-[#373737] rounded-full text-xs sm:text-sm font-medium"
                disabled
              >
                <Image
                  src="/assets/svg/fi-rr-globe.svg"
                  alt="Globe"
                  width={20}
                  height={20}
                  className="w-4 h-4 sm:w-5 sm:h-5 xl:w-6 xl:h-6 dark:invert dark:brightness-0"
                />
                <span className="text-black dark:text-white">Поиск</span>
              </button>
            </div>
            <button
              onClick={handleSend}
              className="flex flex-row items-center justify-center gap-2 sm:gap-3"
            >
              <Image
                src="/assets/svg/lightning.svg"
                alt="Lightning"
                width={15}
                height={20}
                className="w-[15px] h-[20px] sm:w-[17px] sm:h-[22px] dark:invert"
              />
              <span className="text-[13px] sm:text-[14px] text-black dark:text-white font-[Manrope] font-medium h-[20px] sm:h-[22px] flex items-center">
                Попыток: 4
              </span>
              <Image
                src="/assets/svg/bigarrow.svg"
                alt="Arrow"
                width={40}
                height={40}
                className="h-[40px] w-[40px] sm:h-[48px] sm:w-[48px] dark:invert"
              />
            </button>
          </div>
        </div>
      </div>

      {/* Футер/предупреждение — всегда внизу, не скроллится */}
      <div className="w-full xl:py-3 flex justify-center shrink-0 pointer-events-none select-none">
        <div className="text-[10px] sm:text-[12px] text-[#888] dark:text-[#FFFFFFB2] text-center w-full max-w-2xl mx-auto">
          Уточняйте информацию в официальных источниках
        </div>
      </div>

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
