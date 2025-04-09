type MenuItem = {
  id: string;
  title: string;
  href: string;
  blank?: boolean;
};

export const menu: MenuItem[] = [
  {
    id: "for-business",
    title: "Для бізнесу",
    href: "/for-business",
  },
  {
    id: "for-home",
    title: "Для дому",
    href: "/for-home",
  },
  {
    id: "about-us",
    title: "Про нас",
    href: "/about-us",
  },
];
