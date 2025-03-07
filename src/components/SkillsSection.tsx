
import { Progress } from "@/components/ui/progress";

const SkillsSection = () => {
  const technicalSkills = [
    { name: "JavaScript", level: 85 },
    { name: "HTML/CSS", level: 90 },
    { name: "React", level: 80 },
    { name: "TypeScript", level: 75 },
    { name: "Selenium", level: 90 },
    { name: "Cypress", level: 85 },
    { name: "Manual Testing", level: 95 },
    { name: "SQL", level: 70 },
  ];

  const softSkills = [
    "Problem Solving",
    "Communication",
    "Team Collaboration",
    "Time Management",
    "Attention to Detail",
    "Critical Thinking",
    "Adaptability",
    "Documentation",
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
          My <span className="gradient-text">Skills</span>
        </h2>
        <div className="w-20 h-1 bg-magenta mx-auto mb-12"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Technical Skills</h3>
            <div className="space-y-6">
              {technicalSkills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <Progress
                    value={skill.level}
                    className="h-2"
                    indicatorClassName="bg-gradient-to-r from-magenta to-electricRed"
                  />
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-6">Soft Skills</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {softSkills.map((skill) => (
                <div 
                  key={skill} 
                  className="p-4 rounded-lg border border-border bg-card shadow-sm hover:shadow-md transition-shadow flex items-center gap-2"
                >
                  <div className="w-3 h-3 rounded-full bg-gradient-to-r from-magenta to-electricRed"></div>
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
