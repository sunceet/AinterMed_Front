"use client";

import "./globals.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { usePathname } from "next/navigation";

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <html lang="ru">
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
