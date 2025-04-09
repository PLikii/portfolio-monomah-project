import { cn } from "@/lib/utils";
import Link from "next/link";
import type { ReactNode } from "react";

interface IProps {
  href: string;
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
  index: number;
}

export default function ContactItem({ className, href, icon, title, description, index }: IProps) {
  return (
    <Link
      data-aos="flip-right"
      data-aos-delay={100 + 50 * index}
      href={href}
      className={cn(
        "hover:-translate-y-2 flex flex-col items-center gap-4 rounded-2xl bg-primary/10 p-6 duration-500 hover:drop-shadow-2xl",
        className,
      )}
    >
      {icon}
      <div className="space-y-1">
        <h3 className="font-semibold text-xl">{title}</h3>
        <div className="font-medium text-muted-foreground">{description}</div>
      </div>
    </Link>
  );
}
