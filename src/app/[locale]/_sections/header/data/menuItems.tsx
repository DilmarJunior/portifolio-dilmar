import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { MenuItemType } from "@/app/[locale]/_components/types/MenuItem";

export const menus: MenuItemType[] = [
  { name: "home", hasDetail: false, link: "/", type: "normal" },
  { name: "about", hasDetail: true, link: "#about", type: "accordion" },
  { name: "projects", hasDetail: true, link: "#projects", type: "accordion" },
  { name: "resume", hasDetail: true, link: "#resume", type: "accordion" },
];

export const menuItemContact: MenuItemType = {
  name: "contact-me",
  hasDetail: false,
  link: "#contact-me",
  style: {
    background: `
      linear-gradient(
        90deg,
        var(--color-primary-1),
        var(--color-primary-2),
        var(--color-primary-3)
      )`,
    color: "var(--color-secondary-1)",
    minHeight: "45px",
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2,
    fontWeight: "bold",
  },
  icon: <ArrowForwardIcon />,
  type: "normal",
};
