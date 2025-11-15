import { ButtonProps, IconButtonProps } from "@mui/material";
import React from "react";

export  type LocalButtonProps = ButtonProps & IconButtonProps & {
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  label?: string;
  isIconButton?: boolean; 
  icon?:  React.ReactNode;
  typeButton?: "primary" | "secondary";
  functionPress?: () => void;
};