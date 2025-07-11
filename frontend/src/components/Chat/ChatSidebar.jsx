"use client";
import { useState, useEffect } from "react";
import BurgerMenuButton from "../Header/BurgerMenuButton";
import Link from "next/link";

const groupChats = (chats) => [
  { label: "Сегодня", items: chats.filter((c) => c.date === "today") },
  { label: "Вчера", items: chats.filter((c) => c.date === "yesterday") },
  { label: "7 дней", items: chats.filter((c) => c.date === "week") },
  { label: "30 дней", items: chats.filter((c) => c.date === "month") },
];

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
          className="fixed top-6 left-2 z-[300] bg-white rounded-full shadow p-2 border border-[#E0E0E0] transition sm:block hidden"
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
      <div className="sm:hidden bg-white  flex items-center justify-between w-full h-16 px-3  border-b border-[#E0E0E0] z-[210] fixed top-0 left-0">
        <BurgerMenuButton menuOpen={isOpen} setMenuOpen={setIsOpen} />
        <Link href="/">
          <img
            src="/assets/svg/Logo.svg"
            alt="Logo"
            className="h-5 w-auto pr-[110px] transition-all cursor-pointer"
          />
        </Link>
        <button className="p-2 ml-2" title="Новый чат">
          <img src="/assets/svg/plus.svg" alt="plus" className="h-6 w-6" />
        </button>
      </div>
      <aside
        className={`transition-all duration-300 h-full bg-[#F7F7F7] border-r border-[#ffffff] flex flex-col z-20
          ${isOpen ? "w-[338px] min-w-[260px] opacity-100" : "w-0 min-w-0 opacity-0 pointer-events-none"}
          fixed sm:static top-0 left-0 sm:top-auto sm:left-auto
          h-screen sm:h-full
          z-[200]
          sm:z-20
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
          <img
            src="/assets/svg/search.svg"
            alt="Поиск"
            className="h-5.5 w-5.5 cursor-pointer"
          />
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
        </div>
        <div className="px-7 pb-2">
          {/* Кнопка "Новый чат": здесь нужно вызывать функцию создания нового чата на бэкенде и обновлять список чатов. */}
          <button className="w-full cursor-pointer mt-3 flex items-center justify-center tracking-wide gap-2 bg-gradient-to-r from-[#437CFF] to-[#65EDFF] text-white h-[48px] rounded-full text-[14px] font-[Involve] shadow-md hover:from-[#3566c7] hover:to-[#437CFF] transition mb-2">
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
                      className={`flex items-center gap-2 px-4 py-2 rounded cursor-pointer hover:bg-[#e6edfa] transition ${chat.id === activeId ? "bg-[#e6edfa]" : ""}`}
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
          className="fixed inset-0 bg-black/40 bg-opacity-40 z-[150] sm:hidden transition-opacity duration-300"
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
