import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  User, 
  Mail, 
  Globe, 
  Linkedin, 
  Twitter,
  Rocket,
  Download,
  Calendar,
  Shield
} from "lucide-react";
import profileImage from "@/assets/touhidul-islam-profile.png";

const CurriculumFooter = () => {
  return (
    <footer className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Call to Action Section */}
        <div className="text-center mb-16">
          <Card className="p-12 bg-gradient-hero card-shadow border-primary/30">
            <Rocket className="w-16 h-16 text-primary mx-auto mb-6 animate-float" />
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-foreground">
              Ready to Begin Your <span className="text-gradient">Digital Transformation</span>?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Join the revolution of digital creators who are building the future without traditional coding barriers.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" className="bg-gradient-primary hover:scale-105 smooth-transition text-lg px-8 py-6 shadow-primary">
                <Calendar className="w-5 h-5 mr-2" />
                Start Your Journey
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-primary/30 hover:bg-primary/10">
                <Download className="w-5 h-5 mr-2" />
                Download Curriculum
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-accent" />
                <span>Industry Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-primary" />
                <span>500+ Graduates</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-secondary" />
                <span>Global Recognition</span>
              </div>
            </div>
          </Card>
        </div>

        {/* Creator Section */}
        <div className="mb-12">
          <Card className="p-8 card-shadow">
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Creator Avatar & Info */}
              <div className="flex-shrink-0">
                <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-primary/30">
                  <img 
                    src={profileImage} 
                    alt="Md. Touhidul Islam" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="flex-grow text-center md:text-left">
                <h3 className="text-2xl font-bold text-foreground mb-2">Md. Touhidul Islam</h3>
                <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-4">
                  <Badge variant="outline" className="bg-primary/20 text-primary border-primary/30">
                    Architect of the Ascension Protocol
                  </Badge>
                  <Badge variant="outline" className="bg-secondary/20 text-secondary border-secondary/30">
                    Digital Sovereignty Strategist
                  </Badge>
                </div>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Visionary educator and digital transformation expert who has empowered hundreds of individuals 
                  to break free from traditional coding barriers and build their digital future.
                </p>
                
                {/* Social Links */}
                <div className="flex justify-center md:justify-start gap-4">
                  <Button variant="outline" size="sm" className="w-10 h-10 p-0">
                    <Mail className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="sm" className="w-10 h-10 p-0">
                    <Linkedin className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="sm" className="w-10 h-10 p-0">
                    <Twitter className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="sm" className="w-10 h-10 p-0">
                    <Globe className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Mission Statement */}
        <div className="text-center mb-12">
          <Card className="p-8 bg-gradient-accent text-accent-foreground card-shadow">
            <h3 className="text-xl font-bold mb-4">Our Mission</h3>
            <p className="text-sm leading-relaxed max-w-3xl mx-auto">
              To democratize technology creation and empower individuals worldwide to build, automate, and scale 
              digital solutions without traditional programming barriers. We believe that everyone deserves the 
              tools and knowledge to participate in the digital economy as creators, not just consumers.
            </p>
          </Card>
        </div>

        {/* Legal & Copyright */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <div>
              <p>&copy; 2024 No-Code Mastery Curriculum. All rights reserved.</p>
              <p className="mt-1">Designed & Strategized by Md. Touhidul Islam</p>
            </div>
            
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary smooth-transition">Privacy Policy</a>
              <a href="#" className="hover:text-primary smooth-transition">Terms of Service</a>
              <a href="#" className="hover:text-primary smooth-transition">Contact</a>
            </div>
          </div>
        </div>

        {/* Final Quote */}
        <div className="text-center mt-12 pt-8 border-t border-border">
          <blockquote className="text-lg italic text-muted-foreground max-w-2xl mx-auto">
            "The future belongs to those who can adapt, create, and scale without limits. 
            No-code is not just a skill—it's digital sovereignty."
          </blockquote>
          <div className="mt-4">
            <div className="w-16 h-0.5 bg-gradient-primary mx-auto"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default CurriculumFooter;