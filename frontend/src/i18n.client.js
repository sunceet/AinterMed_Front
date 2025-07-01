"use client";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationRU from "@/locales/ru/ru.json";
import translationEN from "@/locales/en/en.json";

i18n.use(initReactI18next).init({
  resources: {
    ru: { translation: translationRU },
    en: { translation: translationEN },
  },
  fallbackLng: "ru",
  lng: "ru",
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
  },
});

export default i18n;
