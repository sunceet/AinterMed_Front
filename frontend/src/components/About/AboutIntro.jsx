"use client";

import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function AboutIntro() {
  const { t } = useTranslation();

  return (
    <motion.section
      initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="max-w-[840px] mt-[-40px] sm:mt-[0px] text-left mx-auto  px-4"
    >
      <h1 className=" text-[30px] xl:text-[46px] font-[Involve] text-center font-semibold mb-3 bg-gradient-to-r from-[#437CFF] to-[#65EDFF] bg-clip-text text-transparent">
        {t("about.Intro1")}
      </h1>

      <p className=" text-[18px] xl:text-[20px] text-black font-medium mb-6 font-[manrope] leading-relaxed">
        <span className="font-semibold">{t("about.Intro2")} </span>
        <span className="text-gray-500 font-[manrope]">
          {t("about.Intro3")}
        </span>
      </p>

      <p className="text-[18px] xl:text-[20px] text-gray-600 font-medium font-[manrope] leading-relaxed">
        {t("about.Intro4")}
      </p>
    </motion.section>
  );
}
