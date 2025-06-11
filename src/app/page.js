import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import BlogsSection from "./components/BlogsSection";
import EmailSection from "./components/EmailSection";

export default function Home() {
  return (
    <div className="bg-[#0d0c0d] overflow-hidden px-5">
      <div className="md:container md:mx-auto overflow-hidden">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <BlogsSection />
        <EmailSection />
      </div>
    </div>
  );
}
