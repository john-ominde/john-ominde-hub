import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Briefcase, GraduationCap, Award } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const Resume = () => {
  const { toast } = useToast();

  const handleDownload = () => {
    // In production, this would download the actual PDF
    toast({
      title: "Resume Download",
      description: "Your resume download will start shortly.",
    });
    
    // Simulate PDF download
    const link = document.createElement('a');
    link.href = '#'; // In production: link to actual PDF file
    link.download = 'John-Ominde-Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="resume" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Resume
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-6">
            Professional experience and qualifications
          </p>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          
          <Button
            size="lg"
            className="gradient-primary text-primary-foreground shadow-elegant"
            onClick={handleDownload}
          >
            <Download className="mr-2 h-5 w-5" />
            Download Resume (PDF)
          </Button>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Header */}
          <Card className="p-8 text-center shadow-elegant animate-fade-in-up">
            <h3 className="text-3xl font-bold text-foreground mb-2">John Ominde</h3>
            <p className="text-xl text-primary mb-4">
              Virtual Assistant | Administrative Support | Customer Service
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <span>📍 Nairobi, Kenya</span>
              <span>📧 ominde.john.tech@gmail.com</span>
              <span>📱 +254111276271</span>
            </div>
          </Card>

          {/* Summary */}
          <Card className="p-8 shadow-elegant animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            <h4 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
              <Award className="text-primary" />
              Professional Summary
            </h4>
            <p className="text-foreground/90 leading-relaxed">
              Detail-oriented Virtual Assistant with experience supporting U.S.-based businesses through 
              administrative operations, email management, scheduling, customer support, and content coordination. 
              Skilled in organizing workflows, improving communication, and helping teams operate efficiently in 
              remote environments.
            </p>
          </Card>

          {/* Experience */}
          <Card className="p-8 shadow-elegant animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <h4 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
              <Briefcase className="text-primary" />
              Professional Experience
            </h4>
            
            <div className="space-y-8">
              {/* Job 1 */}
              <div className="border-l-4 border-primary pl-6">
                <div className="flex flex-wrap justify-between items-start mb-2">
                  <div>
                    <h5 className="text-xl font-bold text-foreground">Virtual Assistant</h5>
                    <p className="text-primary font-medium">ToBuild LLC (Remote, United States)</p>
                  </div>
                  <span className="text-sm text-muted-foreground">Jan 2025 – Present</span>
                </div>
                <ul className="space-y-2 mt-3">
                  <li className="flex items-start gap-2 text-foreground/80">
                    <span className="text-primary mt-1">•</span>
                    <span>Assisted with technical job application processes for engineering roles</span>
                  </li>
                  <li className="flex items-start gap-2 text-foreground/80">
                    <span className="text-primary mt-1">•</span>
                    <span>Provided admin support including document prep and data organization</span>
                  </li>
                  <li className="flex items-start gap-2 text-foreground/80">
                    <span className="text-primary mt-1">•</span>
                    <span>Supported internal communications and created digital content</span>
                  </li>
                </ul>
              </div>

              {/* Job 2 */}
              <div className="border-l-4 border-primary pl-6">
                <div className="flex flex-wrap justify-between items-start mb-2">
                  <div>
                    <h5 className="text-xl font-bold text-foreground">Virtual Assistant</h5>
                    <p className="text-primary font-medium">Remote CoWorker (Remote, United States)</p>
                  </div>
                  <span className="text-sm text-muted-foreground">May 2024 – Dec 2024</span>
                </div>
                <ul className="space-y-2 mt-3">
                  <li className="flex items-start gap-2 text-foreground/80">
                    <span className="text-primary mt-1">•</span>
                    <span>Managed email communication, client inquiries, and contact databases</span>
                  </li>
                  <li className="flex items-start gap-2 text-foreground/80">
                    <span className="text-primary mt-1">•</span>
                    <span>Handled social media scheduling and basic engagement strategies</span>
                  </li>
                  <li className="flex items-start gap-2 text-foreground/80">
                    <span className="text-primary mt-1">•</span>
                    <span>Conducted industry research and compiled weekly insights</span>
                  </li>
                  <li className="flex items-start gap-2 text-foreground/80">
                    <span className="text-primary mt-1">•</span>
                    <span>Delivered customer support with focus on satisfaction and timely resolution</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Skills */}
          <Card className="p-8 shadow-elegant animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <h4 className="text-2xl font-bold text-foreground mb-6">Skills</h4>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h5 className="font-semibold text-foreground mb-3">Administrative & Support</h5>
                <p className="text-sm text-foreground/80">
                  Calendar management, email support, data entry, travel planning, confidentiality
                </p>
              </div>
              
              <div>
                <h5 className="font-semibold text-foreground mb-3">Client & Project Support</h5>
                <p className="text-sm text-foreground/80">
                  Customer service, project coordination, research
                </p>
              </div>
              
              <div>
                <h5 className="font-semibold text-foreground mb-3">Content & Social Media</h5>
                <p className="text-sm text-foreground/80">
                  Content creation, scheduling, engagement
                </p>
              </div>
              
              <div>
                <h5 className="font-semibold text-foreground mb-3">Technical Tools</h5>
                <p className="text-sm text-foreground/80">
                  MS Office, Google Workspace, Slack, Zoom, Trello, Asana, ClickUp, Salesforce, 
                  HubSpot, Zoho, Canva, Hootsuite, Buffer, QuickBooks, Xero
                </p>
              </div>
            </div>
          </Card>

          {/* Education & Languages */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 shadow-elegant animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <h4 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                <GraduationCap className="text-primary" />
                Education
              </h4>
              <div>
                <p className="font-semibold text-foreground">Technical University of Kenya</p>
                <p className="text-muted-foreground">Undergraduate Studies</p>
              </div>
            </Card>

            <Card className="p-8 shadow-elegant animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
              <h4 className="text-2xl font-bold text-foreground mb-4">Languages</h4>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span className="font-medium text-foreground">English</span>
                  <span className="text-muted-foreground">Fluent</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-medium text-foreground">Swahili</span>
                  <span className="text-muted-foreground">Native</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
