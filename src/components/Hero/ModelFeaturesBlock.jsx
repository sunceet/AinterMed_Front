import { useState } from "react";
import first_orb from "../../assets/video/first_orb.mp4";
import second_orb from "../../assets/video/second_orb.mp4";
import third_orb from "../../assets/video/third_orb.mp4";
import fourth_orb from "../../assets/video/fourth_orb.mp4";
// src = "/assets/svg/arrow_for_model.svg";
import arrow_for_model from "../../assets/svg/arrow_for_model.svg";

const models = [
  {
    id: "AltmedFree",
    name: "Aintermed Free",
    title: "Ограниченный функционал для базовых задач",
    video: first_orb,
    features: [
      "Отвечает на простые медицинские вопросы общего характера.",
      "Поддерживает базовые справочные функции (например, симптомы, заболевания, препараты).",
      "Обрабатывает до 10 запросов в день без приоритета.",
      "Подходит для первичного ознакомления с возможностями платформы.",
    ],
  },
  {
    id: "AltmedGeneral",
    name: "Aintermed General",
    title: "Мощный помощник врача общей практики",
    video: second_orb,
    features: [
      "Анализирует анамнез и жалобы, формируя предварительные гипотезы.",
      "Выдаёт рекомендации по обследованиям на основе жалоб.",
      "Генерирует шаблоны справок, выписок, направлений и историй болезни.",
      "Поддерживает общение на медицинские темы с учётом клинических рекомендаций.",
    ],
  },
  {
    id: "AltmedPro",
    name: "Aintermed Pro",
    title: "Инструмент для клиницистов и экспертов",
    video: third_orb,
    features: [
      "Проводит продвинутый клинико-диагностический анализ с учётом лабораторных, визуальных и анамнестических данных.",
      "Поддерживает мультидисциплинарный подход и сценарии с несколькими патологиями.",
      "Интегрируется с медицинскими протоколами (например, NICE, UpToDate, Минздрав РФ).",
      "Оптимизирован под нагрузку для приёмных и стационарных отделений.",
    ],
  },
  {
    id: "ComingSoon",
    name: "Скоро",
    title: "Новая модель в разработке",
    video: fourth_orb,
    features: [
      "Информация о функциональности будет опубликована позже.",
      "Ожидается расширение возможностей платформы для узких специалистов.",
      "Подпишитесь на обновления, чтобы узнать первыми.",
    ],
  },
];

export default function ModelFeaturesBlock() {
  const [index, setIndex] = useState(2);
  const model = models[index];

  const prev = () => setIndex(index === 0 ? models.length - 1 : index - 1);
  const next = () => setIndex(index === models.length - 1 ? 0 : index + 1);

  return (
    <div className="w-full bg-white">
      {/* Заголовок */}
      <div className="text-center pt-16 px-4">
        <h2 className="text-[32px] leading-[40px] font-[Involve] font-semibold text-black">
          Возможности{" "}
          <span className="bg-gradient-to-r from-[#437CFF] to-[#65EDFF] text-transparent bg-clip-text">
            моделей
          </span>
        </h2>
      </div>

      {/* === Desktop Version === */}
      <div className="hidden xl:flex justify-center py-16 px-4">
        <div className="w-[1255px] flex items-center justify-between gap-6">
          {/* Левая часть — описание */}
          <div className="w-[420px] bg-[#F4F4F4] p-8 rounded-2xl text-left">
            <h3 className="font-involve font-semibold text-[20px] leading-[32px] text-black mb-6">
              {model.title}
            </h3>
            <ol className="list-decimal list-inside text-[#6B6B6B] space-y-0.5 text-[17px] leading-[25px] font-[Manrope]">
              {model.features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ol>
          </div>

          {/* Центр — видео со стрелками */}
          <div className="relative w-[250px] h-[250px] shrink-0 flex items-center justify-center">
            <button
              onClick={prev}
              className="absolute left-[-36px] cursor-pointer top-1/2 -translate-y-1/2"
            >
              <img
                src={arrow_for_model}
                alt="Назад"
                className="w-[14px] h-[14px] rotate-180"
              />
            </button>

            {model.video && (
              <video
                src={model.video}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-contain rounded-[20px]"
              />
            )}

            <button
              onClick={next}
              className="absolute right-[-36px] cursor-pointer top-1/2 -translate-y-1/2"
            >
              <img
                src={arrow_for_model}
                alt="Вперёд"
                className="w-[14px] h-[14px]"
              />
            </button>
          </div>

          {/* Правая часть — кнопки */}
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
                {m.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* === Mobile Version === */}
      <div className="xl:hidden px-4 pt-10 pb-16 flex flex-col items-center gap-6">
        <div className="relative w-[260px] h-[260px] flex items-center justify-center">
          <button
            onClick={prev}
            className="absolute left-[-30px] top-1/2 -translate-y-1/2"
          >
            <img
              src={arrow_for_model}
              alt="Назад"
              className="w-[12px] h-[12px] rotate-180"
            />
          </button>

          {model.video && (
            <video
              src={model.video}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-contain rounded-[20px]"
            />
          )}

          <button
            onClick={next}
            className="absolute right-[-30px] top-1/2 -translate-y-1/2"
          >
            <img
              src={arrow_for_model}
              alt="Вперёд"
              className="w-[12px] h-[12px]"
            />
          </button>
        </div>

        <div className="bg-[#F4F4F4] w-full p-6 rounded-2xl max-w-[420px]">
          <h3 className="text-[18px] text-left font-semibold font-[Involve] text-black mb-4">
            {model.title}
          </h3>
          <ol className="list-decimal list-inside text-[#6B6B6B] space-y-1 text-[16px] text-left font-[Manrope]">
            {model.features.map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
