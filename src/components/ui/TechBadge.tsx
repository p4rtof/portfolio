import { TechItem } from "@/types";

export default function TechBadge({ name }: TechItem) {
  return (
    <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-700 bg-gray-800/50 hover:bg-gray-800 hover:border-gray-500 transition-colors">
      <span className="text-sm font-medium text-gray-200">{name}</span>
    </div>
  );
}