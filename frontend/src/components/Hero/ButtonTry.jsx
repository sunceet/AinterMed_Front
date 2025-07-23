"use client";

import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const CtaButton = () => {
  const { t } = useTranslation();

  return (
    <Link href="/chat" passHref>
      <motion.div
        initial={{ opacity: 0, y: 0, filter: "blur(8px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{
          opacity: { duration: 1, delay: 0.2 },
          y: { duration: 0.8, ease: "easeOut" },
          filter: { duration: 1, delay: 0.2 },
        }}
        className="relative cursor-pointer overflow-hidden font-[Involve] font-medium flex items-center justify-center gap-2
                   w-[240px] h-[48px] text-[12px]
                   sm:w-[260px] sm:h-[50px] sm:text-[13px]
                   md:w-[280px] md:h-[54px] md:text-[14px]
                   lg:w-[300px] lg:h-[56px] lg:text-[15px]
                   xl:w-[320px] xl:h-[58px] xl:text-[16px]
                   rounded-full tracking-wide text-white 
                   bg-gradient-to-r from-[#437CFF] via-[#02cbe6] to-[#437CFF]
                   animate-gradient-x transition-transform duration-300
                   hover:scale-105"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="font-[Involve] font-medium relative z-10">
          {t("button.try")}
        </span>
        <Image
          src="/assets/svg/Arrow.svg"
          alt="Arrow"
          width={24}
          height={16}
          className="relative z-10 w-5 h-[14px] md:w-6 md:h-[16px]"
          priority
        />
      </motion.div>
    </Link>
  );
};

export default CtaButton;
