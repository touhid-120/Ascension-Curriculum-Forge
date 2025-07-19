import { Progress } from "@/components/ui/progress";

const skills = [
  { skill: "Visual Design", progress: 90 },
  { skill: "App Development", progress: 85 },
  { skill: "Automation", progress: 80 },
  { skill: "Database Management", progress: 75 }
];

export function SkillTimeline() {
  return (
    <section className="py-20 bg-card/30">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">Skill Mastery Timeline</h2>
        <div className="max-w-2xl mx-auto space-y-8">
          {skills.map((item, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between">
                <span className="font-medium">{item.skill}</span>
                <span className="text-sm text-muted-foreground">{item.progress}%</span>
              </div>
              <Progress value={item.progress} className="h-2" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}