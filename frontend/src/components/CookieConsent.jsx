"use client";

import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();
  const [show, setShow] = useState(false);
  const [isHiding, setIsHiding] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (!getCookie("cookie-consent-accepted")) {
      setShow(true);
    }
  }, []);

  const handleAccept = () => {
    setCookie("cookie-consent-accepted", "true", 365);
    setIsHiding(true);
    setTimeout(() => setShow(false), 300);
  };

  if (!mounted || !show) return null;

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 flex justify-center transition-opacity duration-300 ${isHiding ? "opacity-0" : "opacity-100"}`}
    >
      <div className="w-full max-w-2xl mx-2 sm:mx-auto mb-4 bg-white/70 backdrop-blur-md border border-white/1 rounded-2xl px-3 sm:px-5 py-3 sm:py-4 flex flex-row items-center gap-3 sm:gap-6">
        <div className="flex-1 text-xs sm:text-sm md:text-base text-gray-800 text-left">
          {t("cookie.text")}{" "}
          <a href="/legal/privacy" className="underline text-blue-600">
            {t("cookie.link")}
          </a>
          .
        </div>
        <button
          onClick={handleAccept}
          className="px-3 cursor-pointer sm:px-6 py-1.5 sm:py-3 font-[Involve] rounded-[30px] bg-gradient-to-r from-[#437CFF] to-[#65EDFF] text-white text-[12px] sm:text-[15px] font-medium focus:outline-none flex-shrink-0"
        >
          {t("cookie.button")}
        </button>
      </div>
    </div>
  );
}
