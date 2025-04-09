import { gets } from "@/lib/business/gets";
import { map } from "lodash";
import { MonitorCheck } from "lucide-react";
import GatsItem from "./GatsItem";

export default function Gats() {
  return (
    <div className="space-y-8 px-6 py-10 lg:px-14 xl:pl-24">
      <div className="text-center font-bold text-3xl text-primary xl:text-5xl" data-aos="flip-up">
        Що ви отримаєте?
      </div>

      <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2">
        {map(gets, (service, index) => (
          <GatsItem
            key={index}
            title={service.title}
            description={service.description}
            icon={<MonitorCheck size={40} className="text-primary" />}
            index={service.id}
          />
        ))}
      </div>
    </div>
  );
}
