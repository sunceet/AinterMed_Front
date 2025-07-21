"use client";
import { useEffect } from "react";

export default function ThemeInit() {
  useEffect(() => {
    const path = window.location.pathname;
    if (!path.startsWith("/chat")) {
      document.documentElement.classList.remove("dark");
    } else {
      const saved = localStorage.getItem("theme");
      if (
        saved === "dark" ||
        (!saved && window.matchMedia("(prefers-color-scheme: dark)").matches)
      ) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
  }, []);
  return null;
}
