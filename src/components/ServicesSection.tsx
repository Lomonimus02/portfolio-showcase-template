
import { Code, Paintbrush, PieChart, Globe, Smartphone, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";

const ServicesSection = () => {
  const services = [
    {
      icon: <Paintbrush className="h-10 w-10 text-primary mb-6" />,
      title: "UI/UX Design",
      description: "Creating intuitive and engaging user experiences with beautiful interfaces that drive conversion and satisfaction."
    },
    {
      icon: <Code className="h-10 w-10 text-primary mb-6" />,
      title: "Web Development",
      description: "Building high-performance, responsive websites that showcase your brand while delivering seamless functionality."
    },
    {
      icon: <Smartphone className="h-10 w-10 text-primary mb-6" />,
      title: "Mobile Apps",
      description: "Developing custom mobile applications with intuitive interfaces and seamless performance across all devices."
    },
    {
      icon: <Globe className="h-10 w-10 text-primary mb-6" />,
      title: "Digital Marketing",
      description: "Driving growth through strategic campaigns that increase visibility, engagement, and conversion rates."
    },
    {
      icon: <PieChart className="h-10 w-10 text-primary mb-6" />,
      title: "Data Analytics",
      description: "Transforming raw data into actionable insights that guide strategic decisions and optimize performance."
    },
    {
      icon: <Lightbulb className="h-10 w-10 text-primary mb-6" />,
      title: "Brand Strategy",
      description: "Crafting memorable brand identities and strategies that resonate with target audiences and drive market growth."
    },
  ];

  return (
    <section id="services" className="py-20 bg-accent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="section-heading animate-fade-in">Our Expert Services</h2>
          <p className="section-subheading animate-fade-in">
            Comprehensive digital solutions tailored to your unique business needs and goals.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="service-card animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {service.icon}
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-6">{service.description}</p>
              <Button variant="link" className="p-0 text-primary font-medium">
                Learn more &rarr;
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
