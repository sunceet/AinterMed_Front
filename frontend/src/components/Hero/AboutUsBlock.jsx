"use client";

import Link from "next/link";
import Image from "next/image";

const BLOCK_H =
  "min-h-[459px] sm:min-h-[360px] md:min-h-[400px] lg:min-h-[420px] xl:min-h-[440px]";
const BLOCK_P =
  "px-4 py-10 sm:px-7 sm:py-12 md:px-9 md:py-14 lg:px-12 lg:py-16 xl:px-[72px] xl:py-[72px]";

const AboutUsBlock = () => {
  return (
    <div className="mt-15 flex flex-col items-center gap-6 px-4 sm:px-6">
      {/* Первый блок */}
      <div
        className={`relative w-full max-w-[1255px] rounded-[32px] overflow-hidden ${BLOCK_P} ${BLOCK_H}`}
      >
        <div className="absolute inset-0 -z-10">
          <Image
            src="/assets/svg/AboutUsBlock1.png"
            alt="Background"
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        {/* Vector изображения */}
        <img
          src="/assets/svg/Vector1.svg"
          alt=""
          className="hidden sm:block absolute top-1/2  -translate-x-1/2 -translate-y-1/2 xl:left-170 lg:left-140 md:left-87 sm:left-100 h-[101%] w-auto object-cover object-center max-w-none pointer-events-none -z-[1]"
        />
        <img
          src="/assets/svg/VectorPhone1.svg"
          alt=""
          className="block sm:hidden absolute top-1/2 left-[50%] -translate-x-[50%] -translate-y-1/2 h-[101%] w-auto object-cover object-center max-w-none pointer-events-none -z-[1]"
        />

        <div className="flex flex-col xl:flex-row items-center justify-between gap-8">
          <div className="text-left max-w-[550px]">
            <h2 className="text-white font-[involve] py-15 xl:py-1 text-left font-semibold leading-[1.1] text-[32px] sm:text-[30px] md:text-[32px] lg:text-[36px] xl:text-[40px] pb-3">
              Наша миссия
            </h2>

            <p className="text-white font-[Manrope] font-normal text-left tracking-wide text-[18px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[17px] leading-[24px] sm:leading-[20px] md:leading-[22px] lg:leading-[24px] xl:leading-[26px] mt-2">
              Сформировать сообщество врачей будущего - тex, кто использует
              современные технологии, чтобы быть компетентными и готовыми к
              реальной работе.
            </p>

            {/* Кнопка на мобильных */}
            <div className="mt-6 xl:hidden flex justify-center sm:justify-start">
              <Link href="/about">
                <button
                  className="inline-block px-15 py-3 backdrop-blur-sm bg-[#00000033] text-white                 
                  font-[Involve]  font-normal tracking-wide rounded-full uppercase transition"
                >
                  О&nbsp;нас
                </button>
              </Link>
            </div>

            {/* Кнопка на десктопе */}
            <div className="mt-6 hidden xl:block">
              <Link href="/about">
                <button
                  className="inline-block rounded-full px-18 py-5 backdrop-blur-sm bg-[#FFFFFF33] 
                    text-white font-[Involve] font-medium leading-[16px] 
                    tracking-[0.02em] cursor-pointer  uppercase text-center align-middle transition-transform duration-100 hover:scale-105"
                >
                  О&nbsp;нас
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Второй блок */}
      <div
        className={`relative w-full max-w-[1255px] rounded-[32px] overflow-hidden ${BLOCK_P} ${BLOCK_H}`}
      >
        <div className="absolute inset-0 -z-10">
          <Image
            src="/assets/svg/AboutUsBlock2.png"
            alt="Background"
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        {/* Vector изображения */}
        <img
          src="/assets/svg/Vector2.svg"
          alt=""
          className="hidden sm:block absolute top-1/2 -translate-x-1/2 -translate-y-1/2 xl:left-170 lg:left-140 md:left-87 sm:left-100 h-[101%] w-auto object-cover object-center max-w-none pointer-events-none -z-[1]"
        />
        <img
          src="/assets/svg/VectorPhone2.svg"
          alt=""
          className="block sm:hidden absolute top-1/2 left-[36%] -translate-x-[50%] -translate-y-1/2 h-[101%] w-auto object-cover object-center max-w-none pointer-events-none -z-[1]"
        />

        <div className="flex flex-col xl:flex-row items-center justify-between w-full">
          <div className="text-left xl:text-right max-w-[650px] ml-auto">
            <h2 className="text-white font-[involve] py-15 xl:py-1 text-left xl:text-right font-semibold leading-[1.1] text-[32px] sm:text-[30px] md:text-[32px] lg:text-[36px] xl:text-[40px] pb-3">
              Нам доверяют 3&nbsp;200&nbsp;пользователей
            </h2>

            <p className="text-white font-[Manrope] font-normal text-left xl:text-right tracking-wide text-[18px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[17px] leading-[24px] sm:leading-[20px] md:leading-[22px] lg:leading-[24px] xl:leading-[26px] mt-2">
              Команда AInterMed – это сообщество врачей, которые сами прошли
              сложный путь обучения в медицинских университетах и знают его
              изнутри. Продукт разработан врачами и IT-специалистами с учётом
              реальных нужд и стандартов медицинской практики.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsBlock;
