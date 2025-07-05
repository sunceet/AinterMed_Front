"use client";
import { useTranslation } from "react-i18next";

function setCookie(name, value, days = 365) {
  if (typeof document === "undefined") return;
  let expires = "";
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

const LangSwitcher = ({ link }) => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setCookie("NEXT_LOCALE", lng);
    window.location.reload();
  };

  return (
    <div className="font-[Manrope] font-bold flex gap-4 pr-4 text-[14px]">
      <button
        onClick={() => changeLanguage("ru")}
        className={`${link} ${currentLang === "ru" ? "text-[#438EFF]" : ""} cursor-pointer`}
      >
        RU
      </button>
      <button
        onClick={() => changeLanguage("en")}
        className={`${link} ${currentLang === "en" ? "text-[#438EFF]" : ""} cursor-pointer`}
      >
        ENG
      </button>
    </div>
  );
};

export default LangSwitcher;
