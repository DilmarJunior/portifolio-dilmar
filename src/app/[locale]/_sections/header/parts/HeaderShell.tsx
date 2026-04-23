"use client";

import { useHeaderScroll } from "../hooks/useHeaderScroll";

export default function HeaderShell({ children }: { children: React.ReactNode }) {
  const isScrolled = useHeaderScroll();

  return (
    <header
      id="header-site"
      className={`
        fixed top-0 left-0 z-50
        grid grid-cols-3 md:flex md:justify-between
        w-full items-center h-14 px-10
        bg-[rgb(var(--color-background)/0.8)]
        border-b
        transition-colors duration-300
        ${isScrolled ? "border-[var(--color-foreground-1)]" : "border-transparent"}
      `}
    >
      {children}
    </header>
  );
}
