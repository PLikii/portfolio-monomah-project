import Advantages from "@/components/about-us/Advantages/Advantages";
import InfoAboutUs from "@/components/about-us/InfoAboutUs";
import Contacts from "@/components/contacts/Contacts";
import Projects from "@/components/projects/Projects";

export default function page() {
  return (
    <div className="overflow-x-hidden">
      <InfoAboutUs />
      <Projects />
      <Advantages />
      <Contacts />
    </div>
  );
}
