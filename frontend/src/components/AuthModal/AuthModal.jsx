"use client";

import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function AuthModal({ onClose, mode = "register" }) {
  const { t } = useTranslation();
  const [showPassword, setShowPassword] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [currentMode, setCurrentMode] = useState(mode);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isLogin = currentMode === "login";
  const title = isLogin ? t("auth2.title_login") : t("auth2.title_register");
  const imageSrc = isLogin
    ? "/assets/svg/auth.svg"
    : "/assets/svg/register.svg";

  useEffect(() => {
    const originalHtmlOverflow = document.documentElement.style.overflow;
    const originalBodyOverflow = document.body.style.overflow;

    // Добавляем класс на <body>, чтобы скрыть Header через глобальный стиль
    document.body.classList.add("modal-open");

    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    window.scrollTo(0, 0);

    return () => {
      document.body.classList.remove("modal-open");
      document.documentElement.style.overflow = originalHtmlOverflow;
      document.body.style.overflow = originalBodyOverflow;
    };
  }, []);

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
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
      onClick={(e) => {
        if (window.innerWidth <= 768 && e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        className="relative flex flex-col md:flex-row bg-white rounded-[32px] shadow-xl w-full max-w-[1260px] h-auto md:h-[800px] animate-fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="hidden md:block w-full md:w-[630px] h-full rounded-l-[32px] overflow-hidden">
          <img
            src={imageSrc}
            alt="Auth"
            width={630}
            height={800}
            loading="eager"
            decoding="async"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-full md:w-[630px] h-full px-4 sm:px-6 md:px-[70px] pb-8 pt-6 flex flex-col relative">
          <button
            onClick={onClose}
            className="cursor-pointer absolute top-5 right-5 w-7 h-7  sm:w-9 sm:h-9 md:w-9 md:h-9 flex items-center justify-center"
            aria-label="Закрыть"
          >
            <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
              <path
                d="M6 6L18 18"
                stroke="#2D2D2D"
                strokeWidth="1"
                strokeLinecap="round"
              />
              <path
                d="M6 18L18 6"
                stroke="#2D2D2D"
                strokeWidth="1"
                strokeLinecap="round"
              />
            </svg>
          </button>

          <div className={`${isLogin ? "pt-5 md:pt-40" : "pt-10 md:pt-20"}`}>
            <h2 className="font-[Involve] font-bold text-[24px] md:text-[28px] leading-[10px] uppercase text-center mb-4">
              {title}
            </h2>

            {!isLogin && (
              <div className="mb-1">
                <label className="mb-[-10px] block text-[#5B5B5B] text-[16px] xl:text-[18px] font-semibold font-[Manrope] leading-[58px]">
                  {t("auth2.name")}
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full h-[48px] sm:h-[52px] md:h-[58px] bg-[#F6F6F6] px-4 border border-[#BABABA] rounded-[14px] text-base outline-none"
                  placeholder={t("auth2.placeholder_name")}
                />
              </div>
            )}

            <div className="mb-1">
              <label className="mb-[-10px] block text-[#5B5B5B] text-[16px] xl:text-[18px] font-semibold font-[Manrope] leading-[58px]">
                {t("auth2.email")}
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full h-[48px] sm:h-[52px] md:h-[58px] bg-[#F6F6F6] px-4 border border-[#BABABA] rounded-[14px] text-base outline-none"
                placeholder={t("auth2.placeholder_email")}
              />
            </div>

            <div className="mb-6">
              <label className="mb-[-10px] block text-[#5B5B5B] text-[16px] xl:text-[18px] font-semibold font-[Manrope] leading-[58px]">
                {t("auth2.password")}
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full h-[48px] sm:h-[52px] md:h-[58px] px-4 pr-12 bg-[#F6F6F6] border border-[#BABABA] rounded-[14px] text-base outline-none"
                  placeholder={t("auth2.placeholder_password")}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2"
                >
                  <img
                    src={
                      showPassword
                        ? "/assets/svg/eye-open.svg"
                        : "/assets/svg/eye-close.svg"
                    }
                    alt={showPassword ? "Hide password" : "Show password"}
                    width={24}
                    height={24}
                    loading="eager"
                    decoding="async"
                  />
                </button>
              </div>
            </div>

            {!isLogin && (
              <div className="flex items-center mb-5 gap-3">
                <div
                  className="w-[36px] h-[36px] min-w-[36px] min-h-[36px] rounded-full border border-[#BABABA] flex items-center justify-center cursor-pointer"
                  onClick={() => setAgreed(!agreed)}
                >
                  {agreed && (
                    <img
                      src="/assets/svg/checkbox.svg"
                      alt="Checkbox"
                      className="w-[24px] h-[24px] select-none"
                      loading="eager"
                      decoding="async"
                    />
                  )}
                </div>

                <p className="text-[14px] text-[#5B5B5B] font-[Manrope] leading-tight max-w-[400px]">
                  {t("auth2.agree_text")}&nbsp;
                  <a
                    href="https://aintermed.com/legal/privacy"
                    target="_blank"
                    className="text-[#438EFF] underline"
                  >
                    {t("auth2.privacy")}
                  </a>{" "}
                  {t("auth2.and")}&nbsp;
                  <a
                    href="https://aintermed.com/legal/terms"
                    target="_blank"
                    className="text-[#438EFF] underline"
                  >
                    {t("auth2.terms")}
                  </a>
                </p>
              </div>
            )}

            <button
              disabled={!isFormValid()}
              className={`mt-10 w-full max-w-[351px] h-[50px] sm:h-[58px] md:h-[64px] mx-auto rounded-[100px] font-[Involve] text-[13px] xl:text-[16px] md:text-[18px] tracking-[0.02em] uppercase flex items-center justify-center transition ${
                !isFormValid()
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-gradient-to-r from-[#437CFF] to-[#65EDFF] text-white cursor-pointer"
              }`}
            >
              {isLogin ? t("auth2.submit_login") : t("auth2.submit_register")}
            </button>

            <p className="text-center mt-4 text-[13px] xl:text-[16px] md:text-[18px] text-[#5B5B5B] font-[Manrope]">
              {isLogin ? t("auth2.no_account") : t("auth2.have_account")}{" "}
              <button
                onClick={() => setCurrentMode(isLogin ? "register" : "login")}
                className="text-[#438EFF] cursor-pointer select-none outline-none underline"
              >
                {isLogin ? t("auth2.register") : t("auth2.login")}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
