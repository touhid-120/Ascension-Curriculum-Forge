import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  BarChart3, 
  DollarSign, 
  Clock, 
  Users, 
  Rocket,
  TrendingUp,
  Target,
  Zap,
  Award,
  Globe
} from "lucide-react";

const OutcomeMetrics = () => {
  const performanceMetrics = [
    {
      title: "Skill Acquisition Rate",
      value: "300%",
      description: "Faster than traditional coding",
      icon: Zap,
      color: "primary",
      progress: 90
    },
    {
      title: "Project Completion Time",
      value: "75%",
      description: "Reduction in development time",
      icon: Clock,
      color: "secondary",
      progress: 75
    },
    {
      title: "Career Advancement",
      value: "250%",
      description: "Salary increase potential",
      icon: TrendingUp,
      color: "accent",
      progress: 85
    },
    {
      title: "Market Opportunity",
      value: "$50B+",
      description: "No-code market size by 2025",
      icon: DollarSign,
      color: "primary",
      progress: 95
    }
  ];

  const careerOutcomes = [
    {
      role: "No-Code Developer",
      salary: "$65,000 - $120,000",
      demand: "High",
      remote: "95%",
      growth: "+40%"
    },
    {
      role: "Automation Specialist",
      salary: "$70,000 - $130,000",
      demand: "Very High",
      remote: "90%",
      growth: "+55%"
    },
    {
      role: "Digital Product Manager",
      salary: "$80,000 - $150,000",
      demand: "High",
      remote: "85%",
      growth: "+35%"
    },
    {
      role: "No-Code Consultant",
      salary: "$80,000 - $200,000",
      demand: "Very High",
      remote: "100%",
      growth: "+60%"
    }
  ];

  const studentOutcomes = [
    {
      metric: "Course Completion",
      value: 92,
      benchmark: "Industry: 65%"
    },
    {
      metric: "Job Placement",
      value: 85,
      benchmark: "Industry: 60%"
    },
    {
      metric: "Salary Increase",
      value: 78,
      benchmark: "Average: 40%"
    },
    {
      metric: "Student Satisfaction",
      value: 96,
      benchmark: "Target: 90%"
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return {
          bg: 'bg-primary/10',
          text: 'text-primary',
          icon: 'bg-gradient-primary'
        };
      case 'secondary':
        return {
          bg: 'bg-secondary/10',
          text: 'text-secondary',
          icon: 'bg-secondary'
        };
      case 'accent':
        return {
          bg: 'bg-accent/10',
          text: 'text-accent',
          icon: 'bg-accent'
        };
      default:
        return {
          bg: 'bg-primary/10',
          text: 'text-primary',
          icon: 'bg-gradient-primary'
        };
    }
  };

  const getDemandColor = (demand: string) => {
    switch (demand) {
      case 'Very High':
        return 'bg-accent/20 text-accent border-accent/30';
      case 'High':
        return 'bg-primary/20 text-primary border-primary/30';
      default:
        return 'bg-secondary/20 text-secondary border-secondary/30';
    }
  };

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-accent/30 bg-accent/10 text-accent">
            <BarChart3 className="w-4 h-4 mr-2" />
            Impact Metrics
          </Badge>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Measurable <span className="text-gradient">Career Impact</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Data-driven outcomes that demonstrate the transformative power of no-code education
          </p>
        </div>

        {/* Performance Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {performanceMetrics.map((metric, index) => {
            const colors = getColorClasses(metric.color);
            const Icon = metric.icon;
            
            return (
              <Card 
                key={index} 
                className={`p-6 card-shadow border-border hover:scale-105 smooth-transition animate-fade-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 ${colors.icon} rounded-lg flex items-center justify-center`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <TrendingUp className="w-5 h-5 text-muted-foreground" />
                </div>
                
                <div className={`text-3xl font-bold ${colors.text} mb-2`}>{metric.value}</div>
                <h3 className="font-semibold text-foreground mb-2">{metric.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{metric.description}</p>
                
                <Progress value={metric.progress} className="h-2" />
              </Card>
            );
          })}
        </div>

        {/* Career Outcomes Table */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-foreground mb-8">Career Opportunities</h3>
          <Card className="p-8 card-shadow">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-4 px-4 font-semibold text-foreground">Role</th>
                    <th className="text-left py-4 px-4 font-semibold text-foreground">Salary Range</th>
                    <th className="text-left py-4 px-4 font-semibold text-foreground">Market Demand</th>
                    <th className="text-left py-4 px-4 font-semibold text-foreground">Remote Work</th>
                    <th className="text-left py-4 px-4 font-semibold text-foreground">Growth Rate</th>
                  </tr>
                </thead>
                <tbody>
                  {careerOutcomes.map((outcome, index) => (
                    <tr key={index} className="border-b border-border/50">
                      <td className="py-4 px-4">
                        <div className="font-medium text-foreground">{outcome.role}</div>
                      </td>
                      <td className="py-4 px-4">
                        <div className="text-muted-foreground">{outcome.salary}</div>
                      </td>
                      <td className="py-4 px-4">
                        <Badge variant="outline" className={getDemandColor(outcome.demand)}>
                          {outcome.demand}
                        </Badge>
                      </td>
                      <td className="py-4 px-4">
                        <div className="text-muted-foreground">{outcome.remote}</div>
                      </td>
                      <td className="py-4 px-4">
                        <div className="text-accent font-medium">{outcome.growth}</div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>

        {/* Student Success Metrics */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="p-8 card-shadow">
            <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
              <Award className="w-6 h-6 text-primary" />
              Student Success Rates
            </h3>
            <div className="space-y-6">
              {studentOutcomes.map((outcome, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-foreground">{outcome.metric}</span>
                    <span className="text-sm text-muted-foreground">{outcome.benchmark}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Progress value={outcome.value} className="flex-1 h-3" />
                    <span className="text-sm font-semibold text-primary min-w-[3rem]">{outcome.value}%</span>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-8 card-shadow bg-gradient-hero border-primary/30">
            <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
              <Globe className="w-6 h-6 text-secondary" />
              Global Impact
            </h3>
            <div className="space-y-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">500+</div>
                <div className="text-sm text-muted-foreground">Students Transformed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-secondary mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Countries Reached</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">$2M+</div>
                <div className="text-sm text-muted-foreground">Student Revenue Generated</div>
              </div>
            </div>
          </Card>
        </div>

        {/* ROI Calculator */}
        <Card className="p-8 card-shadow bg-gradient-primary text-primary-foreground">
          <div className="text-center">
            <Target className="w-12 h-12 mx-auto mb-4 opacity-90" />
            <h3 className="text-2xl font-bold mb-4">Investment Return Calculator</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div>
                <div className="text-3xl font-bold mb-2">6 Months</div>
                <div className="text-sm opacity-90">Course Duration</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">300%</div>
                <div className="text-sm opacity-90">Skill Acceleration</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">$50K+</div>
                <div className="text-sm opacity-90">Average Salary Boost</div>
              </div>
            </div>
            <p className="mt-6 text-sm opacity-90 max-w-2xl mx-auto">
              Based on industry data and graduate surveys. Individual results may vary depending on effort, 
              prior experience, and market conditions.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default OutcomeMetrics;