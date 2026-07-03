export type Project = {
  id: number;
  slug: string;
  title: string;
  description: string;
  image: string;
  tags: string[]; // bisa lebih dari satu, mis. ["GameDev", "Godot", "Team Project"]
};

export const projects: Project[] = [
  {
    id: 1,
    slug: "pandawara",
    title: "Ekspedisi Ciliwung",
    description:
      "Step into the journey of a unique project. Here, I unravel the threads of my thought process and exciting steps taken from inception to execution.",
    image: "/images/project/pandawara.png",
    tags: ["GameDev", "Godot", "Team Project"],
  },
  {
    id: 2,
    slug: "enchant",
    title: "Enchant",
    description:
      "Step into the journey of a unique project. Here, I unravel the threads of my thought process and exciting steps taken from inception to execution.",
    image: "/projects/enchant.jpg",
    tags: ["Template"],
  },
  {
    id: 3,
    slug: "lumen",
    title: "Lumen",
    description:
      "Step into the journey of a unique project. Here, I unravel the threads of my thought process and exciting steps taken from inception to execution.",
    image: "/projects/lumen.jpg",
    tags: ["Use Case"],
  },
  {
    id: 4,
    slug: "nova",
    title: "Nova",
    description:
      "Step into the journey of a unique project. Here, I unravel the threads of my thought process and exciting steps taken from inception to execution.",
    image: "/projects/nova.jpg",
    tags: ["Template"],
  },
];