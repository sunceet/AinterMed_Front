"use client";

export default function MobileMenu({ menuOpen, menuRef, btn, setMenuOpen }) {
  const navLinks = ["ГЛАВНОЕ", "ИИ ЧАТ", "БАЗА ЗНАНИЙ", "О НАС", "ТАРИФЫ"];
  return (
    <div
      ref={menuRef}
      className={`font-[Manrope] font-bold xl:hidden fixed left-0 w-full overflow-hidden z-40
        transition-[max-height] duration-500 ease-in-out
        ${menuOpen ? "max-h-[999px]" : "max-h-0"}`}
    >
      <nav className="flex flex-col items-center gap-4 bg-white/80 backdrop-blur-xl border-b border-[#C6C6C6] pb-6 pt-4 text-base font-medium">
        {navLinks.map((txt) => (
          <a
            key={txt}
            href="#"
            onClick={() => setMenuOpen(false)}
            className={txt === "ГЛАВНОЕ" ? "text-[#438EFF]" : ""}
          >
            {txt}
          </a>
        ))}

        <div className="flex gap-4 pt-2">
          <button className="text-[#438EFF]" onClick={() => setMenuOpen(false)}>
            RU
          </button>
          <button onClick={() => setMenuOpen(false)}>ENG</button>
        </div>

        <div className="flex flex-col gap-3 pt-5 w-full px-8">
          <button
            className={`${btn} border border-[#C6C6C6] w-full font-medium`}
            onClick={() => setMenuOpen(false)}
          >
            ВОЙТИ
          </button>
          <button
            className={`${btn} w-full border border-black text-white bg-black font-medium`}
            onClick={() => setMenuOpen(false)}
          >
            РЕГИСТРАЦИЯ
          </button>
        </div>
      </nav>
    </div>
  );
}
