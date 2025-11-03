import { Button, IconButton } from "@mui/material";
import { LocalButtonProps } from "../types/LocalButtonProps";
import React from "react";

export default function LocalButton({
  startIcon,
  endIcon,
  label,
  functionPress,
  isIconButton,
  icon,
  ...props
}: LocalButtonProps) {
  return isIconButton ? (
    <IconButton onClick={functionPress} {...props}>
      {icon}
    </IconButton>
  ) : (
    <Button
      onClick={functionPress}
      startIcon={startIcon}
      endIcon={endIcon}
      {...props}
    >
      {label}
    </Button>
  );
}
