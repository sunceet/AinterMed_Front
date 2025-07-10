"use client";

import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

async function getArticle(id) {
  const res = await fetch(`https://api.aintermed.com/articles/article/${id}`, {
    next: { revalidate: 3600 },
  });
  if (!res.ok) return null;
  return res.json();
}

export default function ArticlePage({ params }) {
  const { articleId } = React.use(params);
  const { t } = useTranslation();

  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const data = await getArticle(articleId);
      setArticle(data);
      setLoading(false);
    }
    fetchData();
  }, [articleId]);

  if (loading) {
    return (
      <div className="max-w-2xl mx-auto pt-16 text-center text-gray-500">
        {t("Загрузка...")}
      </div>
    );
  }

  if (!article) {
    return (
      <div className="max-w-2xl mx-auto pt-16 text-center text-gray-500">
        {t("Статья не найдена")}
      </div>
    );
  }

  return (
    <div className="max-w-2xl mb-10 mx-auto pt-12 px-4">
      <h1 className="font-[Involve] font-bold text-[20px] sm:text-[28px] mb-3 text-black">
        {t(article.title)}
      </h1>
      <div className="font-[Manrope] text-[18px] text-gray-700 mb-8">
        {t(article.description)}
      </div>
      <article
        className="prose prose-lg max-w-none font-[Manrope] text-black"
        dangerouslySetInnerHTML={{ __html: article.content }}
      />
    </div>
  );
}
