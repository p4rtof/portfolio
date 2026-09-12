export type Certification = {
  id: number;
  title: string;
  issuer: string;
  date: string; // format: "Month YYYY"
  credentialUrl: string;
  skills: string[];
};

export const certifications: Certification[] = [
  {
    id: 1,
    title: "Front-End Web Development with React",
    issuer: "Dicoding Indonesia",
    date: "March 2025",
    credentialUrl: "https://www.dicoding.com/certificates/example1",
    skills: ["React.js", "Component Design", "State Management", "REST API"],
  },
  {
    id: 2,
    title: "JavaScript Algorithms and Data Structures",
    issuer: "freeCodeCamp",
    date: "November 2024",
    credentialUrl: "https://www.freecodecamp.org/certification/example2",
    skills: ["JavaScript", "Algorithms", "Data Structures", "Problem Solving"],
  },
  {
    id: 3,
    title: "Belajar Dasar Pemrograman Web",
    issuer: "Dicoding Indonesia",
    date: "August 2024",
    credentialUrl: "https://www.dicoding.com/certificates/example3",
    skills: ["HTML", "CSS", "JavaScript", "Responsive Design"],
  },
];