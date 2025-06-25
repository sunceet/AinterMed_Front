"use client";

import { useState } from "react";
import Image from "next/image";

export default function AuthModal({ onClose, mode = "register" }) {
  const [showPassword, setShowPassword] = useState(false);
  const isLogin = mode === "login";

  const title = isLogin ? "ВОЙТИ В АККАУНТ" : "РЕГИСТРАЦИЯ";
  const imageSrc = isLogin ? "/assets/svg/auth.svg" : "/assets/svg/register.svg";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
      <div
        className="relative flex flex-col md:flex-row bg-white rounded-[32px] shadow-xl w-full max-w-[1260px] h-auto md:h-[800px]"
      >
        {/* Левая часть с изображением */}
        <div className="w-full md:w-[630px] h-[300px] md:h-full rounded-t-[32px] md:rounded-l-[32px] md:rounded-tr-none overflow-hidden">
          <Image
            src={imageSrc}
            alt="Auth Illustration"
            width={630}
            height={800}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Правая часть с формой */}
        <div className="w-full md:w-[630px] h-full px-6 md:px-[70px] pt-8 md:pt-[76px] pb-10 flex flex-col justify-start md:justify-center relative">
          {/* Кнопка закрытия */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-3xl font-bold text-black"
          >
            ×
          </button>

          {/* Заголовок */}
          <h2
            className="font-[Involve] font-bold text-[24px] md:text-[28px] leading-[58px] uppercase text-center mb-8"
          >
            {title}
          </h2>

          {/* Имя только при регистрации */}
          {!isLogin && (
            <div className="mb-4">
              <label className="block text-[18px] md:text-[20px] font-semibold leading-[58px] font-[Manrope]">
                Имя
              </label>
              <input
                type="text"
                className="w-full h-[58px] px-4 border border-black rounded-[14px] text-base outline-none"
                placeholder="Введите имя"
              />
            </div>
          )}

          {/* Email */}
          <div className="mb-4">
            <label className="block text-[18px] md:text-[20px] font-semibold leading-[58px] font-[Manrope]">
              Email
            </label>
            <input
              type="email"
              className="w-full h-[58px] px-4 border border-black rounded-[14px] text-base outline-none"
              placeholder="Введите email"
            />
          </div>

          {/* Пароль */}
          <div className="mb-8">
            <label className="block text-[18px] md:text-[20px] font-semibold leading-[58px] font-[Manrope]">
              Пароль
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                className="w-full h-[58px] px-4 pr-12 border border-black rounded-[14px] text-base outline-none"
                placeholder="Введите пароль"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2"
              >
                <Image
                  src="/assets/svg/hide.svg"
                  alt="Скрыть/Показать"
                  width={24}
                  height={24}
                />
              </button>
            </div>
          </div>

          {/* Кнопка действия */}
          <button className="w-full h-[58px] bg-black text-white rounded-[14px] font-semibold text-base">
            {isLogin ? "Войти" : "Зарегистрироваться"}
          </button>
        </div>
      </div>
    </div>
  );
}
