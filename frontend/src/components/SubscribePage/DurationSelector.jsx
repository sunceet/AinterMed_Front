"use client";

import { useTranslation } from "react-i18next";
import { useSubscribeContext } from "./SubscribeContext";

export default function DurationSelector() {
  const { t } = useTranslation();
  const { duration, setDuration } = useSubscribeContext();

  const durations = [
    {
      value: "1m",
      label: t("pricing.month"),
    },
    {
      value: "3m",
      label: (active) => (
        <>
          3 месяца{" "}
          <span
            className={`font-semibold transition-colors duration-150 ${
              active ? "text-white" : "text-[#437CFF]"
            }`}
          >
            -5%
          </span>
        </>
      ),
    },
    {
      value: "6m",
      label: (active) => (
        <>
          Полгода{" "}
          <span
            className={`font-semibold transition-colors duration-150 ${
              active ? "text-white" : "text-[#437CFF]"
            }`}
          >
            -10%
          </span>
        </>
      ),
    },
    {
      value: "12m",
      label: (active) => (
        <>
          Год{" "}
          <span
            className={`font-semibold transition-colors duration-150 ${
              active ? "text-white" : "text-[#437CFF]"
            }`}
          >
            -20%
          </span>
        </>
      ),
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-2 mb-4">
      {durations.map(({ value, label }) => {
        const isActive = duration === value;
        const content = typeof label === "function" ? label(isActive) : label;

        return (
          <button
            key={value}
            onClick={() => setDuration(value)}
            className={`px-6 py-[6px]  rounded-full text-sm font-[Manrope] font-medium transition border ${
              isActive
                ? "bg-[#5AB6FF] text-white border-[#5AB6FF]"
                : "bg-[#f3f3f3] text-[#555555] border-[#555555]"
            }`}
          >
            {content}
          </button>
        );
      })}
    </div>
  );
}
