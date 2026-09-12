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
    title: "Learn AI Basics",
    issuer: "Dicoding Indonesia",
    date: "August 2026",
    credentialUrl: "https://www.dicoding.com/certificates/GRX50GE4RZ0M",
    skills: ["AI", "Machine Learning:", "Data Management", "Deep Learning"],
  },
  {
    id: 2,
    title: "Introduction to Programming Logic (Programming Logic 101)",
    issuer: "Dicoding Indonesia",
    date: "August 2026",
    credentialUrl: "https://www.dicoding.com/certificates/JMZVLM9DOXN9",
    skills: ["Logic Gates", "Algorithms", "Computational Thinking", "Problem Solving"],
  },
  {
    id: 3,
    title: "Learn the Basics of Web Programming",
    issuer: "Dicoding Indonesia",
    date: "August 2026",
    credentialUrl: "https://www.dicoding.com/certificates/KEXLM372RZG2",
    skills: ["HTML", "CSS", "Flexbox"],
  },
    {
    id: 4,
    title: "Learn to Create Front-End Web for Beginners",
    issuer: "Dicoding Indonesia",
    date: "September 2026",
    credentialUrl: "https://www.dicoding.com/certificates/6RPNO6Q25X2M",
    skills: ["Browser Object Model", "Document Object Model", "Events", "Web Storage"],
  },
    {
    id: 5,
    title: "Learn JavaScript Programming Basics",
    issuer: "Dicoding Indonesia",
    date: "Juli 2026",
    credentialUrl: "https://www.dicoding.com/certificates/EYX4QWNQWPDL",
    skills: ["Syntax", "Function", "OOP", "Functional Programming", "Asynchronous Process", "Code Quality"],
  },
    {
    id: 6,
    title: "Learn Git Basics with GitHub",
    issuer: "Dicoding Indonesia",
    date: "August 2026",
    credentialUrl: "https://www.dicoding.com/certificates/N9ZO0D398XG5",
    skills: ["Git", "Github", "OOP", "Git Branches", "Team Collaboration"],
  },
];