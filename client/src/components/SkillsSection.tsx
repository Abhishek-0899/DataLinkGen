import { Badge } from "@/components/ui/badge";
import {
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiPostgresql,
  SiMongodb,
  SiFirebase,
  SiGit,
  SiDocker,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiRedis,
  SiGraphql,
  SiKubernetes,
  SiJest,
} from "react-icons/si";
import { useEffect, useRef } from "react";

const skills = [
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "Express", icon: SiExpress, color: "#000000" },
  { name: "GraphQL", icon: SiGraphql, color: "#E10098" },
  { name: "Redis", icon: SiRedis, color: "#DC382D" },
  { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS3", icon: SiCss3, color: "#1572B6" },
  { name: "Kubernetes", icon: SiKubernetes, color: "#326CE5" },
  { name: "Jest", icon: SiJest, color: "#C21325" },
];

const SkillCard = ({ skill, index }: { skill: typeof skills[0]; index: number }) => {
  const IconComponent = skill.icon;
  
  return (
    <div
      className="group flex-shrink-0 w-32 h-32 mx-4"
      style={{
        animation: `float 6s ease-in-out infinite`,
        animationDelay: `${index * 0.2}s`,
      }}
      data-testid={`skill-card-${index}`}
    >
      <div className="relative h-full w-full">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-50 group-hover:opacity-100" />
        <div className="relative h-full w-full bg-card border border-card-border rounded-xl p-6 flex flex-col items-center justify-center gap-3 hover-elevate transition-all duration-300 backdrop-blur-sm">
          <div
            className="transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
            style={{
              filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.15))',
            }}
          >
            <IconComponent
              className="w-12 h-12"
              style={{ color: skill.color }}
              data-testid={`icon-skill-${index}`}
            />
          </div>
          <span
            className="text-xs font-medium text-center"
            data-testid={`text-skill-name-${index}`}
          >
            {skill.name}
          </span>
        </div>
      </div>
    </div>
  );
};

export default function SkillsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPosition = 0;
    const scrollSpeed = 0.5;

    const scroll = () => {
      scrollPosition += scrollSpeed;
      
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0;
      }
      
      scrollContainer.scrollLeft = scrollPosition;
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  const doubledSkills = [...skills, ...skills];

  return (
    <section id="skills" className="py-20 px-6 bg-muted/30 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <Badge className="mb-2" data-testid="badge-section-skills">
            Expertise
          </Badge>
          <h2
            className="font-display text-4xl md:text-5xl font-bold"
            data-testid="text-skills-title"
          >
            Technical Skills
          </h2>
          <p
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
            data-testid="text-skills-description"
          >
            A comprehensive toolkit built through years of hands-on experience
            and continuous learning.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-muted/30 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-muted/30 to-transparent z-10 pointer-events-none" />
          
          <div
            ref={scrollRef}
            className="flex overflow-x-hidden py-8"
            style={{
              scrollBehavior: 'auto',
              WebkitOverflowScrolling: 'touch',
            }}
            data-testid="skills-slider"
          >
            {doubledSkills.map((skill, index) => (
              <SkillCard key={`${skill.name}-${index}`} skill={skill} index={index} />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotateX(0deg);
          }
          50% {
            transform: translateY(-10px) rotateX(5deg);
          }
        }
      `}</style>
    </section>
  );
}
