export type MenuItem = {
  name: string;
  hasDetail: boolean;
  link: string;
  style?: Record<string, unknown>;
  icon?: React.ReactNode;
  type?: "normal" | "accordion"
}