"use client";

import { useState } from "react";
import IconButton from "../../components/ui/IconButton";
import GradientBorderBox from "../../components/ui/GradientBorderBox";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const PromptInput = () => {
  const { t } = useTranslation();
  const [message, setMessage] = useState("");

  const handleEnter = (e) => {
    if (e.key === "Enter" && message.trim()) {
      window.open("https://aintermed.com/ai", "_blank");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
    >
      <GradientBorderBox className="w-full max-w-[600px] h-[120px] px-4 py-4 xl:h-[120px] xl:px-4 sm:py-4 flex flex-col justify-between ">
        <input
          placeholder={t("promt.placeholder")}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleEnter}
          className="pt-[6px] pl-3 bg-transparent text-gray-700 placeholder-gray-500
                     focus:outline-none text-[16px] sm:text-[18px] leading-[22px] w-full "
        />

        <div className="flex flex-wrap xl:flex-nowrap items-end justify-between mt-2 gap-12 xl:gap-50">
          <div className="flex gap-2 flex-wrap">
            <a
              href="https://aintermed.com/ai"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center pl-4 px-5 py-2 bg-white rounded-full
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
                className="w-5 h-5 xl:w-6 xl:h-6"
              />
              <span> {t("promt.search")}</span>
            </a>
          </div>

          <IconButton
            onClick={() => window.open("https://aintermed.com/ai", "_blank")}
          >
            <img
              src="/assets/svg/bigarrow.svg"
              alt="Arrow"
              className="w-10 h-10 xl:w-12 xl:h-12"
            />
          </IconButton>
        </div>
      </GradientBorderBox>
    </motion.div>
  );
};

export default PromptInput;
