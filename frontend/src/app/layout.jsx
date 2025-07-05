import "./globals.css";
import { cookies } from "next/headers";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

export default async function RootLayout({ children }) {
  const cookieStore = await cookies();
  const lang = cookieStore.get("NEXT_LOCALE")?.value || "ru"; // если не нашли, пусть будет ru

  return (
    <html lang={lang}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
