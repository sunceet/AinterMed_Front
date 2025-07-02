"use client";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function AboutStats() {
  const { t } = useTranslation();

  return (
    <motion.section
      initial={{ opacity: 0, y: 40, filter: "blur(0px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="flex justify-center gap-10  sm:gap-16 mb-5 mt-[-120px] sm:mt-20 flex-wrap text-black text-center leading-tight"
    >
      <div>
        <div className="text-[48px] sm:text-[64px] font-[involve] font-semibold bg-gradient-to-r from-[#437CFF] to-[#65EDFF] bg-clip-text text-transparent">
          {t("about.Stats1")}
        </div>
        <div className="text-[24px] sm:text-[36px] font-[involve] font-semibold">
          {t("about.Stats2")}
        </div>
      </div>
      <div>
        <div className="text-[48px] sm:text-[64px] font-[involve] font-semibold bg-gradient-to-r from-[#437CFF] to-[#65EDFF] bg-clip-text text-transparent">
          {t("about.Stats3")}
        </div>
        <div className="text-[24px] sm:text-[36px] font-[involve] font-semibold">
          {t("about.Stats4")}
        </div>
      </div>
    </motion.section>
  );
}
