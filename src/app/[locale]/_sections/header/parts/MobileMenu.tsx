"use client";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import LocalButtonMenu from "@/app/[locale]/_components/localButtonMenu";
import { MenuItemType } from "@/app/[locale]/_components/types/MenuItem";
import { menus, menuItemContact } from "../data/menuItems";

export default function MobileMenu() {
  const tr = useTranslations();
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const navigateTo = (link: string) => {
    console.log("link -> ", link);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpenMenu(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getListItems = (menu: MenuItemType[]) => {
    const newMenu = [...menu, menuItemContact];

    return newMenu.map((menu) => ({
      label: tr(menu.name),
      type: menu.type as "normal" | "accordion",
      functionItem: () => navigateTo(menu.link),
      ...(menu.style ? { style: menu.style } : {}),
      ...(menu.icon ? { icon: menu.icon } : {}),
      ...(menu.hasDetail
        ? {
          subItems: [
            {
              label: tr(`got-to-section-${menu.name}`),
              functionItem: () => navigateTo(menu.link),
            },
            {
              label: tr(`got-to-details-${menu.name}`),
              functionItem: () => navigateTo(menu.link),
            },
          ],
        }
        : {}),
    }));
  };

  return (
    <div className="block md:hidden col-start-3 flex justify-end">
      <LocalButtonMenu
        id="local-button-menu-nav"
        idMenu="local-button-menu-nav-menu"
        listItems={getListItems(menus)}
        onOpen={() => setIsOpenMenu(true)}
        onClose={() => setIsOpenMenu(false)}
        isIconButton
        icon={isOpenMenu ? <MenuOpenIcon /> : <MenuIcon />}
        slotPropsListMenuStyle={{
          paddingBottom: 0,
        }}
        menuProps={{
          open: isOpenMenu,
        }}
      />
    </div>
  );
}
