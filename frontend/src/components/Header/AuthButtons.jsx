"use client";

export default function AuthButtons({ btn }) {
  return (
    <>
      <button
        className={`${btn} font-[Manrope] font-bold border border-[#C6C6C6] bg-white text-[14px]`}
      >
        ВОЙТИ
      </button>
      <button
        className={`${btn} font-[Manrope] font-bold border border-black text-white bg-black text-[14px]`}
      >
        РЕГИСТРАЦИЯ
      </button>
    </>
  );
}
