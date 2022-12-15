export interface SidebarLink {
  href: string;
  text: string;
  isActive: boolean;
}

export interface Props {
  links: SidebarLink[];
  projectName: string;
  projectAbbr: string;
}
