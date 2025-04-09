import { services } from "@/lib/business/services";
import { map } from "lodash";
import ServiceItem from "./ServiceItem";

export default function Service() {
  return (
    <div className="space-y-8 px-6 pb-8 lg:px-14 xl:px-24">
      <div className="text-center font-bold text-3xl text-blue text-primary xl:text-5xl" data-aos="fade-up-right">
        Сервіс
      </div>

      <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-3">
        {map(services, (service, index) => (
          <div
            key={index}
            className={service.id === 1 || service.id === 4 ? "md:col-span-2" : ""}
            data-aos="fade-left"
            data-aos-delay={index * 100}
          >
            <ServiceItem key={index} icon={service.icon} title={service.title} description={service.description} />
          </div>
        ))}
      </div>
    </div>
  );
}
