import "./globals.css";
// import { cookies } from "next/headers";
// import NoSSR from "../components/NoSSR";
import AppShell from "../components/AppShell";
import CookieConsent from "../components/CookieConsent";
import ThemeInit from "../components/ThemeInit";

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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="bg-white dark:bg-[#18191A]">
        <ThemeInit />
        <CookieConsent />
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
