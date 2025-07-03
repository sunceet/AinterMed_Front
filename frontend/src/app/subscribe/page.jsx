import Subscribe from "@/components/SubscribePage/Subscribe";

export default function SubscribePage() {
  return <Subscribe />;
}

// "use client";

// import { useRef, useEffect, useState } from "react";
// import { useTranslation } from "react-i18next";

// export default function SubscribePage() {
//   const { t } = useTranslation();
//   const scrollContainerRef = useRef(null);
//   const [duration, setDuration] = useState("1m");
//   const [promo, setPromo] = useState("");

//   const durationCounts = {
//     "1m": 1,
//     "3m": 3,
//     "6m": 6,
//     "12m": 12,
//   };

//   const discounts = {
//     "1m": 0,
//     "3m": 0.05,
//     "6m": 0.1,
//     "12m": 0.2,
//   };

//   const [agreements, setAgreements] = useState({
//     advanced: { a: false, b: false },
//     premium: { a: false, b: false },
//   });

//   function getMonthWord(n) {
//     if (n % 10 === 1 && n % 100 !== 11) return t("pricing.month_1");
//     if ([2, 3, 4].includes(n % 10) && ![12, 13, 14].includes(n % 100))
//       return t("pricing.month_234");
//     return t("pricing.month_other");
//   }

//   const durations = [
//     { value: "1m", label: t("pricing.month") },
//     { value: "3m", label: t("pricing.3months") },
//     { value: "6m", label: t("pricing.6months") },
//     { value: "12m", label: t("pricing.12months") },
//   ];

//   const plans = [
//     {
//       id: "free",
//       title: t("plans.free.title"),
//       description: t("plans.free.description"),
//       priceSymbol: t("plans.symbol"),
//       price: "0",
//       period: t("plans.period"),
//       buttonColor: "bg-gradient-to-r from-[#447CFF50] to-[#659DFF50]",
//       features: t("plans.free.features", { returnObjects: true }),
//     },
//     {
//       id: "advanced",
//       title: t("plans.advanced.title"),
//       description: t("plans.advanced.description"),
//       priceSymbol: t("plans.symbol"),
//       price: t("plans.advanced.price"),
//       period: t("plans.period"),
//       buttonColor: "bg-gradient-to-r from-[#0066FF] to-[#009DFF]",
//       features: t("plans.advanced.features", { returnObjects: true }),
//     },
//     {
//       id: "premium",
//       title: t("plans.premium.title"),
//       description: t("plans.premium.description"),
//       priceSymbol: t("plans.symbol"),
//       price: t("plans.premium.price"),
//       period: t("plans.period"),
//       buttonColor: "bg-gradient-to-r from-[#00A6FF] to-[#00F2FF]",
//       features: t("plans.premium.features", { returnObjects: true }),
//     },
//   ];

//   useEffect(() => {
//     const container = scrollContainerRef.current;
//     if (!container) return;
//     const secondCard = container.children[1];
//     if (!secondCard) return;
//     const containerRect = container.getBoundingClientRect();
//     const cardRect = secondCard.getBoundingClientRect();
//     const scrollLeft =
//       secondCard.offsetLeft -
//       container.offsetLeft -
//       (containerRect.width / 2 - cardRect.width / 2);
//     container.scrollTo({ left: scrollLeft, behavior: "smooth" });
//   }, []);

//   return (
//     <div className="w-full py-10 px-4 flex flex-col items-center bg-[#F2F2F2] text-black">
//       <h2 className="pt-2 text-[28px] xl:text-[40px] mb-2 font-[Involve] font-semibold text-black text-center">
//         {t("pricing.heading1")}{" "}
//         <span className="bg-gradient-to-r from-[#437CFF] to-[#65EDFF] text-transparent bg-clip-text">
//           {t("pricing.heading2")}
//         </span>
//       </h2>
//       <p className="mt-[-8px] mb-5 text-[15px] xl:text-[22px] font-[Involve] font-medium text-[#555555] text-center">
//         {t("pricing.subheading")}
//       </p>

//       {/* Сроки подписки */}
//       <div className="flex flex-wrap justify-center gap-2 mb-4">
//         {durations.map(({ value, label }) => (
//           <button
//             key={value}
//             onClick={() => setDuration(value)}
//             className={`px-4 py-[6px] rounded-full cursor-pointer text-sm font-medium transition ${
//               duration === value
//                 ? "bg-[#437CFF] text-white"
//                 : "bg-white border border-[#437CFF] text-[#437CFF]"
//             }`}
//           >
//             {label}
//           </button>
//         ))}
//       </div>

//       {/* Промокод */}
//       <div className="flex flex-wrap justify-center items-center gap-2 mb-10">
//         <input
//           type="text"
//           placeholder={t("pricing.promo_placeholder")}
//           value={promo}
//           onChange={(e) => setPromo(e.target.value)}
//           className="h-[38px] w-[200px] rounded-[12px] border border-white px-4 text-[14px] bg-white font-[Manrope] focus:outline-none focus:ring-0 focus:border-white"
//         />
//         <button className="h-[38px] px-5 rounded-[12px] bg-[#A2CCFF] text-white text-sm font-semibold">
//           {t("pricing.activate")}
//         </button>
//       </div>

//       {/* Карточки */}
//       <div
//         ref={scrollContainerRef}
//         className="w-full max-w-[1255px] overflow-x-auto snap-x snap-mandatory flex gap-[10px] xl:gap-[40px] px-4 lg:px-0 scrollbar-hidden"
//         style={{ overflowY: "hidden" }}
//       >
//         {plans.map((plan) => {
//           const isPaid = plan.id !== "free";
//           const agree = agreements[plan.id] || {};
//           const canSubmit = !isPaid || (agree.a && agree.b);

//           const months = durationCounts[duration];
//           const discount = discounts[duration] || 0;
//           const basePrice = Number(plan.price);
//           const finalPrice = Math.round(basePrice * months * (1 - discount));

//           return (
//             <div
//               key={plan.id}
//               className="snap-center flex-shrink-0 w-[92%] sm:w-[392px] bg-white rounded-[34px] border border-white px-[24px] py-[24px] flex flex-col"
//             >
//               <div className="text-center mb-4">
//                 <div className="min-h-[100px] flex flex-col justify-start items-center">
//                   <h3 className="text-[28px] font-[600] leading-[36px] font-[Involve]">
//                     {plan.title}
//                   </h3>
//                   <p className="text-[15px] text-[#555555] font-[Manrope] mt-[12px]">
//                     {plan.description}
//                   </p>
//                 </div>

//                 <div className="flex items-end justify-center gap-[4px] mt-[1px]">
//                   <span className="text-[30px] font-[Involve] text-[#555555] font-medium relative -top-[11px]">
//                     {plan.priceSymbol}
//                   </span>
//                   <span className="text-[48px] font-[Involve] font-medium leading-[56px]">
//                     {finalPrice}
//                   </span>
//                   <span className="text-[20px] font-[Involve] font-[500] text-[#555] mb-[4px]">
//                     {t("pricing.total_for", {
//                       count: months,
//                       monthWord: getMonthWord(months),
//                     })}
//                   </span>
//                 </div>
//               </div>

//               <ul className="flex-grow text-[15px] font-[Manrope] text-[#555555] leading-[26px] list-disc pl-[15px] text-left mb-[24px]">
//                 {plan.features.map((feature, i) => (
//                   <li key={i}>{feature}</li>
//                 ))}
//               </ul>

//               {isPaid && (
//                 <button
//                   disabled={!canSubmit}
//                   className={`w-full h-[56px] rounded-full text-white font-[Involve] text-[15px] font-medium uppercase tracking-wide transition-transform duration-100 ${
//                     canSubmit
//                       ? "hover:scale-105 cursor-pointer"
//                       : "opacity-50 cursor-not-allowed"
//                   } ${plan.buttonColor}`}
//                 >
//                   {t("pricing.button")}
//                 </button>
//               )}

//               {isPaid && (
//                 <div className="mt-4 space-y-2 text-[13px] text-[#555] font-[Manrope]">
//                   <div className="flex items-start gap-2">
//                     <input
//                       type="checkbox"
//                       checked={agree.a}
//                       onChange={() =>
//                         setAgreements((prev) => ({
//                           ...prev,
//                           [plan.id]: {
//                             ...prev[plan.id],
//                             a: !prev[plan.id].a,
//                           },
//                         }))
//                       }
//                       className="mt-[2px] accent-[#437CFF] cursor-pointer"
//                     />
//                     <span className="text-left">
//                       {t("pricing.terms1")}&nbsp;
//                       <a
//                         href="https://aintermed.com/legal/terms"
//                         target="_blank"
//                         className="underline"
//                       >
//                         {t("pricing.terms_link1")}
//                       </a>{" "}
//                       {t("pricing.and")}&nbsp;
//                       <a
//                         href="https://aintermed.com/legal/privacy"
//                         target="_blank"
//                         className="underline"
//                       >
//                         {t("pricing.terms_link2")}
//                       </a>
//                     </span>
//                   </div>

//                   <div className="flex items-start gap-2">
//                     <input
//                       type="checkbox"
//                       checked={agree.b}
//                       onChange={() =>
//                         setAgreements((prev) => ({
//                           ...prev,
//                           [plan.id]: {
//                             ...prev[plan.id],
//                             b: !prev[plan.id].b,
//                           },
//                         }))
//                       }
//                       className="mt-[2px] accent-[#437CFF] cursor-pointer"
//                     />
//                     <span className="text-left">
//                       {t("pricing.terms2")}&nbsp;
//                       <a
//                         href="https://aintermed.com/legal/oferta"
//                         target="_blank"
//                         className="underline"
//                       >
//                         {t("pricing.terms_link3")}
//                       </a>
//                     </span>
//                   </div>
//                 </div>
//               )}
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }
