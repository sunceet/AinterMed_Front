"use client";

import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const Heading = () => {
  const { t } = useTranslation();

  return (
    <motion.h1
      initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="mx-auto xl:max-w-[700px] font-[Involve] font-bold  
                 tracking-wide text-black
                 text-[23px] leading-[27px]
                 sm:text-[30px] sm:leading-[32px]
                 md:text-[32px] md:leading-[36px]
                 lg:text-[36px] lg:leading-[40px]
                 xl:text-[40px] xl:leading-[44px]
                 -mt-5 sm:mt-0"
    >
      {t("heading.line1")}{" "}
      <span
        className="bg-gradient-to-r from-[#437CFF] to-[#65EDFF]
                   text-transparent bg-clip-text"
      >
        {t("heading.highlight")}
      </span>
      <br />
      {t("heading.line2")}
    </motion.h1>
  );
};

export default Heading;
