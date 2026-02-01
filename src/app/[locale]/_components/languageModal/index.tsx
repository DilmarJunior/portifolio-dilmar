"use client";
import { usePathname, useRouter } from "@/i18n/navigation";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { LanguageModalType } from "../types/LanguageModal";
import LocalModal from "../localModal";

type SupportedLocale = "pt" | "en" | "es";

const LOCALE_ORDER: SupportedLocale[] = ["pt", "en", "es"];

export default function LanguageModal({
  open,
  locale,
  handleClose,
  languageOptions,
}: LanguageModalType) {
  const pathname = usePathname();
  const router = useRouter();

  const handleLocaleSelect = (localeKey: SupportedLocale) => {
    router.replace(pathname, { locale: localeKey });
    handleClose();
  };

  return (
    <LocalModal open={open} handleClose={handleClose}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
        {LOCALE_ORDER.map((localeKey) => {
          const option = languageOptions[localeKey];
          const isCurrentLocale = locale === localeKey;
          return (
            <Button
              key={localeKey}
              onClick={() => handleLocaleSelect(localeKey)}
              disabled={isCurrentLocale}
              fullWidth
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1.5,
                justifyContent: "flex-start",
                py: 1.5,
                px: 2,
                textTransform: "none",
                color: isCurrentLocale
                  ? "var(--color-foreground-2)"
                  : "var(--color-foreground-1)",
                "&:hover": {
                  bgcolor: "var(--color-background-6)",
                },
                "&.Mui-disabled": {
                  color: "var(--color-foreground-2)",
                  opacity: 0.8,
                },
              }}
            >
              <Image
                src={`/images/flags/${option.flag}-flag.svg`}
                alt={option.alt}
                width={28}
                height={28}
                className="object-cover shrink-0"
              />
              <Typography
                component="span"
                variant="body1"
                fontWeight="bold"
                color="var(--color-primary-font)"
              >
                {option.language}
              </Typography>
            </Button>
          );
        })}
      </Box>
    </LocalModal>
  );
}
