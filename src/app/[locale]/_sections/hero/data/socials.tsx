import type { SvgIconComponent } from "@mui/icons-material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

export type SocialId = "github" | "linkedin" | "email";

export const SOCIALS: { id: SocialId; Icon: SvgIconComponent; href: string }[] = [
  { id: "github", Icon: GitHubIcon, href: "#" },
  { id: "linkedin", Icon: LinkedInIcon, href: "#" },
  { id: "email", Icon: EmailIcon, href: "#" },
];
