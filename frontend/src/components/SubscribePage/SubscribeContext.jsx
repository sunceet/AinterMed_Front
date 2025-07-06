"use client";

import { createContext, useContext, useState } from "react";

const SubscribeContext = createContext();

export function SubscribeProvider({ children }) {
  const [duration, setDuration] = useState("1m");
  const [promo, setPromo] = useState("");
  const [agreements, setAgreements] = useState({
    advanced: { a: false, b: false },
    premium: { a: false, b: false },
  });
  const [hasUserSwiped, setHasUserSwiped] = useState(false);

  const durationCounts = { "1m": 1, "3m": 3, "6m": 6, "12m": 12 };
  const discounts = { "1m": 0, "3m": 0.05, "6m": 0.1, "12m": 0.2 };

  function getMonthWord(n, t) {
    if (n % 10 === 1 && n % 100 !== 11) return t("pricing.month_1");
    if ([2, 3, 4].includes(n % 10) && ![12, 13, 14].includes(n % 100))
      return t("pricing.month_234");
    return t("pricing.month_other");
  }

  return (
    <SubscribeContext.Provider
      value={{
        duration,
        setDuration,
        promo,
        setPromo,
        agreements,
        setAgreements,
        durationCounts,
        discounts,
        getMonthWord,
        hasUserSwiped,
        setHasUserSwiped,
      }}
    >
      {children}
    </SubscribeContext.Provider>
  );
}

export function useSubscribeContext() {
  return useContext(SubscribeContext);
}
