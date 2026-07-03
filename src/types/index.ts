export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  techTags: string[];
  demoUrl?: string;
  repoUrl?: string;
}

export interface TechItem {
  name: string;
  icon: string; // nama file icon di /public/icons/tech
}

export interface Experience {
  role: string;
  organization: string;
  period?: string;
  description: string;
}
