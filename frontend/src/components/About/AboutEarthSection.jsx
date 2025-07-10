"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutEarthSection() {
  return (
    <section className="relative w-full h-[380px] sm:h-[657px] flex items-center justify-center duration-500 hover:scale-105">
      <motion.div
        initial={{ opacity: 0, y: 60, scale: 0.95, filter: "blur(8px)" }}
        animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0)" }}
        transition={{ duration: 1 }}
        className="absolute w-[500px] h-[500px] xl:w-[750px] xl:h-[750px] top-[200px] xl:top-[350px] left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
      >
        <Image
          src="/assets/svg/earth1.png"
          alt="Earth background"
          width={750}
          height={750}
          priority
          className="w-full h-full mt-10 object-contain transition-transform duration-200 hover:scale-105"
        />
      </motion.div>
    </section>
  );
}
