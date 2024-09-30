import { EducationType } from "types/education";
import { ProjectType } from "types/project";
import { client } from "./client";

export const getProjects = async () => {
  const projectQuery = `*[_type == "projects"] | order(finishedAt desc)`;

  const projects = await client.fetch<ProjectType[]>(projectQuery);

  return projects;
};

export const getResume = async () => {
  const resumeQuery = `*[_type == "resume"][0]{
    "documentUrl": document.asset->url
  }`;

  const resume = await client.fetch<{ documentUrl: string }>(resumeQuery);

  return resume;
};

export const getEducationHistory = async () => {
  const educationQuery = `*[_type == "education"] | order(start desc){
    name,
    image,
    description,
    start,
    end
  }`;

  const educationHistory = await client.fetch<EducationType[]>(educationQuery);

  return educationHistory;
};

export const getSkills = async () => {
  const skillsQuery = `*[_type == "skills"]{
    name,
    image
  }`;

  const skills = await client.fetch<SkillType[]>(skillsQuery);

  return skills;
};
