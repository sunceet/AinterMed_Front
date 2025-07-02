"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutMap() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 60, scale: 0.95, filter: "blur(8px)" }}
      animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0)" }}
      transition={{ duration: 1 }}
      className="relative h-[645px] sm:mt-32 z-[2] duration-500 hover:scale-105"
    >
      <Image
        src="/assets/svg/earth2.png"
        alt="Earth 2"
        width={1100}
        height={645}
        className="hidden sm:block absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none"
      />

      <Image
        src="/assets/svg/earth2-mobile.png"
        alt="Earth Mobile"
        width={500}
        height={500}
        className="block sm:hidden absolute top-[20px] left-[62%] -translate-x-1/2 pointer-events-none"
      />
    </motion.section>
  );
}
