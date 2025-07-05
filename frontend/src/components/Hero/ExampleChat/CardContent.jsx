"use client";
import { useTranslation } from "react-i18next";

const CardContent = ({ chat, position = 0 }) => {
  const { t } = useTranslation();

  return (
    <>
      <div className="flex items-start gap-2">
        <div className="bg-blue-100 rounded-full w-6 h-6 flex items-center justify-center shrink-0 mt-[2px]">
          <img
            src="/assets/svg/mini_logo.svg"
            alt="Logo"
            className="w-3.5 h-3.5 object-contain"
          />
        </div>
        <div className="text-[12px] xl:text-[14px] leading-tight xl:leading-normal font-[Manrope] text-gray-800 text-left overflow-hidden">
          <div dangerouslySetInnerHTML={{ __html: t(chat.assistant) }} />
        </div>
      </div>

      <div className="w-full mt-4 sm:mt-2 px-2 py-2 border border-gray-200 rounded-[20px] bg-white flex flex-col justify-between text-left min-h-[88px] relative group">
        <div className="xl:pt-2 text-[12px] xl:text-[13px] text-[#000000] font-[Manrope] leading-tight mb-2 sm:mb-2 pl-2">
          {t(chat.user)}
        </div>

        <div className="flex items-end justify-between transition-opacity duration-200 group-hover:opacity-100 gap-2">
          <div
            className={`flex gap-1.5 flex-wrap ${
              position !== 0 ? "pointer-events-none opacity-50" : ""
            }`}
          >
            <a className="flex select-none items-center px-2.5 py-1.5 sm:px-3 sm:py-1.5 bg-white border border-gray-200 rounded-full text-[11px] sm:text-[12px] text-gray-800">
              AInterMed&nbsp;<span className="text-[#437CFF]">PRO</span>
            </a>
            <a className="flex select-none items-center gap-1 px-2.5 py-1.5 sm:px-3 sm:py-1.5 bg-white border border-gray-200 rounded-full text-[11px] sm:text-[12px] text-gray-800">
              <img
                src="/assets/svg/fi-rr-globe.svg"
                alt="Globe"
                className="w-4 h-4"
              />
              {t("promt.search")}
            </a>
          </div>

          <div
            className={position !== 0 ? "pointer-events-none opacity-50" : ""}
          >
            <button className="w-8 h-8 flex items-center justify-center">
              <img
                src="/assets/svg/bigarrow.svg"
                alt="Arrow"
                className="w-7 h-7 select-none"
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardContent;
