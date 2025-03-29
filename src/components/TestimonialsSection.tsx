
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      content: "The team at AstroDesign transformed our outdated website into a beautiful, functional platform that perfectly represents our brand. The results have exceeded our expectations with a 45% increase in lead generation.",
      author: "Sarah Johnson",
      title: "Marketing Director, TechFlow Inc.",
      avatar: "SJ",
      company: "TechFlow"
    },
    {
      id: 2,
      content: "Working with AstroDesign was a game-changer for our business. Their strategic approach to our mobile app development resulted in a 60% increase in user engagement and exceptional reviews on the app stores.",
      author: "Michael Chen",
      title: "Product Manager, NexGen Solutions",
      avatar: "MC",
      company: "NexGen"
    },
    {
      id: 3,
      content: "The e-commerce platform developed by AstroDesign helped us scale our business internationally. Their attention to detail and focus on user experience resulted in a 300% increase in online sales within just six months.",
      author: "Emma Rodriguez",
      title: "CEO, Artisan Collective",
      avatar: "ER",
      company: "Artisan"
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-primary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="section-heading animate-fade-in">What Our Clients Say</h2>
          <p className="section-subheading animate-fade-in">
            Don't just take our word for it — hear from the businesses we've helped transform.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <Card className="p-8 md:p-12 shadow-lg animate-scale-in">
            <Quote className="h-12 w-12 text-primary/20 mb-6" />
            <p className="text-lg md:text-xl mb-8">
              {testimonials[activeIndex].content}
            </p>
            <div className="flex items-center">
              <Avatar className="h-14 w-14 border-2 border-primary/10">
                <AvatarImage src={`https://api.dicebear.com/7.x/initials/svg?seed=${testimonials[activeIndex].company}`} />
                <AvatarFallback>{testimonials[activeIndex].avatar}</AvatarFallback>
              </Avatar>
              <div className="ml-4">
                <h4 className="font-semibold">{testimonials[activeIndex].author}</h4>
                <p className="text-sm text-muted-foreground">{testimonials[activeIndex].title}</p>
              </div>
            </div>
          </Card>
          
          <div className="flex justify-center mt-8 gap-4">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={prevTestimonial}
              className="rounded-full h-12 w-12"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`h-2 rounded-full transition-all ${
                    activeIndex === index ? "w-8 bg-primary" : "w-2 bg-primary/30"
                  }`}
                  onClick={() => setActiveIndex(index)}
                />
              ))}
            </div>
            <Button 
              variant="outline" 
              size="icon" 
              onClick={nextTestimonial}
              className="rounded-full h-12 w-12"
            >
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
