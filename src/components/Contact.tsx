import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Linkedin, Send } from "lucide-react";

export const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const getServiceLabel = (value: string) => {
    const services: Record<string, string> = {
      admin: "Administrative Support",
      customer: "Customer Service",
      social: "Social Media Assistance",
      project: "Project Coordination",
      other: "Other",
    };
    return services[value] || value;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    // Build email body
    const subject = encodeURIComponent(`Contact from ${formData.name} - Portfolio Inquiry`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone || "Not provided"}\n` +
      `Service Interested In: ${formData.service ? getServiceLabel(formData.service) : "Not specified"}\n\n` +
      `Message:\n${formData.message}`
    );

    // Open mailto link
    window.location.href = `mailto:jonzj.ominde@gmail.com?subject=${subject}&body=${body}`;

    toast({
      title: "Opening Email Client",
      description: "Your default email app will open with the message pre-filled.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to work together? Send me a message and let's discuss your needs
          </p>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-4"></div>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8 animate-fade-in-up">
            <Card className="p-6 shadow-elegant">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Email</h3>
                  <a 
                    href="mailto:ominde.john.tech@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-smooth"
                  >
                    ominde.john.tech@gmail.com
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-6 shadow-elegant">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                  <a 
                    href="tel:+254111276271"
                    className="text-muted-foreground hover:text-primary transition-smooth"
                  >
                    +254111276271
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-6 shadow-elegant">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Location</h3>
                  <p className="text-muted-foreground">Nairobi, Kenya</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 shadow-elegant">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Linkedin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">LinkedIn</h3>
                  <a 
                    href="https://www.linkedin.com/in/john-ominde"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-smooth"
                  >
                    Connect on LinkedIn
                  </a>
                </div>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="p-8 shadow-elegant animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Name *
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email *
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                  Phone (Optional)
                </label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                  Service Interested In
                </label>
                <Select
                  value={formData.service}
                  onValueChange={(value) => setFormData({ ...formData, service: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="admin">Administrative Support</SelectItem>
                    <SelectItem value="customer">Customer Service</SelectItem>
                    <SelectItem value="social">Social Media Assistance</SelectItem>
                    <SelectItem value="project">Project Coordination</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message *
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell me about your project and how I can help..."
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full gradient-primary text-primary-foreground shadow-elegant"
              >
                <Send className="mr-2 h-5 w-5" />
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};
