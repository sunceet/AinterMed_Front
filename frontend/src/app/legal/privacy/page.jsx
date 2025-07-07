"use client";

import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import NoSSR from "../../../components/NoSSR";

export default function PrivacyPolicyPage() {
  const { t } = useTranslation();
  const [content, setContent] = useState("");
  const [processedContent, setProcessedContent] = useState("");

  // Функция для обработки markdown
  const processMarkdown = (text) => {
    // Сначала заменяем переносы строк на <br>
    let processed = text.replace(/\n/g, "<br>");

    // Затем обрабатываем жирный текст
    processed = processed.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");

    return processed;
  };

  useEffect(() => {
    const fetchPrivacyPolicy = async () => {
      const response = await fetch(
        "https://appwrite.aintermed.com/v1/storage/buckets/66b9d5550009e459aaa4/files/66b9d59000364bd8c64c/view?project=67b1af3e003adec67061"
      );
      const text = await response.text();
      setContent(text);
    };

    fetchPrivacyPolicy();
  }, []);

  // Обрабатываем markdown когда контент изменяется
  useEffect(() => {
    if (content) {
      setProcessedContent(processMarkdown(content));
    }
  }, [content]);

  return (
    <NoSSR>
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Заголовок */}
          <div className="text-center mb-6 sm:mb-12">
            <h1 className="text-[30px] sm:text-[38px] md:text-5xl font-bold font-[Involve] text-gray-900 mb-4">
              <span className="bg-gradient-to-r from-[#437CFF] to-[#65EDFF] text-transparent bg-clip-text">
                Политика конфиденциальности
              </span>
            </h1>
          </div>

          {/* Контент */}
          <div className="bg-white rounded-3xl p-8">
            <div
              className="text-[13px] sm:text-[17px] max-w-none font-[Manrope] text-gray-800 leading-relaxed"
              style={{
                lineHeight: "1.7",
              }}
              dangerouslySetInnerHTML={{ __html: processedContent }}
            />
          </div>
        </div>
      </div>
    </NoSSR>
  );
}
