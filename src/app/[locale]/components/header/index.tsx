"use client";

import { useTranslations } from "next-intl";
import LocalButton from "@/app/[locale]/components/localButton";
import LocalButtonMenu from "@/app/[locale]/components/localButtonMenu";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Link from "next/link";

export default function HeaderComponent() {
  const tr = useTranslations();
  const navigateToDetail = (link: string) => {
    console.log("link -> ", link);
  };
  const menus = [
    {
      name: "home",
      hasDetail: false,
      link: "/",
    },
    {
      name: "about",
      hasDetail: true,
      link: "#about",
    },
    {
      name: "projects",
      hasDetail: true,
      link: "#projects",
    },
    {
      name: "resume",
      hasDetail: true,
      link: "#resume",
    },
  ];

  return (
    <header className="flex w-full justify-between items-center h-14 px-6">
      <div>
        <a>
          <h1>Logo</h1>
        </a>
      </div>

      <nav className="flex justify-between w-1/3">
        {menus.map((menu) => (
          <div className="flex items-center" key={`menu-${menu.name}`}>
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
                    functionItem: () => navigateToDetail(menu.link),
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
      <div>
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
    </header>
  );
}
