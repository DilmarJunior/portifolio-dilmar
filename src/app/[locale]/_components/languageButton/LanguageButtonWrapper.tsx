"use client";

import { useEffect, useState } from "react";

type LanguageButtonWrapperProps = {
  children: React.ReactNode;
};

export default function LanguageButtonWrapper({
  children,
}: LanguageButtonWrapperProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
