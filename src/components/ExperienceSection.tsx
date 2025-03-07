
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Briefcase, Calendar } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Senior QA Engineer",
      company: "QualityTech Solutions",
      period: "2020 - Present",
      description: [
        "Lead the QA team in developing and implementing test strategies for web applications",
        "Create and maintain automated test frameworks using Cypress and Selenium",
        "Collaborate with cross-functional teams to ensure high-quality product delivery",
        "Perform thorough regression testing and report detailed bug documentation"
      ]
    },
    {
      title: "QA Engineer",
      company: "WebDev Innovations",
      period: "2018 - 2020",
      description: [
        "Executed manual and automated tests across web applications",
        "Developed and maintained test cases for feature releases",
        "Participated in agile ceremonies and contributed to team planning",
        "Identified and documented bugs in tracking systems"
      ]
    },
    {
      title: "Junior Web Developer",
      company: "Digital Solutions Inc.",
      period: "2016 - 2018",
      description: [
        "Developed and maintained websites using HTML, CSS, and JavaScript",
        "Collaborated with designers to implement UI/UX improvements",
        "Performed code reviews and participated in pair programming",
        "Assisted in troubleshooting and fixing bugs"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
          Work <span className="gradient-text">Experience</span>
        </h2>
        <div className="w-20 h-1 bg-magenta mx-auto mb-12"></div>
        
        <div className="relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-magenta to-electricRed transform md:-translate-x-1/2"></div>
          
          {/* Experience items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className={`relative ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12 md:ml-auto'} md:w-1/2`}>
                {/* Timeline dot */}
                <div className="absolute top-0 left-0 md:left-auto md:right-0 w-5 h-5 rounded-full bg-gradient-to-r from-magenta to-electricRed transform translate-x-[-10px] md:translate-x-[10px]"></div>
                
                <Card className="shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Briefcase className="w-4 h-4 text-magenta" />
                      <h3 className="text-xl font-semibold">{exp.title}</h3>
                    </div>
                    
                    <div className="flex items-center gap-2 text-muted-foreground mb-4">
                      <span>{exp.company}</span>
                      <Separator orientation="vertical" className="h-4" />
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                    
                    <ul className="space-y-2">
                      {exp.description.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-magenta mt-1.5"></div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
