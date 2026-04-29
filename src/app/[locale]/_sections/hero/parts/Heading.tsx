"use client";
import { motion, type Variants } from "motion/react";

export default function Heading({
  variants,
  greeting,
}: {
  variants: Variants;
  greeting: string;
}) {
  return (
    <motion.h1
      variants={variants}
      className={`
        text-4xl sm:text-5xl md:text-6xl lg:text-6xl
        font-bold tracking-tight break-words
      `}
    >
      {greeting}{" "}
      <span
        className={`
          bg-gradient-to-r from-[#06E1FF] via-[#3FA9FF] to-[#9B56FF]
          bg-clip-text text-transparent
        `}
      >
        Dilmar Carvalho
      </span>
    </motion.h1>
  );
}
