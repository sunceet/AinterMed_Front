"use client";
import { usePathname } from "next/navigation";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import CookieConsent from "./CookieConsent";
import NoSSR from "./NoSSR";

export default function AppShell({ children }) {
  const pathname = usePathname();
  const isChat = pathname.startsWith("/chat");
  return (
    <NoSSR>
      {!isChat && <Header />}
      {children}
      {!isChat && <Footer />}
      {!isChat && <CookieConsent />}
    </NoSSR>
  );
}
