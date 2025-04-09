import { stages } from "@/lib/business/stages";
import { map } from "lodash";
import Image from "next/image";
import StagesItem from "./StagesItem";

export default function Stages() {
  return (
    <div className="mb-10" data-aos="flip-down">
      <div className="bg-primary/75 p-8 text-center font-bold text-2xl text-primary-foreground xl:text-4xl">
        Етапи виконання
      </div>

      <div className="relative">
        <Image
          src="/about.jpg"
          width={1920}
          height={1280}
          className="-z-10 absolute inset-0 h-full w-full object-cover"
          alt="about"
        />

        <div className="space-y-10 bg-gradient-to-t from-10% from-background via-100% via-background/40 px-6 pt-20 pb-12 lg:px-14 xl:px-24">
          <div className="grid grid-cols-1 items-start gap-8 gap-y-8 lg:grid-cols-3 sm:grid-cols-2 xl:grid-cols-5">
            {map(stages, (stage, index) => (
              <StagesItem key={index} title={stage.title} icon={stage.icon} index={stage.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
