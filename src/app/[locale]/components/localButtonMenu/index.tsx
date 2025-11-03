"use client";
import { LocalButtonProps } from "../types/LocalButtonProps";
import { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";

type MenuItemType = {
  label: string;
  functionItem: () => void;
};

type LocalButtonMenuProps = LocalButtonProps & {
  idMenu: string;
  listItems: MenuItemType[];
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
  ...props
}: LocalButtonMenuProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
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
          list: { "aria-labelledby": id },
        }}
      >
        {listItems.map((listItem) => (
          <MenuItem
            key={listItem.label}
            onClick={() => {
              listItem.functionItem();
              handleClose();
            }}
          >
            {listItem.label}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
