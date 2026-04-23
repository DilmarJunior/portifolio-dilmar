import { Button, IconButton } from "@mui/material";
import { LocalButtonPropsType } from "../types/LocalButtonProps";

const typeButtonStyles = {
  primary: {
    backgroundColor: "var(--color-primary-1)",
    color: "var(--color-secondary-1)",
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
} as const;

export default function LocalButton(props: LocalButtonPropsType) {
  if (props.isIconButton) {
    const {
      isIconButton: _isIconButton,
      icon,
      functionPress,
      label: _label,
      typeButton: _typeButton,
      ...rest
    } = props;
    return (
      <IconButton onClick={functionPress} {...rest}>
        {icon}
      </IconButton>
    );
  }

  const {
    startIcon,
    endIcon,
    label,
    functionPress,
    typeButton,
    sx,
    isIconButton: _isIconButton,
    icon: _icon,
    ...rest
  } = props;

  const style = typeButton ? typeButtonStyles[typeButton] : null;

  return (
    <Button
      onClick={functionPress}
      startIcon={startIcon}
      endIcon={endIcon}
      {...rest}
      sx={{
        ...(style
          ? {
              backgroundColor: style.backgroundColor,
              color: style.color,
              border: `1px solid ${style.borderColor}`,
              "&:hover": {
                backgroundColor: style.backgroundHover,
              },
              "&:active": {
                backgroundColor: style.backgroundActive,
              },
            }
          : {}),
        ...sx,
      }}
    >
      {label}
    </Button>
  );
}
