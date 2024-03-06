import { Figma, Github, Linkedin } from "lucide-react";
import { ExperienceDetails, ProjectDetails, TechDetails } from "./types";

import LogoJavascript from "/public/images/logos/icon-javascript.svg";
import LogoTypescript from "/public/images/logos/icon-typescript.svg";
import LogoReact from "/public/images/logos/icon-reactjs.svg";
import LogoNextjs from "/public/images/logos/icon-nextjs.svg";
import LogoReactnative from "/public/images/logos/icon-reactnative.svg";
import LogoRedux from "/public/images/logos/icon-redux.svg";
import LogoJest from "/public/images/logos/icon-jest.svg";
import LogoGit from "/public/images/logos/icon-git.svg";
import LogoHtml from "/public/images/logos/icon-html.svg";
import LogoCss from "/public/images/logos/icon-css.svg";
import LogoSass from "/public/images/logos/icon-sass.svg";
import LogoBootstrap from "/public/images/logos/icon-bootstrap.svg";
import LogoTailwindcss from "/public/images/logos/icon-tailwindcss.svg";
import LogoMongodb from "/public/images/logos/icon-mongodb.svg";
import LogoPostgresql from "/public/images/logos/icon-postgresql.svg";
import LogoFigma from "/public/images/logos/icon-figma.svg";

import CompanyCrd from "/public/images/company-crd.png";
import CompanyOphir from "/public/images/company-ophir.png";
import CompanyEnesis from "/public/images/company-enesis.png";

import ProjectSocialgram from "/public/images/project-socialgram.png";
import ProjectMovie from "/public/images/project-movie.png";
import ProjectAdmin from "/public/images/project-admin.png";

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

export const EXTERNAL_LINKS = {
  GITHUB: "https://github.com/fudi-mahfudin",
  GITHUB_REPO: "https://github.com/fudi-mahfudin/mahfudin.dev",
  FIGMA: "https://www.figma.com/@fudi-mahfudin",
};

export const SOCIAL_LINKS = [
  { icon: Github, url: "https://github.com/fudi-mahfudin" },
  { icon: Linkedin, url: "https://github.com/fudi-mahfudin" },
  { icon: Figma, url: "https://github.com/fudi-mahfudin" },
];

export const TECHNOLOGIES: TechDetails[] = [
  {
    label: "JavaScript",
    logo: LogoJavascript,
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    label: "TypeScript",
    logo: LogoTypescript,
    url: "https://www.typescriptlang.org",
  },
  {
    label: "React",
    logo: LogoReact,
    url: "https://react.dev",
  },
  {
    label: "Next.js",
    logo: LogoNextjs,
    url: "https://nextjs.org",
  },
  {
    label: "React Native",
    logo: LogoReactnative,
    url: "https://reactnative.dev",
  },
  {
    label: "Redux",
    logo: LogoRedux,
    url: "https://react-redux.js.org",
  },
  {
    label: "Jest",
    logo: LogoJest,
    url: "https://jestjs.io",
  },
  {
    label: "Git",
    logo: LogoGit,
    url: "https://git-scm.com",
  },
  {
    label: "HTML",
    logo: LogoHtml,
    url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    label: "CSS",
    logo: LogoCss,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    label: "Sass/Scss",
    logo: LogoSass,
    url: "https://sass-lang.com",
  },
  {
    label: "Bootstrap",
    logo: LogoBootstrap,
    url: "https://getbootstrap.com",
  },
  {
    label: "Tailwindcss",
    logo: LogoTailwindcss,
    url: "https://tailwindcss.com",
  },
  {
    label: "MongoDB",
    logo: LogoMongodb,
    url: "https://www.mongodb.com",
  },
  {
    label: "PostgreSQL",
    logo: LogoPostgresql,
    url: "https://www.postgresql.org",
  },
  {
    label: "Figma",
    logo: LogoFigma,
    url: "https://www.figma.com",
  },
];

export const EXPERIENCES: ExperienceDetails[] = [
  {
    logo: CompanyCrd,
    company: "Corporate Room Deal (MG Holiday Group)",
    position: "Software Engineer",
    startDate: new Date(2019, 10),
    endDate: new Date(2023, 3),
    summary: [
      "Managed CRD system for hotel searchign and booking used by more than 1000 companies.",
      "Managed micro-services system, namely adding new feature, bug-fix and optimization.",
      "Led the efforts to make responsive interface.",
      "Contributed in system migration using Phased migration strategy.",
    ],
    technologies: [
      "NodeJS",
      "ReactJS",
      "Javascript",
      "HTML",
      "CSS",
      "Material UI",
      "Bootstrap",
      "MongoDB",
    ],
  },
  {
    logo: CompanyOphir,
    company: "Ophir Indonesia",
    position: "Software Developer",
    startDate: new Date(2018, 11),
    endDate: new Date(2019, 10),
    summary: [
      "Developed Inspection report system for generating reports with multi-level approval.",
      "Identified system requirements.",
      "Designed the system, namely UI, database, and technology.",
      "Built a web application and tested using end-to-end.",
      "Deployed system to server.",
    ],
    technologies: [
      "PHP",
      "Laravel",
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap",
      "SQL Server",
    ],
  },
  {
    logo: CompanyEnesis,
    company: "Enesis Group",
    position: "Software Developer Intern",
    startDate: new Date(2018, 11),
    endDate: new Date(2018, 6),
    summary: [
      "Developed Employee assessment system for 360-degree reviewing using by more than  500 employees.",
      "Designed the system, namely UI, database, and technology.",
      "Built a web application and tested using end-to-end.",
      "Deployed system to server.",
    ],
    technologies: [
      "PHP",
      "Laravel",
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap",
      "PostgreSQL",
    ],
  },
];

export const PROJECTS: ProjectDetails[] = [
  {
    name: "Socialgram",
    description:
      "A web application using ReactJS to share photos, like the posts and follow each other, a kind of mini Instagram.",
    url: "https://socialgram-fudi.vercel.app",
    previewImage: ProjectSocialgram,
    technologies: [
      "React",
      "TypeScript",
      "Tailwindcss",
      "React Query",
      "Shadcn/ui",
      "Zod",
      "Dropzone",
    ],
  },
  {
    name: "MovieDB",
    description:
      "A mobile application using React Native to fetch and search the latest movies in the world from TMDB (third-party API).",
    url: "https://github.com/fudi-mahfudin/movie-mobile",
    previewImage: ProjectMovie,
    technologies: [
      "React Native",
      "Expo",
      "TypeScript",
      "Tailwindcss",
      "React Navigation",
    ],
  },
  {
    name: "Admin Dashboard",
    description: `This is a React with Refine framework of an enterprise-grade internal tool example for "CRM Dashboard".`,
    url: "https://admin-refine.vercel.app",
    previewImage: ProjectAdmin,
    technologies: ["React", "Refine", "TypeScript", "Ant Design", "GraphQL"],
  },
];
