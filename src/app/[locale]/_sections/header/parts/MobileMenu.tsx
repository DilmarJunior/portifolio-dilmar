"use client";
import { useEffect, useMemo, useState } from "react";
import { useTranslations } from "next-intl";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import LocalButtonMenu from "@/app/[locale]/_components/localButtonMenu";
import { menus, menuItemContact } from "../data/menuItems";

export default function MobileMenu() {
  const tr = useTranslations();
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia("(min-width: 768px)");
    const handleChange = (event: MediaQueryListEvent) => {
      if (event.matches) setIsOpenMenu(false);
    };

    if (mql.matches) setIsOpenMenu(false);
    mql.addEventListener("change", handleChange);

    return () => mql.removeEventListener("change", handleChange);
  }, []);

  const listItems = useMemo(
    () =>
      [...menus, menuItemContact].map((menu) => ({
        label: tr(menu.name),
        type: menu.type,
        href: menu.link,
        ...(menu.style ? { style: menu.style } : {}),
        ...(menu.icon ? { icon: menu.icon } : {}),
        ...(menu.hasDetail
          ? {
              subItems: [
                { label: tr(`got-to-section-${menu.name}`), href: menu.link },
                { label: tr(`got-to-details-${menu.name}`), href: menu.link },
              ],
            }
          : {}),
      })),
    [tr],
  );

  return (
    <div className="md:hidden col-start-3 flex justify-end">
      <LocalButtonMenu
        id="local-button-menu-nav"
        idMenu="local-button-menu-nav-menu"
        listItems={listItems}
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
