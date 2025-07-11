import "./globals.css";
import { cookies } from "next/headers";
import NoSSR from "../components/NoSSR";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import CookieConsent from "../components/CookieConsent";
import AppShell from "../components/AppShell";

export const metadata = {
  title: "AinterMed",
  icons: {
    icon: "/assets/svg/mini_logo.svg",
  },
};

export default function RootLayout({ children }) {
  const lang = "ru";
  return (
    <html lang={lang}>
      <body>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
