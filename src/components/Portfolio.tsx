import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

export const Portfolio = () => {
  const projects = [
    {
      title: "Email Management System Setup for U.S. Client",
      description: "Implemented organized inbox folders, priority rules, and canned responses to reduce response time and increase clarity for client communications.",
      tags: ["Admin", "Email", "Productivity"],
      fullDescription: "Created a comprehensive email management system for a U.S.-based consulting firm handling 200+ emails daily.",
      impact: [
        "Reduced email response time by 30%",
        "Organized 5+ years of archived emails into searchable folders",
        "Created 25+ canned response templates",
        "Implemented priority tagging system reducing missed important emails by 95%",
      ],
      tools: "Gmail, Google Workspace, Filters & Labels",
    },
    {
      title: "Social Media Posting Calendar – Weekly Structure",
      description: "Built a repeatable weekly posting calendar with post templates, scheduling plan, and engagement tracking.",
      tags: ["Social Media", "Content", "Strategy"],
      fullDescription: "Developed and implemented a comprehensive social media content calendar for a professional services firm across LinkedIn, Twitter, and Facebook.",
      impact: [
        "Scheduled 30 posts per month consistently",
        "Increased engagement rate by 45% in 3 months",
        "Created library of 50+ reusable content templates",
        "Reduced content creation time by 40%",
      ],
      tools: "Hootsuite, Canva, Google Sheets",
    },
    {
      title: "CRM Data Cleaning & Organization Project",
      description: "Cleaned and standardized contact data, removed duplicates, and created segmented lists for targeted outreach.",
      tags: ["CRM", "Data", "Organization"],
      fullDescription: "Comprehensive CRM database cleanup and organization project for a B2B sales organization with 5,000+ contacts.",
      impact: [
        "Organized 1,200+ active contacts",
        "Removed 300+ duplicate entries",
        "Created 8 targeted segmentation lists",
        "Improved data quality score from 62% to 94%",
      ],
      tools: "Salesforce, Excel, Data Validation Tools",
    },
    {
      title: "Research & Insights Report – Business Development",
      description: "Compiled weekly industry insights, competitor summaries, and lead lists to inform growth strategies.",
      tags: ["Research", "Analysis", "Strategy"],
      fullDescription: "Weekly research initiative providing actionable business intelligence for strategic decision-making and lead generation.",
      impact: [
        "Delivered 12 comprehensive weekly reports",
        "Identified 50+ qualified leads per month",
        "Tracked 10 key competitors across 5 metrics",
        "Research contributed to 3 major client wins",
      ],
      tools: "Google Research, LinkedIn Sales Navigator, Excel",
    },
    {
      title: "Admin Workflow Optimization for Teams",
      description: "Created standardized SOPs for onboarding clients, document naming, and task tracking to save time and reduce errors.",
      tags: ["Process", "SOPs", "Efficiency"],
      fullDescription: "Designed and implemented standardized operational procedures for a 12-person remote team to improve consistency and efficiency.",
      impact: [
        "Created 15 SOPs covering key processes",
        "Reduced onboarding time from 3 weeks to 1 week",
        "Decreased process errors by 60%",
        "Saved team approximately 10 hours per week",
      ],
      tools: "Google Docs, Notion, Process Mapping Tools",
    },
  ];

  return (
    <section id="portfolio" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Portfolio
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Recent projects and success stories
          </p>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Dialog key={index}>
              <Card
                className="p-6 hover:shadow-lg transition-smooth group animate-fade-in-up overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Thumbnail placeholder */}
                <div className="w-full h-48 bg-gradient-primary rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-white text-5xl font-bold opacity-20">
                    {index + 1}
                  </span>
                </div>

                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <Badge key={idx} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-smooth">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground text-sm line-clamp-3">
                    {project.description}
                  </p>

                  <DialogTrigger asChild>
                    <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-smooth">
                      View Details
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </DialogTrigger>
                </div>
              </Card>

              <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="text-2xl">{project.title}</DialogTitle>
                </DialogHeader>
                
                <div className="space-y-6 pt-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <Badge key={idx} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div>
                    <h4 className="font-semibold text-lg mb-2">Project Overview</h4>
                    <p className="text-muted-foreground">{project.fullDescription}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-lg mb-3">Impact & Results</h4>
                    <ul className="space-y-2">
                      {project.impact.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-primary mt-1">✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-lg mb-2">Tools Used</h4>
                    <p className="text-muted-foreground">{project.tools}</p>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
};
