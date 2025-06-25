"use client";

import dynamic from "next/dynamic";
import { useState, useRef } from "react";
import DesktopNav from "./DesktopNav";
import LangSwitcher from "./LangSwitcher";
import AuthButtons from "./AuthButtons";
import AuthModal from "../AuthModal/AuthModal";

const BurgerMenuButton = dynamic(() => import("./BurgerMenuButton"), { ssr: false });
const MobileMenu = dynamic(() => import("./MobileMenu"), { ssr: false });

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState({ visible: false, mode: "login" });
  const menuRef = useRef(null);

  const link = "hover:underline transition-colors duration-150 whitespace-nowrap";
  const btn = "rounded-full text-sm font-bold tracking-tight py-3 px-7 transition-colors";

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-[#C6C6C6]">
        <div className="mx-auto flex h-18 items-center justify-between max-w-screen-2xl px-4 sm:px-6 lg:px-12 2xl:px-20 font-[Manrope]">
          <div className="flex items-center gap-10">
            <a href="/" aria-label="На главную">
              <img
                src="/assets/svg/Logo.svg"
                alt="Logo"
                className="h-7 object-contain pb-[4px]"
              />
            </a>
            <DesktopNav link={link} />
          </div>

          <div className="hidden xl:flex items-center gap-4">
            <LangSwitcher link={link} />
            <AuthButtons btn={btn} setShowAuthModal={setShowAuthModal} />
            <button className="p-1">
              <img
                src="/assets/svg/Bell.svg"
                alt="Уведомления"
                className="h-7 w-auto"
              />
            </button>
          </div>

          <div className="flex items-center gap-5 xl:hidden">
            <button>
              <img
                src="/assets/svg/Bell.svg"
                alt="Уведомления"
                className="h-8 w-auto"
              />
            </button>
            <BurgerMenuButton menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          </div>
        </div>
      </header>

      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-md z-30 xl:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}

      <MobileMenu
        menuOpen={menuOpen}
        menuRef={menuRef}
        btn={btn}
        setMenuOpen={setMenuOpen}
        setShowAuthModal={setShowAuthModal}
      />

      {showAuthModal.visible && (
        <AuthModal
          onClose={() => setShowAuthModal({ visible: false, mode: "login" })}
          mode={showAuthModal.mode}
        />
      )}
    </>
  );
}
