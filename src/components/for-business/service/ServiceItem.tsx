import { map } from "lodash";
import type { ReactNode } from "react";

interface IProps {
  icon: ReactNode;
  title: string;
  description: Array<string>;
}

export default function ServiceItem({ icon, title, description }: IProps) {
  return (
    <div className="relative h-full rounded-3xl border-4 border-primary/30 px-4 py-2 duration-500 hover:border-primary/70">
      <div className="absolute inset-y-0 right-0 grid h-full place-content-center p-6">
        <div className="-z-30 size-28 group-hover:text-primary/70"> {icon}</div>
      </div>
      <div className="font-bold text-lg">{title}</div>

      <ul className="list-disc space-y-2 p-4">
        {map(description, (service, index) => (
          <li key={index}>{service}</li>
        ))}
      </ul>
    </div>
  );
}
