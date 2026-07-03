import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "clinic-management-system",
    title: "Clinic Management System",
    description:
      "Sistem manajemen klinik dengan dashboard khusus untuk admin dan dokter, mencakup pengelolaan jadwal, rekam medis, dan data pasien.",
    image: "/images/projects/clinic-system.png",
    techTags: ["Next.js", "PostgreSQL", "Prisma"],
    demoUrl: "https://demo-link.com", // ganti atau hapus kalau belum ada
    repoUrl: "https://github.com/username/clinic-system",
  },
  {
    id: "gkv-data-visualization",
    title: "Data Visualization (GKV)",
    description:
      "Visualisasi data lingkungan interaktif menggunakan Plotly dan Canvas untuk menampilkan tren dan pola data secara real-time.",
    image: "/images/projects/gkv-dataviz.png",
    techTags: ["Plotly", "Canvas", "JavaScript"],
    repoUrl: "https://github.com/username/gkv-dataviz",
  },
  {
    id: "flappy-bird-clone",
    title: "Flappy Bird Clone",
    description:
      "Game 2D klasik yang dibangun ulang dengan fokus pada mekanik collision detection dan sistem input yang responsif.",
    image: "/images/projects/flappy-bird.png",
    techTags: ["Unity", "C#"],
    repoUrl: "https://github.com/username/flappy-bird-clone",
  },
];