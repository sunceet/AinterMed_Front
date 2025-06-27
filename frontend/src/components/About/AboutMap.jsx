import Image from "next/image";

export default function AboutMap() {
  return (
    <section className="relative w-full h-[645px] mt-32">
      <Image
        src="/assets/svg/earth2.svg"
        alt="Earth 2"
        width={1003}
        height={645}
        className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none"
      />
      <div className="absolute top-[295px] left-1/2 -translate-x-1/2 text-[48px] font-[involve] font-semibold uppercase text-black leading-[26px] tracking-[0.01em]">
        Россия
      </div>
      <div className="absolute top-[467px] left-[43px] text-[24px] font-[involve] font-semibold uppercase text-black">
        Беларусь
      </div>
      <div className="absolute top-[514px] left-[643px] text-[32px] font-[involve] font-semibold uppercase text-black">
        Казахстан
      </div>
      <div className="absolute top-[575px] left-[744px] text-[24px] font-[involve] font-semibold uppercase text-black">
        Кыргызстан
      </div>
    </section>
  );
}
