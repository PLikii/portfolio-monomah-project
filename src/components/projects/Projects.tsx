"use client";

import { Carousel, CarouselContent, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { projects } from "@/lib/projects";
import Autoplay from "embla-carousel-autoplay";
import CarouselFade from "embla-carousel-fade";
import { map } from "lodash";
import ProjectItem from "./ProjectItem";

export default function Projects() {
  return (
    <div className="mb-6 space-y-8 bg-primary/75 pt-8 text-center overflow-y-hidden" data-aos="fade-up">
      <div className="space-y-4">
        <div className="font-mono text-muted">EXAMPLES OF REALIZED PROJECTS</div>
        <div className="font-bold text-2xl text-primary-foreground xl:text-4xl">Projects</div>
      </div>
      <Carousel
        opts={{
          loop: true,
          containScroll: false,
        }}
        plugins={[
          Autoplay({
            delay: 8000,
          }),
          CarouselFade({}),
        ]}
      >
        <CarouselContent>
          {map(projects, (project) => (
            <ProjectItem key={project.id} project={project} />
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-8" />
        <CarouselNext className="right-8" />
      </Carousel>
    </div>
  );
}
