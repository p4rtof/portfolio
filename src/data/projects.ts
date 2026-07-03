export type Project = {
  id: number;
  slug: string;
  title: string;
  description: string;
  image: string;
  tag: string; // "USE CASE" | "TEMPLATE" | dst
};

export const projects: Project[] = [
  {
    id: 1,
    slug: "paragon",
    title: "Paragon",
    description:
      "Step into the journey of a unique project. Here, I unravel the threads of my thought process and exciting steps taken from inception to execution.",
    image: "/projects/paragon.jpg",
    tag: "USE CASE",
  },
  {
    id: 2,
    slug: "enchant",
    title: "Enchant",
    description:
      "Step into the journey of a unique project. Here, I unravel the threads of my thought process and exciting steps taken from inception to execution.",
    image: "/projects/enchant.jpg",
    tag: "TEMPLATE",
  },
  {
    id: 3,
    slug: "lumen",
    title: "Lumen",
    description:
      "Step into the journey of a unique project. Here, I unravel the threads of my thought process and exciting steps taken from inception to execution.",
    image: "/projects/lumen.jpg",
    tag: "USE CASE",
  },
  {
    id: 4,
    slug: "nova",
    title: "Nova",
    description:
      "Step into the journey of a unique project. Here, I unravel the threads of my thought process and exciting steps taken from inception to execution.",
    image: "/projects/nova.jpg",
    tag: "TEMPLATE",
  },
];