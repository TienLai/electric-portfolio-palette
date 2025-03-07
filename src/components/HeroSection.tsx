
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video Placeholder */}
      <div className="absolute inset-0 bg-black/40 z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-magenta/20 to-electricRed/20"></div>
        <div className="absolute inset-0 flex items-center justify-center text-white/30 text-xl">
          Background Video Placeholder
        </div>
      </div>

      <div className="container relative z-20 flex flex-col md:flex-row items-center justify-between gap-8 px-4">
        <div className="text-center md:text-left max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hi, I'm <span className="animated-gradient-text">Tien Lai</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-foreground/80 mb-6">
            QA Engineer & Web Developer
          </h2>
          <p className="text-lg mb-8 max-w-md mx-auto md:mx-0">
            I build seamless web experiences and ensure quality in software products.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button className="bg-magenta hover:bg-magenta/90 text-white">
              View My Work
            </Button>
            <Button variant="outline" className="border-magenta text-magenta hover:bg-magenta/10">
              Download Resume
            </Button>
          </div>
        </div>

        {/* Profile Image Placeholder */}
        <div className="w-48 h-48 md:w-72 md:h-72 rounded-full bg-gradient-to-r from-magenta to-electricRed flex items-center justify-center overflow-hidden">
          <div className="text-white text-center p-4">
            Portrait Placeholder
          </div>
        </div>
      </div>

      <a 
        href="#about" 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown className="h-10 w-10 text-white" />
      </a>
    </section>
  );
};

export default HeroSection;
