"use client";

import { useState, useEffect } from "react";

function getCookie(name) {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
  return match ? decodeURIComponent(match[2]) : null;
}

function setCookie(name, value, days = 365) {
  if (typeof document === "undefined") return;
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  let cookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)}; expires=${date.toUTCString()}; path=/;`;
  if (window.location.protocol === "https:") cookie += " Secure;";
  cookie += " SameSite=Strict;";
  document.cookie = cookie;
}

export default function CookieConsent() {
  const [show, setShow] = useState(false);
  const [hide, setHide] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (!getCookie("cookie-consent-accepted")) {
      setShow(true);
    }
  }, []);

  const handleAccept = () => {
    setCookie("cookie-consent-accepted", "true", 365);
    setHide(true);
    setTimeout(() => setShow(false), 400);
  };

  if (!mounted || !show) return null;

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 flex justify-center pointer-events-none transition-all duration-400 ${hide ? "opacity-0 translate-y-8" : "opacity-100 translate-y-0"}`}
      style={{ transition: "opacity 0.4s, transform 0.4s" }}
    >
      <div className="pointer-events-auto w-full max-w-2xl mx-2 sm:mx-auto mb-4 bg-white/95 backdrop-blur border border-gray-200 shadow-xl rounded-2xl px-5 py-4 flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
        <div className="flex-1 text-sm sm:text-base text-gray-800 text-center sm:text-left">
          Мы используем cookies для улучшения работы сайта. Подробнее в нашей{" "}
          <a
            href="https://aintermed.com/legal/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-blue-600 hover:text-blue-800 transition-colors"
          >
            политике использования cookies
          </a>
          .
        </div>
        <button
          onClick={handleAccept}
          className="px-6 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold shadow-md hover:from-blue-700 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition-all duration-200"
        >
          Принять
        </button>
      </div>
    </div>
  );
}
