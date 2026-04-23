import { ButtonProps, IconButtonProps } from "@mui/material";
import React from "react";

type LocalButtonShared = {
  label?: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  typeButton?: "primary" | "secondary";
  functionPress?: () => void;
};

type IconVariant = Omit<IconButtonProps, "children"> &
  LocalButtonShared & {
    isIconButton: true;
    icon: React.ReactNode;
  };

type ButtonVariant = Omit<ButtonProps, "children"> &
  LocalButtonShared & {
    isIconButton?: false;
    icon?: never;
  };

export type LocalButtonPropsType = IconVariant | ButtonVariant;
