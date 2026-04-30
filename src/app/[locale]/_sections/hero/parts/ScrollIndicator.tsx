"use client";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { motion, type Variants } from "motion/react";

export default function ScrollIndicator({
  variants,
  bounceVariants,
  label,
}: {
  variants: Variants;
  bounceVariants: Variants | undefined;
  label: string;
}) {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="visible"
      transition={{ delay: 0.9 }}
      className="absolute left-1/2 -translate-x-1/2 bottom-6"
    >
      <a
        href="#about"
        aria-label={label}
        className={`
          block p-2
          text-[var(--color-primary-font)]
          hover:text-[var(--color-primary-1)]
          transition-colors
        `}
      >
        {bounceVariants ? (
          <motion.div variants={bounceVariants} animate="animate">
            <KeyboardArrowDownIcon role="presentation" />
          </motion.div>
        ) : (
          <KeyboardArrowDownIcon role="presentation" />
        )}
      </a>
    </motion.div>
  );
}
