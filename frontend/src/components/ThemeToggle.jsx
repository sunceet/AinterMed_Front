"use client";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("theme");

    if (
      saved === "dark" ||
      (!saved && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setTheme("dark");
    } else {
      document.documentElement.classList.remove("dark");
      setTheme("light");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    setTheme(newTheme);
  };

  if (!mounted) return null;

  return (
    <button
      onClick={toggleTheme}
      className={`cursor-pointer relative w-[60px] h-[30px] rounded-full transition-colors duration-300 ${
        theme === "dark" ? "bg-[#141516]" : "bg-[#E9E9E9]"
      }`}
    >
      <div
        className={`absolute top-[1px] left-[1px] w-[28px] h-[28px] rounded-full shadow-md transform transition-transform duration-300 ${
          theme === "dark"
            ? "translate-x-[30px] bg-[#282A2C]"
            : "translate-x-0 bg-white"
        }`}
      />

      <div className="flex justify-between items-center w-full h-full px-[6px] relative z-10">
        <img
          src="/assets/svg/light_theme.svg"
          alt="light"
          className={`w-[18px] h-[18px] transition duration-200 ${
            theme === "dark" ? "brightness-0 invert" : ""
          }`}
        />
        <img
          src="/assets/svg/dark_theme.svg"
          alt="dark"
          className={`w-[18px] h-[18px] transition duration-200 ${
            theme === "dark" ? "brightness-0 invert" : ""
          }`}
        />
      </div>
    </button>
  );
}
