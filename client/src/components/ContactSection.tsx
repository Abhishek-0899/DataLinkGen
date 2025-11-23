import { Mail, Github, Linkedin, Twitter, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function ContactSection() {
  const contactInfo = [
    { icon: Mail, label: "Email", value: "abhishek.dev@example.com" },
    { icon: Phone, label: "Phone", value: "+91 9876543210" },
    { icon: MapPin, label: "Location", value: "Bangalore, India" },
  ];

  const socialLinks = [
    { icon: Github, label: "GitHub", url: "#", color: "hover:text-gray-900 dark:hover:text-gray-100" },
    { icon: Linkedin, label: "LinkedIn", url: "#", color: "hover:text-blue-600" },
    { icon: Twitter, label: "Twitter", url: "#", color: "hover:text-blue-400" },
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <Badge className="mb-2" data-testid="badge-section-contact">
            Get In Touch
          </Badge>
          <h2
            className="font-display text-4xl md:text-5xl font-bold"
            data-testid="text-contact-title"
          >
            Let's Work Together
          </h2>
          <p
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
            data-testid="text-contact-description"
          >
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>
        </div>

        <Card className="p-8 md:p-12 space-y-8">
          <div className="grid md:grid-cols-3 gap-6">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <div
                  key={index}
                  className="flex flex-col items-center text-center gap-3 p-4 rounded-md hover-elevate"
                  data-testid={`contact-info-${index}`}
                >
                  <div className="p-3 rounded-md bg-primary/10">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p
                      className="text-sm text-muted-foreground mb-1"
                      data-testid={`text-contact-label-${index}`}
                    >
                      {info.label}
                    </p>
                    <p
                      className="font-medium"
                      data-testid={`text-contact-value-${index}`}
                    >
                      {info.value}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="border-t border-border pt-8">
            <div className="text-center space-y-6">
              <div>
                <h3
                  className="font-display text-xl font-semibold mb-2"
                  data-testid="text-social-title"
                >
                  Connect on Social Media
                </h3>
                <p
                  className="text-muted-foreground text-sm"
                  data-testid="text-social-description"
                >
                  Follow me for updates, insights, and more
                </p>
              </div>

              <div className="flex justify-center gap-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <Button
                      key={index}
                      size="icon"
                      variant="outline"
                      className={`transition-colors ${social.color}`}
                      data-testid={`button-social-${social.label.toLowerCase()}`}
                    >
                      <IconComponent className="h-5 w-5" />
                    </Button>
                  );
                })}
              </div>

              <div className="pt-6">
                <Button
                  size="lg"
                  className="w-full md:w-auto"
                  data-testid="button-send-email"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Send me an email
                </Button>
              </div>
            </div>
          </div>
        </Card>

        <div className="text-center mt-12 text-muted-foreground text-sm">
          <p data-testid="text-footer">
            © 2024 Abhishek Kumar. Built with React, TypeScript, and Tailwind
            CSS.
          </p>
        </div>
      </div>
    </section>
  );
}
