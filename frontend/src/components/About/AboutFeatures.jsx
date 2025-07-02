"use client";

import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function AboutFeatures() {
  const { t } = useTranslation();

  return (
    <motion.section
      initial={{ opacity: 0, y: 60, filter: "blur(0px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0)" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="pt-[50px] max-w-[840px] text-[18px] sm:text-[20px] mx-auto px-4 text-left font-medium font-[manrope] leading-relaxed"
    >
      <p className="mb-6">
        <span className="text-black font-[Manrope]">
          {t("about.Features1")}
        </span>
        <span className="text-gray-500 font-[Manrope]">
          {t("about.Features2")}
        </span>
      </p>

      <p className="mb-4 font-[Manrope] text-black">{t("about.Features3")}</p>

      <ul className="list-disc list-inside mb-6 font-[Manrope] text-gray-700 space-y-3">
        <li>{t("about.Features4")}</li>
        <li>{t("about.Features5")}</li>
        <li>{t("about.Features6")} </li>
        <li>{t("about.Features7")}</li>
      </ul>

      <p className="mb-6 text-black font-[Manrope]">
        {t("about.Features8")}{" "}
        <span className="font-[Manrope]">{t("about.Features9")}</span>{" "}
        {t("about.Features10")}{" "}
        <span className="font-[Manrope]">{t("about.Features11")}</span>
      </p>

      <p className="text-gray-500 font-[Manrope]">{t("about.Features12")}</p>
    </motion.section>
  );
}
