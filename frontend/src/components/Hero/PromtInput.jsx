"use client";

import { useState } from "react";
import IconButton from "../../components/ui/IconButton";
import GradientBorderBox from "../../components/ui/GradientBorderBox";

const PromptInput = () => {
  const [message, setMessage] = useState("");

  const handleEnter = (e) => {
    if (e.key === "Enter" && message.trim()) {
      window.open("https://aintermed.com/ai", "_blank");
    }
  };

  return (
    <GradientBorderBox className="w-[600px] h-[120px] px-4 py-4">
      <input
        placeholder="Спросите что-нибудь..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleEnter}
        className="pt-[6px] pl-3 bg-transparent text-gray-700 placeholder-gray-500
                   focus:outline-none text-[18px] leading-[22px] w-full"
      />

      <div className="flex items-end justify-between mt-2  pb-3">
        <div className="flex gap-2">
          <a
            href="https://aintermed.com/ai"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center pl-4 px-5 py-2  pt-2 bg-white rounded-full
                       text-sm font-medium text-gray-800 hover:bg-gray-100"
          >
            <span className="text-black">AInterMed&nbsp;</span>
            <span className="text-[#437CFF] font-semibold">PRO</span>
          </a>

          <a
            href="https://aintermed.com/ai"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-white rounded-full
                       text-sm font-medium text-gray-800 hover:bg-gray-100"
          >
            <img
              src="/assets/svg/fi-rr-globe.svg"
              alt="Globe"
              className="w-6 h-6"
            />
            <span>Поиск</span>
          </a>
        </div>

        <IconButton
          onClick={() => window.open("https://aintermed.com/ai", "_blank")}
        >
          <img
            src="/assets/svg/bigarrow.svg"
            alt="Arrow"
            className="w-12 h-12"
          />
        </IconButton>
      </div>
    </GradientBorderBox>
  );
};

export default PromptInput;
