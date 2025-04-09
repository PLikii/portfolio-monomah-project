import { MonitorCheck } from "lucide-react";
import type { ReactNode } from "react";

type AdvantagesItem = {
  id: number;
  title: string;
  description: string;
  icon: ReactNode;
};

export const advantages: AdvantagesItem[] = [
  {
    id: 1,
    title: "Reliability",
    description: "Building strong relationships, investment and result guarantee",
    icon: <MonitorCheck className="size-full text-primary" />,
  },
  {
    id: 2,
    title: "Exclusivity",
    description: "Implementation of creative solutions",
    icon: <MonitorCheck className="size-full text-primary" />,
  },
  {
    id: 3,
    title: "Expertise",
    description: "Certified specialists",
    icon: <MonitorCheck className="size-full text-primary" />,
  },
  {
    id: 4,
    title: "Responsibility",
    description: "Adherence to deadlines and alignment with the planned result",
    icon: <MonitorCheck className="size-full text-primary" />,
  },
];
