import { Button } from "@/components/ui/button";
import { Download, Mail } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

export const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 gradient-hero opacity-5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 animate-fade-in-up">
            <div className="inline-block px-4 py-2 bg-primary/10 rounded-full">
              <span className="text-primary font-medium">Available for Remote Work</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
              John Ominde
            </h1>
            
            <div className="text-2xl md:text-3xl font-semibold text-primary">
              Virtual Assistant
            </div>
            
            <p className="text-xl text-muted-foreground">
              Virtual Assistant | Administrative Support | Customer Service | Remote Operations
            </p>
            
            <p className="text-lg text-foreground/80 max-w-xl">
              Helping businesses stay organized, productive, and efficient through reliable remote support.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                size="lg"
                className="gradient-primary text-primary-foreground shadow-elegant hover:shadow-lg transition-smooth"
                onClick={() => scrollToSection("contact")}
              >
                <Mail className="mr-2 h-5 w-5" />
                Hire Me
              </Button>
              
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
                onClick={() => scrollToSection("resume")}
              >
                <Download className="mr-2 h-5 w-5" />
                View Resume
              </Button>
            </div>
            
            {/* Quick Contact Info */}
            <div className="pt-8 space-y-2 text-sm text-muted-foreground">
              <p>📍 Nairobi, Kenya</p>
              <p>📧 ominde@jonzjohn.com</p>
              <p>📱 +254111276271</p>
            </div>
          </div>
          
          {/* Right Content - Profile Photo */}
          <div className="relative animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="relative w-full max-w-md mx-auto">
              {/* Decorative circles */}
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-primary/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-4 -left-4 w-40 h-40 bg-accent/20 rounded-full blur-3xl"></div>
              
              {/* Profile photo */}
              <div className="relative z-10">
                <div className="aspect-square rounded-full overflow-hidden border-8 border-background shadow-elegant">
                  <img
                    src={profilePhoto}
                    alt="John Ominde"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
