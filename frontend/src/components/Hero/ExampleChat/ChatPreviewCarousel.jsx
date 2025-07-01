import React, { useEffect, useState } from "react";
import chatSamples from "./chatSamples";
import { useTranslation } from "react-i18next";
import CardContent from "./CardContent";

const ChatPreviewCarousel = () => {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(2);
  const total = chatSamples.length;
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!isMobile) return;

    let touchStartX = 0;
    let touchEndX = 0;

    const handleTouchStart = (e) => {
      touchStartX = e.touches[0].clientX;
    };

    const handleTouchMove = (e) => {
      touchEndX = e.touches[0].clientX;
    };

    const handleTouchEnd = () => {
      const deltaX = touchStartX - touchEndX;
      if (deltaX > 50) requestAnimationFrame(handleNext);
      if (deltaX < -50) requestAnimationFrame(handlePrev);
    };

    const container = document.getElementById("chat-carousel");
    container.addEventListener("touchstart", handleTouchStart);
    container.addEventListener("touchmove", handleTouchMove);
    container.addEventListener("touchend", handleTouchEnd);

    return () => {
      container.removeEventListener("touchstart", handleTouchStart);
      container.removeEventListener("touchmove", handleTouchMove);
      container.removeEventListener("touchend", handleTouchEnd);
    };
  }, [isMobile]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % total);
  };

  const baseWidth = isMobile ? 300 : 460;
  const baseHeight = isMobile ? 320 : 300;
  const offsetX = isMobile ? 140 : 200;
  const scaleStep = 0.06;

  return (
    <div className="relative w-full mt-15 flex flex-col items-center justify-center">
      <div className="w-full flex flex-col items-center justify-center text-center">
        <div className="text-[15px] xl:text-[24px] leading-[1] font-medium font-[Involve] text-[#555555] max-w-[750px]">
          {t("carousel.line1")}
        </div>
        <div className="text-[28px] xl:text-[40px] leading-[1] font-semibold font-[Involve] text-gray-900 max-w-[827px] mt-2">
          <span className="bg-gradient-to-r from-[#437CFF] to-[#437CFF] text-transparent bg-clip-text">
            {t("carousel.line21")}
          </span>{" "}
          {t("carousel.line22")}
        </div>
      </div>

      <div
        id="chat-carousel"
        className="relative w-full max-w-[640px] mx-auto h-[400px] flex items-center justify-center"
      >
        <div
          className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[1000px] h-[100px] z-0 pointer-events-none opacity-30"
          style={{
            background: "linear-gradient(180deg, #437CFF 0%, #65EDFF 100%)",
            borderRadius: "100%",
            filter: "blur(130px)",
          }}
        />
        <div
          className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[1000px] h-[120px] z-0 pointer-events-none opacity-30"
          style={{
            background: "linear-gradient(0deg, #437CFF 0%, #65EDFF 100%)",
            borderRadius: "100%",
            filter: "blur(130px)",
          }}
        />

        {!isMobile && (
          <button
            onClick={handlePrev}
            className="absolute xl:-left-75 md:left-5 lg:-left-10 top-1/2 transform -translate-y-1/2 z-50 hover:opacity-80"
          >
            <img
              src="/assets/svg/arrow_left.svg"
              alt="Left"
              className="w-6 h-6 cursor-pointer hover:scale-110 transition z-20"
            />
          </button>
        )}

        <div className="select-none relative w-full h-full flex items-center justify-center overflow-visible z-10">
          {chatSamples.map((chat, i) => {
            let diff = i - activeIndex;
            if (diff > total / 2) diff -= total;
            if (diff < -total / 2) diff += total;

            const position = diff;
            const scale = 1 - Math.abs(position) * scaleStep;
            const translateX = position * offsetX;
            const blur =
              position === 0
                ? "blur-none"
                : Math.abs(position) === 1
                  ? "blur-[5px]"
                  : "blur-[10px]";
            const zIndex = 30 - Math.abs(position) * 10;
            const opacity =
              Math.abs(position) <= 2 ? (position === 0 ? 1 : 0.85) : 0;
            const pointerEvents = Math.abs(position) <= 2 ? "auto" : "none";

            return (
              <div
                key={i}
                className={`absolute rounded-[28px] ${isMobile ? "border-[1px]" : "border"} border-gray-200 bg-white px-4 pt-4 pb-3 flex flex-col justify-between ${blur}`}
                style={{
                  width: baseWidth,
                  height: baseHeight,
                  transform: `translateX(${translateX}px) scale(${scale})`,
                  transition: "transform 0.3s ease-out, opacity 0.3s ease-out",
                  zIndex,
                  opacity,
                  pointerEvents,
                  willChange: "transform, opacity",
                  backfaceVisibility: "hidden",
                }}
              >
                <CardContent chat={chat} position={position} />
              </div>
            );
          })}
        </div>

        {!isMobile && (
          <button
            onClick={handleNext}
            className="absolute xl:-right-75 md:right-5 lg:-right-10 top-1/2 transform -translate-y-1/2 z-50 hover:opacity-80"
          >
            <img
              src="/assets/svg/arrow_right.svg"
              alt="Right"
              className="w-6 h-6 cursor-pointer hover:scale-110 transition z-20"
            />
          </button>
        )}
      </div>

      <div className="w-[187px] xl:w-full flex justify-center mb-6 mt-[-20px]">
        <button
          className="bg-gradient-to-r cursor-pointer from-[#437CFF] to-[#65EDFF] font-[Involve] text-white leading-[16px] text-[12px] xl:text-[16px] font-medium tracking-[0.02em] uppercase rounded-full w-[187px] h-[44px] xl:w-[282px] xl:h-[64px] hover:brightness-110 transition z-[2] duration-100 hover:scale-105"
          onClick={() => window.open("https://aintermed.com/ai", "_blank")}
        >
          {t("carousel.mainbutton")}
        </button>
      </div>
    </div>
  );
};

// import { useTranslation } from "react-i18next";

// const CardContent = ({ chat, position = 0 }) => {
//   const { t } = useTranslation();

//   return (
//     <>
//       <div className="flex items-start gap-2">
//         <div className="bg-blue-100 rounded-full w-6 h-6 flex items-center justify-center shrink-0 mt-[2px]">
//           <img
//             src="/assets/svg/mini_logo.svg"
//             alt="Logo"
//             className="w-3.5 h-3.5 object-contain"
//           />
//         </div>
//         <div className="text-[12px] xl:text-[14px] leading-tight xl:leading-normal font-[Manrope] text-gray-800 text-left overflow-hidden">
//           {chat.assistant}
//         </div>
//       </div>

//       <div className="w-full mt-4 sm:mt-2 px-2 py-2 border border-gray-200 rounded-[20px] bg-white flex flex-col justify-between text-left min-h-[88px] relative group">
//         <div className="xl:pt-2 text-[12px] xl:text-[13px] text-[#000000] font-[Manrope] leading-tight mb-2 sm:mb-2 pl-2">
//           {chat.user}
//         </div>

//         <div className="flex items-end justify-between transition-opacity duration-200 group-hover:opacity-100 gap-2">
//           <div
//             className={`flex gap-1.5 flex-wrap ${
//               position !== 0 ? "pointer-events-none opacity-50" : ""
//             }`}
//           >
//             <a className="flex select-none items-center px-2.5 py-1.5 sm:px-3 sm:py-1.5 bg-white border border-gray-200 rounded-full text-[11px] sm:text-[12px] text-gray-800">
//               AInterMed&nbsp;<span className="text-[#437CFF]">PRO</span>
//             </a>
//             <a className="flex select-none items-center gap-1 px-2.5 py-1.5 sm:px-3 sm:py-1.5 bg-white border border-gray-200 rounded-full text-[11px] sm:text-[12px] text-gray-800">
//               <img
//                 src="/assets/svg/fi-rr-globe.svg"
//                 alt="Globe"
//                 className="w-4 h-4"
//               />
//               {t("carousel.search")}
//             </a>
//           </div>

//           <div
//             className={position !== 0 ? "pointer-events-none opacity-50" : ""}
//           >
//             <button
//               onClick={() => window.open("https://aintermed.com/ai", "_blank")}
//               className="w-8 h-8 flex items-center justify-center"
//             >
//               <img
//                 src="/assets/svg/bigarrow.svg"
//                 alt="Arrow"
//                 className="w-7 h-7 select-none"
//               />
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

export default ChatPreviewCarousel;
