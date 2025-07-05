"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";

// В Next.js App Router ассеты лучше держать в public и передавать путь как строку!
const models = [
  {
    id: "AltmedFree",
    nameKey: "models.altmedFree.name",
    titleKey: "models.altmedFree.title",
    featuresKeys: ["models.altmedFree.f1"],
    video: "/assets/video/first_orb.mp4",
  },
  {
    id: "AltmedGeneral",
    nameKey: "models.altmedGeneral.name",
    titleKey: "models.altmedGeneral.title",
    featuresKeys: [
      "models.altmedGeneral.f1",
      "models.altmedGeneral.f2",
      "models.altmedGeneral.f3",
      "models.altmedGeneral.f4",
    ],
    video: "/assets/video/second_orb.mp4",
  },
  {
    id: "AltmedPro",
    nameKey: "models.altmedPro.name",
    titleKey: "models.altmedPro.title",
    featuresKeys: [
      "models.altmedPro.f1",
      "models.altmedPro.f2",
      "models.altmedPro.f3",
      "models.altmedPro.f4",
    ],
    video: "/assets/video/third_orb.mp4",
  },
  {
    id: "ComingSoon",
    nameKey: "models.coming.name",
    titleKey: "models.coming.title",
    featuresKeys: ["models.coming.f1", "models.coming.f2", "models.coming.f3"],
    video: "/assets/video/fourth_orb.mp4",
  },
];

export default function ModelFeaturesBlock() {
  const { t } = useTranslation();
  const [index, setIndex] = useState(2);
  const model = models[index];

  const prev = () => setIndex(index === 0 ? models.length - 1 : index - 1);
  const next = () => setIndex(index === models.length - 1 ? 0 : index + 1);

  return (
    <div className="w-full bg-white">
      <div className="text-center pt-16 px-4">
        <h2 className="text-[32px] leading-[40px] font-[Involve] font-semibold text-black">
          {t("models.titleStart")}{" "}
          <span className="bg-gradient-to-r from-[#437CFF] to-[#65EDFF] text-transparent bg-clip-text">
            {t("models.titleGradient")}
          </span>
        </h2>
      </div>

      {/* Desktop */}
      <div className="hidden xl:flex justify-center py-16 px-4">
        <div className="w-[1255px] flex items-center justify-between gap-2">
          <div className="w-[420px] bg-[#F4F4F4] p-8 rounded-2xl text-left">
            <h3 className="font-involve font-semibold text-[20px] leading-[32px] text-black mb-6">
              {t(model.titleKey)}
            </h3>
            <ol className="list-decimal list-inside text-[#6B6B6B] space-y-0.5 text-[17px] leading-[25px] font-[Manrope]">
              {model.featuresKeys.map((key, i) => (
                <li key={i}>{t(key)}</li>
              ))}
            </ol>
          </div>

          {/* Видео + стрелки */}
          <div className="relative w-[360px] h-[360px] flex items-center justify-center">
            <div className="relative w-full h-full">
              {model.video && (
                <video
                  src={model.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-contain rounded-[24px]"
                />
              )}
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <span className="bg-gradient-to-b from-[#ffffff] to-[#ffffff] text-transparent bg-clip-text font-[Involve] text-[20px] font-semibold drop-shadow-md">
                  {t(model.nameKey)}
                </span>
              </div>
            </div>
            <button
              onClick={prev}
              className="absolute left-[-5px] top-1/2 -translate-y-1/2 z-30"
            >
              <img
                src="/assets/svg/arrow_for_model.svg"
                alt="Назад"
                className="w-[28px] h-[28px] rotate-180"
              />
            </button>
            <button
              onClick={next}
              className="absolute right-[-10px] top-1/2 -translate-y-1/2 z-30"
            >
              <img
                src="/assets/svg/arrow_for_model.svg"
                alt="Вперёд"
                className="w-[28px] h-[28px]"
              />
            </button>
          </div>

          {/* Кнопки выбора моделей */}
          <div className="w-[420px] flex flex-col gap-4">
            {models.map((m, i) => (
              <button
                key={m.id}
                onClick={() => setIndex(i)}
                className={`w-full rounded-[28px] font-[Involve] text-[20px] leading-[28px] font-medium flex items-center justify-center transition-all ${
                  i === index
                    ? "bg-gradient-to-r from-[#5AB6FF] to-[#88E0FF] text-white"
                    : "bg-[#F4F4F4] text-gray-600 hover:bg-[#e6e6e6]"
                }`}
                style={{ height: "90px" }}
              >
                {t(m.nameKey)}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="xl:hidden px-4 pt-10 pb-16 flex flex-col items-center gap-6">
        <div className="relative w-[300px] h-[300px] flex items-center justify-center">
          <div className="relative w-[500px] h-[500px]">
            {model.video && (
              <video
                src={model.video}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-contain rounded-[24px]"
              />
            )}
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <span className="bg-gradient-to-b from-[#FFFFFF] to-[#ffffff] text-transparent bg-clip-text font-[Involve] text-[20px] font-semibold drop-shadow-md">
                {t(model.nameKey)}
              </span>
            </div>
          </div>
          <button
            onClick={prev}
            className="absolute left-[-30px] top-1/2 -translate-y-1/2"
          >
            <img
              src="/assets/svg/arrow_for_model.svg"
              alt="Назад"
              className="w-[24px] h-[24px] rotate-180"
            />
          </button>
          <button
            onClick={next}
            className="absolute right-[-30px] top-1/2 -translate-y-1/2"
          >
            <img
              src="/assets/svg/arrow_for_model.svg"
              alt="Вперёд"
              className="w-[24px] h-[24px]"
            />
          </button>
        </div>

        <div className="bg-[#F4F4F4] w-full p-6 rounded-2xl max-w-[420px]">
          <h3 className="text-[18px] text-left font-semibold font-[Involve] text-black mb-4">
            {t(model.titleKey)}
          </h3>
          <ol className="list-decimal list-inside text-[#6B6B6B] space-y-1 text-[16px] text-left font-[Manrope]">
            {model.featuresKeys.map((key, i) => (
              <li key={i}>{t(key)}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
