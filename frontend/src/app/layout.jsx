import "./globals.css";
import { cookies } from "next/headers";
import NoSSR from "../components/NoSSR";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

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
        </NoSSR>
      </body>
    </html>
  );
}
