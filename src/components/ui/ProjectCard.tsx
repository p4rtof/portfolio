import { Project } from "@/types";
import Image from "next/image";

export default function ProjectCard({
  title,
  description,
  image,
  techTags,
  demoUrl,
  repoUrl,
}: Project) {
  return (
    <div className="rounded-xl overflow-hidden border border-gray-700 bg-gray-900 hover:border-gray-500 transition-colors group">
      <div className="relative w-full h-48 bg-gray-800">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="p-5">
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-400 text-sm mb-4">{description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {techTags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-1 rounded bg-gray-800 text-gray-300"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          {demoUrl && (
            <a   
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-400 hover:underline"
            >
              Live Demo →
            </a>
          )}
          {repoUrl && (
            <a   
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-400 hover:underline"
            >
              View Code →
            </a>
          )}
        </div>
      </div>
    </div>
  );
}