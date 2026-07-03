import { TechItem } from "@/types";

export const techStack: Record<string, TechItem[]> = {
  "Front-End": [
    { name: "Next.js", icon: "nextjs.svg" },
    { name: "React.js", icon: "react.svg" },
    { name: "TailwindCSS", icon: "tailwind.svg" },
  ],
  "Backend & Database": [
    { name: "PostgreSQL", icon: "postgresql.svg" },
    { name: "Prisma", icon: "prisma.svg" },
    { name: "Supabase", icon: "supabase.svg" },
  ],
  "Tools & Others": [
    { name: "Git", icon: "git.svg" },
    { name: "GitHub", icon: "github.svg" },
    { name: "Unity (C#)", icon: "unity.svg" },
    { name: "Blender", icon: "blender.svg" },
  ],
};