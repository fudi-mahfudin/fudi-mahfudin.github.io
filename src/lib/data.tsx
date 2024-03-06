import { Figma, Github, Linkedin } from "lucide-react";

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

export const TECHNOLOGIES = [
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
  { label: "React", logo: LogoReact, url: "https://react.dev" },
  { label: "Next.js", logo: LogoNextjs, url: "https://nextjs.org" },
  { label: "React Native", logo: LogoReactnative, url: "https://nextjs.org" },
  { label: "Redux", logo: LogoRedux, url: "https://nextjs.org" },
  { label: "Jest", logo: LogoJest, url: "https://nextjs.org" },
  { label: "Git", logo: LogoGit, url: "https://nextjs.org" },
  { label: "HTML", logo: LogoHtml, url: "https://nextjs.org" },
  { label: "CSS", logo: LogoCss, url: "https://nextjs.org" },
  { label: "Scss", logo: LogoSass, url: "https://nextjs.org" },
  { label: "Bootstrap", logo: LogoBootstrap, url: "https://nextjs.org" },
  { label: "Tailwindcss", logo: LogoTailwindcss, url: "https://nextjs.org" },
  { label: "MongoDB", logo: LogoMongodb, url: "https://nextjs.org" },
  { label: "PostgreSQL", logo: LogoPostgresql, url: "https://nextjs.org" },
  { label: "Figma", logo: LogoFigma, url: "https://nextjs.org" },
];
