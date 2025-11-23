import { Home, Briefcase, Code, User, Mail } from "lucide-react";
import { useState } from "react";

interface DockItem {
  icon: React.ElementType;
  label: string;
  id: string;
}

const dockItems: DockItem[] = [
  { icon: Home, label: "Home", id: "home" },
  { icon: Briefcase, label: "Projects", id: "projects" },
  { icon: Code, label: "Skills", id: "skills" },
  { icon: User, label: "About", id: "about" },
  { icon: Mail, label: "Contact", id: "contact" },
];

export default function FloatingDock() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 md:hidden">
      <div className="flex items-end gap-2 px-4 py-3 rounded-2xl backdrop-blur-xl bg-card/80 border border-border shadow-2xl">
        {dockItems.map((item, index) => {
          const IconComponent = item.icon;
          const isHovered = hoveredIndex === index;
          const distance = hoveredIndex !== null ? Math.abs(hoveredIndex - index) : 2;
          const scale = hoveredIndex !== null ? Math.max(1, 1.5 - distance * 0.2) : 1;

          return (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative flex flex-col items-center gap-1 p-2 rounded-xl transition-all duration-300 hover-elevate active-elevate-2 group"
              style={{
                transform: `scale(${scale}) translateY(${isHovered ? -8 : 0}px)`,
              }}
              data-testid={`dock-item-${item.id}`}
            >
              <IconComponent
                className={`transition-all duration-300 ${
                  isHovered ? "w-7 h-7 text-primary" : "w-6 h-6"
                }`}
              />
              {isHovered && (
                <span className="absolute -top-10 text-xs font-medium px-2 py-1 rounded-md bg-popover border border-border whitespace-nowrap animate-in fade-in slide-in-from-bottom-2">
                  {item.label}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
