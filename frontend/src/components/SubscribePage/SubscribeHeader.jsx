"use client";

import { useTranslation } from "react-i18next";

export default function SubscribeHeader() {
  const { t } = useTranslation();

  return (
    <>
      <h2 className="pt-2 text-[28px] xl:text-[40px] mb-2 font-[Involve] font-semibold text-black text-center">
        {t("pricing.heading1")}{" "}
        <span className="bg-gradient-to-r from-[#437CFF] to-[#65EDFF] text-transparent bg-clip-text">
          {t("pricing.heading2")}
        </span>
      </h2>
      <p className="mt-[-8px] mb-5 text-[15px] xl:text-[22px] font-[Involve] font-medium text-[#555555] text-center">
        {t("pricing.subheading")}
      </p>
    </>
  );
}
