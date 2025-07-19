import { CurriculumHeader } from "@/components/CurriculumHeader";
import { CourseManifesto } from "@/components/CourseManifesto";
import { CourseStack } from "@/components/CourseStack";
import { SkillTimeline } from "@/components/SkillTimeline";
import { ToolsEcosystem } from "@/components/ToolsEcosystem";
import { OutcomeMetrics } from "@/components/OutcomeMetrics";
import { CurriculumFooter } from "@/components/CurriculumFooter";

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <CurriculumHeader />
      <CourseManifesto />
      <CourseStack />
      <SkillTimeline />
      <ToolsEcosystem />
      <OutcomeMetrics />
      <CurriculumFooter />
    </div>
  );
}