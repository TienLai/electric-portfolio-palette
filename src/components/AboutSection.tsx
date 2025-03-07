
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
          About <span className="gradient-text">Me</span>
        </h2>
        <div className="w-20 h-1 bg-magenta mx-auto mb-12"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <Card className="bg-muted/50">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Who I Am</h3>
              <p className="mb-4">
                I'm Tien Lai, a Quality Assurance Engineer with a passion for building and testing web applications. 
                With a strong foundation in computer science and experience in both manual and automated testing, I 
                ensure software quality while maintaining an eye for user experience.
              </p>
              <p>
                I graduated with a degree in Computer Science and have since been working in the tech industry, 
                specifically focused on quality assurance and web development. I'm detail-oriented, analytical, 
                and committed to delivering high-quality products.
              </p>
            </CardContent>
          </Card>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Personal Details</h3>
              <ul className="space-y-2">
                <li className="flex">
                  <span className="font-semibold w-24">Name:</span> 
                  <span>Tien Lai</span>
                </li>
                <li className="flex">
                  <span className="font-semibold w-24">Location:</span> 
                  <span>Sydney, Australia</span>
                </li>
                <li className="flex">
                  <span className="font-semibold w-24">Email:</span> 
                  <span>tien.lai@example.com</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">My Interests</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-magenta/10 text-magenta rounded-full">Software Testing</span>
                <span className="px-3 py-1 bg-electricRed/10 text-electricRed rounded-full">Web Development</span>
                <span className="px-3 py-1 bg-magenta/10 text-magenta rounded-full">Test Automation</span>
                <span className="px-3 py-1 bg-electricRed/10 text-electricRed rounded-full">UI/UX Design</span>
                <span className="px-3 py-1 bg-magenta/10 text-magenta rounded-full">Agile Methodologies</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
