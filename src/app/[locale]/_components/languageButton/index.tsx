"use client";

import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import Button from "@mui/material/Button";
import Image from "next/image";
import LanguageModal from "../languageModal";
import { LanguageOptionsType } from "../types/LanguageOptions";

type SupportedLocale = "pt" | "en" | "es";

export default function LanguageButton() {
  const locale = useLocale() as SupportedLocale;
  const tr = useTranslations();
  const [modalOpen, setModalOpen] = useState(false);

  const languageOptions: LanguageOptionsType = {
    pt: {
      language: tr("languages.pt"),
      flag: "brazilian",
      alt: tr("languages.alt.pt"),
    },
    en: {
      language: tr("languages.en"),
      flag: "eua",
      alt: tr("languages.alt.en"),
    },
    es: {
      language: tr("languages.es"),
      flag: "spanish",
      alt: tr("languages.alt.es"),
    },
  };

  const currentOption = languageOptions[locale];

  return (
    <>
      <Button
        variant="outlined"
        className="!min-w-0 !p-0 !rounded-full !border-0 !bg-transparent hover:!bg-[rgb(var(--color-foreground-1)/0.08)]"
        onClick={() => setModalOpen(true)}
      >
        <span className="flex w-8 h-8 rounded-full overflow-hidden p-1 shrink-0">
          <span className="flex flex-1 min-w-0 rounded-full overflow-hidden">
            <Image
              src={`/images/flags/${currentOption.flag}-flag.svg`}
              alt={currentOption.alt}
              width={28}
              height={28}
              className="object-cover w-full h-full"
            />
          </span>
        </span>
      </Button>
      <LanguageModal
        open={modalOpen}
        locale={locale}
        handleClose={() => setModalOpen(false)}
        languageOptions={languageOptions}
      />
    </>
  );
}
