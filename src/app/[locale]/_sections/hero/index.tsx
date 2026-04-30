"use client";
import { useTranslations } from "next-intl";
import BackgroundGlow from "@/app/[locale]/_components/backgroundGlow";
import TerminalGreeting from "./parts/TerminalGreeting";
import Avatar from "./parts/Avatar";
import Heading from "./parts/Heading";
import Subtitle from "./parts/Subtitle";
import Description from "./parts/Description";
import CtaButtons from "./parts/CtaButtons";
import SocialLinks from "./parts/SocialLinks";
import ScrollIndicator from "./parts/ScrollIndicator";
import { motion, useReducedMotion } from "motion/react";
import { fullVariants, reducedVariants } from "@/utils/constants";

export default function HeroSection() {
  const tr = useTranslations("hero");
  const reduced = useReducedMotion();
  const { container, fadeUp, fadeScale, fadeIn, bounce } = reduced
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
        <Heading variants={fadeUp} greeting={tr("greeting")} />
        <Subtitle variants={fadeUp} role={tr("role")} />
        <Description variants={fadeUp}>
          {tr.rich("description", {
            h: (chunks) => (
              <span className="text-[var(--color-primary-1)] font-semibold">
                {chunks}
              </span>
            ),
          })}
        </Description>
        <CtaButtons
          variants={fadeUp}
          projectsLabel={tr("cta.projects")}
          contactLabel={tr("cta.contact")}
        />
        <SocialLinks
          variants={fadeIn}
          labels={{
            github: tr("social.github"),
            linkedin: tr("social.linkedin"),
            email: tr("social.email"),
          }}
        />
      </motion.div>
      <ScrollIndicator
        variants={fadeIn}
        bounceVariants={bounce}
        label={tr("scroll")}
      />
    </section>
  );
}
