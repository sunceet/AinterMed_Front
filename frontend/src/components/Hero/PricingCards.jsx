"use client";

import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

const PricingCards = () => {
  const { t } = useTranslation();
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const secondCard = container.children[1];
    if (!secondCard) return;

    const containerRect = container.getBoundingClientRect();
    const cardRect = secondCard.getBoundingClientRect();

    const scrollLeft =
      secondCard.offsetLeft -
      container.offsetLeft -
      (containerRect.width / 2 - cardRect.width / 2);

    container.scrollTo({
      left: scrollLeft,
      behavior: "smooth",
    });
  }, []);

  const plans = [
    {
      title: t("plans.free.title"),
      description: t("plans.free.description"),
      priceSymbol: t("plans.symbol"),
      price: "0",
      period: t("plans.period"),
      buttonColor: "bg-gradient-to-r from-[#447CFF50] to-[#659DFF50]",
      features: t("plans.free.features", { returnObjects: true }),
    },
    {
      title: t("plans.advanced.title"),
      description: t("plans.advanced.description"),
      priceSymbol: t("plans.symbol"),
      price: t("plans.advanced.price"),
      period: t("plans.period"),
      buttonColor:
        "transition-transform duration-100 hover:scale-105 bg-gradient-to-r from-[#0066FF] to-[#009DFF]",
      features: t("plans.advanced.features", { returnObjects: true }),
    },
    {
      title: t("plans.premium.title"),
      description: t("plans.premium.description"),
      priceSymbol: t("plans.symbol"),
      price: t("plans.premium.price"),
      period: t("plans.period"),
      buttonColor:
        "transition-transform duration-100 hover:scale-105 bg-gradient-to-r from-[#00A6FF] to-[#00F2FF]",
      features: t("plans.premium.features", { returnObjects: true }),
    },
  ];

  return (
    <div className="scroll-mt-[70px] w-full py-8 flex flex-col items-center gap-[20px]">
      <h2 className="pt-4 text-[28px] xl:text-[40px] font-[Involve] font-semibold text-black text-center">
        {t("pricing.heading1")}{" "}
        <span className="bg-gradient-to-r from-[#437CFF] to-[#65EDFF] text-transparent bg-clip-text">
          {t("pricing.heading2")}{" "}
        </span>
      </h2>
      <p className="mt-[-8px] mb-[12px] text-[15px] xl:text-[22px] font-[Involve] font-medium text-[#555555] text-center">
        {t("pricing.subheading")}{" "}
      </p>

      <div
        ref={scrollContainerRef}
        className="w-full max-w-[1255px] overflow-x-auto snap-x snap-mandatory flex gap-[10px] xl:gap-[40px] px-4 lg:px-0 scrollbar-hidden"
        style={{ overflowY: "hidden" }}
      >
        {plans.map((plan, idx) => (
          <div
            key={idx}
            className="snap-center flex-shrink-0 w-[92%] sm:w-[392px] bg-white rounded-[32px] border border-white px-[24px] py-[24px] flex flex-col"
          >
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
                  {plan.price}
                </span>
                <span className="text-[20px] font-[Involve] font-[500] text-[#555] mb-[4px]">
                  {plan.period}
                </span>
              </div>
            </div>

            <ul className="flex-grow text-[15px] font-[Manrope] text-[#555555] leading-[26px] list-disc pl-[15px] text-left mb-[24px]">
              {(Array.isArray(plan.features) ? plan.features : []).map(
                (feature, i) => (
                  <li key={i}>{feature}</li>
                )
              )}
            </ul>

            <button
              onClick={() => (window.location.href = "/subscribe")}
              className={`w-full h-[56px] cursor-pointer rounded-full text-white font-[Involve] text-[15px] font-medium uppercase tracking-wide transition ${plan.buttonColor}`}
            >
              {t("pricing.button")}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingCards;
