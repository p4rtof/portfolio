import { FaEnvelope, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

export const name = 
"Fadhla"

export const about =
  "I'm a third-year Computer Science student at IPB University, passionate about building immersive and interactive web experiences. I grow through organizational involvement and self-development programs, applying what I learn through hands-on projects — from full-stack web apps to games.";
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
    major: "Bachelor of Computer Science",
    period: "August 2024 - Present",
    description:
      "Pursuing a degree in Computer Science with a focus on software development, covering areas such as web development, data structures, and algorithms. Actively involved in student organizations and research activities alongside coursework."
  }
];

export const experiences = [
  {
    organization: "Himalkom IPB",
    role: "Secretary of Research and Technology Department",
    period: "January 2026 - Present",
    description:
      "Handled department administration and maintained data records using Excel. Wrote and published KomNews articles to cover departmental activities and events. Assisted in organizing and running large-scale surveys conducted by the department.",
    // tags: ["IT Infrastructure", "CI/CD", "Dokploy", "Bun", "Hono", "React", "TypeScript"],
  },
  {
    organization: "ITTODAY IPB",
    role: "Secretary and Administration of GameToday Competition",
    period: "May 2026 - Present",
    description:
      "Managed administration and finances for the competition, including participant registration and data collection. Organized and maintained records in Excel, along with other administrative tasks related to running the competition."
  },
  {
    organization: "Pekan Ilkomerz",
    role: "Staff of Medical Division",
    period: "May 2026 - Present",
    description:
      "Assisted event participants with medical needs during the event. Checked medicine stock and expiration dates, and tracked incoming and outgoing medicine inventory."
  }
];