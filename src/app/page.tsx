import ContactSection from "@/components/sections/contact";
import ExperienceSection from "@/components/sections/experiences";
import HeroSection from "@/components/sections/hero";
import SkillSection from "@/components/sections/skills";
import WorkSection from "@/components/sections/work";

export default function Home() {
  return (
    <>
      <HeroSection />
      <SkillSection />
      <ExperienceSection />
      <WorkSection />
      <ContactSection />
    </>
  );
}
