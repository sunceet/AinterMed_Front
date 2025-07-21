"use client";

import { usePathname } from "next/navigation";

export default function BurgerMenuButton({ menuOpen, setMenuOpen }) {
  const pathname = usePathname();
  const isChat = pathname.startsWith("/chat");
  const barClass = isChat ? "bg-black dark:bg-white" : "bg-black";
  return (
    <button
      aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"}
      aria-expanded={menuOpen}
      onClick={() => setMenuOpen(!menuOpen)}
      className="relative w-8 h-6 focus:outline-none"
    >
      <span
        className={`absolute left-0 top-0 h-[2px] w-full ${barClass} transition-transform duration-300 ${
          menuOpen ? "translate-y-[11px] rotate-45" : ""
        }`}
      />
      <span
        className={`absolute left-0 top-[11px] h-[2px] w-full ${barClass} transition-opacity duration-300 ${
          menuOpen ? "opacity-0" : ""
        }`}
      />
      <span
        className={`absolute left-0 top-[22px] h-[2px] w-full ${barClass} transition-transform duration-300 ${
          menuOpen ? "-translate-y-[11px] -rotate-45" : ""
        }`}
      />
    </button>
  );
}
