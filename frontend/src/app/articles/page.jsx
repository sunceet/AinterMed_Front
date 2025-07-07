"use client";
import React, { useState } from "react";

async function fetchCategories() {
  const res = await fetch("https://api.aintermed.com/articles/by-categories");
  if (!res.ok) return [];
  return res.json();
}

// SSR-загрузка категорий
let categoriesPromise = null;
function useCategories() {
  const [categories, setCategories] = React.useState(null);
  React.useEffect(() => {
    if (!categoriesPromise) categoriesPromise = fetchCategories();
    categoriesPromise.then(setCategories);
  }, []);
  return categories;
}

export default function ArticlesPage() {
  const categories = useCategories();
  const [activeIdx, setActiveIdx] = useState(0);

  if (!categories) {
    return (
      <div className="max-w-[1255px]  mx-auto pt-24 text-center text-gray-400 font-[Manrope] text-lg">
        Загрузка…
      </div>
    );
  }
  if (!categories.length) {
    return (
      <div className="max-w-[1255px] mx-auto pt-24 text-center text-gray-900 font-[Manrope] text-lg">
        Нет данных
      </div>
    );
  }

  const activeCategory = categories[activeIdx];

  return (
    <div className="max-w-[950px]  mb-20 mx-auto pt-12 px-4">
      <div className="flex flex-wrap  mb-8 justify-between">
        {categories.map((cat, idx) => (
          <button
            key={cat.id}
            className={`px-5 py-2 rounded-full font-[Manrope] text-[15px] border transition-colors duration-150 ${activeIdx === idx ? "bg-gradient-to-r from-[#437CFF] to-[#65EDFF] text-white " : "bg-white border-gray-300 text-gray-800 hover:bg-gray-100"}`}
            onClick={() => setActiveIdx(idx)}
            type="button"
          >
            {cat.name}
          </button>
        ))}
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
                <div className="font-[Involve] font-semibold text-[22px] mb-0.5 text-black group-hover:text-[#437CFF] transition">
                  {art.title}
                </div>
                <div className="font-[Manrope] text-[17px] text-gray-700">
                  {art.description}
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
