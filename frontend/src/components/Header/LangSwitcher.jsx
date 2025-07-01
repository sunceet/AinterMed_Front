"use client";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n.client";

const LangSwitcher = ({ link }) => {
  const { i18n: i18nextInstance } = useTranslation();
  const currentLang = i18nextInstance.language;

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("lang", lng); // сохранить язык
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
