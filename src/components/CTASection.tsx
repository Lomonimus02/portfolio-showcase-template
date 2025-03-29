
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto rounded-3xl bg-primary p-8 md:p-16 text-white relative overflow-hidden shadow-xl animate-fade-in">
          {/* Background Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-3xl translate-x-1/4 translate-y-1/4"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">Let's Build Something Amazing Together</h2>
            <p className="text-lg sm:text-xl mb-8 text-white/80 max-w-2xl">
              Ready to transform your digital presence? Contact us today to discuss your project and discover how we can help you achieve your goals.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-3 max-w-xl">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus-visible:ring-white/30"
              />
              <Button className="bg-white text-primary hover:bg-white/90 px-8">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
            
            <p className="mt-4 text-sm text-white/60">
              We'll respond within 24 hours. No spam, we promise.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
