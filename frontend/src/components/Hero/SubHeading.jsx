"use client";

import { useTranslation } from "react-i18next";

const SubHeading = () => {
  const { t } = useTranslation();

  return (
    <p
      className="mt-3 text-[#555555] mx-auto w-full 
                 font-[Manrope] font-extrabold uppercase tracking-wide
                 text-[11px] leading-[16px]
                 sm:text-[12px] sm:leading-[16px]
                 md:text-[14px] md:leading-[18px]
                 lg:text-[14px] lg:leading-[20px]
                 xl:text-[16px] xl:leading-[22px]"
    >
      {t("subheading")}
    </p>
  );
};

export default SubHeading;
