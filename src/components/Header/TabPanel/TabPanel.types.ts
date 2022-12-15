export interface Tab {
  href: string;
  text: string;
  isActive: boolean;
}

export interface Props {
  tabs: Tab[];
}
