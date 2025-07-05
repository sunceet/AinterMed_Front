import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationRU from "@/locales/ru/ru.json";
import translationEN from "@/locales/en/en.json";

// По умолчанию русский
let lang = "ru";
// Если на клиенте — читаем язык из куки
if (typeof document !== "undefined") {
  const match = document.cookie.match(/NEXT_LOCALE=(\w+)/);
  if (match) lang = match[1];
}

i18n.use(initReactI18next).init({
  resources: {
    ru: { translation: translationRU },
    en: { translation: translationEN },
  },
  fallbackLng: "ru",
  lng: lang,
  interpolation: { escapeValue: false },
  react: { useSuspense: false },
});

export default i18n;
