"use client";

import { useEffect, useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import { useSubscribeContext } from "./SubscribeContext";

export default function PlanCard({
  plan,
  duration,
  durationCounts,
  discounts,
  getMonthWord,
  openModal,
}) {
  const { t } = useTranslation();
  const { agreements, setAgreements } = useSubscribeContext();

  // Ссылки и состояния
  const cardRef = useRef(null);
  const timeoutRef = useRef(null);
  const interactionOccurred = useRef(false);

  const [isVisible, setIsVisible] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [touchStartX, setTouchStartX] = useState(null);

  // 1) Следим за тем, видна ли карточка (IntersectionObserver)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.6 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  // 2) Когда карточка становится видимой — запускаем таймер подсказки
  useEffect(() => {
    const isMobile = window.innerWidth <= 768;
    if (!isMobile || !isVisible) return;

    // Отложенный показ «пальца»
    timeoutRef.current = setTimeout(() => {
      if (!interactionOccurred.current) {
        setShowHint(true);
      }
    }, 3000);

    return () => clearTimeout(timeoutRef.current);
  }, [isVisible]);

  // 3) Сбрасываем подсказку, когда карточка уходит из видимости
  useEffect(() => {
    if (!isVisible) {
      clearTimeout(timeoutRef.current);
      setShowHint(false);
    }
  }, [isVisible]);

  // 4) Обработчики тача — первый свайп гасит подсказку
  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (touchStartX === null) return;
    const deltaX = Math.abs(e.touches[0].clientX - touchStartX);

    if (deltaX > 30 && !interactionOccurred.current) {
      interactionOccurred.current = true;
      clearTimeout(timeoutRef.current);
      setShowHint(false);
    }
  };

  if (!plan) return null;

  const isPaid = plan.id !== "free";
  const agree = agreements[plan.id] || {};
  const canSubmit = !isPaid || (agree.a && agree.b);

  const months = durationCounts[duration];
  const discount = discounts[duration] || 0;
  const basePrice = Number(plan.price);
  const finalPrice = Math.round(basePrice * months * (1 - discount));

  return (
    <div
      ref={cardRef}
      className="relative snap-center flex-shrink-0 w-[92%] sm:w-[392px] bg-white rounded-[34px] border border-white px-[24px] py-[24px] flex flex-col"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      {/* ——— Содержимое карточки ——— */}
      <div className="text-center mb-4">
        <div className="min-h-[100px] flex flex-col justify-start items-center">
          <h3 className="text-[28px] font-[600] leading-[36px] font-[Involve]">
            {plan.title}
          </h3>
          <p className="text-[15px] text-[#555555] font-[Manrope] mt-[12px]">
            {plan.description}
          </p>
        </div>

        <div className="flex items-end justify-center gap-[4px] mt-[1px]">
          <span className="text-[30px] font-[Involve] text-[#555555] font-medium relative -top-[11px]">
            {plan.priceSymbol}
          </span>
          <span className="text-[48px] font-[Involve] font-medium leading-[56px]">
            {finalPrice}
          </span>
          <span className="text-[17px] xl:text-[20px] font-[Involve] font-[500] text-[#555] mb-[4px]">
            {t("pricing.total_for", {
              count: months,
              monthWord: getMonthWord(months, t),
            })}
          </span>
        </div>
      </div>

      <ul className="flex-grow text-[15px] font-[Manrope] text-[#555555] leading-[26px] list-disc pl-[15px] text-left mb-[24px]">
        {plan.features.map((feature, i) => (
          <li key={i}>{feature}</li>
        ))}
      </ul>

      {isPaid && (
        <button
          onClick={openModal}
          disabled={!canSubmit}
          className={`w-full h-[56px] rounded-full text-white font-[Involve] text-[15px] font-medium uppercase tracking-wide transition-transform duration-100 ${
            canSubmit
              ? "hover:scale-105 cursor-pointer"
              : "opacity-50 cursor-not-allowed"
          } ${plan.buttonColor}`}
        >
          {t("pricing.button")}
        </button>
      )}

      {isPaid && (
        <div className="mt-4 space-y-2 text-[13px] text-[#555] font-[Manrope]">
          {/* чекбоксы соглашений */}
          <div className="flex items-start gap-2">
            <input
              type="checkbox"
              checked={agree.a}
              onChange={() =>
                setAgreements((prev) => ({
                  ...prev,
                  [plan.id]: {
                    ...prev[plan.id],
                    a: !prev[plan.id].a,
                  },
                }))
              }
              className="mt-[2px] accent-[#437CFF] cursor-pointer"
            />
            <span className="text-left">
              {t("pricing.terms1")}&nbsp;
              <a
                href="https://aintermed.com/legal/terms"
                target="_blank"
                className="underline"
              >
                {t("pricing.terms_link1")}
              </a>{" "}
              {t("pricing.and")}&nbsp;
              <a
                href="https://aintermed.com/legal/privacy"
                target="_blank"
                className="underline"
              >
                {t("pricing.terms_link2")}
              </a>
            </span>
          </div>
          <div className="flex items-start gap-2">
            <input
              type="checkbox"
              checked={agree.b}
              onChange={() =>
                setAgreements((prev) => ({
                  ...prev,
                  [plan.id]: {
                    ...prev[plan.id],
                    b: !prev[plan.id].b,
                  },
                }))
              }
              className="mt-[2px] accent-[#437CFF] cursor-pointer"
            />
            <span className="text-left">
              {t("pricing.terms2")}&nbsp;
              <a
                href="https://aintermed.com/legal/oferta"
                target="_blank"
                className="underline"
              >
                {t("pricing.terms_link3")}
              </a>
            </span>
          </div>
        </div>
      )}

      {/* ——— ПОДСКАЗКА: иконка «палец» — показывается только если карточка видна и без взаимодействия */}
      {showHint && (
        <div className="absolute right-[-10px] top-1/2 transform -translate-y-1/2 z-50 pointer-events-none">
          <img
            src="/assets/svg/cursor_finger.svg"
            alt="Swipe right hint"
            className="w-[36px] h-[36px] animate-swipe-right opacity-80"
          />
        </div>
      )}
    </div>
  );
}
