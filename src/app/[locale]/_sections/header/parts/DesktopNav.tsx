import Link from "next/link";
import { getTranslations } from "next-intl/server";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import LocalButton from "@/app/[locale]/_components/localButton";
import LocalButtonMenu from "@/app/[locale]/_components/localButtonMenu";
import { menus } from "../data/menuItems";

export default async function DesktopNav() {
  const tr = await getTranslations();

  return (
    <nav className="hidden md:flex justify-between">
      {menus.map((menu) => (
        <div
          className={`flex items-center justify-center ${menu.hasDetail ? "min-w-27" : "min-w-22"}`}
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
                  href: menu.link,
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
      <div className="hidden md:flex min-w-45">
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
  );
}
