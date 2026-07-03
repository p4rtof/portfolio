type ExperienceItemProps = {
  role: string;
  organization: string;
  period?: string;
  description: string;
};

export default function ExperienceItem({
  role,
  organization,
  period,
  description,
}: ExperienceItemProps) {
  return (
    <div className="border-l-2 border-gray-700 pl-6 relative">
      <div className="absolute w-3 h-3 bg-gray-500 rounded-full -left-[7px] top-1" />
      <h3 className="text-lg font-semibold text-white">{role}</h3>
      <p className="text-sm text-gray-400 mb-1">
        {organization} {period && `• ${period}`}
      </p>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  );
}