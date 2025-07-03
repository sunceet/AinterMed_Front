"use client";

import { useTranslation } from "react-i18next";
import { useSubscribeContext } from "./SubscribeContext";

export default function DurationSelector() {
  const { t } = useTranslation();
  const { duration, setDuration } = useSubscribeContext();

  const durations = [
    { value: "1m", label: t("pricing.month") },
    { value: "3m", label: t("pricing.3months") },
    { value: "6m", label: t("pricing.6months") },
    { value: "12m", label: t("pricing.12months") },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-2 mb-4">
      {durations.map(({ value, label }) => (
        <button
          key={value}
          onClick={() => setDuration(value)}
          className={`px-4 py-[6px] rounded-full text-sm font-medium transition ${
            duration === value
              ? "bg-[#437CFF] text-white"
              : "bg-white border border-[#437CFF] text-[#437CFF]"
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
