"use client";

export default function DesktopNav({ link }) {
  return (
    <nav className="font-[Manrope] font-bold hidden xl:flex gap-6 xl:gap-8 text-[14px]">
      <a href="#" className={`${link} text-[#438EFF]`}>
        ГЛАВНОЕ
      </a>
      <a href="#" className={link}>
        ИИ&nbsp;ЧАТ
      </a>
      <a href="#" className={link}>
        БАЗА&nbsp;ЗНАНИЙ
      </a>
      <a href="#" className={link}>
        О&nbsp;НАС
      </a>
      <a href="#" className={link}>
        ТАРИФЫ
      </a>
    </nav>
  );
}
