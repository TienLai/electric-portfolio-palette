
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-md shadow-md py-2" : "py-4"
      }`}
    >
      <div className="container flex items-center justify-between">
        <a href="#hero" className="font-bold text-xl md:text-2xl gradient-text">
          Tien Lai
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-foreground/80 hover:text-magenta transition-colors">
            About
          </a>
          <a href="#skills" className="text-foreground/80 hover:text-magenta transition-colors">
            Skills
          </a>
          <a href="#experience" className="text-foreground/80 hover:text-magenta transition-colors">
            Experience
          </a>
          <a href="#projects" className="text-foreground/80 hover:text-magenta transition-colors">
            Projects
          </a>
          <a href="#contact">
            <Button className="bg-magenta hover:bg-magenta/90">Contact Me</Button>
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleMenu}
          className="md:hidden"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-background shadow-lg p-4 flex flex-col gap-4 md:hidden">
            <a 
              href="#about" 
              className="text-foreground/80 hover:text-magenta transition-colors"
              onClick={toggleMenu}
            >
              About
            </a>
            <a 
              href="#skills" 
              className="text-foreground/80 hover:text-magenta transition-colors"
              onClick={toggleMenu}
            >
              Skills
            </a>
            <a 
              href="#experience" 
              className="text-foreground/80 hover:text-magenta transition-colors"
              onClick={toggleMenu}
            >
              Experience
            </a>
            <a 
              href="#projects" 
              className="text-foreground/80 hover:text-magenta transition-colors"
              onClick={toggleMenu}
            >
              Projects
            </a>
            <a 
              href="#contact"
              onClick={toggleMenu}
            >
              <Button className="bg-magenta hover:bg-magenta/90 w-full">Contact Me</Button>
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
