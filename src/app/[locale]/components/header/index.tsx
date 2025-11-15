"use client";
import { useTranslations } from "next-intl";
import LocalButton from "@/app/[locale]/components/localButton";
import LocalButtonMenu from "@/app/[locale]/components/localButtonMenu";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import Link from "next/link";
import { MenuItem } from "@/app/[locale]/components/types/MenuItem";

import { useEffect, useState } from "react";

export default function HeaderComponent() {
  const tr = useTranslations();
  const navigateTo = (link: string) => {
    console.log("link -> ", link);
  };
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const menus: MenuItem[] = [
    {
      name: "home",
      hasDetail: false,
      link: "/",
      type: "normal",
    },
    {
      name: "about",
      hasDetail: true,
      link: "#about",
      type: "accordion",
    },
    {
      name: "projects",
      hasDetail: true,
      link: "#projects",
      type: "accordion",
    },
    {
      name: "resume",
      hasDetail: true,
      link: "#resume",
      type: "accordion",
    },
  ];

  const menuItemContact = {
    name: "contact-me",
    hasDetail: false,
    link: "#contact-me",
    style: {
      backgroundColor: "var(--color-primary-1)",
      color: "var(--color-secondary-1)",
      minHeight: "45px",
    },
    icon: <ArrowForwardIcon />,
    type: "normal",
  };

  const getListItensMenuMobile = (menu: MenuItem[]) => {
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

  return (
    <header className="grid grid-cols-3 md:flex md:justify-between w-full items-center h-14 px-6">
      <div className="col-start-2 flex justify-center md:col-start-1 md:justify-start">
        <a>
          <h1>Logo</h1>
        </a>
      </div>

      <nav className="hidden md:flex justify-between w-1/3">
        {menus.map((menu) => (
          <div
            className={`flex items-center ${
              menu.hasDetail ? "min-w-22" : "min-w-16"
            }`}
            key={`menu-${menu.name}`}
          >
            <Link
              href={menu.link}
              className="text-md font-semibold text-[var(--color-foreground)] hover:text-[var(--color-primary-1)] active:text-[var(--color-primary-2)] transition-colors"
            >
              {tr(menu.name)}
            </Link>
            {menu.hasDetail && (
              <LocalButtonMenu
                id={`local-button-menu-${menu.name}-details`}
                idMenu={`local-button-menu-${menu.name}-menu-details`}
                listItems={[
                  {
                    label: tr(`got-to-details-${menu.name}`),
                    functionItem: () => navigateTo(menu.link),
                  },
                ]}
                isIconButton
                icon={<ArrowDropDownIcon />}
                sx={{
                  padding: 0,
                  color: "var(--color-foreground)]",
                  "&:hover": {
                    color: "var(--color-primary-1)",
                    backgroundColor: "transparent",
                  },
                  "&:active": { color: "var(--color-primary-2)" },
                }}
              />
            )}
          </div>
        ))}
      </nav>
      <div className="hidden md:flex">
        <LocalButton
          variant="contained"
          typeButton="primary"
          endIcon={<ArrowForwardIcon />}
          label={tr("contact-me")}
          sx={{
            borderRadius: "9999px",
            textTransform: "none",
            paddingX: 2,
            paddingY: 0.5,
          }}
        />
      </div>

      <div className="block md:hidden col-start-3 flex justify-end">
        <LocalButtonMenu
          id="local-button-menu-nav"
          idMenu="local-button-menu-nav-menu"
          listItems={getListItensMenuMobile(menus)}
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
    </header>
  );
}
