"use client";
import { useState, useEffect } from "react";
import BurgerMenuButton from "../Header/BurgerMenuButton";
import Link from "next/link";
import ToggleDarkMode from "../ui/ToggleDarkMode";

function groupChats(chats) {
  const now = new Date();
  const startOfToday = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate()
  );
  const startOfYesterday = new Date(startOfToday);
  startOfYesterday.setDate(startOfToday.getDate() - 1);
  const startOf7DaysAgo = new Date(startOfToday);
  startOf7DaysAgo.setDate(startOfToday.getDate() - 7);
  const startOf30DaysAgo = new Date(startOfToday);
  startOf30DaysAgo.setDate(startOfToday.getDate() - 30);

  const months = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь",
  ];

  const today = [];
  const yesterday = [];
  const week = [];
  const month = [];
  const byMonth = {};

  chats.forEach((chat) => {
    const chatDate = new Date(chat.date);
    if (chatDate >= startOfToday) {
      today.push(chat);
    } else if (chatDate >= startOfYesterday) {
      yesterday.push(chat);
    } else if (chatDate >= startOf7DaysAgo) {
      week.push(chat);
    } else if (chatDate >= startOf30DaysAgo) {
      month.push(chat);
    } else {
      // Группировка по месяцам и годам
      const key = `${months[chatDate.getMonth()]}`; //${chatDate.getFullYear()}
      if (!byMonth[key]) byMonth[key] = [];
      byMonth[key].push(chat);
    }
  });

  const result = [];
  if (today.length) result.push({ label: "Сегодня", items: today });
  if (yesterday.length) result.push({ label: "Вчера", items: yesterday });
  if (week.length) result.push({ label: "7 дней", items: week });
  if (month.length) result.push({ label: "30 дней", items: month });
  // Добавляем группы по месяцам (сортировка по убыванию даты)
  Object.keys(byMonth)
    .sort((a, b) => {
      // a,b = june 2024, july 2024
      // Сортировка по году и месяцу
      const [ma, ya] = a.split(" ");
      const [mb, yb] = b.split(" ");
      const dateA = new Date(parseInt(ya), months.indexOf(ma));
      const dateB = new Date(parseInt(yb), months.indexOf(mb));
      return dateB - dateA;
    })
    .forEach((key) => {
      result.push({ label: key, items: byMonth[key] });
    });
  return result;
}

// chats: массив чатов, приходит с бэкенда. Каждый чат должен содержать id, name, date (today/yesterday/week/month), и, возможно, другие поля.
export default function ChatSidebar({ chats, activeId, setActiveId }) {
  const [isOpen, setIsOpen] = useState(() => {
    if (typeof window !== "undefined") {
      return window.innerWidth > 640;
    }
    return true;
  });

  useEffect(() => {
    if (typeof window !== "undefined" && window.innerWidth <= 640) {
      setIsOpen(false);
    }
  }, []);

  const grouped = groupChats(chats);

  return (
    <>
      {/* Кнопка открытия сайдбара на десктопе, когда он закрыт */}
      {!isOpen && (
        <button
          className="fixed top-6 left-2 z-[300] bg-white rounded-full shadow p-2 border border-[#E0E0E0] transition md:block hidden"
          onClick={() => setIsOpen(true)}
          title="Открыть боковую панель"
        >
          <img
            src="/assets/svg/open-close.svg"
            alt="Открыть"
            className="h-full w-full cursor-pointer rotate-180"
          />
        </button>
      )}
      {/* Мобильный header всегда виден на sm и меньше */}
      <div className="md:hidden bg-white flex items-center w-full h-18 px-4 border-b border-[#C6C6C6] z-[210] fixed top-0 left-0 justify-between">
        <div className="flex items-center gap-2">
          <BurgerMenuButton menuOpen={isOpen} setMenuOpen={setIsOpen} />
          <Link href="/">
            <img
              src="/assets/svg/Logo.svg"
              alt="Logo"
              className="h-6 w-auto pl-2 m object-contain"
            />
          </Link>
        </div>
        <button className="p-2 ml-2" title="Новый чат">
          <img src="/assets/svg/plus.svg" alt="plus" className="h-6 w-6" />
        </button>
      </div>
      <aside
        className={`transition-all duration-300 h-full bg-[#F7F7F7] border-r border-[#ffffff] flex flex-col z-20
          ${isOpen ? "w-[338px] min-w-[260px] opacity-100" : "w-0 min-w-0 opacity-0 pointer-events-none"}
          fixed md:static top-0 left-0 md:top-auto md:left-auto
          h-screen md:h-full
          z-[200]
          md:z-20
        `}
        style={{
          overflow: isOpen ? "visible" : "hidden",
          position: undefined,
        }}
      >
        <div className="flex items-center gap-3 px-4 pt-6 pb-2 relative">
          <Link href="/">
            <img
              src="/assets/svg/Logo.svg"
              alt="Logo"
              className="h-10 w-40 transition-all"
            />
          </Link>
          <div className="flex-1" />
          <button
            className="p-1 rounded-full cursor-pointer transition"
            onClick={() => setIsOpen(false)}
            title="Закрыть боковую панель"
          >
            <img
              src="/assets/svg/open-close.svg"
              alt="Скрыть"
              className="h-full w-full"
            />
          </button>
          <ToggleDarkMode />
        </div>
        <div className="px-7 pb-2">
          {/* Кнопка "Новый чат": здесь нужно вызывать функцию создания нового чата на бэкенде и обновлять список чатов. */}
          <button className="w-full cursor-pointer mt-3 flex items-center justify-center tracking-wide gap-2 bg-gradient-to-r from-[#437CFF] to-[#65EDFF] text-white h-[48px] rounded-full text-[14px] font-[Involve]  hover:from-[#3566c7] hover:to-[#437CFF] transition mb-2">
            <img
              src="/assets/svg/plus.svg"
              alt="plus"
              className="h-5 w-5 brightness-0 invert"
            />{" "}
            Новый чат
          </button>
        </div>
        <div className="flex-1 overflow-y-auto px-2 pb-2 custom-scrollbar">
          {grouped.map(
            (group) =>
              group.items.length > 0 && (
                <div key={group.label} className="mb-2">
                  <div className="text-[#888] text-[14px] font-[Manrope]  px-4 mb-1 mt-3">
                    {group.label}
                  </div>
                  {group.items.map((chat) => (
                    <div
                      key={chat.id}
                      className={`flex items-center gap-2 px-4 py-2 rounded-xl cursor-pointer hover:bg-[#e6edfa] transition ${chat.id === activeId ? "bg-[#e6edfa]" : ""}`}
                      onClick={() => setActiveId(chat.id)}
                    >
                      {/* При клике на чат вызывается setActiveId(chat.id): здесь можно подгружать сообщения выбранного чата с бэкенда. */}
                      <span className="flex-1 truncate">{chat.name}</span>
                    </div>
                  ))}
                </div>
              )
          )}
        </div>
        <div className="p-4 text-xs text-[#888] bg-gradient-to-t from-[rgba(247,247,247,1)] to-[rgba(247,247,247,0)] border-t border-[#E0E0E0] flex items-start gap-3">
          <img
            src="/assets/svg/stars.svg"
            alt="Stars"
            className="h-[51px] w-[51px] mr-1 opacity-80 flex-shrink-0"
          />
          <div className="flex flex-col justify-center">
            <span className="text-[16px] text-black font-[Manrope] font-semibold leading-tight">
              Ознакомьтесь с тарифами
            </span>
            <span className="text-[14px] text-black mt-0.5 font-[Manrope] font-normal">
              Полный доступ, возможности для команд и многое другое.
            </span>
          </div>
        </div>
      </aside>
      {/* Мобильное затемнение фона при открытой панели */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 bg-opacity-40 z-[150] md:hidden transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #c6c6c6;
          border-radius: 8px;
          transition: background 0.2s;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #437cff;
        }
        .custom-scrollbar::-webkit-scrollbar-button {
          display: none;
          height: 0;
          width: 0;
        }
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: #c6c6c6 transparent;
        }
      `}</style>
    </>
  );
}
