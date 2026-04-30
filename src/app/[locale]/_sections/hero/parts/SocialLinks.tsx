"use client";

import { motion, type Variants } from "motion/react";

import { SOCIALS } from "../data/socials";

export default function SocialLinks({
  variants,
  labels,
}: {
  variants: Variants;
  labels: Record<"github" | "linkedin" | "email", string>;
}) {
  return (
    <motion.div variants={variants} className="flex items-center gap-2">
      {SOCIALS.map(({ id, Icon, href }) => (
        <a
          key={id}
          href={href}
          aria-label={labels[id]}
          className={`
            p-3 rounded-full
            text-[var(--color-primary-font)]
            hover:text-[var(--color-primary-1)]
            transition-colors
          `}
        >
          <Icon fontSize="medium" />
        </a>
      ))}
    </motion.div>
  );
}
