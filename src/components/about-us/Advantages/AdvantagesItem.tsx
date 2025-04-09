import type { ReactNode } from "react";

interface IProps {
  icon: ReactNode;
  title: string;
  description: string;
  index: number;
}

export default function GatsItem({ icon, title, description, index }: IProps) {
  return (
    <div data-aos="fade-up-left" data-aos-delay={index * 100}>
      <div className="grid w-full text-center duration-500 md:flex hover:scale-110 md:space-x-6 hover:drop-shadow-2x">
        <div className="grid place-content-center">
          <div className="size-12 w-full">{icon}</div>
        </div>
        <div className="grid space-y-2 text-center lg:text-left">
          <div className="font-semibold text-xl">{title}</div>
          <div className="font-medium text-muted-foreground">{description}</div>
        </div>
      </div>
    </div>
  );
}
