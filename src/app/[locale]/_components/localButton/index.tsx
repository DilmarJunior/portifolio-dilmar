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
  typeButton,
  ...props
}: LocalButtonProps) {
  const objectTypeButton = {
    primary: {
      backgroundColor: "var(--color-primary-1)",
      color: "var(--color-secondary-1 )",
      backgroundHover: "var(--color-primary-2)",
      backgroundActive: "var(--color-primary-3)",
      borderColor: "var(--color-primary-1)",
    },
    secondary: {
      backgroundColor: "var(--color-secondary-1)",
      color: "var(--color-primary-1)",
      backgroundHover: "var(--color-secondary-2)",
      backgroundActive: "var(--color-secondary-3)",
      borderColor: "var(--color-primary-1)",
    },
  };

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
      sx={{
        ...(typeButton
          ? {
              backgroundColor: objectTypeButton[typeButton].backgroundColor,
              color: objectTypeButton[typeButton].color,
              border: objectTypeButton[typeButton].borderColor,
              "&:hover": {
                backgroundColor: objectTypeButton[typeButton].backgroundHover,
              },
              "&:active": {
                backgroundColor: objectTypeButton[typeButton].backgroundActive,
              },
            }
          : {}),
        ...props.sx,
      }}
    >
      {label}
    </Button>
  );
}
