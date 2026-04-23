import Logo from "./parts/Logo";
import DesktopNav from "./parts/DesktopNav";
import MobileMenu from "./parts/MobileMenu";
import HeaderShell from "./parts/HeaderShell";

export default function HeaderSection() {
  return (
    <HeaderShell>
      <Logo />
      <DesktopNav />
      <MobileMenu />
    </HeaderShell>
  );
}
