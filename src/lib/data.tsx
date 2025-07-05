import { Figma, Github, Linkedin } from 'lucide-react';
import { ExperienceDetails, ProjectDetails, TechDetails } from './types';

import LogoJavascript from '/public/images/logos/icon-javascript.svg';
import LogoTypescript from '/public/images/logos/icon-typescript.svg';
import LogoReact from '/public/images/logos/icon-reactjs.svg';
import LogoNextjs from '/public/images/logos/icon-nextjs.svg';
import LogoReactnative from '/public/images/logos/icon-reactnative.svg';
import LogoRedux from '/public/images/logos/icon-redux.svg';
import LogoJest from '/public/images/logos/icon-jest.svg';
import LogoGit from '/public/images/logos/icon-git.svg';
import LogoHtml from '/public/images/logos/icon-html.svg';
import LogoCss from '/public/images/logos/icon-css.svg';
import LogoSass from '/public/images/logos/icon-sass.svg';
import LogoBootstrap from '/public/images/logos/icon-bootstrap.svg';
import LogoTailwindcss from '/public/images/logos/icon-tailwindcss.svg';
import LogoPhp from '/public/images/logos/icon-php.svg';
import LogoLaravel from '/public/images/logos/icon-laravel.svg';
import LogoCopilot from '/public/images/logos/icon-copilot.svg';
import LogoMongodb from '/public/images/logos/icon-mongodb.svg';
import LogoPostgresql from '/public/images/logos/icon-postgresql.svg';
import LogoFigma from '/public/images/logos/icon-figma.svg';
import LogoPrisma from '/public/images/logos/icon-prisma.svg';
import LogoShadcn from '/public/images/logos/icon-shadcn.svg';
import LogoZod from '/public/images/logos/icon-zod.svg';

import CompanyCrd from '/public/images/company-crd.png';
import CompanyOphir from '/public/images/company-ophir.png';
import CompanyEnesis from '/public/images/company-enesis.png';
import CompanyJuke from '/public/images/company-juke.jpeg';

import ProjectPetsoft from '/public/images/project-petsoft.png';
import ProjectMovie from '/public/images/project-movie.png';
import ProjectAdmin from '/public/images/project-admin.png';

export const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Work', href: '#work' },
  { label: 'Contact', href: '#contact' },
];

export const CV_URL =
  'https://drive.google.com/file/d/1r6o60UGqWqmixusSzOvdxU1vRBLOrJQE/view';

export const HERO = {
  title: "Hi, I'm Fudi",
  description:
    'A results-oriented Developer experienced in building and optimizing user-centric web applications. Expertise in translating UI/UX design into pixel-perfect, high-quality, reusable code. A collaborative team proficient in modern technology stacks including Next.js, React Native, and Laravel, leveraging AI tools to optimize code and accelerate development workflows.',
  location: 'Jakarta, ID',
  available: true,
};

export const EXTERNAL_LINKS = {
  GITHUB: 'https://github.com/fudi-mahfudin',
  GITHUB_REPO: 'https://github.com/fudi-mahfudin/fudi-mahfudin.github.io',
  FIGMA: 'https://www.figma.com/@mahfudin',
};

export const SOCIAL_LINKS = [
  { icon: Github, url: 'https://github.com/fudi-mahfudin' },
  { icon: Linkedin, url: 'https://linkedin.com/in/fudi-mahfudin' },
  { icon: Figma, url: 'https://www.figma.com/@mahfudin' },
];

export const TECHNOLOGIES: TechDetails[] = [
  {
    label: 'JavaScript',
    logo: LogoJavascript,
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  {
    label: 'TypeScript',
    logo: LogoTypescript,
    url: 'https://www.typescriptlang.org',
  },
  { label: 'Next.js', logo: LogoNextjs, url: 'https://nextjs.org' },
  { label: 'React', logo: LogoReact, url: 'https://react.dev' },
  {
    label: 'React Native',
    logo: LogoReactnative,
    url: 'https://reactnative.dev',
  },
  { label: 'Redux', logo: LogoRedux, url: 'https://react-redux.js.org' },
  {
    label: 'HTML',
    logo: LogoHtml,
    url: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
  },
  {
    label: 'CSS',
    logo: LogoCss,
    url: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
  },
  // { label: 'Sass/Scss', logo: LogoSass, url: 'https://sass-lang.com' },
  // { label: 'Bootstrap', logo: LogoBootstrap, url: 'https://getbootstrap.com' },
  {
    label: 'Tailwindcss',
    logo: LogoTailwindcss,
    url: 'https://tailwindcss.com',
  },
  { label: 'Shadcn/uiicon', logo: LogoShadcn, url: 'https://ui.shadcn.com' },
  { label: 'Zod', logo: LogoZod, url: 'https://zod.dev/' },
  { label: 'Prisma ORM', logo: LogoPrisma, url: 'https://prisma.io' },
  { label: 'Laravel', logo: LogoLaravel, url: 'https://laravel.com' },
  {
    label: 'PostgreSQL',
    logo: LogoPostgresql,
    url: 'https://www.postgresql.org',
  },
  { label: 'Git', logo: LogoGit, url: 'https://git-scm.com' },
  {
    label: 'Github Copilot',
    logo: LogoCopilot,
    url: 'https://github.com/features/copilot',
  },
];

export const EXPERIENCES: ExperienceDetails[] = [
  {
    logo: CompanyJuke,
    company: 'Juke Solusi Teknologi',
    position: 'Frontend Developer',
    startDate: new Date(2024, 3),
    endDate: new Date(2025, 1),
    summary: [
      'Enhanced user interface and experience by translating UI/UX designs into responsive code using React Native.',
      'Collaborated with clients to identify requirements and deliver effective technical solutions.',
      'Teamed up with fellow developers to debug and implement complex application functionalities.',
    ],
    technologies: [
      'Javascript',
      'React Native',
      'React Native Paper',
      'HTML',
      'CSS',
    ],
  },
  {
    logo: CompanyCrd,
    company: 'Corporate Room Deal (MG Holiday Group)',
    position: 'Web Developer',
    startDate: new Date(2019, 10),
    endDate: new Date(2023, 3),
    summary: [
      'Developed reusable, modular code for the front-end (React.js) and back-end (Express), increasing development speed.',
      'Maintained robust microservices for a high-traffic hotel search and booking platform.',
      'Led the implementation of UI/UX designs, resulting in a more intuitive and engaging user interface.',
      'Collaborates in a major system migration, utilizing a phased strategy to ensure a seamless transition with minimal downtime.',
    ],
    technologies: [
      'NodeJS',
      'ReactJS',
      'Javascript',
      'Typescript',
      'HTML',
      'CSS',
      'Material UI',
      'Bootstrap',
      'MongoDB',
    ],
  },
  {
    logo: CompanyOphir,
    company: 'Ophir Indonesia',
    position: 'Web Developer',
    startDate: new Date(2018, 11),
    endDate: new Date(2019, 10),
    summary: [
      'Designed and developed a full-scale web application for generating and managing asset inspection reports from the ground up.',
      'Partnered with the Asset Integrity team to define the complete system architecture, including UI, database structure, and technology stack (Laravel).',
      'Deployed and managed the application on an on-premise server, ensuring system robustness and reliability.',
    ],
    technologies: [
      'PHP',
      'Laravel',
      'HTML',
      'CSS',
      'JavaScript',
      'Bootstrap',
      'SQL Server',
    ],
  },
  {
    logo: CompanyEnesis,
    company: 'Enesis Group',
    position: 'Web Developer (Intern)',
    startDate: new Date(2018, 11),
    endDate: new Date(2018, 6),
    summary: [
      'Developed a web application for employee 360-degree reviews, successfully integrating it with existing HR systems.',
      'Gained hands-on experience with the Laravel framework, end-to-end testing, and collaboration with non-technical stakeholders.',
    ],
    technologies: [
      'PHP',
      'Laravel',
      'HTML',
      'CSS',
      'JavaScript',
      'Bootstrap',
      'PostgreSQL',
    ],
  },
];

export const PROJECTS: ProjectDetails[] = [
  {
    name: 'PetSoft',
    description: `
* **Full-Stack Next.js Architecture:** Built a scalable application using Next.js for Server-Side Rendering (SSR), API routes, and middleware-based route protection.
* **Modern, Component-Driven UI:** Developed a responsive and reusable UI with **React**, **Tailwind CSS**, and **Shadcn-ui** for a polished user experience.
* **Optimistic UI for Advanced Forms:** Implemented **Next.js Server Actions** with *useOptimistic* and *useTransition* to create non-blocking forms with instant user feedback.
* **End-to-End Type Safety:** Guaranteed data integrity from the database to the frontend using **TypeScript**, **Prisma ORM**, and **Zod** for schema validation.
* **Secure JWT Authentication:** Engineered a robust, credential-based authentication system with **Next-Auth**, securing user sessions and protected routes with JSON Web Tokens.
* **Reliable Stripe Payment Integration:** Managed the complete payment lifecycle, including a secure and webhook handler for real-time, reliable event processing like order confirmations.
    `,
    url: 'https://fudi-petsoft.vercel.app',
    githubUrl: 'https://github.com/fudi-mahfudin/petsoft',
    previewImage: ProjectPetsoft,
    technologies: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwindcss',
      'Shadcn/ui',
      'Zod',
      'Prisma ORM',
      'Stripe',
      'Next-Auth',
    ],
  },
  {
    name: 'MovieDB',
    description:
      'A mobile application using React Native to fetch and search the latest movies in the world from TMDB (third-party API).',
    // url: "https://github.com/fudi-mahfudin/movie-mobile",
    githubUrl: 'https://github.com/fudi-mahfudin/movie-mobile',
    previewImage: ProjectMovie,
    technologies: [
      'React Native',
      'Expo',
      'TypeScript',
      'Tailwindcss',
      'React Navigation',
    ],
  },
  {
    name: 'Admin Dashboard',
    description: `This is a React with Refine framework of an enterprise-grade internal tool example for "CRM Dashboard".`,
    url: 'https://admin-refine.vercel.app',
    githubUrl: 'https://github.com/fudi-mahfudin/admin-refine',
    previewImage: ProjectAdmin,
    technologies: ['React', 'Refine', 'TypeScript', 'Ant Design', 'GraphQL'],
  },
];
