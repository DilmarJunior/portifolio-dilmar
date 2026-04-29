"use client";
import { useTranslations } from "next-intl";
import BackgroundGlow from "@/app/[locale]/_components/backgroundGlow";
import TerminalGreeting from "./parts/TerminalGreeting";
import Avatar from "./parts/Avatar";
import { motion, useReducedMotion } from "motion/react";
import { fullVariants, reducedVariants } from "@/utils/constants";

export default function HeroSection() {
  const tr = useTranslations("hero");
  const reduced = useReducedMotion();
  const { container, fadeUp, fadeScale, } = reduced
    ? reducedVariants
    : fullVariants;

  return (
    <section
      id="home"
      className={`
        relative overflow-hidden
        min-h-[calc(100svh-3.5rem)]
        flex justify-center
      `}
    >
      <BackgroundGlow />
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className={`
          relative z-10
          flex flex-col items-center text-center
          gap-5 px-6
          max-w-4xl mx-auto
        `}
      >
        <TerminalGreeting
          variants={fadeUp}
          path={tr("portfolio")}
          command={tr("hello-world")}
        />
        <Avatar variants={fadeScale} alt={tr("avatar-alt")} />
      </motion.div>
    </section>
  );
}
