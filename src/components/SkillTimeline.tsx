import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar, 
  Trophy, 
  Zap, 
  Target, 
  Rocket,
  CheckCircle2,
  ArrowRight
} from "lucide-react";

const SkillTimeline = () => {
  const phases = [
    {
      month: "Month 1-2",
      title: "Foundation Phase",
      subtitle: "Digital Literacy & Strategic Thinking",
      color: "primary",
      icon: Target,
      milestones: [
        "No-Code Tool Mastery",
        "Strategic Planning Framework",
        "First Live Website",
        "Basic Automation Setup"
      ],
      skills: ["Tool Selection", "Project Management", "Design Thinking", "Problem Solving"],
      outcome: "Digital Foundation Established"
    },
    {
      month: "Month 3-4",
      title: "Development Phase",
      subtitle: "Building & Creating",
      color: "secondary",
      icon: Rocket,
      milestones: [
        "Complex Web Applications",
        "Database Integration",
        "Mobile App Development",
        "API Connections"
      ],
      skills: ["Advanced Design", "Data Management", "Cross-Platform Development", "System Integration"],
      outcome: "Full-Stack No-Code Developer"
    },
    {
      month: "Month 5-6",
      title: "Mastery Phase",
      subtitle: "Automation & Scaling",
      color: "accent",
      icon: Zap,
      milestones: [
        "Advanced Automation",
        "AI Integration",
        "Security Implementation",
        "Business Scaling"
      ],
      skills: ["Workflow Automation", "AI Implementation", "Security Protocols", "Growth Strategies"],
      outcome: "No-Code Architect & Strategist"
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return {
          bg: 'bg-primary/10',
          border: 'border-primary/30',
          icon: 'bg-gradient-primary',
          badge: 'bg-primary/20 text-primary',
          line: 'bg-primary'
        };
      case 'secondary':
        return {
          bg: 'bg-secondary/10',
          border: 'border-secondary/30',
          icon: 'bg-secondary',
          badge: 'bg-secondary/20 text-secondary',
          line: 'bg-secondary'
        };
      case 'accent':
        return {
          bg: 'bg-accent/10',
          border: 'border-accent/30',
          icon: 'bg-accent',
          badge: 'bg-accent/20 text-accent',
          line: 'bg-accent'
        };
      default:
        return {
          bg: 'bg-primary/10',
          border: 'border-primary/30',
          icon: 'bg-gradient-primary',
          badge: 'bg-primary/20 text-primary',
          line: 'bg-primary'
        };
    }
  };

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-accent/30 bg-accent/10 text-accent">
            <Calendar className="w-4 h-4 mr-2" />
            Learning Journey
          </Badge>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Your <span className="text-gradient">Transformation</span> Timeline
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A structured 6-month journey from digital novice to no-code architect
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-primary transform md:-translate-x-0.5"></div>

          {/* Phase Cards */}
          <div className="space-y-12">
            {phases.map((phase, index) => {
              const colors = getColorClasses(phase.color);
              const Icon = phase.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div 
                  key={index} 
                  className={`relative flex items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 z-10">
                    <div className={`w-16 h-16 ${colors.icon} rounded-full flex items-center justify-center shadow-lg animate-glow-pulse`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className={`w-full md:w-5/12 ml-20 md:ml-0 ${isEven ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                    <Card className={`p-8 card-shadow border ${colors.border} ${colors.bg} hover:scale-105 smooth-transition animate-fade-in`}>
                      {/* Phase Header */}
                      <div className="flex items-center justify-between mb-4">
                        <Badge variant="outline" className={`${colors.badge} border-none`}>
                          {phase.month}
                        </Badge>
                        <Trophy className="w-5 h-5 text-muted-foreground" />
                      </div>

                      <h3 className="text-2xl font-bold text-foreground mb-2">{phase.title}</h3>
                      <p className="text-muted-foreground mb-6">{phase.subtitle}</p>

                      {/* Milestones */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-foreground mb-3">Key Milestones</h4>
                        <div className="space-y-2">
                          {phase.milestones.map((milestone, i) => (
                            <div key={i} className="flex items-center gap-3">
                              <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">{milestone}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Skills Grid */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-foreground mb-3">Skills Developed</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {phase.skills.map((skill, i) => (
                            <Badge key={i} variant="outline" className="text-xs py-1 border-border/50 justify-center">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Outcome */}
                      <div className={`p-4 rounded-lg ${colors.bg} border ${colors.border}`}>
                        <div className="flex items-center gap-2">
                          <Target className="w-4 h-4 text-foreground" />
                          <span className="text-sm font-medium text-foreground">Phase Outcome</span>
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">{phase.outcome}</p>
                      </div>
                    </Card>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Final Achievement */}
        <div className="mt-16 text-center">
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-primary blur-xl opacity-50 rounded-full"></div>
            <Card className="relative p-8 bg-gradient-hero border-primary/30 card-shadow">
              <Trophy className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-2">Certification Achievement</h3>
              <p className="text-muted-foreground mb-4">No-Code Architecture Mastery Certificate</p>
              <Badge variant="outline" className="bg-primary/20 text-primary border-primary/30">
                Digital Sovereignty Achieved
              </Badge>
            </Card>
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="mt-12 bg-gradient-hero rounded-xl p-6 card-shadow">
          <div className="flex items-center justify-between text-center">
            <div className="flex-1">
              <div className="text-2xl font-bold text-primary mb-1">0</div>
              <div className="text-xs text-muted-foreground">Starting Point</div>
            </div>
            <ArrowRight className="w-6 h-6 text-muted-foreground mx-4" />
            <div className="flex-1">
              <div className="text-2xl font-bold text-secondary mb-1">50%</div>
              <div className="text-xs text-muted-foreground">Competency</div>
            </div>
            <ArrowRight className="w-6 h-6 text-muted-foreground mx-4" />
            <div className="flex-1">
              <div className="text-2xl font-bold text-accent mb-1">100%</div>
              <div className="text-xs text-muted-foreground">Mastery</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillTimeline;