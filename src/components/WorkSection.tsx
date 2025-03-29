
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const WorkSection = () => {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const projects = [
    {
      id: 1,
      title: "E-Commerce Redesign",
      category: "web",
      image: "https://images.unsplash.com/photo-1661956602944-249bcd04b63f?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3",
      tags: ["UI/UX", "Shopify"],
    },
    {
      id: 2,
      title: "Finance Mobile App",
      category: "mobile",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
      tags: ["Mobile", "Fintech"],
    },
    {
      id: 3,
      title: "Health Dashboard",
      category: "design",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
      tags: ["Data", "Healthcare"],
    },
    {
      id: 4,
      title: "Travel Platform",
      category: "web",
      image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3",
      tags: ["UI/UX", "Travel"],
    },
    {
      id: 5,
      title: "Restaurant Booking App",
      category: "mobile",
      image: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3",
      tags: ["Mobile", "Food"],
    },
    {
      id: 6,
      title: "Smart Home IoT",
      category: "design",
      image: "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3",
      tags: ["IoT", "Smart Home"],
    }
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="work" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="section-heading animate-fade-in">Our Latest Work</h2>
          <p className="section-subheading animate-fade-in">
            Explore our portfolio of innovative digital solutions across various industries.
          </p>
          
          <div className="flex flex-wrap justify-center gap-2 mt-8 animate-fade-in">
            {["all", "web", "mobile", "design"].map((filter) => (
              <Button
                key={filter}
                variant={activeFilter === filter ? "default" : "outline"}
                className="capitalize"
                onClick={() => setActiveFilter(filter)}
              >
                {filter === "all" ? "All Projects" : `${filter}`}
              </Button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id}
              className="group rounded-xl overflow-hidden shadow-lg animate-fade-in cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button variant="secondary" className="font-medium">View Project</Button>
                </div>
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                <div className="flex gap-2 mb-3">
                  {project.tags.map((tag, i) => (
                    <Badge key={i} variant="secondary">{tag}</Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="font-medium">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
