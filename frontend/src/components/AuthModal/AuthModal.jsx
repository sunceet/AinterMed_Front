"use client";

import { useState } from "react";
import Image from "next/image";

export default function AuthModal({ onClose, mode = "register" }) {
  const [showPassword, setShowPassword] = useState(false);
  const isLogin = mode === "login";

  const title = isLogin ? "ВОЙТИ В АККАУНТ" : "РЕГИСТРАЦИЯ";
  const imageSrc = isLogin
    ? "/assets/svg/auth.svg"
    : "/assets/svg/register.svg";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="relative flex flex-col md:flex-row bg-white rounded-[32px] shadow-xl w-full max-w-[1260px] h-auto md:h-[800px]">
        {/* Левая часть с изображением */}
        <div className="hidden md:block w-full md:w-[630px] h-full rounded-l-[32px] overflow-hidden">
          <Image
            src={imageSrc}
            alt="Auth"
            width={630}
            height={800}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Правая часть с формой */}
        <div className="w-full md:w-[630px]  h-full px-6 md:px-[70px] pt-2 md:pt-25 pb-8 flex flex-col justify-start  relative">
          {/* Кнопка закрытия */}
          <button
            onClick={onClose}
            className="cursor-pointer absolute top-4 right-4 text-3xl font-bold text-black"
          >
            ×
          </button>

          {/* Заголовок */}
          <h2 className="font-[Involve] font-bold text-[24px] md:text-[28px] leading-[10px] uppercase text-center mb-1">
            {title}
          </h2>

          {/* Имя только при регистрации */}
          {!isLogin && (
            <div className="mb-1">
              <label className="block text-[#5B5B5B] text-[18px] md:text-[20px] font-semibold leading-[58px] font-[Manrope]">
                Имя
              </label>
              <input
                type="text"
                className="w-full h-[58px] px-4 border border-[#BABABA] rounded-[14px] text-base outline-none"
                placeholder="Введите имя"
              />
            </div>
          )}

          {/* Email */}
          <div className="mb-4">
            <label className="block text-[#5B5B5B] text-[18px] md:text-[20px] font-semibold leading-[58px] font-[Manrope]">
              Email
            </label>
            <input
              type="email"
              className="w-full h-[58px] px-4 border border-[#BABABA] rounded-[14px] text-base outline-none"
              placeholder="Введите email"
            />
          </div>

          {/* Пароль */}
          <div className="mb-8">
            <label className="block text-[#5B5B5B] text-[18px] md:text-[20px] font-semibold leading-[58px] font-[Manrope]">
              Пароль
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                className="w-full h-[58px] px-4 pr-12 border border-[#BABABA] rounded-[14px] text-base outline-none"
                placeholder="Введите пароль"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="cursor-pointer absolute right-4 top-1/2 transform -translate-y-1/2"
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

          <button className="w-[351px] mx-auto h-[64px] cursor-pointer bg-gradient-to-r from-[#437CFF] to-[#65EDFF] text-white rounded-[100px] font-[Involve] font-medium flex items-center justify-center text-[18px] leading-[16px] tracking-[0.02em] uppercase">
            {isLogin ? "Войти" : "Зарегистрироваться"}
          </button>
        </div>
      </div>
    </div>
  );
}
