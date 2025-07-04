import { useTranslation } from "react-i18next";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function DesktopNav() {
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToTop = () => {
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
    }
  };

  const scrollToTariffs = () => {
    navigate("/subscribe");
  };

  const isTariffsLinkActive = location.pathname === "/subscribe";

  const getLinkClass = (active) =>
    `transition ${active ? "text-[#438EFF]" : "text-black"}`;

  return (
    <nav className="font-[Manrope] font-bold hidden xl:flex pl-4 gap-6 xl:gap-8 text-[14px]">
      <button
        onClick={scrollToTop}
        className={`${getLinkClass(
          location.pathname === "/"
        )} bg-transparent border-none outline-none cursor-pointer`}
      >
        {t("nav.main")}
      </button>

      <a href="#chat" className={getLinkClass(false)}>
        {t("nav.chat")}
      </a>

      <a href="#knowledge" className={getLinkClass(false)}>
        {t("nav.knowledge")}
      </a>

      <Link
        to="/about"
        className={getLinkClass(location.pathname === "/about")}
      >
        {t("nav.about")}
      </Link>

      <button
        onClick={scrollToTariffs}
        className={`${getLinkClass(
          isTariffsLinkActive
        )} bg-transparent border-none outline-none cursor-pointer`}
      >
        {t("nav.tariffs")}
      </button>
    </nav>
  );
}
