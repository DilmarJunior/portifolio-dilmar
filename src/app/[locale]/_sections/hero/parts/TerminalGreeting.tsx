"use client";
import { useEffect, useState } from "react";
import { motion, useReducedMotion, type Variants } from "motion/react";

const TYPING_DELAY_MS = 150;
const PAUSE_BETWEEN_LOOPS_MS = 5000;

export default function TerminalGreeting({
  variants,
  path,
  command,
}: {
  variants: Variants;
  path: string;
  command: string;
}) {
  const reduced = useReducedMotion();
  const [typed, setTyped] = useState("");

  useEffect(() => {
    if (reduced) {
      setTyped(command);
      return;
    }
    let intervalId: ReturnType<typeof setInterval> | undefined;
    let timeoutId: ReturnType<typeof setTimeout> | undefined;

    const startTyping = () => {
      let i = 0;
      setTyped("");
      intervalId = setInterval(() => {
        i += 1;
        setTyped(command.slice(0, i));
        if (i >= command.length) {
          if (intervalId) clearInterval(intervalId);
          timeoutId = setTimeout(startTyping, PAUSE_BETWEEN_LOOPS_MS);
        }
      }, TYPING_DELAY_MS);
    };
    startTyping();

    return () => {
      if (intervalId) clearInterval(intervalId);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [reduced, command]);

  return (
    <motion.div
      variants={variants}
      className={`
        inline-flex items-center
        gap-2 max-[440px]:gap-1
        px-3 py-1 max-[440px]:px-1.5 max-[440px]:py-0
        rounded-full
        border border-[var(--color-foreground-1)]
        bg-[var(--color-background-2)]/50
        font-[family-name:var(--font-mono)] text-xs
        text-[var(--color-primary-font)]
      `}
    >
      <span
        className={`
          w-2 h-2 max-[440px]:w-1 max-[440px]:h-1
          rounded-full bg-[var(--color-primary-1)] animate-pulse
        `}
        aria-hidden
      />
      <code className="text-base max-[440px]:text-xs text-muted-foreground font-mono">
        ~/{path} ${" "}
        <span className="text-[var(--color-primary-1)]">{typed}</span>
        <motion.span
          aria-hidden
          className="text-[var(--color-primary-font)]"
          animate={reduced ? undefined : { opacity: [1, 0, 1] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "linear" }}
        >
          |
        </motion.span>
      </code>
    </motion.div>
  );
}
