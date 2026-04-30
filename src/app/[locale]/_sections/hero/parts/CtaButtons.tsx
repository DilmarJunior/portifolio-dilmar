"use client";

import { Button } from "@mui/material";
import { motion, type Variants } from "motion/react";

export default function CtaButtons({
  variants,
  projectsLabel,
  contactLabel,
}: {
  variants: Variants;
  projectsLabel: string;
  contactLabel: string;
}) {
  return (
    <motion.div
      variants={variants}
      className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto"
    >
      <Button
        {...({ component: "a", href: "#" } as const)}
        variant="contained"
        sx={{
          backgroundColor: "var(--color-primary-1)",
          color: "var(--color-primary-4)",
          textTransform: "none",
          fontWeight: 700,
          borderRadius: "9999px",
          paddingX: 3,
          paddingY: 1,
          boxShadow: "0 0 24px rgba(6,225,255,0.35)",
          "&:hover": {
            backgroundColor: "var(--color-primary-2)",
          },
        }}
      >
        {projectsLabel}
      </Button>
      <Button
        {...({ component: "a", href: "#" } as const)}
        variant="outlined"
        sx={{
          borderColor: "var(--color-primary-1)",
          color: "var(--color-primary-1)",
          textTransform: "none",
          fontWeight: 600,
          borderRadius: "9999px",
          paddingX: 3,
          paddingY: 1,
          "&:hover": {
            borderColor: "var(--color-primary-2)",
            backgroundColor: "rgba(6,225,255,0.08)",
          },
        }}
      >
        {contactLabel}
      </Button>
    </motion.div>
  );
}
