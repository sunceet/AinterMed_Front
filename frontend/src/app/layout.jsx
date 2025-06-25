import "./globals.css";

export const metadata = {
  title: "AInterMed",
  icons: {
    icon: "/assets/svg/Icon.svg",
    shortcut: "/assets/svg/Icon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}