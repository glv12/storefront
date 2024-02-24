import { Icon } from "@repo/ui";


export interface NavbarItem {
  title: string;
  path: string;
  children?: NavbarItem[];
  icon?: Icon
}