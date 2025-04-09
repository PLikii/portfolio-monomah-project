import { CarouselItem } from "@/components/ui/carousel";
import type { Project } from "@/lib/projects";
import Image from "next/image";
import Link from "next/link";

export default function ProjectItem({ project }: { project: Project }) {
  return (
    <CarouselItem className="group relative flex h-[450px] cursor-pointer flex-col items-center justify-center px-6 text-primary-foreground md:h-[600px]">
      <Link href={`Projects/${project.id}`} className="space-y-6">
        <Image src={project.img} fill alt={project.title} className="-z-10 h-full w-full object-cover brightness-50" />
        <h3 className="font-semibold text-2xl duration-500 group-hover:scale-105">{project.title}</h3>
        <p className="duration-500 group-hover:scale-105">{project.location}</p>
        <div className="duration-500 group-hover:scale-105">
          <p>
            <span className="text-muted">Тип модуля: </span>
            {project.moduleType}
          </p>
          <p>
            <span className="text-muted">Тип станції: </span>
            {project.stationType}
          </p>
        </div>
      </Link>
    </CarouselItem>
  );
}
