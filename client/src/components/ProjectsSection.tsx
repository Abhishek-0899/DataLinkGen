import { ExternalLink, Github, Maximize2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import ProjectModal from "./ProjectModal";
import project1 from "@assets/generated_images/project_dashboard_preview.png";
import project2 from "@assets/generated_images/e-commerce_app_preview.png";
import project3 from "@assets/generated_images/social_platform_preview.png";
import project4 from "@assets/generated_images/ai_chat_app_preview.png";

const projects = [
  {
    id: 1,
    title: "Analytics Dashboard",
    description:
      "A comprehensive analytics platform with real-time data visualization, custom reporting, and team collaboration features.",
    image: project1,
    tags: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    featured: true,
    features: [
      "Real-time data visualization with charts",
      "Custom report builder",
      "Team collaboration tools",
      "Advanced filtering and search",
      "Export to PDF and Excel",
      "Role-based access control",
    ],
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    description:
      "Modern online shopping experience with seamless checkout, inventory management, and customer analytics.",
    image: project2,
    tags: ["Next.js", "Stripe", "Tailwind CSS"],
    featured: false,
    features: [
      "Stripe payment integration",
      "Inventory management system",
      "Product recommendations",
      "Customer analytics dashboard",
      "Multi-currency support",
      "Order tracking system",
    ],
  },
  {
    id: 3,
    title: "Social Media Hub",
    description:
      "Connect, share, and engage with a vibrant community through posts, stories, and real-time messaging.",
    image: project3,
    tags: ["React", "Firebase", "WebSocket"],
    featured: true,
    features: [
      "Real-time messaging with WebSocket",
      "Post creation and sharing",
      "Story feature with 24h expiry",
      "User profiles and followers",
      "Like and comment system",
      "Notification system",
    ],
  },
  {
    id: 4,
    title: "AI Chat Assistant",
    description:
      "Intelligent conversational AI powered by advanced language models for customer support and productivity.",
    image: project4,
    tags: ["Python", "OpenAI", "React", "FastAPI"],
    featured: false,
    features: [
      "GPT-4 powered conversations",
      "Context-aware responses",
      "Multi-language support",
      "Chat history and search",
      "Custom training on documents",
      "API integration capabilities",
    ],
  },
];

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  return (
    <>
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <Badge className="mb-2" data-testid="badge-section-projects">
            Portfolio
          </Badge>
          <h2
            className="font-display text-4xl md:text-5xl font-bold"
            data-testid="text-projects-title"
          >
            Featured Projects
          </h2>
          <p
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
            data-testid="text-projects-description"
          >
            A showcase of my recent work, demonstrating expertise in modern web
            development and creative problem-solving.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className={`group overflow-hidden hover-elevate transition-all duration-300 ${
                project.featured ? "md:col-span-2" : ""
              }`}
              data-testid={`card-project-${project.id}`}
            >
              <div
                className={`grid ${project.featured ? "md:grid-cols-2" : ""} gap-0`}
              >
                <div className="relative overflow-hidden aspect-video md:aspect-auto">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    data-testid={`img-project-${project.id}`}
                  />
                  {project.featured && (
                    <Badge
                      className="absolute top-4 right-4 backdrop-blur-md bg-white/90 dark:bg-black/90"
                      data-testid={`badge-featured-${project.id}`}
                    >
                      Featured
                    </Badge>
                  )}
                </div>

                <div className="p-6 md:p-8 flex flex-col gap-4">
                  <div className="space-y-3">
                    <h3
                      className="font-display text-2xl font-semibold"
                      data-testid={`text-project-title-${project.id}`}
                    >
                      {project.title}
                    </h3>
                    <p
                      className="text-muted-foreground"
                      data-testid={`text-project-description-${project.id}`}
                    >
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="text-xs"
                        data-testid={`badge-tech-${tag}-${project.id}`}
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-3 mt-auto pt-4">
                    <Button
                      variant="default"
                      size="sm"
                      onClick={() => setSelectedProject(project)}
                      data-testid={`button-focus-project-${project.id}`}
                    >
                      <Maximize2 className="mr-2 h-4 w-4" />
                      Focus Mode
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      data-testid={`button-github-${project.id}`}
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
    </>
  );
}
