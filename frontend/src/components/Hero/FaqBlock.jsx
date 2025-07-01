"use client";
import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";

const FaqBlock = () => {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState(null);
  const contentRefs = useRef([]);

  const toggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  useEffect(() => {
    contentRefs.current.forEach((ref, i) => {
      if (!ref) return;
      if (openIndex === i) {
        ref.style.maxHeight = ref.scrollHeight + "px";
        ref.style.opacity = "1";
      } else {
        ref.style.maxHeight = "0px";
        ref.style.opacity = "0";
      }
    });
  }, [openIndex]);

  const faqKeys = [1, 2, 3, 4, 5, 6, 7];

  return (
    <div className="w-full pt-16 pb-12 px-4 flex justify-center">
      <div className="flex flex-col gap-2 xl:gap-6 items-center max-w-[1080px] w-full">
        <h2 className="mb-6 w-full text-center text-black text-[28px] md:text-[40px] leading-tight font-semibold font-[Involve]">
          {t("faq.title.before")}{" "}
          <span className="bg-gradient-to-r from-[#437CFF] to-[#65EDFF] text-transparent bg-clip-text">
            {t("faq.title.highlight")}
          </span>
        </h2>

        {faqKeys.map((key, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              className="w-full bg-white xl:rounded-[32px] rounded-[18px] overflow-hidden transition-all duration-500 ease-in-out border border-white"
            >
              <button
                type="button"
                onClick={() => toggle(index)}
                className="w-full px-4 sm:px-6 py-2 xl:py-6 flex items-center justify-between gap-1 cursor-pointer min-h-[72px] md:min-h-[96px]"
              >
                <h3 className="flex-1 self-center text-left text-[13px] sm:text-[18px] md:text-[20px] leading-[1.2] text-black font-medium font-[Involve]">
                  {t(`faq.q${key}`)}
                </h3>

                <div className="w-10 h-10 sm:w-[56px] sm:h-[56px] perspective shrink-0 flex items-center justify-center">
                  <div
                    className={`relative w-full h-full transition-transform duration-500 ease-in-out [transform-style:preserve-3d] ${
                      isOpen ? "rotate-x-180" : ""
                    }`}
                  >
                    {/* + */}
                    <div className="absolute inset-0 flex items-center justify-center bg-[#F3F3F3] rounded-xl backface-hidden">
                      <div className="relative w-4 h-4 sm:w-6 sm:h-6">
                        <span className="absolute left-0 top-1/2 w-full h-[2px] bg-black transform -translate-y-1/2" />
                        <span className="absolute top-0 left-1/2 h-full w-[2px] bg-black transform -translate-x-1/2" />
                      </div>
                    </div>

                    {/* × */}
                    <div className="absolute inset-0 flex items-center justify-center bg-[#F3F3F3] rounded-xl rotate-x-180 backface-hidden">
                      <div className="relative w-4 h-4 sm:w-6 sm:h-6">
                        <span className="absolute left-0 top-1/2 w-full h-[2px] bg-black transform rotate-45 -translate-y-1/2 origin-center" />
                        <span className="absolute left-0 top-1/2 w-full h-[2px] bg-black transform -rotate-45 -translate-y-1/2 origin-center" />
                      </div>
                    </div>
                  </div>
                </div>
              </button>

              <div
                ref={(el) => (contentRefs.current[index] = el)}
                className={`px-4 sm:px-6 pb-4 xl:pb-6 transition-all duration-500 ease-in-out ${
                  isOpen ? " pb-14" : ""
                }`}
                style={{
                  maxHeight: "0px",
                  opacity: 0,
                }}
              >
                <div className="-mt-4 xl:-mt-6 pb-[16px] xl:pb-6">
                  <p className="max-w-[970px] text-left text-[12px] sm:text-[14px] md:text-[18px] leading-[20px] sm:leading-[24px] md:leading-[26px] font-normal text-[#555555] font-[Manrope]">
                    {t(`faq.a${key}`)}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FaqBlock;
