import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  Code2,
  Database,
  Wrench,
  Palette,
  Server,
  Cloud,
} from "lucide-react";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Code2,
    skills: [
      { name: "React", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 92 },
      { name: "Next.js", level: 88 },
    ],
  },
  {
    title: "Backend Development",
    icon: Server,
    skills: [
      { name: "Node.js", level: 90 },
      { name: "Express", level: 88 },
      { name: "Python", level: 85 },
      { name: "REST APIs", level: 93 },
    ],
  },
  {
    title: "Database & Cloud",
    icon: Database,
    skills: [
      { name: "PostgreSQL", level: 87 },
      { name: "MongoDB", level: 82 },
      { name: "AWS", level: 80 },
      { name: "Firebase", level: 85 },
    ],
  },
  {
    title: "Tools & Others",
    icon: Wrench,
    skills: [
      { name: "Git", level: 92 },
      { name: "Docker", level: 78 },
      { name: "CI/CD", level: 80 },
      { name: "Agile", level: 88 },
    ],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-6 bg-muted/30">
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            return (
              <Card
                key={category.title}
                className="p-6 hover-elevate transition-all duration-300"
                data-testid={`card-skill-category-${categoryIndex}`}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-md bg-primary/10">
                    <IconComponent
                      className="h-6 w-6 text-primary"
                      data-testid={`icon-category-${categoryIndex}`}
                    />
                  </div>
                  <h3
                    className="font-display font-semibold text-lg"
                    data-testid={`text-category-title-${categoryIndex}`}
                  >
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skill.name}
                      className="space-y-2"
                      data-testid={`skill-${categoryIndex}-${skillIndex}`}
                    >
                      <div className="flex justify-between items-center">
                        <span
                          className="text-sm font-medium"
                          data-testid={`text-skill-name-${categoryIndex}-${skillIndex}`}
                        >
                          {skill.name}
                        </span>
                        <span
                          className="text-xs text-muted-foreground"
                          data-testid={`text-skill-level-${categoryIndex}-${skillIndex}`}
                        >
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div
                          className="h-full bg-primary rounded-full transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                          data-testid={`progress-skill-${categoryIndex}-${skillIndex}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
