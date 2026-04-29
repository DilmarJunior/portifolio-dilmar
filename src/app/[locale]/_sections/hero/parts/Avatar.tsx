"use client";
import Image from "next/image";
import { motion, type Variants } from "motion/react";

export default function Avatar({ variants, alt }: { variants: Variants; alt: string }) {
  return (
    <motion.div
      variants={variants}
      className={`
        relative rounded-full overflow-hidden
        ring-4 ring-[var(--color-primary-1)]/50
        shadow-[0_0_40px_rgba(6,225,255,0.25)]
        w-32 h-32 sm:w-36 sm:h-36 md:w-44 md:h-44
      `}
    >
      <Image
        src="/images/avatar/my-image.png"
        alt={alt}
        fill
        priority
        quality={85}
        sizes="(min-width: 768px) 192px, (min-width: 640px) 160px, 144px"
        className="object-cover"
      />
    </motion.div>
  );
}
