import type { ReactNode } from "react";

interface IProps {
  icon: ReactNode;
  title: string;
  index: number;
}

export default function StagesItem({ icon, title, index }: IProps) {
  return (
    <div
      className="group grid place-content-center space-y-2 text-center md:text-left"
      data-aos="fade-up-right"
      data-aos-delay={index * 150}
    >
      <div className="grid place-content-center">
        <div className="group-hover:-translate-y-3 size-20 rounded-full bg-white p-2 duration-500 xl:size-24 group-hover:scale-105 xl:p-3">
          {icon}
        </div>
      </div>

      <div className="text-center font-medium text-lg duration-300 group-hover:scale-110 lg:text-xl">{title}</div>
    </div>
  );
}
