import { useState, useRef, lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import LogoIcon from "../../assets/svg/Logo.svg";
import BellIcon from "../../assets/svg/Bell.svg";

import DesktopNav from "./DesktopNav";
import LangSwitcher from "./LangSwitcher";
import AuthButtons from "./AuthButtons";
import AuthModal from "../AuthModal/AuthModal";

const BurgerMenuButton = lazy(() => import("./BurgerMenuButton"));
const MobileMenu = lazy(() => import("./MobileMenu"));

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState({
    visible: false,
    mode: "login",
  });
  const menuRef = useRef(null);
  const { t } = useTranslation();

  const link = "transition-colors duration-150 whitespace-nowrap";
  const btn =
    "rounded-full text-sm font-bold tracking-tight py-3 px-7 transition-colors";

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-[#C6C6C6]">
        <div className="mx-auto flex h-18 items-center justify-center max-w-screen-xl px-4 sm:px-4 lg:px-8 font-[Manrope]">
          <div className="flex  w-full max-w-[1255px] items-center justify-between gap-6 relative xl:left-[20px]">
            <div className="flex items-center gap-6 relative xl:-left-[40px]">
              <Link to="/" aria-label="На главную">
                <img
                  src={LogoIcon}
                  alt="Logo"
                  className="h-7 object-contain pb-[4px]"
                />
              </Link>
              <DesktopNav link={link} />
            </div>

            <div className="hidden xl:flex items-center gap-4">
              <LangSwitcher link={link} />
              <AuthButtons btn={btn} setShowAuthModal={setShowAuthModal} />
              <button className="p-1">
                <img src={BellIcon} alt="Уведомления" className="h-7 w-auto" />
              </button>
            </div>

            <div className="flex items-center gap-4 xl:hidden">
              <button>
                <img src={BellIcon} alt="Уведомления" className="h-7 w-auto" />
              </button>
              <Suspense fallback={<div />}>
                <BurgerMenuButton
                  menuOpen={menuOpen}
                  setMenuOpen={setMenuOpen}
                />
              </Suspense>
            </div>
          </div>
        </div>
      </header>

      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-md z-30 xl:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}

      <Suspense fallback={<div />}>
        <MobileMenu
          menuOpen={menuOpen}
          menuRef={menuRef}
          btn={btn}
          setMenuOpen={setMenuOpen}
          setShowAuthModal={setShowAuthModal}
        />
      </Suspense>

      {showAuthModal.visible && (
        <AuthModal
          onClose={() => setShowAuthModal({ visible: false, mode: "login" })}
          mode={showAuthModal.mode}
        />
      )}
    </>
  );
}
