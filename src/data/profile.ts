import { FaEnvelope, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

export const name = 
"Aaron"

export const about = 
  "Mahasiswa S1 Ilmu Komputer di IPB University yang tertarik membangun pengalaman web yang immersive dan interaktif, sambil terus belajar dari organisasi dan program pengembangan diri.";

// satu sumber link Gmail compose, dipakai di icon envelope maupun link email besar
export const emailHref =
  "https://mail.google.com/mail/?view=cm&fs=1&to=fadhla153@gmail.com";

export const skills = [
  "C++", "C", "Java", "Scala", "HTML", "CSS","JavaScript", "OOP",
  "Next.js",
  "React.js",
  "TailwindCSS",
  "PostgreSQL","Godot Engine"
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
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
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