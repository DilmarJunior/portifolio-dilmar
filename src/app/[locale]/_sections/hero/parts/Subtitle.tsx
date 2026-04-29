"use client";
import { motion, type Variants } from "motion/react";

export default function Subtitle({
  variants,
  role,
}: {
  variants: Variants;
  role: string;
}) {
  return (
    <motion.div
      variants={variants}
      className={`
        font-[family-name:var(--font-mono)]
        text-lg sm:text-xl
        text-[var(--color-primary-font)]
        text-lg md:text-xl lg:text-2xl
        font-extrabold
      `}
    >
      <span className="text-[var(--color-primary-1)]">{"<"}</span>{role}{" "}
      <span className="text-[var(--color-primary-1)]">{"/>"}</span>
    </motion.div>
  );
}
