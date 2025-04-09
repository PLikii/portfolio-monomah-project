import type { ReactNode } from "react";

interface IProps {
  icon: ReactNode;
  title: string;
  description: string;
  index: number;
}

export default function ServicesItem({ icon, title, description, index }: IProps) {
  return (
    <div
      className="flex flex-col items-center gap-4 rounded-2xl bg-white p-6 duration-500 hover:drop-shadow-2xl"
      data-aos="fade-up"
      data-aos-delay={index * 50}
    >
      {icon}
      <div className="select-none space-y-2 text-balance text-center">
        <h2 className="font-semibold text-xl">{title}</h2>
        <div className="font-medium text-muted-foreground">{description}</div>
      </div>
    </div>
  );
}
