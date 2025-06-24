"use client";

const BLOCK_H =
  "min-h-[380px] sm:min-h-[410px] md:min-h-[435px] lg:min-h-[460px] xl:min-h-[485px]";
const BLOCK_P =
  "px-4 py-10 sm:px-7 sm:py-12 md:px-9 md:py-14 lg:px-12 lg:py-16 xl:px-[72px] xl:py-[72px]";

const AboutUsBlock = () => (
  <div className="mt-15 flex flex-col items-center gap-6 px-4 sm:px-6">
    {/* первый блок */}
    <div
      className={`relative w-full max-w-[1255px] rounded-[32px] overflow-hidden
                  ${BLOCK_P} ${BLOCK_H}`}
    >
      {/* фон */}
      <div className="absolute inset-0 -z-10 bg-[url('/assets/svg/AboutUsBlock1.svg')] bg-cover bg-center" />

      <img
        src="/assets/svg/Vector1.svg"
        alt=""
        className="
        absolute top-1/2          /* точка привязки — геом. центр */
        -translate-x-1/2 -translate-y-1/2       
        
        xl:left-170 lg:left-140 md:left-87 sm:left-100

        h-[101%] 
        w-auto                                    

        object-cover object-center                
        max-w-none pointer-events-none -z-[1]"
      />

      <div className="flex flex-col xl:flex-row items-center justify-between gap-8">
        <div className="text-center xl:text-left max-w-[550px]">
          <h2
            className="text-white font-[involve] font-semibold leading-[1.1]
                         text-[25px] sm:text-[30px] md:text-[32px] lg:text-[36px] xl:text-[40px] pb-3"
          >
            Наша миссия
          </h2>

          <p
            className="text-white font-[Manrope] font-medium tracking-wide
                        text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[17px]
                        leading-[18px] sm:leading-[20px] md:leading-[22px] lg:leading-[24px] xl:leading-[26px] mt-6"
          >
            Наша миссия — вырастить новое поколение уверенных в себе врачей,
            вооружённых актуальными знаниями и готовых к реальной практике.
            Потому что хороший врач — это не тот, кто много знает, а тот, кто
            умеет правильно применять свои знания.
          </p>

          {/* Кнопка >1280 */}
          <div className="mt-6 hidden xl:block">
            <a
              href="https://aintermed.com/legal/about"
              className="inline-block rounded-full px-12 py-5 backdrop-blur-sm bg-[#FFFFFF33] 
             text-white font-[Involve] font-semibold  leading-[16px] 
             tracking-[0.02em] uppercase text-center align-middle"
            >
              О&nbsp;нас
            </a>
          </div>
        </div>

        <div className="w-full xl:w-auto flex justify-center">
          <div className="w-[300px] h-[150px]" />
        </div>
      </div>

      {/* Кнопка <1280 */}
      <div className="mt-6 xl:hidden flex justify-center">
        <a
          href="https://aintermed.com/legal/about"
          className="inline-block px-10 py-4 backdrop-blur-sm  bg-[#FFFFFF33] text-white
                     font-[Involve] font-semibold tracking-wide rounded-full uppercase transition "
        >
          О&nbsp;нас
        </a>
      </div>
    </div>

    {/* втрой блок */}
    <div
      className={`relative w-full max-w-[1255px] rounded-[32px] overflow-hidden ${BLOCK_P} ${BLOCK_H}`}
    >
      {/* фон */}
      <div className="absolute inset-0 -z-10 bg-[url('/assets/svg/AboutUsBlock2.svg')] bg-cover bg-center" />

      <img
        src="/assets/svg/Vector2.svg"
        alt=""
        className="
        absolute top-1/2          /* точка привязки — геом. центр */
        -translate-x-1/2 -translate-y-1/2       
        
        xl:left-170 lg:left-140 md:left-87 sm:left-100

        h-[101%] 
        w-auto                                    

        object-cover object-center                
        max-w-none pointer-events-none -z-[1]"
      />

      <div className="flex flex-col xl:flex-row-reverse items-center justify-between gap-8">
        <div className="text-center xl:text-right max-w-[550px]">
          <h2
            className="text-white font-[involve] font-semibold leading-[1.1]
                         text-[25px] sm:text-[30px] md:text-[32px] lg:text-[36px] xl:text-[38px] pb-3"
          >
            Нам доверяют 3&nbsp;200&nbsp;врачей ежедневно
          </h2>

          <p
            className="text-white font-[Manrope] font-medium tracking-wide
                        text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[17px]
                        leading-[18px] sm:leading-[20px] md:leading-[22px] lg:leading-[24px] xl:leading-[26px] mt-6"
          >
            Разработано медиками для медиков: Наш продукт создан медицинскими и
            IT-специалистами, что гарантирует его соответствие высоким
            стандартам медицинской практики и реальным потребностям медиков
          </p>
        </div>

        {/* заглушка-иллюстрация */}
        <div className="w-full xl:w-auto flex justify-center">
          <div className="w-[300px] h-[150px]" />
        </div>
      </div>
    </div>
  </div>
);

export default AboutUsBlock;
