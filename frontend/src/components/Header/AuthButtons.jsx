"use client";

export default function AuthButtons({ btn, setShowAuthModal }) {
  return (
    <>
      <button
        className={`${btn} cursor-pointer border border-[#C6C6C6]`}
        onClick={() => setShowAuthModal({ visible: true, mode: "login" })}
      >
        ВОЙТИ
      </button>
      <button
        className={`${btn} cursor-pointer bg-black text-white border border-black`}
        onClick={() => setShowAuthModal({ visible: true, mode: "register" })}
      >
        РЕГИСТРАЦИЯ
      </button>
    </>
  );
}
