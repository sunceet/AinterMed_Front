// import React from "react";
import Logo from "../../assets/svg/Logo.svg";
import Bell from "../../assets/svg/Bell.svg";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full h-[78px] bg-white/80 backdrop-blur-xl border-b border-[#C6C6C6] font-[Manrope] text-[14px] font-bold z-50">
      <div className="w-full h-full flex items-center justify-between px-40">
        <div className="flex items-center gap-16">
          <img src={Logo} alt="Logo" className="h-[31px] object-contain" />

          <nav className="flex gap-8">
            <a href="#" className="text-[#438EFF] hover:underline">
              ГЛАВНОЕ
            </a>
            <a href="#" className="">
              ИИ&nbsp;ЧАТ
            </a>
            <a href="#" className="">
              БАЗА&nbsp;ЗНАНИЙ
            </a>
            <a href="#" className="">
              О&nbsp;НАС
            </a>
            <a href="#" className="">
              ТАРИФЫ
            </a>
            <a href="#" className="">
              КОНТАКТЫ
            </a>
          </nav>
        </div>

        <div className="flex items-center gap-6">
          <div className="flex gap-2">
            <button className="text-[#438EFF] hover:underline">RU</button>
            <button className="hover:underline">ENG</button>
          </div>

          <button className="px-4 py-2 rounded-full text-[12px] border border-[#C6C6C6] bg-white text-black hover:bg-gray-100">
            ВОЙТИ
          </button>
          <button className="px-5 py-2 rounded-full text-[12px] bg-black text-white hover:bg-[#222]">
            РЕГИСТРАЦИЯ
          </button>

          <button className="p-1">
            <img src={Bell} alt="Notifications" className="h-[29.7px] w-auto" />
          </button>
        </div>
      </div>
    </header>
  );
}
