import { PencilRuler } from "lucide-react";
import { CircleHelp } from "lucide-react";
import { PenLine } from "lucide-react";
import { Sun } from "lucide-react";
import { RefreshCcwDot } from "lucide-react";
import type { ReactNode } from "react";

type StagesItem = {
  id: number;
  title: string;
  description: string;
  icon: ReactNode;
};

export const stages: StagesItem[] = [
  {
    id: 1,
    title: "Introduction",
    description: "Consultation: technical, technological, legal, financial",
    icon: <CircleHelp className="size-full text-primary" />,
  },
  {
    id: 2,
    title: "Project Development",
    description: "Consultation: technical, technological, legal, financial",
    icon: <PencilRuler className="size-full text-primary" />,
  },
  {
    id: 3,
    title: "Agreement Signing",
    description: "Consultation: technical, technological, legal, financial",
    icon: <PenLine className="size-full text-primary" />,
  },
  {
    id: 4,
    title: "Implementation",
    description: "Consultation: technical, technological, legal, financial",
    icon: <Sun className="size-full text-primary" />,
  },
  {
    id: 5,
    title: "Service",
    description: "Consultation: technical, technological, legal, financial",
    icon: <RefreshCcwDot className="size-full text-primary" />,
  },
  {
    id: 6,
    title: "Maintenance",
    description: "Service works aimed at supporting system functionality",
    icon: <RefreshCcwDot className="size-full text-primary" />,
  },
];
