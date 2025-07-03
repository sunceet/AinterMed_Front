"use client";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className=" w-full min-h-[250px] border-t bg-white border-t-[#C6C6C6] md:py-[50px] xl:py-[50px] py-[30px]">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 font-[Manrope]">
        <div className="flex flex-col md:flex-row justify-between max-w-[1255px] mx-auto text-[#00000070] gap-[-30px]">
          {/* Логотип и инфо (слева) */}
          <div className="flex flex-col justify-between h-full">
            <img
              src="/assets/svg/Logo_AInterMed.svg"
              alt="Логотип"
              className=" w-[144px] h-[22px] xl:w-[210.35px] xl:h-[32.72px]"
            />

            <div className="mt-5 text-left text-[14px] xl:text-[16px] leading-[26px] font-normal hidden md:block text-black">
              <p className="text-[#555555]">{t("footer.company")}</p>
              <p className="text-[#555555]">{t("footer.inn")}</p>
              <p className="text-[#555555] mt-2">{t("footer.copyright")}</p>
            </div>
          </div>

          {/* Контентные колонки */}
          <div className="w-full mt-8 md:mt-0 flex flex-col md:flex-row md:w-auto md:gap-[32px] text-[10px] sm:text-[14px] lg:text-[16px] leading-[24px] font-normal tracking-[0] items-start text-left">
            {/* Мобильная версия */}
            <div className="md:hidden w-full">
              <div className="flex flex-wrap justify-start items-start gap-x-[51px] gap-y-[10px] text-[10px] leading-[18px] font-normal text-black">
                <div className="flex flex-col gap-[2px] w-fit whitespace-nowrap">
                  <h3 className="mb-[4px] bg-gradient-to-r from-[#437CFF] to-[#65EDFF] text-transparent bg-clip-text font-semibold">
                    {t("footer.section.legal")}
                  </h3>
                  <a
                    href="https://aintermed.com/legal/privacy"
                    className="hover:underline"
                  >
                    {t("footer.links.privacy")}
                  </a>
                  <a
                    href="https://aintermed.com/legal/terms"
                    className="hover:underline"
                  >
                    {t("footer.links.terms")}
                  </a>
                  <a
                    href="https://aintermed.com/legal/oferta"
                    className="hover:underline"
                  >
                    {t("footer.links.public")}
                  </a>
                </div>

                <div className="flex flex-col gap-[2px] w-fit whitespace-nowrap">
                  <h3 className="mb-[4px] bg-gradient-to-r from-[#437CFF] to-[#65EDFF] text-transparent bg-clip-text font-semibold">
                    {t("footer.section.social")}
                  </h3>
                  <a
                    href="https://vk.com/aintermed"
                    className="hover:underline"
                  >
                    {t("footer.links.vk")}
                  </a>
                  <a
                    href="https://t.me/+98H-89A0ZgJlZjhi"
                    className="hover:underline"
                  >
                    {t("footer.links.tg")}
                  </a>
                </div>

                <div className="flex flex-col gap-[2px] w-fit whitespace-nowrap">
                  <h3 className="mb-[4px] bg-gradient-to-r from-[#437CFF] to-[#65EDFF] text-transparent bg-clip-text font-semibold">
                    {t("footer.section.contacts")}
                  </h3>
                  <a href="#" className="hover:underline">
                    {t("footer.links.support")}
                  </a>
                  <a href="#" className="hover:underline">
                    {t("footer.links.email")}
                  </a>
                </div>
              </div>

              {/* Подпись под колонками на мобилке */}
              <div className="text-left text-[10px]  leading-[18px] text-black font-normal mt-6">
                <p className="text-[#00000050]">{t("footer.company")}</p>
                <p className="text-[#00000050]">{t("footer.inn")}</p>
                <p className="text-[#00000050] mt-2">{t("footer.copyright")}</p>
              </div>
            </div>

            {/* Десктопная версия */}
            <div className="hidden md:flex flex-col gap-[6px] w-fit">
              <h3 className="font-semibold bg-gradient-to-r from-[#437CFF] to-[#65EDFF] text-transparent bg-clip-text">
                {t("footer.section.legal")}
              </h3>
              <a
                href="https://aintermed.com/legal/privacy"
                className="text-black hover:underline"
              >
                {t("footer.links.privacy")}
              </a>
              <a
                href="https://aintermed.com/legal/terms"
                className="text-black hover:underline"
              >
                {t("footer.links.terms")}
              </a>
              <a
                href="https://aintermed.com/legal/oferta"
                className="text-black hover:underline"
              >
                {t("footer.links.public")}
              </a>
            </div>

            <div className="hidden md:flex flex-col gap-[6px] w-fit">
              <h3 className="font-semibold bg-gradient-to-r from-[#437CFF] to-[#65EDFF] text-transparent bg-clip-text">
                {t("footer.section.social")}
              </h3>
              <a
                href="https://vk.com/aintermed"
                className="text-black hover:underline"
              >
                {t("footer.links.vk")}
              </a>
              <a
                href="https://t.me/+98H-89A0ZgJlZjhi"
                className="text-black hover:underline"
              >
                {t("footer.links.tg")}
              </a>
            </div>

            <div className="hidden md:flex flex-col gap-[6px] w-fit">
              <h3 className="font-semibold bg-gradient-to-r from-[#437CFF] to-[#65EDFF] text-transparent bg-clip-text">
                {t("footer.section.contacts")}
              </h3>
              <a href="#" className="text-black hover:underline">
                {t("footer.links.support")}
              </a>
              <a href="#" className="text-black hover:underline">
                {t("footer.links.email")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
