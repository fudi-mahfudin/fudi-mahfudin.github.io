import { StaticImageData } from "next/image";

export type TechDetails = {
  logo: string | StaticImageData;
  darkModeLogo?: string | StaticImageData;
  label: string;
  url: string;
};

export type ExperienceDetails = {
  company: string;
  logo: string | StaticImageData;
  darkModeLogo?: string | StaticImageData;
  position: string;
  currentlyWorkHere?: boolean;
  startDate: Date;
  endDate?: Date;
  summary: string[];
  technologies?: string[];
};

export type ProjectDetails = {
  name: string;
  description: string;
  url?: string;
  githubUrl?: string;
  previewImage: string | StaticImageData;
  technologies?: string[];
};
