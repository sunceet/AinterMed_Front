"use client";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

// Асинхронно загружаем категории с API
async function fetchCategories() {
  const res = await fetch("https://api.aintermed.com/articles/by-categories");
  if (!res.ok) return [];
  return res.json();
}

// Кастомный хук для загрузки категорий с API
let categoriesPromise = null;
function useCategories() {
  const { t } = useTranslation(); // Для перевода
  const [categories, setCategories] = React.useState(null);

  React.useEffect(() => {
    if (!categoriesPromise) categoriesPromise = fetchCategories();
    
    categoriesPromise.then((data) => {
      const translatedCategories = data.map((cat) => ({
        ...cat,
        name: t(cat.name), // Переводим название категории
        articles: cat.articles.map((art) => ({
          ...art,
          title: t(art.title), // Переводим заголовок статьи
          description: t(art.description) // Переводим описание статьи
        }))
      }));
      setCategories(translatedCategories); // Сохраняем переведенные данные
    });
  }, [t]); // Добавляем t как зависимость, чтобы перезагружать данные при изменении языка

  return categories;
}

export default function ArticlesPage() {
  const categories = useCategories();
  const [activeIdx, setActiveIdx] = useState(0);

  if (!categories || categories.length === 0) {
    return null; // Если данных нет, ничего не показываем
  }

  const activeCategory = categories[activeIdx];

  return (
    <div className="max-w-[950px] mx-auto mb-25 pt-12 px-4">
      {/* КНОПКИ */}
      <div className="flex justify-center">
        <div className="inline-flex justify-center mb-10 border border-gray-300 rounded-full overflow-hidden shadow-sm">
          {categories.map((cat, idx) => (
            <button
              key={cat.id}
              onClick={() => setActiveIdx(idx)}
              type="button"
              className={`px-1 py-2 cursor-pointer xl:py-3 text-[11px] text-center sm:text-[16px] font-medium font-[Manrope] transition-colors duration-150
                ${activeIdx === idx
                  ? "bg-gradient-to-r from-[#437CFF] to-[#437CFF] text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
            >
              {"\u00A0" + "\u00A0" + cat.name + "\u00A0" + "\u00A0"} {/* Переводим название категории */}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-7">
        {activeCategory.articles.length === 0 && (
          <div className="text-gray-400 font-[Manrope] text-base">
            Нет статей в этой категории
          </div>
        )}
        {activeCategory.articles.map((art) => (
          <a key={art.id} href={`/articles/${art.id}`} className="group block">
            <div className="flex items-start gap-2">
              <span className="mt-1 text-[22px] text-[#437CFF] group-hover:text-[#65EDFF] transition">
                ›
              </span>
              <div>
                <div className="font-[Involve] font-semibold text-[15px] sm:text-[22px] mb-0.5 text-black group-hover:text-[#437CFF] transition">
                  {art.title} {/* Переводим заголовок статьи */}
                </div>
                <div className="font-[Manrope] text-[17px] text-gray-700">
                  {art.description} {/* Переводим описание статьи */}
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
