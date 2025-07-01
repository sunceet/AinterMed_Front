"use client";

import { useTranslation } from "react-i18next";

export default function AuthButtons({ btn, setShowAuthModal }) {
  const { t } = useTranslation();

  return (
    <>
      <button
        className={`${btn} cursor-pointer border border-[#C6C6C6]`}
        onClick={() => setShowAuthModal({ visible: true, mode: "login" })}
      >
        {t("auth.login")}
      </button>
      <button
        className={`${btn} cursor-pointer bg-black text-white border border-black`}
        onClick={() => setShowAuthModal({ visible: true, mode: "register" })}
      >
        {t("auth.register")}
      </button>
    </>
  );
}
