import { services } from "@/lib/services";
import { map } from "lodash";
import { Key } from "lucide-react";
import ServicesItem from "./ServicesItem";

export default function Services() {
  return (
    <div className="container mt-3 grid grid-cols-1 gap-2 lg:grid-cols-4 sm:grid-cols-2">
      {map(services, (service, index) => (
        <ServicesItem
          key={service.id}
          title={service.title}
          description={service.description}
          icon={<Key size={32} className="text-primary" />}
          index={index}
        />
      ))}
    </div>
  );
}
