import { useLocation, useNavigate, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function MobileMenu({
  menuOpen,
  menuRef,
  btn,
  setMenuOpen,
  setShowAuthModal,
}) {
  const location = useLocation();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const pathname = location.pathname;
  const currentLang = i18n.language;

  const isTariffsLinkActive = pathname === "/subscribe";

  const getLinkClass = (active) =>
    `transition ${active ? "text-[#438EFF]" : "text-black"}`;

  const handleMainClick = () => {
    setMenuOpen(false);
    if (pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
    }
  };

  const handleTariffClick = () => {
    setMenuOpen(false);
    navigate("/subscribe");
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setMenuOpen(false);
  };

  return (
    <div
      ref={menuRef}
      className={`font-[Manrope] font-bold xl:hidden fixed left-0 w-full overflow-hidden z-40
        transition-[max-height] duration-500 ease-in-out
        ${menuOpen ? "max-h-[999px]" : "max-h-0"}`}
    >
      <nav className="flex flex-col items-center gap-4 bg-white/80 backdrop-blur-xl border-b border-[#C6C6C6] pb-6 pt-4 text-base font-medium">
        <button
          onClick={handleMainClick}
          className={getLinkClass(pathname === "/")}
        >
          {t("nav.main")}
        </button>

        <a
          href="#chat"
          onClick={() => setMenuOpen(false)}
          className={getLinkClass(false)}
        >
          {t("nav.chat")}
        </a>

        <a
          href="#knowledge"
          onClick={() => setMenuOpen(false)}
          className={getLinkClass(false)}
        >
          {t("nav.knowledge")}
        </a>

        <Link
          to="/about"
          onClick={() => setMenuOpen(false)}
          className={getLinkClass(pathname === "/about")}
        >
          {t("nav.about")}
        </Link>

        <button
          onClick={handleTariffClick}
          className={getLinkClass(isTariffsLinkActive)}
        >
          {t("nav.tariffs")}
        </button>

        <div className="flex gap-4">
          <button
            className={`${currentLang === "ru" ? "text-[#438EFF]" : ""}`}
            onClick={() => changeLanguage("ru")}
          >
            RU
          </button>
          <button
            className={`${currentLang === "en" ? "text-[#438EFF]" : ""}`}
            onClick={() => changeLanguage("en")}
          >
            ENG
          </button>
        </div>

        <div className="flex flex-col gap-3 w-full px-8">
          <button
            className={`${btn} border border-[#C6C6C6] w-full font-medium`}
            onClick={() => {
              setMenuOpen(false);
              setShowAuthModal({ visible: true, mode: "login" });
            }}
          >
            {t("auth.login")}
          </button>
          <button
            className={`${btn} w-full border border-black text-white bg-black font-medium`}
            onClick={() => {
              setMenuOpen(false);
              setShowAuthModal({ visible: true, mode: "register" });
            }}
          >
            {t("auth.register")}
          </button>
        </div>
      </nav>
    </div>
  );
}
