"use client";
import { useTranslation } from "react-i18next";

import { motion } from "framer-motion";
export default function AboutCTA() {
  const { t } = useTranslation();

  return (
    <motion.p
      initial={{ opacity: 0, y: 40, filter: "blur(0px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="mt-10 mb-10 text-center text-[16px] sm:text-[24px] font-[Manrope] text-[#555555] font-medium tracking-[0.01em] max-w-[806px] mx-auto"
    >
      {t("about.CTA")}
    </motion.p>
  );
}
