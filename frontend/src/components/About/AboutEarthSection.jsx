import Image from "next/image";

export default function AboutEarthSection() {
  return (
    <section className="relative mt-24 w-full h-[657px] bg-[#F5F6F6] flex items-center justify-center">
      <div className="absolute w-[647px] h-[655px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-[15.3deg] pointer-events-none">
        <Image
          src="/assets/svg/earth1.svg"
          alt="Earth background"
          layout="fill"
          objectFit="contain"
        />
      </div>
    </section>
  );
}
