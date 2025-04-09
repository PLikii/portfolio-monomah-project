import Contacts from "@/components/contacts/Contacts";
import Benefits from "@/components/for-business/Benefits";
import InfoFromBusiness from "@/components/for-business/InfoFromBusiness";
import Faq from "@/components/for-business/faq/Faq";
import Gats from "@/components/for-business/gets/Gats";
import Service from "@/components/for-business/service/Service";
import Stages from "@/components/for-business/stages/Stages";
import Projects from "@/components/projects/Projects";

export default function FromBusiness() {
  return (
    <div>
      <InfoFromBusiness />
      <Benefits />
      <Gats />
      <Stages />
      <Service />
      <Faq />
      <Projects />
      <Contacts />
    </div>
  );
}
