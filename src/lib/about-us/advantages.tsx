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
    title: "Надійність",
    description: "Побудова міцних взаємовідносин, гарантія інвестицій та результату",
    icon: <MonitorCheck className="size-full text-primary" />,
  },
  {
    id: 2,
    title: "Екслюзивність",
    description: "Впроваджння креативних рішень",
    icon: <MonitorCheck className="size-full text-primary" />,
  },
  {
    id: 3,
    title: "Експертність",
    description: "Сертифіковані спеціалісти",
    icon: <MonitorCheck className="size-full text-primary" />,
  },
  {
    id: 4,
    title: "Відповідальність",
    description: "Дотримання термінів та відповідність спланованого результату",
    icon: <MonitorCheck className="size-full text-primary" />,
  },
];
