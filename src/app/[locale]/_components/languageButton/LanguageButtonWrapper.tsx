"use client";

import { useScrolled } from "@/hooks/useScrolled";

type LanguageButtonWrapperProps = {
  children: React.ReactNode;
};

export default function LanguageButtonWrapper({
  children,
}: LanguageButtonWrapperProps) {
  const isScrolled = useScrolled();

  return (
    <div
      className={`
        fixed top-16 right-10 z-40
        rounded-full
        bg-[rgb(var(--color-background)/0.8)]
        border
        transition-colors duration-300
        ${isScrolled ? "border-[var(--color-foreground-1)]" : "border-transparent"}
      `}
    >
      {children}
    </div>
  );
}
