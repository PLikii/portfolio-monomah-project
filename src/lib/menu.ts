type MenuItem = {
  id: string;
  title: string;
  href: string;
  blank?: boolean;
};

export const menu: MenuItem[] = [
  {
    id: "for-business",
    title: "For business",
    href: "/for-business",
  },
  {
    id: "for-home",
    title: "For home",
    href: "/for-home",
  },
  {
    id: "about-us",
    title: "About us",
    href: "/about-us",
  },
];
