"use client";

import { useTranslation } from "react-i18next";
import { useSubscribeContext } from "./SubscribeContext";

export default function PromoInput() {
  const { t } = useTranslation();
  const { promo, setPromo } = useSubscribeContext();

  return (
    <div className="flex flex-wrap justify-center items-center gap-2 mb-10">
      <input
        type="text"
        placeholder={t("pricing.promo_placeholder")}
        value={promo}
        onChange={(e) => setPromo(e.target.value)}
        className="h-[38px] w-[200px] rounded-[20px]  font-[Manrope] border border-white px-4 text-[14px] bg-white  focus:outline-none focus:ring-0 focus:border-white"
      />
      <button className="h-[38px] px-5 rounded-[20px] font-[Manrope] bg-[#A2CCFF] text-white text-sm ">
        {t("pricing.activate")}
      </button>
    </div>
  );
}
