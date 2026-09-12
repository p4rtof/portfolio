import { FaEnvelope, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

export const name = 
"Fadhla"

export const about = 
  "Mahasiswa S1 Ilmu Komputer di IPB University yang tertarik membangun pengalaman web yang immersive dan interaktif, sambil terus belajar dari organisasi dan program pengembangan diri.";

// satu sumber link Gmail compose, dipakai di icon envelope maupun link email besar
export const emailHref =
  "https://mail.google.com/mail/?view=cm&fs=1&to=fadhla153@gmail.com";

export const skills = [
  { name: "C++", icon: "cplusplus/cplusplus-original" },
  { name: "Java", icon: "java/java-original" },
  { name: "Scala", icon: "scala/scala-original" },
  { name: "TypeScript", icon: "typescript/typescript-original" },
  { name: "JavaScript", icon: "javascript/javascript-original" },
  { name: "HTML5", icon: "html5/html5-original" },
  { name: "CSS3", icon: "css3/css3-original" },
  { name: "Next.js", icon: "nextjs/nextjs-original" },
  { name: "React", icon: "react/react-original" },
  { name: "Tailwind CSS", icon: "tailwindcss/tailwindcss-original" },
  { name: "Supabase", icon: "supabase/supabase-original" },
  { name: "PostgreSQL", icon: "postgresql/postgresql-original" },
  { name: "Git", icon: "git/git-original" },
  { name: "Figma", icon: "figma/figma-original" },
  { name: "Github", icon: "github/github-original" },
];

export const socials = [
  { icon: FaLinkedin, href: "https://linkedin.com/in/fadhla14" },
  { icon: FaGithub, href: "https://github.com/p4rtof" },
  { icon: FaInstagram, href: "https://instagram.com/p4rtof" },
  { icon: FaEnvelope, href: emailHref }, 
];

export const academic = [
  {
    univ: "IPB University",
    major : "Bachelor of Computer Science",
    period : "August 2024 -  Present",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  }
]

export const experiences = [
  {
    organization: "Himalkom IPB",
    role: "Secretary of Research and Technology Department",
    period: "January 2026 - Present",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    // tags: ["IT Infrastructure", "CI/CD", "Dokploy", "Bun", "Hono", "React", "TypeScript"],
  },
  {
    organization: "ITTODAY IPB",
    role: "Secretary and Administration of GameToday Competition",
    period: "May 2026 - Present",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
    {
    organization: "Pekan Ilkomerz",
    role: "Staff of Medical Division",
    period: "May 2026 - Present",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  }
];