"use client";
import { useState, useEffect, useRef } from "react";
import BurgerMenuButton from "../Header/BurgerMenuButton";
import Link from "next/link";
import ThemeToggle from "../ThemeToggle";

function useIsDarkTheme() {
  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    const check = () =>
      setIsDark(document.documentElement.classList.contains("dark"));
    check();
    const observer = new MutationObserver(check);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);
  return isDark;
}

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

  const isDark = useIsDarkTheme();
  const grouped = groupChats(chats);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const profileRef = useRef(null);

  useEffect(() => {
    if (!profileMenuOpen) return;
    function handleClickOutside(event) {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setProfileMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [profileMenuOpen]);

  return (
    <>
      {/* Кнопка открытия сайдбара на десктопе, когда он закрыт */}
      {!isOpen && (
        <button
          className="fixed top-6 left-2 z-[300] bg-white dark:bg-[#1F2123] rounded-full shadow p-2 border border-[#E0E0E0] dark:border-[#333] transition md:block hidden"
          onClick={() => setIsOpen(true)}
          title="Открыть боковую панель"
        >
          <img
            src="/assets/svg/open-close.svg"
            alt="Открыть"
            className="h-full w-full cursor-pointer  rotate-180 dark:invert dark:brightness-0"
          />
        </button>
      )}
      {/* Мобильный header всегда виден на sm и меньше */}
      <div className="md:hidden bg-white dark:bg-[#282A2C] flex items-center w-full h-18 px-4  border-[#C6C6C6] z-[210] fixed top-0 left-0 justify-between">
        <div className="flex items-center gap-2">
          <BurgerMenuButton
            className="dark:invert dark:brightness-0 "
            menuOpen={isOpen}
            setMenuOpen={setIsOpen}
          />
          <Link href="/">
            <img
              src={
                isDark
                  ? "/assets/svg/logo_for_dark_theme.svg"
                  : "/assets/svg/Logo.svg"
              }
              alt="Logo"
              className="h-6 w-auto pl-2 m object-contain"
            />
          </Link>
        </div>
        <button className="p-2 ml-2" title="Новый чат">
          <img
            src="/assets/svg/plus.svg"
            alt="plus"
            className="h-6 w-6 dark:invert"
          />
        </button>
      </div>
      <aside
        className={`transition-all duration-300 h-full bg-[#F7F7F7] dark:bg-[#282a2c] border-[#ffffff] flex flex-col z-20
          ${isOpen ? "fixed w-full max-w-[338px] min-w-[260px] left-0 top-0 opacity-100" : "w-0 min-w-0 opacity-0 pointer-events-none"}
          md:static md:w-[338px] md:min-w-[260px] md:opacity-100 md:pointer-events-auto md:left-auto md:top-auto
          h-screen md:h-full
          z-[200]
          md:z-20
        `}
        style={{
          overflow: isOpen ? "visible" : "hidden",
          position: undefined,
        }}
      >
        <div className="flex items-center gap-3 px-6 pt-6 pb-2 relative">
          <Link href="/">
            <img
              src={
                isDark
                  ? "/assets/svg/logo_for_dark_theme.svg"
                  : "/assets/svg/Logo.svg"
              }
              alt="Logo"
              className="h-10 w-40 transition-all"
            />
          </Link>
          <div className="flex-1" />
          {/* <ThemeToggle /> */}
          <button
            className="rounded-full cursor-pointer transition"
            onClick={() => setIsOpen(false)}
            title="Закрыть боковую панель"
          >
            <img
              src="/assets/svg/open-close.svg"
              alt="Скрыть"
              className="h-full w-full dark:invert dark:brightness-0"
            />
          </button>
        </div>
        <div className="pb-2 flex justify-center">
          {/* Кнопка "Новый чат": здесь нужно вызывать функцию создания нового чата на бэкенде и обновлять список чатов. */}
          <button className="w-full mx-6 cursor-pointer mt-3 flex items-center justify-center tracking-wide gap-3 text-white h-[54px] rounded-full text-[16px] font-[Involve] transition mb-2 bg-gradient-to-r from-[#437CFF] to-[#65EDFF] dark:from-[#2F67EA] dark:to-[#00BFFF] hover:from-[#3566c7] hover:to-[#437CFF] dark:hover:from-[#2652ba] dark:hover:to-[#00a7e6]">
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
                  <div className="text-[#888] dark:text-[#FFFFFF80] text-[14px] font-[Manrope]  px-4 mb-1 mt-3">
                    {group.label}
                  </div>
                  {group.items.map((chat) => (
                    <div
                      key={chat.id}
                      className={`flex text-black dark:text-white items-center gap-2 px-4 py-2 rounded-xl cursor-pointer hover:bg-[#e6edfa] dark:hover:bg-[#323639]  transition ${chat.id === activeId ? "bg-[#e6edfa] dark:bg-[#2c384b] " : ""}`}
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

        <div ref={profileRef} className="relative z-30">
          <div
            className="p-4  text-xs text-[#888] border-[#E0E0E0] flex items-start gap-3 cursor-pointer select-none"
            onClick={() => setProfileMenuOpen((v) => !v)}
          >
            <img
              src={
                isDark
                  ? "/assets/svg/anonym_for_dark_theme.svg"
                  : "/assets/svg/anonym_for_light_theme.svg"
              }
              alt="Аватар"
              className="h-[51px] w-[51px] mr-1 opacity-80 flex-shrink-0"
            />
            <div className="flex flex-col pt-1 justify-center">
              <span className="text-[16px] text-black dark:text-white font-[Manrope] font-semibold leading-tight">
                Иван Иванов Иванович
              </span>
              <span className="text-[14px] text-black dark:text-gray-300 mt-0.5 font-[Manrope] font-normal">
                Тариф: Бесплатный
              </span>
            </div>
          </div>
          {profileMenuOpen && (
            <div className="absolute left-0 bottom-[80px] w-[220px] bg-white dark:bg-[#232323] shadow-lg rounded-xl py-2 z-50 flex flex-col gap-1 border border-[#e0e0e0] dark:border-[#333]">
              <div className="px-4 pb-2 flex justify-start">
                <ThemeToggle />
              </div>
              <button
                className="w-full cursor-pointer text-black dark:text-white text-left px-4 py-2 rounded-lg font-[Manrope] text-[15px] hover:bg-[#e6edfa] dark:hover:bg-[#2c384b] transition"
                onClick={() => {
                  setProfileMenuOpen(false);
                  window.location.href = "/articles";
                }}
              >
                База-Знаний
              </button>
              <button
                className="w-full cursor-pointer text-black dark:text-white text-left px-4 py-2 rounded-lg font-[Manrope] text-[15px] hover:bg-[#e6edfa] dark:hover:bg-[#2c384b] transition"
                onClick={() => {
                  setProfileMenuOpen(false);
                }}
              >
                Обратная связь
              </button>
              <button
                className="w-full cursor-pointer text-left px-4 py-2 rounded-lg font-[Manrope] text-[15px] hover:bg-red-100 dark:hover:bg-red-900 text-red-600 dark:text-red-400 transition"
                onClick={() => {
                  setProfileMenuOpen(false);
                  alert("Выйти");
                }}
              >
                Выйти
              </button>
            </div>
          )}
        </div>
        {/* <div className="p-4 text-xs text-[#888] border-[#E0E0E0] flex items-start gap-3">
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
        </div> */}
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
