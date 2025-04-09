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
    title: "I. Клінінг",
    description: ["Підвищення генерації", "Забезпечення надійності та стабільності"],
    icon: <CircleHelp className="size-full text-primary/30" />,
  },
  {
    id: 2,
    title: "II. Моніторинг",
    description: ["Стан та роботу станції контролює фахівець"],
    icon: <Eye className="size-full text-primary/30" />,
  },
  {
    id: 3,
    title: "III. Аналітика",
    description: ["Аналіз показників генерації та споживання=", "Прогноз генерації на наступний період"],
    icon: <Eye className="size-full text-primary/30" />,
  },
  {
    id: 4,
    title: "IV. Профілактика",
    description: [
      "Огляд основного обладнання",
      "Перевірка ФЕС та силової частини розподільчих щитів",
      "Огляд основного обладнання",
      "Перевірка ФЕС та силової частини розподільчих щитів",
    ],
    icon: <CircleHelp className="size-full text-primary/30" />,
  },
];
