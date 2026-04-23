export type LocalMenuItem = {
  label: string;
  type?: "normal" | "accordion";
  style?: Record<string, unknown>;
  icon?: React.ReactNode;
  subItems?: LocalMenuItem[];
  href?: string;
  functionItem?: () => void;
};
