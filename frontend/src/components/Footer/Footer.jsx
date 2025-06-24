"use client";

const Footer = () => {
  return (
    <footer className="mt-[100px] w-full min-h-[348px] border-t bg-white border-t-[#C6C6C6] sm:px-10 py-[40px]">
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between gap-y-10 text-[#00000070] font-[Manrope]">
        {/* /\евая часть: логотип и инфо */}
        <div className="flex flex-col justify-between h-full">
          <img
            src="/assets/svg/Logo_AInterMed.svg"
            alt="Логотип"
            className="ml-[20px] w-[150px] xl:w-[210.35px] xl:h-[32.72px]"
          />

          <div className="mt-8 h-[100px] flex-col text-left justify-between text-[18px] leading-[24px] font-semibold hidden md:text-p[] md:flex">
            <div>
              <h1>ООО АЙТИИНТЕРПРЕТАЦИЯ</h1>
              <h1 className="mt-1">ИНН: 1400024720</h1>
              <h1 className="mt-5">©2025 AInterMed</h1>
            </div>
          </div>
        </div>

        <div
          className="
            w-full
            lg:w-auto
            flex flex-col max-[740px]:flex-col sm:flex-row flex-wrap
            justify-start lg:justify-between
            items-start
            gap-y-8 sm:gap-y-0 sm:gap-x-[40px] lg:gap-x-[64px]
            max-[740px]:text-[12px] sm:text-[17px] lg:text-[17px] xl:text-[18px]
            leading-[20px] max-[740px]:leading-[24px] sm:leading-[28px] lg:leading-[36px]
            font-[Manrope] font-normal
            mt-5 px-[16px] sm:px-[24px] lg:px-0"
        >
          <div className="flex flex-col gap-2 min-w-[180px]">
            <h3 className="font-normal bg-gradient-to-r from-[#437CFF] to-[#65EDFF] text-transparent bg-clip-text">
              Условия и политика
            </h3>
            <a
              href="https://aintermed.com/legal/privacy"
              className="hover:underline"
            >
              Политика конфиденциальности
            </a>
            <a
              href="https://aintermed.com/legal/terms"
              className="hover:underline"
            >
              Пользовательское соглашение
            </a>
            <a
              href="https://aintermed.com/legal/oferta"
              className="hover:underline"
            >
              Публичная оферта
            </a>
          </div>

          <div className="flex flex-col gap-2 min-w-[120px]">
            <h3 className="font-normal bg-gradient-to-r from-[#437CFF] to-[#65EDFF] text-transparent bg-clip-text">
              Соцсети
            </h3>
            <a href="https://vk.com/aintermed" className="hover:underline">
              Вконтакте
            </a>
            <a href="#" className="hover:underline">
              Whatsapp
            </a>
            <a href="https://t.me/dr_tymnyida" className="hover:underline">
              Telegram
            </a>
          </div>

          <div className="flex flex-col gap-2 min-w-[120px]">
            <h3 className="font-normal bg-gradient-to-r from-[#437CFF] to-[#65EDFF] text-transparent bg-clip-text">
              Контакты
            </h3>
            <a href="#" className="hover:underline">
              Поддержка
            </a>
            <a href="#" className="hover:underline">
              Почта
            </a>
          </div>
        </div>

        <div className=" text-left ml-[20px] text-[10px] leading-[24px] font-semibold md:hidden">
          <h1>ООО АЙТИИНТЕРПРЕТАЦИЯ</h1>
          <h1 className="-mt-2">ИНН: 1400024720</h1>
          <h1 className="mt-2">©2025 AInterMed</h1>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
