import React from "react";
import AppleProDisplay from "../../assets/Apple_Pro_Display.svg";
import Arrow from "../../assets/Arrow.svg";

const Hero = () => (
  <section className="relative w-[1920px] bg-white text-center">
    <div className="mt-[67px]">
      <h1 className="mx-auto w-[983px] font-[involve] font-bold text-[48px] leading-[52px] uppercase">
        ОБРАЗОВАТЕЛЬНАЯ{" "}
        <span className="bg-gradient-to-r from-[#437CFF] to-[#65EDFF] text-transparent bg-clip-text">
          ИИ-ПЛАТФОРМА
        </span>
        <br />
        ДЛЯ ВРАЧЕЙ И СТУДЕНТОВ МЕДИКОВ
      </h1>

      <p className="mt-[21px] mx-auto w-[949px] font-[manrope] font-bold text-[18.5px] leading-[16px] tracking-[0.02em] uppercase">
        Ответит на клинические вопросы, Найдёт нужную статью, Подскажет по
        диагнозу
      </p>

      <div className="mt-[63px] flex justify-center">
        <button className="w-[351px] h-[64px] rounded-full bg-gradient-to-r from-[#437CFF] to-[#65EDFF] text-white font-[manrope] font-semibold text-[18px] leading-[16px] tracking-[0.02em] uppercase flex items-center justify-center">
          <span className="mr-2">Попробовать бесплатно</span>
          <img src={Arrow} alt="Arrow" className="w-[22.5px] h-[16.74px]" />
        </button>
      </div>

      <img
        src={AppleProDisplay}
        alt="Apple Pro Display"
        className="mx-auto mt-[40px] w-[893px] h-[674px]"
        draggable={false}
      />
    </div>
  </section>
);

export default Hero;
