"use client";

import { useRef, useEffect } from "react";
import PlanCard from "./PlanCard";
import { useSubscribeContext } from "./SubscribeContext";
import { useTranslation } from "react-i18next";

export default function PlanCards({ openModal }) {
  const scrollContainerRef = useRef(null);
  const { t } = useTranslation();
  const {
    duration,
    agreements,
    setAgreements,
    durationCounts,
    discounts,
    getMonthWord,
  } = useSubscribeContext();

  const plans = [
    {
      id: "free",
      title: t("plans.free.title"),
      description: t("plans.free.description"),
      priceSymbol: t("plans.symbol"),
      price: "0",
      period: t("plans.period"),
      buttonColor: "bg-gradient-to-r from-[#447CFF50] to-[#659DFF50]",
      features: t("plans.free.features", { returnObjects: true }),
    },
    {
      id: "advanced",
      title: t("plans.advanced.title"),
      description: t("plans.advanced.description"),
      priceSymbol: t("plans.symbol"),
      price: t("plans.advanced.price"),
      period: t("plans.period"),
      buttonColor: "bg-gradient-to-r from-[#0066FF] to-[#009DFF]",
      features: t("plans.advanced.features", { returnObjects: true }),
    },
    {
      id: "premium",
      title: t("plans.premium.title"),
      description: t("plans.premium.description"),
      priceSymbol: t("plans.symbol"),
      price: t("plans.premium.price"),
      period: t("plans.period"),
      buttonColor: "bg-gradient-to-r from-[#00A6FF] to-[#00F2FF]",
      features: t("plans.premium.features", { returnObjects: true }),
    },
  ];

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
    container.scrollTo({ left: scrollLeft, behavior: "smooth" });
  }, []);

  return (
    <div
      ref={scrollContainerRef}
      className="w-full max-w-[1255px] overflow-x-auto snap-x snap-mandatory flex gap-[10px] xl:gap-[40px] px-4 lg:px-0 scrollbar-hidden"
      style={{ overflowY: "hidden" }}
    >
      {plans.map((plan) => (
        <PlanCard
          key={plan.id}
          plan={plan}
          duration={duration}
          durationCounts={durationCounts}
          discounts={discounts}
          agreements={agreements}
          setAgreements={setAgreements}
          getMonthWord={getMonthWord}
          openModal={openModal}
        />
      ))}
    </div>
  );
}
