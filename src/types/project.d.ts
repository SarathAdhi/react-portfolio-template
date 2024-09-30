import { Image } from "sanity";

interface ProjectType {
  key: string;
  starred: boolean;
  title: string;
  overview: string;
  image: Image;
  techstack: {
    name: string;
    image: string;
  }[];
  github: string;
  demo: string;
  finishedAt: string;
}
