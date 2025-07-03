"use client";

import "./globals.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const { i18n } = useTranslation();

  const [lang, setLang] = useState("ru");

  useEffect(() => {
    setLang(i18n.language || "ru");
  }, [i18n.language]);

  return (
    <html>
      <body>
        <Header />
        {children}
        {isHome ? (
          <div className="bg-[#F2F2F2] pt-5">
            <Footer />
          </div>
        ) : (
          <Footer />
        )}
      </body>
    </html>
  );
}
