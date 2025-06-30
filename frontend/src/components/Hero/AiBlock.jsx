"use client";

const AiBlock = () => (
  <div className="mt-38 flex flex-col items-center gap-6 px-4 sm:px-6">
    <div
      className="w-full max-w-[1255px]
                 rounded-[24px] xl:rounded-[32px] bg-gradient-to-r from-[#EEFBFF] to-[#D6EAFF] text-black
                 px-4 py-8
                 sm:px-7  sm:py-12
                 md:px-9  md:py-14
                 lg:px-12 lg:py-16
                 xl:px-[72px] xl:py-[72px]
                 min-h-[380px]
                sm:min-h-[400px]
                 md:min-h-[400px]
                 lg:min-h-[420px]
                 xl:min-h-[440px]"
    >
      <div className="flex flex-col xl:flex-row items-center justify-between gap-4">
        <div className="text-center xl:text-left max-w-[550px]">
          <h2
            className=" font-[Involve] leading-[1.1]
                         text-[25px] sm:text-[30px] md:text-[33px] lg:text-[36px] xl:text-[40px] pb-0"
          >
            <span className="font-[Involve] font-semibold">Искусственный</span>
            <span className="font-[Involve] font-semibold max-[393px]:block">
              &nbsp;интеллект
            </span>
          </h2>

          <p
            className="text-[#555555] font-[Manrope]  tracking-wide
                        text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[17px]
                        leading-[19px] sm:leading-[21px] md:leading-[23px] lg:leading-[25px] xl:leading-[27px] mt-3"
          >
            Персональный клинический ассистент для студента и врача. Анализирует
            клинические случаи, решает учебные задачи и готовиться к экзаменам.
            Обучен на миллионах медицинских данных, что позволяет ему предлагать
            обоснованные решения, основанные на доказательной медицине
          </p>

          {/* Кнопка >1280 */}
          <div className="mt-6 hidden xl:block">
            <a
              href="https://aintermed.com/ai"
              target="_blank"
              className="inline-block font-[Involve] text-[16px]  font-medium px-8 py-4 bg-gradient-to-r from-[#437CFF] to-[#65b5ff]
                         text-white  tracking-wide rounded-full transition hover:bg-[#2f6de0] uppercase"
            >
              Перейти в&nbsp;ИИ
            </a>
          </div>
        </div>
        <div className="w-full xl:w-auto flex justify-center">
          <img
            src="/assets/svg/Chat_bot1.svg"
            alt="ИИ"
            className="object-contain
                       max-h-[200px] sm:max-h-[220px] md:max-h-[240px] lg:max-h-[270px] xl:max-h-[300px]"
          />
        </div>

        {/* Кнопка <1279 */}
        <div className="xl:hidden">
          <a
            href="https://aintermed.com/ai"
            target="_blank"
            className="inline-block font-[Involve] text-[14px] font-medium px-8 py-4 bg-gradient-to-r from-[#437CFF] to-[#65b5ff]
                       text-white  tracking-wide rounded-full transition hover:bg-[#2f6de0] uppercase"
          >
            Перейти в&nbsp;ИИ
          </a>
        </div>
      </div>
    </div>

    <div
      className="w-full max-w-[1255px]
                 rounded-[32px] bg-gradient-to-r from-[#D6EAFF] to-[#EEFBFF] text-black
                 px-4 py-8
                 sm:px-7  sm:py-12
                 md:px-9  md:py-14
                 lg:px-12 lg:py-16
                 xl:px-[72px] xl:py-[72px]
                 min-h-[380px]
                 sm:min-h-[400px]
                 md:min-h-[400px]
                 lg:min-h-[420px]
                 xl:min-h-[440px]"
    >
      <div className="flex flex-col xl:flex-row-reverse items-center justify-between gap-4">
        <div className="text-center xl:text-right max-w-[550px]">
          <h2
            className="font-[Involve] font-semibold leading-[1.1]
                         text-[25px] sm:text-[30px] md:text-[33px] lg:text-[36px] xl:text-[40px] pb-0"
          >
            <span>База</span>
            <span className="max-[300px]:block">&nbsp;знаний</span>
          </h2>

          <p
            className="text-[#555555] font-[Manrope] tracking-wide
                        text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[17px]
                        leading-[19px] sm:leading-[21px] md:leading-[23px] lg:leading-[25px] xl:leading-[27px] mt-3"
          >
            Хранилище структурированной информации для быстрого доступа. База
            знаний содержит статьи про искусственный интеллект и всё для
            современного медицинского обучения. Все материалы структурированы
            для удобного и быстрого поиска, позволяя легко находить нужную
            информацию
          </p>

          {/* Кнопка >1280 */}
          <div className="mt-6 hidden xl:block">
            <a
              href="https://aintermed.com/ai"
              target="_blank"
              className="inline-block px-8 py-4 font-[Involve] text-[16px] font-medium bg-gradient-to-r from-[#65b5ff] to-[#437CFF]
                         text-white  tracking-wide rounded-full transition hover:bg-[#2f6de0] uppercase"
            >
              Перейти в&nbsp;базу
            </a>
          </div>
        </div>

        <div className="w-full xl:w-auto flex justify-center">
          <img
            src="/assets/svg/Chat_bot2.svg"
            alt="База знаний"
            className="object-contain
                       max-h-[200px] sm:max-h-[220px] md:max-h-[240px] lg:max-h-[270px] xl:max-h-[300px]"
          />
        </div>

        <div className=" xl:hidden">
          <a
            href="https://aintermed.com/ai"
            target="_blank"
            className="inline-block font-[Involve] text-[14px] font-medium px-8 py-4 bg-gradient-to-r from-[#65b5ff] to-[#437CFF]
                       text-white  tracking-wide rounded-full transition hover:bg-[#2f6de0] uppercase"
          >
            Перейти в&nbsp;базу
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default AiBlock;
