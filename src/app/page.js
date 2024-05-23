import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import SkillsSection from "./components/SkillsSection";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#0d0c0d] py-4">
      <Navbar />
      <HeroSection />
      <AboutSection />
      {/* <SkillsSection /> */}
      <ProjectsSection />
      <EmailSection />
      <Footer />
    </main>
  );
}
