// import React from "react";
import Arrow from "../../assets/svg/Arrow.svg";
import MainVideo from "../../assets/video/main_video.mp4";

const Hero = () => (
  <section className="relative w-full h-[1190px] bg-white text-center overflow-hidden">
    <video
      className="absolute top-[540px] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[2700.63px] h-[1300px] object-contain rounded-lg z-0"
      src={MainVideo}
      autoPlay
      muted
      playsInline
    />

    <div className="relative z-10 pt-[114px]">
      <h1 className="mx-auto w-[962px] font-[involve] font-bold text-[36px] leading-[38px] uppercase tracking-wide text-black">
        ОБРАЗОВАТЕЛЬНАЯ{" "}
        <span className="bg-gradient-to-r from-[#437CFF] to-[#65EDFF] text-transparent bg-clip-text">
          ИИ-ПЛАТФОРМА
        </span>
        <br />
        ДЛЯ ВРАЧЕЙ И СТУДЕНТОВ МЕДИКОВ
      </h1>

      <p className="mt-4 mx-auto w-[949px] font-[manrope] font-bold text-[14.3px] leading-[14px] uppercase tracking-wide text-[#555555]">
        Ответит на клинические вопросы, найдёт нужную статью, подскажет по
        диагнозу
      </p>

      <div className="mt-5 flex justify-center">
        <button
          onClick={() => console.log("Кнопка нажата")}
          className="
    flex items-center justify-center gap-2 w-[310px] h-[56px] rounded-full
    font-[involve] text-[16px] uppercase
    bg-gradient-to-r from-[#437CFF] to-[#02cbe6] text-white tracking-wide
    transform-gpu will-change-transform
    transition-transform duration-300 ease-in-out
    hover:scale-105 hover:from-[#50e1ee] hover:to-[#14ebff]
  "
        >
          Попробовать бесплатно
          <img src={Arrow} alt="Arrow" className="w-6 h-[16px]" />
        </button>
      </div>
    </div>
  </section>
);

export default Hero;
