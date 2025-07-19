import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Code, Zap, Target, Users } from "lucide-react";

const CurriculumHeader = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
      
      {/* Hero Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Status Badge */}
        <Badge variant="outline" className="mb-8 px-6 py-2 border-primary/30 bg-primary/10 text-primary-glow animate-glow-pulse">
          <Zap className="w-4 h-4 mr-2" />
          Digital Sovereignty Protocol v2.0
        </Badge>

        {/* Main Title */}
        <h1 className="text-6xl md:text-8xl font-display font-black mb-6 tracking-tight">
          <span className="text-gradient">NO-CODE</span>
          <br />
          <span className="text-foreground">MASTERY</span>
          <br />
          <span className="text-secondary">CURRICULUM</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-8 leading-relaxed">
          Transform Your Digital Future Through Strategic No-Code Education. 
          <span className="text-primary font-semibold"> Build. Automate. Scale. Dominate.</span>
        </p>

        {/* Key Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
          <div className="card-shadow bg-card border border-border rounded-xl p-6 smooth-transition hover:scale-105">
            <Code className="w-8 h-8 text-primary mx-auto mb-2" />
            <div className="text-2xl font-bold text-foreground">12</div>
            <div className="text-sm text-muted-foreground">Core Modules</div>
          </div>
          <div className="card-shadow bg-card border border-border rounded-xl p-6 smooth-transition hover:scale-105">
            <Target className="w-8 h-8 text-secondary mx-auto mb-2" />
            <div className="text-2xl font-bold text-foreground">50+</div>
            <div className="text-sm text-muted-foreground">Skills Mastered</div>
          </div>
          <div className="card-shadow bg-card border border-border rounded-xl p-6 smooth-transition hover:scale-105">
            <Zap className="w-8 h-8 text-accent mx-auto mb-2" />
            <div className="text-2xl font-bold text-foreground">6</div>
            <div className="text-sm text-muted-foreground">Months Journey</div>
          </div>
          <div className="card-shadow bg-card border border-border rounded-xl p-6 smooth-transition hover:scale-105">
            <Users className="w-8 h-8 text-primary-glow mx-auto mb-2" />
            <div className="text-2xl font-bold text-foreground">∞</div>
            <div className="text-sm text-muted-foreground">Career Paths</div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-gradient-primary hover:scale-105 smooth-transition text-lg px-8 py-6 shadow-primary">
            Explore Curriculum
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-primary/30 hover:bg-primary/10">
            Download PDF
          </Button>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-primary/10 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-secondary/10 rounded-full blur-xl animate-float" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/2 left-10 w-24 h-24 bg-accent/10 rounded-full blur-xl animate-float" style={{animationDelay: '2s'}}></div>
    </div>
  );
};

export default CurriculumHeader;