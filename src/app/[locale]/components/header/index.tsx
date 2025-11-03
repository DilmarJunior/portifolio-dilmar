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
  const menus = ["home", "about", "projects", "resume"];

  return (
    <header className="flex w-full justify-between items-center h-14 px-6">
      <div>
        <a>
          <h1>Logo</h1>
        </a>
      </div>

      <nav className="flex justify-between w-1/3">
        {menus.map((menu) => (
          <div className="flex items-center" key={`menu-${menu}`}>
            <Link
              href={menu === "home" ? "/" : `#${menu}`}
              className="text-lg font-semibold text-gray-800 hover:text-blue-600 active:text-blue-800 transition-colors"
            >
              {tr(menu)}
            </Link>
            {menu !== "home" && (
              <LocalButtonMenu
                id={`local-button-menu-${menu}-details`}
                idMenu={`local-button-menu-${menu}-menu-details`}
                listItems={[
                  {
                    label: tr(`got-to-details-${menu}`),
                    functionItem: () => navigateToDetail(menu),
                  },
                ]}
                isIconButton
                icon={<ArrowDropDownIcon />}
              />
            )}
          </div>
        ))}
      </nav>
      <div>
        <LocalButton
          variant="contained"
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
