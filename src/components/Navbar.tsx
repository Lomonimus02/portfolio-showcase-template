
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-sm shadow-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <a href="#" className="flex items-center space-x-2">
            <span className="bg-primary text-primary-foreground font-bold text-xl p-2 rounded">AD</span>
            <span className="font-bold text-xl">Astro<span className="text-primary">Design</span></span>
          </a>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="nav-link">Home</a>
            <a href="#services" className="nav-link">Services</a>
            <a href="#work" className="nav-link">Work</a>
            <a href="#about" className="nav-link">About</a>
            <a href="#testimonials" className="nav-link">Testimonials</a>
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="font-medium">Contact</Button>
            <Button className="font-medium">Get Started</Button>
          </div>
          
          <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="nav-link py-2" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
              <a href="#services" className="nav-link py-2" onClick={() => setIsMobileMenuOpen(false)}>Services</a>
              <a href="#work" className="nav-link py-2" onClick={() => setIsMobileMenuOpen(false)}>Work</a>
              <a href="#about" className="nav-link py-2" onClick={() => setIsMobileMenuOpen(false)}>About</a>
              <a href="#testimonials" className="nav-link py-2" onClick={() => setIsMobileMenuOpen(false)}>Testimonials</a>
              <div className="flex flex-col space-y-2 pt-2">
                <Button variant="outline" className="w-full">Contact</Button>
                <Button className="w-full">Get Started</Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
