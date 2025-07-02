"use client";

import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const SubHeading = () => {
  const { t } = useTranslation();

  return (
    <motion.p
      initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
      className="mt-3 text-[#555555] mx-auto w-full 
                 font-[Manrope] font-extrabold uppercase tracking-wide
                 text-[10px] leading-[16px]
                 sm:text-[12px] sm:leading-[16px]
                 md:text-[14px] md:leading-[18px]
                 lg:text-[14px] lg:leading-[20px]
                 xl:text-[16px] xl:leading-[22px]"
    >
      {t("subheading")}
    </motion.p>
  );
};

export default SubHeading;
