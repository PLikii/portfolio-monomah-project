import { advantages } from "@/lib/home/advantages";
import { map } from "lodash";
import AdvantagesItem from "./AdvantagesItem";

export default function Advantages() {
  return (
    <div className="space-y-8 px-6 py-10 lg:px-14 xl:pl-24">
      <div className="text-center font-bold text-3xl text-primary xl:text-5xl" data-aos="flip-up">
        Main advantages
      </div>

      <div className="grid gap-8 gap-y-10 lg:grid-cols-2 md:grid-cols-2">
        {map(advantages, (service, index) => (
          <AdvantagesItem key={index} title={service.title} icon={service.icon} index={service.id} />
        ))}
      </div>
    </div>
  );
}
