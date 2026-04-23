"use client";
import { LocalButtonPropsType } from "../types/LocalButtonProps";
import { LocalMenuItem } from "../types/LocalMenuItem";
import { useState } from "react";
import Link from "next/link";
import Button from "@mui/material/Button";
import Menu, { MenuProps } from "@mui/material/Menu";
import MenuItem, { MenuItemProps } from "@mui/material/MenuItem";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import IconButton from "@mui/material/IconButton";

type LocalButtonMenuProps = LocalButtonPropsType & {
  idMenu: string;
  listItems: LocalMenuItem[];
  menuProps?: Partial<MenuProps>;
  menuItemProps?: MenuItemProps;
  iconButtonStyle?: React.CSSProperties;
  slotPropsListMenuStyle?: Record<string, unknown>;
  onOpen?: () => void;
  onClose?: () => void;
};

const paperSlotSx = {
  borderRadius: 2,
  padding: 0.2,
  backgroundColor: "var(--color-foreground-2)",
};

const accordionSx = {
  "&::before": { display: "none" },
  border: "none",
  boxShadow: "none",
};

const accordionSummarySx = {
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
};

const accordionDetailsSx = {
  padding: "5px 0px 5px 0px",
  borderBottom: "1px solid var(--color-foreground-1)",
  backgroundColor: "var(--color-background-6)",
  color: "var(--color-primary-font)",
};

const normalItemBaseSx = {
  minHeight: "40px",
  backgroundColor: "var(--color-background-5)",
  color: "var(--color-primary-font)",
};

export default function LocalButtonMenu(props: LocalButtonMenuProps) {
  const {
    id,
    idMenu,
    listItems,
    iconButtonStyle,
    slotPropsListMenuStyle,
    menuProps,
    menuItemProps,
    onOpen,
    onClose,
  } = props;

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = menuProps?.open ?? Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    if (onOpen) {
      onOpen();
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
    if (onClose) {
      onClose();
    }
  };

  const renderTrigger = () => {
    if (props.isIconButton) {
      const {
        id: _id,
        idMenu: _idMenu,
        listItems: _listItems,
        iconButtonStyle: _iconButtonStyle,
        slotPropsListMenuStyle: _slotPropsListMenuStyle,
        menuProps: _menuProps,
        menuItemProps: _menuItemProps,
        onOpen: _onOpen,
        onClose: _onClose,
        isIconButton: _isIconButton,
        icon,
        startIcon: _startIcon,
        endIcon: _endIcon,
        label: _label,
        typeButton: _typeButton,
        functionPress: _functionPress,
        ...iconRest
      } = props;

      return (
        <IconButton
          aria-controls={open ? idMenu : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          {...iconRest}
          style={{
            color: "var(--color-primary-font)",
            ...iconButtonStyle,
          }}
        >
          {icon}
        </IconButton>
      );
    }

    const {
      id: _id,
      idMenu: _idMenu,
      listItems: _listItems,
      iconButtonStyle: _iconButtonStyle,
      slotPropsListMenuStyle: _slotPropsListMenuStyle,
      menuProps: _menuProps,
      menuItemProps: _menuItemProps,
      onOpen: _onOpen,
      onClose: _onClose,
      isIconButton: _isIconButton,
      icon: _icon,
      startIcon,
      endIcon,
      label,
      typeButton: _typeButton,
      functionPress: _functionPress,
      ...btnRest
    } = props;

    return (
      <Button
        id={id}
        aria-controls={open ? idMenu : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        startIcon={startIcon}
        endIcon={endIcon}
        {...btnRest}
      >
        {label}
      </Button>
    );
  };

  return (
    <div>
      {renderTrigger()}

      <Menu
        id={idMenu}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          paper: { sx: paperSlotSx },
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
            <Accordion key={listItem.label} sx={accordionSx}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`panel-${listItem.label}-content`}
                id={`panel-${listItem.label}-header`}
                sx={accordionSummarySx}
              >
                <Typography component="span">{listItem.label}</Typography>
              </AccordionSummary>

              {listItem.subItems?.map((subItem) => (
                <AccordionDetails key={subItem.label} sx={accordionDetailsSx}>
                  <MenuItem
                    {...(subItem.href
                      ? { component: Link, href: subItem.href }
                      : {})}
                    onClick={() => {
                      if (subItem.functionItem) {
                        subItem.functionItem();
                      }
                      handleClose();
                    }}
                    {...menuItemProps}
                    sx={{ ...subItem.style }}
                  >
                    {subItem.label}
                    {subItem.icon}
                  </MenuItem>
                </AccordionDetails>
              ))}
            </Accordion>
          ) : (
            <MenuItem
              key={listItem.label}
              {...(listItem.href
                ? { component: Link, href: listItem.href }
                : {})}
              onClick={() => {
                if (listItem.functionItem) {
                  listItem.functionItem();
                }
                handleClose();
              }}
              {...menuItemProps}
              sx={{
                ...normalItemBaseSx,
                ...listItem.style,
              }}
            >
              {listItem.label}
              {listItem.icon}
            </MenuItem>
          ),
        )}
      </Menu>
    </div>
  );
}
