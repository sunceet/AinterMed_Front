import React from "react";

async function getArticle(id) {
  const res = await fetch(`https://api.aintermed.com/articles/article/${id}`, {
    next: { revalidate: 3600 },
  });
  if (!res.ok) return null;
  return res.json();
}

export default async function ArticlePage({ params }) {
  const { articleId } = params;
  const article = await getArticle(articleId);
  if (!article)
    return (
      <div className="max-w-2xl mx-auto pt-16 text-center text-gray-500">
        Статья не найдена
      </div>
    );

  return (
    <div className="max-w-2xl mx-auto pt-12 px-4">
      <h1 className="font-[Involve] font-bold text-[28px] mb-3 text-black">
        {article.title}
      </h1>
      <div className="font-[Manrope] text-[18px] text-gray-700 mb-8">
        {article.description}
      </div>
      <article className="prose prose-lg max-w-none font-[Manrope] text-black">
        {article.content ? (
          <div dangerouslySetInnerHTML={{ __html: article.content }} />
        ) : (
          <div className="text-gray-500">Нет содержимого</div>
        )}
      </article>
    </div>
  );
}
