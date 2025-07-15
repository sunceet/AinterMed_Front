"use client";
import { useState } from "react";
import ChatSidebar from "../../components/Chat/ChatSidebar";
import ChatWelcome from "../../components/Chat/ChatWelcome";

const today = new Date();
const yesterday = new Date();
yesterday.setDate(today.getDate() - 1);
const weekAgo = new Date();
weekAgo.setDate(today.getDate() - 7);
const monthAgo = new Date();
monthAgo.setDate(today.getDate() - 30);
const juneDate = new Date(today.getFullYear(), 5, 10);
const mayDate = new Date(today.getFullYear(), 4, 15);
const aprilDate = new Date(today.getFullYear(), 3, 10);
const marchDate = new Date(today.getFullYear(),2,10);

const mockChats = [
  {
    id: 1,
    name: "Контрольные вопросы по погрешности",
    date: today.toISOString(),
  },
  { id: 2, name: "Студенты из любых регионов", date: yesterday.toISOString() },
  {
    id: 3,
    name: "Наша миссия сделать качественное медиц...",
    date: yesterday.toISOString(),
  },
  { id: 4, name: "Визит к врачу", date: weekAgo.toISOString() },
  { id: 5, name: "Как дела?", date: weekAgo.toISOString() },
  { id: 6, name: "Доброе утро", date: weekAgo.toISOString() },
  {
    id: 7,
    name: "Персональный клинический ассистент для ст...",
    date: weekAgo.toISOString(),
  },
  { id: 8, name: "Искусственный интеллект", date: weekAgo.toISOString() },
  { id: 9, name: "Перейти к базе", date: weekAgo.toISOString() },
  { id: 10, name: "Перейти к ИИ", date: weekAgo.toISOString() },
  { id: 11, name: "AInterMed расскажи о себе", date: monthAgo.toISOString() },
  { id: 12, name: "Что такое рак легких", date: monthAgo.toISOString() },
  { id: 13, name: "Добрый день", date: monthAgo.toISOString() },
  { id: 14, name: "Отделение неотложной помощи", date: monthAgo.toISOString() },
  { id: 15, name: "Нейрохирургия - определение", date: monthAgo.toISOString() },
  { id: 16, name: "Привет Аинтермед", date: monthAgo.toISOString() },
  { id: 17, name: "aplsdalsdp", date: mayDate.toISOString() },
  {
    id: 18,
    name: "Микроинсульт - это кратковременное наруш...",
    date: juneDate.toISOString(),
  },
  { id: 19, name: "Боль в почках", date: mayDate.toISOString() },
  { id: 20, name: "Болит живот", date: juneDate.toISOString() },
  {
    id: 21,
    name: "Что делать если кровь не перестает идти",
    date: juneDate.toISOString(),
  },
  { id: 22, name: "Весенний осмотр", date: aprilDate.toISOString() },
  {id:23, name:"Военкомат", date:marchDate.toISOString()},
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
