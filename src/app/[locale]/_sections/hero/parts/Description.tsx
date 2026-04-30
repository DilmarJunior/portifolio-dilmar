"use client";
import { motion, type Variants } from "motion/react";

export default function Description({
  variants,
  children,
}: {
  variants: Variants;
  children: React.ReactNode;
}) {
  return (
    <motion.p
      variants={variants}
      className="max-w-2xl text-base sm:text-lg text-[var(--color-primary-font)] leading-relaxed"
    >
      {children}
    </motion.p>
  );
}
