import Contacts from "@/components/contacts/Contacts";
import AboutUs from "@/components/home/About";
import Partners from "@/components/home/Partners";
import VideoSection from "@/components/home/VideoSection";
import Hero from "@/components/home/hero/Hero";
import Services from "@/components/home/services/Services";
import Projects from "@/components/projects/Projects";

export default function Home() {
  return (
    <div className="space-y-6 overscroll-x-none">
      <div>
        <VideoSection />
        <Hero />
      </div>
      <AboutUs />
      <Services />
      <Projects />
      <Partners />
      <Contacts />
    </div>
  );
}
