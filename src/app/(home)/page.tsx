import {
  getEducationHistory,
  getProjects,
  getResume,
  getSkills,
} from "@sanity/lib/api";
import ContactSection from "./_components/ContactSection";
import EducationSection from "./_components/EducationSection";
import LandingSection from "./_components/LandingSection";
import ProjectsSection from "./_components/ProjectsSection";
import SkillsSection from "./_components/SkillsSection";

export default async function Home() {
  const [projects, resume, educationHistory, skills] = await Promise.all([
    getProjects(),
    getResume(),
    getEducationHistory(),
    getSkills(),
  ]);

  return (
    <>
      <LandingSection resumeUrl={resume.documentUrl} />

      <EducationSection educationHistory={educationHistory} />

      <SkillsSection skills={skills} />

      <ProjectsSection projects={projects} />

      <ContactSection />
    </>
  );
}
