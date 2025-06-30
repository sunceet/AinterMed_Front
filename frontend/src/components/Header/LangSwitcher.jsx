"use client";

export default function LangSwitcher({ link }) {
  return (
    <div className="font-[Manrope] font-bold flex gap-4 pr-4 text-[14px]">
      <button className={`${link} text-[#438EFF] cursor-pointer`}>RU</button>
      <button className={`${link} cursor-pointer`}>ENG</button>
    </div>
  );
}
