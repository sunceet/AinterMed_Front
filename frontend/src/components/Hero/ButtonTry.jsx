"use client";

const CtaButton = () => (
  <a
    href="https://aintermed.com/ai"
    target="_blank"
    rel="noopener noreferrer"
    className="relative overflow-hidden font-[Involve] font-medium flex items-center justify-center gap-2
               w-[240px] h-[48px] text-[12px]
               sm:w-[260px] sm:h-[50px] sm:text-[13px]
               md:w-[280px] md:h-[54px] md:text-[14px]
               lg:w-[300px] lg:h-[56px] lg:text-[15px]
               xl:w-[320px] xl:h-[58px] xl:text-[16px]
               rounded-full  tracking-wide text-white 
               bg-gradient-to-r from-[#437CFF] via-[#02cbe6] to-[#437CFF]
               animate-gradient-x transition-transform duration-300
               hover:scale-105"
  >
    <span className="font-[Involve] font-medium relative z-10">
      ПОПРОБОВАТЬ БЕСПЛАТНО
    </span>
    <img
      src="/assets/svg/Arrow.svg"
      alt="Arrow"
      className="relative z-10 w-5 h-[14px] md:w-6 md:h-[16px]"
    />
  </a>
);

export default CtaButton;
