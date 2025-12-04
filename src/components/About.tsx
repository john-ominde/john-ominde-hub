import { CheckCircle2 } from "lucide-react";
import { Card } from "@/components/ui/card";

export const About = () => {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              About Me
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          </div>

          <Card className="p-8 md:p-12 shadow-elegant animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            <div className="space-y-6">
              <p className="text-lg text-foreground/90 leading-relaxed">
                Detail-oriented Virtual Assistant with experience supporting U.S.-based businesses through 
                administrative operations, email management, scheduling, customer support, and content coordination. 
                Skilled in organizing workflows, improving communication, and helping teams operate efficiently in 
                remote environments. Experienced with modern tools such as Google Workspace, Microsoft Office, 
                Trello, Asana, ClickUp, Slack, Zoom, Canva, HubSpot, and Salesforce. Committed to reliability, 
                confidentiality, and delivering high-quality virtual support.
              </p>

              <div className="grid md:grid-cols-2 gap-6 pt-6">
                <div className="space-y-4">
                  <h3 className="font-semibold text-xl text-foreground flex items-center gap-2">
                    <CheckCircle2 className="text-primary" />
                    Key Highlights
                  </h3>
                  <ul className="space-y-3 text-foreground/80">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Proven track record supporting remote teams and improving admin efficiency</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Strong confidentiality and professionalism working with international clients</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="font-semibold text-xl text-foreground flex items-center gap-2">
                    <CheckCircle2 className="text-primary" />
                    Contact Details
                  </h3>
                  <div className="space-y-2 text-foreground/80">
                    <p><strong>Location:</strong> Nairobi, Kenya</p>
                    <p><strong>Email:</strong> ominde@jonzjohn.com</p>
                    <p><strong>Phone:</strong> +254111276271</p>
                    <p><strong>Languages:</strong> English (Fluent), Swahili (Native)</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
