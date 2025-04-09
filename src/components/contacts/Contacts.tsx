import { Mail, MapPin, Phone } from "lucide-react";
import ContactItem from "./ContactItem";

export default function Contacts() {
  return (
    <section
      id="contacts"
      className="overflow-y-hidden container space-y-8 px-3 text-center xl:flex xl:space-y-0"
      data-aos="fade-up"
    >
      <div className="xl:w-80">
        <div className="font-mono font-semibold text-black/70">CONTACT US</div>
        <div className="font-bold text-3xl text-blue xl:text-5xl">Contacts</div>
      </div>

      <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-3 sm:grid-cols-2">
        <ContactItem
          icon={<Phone size={32} className="text-primary" />}
          title="Mobile number"
          description="+380 (050) 123 45 67"
          href="tel:+380"
          index={0}
        />

        <ContactItem
          icon={<Mail size={32} className="text-primary" />}
          title="Email"
          description="placeholder@gmail.com"
          className="bg-secondary/10"
          href="mailto:placeholder@gmail.com"
          index={1}
        />

        <ContactItem
          icon={<MapPin size={32} className="text-primary" />}
          title="Address"
          description="Address Address.21.12"
          href="https://maps.app.goo.gl/XVWWoTETSM3rqPFv6"
          index={2}
        />
      </div>
    </section>
  );
}
