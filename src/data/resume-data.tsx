import type { ResumeData } from "@/lib/types";

export const RESUME_DATA: ResumeData = {
  name: "Arman Shakir",
  initials: "AS",
  location: "Manchester, UK",
  locationLink: "https://www.google.com/maps/place/Manchester,+UK",
  about: "Software Engineer passionate about creating intuitive, user-friendly web applications.",
  summary: (
    <>
      Software Engineer with hands-on experience building full-stack web apps
      using React, Firebase, Node.js, Vue, and Python. Comfortable working on both
      frontend interfaces and backend logic. Continuously learning and improving
      through self-driven projects.
    </>
  ),
  avatarUrl: "https://avatars.githubusercontent.com/u/78878938?v=4",
  personalWebsiteUrl: "https://resume-arman.vercel.app/",
  contact: {
    email: "arman-101@hotmail.com",
    tel: "",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/arman-101",
        icon: "github",
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/arman-shakir-b3aa91270/",
        icon: "linkedin",
      },
    ],
  },
  education: [
    {
      school: "Manchester Metropolitan University",
      degree: "BSc in Software Engineering (2:1)",
      start: "2022",
      end: "2025",
    },
  ],
  work: [],
  skills: [
    "HTML", "CSS", "JavaScript", "React", "Vue", "Tailwind CSS", "Bootstrap",
    "Node.js", "Express", "Firebase", "Supabase", "Python", "Java", "Git", 
    "GitHub", "Vite", "Webpack", "Netlify", "Render"
  ],
  projects: [
    {
      title: "WikiHistory",
      techStack: ["HTML", "CSS", "JavaScript", "API"],
      description: "A static website for exploring historical events with clean UI.",
      link: {
        label: "Live Site",
        href: "https://arman-101.github.io/wiki/",
      },
    },
    {
      title: "CodeQuizzer",
      techStack: ["React", "Tailwind CSS", "Firebase"],
      description: "A coding quiz web app with real-time score tracking and authentication.",
      link: {
        label: "codequizwebapp.web.app",
        href: "https://codequizwebapp.web.app/",
      },
    },
    {
      title: "PokeMemory",
      techStack: ["React", "Netlify", "API", "CSS"],
      description: "Memory game built with Pokémon API and styled using Tailwind.",
      link: {
        label: "pokemon-react-arman.netlify.app",
        href: "https://pokemon-react-arman.netlify.app/",
      },
    },
    {
      title: "CV Maker",
      techStack: ["React", "Tailwind CSS"],
      description: "Simple CV generator with real-time preview functionality.",
      link: {
        label: "react-cv-arman.netlify.app",
        href: "https://react-cv-arman.netlify.app/",
      },
    },
    {
      title: "PalettePicker",
      techStack: ["React", "Firebase", "Tailwind CSS"],
      description: "A color palette creation and sharing tool inspired by ColorHunt.",
      link: {
        label: "color-palette-91a8d.web.app",
        href: "https://color-palette-91a8d.web.app/",
      },
    },
    {
      title: "Posting Full Stack Web App",
      techStack: ["Vue", "Node.js", "Express", "REST API"],
      description: "A full-stack blog app built with Vue frontend and Express backend.",
      link: {
        label: "posting-full-stack-web-app.netlify.app",
        href: "https://posting-full-stack-web-app.netlify.app/",
      },
    },
    {
      title: "CodeTeacher",
      techStack: ["Python"],
      description: "Python project aimed at helping beginners learn basic coding through lessons.",
      link: {
        label: "GitHub Repo",
        href: "https://github.com/arman-101/CodeTeacher",
      },
    },
    {
      title: "Etsy Profit Calculator",
      techStack: ["Python"],
      description: "Script to calculate profits on Etsy/Printify items including shipping and fees.",
      link: {
        label: "GitHub Repo",
        href: "https://github.com/arman-101/etsy-printify-profit-calculator",
      },
    },
    {
      title: "Password Manager",
      techStack: ["Python"],
      description: "A secure local password manager built with Python.",
      link: {
        label: "GitHub Repo",
        href: "https://github.com/arman-101/password-manager",
      },
    },
  ],
} as const;
