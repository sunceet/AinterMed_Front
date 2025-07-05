import { useTranslation } from "react-i18next";
import { setCookie } from "../../../utils/setCookie";

export default function LangSwitcher({ link }) {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  const changeLanguage = (lng) => {
    setCookie("NEXT_LOCALE", lng); // сохраняем язык в куку
    i18n.changeLanguage(lng); // меняем язык i18n на клиенте (для мгновенной подмены)
    window.location.reload(); // перезагружаем страницу, чтобы SSR увидел новый язык
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
}
