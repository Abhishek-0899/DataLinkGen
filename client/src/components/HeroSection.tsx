import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect } from "react";
import heroImage from "@assets/generated_images/hero_gradient_mesh_background.png";

export default function HeroSection() {
  const roles = [
    "Full Stack Developer",
    "React Specialist",
    "Node.js Engineer",
    "UI/UX Enthusiast",
  ];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayedText !== currentRole) {
      timeout = setTimeout(() => {
        setDisplayedText(currentRole.slice(0, displayedText.length + 1));
      }, 100);
    } else if (!isDeleting && displayedText === currentRole) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 2000);
    } else if (isDeleting && displayedText !== "") {
      timeout = setTimeout(() => {
        setDisplayedText(currentRole.slice(0, displayedText.length - 1));
      }, 50);
    } else if (isDeleting && displayedText === "") {
      setIsDeleting(false);
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentRoleIndex, roles]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen relative flex items-center pt-16"
    >
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-5 gap-8 items-center">
          <div className="lg:col-span-3 space-y-8">
            <div className="space-y-4">
              <Badge
                className="backdrop-blur-md bg-white/10 text-white border-white/20"
                data-testid="badge-status"
              >
                Available for opportunities
              </Badge>
              <h1
                className="font-display text-5xl md:text-7xl font-bold text-white leading-tight"
                data-testid="text-name"
              >
                Abhishek Kumar
              </h1>
              <div className="h-12 flex items-center">
                <p
                  className="text-2xl md:text-3xl text-blue-200 font-medium font-mono"
                  data-testid="text-role"
                >
                  {displayedText}
                  <span className="animate-pulse">|</span>
                </p>
              </div>
              <p
                className="text-lg text-gray-200 max-w-2xl"
                data-testid="text-description"
              >
                Crafting beautiful, scalable web applications with modern
                technologies. Passionate about creating seamless user
                experiences and writing clean, maintainable code.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="backdrop-blur-md bg-white/90 text-gray-900 hover:bg-white border border-white/20"
                onClick={() => scrollToSection("projects")}
                data-testid="button-view-work"
              >
                View My Work
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="backdrop-blur-md bg-white/10 text-white border-white/30 hover:bg-white/20"
                onClick={() => scrollToSection("contact")}
                data-testid="button-contact"
              >
                Get In Touch
              </Button>
            </div>

            <div className="flex gap-3">
              <Button
                size="icon"
                variant="ghost"
                className="backdrop-blur-md bg-white/10 text-white border border-white/20 hover:bg-white/20"
                data-testid="button-github"
              >
                <Github className="h-5 w-5" />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className="backdrop-blur-md bg-white/10 text-white border border-white/20 hover:bg-white/20"
                data-testid="button-linkedin"
              >
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className="backdrop-blur-md bg-white/10 text-white border border-white/20 hover:bg-white/20"
                data-testid="button-email"
              >
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div className="lg:col-span-2">
            <Card className="p-8 backdrop-blur-md bg-white/10 border-white/20 space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <p
                    className="text-4xl font-bold text-white"
                    data-testid="text-stat-projects"
                  >
                    15+
                  </p>
                  <p className="text-sm text-gray-300 mt-1">
                    Projects Completed
                  </p>
                </div>
                <div className="text-center">
                  <p
                    className="text-4xl font-bold text-white"
                    data-testid="text-stat-experience"
                  >
                    3+
                  </p>
                  <p className="text-sm text-gray-300 mt-1">
                    Years Experience
                  </p>
                </div>
                <div className="text-center">
                  <p
                    className="text-4xl font-bold text-white"
                    data-testid="text-stat-clients"
                  >
                    10+
                  </p>
                  <p className="text-sm text-gray-300 mt-1">Happy Clients</p>
                </div>
                <div className="text-center">
                  <p
                    className="text-4xl font-bold text-white"
                    data-testid="text-stat-tech"
                  >
                    20+
                  </p>
                  <p className="text-sm text-gray-300 mt-1">Technologies</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
