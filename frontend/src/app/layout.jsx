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
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
      </head>
      <body>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
