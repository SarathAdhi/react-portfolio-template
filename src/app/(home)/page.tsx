import { client } from "@sanity/lib/client";
import { EducationType } from "types/education";
import { ProjectType } from "types/project";
import ContactSection from "./_components/contact-section";
import EducationSection from "./_components/education-section";
import LandingSection from "./_components/landing-section";
import ProjectsSection from "./_components/projects-section";
import RandomQuotesSection from "./_components/random-quotes-section";
import SkillsSection from "./_components/skills-section";

export default async function Home() {
  const projectQuery = `*[_type == "projects"] | order(finishedAt desc)`;

  const educationQuery = `*[_type == "education"] | order(start desc){
    name,
    image,
    description,
    start,
    end
  }`;

  const skillsQuery = `*[_type == "skills"]{
    name,
    image
  }`;

  const resumeQuery = `*[_type == "resume"][0]{
    "documentUrl": document.asset->url
  }`;

  const { projects, resume, educationHistory, skills } = await client.fetch<{
    projects: ProjectType[];
    resume: { documentUrl: string };
    educationHistory: EducationType[];
    skills: SkillType[];
  }>(
    `
    {
      "projects": ${projectQuery},
      "resume": ${resumeQuery},
      "educationHistory": ${educationQuery},
      "skills": ${skillsQuery},
    }
  `
  );

  return (
    <>
      <LandingSection resumeUrl={resume.documentUrl} />

      <EducationSection educationHistory={educationHistory} />

      <SkillsSection skills={skills} />

      <ProjectsSection projects={projects} />

      <RandomQuotesSection />

      <ContactSection />
    </>
  );
}
