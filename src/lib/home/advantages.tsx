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
    title: "Rational use of the house roof and sunlight",
    icon: <MonitorCheck className="size-full text-primary" />,
  },
  {
    id: 2,
    title: "Independence from power grid outages",
    icon: <MonitorCheck className="size-full text-primary" />,
  },
  {
    id: 3,
    title: "Ability to sell surplus energy",
    icon: <MonitorCheck className="size-full text-primary" />,
  },
  {
    id: 4,
    title: "Strengthening the country's energy system",
    icon: <MonitorCheck className="size-full text-primary" />,
  },
  {
    id: 5,
    title: "Environmental preservation",
    icon: <MonitorCheck className="size-full text-primary" />,
  },
];
