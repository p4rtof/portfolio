import { techStack } from "@/data/techStack";
import TechBadge from "@/components/ui/TechBadge";

export default function TechStack() {
  return (
    <section id="tech-stack" className="py-20 px-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-white mb-10 text-center">
        Tools & Technologies
      </h2>

      <div className="space-y-8">
        {Object.entries(techStack).map(([category, items]) => (
          <div key={category}>
            <h3 className="text-lg font-semibold text-gray-400 mb-4">
              {category}
            </h3>
            <div className="flex flex-wrap gap-3">
              {items.map((tech) => (
                <TechBadge key={tech.name} name={tech.name} icon={tech.icon} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}