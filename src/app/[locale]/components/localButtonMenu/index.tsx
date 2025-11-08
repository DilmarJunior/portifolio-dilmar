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
          list: {
            "aria-labelledby": id,
            sx: { ...slotPropsListMenuStyle },
          },
        }}
        {...menuProps}
      >
        {listItems.map((listItem) =>
          listItem.type === "accordion" ? (
            <Accordion key={listItem.label}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography component="span">{listItem.label}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                {listItem.subItems?.map((subItem) => (
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
                ))}
              </AccordionDetails>
            </Accordion>
          ) : (
            <MenuItem
              key={listItem.label}
              onClick={() => {
                listItem.functionItem();
                handleClose();
              }}
              {...props.menuItemProps}
              sx={{ ...listItem.style }}
            >
              {listItem.label}
              {listItem.icon && listItem.icon}
            </MenuItem>
          )
        )}
      </Menu>
    </div>
  );
}
