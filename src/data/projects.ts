export type Project = {
  id: number;
  slug: string;
  title: string;
  description: string;
  image: string;
  tags: string[]; // bisa lebih dari satu, mis. ["GameDev", "Godot", "Team Project"]
  demoUrl?: string; // link deployment/live (Vercel, itch.io, dll) — kosongkan kalau belum ada
  githubUrl: string;
};

export const projects: Project[] = [
  {
    id: 1,
    slug: "pandawara",
    title: "Mas Arief : Ekspedisi Ciliwung",
    description:
      "Step into the journey of a unique project. Here, I unravel the threads of my thought process and exciting steps taken from inception to execution.",
    image: "/images/project/pandawara.png",
    tags: [
      "2026",
      "GameDev",
      "Godot Engine",
      "GDScript",
      "Team Project",
      "Itch.io",
      "Project Leader",
    ],
    demoUrl: "https://p4rtof.itch.io/pandawara-ekspedisi-ciliwung",
    githubUrl: "https://github.com/p4rtof/Pandawara",
  },
  {
    id: 2,
    slug: "klinik",
    title: "Clinic Management System",
    description:
      "Step into the journey of a unique project. Here, I unravel the threads of my thought process and exciting steps taken from inception to execution.",
    image: "/images/project/clinic-system.png",
    tags: [
      "2026",
      "Front End",
      "Website",
      "Next.js",
      "TailwindCSS",
      "Team Project",
      "Vercel",
      "Github",
    ],
    demoUrl: "https://klinik-rpl.vercel.app",
    githubUrl: "https://github.com/p4rtof/klinik-rpl",
  },
  {
    id: 3,
    slug: "krs-ilkomerz",
    title: "KRS Ilkomerz",
    description:
      "Step into the journey of a unique project. Here, I unravel the threads of my thought process and exciting steps taken from inception to execution.",
    image: "/images/project/krs-ilkomerz.png",
    tags: [
      "2026",
      "Fullstack",
      "Next.js",
      "TailwindCSS",
      "Vercel",
      "Github",
      "Personal Project",
    ],
    demoUrl: "https://krs-ilkomerz.vercel.app",
    githubUrl: "https://github.com/p4rtof/krs-ilkomerz",
  },
  {
    id: 4,
    slug: "portfolio",
    title: "Personal Portfolio",
    description:
      "Step into the journey of a unique project. Here, I unravel the threads of my thought process and exciting steps taken from inception to execution.",
    image: "/images/project/portfolio.png",
    tags: [
      "2026",
      "Next.js",
      "TailwindCSS",
      "Vercel",
      "Github",
      "Personal Project",
      "Front End",
    ],
    demoUrl: "https://hell-nah.vercel.app",
    githubUrl: "https://github.com/p4rtof/portfolio",
  },
  {
    id: 5,
    slug: "ip",
    title: "IP Calculator",
    description:
      "Step into the journey of a unique project. Here, I unravel the threads of my thought process and exciting steps taken from inception to execution.",
    image: "/images/project/ip-calculator.png",
    tags: [
      "2026",
      "TailwindCSS",
      "JavaScript",
      "HTML",
      "Front End",
      "Website",
      "Vercel",
      "Github",
      "Personal Project",
    ],
    demoUrl: "https://ip-calculator-one.vercel.app",
    githubUrl: "https://github.com/p4rtof/ip-calculator",
  },
  {
    id: 6,
    slug: "monitoring-log",
    title: "Monitoring Log System",
    description:
      "Step into the journey of a unique project. Here, I unravel the threads of my thought process and exciting steps taken from inception to execution.",
    image: "/images/project/monitoring-log.png",
    tags: [
      "2026",
      "C++",
      "Python",
      "Project Leader",
      "Github",
      "Team Project",
      "Data Structure"
    ],
    // demoUrl: "https://ip-calculator-one.vercel.app",
    githubUrl: "https://github.com/p4rtof/monitoring-log-cpp",
  },
    {
    id: 7,
    slug: "design-afung",
    title: "Monitoring Log System",
    description:
      "Step into the journey of a unique project. Here, I unravel the threads of my thought process and exciting steps taken from inception to execution.",
    image: "/images/project/design-afung.png",
    tags: [
      "2026",
      "UI/UX",
      "Figma",
      "Design",
      "Personal Project",
    ],
    demoUrl: "https://ip-calculator-one.vercel.app",
    githubUrl: "https://github.com/p4rtof/ip-calculator",
  },
];
