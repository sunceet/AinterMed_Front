"use client";
import { useState } from "react";
import ChatSidebar from "../../components/Chat/ChatSidebar";
import ChatWelcome from "../../components/Chat/ChatWelcome";

const mockChats = [
  { id: 1, name: "Контрольные вопросы по погрешности", date: "today" },
  { id: 2, name: "Студенты из любых регионов", date: "yesterday" },
  {
    id: 3,
    name: "Наша миссия сделать качественное медиц...",
    date: "yesterday",
  },
  { id: 4, name: "Визит к врачу", date: "week" },
  { id: 5, name: "Как дела?", date: "week" },
  { id: 6, name: "Доброе утро", date: "week" },
  { id: 7, name: "Персональный клинический ассистент для ст...", date: "week" },
  { id: 8, name: "Искусственный интеллект", date: "week" },
  { id: 9, name: "Перейти к базе", date: "week" },
  { id: 10, name: "Перейти к ИИ", date: "week" },
  { id: 11, name: "AInterMed расскажи о себе", date: "month" },
  { id: 12, name: "Что такое рак легких", date: "month" },
  { id: 13, name: "Добрый день", date: "month" },
  { id: 14, name: "Отделение неотложной помощи", date: "month" },
  { id: 15, name: "Нейрохирургия - определение", date: "month" },
  { id: 16, name: "Привет Аинтермед", date: "month" },
  {
    id: 17,
    name: "Микроинсульт - это кратковременное наруш...",
    date: "month",
  },
  { id: 18, name: "Боль в почках", date: "month" },
  { id: 19, name: "Болит живот", date: "month" },
  { id: 20, name: "Что делать если кровь не перестает идти", date: "month" },
];

export default function ChatPage() {
  const [activeId, setActiveId] = useState(mockChats[0].id);
  return (
    <div className="flex h-screen overflow-hidden font-[Manrope]">
      <ChatSidebar
        chats={mockChats}
        activeId={activeId}
        setActiveId={setActiveId}
      />
      <main className="flex-1 bg-white flex flex-col">
        <ChatWelcome />
      </main>
    </div>
  );
}
