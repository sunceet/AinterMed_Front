"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function MobileMenu({
  menuOpen,
  menuRef,
  btn,
  setMenuOpen,
  setShowAuthModal,
}) {
  const pathname = usePathname();
  const router = useRouter();
  const [isTariffActive, setIsTariffActive] = useState(false);

  // Прокрутка вверх (если на главной — плавно, иначе переход)
  const handleMainClick = () => {
    setMenuOpen(false);
    if (pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      router.push("/");
    }
  };

  // Прокрутка к тарифам
  const handleTariffClick = () => {
    setMenuOpen(false);
    if (pathname !== "/") {
      router.push("/#tariffs");
    } else {
      const el = document.getElementById("tariffs");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  // Отслеживаем — активны ли тарифы
  useEffect(() => {
    if (pathname !== "/") return;

    const handleScroll = () => {
      const section = document.getElementById("tariffs");
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const isVisible =
        rect.top <= window.innerHeight / 2 &&
        rect.bottom >= window.innerHeight / 2;

      setIsTariffActive(isVisible);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  // Класс активной ссылки
  const getLinkClass = (active) =>
    `transition ${active ? "text-[#438EFF]" : "text-black"}`;

  return (
    <div
      ref={menuRef}
      className={`font-[Manrope] font-bold xl:hidden fixed left-0 w-full overflow-hidden z-40
        transition-[max-height] duration-500 ease-in-out
        ${menuOpen ? "max-h-[999px]" : "max-h-0"}`}
    >
      <nav className="flex flex-col items-center gap-4 bg-white/80 backdrop-blur-xl border-b border-[#C6C6C6] pb-6 pt-4 text-base font-medium">
        {/* ГЛАВНОЕ */}
        <button
          onClick={handleMainClick}
          className={getLinkClass(pathname === "/" && !isTariffActive)}
        >
          ГЛАВНОЕ
        </button>

        {/* ИИ ЧАТ */}
        <a
          href="#chat"
          onClick={() => setMenuOpen(false)}
          className={getLinkClass(false)}
        >
          ИИ&nbsp;ЧАТ
        </a>

        {/* БАЗА ЗНАНИЙ */}
        <a
          href="#knowledge"
          onClick={() => setMenuOpen(false)}
          className={getLinkClass(false)}
        >
          БАЗА&nbsp;ЗНАНИЙ
        </a>

        {/* О НАС */}
        <Link
          href="/about"
          onClick={() => setMenuOpen(false)}
          className={getLinkClass(pathname === "/about")}
        >
          О&nbsp;НАС
        </Link>

        {/* ТАРИФЫ */}
        <button
          onClick={handleTariffClick}
          className={getLinkClass(pathname === "/" && isTariffActive)}
        >
          ТАРИФЫ
        </button>

        {/* Переключение языков */}
        <div className="flex gap-4">
          <button className="text-[#438EFF]" onClick={() => setMenuOpen(false)}>
            RU
          </button>
          <button onClick={() => setMenuOpen(false)}>ENG</button>
        </div>

        {/* Кнопки входа и регистрации */}
        <div className="flex flex-col gap-3 w-full px-8">
          <button
            className={`${btn} border border-[#C6C6C6] w-full font-medium`}
            onClick={() => {
              setMenuOpen(false);
              setShowAuthModal({ visible: true, mode: "login" });
            }}
          >
            ВОЙТИ
          </button>
          <button
            className={`${btn} w-full border border-black text-white bg-black font-medium`}
            onClick={() => {
              setMenuOpen(false);
              setShowAuthModal({ visible: true, mode: "register" });
            }}
          >
            РЕГИСТРАЦИЯ
          </button>
        </div>
      </nav>
    </div>
  );
}
