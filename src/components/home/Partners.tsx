"use client";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { partners } from "@/lib/partners";
import AutoScroll from "embla-carousel-auto-scroll";
import { map } from "lodash";
import Image from "next/image";

export default function Partners() {
  return (
    <div className="space-y-3" data-aos="fade-up">
      <h2 className="text-center font-bold text-3xl xl:text-5xl">Our partners</h2>
      <Carousel opts={{ loop: true }} plugins={[AutoScroll({ speed: 2 })]} className="pointer-events-none">
        <CarouselContent className="mr-3 gap-3">
          {map(partners, (partner) => (
            <CarouselItem key={partner.title} className="relative h-[100px] w-[200px] basis-auto">
              <Image src={partner.img} fill alt={partner.title} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
