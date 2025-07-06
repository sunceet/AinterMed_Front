'use client';

import { useTranslation } from 'react-i18next';
import { setCookie } from '../../../utils/setCookie';

export default function LangSwitcher({ link }) {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  const changeLanguage = (lng) => {
    // Устанавливаем cookie с улучшенными параметрами безопасности
    setCookie('NEXT_LOCALE', lng, {
      days: 365,
      secure: true,
      sameSite: 'Strict',
      httpOnly: false, // Нужен доступ из JavaScript
    });

    // Обновляем язык в i18n
    i18n.changeLanguage(lng);

    // Перезагружаем страницу для применения изменений на серверной стороне
    window.location.reload();
  };

  return (
    <div className="font-[Manrope] font-bold flex gap-4 pr-4 text-[14px]">
      <button
        onClick={() => changeLanguage('ru')}
        className={`${link} ${currentLang === 'ru' ? 'text-[#438EFF]' : ''} 
          cursor-pointer transition-colors duration-200 hover:text-[#438EFF]`}
        aria-label="Переключить на русский язык"
      >
        RU
      </button>
      <button
        onClick={() => changeLanguage('en')}
        className={`${link} ${currentLang === 'en' ? 'text-[#438EFF]' : ''} 
          cursor-pointer transition-colors duration-200 hover:text-[#438EFF]`}
        aria-label="Switch to English"
      >
        EN
      </button>
    </div>
  );
}
