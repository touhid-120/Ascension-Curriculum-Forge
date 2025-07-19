import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Layers, 
  Database, 
  Workflow, 
  Smartphone, 
  Globe, 
  Bot, 
  Shield, 
  TrendingUp,
  CheckCircle,
  Clock,
  Users,
  Target
} from "lucide-react";

const CourseStack = () => {
  const modules = [
    {
      id: 1,
      title: "Foundation Mastery",
      description: "No-Code Fundamentals & Strategic Thinking",
      icon: Layers,
      duration: "2 weeks",
      skills: 8,
      color: "primary",
      tools: ["Webflow", "Bubble", "Zapier"],
      outcomes: ["Digital Literacy", "Strategic Planning", "Tool Selection"]
    },
    {
      id: 2,
      title: "Visual Development",
      description: "Advanced Web Design & User Experience",
      icon: Globe,
      duration: "3 weeks",
      skills: 12,
      color: "secondary",
      tools: ["Webflow", "Framer", "Figma"],
      outcomes: ["Responsive Design", "UX/UI Mastery", "Brand Identity"]
    },
    {
      id: 3,
      title: "Database Architecture",
      description: "Data Management & Backend Systems",
      icon: Database,
      duration: "2 weeks",
      skills: 10,
      color: "accent",
      tools: ["Airtable", "Bubble", "Supabase"],
      outcomes: ["Data Modeling", "API Integration", "Scalable Systems"]
    },
    {
      id: 4,
      title: "Automation Engine",
      description: "Workflow Automation & Process Optimization",
      icon: Workflow,
      duration: "3 weeks",
      skills: 15,
      color: "primary",
      tools: ["Zapier", "Make", "n8n"],
      outcomes: ["Business Automation", "Integration Mastery", "Efficiency Systems"]
    },
    {
      id: 5,
      title: "Mobile Supremacy",
      description: "Cross-Platform App Development",
      icon: Smartphone,
      duration: "3 weeks",
      skills: 11,
      color: "secondary",
      tools: ["FlutterFlow", "Adalo", "Glide"],
      outcomes: ["Native Apps", "Cross-Platform", "App Store Deployment"]
    },
    {
      id: 6,
      title: "AI Integration",
      description: "Artificial Intelligence & Machine Learning",
      icon: Bot,
      duration: "2 weeks",
      skills: 9,
      color: "accent",
      tools: ["OpenAI", "ChatGPT", "Claude"],
      outcomes: ["AI Automation", "Smart Workflows", "Intelligent Systems"]
    },
    {
      id: 7,
      title: "Security & Auth",
      description: "User Authentication & Data Protection",
      icon: Shield,
      duration: "2 weeks",
      skills: 7,
      color: "primary",
      tools: ["Auth0", "Firebase", "Supabase"],
      outcomes: ["Secure Systems", "User Management", "Privacy Protection"]
    },
    {
      id: 8,
      title: "Business Scaling",
      description: "Monetization & Growth Strategies",
      icon: TrendingUp,
      duration: "3 weeks",
      skills: 13,
      color: "secondary",
      tools: ["Stripe", "Gumroad", "ConvertKit"],
      outcomes: ["Revenue Systems", "Customer Acquisition", "Growth Hacking"]
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return {
          bg: 'bg-primary/10',
          border: 'border-primary/30',
          icon: 'bg-gradient-primary',
          badge: 'bg-primary/20 text-primary'
        };
      case 'secondary':
        return {
          bg: 'bg-secondary/10',
          border: 'border-secondary/30',
          icon: 'bg-secondary',
          badge: 'bg-secondary/20 text-secondary'
        };
      case 'accent':
        return {
          bg: 'bg-accent/10',
          border: 'border-accent/30',
          icon: 'bg-accent',
          badge: 'bg-accent/20 text-accent'
        };
      default:
        return {
          bg: 'bg-primary/10',
          border: 'border-primary/30',
          icon: 'bg-gradient-primary',
          badge: 'bg-primary/20 text-primary'
        };
    }
  };

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-primary/30 bg-primary/10 text-primary">
            <Layers className="w-4 h-4 mr-2" />
            Course Architecture
          </Badge>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            <span className="text-gradient">Modular</span> Learning Stack
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Eight strategic pillars designed to transform you from beginner to no-code architect
          </p>
        </div>

        {/* Module Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {modules.map((module, index) => {
            const colors = getColorClasses(module.color);
            const Icon = module.icon;
            
            return (
              <Card 
                key={module.id} 
                className={`p-6 card-shadow border ${colors.border} ${colors.bg} hover:scale-105 smooth-transition group animate-fade-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Module Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 ${colors.icon} rounded-lg flex items-center justify-center group-hover:scale-110 smooth-transition`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <Badge variant="outline" className={`${colors.badge} border-none text-xs`}>
                    Module {module.id}
                  </Badge>
                </div>

                {/* Module Content */}
                <h3 className="text-lg font-semibold text-foreground mb-2">{module.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{module.description}</p>

                {/* Module Stats */}
                <div className="space-y-3 mb-4">
                  <div className="flex items-center justify-between text-xs">
                    <span className="flex items-center gap-1 text-muted-foreground">
                      <Clock className="w-3 h-3" />
                      {module.duration}
                    </span>
                    <span className="flex items-center gap-1 text-muted-foreground">
                      <Target className="w-3 h-3" />
                      {module.skills} skills
                    </span>
                  </div>
                  
                  {/* Tools */}
                  <div className="flex flex-wrap gap-1">
                    {module.tools.map((tool) => (
                      <Badge key={tool} variant="outline" className="text-xs py-0 px-2 border-border/50">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Key Outcomes */}
                <div className="space-y-2">
                  <h4 className="text-xs font-medium text-foreground">Key Outcomes:</h4>
                  <div className="space-y-1">
                    {module.outcomes.map((outcome) => (
                      <div key={outcome} className="flex items-center gap-2">
                        <CheckCircle className="w-3 h-3 text-accent flex-shrink-0" />
                        <span className="text-xs text-muted-foreground">{outcome}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Total Course Stats */}
        <div className="bg-gradient-hero rounded-2xl p-8 card-shadow">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">24</div>
              <div className="text-sm text-muted-foreground">Total Weeks</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-secondary mb-2">85+</div>
              <div className="text-sm text-muted-foreground">Skills Mastered</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-2">20+</div>
              <div className="text-sm text-muted-foreground">Tools Learned</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-glow mb-2">∞</div>
              <div className="text-sm text-muted-foreground">Possibilities</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Button size="lg" className="bg-gradient-primary hover:scale-105 smooth-transition text-lg px-8 py-6 shadow-primary">
            Begin Your Transformation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CourseStack;