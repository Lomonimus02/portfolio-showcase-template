
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const AboutSection = () => {
  const stats = [
    { value: "10+", label: "Years Experience" },
    { value: "40+", label: "Team Members" },
    { value: "95%", label: "Client Retention" },
    { value: "24/7", label: "Support Hours" }
  ];

  const keyPoints = [
    "Strategic-driven digital solutions",
    "World-class design and development team",
    "Transparent communication and processes",
    "Results-focused methodology",
    "Long-term partnership approach"
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-white to-accent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="animate-fade-in">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/10 rounded-full"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full"></div>
              <img 
                src="https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3" 
                alt="Team collaboration" 
                className="w-full h-auto rounded-2xl shadow-xl relative z-10"
              />
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4 bg-white rounded-xl shadow-sm">
                  <div className="text-3xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="animate-fade-in">
            <h2 className="section-heading">We're a Team of Digital Enthusiasts</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Founded in 2013, AstroDesign has grown from a small design studio to a comprehensive digital agency. 
              We bring together talent from across the globe to create exceptional digital experiences that drive real results.
            </p>
            
            <div className="space-y-3 mb-8">
              {keyPoints.map((point, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0" />
                  <p>{point}</p>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="font-medium">Our Process</Button>
              <Button size="lg" variant="outline" className="font-medium">Meet The Team</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
