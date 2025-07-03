"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";

export default function DesktopNav() {
  const { t } = useTranslation();
  const pathname = usePathname();
  const router = useRouter();

  const scrollToTop = () => {
    if (pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      router.push("/");
    }
  };

  const scrollToTariffs = () => {
    router.push("/subscribe");
  };

  const isTariffsLinkActive = pathname === "/subscribe";

  const getLinkClass = (active) =>
    `transition ${active ? "text-[#438EFF]" : "text-black"}`;

  return (
    <nav className="font-[Manrope] font-bold hidden xl:flex pl-4 gap-6 xl:gap-8 text-[14px]">
      <button
        onClick={scrollToTop}
        className={`${getLinkClass(pathname === "/")} bg-transparent border-none outline-none cursor-pointer`}
      >
        {t("nav.main")}
      </button>

      <a href="#chat" className={getLinkClass(false)}>
        {t("nav.chat")}
      </a>

      <a href="#knowledge" className={getLinkClass(false)}>
        {t("nav.knowledge")}
      </a>

      <Link href="/about" className={getLinkClass(pathname === "/about")}>
        {t("nav.about")}
      </Link>

      <button
        onClick={scrollToTariffs}
        className={`${getLinkClass(isTariffsLinkActive)} bg-transparent border-none outline-none cursor-pointer`}
      >
        {t("nav.tariffs")}
      </button>
    </nav>
  );
}
