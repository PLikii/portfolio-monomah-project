import { CircleHelp, Eye } from "lucide-react";
import type { ReactNode } from "react";

type ServicesItem = {
  id: number;
  title: string;
  description: Array<string>;
  icon: ReactNode;
};
export const services: ServicesItem[] = [
  {
    id: 1,
    title: "I. Cleaning",
    description: ["Increasing generation", "Ensuring reliability and stability"],
    icon: <CircleHelp className="size-full text-primary/30" />,
  },
  {
    id: 2,
    title: "II. Monitoring",
    description: ["The condition and operation of the station are monitored by a specialist"],
    icon: <Eye className="size-full text-primary/30" />,
  },
  {
    id: 3,
    title: "III. Analytics",
    description: ["Generation and consumption indicators analysis", "Generation forecast for the next period"],
    icon: <Eye className="size-full text-primary/30" />,
  },
  {
    id: 4,
    title: "IV. Prevention",
    description: [
      "Inspection of the main equipment",
      "Checking the photovoltaic system (PV) and the power section of distribution panels",
      "Inspection of the main equipment",
      "Checking the photovoltaic system (PV) and the power section of distribution panels",
    ],
    icon: <CircleHelp className="size-full text-primary/30" />,
  },
];
