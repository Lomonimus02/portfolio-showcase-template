
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/3 left-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 z-0"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl z-0"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary mb-8 animate-fade-in">
            <span className="text-sm font-medium">Top-rated digital agency</span>
          </div>
          
          <h1 className="hero-heading mb-6 animate-fade-in">
            We Design <span className="gradient-text">Digital Experiences</span> That People Love
          </h1>
          
          <p className="text-xl sm:text-2xl text-muted-foreground mb-8 animate-fade-in">
            Transforming visions into exceptional digital realities with precision and creativity.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in">
            <Button size="lg" className="text-base font-medium px-8 py-6">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="text-base font-medium px-8 py-6">
              View Our Work
            </Button>
          </div>
          
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 animate-scale-in">
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold gradient-text">98%</div>
              <div className="text-sm text-muted-foreground">Client satisfaction</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold gradient-text">250+</div>
              <div className="text-sm text-muted-foreground">Projects completed</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold gradient-text">10+</div>
              <div className="text-sm text-muted-foreground">Years of experience</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold gradient-text">15+</div>
              <div className="text-sm text-muted-foreground">Industry awards</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
