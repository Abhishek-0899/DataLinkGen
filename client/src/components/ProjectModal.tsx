import { X, ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useEffect } from "react";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  longDescription?: string;
  features?: string[];
  githubUrl?: string;
  liveUrl?: string;
}

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
      data-testid="project-modal-overlay"
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-card border border-border rounded-2xl shadow-2xl animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
        data-testid="project-modal-content"
      >
        <button
          onClick={onClose}
          className="sticky top-4 right-4 float-right z-10 p-2 rounded-full bg-background/80 backdrop-blur-md border border-border hover-elevate active-elevate-2 transition-all"
          data-testid="button-close-modal"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="p-8 space-y-6">
          <div className="relative w-full aspect-video rounded-xl overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
              data-testid="img-modal-project"
            />
          </div>

          <div className="space-y-4">
            <div>
              <h2
                className="font-display text-3xl font-bold mb-2"
                data-testid="text-modal-title"
              >
                {project.title}
              </h2>
              <p
                className="text-muted-foreground"
                data-testid="text-modal-description"
              >
                {project.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>

            <div className="space-y-3">
              <h3 className="font-display text-xl font-semibold">
                Detailed Overview
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {project.longDescription ||
                  `This project showcases advanced ${project.tags[0]} development with modern best practices. Built with scalability and performance in mind, it features a robust architecture that handles complex user interactions seamlessly. The application demonstrates proficiency in full-stack development, from responsive UI components to efficient backend APIs.`}
              </p>
            </div>

            {project.features && (
              <div className="space-y-3">
                <h3 className="font-display text-xl font-semibold">
                  Key Features
                </h3>
                <ul className="grid md:grid-cols-2 gap-2 text-muted-foreground">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="flex gap-3 pt-4">
              <Button
                className="flex-1"
                data-testid="button-modal-live"
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                View Live Project
              </Button>
              <Button
                variant="outline"
                className="flex-1"
                data-testid="button-modal-github"
              >
                <Github className="mr-2 h-4 w-4" />
                View Code
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
