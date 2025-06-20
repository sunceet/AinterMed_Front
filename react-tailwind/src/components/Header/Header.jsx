import React from "react";
import Logo from "../../assets/Logo.svg";
import Bell from "../../assets/Bell.svg";

export default function Header() {
  return (
    <header className="relative w-[1920px] h-[99px] bg-white border-b border-[#C6C6C6] font-[Manrope] text-[14px] leading-[24px] font-bold">
      <img
        src={Logo}
        alt="Logo"
        className="absolute top-[29px] left-[160px] w-[210.35px] h-[32.72px]"
      />

      <nav className="absolute top-[37px] left-[420px] flex gap-[32px] w-[719px] h-[24px] items-center justify-center text-center">
        <span className="text-[#438EFF]">ГЛАВНОЕ</span>
        <span>ИИ ЧАТ</span>
        <span>БАЗА ЗНАНИЙ</span>
        <span>О НАС</span>
        <span>ТАРИФЫ</span>
        <span>КОНТАКТЫ</span>
        <span>3D АНАТОМИЯ</span>
      </nav>

      <div className="absolute top-[37px] left-[1381px] w-[60px] h-[24px] flex items-center justify-between">
        <span className="text-[#438EFF]">RU</span>
        <span>ENG</span>
      </div>

      <button className="absolute top-[26px] left-[1470px] w-[116px] h-[46px] rounded-full border border-[#C6C6C6] bg-white text-black">
        ВОЙТИ
      </button>
      <button className="absolute top-[26px] left-[1596px] w-[164px] h-[46px] rounded-full bg-black text-white">
        РЕГИСТРАЦИЯ
      </button>

      <img
        src={Bell}
        alt="Notifications"
        className="absolute top-[30px] left-[1811px] w-[36px] h-[36px]"
      />
    </header>
  );
}
