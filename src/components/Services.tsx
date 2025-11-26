import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Users, Share2, Calendar, ArrowRight } from "lucide-react";

export const Services = () => {
  const services = [
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Virtual Administrative Support",
      description: "Email & inbox management, calendar scheduling, document prep, data organization.",
      deliverables: [
        "Organized email systems with priority rules",
        "Calendar coordination and meeting scheduling",
        "Professional document preparation",
        "Efficient data entry and organization",
      ],
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Customer Service & Client Support",
      description: "Responding to inquiries, CRM updates, follow-ups, issue resolution.",
      deliverables: [
        "Prompt response to customer inquiries",
        "CRM data management and updates",
        "Professional client communication",
        "Issue tracking and resolution",
      ],
    },
    {
      icon: <Share2 className="w-8 h-8" />,
      title: "Social Media Assistance",
      description: "Content scheduling, basic content creation, engagement monitoring, posting calendars.",
      deliverables: [
        "Strategic content scheduling",
        "Engaging social media posts",
        "Audience engagement monitoring",
        "Weekly/monthly posting calendars",
      ],
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Project & Task Coordination",
      description: "Task tracking, meeting prep, research, workflow optimization.",
      deliverables: [
        "Comprehensive task tracking systems",
        "Meeting agenda and materials prep",
        "Industry and competitor research",
        "Process improvement recommendations",
      ],
    },
  ];

  const scrollToContact = (service: string) => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      // You could also pre-fill the service in the contact form here
    }
  };

  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Services I Offer
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive virtual assistance to help your business run smoothly
          </p>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={index}
              className="p-8 hover:shadow-lg transition-smooth group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-primary mb-4 group-hover:scale-110 transition-smooth inline-block">
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-foreground mb-3">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground mb-6">
                {service.description}
              </p>
              
              <div className="mb-6">
                <p className="font-semibold text-foreground mb-3">What I deliver:</p>
                <ul className="space-y-2">
                  {service.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-foreground/80">
                      <span className="text-primary mt-1">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <Button
                variant="outline"
                className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-smooth"
                onClick={() => scrollToContact(service.title)}
              >
                Request this service
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-smooth" />
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
