import { PencilRuler } from "lucide-react";
import { CircleHelp } from "lucide-react";
import { PenLine } from "lucide-react";
import { Sun } from "lucide-react";
import { RefreshCcwDot } from "lucide-react";
import type { ReactNode } from "react";

type StagesItem = {
  id: number;
  title: string;
  icon: ReactNode;
};

export const stages: StagesItem[] = [
  {
    id: 1,
    title: "Створення ТЗ",
    icon: <CircleHelp className="size-full text-primary" />,
  },
  {
    id: 2,
    title: "Розробка проекту",
    icon: <PencilRuler className="size-full text-primary" />,
  },
  {
    id: 3,
    title: "Підписання угоди",
    icon: <PenLine className="size-full text-primary" />,
  },
  {
    id: 4,
    title: "Реалізація",
    icon: <Sun className="size-full text-primary" />,
  },
  {
    id: 5,
    title: "Сервіс",
    icon: <RefreshCcwDot className="size-full text-primary" />,
  },
];
