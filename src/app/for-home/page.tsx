import Contacts from "@/components/contacts/Contacts";
import InfoFromHome from "@/components/for-home/InfoFromHome";
import PrincipleOperation from "@/components/for-home/PrincipleOperation";
import Service from "@/components/for-home/Service";
import Advantages from "@/components/for-home/advantages/Advantages";
import Faq from "@/components/for-home/faq/Faq";
import Stages from "@/components/for-home/stages/Stages";
import Projects from "@/components/projects/Projects";

export default function page() {
  return (
    <div>
      <InfoFromHome />
      <PrincipleOperation />
      <Advantages />
      <Stages />
      <Service />
      <Faq />
      <Projects />
      <Contacts />
    </div>
  );
}
