import Link from 'next/link';
import { projects } from '@/data/projects';
import ProjectCard from '@/components/ui/ProjectCard';

export default function ProjectsPage() {
  return (
    <main className="min-h-screen w-full bg-[#fafafa] bg-[radial-gradient(#eaeaea_2px,transparent_1px)] [background-size:32px_32px] px-6 py-16">
      <div className="max-w-3xl mx-auto">
        <p className="font-playpen-sans text-sm text-neutral-500 mb-6">
          <Link href="/" className="hover:text-neutral-800">Home</Link>
          {' / '}
          <span className="text-violet-500">Projects</span>
        </p>

        <h1 className="font-playpen-sans text-4xl md:text-5xl font-extrabold text-neutral-800 mb-3">
          Projects
        </h1>
        <p className="font-playpen-sans text-neutral-500 mb-16">
          A selection of my work.
        </p>

        <div className="flex flex-col gap-10">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} {...project} rotate={i % 2 === 0 ? -1 : 1} />
          ))}
        </div>
      </div>
    </main>
  );
}