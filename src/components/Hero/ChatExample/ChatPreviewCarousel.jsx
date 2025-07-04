import React, { useEffect, useState } from "react";
import chatSamples from "./chatSamples";
import { useTranslation } from "react-i18next";
import CardContent from "./CardContent";
import arrow_rignt from "../../../assets/svg/arrow_right.svg";
import arrow_left from "../../../assets/svg/arrow_left.svg";

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
              src={arrow_left}
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
                className={`absolute rounded-[28px] ${
                  isMobile ? "border-[1px]" : "border"
                } border-gray-200 bg-white px-4 pt-4 pb-3 flex flex-col justify-between ${blur}`}
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
              src={arrow_rignt}
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

export default ChatPreviewCarousel;
