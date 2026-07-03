import { SiGithub, SiLinkerd } from "@icons-pack/react-simple-icons";
import { Mail } from "lucide-react";

type SocialLinkProps = {
  platform: "github" | "linkedin" | "email";
  url: string;
};

const icons = {
  github: SiGithub,
  linkedin: SiLinkerd,
  email: Mail,
};

export default function SocialLink({ platform, url }: SocialLinkProps) {
  const Icon = icons[platform];

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="p-2 rounded-full border border-gray-700 hover:border-gray-400 text-gray-300 hover:text-white transition-colors"
    >
      <Icon size={20} />
    </a>
  );
}