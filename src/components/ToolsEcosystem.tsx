import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  Database, 
  Workflow, 
  Smartphone, 
  Globe, 
  Bot, 
  Shield, 
  TrendingUp,
  Star,
  Zap
} from "lucide-react";

const ToolsEcosystem = () => {
  const toolCategories = [
    {
      category: "Visual Development",
      icon: Globe,
      color: "primary",
      description: "Build stunning websites and web apps",
      tools: [
        { name: "Webflow", level: "Advanced", rating: 5, specialty: "Professional websites" },
        { name: "Framer", level: "Intermediate", rating: 4, specialty: "Interactive prototypes" },
        { name: "Figma", level: "Essential", rating: 5, specialty: "Design collaboration" }
      ]
    },
    {
      category: "App Development",
      icon: Smartphone,
      color: "secondary",
      description: "Create native mobile applications",
      tools: [
        { name: "FlutterFlow", level: "Advanced", rating: 5, specialty: "Native iOS/Android" },
        { name: "Adalo", level: "Beginner", rating: 4, specialty: "Quick prototypes" },
        { name: "Glide", level: "Intermediate", rating: 4, specialty: "Data-driven apps" }
      ]
    },
    {
      category: "Backend & Database",
      icon: Database,
      color: "accent",
      description: "Manage data and server logic",
      tools: [
        { name: "Bubble", level: "Advanced", rating: 5, specialty: "Full-stack apps" },
        { name: "Supabase", level: "Intermediate", rating: 5, specialty: "Open-source backend" },
        { name: "Airtable", level: "Essential", rating: 4, specialty: "Database management" }
      ]
    },
    {
      category: "Automation",
      icon: Workflow,
      color: "primary",
      description: "Automate workflows and processes",
      tools: [
        { name: "Zapier", level: "Essential", rating: 5, specialty: "App integrations" },
        { name: "Make", level: "Advanced", rating: 5, specialty: "Complex workflows" },
        { name: "n8n", level: "Advanced", rating: 4, specialty: "Self-hosted automation" }
      ]
    },
    {
      category: "AI & Intelligence",
      icon: Bot,
      color: "secondary",
      description: "Integrate artificial intelligence",
      tools: [
        { name: "OpenAI API", level: "Advanced", rating: 5, specialty: "Language models" },
        { name: "ChatGPT", level: "Essential", rating: 5, specialty: "Conversational AI" },
        { name: "Claude", level: "Intermediate", rating: 4, specialty: "Advanced reasoning" }
      ]
    },
    {
      category: "Business Tools",
      icon: TrendingUp,
      color: "accent",
      description: "Scale and monetize your solutions",
      tools: [
        { name: "Stripe", level: "Essential", rating: 5, specialty: "Payment processing" },
        { name: "ConvertKit", level: "Intermediate", rating: 4, specialty: "Email marketing" },
        { name: "Gumroad", level: "Beginner", rating: 4, specialty: "Digital products" }
      ]
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

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Essential':
        return 'bg-accent/20 text-accent border-accent/30';
      case 'Beginner':
        return 'bg-muted-foreground/20 text-muted-foreground border-muted-foreground/30';
      case 'Intermediate':
        return 'bg-secondary/20 text-secondary border-secondary/30';
      case 'Advanced':
        return 'bg-primary/20 text-primary border-primary/30';
      default:
        return 'bg-muted-foreground/20 text-muted-foreground border-muted-foreground/30';
    }
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`w-3 h-3 ${i < rating ? 'text-yellow-400 fill-current' : 'text-muted-foreground'}`} 
      />
    ));
  };

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-secondary/30 bg-secondary/10 text-secondary">
            <Code className="w-4 h-4 mr-2" />
            Tools Ecosystem
          </Badge>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Master the <span className="text-gradient">No-Code Stack</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            20+ professional tools across 6 categories. From design to deployment, automation to AI.
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {toolCategories.map((category, index) => {
            const colors = getColorClasses(category.color);
            const Icon = category.icon;
            
            return (
              <Card 
                key={index} 
                className={`p-6 card-shadow border ${colors.border} ${colors.bg} hover:scale-105 smooth-transition animate-fade-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-12 h-12 ${colors.icon} rounded-lg flex items-center justify-center`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground">{category.category}</h3>
                    <p className="text-sm text-muted-foreground">{category.description}</p>
                  </div>
                </div>

                {/* Tools List */}
                <div className="space-y-4">
                  {category.tools.map((tool, toolIndex) => (
                    <div key={toolIndex} className="p-4 bg-background/50 rounded-lg border border-border/50">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-foreground">{tool.name}</h4>
                        <Badge variant="outline" className={`text-xs ${getLevelColor(tool.level)}`}>
                          {tool.level}
                        </Badge>
                      </div>
                      
                      <p className="text-xs text-muted-foreground mb-2">{tool.specialty}</p>
                      
                      <div className="flex items-center gap-1">
                        {renderStars(tool.rating)}
                        <span className="text-xs text-muted-foreground ml-2">{tool.rating}/5</span>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>

        {/* Tool Mastery Levels */}
        <div className="bg-gradient-hero rounded-2xl p-8 card-shadow mb-12">
          <h3 className="text-2xl font-bold text-center text-foreground mb-8">Mastery Progression</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-muted-foreground/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-muted-foreground">1</span>
              </div>
              <h4 className="font-semibold text-foreground mb-2">Essential</h4>
              <p className="text-sm text-muted-foreground">Must-know tools for any no-coder</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-muted-foreground/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-muted-foreground">2</span>
              </div>
              <h4 className="font-semibold text-foreground mb-2">Beginner</h4>
              <p className="text-sm text-muted-foreground">Easy to learn, quick results</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-secondary">3</span>
              </div>
              <h4 className="font-semibold text-foreground mb-2">Intermediate</h4>
              <p className="text-sm text-muted-foreground">Professional capabilities</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-primary">4</span>
              </div>
              <h4 className="font-semibold text-foreground mb-2">Advanced</h4>
              <p className="text-sm text-muted-foreground">Expert-level mastery</p>
            </div>
          </div>
        </div>

        {/* Integration Showcase */}
        <div className="text-center">
          <Card className="p-8 bg-gradient-hero card-shadow border-primary/30">
            <Zap className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-foreground mb-4">Integrated Workflow Mastery</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Learn not just individual tools, but how to combine them into powerful, automated systems 
              that solve real business problems and generate revenue.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ToolsEcosystem;