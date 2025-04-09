import { MonitorCheck } from "lucide-react";
import type { ReactNode } from "react";

type AdvantagesItem = {
  id: number;
  title: string;
  icon: ReactNode;
};

export const advantages: AdvantagesItem[] = [
  {
    id: 1,
    title: "Раціональне використання даху оселі та сонця",
    icon: <MonitorCheck className="size-full text-primary" />,
  },
  {
    id: 2,
    title: "Незалежність від відключення електромережі",
    icon: <MonitorCheck className="size-full text-primary" />,
  },
  {
    id: 3,
    title: "Можливість продавати надлишки",
    icon: <MonitorCheck className="size-full text-primary" />,
  },
  {
    id: 4,
    title: "Зміцнення енергетичної системи держави",
    icon: <MonitorCheck className="size-full text-primary" />,
  },
  {
    id: 5,
    title: "Збереження навколишнього середовища",
    icon: <MonitorCheck className="size-full text-primary" />,
  },
];
