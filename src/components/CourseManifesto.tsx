import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Rocket, Brain, Globe, Zap } from "lucide-react";

const CourseManifesto = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-accent/30 bg-accent/10 text-accent">
            <Brain className="w-4 h-4 mr-2" />
            Course Manifesto
          </Badge>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            The <span className="text-gradient">Digital Revolution</span> Starts Here
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            This isn't just education—it's transformation. We're building the architects of tomorrow's digital landscape.
          </p>
        </div>

        {/* Core Principles Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="p-8 card-shadow border-border hover:border-primary/30 smooth-transition group">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:scale-110 smooth-transition">
                <Rocket className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">Mission Statement</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Empower individuals to build, automate, and scale digital solutions without traditional coding barriers. 
                  Transform students into digital sovereigns who own their technological destiny.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-8 card-shadow border-border hover:border-secondary/30 smooth-transition group">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center group-hover:scale-110 smooth-transition">
                <Globe className="w-6 h-6 text-accent-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">Vision 2030</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Create a generation of no-code entrepreneurs and digital creators who can rapidly prototype, 
                  validate, and scale ideas in the modern economy.
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Core Values */}
        <div className="bg-gradient-hero rounded-2xl p-8 md:p-12 card-shadow">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-display font-bold mb-4 text-foreground">Core Educational Values</h3>
            <p className="text-muted-foreground">The principles that drive our curriculum design</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center group">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/30 smooth-transition">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Practical Over Theoretical</h4>
              <p className="text-sm text-muted-foreground">
                Every lesson builds real applications. Theory serves practice, not the other way around.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary/30 smooth-transition">
                <Brain className="w-8 h-8 text-secondary" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Strategic Thinking</h4>
              <p className="text-sm text-muted-foreground">
                Learn not just tools, but when and why to use them for maximum business impact.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/30 smooth-transition">
                <Rocket className="w-8 h-8 text-accent" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Future-Ready Skills</h4>
              <p className="text-sm text-muted-foreground">
                Master emerging technologies and trends that will dominate the next decade.
              </p>
            </div>
          </div>
        </div>

        {/* Impact Statement */}
        <div className="mt-16 text-center">
          <blockquote className="text-2xl md:text-3xl font-medium text-foreground leading-relaxed max-w-4xl mx-auto">
            "We're not just teaching no-code tools—we're cultivating digital architects who will reshape how 
            humanity interacts with technology."
          </blockquote>
          <div className="mt-8 flex items-center justify-center gap-4">
            <div className="w-12 h-0.5 bg-gradient-primary"></div>
            <p className="text-muted-foreground font-medium">Md. Touhidul Islam</p>
            <div className="w-12 h-0.5 bg-gradient-primary"></div>
          </div>
          <p className="text-sm text-muted-foreground mt-2">Architect of the Ascension Protocol</p>
        </div>
      </div>
    </section>
  );
};

export default CourseManifesto;