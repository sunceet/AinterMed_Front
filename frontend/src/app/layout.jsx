import "./globals.css";
import { cookies } from "next/headers";
import NoSSR from "../components/NoSSR";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import CookieConsent from "../components/CookieConsent";

export const metadata = {
  title: "AinterMed",
  icons: {
    icon: "/assets/svg/mini_logo.svg",
  },
};

export default async function RootLayout({ children }) {
  const cookieStore = await cookies();
  const lang = cookieStore.get("NEXT_LOCALE")?.value || "ru";

  return (
    <html lang={lang}>
      <body>
        <NoSSR>
          <Header />
          {children}
          <Footer />
          <CookieConsent />
        </NoSSR>
      </body>
    </html>
  );
}
