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
    title: "Знайомство",
    description: "Консультація: технічна, технологічна, юридична, фінансова",
    icon: <CircleHelp className="size-full text-primary" />,
  },
  {
    id: 2,
    title: "Розробка проекту",
    description: "Консультація: технічна, технологічна, юридична, фінансова",
    icon: <PencilRuler className="size-full text-primary" />,
  },
  {
    id: 3,
    title: "Підписання угоди",
    description: "Консультація: технічна, технологічна, юридична, фінансова",
    icon: <PenLine className="size-full text-primary" />,
  },
  {
    id: 4,
    title: "Реалізація",
    description: "Консультація: технічна, технологічна, юридична, фінансова",
    icon: <Sun className="size-full text-primary" />,
  },
  {
    id: 5,
    title: "Сервіс",
    description: "Консультація: технічна, технологічна, юридична, фінансова",
    icon: <RefreshCcwDot className="size-full text-primary" />,
  },
  {
    id: 6,
    title: "Обслуговуванн",
    description: "Сервісні роботи, спрямовані на підтримку функціонування системи",
    icon: <RefreshCcwDot className="size-full text-primary" />,
  },
];
