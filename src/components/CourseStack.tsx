import { Card } from "@/components/ui/card";

const modules = [
  {
    title: "Foundation",
    description: "No-code fundamentals and mindset",
    duration: "2 weeks"
  },
  {
    title: "Webflow Mastery",
    description: "Visual web development",
    duration: "3 weeks"
  },
  {
    title: "Bubble Development",
    description: "Full-stack app creation",
    duration: "4 weeks"
  },
  {
    title: "Automation",
    description: "Zapier & workflow optimization",
    duration: "2 weeks"
  }
];

export function CourseStack() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">Course Stack</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {modules.map((module, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-3">{module.title}</h3>
              <p className="text-muted-foreground mb-4">{module.description}</p>
              <span className="text-sm text-primary">{module.duration}</span>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}