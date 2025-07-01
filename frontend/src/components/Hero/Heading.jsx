"use client";

import { useTranslation } from "react-i18next";

const Heading = () => {
  const { t } = useTranslation();

  return (
    <h1
      className="mx-auto xl:max-w-[700px] font-[Involve] font-bold  
                 tracking-wide text-black
                 text-[25px] leading-[30px]
                 sm:text-[30px] sm:leading-[32px]
                 md:text-[32px] md:leading-[36px]
                 lg:text-[36px] lg:leading-[40px]
                 xl:text-[40px] xl:leading-[44px]"
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
    </h1>
  );
};

export default Heading;
