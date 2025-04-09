import { Mail, MapPin, Phone } from "lucide-react";
import ContactItem from "./ContactItem";

export default function Contacts() {
  return (
    <section id="contacts" className="container space-y-8 px-3 text-center xl:flex xl:space-y-0" data-aos="fade-up">
      <div className="xl:w-80">
        <div className="font-mono text-black/70">ЗВ'ЯЖІТЬСЯ З НАМИ</div>
        <div className="font-bold text-3xl text-blue xl:text-5xl">Контакти</div>
      </div>

      <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-3 sm:grid-cols-2">
        <ContactItem
          icon={<Phone size={32} className="text-primary" />}
          title="Телефон"
          description="+380 (98) 381 05 60"
          href="tel:+380983810560"
          index={0}
        />

        <ContactItem
          icon={<Mail size={32} className="text-primary" />}
          title="Email"
          description="qsukraine@gmail.com"
          className="bg-secondary/10"
          href="mailto:qsukraine@gmail.com"
          index={1}
        />

        <ContactItem
          icon={<MapPin size={32} className="text-primary" />}
          title="Адрес"
          description="Київ, вул. Стеценка 27А"
          href="https://maps.app.goo.gl/XVWWoTETSM3rqPFv6"
          index={2}
        />
      </div>
    </section>
  );
}
