import { LanguageOptionsType } from "./LanguageOptions";

export type LanguageModalType = {
  open: boolean;
  locale: string;
  handleClose: () => void;
  languageOptions: LanguageOptionsType;
};