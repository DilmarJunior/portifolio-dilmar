"use client";
import { LocalButtonProps } from "../types/LocalButtonProps";
import { useState } from "react";
import Button from "@mui/material/Button";
import Menu, { MenuProps } from "@mui/material/Menu";
import MenuItem, { MenuItemProps } from "@mui/material/MenuItem";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import IconButton from "@mui/material/IconButton";

type MenuItemType = {
  label: string;
  type?: "normal" | "accordion";
  style?: Record<string, unknown>;
  icon?: React.ReactNode;
  subItems?: MenuItemType[];
  functionItem: () => void;
};

type LocalButtonMenuProps = LocalButtonProps & {
  idMenu: string;
  listItems: MenuItemType[];
  menuProps?: MenuProps;
  menuItemProps?: MenuItemProps;
  iconButtonStyle?: object;
  slotPropsListMenuStyle?: Record<string, unknown>;
  onOpen?: () => void;
  onClose?: () => void;
};

export default function LocalButtonMenu({
  id,
  idMenu,
  startIcon,
  endIcon,
  label,
  isIconButton = false,
  icon,
  listItems,
  iconButtonStyle,
  slotPropsListMenuStyle,
  menuProps,
  onOpen,
  onClose,
  ...props
}: LocalButtonMenuProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = menuProps?.open ?? Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    onOpen?.();
  };

  const handleClose = () => {
    setAnchorEl(null);
    onClose?.();
  };

  return (
    <div>
      {isIconButton ? (
        <IconButton
          aria-controls={open ? idMenu : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          {...props}
          style={{
            color: "var(--color-primary-font)",
            ...iconButtonStyle,
          }}
        >
          {icon}
        </IconButton>
      ) : (
        <Button
          id={id}
          aria-controls={open ? idMenu : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          startIcon={startIcon}
          endIcon={endIcon}
          {...props}
        >
          {label}
        </Button>
      )}

      <Menu
        id={idMenu}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          paper: {
            sx: {
              borderRadius: 2,
              padding: 0.2,
              backgroundColor: "var(--color-foreground-2)",
            },
          },
          list: {
            "aria-labelledby": id,
            sx: {
              ...slotPropsListMenuStyle,
              backgroundColor: "var(--color-background-5)",
              borderRadius: 2,
            },
          },
        }}
        {...menuProps}
      >
        {listItems.map((listItem) =>
          listItem.type === "accordion" ? (
            <Accordion
              key={listItem.label}
              sx={{
                "&::before": {
                  display: "none",
                },
                border: "none",
                boxShadow: "none",
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
                sx={{
                  transition: "box-shadow 0.2s ease",
                  minHeight: "35px",
                  height: "40px",

                  "&.Mui-expanded": {
                    minHeight: "35px",
                    height: "40px",
                    boxShadow: "0px 4px 6px -2px rgba(0,0,0,0.25)",
                    zIndex: 2,
                  },

                  "& .MuiAccordionSummary-expandIconWrapper": {
                    color: "var(--color-primary-1)",
                  },

                  "&.Mui-expanded .MuiAccordionSummary-expandIconWrapper": {
                    color: "var(--color-primary-2)",
                  },

                  backgroundColor: "var(--color-background-5)",
                  color: "var(--color-primary-font)",
                }}
              >
                <Typography component="span">{listItem.label}</Typography>
              </AccordionSummary>

              {listItem.subItems?.map((subItem, index) => (
                <AccordionDetails
                  key={subItem.label}
                  sx={{
                    padding: "5px 0px 5px 0px",
                    borderBottom: "1px solid var(--color-foreground-1)",
                    backgroundColor: "var(--color-background-6)",
                    color: "var(--color-primary-font)",
                  }}
                >
                  <MenuItem
                    key={subItem.label}
                    onClick={() => {
                      subItem.functionItem();
                      handleClose();
                    }}
                    {...props.menuItemProps}
                    sx={{ ...subItem.style }}
                  >
                    {subItem.label}
                    {subItem.icon && subItem.icon}
                  </MenuItem>
                </AccordionDetails>
              ))}
            </Accordion>
          ) : (
            <MenuItem
              key={listItem.label}
              onClick={() => {
                listItem.functionItem();
                handleClose();
              }}
              {...props.menuItemProps}
              sx={{
                minHeight: "40px",
                backgroundColor: "var(--color-background-5)",
                color: "var(--color-primary-font)",
                ...listItem.style,
              }}
            >
              {listItem.label}
              {listItem.icon && listItem.icon}
            </MenuItem>
          ),
        )}
      </Menu>
    </div>
  );
}
