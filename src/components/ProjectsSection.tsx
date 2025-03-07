
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Automated Testing Framework",
      description: "A comprehensive testing framework built with Cypress and JavaScript for web application testing.",
      tags: ["Cypress", "JavaScript", "Testing", "Automation"],
      image: "bg-gradient-to-br from-magenta/30 to-electricRed/30"
    },
    {
      title: "E-commerce Platform",
      description: "A responsive e-commerce platform with modern UI and seamless checkout experience.",
      tags: ["React", "Redux", "Stripe", "Tailwind CSS"],
      image: "bg-gradient-to-br from-electricRed/30 to-magenta/30"
    },
    {
      title: "Task Management App",
      description: "A productivity app for managing tasks, projects, and team collaboration.",
      tags: ["TypeScript", "React", "Firebase", "Material UI"],
      image: "bg-gradient-to-br from-magenta/30 to-electricRed/30"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
          My <span className="gradient-text">Projects</span>
        </h2>
        <div className="w-20 h-1 bg-magenta mx-auto mb-12"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className={`h-48 ${project.image} flex items-center justify-center`}>
                <span className="text-foreground/60">Project Image Placeholder</span>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <Badge key={idx} variant="outline" className="bg-background/80">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="px-6 py-4 border-t bg-muted/30 flex justify-between">
                <Button variant="outline" size="sm" className="gap-2">
                  <Github className="h-4 w-4" />
                  <span>Code</span>
                </Button>
                <Button size="sm" className="gap-2 bg-magenta hover:bg-magenta/90">
                  <ExternalLink className="h-4 w-4" />
                  <span>Demo</span>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="bg-magenta hover:bg-magenta/90">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
