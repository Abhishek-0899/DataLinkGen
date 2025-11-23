import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Briefcase, GraduationCap, Award } from "lucide-react";
import profileImage from "@assets/generated_images/professional_developer_headshot.png";

const timeline = [
  {
    year: "2024 - Present",
    title: "Senior Full Stack Developer",
    company: "Tech Innovators Inc.",
    description:
      "Leading development of scalable web applications, mentoring junior developers, and driving technical excellence.",
    icon: Briefcase,
  },
  {
    year: "2022 - 2024",
    title: "Full Stack Developer",
    company: "Digital Solutions Ltd.",
    description:
      "Built and maintained multiple client projects using React, Node.js, and cloud technologies.",
    icon: Briefcase,
  },
  {
    year: "2018 - 2022",
    title: "Bachelor in Computer Science",
    company: "University of Technology",
    description:
      "Focused on software engineering, algorithms, and modern web development practices.",
    icon: GraduationCap,
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <Badge className="mb-2" data-testid="badge-section-about">
            Background
          </Badge>
          <h2
            className="font-display text-4xl md:text-5xl font-bold"
            data-testid="text-about-title"
          >
            About Me
          </h2>
          <p
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
            data-testid="text-about-description"
          >
            Passionate developer with a track record of delivering exceptional
            digital experiences.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          <div className="lg:col-span-2 space-y-6">
            <div className="flex justify-center lg:justify-start">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full blur-xl opacity-30" />
                <Avatar className="h-64 w-64 border-4 border-background relative">
                  <AvatarImage
                    src={profileImage}
                    alt="Abhishek Kumar"
                    data-testid="img-profile"
                  />
                  <AvatarFallback className="text-4xl">AK</AvatarFallback>
                </Avatar>
              </div>
            </div>

            <Card className="p-6 space-y-4">
              <div className="flex items-center gap-3">
                <Award className="h-5 w-5 text-primary" />
                <h3 className="font-display font-semibold">
                  Certifications & Awards
                </h3>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li data-testid="text-cert-1">
                  • AWS Certified Solutions Architect
                </li>
                <li data-testid="text-cert-2">
                  • Google Cloud Professional Developer
                </li>
                <li data-testid="text-cert-3">
                  • MongoDB Certified Developer
                </li>
                <li data-testid="text-cert-4">
                  • Best Innovation Award 2023
                </li>
              </ul>
            </Card>
          </div>

          <div className="lg:col-span-3 space-y-8">
            <div className="space-y-4">
              <h3
                className="font-display text-2xl font-semibold"
                data-testid="text-bio-title"
              >
                Hi, I'm Abhishek
              </h3>
              <div className="space-y-4 text-muted-foreground">
                <p data-testid="text-bio-p1">
                  I'm a passionate full-stack developer with over 3 years of
                  experience building modern web applications. My journey in
                  software development started with a curiosity about how things
                  work on the internet, and it has evolved into a fulfilling
                  career creating impactful digital solutions.
                </p>
                <p data-testid="text-bio-p2">
                  I specialize in React, Node.js, and cloud technologies,
                  helping businesses transform their ideas into scalable,
                  user-friendly applications. I believe in writing clean,
                  maintainable code and staying up-to-date with the latest
                  industry trends.
                </p>
                <p data-testid="text-bio-p3">
                  When I'm not coding, you'll find me exploring new
                  technologies, contributing to open-source projects, or sharing
                  knowledge with the developer community.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <h3
                className="font-display text-xl font-semibold"
                data-testid="text-timeline-title"
              >
                Professional Journey
              </h3>
              <div className="space-y-8">
                {timeline.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <div
                      key={index}
                      className="flex gap-4"
                      data-testid={`timeline-item-${index}`}
                    >
                      <div className="flex flex-col items-center">
                        <div className="p-2 rounded-md bg-primary/10 border border-border">
                          <IconComponent className="h-5 w-5 text-primary" />
                        </div>
                        {index < timeline.length - 1 && (
                          <div className="w-px h-full bg-border mt-2" />
                        )}
                      </div>
                      <div className="flex-1 pb-8">
                        <Badge
                          variant="secondary"
                          className="mb-2"
                          data-testid={`badge-year-${index}`}
                        >
                          {item.year}
                        </Badge>
                        <h4
                          className="font-semibold text-lg"
                          data-testid={`text-timeline-title-${index}`}
                        >
                          {item.title}
                        </h4>
                        <p
                          className="text-sm text-muted-foreground mb-2"
                          data-testid={`text-timeline-company-${index}`}
                        >
                          {item.company}
                        </p>
                        <p
                          className="text-sm text-muted-foreground"
                          data-testid={`text-timeline-description-${index}`}
                        >
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
