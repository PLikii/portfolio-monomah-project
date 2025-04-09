import { advantages } from "@/lib/about-us/advantages";
import { map } from "lodash";
import AdvantagesItem from "./AdvantagesItem";

export default function Advantages() {
  return (
    <div className="space-y-8 px-6 py-10 lg:px-14 xl:pl-24 overflow-y-hidden">
      <div className="text-center font-bold text-3xl text-primary xl:text-5xl" data-aos="flip-up">
        What will you get?{" "}
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {map(advantages, (service, index) => (
          <AdvantagesItem
            key={index}
            title={service.title}
            description={service.description}
            icon={service.icon}
            index={service.id}
          />
        ))}
      </div>
    </div>
  );
}
