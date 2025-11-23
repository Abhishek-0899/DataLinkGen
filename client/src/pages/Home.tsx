import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import FloatingDock from "@/components/FloatingDock";
import ShootingStars from "@/components/ShootingStars";
import StarsBackground from "@/components/StarsBackground";
import { useTheme } from "@/components/ThemeProvider";

export default function Home() {
  const { theme } = useTheme();

  return (
    <div className="min-h-screen relative">
      {theme === "dark" && (
        <>
          <StarsBackground />
          <ShootingStars />
        </>
      )}
      <Navigation />
      <FloatingDock />
      <main>
        <HeroSection />
        <ProjectsSection />
        <SkillsSection />
        <AboutSection />
        <ContactSection />
      </main>
    </div>
  );
}
