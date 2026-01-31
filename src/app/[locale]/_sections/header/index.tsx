"use client";
import { useTranslations } from "next-intl";
import LocalButton from "@/app/[locale]/_components/localButton";
import LocalButtonMenu from "@/app/[locale]/_components/localButtonMenu";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import Link from "next/link";
import { MenuItem } from "@/app/[locale]/_components/types/MenuItem";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function HeaderSection() {
  const tr = useTranslations();
  const navigateTo = (link: string) => {
    console.log("link -> ", link);
  };
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
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

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    handleResize();
    handleScroll();

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      id="header-site"
      className={`
        fixed top-0 left-0 z-50
        grid grid-cols-3 md:flex md:justify-between
        w-full items-center h-14 px-10
        bg-[rgb(var(--color-background)/0.8)]
        border-b
        transition-colors duration-300
        ${isScrolled ? "border-[var(--color-foreground-1)]" : "border-transparent"}
      `}
    >
      <div className="col-start-2 flex md:col-start-1 md:justify-start flex-shrink-0">
        <Link href={"#home"}>
          <div className="flex justify-center">
            <div className="mr-2">
              <Image
                src="/images/logo/logo.png"
                alt="Logo do site"
                width={30}
                height={30}
              />
            </div>
            <div>
              <span className="text-lg font-bold text-[var(--color-primary-1)]">
                {"<"}
              </span>
              <span className="text-lg font-bold text-[var(--color-white-1)]">
                Dilmar
              </span>
              <span className="text-lg font-bold text-[var(--color-primary-1)]">
                {"/>"}
              </span>
            </div>
          </div>
        </Link>
      </div>

      <nav className="hidden md:flex justify-between">
        {menus.map((menu) => (
          <div
            className={"flex items-center justify-center min-w-25"}
            key={`menu-${menu.name}`}
          >
            <Link
              href={menu.link}
              className="font-semibold text-[var(--color-primary-font)] hover:text-[var(--color-primary-1)] active:text-[var(--color-primary-2)] transition-colors"
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
                  color: "var(--color-white-1)",
                  "&:hover": {
                    color: "var(--color-primary-1)",
                    backgroundColor: "transparent",
                  },
                  "&:active": { color: "var(--color-primary-1)" },
                }}
              />
            )}
          </div>
        ))}
        <div className="hidden md:flex min-w-45 bg-red">
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
              fontWeight: "bold",
              background: `
                linear-gradient(
                  90deg,
                  var(--color-primary-1),
                  var(--color-primary-2),
                  var(--color-primary-3)
                )
              `,
            }}
          />
        </div>
      </nav>

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
