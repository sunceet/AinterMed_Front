"use client";

import { useState } from "react";
import Image from "next/image";

export default function AuthModal({ onClose, mode = "register" }) {
  const [showPassword, setShowPassword] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [currentMode, setCurrentMode] = useState(mode);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const isLogin = currentMode === "login";

  const title = isLogin ? "ВОЙТИ В АККАУНТ" : "РЕГИСТРАЦИЯ";
  const imageSrc = isLogin
    ? "/assets/svg/auth.svg"
    : "/assets/svg/register.svg";

  const allowedDomains = [
    "gmail.com",
    "yandex.ru",
    "ya.ru",
    "mail.ru",
    "inbox.ru",
    "list.ru",
    "bk.ru",
    "outlook.com",
    "hotmail.com",
    "icloud.com",
    "yahoo.com",
  ];

  const isValidEmail = (email) => {
    const trimmed = email.trim().toLowerCase();
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(trimmed)) return false;
    const domain = trimmed.split("@")[1];
    return allowedDomains.includes(domain);
  };

  const isFormValid = () => {
    if (isLogin) {
      return isValidEmail(email) && password.trim() !== "";
    } else {
      return (
        name.trim() !== "" &&
        isValidEmail(email) &&
        password.trim() !== "" &&
        agreed
      );
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="relative flex flex-col md:flex-row bg-white rounded-[32px] shadow-xl w-full max-w-[1260px] h-auto md:h-[800px] animate-fade-in">
        {/* Левая часть */}
        <div className="hidden md:block w-full md:w-[630px] h-full rounded-l-[32px] overflow-hidden">
          <Image
            src={imageSrc}
            alt="Auth"
            width={630}
            height={800}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Правая часть */}
        <div className="w-full md:w-[630px] h-full px-4 sm:px-6 md:px-[70px] pb-8 pt-6 flex flex-col relative">
          <button
            onClick={onClose}
            className="cursor-pointer absolute top-4 right-4 text-3xl font-bold text-black"
          >
            ×
          </button>

          <div className={`${isLogin ? "pt-5 md:pt-40" : "pt-10 md:pt-20"}`}>
            <h2 className="font-[Involve] font-bold text-[24px] md:text-[28px] leading-[10px] uppercase text-center mb-4">
              {title}
            </h2>

            {!isLogin && (
              <div className="mb-4">
                <label className="block text-[#5B5B5B] text-[16px] xl:text-[18px] font-semibold font-[Manrope] leading-[58px]">
                  Имя
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full h-[48px] sm:h-[52px] md:h-[58px] bg-[#F6F6F6] px-4 border border-[#BABABA] rounded-[14px] text-base outline-none"
                  placeholder="Введите имя"
                />
              </div>
            )}

            <div className="mb-1">
              <label className="block text-[#5B5B5B] text-[16px] xl:text-[18px] font-semibold font-[Manrope] leading-[58px]">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full h-[48px] sm:h-[52px] md:h-[58px] bg-[#F6F6F6] px-4 border border-[#BABABA] rounded-[14px] text-base outline-none"
                placeholder="Введите email"
              />
            </div>

            <div className="mb-6">
              <label className="block text-[#5B5B5B] text-[16px] xl:text-[18px] font-semibold font-[Manrope] leading-[58px]">
                Пароль
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full h-[48px] sm:h-[52px] md:h-[58px] px-4 pr-12 bg-[#F6F6F6] border border-[#BABABA] rounded-[14px] text-base outline-none"
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

            {!isLogin && (
              <div className="flex items-center mb-5 gap-2 xl:gap-3 xl:mb-6">
                <div
                  className="w-[41.98px] h-[28px] xl:w-[48px] xl:h-[48px] rounded-full border border-[#BABABA] flex items-center justify-center cursor-pointer"
                  onClick={() => setAgreed(!agreed)}
                >
                  {agreed && (
                    <img
                      src="/assets/svg/checkbox.svg"
                      alt="Чекбокс"
                      className="select-none w-[38px] h-[38px]"
                    />
                  )}
                </div>
                <p className=" text-[10px] xl:text-[16px] text-[#5B5B5B] font-[Manrope] leading-tight max-w-[400px]">
                  Согласен с действующей{" "}
                  <a
                    href="https://aintermed.com/legal/privacy"
                    target="_blank"
                    className="text-[#438EFF] underline"
                  >
                    политикой конфиденциальности
                  </a>{" "}
                  и{" "}
                  <a
                    href="https://aintermed.com/legal/terms"
                    target="_blank"
                    className="text-[#438EFF] underline"
                  >
                    пользовательским соглашением
                  </a>
                </p>
              </div>
            )}

            <button
              disabled={!isFormValid()}
              className={`w-full max-w-[351px] h-[50px] sm:h-[58px] md:h-[64px] mx-auto rounded-[100px] font-[Involve] text-[13px] xl:text-[16px] md:text-[18px] tracking-[0.02em] uppercase flex items-center justify-center transition ${
                !isFormValid()
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-gradient-to-r from-[#437CFF] to-[#65EDFF] text-white cursor-pointer"
              }`}
            >
              {isLogin ? "Войти" : "Зарегистрироваться"}
            </button>

            <p className="text-center mt-4 text-[13px] xl:text-[16px] md:text-[18px] text-[#5B5B5B] font-[Manrope]">
              {isLogin ? "Нет аккаунта?" : "Уже есть аккаунт?"}{" "}
              <button
                onClick={() => setCurrentMode(isLogin ? "register" : "login")}
                className="text-[#438EFF] cursor-pointer select-none outline-none underline"
              >
                {isLogin ? "Зарегистрироваться" : "Войти"}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
