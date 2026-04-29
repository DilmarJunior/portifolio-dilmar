import type { Variants } from "motion/react";

const fade: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.2 } },
};

export const reducedVariants = {
  container: { hidden: {}, visible: { transition: { staggerChildren: 0 } } } satisfies Variants,
  fadeUp: fade,
  fadeScale: fade,
  fadeIn: fade,
  bounce: undefined,
};

export const fullVariants = {
  container: {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
  } satisfies Variants,
  fadeUp: {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  } satisfies Variants,
  fadeScale: {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
  } satisfies Variants,
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  } satisfies Variants,
  bounce: {
    animate: {
      y: [0, 8, 0],
      transition: { duration: 1.6, repeat: Infinity, ease: "easeInOut" },
    },
  } satisfies Variants,
};
