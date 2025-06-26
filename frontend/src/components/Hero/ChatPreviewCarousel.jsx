// "use client";

// import React, { useState } from "react";
// import IconButton from "../../components/ui/IconButton";

// const chatSamples = [
//   {
//     user: "Как отличить бактериальную и вирусную пневмонию?",
//     assistant: (
//       <>
//         <p><strong>Бактериальная пневмония</strong> чаще проявляется внезапно: высокая температура (&gt;38.5°C), выраженная интоксикация, влажный кашель с мокротой. На КТ — односторонние сегментарные инфильтраты.</p>
//         <p><strong>Вирусная пневмония</strong> обычно развивается постепенно: субфебрильная температура, сухой кашель, одышка. На КТ — двусторонние участки «матового стекла».</p>
//         <p className="mt-1">Окончательный диагноз ставится по совокупности симптомов, результатам анализов и динамике состояния.</p>
//       </>
//     ),
//   },
//   {
//     user: "Как рассчитать дозу адреналина при анафилаксии у взрослого?",
//     assistant: (
//       <>
//         <p>При признаках анафилаксии (удушье, падение давления, сыпь, отёки) немедленно ввести 0.3–0.5 мл 0.1% раствора адреналина внутримышечно в верхнюю треть бедра.</p>
//         <p>Инъекцию можно повторить через 5–15 минут, если симптомы сохраняются.</p>
//         <p className="mt-1">Параллельно обеспечьте венозный доступ, начните инфузионную терапию и дайте кислород. Пациент нуждается в наблюдении даже после улучшения.</p>
//       </>
//     ),
//   },
//   {
//     user: "Что делать при резком падении сахара у диабетика?",
//     assistant: (
//       <>
//         <p>Если человек в сознании — срочно дать 15–20 г простых углеводов: сок, сахар, глюкозную пасту. Через 15 минут проверить уровень глюкозы и при необходимости повторить.</p>
//         <p>Если потеря сознания — вводится 40% глюкоза внутривенно или 1 мг глюкагона внутримышечно.</p>
//         <p className="mt-1">После нормализации — приём пищи и пересмотр схемы инсулина/терапии, чтобы избежать повторных эпизодов.</p>
//       </>
//     ),
//   },
//   {
//     user: "Какие признаки инфекционного эндокардита видны на УЗИ сердца?",
//     assistant: (
//       <>
//         <p>Основные находки на УЗИ (особенно через пищевод):</p>
//         <ul className="list-disc list-inside space-y-1">
//           <li>Подвижные образования на клапанах — вегетации.</li>
//           <li>Абсцессы, перфорации створок, деформации клапанов.</li>
//           <li>Новая регургитация, не объясняемая другими причинами.</li>
//         </ul>
//         <p className="mt-1">Диагноз требует сочетания визуализации, анализов крови и клинической картины.</p>
//       </>
//     ),
//   },
//   {
//     user: "Почему тропонин может быть повышен без инфаркта?",
//     assistant: (
//       <>
//         <p>Повышение тропонина не всегда связано с инфарктом миокарда. Возможные причины:</p>
//         <ul className="list-disc list-inside space-y-1">
//           <li>Острая и хроническая сердечная недостаточность.</li>
//           <li>Миокардит, тахиаритмии, тромбоэмболия лёгочной артерии.</li>
//           <li>Сепсис, тяжёлое воспаление, хроническая болезнь почек.</li>
//         </ul>
//         <p className="mt-1">Важно учитывать динамику показателя, клинику и данные ЭКГ/эхо.</p>
//       </>
//     ),
//   },
//   {
//     user: "Когда можно отменить антибиотики при пневмонии?",
//     assistant: (
//       <>
//         <p>Антибиотики можно отменить при:</p>
//         <ul className="list-disc list-inside space-y-1">
//           <li>Нормализации температуры (&lt;37.5°C) на 48+ часов.</li>
//           <li>Улучшении самочувствия и дыхания.</li>
//           <li>Снижении уровня СРБ/лейкоцитов.</li>
//         </ul>
//         <p className="mt-1">Обычно курс длится 5–7 дней, но важно ориентироваться на клинический ответ, а не только на КТ.</p>
//       </>
//     ),
//   },
//   {
//     user: "Чем опасны частые КТ-исследования? Это вредно?",
//     assistant: (
//       <>
//         <p>Компьютерная томография даёт лучевую нагрузку, которая накапливается. Особенно это актуально при частых исследованиях, например, при COVID или онкологии.</p>
//         <p>Риски особенно высоки у детей и молодых людей.</p>
//         <p className="mt-1">Без веских показаний лучше ограничивать КТ. Рассматривайте УЗИ или МРТ как альтернативу, если возможно.</p>
//       </>
//     ),
//   },
//   {
//     user: "Как отличить COVID от гриппа и простуды по симптомам?",
//     assistant: (
//       <>
//         <p><strong>COVID-19</strong> часто проявляется потерей обоняния, длительной субфебрильной температурой, головной болью и одышкой при невыраженном кашле.</p>
//         <p><strong>Грипп</strong> начинается резко, с высокой температуры, болей в теле и выраженной слабости.</p>
//         <p><strong>Простуда</strong> — более мягкое течение: насморк, небольшая температура, быстрое восстановление.</p>
//         <p className="mt-1">Точный диагноз — только по ПЦР или экспресс-тесту.</p>
//       </>
//     ),
//   },
//   {
//     user: "Что делать, если давление упало до 90 на 60 и кружится голова?",
//     assistant: (
//       <>
//         <p>Низкое давление может быть вариантом нормы или сигналом о проблемах.</p>
//         <ul className="list-disc list-inside space-y-1">
//           <li>Лягте, приподнимите ноги.</li>
//           <li>Выпейте воду или сладкий напиток.</li>
//           <li>Проветрите помещение, обеспечьте покой.</li>
//         </ul>
//         <p className="mt-1">Если головокружение не проходит — обратитесь к врачу. Возможно, потребуется обследование на анемию, эндокринные или сердечные нарушения.</p>
//       </>
//     ),
//   },
//   {
//     user: "Какие анализы нужны при затяжном кашле?",
//     assistant: (
//       <>
//         <p>Если кашель длится &gt;3 недель, нужно исключить инфекции, аллергию и хронические заболевания лёгких.</p>
//         <ul className="list-disc list-inside space-y-1">
//           <li>Общий анализ крови с лейкоформулой.</li>
//           <li>Флюорография или КТ грудной клетки.</li>
//           <li>ПЦР/ИФА на микоплазму, хламидии, COVID, туберкулёз.</li>
//           <li>При подозрении — анализ мокроты, ФВД или аллергопанель.</li>
//         </ul>
//         <p className="mt-1">Подбор обследований зависит от анамнеза и сопутствующих симптомов.</p>
//       </>
//     ),
//   },
// ];


// const ChatPreviewCarousel = () => {
//   const [activeIndex, setActiveIndex] = useState(2);
//   const total = chatSamples.length;

//   const handlePrev = () => {
//     setActiveIndex((prev) => (prev - 1 + total) % total);
//   };

//   const handleNext = () => {
//     setActiveIndex((prev) => (prev + 1) % total);
//   };

//   const baseWidth = 460;
//   const baseHeight = 300;
//   const offsetX = 200;
//   const scaleStep = 0.06;

//   return (
//     <div className="w-full max-w-[640px] mx-auto relative h-[400px] flex items-center justify-center">
//       {/* Стрелка влево */}
//       <button
//         onClick={handlePrev}
//         className="absolute -left-80 top-1/2 transform -translate-y-1/2 z-50 hover:opacity-80"
//       >
//         <img src="/assets/svg/arrow_left.svg" alt="Left" className="w-6 h-6" />
//       </button>

//       {/* Карточки */}
//       <div className="relative w-[460px] h-full flex items-center justify-center overflow-visible z-10">
//         {chatSamples.map((chat, i) => {
//           const relativeIndex = ((i - activeIndex + total) % total);
//           const position =
//             relativeIndex <= 2
//               ? relativeIndex
//               : relativeIndex - total; // поддержка отрицательных позиций

//           if (Math.abs(position) > 2) return null;

//           const scale = 1 - Math.abs(position) * scaleStep;
//           const translateX = position * offsetX;
//           const blur =
//             position === 0
//               ? "blur-none"
//               : Math.abs(position) === 1
//               ? "blur-[2px]"
//               : "blur-[5px]";
//           const zIndex = 30 - Math.abs(position) * 10;
//           const opacity = position === 0 ? 1 : 0.85;

//           return (
//             <div
//               key={i}
//               className={`absolute rounded-[28px] border border-gray-200 bg-white px-4 pt-4 pb-3 shadow-sm transition-all duration-300 flex flex-col justify-between ${blur}`}
//               style={{
//                 width: `${baseWidth}px`,
//                 height: `${baseHeight}px`,
//                 transform: `translateX(${translateX}px) scale(${scale})`,
//                 zIndex,
//                 opacity,
//               }}
//             >
//               <div className="text-[12px] leading-tight font-[Manrope]  text-gray-800 text-left overflow-hidden px-2">
//                 {chat.assistant}
//               </div>

//               <div className="w-full mt-2 px-3 py-2 border border-gray-200 rounded-[20px] bg-white shadow-inner flex flex-col justify-between text-left min-h-[88px] relative group">
//                 <div className="text-[13px] text-gray-800 font-[Manrope] leading-tight">{chat.user}</div>

//                 <div className="flex items-end justify-between mt-2 opacity-100 transition-opacity duration-200 group-hover:opacity-100">
//                   <div className={`flex gap-1.5 ${position !== 0 ? "pointer-events-none opacity-50" : ""}`}>
//                     <a
//                       href="https://aintermed.com/ai"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="flex items-center px-3 py-1.5 bg-white border border-gray-200 rounded-full text-[12px] text-gray-800 hover:bg-gray-100"
//                     >
//                       AInterMed&nbsp;<span className="text-[#437CFF]">PRO</span>
//                     </a>
//                     <a
//                       href="https://aintermed.com/ai"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="flex items-center gap-1 px-3 py-1.5 bg-white border border-gray-200 rounded-full text-[12px] text-gray-800 hover:bg-gray-100"
//                     >
//                       <img src="/assets/svg/fi-rr-globe.svg" alt="Globe" className="w-4 h-4" />
//                       Поиск
//                     </a>
//                   </div>
//                   <div className={position !== 0 ? "pointer-events-none opacity-50" : ""}>
//                     <IconButton
//                       onClick={() => window.open("https://aintermed.com/ai", "_blank")}
//                       className="w-8 h-8"
//                     >
//                       <img src="/assets/svg/bigarrow.svg" alt="Arrow" className="w-7 h-7" />
//                     </IconButton>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>

//       {/* Стрелка вправо */}
//       <button
//         onClick={handleNext}
//         className="absolute -right-85 top-1/2 transform -translate-y-1/2 z-50 hover:opacity-80"
//       >
//         <img src="/assets/svg/arrow_right.svg" alt="Right" className="w-6 h-6" />
//       </button>
//     </div>
//   );
// };

// export default ChatPreviewCarousel;
