"use client";

import "./globals.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Preloader from "../components/Preloader";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const { i18n } = useTranslation();

  const [lang, setLang] = useState("ru");
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    setLang(i18n.language || "ru");
  }, [i18n.language]);

  useEffect(() => {
    if (!isHome) {
      setLoading(false); // прелоадер нужен только на главной
      return;
    }

    const handleLoad = () => {
      setFadeOut(true);
      setTimeout(() => setLoading(false), 500);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => window.removeEventListener("load", handleLoad);
  }, [isHome]);

  return (
    <html>
      <body>
        {isHome && loading ? (
          <Preloader hidden={fadeOut} />
        ) : (
          <>
            <Header />
            {children}
            {isHome ? (
              <div className="bg-[#F2F2F2] pt-5">
                <Footer />
              </div>
            ) : (
              <Footer />
            )}
          </>
        )}
      </body>
    </html>
  );
}
